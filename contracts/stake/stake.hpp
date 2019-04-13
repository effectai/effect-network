#pragma once

#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/types.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/crypto.h>
#include <string>

using namespace eosio;

class [[eosio::contract("stake")]] stake : public contract {
 public:
  using contract::contract;
  [[eosio::action]]
    void dostake(name owner, asset amount);

  [[eosio::action]]
    void unstake(name owner);

  [[eosio::action]]
    void claim(name owner);

 private:
  struct [[eosio::table]] stake_t {
    asset stake;
    uint64_t last_claim_time;
    uint64_t primary_key() const { return stake.symbol.code().raw(); }
  };

  typedef multi_index<"stake"_n, stake_t> stake_table;
};
