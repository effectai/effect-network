#include "dao.hpp"

void effectdao::init(eosio::name stake_contract,
                     eosio::name proposal_contract,
                     eosio::extended_symbol utl_token_sym,
                     eosio::extended_symbol gov_token_sym) {
  require_auth(get_self());

  eosio::check(is_account(stake_contract), "stake contract does not exsist");
  eosio::check(is_account(proposal_contract), "proposal contract does not exsist");

  dao::config_table config_tbl(_self, _self.value);

  config_tbl.set(dao::config{
      stake_contract,
      proposal_contract,
      utl_token_sym,
      gov_token_sym
    }, get_self());
}

void effectdao::newmemterms(eosio::checksum256 hash) {
  eosio::require_auth(_self);

  dao::memterms_table terms_tbl(_self, _self.value);

  if (terms_tbl.begin() != terms_tbl.end()) {
    auto last = --terms_tbl.end();
    eosio::check(hash != last->hash, "terms are a duplicate of the latest");
  }

  terms_tbl.emplace(get_self(),
                    [&](auto& t)
                    {
                      t.version = terms_tbl.available_primary_key();
                      t.hash = hash;
                    });
}

void effectdao::memberreg(eosio::name account, eosio::checksum256 agreedterms) {
  require_auth(account);

  dao::memterms_table terms_tbl(_self, _self.value);
  auto latest_terms = (--terms_tbl.end());
  eosio::check(latest_terms->hash == agreedterms,
               "agreed terms are not the latest");

  dao::member_table member_tbl(_self, _self.value);

  auto this_member = member_tbl.find(account.value);
  if (this_member != member_tbl.end()) {
    member_tbl.modify(this_member,
                      eosio::same_payer,
                      [&](dao::member &mem)
                      {
                        mem.agreedtermsversion = latest_terms->version;
                      });
  } else {
    uint32_t now = eosio::current_time_point().sec_since_epoch();
    member_tbl.emplace(account,
                       [&](dao::member &mem)
                       {
                         mem.account = account;
                         mem.agreedtermsversion = latest_terms->version;
                         mem.registration_time = eosio::time_point_sec(now);
                       });
  }
}

void effectdao::memberunreg(eosio::name account) {
  eosio::require_auth(account);

  dao::member_table member_tbl(_self, _self.value);
  auto this_member = member_tbl.find(account.value);
  eosio::check(this_member != member_tbl.end(), "member is not registered");

  member_tbl.erase(this_member);
}

void effectdao::setavatar(eosio::name account, uint64_t asset_id) {
  eosio::require_auth(account);

  auto assets_tbl = atomicassets::get_assets(account);
  auto this_asset = assets_tbl.find(asset_id);
  eosio::check(this_asset != assets_tbl.end(), "you do not own the asset");

  auto avatar_tbl = avatar_table(_self, account.value);
  auto this_avatar = avatar_tbl.find(asset_id);

  dao::config_table config_tbl(_self, _self.value);
  auto conf = config_tbl.get();
  auto cols = *conf.allowed_collections;
  eosio::check(cols.find(this_asset->collection_name) != cols.end(),
               "collection not allowed");

  if (this_avatar != avatar_tbl.end()) {
    avatar_tbl.modify(this_avatar,
                      eosio::same_payer,
                      [&](auto &a)
                      {
                        a.asset_id = asset_id;
                      });
  } else {
    avatar_tbl.emplace(account,
                       [&](auto& a)
                       {
                         a.asset_id = asset_id;
                         a.type = 0;
                       });
  }
}

void effectdao::addcol(std::set<eosio::name> cols, bool remove) {
  require_auth(_self);

  dao::config_table config_tbl(_self, _self.value);
  check(config_tbl.exists(), "dao config table not initialized");
  auto conf = config_tbl.get();

  std::set<eosio::name>toremove({"aiishere"_n});
  if (remove == true) {
    for (auto it = cols.begin(); it != cols.end(); ++it)
      conf.allowed_collections->erase(*it);
  }
  else {
    conf.allowed_collections->insert(cols.begin(), cols.end());
  }

  config_tbl.set(conf, get_self());
}
