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
