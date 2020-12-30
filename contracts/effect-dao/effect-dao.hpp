#pragma once

#include <eosio/eosio.hpp>
#include <eosio/time.hpp>
#include <eosio/crypto.hpp>
#include <eosio/system.hpp>

#include "effect-dao-shared.hpp"

class [[eosio::contract("effect-dao")]] effectdao : public eosio::contract {
 public:
  using contract::contract;

  [[eosio::action]]
  void newmemterms(eosio::checksum256 hash);

  [[eosio::action]]
  void memberreg(eosio::name account, eosio::checksum256 agreedterms);

  [[eosio::action]]
  void memberunreg(eosio::name account);

  [[eosio::action]]
  void init(eosio::name stake_contract,
            eosio::name proposal_contract,
            eosio::extended_symbol utl_token_sym,
            eosio::extended_symbol gov_token_sym);
};
