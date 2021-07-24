#pragma once

#include <eosio/eosio.hpp>
#include <eosio/system.hpp>
#include <eosio/crypto.hpp>
#include <eosio/asset.hpp>
#include <eosio/datastream.hpp>

#include "../proposals/proposals-shared.hpp"

class [[eosio::contract("network")]] network : public eosio::contract {
public:
  using contract::contract;

  // We use typedef to generate a sensible name in the ABI
  typedef eosio::checksum160 address;
  using account_address = std::variant<address, eosio::name>;

  void require_sig(account_address acc,
                   eosio::signature sig);

  /**
   * Open an account entry
   *
   * @param acc - the account to be opened
   * @param symbol - the token account and symbol to open an entry for
   * @param payer - the EOS account that pays for the action
   */
  [[eosio::action]]
  void open(account_address acc,
            eosio::extended_symbol symbol,
            eosio::name payer);

private:
  struct [[eosio::table]] account {
    uint64_t id;
    account_address address;
    extended_asset balance;

    uint64_t primary_key() const { return id; }

    eosio::checksum256 by_token() const {
      fixed_bytes<32> key;
      static constexpr uint16_t buffer_size{256};
      char datastream_buffer[buffer_size];
      datastream<const char*> ds{datastream_buffer, buffer_size};
      ds << balance.contract;
      ds << address;
      ds.seekp(0);
      ds >> key;
      // key.print();
      return key;
    }

    EOSLIB_SERIALIZE(account, (id)(address)(balance))
  };

  typedef multi_index<
    "account"_n, account,
    indexed_by<"token"_n, const_mem_fun<account, eosio::checksum256, &account::by_token>>>
  account_table;
};
