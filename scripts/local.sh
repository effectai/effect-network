#!/bin/bash

echo "🪐 Starting Local Effect Network."

JUNGLE_URL="https://jungle3.greymass.com"
KYLIN_URL="https://kylin.eosn.io"
LOCAL_URL="http://localhost:8888"
PUBLICKEY="EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
PRIVATEKEY="5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"

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
rm -rf effect.accnt effect.force effect.token effect.daofx effect.stake effect.props effect-js force-frontend-new force-frontend-new.nuxt vaccount-relayer
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

# Check if nodeos is running
# TODO IF NOT RUNNING; output is: 
# Failed to connect to nodeos at http://127.0.0.1:8888/; is nodeos running?
cleos get info

# Import the `eosio` private_key
echo '🔓 Importing `eosio` private key.'
cleos wallet import --private-key $PRIVATEKEY


# Create the needed accounts.
# Accounts for the smart contracts
echo '🔓 Creating accounts.'
cleos create account eosio effect.force $PUBLICKEY
cleos create account eosio effect.accnt $PUBLICKEY
cleos create account eosio effect.token $PUBLICKEY
cleos create account eosio effect.govrn $PUBLICKEY

# Accounts for the relayer and user.
cleos create account eosio effect.relay $PUBLICKEY
cleos create account eosio effect.admin $PUBLICKEY

# DAO contracts
cleos create account eosio effect.daofx $PUBLICKEY
cleos create account eosio effect.props $PUBLICKEY
cleos create account eosio effect.votes $PUBLICKEY
cleos create account eosio effect.stake $PUBLICKEY

sleep 2

# Make directories and download the contracts
echo '📦 Downloading contracts.'
mkdir effect.force effect.token effect.accnt effect.props effect.daofx effect.stake
cleos --url https://jungle3.greymass.com get code efxforce1111 \
--wasm -c effect.force/effect.force.wasm -a effect.force/effect.force.abi &&
cleos --url https://jungle3.greymass.com get code efxtoken1112 \
--wasm -c effect.token/effect.token.wasm -a effect.token/effect.token.abi &&
cleos --url https://jungle3.greymass.com get code efxaccount11 \
--wasm -c effect.accnt/effect.accnt.wasm -a effect.accnt/effect.accnt.abi &&

# thedaonkylin, propsonkylin, staking these contracts are only availabe on kylin.
cleos --url https://eos.greymass.com get code theeffectdao \
--wasm -c effect.daofx/effect.daofx.wasm -a effect.daofx/effect.daofx.abi &&
cleos --url https://eos.greymass.com get code daoproposals \
--wasm -c effect.props/effect.props.wasm -a effect.props/effect.props.abi &&
cleos --url https://eos.greymass.com get code efxstakepool \
--wasm -c effect.stake/effect.stake.wasm -a effect.stake/effect.stake.abi &&

sleep 2

# Deploy the contracts to the local blockchain
echo '📦 Deploying contracts.'
cleos --url http://localhost:8888 set contract effect.force effect.force \
--abi effect.force.abi -p effect.force@active
cleos --url http://localhost:8888 set contract effect.token effect.token \
--abi effect.token.abi -p effect.token@active
cleos --url http://localhost:8888 set contract effect.accnt effect.accnt \
--abi effect.accnt.abi -p effect.accnt@active

# Deploy DAO contracts
cleos --url http://localhost:8888 set contract effect.govrn effect.token \
--abi effect.token.abi -p effect.govrn@active
cleos --url http://localhost:8888 set contract effect.daofx effect.daofx \
--abi effect.daofx.abi -p effect.daofx@active
cleos --url http://localhost:8888 set contract effect.props effect.props \
--abi effect.props.abi -p effect.props@active
cleos --url http://localhost:8888 set contract effect.votes effect.props \
--abi effect.props.abi -p effect.props@active
cleos --url http://localhost:8888 set contract effect.stake effect.stake \
--abi effect.stake.abi -p effect.stake@active

