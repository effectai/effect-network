# Effect Network EOS
EOS smart contracts for The Effect Network

## Compiling

The token contract is implemented in C++. To compile and deploy the
contract the following prerequisites are required:
- eosio.cdt v1.6.0
- nodeos v1.6.1
- keosd v1.6.1
- cleos

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
