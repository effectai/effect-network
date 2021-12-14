#!/bin/bash

echo "🪐 Restarting Local Effect Network. Working Directory: $(pwd)"

if [ "$1" = "--replay" ]; then
    echo "🚲 Restarting with replay"
    delete_replay="--replay-blockchain"
elif [ "$1" = "--delete" ]; then
    echo "🚲 Restarting afresh, deleting all blocks"
    delete_replay="--delete-all-blocks"
else
    echo "🚲 Restarting with default, using replay"
    delete_replay="--replay-blockchain"
fi

# Kill running instances
echo '🔥 Killing running instances.'
pkill nodeos
pkill keosd
pkill node

echo '🔐 Opening wallet.'
# Create wallet, unlock and open
# cleos wallet create --file default.wallet 
cleos wallet open
cleos wallet unlock --password $(cat default.wallet)

# Start keymanager
# echo '🔒 Starting keymanager.'
# keosd &

# Start eos local network using chain_api and history_api, with flags for local blockchain explorer
echo '🔗 Restarting local network.'
nodeos \
-e -p eosio \
--plugin eosio::chain_api_plugin \
--plugin eosio::history_api_plugin \
--data-dir ~/.local/share/eosio/nodeos_local \
--access-control-allow-origin="*" \
--access-control-allow-headers="*" \
--http-validate-host=false \
$delete_replay \
> nodeos.log 2>&1 & 

sleep 5

# Check if nodeos is running, check if output of this command is what I expect it to be.
# TODO IF NOT RUNNING; output is: Failed to connect to nodeos at http://127.0.0.1:8888/; is nodeos running?
cleos get info

# Install EFFECT-JS
# git clone https://github.com/effectai/effect-js
cd effect-js
echo "📦 Updating EFFECT-JS. Working Directory: $(pwd)"
git pull --ff-only
npm install
npm run build:cjs
cd ..

# Install Relayer
# git clone https://github.com/effectai/vaccount-relayer
cd vaccount-relayer
echo "📦 Updating Relayer. Working Directory: $(pwd)"
git pull --ff-only
npm install 
node index.js local &
cd ..

# Install Force-Frontend
# git clone https://github.com/effectai/force-frontend-new
cd force-frontend-new
echo "📦 Updating Force-Frontend. Working Directory: $(pwd)"
git pull --ff-only
rm .env.development
cp .env.local.development .env.development
npm install
npm link ../effect-js
npm run dev &
cd ..

# Finished? Ready to go!
echo '🎉🎉🎉 Finished! Ready to go!'
