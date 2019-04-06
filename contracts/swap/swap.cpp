#include "swap.hpp"

void swap::posttx(const name bookkeeper, const std::vector<char> rawtx, const name to,
                  const fixed_bytes<20> asset_hash, const int64_t value) {
  require_auth(permission_level{bookkeeper, "active"_n});

  auto bk = _bookkeeper.find(bookkeeper.value);
  eosio::check(bk != _bookkeeper.end(), "not a bookkeeper");

  auto txhash = neo_hash(rawtx);
  const checksum256 txid(txhash.hash);

  auto txids = _nep5.get_index<"txid"_n>();
  auto nep5 = txids.find(txid);
  eosio::check(nep5 == txids.end(), "tx already posted");

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

void swap::mkbookkeeper(name account) {
  require_auth(permission_level{get_self(), "owner"_n});

  auto bk = _bookkeeper.find(account.value);
  eosio::check(bk == _bookkeeper.end(), "already registered");

  _bookkeeper.emplace(_self, [&](auto& n)
                             {
                               n.account = account;
                             });
};

void swap::rmbookkeeper(name account) {
  require_auth(permission_level{get_self(), "owner"_n});

  auto bk = _bookkeeper.find(account.value);
  eosio::check(bk != _bookkeeper.end(), "not registered");

  _bookkeeper.erase(bk);
};

capi_checksum256 swap::neo_hash(const std::vector<char> data) {
  capi_checksum256 digest, blockhash;
  sha256(&data[0], data.size(), &digest);
  sha256((const char*)&digest, sizeof(digest), &blockhash);
  return blockhash;
}

EOSIO_DISPATCH(swap, (posttx)(issue)(mkbookkeeper)(rmbookkeeper));
