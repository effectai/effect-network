#include "stake.hpp"

void stake::init(name token_contract, symbol_code stake_symbol,
                 symbol_code claim_symbol, uint32_t age_limit,
                 uint64_t scale_factor, uint32_t unstake_delay_sec) {
  require_auth(get_self());

  eosio::check(stake_symbol.is_valid(), "invalid symbol name");
  eosio::check(claim_symbol.is_valid(), "invalid symbol name");
  eosio::check(age_limit > 0, "age limit must be positive");
  eosio::check(scale_factor > 0, "scale factor must be positive");
  eosio::check(unstake_delay_sec > 0, "unstake delay must be positive");

  config_table config_tbl(_self, _self.value);
  eosio::check(!config_tbl.exists(), "already initialized");

  config_tbl.set(config{token_contract,
                        stake_symbol,
                        claim_symbol,
                        age_limit,
                        scale_factor,
                        unstake_delay_sec}, get_self());
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

    if (stakes == stakes_tbl.end()) {
      // this is a new stake
      stakes_tbl.emplace(get_self(),
                         [&](auto& st)
                         {
                           st.amount = quantity;
                           st.last_claim_time = time_point_sec(now());
                           st.last_claim_age = 0;
                         });
    } else {
      // dilute an existing stake; a claim is mandatory
      eosio::check(stakes->last_claim_time == time_point_sec(now()),
                   "you must claim before diluting your stake");

      asset new_amount = stakes->amount + quantity;
      uint32_t new_last_claim_age = (stakes->last_claim_age * stakes->amount.amount) / new_amount.amount;

      stakes_tbl.modify(stakes, eosio::same_payer,
                        [&](auto& stk)
                        {
                          stk.last_claim_age = new_last_claim_age;
                          stk.amount = new_amount;
                        });
    }
  }
}

void stake::unstake(name owner, asset quantity) {
  require_auth(owner);

  auto sym = quantity.symbol;
  eosio::check(sym.is_valid(), "invalid symbol name");

  eosio::check(quantity.is_valid(), "invalid quantity");
  eosio::check(quantity.amount > 0, "must unstake positive quantity");

  stake_table stakes_tbl(get_self(), owner.value);
  auto& stakes = stakes_tbl.get(sym.code().raw(), "no stake found");
  eosio::check(stakes.amount.amount > quantity.amount, "not enough staked");

  // users should claim before they unstake! any unclaimed tokens are
  // lost or reduced.
  if (stakes.amount.amount == quantity.amount) {
    stakes_tbl.erase(stakes);
  } else {
    stakes_tbl.modify(stakes, eosio::same_payer, [&](auto& stk)
                                                 {
                                                   stk.amount -= quantity;
                                                 });
  }

  unstake_table unstake_tbl(get_self(), owner.value);
  auto to = unstake_tbl.find(sym.code().raw());
  if (to == unstake_tbl.end()) {
    unstake_tbl.emplace(owner, [&](auto& stk)
                               {
                                 stk.amount = quantity;
                                 stk.time = time_point_sec(now());
                               });
  } else {
    unstake_tbl.modify(to, eosio::same_payer,
                       [&](auto& stk)
                       {
                         stk.amount += quantity;
                         stk.time = time_point_sec(now());
                       });
  }

  // Auto claim unstaked tokens after tokens have matured
  transaction out{};
  out.actions.emplace_back(
    permission_level{owner, "active"_n},
    config.token_contract,
    "refund"_n,
    std::make_tuple(owner)
  );
  out.delay_sec = TIME_TO_MATURE;
  out.send(owner, owner, true);

  print("Scheduled claim with a delay of ", TIME_TO_MATURE)
}

void stake::refund(name owner) {
  config_table config_tbl(_self, _self.value);
  auto config = config_tbl.get();

  unstake_table unstake_tbl(get_self(), owner.value);
  const auto& unstakes = unstake_tbl.get(config.stake_symbol.raw(), "no unstake exists");

  auto unstake_at = unstakes.time + config.unstake_delay_sec;

  eosio::check(time_point_sec(now()) > unstake_at, "unstake is still pending");

  asset refund_amount = unstakes.amount;

  unstake_tbl.erase(unstakes);

  action(permission_level{_self, "active"_n},
         config.token_contract,
         "transfer"_n,
         std::make_tuple(_self, owner, refund_amount, REFUND_MEMO)
         ).send();
}

void stake::claim(name owner, symbol_code token) {
  require_auth(owner);

  eosio::check(token.is_valid(), "invalid symbol name");

  stake_table stakes_tbl(get_self(), owner.value);
  const auto& stakes_chk = stakes_tbl.find(token.raw());
  eosio::check(stakes_chk != stakes_tbl.end(), "stake does not exist");
  const auto& stakes = *stakes_chk;

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
      EOSIO_DISPATCH_HELPER(stake, (init)(unstake)(refund)(claim));
    }
  }
}
