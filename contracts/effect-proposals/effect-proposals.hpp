#pragma once

#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>
#include <eosio/time.hpp>
#include <eosio/crypto.hpp>
#include <eosio/system.hpp>
#include <eosio/singleton.hpp>

using namespace eosio;
using namespace std;

inline uint32_t now() {
  static uint32_t current_time = current_time_point().sec_since_epoch();
  return current_time;
}

class [[eosio::contract("effect-proposals")]] proposals : public eosio::contract {
public:
  using contract::contract;

  enum ProposalState {
    Pending = 0,
    Accepted,
    Rejected,
    Executed,
    Finished,
    InDispute
  };

  enum ProposalCategory {
    Governance = 0,
    Technical,
    FundingSales,
    FundingMarketing,
    FundingDesign,
    FundingProgramming
  };

  enum VoteType {
    Abstain = 0,
    Yes = 1,
    No = 2
  };

  proposals(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) :
    eosio::contract(receiver, code, ds), _config(_self, _self.value)
  {};

  [[eosio::action]]
  void init();

  [[eosio::action]]
  void createprop(eosio::name author,
                  eosio::extended_asset pay,
                  std::string content_hash,
                  uint8_t category,
                  uint16_t cycle,
                  eosio::time_point_sec deadline,
                  std::optional<eosio::checksum256> transaction_hash);

  [[eosio::action]]
  void executeprop();

  [[eosio::action]]
  void processprop(uint64_t id);

  [[eosio::action]]
  void updateprop(uint64_t id,
                  eosio::extended_asset pay,
                  std::string content_hash,
                  uint8_t category, uint16_t cycle);

  [[eosio::action]]
  void addvote();

  [[eosio::action]]
  void updatevote();

  [[eosio::action]]
  void addproof();

private:
  void require_cycle_update();

  struct [[eosio::table]] config {
    uint32_t cycle_duration_sec;
    uint32_t cycle_voting_duration_sec;
    eosio::extended_asset proposal_cost;
    uint16_t current_cycle;
  };

  struct [[eosio::table]] cycle {
    uint64_t id;
    eosio::time_point_sec start_time;
    std::vector<eosio::extended_asset> budget;
    std::vector<eosio::extended_asset> paid;
    uint32_t quorum;
    uint32_t min_vote_power;
    uint64_t primary_key() const { return id; }
  };

  struct [[eosio::table]] proposal {
    uint64_t id;
    eosio::name author;
    std::string content_hash;
    eosio::extended_asset pay;
    eosio::time_point_sec deadline;
    std::map<uint8_t, uint32_t> vote_counts;
    uint8_t state;
    uint16_t cycle;
    uint8_t category;

    std::string proof_hash;
    // std::optional<eosio::checksum256> transaction_hash;

    uint64_t primary_key() const { return id; }
    uint64_t by_author() const { return author.value; }
    uint64_t by_cycle() const { return cycle; }
  };

  struct [[eosio::table]] vote {
    uint64_t id;
    eosio::name voter;
    uint64_t proposal_id;
    std::optional<uint8_t> type;
    std::optional<eosio::name> delegatee;
    std::optional<std::string> comment_hash;

    uint64_t primary_key() const { return id; }
    uint64_t by_voter() const { return voter.value; }
    uint64_t by_proposal() const { return proposal_id; }
  };

  typedef multi_index<
    "proposal"_n, proposal,
    indexed_by<"author"_n, const_mem_fun<proposal, uint64_t, &proposal::by_author>>,
    indexed_by<"cycle"_n, const_mem_fun<proposal, uint64_t, &proposal::by_cycle>>>
  proposal_table;
  typedef multi_index<"cycle"_n, cycle> cycle_table;

  typedef singleton<"config"_n, config> config_table;

  config_table _config;
};
