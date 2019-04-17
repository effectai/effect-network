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
  inline static const std::string CLAIM_MEMO = "stake claim";
  inline static const std::string REFUND_MEMO = "unstake refund";

  static const uint32_t SECONDS_PER_DAY = 86400;
  static const uint32_t TIME_TO_MATURE = SECONDS_PER_DAY * 3;

  [[eosio::action]]
    void init(name token_contract,
              symbol_code stake_symbol,
              symbol_code claim_symbol,
              uint32_t age_limit,
              uint64_t scale_factor,
              uint32_t unstake_delay_sec);

  [[eosio::action]]
    void unstake(name owner,
                 asset quantity);

  [[eosio::action]]
    void refund(name owner);

  [[eosio::action]]
    void claim(name owner,
               symbol_code token);

  void transfer_handler(name from, name to, asset quantity, std::string memo);

 private:
  struct [[eosio::table]] config {
    name token_contract;
    symbol_code stake_symbol;
    symbol_code claim_symbol;
    uint32_t age_limit;
    uint64_t scale_factor;
    uint32_t unstake_delay_sec;
  };

  struct [[eosio::table]] stakeentry {
    asset amount;
    time_point_sec last_claim_time;
    uint32_t last_claim_age;
    uint64_t primary_key() const { return amount.symbol.code().raw(); }
  };

  struct [[eosio::table]] unstakeentry {
    asset amount;
    time_point_sec time;
    uint64_t primary_key() const { return amount.symbol.code().raw(); }
  };

  typedef singleton<"config"_n, config> config_table;
  typedef multi_index<"stake"_n, stakeentry> stake_table;
  typedef multi_index<"unstake"_n, unstakeentry> unstake_table;
};
