(ns e2e.vaccount
  (:require
   [eos-cljs.core :as eos]
   [e2e.util :as util :refer [wait p-all]]
   [eos-cljs.node-api :refer [deploy-file]]
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
   [cljs.core.async :refer [go <!]]
   [cljs.core.async.interop :refer [<p!]]
   [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                              <p-should-fail-with! <p-may-fail!
                              async-deftest]]
   [eosjs :refer [Serialize Numeric KeyType]]
   e2e.token
   ["eosjs/dist/eosjs-key-conversions" :refer [PrivateKey Signature PublicKey]]
   ["eosjs/dist/ripemd" :refer [RIPEMD160]]
   [clojure.string :as string]
   [elliptic :refer [ec]]))

(def ec (new ec "secp256k1"))

(def owner-acc "eosio")
(def acc-2 "acc")
(def net-acc (eos/random-account "netw"))
(def token-acc (eos/random-account "tkn"))

(def hash160-1 "4782a9ba01fd15de6b451ed71c06c218417ad54b")
(def hash160-2 "8d7f99f8161f2e73bf1b6bfd65cef852dd23640a")

;;================
;; BYTE HELPERS
;;================
(defn hex->bytes
  "Covnert hex string to byte array"
  [hex] (.hexToUint8Array Serialize hex))

(defn bytes->hex
  "Convert byte array to hex string"
  [bytes] (.arrayToHex Serialize bytes))

(defn name->bytes
  "Convert an eosio name string to byte array"
  [name]
  (let [buff (doto (new (.-SerialBuffer Serialize)) (.pushName name))]
    (.asUint8Array buff)))

(defn uint64->bytes [i]
  (.decimalToBinary Numeric 8 (str i)))

(defn prn-logs
  "Prints the console logs of all actions in tx receipt"
  [tx-res]
  (.log js/console (.-action-traces (.-processed tx-res))))

(defn pad-right [a len sep]
  (let [diff (- len (count a))] (str a (reduce str (repeat diff sep)))))

(defn balance-index
  "Construct the index of the EOSIO account table by token

  If the type is \"name\" it will index by account name, if it's \"address\" it
  will index by truncated public key hash."
  [token-acc type acc]
  (pad-right
   (str (bytes->hex (name->bytes token-acc))
        (if (= type "address") "00" "01")
        (if (= type "name") (bytes->hex (name->bytes acc)) acc))
   64 "0"))

(defn pack-transfer-params
  [nonce from to {:keys [quantity contract]}]
  (let [buff (doto (new (.-SerialBuffer Serialize))
               (.push 1)
               (.pushUint32 nonce)
               (.pushArray (uint64->bytes from))
               (.pushArray (uint64->bytes to))
               (.pushAsset quantity)
               (.pushName contract))]
    (.asUint8Array buff)))

(defn pack-withdraw-params
  [nonce from to {:keys [quantity contract]}]
  (let [buff (doto (new (.-SerialBuffer Serialize))
               (.push 2)
               (.pushUint32 nonce)
               (.pushArray (uint64->bytes from))
               (.pushName to)
               (.pushAsset quantity)
               (.pushName contract))]
    (.asUint8Array buff)))

;;================
;; CRYPTO
;;================
(defn hash160 [bytes]
  (new js/Uint8Array (.hash RIPEMD160 bytes)))

(defn pub->addr [pub]
  (-> pub hash160 bytes->hex string/lower-case))

(def pub "PUB_K1_7tgwU6E7pAUQJgqEJt66Yi8cWvanTUW8ZfBjeXeJBQvhYTBFvY")

(def keypair (.genKeyPair ec))
(def keypair-pub (hex->bytes (.encodeCompressed (.getPublic keypair) "hex")))
(prn "KeyPair Public 1 = " (.getPublic keypair "hex"))
(prn "KeyPair Private 1 = " (.getPrivate keypair "hex"))

(prn "KeyPair Compressed 1 = " (.encodeCompressed (.getPublic keypair) "hex"))

;; To check the Hex value of account names
;; (prn "DEBUG hex: " (bytes->hex (name->bytes owner-acc)))
;; (prn "DEBUG hex: " (bytes->hex (name->bytes token-acc)))

(println (str "vaccount acc = " net-acc))
(println (str "token acc = " token-acc))

(defn eos-tx-owner [contr action args]
  (eos/transact contr action args [{:actor owner-acc :permission "active"}]))

(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(def accs [["address" (pub->addr keypair-pub)]
           ["address" hash160-2]
           ["name" (eos/random-account "acc")]
           ["name" (eos/random-account "acc")]])

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p-may-fail! (eos/create-account owner-acc net-acc))
          (<p-may-fail! (eos/create-account owner-acc acc-2))
          (<p! (deploy-file net-acc "contracts/vaccount/vaccount"))
          (<! (e2e.token/deploy-token token-acc [owner-acc token-acc]))
          (doseq [[type acc] accs]
            (when (= "name" type)
              (<p! (eos/create-account owner-acc acc))))

          ;; setup xfer permission for net account
          (<p! (eos/update-auth
                net-acc "xfer"
                [{:permission {:actor net-acc :permission "eosio.code"} :weight 1}]))
          (<p! (eos/transact "eosio" "linkauth"
                             {:account net-acc
                              :requirement "xfer"
                              :code token-acc
                              :type "transfer"}
                             [{:actor net-acc :permission "active"}]))
          (done)
          (catch js/Error e (prn "Error " e))))))
   :after (fn [])})

