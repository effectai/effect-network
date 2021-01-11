#include "effect-proposals.hpp";
#include "../effect-dao/effect-dao-shared.hpp";

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
                       eosio::extended_asset proposal_cost) {
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
  _config.set(conf, _self);
};

void proposals::createprop(eosio::name author,
                           std::vector<pay_entry> pay,
                           std::string content_hash,
                           uint8_t category,
                           uint16_t cycle,
                           std::optional<eosio::checksum256> transaction_hash) {
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
                         p.transaction_hash = transaction_hash;
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

void proposals::executeprop() {

}

void proposals::processprop(uint64_t id) {
  proposal_table prop_tbl(_self, _self.value);
  auto& prop = prop_tbl.get(id, "proposal does not exist");
  auto cur_cycle = _config.get().current_cycle;
  if (cur_cycle <= prop.cycle)
    return;
  // process results of prop to either Accepted or Rejected
}

void proposals::updateprop(uint64_t id,
                           std::vector<pay_entry> pay,
                           std::string content_hash,
                           uint8_t category,
                           uint16_t cycle,
                           std::optional<eosio::checksum256> transaction_hash) {
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

  prop_tbl.modify(prop,
                  eosio::same_payer,
                  [&](auto& p)
                  {
                    p.state = proposals::Pending;
                    p.cycle = cycle;
                    p.pay = pay;
                    p.content_hash = content_hash;
                    p.category = category;
                    p.transaction_hash = transaction_hash;
                  });
}

void proposals::addvote(eosio::name voter, uint64_t prop_id, uint8_t vote_type) {
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
  auto rank = dao::get_rank(_config.get().dao_contract, voter);
  uint32_t vote_weight = dao::get_vote_power(rank);

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
                     });

    prop_tbl.modify(prop,
                    voter, //eosio::same_payer,
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
                    voter, //eosio::same_payer,
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
                        });
  }
}

void proposals::addproof() {
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
  if (to == get_self() && memo == RESERVATION_MEMO) {
    auto conf = _config.get();
    eosio::extended_asset proposal_cost = conf.proposal_cost;

    // validate the asset symbol
    auto sym = quantity.symbol;
    auto raw_sym_code = sym.code().raw();
    eosio::check(sym.is_valid(), "invalid symbol name");

    // check if user already has a proposal reserved
    reservation_table reservation_tbl(_self, _self.value);
    auto existing = reservation_tbl.find(from.value);
    eosio::check(existing == reservation_tbl.end(),
                 "you already have a proposal reserved");

    if (proposal_cost.contract == get_first_receiver()) {
      // validate the contract that is staking
      // redundant check that is also in the if statement above
      eosio::check(proposal_cost.contract == get_first_receiver(),
                   "wrong token contract");

      eosio::check(proposal_cost.quantity == quantity, "wrong amount");

      reservation_tbl.emplace(_self, [&](auto& r) { r.owner = from; });
    }
  }
}

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (action == "transfer"_n.value) {
    execute_action<proposals>(eosio::name(receiver), eosio::name(code),
                              &proposals::transfer_handler);
  } else if (code == receiver) {
    switch(action) {
      EOSIO_DISPATCH_HELPER(proposals, (init)(update)(addcycle)(createprop)(updateprop)(addvote)
                            (cycleupdate));
    }
  }
}
