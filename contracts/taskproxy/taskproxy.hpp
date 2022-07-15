#pragma once

#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <eosio/asset.hpp>
#include <eosio/datastream.hpp>
#include <eosio/crypto.hpp>
#include <eosio/binary_extension.hpp>

#include "../vaccount/vaccount-shared.hpp"

using namespace eosio;
using namespace std;

class taskproxy : public contract {
public:
  typedef tuple<uint8_t, string> content;

  const name forceacc = "efxforce1112"_n;
  // const extended_symbol token = extended_symbol{symbol{"EFX", 4}, "efxtoken1112"_n};

  taskproxy(name receiver, name code, datastream<const char*> ds) : contract(receiver, code, ds)
  {};

  [[eosio::action]]
  void mkbatch(uint32_t id, uint32_t campaign_id, content content, checksum256 task_merkle_root, uint32_t repetitions, std::optional<map<uint32_t, uint8_t>> qualis, name payer, vaccount::sig sig);

  [[eosio::action]]
  void publishbatch(uint64_t batch_id, uint32_t num_tasks, vaccount::sig sig);
};
