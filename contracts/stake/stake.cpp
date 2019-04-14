#include "stake.hpp"

void stake::init(name token_contract, symbol_code stake_symbol,
                 symbol_code claim_symbol) {
  require_auth(get_self());

  eosio::check(stake_symbol.is_valid(), "invalid symbol name");
  eosio::check(claim_symbol.is_valid(), "invalid symbol name");

  config_table config_tbl(_self, _self.value);
  eosio::check(!config_tbl.exists(), "already initialized");

  config_tbl.set(config{token_contract,
                        stake_symbol,
                        claim_symbol}, get_self());
}

void stake::transfer_handler(name from, name to, asset quantity, std::string memo) {
  // stake when receiving funds
  if (to == get_self()) {
    eosio::check(memo == STAKE_MEMO, "only stake transactions are accepted");
    auto sym = quantity.symbol;

    stake_table stakes_tbl(get_self(), from.value);
    auto stakes = stakes_tbl.find(sym.code().raw());

    eosio::check(stakes == stakes_tbl.end(), "stake upgrading not yet implemented");
    stakes_tbl.emplace(get_self(), [&](auto& st)
                                   {
                                     st.amount = quantity;
                                     st.last_claim_time = time_point_sec(now());
                                     st.last_claim_age = 0;
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
  const auto& stakes_chk = stakes_tbl.find(token.raw());
  eosio::check(stakes_chk != stakes_tbl.end(), "stake does not exist");
  const auto& stakes = *stakes_chk;

  eosio::check(token.is_valid(), "invalid symbol name");

  config_table config_tbl(_self, _self.value);
  eosio::check(config_tbl.exists(), "not initialized");
  auto config = config_tbl.get();

  auto cur = time_point_sec(now());
  time_point age = (time_point) (cur - stakes.last_claim_time);
  uint32_t age_sec = age.sec_since_epoch();
  uint32_t new_age = stakes.last_claim_age + age_sec;

  eosio::check(age_sec >= MIN_CLAIM_AGE_SEC, "stake too young to claim");

  stakes_tbl.modify(stakes, eosio::same_payer, [&](auto& a)
                                               {
                                                 a.last_claim_time = cur;
                                                 a.last_claim_age = new_age;
                                               });

  uint64_t claim_amount = (stakes.amount.amount * age_sec * ((age_sec + new_age) / 2)) / 1000000;

  std::string memo("stake claim");
  symbol sym = symbol(config.claim_symbol, 4);

  action(permission_level{_self, "active"_n},
         config.token_contract,
         "issue"_n,
         std::make_tuple(owner, asset(claim_amount, sym), memo)
         ).send();
}

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (action == "transfer"_n.value) {
    execute_action<stake>(eosio::name(receiver), eosio::name(code),
                          &stake::transfer_handler);
  } else if (code == receiver) {
    switch(action) {
      EOSIO_DISPATCH_HELPER(stake, (init)(unstake)(claim));
    }
  }
}
