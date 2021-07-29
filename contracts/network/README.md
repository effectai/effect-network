# Effect account system

This smart contract implements the Effect account system. It keeps track of
virtual token balances that can be spent by an EOS account or a
public-key.

## Balances

Each balance is tracked by an address that defines how the balance can be
spent. There are 2 types of addresses represented as an ~std::variant~:

- 0: ~checksum160~ - the ripemd160 hash of a secp256k1 public key
- 1: ~eosio::name~ - an EOS account name

Each balance entry has an incrementing primary key that is a unique
identifier. The primary key is used to identify you balance during deposit,
transfer, and withdraw.

## Actions

```
open(account_address acc,
     eosio::extended_symbol symbol,
     eosio::name payer)
```
Opens a token balance

```
transfer(uint64_t from_id,
         uint64_t to_id,
         eosio::extended_asset quantity,
         std::optional<eosio::signature> sig,
         std::optional<eosio::extended_asset> fee)
```
Transfer tokens between virtual accounts
