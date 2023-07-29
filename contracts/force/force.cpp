#include "force.hpp"

void force::init(eosio::name vaccount_contract, uint32_t force_vaccount_id,
                 uint32_t payout_delay_sec, uint32_t release_task_delay_sec) {
  eosio::require_auth(_self);
  _config.set(config{vaccount_contract,
                     force_vaccount_id,
                     payout_delay_sec,
                     release_task_delay_sec}, _self);
}

void force::mkcampaign(vaccount::vaddress owner, content content, eosio::extended_asset reward,
                       camp_quali_map qualis, eosio::name payer, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  uint32_t camp_id = camp_tbl.available_primary_key();
  // TODO: add owner, reward, and qualis to the params
  mkcampaign_params params = {9, content};
  std::vector<char> msg_bytes = pack(params);
  vaccount::require_auth(msg_bytes, owner, sig);

  camp_tbl.emplace(payer,
                   [&](auto& c)
                   {
                     c.id = camp_id;
                     c.tasks_done = 0;
                     c.active_batch = 0;
                     c.content = content;
                     c.owner = owner;
                     c.reward = reward;
                     c.qualis.emplace(qualis);
                     c.total_tasks = 0;
                   });
}

void force::editcampaign(uint32_t campaign_id, vaccount::vaddress owner, content content,
                         eosio::extended_asset reward, camp_quali_map qualis,
                         eosio::name payer, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(campaign_id, "campaign does not exist");

  editcampaign_params params = {10, campaign_id, content};
  std::vector<char> msg_bytes = pack(params);
  vaccount::require_auth(msg_bytes, owner, sig);

  camp_tbl.modify(camp,
                  payer,
                  [&](auto& c)
                  {
                    c.content = content;
                    c.reward = reward;
                    c.qualis.emplace(qualis);
                  });
}

void force::rmcampaign(uint32_t campaign_id, vaccount::vaddress owner, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto camp_itr = camp_tbl.find(campaign_id);
  eosio::check(camp_itr != camp_tbl.end(), "campaign does not exist");

  rmcampaign_params params = {11, campaign_id};
  std::vector<char> msg_bytes = pack(params);
  vaccount::require_auth(msg_bytes, owner, sig);

  camp_tbl.erase(camp_itr);
}

void force::mkbatch(uint32_t id,
                    uint32_t campaign_id,
                    content content,
                    checksum256 task_merkle_root,
                    uint32_t repetitions,
                    eosio::name payer,
                    vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(campaign_id, "campaign not found");

  mkbatch_params params = {8, id, campaign_id, content, task_merkle_root};
  std::vector<char> msg_bytes = pack(params);
  vaccount::require_auth(msg_bytes, camp.owner, sig);

  eosio::check(repetitions < force::MAX_REPETITIONS, "too many repetitions");
  batch_table batch_tbl(_self, _self.value);
  batch_tbl.emplace(payer,
                    [&](auto& b)
                    {
                      b.campaign_id = campaign_id;
                      b.id = id;
                      b.content = content;
                      b.task_merkle_root = task_merkle_root;
                      b.balance = {0, camp.reward.get_extended_symbol()};
                      b.repetitions = repetitions;
                      b.reward.emplace(camp.reward);
                      b.num_tasks = 0;
                    });
}

void force::rmbatch(uint32_t id, uint32_t campaign_id, vaccount::sig sig) {
  batch_table batch_tbl(_self, _self.value);
  campaign_table camp_tbl(_self, _self.value);

  uint64_t batch_pk =(uint64_t{campaign_id} << 32) | id;

  auto& camp = camp_tbl.get(campaign_id, "campaign not found");

  auto batch_itr = batch_tbl.find(batch_pk);
  eosio::check(batch_itr != batch_tbl.end(), "batch does not exist");

  rmbatch_params params = {12, id, campaign_id};

  std::vector<char> msg_bytes = pack(params);
  printhex(&msg_bytes[0], msg_bytes.size());
  vaccount::require_auth(msg_bytes, camp.owner, sig);

  batch_tbl.erase(batch_itr);
}

