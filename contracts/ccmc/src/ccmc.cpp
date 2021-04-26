#include <ccmc.hpp>

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
  eosio::print("header.transactionsRoot: ", header.transactionsRoot, "\n");
  eosio::print("header.crossStatesRoot: ", header.crossStatesRoot, "\n");
  eosio::print("header.blockRoot: ", header.blockRoot, "\n");
  eosio::print("header.nextBookkeeper: ", header.nextBookkeeper, "\n");
  
  //eosio::check(header.nextBookkeeper == bookkeeper.nextBookkeeper, "nextBookkeeper illegal");
  //poly_tbl.set(poly{header.height, serializeKeepers(bookkeeper.keepers)}, get_self());
}

EOSIO_DISPATCH(ccmc, (initgenblock))
