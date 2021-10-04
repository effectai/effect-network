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

A batch holds a collection of tasks for a campaign.

- primary key [uint64]: concatenation of the campaign ID and the batch ID
- id [uint32]: batch ID incremental within this campaign
- campaign_id [uint32]: ID of the campaign this batch belongs to
- task_merkle_root [checksum256]: root of the task merkle tree
- balance [ext asset]: how much balance this batch has left
- repetitions [uint32]: number of repetitions per task
- tasks_done [uint32]: how many tasks have been completed in this batch

## Actions

#### init
Initialize the Effect Force smart contract. Can be called once.

#### mkcampaign
Create a campaign
```
void mkcampaign(vaccount::vaddress owner,
                content content,
                eosio::extended_asset reward,
                vaccount::sig sig);
```

#### mkbatch
Create a batch
```
void mkbatch(uint32_t id,
             uint32_t campaign_id,
             content content,
             checksum256 task_merkle_root,
             uint32_t num_tasks,
             vaccount::sig sig);
```
