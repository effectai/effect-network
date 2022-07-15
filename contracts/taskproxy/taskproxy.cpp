#include "taskproxy.hpp"

void taskproxy::mkbatch(uint32_t id, uint32_t campaign_id, content content, checksum256 task_merkle_root, uint32_t repetitions, std::optional<map<uint32_t, uint8_t>> qualis, name payer, vaccount::sig sig) {
  action(permission_level{_self, "proxy"_n}, forceacc, "mkbatch"_n, std::make_tuple(id, campaign_id, content, task_merkle_root, repetitions, qualis, _self, sig)).send();
};

void taskproxy::publishbatch(uint64_t batch_id, uint32_t num_tasks, vaccount::sig sig) {
  action(permission_level{_self, "proxy"_n}, forceacc, "publishbatch"_n, std::make_tuple(batch_id, num_tasks, sig)).send();
};

extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  switch (action) {
    EOSIO_DISPATCH_HELPER(taskproxy, (mkbatch)(publishbatch));
  }
}
