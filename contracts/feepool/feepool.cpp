#include "feepool.hpp"

void feepool::init(eosio::name proposal_contract) {
  require_auth(_self);

  config_table _config(_self, _self.value);
  eosio::check(!_config.exists(), "already initialized");
  _config.set(config{proposal_contract}, _self);
}

void feepool::update(eosio::name proposal_contract, std::set<eosio::extended_symbol> allowed_symbols) {
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
      
      proposal::config_table proposal_config(_config.get().proposal_contract,
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

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (action == "transfer"_n.value) {
    execute_action<feepool>(eosio::name(receiver), eosio::name(code),
                            &feepool::transfer_handler);
  } else if (code == receiver) {
    switch(action) {
      EOSIO_DISPATCH_HELPER(feepool, (init)(update));
    }
  }
}
