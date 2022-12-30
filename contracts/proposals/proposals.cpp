#include "proposals.hpp";
#include "../dao/dao-shared.hpp";

void proposals::init(uint32_t cycle_duration_sec,
                     uint32_t cycle_voting_duration_sec,
                     eosio::extended_asset proposal_cost,
                     uint32_t quorum,
                     eosio::time_point_sec first_cycle_start_time,
                     eosio::name dao_contract) {
  require_auth(_self);

  eosio::check(cycle_duration_sec > 0, "cycle duration must be positive");
  eosio::check(cycle_duration_sec > cycle_voting_duration_sec,
               "cycle duration must be longer than voting duration");

  eosio::check(!_config.exists(), "already initialized");

  _config.set(config{cycle_duration_sec,
                     cycle_voting_duration_sec,
                     proposal_cost,
                     quorum,
                     0,
                     dao_contract}, _self);

  cycle_table cycle_tbl(_self, _self.value);
  eosio::check(cycle_tbl.begin() == cycle_tbl.end(),
               "the cycle table is not empty");

  cycle_tbl.emplace(_self,
                    [&](auto& c)
                    {
                      c.id = 0;
                      c.quorum = quorum;
                      c.start_time = first_cycle_start_time;
                      c.budget = std::vector<eosio::extended_asset>();
                    });
};

void proposals::update(uint32_t cycle_duration_sec,
                       uint32_t cycle_voting_duration_sec,
                       uint32_t quorum,
                       eosio::extended_asset proposal_cost,
                       std::optional<uint16_t> current_cycle) {
  require_auth(_self);

  eosio::check(cycle_duration_sec > 0, "cycle duration must be positive");
  eosio::check(cycle_duration_sec > cycle_voting_duration_sec,
               "cycle duration must be longer than voting duration");

  eosio::check(_config.exists(), "not yet initialized");

  auto conf = _config.get();
  conf.cycle_duration_sec = cycle_duration_sec;
  conf.cycle_voting_duration_sec = cycle_voting_duration_sec;
  conf.quorum = quorum;
  conf.proposal_cost = proposal_cost;
  if (current_cycle.has_value()) {
    conf.current_cycle = current_cycle.value();
  }
  _config.set(conf, _self);
};

void proposals::createprop(eosio::name author,
                           std::vector<pay_entry> pay,
                           std::string content_hash,
                           uint8_t category,
                           uint16_t cycle,
                           std::optional<eosio::name> msig) {
  eosio::require_auth(author);
  dao::require_member(_config.get().dao_contract, author);

  // if there is a proposal cost, the user must have bought a reservation
  if (_config.get().proposal_cost.quantity.amount > 0) {
    reservation_table reservation_tbl(_self, _self.value);
    auto it = reservation_tbl.find(author.value);
    eosio::check(it != reservation_tbl.end(), "no proposal reserved");
    reservation_tbl.erase(it);
  }

  auto cur_cycle = _config.get().current_cycle;

  eosio::check(cycle == 0 || cycle > cur_cycle, "cycle must be in the future");

  proposal_table proposal_tbl(_self, _self.value);

  auto id = proposal_tbl.available_primary_key();
  std::map<uint8_t, uint32_t> vote_counts = {{Abstain, 0}, {No, 0}, {Yes, 0}};

  // if this is an ATP we will store it's hash to avoid tempering
  checksum256 msig_transaction_hash;
  if (msig.has_value()) {
    eosiomsig::proposals props("eosio.msig"_n, author.value);
    auto& msig_prop = props.get(msig.value().value, "eosio.msig not found");
    auto packed_tx = msig_prop.packed_transaction;
    msig_transaction_hash = sha256(packed_tx.data(), packed_tx.size());
  }

  proposal_tbl.emplace(author,
                       [&](auto& p)
                       {
                         p.id = id;
                         p.author = author;
                         p.content_hash = content_hash;
                         p.pay = pay;
                         p.vote_counts = vote_counts;
                         p.state = proposals::Pending;
                         p.cycle = cycle;
                         p.category = category;
                         p.proof_hash = std::nullopt;
                         p.msig.reset();
                         if (msig.has_value()) {
                           p.transaction_hash.emplace(msig_transaction_hash);
                           p.msig.emplace(msig.value());
                         }
                       });
}