void force::cleartasks(uint32_t batch_id, uint32_t campaign_id) {
  uint64_t batch_pk =(uint64_t{campaign_id} << 32) | batch_id;

  // tasks can only be cleared if the batch is removed
  batch_table batch_tbl(_self, _self.value);
  auto batch_itr = batch_tbl.find(batch_pk);
  eosio::check(batch_itr == batch_tbl.end(), "batch still exists");

  // remove the submissions in this batch
  submission_table submission_tbl(_self, _self.value);
  auto by_batch = submission_tbl.get_index<"batch"_n>();
  auto itr_start = by_batch.lower_bound(batch_pk);
  auto itr_end = by_batch.upper_bound(batch_pk);
  int erased = 0;

  for (; itr_start != itr_end; itr_start++) {
    erased++;
    auto& subm = *itr_start;
    submission_tbl.erase(subm);
    if (erased >= 100)
      break;
  }
}

void force::publishbatch(uint64_t batch_id, uint32_t num_tasks, vaccount::sig sig) {
  batch_table batch_tbl(_self, _self.value);
  auto& batch = batch_tbl.get(batch_id, "batch not found");

  eosio::check(batch.num_tasks == 0, "batch already published");
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(batch.campaign_id, "campaign not found");

  settings settings = get_settings();

  reopenbatch_params params = {17, batch_id};
  vaccount::require_auth(pack(params), camp.owner, sig);

  eosio::extended_asset task_reward = batch.reward.value();
  eosio::extended_asset batch_fee(task_reward.quantity.amount * settings.fee_percentage *
                                  num_tasks * batch.repetitions,
                                  task_reward.get_extended_symbol());

  auto quantity_needed = task_reward.quantity * num_tasks * batch.repetitions + batch_fee.quantity;
  eosio::check(batch.balance.quantity >= quantity_needed, "batch is underfunded");

  batch_tbl.modify(batch,
                   eosio::same_payer,
                   [&](auto& b) {
                     b.num_tasks = num_tasks;
                     b.balance -= batch_fee;
                   });

  camp_tbl.modify(camp,
                  eosio::same_payer,
                  [&](auto& b) {
                    b.total_tasks += num_tasks;
                  });

  if (batch_fee.quantity.amount > 0) {
    action(permission_level{_self, "xfer"_n},
           settings.vaccount_contract,
           "withdraw"_n,
           std::make_tuple((uint64_t) settings.force_vaccount_id,
                           settings.fee_contract,
                           batch_fee,
                           std::string("batch " + std::to_string(batch_id)),
                           NULL,
                           NULL))
      .send();
  }
}

void force::mkquali(content content, uint32_t account_id, eosio::name payer, vaccount::sig sig) {
  mkquali_params params = {18, account_id, content};
  require_vaccount(account_id, pack(params), sig);

  quali_table quali_tbl(_self, _self.value);
  uint32_t quali_id = quali_tbl.available_primary_key();
  quali_tbl.emplace(payer,
                    [&](auto& q)
                    {
                      q.id = quali_id;
                      q.content = content;
                      q.account_id = account_id;
                    });
}


void force::editquali(uint32_t quali_id, content content, uint32_t account_id,
                      eosio::name payer, vaccount::sig sig) {
  quali_table quali_table(_self, _self.value);
  auto& quali = quali_table.get(quali_id, "qualification does not exist");

  editquali_params params = {20, quali_id, content};
  std::vector<char> msg_bytes = pack(params);
  require_vaccount(account_id, pack(params), sig);

  quali_table.modify(quali, payer, [&] (auto& q) { q.content = content; });
}

void force::assignquali(uint32_t quali_id, uint32_t user_id, std::string value,
                        eosio::name payer, vaccount::sig sig) {
  quali_table quali_tbl(_self, _self.value);
  auto quali = quali_tbl.get(quali_id, "qualification not found");
  assignquali_params params = {19, quali_id, user_id, value};
  require_vaccount(quali.account_id, pack(params), sig);

  user_quali_table user_quali_tbl(_self, _self.value);
  user_quali_tbl.emplace(payer,
                         [&](auto& q)
                         {
                           q.account_id = user_id;
                           q.quali_id = quali_id;
                           q.value.emplace(value);
                         });
}

