#pragma once

#include <eosio/eosio.hpp>
#include <eosio/system.hpp>

#include "../effect-proposals/effect-proposals-shared.hpp"

class [[eosio::contract("feepool")]] feepool : public eosio::contract {
public:
  using contract::contract;

  void transfer_handler(eosio::name from,
                        eosio::name to,
                        eosio::asset quantity,
                        std::string memo);

  [[eosio::action]]
  void init(eosio::name proposal_contract);

  [[eosio::action]]
  void update(eosio::name proposal_contract,
              std::set<eosio::extended_symbol> allowed_symbols);

  [[eosio::action]]
  void claimreward(eosio::name account);

private:
  struct [[eosio::table]] config {
    eosio::name proposal_contract;
    std::set<eosio::extended_symbol> allowed_symbols;
  };

  struct [[eosio::table]] balance {
    uint64_t cycle_id;
    std::map<eosio::extended_symbol, uint64_t> balance;
    uint64_t primary_key() const { return cycle_id; }
  };

  typedef singleton<"config"_n, config> config_table;
  typedef multi_index<"balance"_n, balance> balance_table;
};
