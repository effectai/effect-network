#pragma once

#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <eosio/asset.hpp>
#include <eosio/datastream.hpp>
#include <eosio/crypto.hpp>
#include <eosio/binary_extension.hpp>
#include "../vaccount/vaccount-shared.hpp"

using namespace eosio;

inline uint32_t now() {
  static uint32_t current_time = eosio::current_time_point().sec_since_epoch();
  return current_time;
}

class [[eosio::contract("force")]] force : public eosio::contract {
private:
  struct account;

public:
  const uint8_t MAX_REPETITIONS = 100;
  using contract::contract;
  using camp_quali_map = std::map<uint32_t, uint8_t>;

  typedef std::tuple<uint8_t, std::string> content;

  enum QualiType {
    Inclusive = 0,
    Exclusive = 1
  };

  template <typename T>
  void cleanTable(name code, uint64_t account, const uint32_t batchSize){
    T db(code, account);
    uint32_t counter = 0;
    auto itr = db.begin();
    while (itr != db.end() && counter++ < batchSize) {
      itr = db.erase(itr);
    }
  }

  force(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) :
    eosio::contract(receiver, code, ds), _config(_self, _self.value)
  {};

  [[eosio::action]]
  void init(eosio::name vaccount_contract,
            uint32_t force_vaccount_id,
            uint32_t payout_delay_sec,
            uint32_t release_task_delay_sec);

  [[eosio::action]]
  void mkcampaign(vaccount::vaddress owner,
                  content content,
                  eosio::extended_asset reward,
                  camp_quali_map qualis,
                  eosio::name payer,
                  vaccount::sig sig);

  [[eosio::action]]
  void editcampaign(uint32_t campaign_id,
                    vaccount::vaddress owner,
                    content content,
                    eosio::extended_asset reward,
                    camp_quali_map qualis,
                    eosio::name payer,
                    vaccount::sig sig);

  [[eosio::action]]
  void rmcampaign(uint32_t campaign_id,
                  vaccount::vaddress owner,
                  vaccount::sig sig);

  [[eosio::action]]
  void mkbatch(uint32_t id,
               uint32_t campaign_id,
               content content,
               checksum256 task_merkle_root,
               uint32_t repetitions,
               std::optional<camp_quali_map> qualis,
               eosio::name payer,
               vaccount::sig sig);

  [[eosio::action]]
  void publishbatch(uint64_t batch_id,
                    uint32_t num_tasks,
                    vaccount::sig sig);

  [[eosio::action]]
  void rmbatch(uint32_t id,
               uint32_t campaign_id,
               vaccount::sig sig);

  [[eosio::action]]
  void closebatch(uint64_t batch_id,
                  vaccount::vaddress owner,
                  vaccount::sig sig);

  [[eosio::action]]
  void reservetask(std::vector<eosio::checksum256> proof,
                   std::vector<uint8_t> position,
                   std::vector<char> data,
                   uint32_t campaign_id,
                   uint32_t batch_id,
                   uint32_t account_id,
                   eosio::name payer,
                   vaccount::sig sig);

  [[eosio::action]]
  void submittask(uint64_t task_id,
                  std::string data,
                  uint32_t account_id,
                  uint64_t batch_id,
                  eosio::name payer,
                  vaccount::sig sig);

  [[eosio::action]]
  void payout(uint64_t payment_id,
              std::optional<eosio::signature> sig);

  [[eosio::action]]
  void releasetask(uint64_t task_id,
                   uint32_t account_id,
                   eosio::name payer,
                   vaccount::sig sig);

  [[eosio::action]]
  void reclaimtask(uint64_t task_id,
                   uint32_t account_id,
                   eosio::name payer,
                   vaccount::sig sig);

  [[eosio::action]]
  void mkquali(content content,
               uint32_t account_id,
               eosio::name payer,
               vaccount::sig sig);

  [[eosio::action]]
  void assignquali(uint32_t quali_id,
                   uint32_t user_id,
                   eosio::name payer,
                   vaccount::sig sig);

  [[eosio::action]]
  void uassignquali(uint32_t quali_id,
                    uint32_t user_id,
                    eosio::name payer,
                    vaccount::sig sig);

