#!/bin/bash

echo "🪐 Starting Local Effect Network."

function check_command {
    echo "🔎 Checking for $1."
    if ! command -v $1 > /dev/null; then
        echo "Command $1 not found. Please install it."
        exit 1
    fi
}

check_command "nodeos"
check_command "cleos"
check_command "keosd"
check_command "node"
check_command "npm"
check_command "git"

echo '🍾 All required commands found.'

# Remove the temporary directory
echo '🔥 Cleaning folder...'
rm -rf effect.accnt effect.force effect.token effect-js force-frontend-new force-frontend-new.nuxt vaccount-relayer
rm default.wallet nodeos.log
rm -rf ~/eosio-wallet/default.wallet

# Kill running instances
pkill nodeos
pkill keosd
pkill node



echo '🔐 Creating wallet.'
# Create wallet, unlock and open
cleos wallet create --file default.wallet 
cleos wallet open
cleos wallet unlock --password $(cat default.wallet)

# Start keymanager
# echo '🔒 Starting keymanager.'
# keosd &

# Start eos local network using chain_api and history_api, with flags for local blockchain explorer
echo '🔗 Starting local network.'
nodeos \
-e -p eosio \
--plugin eosio::chain_api_plugin \
--plugin eosio::history_api_plugin \
--data-dir ~/.local/share/eosio/nodeos_local \
--access-control-allow-origin="*" \
--access-control-allow-headers="*" \
--http-validate-host=false \
--delete-all-blocks \
> nodeos.log 2>&1 & 

sleep 5

# Check if nodeos is running, check if output of this command is what I expect it to be.
# TODO IF NOT RUNNING; output is: Failed to connect to nodeos at http://127.0.0.1:8888/; is nodeos running?
cleos get info

# Import the `eosio` private_key
echo '🔓 Importing `eosio` private key.'
cleos wallet import --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3


# Create the needed accounts.
# Accounts for the smart contracts
echo '🔓 Creating accounts.'
cleos create account eosio effect.force EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
cleos create account eosio effect.accnt EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
cleos create account eosio effect.token EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

# Accounts for the relayer and user.
cleos create account eosio effect.relay EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
cleos create account eosio effect.admin EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

sleep 2

# Make directories and download the contracts
echo '📦 Downloading contracts.'
mkdir effect.force effect.token effect.accnt
cleos --url https://jungle3.greymass.com get code efxforce1111 --wasm -c effect.force/effect.force.wasm -a effect.force/effect.force.abi &&
cleos --url https://jungle3.greymass.com get code efxtoken1112 --wasm -c effect.token/effect.token.wasm -a effect.token/effect.token.abi &&
cleos --url https://jungle3.greymass.com get code efxaccount11 --wasm -c effect.accnt/effect.accnt.wasm -a effect.accnt/effect.accnt.abi &&

sleep 2

# Deploy the contracts to the local blockchain
echo '📦 Deploying contracts.'
cleos --url http://localhost:8888 set contract effect.force effect.force --abi effect.force.abi -p effect.force@active
cleos --url http://localhost:8888 set contract effect.token effect.token --abi effect.token.abi -p effect.token@active
cleos --url http://localhost:8888 set contract effect.accnt effect.accnt --abi effect.accnt.abi -p effect.accnt@active


# Init force contract
cleos push action effect.force init '[ "effect.accnt" ]' -p effect.force@active

sleep 2

# Open an account for the relayer
echo '📦 Open vaccount for force.'
cleos push action effect.accnt open '{ "acc": ["name", "effect.force"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active
echo '📦 Open vaccount for relayer.'
cleos push action effect.accnt open '{ "acc": ["name", "effect.relay"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active
cleos push action effect.accnt open '{ "acc": ["name", "effect.admin"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active

sleep 2

# Create token supply for local Effect Network, and give yourself tokens.
echo '📦 Creating token supply.'
# cleos push action effect.token create '[ "effect.admin", "1000000.0000 EFX" ]' -p eosio@active
# cleos push action effect.token issue '[ "effect.admin", "1.0000 EFX", "yourMemo"]' -p eosio@active

cleos push action effect.token create '[ "effect.admin", "1000000.0000 EFX" ]' -p effect.token@active
cleos push action effect.token issue '[ "effect.admin", "50000.0000 EFX", "m" ]' -p effect.admin@active


sleep 2

# Install EFFECT-JS
echo '📦 Installing EFFECT-JS.'
git clone https://github.com/effectai/effect-js
cd effect-js
npm install
npm run build:cjs
cd ..

# Install Relayer
echo '📦 Installing Relayer.'
git clone https://github.com/effectai/vaccount-relayer
cd vaccount-relayer
npm install 
node index.js local &
cd ..

# Install Force-Frontend
echo '📦 Installing Force-Frontend.'
git clone https://github.com/effectai/force-frontend-new
cd force-frontend-new
rm .env.development
cp .env.local.development .env.development
npm install
npm link ../effect-js
npm run dev &
cd ..


# Finished? Ready to go!
echo '🎉 Finished! Ready to go!'








