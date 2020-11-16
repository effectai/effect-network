#include "stake.hpp"

void stake::init(name token_contract, const symbol& stake_symbol,
                 const symbol& claim_symbol, uint32_t age_limit,
                 uint64_t scale_factor, uint32_t unstake_delay_sec,
                 uint32_t stake_bonus_age, time_point_sec stake_bonus_deadline) {
  require_auth(get_self());

  eosio::check(is_account(token_contract), "token contract does not exsist");
  eosio::check(stake_symbol.is_valid(), "invalid stake symbol");
  eosio::check(claim_symbol.is_valid(), "invalid claim symbol");
  eosio::check(age_limit > 0, "age limit must be positive");
  eosio::check(scale_factor > 0, "scale factor must be positive");
  eosio::check(unstake_delay_sec > 0, "unstake delay must be positive");
  eosio::check(stake_bonus_age > 0, "stake bonus age must be positive");
  eosio::check(stake_bonus_deadline > time_point_sec(now()),
               "stake bonus deadline must be in future");

  config_table config_tbl(_self, _self.value);
  eosio::check(!config_tbl.exists(), "already initialized");

  config_tbl.set(config{token_contract,
                        stake_symbol,
                        claim_symbol,
                        age_limit,
                        scale_factor,
                        unstake_delay_sec,
                        stake_bonus_age,
                        stake_bonus_deadline}, get_self());
}

void stake::update(uint32_t unstake_delay_sec, uint32_t stake_bonus_age,
                   time_point_sec stake_bonus_deadline) {
  require_auth(get_self());

  config_table config_tbl(_self, _self.value);

  eosio::check(config_tbl.exists(), "config table not initialized");
  eosio::check(unstake_delay_sec > 0, "unstake delay must be positive");
  eosio::check(stake_bonus_age > 0, "stake bonus age must be positive");

  auto config = config_tbl.get();
  config.unstake_delay_sec = unstake_delay_sec;
  config.stake_bonus_age = stake_bonus_age;
  config.stake_bonus_deadline = stake_bonus_deadline;

  config_tbl.set(config, get_self());
}

void stake::create(const symbol& stake_symbol, const symbol& claim_symbol,
                   name token_contract, uint32_t unstake_delay_sec) {
  require_auth(_self);

  stat_table stat_tbl(_self, stake_symbol.code().raw());

  eosio::check(stake_symbol.is_valid(), "invalid stake symbol");
  eosio::check(claim_symbol.is_valid(), "invalid claim symbol");
  eosio::check(unstake_delay_sec > 0, "unstake delay must be positive");

  auto existing = stat_tbl.find(stake_symbol.code().raw());
  eosio::check(existing == stat_tbl.end(), "stake symbol already exsists");

  stat_tbl.emplace(_self,
                   [&](auto& s)
                   {
                     s.stake_symbol = stake_symbol;
                     s.claim_symbol = claim_symbol;
                     s.unstake_delay_sec = unstake_delay_sec;
                     s.token_contract = token_contract;
                   });

}

