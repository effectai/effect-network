#pragma once

#include <eosio/eosio.hpp>
#include <eosio/time.hpp>
#include <eosio/symbol.hpp>
#include <eosio/asset.hpp>
#include <eosio/singleton.hpp>

inline uint32_t now() {
  static uint32_t current_time = eosio::current_time_point().sec_since_epoch();
  return current_time;
}

namespace dao {
  static const uint32_t SECONDS_PER_DAY = 86400;
  static const uint32_t CLAIM_STOP_TIME = 1604188799; // Saturday, 31 October 2020 23:59:59 (GMT)
  static const uint32_t MAX_STAKE_AGE_DAYS = 1000;

  struct [[eosio::table("member"), eosio::contract("effect-dao")]] member {
    eosio::name account;
    uint64_t agreedtermsversion;
    eosio::time_point_sec registration_time;

    uint64_t primary_key() const { return account.value; }
  };

  struct [[eosio::table("memberterms"), eosio::contract("effect-dao")]] memberterms {
    uint64_t version;
    eosio::checksum256 hash;

    uint64_t primary_key() const { return version; }
  };

  struct [[eosio::table("config"), eosio::contract("effect-dao")]] config {
    eosio::name stake_contract;
    eosio::name proposal_contract;
    eosio::extended_symbol utl_token_sym;
    eosio::extended_symbol gov_token_sym;
  };

  struct [[eosio::table("stake"), eosio::contract("effect-dao")]] stakeentry {
    eosio::asset amount;
    eosio::time_point_sec last_claim_time;
    uint32_t last_claim_age;
    uint64_t primary_key() const { return amount.symbol.code().raw(); }
  };

  typedef eosio::multi_index<"member"_n, member> member_table;
  typedef eosio::multi_index<"memberterms"_n, memberterms> memterms_table;
  typedef eosio::singleton<"config"_n, config> config_table;
  typedef eosio::multi_index<"stake"_n, stakeentry> stake_table;

  void require_member(eosio::name dao_contract, eosio::name account) {
    dao::member_table member_tbl(dao_contract, dao_contract.value);
    auto this_member = member_tbl.find(account.value);
    eosio::check(this_member != member_tbl.end(), "not a dao member");
    auto latest_terms = (--memterms_table(dao_contract, dao_contract.value).end());
    eosio::check(latest_terms->version == this_member->agreedtermsversion,
                 "agreed terms are not the latest");
  }

  // level => [efx_power, nfx]
  const std::map<int, std::tuple<int, int>> rank_requirements = {
    {0, {0, 0}},
    {1, {200000, 10000}},
    {2, {348326, 15505}},
    {3, {606655, 24041}},
    {4, {1056569, 37276}},
    {5, {1840152, 57797}},
    {6, {3204864, 89615}},
    {7, {5581687, 138950}},
    {8, {9721233, 215443}},
    {9, {16930792, 334048}},
    {10, {29487176, 517947}}
  };

  // level => vote_weight
  const std::map<int, int> vote_weights = {
    {0, 0}, {1, 1}, {2, 2}, {3, 3}, {4, 5}, {5, 9}, {6, 16}, {7, 28}, {8, 49}, {9, 85}, {10, 147}
  };

  uint32_t get_efx_power(uint64_t stake_amount, eosio::time_point_sec last_claim_time,
                         uint32_t last_claim_age) {
    // calculate the new and old stake age
    auto cur = eosio::time_point_sec(now());
    auto claim_stop_time = eosio::time_point_sec(dao::CLAIM_STOP_TIME);
    auto age_limit = dao::MAX_STAKE_AGE_DAYS * dao::SECONDS_PER_DAY;
    if (last_claim_time < claim_stop_time) {
      cur = std::min(cur, claim_stop_time);
      age_limit = (200 * dao::SECONDS_PER_DAY); // 200 days in seconds
    }
    auto age = (eosio::microseconds) (cur - last_claim_time);
    uint32_t age_last = last_claim_age;
    double aged = age.to_seconds();
    double age_new = std::min(age_last + aged, (double) age_limit);

    // calculate power
    double stake_float = (stake_amount / 10000.0);
    double power = stake_float + float(age_new / (200 * dao::SECONDS_PER_DAY)) * stake_float;

    return (uint32_t) power;
  }

  uint32_t get_rank(eosio::name dao_contract, eosio::name account) {
    dao::config_table config_tbl(dao_contract, dao_contract.value);
    eosio::check(config_tbl.exists(), "dao config table not initialized");
    auto conf = config_tbl.get();

    dao::stake_table stake_tbl(conf.stake_contract, account.value);
    auto& utl_stake = stake_tbl.get(conf.utl_token_sym.get_symbol().code().raw(),
                                    "no utl stake found");
    auto& gov_stake = stake_tbl.get(conf.gov_token_sym.get_symbol().code().raw(),
                                    "no gov stake found");

    uint32_t power = dao::get_efx_power(utl_stake.amount.amount, utl_stake.last_claim_time,
                                        utl_stake.last_claim_age);

    uint32_t staked_nfx = (uint32_t) (gov_stake.amount.amount / 10000.0);

    uint32_t current_rank = 0;
    for (int i = 0; i <= 10; i++) {
      auto req = dao::rank_requirements.at(i);
      if (power >= std::get<0>(req) && staked_nfx >= std::get<1>(req)) {
        current_rank = i;
      } else {
        break;
      }
    }

    return current_rank;
  };

  uint32_t get_vote_power(uint8_t rank) {
    return dao::vote_weights.at(rank);
  }
}
