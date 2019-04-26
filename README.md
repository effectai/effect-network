<p align="center"><img src="logo.png" width="192px"></p>

<h1 align="center">Effect Network EOSIO</h1>

<p align="center">Smart contracts for the Effect Network</p>

## Compiling

The contracts are implemented in C++ and require **eosio.cdt 1.5.0**
 to compile.

The supplied Makefile can compile all contracts:

```bash
make all
```

It's possible to use a docker container instead of installing
**eosio.cdt** locally:

```bash
EOS_CC="docker run --rm -it -v $(pwd):/app -w /app effectai/eosio-cdt:v1.5.0 eosio-cpp" ABI_CC="docker run --rm -it -v $(pwd):/app -w /app effectai/eosio-cdt:v1.5.0 eosio-abigen" make all
```

## Deploying

To deploy the contracts to a [local EOSIO
net](https://github.com/EOSIO/eos/tree/master/Docker) you can use
the provided setup script. The arguments are the 3 accounts that will
be created to function as smart contracts:

```bash
npm install
npm run deploy local efx swap stake
```

This script uses the default `eosio` account to deploy, initialize and
authorize the accounts.

Some actions that can be used to issue and stake tokens:

```bash
cleos push action swap posttx '["eosio","d10153081027000000000000141b00234a5dcafb17ae645c203617f709450e8c5b149c49f34d4ef20298122900697b68c7526f7bf91e53c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac000000000000000003209c49f34d4ef20298122900697b68c7526f7bf91ef0056a65737365f00d313535343330353937393937390000","eosio","acbc532904b6b51b5ea6d19b803d78af70e7e6f9","10000000000"]' -p eosio@active
cleos push action swap issue '["6a8f4f8c5bc3f44deff460ef53b787335096e7df67d3d229fb41779cf2b919bf"]' -p eosio@active
cleos push action stake open '["eosio","eosio"]' -p eosio@active
cleos push action efx transfer '["eosio","stake","350000.0000 EFX","stake"]' -p eosio@active
cleos push action stake claim '["eosio","EFX"]' -p eosio@active
cleos get table efx eosio accounts
```
