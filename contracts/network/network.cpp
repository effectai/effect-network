#include "network.hpp"

void network::open(account_address addr, eosio::extended_symbol symbol, eosio::name payer) {
  account_table acc_tbl(_self, _self.value);
  uint64_t id = acc_tbl.available_primary_key();
  eosio::extended_asset asset(0, symbol);

  // check user does not already have a balance for this symbol
  auto acc_tbl_idx = acc_tbl.get_index<"token"_n>();
  auto idx_key = make_token_index(symbol.get_contract(), addr);
  auto itr_start = acc_tbl_idx.lower_bound(idx_key);
  auto itr_end = acc_tbl_idx.upper_bound(idx_key);

  for (; itr_start != itr_end; ++itr_start) {
    eosio::check(itr_start->balance.get_extended_symbol() != symbol, "already has balance");
  }

  acc_tbl.emplace(payer,
                  [&](auto& a)
                  {
                    a.id = id;
                    a.nonce = 0;
                    a.address = addr;
                    a.balance = asset;
                   });
}

void network::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    extended_symbol sym(quantity.symbol, get_first_receiver());

    account_table acc_tbl(_self, _self.value);
    uint64_t row_id = std::stoi(memo);
    auto acc = acc_tbl.get(row_id, "row not found");
    check(acc.balance.get_extended_symbol() == sym, "asset mismatch");

    acc_tbl.modify(acc, same_payer, [&](auto& a) { a.balance.quantity += quantity; });
  }
}

checksum160 pub2addr(public_key pub) {
  return ripemd160(&std::get<0>(pub)[0], std::get<0>(pub).size());
}

void network::transfer(uint64_t from_id, uint64_t to_id, extended_asset quantity,
                       std::optional<signature> sig,
                       std::optional<extended_asset> fee) {
  // TODO: add fee to account
  account_table acc_tbl(_self, _self.value);

  auto from = acc_tbl.get(from_id, "from address does not exist");
  auto to = acc_tbl.find(to_id);
  check(to != acc_tbl.end(), "to address does not exist");

  check(from.id != to->id, "cannot transfer to self");
  check(from.balance >= quantity, "not enough balance");

  auto from_type = from.address.index();
  if (from_type == 1) {
    // 1 = eosio name
    name from_name = std::get<name>(from.address);
    require_auth(from_name);
  } else {
    // 0 = hash address
    transfer_params params = {from.nonce, from_id, to_id, quantity};
    std::vector<char> msg_bytes = pack(params);
    // printhex(&msg_bytes[0], msg_bytes.size());
    checksum256 msg = sha256(&msg_bytes[0], msg_bytes.size());
    public_key pub = recover_key(msg, sig.value());
    // printhex(&std::get<0>(pub)[0], std::get<0>(pub).size());
    auto pub_addr = pub2addr(pub);
    // pub_addr.print();
    auto addr = std::get<checksum160>(from.address);
    check(addr == pub2addr(pub), "invalid signature");
  }

  acc_tbl.modify(from, same_payer, [&](auto &f) { f.balance -= quantity; f.nonce++; });
  acc_tbl.modify(to, same_payer, [&](auto &t) { t.balance += quantity; });
  // acc_tbl.modify(fee_acc, same_payer, [&](auto &f) { f.balance += fee; });
}
