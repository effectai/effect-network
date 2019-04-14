#pragma once

#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/types.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/time.hpp>
#include <eosiolib/singleton.hpp>
#include <string>

using namespace eosio;

class [[eosio::contract("stake")]] stake : public contract {
 public:
  using contract::contract;

  inline static const std::string STAKE_MEMO = "stake";
  static const uint32_t MIN_CLAIM_AGE_SEC = 2;

  [[eosio::action]]
    void init(name token_contract,
              symbol_code stake_symbol,
              symbol_code claim_symbol);

  [[eosio::action]]
    void unstake(name owner,
                 asset quantity);

  [[eosio::action]]
    void claim(name owner,
               symbol_code token);

  void transfer_handler(name from, name to, asset quantity, std::string memo);

 private:
  struct [[eosio::table]] config {
    name token_contract;
    symbol_code stake_symbol;
    symbol_code claim_symbol;
  };

  struct [[eosio::table]] stakeentry {
    asset stake;
    time_point_sec last_claim_time;
    uint32_t last_claim_age;
    uint64_t primary_key() const { return stake.symbol.code().raw(); }
  };

  typedef singleton<"config"_n, config> config_table;
  typedef multi_index<"stake"_n, stakeentry> stake_table;
};
