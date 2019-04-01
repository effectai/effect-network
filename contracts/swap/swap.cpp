#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/types.h>
#include <eosiolib/asset.hpp>
#include <eosiolib/crypto.h>
#include <string>

using namespace eosio;

class [[eosio::contract]] swap : public contract {
public:
  swap(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) :
    eosio::contract(receiver, code, ds), _nep5(_self, _self.value), _issued(_self, _self.value) {};

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

  [[eosio::action]] void posttx(const checksum256 txid, const name to,
                                const fixed_bytes<20> asset_hash, const int64_t value) {
    require_auth(permission_level{get_self(), "active"_n});
    auto id =  _nep5.available_primary_key();
    _nep5.emplace(_self, [&](auto& n)
                         {
                           n.id = id;
                           n.txid = txid;
                           n.asset_hash = asset_hash;
                           n.to = to;
                           n.value = value;
                         });
    print("inserted: ", id);
  }

  [[eosio::action]] void issue(const name contract, const symbol_code token,
                               const std::vector<char> rawtx, const std::string memo) {
    auto txhash = neo_hash(rawtx);
    auto txids = _nep5.get_index<"txid"_n>();
    checksum256 chk = (checksum256) txhash.hash;
    auto& tx = txids.get(chk, "tx not found");

    auto issued = _issued.find(tx.id);
    eosio::check(issued == _issued.end(), "tx already issued");

    _issued.emplace(_self, [&](auto& n)
                           {
                             n.id = tx.id;
                           });

    // TODO: fetch precision from token stat table
    symbol sym = symbol(token, 4);

    action(permission_level{contract, "active"_n},
           contract,
           "issue"_n,
           std::make_tuple(tx.to, asset(tx.value, sym), memo)
           ).send();
  }

private:
  struct [[eosio::table]] nep5 {
    uint64_t id;
    checksum256 txid;
    fixed_bytes<20> asset_hash;
    int64_t value;
    name to;
    uint64_t primary_key() const { return id; }
    checksum256 by_txid() const { return txid; }
  };

  typedef multi_index<"nep5"_n, nep5, indexed_by<"txid"_n, const_mem_fun<nep5, checksum256, &nep5::by_txid>>> nep5_table;
  nep5_table _nep5;

  struct [[eosio::table]] issued {
    uint64_t id;
    uint64_t primary_key() const { return id; }
  };

  typedef multi_index<"issued"_n, issued> issued_table;
  issued_table _issued;
};

EOSIO_DISPATCH(swap, (checktx)(posttx)(issue));
