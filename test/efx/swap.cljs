(ns efx.swap
  (:require
   [eos-deploys.core :as eos]
   efx.token
   [efx.util :as util]
   ["@cityofzion/neon-js" :refer [rpc tx] :as Neon]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
   ))

(def swap-acc (eos/random-account "efx"))
(def token-acc efx.token/account)
(def owner-acc efx.token/owner-acc)
(def bk-acc "jesse")

;; define a new token for the swap test
(def sym "SWP")
(def total-amount "650000000.0000")
(def total-supply (str total-amount " " sym))

(def tx1-raw "d10153081027000000000000141b00234a5dcafb17ae645c203617f709450e8c5b141b00234a5dcafb17ae645c203617f709450e8c5b53c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac000000000000000003201b00234a5dcafb17ae645c203617f709450e8c5bf0096c617572656e732e78f00d31353533353036343939313139000001414088b6a244963ae20183dba549b38affc4255c0f20d5ffccf94f00ad9e1ba0063f33ef9a0be05799e7c3a7f191e6d7e57b896179f49f4246af3f03d0d99368c43c2321023c626ad1b80d7d7bf4620fe15ff43eea073a1ccb707d786942a68546a89fee7eac")

(def tx1 (.deserialize Neon/tx.Transaction tx1-raw))
(def tx-hash (.reverseHex Neon/u (.-hash tx1)))
(def tx-parsed (util/parse-nep5 tx1))