(async-deftest open
  (testing "can open account"
    (doseq [acc accs]
      (<p-should-succeed!
       (tx-as owner-acc net-acc "open" {:acc acc
                                        :payer owner-acc
                                        :symbol {:contract token-acc :sym "4,EFX"}}))))

  (testing "eos account must exist"
    (<p-should-fail-with!
     (tx-as net-acc net-acc "open" {:acc ["name" "nonexist"]
                                    :payer net-acc
                                    :symbol {:contract token-acc :sym "4,EFX"}})
     "" "account does not exist"))

  (testing "can't open same symbol twice"
    (let [n-rows (count (<p! (eos/get-table-rows net-acc net-acc "account")))]
      (<p-should-succeed!
       (tx-as net-acc net-acc "open" {:acc (first accs)
                                      :payer net-acc
                                      :symbol {:contract token-acc :sym "4,EFX"}}))
      (let [new-n-rows (count (<p! (eos/get-table-rows net-acc net-acc "account")))]
        (is (= new-n-rows n-rows) "duplicate account entry"))))

  (testing "opened balances are empty"
    (doseq [[type acc] accs]
      (let [bound (balance-index token-acc type acc)
            [res & rst] (<p! (eos/get-table-rows net-acc net-acc "account" {:index_position 2
                                                                            :key_type "sha256"
                                                                            :lower_bound bound
                                                                            :upper_bound bound}))]
        (is (empty? rst) "too many balances returned")
        (is (= (get-in res ["address" 0]) type) "balance has correct type")
        (is (= (get-in res ["address" 1]) acc) "balance has correct account value")
        (is (= (get-in res ["balance" "quantity"]) "0.0000 EFX") "balance is empty")))))

(async-deftest deposit
  (<p! (eos/wait-block (js/Promise.resolve 1)) 300)
  (<p!
   (tx-as net-acc net-acc "open" {:acc (first accs)
                                  :payer net-acc
                                  :symbol {:contract token-acc :sym "4,EFX"}}))

  (<p! (eos/wait-block (js/Promise.resolve 1)) 300)

  (testing "can deposit"
    (let [row 2 quant "500.0000 EFX"]
      (<p-should-succeed!
       (tx-as owner-acc token-acc "transfer"
              {:from owner-acc :to net-acc :memo (str row) :quantity quant}))
      (<p-should-succeed!
       (tx-as owner-acc token-acc "transfer"
              {:from owner-acc :to net-acc :memo "0" :quantity quant}))

      (let [row (<p! (eos/get-table-row net-acc net-acc "account" row))]
        (is (= (get row "balance") {"quantity" quant "contract" token-acc})
            "balance should be correct"))))

  (testing "can't open same symbol twice after transfer"
    (let [n-rows (count (<p! (eos/get-table-rows net-acc net-acc "account")))]
      (<p! (eos/wait-block (js/Promise.resolve 1)) 300)
      (<p-should-succeed!
       (tx-as net-acc net-acc "open" {:acc (first accs)
                                      :payer net-acc
                                      :symbol {:contract token-acc :sym "4,EFX"}}))
      (let [new-n-rows (count (<p! (eos/get-table-rows net-acc net-acc "account")))]
        (is (= new-n-rows n-rows) "duplicate account entry")))))

(async-deftest vtransfer
  (testing "can tranfer from pub key hash"
    (let [from 0
          to 2
          asset {:quantity "50.0000 EFX" :contract token-acc}
          transfer-params (pack-transfer-params 0 from to asset)
          params-hash (.digest (.update (.hash ec) transfer-params))
          sig (.sign keypair params-hash)
          eos-sig (.fromElliptic Signature sig 0)]
      (<p!
       (tx-as (get-in accs [2 1]) net-acc
              "vtransfer" {:from_id from
                           :to_id to
                           :quantity asset
                           :memo ""
                           :sig (.toString eos-sig)
                           :fee nil})))))

(async-deftest withdraw
  (testing "can not withdraw from eos account with a sig"
    (let [asset {:quantity "50.0000 EFX" :contract token-acc}]
      (<p-should-fail-with!
       (tx-as (get-in accs [2 1]) net-acc
              "withdraw" {:from_id 2
                          :to_account acc-2
                          :quantity asset
                          :memo "memo"
                          :sig "SIG_K1_KyEZVRFZVAVWPBdmEw7QRfDBSTmMqzZbQvg6iidCNvDRocrd4w5yuo6X2kCPSzCF5em3k9vi2qsaombz1ZNzdTSM2qaLcV"
                          :fee nil})
       "" "signature not allowed for eos vaccounts")))
  (testing "can withdraw from eos account"
    (let [asset {:quantity "50.0000 EFX" :contract token-acc}]
      (<p-should-succeed!
       (tx-as (get-in accs [2 1]) net-acc
              "withdraw" {:from_id 2
                          :to_account acc-2
                          :quantity asset
                          :memo "memo"
                          :sig nil
                          :fee nil}))))
  (testing "can withdraw from pub key hash"
    (let [asset {:quantity "50.0000 EFX" :contract token-acc}
          transfer-params (pack-withdraw-params 1 0 acc-2 asset)
          params-hash (.digest (.update (.hash ec) transfer-params))
          sig (.sign keypair params-hash)
          eos-sig (.fromElliptic Signature sig 0)]
      (<p-should-succeed!
       (tx-as (get-in accs [2 1]) net-acc
              "withdraw" {:from_id 0
                          :to_account acc-2
                          :quantity asset
                          :memo "test withdraw;"
                          :sig (.toString eos-sig)
                          :fee nil})))))

(defn -main [& args]
  (run-tests))
