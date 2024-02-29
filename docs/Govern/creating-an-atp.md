---
title: Creating an ATP
parent: Govern
nav_order: 2
layout: default
last_modified_date: 2024-02-29 17:59:05
---

# Arbitrary Transaction Proposals (ATPs)

ATPs are proposals that execute arbitrary EOS transaction authorized
by the DAO once accepted. They are a very powerful tool in the
decentralization of Effect Network.

The transaction attached to an ATP is are regular eosio.msig
transactions that carry the authority of `daoproposals@dao`.

There are 2 steps needed to create an ATP:

1. Create the `eosio.msig` transaction
2. Create the DAO proposal and link the ATP to it

## Creating an eosio.msig using Bloks

A simple way to create an `eosio.msig` transaction is to use
[https://bloks.io](https://bloks.io).

In this example we will create a transaction that sends NFX tokens
from `daoproposals` to an other account.

**Login and enter Multisig Mode**

In the login dropdown, switch the toggle to activate "Multisig Mode"

![Enter Multisig Mode](/assets/images/creating-an-atp--multisig-mode.png){: .d-block .mx-auto }

**Create the transaction in Bloks**

Go to "Wallet" and and enter the fields for sending the NFX tokens.
Make sure to switch to "Use custom token" as your account might not
own the tokens you wist to send. Then click the "Transfer" button.

![Create TX](/assets/images/creating-an-atp--create-tx.png){: .d-block .mx-auto }

**Add the daoproposals@dao authority**

In the multisig form, change the following fields:

- Authorization: enter `daoproposals` as Actor, and `dao` as Permission.
- Data -> From: change the sending account to `daoproposals` (as we are spending tokens from this account)

![Add Auth](/assets/images/creating-an-atp--add-auth.png){: .d-block .mx-auto }

**Note down proposal name and add Requested Approvers**

Take note of the Proposal Name at the bottom. 
Then add `daoproposals@dao` as a Requested Approver.
Finally click Propose.

![Approvers](/assets/images/creating-an-atp--approvers.png){: .d-block .mx-auto }

**Set the eosio.msig expiration**

It's important to set the expiration of the transaction at least 5
weeks in the future. 

This is because DAO cycles take 2 weeks and it can take more time for
you proposal to be executed afterwards. If you omit this step your ATP
will be invalid and can not be executed.

To do this, expand "Transaction Settings" and adjust the "expiration"
field to be sufficiently far in the future.

![Set Expiration](/assets/images/creating-an-atp--expiration.png){: .d-block .mx-auto }

**Create the DAO proposal**

Enter the `eosio.msig` proposal name in the "Advanced" section of the
DAO proposal form:

![DAO proposal](/assets/images/creating-an-atp--dao-proposal.png){: .d-block .mx-auto }