void proposals::addcycle(eosio::time_point_sec start_time,
                         std::vector<eosio::extended_asset> budget) {
  require_auth(_self);

  cycle_table cycle_tbl(_self, _self.value);
  uint64_t cycle_id = cycle_tbl.available_primary_key();

  cycle_tbl.emplace(_self,
                    [&](auto& c)
                    {
                      c.id = cycle_id;
                      c.quorum = _config.get().quorum;
                      c.start_time = start_time;
                      c.budget = budget;
                    });
}

void proposals::updatecycle(uint64_t id,
                            eosio::time_point_sec start_time,
                            std::vector<eosio::extended_asset> budget) {
  require_auth(_self);

  cycle_table cycle_tbl(_self, _self.value);
  auto& cycle = cycle_tbl.get(id, "cycle is not defined");
  eosio::check(!cycle.state.has_value() ||
               cycle.state.value() == proposals::CyclePending,
               "cycle already processed");

  cycle_tbl.modify(cycle, _self, [&](auto& c) { c.start_time = start_time; c.budget = budget; });
}

void proposals::processcycle(eosio::name account, uint64_t id) {
  // check that cycle is in the past and not yet processed
  eosio::check(id < _config.get().current_cycle, "cycle is not in the past");
  cycle_table cycle_tbl(_self, _self.value);
  auto& cycle = cycle_tbl.get(id, "cycle is not defined");
  eosio::check(!cycle.state.has_value() ||
               cycle.state.value() == proposals::CyclePending,
               "cycle already processed");

  // we need to track the available and currently spent budget per asset
  std::map<eosio::extended_symbol, eosio::extended_asset> budget_map;
  for (auto b : cycle.budget) {
    auto sym = b.get_extended_symbol();
    auto res = budget_map.insert({sym, b});
    if (!res.second) { res.first->second = budget_map[sym] + b; }
  }
  std::map<eosio::extended_symbol, eosio::extended_asset> spent;
  uint64_t total_votes = 0;

  // loop through all proposals in the cycle
  proposal_table prop_tbl(_self, _self.value);
  auto by_cycle_idx = prop_tbl.get_index<"cycle"_n>();
  auto itr_start = by_cycle_idx.lower_bound(id);
  auto itr_end = by_cycle_idx.upper_bound(id);

  for (; itr_start != itr_end; itr_start++) {
    auto& prop = *itr_start;

    uint32_t yes_votes = prop.vote_counts.at(proposals::Yes);
    uint32_t no_votes = prop.vote_counts.at(proposals::No);
    uint32_t abstain_votes = prop.vote_counts.at(proposals::Abstain);

    total_votes += yes_votes + no_votes + abstain_votes;

    if (prop.state != proposals::Pending)
      continue;

    bool approved = yes_votes > no_votes &&
      yes_votes + no_votes + abstain_votes > cycle.quorum;

    // TODO: support multiple proposal pays
    // std::map<eosio::extended_symbol, eosio::extended_asset> pay_map;
    // for (auto p : prop.pay) {
    //   auto asset = std::get<0>(p);
    //   auto sym = asset.get_extended_symbol();
    //   auto res = pay_map.insert({sym, asset});
    //   if (!res.second) { res.first->second = pay_map[sym] + asset; }
    // }

    // for now we only support 1 asset to be paid out
    if (approved == true) {
      auto prop_pay = std::get<0>(prop.pay[0]);
      auto prop_sym = prop_pay.get_extended_symbol();

      if (budget_map.count(prop_sym) <= 0) {
        approved = false;
      } else if (spent.count(prop_sym) > 0) {
        if ((spent[prop_sym] + prop_pay).quantity > budget_map[prop_sym].quantity)
          approved = false;
        else
          spent[prop_sym] += prop_pay;
      } else {
        if (prop_pay.quantity > budget_map[prop_sym].quantity)
          approved = false;
        else
          spent[prop_sym] = prop_pay;
      }
    }

    prop_tbl.modify(prop,
                    eosio::same_payer,
                    [&](auto& p)
                    {
                      if (approved == true)
                        p.state = proposals::Accepted;
                      else
                        p.state = proposals::Rejected;
                    });
  }

  cycle_tbl.modify(cycle,
                   account,
                   [&](auto& c)
                   {
                     std::vector<eosio::extended_asset> spent_vec;
                     for (auto const& s : spent)
                       spent_vec.push_back(s.second);
                     c.spent.emplace(spent_vec);
                     c.state.emplace(proposals::CycleFinalized);
                     c.total_vote_weight.emplace(total_votes);
                   });
}

