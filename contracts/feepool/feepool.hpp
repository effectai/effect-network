#pragma once

#include <eosio/eosio.hpp>
#include <eosio/system.hpp>

#include "../proposals/proposals-shared.hpp"

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

  struct [[eosio::table]] claim {
    uint64_t id;
    uint64_t cycle_id;
    eosio::name claimer;
    std::set<eosio::extended_asset> amounts;
    uint64_t primary_key() const { return id; }
    uint128_t composite_key() const { return (uint128_t{cycle_id} << 64) | claimer.value; }
  };

  typedef singleton<"config"_n, config> config_table;
  typedef multi_index<"balance"_n, balance> balance_table;
  typedef multi_index<
    "claim"_n, claim,
    indexed_by<"composite"_n, const_mem_fun<claim, uint128_t, &claim::composite_key>>>
  claim_table;
};