  [[eosio::on_notify("*::vtransfer")]]
  void vtransfer_handler(uint64_t from_id,
                         uint64_t to_id,
                         extended_asset quantity,
                         std::string memo,
                         vaccount::sig sig,
                         std::optional<extended_asset> fee);

  [[eosio::action]]
  void clean() {
    require_auth(_self);
    cleanTable<submission_table>(_self, _self.value, 100);
    cleanTable<batch_table>(_self, _self.value, 100);
    cleanTable<campaign_table>(_self, _self.value, 100);
    cleanTable<payment_table>(_self, _self.value, 100);
    cleanTable<batchjoin_table>(_self, _self.value, 100);
  };

private:
  inline bool past_delay(time_point_sec base_time, std::string type_delay) {
    auto delay = NULL;

    if (type_delay == "payout") delay = _config.get().payout_delay_sec;
    else if (type_delay == "release_task") delay = _config.get().release_task_delay_sec;
    return time_point_sec(now()) > (base_time + delay);
  }

  // Helper. Assumes we already did require_vaccount on account_id
  void require_batchjoin(uint32_t account_id,
                         uint64_t batch_id,
                         bool try_to_join,
                         eosio::name payer);

  void require_merkle(std::vector<eosio::checksum256> proof,
                      std::vector<uint8_t> position,
                      eosio::checksum256 root,
                      eosio::checksum256 data);

  struct reservetask_params {
    uint8_t mark;
    checksum256 leaf_hash;
    uint32_t campaign_id;
    uint32_t batch_id;
    EOSLIB_SERIALIZE(reservetask_params, (mark)(leaf_hash)(campaign_id)(batch_id));
  };

  struct submittask_params {
    uint8_t mark;
    uint64_t submission_id;
    std::string data;
    EOSLIB_SERIALIZE(submittask_params, (mark)(submission_id)(data));
  };

  struct mkcampaign_params {
    uint8_t mark;
    content content;
    EOSLIB_SERIALIZE(mkcampaign_params, (mark)(content));
  };

  struct editcampaign_params {
    uint8_t mark;
    uint32_t campaign_id;
    content content;
    EOSLIB_SERIALIZE(editcampaign_params, (mark)(campaign_id)(content));
  };

  struct rmcampaign_params {
    uint8_t mark;
    uint32_t campaign_id;
    EOSLIB_SERIALIZE(rmcampaign_params, (mark)(campaign_id));
  };

  struct mkquali_params {
    uint8_t mark;
    uint32_t account_id;
    content content;
    EOSLIB_SERIALIZE(mkquali_params, (mark)(account_id)(content));
  };

  struct mkbatch_params {
    uint8_t mark;
    uint32_t id;
    uint32_t campaign_id;
    content content;
    checksum256 task_merkle_root;
    EOSLIB_SERIALIZE(mkbatch_params, (mark)(id)(campaign_id)(content)(task_merkle_root));
  };

  struct closebatch_params {
    uint8_t mark;
    uint64_t id;
    EOSLIB_SERIALIZE(closebatch_params, (mark)(id));
  };

  struct reopenbatch_params {
    uint8_t mark;
    uint64_t id;
    EOSLIB_SERIALIZE(reopenbatch_params, (mark)(id));
  };

  struct rmbatch_params {
    uint8_t mark;
    uint32_t id;
    uint32_t campaign_id;
    EOSLIB_SERIALIZE(rmbatch_params, (mark)(id)(campaign_id));
  };

  struct joinbatch_params {
    uint8_t mark;
    uint64_t batch_id;
    EOSLIB_SERIALIZE(joinbatch_params, (mark)(batch_id));
  };

  struct payout_params {
    uint8_t mark;
    uint32_t payment_id;
    EOSLIB_SERIALIZE(payout_params, (mark)(payment_id));
  };

  struct task_params {
    uint8_t mark;
    uint64_t task_id;
    uint32_t account_id;
    EOSLIB_SERIALIZE(task_params, (mark)(task_id)(account_id));
  };

  struct [[eosio::table]] campaign {
    uint32_t id;
    vaccount::vaddress owner;
    content content;
    eosio::extended_asset reward;
    eosio::binary_extension<std::map<uint32_t, uint8_t>> qualis;

    uint64_t primary_key() const { return (uint64_t) id; }

    EOSLIB_SERIALIZE(campaign, (id)(owner)(content)(reward)(qualis))
  };

