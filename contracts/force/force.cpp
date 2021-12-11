#include "force.hpp"

void force::init(eosio::name vaccount_contract, uint32_t force_vaccount_id) {
  eosio::require_auth(_self);
  _config.set(config{vaccount_contract, force_vaccount_id}, _self);
}

void force::mkcampaign(vaccount::vaddress owner, content content, eosio::extended_asset reward,
                       eosio::name payer, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  uint32_t camp_id = camp_tbl.available_primary_key();
  mkcampaign_params params = {9, content};
  std::vector<char> msg_bytes = pack(params);
  printhex(&msg_bytes[0], msg_bytes.size());
  vaccount::require_auth(msg_bytes, owner, sig);

  camp_tbl.emplace(payer,
                   [&](auto& c)
                   {
                     c.id = camp_id;
                     c.content = content;
                     c.owner = owner;
                     c.reward = reward;
                   });
}
void force::editcampaign(uint32_t campaign_id, vaccount::vaddress owner, content content, eosio::extended_asset reward,
                        eosio::name payer, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(campaign_id, "campaign does not exist");

  editcampaign_params params = {10, campaign_id, content};
  std::vector<char> msg_bytes = pack(params);
  printhex(&msg_bytes[0], msg_bytes.size());
  vaccount::require_auth(msg_bytes, owner, sig);

  camp_tbl.modify(camp,
                  payer,
                  [&](auto& c)
                  {
                    c.content = content;
                    c.reward = reward;
                  });
}

void force::rmcampaign(uint32_t campaign_id, vaccount::vaddress owner, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto camp_itr = camp_tbl.find(campaign_id);
  eosio::check(camp_itr != camp_tbl.end(), "campaign does not exist");

  rmcampaign_params params = {11, campaign_id};
  std::vector<char> msg_bytes = pack(params);
  printhex(&msg_bytes[0], msg_bytes.size());
  vaccount::require_auth(msg_bytes, owner, sig);

  camp_tbl.erase(camp_itr);
}

void force::mkbatch(uint32_t id, uint32_t campaign_id, content content,
                    checksum256 task_merkle_root, eosio::name payer, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(campaign_id, "campaign not found");

  mkbatch_params params = {8, id, campaign_id, content, task_merkle_root};
  std::vector<char> msg_bytes = pack(params);
  vaccount::require_auth(msg_bytes, camp.owner, sig);

  batch_table batch_tbl(_self, _self.value);
  batch_tbl.emplace(payer,
                    [&](auto& b)
                    {
                      b.campaign_id = campaign_id;
                      b.id = id;
                      b.content = content;
                      b.task_merkle_root = task_merkle_root;
                      b.balance = {0, camp.reward.get_extended_symbol()};
                      b.repetitions = 1;
                      b.num_tasks = 0;
                    });
}

void force::publishbatch(uint32_t account_id, uint64_t batch_id, uint32_t num_tasks, vaccount::sig sig) {
  // TODO: check signature
  batch_table batch_tbl(_self, _self.value);
  auto& batch = batch_tbl.get(batch_id, "batch not found");
  eosio::check(batch.num_tasks == 0, "batch already published");
  campaign_table camp_tbl(_self, _self.value);
  auto& camp = camp_tbl.get(batch.campaign_id);
  eosio::asset quantity_needed = camp.reward.quantity * num_tasks * batch.repetitions;
  eosio::check(batch.balance.quantity >= quantity_needed, "batch is underfunded");
  batch_tbl.modify(batch, eosio::same_payer, [&](auto& b) { b.num_tasks = num_tasks; });
}

