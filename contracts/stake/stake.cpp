#include "stake.hpp"

void stake::init(name token_contract, symbol_code stake_symbol,
                 symbol_code claim_symbol, uint32_t age_limit,
                 uint64_t scale_factor) {
  require_auth(get_self());

  eosio::check(stake_symbol.is_valid(), "invalid symbol name");
  eosio::check(claim_symbol.is_valid(), "invalid symbol name");
  eosio::check(age_limit > 0, "age limit must be positive");
  eosio::check(scale_factor > 0, "scale factor must be positive");

  config_table config_tbl(_self, _self.value);
  eosio::check(!config_tbl.exists(), "already initialized");

  config_tbl.set(config{token_contract,
                        stake_symbol,
                        claim_symbol,
                        age_limit,
                        scale_factor}, get_self());
}

void stake::transfer_handler(name from, name to, asset quantity, std::string memo) {
  // stake when receiving funds
  if (to == get_self()) {
    // stakes transfers require a specific memo
    eosio::check(memo == STAKE_MEMO, "only stake transactions are accepted");
    auto sym = quantity.symbol;

    // validate the asset
    config_table config_tbl(_self, _self.value);
    eosio::check(config_tbl.exists(), "not initialized");
    auto config = config_tbl.get();
    eosio::check(config.stake_symbol == sym.code(), "asset cant be staked");

    // validate the contract that is staking
    eosio::check(config.token_contract == get_code(), "contract is not allowed to stake");

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

  // calculate the new and old stake age
  auto cur = time_point_sec(now());
  time_point age = (time_point) (cur - stakes.last_claim_time);
  uint32_t age_last = stakes.last_claim_age;
  double aged = age.sec_since_epoch();
  double age_new = std::min(age_last + aged, (double) config.age_limit);

  eosio::check(aged > 0.0, "nothing to claim");

  // calculate the claimable amount
  double limitf = (aged - (double) (config.age_limit - age_last)) / aged;
  double min_part = std::min(1.0, 1.0 - limitf);
  double max_part = std::max(0.0, limitf);
  double avg = (((age_last + age_new) / 2.0) * min_part) + (age_new * max_part);
  uint64_t claim_amount = (stakes.amount.amount * aged * avg) / (double) config.scale_factor;

  eosio::check(claim_amount > 0, "nothing to claim");

  print("claiming ", claim_amount, " for age ", age_new);

  stakes_tbl.modify(stakes, eosio::same_payer, [&](auto& a)
                                               {
                                                 a.last_claim_time = cur;
                                                 a.last_claim_age = age_new;
                                               });

  symbol sym = symbol(config.claim_symbol, 4);

  action(permission_level{_self, "active"_n},
         config.token_contract,
         "issue"_n,
         std::make_tuple(owner, asset(claim_amount, sym), CLAIM_MEMO)
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
