<p align="center"><img src="logo.svg" width="192px"></p>

# The Future-of-Work
Join us in creating the decentralized network for human intelligence! Effect is focused on creating a distributed workforce that will where workers and requesters can easily connect with each other. Where the interactions are managed by smart contracts and policies are instituted by the community. 
Be part of building the Future-of-Work.

# 🤷🏽‍♀️ Why? 
We believe in the power of the community's self-determination and to govern themselves. Where the community can determine for themselves fair and just policies that will help the community grow, using blockchain, it is now possible to create a just such a community. Where people can join and work for a living wage, where people can work from anywhere at any time without fear of being exploited. There is still a lot that needs to be done. So please help us build the future of work, the tools, and infrastructure that will further carry the digital working class into the future.

# 🕵 How?
How can you help us build? 
Depending on you skill set there are different things that you can do to help out. But do first reach out and get in touch with our community on our Discord server: https://discord.gg/7JJrUE8b.
Or if you prefer getting straight into it, you can find the docs here: https://docs.effect.network 

- 👩🏻‍💻 **Developer** If you are a developer and see a project that you want to contribute to, please find our style guides and contribution guides at the following link. You can also start by building you own dApp on the Effect Network platform. You can find an example application at the following link:  [Legendary-Parakeet](https://github.com/effectai) You can also find developer documentation at the following link: [docs](https://developer.effect.network)
- 👨🏻‍🚒 **Community Management** With a growing community we need more people to help guide the newer members of our community. You can do this by helping out on the discord server, pariticipating in the DAO and governance of the platform at [dao.effect.network](https://dao.effect.network)
- 👩🏻‍🍳 **Specification / Documentation** Next to our official documentation for developers we also have a documentation that is maintained for and by the community. You can find them here: [docs](https://effect-dao-docs.gitbook.io/dao-guides/)
- 👩🏿‍🏭 **Testers** Here be dragons, and we need to make sure that they can't harm us, help us find bugs and report them when you find them!  
- 👩🏾‍🚀 **Evangalism**  Go tell it on the mountain, over the hill, everywhere! Spread the word and help us grow. 


# 🖍️ Use our APIs
If you find yourself needing some work done by our community, go ahead and use our API to tap in to our network. You can find all of the documentation at the following link: [docs](https://)
We have prepped a template/example application for you here: [docs](https). Built with Ionic, it can be used as a frame to build out a web application that can be deployed as an IOS or Android app, or served via the web.
Be crazy, be wild with your ideas. Anything goes

# 🏗️ Build all the contracts
Below you will find the contracts that are deployed for the Effect Network. The requirements are:
- [cleos](https://developers.eos.io/manuals/eos/v2.1/cleos/index)
- [nodeos](https://developers.eos.io/manuals/eos/latest/nodeos/index)
- [make](https://www.gnu.org/software/make/)
- [node](https://nodejs.org/en/download/)

## 🥧 Compiling

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

## 🚚 Deploying

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
