if [ -z "$1" ]; then
    echo "Usage: $0 <Effect_Account_ID>"
    echo"(Effect_Account_ID can be found in profile page of force frontend.)"
    exit 1
fi

cleos wallet open
cleos wallet unlock --password $(cat default.wallet)

cleos push action effect.token transfer '["effect.admin", "effect.accnt", "1000.0000 EFX", '"$1"']' -p effect.admin@active