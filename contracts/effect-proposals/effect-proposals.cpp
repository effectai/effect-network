#include "effect-proposals.hpp";

void proposals::init() {
};

void proposals::createprop(eosio::name author, eosio::extended_asset pay,
                           std::string content_hash, uint8_t category,
                           uint16_t cycle,
                           eosio::time_point_sec deadline,
                           std::optional<eosio::checksum256> transaction_hash) {
  require_auth(author);

  proposal_table proposal_tbl(_self, _self.value);

  auto id =  proposal_tbl.available_primary_key();
  std::map<uint8_t, uint32_t> vote_counts;

  proposal_tbl.emplace(author,
                       [&](auto& p)
                       {
                         p.id = id;
                         p.author = author;
                         p.content_hash = content_hash;
                         p.pay = pay;
                         p.deadline = deadline;
                         p.state = proposals::Pending;
                         p.cycle = cycle;
                         p.category = category;
                         p.vote_counts = vote_counts;
                         p.proof_hash = "";
                       });
}

void proposals::executeprop() {

}

void proposals::processprop(uint64_t id) {
  proposal_table prop_tbl(_self, _self.value);
  auto& prop = prop_tbl.get(id, "proposal does not exist");
  auto cur_cycle = _config.get().current_cycle;
  if (cur_cycle <= prop.cycle)
    return;
  // process results of prop to either Accepted or Rejected
}

void proposals::updateprop(uint64_t id, eosio::extended_asset pay,
                           std::string content_hash, uint8_t category, uint16_t cycle) {
  require_cycle_update();
  auto cur_cycle = _config.get().current_cycle;

  // cycle must be in the future or zero (= pending)
  eosio::check(cycle == 0 || cur_cycle < cycle, "cycle must be in the future");

  proposal_table prop_tbl(_self, _self.value);
  auto& prop = prop_tbl.get(id, "proposal does not exist");

  require_auth(prop.author);

  // proposal may not be in the active cycle
  eosio::check(cur_cycle != prop.cycle, "active proposal can't be updated");

  // make sure proposals from past cycles are processed
  if (cur_cycle > prop.cycle && prop.state == proposals::Pending) {
    processprop(id);
  }

  // only rejected proposals from the past may be recycled
  eosio::check(cur_cycle < prop.cycle || prop.state == proposals::Rejected,
               "finalized proposals can't be updated");

  prop_tbl.modify(prop,
                  eosio::same_payer,
                  [&](auto& p)
                  {
                    p.state = proposals::Pending;
                    p.cycle = cycle;
                    p.pay = pay;
                    p.content_hash = content_hash;
                    p.category = category;
                  });
}

void proposals::addvote() {
}

void proposals::updatevote() {
}

void proposals::addproof() {
}

void proposals::require_cycle_update() {
  eosio::check(_config.exists(), "not initialized");
  auto cycle_id = _config.get().current_cycle;
  cycle_table cycle_tbl(_self, _self.value);
  auto& cur_cycle = cycle_tbl.get(cycle_id, "this cycle is not defined");
  auto conf = _config.get();
  auto cur_time_sec = time_point_sec(now());
  if (cur_time_sec >= cur_cycle.start_time + conf.cycle_duration_sec) {
    auto& next_cycle = cycle_tbl.get(cycle_id, "next cycle is not defined");
    cycle_tbl.modify(next_cycle,
                     eosio::same_payer,
                     [&](auto c) { c.start_time = cur_time_sec; });
    conf.current_cycle = cycle_id + 1;
    _config.set(conf, _self);
  }
}

EOSIO_DISPATCH(proposals, (init)(createprop));
