#pragma once

#include <eosio/eosio.hpp>
#include <eosio/symbol.hpp>
#include <eosio/asset.hpp>
#include <eosio/singleton.hpp>
#include <eosio/binary_extension.hpp>

using namespace eosio;

namespace proposalns {
  typedef std::tuple<eosio::extended_asset, eosio::time_point_sec> pay_entry;

  struct [[eosio::table("config"), eosio::contract("proposals")]] config {
    uint32_t cycle_duration_sec;
    uint32_t cycle_voting_duration_sec;
    eosio::extended_asset proposal_cost;
    uint32_t quorum;
    uint16_t current_cycle;
    eosio::name dao_contract;
  };

  struct [[eosio::table("cycle"), eosio::contract("proposals")]] cycle {
    uint64_t id;
    eosio::time_point_sec start_time;
    std::vector<eosio::extended_asset> budget;
    uint32_t quorum;
    eosio::binary_extension<uint8_t> state;
    eosio::binary_extension<std::vector<eosio::extended_asset>> spent;
    eosio::binary_extension<uint64_t> total_vote_weight;
    uint64_t primary_key() const { return id; }
  };

  struct [[eosio::table("proposal"), eosio::contract("proposals")]] proposal {
    uint64_t id;
    eosio::name author;
    std::string content_hash;
    std::vector<pay_entry> pay;
    std::map<uint8_t, uint32_t> vote_counts;
    uint8_t state;
    uint16_t cycle;
    uint8_t category;

    std::optional<std::string> proof_hash;
    std::optional<eosio::checksum256> transaction_hash;

    eosio::binary_extension<eosio::name> msig_name;

    uint64_t primary_key() const { return id; }
    uint64_t by_author() const { return author.value; }
    uint64_t by_cycle() const { return cycle; }

    EOSLIB_SERIALIZE(proposal, (id)(author)(content_hash)(pay)(vote_counts)
                     (state)(cycle)(category)(proof_hash)(transaction_hash)
                     (msig_name));
  };

  struct [[eosio::table("vote"), eosio::contract("proposals")]] vote {
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

  typedef multi_index<"cycle"_n, cycle> cycle_table;

  typedef multi_index<
    "proposal"_n, proposal,
    indexed_by<"author"_n, const_mem_fun<proposal, uint64_t, &proposal::by_author>>,
    indexed_by<"cycle"_n, const_mem_fun<proposal, uint64_t, &proposal::by_cycle>>>
  proposal_table;

  typedef multi_index<
    "vote"_n, vote,
    indexed_by<"composite"_n, const_mem_fun<vote, uint128_t, &vote::composite_key>>,
    indexed_by<"voter"_n, const_mem_fun<vote, uint64_t, &vote::by_voter>>,
    indexed_by<"proposal"_n, const_mem_fun<vote, uint64_t, &vote::by_proposal>>>
  vote_table;

  typedef singleton<"config"_n, config> config_table;
}
