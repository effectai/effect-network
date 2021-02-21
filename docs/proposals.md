---
# title: Proposals
# parent: EffectDAO
# nav_order: 3
layout: default
---

# Proposals
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Decisions in the EffectDAO come from proposals that were approved by
Guardians. Right now proposals are meant to distribute DAO funds to initiatives
that strengthen the network, but as the governance mechanics mature the DAO will
be given more and more control.

EffectDAO is decentralized and opperates completely on-chain. This means that
proposals are submitted, voted on, and processed on the EOS blockchain.

The funding for proposals comes from the DAO treasury. The treasury is
bootstrapped with a token allocation of 170 million EFX tokens (over 25% of the
total supply). To limit the number of tokens that come into circulation over
time there is a maximum amount of tokens alleglible per cycle (the *budget*).

## Creating a proposal

All DAO members are able to create proposals. The Effect Dashboard comes with a
template that oulines the topics you should normally cover. A proposal costs 100
EFX to create which is meant as protection against spam.

When you first create a proposal it'll be a draft. This means it's visible on
the dashboard for discussion by other members but it can't yet be voted on. You
can collect feedback and make adjustments for as long as is necessary. As soon
as you're happy with your proposal you can assign it to the next cycle and wait
for that to start voting.

So what types of things can you propose? The most useful are requests for
funding to get a task done. After such a funding proposal is approved the
associated funds can be transferred to the author. It's also possible to create
a proposal that suggests changes to the governance or tokenomics, or that polls
a sentiment from the Guardians. These governance proposals often require more
development work so they can take a while to be enacted.

## Voting on proposals

You can vote on active proposals in the dashboard. There are 3 types of votes
you can cast:

1. **Yes** *this proposal should be executed.*
2. **Abstain** *no opinion, let others decide on this one.*
3. **No** *this proposal shouldn't get executed.*

When you vote your full vote weight is credited to the proposal. It's
recommended to vote on all active proposals in a cycle so you make full use of
fee distribution.

![Dashboard vote](/assets/images/vote.png){: .d-block .mx-auto }

## Cycles

Although EffectDAO feels like a futuristic machine of AI and automation, it
really just is a very fine coordination of people of flesh and blood, that have
jobs, lifes, loved ones, and time-zones to think about. To give all Guardians
enough time to anticipate and consider proposals the DAO operates in cycles.

Cycles are fixed time units of 2 weeks in which proposals are reviewed, voted
on, and executed. Besides controlling the speed at which proposals can be
applied, cycles also have a budget that limits the amount of funds that are
released from the treausry.

## Proposal lifecycle

A proposal goes through the following stages:

1. **Draft** *The proposal is not assigned to a cycle*
2. **Pending** *The proposal is assigned to a cycle in the future*
3. **Active** *The proposal is assigned to the current cycle*
4. **Processing** *The proposal was assigned to a past cycle but not yet accepted or rejected*
5. **Accepted / Rejected** *Votes have been tallied and the proposal is either accepted or rejected.*
6. **Executed** *An accepted proposal that has been enacted.*

![Proposal lifecycle](/assets/images/proposal-lifecycle.png){: .d-block .mx-auto }

For a proposal to be approved it needs to:

- Have more Yes votes than No votes
- Have more total votes than the quorum
- Fit within the cycle budget
- Be approved by the High Guard

## Recycling of funds

Once a cycle is finished the required funds are allocated to accepted
proposals. Often there is a significant amount of budget left. What happens with
this budget is called the *recycle strategy*. This strategy can always be
adjusted by new proposals and consists of 3 segments: funds that go back to the
treasury, funds that go to the fee pool, and funds that get burned.