void proposals::updateprop(uint64_t id,
                           std::vector<pay_entry> pay,
                           std::string content_hash,
                           uint8_t category,
                           uint16_t cycle,
                           std::optional<eosio::name> msig) {
  auto cur_cycle = _config.get().current_cycle;

  eosio::check(cycle == 0 || cycle > cur_cycle, "cycle must be in the future");

  proposal_table prop_tbl(_self, _self.value);
  auto& prop = prop_tbl.get(id, "proposal does not exist");

  eosio::require_auth(prop.author);
  dao::require_member(_config.get().dao_contract, prop.author);

  // a proposals can only be updated if either:
  // - the current cycle is genesis
  // - it's in draft (cycle 0)
  // - it's assigned to a future cycle

  eosio::check(cur_cycle == 0 ||
               prop.cycle == 0 ||
               prop.cycle > cur_cycle,
               "proposal is still active or not yet rejected");

  // if this is an ATP we will store it's hash to avoid tempering
  checksum256 msig_transaction_hash;
  if (msig.has_value()) {
    eosiomsig::proposals props("eosio.msig"_n, prop.author.value);
    auto& msig_prop = props.get(msig.value().value, "eosio.msig not found");
    auto packed_tx = msig_prop.packed_transaction;
    msig_transaction_hash = sha256(packed_tx.data(), packed_tx.size());
  }

  prop_tbl.modify(prop,
                  eosio::same_payer,
                  [&](auto& p)
                  {
                    p.state = proposals::Pending;
                    p.cycle = cycle;
                    p.pay = pay;
                    p.content_hash = content_hash;
                    p.category = category;
                    if (msig.has_value()) {
                      p.msig.emplace(msig.value());
                      p.transaction_hash.emplace(msig_transaction_hash);
                    } else {
                      p.msig.reset();
                      p.transaction_hash.reset();
                    }
                  });
}

void proposals::hgrejectprop(uint64_t id) {
  eosio::require_auth(_self);

  proposal_table prop_tbl(_self, _self.value);
  auto& prop = prop_tbl.get(id, "proposal does not exist");

  // the proposal has to be accepted or pending
  eosio::check(prop.state == proposals::Pending || prop.state == proposals::Accepted,
               "proposal is already executed");

  auto conf = _config.get();

  cycle_table cycle_tbl(_self, _self.value);
  auto& cur_cycle = cycle_tbl.get(conf.current_cycle, "this cycle is not defined");
  auto cur_time_sec = time_point_sec(now());

  // only proposals that already passed the voting period can be rejected
  eosio::check((prop.cycle > 0 && conf.current_cycle > prop.cycle) ||
               (conf.current_cycle == prop.cycle &&
                cur_time_sec >= cur_cycle.start_time + conf.cycle_voting_duration_sec),
               "voting period not ended");

  prop_tbl.modify(prop,
                  eosio::same_payer,
                  [&](auto& p)
                  {
                    p.state = proposals::Rejected;
                  });
}

void proposals::executeprop(uint64_t id) {
  require_auth(_self);

  proposal_table prop_tbl(_self, _self.value);
  auto& prop = prop_tbl.get(id, "proposal does not exist");

  eosio::check(prop.state == proposals::Accepted, "proposal is not accepted");

  prop_tbl.modify(prop, eosio::same_payer, [&](auto& p) { p.state = proposals::Executed; });

  // if the is an ATP then approve the eosio.msig
  if (prop.transaction_hash) {
    eosio::permission_level dao_perm{_self, "dao"_n};
    action(dao_perm,
           "eosio.msig"_n,
           "approve"_n,
           std::make_tuple(prop.author, prop.msig, dao_perm, prop.transaction_hash.value()))
      .send();
  }

  for (auto pay : prop.pay) {
    eosio::extended_asset asset = std::get<0>(pay);
    eosio::time_point_sec lock = std::get<1>(pay);

    eosio::check(lock <= time_point_sec(now()), "payment is still locked");

    action(permission_level{_self, "dao"_n},
           asset.contract,
           "transfer"_n,
           std::make_tuple(_self, prop.author, asset.quantity,
                           "proposal " + std::to_string(prop.id)))
      .send();
  }
}

