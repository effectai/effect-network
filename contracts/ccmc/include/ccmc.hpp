#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <eosio/crypto.hpp>

using namespace std;
using namespace eosio;

CONTRACT ccmc : public contract {
  public:
    using contract::contract;

    ACTION initgenblock(vector<char> raw_header, vector<char> pubkey_list);

    static const uint32_t PUBKEY_LEN = 67;
    static const uint32_t SIG_LEN = 65;

    struct header {
      uint32_t version;
      uint64_t chainId;
      checksum256 prevBlockHash;
      checksum256 transactionsRoot;
      checksum256 crossStatesRoot;
      checksum256 blockRoot;
      uint32_t timestamp;
      uint32_t height;
      uint64_t consensusData;
      checksum160 nextBookkeeper;
    };

    struct bookkeeper {
      vector<checksum160> keepers;
      checksum160 nextBookkeeper;
    };


    header deserialize_header(vector<char> raw_header) {
      cmcc:header header = unpack<ccmc::header>(raw_header);  
      // We are skipping the variable part consensusPayload as we don't need it, instead we just read the last 20 bytes
      // into nextBookkeeper. TODO: figure out a way of getting last 20 bytes without unpack
      vector<char> temp = vector<char>(raw_header.end() - 20, raw_header.end());
      
      header.nextBookkeeper = unpack<checksum160>(temp);
      return header;
    }
    bookkeeper verify_pubkey(vector<char> pubkey_list) {
      eosio::check(pubkey_list.size() % PUBKEY_LEN == 0, "length of pubkey_list is invalid");
      uint32_t n = pubkey_list.size() / PUBKEY_LEN;
      uint32_t m = n - (n - 1) / 3;
      cmcc:bookkeeper bookkeeper = ccmc::bookkeeper();
      return get_bookkeeper(n,  n - (n - 1) / 3, pubkey_list);
    }
    bookkeeper get_bookkeeper(uint32_t key_len, uint32_t m, vector<char> pubkey_list) {
      vector<checksum160> keepers(key_len);
      // for(uint i = 0; i < _keyLen; i++){
      //     publicKey = Utils.slice(_pubKeyList, i*POLYCHAIN_PUBKEY_LEN, POLYCHAIN_PUBKEY_LEN);
      //     buff =  abi.encodePacked(buff, ZeroCopySink.WriteVarBytes(Utils.compressMCPubKey(publicKey)));
      //     hash = keccak256(Utils.slice(publicKey, 3, 64));
      //     keepers[i] = address(uint160(uint256(hash)));
      // }
      // buff = abi.encodePacked(buff, ZeroCopySink.WriteUint16(uint16(_m)));
      // bytes20  nextBookKeeper = ripemd160(abi.encodePacked(sha256(buff)));
      cmcc:bookkeeper bookkeeper = ccmc::bookkeeper();
      // bookkeeper.keepers = keepers
      // bookkeeper.nextBookkeeper = nextBookkeeper
      return bookkeeper;
    }
    

  private:
    TABLE poly {
      uint32_t  epoch_block_height;
    };
    typedef singleton<name("poly"), poly> poly_table;
};