(use-fixtures :once
  {:before (fn []
             (async
              done
              (->
               (eos/create-account owner-acc swap-acc)
               (.then #(eos/create-account owner-acc bk-acc))
               (.catch prn)
               (.then #(println (str "> Created SWAP account " swap-acc)))
               eos/wait-block
               (.then #(eos/deploy swap-acc "contracts/swap/swap"))
               (.catch prn)
               (.then #(eos/update-auth swap-acc "active"
                                        [{:permission {:actor swap-acc :permission "eosio.code"}
                                          :weight 1}
                                         {:permission {:actor owner-acc :permission "active"}
                                          :weight 1}]))
               eos/wait-block
               (.then #(eos/transact token-acc "create"
                                     {:issuer swap-acc :maximum_supply total-supply}))
               (.catch prn)
               (.then done))))
   :after (fn [])})

(defn do-posttx
  "Helper for the posttx action"
  ([] (do-posttx bk-acc))
  ([bk-acc] (do-posttx bk-acc [{:actor bk-acc :permission "active"}]))
  ([bk-acc permission] (eos/transact swap-acc "posttx"
                 {:bookkeeper bk-acc :rawtx (.serialize tx1 false)
                  :asset_hash (:script-hash tx-parsed) :value (:value tx-parsed) :to owner-acc}
                 permission)))

(deftest bookkeeper-add
  (async
   done
   (.then
    (.all
     js/Promise
     #js [(->
           ;; can add bookkeeper
           (eos/transact swap-acc "mkbookkeeper" {:account bk-acc}
                         [{:actor swap-acc :permission "owner"}])
           eos/wait-block
           (.then #(eos/get-table-rows swap-acc swap-acc "bookkeeper"))
           (.then #(is (> (count %) 0) "there is 1 bookkeeper")))
          (->
           ;; needs contract permission
           (eos/transact swap-acc "mkbookkeeper" {:account owner-acc}
                         [{:actor token-acc :permission "active"}])
           (util/should-fail-with (str "missing authority of " swap-acc)
                                  "adding a bookkeeper requires owner permission"))
          (->
           ;; cant add same bookkeeper twice
           (eos/transact swap-acc "mkbookkeeper" {:account "acc3"}
                         [{:actor swap-acc :permission "owner"}])
           eos/wait-block
           (.then #(eos/transact swap-acc "mkbookkeeper" {:account "acc3"}
                                 [{:actor swap-acc :permission "owner"}]))
           (util/should-fail-with "assertion failure with message: already registered"
                                  "cant add existing bookkeeper"))])
    done)))

(deftest bookkeeper-remove
  (async
   done
   (.then
    (.all
     js/Promise
     #js [(->
           ;; can remove bookkeeper
           (eos/transact swap-acc "rmbookkeeper" {:account "acc3"}
                         [{:actor swap-acc :permission "active"}])
           eos/wait-block
           (.then #(eos/get-table-rows swap-acc swap-acc "bookkeeper"))
           (.then #(is (= (count %) 1) "bookkeeper is removed")))
          (->
           ;; needs contact permission
           (eos/transact swap-acc "rmbookkeeper" {:account owner-acc}
                         [{:actor token-acc :permission "active"}])
           (util/should-fail-with (str "missing authority of " swap-acc)
                                  "removing a bookkeeper requires owner permission"))
          (->
           ;; cant remove non-existing bookkeeper
           (eos/transact swap-acc "rmbookkeeper" {:account "acc4"}
                         [{:actor swap-acc :permission "active"}])
           (util/should-fail-with "assertion failure with message: not registered"
                                  "cant remove non exisinting bookkeeper"))])
    done)))

(deftest posttx
  (async
   done
   (->
    ;; create tx
    (do-posttx)
    (.then (fn [tx]
             (let [console-out (eos/tx-get-console tx)]
               (is (string/starts-with? console-out "inserted"))
               console-out)))
    eos/wait-block
    (.then #(let [id (re-find #"\d+" %)]
              (is (= (int? id)))
              (eos/get-table-row swap-acc swap-acc "nep5" id)))
    (.then (fn [row]
             (testing "nep5 tx is correct"
               (is (= (get row "txid") tx-hash))
               (is (= (get row "value") (:value tx-parsed)))
               (is (= (get row "asset_hash") (:script-hash tx-parsed))))))
    ;; cant create same tx twice
    (.then #(do-posttx))
    (util/should-fail-with "assertion failure with message: tx already posted"
                           "cant post same tx twice")
    eos/wait-block
    ;; requires bookkeeper and signature
    (.then #(do-posttx owner-acc))
    (util/should-fail-with "assertion failure with message: not a bookkeeper"
                           "require registered bookkeeper")
    (.then #(do-posttx bk-acc [{:actor owner-acc :permission "active"}]))
    (util/should-fail-with (str "missing authority of " bk-acc)
                           "require bookkeeper signature")
    (.then done))))

(deftest issue-success
  (async
   done
   (->
    (eos/transact swap-acc "issue" {:contract token-acc
                                    :txid tx-hash
                                    :token sym :memo "hi"})
    ;; (.then #(do (prn (eos/tx-get-console %)) %))
    (.then (fn [res]
             (testing "swap transaction exists"
               (is (not (nil? res))))
             (let [inner-act (aget res "processed" "action_traces" 0 "inline_traces" 0
                                   "inline_traces" 0 "inline_traces" 0)]
               (testing "issue result is correct"
                 (is (= (aget inner-act "receipt" "receiver") swap-acc))
                 (is (= (aget inner-act "act" "name") "transfer"))
                 (is (= (aget inner-act "act" "data" "to") owner-acc))
                 (is (= (aget inner-act "act" "data" "from") swap-acc))
                 (is (= (aget inner-act "act" "data" "quantity") (str "1.0000 " sym)))))))
    (.catch #(is (= (.-message %) "failed processing transaction")))
    (.then done))))

(deftest issue-fail
  (async done (->
               (eos/transact swap-acc "issue" {:contract token-acc
                                               :txid  (.reverseHex Neon/u (.-hash tx1))
                                               :token sym :memo "swap"})
               (.then #(testing "transaction not made"
                         (is (nil? %))))
               (.catch #(testing "cant issue tokens twice"
                          (is (= (aget % "json" "error" "details" 0 "message")
                                 "assertion failure with message: tx already issued"))))
               (.then done))))


(defn -main []
  (run-tests))
