#pragma once

#include <eosio/eosio.hpp>

using namespace eosio;

namespace vaccount {
  typedef eosio::checksum160 address;
  using vaddress = std::variant<address, eosio::name>;
  using sig = std::optional<eosio::signature>;

  static eosio::checksum256 make_token_index(eosio::name contract, vaddress address) {
    eosio::fixed_bytes<32> key;
    static constexpr uint16_t buffer_size{256};
    char datastream_buffer[buffer_size];
    eosio::datastream<const char*> ds{datastream_buffer, buffer_size};
    ds << contract;
    ds << address;
    ds.seekp(0);
    ds >> key;
    return key;
  };

  struct [[eosio::table("account"), eosio::contract("vaccount")]] account {
    uint32_t id;
    uint32_t nonce;
    vaddress address;
    eosio::extended_asset balance;

    uint64_t primary_key() const { return (uint64_t) id; }

    eosio::checksum256 by_token() const {
      return make_token_index(balance.contract, address);
    }

    EOSLIB_SERIALIZE(account, (id)(nonce)(address)(balance))
  };

  eosio::checksum160 pub2addr(eosio::ecc_public_key pub) {
    return eosio::ripemd160(&pub[0], pub.size());
  }

  inline void require_sig(std::vector<char> msg, vaddress from, eosio::signature sig) {
    eosio::checksum160 addr = std::get<0>(from);
    eosio::checksum256 digest = eosio::sha256(&msg[0], msg.size());
    eosio::public_key pub = eosio::recover_key(digest, sig);
    eosio::ecc_public_key ecpub = std::get<0>(pub);
    eosio::checksum160 pub_addr = pub2addr(ecpub);
    eosio::check(addr == pub_addr, "invalid signature");
  }

  void require_auth(std::vector<char> msg, vaddress from, std::optional<eosio::signature> sig) {
    auto from_type = from.index();
    if (from_type == 1) {
      eosio::name from_name = std::get<eosio::name>(from);
      eosio::require_auth(from_name);
    } else if (from_type == 0) {
      require_sig(msg, from, sig.value());
    } else {
      eosio::check(false, "unkown account type");
    }
  }

  typedef multi_index<
    "account"_n, account,
    indexed_by<"token"_n, const_mem_fun<account, eosio::checksum256, &account::by_token>>>
  account_table;
}
