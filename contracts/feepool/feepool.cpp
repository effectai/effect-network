#include "feepool.hpp"

void feepool::init(eosio::name proposal_contract) {
  require_auth(get_self());

  config_table _config(_self, _self.value);
  eosio::check(!_config.exists(), "already initialized");
  _config.set(config{proposal_contract}, _self);
}

void feepool::update(std::set<eosio::extended_symbol> allowed_symbols) {

}

void feepool::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    // validate the asset symbol
    config_table config(_self, _self.value);
    eosio::extended_symbol sym(quantity.symbol, get_first_receiver());
    
    if (config.get().allowed_symbols.count(sym)) {
      balance_table balance_tbl(_self, _self.value);
      
      proposal::config proposal_config(config.get().proposal_contract, config.get().proposal_contract.value);
      uint16_t cycle = proposal_config.current_cycle;

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
    }
  }
}
