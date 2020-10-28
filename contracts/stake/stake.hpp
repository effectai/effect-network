#pragma once

#include <eosio/eosio.hpp>
#include <eosio/print.hpp>
#include <eosio/asset.hpp>
#include <eosio/crypto.hpp>
#include <eosio/time.hpp>
#include <eosio/singleton.hpp>
#include <eosio/transaction.hpp>
#include <string>

using namespace eosio;

class [[eosio::contract("stake")]] stake : public contract {
 public:
  using contract::contract;

  inline static const std::string STAKE_MEMO = "stake";
  inline static const std::string CLAIM_MEMO = "claim";
  inline static const std::string REFUND_MEMO = "unstake";

  static const uint32_t SECONDS_PER_DAY = 86400;

  [[eosio::action]]
    void init(name token_contract,
              const symbol& stake_symbol,
              const symbol& claim_symbol,
              uint32_t age_limit,
              uint64_t scale_factor,
              uint32_t unstake_delay_sec,
              uint32_t stake_bonus_age,
              time_point_sec stake_bonus_deadline,
              time_point_sec claim_stop_time);

  [[eosio::action]]
    void update(uint32_t unstake_delay_sec,
                uint32_t stake_bonus_age,
                time_point_sec stake_bonus_deadline,
                time_point_sec claim_stop_time);

  [[eosio::action]]
    void unstake(name owner,
                 asset quantity);

  [[eosio::action]]
    void refund(name owner);

  [[eosio::action]]
    void open(name owner,
              name ram_payer);

  [[eosio::action]]
    void claim(name owner);

  void transfer_handler(name from, name to, asset quantity, std::string memo);

 private:
  struct [[eosio::table]] config {
    name token_contract;
    symbol stake_symbol;
    symbol claim_symbol;
    uint32_t age_limit;
    uint64_t scale_factor;
    uint32_t unstake_delay_sec;
    uint32_t stake_bonus_age;
    time_point_sec stake_bonus_deadline;
    time_point_sec claim_stop_time;
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