void force::joincampaign(uint32_t account_id, uint32_t campaign_id, eosio::name payer,
                         vaccount::sig sig) {
  joincampaign_params params = {7, campaign_id};
  require_vaccount(account_id, pack(params), sig);

  campaignjoin_table join_tbl(_self, _self.value);
  join_tbl.emplace(payer, [&](auto& j) { j.account_id = account_id; j.campaign_id = campaign_id; });
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
  campaignjoin_table campaignjoin_tbl(_self, _self.value);

  uint64_t campaignjoin_pk = (uint64_t{campaign_id} << 32) | account_id;
  auto campaignjoin = campaignjoin_tbl.require_find(campaignjoin_pk, "campaign not joined");

  uint64_t batch_pk = (uint64_t{campaign_id} << 32) | batch_id;
  auto& batch = batch_tbl.get(batch_pk, "batch not found");
  auto& campaign = campaign_tbl.get(campaign_id, "campaign not found");

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
  // printhex(&data_hash.extract_as_byte_array()[0], 32);
  require_merkle(proof, position, batch.task_merkle_root, data_hash);

  uint32_t submission_id = submission_tbl.available_primary_key();

  reservetask_params params = {6, data_hash, campaign_id, batch_id};
  require_vaccount(account_id, pack(params), sig);

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

  if (rep_count + 1 >= batch.repetitions) {
    batch_tbl.modify(batch, payer, [&](auto& b) { b.tasks_done++; });
  }

  submission_tbl.emplace(payer,
                         [&](auto& s)
                         {
                           s.id = submission_id;
                           s.account_id = account_id;
                           s.leaf_hash = data_hash;
                           s.batch_id = batch_pk;
                           s.paid = false;
                         });
}
void force::payout(uint32_t account_id,
                   uint32_t date_in_sec,
                   std::optional<eosio::signature> sig,
                   std::optional<eosio::extended_asset> fee) {
  payment_table payment_tbl(_self, _self.value);
  payout_params params = {13, account_id, date_in_sec};
  require_vaccount(account_id, pack(params), sig);

  auto payment_idx = payment_tbl.get_index<"acc"_n>();
  auto itr_start = payment_idx.lower_bound(account_id);
  auto itr_end = payment_idx.upper_bound(account_id);
  uint64_t amount = 0;
  static bool got_sym;
  eosio::extended_symbol sym;

  for (; itr_start != itr_end;) {
    auto& payment = *itr_start;
    bool time_is_after_period = compare_time(payment.last_submission_time.sec_since_epoch(), date_in_sec);

    if(!got_sym) {
      got_sym = true;
      eosio::check(payment.pending.get_extended_symbol().get_symbol().is_valid(), "symbol is not valid.");
      sym = payment.pending.get_extended_symbol();
    }
    if (time_is_after_period == true) {
      amount += payment.pending.quantity.amount;
      itr_start = payment_idx.erase(itr_start);
    }
  }
  eosio::check(amount != 0, "amount is zero.");
  eosio::extended_asset payment_asset = eosio::extended_asset(
    amount,
    sym
  );
  eosio::check(payment_asset.get_extended_symbol().get_symbol().is_valid(), "symbol is not valid.");
  action(
    permission_level{_self, "active"_n},
    _config.get().vaccount_contract,
    "vtransfer"_n,
    std::make_tuple((uint64_t)_config.get().force_vaccount_id, (uint64_t)account_id, payment_asset, std::string(""), NULL, fee))
  .send();
}

void force::submittask(uint64_t submission_id, std::string data, uint32_t account_id,
                       uint64_t batch_id, name payer, vaccount::sig sig) {
  submission_table submission_tbl(_self, _self.value);
  payment_table payment_tbl(_self, _self.value);
  batch_table batch_tbl(_self, _self.value);
  campaign_table campaign_tbl(_self, _self.value);

  auto& sub = submission_tbl.get(submission_id, "submission not found");
  eosio::check(sub.account_id == account_id, "different account");
  submission_tbl.modify(sub, payer, [&](auto& s) { s.data = data; });

  auto& batch = batch_tbl.get(sub.batch_id, "batch not found");
  auto& camp = campaign_tbl.get(batch.campaign_id);

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
                          p.pending = camp.reward;
                          p.last_submission_time = time_point_sec(now());
                        });
  } else {
    payment_idx.modify(payment, payer, [&](auto& p) { p.pending += camp.reward; p.last_submission_time = time_point_sec(now()); });
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
