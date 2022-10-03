---
id: staking
title: Staking
parent: Govern

nav_order: 1
last_modified_date: 2020-11-22 22:31:00
---

# Effect Staking
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is staking?

When you stake your tokens they are locked up in a smart contract for a period
of time. In the EffectDAO you stake EFX and NFX tokens to participate in the
governance. The reason that staking is necessary is it that it shows commitment
(*skin in the game*) and others can trust that you act in the best interest of
the project.

## Tokens

Both network tokens can be staked but have a different role and unstake delay
time:

| Token | Purpose    | Unstake delay | Contract                                              | Stake age                                        |
|:------|:-----------|:--------------|:------------------------------------------------------|:-------------------------------------------------|
| EFX   | Utility    | 5 days        | [efxstakepool](https://bloks.io/account/efxstakepool) | <span class="label label-green">1000 days<span/> |
| NFX   | Governance | 15 days       | [efxstakepool](https://bloks.io/account/efxstakepool) | <span class="label label-yellow">0 days<span/>   |


Staked EFX tokens have an additional property called [stake AGE](#effect-power)
that makes their stake grow more valuable over time.

Before the release of the new Staking Protocol (on 09-11-2020) it was just
possible to stake EFX. NFX tokens could only be *claimed* proportionaly to an EFX
stake and its age. This is how NFX tokens came into existence for a period of
about 2 years. After this date no new NFX tokens can ever be created.
{: .warn}

## How to stake

To stake your tokens you can use the [Effect
Dashboard](https://dashboard.effect.ai/stake). Login with you EOS account and
make sure that it has some CPU, NET, and RAM available. Here you can stake your
tokens using a simple interface.

### Stake AGE

When you stake EFX tokens the system keeps track of how long they have been
staked. This age is used as a multiplier on the power of your EFX stake. Your
stake will get exponentially more powerful the longer it remains staked.

If you decide to add more tokens to an existing stake this will affect their
stake age. The best way to look at this is that your newly added tokens have an
age of 0 days. When they are added to the older tokens the total amount of the
stake will increase while the overall age will decrease. Don't worry though:
adding to your stake will always increase its power.

## EFX Power

The combination of staked EFX tokens and their age is called EFX Power. Every
200 days of stake age will double the EFX Power of your stake. The maximum age
is capped at a 1000 days.

This table shows how EFX Power grows over time:

| Staked EFX | Stake AGE | EFX  Power |
|------------|-----------|--------------|
| 30,000     | 0         | 30,000       |
| 30,000     | 200       | 60,000       |
| 30,000     | 400       | 90,000       |
| 30,000     | 600       | 120,000      |
| 30,000     | 800       | 150,000      |
| 30,000     | 1000      | 180,000      |
| 30,000     | 1200      | 180,000      |

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

<!---
---

## Technical deep-dive

### Staking formulas
### Offline staking
### Caveats
-->