void stake::transfer_handler(name from, name to, asset quantity, std::string memo) {
  config_table config_tbl(_self, _self.value);

  // stake when receiving funds
  if (to == get_self()) {
    // validate the asset symbol
    auto sym = quantity.symbol;
    auto raw_sym_code = sym.code().raw();
    eosio::check(sym.is_valid(), "invalid symbol name");
    stat_table stat_tbl(_self, raw_sym_code);
    auto existing = stat_tbl.find(raw_sym_code);
    const auto& st = *existing;

    // if the symbol is not created for staking or the transfer originates from
    // a different contract then pass through
    if (existing != stat_tbl.end() && st.token_contract == get_first_receiver()) {
      auto config = config_tbl.get();


      // stakes transfers require a specific memo
      eosio::check(memo == STAKE_MEMO, "only stake transactions are accepted");

      // validate the contract that is staking
      // redundant check that is also in the if statement above
      eosio::check(st.token_contract == get_first_receiver(), "wrong token contract");

      stake_table stakes_tbl(_self, from.value);
      auto stakes = stakes_tbl.find(raw_sym_code);

      eosio::check(stakes != stakes_tbl.end(), "you must open a stake before staking");

      uint32_t start_age = 0;
      if (time_point_sec(now()) <= config.stake_bonus_deadline) {
        start_age += config.stake_bonus_age;
      }

      if (stakes->amount.amount == 0) {
        // this is a new stake
        stakes_tbl.modify(stakes, eosio::same_payer,
                          [&](auto& st)
                          {
                            st.amount = quantity;
                            st.last_claim_time = time_point_sec(now());
                            st.last_claim_age = start_age;
                          });
      } else {
        // top-up an existing stake; a claim is mandatory
        eosio::check(stakes->last_claim_time == time_point_sec(now()),
                     "you must claim before you can top-up a stake");

        asset new_amount = stakes->amount + quantity;
        uint32_t new_last_claim_age = ((stakes->last_claim_age * ((double) stakes->amount.amount / new_amount.amount)) + (start_age * ((double) quantity.amount / new_amount.amount)));

        stakes_tbl.modify(stakes,
                          eosio::same_payer,
                          [&](auto& stk)
                          {
                            stk.last_claim_age = new_last_claim_age;
                            stk.amount = new_amount;
                          });
      }
    }
  }
}

