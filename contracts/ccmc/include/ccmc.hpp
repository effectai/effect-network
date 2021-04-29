#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <eosio/crypto.hpp>

using namespace std;
using namespace eosio;

CONTRACT ccmc : public contract {
  public:
    using contract::contract;

    ACTION initgenblock(vector<char> raw_header, vector<char> pubkey_list);
    ACTION changekeeper(std::vector<char> raw_header, std::vector<char> pubkey_list, std::vector<char> sign_list);

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
      // We are skipping the variable part consensusPayload as we don't need it
      uint64_t offset = 156;
      offset += ReadVarInt(raw_header, &offset);
      vector<char> temp = vector<char>(raw_header.begin() + offset, raw_header.begin() + offset + 20);
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

    bool verifySig(vector<char> raw_header, vector<char> sign_list, vector<checksum256> keepers, uint16_t m) {
      checksum256 hash = sha256(raw_header.data(), raw_header.size());
      uint32_t count_signed = 0;
      for (uint32_t i = 0; i < sign_list.size() / SIG_LEN; i++) {
        // vector<char> r = vector<char>(sign_list.begin() + (i * SIG_LEN), sign_list.begin() + (i * SIG_LEN + 32));
        // vector<char> s = vector<char>(sign_list.begin() + (i * SIG_LEN + 32), sign_list.begin() + (i * SIG_LEN + 64));
        // uint32_t v = (uint32_t)vector<char>(sign_list.begin() + (i * SIG_LEN + 64), sign_list.begin() + (i * SIG_LEN + 65));
        vector<char> signer;
        // signer = recover_key(hash, vector<char>(sign_list.begin() + (i * SIG_LEN), sign_list.begin() + (i * SIG_LEN + 65)));

        //if (v == 1) {
        //  signer = SmartContract.Sha256(Secp256k1Recover(r, s, false, SmartContract.Sha256(hash)));
        //} else {
        //  signer = SmartContract.Sha256(Secp256k1Recover(r, s, true, SmartContract.Sha256(hash)));
        //}
        if (count(keepers.begin(), keepers.end(), sha256(signer.data(), signer.size()))) {
          count_signed += 1;
        }
      }
      print("SIGNED", count_signed);
      return count_signed >= m;
    }


  private:
    vector<char> WriteVarBytes(vector<char> source) {  
      vector<char> length = createVarInt(source.size());      
      vector <char> target = length;
      target.insert(target.end(), source.begin(), source.end());
      return target;
    }
    uint64_t ReadVarInt(vector<char> source, uint64_t * offset) {
      uint64_t var_int = 0;
      if (source[*offset] == (char)0xFD) {
        for (uint32_t n = 2; n > 0; n--)
          var_int = (var_int << 8) + (uint8_t)source[*offset + n];
        *offset += 3;
      } else if (source[*offset] == (char)0xFE) {
        for (uint32_t n = 4; n > 0; n--)
          var_int = (var_int << 8) + (uint8_t)source[*offset + n];
        *offset += 5;
      } else if (source[*offset] == (char)0xFF) {
        for (uint32_t n = 8; n > 0; n--)
          var_int = (var_int << 8) + (uint8_t)source[*offset + n];
        *offset += 9;
      } else {
        var_int = (uint64_t) source[*offset];
        *offset += 1;
      }
      return var_int;
    }

    // TODO: check if same as WriteVarInt
    vector<char> createVarInt(uint64_t v) {
      vector<char> buff;
      if (v < 0xFD) {
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint8_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                     
      } else if (v <= 0xFFFF) {
        buff[0] = (uint8_t)0xFD;
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint16_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                                                        
      } else if (v <= 0xFFFFFFFF)  {
        buff[0] = (uint8_t)0xFE;
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint32_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                                                        
      } else {
        buff[0] = (uint8_t)0xFF;
        vector<char> temp((char*)&v, (char*)&(v) + sizeof(uint64_t));
        buff.insert(buff.end(), temp.begin(), temp.end());                                                                        
      }
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
