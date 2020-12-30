#pragma once

#include <eosio/eosio.hpp>
#include <eosio/time.hpp>
#include <eosio/symbol.hpp>
#include <eosio/singleton.hpp>

namespace dao {
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

  typedef eosio::multi_index<"member"_n, member> member_table;
  typedef eosio::multi_index<"memberterms"_n, memberterms> memterms_table;
  typedef eosio::singleton<"config"_n, config> config_table;

  void require_member(eosio::name dao_contract, eosio::name account) {
    dao::member_table member_tbl(dao_contract, dao_contract.value);
    auto this_member = member_tbl.find(account.value);
    eosio::check(this_member != member_tbl.end(), "not a dao member");
  }
}
