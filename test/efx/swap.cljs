(ns efx.swap
  (:require
   [eos-deploys.core :as eos]
   efx.token
   [efx.util :as util]
   ["@cityofzion/neon-js" :refer [rpc tx] :as Neon]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]))

(def account "jesse")
(def token-account efx.token/account)

(def tx1-raw "d10153081027000000000000141b00234a5dcafb17ae645c203617f709450e8c5b141b00234a5dcafb17ae645c203617f709450e8c5b53c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac000000000000000003201b00234a5dcafb17ae645c203617f709450e8c5bf0096c617572656e732e78f00d31353533353036343939313139000001414088b6a244963ae20183dba549b38affc4255c0f20d5ffccf94f00ad9e1ba0063f33ef9a0be05799e7c3a7f191e6d7e57b896179f49f4246af3f03d0d99368c43c2321023c626ad1b80d7d7bf4620fe15ff43eea073a1ccb707d786942a68546a89fee7eac")
(def tx1 (.deserialize Neon/tx.Transaction tx1-raw))

(use-fixtures :once
  {:before (fn [] (async done
                         (-> (eos/deploy account "contracts/swap/swap")
                             (.catch prn)
                             (.then #(eos/update-auth account "active" account "eosio.code"))
                             (.then #(eos/update-auth token-account "active" account "active"))
                             (.catch prn)
                             (.then eos/wait-block)
                             (.then done))))
   :after (fn [])})

(deftest checktx
  (async
   done
   (do
     (->
      (eos/transact account "checktx" {:rawtx  (.serialize tx1 false)})
      (.then (fn [tx]
               (is (= (.reverseHex Neon/u (eos/tx-get-console tx) )
                      (.-hash tx1)))))
      (.catch prn)
      (.then done) ))))

(deftest posttx
  (async
   done
   (let [{:keys [script-hash value]} (util/parse-nep5 tx1)
         tx-hash (.reverseHex Neon/u (.-hash tx1))]
     (->
      (eos/transact account "posttx"
                    {:txid tx-hash :asset_hash script-hash :value value :to account})
      (.catch prn)
      (.then (fn [tx]
               (let [console-out (eos/tx-get-console tx)]
                 (is (string/starts-with? console-out "inserted"))
                 console-out)))
      (.then #(eos/wait-block %))
      (.then #(let [id (re-find #"\d+" %)]
                (is (= (int? id)))
                (eos/get-table-row account account "nep5" id)))
      (.catch prn)
      (.then (fn [row]
               (is (= (get row "txid") tx-hash))
               (is (= (get row "value") value))
               (is (= (get row "asset_hash") script-hash))))
      (.then done)))))

(deftest issue
  (async
   done
   (do
     (->
      (eos/transact account "issue" {:contract token-account
                                     :rawtx (.serialize tx1 false)
                                     :token "EFX" :memo "hi"})
      ;; (.then #(do (prn (eos/tx-get-console %)) %))
      (.then (fn [res]
               (testing "swap transaction exists"
                 (is (not (nil? res))))
               (let [inner-act (aget res "processed" "action_traces" 0 "inline_traces" 0
                                     "inline_traces" 0 "inline_traces" 0)]
                 (testing "issue result is correct"
                   (is (= (aget inner-act "receipt" "receiver") account))
                   (is (= (aget inner-act "act" "name") "transfer"))
                   (is (= (aget inner-act "act" "data" "to") account))
                   (is (= (aget inner-act "act" "data" "from") token-account))
                   (is (= (aget inner-act "act" "data" "quantity") "1.0000 EFX"))))))
      (.catch #(is (= (.-message %) "failed processing transaction")))
      (.then done)))))



(defn -main []
  (run-tests))
