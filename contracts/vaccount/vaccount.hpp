#pragma once

#include <eosio/eosio.hpp>
#include <eosio/system.hpp>
#include <eosio/crypto.hpp>
#include <eosio/asset.hpp>
#include <eosio/datastream.hpp>

#include "../proposals/proposals-shared.hpp"

enum class VaccountType {
  Address = 0,
  EosAccount = 1
};

class [[eosio::contract("vaccount")]] vaccount : public eosio::contract {
private:
  struct account;

public:
  using contract::contract;

  // We use typedef to generate a sensible name in the ABI
  typedef eosio::checksum160 address;
  using vaddress = std::variant<address, eosio::name>;

  /**
   * Open an account entry
   *
   * @param acc - the account to be opened
   * @param symbol - the token account and symbol to open an entry for
   * @param payer - the EOS account that pays for the action
   */
  [[eosio::action]]
  void open(vaddress acc,
            eosio::extended_symbol symbol,
            eosio::name payer);

  /**
   * Transfer tokens between virtual accounts
   *
   * @param from_id - source balance row id
   * @param to_id - destination balance row id
   * @param quantity - type and amount to be transferred
   * @param sig - secp256k1 signature of the tranfer message
   * @param fee - fee that can be credited to a relayer account
   */
  [[eosio::action]]
  void vtransfer(uint64_t from_id,
                 uint64_t to_id,
                 eosio::extended_asset quantity,
                 std::optional<eosio::signature> sig,
                 std::optional<eosio::extended_asset> fee);

  /**
   * Transfer virtual tokens to a real EOS account
   *
   * @param from_id - source balance row id
   * @param to_account - destination EOS account
   * @param quantity - type and amount to be transferred
   * @param memo - memo to be added to the token transaction
   * @param sig - secp256k1 signature of the tranfer message
   * @param fee - fee that can be credited to a relayer account
   */
  [[eosio::action]]
  void withdraw(uint64_t from_id,
                eosio::name to_account,
                eosio::extended_asset quantity,
                std::string memo,
                std::optional<eosio::signature> sig,
                std::optional<eosio::extended_asset> fee);

  [[eosio::on_notify("*::transfer")]]
  void transfer_handler(eosio::name from,
                        eosio::name to,
                        eosio::asset quantity,
                        std::string memo);

  void require_sig(std::vector<char> msg,
                   account from,
                   eosio::signature sig);

private:
  struct transfer_params {
    uint8_t mark;
    uint32_t nonce;
    uint64_t from;
    uint64_t to;
    eosio::extended_asset quantity;
    // std::optional<eosio::extended_asset> fee;
    EOSLIB_SERIALIZE(transfer_params, (mark)(nonce)(from)(to)(quantity));
  };

  struct withdraw_params {
    uint8_t mark;
    uint32_t nonce;
    uint64_t from;
    eosio::name to;
    eosio::extended_asset quantity;
    // std::optional<eosio::extended_asset> fee;
    EOSLIB_SERIALIZE(withdraw_params, (mark)(nonce)(from)(to)(quantity));
  };

  static eosio::checksum256 make_token_index(eosio::name contract, vaddress address) {
    fixed_bytes<32> key;
    static constexpr uint16_t buffer_size{256};
    char datastream_buffer[buffer_size];
    datastream<const char*> ds{datastream_buffer, buffer_size};
    ds << contract;
    ds << address;
    ds.seekp(0);
    ds >> key;
    // key.print();
    return key;
  }

  struct [[eosio::table]] account {
    uint64_t id;
    uint32_t nonce;
    vaddress address;
    extended_asset balance;

    uint64_t primary_key() const { return id; }

    eosio::checksum256 by_token() const {
      return make_token_index(balance.contract, address);
    }

    EOSLIB_SERIALIZE(account, (id)(nonce)(address)(balance))
  };

  typedef multi_index<
    "account"_n, account,
    indexed_by<"token"_n, const_mem_fun<account, eosio::checksum256, &account::by_token>>>
  account_table;

};
