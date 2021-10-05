#pragma once

#include <eosio/system.hpp>
#include <eosio/crypto.hpp>
#include <eosio/singleton.hpp>
#include <eosio/asset.hpp>
#include <eosio/datastream.hpp>


#include "../vaccount/vaccount-shared.hpp"

using namespace eosio;

class [[eosio::contract("force")]] force : public eosio::contract {
private:
  struct account;

public:
  using contract::contract;

  typedef std::tuple<uint8_t, std::string> content;

  force(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) :
    eosio::contract(receiver, code, ds), _config(_self, _self.value)
  {};

  [[eosio::action]]
  void init(eosio::name vaccount_contract);

  [[eosio::action]]
  void mkcampaign(vaccount::vaddress owner,
                  content content,
                  eosio::extended_asset reward,
                  eosio::name payer,
                  vaccount::sig sig);

  [[eosio::action]]
  void mkbatch(uint32_t id,
               uint32_t campaign_id,
               content content,
               checksum256 task_merkle_root,
               uint32_t num_tasks,
               eosio::name payer,
               vaccount::sig sig);

  [[eosio::action]]
  void joincampaign(uint32_t account_id,
                    uint32_t campaign_id,
                    eosio::name payer,
                    vaccount::sig sig);

private:
  struct mkcampaign_params {
    uint8_t mark;
    uint32_t id;
    content content;
    EOSLIB_SERIALIZE(mkcampaign_params, (mark)(id)(content));
  };

  struct mkbatch_params {
    uint8_t mark;
    uint32_t id;
    uint32_t campaign_id;
    content content;
    checksum256 task_merkle_root;
    EOSLIB_SERIALIZE(mkbatch_params, (mark)(id)(campaign_id)(content)(task_merkle_root));
  };

  struct joincampaign_params {
    uint8_t mark;
    uint32_t campaign_id;
    EOSLIB_SERIALIZE(joincampaign_params, (mark)(campaign_id));
  };

  struct [[eosio::table]] campaign {
    uint32_t id;
    vaccount::vaddress owner;
    content content;
    eosio::extended_asset reward;

    uint64_t primary_key() const { return (uint64_t) id; }

    EOSLIB_SERIALIZE(campaign, (id)(owner)(content)(reward))
  };

  struct [[eosio::table]] batch {
    uint32_t id;
    uint32_t campaign_id;
    content content;
    checksum256 task_merkle_root;
    eosio::extended_asset balance;
    uint32_t repetitions;
    uint32_t tasks_done;

    uint64_t primary_key() const { return (uint64_t{campaign_id} << 32) | id; }
    uint32_t by_campaign() const { return campaign_id; }
  };

  struct [[eosio::table]] campaignjoin {
    uint32_t account_id;
    uint32_t campaign_id;
    uint64_t primary_key() const { return (uint64_t{campaign_id} << 32) | account_id; }
  };

  inline void require_vaccount(uint32_t acc_id, std::vector<char> msg, vaccount::sig sig) {
    eosio::name vacc_contract = _config.get().vaccount_contract;
    vaccount::account_table acc_tbl(vacc_contract, vacc_contract.value);
    vaccount::account acc = acc_tbl.get((uint64_t) acc_id, "account row not found");
    vaccount::require_auth(msg, acc.address, sig);
  };

  struct [[eosio::table]] config {
    eosio::name vaccount_contract;
  };

  typedef singleton<"config"_n, config> config_table;

  typedef multi_index<"campaign"_n, campaign> campaign_table;
  typedef multi_index<"batch"_n, batch> batch_table;
  typedef multi_index<"campaignjoin"_n, campaignjoin> campaignjoin_table;

  config_table _config;
};
