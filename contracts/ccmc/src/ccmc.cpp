#include <ccmc.hpp>

ACTION ccmc::initgenblock(std::vector<char> raw_header) {
  // require_auth(get_self());
  poly_table poly_tbl(_self, _self.value);
  eosio::check(!poly_tbl.exists(), "already initialized");
  //eosio::check(pubkey_list.size() % PUBKEY_LEN == 0, "length of pubkey_list is invalid");
  
  cmcc:header header = deserialize_header(raw_header);
  eosio::print("chain_id:", header.chainId);
  eosio::print("height: ", header.height);
  poly_tbl.set(poly{header.height}, get_self());
}

EOSIO_DISPATCH(ccmc, (initgenblock))