  struct [[eosio::table]] batch {
    uint32_t id;
    uint32_t campaign_id;
    content content;
    checksum256 task_merkle_root;
    eosio::extended_asset balance;
    uint32_t repetitions;
    uint32_t tasks_done;
    uint32_t num_tasks;
    eosio::binary_extension<std::map<uint32_t, uint8_t>> qualis;
    eosio::binary_extension<eosio::extended_asset> reward;

    uint64_t primary_key() const { return (uint64_t{campaign_id} << 32) | id; }
    uint32_t by_campaign() const { return campaign_id; }
  };

  struct [[eosio::table]] batchjoin {
    // This id is only necessary for uniqueness of primary key
    uint64_t id;
    uint32_t account_id;
    uint64_t batch_id;
    uint64_t primary_key() const { return id; }
    uint128_t by_account_batch() const { return (uint128_t{batch_id} << 64) | (uint64_t{account_id} << 32); }
  };

  struct [[eosio::table]] payment {
    uint64_t id;
    uint32_t account_id;
    uint64_t batch_id;
    eosio::extended_asset pending;
    eosio::time_point_sec last_submission_time;

    uint64_t primary_key() const { return id; }
    uint128_t by_account_batch() const {
      return (uint128_t{batch_id} << 64) | (uint64_t{account_id} << 32);
    }
    uint64_t by_account() const { return (uint64_t) account_id; }
  };

  struct [[eosio::table]] submission {
    uint64_t id;
    std::optional<uint32_t> account_id;
    std::optional<content> content;
    checksum256 leaf_hash;
    uint64_t batch_id;
    std::optional<std::string> data;
    bool paid;
    eosio::time_point_sec submitted_on;

    uint64_t primary_key() const { return id; }
    checksum256 by_leaf() const { return leaf_hash; }
    uint64_t by_batch() const { return batch_id; }

    EOSLIB_SERIALIZE(submission, (id)(account_id)(content)(leaf_hash)(batch_id)
                     (data)(paid)(submitted_on))
  };

  struct [[eosio::table]] quali {
    uint32_t id;
    content content;
    uint32_t account_id;

    uint64_t primary_key() const { return uint64_t{id}; }
    uint32_t by_account() const { return account_id; }
  };

  struct [[eosio::table]] userquali {
    uint32_t account_id;
    uint32_t quali_id;

    uint64_t primary_key() const { return (uint64_t{account_id} << 32) | quali_id; }
  };

  inline void require_vaccount(uint32_t acc_id, std::vector<char> msg, vaccount::sig sig) {
    eosio::name vacc_contract = _config.get().vaccount_contract;
    vaccount::account_table acc_tbl(vacc_contract, vacc_contract.value);
    vaccount::account acc = acc_tbl.get((uint64_t) acc_id, "account row not found");
    vaccount::require_auth(msg, acc.address, sig);
  };

  struct [[eosio::table]] config {
    eosio::name vaccount_contract;
    uint32_t force_vaccount_id;
    uint32_t payout_delay_sec;
    uint32_t release_task_delay_sec;
  };

  typedef singleton<"config"_n, config> config_table;

  typedef multi_index<"campaign"_n, campaign> campaign_table;
  typedef multi_index<"batch"_n, batch> batch_table;
  typedef multi_index<"batchjoin"_n, batchjoin,
                      indexed_by<"accbatch"_n, const_mem_fun<batchjoin, uint128_t, &batchjoin::by_account_batch>>> batchjoin_table;

  typedef multi_index<"submission"_n, submission,
                      indexed_by<"leaf"_n, const_mem_fun<submission, checksum256, &submission::by_leaf>>,
                      indexed_by<"batch"_n, const_mem_fun<submission, uint64_t, &submission::by_batch>>>
  submission_table;

  typedef multi_index<"payment"_n, payment,
                      indexed_by<"accbatch"_n, const_mem_fun<payment, uint128_t, &payment::by_account_batch>>,
                      indexed_by<"acc"_n, const_mem_fun<payment, uint64_t, &payment::by_account>>>
  payment_table;

  typedef multi_index<"quali"_n, quali> quali_table;
  typedef multi_index<"userquali"_n, userquali> user_quali_table;

  config_table _config;
};
