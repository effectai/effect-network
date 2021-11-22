# Effect Force smart contract

This smart contract implements all the blockchain functionality of Effect
Force. It's compatible with the Effect account system.

## Structs

#### content
Content is a struct that represents an external piece of content. It's a tuple
of a `uint8_t` and an `std::string`. The idea is that multiple storage backends
of content are supported, like IPFS, HTTP, FTP, etc. Currently there is only 1
source defined:

- 0: IPFS

## Tables

#### campaign

Campaign information

- id [uint32]: unique incremental identifier
- owner [vaddress]: Effect account address that owns the campaign
- content [content]: link to the external JSON of the campaign
- reward [ext asset]: the reward for each task

#### batch

A batch holds a collection of tasks for a campaign. Batches have to be funded
with EFX before they can be published.

- id [uint32]: batch ID incremental within this campaign
- campaign_id [uint32]: ID of the campaign this batch belongs to
- task_merkle_root [checksum256]: root of the task merkle tree
- balance [ext asset]: how much balance this batch has left
- repetitions [uint32]: number of repetitions per task
- tasks_done [uint32]: how many tasks have been completed in this batch
- num_tasks [uint32]: number of repetitions completed in the batch

- primary key [uint64]: concatenation of the campaign ID and the batch ID

The flow for creating a batch is as follows:

1) Call `mkbatch` with required params. This will set `num_tasks` to 0, which means unpublished.
2) Use `vtransfer` with the batch ID as memo to deposit funds. This will increase the batch's balance.
3) Call `publishbatch` to set num_tasks and publish it.

#### campaignjoin

A cache table that register which users access to a campaign.

- account_id [uint32]: the vaccount balance index of the account
- campaign_id [uint32]: the campaign id the account has access to

- primary index [uint64]: the concatenation of the `campaign_id` and `account_id`

#### submission
Task submissions and their data

- id [uint64]: unique identifier
- account_id [uint32]: worker account
- content [optional content]: the submission data, empty for reserverations
- leaf_hash [checksum256]: the task data hash used to track reptitions
- batch_id [uint64]: id of the batch

#### payment
Pending payments for an account and a batch.

- account_id [uint32]: the effect account row
- batch_id [uint64]: the primary id of the batch
- pending [ext. asset]: the amount of tokens due
- last_submission_time [time_point_sec]: time of the last submission

- primary index [uint64]: composite of batch and account (broken)
- by_account_batch [uint128]: composite of account and batch
- by_account [uint64]: by an account id

## Actions

#### init
Initialize the Effect Force smart contract. Can be called once.
```
void init(eosio::name vaccount_contract);
```

#### mkcampaign
Create a campaign
```
void mkcampaign(vaccount::vaddress owner,
                content content,
                eosio::extended_asset reward,
                eosio::name payer,
                vaccount::sig sig);
```

#### mkbatch
Create a batch
```
void mkbatch(uint32_t id,
             uint32_t campaign_id,
             content content,
             checksum256 task_merkle_root,
             eosio::name payer,
             vaccount::sig sig);
```

#### publishbatch
Publish a batch. The balance needs to cover `num_tasks * campaign.reward`.
```
void mkbatch(uint64_t id,
             uint32_t num_tasks);
```

#### joincampaign
Allows a user to join a campaign. The `account_id` is a `vaccount` balance index.
```
void joincampaign(uint32_t account_id,
                  uint32_t campaign_id,
                  eosio::name payer,
                  vaccount::sig sig);
```
#### reservetask
Make a reservation for a task. Creates an entry in the `submission` table.
```
void reservetask(std::vector<eosio::checksum256> proof,
                 std::vector<uint8_t> position,
                 std::vector<char> data,
                 uint32_t campaign_id,
                 uint32_t batch_id,
                 uint32_t account_id,
                 eosio::name payer,
                 vaccount::sig sig);
```

#### submittask
Submit the results for a task the toe `submission` table. Creates or increments a `payment` row as well.
```
  void submittask(uint64_t task_id,
                  std::string data,
                  uint32_t account_id,
                  uint64_t batch_id,
                  eosio::name payer,
                  vaccount::sig sig);
```
