---
id: staking
title: Staking
parent: EffectDAO
layout: default
nav_order: 1
last_modified_date: 2020-11-22 22:31:00
---

# Effect Staking Protocol
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is staking?

Staking is the act of locking up your tokens in a smart contract for a minimum
amount of time, which means you will not be able to transfer them for at least
that period. In the EffectDAO you will have to stake EFX and NFX tokens to
unlock certain rewards and privileges. Staking is necessary as it singals that
you are commited to the project for at least the staking period (*skin in the
game*) and others can trust that you act in the best interest of the project.

## Tokens

Both network tokens can be staked but have a different role and unstake delay
time:

| Token | Purpose    | Unstake delay | Contract                                              | Stake age                                        |
|:------|:-----------|:--------------|:------------------------------------------------------|:-------------------------------------------------|
| EFX   | Utility    | 5 days        | [efxstakepool](https://bloks.io/account/efxstakepool) | <span class="label label-green">1000 days<span/> |
| NFX   | Governance | 15 days       | [efxstakepool](https://bloks.io/account/efxstakepool) | <span class="label label-yellow">0 days<span/>   |


In addition, staked EFX tokens have a unique property called [stake
AGE](#effect-power) that makes their stake grow more valuable over time.

Before the release of the new Staking Protocol (on 09-11-2020) it was just
possible to stake EFX. NFX tokens could only be *claimed* proportionaly to an EFX
stake and its age. This is how NFX tokens came into existence for a period of
about 2 years. After this date no new NFX tokens can ever be created.
{: .warn}

## How to stake

The simplest and recommended way to stake is by using the [Effect
Dashboard](https://dashboard.effect.ai/stake). You will need access to the EOS
account that holds your tokens and ensure it has some CPU, NET, and RAM
available. Here you can stake your tokens with a single slider while the
dashboard will take care of all the technicalities that are involved.

### Stake AGE

When you stake EFX tokens the system keeps track of how long they have been
staked. This age is used as a special multiplier on the power of your
stake. Your stake will get exponentially more powerful the longer it remains
staked.

If you decide to expand your stake with more EFX tokens this will have an effect
on your stake age. The best way to look at this is that your newly added tokens
have an age of 0 days, when they are added to the older tokens the total amount
of the stake will increase while the overall age will decrease. Dont worry
though: even when an up-stake makes your stake younger it will always increase
your Effect Power.

## Effect Power

The power of staked EFX tokens is determined by their stage age. This number is
called your Effect Power and is used to determine your rank in the
EffectDAO. Every 200 days of stake age will double the Effect Power of your
stake. The maximum effective stake age is capped at 1000 days, so after that
additional age will no longer benefit your stake.

The following table gives some numerical examples of Effect Power:

| Staked EFX | Stake AGE | Effect Power |
|------------|-----------|--------------|
| 30,000     | 0         | 30,000       |
| 30,000     | 200       | 60,000       |
| 30,000     | 400       | 90,000       |
| 30,000     | 600       | 120,000      |
| 30,000     | 800       | 150,000      |
| 30,000     | 1000      | 180,000      |
| 30,000     | 1200      | 180,000      |

## Unstaking

As long as your tokens are staked they are locked in a smart contract and can
not be transferred anymore. In order to gain access to them it's necessary to unstake
them. This can be done at any time, for a portion or for all of your staked
tokens. When the unstake is initiated that quantity is reduced from your stake
and the *unstake delay time* is started. After this delay the tokens will be
*refunded* to your wallet.

When you unstake EFX tokens you also forfeit their stake age. Of course the
remaining staked tokens will keep their age, but if you were to re-stake the
unstaked portion they would dilute your stake age.

Make sure to use the [Effect Dashboard](https://dashboard.effect.ai/stake) to
unstake your tokens in a proper and safe manner. The unstaking process is very
straight forward.

## Refunding

Usually your unstaked tokens are automatically transferred back to your wallet
after the unstake delay time. This is done with a *deferred transaction* on the
EOS blockchain. It's possible that this automated transaction fails from time to
time, in which case you will have to execute the refund by hand. If this
happened there will be a clear notification on the dashboard with a button to
initiate the refund.

---

## Technical deep-dive

### Staking formulas
### Offline staking
### Caveats
