#pragma once

#include <eosio/eosio.hpp>
#include <eosio/time.hpp>
#include <eosio/crypto.hpp>
#include <eosio/system.hpp>

class [[eosio::contract("effect-dao")]] dao : public eosio::contract {
 public:
  using contract::contract;

  [[eosio::action]]
  void newmemterms(eosio::checksum256 hash);

  [[eosio::action]]
  void memberreg(eosio::name account, eosio::checksum256 agreedterms);

  [[eosio::action]]
  void memberunreg(eosio::name account);

 private:
  struct [[eosio::table]] member {
    eosio::name account;
    uint64_t agreedtermsversion;
    eosio::time_point_sec registration_time;

    uint64_t primary_key() const { return account.value; }
  };

  struct [[eosio::table]] memberterms {
    uint64_t version;
    eosio::checksum256 hash;

    uint64_t primary_key() const { return version; }
  };

  typedef eosio::multi_index<"member"_n, member> member_table;
  typedef eosio::multi_index<"memberterms"_n, memberterms> memterms_table;
};
