#include "stake.hpp"

void stake::transfer_handler(name from, name to, asset quantity, std::string memo) {
  // stake when receiving funds
  if (to == get_self()) {
    eosio::check(memo == STAKE_MEMO, "only stake transactions are accepted");
    auto sym = quantity.symbol;

    stake_table stakes_tbl(get_self(), from.value);
    auto stakes = stakes_tbl.find(sym.code().raw());

    eosio::check(stakes == stakes_tbl.end(), "stake upgrading not yet implemented");
    stakes_tbl.emplace(get_self(), [&](auto& a)
                                   {
                                     a.stake = quantity;
                                     a.last_claim_time = time_point_sec(now());
                                     a.last_claim_age = 0;
                                   });
  }

}

void stake::unstake(name owner, asset quantity) {
  require_auth(owner);

  auto sym = quantity.symbol;
  eosio::check(sym.is_valid(), "invalid symbol name");

  eosio::check(quantity.is_valid(), "invalid quantity");
  eosio::check(quantity.amount > 0, "must unstake positive quantity");

  stake_table stakes_tbl(get_self(), owner.value);
  auto stakes = stakes_tbl.find(sym.code().raw());
}

void stake::claim(name owner, symbol_code token) {
  require_auth(owner);
  stake_table stakes_tbl(get_self(), owner.value);
  const auto& stakes = stakes_tbl.get(token.raw());

  eosio::check(token.is_valid(), "invalid symbol name");

  auto cur = time_point_sec(now());
  time_point age = (time_point) (cur - stakes.last_claim_time);
  auto age_sec = age.sec_since_epoch();

  eosio::check(age_sec >= MIN_CLAIM_AGE_SEC, "stake too young to claim");

  stakes_tbl.modify(stakes, eosio::same_payer, [&](auto& a)
                                               {
                                                 a.last_claim_time = cur;
                                                 a.last_claim_age += age_sec;
                                               });
}

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if(action == "transfer"_n.value) {
    execute_action<stake>(eosio::name(receiver), eosio::name(code),
                          &stake::transfer_handler);
  } else if (code == receiver) {
    switch(action) {
      EOSIO_DISPATCH_HELPER(stake, (unstake)(claim));
    }
  }
}
