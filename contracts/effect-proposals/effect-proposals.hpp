#pragma once

#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>
#include <eosio/time.hpp>
#include <eosio/crypto.hpp>
#include <eosio/system.hpp>
#include <eosio/singleton.hpp>
#include <eosio/binary_extension.hpp>

#include "effect-proposals-shared.hpp"

using namespace eosio;
using namespace proposal;

class [[eosio::contract("effect-proposals")]] proposals : public eosio::contract {
public:
  using contract::contract;

  inline static const std::string RESERVATION_MEMO = "proposal";

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

  enum CycleState {
    CyclePending = 0,
    CycleFinalized = 1
  };

  proposals(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) :
    eosio::contract(receiver, code, ds), _config(_self, _self.value)
  {};

  [[eosio::action]]
  void init(uint32_t cycle_duration_sec,
            uint32_t cycle_voting_duration_sec,
            eosio::extended_asset proposal_cost,
            uint32_t quorum,
            eosio::time_point_sec first_cycle_start_time,
            eosio::name dao_contract);

  [[eosio::action]]
  void update(uint32_t cycle_duration_sec,
              uint32_t cycle_voting_duration_sec,
              uint32_t quorum,
              eosio::extended_asset proposal_cost);

  [[eosio::action]]
  void createprop(eosio::name author,
                  std::vector<pay_entry> pay,
                  std::string content_hash,
                  uint8_t category,
                  uint16_t cycle,
                  std::optional<eosio::checksum256> transaction_hash);

  [[eosio::action]]
  void updateprop(uint64_t id,
                  std::vector<pay_entry> pay,
                  std::string content_hash,
                  uint8_t category,
                  uint16_t cycle,
                  std::optional<eosio::checksum256> transaction_hash);

  [[eosio::action]]
  void addvote(eosio::name voter,
               uint64_t prop_id,
               uint8_t vote_type);

  [[eosio::action]]
  void addcycle(eosio::time_point_sec start_time,
                std::vector<eosio::extended_asset> budget);

  [[eosio::action]]
  void updatecycle(uint64_t id,
                   eosio::time_point_sec start_time,
                   std::vector<eosio::extended_asset> budget);

  [[eosio::action]]
  void cycleupdate();

  [[eosio::action]]
  void executeprop(uint64_t id);

  [[eosio::action]]
  void processcycle(eosio::name account,
                    uint64_t id);


  void transfer_handler(eosio::name from,
                        eosio::name to,
                        eosio::asset quantity,
                        std::string memo);

private:
  struct [[eosio::table]] cycle {
    uint64_t id;
    eosio::time_point_sec start_time;
    std::vector<eosio::extended_asset> budget;
    uint32_t quorum;
    eosio::binary_extension<uint8_t> state;
    eosio::binary_extension<std::vector<eosio::extended_asset>> spent;
    eosio::binary_extension<uint64_t> total_vote_weight;
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

  struct [[eosio::table]] reservation {
    eosio::name owner;
    uint64_t primary_key() const { return owner.value; }
  };

  typedef multi_index<
    "proposal"_n, proposal,
    indexed_by<"author"_n, const_mem_fun<proposal, uint64_t, &proposal::by_author>>,
    indexed_by<"cycle"_n, const_mem_fun<proposal, uint64_t, &proposal::by_cycle>>>
  proposal_table;
  typedef multi_index<"cycle"_n, cycle> cycle_table;
  typedef multi_index<"reservation"_n, reservation> reservation_table;

  config_table _config;
};
