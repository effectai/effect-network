---
title: Starting a cycle
parent: Govern
nav_order: 2
layout: default
last_modified_date: 2020-11-22 22:31:00
---

# Managing cycles

This guide will show you how to transition to a new cycle.

Proposals and rewards in Effect operate in
[cycles](/Govern/proposals.html#cycles).  Every two weeks a new cycle
starts, with new proposals to vote on, and old cycles are reviewed by
the High Guard and eventually processed and paid out.

Everything related to cycles is managed in the `daoproposals` smart
contracts, which contain the logic required to transation to a new
cycle. This process must be initialized by an Effect Guardian by
posting a few transactions to the blockchain.

### Step 1: Update the cycle

The `cycleupdate` transaction moves Effect Network to the next
cycle. Once this is done, Guardians will be able to vote for
the proposals in the new cycle.

- It can be executed by anyone once the current cycle is over.

- Performing the action [can be done directly from Bloks](https://bloks.io/account/daoproposals?loadContract=true&tab=Actions&account=daoproposals&scope=daoproposals&limit=100&action=cycleupdate) without arguments, or from the command line with:

```
cleos push action daoproposals cycleupdate []
```

The proposals in the previous cycle will move to _Processing_ state.

### Step 2: Process the old cycle

Once the new cycle is active, we should process the old cycle. This
action will analyze all proposals and move them into _Accepted_ or
_Rejected_ state, depending on the votes they received.

This will also recycle the cycle funds, transferring a part of it to the fee
pool and a part back to the treausry. This means fees can not be
claimed until this step is executed.

- It can be executed by anyone once the new cycle has started

- Performing the action [can be done directly from Bloks](https://bloks.io/account/daoproposals?loadContract=true&tab=Actions&account=daoproposals&scope=daoproposals&limit=100&action=processcycle). The `account` parameter should be your account name, which is used to pay for a small amount RAM needed to store the votes, and the cycle ID to be processed.  It can also be run from the command line with:

```
cleos push action daoproposals processcycle [youreosaccount, 75]
```

### Step 3: High Guard approval

As a last step, all accepted proposals must be submitted to the High
Guard to be executed. This is an extra security measure that might be
removed in the future.

This step only has to be performed if there were accepted proposals in
the cycle.

This transaction is more involved, and there is a script available in
[effectai/effect-network](https://github.com/effectai/effect-network). Instructions
on how to operate it will be added soon.
