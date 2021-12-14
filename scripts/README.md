# Scripts

Some usefull scripts that make it easier to work with Effect Network. 


## Local Deployment

To make local development more easy, there are a couple of scripts provided to be to spin up a local nodeos blockchain instance, deploy the smart contracts and run the frontend. 

### Local Deployment Requirements

In order to run the local deployement the following are needed:

- [EOSIO SDK](https://developers.eos.io/manuals/eos/latest/install/install-prebuilt-binaries)
- [NodeJS](https://nodejs.org/en/download)

# (Re-)Install and Run
After installing the SDK and NodeJS, you can run the following command to install and run a local nodeos instance and the rest of the Effect Network dependencies.
Make sure you are in the `scripts` directory when running these commands.
```bash
./local.sh
```

Wait for everything to be ready and you should be able to visit the force-app in your browser at [http://localhost:3000](http://localhost:3000).

# Restart
After you have installed the nodeos, you can run the following command to restart the nodeos instance, without downloading and installing everything again.
```bash
./restart.sh
```
You can pass `--delete` flag to delete the existing blockchain data for a fresh start.

# Get EFX tokens
In order to create batches you will need to get some EFX tokens. You can do this by running the following command.
```bash
./get-tokens.sh <Effect_account_ID>
```
You can find you account ID by goint to the profile page of the Force Frontend at [http://localhost:3000/profile](http://localhost:3000/profile). Or run the following command to see all registered accounts:
```bash
cleos get table effect.accnt effect.accnt account
```