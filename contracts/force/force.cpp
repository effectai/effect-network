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
                     c.content = content;
                     c.owner = owner;
                     c.reward = reward;
                     c.qualis.emplace(qualis);
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

void force::mkbatch(uint32_t id, uint32_t campaign_id, content content,
                    checksum256 task_merkle_root, uint32_t repetitions,
                    std::optional<camp_quali_map> qualis, eosio::name payer, vaccount::sig sig) {
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
                      if (qualis.has_value())
                        b.qualis.emplace(qualis.value());
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

void force::publishbatch(uint64_t batch_id, uint32_t num_tasks, vaccount::sig sig) {
  batch_table batch_tbl(_self, _self.value);
  auto& batch = batch_tbl.get(batch_id, "batch not found");

  eosio::check(batch.num_tasks == 0, "batch already published");
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(batch.campaign_id, "campaign not found");

  reopenbatch_params params = {17, batch_id};
  vaccount::require_auth(pack(params), camp.owner, sig);

  eosio::asset quantity_needed = batch.reward.value().quantity * num_tasks * batch.repetitions;
  eosio::check(batch.balance.quantity >= quantity_needed, "batch is underfunded");

  batch_tbl.modify(batch, eosio::same_payer, [&](auto& b) { b.num_tasks = num_tasks; });
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

void force::assignquali(uint32_t quali_id, uint32_t user_id, eosio::name payer, vaccount::sig sig) {
  quali_table quali_tbl(_self, _self.value);
  auto quali = quali_tbl.get(quali_id, "qualification not found");
  rmbatch_params params = {19, quali_id, user_id};
  require_vaccount(quali.account_id, pack(params), sig);

  user_quali_table user_quali_tbl(_self, _self.value);
  user_quali_tbl.emplace(payer,
                         [&](auto& q)
                         {
                           q.account_id = user_id;
                           q.quali_id = quali_id;
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

void force::require_batchjoin(uint32_t account_id, uint64_t batch_pk, bool try_to_join, name payer) {
  batchjoin_table join_tbl(_self, _self.value);
  uint128_t pk = (uint128_t{batch_pk} << 64) | (uint64_t{account_id} << 32);

  auto by_accbatch = join_tbl.get_index<"accbatch"_n>();
  auto entry = by_accbatch.find(pk);
  bool has_joined = (entry != by_accbatch.end());
  if (!has_joined) {
    eosio::check(try_to_join, "batch not joined");

    batch_table batch_tbl(_self, _self.value);
    auto batch = batch_tbl.get(batch_pk, "batch not found");
    campaign_table camp_tbl(_self, _self.value);
    auto camp = camp_tbl.get(batch.campaign_id, "campaign not found");
    user_quali_table user_quali_tbl(_self, _self.value);

    std::map<uint32_t, uint8_t> qualis;

    if (!camp.qualis.has_value() && batch.qualis.has_value()) {
      qualis = batch.qualis.value();
    } else {
      qualis = camp.qualis.value();
      if (batch.qualis.has_value()) {
        qualis.insert(batch.qualis.value().begin(), batch.qualis.value().end());
      }
    }

    for (auto q : qualis) {
      uint32_t quali_id = std::get<0>(q);
      uint8_t quali_type = std::get<1>(q);
      uint64_t user_quali_id = (uint64_t{account_id} << 32) | quali_id;
      auto user_quali = user_quali_tbl.find(user_quali_id);
      bool has_quali = (user_quali != user_quali_tbl.end());
      if (has_quali)
        eosio::check(quali_type == force::Inclusive, "qualification excluded");
      else
        eosio::check(quali_type == force::Exclusive, "missing qualification");
    }

    uint64_t join_id = join_tbl.available_primary_key();
    join_tbl.emplace(payer,
                     [&](auto& j)
                     {
                       j.account_id = account_id;
                       j.batch_id = batch_pk;
                       j.id = join_id;
                     });
  }
}

void force::require_merkle(std::vector<eosio::checksum256> proof, std::vector<uint8_t> position,
                           checksum256 root, checksum256 data_hash) {
  uint8_t hashlen = 32;
  checksum256 last_hash = data_hash;

  for (size_t i = 0; i < proof.size(); i++) {
    std::array<uint8_t, 32> arr1 = last_hash.extract_as_byte_array();
    std::array<uint8_t, 32> arr2 = proof[i].extract_as_byte_array();

    std::array<uint8_t, 64> combined;
    if (position[i] == 1) {
      std::copy(arr1.cbegin(), arr1.cend(), combined.begin());
      std::copy(arr2.cbegin(), arr2.cend(), combined.begin() + 32);
    } else if (position[i] == 0) {
      std::copy(arr2.cbegin(), arr2.cend(), combined.begin());
      std::copy(arr1.cbegin(), arr1.cend(), combined.begin() + 32);
    }

    void* ptr = static_cast<void*>(combined.data());
    last_hash = sha256((char*) ptr, 64);
  }

  eosio::check(root == last_hash, "invalid merkle proof");
}

void force::reservetask(std::vector<checksum256> proof, std::vector<uint8_t> position,
                        std::vector<char> data, uint32_t campaign_id, uint32_t batch_id,
                        uint32_t account_id, name payer, vaccount::sig sig) {
  submission_table submission_tbl(_self, _self.value);
  batch_table batch_tbl(_self, _self.value);
  campaign_table campaign_tbl(_self, _self.value);

  uint64_t batch_pk = (uint64_t{campaign_id} << 32) | batch_id;
  require_batchjoin(account_id, batch_pk, true, payer);

  auto& batch = batch_tbl.get(batch_pk, "batch not found");
  auto& campaign = campaign_tbl.get(campaign_id, "campaign not found");

  eosio::check(batch.tasks_done >= 0 && batch.num_tasks > 0, "batch paused");
  // TODO: verify depth of tree so cant be spoofed with partial proof

  // we prepend the batch_pk to the data so that each data point has a unique
  // entry in the submission table.
  const uint16_t datasize = data.size() + sizeof batch_pk;
  char buff[datasize];
  std::copy(static_cast<char*>(static_cast<void*>(&batch_pk)),
            static_cast<char*>(static_cast<void*>(&batch_pk)) + sizeof batch_pk,
            &buff[0]);
  std::copy(data.cbegin(), data.cend(), &buff[0] + sizeof batch_pk);

  checksum256 data_hash = sha256(&buff[0], datasize);
  reservetask_params params = {6, data_hash, campaign_id, batch_id};
  require_vaccount(account_id, pack(params), sig);

  // printhex(&data_hash.extract_as_byte_array()[0], 32);
  require_merkle(proof, position, batch.task_merkle_root, data_hash);

  uint32_t submission_id = submission_tbl.available_primary_key();

  // check if repetitions are not done
  auto by_leaf = submission_tbl.get_index<"leaf"_n>();
  auto itr_start = by_leaf.lower_bound(data_hash);
  auto itr_end = by_leaf.upper_bound(data_hash);
  uint32_t rep_count = 0;
  // TODO: can this loop get too big?
  for (; itr_start != itr_end; itr_start++) {
    rep_count++;
    auto& subm = *itr_start;
    eosio::check(subm.account_id != account_id, "account already did task");
  }
  eosio::check(rep_count < batch.repetitions, "task already completed");

  submission_tbl.emplace(payer,
                         [&](auto& s)
                         {
                           s.id = submission_id;
                           s.account_id = account_id;
                           s.leaf_hash = data_hash;
                           s.batch_id = batch_pk;
                           s.paid = false;
                           s.submitted_on = time_point_sec(now());
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

  action(
    permission_level{_self, "xfer"_n},
    _config.get().vaccount_contract,
    "vtransfer"_n,
    std::make_tuple((uint64_t) _config.get().force_vaccount_id,
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
  auto vacc_contract = _config.get().vaccount_contract;

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

  require_batchjoin(account_id, sub.batch_id, true, payer);

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
  eosio::check(batch.tasks_done >= 0 && batch.num_tasks > 0 && batch.tasks_done < batch.num_tasks,
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
