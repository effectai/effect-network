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
                    });
}

void force::joincampaign(uint32_t account_id, uint32_t campaign_id, eosio::name payer,
                         vaccount::sig sig) {
  joincampaign_params params = {7, campaign_id};
  require_vaccount(account_id, pack(params), sig);

  campaignjoin_table join_tbl(_self, _self.value);
  join_tbl.emplace(payer, [&](auto& j) { j.account_id = account_id; j.campaign_id = campaign_id; });
}
