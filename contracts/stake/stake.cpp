#include "stake.hpp"

void stake::dostake(name owner, asset value) {
  require_auth(owner);
  stake_table stakes(get_self(), owner.value);
}

void stake::unstake(name owner) {
  require_auth(owner);
  stake_table stakes(get_self(), owner.value);
}

void stake::claim(name owner) {
  require_auth(owner);
  stake_table stakes(get_self(), owner.value);
}

EOSIO_DISPATCH(stake, (dostake));
