#pragma once

#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <eosio/asset.hpp>
#include <eosio/datastream.hpp>
#include <eosio/datastream.hpp>
#include <eosio/crypto.hpp>
#include <eosio/binary_extension.hpp>
#include "../vaccount/vaccount-shared.hpp"
#include "../dao/atomicassets-interface.hpp"
#include "atomicdata.hpp"

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

  // assets is uint64_t, templates are uint32_t, collections and schemas are eosio::name
  typedef std::variant <eosio::name, uint32_t, uint64_t> QUALI_ATOMIC_ADDRESS;

  // this allocates some data for in the future
  struct QualiDataFilter {
    uint8_t attr_id;
    uint8_t filter_type;
    std::vector<uint8_t> data;
  };

  struct Quali {
    uint8_t type;
    QUALI_ATOMIC_ADDRESS address;
    std::optional<QualiDataFilter> data_filter;
  };

  enum QualiType {
    Collection = 0,
    Template = 1,
    Asset = 2
  };

  force(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds) :
    eosio::contract(receiver, code, ds), _settings(_self, _self.value)
  {};

  [[eosio::action]]
  void init(eosio::name vaccount_contract,
            uint32_t force_vaccount_id,
            uint32_t payout_delay_sec,
            uint32_t release_task_delay_sec,
            eosio::name fee_contract,
            float fee_percentage);

  [[eosio::action]]
  void mkcampaign(vaccount::vaddress owner,
                  content content,
                  uint32_t max_task_time,
                  eosio::extended_asset reward,
                  std::vector<Quali> qualis,
                  eosio::name payer,
                  vaccount::sig sig);

  [[eosio::action]]
  void editcampaign(uint32_t campaign_id,
                    vaccount::vaddress owner,
                    content content,
                    bool paused,
                    eosio::extended_asset reward,
                    std::vector<Quali> qualis,
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
               uint32_t repetitions,
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
  void cleartasks(uint32_t batch_id,
                  uint32_t campaign_id);

  [[eosio::action]]
  void reservetask(uint32_t campaign_id,
                   uint32_t account_id,
                   std::optional<std::vector<uint64_t>> quali_assets,
                   eosio::name payer,
                   vaccount::sig sig);

  [[eosio::action]]
  void submittask(uint32_t campaign_id,
                  uint32_t task_idx,
                  std::string data,
                  uint32_t account_id,
                  eosio::name payer,
                  vaccount::sig sig);

  [[eosio::action]]
  void payout(uint64_t payment_id,
              std::optional<eosio::signature> sig);

  [[eosio::on_notify("*::transfer")]]
  void transfer_handler(eosio::name from_id,
			eosio::name to_id,
			eosio::asset quantity,
			std::string memo);

  template <typename T>
  void cleanTable(name code, uint64_t account, const uint32_t batchSize){
    T db(code, account);
    uint32_t counter = 0;
    auto itr = db.begin();
    while (itr != db.end() && counter++ < batchSize) {
      itr = db.erase(itr);
    }
  }

  [[eosio::action]]
  void clean() {
    require_auth(_self);
    cleanTable<repsdone_table>(_self, _self.value, 100);
    cleanTable<acctaskidx_table>(_self, _self.value, 100);
    cleanTable<submission_table>(_self, _self.value, 100);
    cleanTable<reservation_table>(_self, _self.value, 100);
    cleanTable<batch_table>(_self, _self.value, 100);
    cleanTable<campaign_table>(_self, _self.value, 100);
    cleanTable<payment_table>(_self, _self.value, 100);
  };


private:
  inline bool has_expired(time_point_sec base_time, uint32_t delay) {
    return time_point_sec(now()) >= (base_time + delay);
  }

  inline bool past_delay(time_point_sec base_time, std::string type_delay) {
    auto delay = NULL;

    if (type_delay == "payout") delay = get_settings().payout_delay_sec;
    else if (type_delay == "release_task") delay = get_settings().release_task_delay_sec;
    return time_point_sec(now()) >= (base_time + delay);
  }

  struct reservetask_params {
    uint8_t mark;
    uint32_t last_task_done;
    uint32_t campaign_id;
    EOSLIB_SERIALIZE(reservetask_params, (mark)(last_task_done)(campaign_id));
  };

  struct submittask_params {
    uint8_t mark;
    uint32_t campaign_id;
    uint32_t task_idx;
    std::string data;
    EOSLIB_SERIALIZE(submittask_params, (mark)(campaign_id)(task_idx)(data));
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
    eosio::extended_asset reward;
    bool paused;
    std::vector<Quali> qualis;
    EOSLIB_SERIALIZE(editcampaign_params, (mark)(campaign_id)(content)(reward)(paused)(qualis));
  };

  struct rmcampaign_params {
    uint8_t mark;
    uint32_t campaign_id;
    EOSLIB_SERIALIZE(rmcampaign_params, (mark)(campaign_id));
  };

  struct mkbatch_params {
    uint8_t mark;
    uint32_t id;
    uint32_t campaign_id;
    content content;
    EOSLIB_SERIALIZE(mkbatch_params, (mark)(id)(campaign_id)(content));
  };

  struct publishbatch_params {
    uint8_t mark;
    uint64_t batch_id;
    EOSLIB_SERIALIZE(publishbatch_params, (mark)(batch_id));
  };

  struct rmbatch_params {
    uint8_t mark;
    uint32_t id;
    uint32_t campaign_id;
    EOSLIB_SERIALIZE(rmbatch_params, (mark)(id)(campaign_id));
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
    uint32_t tasks_done;
    uint32_t total_tasks;
    uint32_t active_batch;
    uint32_t num_batches;
    vaccount::vaddress owner;
    bool paused;
    content content;
    uint32_t max_task_time;
    eosio::extended_asset reward;
    std::vector<Quali> qualis;

    uint64_t primary_key() const { return (uint64_t) id; }

    EOSLIB_SERIALIZE(campaign, (id)(tasks_done)(total_tasks)(active_batch)(num_batches)(owner)
                     (paused)(content)(max_task_time)(reward)(qualis))
  };

  struct [[eosio::table]] batch {
    uint32_t id;
    uint32_t campaign_id;
    content content;
    eosio::extended_asset balance;
    uint32_t repetitions;
    uint32_t tasks_done;
    uint32_t num_tasks;
    uint32_t start_task_idx;
    eosio::extended_asset reward;

    uint64_t primary_key() const { return (uint64_t{campaign_id} << 32) | id; }
  };

  struct [[eosio::table]] acctaskidx {
    uint32_t account_id;
    uint32_t campaign_id;
    uint32_t value;
    uint64_t primary_key() const { return (uint64_t{account_id} << 32) | campaign_id; }
  };

  struct [[eosio::table]] repsdone {
    uint32_t campaign_id;
    uint32_t task_idx;
    uint32_t value;
    uint64_t primary_key() const { return (uint64_t{campaign_id} << 32) | task_idx; }
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

  struct [[eosio::table]] reservation {
    // auto incrementing id to ensure task ordering. the id gets
    // "bumped" everytime the reservation expires and is refreshed.
    uint64_t id;
    uint32_t task_idx;
    std::optional<uint32_t> account_id;
    uint64_t batch_id;
    eosio::time_point_sec reserved_on;
    uint32_t campaign_id;

    uint64_t primary_key() const { return id; }
    // index to check if user has a reservation for a
    // campaign. account_id in the front, so can be used as account
    // filter
    uint64_t by_account_campaign() const { return (uint64_t{account_id.value()} << 32) | campaign_id; }
    uint64_t by_camp() const { return campaign_id; }
    uint64_t by_account() const { return account_id.value(); }
  };

  struct [[eosio::table]] submission {
    uint64_t id;
    uint32_t campaign_id;
    uint32_t task_idx;
    std::optional<uint32_t> account_id;
    std::optional<content> content;
    uint64_t batch_id;
    std::optional<std::string> data;
    bool paid;
    eosio::time_point_sec submitted_on;

    uint64_t primary_key() const { return id; }
    uint64_t by_batch() const { return batch_id; }

    EOSLIB_SERIALIZE(submission, (id)(campaign_id)(task_idx)(account_id)(content)(batch_id)
                     (data)(paid)(submitted_on))
  };

  inline void require_vaccount(uint32_t acc_id, std::vector<char> msg, vaccount::sig sig) {
    eosio::name vacc_contract = get_settings().vaccount_contract;
    vaccount::account_table acc_tbl(vacc_contract, vacc_contract.value);
    vaccount::account acc = acc_tbl.get((uint64_t) acc_id, "account row not found");
    vaccount::require_auth(msg, acc.address, sig);
  };

  typedef multi_index<"campaign"_n, campaign> campaign_table;
  typedef multi_index<"batch"_n, batch> batch_table;
  typedef multi_index<"repsdone"_n, repsdone> repsdone_table;
  typedef multi_index<"acctaskidx"_n, acctaskidx> acctaskidx_table;

  typedef multi_index<
    "reservation"_n, reservation,
    indexed_by<"acccamp"_n, const_mem_fun<reservation, uint64_t, &reservation::by_account_campaign>>,
    indexed_by<"camp"_n, const_mem_fun<reservation, uint64_t, &reservation::by_camp>>,
    indexed_by<"acc"_n, const_mem_fun<reservation, uint64_t, &reservation::by_account>>>
  reservation_table;

  typedef multi_index<
    "submission"_n, submission,
    indexed_by<"batch"_n, const_mem_fun<submission, uint64_t, &submission::by_batch>>>
  submission_table;

  typedef multi_index<"payment"_n, payment,
                      indexed_by<"accbatch"_n, const_mem_fun<payment, uint128_t, &payment::by_account_batch>>,
                      indexed_by<"acc"_n, const_mem_fun<payment, uint64_t, &payment::by_account>>>
  payment_table;

  const eosio::name settings_pk = "settings"_n;

  struct [[eosio::table]] settings {
    eosio::name vaccount_contract;
    uint32_t force_vaccount_id;
    uint32_t payout_delay_sec;
    uint32_t release_task_delay_sec;
    eosio::name fee_contract;
    float fee_percentage;
    uint64_t primary_key() const { return eosio::name{"settings"}.value; }
  };

  typedef multi_index<"settings"_n, settings> settings_table;
  settings_table _settings;

  settings get_settings() {
    auto itr = _settings.find(settings_pk.value);

    eosio::check(itr != _settings.end(), "Effect Network is receiving maintenance, please try again in 5 minutes" );

    return *itr;
  }
};