void stake::open(name owner, const eosio::symbol& symbol, name ram_payer) {
  require_auth(ram_payer);

  auto sym_code_raw = symbol.code().raw();
  stat_table stat_tbl(_self, sym_code_raw);
  const auto& st = stat_tbl.get(sym_code_raw, "symbol is not set up for staking");
  eosio::check(st.stake_symbol == symbol, "symbol precision mismatch");

  stake_table stakes_tbl(_self, owner.value);
  auto stakes = stakes_tbl.find(sym_code_raw);
  if(stakes == stakes_tbl.end()) {
    stakes_tbl.emplace(ram_payer,
                       [&](auto& a)
                       {
                         a.amount = eosio::asset{0, symbol};
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

  auto sym_code_raw = sym.code().raw();
  stat_table stat_tbl(_self, sym_code_raw);
  const auto& stat = stat_tbl.get(sym_code_raw, "symbol is not set up for staking");

  stake_table stakes_tbl(get_self(), owner.value);
  auto& stakes = stakes_tbl.get(sym_code_raw, "no stake found");
  eosio::check(stakes.amount.amount >= quantity.amount, "not enough staked");
  eosio::check(stakes.amount.symbol == sym, "symbol precision mismatch");

  // users should claim before they unstake! any unclaimed tokens are
  // lost or reduced.
  if (stakes.amount.amount == quantity.amount) {
    stakes_tbl.erase(stakes);
  } else {
    stakes_tbl.modify(stakes,
                      eosio::same_payer,
                      [&](auto& stk)
                      {
                        stk.amount -= quantity;
                      });
  }

  auto unstake_time = time_point_sec(now()) + stat.unstake_delay_sec;

  unstake_table unstake_tbl(get_self(), owner.value);
  auto to = unstake_tbl.find(sym_code_raw);

  if (to == unstake_tbl.end()) {
    unstake_tbl.emplace(owner,
                        [&](auto& stk)
                        {
                          stk.amount = quantity;
                          stk.time = unstake_time;
                        });
  } else {
    unstake_tbl.modify(to,
                       eosio::same_payer,
                       [&](auto& stk)
                       {
                         stk.amount += quantity;
                         stk.time = unstake_time;
                       });
  }

  // auto claim unstaked tokens after tokens have matured
  eosio::transaction out{};
  out.actions.emplace_back(permission_level{_self, "active"_n},
                           _self,
                           "refund"_n,
                           std::make_tuple(owner, sym));
  out.delay_sec = stat.unstake_delay_sec;
  cancel_deferred(owner.value); // TODO: Remove this line when replacing deferred trxs is fixed
  out.send(owner.value, owner, true);
}

void stake::refund(name owner, const eosio::symbol& symbol) {
  auto sym_code_raw = symbol.code().raw();
  stat_table stat_tbl(_self, sym_code_raw);
  const auto& stat = stat_tbl.get(sym_code_raw, "symbol is not set up for staking");

  unstake_table unstake_tbl(get_self(), owner.value);
  const auto& unstakes = unstake_tbl.get(sym_code_raw, "no unstake exists");

  eosio::check(time_point_sec(now()) >= unstakes.time, "unstake is still pending");

  asset refund_amount = unstakes.amount;

  unstake_tbl.erase(unstakes);

  action(permission_level{_self, "active"_n},
         stat.token_contract,
         "transfer"_n,
         std::make_tuple(_self, owner, refund_amount, REFUND_MEMO))
    .send();
}

void stake::claim(name owner, const eosio::symbol& symbol) {
  require_auth(owner);

  config_table config_tbl(_self, _self.value);
  eosio::check(config_tbl.exists(), "not initialized");
  auto config = config_tbl.get();

  auto sym_code_raw = symbol.code().raw();
  stat_table stat_tbl(_self, sym_code_raw);
  const auto& stat = stat_tbl.get(sym_code_raw, "symbol is not set up for staking");

  stake_table stakes_tbl(_self, owner.value);
  const auto& stakes_chk = stakes_tbl.find(sym_code_raw);
  eosio::check(stakes_chk != stakes_tbl.end(), "stake does not exist");
  const auto& stakes = *stakes_chk;

  // calculate the new and old stake age
  auto cur = time_point_sec(now());
  auto claim_stop_time = time_point_sec(CLAIM_STOP_TIME);
  auto age_limit = MAX_STAKE_AGE_DAYS * SECONDS_PER_DAY;
  if (stakes.last_claim_time < claim_stop_time) {
    cur = std::min(cur, claim_stop_time);
    age_limit = config.age_limit; // 200 days
  }
  auto age = (microseconds) (cur - stakes.last_claim_time);
  uint32_t age_last = stakes.last_claim_age;
  double aged = age.to_seconds();
  double age_new = std::min(age_last + aged, (double) age_limit);

  eosio::check(aged > 0.0, "nothing to claim");

  if (stakes.last_claim_time < claim_stop_time) {
    // calculate the claimable amount
    double limitf = (aged - (double) (age_limit - age_last)) / aged;
    double min_part = std::min(1.0, 1.0 - limitf);
    double max_part = std::max(0.0, limitf);
    double avg = (((age_last + age_new) / 2.0) * min_part) + (age_new * max_part);
    uint64_t claim_amount = (stakes.amount.amount * aged * (avg / SECONDS_PER_DAY)) / \
      (double) (config.scale_factor / 10000.0);

    print("claiming ", claim_amount, " for age ", (uint64_t) age_new);

    if (claim_amount > 0) {
      action(permission_level{_self, "active"_n},
             stat.token_contract,
             "issue"_n,
             std::make_tuple(owner, asset(claim_amount, stat.claim_symbol), CLAIM_MEMO))
        .send();
    }
  }

  stakes_tbl.modify(stakes,
                    eosio::same_payer,
                    [&](auto& a)
                    {
                      a.last_claim_time = cur;
                      a.last_claim_age = age_new;
                    });
}

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (action == "transfer"_n.value) {
    execute_action<stake>(eosio::name(receiver), eosio::name(code),
                          &stake::transfer_handler);
  } else if (code == receiver) {
    switch(action) {
      EOSIO_DISPATCH_HELPER(stake, (init)(update)(create)(open)(unstake)(refund)(claim));
    }
  }
}
