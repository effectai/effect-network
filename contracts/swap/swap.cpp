#include "swap.hpp"

void swap::posttx(const std::vector<char> rawtx, const name to,
                  const fixed_bytes<20> asset_hash, const int64_t value) {
  require_auth(permission_level{get_self(), "active"_n});

  auto txhash = neo_hash(rawtx);
  checksum256 txid(txhash.hash);

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

void swap::issue(const checksum256 txid, const name contract, const symbol_code token,
                 const std::string memo) {
  auto txids = _nep5.get_index<"txid"_n>();

  auto& tx = txids.get(txid, "tx not found");

  auto issued = _issued.find(tx.id);
  eosio::check(issued == _issued.end(), "tx already issued");

  _issued.emplace(_self, [&](auto& n)
                         {
                           n.id = tx.id;
                         });

  // TODO: fetch precision from token stat table
  symbol sym = symbol(token, 4);

  action(permission_level{_self, "active"_n},
         contract,
         "issue"_n,
         std::make_tuple(tx.to, asset(tx.value, sym), memo)
         ).send();
}

capi_checksum256 swap::neo_hash(const std::vector<char> data) {
  capi_checksum256 digest, blockhash;
  sha256(&data[0], data.size(), &digest);
  sha256((const char*)&digest, sizeof(digest), &blockhash);
  return blockhash;
}

EOSIO_DISPATCH(swap, (posttx)(issue));
