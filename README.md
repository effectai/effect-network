# effect-network-eos
EOS smart contract for the Effect.AI token

## Compiling

The token contract is implemented in C++. To compile and deploy the contract the following prerequisites are required:
- eosio.cdt v1.5.0
- nodeos v1.6.1
- keosd v1.6.1
- cleos

First compile the contract:
```bash
cd contracts/effect.token
eosio-cpp -o effect.token.wasm effect.token.cpp --abigen
```

Create an account to deploy the contract to. In your development environment this would be:
```bash
cleos create account eosio effect.token EOS7ijWCBmoXBi3CgtK7DJxentZZeTkeUnaSDvyro9dq7Sd1C3dC4 EOS7ijWCBmoXBi3CgtK7DJxentZZeTkeUnaSDvyro9dq7Sd1C3dC4
```

Deploy the contract:
```bash
cleos set contract effect.token contracts/effect.token -p effect.token@active
```

## Specification

##### `token::create (issuer: name | maximum_supply: asset)`
Create the token with a given symbol.

```bash
cleos push action effect.token create '["eosio", "1000000000.0000 EFX"]' -p effect.token@active
```

##### `token::issue (to: name | quantity: asset | memo: string)`
Issue tokens to a user.

```bash
cleos push action effect.token issue '["eosio", "50000.0000 EFX", "m" ]' -p eosio@active
```

##### `token::retire (quantity: asset | memo: string)`
Allows the issuer of a token to remove tokens from circulation. The tokens must be owned by the issuer at the time they are retired. So it does not allow an issuer to retire tokens out of other people's wallets.

```bash
cleos push action effect.token retire '["2000.0000 EFX", "m"]' -p eosio@active
```

##### `token::transfer (from: name | to: name | quantity: asset | memo: string)`

```bash
cleos push action effect.token transfer '[ "peter", "josh", "23.0000 EFX", "m" ]' -p peter@active
```

##### `token::open`

##### `token::close`


### Current contract

##### `token::transferFrom (originator: name | from: name | to: name | quantity: asset)`
Transfer tokens on behalf of `from` to `to`, requires allowance

##### `token::approve (owner: name | spender: name | quantity: asset)`
Set the `quantity` that `spender` can send on behalf of `owner` to `quantity`.

##### `token::getAllowance (owner: name | spender: name)`
Get the `quantity` that `spender` can send on behalf of `owner`. Returns allowance for all symbols.

Note:
- This can probably be replaced with a `cleos get table`.
- Also this should have been named `getAllowance` instead of `allowance`.
- How do getters work anyway, there's a get_supply and get_balance in the header file.

##### `token::getLockedBalance (owner: name | time: uint64_t)`
Get the number of tokens locked for `address` at `time`.

Note:
- This can probably be replaced with a `cleos get table`.

##### `token::lock (from: name | to: name | quantity: asset | time: uint64_t)`
Send `quantity` of tokens to a user that are locked until `time`. The locked amount is stored in a seperate table. Any additional calls that have the same time should be added to the same record.

Note:
- If you have allowance, can you also use them to lock tokens in the name of someone else?

##### `token::unlock (to: name | time: uint64_t)`
Unlock all tokens locked for `to` at given `time`.

### Considerations
Instead of giving others an allowance, could it be worth it to create a payment request. With the following options to be groomed:
- To be payed by a single person, or by everyone.
- To expire the request in a given time, or to be valid infinitely.
- To remove the payment request.
- To allow the sender to send a different value other than the one in the payment request
  - Allow higher values
  - Allow lower values
  - Allow any value > 0
  - When a lower/different value is sent, should the payrequest be
    - deleted
    - modified to be lowered
- Hell you can make an entire debt system like this.
- Add interest rates over time because why not.

Karma implements a lock that is true by default. This locks any transactions until these are unlocked by the issuer, is this something that we want?
