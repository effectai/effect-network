#pragma once

#include <eosio/eosio.hpp>
#include <eosio/symbol.hpp>
#include <eosio/asset.hpp>
#include <eosio/singleton.hpp>

using namespace eosio;

namespace proposal {
  struct [[eosio::table("config"), eosio::contract("effect-proposals")]] config {
    uint32_t cycle_duration_sec;
    uint32_t cycle_voting_duration_sec;
    eosio::extended_asset proposal_cost;
    uint32_t quorum;
    uint16_t current_cycle;
    eosio::name dao_contract;
  };

  struct [[eosio::table("vote"), eosio::contract("effect-proposals")]] vote {
    uint64_t id;
    eosio::name voter;
    uint64_t proposal_id;
    uint8_t type;
    uint32_t weight;
    std::optional<eosio::name> delegatee;
    std::optional<std::string> comment_hash;

    uint64_t primary_key() const { return id; }
    uint128_t composite_key() const { return (uint128_t{proposal_id} << 64) | voter.value; }
    uint64_t by_voter() const { return voter.value; }
    uint64_t by_proposal() const { return proposal_id; }

    EOSLIB_SERIALIZE(vote, (id)(voter)(proposal_id)(type)(weight)(delegatee)
                     (comment_hash));
  };

  typedef multi_index<
    "vote"_n, vote,
    indexed_by<"composite"_n, const_mem_fun<vote, uint128_t, &vote::composite_key>>,
    indexed_by<"voter"_n, const_mem_fun<vote, uint64_t, &vote::by_voter>>,
    indexed_by<"proposal"_n, const_mem_fun<vote, uint64_t, &vote::by_proposal>>>
  vote_table;

  typedef singleton<"config"_n, config> config_table;
}
