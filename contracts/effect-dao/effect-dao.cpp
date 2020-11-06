#include "effect-dao.hpp"

void dao::newmemterms(eosio::checksum256 hash) {
  require_auth(_self);

  memterms_table terms_tbl(_self, _self.value);

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

void dao::memberreg(eosio::name account, eosio::checksum256 agreedterms) {
  require_auth(account);

  memterms_table terms_tbl(_self, _self.value);
  auto latest_terms = (--terms_tbl.end());
  eosio::check(latest_terms->hash == agreedterms,
               "agreed terms are not the latest");

  member_table member_tbl(_self, _self.value);

  auto this_member = member_tbl.find(account.value);
  if (this_member != member_tbl.end()) {
    member_tbl.modify(this_member,
                      eosio::same_payer,
                      [&](member &mem)
                      {
                        mem.agreedtermsversion = latest_terms->version;
                      });
  } else {
    uint32_t now = eosio::current_time_point().sec_since_epoch();
    member_tbl.emplace(account,
                       [&](member &mem)
                       {
                         mem.account = account;
                         mem.agreedtermsversion = latest_terms->version;
                         mem.registration_time = eosio::time_point_sec(now);
                       });
  }
}

void dao::memberunreg(eosio::name account) {
  require_auth(account);

  member_table member_tbl(_self, _self.value);
  auto this_member = member_tbl.find(account.value);
  eosio::check(this_member != member_tbl.end(), "member is not registered");

  member_tbl.erase(this_member);
}