# Create token supply for local Effect Network, and give yourself tokens.
echo '🪙 Create and Issue EFX and NFX token supply.'
# Create token supply EFX
cleos push action effect.token create '[ "effect.admin", "1000000.0000 EFX" ]' -p effect.token@active
cleos push action effect.token issue '[ "effect.admin", "50000.0000 EFX", "m" ]' -p effect.admin@active

# Create token supply NFX
cleos push action effect.govrn create '[ "effect.admin", "1000.0000 NFX" ]' -p effect.govrn@active
cleos push action effect.govrn issue '[ "effect.admin", "500.0000 NFX", "m" ]' -p effect.admin@active

sleep 2

echo '⭐ Initialize Staking Contract'
cleos push action effect.stake init ' { "token_contract": "effect.token", "stake_symbol": "4,EFX", "claim_symbol": "4,NFX", "age_limit": "17280000", "scale_factor": "864000000000000", "unstake_delay_sec": "604800", "stake_bonus_age": "4320000", "stake_bonus_deadline": "2022-01-12T18:00:00" } ' -p effect.stake@active

echo '⭐ Initialize Force contracts.'
# Init force contract
cleos push action effect.force init '{ "vaccount_contract": "effect.accnt",  "force_vaccount_id": "1", "payout_delay_sec": "60"}' -p effect.force@active

echo '⭐ Initilize proposal for DAO.'
# Init the proposal contract
# void init(cycle_duration_sec, voting_duration_sec, extended_asset_prop_cost, quorum, first_cycle_start_time, dao_contract)
# duration in seconds is 450000, it costs 1337 EFX to create a prop, takes one vote to make it count, 
# The unixtimestamp when this cycle starts is 1642003200, the DAO contract is effect.daofx
cleos push action effect.props init '{ "cycle_duration_sec": "500000", "cycle_voting_duration_sec": "450000", "proposal_cost": { "quantity": "42.0000 NFX", "contract": "effect.token" }, "quorum": "100", "first_cycle_start_time": "2022-01-05T19:00:00", "dao_contract": "effect.daofx" }' -p effect.props@active

echo '⭐ Initilize votes for DAO.'
cleos push action effect.votes init '{ "cycle_duration_sec": "500000", "cycle_voting_duration_sec": "450000", "proposal_cost": { "quantity": "1337.0000 NFX", "contract": "effect.token" }, "quorum": "1", "first_cycle_start_time": "2022-01-05T19:00:00", "dao_contract": "effect.daofx" }' -p effect.votes@active

# init Dao contracts
echo '⭐ Initialize Dao contracts.'
cleos push action effect.daofx init '{ "stake_contract": "effect.stake", "proposal_contract": "effect.props", "utl_token_sym": { "contract": "effect.token", "sym": "4,EFX" }, "gov_token_sym": { "contract": "effect.govrn", "sym": "4,NFX" } }' -p effect.daofx@active


sleep 2

# Open an account for the relayer
echo '📖 Open vaccount for force.'
cleos push action effect.accnt open \
'{ "acc": ["name", "effect.force"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active
echo '📖 Open vaccount for relayer.'
cleos push action effect.accnt open \
'{ "acc": ["name", "effect.relay"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active
cleos push action effect.accnt open \
'{ "acc": ["name", "effect.admin"], "symbol": { "contract": "effect.token", "sym": "4,EFX" }, "payer": "eosio" }' -p eosio@active

sleep 2


# # Install EFFECT-JS
# echo '📦 Installing EFFECT-JS.'
# git clone https://github.com/effectai/effect-js
# cd effect-js
# npm install
# npm run build:cjs
# cd ..

# # Install Relayer
# echo '📦 Installing Relayer.'
# git clone https://github.com/effectai/vaccount-relayer
# cd vaccount-relayer
# npm install 
# node index.js local &
# cd ..

# # Install Force-Frontend
# echo '📦 Installing Force-Frontend.'
# git clone https://github.com/effectai/force-frontend-new
# cd force-frontend-new
# rm .env.development
# cp .env.local.development .env.development
# npm install
# npm link ../effect-js
# npm run dev &
# cd ..

# Finished? Ready to go!
echo '🎉 Finished! Ready to go!'