void force::uassignquali(uint32_t quali_id, uint32_t user_id, eosio::name payer, vaccount::sig sig) {
  quali_table quali_tbl(_self, _self.value);
  auto quali = quali_tbl.get(quali_id, "qualification not found");
  rmbatch_params params = {20, quali_id, user_id};
  require_vaccount(quali.account_id, pack(params), sig);

  uint64_t user_quali_key = (uint64_t{user_id} << 32) | quali_id;
  user_quali_table user_quali_tbl(_self, _self.value);
  auto user_quali = user_quali_tbl.find(user_quali_key);
  eosio::check(user_quali != user_quali_tbl.end(), "user does not have quali");
  user_quali_tbl.erase(user_quali);
}

void force::reservetask(uint32_t campaign_id,
                        uint32_t account_id,
                        uint32_t last_task_done,
                        name payer,
                        vaccount::sig sig) {
  reservetask_params params = {6, last_task_done, campaign_id};
  require_vaccount(account_id, pack(params), sig);

  campaign_table campaign_tbl(_self, _self.value);
  auto& campaign = campaign_tbl.get(campaign_id, "campaign not found");

  uint32_t batch_id = campaign.active_batch;
  uint64_t batch_pk = (uint64_t{campaign_id} << 32) | batch_id;
  batch_table batch_tbl(_self, _self.value);
  auto& batch = batch_tbl.get(batch_pk, "no batches available");

  eosio::check(campaign.tasks_done < batch.start_task_idx + batch.num_tasks,
               "no more tasks in campaign");

  // TODO: check qualifications

  // check if user has a reservation already
  uint64_t acccamp_pk = (uint64_t{account_id} << 32) | campaign_id;
  reservation_table reservation_tbl(_self, _self.value);
  auto by_acccamp = reservation_tbl.get_index<"acccamp"_n>();
  auto existing_reservation = by_acccamp.find(acccamp_pk);
  eosio::check(existing_reservation == by_acccamp.end(), "you already have a reservation");

  // find the last task idx the user completed in the campaign
  acctaskidx_table acctaskidx_tbl(_self, _self.value);
  auto user_last_task_check = acctaskidx_tbl.find(acccamp_pk);

  if (user_last_task_check == acctaskidx_tbl.end()) {
    acctaskidx_tbl.emplace(payer,
                           [&](auto& i)
                           {
                             i.campaign_id = campaign_id;
                             i.account_id = account_id;
                             i.value = 0;
                           });
  }

  auto& user_last_task = acctaskidx_tbl.get(acccamp_pk);

  eosio::check(campaign.total_tasks > user_last_task.value,
               "no more tasks for you");

  // reserve suitable task idx to the user
  uint32_t task_idx = std::max(campaign.tasks_done, user_last_task.value);

  // check if there is an earlier expired tasks to claim instead
  auto by_camp = reservation_tbl.get_index<"camp"_n>();
  auto by_camp_itr = by_camp.find(campaign_id);
  if (by_camp_itr != by_camp.end() &&
      past_delay(by_camp_itr->reserved_on, "release_task") &&
      // only claim reservations that come before our assigned task idx
      task_idx >= by_camp_itr->task_idx) {
    auto& res = *by_camp_itr;
    uint64_t bump_id = reservation_tbl.available_primary_key();
    reservation_tbl.modify(res,
                           payer,
                           [&](auto& r)
                           {
                             // we bump the ID as this one will not expire for a while
                             r.id = bump_id;
                             r.account_id = account_id;
                             r.reserved_on = time_point_sec(now());
                           });
    // NOTE: early return here
    return;
  }

  // check how many reps are done for this task
  uint64_t repsdone_pk = (uint64_t{campaign_id} << 32) | task_idx;
  repsdone_table repsdone_tbl(_self, _self.value);
  auto repetitions_done = repsdone_tbl.find(repsdone_pk);

  // check if this task is done
  bool has_reps_done_row = !(repetitions_done == repsdone_tbl.end());
  bool task_done = false;
  if (batch.repetitions == 1) {
    task_done = true;
  } else {
    if (!has_reps_done_row) {
      repsdone_tbl.emplace(payer,
                           [&](auto& i)
                           {
                             i.campaign_id = campaign_id;
                             i.task_idx = task_idx;
                             i.value = 1;
                           });
    } else {
      if (repetitions_done->value + 1 == batch.repetitions)
        task_done = true;
    }
  }

  // update campaign counters if task is done
  acctaskidx_tbl.modify(user_last_task, payer, [&](auto& i) { i.value = task_idx + 1; });
  if (task_done) {
    if (has_reps_done_row)
      repsdone_tbl.erase(repetitions_done);

    bool batch_done = (campaign.tasks_done >= batch.num_tasks);
    campaign_tbl.modify(campaign,
                        eosio::same_payer,
                        [&](auto& c) {
                          c.tasks_done += 1;
                          if (batch_done) {
                            c.active_batch += 1;
                          }
                        });
  }

  uint64_t reservation_id = reservation_tbl.available_primary_key();
  reservation_tbl.emplace(payer,
                          [&](auto& r)
                          {
                            r.id = reservation_id;
                            r.task_idx = task_idx;
                            r.account_id = account_id;
                            r.batch_id = batch_pk;
                            r.reserved_on = time_point_sec(now());
                            r.campaign_id = campaign_id;
                          });
}

