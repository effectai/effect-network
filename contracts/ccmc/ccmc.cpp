#include "ccmc.hpp"

ACTION ccmc::initgenblock(std::vector<char> raw_header, std::vector<char> pubkey_list) {
  // require_auth(get_self());
  poly_table poly_tbl(_self, _self.value);
  //eosio::check(!poly_tbl.exists(), "already initialized");
  print("size: ", pubkey_list.size());

  ccmc:bookkeeper bookkeeper = verify_pubkey(pubkey_list);
  cmcc:header header = deserialize_header(raw_header);
  eosio::print("version:", header.version, "\n");
  eosio::print("chain_id:", header.chainId, "\n");
  eosio::print("height: ", header.height, "\n");
  eosio::print("timestamp: ", header.timestamp, "\n");
  eosio::print("consensusData: ", header.consensusData, "\n");
  eosio::print("header.nextBookkeeper: ", header.nextBookkeeper, "\n");
  eosio::print("bookkeeper.nextBookkeeper: ", bookkeeper.nextBookkeeper, "\n");

  eosio::check(header.nextBookkeeper == bookkeeper.nextBookkeeper, "nextBookkeeper illegal");
  poly_tbl.set(poly{header.height, bookkeeper.keepers}, get_self());
}

ACTION ccmc::changekeeper(std::vector<char> raw_header, std::vector<char> pubkey_list, std::vector<char> sign_list) {
  cmcc:header header = deserialize_header(raw_header);
  if (header.height == 0) {
    return initgenblock(raw_header, pubkey_list);
  }
  poly_table poly_tbl(_self, _self.value);
  auto cur_epoch = poly_tbl.get();

  eosio::check(cur_epoch.epoch_block_height <= header.height, "header hight illegal");

  uint32_t n = cur_epoch.keepers.size();

  eosio::check(verify_sig(raw_header, sign_list, cur_epoch.keepers, n - (n - 1) / 3), "verify signature failed");

  ccmc:bookkeeper bookkeeper = verify_pubkey(pubkey_list);
  eosio::check(header.nextBookkeeper == bookkeeper.nextBookkeeper, "nextBookkeeper illegal");
  poly_tbl.set(poly{header.height, bookkeeper.keepers}, get_self());
}

EOSIO_DISPATCH(ccmc, (initgenblock)(changekeeper))
