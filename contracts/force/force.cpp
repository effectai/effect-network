#include "force.hpp"

void force::init(eosio::name vaccount_contract,
                 uint32_t force_vaccount_id,
                 uint32_t payout_delay_sec,
                 uint32_t release_task_delay_sec,
                 eosio::name fee_contract,
                 float fee_percentage) {
  eosio::require_auth(_self);
  auto settings = _settings.find(settings_pk.value);
  _settings.erase(settings);
  _settings.emplace(_self,
                    [&](auto& s)
                    {
                      s.vaccount_contract = vaccount_contract;
                      s.force_vaccount_id = force_vaccount_id;
                      s.payout_delay_sec = payout_delay_sec;
                      s.release_task_delay_sec = release_task_delay_sec;
                      s.fee_contract = fee_contract;
                      s.fee_percentage = fee_percentage;
                    });
}

void force::mkcampaign(vaccount::vaddress owner,
                       content content,
                       uint32_t max_task_time,
                       eosio::extended_asset reward,
                       std::vector<Quali> qualis,
                       eosio::name payer,
                       vaccount::sig sig) {
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
                     c.num_batches = 0;
                     c.content = content;
                     c.owner = owner;
                     c.max_task_time = max_task_time;
                     c.reward = reward;
                     c.paused = false;
                     c.qualis = qualis;
                     c.total_tasks = 0;
                   });
}

