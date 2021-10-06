#include "force.hpp"

void force::init(eosio::name vaccount_contract) {
  eosio::require_auth(_self);
  _config.set(config{vaccount_contract}, _self);
}

void force::mkcampaign(vaccount::vaddress owner, content content, eosio::extended_asset reward,
                       eosio::name payer, vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  uint32_t camp_id = camp_tbl.available_primary_key();
  mkcampaign_params params = {9, camp_id, content};
  std::vector<char> msg_bytes = pack(params);
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

void force::mkbatch(uint32_t id, uint32_t campaign_id, content content,
                    checksum256 task_merkle_root, uint32_t num_tasks, eosio::name payer,
                    vaccount::sig sig) {
  campaign_table camp_tbl(_self, _self.value);
  auto camp = camp_tbl.get(campaign_id, "campaign not found");

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
                      b.repetitions = 1;
                    });
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

  uint64_t batch_pk = (uint64_t{campaign_id} << 32) | batch_id;
  auto batch = batch_tbl.get(batch_pk, "batch not found");
  auto campaign = campaign_tbl.get(campaign_id, "campaign not found");

  // TODO: verify depth of tree so cant be spoofed with partial proof
  checksum256 data_hash = sha256(&data[0], data.size());
  require_merkle(proof, position, batch.task_merkle_root, data_hash);

  uint32_t submission_id = submission_tbl.available_primary_key();

  reservetask_params params = {6, data_hash, submission_id, campaign_id, batch_id};
  require_vaccount(account_id, pack(params), sig);

  // check if repetitions are not done
  auto by_leaf = submission_tbl.get_index<"leaf"_n>();
  auto itr_start = by_leaf.lower_bound(data_hash);
  auto itr_end = by_leaf.upper_bound(data_hash);
  uint32_t rep_count = 0;
  // TODO: can this loop get too big?j
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
                         });
}
