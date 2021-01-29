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

      balance_tbl.find(cycle);
    }
  }
}
