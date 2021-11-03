#include "vaccount.hpp"

void vaccount::open(vaddress addr, eosio::extended_symbol symbol, eosio::name payer) {
  account_table acc_tbl(_self, _self.value);
  uint64_t id = acc_tbl.available_primary_key();
  eosio::extended_asset asset(0, symbol);

  // check user does not already have a balance for this symbol
  auto acc_tbl_idx = acc_tbl.get_index<"token"_n>();
  auto idx_key = make_token_index(symbol.get_contract(), addr);
  auto itr_start = acc_tbl_idx.lower_bound(idx_key);
  auto itr_end = acc_tbl_idx.upper_bound(idx_key);

  bool found = false;
  for (; itr_start != itr_end; ++itr_start) {
    found = true;
    break;
  }

  auto addr_type = addr.index();
  if (addr_type == 1) {
    name addr_name = std::get<eosio::name>(addr);
    eosio::check(is_account(addr_name), "account does not exist");
  }

  if (found == false) {
    acc_tbl.emplace(payer,
                    [&](auto& a)
                    {
                      a.id = id;
                      a.nonce = 0;
                      a.address = addr;
                      a.balance = asset;
                    });
  }
}

void vaccount::transfer_handler(name from, name to, asset quantity, std::string memo) {
  if (to == get_self()) {
    extended_symbol sym(quantity.symbol, get_first_receiver());

    account_table acc_tbl(_self, _self.value);
    uint64_t row_id = std::stoi(memo);
    auto acc = acc_tbl.get(row_id, "row not found");
    check(acc.balance.get_extended_symbol() == sym, "asset mismatch");

    acc_tbl.modify(acc, same_payer, [&](auto& a) { a.balance.quantity += quantity; });
  }
}

checksum160 pub2addr(ecc_public_key pub) {
  return ripemd160(&pub[0], pub.size());
}

inline void vaccount::require_sig(std::vector<char> msg, account from, signature sig) {
  eosio::checksum160 addr = std::get<0>(from.address);
  // printhex(&msg[0], msg.size());
  checksum256 digest = sha256(&msg[0], msg.size());
  public_key pub = recover_key(digest, sig);
  ecc_public_key ecpub = std::get<0>(pub);
  // printhex(&ecpub[0], ecpub.size());
  eosio::checksum160 pub_addr = pub2addr(ecpub);
  // pub_addr.print();
  eosio::check(addr == pub_addr, "invalid signature");
}

void vaccount::require_auth(std::vector<char> msg, account from, std::optional<signature> sig) {
  auto from_type = from.address.index();
  if (from_type == 1) {
    eosio::check(!sig.has_value(), "signature not allowed for eos vaccounts");
    name from_name = std::get<name>(from.address);
    eosio::require_auth(from_name);
  } else if (from_type == 0) {
    require_sig(msg, from, sig.value());
  } else {
    check(false, "unkown account type");
  }
}

void vaccount::vtransfer(uint64_t from_id, uint64_t to_id, extended_asset quantity,
                         std::optional<signature> sig,
                         std::optional<extended_asset> fee) {
  // TODO: add fee to account
  account_table acc_tbl(_self, _self.value);

  auto from = acc_tbl.get(from_id, "from address does not exist");
  auto to = acc_tbl.find(to_id);
  check(to != acc_tbl.end(), "to address does not exist");

  check(from.balance.get_extended_symbol() == quantity.get_extended_symbol(), "symbol mismatch");
  check(from.id != to->id, "cannot transfer to self");
  check(from.balance >= quantity, "not enough balance");

  transfer_params params = {1, from.nonce, from.id, to_id, quantity};
  std::vector<char> msg_bytes = pack(params);
  require_auth(msg_bytes, from, sig);

  // if the destination is an EOS account we'll send an action notification
  if (to->address.index() == (int) VaccountType::EosAccount) {
    require_recipient(std::get<name>(to->address));
  }

  acc_tbl.modify(from, same_payer, [&](auto &f) { f.balance -= quantity; f.nonce++; });
  acc_tbl.modify(to, same_payer, [&](auto &t) { t.balance += quantity; });
  // acc_tbl.modify(fee_acc, same_payer, [&](auto &f) { f.balance += fee; });
}

void vaccount::withdraw(uint64_t from_id, name to_account, extended_asset quantity, std::string memo,
                        std::optional<signature> sig, std::optional<extended_asset> fee) {
  account_table acc_tbl(_self, _self.value);

  auto from = acc_tbl.get(from_id, "from address does not exist");

  check(from.balance.get_extended_symbol() == quantity.get_extended_symbol(), "symbol mismatch");
  check(from.balance >= quantity, "not enough balance");

  withdraw_params params = {2, from.nonce, from.id, to_account, quantity};
  std::vector<char> msg_bytes = pack(params);
  require_auth(msg_bytes, from, sig);

  acc_tbl.modify(from, same_payer, [&](auto &f) { f.balance -= quantity; f.nonce++; });

  action(permission_level{_self, "xfer"_n},
         quantity.contract,
         "transfer"_n,
         std::make_tuple(_self, to_account, quantity.quantity, memo))
    .send();
}
