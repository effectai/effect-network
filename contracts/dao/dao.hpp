#pragma once

#include <eosio/eosio.hpp>
#include <eosio/time.hpp>
#include <eosio/crypto.hpp>
#include <eosio/system.hpp>

#include "dao-shared.hpp"
#include "atomicassets-interface.hpp"

class [[eosio::contract("dao")]] effectdao : public eosio::contract {
 public:
  using contract::contract;

  [[eosio::action]]
  void newmemterms(eosio::checksum256 hash);

  [[eosio::action]]
  void memberreg(eosio::name account, eosio::checksum256 agreedterms);

  [[eosio::action]]
  void memberunreg(eosio::name account);

  [[eosio::action]]
  void setavatar(eosio::name account, uint64_t asset_id);

  [[eosio::action]]
  void addcol(std::set<eosio::name> cols, bool remove);

  [[eosio::action]]
  void init(eosio::name stake_contract,
            eosio::name proposal_contract,
            eosio::extended_symbol utl_token_sym,
            eosio::extended_symbol gov_token_sym);

 private:
  struct [[eosio::table("avatar")]] avatar {
    uint8_t type;
    uint64_t asset_id;
    uint64_t primary_key() const { return (uint64_t) type; }
  };
  typedef multi_index<"avatar"_n, avatar> avatar_table;
};
