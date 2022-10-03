---
id: stake
title: Stake EFX
parent: Effect Network
nav_order: 1
has_children: false
last_modified_date: 2020-11-22 22:31:00
---

# Stake EFX and NFX

# Stake EFX

You can stake/unstake your EFX [here.](https://dao.effect.network/stake) There are a few items to cover for the Effect Staking Protocol. First is **Stake AGE**, followed by **EFX Power**.

## Stake AGE

Stake AGE is a factor that increases the weight of staked tokens linearly over time; the longer the tokens are staked the more EFX Power they will have. Stake AGE can double your EFX power by adding the initially staked tokens to your EFX power after 200 days of Stake AGE. This means, for example, that someone with 100k staked tokens with a year of Stake AGE has more EFX Power than someone who recently staked 200k EFX. The limit will be set in such a way that early and long-term members will greatly benefit from having staked their tokens longer.

Stake AGE has several benefits over regular staking:

- Users will be incentivized to keep their tokens staked for a longer time.
- Early and long-term participants are rewarded.
- It will be harder for new members with a lot of tokens to immediately take big rewards or votes from the DAO.
- The penalty for unstaking will be bigger as users will lose their Stake AGE for their unstaked tokens, making sure users are incentivized to keep their tokens staked.

## EFX Power

EFX Power is a factor that determines your weight and rank within the DAO. This measurement is a result of the Staking Protocol 2.0. There are two ways to increase your EFX Staking Power:

1. Increase the number of staked EFX tokens
2. Stake your EFX tokens longer to increase their Stake AGE

The first one is fairly simple: the more tokens you stake, the more EFX Power you will have. This is simply a 1:1 ratio (e.g., 100k staked EFX = 100k EFX Power). This is how most ordinary staking protocols work. However, The Effect Staking Protocol includes a measurement feature to track how long your stake has been active. This feature is called Stake AGE. Below, you will find a graph that shows how Stake AGE can affect the EFX Power for a fixed number of staked EFX tokens (100k EFX).

![Stake Age](/assets/imates/stake_age.png)

This graph clearly shows that even though the number of staked tokens stays the same, the EFX Power of those staked tokens increases linearly over time, with a limit after a certain number of days. The results and numbers from this graph are subject to change.  In an ever-evolving ecosystem, these numbers, formulas, and parameters are controlled by the Effect DAO with governance proposals.

# Stake NFX

[NFX](https://bloks.io/tokens/NFX-eos-effecttokens) is the governance token of the Effect Network. The token is an integral part of the DAO, especially for voting on proposals. You can stake NFX on the same page you stake your EFX, which can be found [here](https://dao.effect.network/stake).

The **TriForce** of EFX and its Stake AGE combined with NFX is the core of the new Staking Protocol 2.0. These three factors will determine your voting power, which in turn determines how many voting allocations (and thus fee rewards) you have at your disposal. The number of votes that a DAO Guardian has is determined by the Effect Staking Protocol: a Triforce of EFX and its Stake AGE, and more importantly, NFX. These three factors determine your DAO vote weight. For more on this, please visit the article titled About the EffectDAO.

## Unstaking

To receive your staked tokens back in your account you will first have to
unstake them. This can be done for a portion or for all of your staked
tokens. When the unstake is initiated that quantity is reduced from your stake
and the *unstake delay time* is started. After this delay the tokens will be
*refunded* to your wallet.

When you unstake EFX tokens you also loose their stake age. Of course the
remaining staked tokens will keep their age but if you were to re-stake the
unstaked portion they would dilute your age.

## Refunding

Usually your unstaked tokens are automatically transferred back to your wallet
after the unstake delay time. This is done with a *deferred transaction* on the
EOS blockchain. It's possible that this automated transaction fails, in which
case you will have to execute the refund by hand. If this happened there will be
a notification on the dashboard with a button to initiate the refund.