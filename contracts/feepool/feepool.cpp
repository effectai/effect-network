#include "feepool.hpp"

void feepool::update(std::set<eosio::extended_symbol> allowed_symbols) {
}

void feepool::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    // validate the asset symbol
    config_table config(_self, _self.value);
    eosio::extended_symbol sym(quantity.symbol, get_first_receiver());
    
    if (config.get().allowed_symbols.count(sym)) {
      balance_table balance_tbl(_self, _self.value);
      
      proposal::config prop_config(config.get().proposal_contract, config.get().proposal_contract.value);
      uint16_t cycle = prop_config.current_cycle;

      // create cycle if not exists
      bal = balance_tbl.find(cycle);
      if (bal == balance_tbl.end()) {
        balance_tbl.emplace(_self, [&](auto& balance_tbl) {
          balance_tbl.cycle = cycle;
        });
      } 
      
      // create asset in cycle if not exists
      ast = bal.balance.find(quantity)
      if (ast == bal.balance.end()) {
        bal.balance[extended_symbol] = 0
      }

      // update asset balance in cycle
      bal.balance[ast][extended_symbol] += quantity.value
      balance_tbl.emplace(_self, [&](auto& balance_tbl) {
        balance_tbl.cycle = cycle;
      });
    }
  }
}
