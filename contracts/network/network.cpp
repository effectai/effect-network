#include "network.hpp"

void network::open(account_address addr, eosio::extended_symbol symbol, eosio::name payer) {
  account_table acc_tbl(_self, _self.value);
  uint64_t id = acc_tbl.available_primary_key();
  eosio::extended_asset asset(0, symbol);

  acc_tbl.emplace(payer,
                  [&](auto& a)
                  {
                    a.id = id;
                    a.address = addr;
                    a.balance = asset;
                   });
}

void network::require_sig(account_address acc, eosio::signature sig) {

}