void force::editcampaign(uint32_t campaign_id,
                         vaccount::vaddress owner,
                         content content,
                         bool paused,
                         eosio::extended_asset reward,
                         std::vector<Quali> qualis,
                         eosio::name payer,
                         vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(campaign_id, "campaign does not exist");

  editcampaign_params params = {10, campaign_id, content, reward, paused, qualis};
  std::vector<char> msg_bytes = pack(params);
  vaccount::require_auth(msg_bytes, owner, sig);

  camp_tbl.modify(camp,
                  payer,
                  [&](auto& c)
                  {
                    c.content = content;
                    c.reward = reward;
                    c.qualis = qualis;
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
                    uint32_t repetitions,
                    eosio::name payer,
                    vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto camp = camp_tbl.require_find(campaign_id, "campaign not found");

  eosio::check(id == camp->num_batches, "batch id must be sequential");

  mkbatch_params params = {8, id, campaign_id, content};
  std::vector<char> msg_bytes = pack(params);
  vaccount::require_auth(msg_bytes, camp->owner, sig);

  eosio::check(repetitions < force::MAX_REPETITIONS, "too many repetitions");
  batch_table batch_tbl(_self, _self.value);
  batch_tbl.emplace(payer,
                    [&](auto& b)
                    {
                      b.campaign_id = campaign_id;
                      b.id = id;
                      b.content = content;
                      b.balance = {0, camp->reward.get_extended_symbol()};
                      b.repetitions = repetitions;
                      b.reward = camp->reward;
                      b.num_tasks = 0;
                    });
  camp_tbl.modify(camp, eosio::same_payer, [&](auto& c) { c.num_batches += 1; });
}

void force::rmbatch(uint32_t id, uint32_t campaign_id, vaccount::sig sig) {
  batch_table batch_tbl(_self, _self.value);
  campaign_table camp_tbl(_self, _self.value);

  uint64_t batch_pk =(uint64_t{campaign_id} << 32) | id;

  auto camp = camp_tbl.require_find(campaign_id, "campaign not found");

  auto batch = batch_tbl.require_find(batch_pk, "batch does not exist");

  rmbatch_params params = {12, id, campaign_id};

  std::vector<char> msg_bytes = pack(params);
  printhex(&msg_bytes[0], msg_bytes.size());
  vaccount::require_auth(msg_bytes, camp->owner, sig);

  uint32_t batch_tasks_done = (camp->tasks_done - batch->start_task_idx);

  if (batch->id > camp->active_batch) {
    // if the batch has not started, we should empty it, the row
    // can only be erased when the campaign caught up
    eosio::check(camp->num_batches == id, "can only remove active or last batch");
    camp_tbl.modify(camp, same_payer,
                    [&](auto& c) { c.num_batches -= 1; c.total_tasks -= batch->num_tasks; });
    batch_tbl.erase(batch);
  } else if (batch->id == camp->active_batch) {
    // if its the active batch, move onward
    // batch_tbl.modify(batch, eosio::same_payer, [&](auto& b) { b.num_tasks = batch_tasks_done; });
    uint32_t batch_tasks_remaining = batch->num_tasks - batch_tasks_done;
    camp_tbl.modify(camp, eosio::same_payer,
                    [&](auto& c)
                    {
                      c.active_batch += 1;
                      c.total_tasks -= batch_tasks_remaining;
                    });
  } else {
    // if the batch is in the past, we can erase it
    batch_tbl.erase(batch);
  }

  // TODO: refund remaining balance
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

  publishbatch_params params = {17, batch_id};
  vaccount::require_auth(pack(params), camp.owner, sig);

  eosio::extended_asset task_reward = batch.reward;
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
                     // if this batch becomes the active batch of the
                     // campaign track it starting index
                     if (camp.active_batch == b.id) {
                       b.start_task_idx = camp.tasks_done;
                     }
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

void force::reservetask(uint32_t campaign_id,
                        uint32_t account_id,
                        std::optional<std::vector<uint64_t>> quali_assets,
                        name payer,
                        vaccount::sig sig) {
  campaign_table campaign_tbl(_self, _self.value);
  auto& campaign = campaign_tbl.get(campaign_id, "campaign not found");

  eosio::check(!campaign.paused, "campaign is paused");

  uint32_t batch_id = campaign.active_batch;
  uint64_t batch_pk = (uint64_t{campaign_id} << 32) | batch_id;
  batch_table batch_tbl(_self, _self.value);
  auto& batch = batch_tbl.get(batch_pk, "no batches available");

  eosio::check(campaign.tasks_done < batch.start_task_idx + batch.num_tasks,
               "no more tasks in campaign");

  // check qualifications
  settings settings = get_settings();
  auto vacc = vaccount::get_vaccount(settings.vaccount_contract, account_id);
  bool is_eos = vaccount::is_eos(vacc->address);
  eosio::name asset_owner = is_eos ? vaccount::get_name(vacc->address) : _self;
  auto acc_assets_tbl = atomicassets::get_assets(asset_owner);
  auto force_assets_tbl = atomicassets::get_assets(_self);

  if (campaign.qualis.size() > 0)
    eosio::check(quali_assets.has_value() && quali_assets.value().size() == campaign.qualis.size(),
                 "wrong number of quali_assets");

  for (int i = 0; i < campaign.qualis.size(); i++) {
    auto quali = campaign.qualis[i];
    uint64_t asset_id = quali_assets.value()[i];
    atomicassets::assets_s asset;

    // check right asset owner
    auto acc_asset = acc_assets_tbl.find(asset_id);
    auto force_asset = force_assets_tbl.find(asset_id);
    bool asset_is_eos = (acc_asset != acc_assets_tbl.end());
    eosio::check(asset_is_eos || force_asset != force_assets_tbl.end(),
                 "asset now owned by you");
    asset = asset_is_eos ? *acc_asset : *force_asset;

    // if this is a vaccount, we must additionaly check the asset is owned by it
    if (!asset_is_eos) {
      auto schema_tbl = atomicassets::get_schemas(asset.collection_name);
      auto schema = schema_tbl.get(asset.schema_name.value, "asset not owned by vaccount");
      auto data_map = atomicdata::deserialize(asset.mutable_serialized_data, schema.format);
      auto asset_vacc_owner = std::get<uint32_t>(data_map["vaccount"]);
      eosio::check(asset_vacc_owner == account_id, "asset not owned by vaccount");
    }

    switch (quali.type) {
    case Collection:
      eosio::check(asset.collection_name == std::get<eosio::name>(quali.address),
                   "wrong collection");
      break;
    case Template:
      eosio::check(asset.template_id == std::get<uint32_t>(quali.address),
                   "wrong template");
      break;
    case Asset:
      eosio::check(asset.asset_id == std::get<uint64_t>(quali.address),
                   "wrong asset");
      break;
    }
  }

  // check if user has a reservation already
  uint64_t acccamp_pk = (uint64_t{account_id} << 32) | campaign_id;
  reservation_table reservation_tbl(_self, _self.value);
  auto by_acccamp = reservation_tbl.get_index<"acccamp"_n>();
  auto existing_reservation = by_acccamp.find(acccamp_pk);
  eosio::check(existing_reservation == by_acccamp.end(), "you already have a reservation");

  // find the last task idx the user completed in the campaign
  acctaskidx_table acctaskidx_tbl(_self, _self.value);
  auto user_last_task_check = (acctaskidx_tbl.find(acccamp_pk) == acctaskidx_tbl.end());

  if (user_last_task_check) {
    acctaskidx_tbl.emplace(payer,
                           [&](auto& i)
                           {
                             i.campaign_id = campaign_id;
                             i.account_id = account_id;
                             i.value = 0;
                           });
  }

  auto& user_last_task = acctaskidx_tbl.get(acccamp_pk);
  uint32_t user_next_task_idx = user_last_task_check ? 0 : user_last_task.value + 1;

  reservetask_params params = {6, user_next_task_idx, campaign_id};
  require_vaccount(account_id, pack(params), sig);


  eosio::check(!user_last_task_check || campaign.total_tasks > user_last_task.value,
               "no more tasks for you");

  // reserve suitable task idx to the user
  uint32_t task_idx = std::max(campaign.tasks_done, user_next_task_idx);

  submission_table submission_tbl(_self, _self.value);

  // check if there is an earlier expired reservatoin to claim instead
  auto by_camp = reservation_tbl.get_index<"camp"_n>();
  auto by_camp_itr = by_camp.find(campaign_id);
  if (by_camp_itr != by_camp.end() &&
      has_expired(by_camp_itr->reserved_on, campaign.max_task_time) &&
      // only claim reservations that come before our assigned task
      // idx. if the user were to steal future indexis, bumping
      // acctaskidx would mean the users misses out on tasks, and
      // omitting so would let him do this repetition twice.
      task_idx >= by_camp_itr->task_idx) {
    auto& res = *by_camp_itr;
    uint64_t bump_id = std::max(reservation_tbl.available_primary_key(),
                                submission_tbl.available_primary_key());

    // we must re-insert the reservation in order to bump the id
    reservation_tbl.erase(res);
    reservation_tbl.emplace(payer,
                            [&](auto& r)
                            {
                              r.id = bump_id;
                              r.task_idx = res.task_idx;
                              r.account_id = account_id;
                              r.batch_id = batch_pk;
                              r.reserved_on = time_point_sec(now());
                              r.campaign_id = campaign_id;
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
  acctaskidx_tbl.modify(user_last_task, payer, [&](auto& i) { i.value = task_idx; });
  if (task_done) {
    if (has_reps_done_row)
      repsdone_tbl.erase(repetitions_done);

    bool batch_done = ((campaign.tasks_done + 1) >= (batch.start_task_idx + batch.num_tasks));
    campaign_tbl.modify(campaign,
                        eosio::same_payer,
                        [&](auto& c)
                        {
                          c.tasks_done += 1;
                          if (batch_done) {
                            c.active_batch += 1;
                          }
                        });

    // if we roll over to a new batch, we must track at which task index it starts
    if (batch_done) {
      uint64_t next_batch_pk = (uint64_t{campaign_id} << 32) | (batch_id + 1);
      auto next_batch = batch_tbl.find(next_batch_pk);

      if (next_batch != batch_tbl.end()) {
        batch_tbl.modify(*next_batch,
                         eosio::same_payer,
                         [&](auto &b)
                         {
                           b.start_task_idx = campaign.tasks_done;
                         });
      }
    }
  }

  uint64_t reservation_id = std::max(reservation_tbl.available_primary_key(),
                                     submission_tbl.available_primary_key());

  reservation_tbl.emplace(payer,
                          [&](auto& r)
                          {
                            r.id = reservation_id;
                            r.task_idx = task_idx;
                            r.account_id.emplace(account_id);
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

void force::submittask(uint32_t campaign_id,
                       uint32_t task_idx,
                       std::string data,
                       uint32_t account_id,
                       name payer, vaccount::sig sig) {
  uint64_t acccamp_pk = (uint64_t{account_id} << 32) | campaign_id;
  reservation_table reservation_tbl(_self, _self.value);
  auto by_acccamp = reservation_tbl.get_index<"acccamp"_n>();
  auto res = by_acccamp.find(acccamp_pk);

  eosio::check(res != by_acccamp.end(), "already submitted or not reserved by you");
  eosio::check(res->account_id.has_value(), "not reserved");
  eosio::check(res->account_id.value() == account_id, "different account");
  eosio::check(res->task_idx == task_idx, "wrong task index");

  submission_table submission_tbl(_self, _self.value);
  payment_table payment_tbl(_self, _self.value);
  batch_table batch_tbl(_self, _self.value);
  campaign_table campaign_tbl(_self, _self.value);

  reservation_tbl.erase(*res);
  submission_tbl.emplace(payer,
                         [&](auto& s)
                         {
                           s.id = res->id;
                           s.campaign_id = campaign_id;
                           s.task_idx = task_idx;
                           s.account_id.emplace(account_id);
                           s.data.emplace(data);
                           s.batch_id = res->batch_id;
                           s.paid = false;
                           s.submitted_on = time_point_sec(now());
                         });

  auto& batch = batch_tbl.get(res->batch_id);

  submittask_params params = {5, campaign_id, task_idx, data};
  require_vaccount(account_id, pack(params), sig);

  if (batch.reward.quantity.amount > 0) {
    uint64_t payment_id = payment_tbl.available_primary_key();

    uint128_t payment_sk = (uint128_t{res->batch_id} << 64) | (uint64_t{account_id} << 32);
    auto payment_idx = payment_tbl.get_index<"accbatch"_n>();
    auto payment = payment_idx.find(payment_sk);

    if (payment == payment_idx.end()) {
      payment_tbl.emplace(payer,
                          [&](auto& p)
                          {
                            p.id = payment_id;
                            p.account_id = account_id;
                            p.batch_id = res->batch_id;
                            p.pending = batch.reward;
                            p.last_submission_time = time_point_sec(now());
                          });
    } else {
      payment_idx.modify(payment,
                         payer,
                         [&](auto& p)
                         {
                           p.pending += batch.reward;
                           p.last_submission_time = time_point_sec(now());
                         });
    }
  }
}

void force::vtransfer_handler(uint64_t from_id, uint64_t to_id, extended_asset quantity,
                              std::string memo, vaccount::sig sig,
                              std::optional<extended_asset> fee) {
  uint64_t batch_id = std::stoull(memo);
  batch_table batch_tbl(_self, _self.value);
  auto& batch = batch_tbl.get(batch_id, "batch not found");
  batch_tbl.modify(batch, eosio::same_payer, [&](auto& b) { b.balance += quantity; });
}
