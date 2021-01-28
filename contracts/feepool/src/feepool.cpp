#include <feepool.hpp>

ACTION feepool::clear() {
  require_auth(get_self());

  balances_table _balances(get_self(), get_self().value);

  // Delete all records in _balances table
  auto msg_itr = _balances.begin();
  while (msg_itr != _balances.end()) {
    msg_itr = _balances.erase(msg_itr);
  }
}

void feepool::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    // validate the asset symbol -> 
    // todo: check if only EFX
    auto sym = quantity.symbol;
    auto raw_sym_code = sym.code().raw();
    eosio::check(sym.is_valid(), "invalid symbol name");

    auto cycle = 1;

    // Init the _balances table
    balances_table _balances(get_self(), get_self().value);

    // Find the record from _balances table
    auto bal_itr = _balances.find(cycle);
    if (bal_itr == _balances.end()) {
      // Create a balance record if it does not exist
      _balances.emplace(from, [&](auto& bal) {
        bal.cycle   = cycle;
        bal.balance = quantity.amount;
      });
    } else {
      // Modify a balance record if it exists
      _balances.modify(bal_itr, from, [&](auto& bal) {
        bal.balance += quantity.amount;
      });
    }
  }
}

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (action == "transfer"_n.value) {
    execute_action<feepool>(eosio::name(receiver), eosio::name(code), &feepool::transfer_handler);
  } else if (code == receiver) {
    switch (action) {
      EOSIO_DISPATCH_HELPER(feepool, (clear))
    }
  }
}
