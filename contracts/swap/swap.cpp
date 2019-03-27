#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/types.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/crypto.h>
#include <string>

using namespace eosio;

class [[eosio::contract]] swap : public contract {
public:
  swap(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) : eosio::contract(receiver, code, ds), _nep5(_self, _self.value) {};

  capi_checksum256 neo_hash(std::vector<char> data) {
    capi_checksum256 digest, blockhash;
    sha256(&data[0], data.size(), &digest);
    sha256((const char*)&digest, sizeof(digest), &blockhash);
    return blockhash;
  }

  [[eosio::action]] void checktx(const std::vector<char> rawtx) {
    auto txhash = neo_hash(rawtx);
    printhex(&txhash, sizeof(txhash));
  }

  [[eosio::action]] void posttx(const checksum256 txid, fixed_bytes<20> asset_hash, int64_t value) {
    require_auth(permission_level{get_self(), "active"_n});
    auto id =  _nep5.available_primary_key();
    _nep5.emplace(_self, [&](auto& n) {
                           n.id = id;
                           n.txid = txid;
                           n.asset_hash = asset_hash;
                           n.value = value;
                         });
    print("inserted: ", id);
  }
  
  [[eosio::action]] void issue(const name contract, const name to,
                               const asset value, const std::string memo) {
    action(permission_level{contract, "active"_n},
           contract,
           "issue"_n,
           std::make_tuple(to, value, memo)
           ).send();
  }

  
private:
//   struct [[eosio::table]] validator {
//     uint8_t id;
//     public_key pub;
//     uint8_t primary_key() const { return id; }
//   };
//   typedef eosio::multi_index<"validator"_n, validator> validator_table;

  struct [[eosio::table]] nep5 {
    uint64_t id;
    checksum256 txid;
    fixed_bytes<20> asset_hash;
    int64_t value;
    uint64_t primary_key() const { return id; }
  };
  
  typedef eosio::multi_index<"nep5"_n, nep5> nep5_table;
  nep5_table _nep5;
};

EOSIO_DISPATCH(swap, (checktx)(posttx)(issue));
