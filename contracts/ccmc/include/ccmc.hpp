#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <eosio/crypto.hpp>


using namespace std;
using namespace eosio;

CONTRACT ccmc : public contract {
  public:
    using contract::contract;

    ACTION initgenblock(vector<char> raw_header);

    static const uint32_t PUBKEY_LEN = 67;
    static const uint32_t SIG_LEN = 65;

    struct header {
      uint32_t version;
      uint64_t chainId;
      vector<char> prevBlockHash;
      vector<char> transactionsRoot;
      vector<char> crossStatesRoot;
      vector<char> blockRoot;
      uint32_t timestamp;
      uint32_t height;
      uint64_t consensusData;
      vector<char> consensusPayload;
      vector<char> nextBookkeeper;
    };

   header deserialize_header(vector<char> raw_header) {
      // checksum256 header_digest = sha256(raw_header.data(), raw_header.size());
      // print("header_digest ", header_digest, "\n");
      cmcc:header header = unpack<ccmc::header>(raw_header);;
      return header;
    }

  private:
    TABLE poly {
      uint32_t  epoch_block_height;
    };
    typedef singleton<name("poly"), poly> poly_table;
};
