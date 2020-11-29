#include "effect-dao.hpp"

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
