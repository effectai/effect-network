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

class [[eosio::contract("swap")]] swap : public contract {
 public:
  swap(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) :
    eosio::contract(receiver, code, ds), _nep5(_self, _self.value),
    _bookkeeper(_self, _self.value) {};

  [[eosio::action]]
    void init(name token_contract,
              symbol_code token_symbol,
              uint32_t tx_max_age,
              uint64_t min_tx_value,
              uint64_t max_tx_value,
              uint64_t global_swap_limit,
              uint32_t limit_reset_time_sec);

  [[eosio::action]]
    void update(uint32_t tx_max_age,
                uint64_t min_tx_value,
                uint64_t max_tx_value,
                uint64_t global_swap_limit,
                uint32_t limit_reset_time_sec);

  [[eosio::action]]
    void posttx(name bookkeeper,
                std::vector<char> rawtx,
                name to,
                fixed_bytes<20> asset_hash,
                int64_t value);

  [[eosio::action]]
    void cleartx(checksum256 txid);

  [[eosio::action]]
    void issue(checksum256 txid);

  [[eosio::action]]
    void mkbookkeeper(name account);

  [[eosio::action]]
    void rmbookkeeper(name account);

 private:
  capi_checksum256 neo_hash(std::vector<char> data);

  struct [[eosio::table]] config {
    name token_contract;
    symbol_code token_symbol;
    uint32_t tx_max_age;
    uint64_t min_tx_value;
    uint64_t max_tx_value;
    uint64_t global_swap_limit;
    uint32_t limit_reset_time_sec;
  };

  struct [[eosio::table]] global {
    uint64_t swap_total;
    time_point_sec last_limit_reset;
  };

  struct [[eosio::table]] nep5 {
    uint64_t id;
    checksum256 txid;
    time_point_sec txtime;
    int64_t value;
    name to;
    uint64_t issued;
    uint64_t primary_key() const { return id; }
    checksum256 by_txid() const { return txid; }
  };

  struct [[eosio::table]] bookkeeper {
    name account;
    uint64_t primary_key() const { return account.value; }
  };

  typedef singleton<"config"_n, config> config_table;
  typedef singleton<"global"_n, global> global_table;
  typedef multi_index<"nep5"_n, nep5, indexed_by<"txid"_n, const_mem_fun<nep5, checksum256, &nep5::by_txid>>> nep5_table;
  typedef multi_index<"bookkeeper"_n, bookkeeper> bookkeeper_table;

  nep5_table _nep5;
  bookkeeper_table _bookkeeper;
};
