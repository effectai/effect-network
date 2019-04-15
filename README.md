# Effect Network EOS
EOS smart contracts for The Effect Network

## Compiling

The token contract is implemented in C++. To compile and deploy the
contracts you will need the following prerequisites:

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
