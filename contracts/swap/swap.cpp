#include "swap.hpp"

void swap::init(const name token_contract, const symbol_code token_symbol,
                uint32_t tx_max_age, uint64_t min_tx_value, uint64_t max_tx_value,
                uint64_t global_swap_limit, uint32_t limit_reset_time_sec) {
  require_auth(get_self());

  eosio::check(is_account(token_contract), "token contract does not exsist");
  eosio::check(token_symbol.is_valid(), "invalid symbol name");
  eosio::check(tx_max_age > 0, "tx max age must be positive");
  eosio::check(min_tx_value >= 0, "tx min value must be positive");
  eosio::check(max_tx_value >= 0, "tx max value must be positive");
  eosio::check(global_swap_limit >= 0, "global swap limit must be positive");
  eosio::check(limit_reset_time_sec >= 0, "limit reset time must be positive");

  config_table config_tbl(_self, _self.value);
  eosio::check(!config_tbl.exists(), "already initialized");

  config_tbl.set(config{token_contract,
                        token_symbol,
                        tx_max_age,
                        min_tx_value,
                        max_tx_value,
                        global_swap_limit,
                        limit_reset_time_sec}, get_self());

  global_table global_tbl(_self, _self.value);
  global_tbl.set(global{0, time_point_sec(now())}, get_self());
}

void swap::update(uint32_t tx_max_age, uint64_t min_tx_value, uint64_t max_tx_value) {
  require_auth(get_self());

  config_table config_tbl(_self, _self.value);

  eosio::check(config_tbl.exists(), "config table not initialized");
  eosio::check(tx_max_age > 0, "tx max age must be positive");
  eosio::check(min_tx_value >= 0, "tx min value must be positive");
  eosio::check(max_tx_value >= 0, "tx max value must be positive");

  auto config = config_tbl.get();
  config.tx_max_age = tx_max_age;
  config.min_tx_value = min_tx_value;
  config.max_tx_value = max_tx_value;

  config_tbl.set(config, get_self());
}

void swap::posttx(const name bookkeeper, const std::vector<char> rawtx, const name to,
                  const fixed_bytes<20> asset_hash, const int64_t value) {
  require_auth(bookkeeper);

  config_table config_tbl(_self, _self.value);
  auto config = config_tbl.get();

  eosio::check(value >= config.min_tx_value, "value below min limit");
  eosio::check(value <= config.max_tx_value, "value above max limit");

  global_table global_tbl(_self, _self.value);
  auto global = global_tbl.get();

  auto time_now = time_point_sec(now());
  if (time_now >= global.last_limit_reset + config.limit_reset_time_sec) {
    global.last_limit_reset = time_now;
    global.swap_total = 0;
  }

  const uint64_t new_swap_total = global.swap_total + value;
  eosio::check(new_swap_total <= config.global_swap_limit,
               "global swap limit reached");

  global.swap_total = new_swap_total;

  global_tbl.set(global, get_self());

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
                         n.txtime = time_point_sec(now());
                         n.to = to;
                         n.value = value;
                         n.issued = false;
                       });

  print("inserted: ", id);
}

void swap::cleartx(const checksum256 txid) {
  // only allowed by self
  require_auth(get_self());

  auto txids = _nep5.get_index<"txid"_n>();
  auto& tx = txids.get(txid, "tx does not exist");

  _nep5.erase(tx);
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

  // TODO: fetch precision from token stat table
  symbol sym = symbol(config.token_symbol, 4);

  action(permission_level{_self, "active"_n},
         config.token_contract,
         "issue"_n,
         std::make_tuple(tx.to, asset(tx.value, sym), std::string("efx swap"))
         ).send();
}

void swap::mkbookkeeper(name account) {
  require_auth(get_self());

  eosio::check(eosio::is_account(account), "account does not exsist");
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

EOSIO_DISPATCH(swap, (init)(update)(posttx)(cleartx)(issue)(mkbookkeeper)(rmbookkeeper));
