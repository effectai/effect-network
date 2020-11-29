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

  typedef std::tuple<eosio::extended_asset, eosio::time_point_sec> pay_entry;

  enum ProposalState {
    Pending = 0,
    Accepted,
    Rejected,
    Executed,
    Finished,
    InDispute
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
  void init(uint32_t cycle_duration_sec,
            eosio::extended_asset proposal_cost,
            uint32_t quorum,
            eosio::time_point_sec first_cycle_start_time,
            eosio::name dao_contract);

  [[eosio::action]]
  void update(uint32_t cycle_duration_sec,
              eosio::extended_asset proposal_cost);

  [[eosio::action]]
  void createprop(eosio::name author,
                  std::vector<pay_entry> pay,
                  std::string content_hash,
                  uint8_t category,
                  uint16_t cycle,
                  std::optional<eosio::checksum256> transaction_hash);

  [[eosio::action]]
  void executeprop();

  [[eosio::action]]
  void processprop(uint64_t id);

  [[eosio::action]]
  void updateprop(uint64_t id,
                  std::vector<pay_entry> pay,
                  std::string content_hash,
                  uint8_t category,
                  uint16_t cycle,
                  std::optional<eosio::checksum256> transaction_hash);

  [[eosio::action]]
  void addvote();

  [[eosio::action]]
  void updatevote();

  [[eosio::action]]
  void addproof();

  [[eosio::action]]
  void addcycle(std::vector<eosio::extended_asset> budget);

private:
  void perform_cycle_update();

  struct [[eosio::table]] config {
    uint32_t cycle_duration_sec;
    eosio::extended_asset proposal_cost;
    uint32_t quorum;
    uint16_t current_cycle;
    eosio::name dao_contract;
  };

  struct [[eosio::table]] cycle {
    uint64_t id;
    eosio::time_point_sec start_time;
    std::vector<eosio::extended_asset> budget;
    uint32_t quorum;
    uint64_t primary_key() const { return id; }
  };

  struct [[eosio::table]] proposal {
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

    uint64_t primary_key() const { return id; }
    uint64_t by_author() const { return author.value; }
    uint64_t by_cycle() const { return cycle; }

    EOSLIB_SERIALIZE(proposal, (id)(author)(content_hash)(pay)(vote_counts)
                     (state)(cycle)(category)(proof_hash)(transaction_hash));
  };

  struct [[eosio::table]] vote {
    uint64_t id;
    eosio::name voter;
    uint64_t proposal_id;
    uint8_t type;
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
