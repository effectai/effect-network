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
      vector<checksum256> keepers;
      checksum160 nextBookkeeper;
    };


    header deserialize_header(vector<char> raw_header) {
      cmcc:header header = unpack<ccmc::header>(raw_header);  
      // We are skipping the variable part consensusPayload as we don't need it, instead we just read the last 20 bytes
      // into nextBookkeeper. TODO: figure out a way of getting last 20 bytes without unpack
      vector<char> temp = vector<char>(raw_header.end() - 22, raw_header.end() - 2);
      
      header.nextBookkeeper = unpack<checksum160>(temp);
      return header;
    }
    bookkeeper verify_pubkey(vector<char> pubkey_list) {
      eosio::check(pubkey_list.size() % PUBKEY_LEN == 0, "length of pubkey_list is invalid");
      uint32_t n = pubkey_list.size() / PUBKEY_LEN;
      return get_bookkeeper(n,  n - (n - 1) / 3, pubkey_list);
    }

    vector<char> compressMCPubKey(vector<char> key) {
      eosio::check(key.size() >= PUBKEY_LEN, "key length is too short");
      vector<char> newkey = vector<char>(key.begin(), key.begin() + 35);
      if ((uint8_t)key[66] % 2 == 0) {
        newkey[2] = 0x02;
      } else {
        newkey[2] = 0x03;
      }
      return newkey;
    }
    bookkeeper get_bookkeeper(uint32_t key_len, uint16_t m, vector<char> pubkey_list) {
      vector<checksum256> keepers(key_len);
      // TODO: check if same as WriteUint16
      vector<char> temp3((char*)&key_len, (char*)&(key_len) + sizeof(uint16_t));
      vector<char> buff = temp3;
      vector<char> temp;
      vector<char> key;
      for (uint32_t i = 0; i < key_len; i++) {
        key = vector<char>(pubkey_list.begin() + (i * PUBKEY_LEN), pubkey_list.begin() + (i * PUBKEY_LEN + PUBKEY_LEN));
        temp = WriteVarBytes(compressMCPubKey(key));
        buff.insert(buff.end(), temp.begin(), temp.end());
        vector<char> subkey = vector<char>(key.begin() + 3, key.begin() + 67);
        checksum256 hash = sha256(subkey.data(), subkey.size());
        keepers[i] = hash;
      }
      vector<char> temp2((char*)&m, (char*)&(m) + sizeof(uint16_t));
      buff.insert(buff.end(), temp2.begin(), temp2.end());
      
      cmcc:bookkeeper bookkeeper = ccmc::bookkeeper();
      bookkeeper.keepers = keepers;
      bookkeeper.nextBookkeeper = ripemd160((const char *)((sha256(buff.data(), buff.size()).extract_as_byte_array()).data()), 32);
      return bookkeeper;
    }


  private:
    vector<char> WriteVarBytes(vector<char> source) {  
      vector<char> length = getVarInt(source.size());      
      vector <char> target = length;
      target.insert(target.end(), source.begin(), source.end());
      return target;
    }

    // TODO: check if same as WriteVarInt
    vector<char> getVarInt(uint64_t v) {
      vector<char> buff;
      if (v < 0xFD) {
        print("first");
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint8_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                     
      } else if (v <= 0xFFFF) {
        print("second");
        buff[0] = (uint8_t)0xFD;
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint16_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                                                        
      } else if (v <= 0xFFFFFFFF)  {
        print("third");
        buff[0] = (uint8_t)0xFE;
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint32_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                                                        
      } else {
        print("fourth");
        buff[0] = (uint8_t)0xFF;
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint64_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                                                        
      }
      print("buff0", buff[0]);
      return buff;
    }

    vector<char> intToBytes(uint64_t v) {
     vector<char> arrayOfByte(4);
     for (int i = 0; i < 4; i++)
         arrayOfByte[3 - i] = (v >> (i * 8));
     return arrayOfByte;
    }

    TABLE poly {
      uint32_t  epoch_block_height;
      vector<checksum256> keepers;
      EOSLIB_SERIALIZE(poly, (epoch_block_height)(keepers))
    };
    typedef singleton<name("poly"), poly> poly_table;
};