void force::payout(uint64_t payment_id, std::optional<eosio::signature> sig) {
  payment_table payment_tbl(_self, _self.value);

  auto& payment = payment_tbl.get(payment_id, "payment not found");

  payout_params params = {13, payment.account_id};
  require_vaccount(payment.account_id, pack(params), sig);
  eosio::check(past_delay(payment.last_submission_time, "payout"), "not past payout delay");
  eosio::check(payment.pending.quantity.amount > 0, "nothing to payout");

  payment_tbl.erase(payment);
  settings settings = get_settings();

  action(
    permission_level{_self, "xfer"_n},
    settings.vaccount_contract,
    "vtransfer"_n,
    std::make_tuple((uint64_t) settings.force_vaccount_id,
                    (uint64_t) payment.account_id,
                    payment.pending,
                    std::string(""),
                    NULL,
                    NULL))
  .send();
}

void force::submittask(uint64_t submission_id, std::string data, uint32_t account_id,
                       uint64_t batch_id, name payer, vaccount::sig sig) {
  submission_table submission_tbl(_self, _self.value);
  payment_table payment_tbl(_self, _self.value);
  batch_table batch_tbl(_self, _self.value);
  campaign_table campaign_tbl(_self, _self.value);

  auto& sub = submission_tbl.get(submission_id, "submission not found");
  eosio::check(sub.account_id.has_value(), "task not reserved");
  eosio::check(sub.account_id == account_id, "different account");
  eosio::check(!sub.data.has_value(), "already submitted");
  submission_tbl.modify(sub, payer, [&](auto& s) { s.data.emplace(data); });

  auto& batch = batch_tbl.get(sub.batch_id, "batch not found");
  auto& camp = campaign_tbl.get(batch.campaign_id);

  batch_tbl.modify(batch, eosio::same_payer, [&](auto& b) { b.tasks_done++; });

  if (batch.reward.value().quantity.amount > 0) {
    submittask_params params = {5, submission_id, data};
    require_vaccount(account_id, pack(params), sig);

    uint64_t payment_id = payment_tbl.available_primary_key();

    uint128_t payment_sk = (uint128_t{batch_id} << 64) | (uint64_t{account_id} << 32);
    auto payment_idx = payment_tbl.get_index<"accbatch"_n>();
    auto payment = payment_idx.find(payment_sk);

    if (payment == payment_idx.end()) {
      payment_tbl.emplace(payer,
                          [&](auto& p)
                          {
                            p.id = payment_id;
                            p.account_id = account_id;
                            p.batch_id = batch_id;
                            p.pending = batch.reward.value();
                            p.last_submission_time = time_point_sec(now());
                          });
    } else {
      payment_idx.modify(payment,
                         payer,
                         [&](auto& p)
                         {
                           p.pending += batch.reward.value();
                           p.last_submission_time = time_point_sec(now());
                         });
    }
  }
}

