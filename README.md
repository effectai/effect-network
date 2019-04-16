# Effect Network EOS
EOS smart contracts for The Effect Network

## Compiling

The token contract is implemented in C++. To compile the contracts you
will need the following prerequisites:

- eosio.cdt v1.5.0
- eosio v1.6.4

To compile all contracts and the unit tests:

```bash
mkdir build
cd build
cmake ..
make
```

You can also use `eosio-cpp` to compile individual contracts:

```bash
cd contracts/effect-token
eosio-cpp -o effect-token.wasm effect-token.cpp --abigen
```

## Deploying

To deploy the contracts to a [local EOSIO
testnet](https://github.com/EOSIO/eos/tree/master/Docker) you can use
the provided setup script:

```bash
npm install
npm run deploy local efxefxefxefx swapswapswap stakesstakes
```

This script uses the default `eosio` account to deploy, initialize and
authorize the accounts.

Some actions that can be used to issue and stake tokens:

```bash
cleos push action swapswapswap posttx '["eosio","d10153081027000000000000141b00234a5dcafb17ae645c203617f709450e8c5b149c49f34d4ef20298122900697b68c7526f7bf91e53c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac000000000000000003209c49f34d4ef20298122900697b68c7526f7bf91ef0056a65737365f00d313535343330353937393937390000","eosio","acbc532904b6b51b5ea6d19b803d78af70e7e6f9","10000000000"]' -p eosio@active
cleos push action swapswapswap issue '["6a8f4f8c5bc3f44deff460ef53b787335096e7df67d3d229fb41779cf2b919bf"]' -p eosio@active
cleos push action efxefxefxefx transfer '["eosio","stakesstakes","350000.0000 EFX","stake"]' -p eosio@active
cleos push action stakesstake claim '["eosio","EFX"]' -p eosio@active
cleos get table efxefxefxefx eosio accounts
```
