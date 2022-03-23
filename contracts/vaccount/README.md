# Effect account system

This smart contract implements the Effect account system. It keeps track of
virtual token balances that can be spent by an EOS account or a
public-key.

## Balances

Each balance is tracked by an address that defines how the balance can be
spent. There are 2 types of addresses represented as an `std::variant`:

- 0: `checksum160` - the ripemd160 hash of a secp256k1 public key
- 1: `eosio::name` - an EOS account name

Each balance entry has an incrementing primary key that is a unique
identifier. The primary key is used to identify you balance during deposit,
transfer, and withdraw.

## Actions

#### open
Open a token balance
```
open(account_address acc,
     eosio::extended_symbol symbol,
     eosio::name payer)
```

#### vtransfer
Transfer tokens between virtual accounts
```
vtransfer(uint64_t from_id,
          uint64_t to_id,
          eosio::extended_asset quantity,
          std::string memo,
          std::optional<eosio::signature> sig,
          std::optional<eosio::extended_asset> fee)
```

#### withdraw
Withdraw tokens from a virtual account
```
void withdraw(uint64_t from_id,
              eosio::name to_account,
              eosio::extended_asset quantity,
              std::string memo,a
              std::optional<eosio::signature> sig,
              std::optional<eosio::extended_asset> fee);
```

#### token transfers
A token transfer to the contract with the right memo will credit them to a
virtual account. The memo must be the integer of the primary key of a balance
row. It's required to open the corresponding token balance before depositing.
