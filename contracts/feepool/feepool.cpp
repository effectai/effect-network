#include "feepool.hpp"

void feepool::init(eosio::name proposal_contract) {
  require_auth(get_self());

  config_table _config(_self, _self.value);
  eosio::check(!_config.exists(), "already initialized");
  _config.set(config{proposal_contract}, _self);
}

void feepool::update(eosio::name proposal_contract, std::set<eosio::extended_symbol> allowed_symbols) {
  require_auth(get_self());

  config_table _config(_self, _self.value);
  _config.set(config{proposal_contract, allowed_symbols}, _self);
}

void feepool::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    // validate the asset symbol
    config_table _config(_self, _self.value);
    eosio::extended_symbol sym(quantity.symbol, get_first_receiver());
    
    if (_config.get().allowed_symbols.count(sym) > 0) {
      balance_table balance_tbl(_self, _self.value);
      
      proposal::config_table proposal_config(_config.get().proposal_contract, _config.get().proposal_contract.value);
      uint16_t cycle_id = proposal_config.get().current_cycle;

      // get or create cycle
      auto cycle_entry = balance_tbl.find(cycle_id);
      if (cycle_entry == balance_tbl.end()) {
        balance_tbl.emplace(_self, [&](auto& b) {
          b.cycle_id = cycle_id;
        });

        cycle_entry = balance_tbl.find(cycle_id);
      }
      
      // update asset in cycle
      balance_tbl.modify(cycle_entry, _self, [&](auto& b) {
        b.balance[sym] += quantity.amount;
      });
    }
  }
}