void force::releasetask(uint64_t task_id, uint32_t account_id,
                        eosio::name payer, vaccount::sig sig) {
  submission_table submission_tbl(_self, _self.value);
  batch_table batch_tbl(_self, _self.value);
  campaign_table campaign_tbl(_self, _self.value);
  auto vacc_contract = get_settings().vaccount_contract;

  vaccount::account_table acc_tbl(vacc_contract, vacc_contract.value);
  vaccount::account acc = acc_tbl.get((uint64_t) account_id, "account row not found");

  auto& sub = submission_tbl.get(task_id, "reservation not found");

  auto& batch = batch_tbl.get(sub.batch_id, "batch not found");
  auto& camp = campaign_tbl.get(batch.campaign_id, "campaign not found");

  eosio::check(sub.account_id.has_value(), "cannot release already released task.");
  eosio::check(!sub.data.has_value(), "cannot release task with data.");

  task_params params = {14, task_id, account_id};
  std::vector<char> msg_bytes = pack(params);

  if (sub.account_id == account_id) {
    require_vaccount(account_id, msg_bytes, sig);
  }
  else if (acc.address == camp.owner) {
    vaccount::require_auth(msg_bytes, acc.address, sig);
  } else {
    eosio::check(past_delay(sub.submitted_on, "release_task"), "cannot release task before delay.");
  }

  submission_tbl.modify(sub, eosio::same_payer, [&](auto& s) { s.account_id.reset(); });
}

void force::reclaimtask(uint64_t task_id, uint32_t account_id,
                        eosio::name payer, vaccount::sig sig) {
  submission_table submission_tbl(_self, _self.value);
  batch_table batch_tbl(_self, _self.value);

  auto& sub = submission_tbl.get(task_id, "reservation not found");
  auto& batch = batch_tbl.get(sub.batch_id, "batch not found");

  eosio::check(batch.tasks_done >= 0 && batch.num_tasks > 0,
               "cannot reclaim task on paused batch.");

  task_params params = {15, task_id, account_id};
  require_vaccount(account_id, pack(params), sig);

  eosio::check(!sub.account_id.has_value(), "task already reserved");
  eosio::check(!sub.data.has_value(), "task already submitted");
  submission_tbl.modify(sub,
                        payer,
                        [&](auto& s)
                        {
                          s.account_id = account_id;
                          s.submitted_on = time_point_sec(now());
                        });
}

void force::closebatch(uint64_t batch_id, vaccount::vaddress owner, vaccount::sig sig) {
  batch_table batch_tbl(_self, _self.value);
  campaign_table camp_tbl(_self, _self.value);

  auto& batch = batch_tbl.get(batch_id, "batch not found");
  auto& camp = camp_tbl.get(batch.campaign_id, "campaign not found");

  closebatch_params params = {16, batch_id};

  eosio::check(camp.owner == owner, "Only campaign owner can pause batch.");
  vaccount::require_auth(pack(params), owner, sig);
  eosio::check(batch.tasks_done >= 0 && batch.num_tasks > 0 &&
               batch.tasks_done < batch.num_tasks * batch.repetitions,
               "can only pause batches with active tasks.");

  batch_tbl.modify(batch, eosio::same_payer, [&](auto& b) { b.num_tasks = 0; });
}

void force::vtransfer_handler(uint64_t from_id, uint64_t to_id, extended_asset quantity,
                              std::string memo, vaccount::sig sig,
                              std::optional<extended_asset> fee) {
  uint64_t batch_id = std::stoull(memo);
  batch_table batch_tbl(_self, _self.value);
  auto& batch = batch_tbl.get(batch_id, "batch not found");
  batch_tbl.modify(batch, eosio::same_payer, [&](auto& b) { b.balance += quantity; });
}
