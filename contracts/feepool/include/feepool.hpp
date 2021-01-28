#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>

using namespace std;
using namespace eosio;

CONTRACT feepool : public contract {
  public:
    using contract::contract;

    [[eosio::action]]
    void clear();

    void transfer_handler(
      eosio::name from,
      eosio::name to,
      eosio::asset quantity,
      std::string memo
    );

  private:
    TABLE balances {
      uint64_t    cycle;
      float       balance = 0.0;
      auto        primary_key() const { return cycle; }
    };
    typedef multi_index<name("balances"), balances> balances_table;
};
