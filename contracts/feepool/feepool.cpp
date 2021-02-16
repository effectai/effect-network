#include "feepool.hpp"

void feepool::init(eosio::name proposal_contract) {
  require_auth(_self);

  config_table _config(_self, _self.value);
  eosio::check(!_config.exists(), "already initialized");
  _config.set(config{proposal_contract}, _self);
}

void feepool::update(eosio::name proposal_contract,
                     std::set<eosio::extended_symbol> allowed_symbols) {
  require_auth(_self);

  config_table _config(_self, _self.value);
  _config.set(config{proposal_contract, allowed_symbols}, _self);
}

void feepool::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    config_table _config(_self, _self.value);
    eosio::extended_symbol sym(quantity.symbol, get_first_receiver());

    if (_config.get().allowed_symbols.count(sym)) {
      balance_table balance_tbl(_self, _self.value);

      proposalns::config_table proposal_config(_config.get().proposal_contract,
                                               _config.get().proposal_contract.value);
      uint16_t cycle_id = proposal_config.get().current_cycle;

      // get or create cycle balance entry
      auto cycle_entry = balance_tbl.find(cycle_id);
      if (cycle_entry == balance_tbl.end()) {
        cycle_entry = balance_tbl.emplace(_self, [&](auto& b) { b.cycle_id = cycle_id; });
      }

      // update asset in cycle
      balance_tbl.modify(cycle_entry, _self, [&](auto& b) { b.balance[sym] += quantity.amount; });
    }
  }
}

void feepool::claimreward(eosio::name account) {
  require_auth(account);
  auto conf = config_table(_self, _self.value).get();

  proposalns::config_table prop_config(conf.proposal_contract, conf.proposal_contract.value);
  uint16_t cycle_id = prop_config.get().current_cycle - 1;

  // check there is no existing claim
  feepool::claim_table claim_tbl(_self, _self.value);
  auto claim_tbl_idx = claim_tbl.get_index<"composite"_n>();
  uint128_t claim_key = (uint128_t{cycle_id} << 64) | account.value;
  auto claim = claim_tbl_idx.find(claim_key);
  eosio::check(claim == claim_tbl_idx.end(), "account already claimed for cycle");

  proposalns::cycle_table cycle_tbl(conf.proposal_contract, conf.proposal_contract.value);
  auto& cycle = cycle_tbl.get(cycle_id, "cycle not found");

  uint64_t total_votes = cycle.total_vote_weight.value();
  uint64_t user_votes = 0;

  // loop through all proposals in the cycle
  proposalns::proposal_table prop_tbl(conf.proposal_contract, conf.proposal_contract.value);
  auto prop_tbl_idx = prop_tbl.get_index<"cycle"_n>();
  auto itr_start = prop_tbl_idx.lower_bound(cycle_id);
  auto itr_end = prop_tbl_idx.upper_bound(cycle_id);
  proposalns::vote_table vote_tbl(conf.proposal_contract, conf.proposal_contract.value);
  auto vote_tbl_idx = vote_tbl.get_index<"composite"_n>();

  for (; itr_start != itr_end; itr_start++) {
    auto& prop = *itr_start;

    uint128_t comp_key = (uint128_t{prop.id} << 64) | account.value;
    auto vote = vote_tbl_idx.find(comp_key);

    if (vote != vote_tbl_idx.end()) {
      user_votes += vote->weight;
    }
  }

  feepool::balance_table balance_tbl(_self, _self.value);
  auto balance = balance_tbl.get(cycle_id, "no feepool balance");

  // calculate the user share
  auto sym = *conf.allowed_symbols.begin();
  auto amount = balance.balance[sym];
  eosio::check(amount > total_votes, "feepool balance is too small");
  uint64_t vote_value = amount / total_votes;
  eosio::check(vote_value > 0, "feepool balance is too small");
  uint64_t reward_value = vote_value * user_votes;
  eosio::asset reward_asset(reward_value, sym.get_symbol());
  eosio::extended_asset reward_extended_asset(reward_value, sym);

  // insert claim
  claim_tbl.emplace(account,
                    [&](auto& c)
                    {
                      c.id = claim_tbl.available_primary_key();
                      c.cycle_id = cycle_id;
                      c.claimer = account;
                      c.amounts = {reward_extended_asset};
                    });

  // transfer reward
  action(permission_level{_self, "xfer"_n},
         sym.get_contract(),
         "transfer"_n,
         std::make_tuple(_self, account, reward_asset,
                         "reward " + std::to_string(cycle_id)))
    .send();
}

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (action == "transfer"_n.value) {
    execute_action<feepool>(eosio::name(receiver), eosio::name(code),
                            &feepool::transfer_handler);
  } else if (code == receiver) {
    switch(action) {
      EOSIO_DISPATCH_HELPER(feepool, (init)(update)(claimreward));
    }
  }
}