void proposals::addvote(eosio::name voter, uint64_t prop_id, uint8_t vote_type,
                        std::optional<std::string> comment_hash) {
  require_auth(voter);
  dao::require_member(_config.get().dao_contract, voter);

  vote_table vote_tbl(_self, _self.value);
  auto vote_tbl_idx = vote_tbl.get_index<"composite"_n>();
  uint128_t comp_key = (uint128_t{prop_id} << 64) | voter.value;
  auto existing = vote_tbl_idx.find(comp_key);

  auto conf = _config.get();

  proposal_table prop_tbl(_self, _self.value);
  auto& prop = prop_tbl.get(prop_id, "proposal does not exist");

  // check we're within votable timeframe
  cycle_table cycle_tbl(_self, _self.value);
  auto& cur_cycle = cycle_tbl.get(conf.current_cycle, "this cycle is not defined");
  auto cur_time_sec = time_point_sec(now());

  eosio::check(cur_time_sec >= cur_cycle.start_time &&
               cur_time_sec <= cur_cycle.start_time + conf.cycle_voting_duration_sec,
               "not in voting period");

  eosio::check(prop.state == proposals::Pending &&
               prop.cycle > 0 &&
               prop.cycle == conf.current_cycle,
               "proposal is not active");

  // calculate vote weight
  uint32_t vote_weight = dao::get_vote_power(_config.get().dao_contract, voter);

  if (existing == vote_tbl_idx.end()) {
    // insert a new vote
    vote_tbl.emplace(voter,
                     [&](auto& v)
                     {
                       v.id = vote_tbl.available_primary_key();
                       v.voter = voter;
                       v.proposal_id = prop_id;
                       v.type = vote_type;
                       v.weight = vote_weight;
                       v.comment_hash = comment_hash;
                     });

    prop_tbl.modify(prop,
                    eosio::same_payer,
                    [&](auto& p)
                    {
                      p.vote_counts[vote_type] += vote_weight;
                    });
  } else {
    // update an exisitng vote by account

    // ensure there is no underflow (this should never happen)
    eosio::check(prop.vote_counts.at(existing->type) >= existing->weight,
                 "vote count underflow");
    prop_tbl.modify(prop,
                    eosio::same_payer,
                    [&](auto& p)
                    {
                      p.vote_counts[existing->type] -= existing->weight;
                      p.vote_counts[vote_type] += vote_weight;
                    });

    vote_tbl_idx.modify(existing,
                        eosio::same_payer,
                        [&](auto& v)
                        {
                          v.type = vote_type;
                          v.weight = vote_weight;
                          v.comment_hash = comment_hash;
                        });
  }
}

void proposals::cycleupdate() {
  eosio::check(_config.exists(), "not initialized");

  auto conf = _config.get();
  auto cycle_id = conf.current_cycle;
  cycle_table cycle_tbl(_self, _self.value);
  auto& cur_cycle = cycle_tbl.get(cycle_id, "this cycle is not defined");
  auto cur_time_sec = time_point_sec(now());

  if (cur_time_sec >= cur_cycle.start_time + conf.cycle_duration_sec) {
    auto& next_cycle = cycle_tbl.get(cycle_id, "next cycle is not defined");
    cycle_tbl.modify(next_cycle,
                     eosio::same_payer,
                     [&](auto c) { c.start_time = cur_time_sec; });
    conf.current_cycle = cycle_id + 1;
    _config.set(conf, _self);
  }
}

void proposals::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    // validate the asset symbol
    auto sym = quantity.symbol;
    auto raw_sym_code = sym.code().raw();
    eosio::check(sym.is_valid(), "invalid symbol name");

    if (memo == RESERVATION_MEMO) {
      auto conf = _config.get();
      eosio::extended_asset proposal_cost = conf.proposal_cost;

      // check if user already has a proposal reserved
      reservation_table reservation_tbl(_self, _self.value);
      auto existing = reservation_tbl.find(from.value);
      eosio::check(existing == reservation_tbl.end(),
                   "you already have a proposal reserved");

      if (proposal_cost.contract == get_first_receiver()) {
        // redundant check that is also in the if statement above
        eosio::check(proposal_cost.contract == get_first_receiver(),
                     "wrong token contract");

        eosio::check(proposal_cost.quantity == quantity, "wrong amount");

        reservation_tbl.emplace(_self, [&](auto& r) { r.owner = from; });
      }
    }
  }
}

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (action == "transfer"_n.value) {
    execute_action<proposals>(eosio::name(receiver), eosio::name(code),
                              &proposals::transfer_handler);
  } else if (code == receiver) {
    switch(action) {
      EOSIO_DISPATCH_HELPER(proposals, (init)(update)(addcycle)(updatecycle)(createprop)
                            (updateprop)(addvote)(cycleupdate)(processcycle)(executeprop)
                            (hgrejectprop));
    }
  }
}
