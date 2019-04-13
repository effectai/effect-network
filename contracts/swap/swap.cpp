#include "swap.hpp"

void swap::init(const name token_contract, const symbol_code token_symbol,
                const std::string issue_memo) {
  require_auth(get_self());

  eosio::check(token_symbol.is_valid(), "invalid symbol name");
  eosio::check(memo.size() <= 256, "memo has more than 256 bytes");

  config_table config_tbl(_self, _self.value);
  eosio::check(!config_tbl.exists(), "already initialized");

  config_tbl.set(config{token_contract,
                        token_symbol,
                        issue_memo}, get_self());
}

void swap::posttx(const name bookkeeper, const std::vector<char> rawtx, const name to,
                  const fixed_bytes<20> asset_hash, const int64_t value) {
  require_auth(bookkeeper);

  eosio::check(value >= MIN_TX_VALUE && value <= MAX_TX_VALUE, "invalid value");

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
                         n.issued = false;
                       });

  print("inserted: ", id);
}

void swap::issue(const checksum256 txid) {
  config_table config_tbl(_self, _self.value);
  eosio::check(config_tbl.exists(), "not initialized");
  auto config = config_tbl.get();

  auto txids = _nep5.get_index<"txid"_n>();

  auto& tx = txids.get(txid, "tx not found");

  eosio::check(tx.issued == false, "tx already issued");

  _nep5.modify(tx, _self, [&](auto& n)
                          {
                            n.issued = true;
                          });

  // TODO: fetch precision from token stat table?
  symbol sym = symbol(config.token_symbol, 4);

  action(permission_level{_self, "active"_n},
         config.token_contract,
         "issue"_n,
         std::make_tuple(tx.to, asset(tx.value, sym), config.issue_memo)
         ).send();
}

void swap::mkbookkeeper(name account) {
  require_auth(get_self());

  auto bk = _bookkeeper.find(account.value);
  eosio::check(bk == _bookkeeper.end(), "already registered");

  _bookkeeper.emplace(_self, [&](auto& n)
                             {
                               n.account = account;
                             });
};

void swap::rmbookkeeper(name account) {
  require_auth(get_self());

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

EOSIO_DISPATCH(swap, (init)(posttx)(issue)(mkbookkeeper)(rmbookkeeper));
