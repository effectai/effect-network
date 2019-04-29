(ns e2e.swap
  (:require
   [eos-cljs.core :as eos]
   e2e.token
   [e2e.util :as util]
   ["@cityofzion/neon-js" :refer [rpc tx] :as Neon]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
   ))

(def swap-acc (eos/random-account "efx"))
(def token-acc e2e.token/account)
(def owner-acc e2e.token/owner-acc)
(def bk-acc (eos/random-account "jbk"))

;; define a new token for the swap test
(def sym "SWP")
(def total-amount "650000000.0000")
(def total-supply (str total-amount " " sym))

(def tx1-raw "d10153081027000000000000141b00234a5dcafb17ae645c203617f709450e8c5b141b00234a5dcafb17ae645c203617f709450e8c5b53c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcac000000000000000003201b00234a5dcafb17ae645c203617f709450e8c5bf0096c617572656e732e78f00d31353533353036343939313139000001414088b6a244963ae20183dba549b38affc4255c0f20d5ffccf94f00ad9e1ba0063f33ef9a0be05799e7c3a7f191e6d7e57b896179f49f4246af3f03d0d99368c43c2321023c626ad1b80d7d7bf4620fe15ff43eea073a1ccb707d786942a68546a89fee7eac")
(def tx2-raw "d1015c08307c97389c000000149bd53e0aa2df30567ef559a8c61520010ea6cc46145ad9ffcd1e2a0e4d8388e00a1dc028203f7b2bb953c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcacf1660682ba9ce83307000000000000000001205ad9ffcd1e2a0e4d8388e00a1dc028203f7b2bb90000014140ebfadb9335a01a0753d046954e2bfee843565d98b5aee080be7f6e57216307af73114d6b2bf84dc271a895e1095df908855325300d9d3899ff974683dda89f842321035b5d8d4824b495e5a9c0bb0523c8c72cc6cb826d8cb8edaf0da68cd2f044ee65ac")
(def tx3-raw "d1015c08600badec31050000142fb9bf175c31d76d6e1fdbf7cb39c39795a58ff9145ad9ffcd1e2a0e4d8388e00a1dc028203f7b2bb953c1087472616e7366657267f9e6e770af783d809bd1a65e1bb5b6042953bcacf16606426384930657000000000000000001205ad9ffcd1e2a0e4d8388e00a1dc028203f7b2bb90000")

(def tx1 (.deserialize Neon/tx.Transaction tx1-raw))
(def tx2 (.deserialize Neon/tx.Transaction tx2-raw))
(def tx3 (.deserialize Neon/tx.Transaction tx3-raw))
(def tx-hash (.reverseHex Neon/u (.-hash tx1)))
(def tx-parsed (util/parse-nep5 tx1))

(use-fixtures :once
  {:before (fn []
             (async
              done
              (->
               (eos/create-account owner-acc swap-acc)
               (.then #(eos/create-account owner-acc bk-acc))
               (.then #(println (str "> Created SWAP account " swap-acc)))
               (.then #(eos/deploy swap-acc "contracts/swap/swap"))
               (.catch prn)
               (.then #(eos/update-auth swap-acc "active"
                                        [{:permission {:actor swap-acc :permission "eosio.code"}
                                          :weight 1}
                                         {:permission {:actor owner-acc :permission "active"}
                                          :weight 1}]))
               (.then #(eos/transact token-acc "create"
                                     {:issuer swap-acc :maximum_supply total-supply}))
               (.catch prn)
               (.then done))))
   :after (fn [])})

(defn do-posttx
  "Helper for the posttx action"
  ([] (do-posttx bk-acc))
  ([bk-acc] (do-posttx bk-acc [{:actor bk-acc :permission "active"}]))
  ([bk-acc permission] (eos/transact
                        [{:account  swap-acc :name "posttx"
                          :authorization permission
                          :data
                          {:bookkeeper bk-acc :rawtx (.serialize tx1 false)
                           :asset_hash (:script-hash tx-parsed) :value (:value tx-parsed)
                           :to owner-acc}}])))

(def init-config {:token_contract token-acc :token_symbol sym
                  :tx_max_age 100000000
                  :min_tx_value 1 :max_tx_value "10000000000"
                  :global_swap_limit 100000
                  :limit_reset_time_sec 3})

(def update-config (select-keys init-config [:tx_max_age :min_tx_value :max_tx_value
                                             :global_swap_limit :limit_reset_time_sec]))

(deftest update-bofore-init
  (async
   done
   (->
    ;; needs swap account authority
    (eos/transact swap-acc "update" update-config
                          [{:actor bk-acc :permission "active"}])
    (util/should-fail-with (str "missing authority of " swap-acc)
                           "only swap account can update")
    ;; cant update before init
    (.then #(eos/transact swap-acc "update" update-config))
    (util/should-fail-with "not initialized"
                           "cant call update before init")
    (.then done))))

(deftest initialize
  (async
   done
   (->
    ;; cant issue before init
    (eos/transact swap-acc "issue" {:txid tx-hash}
                  [{:actor bk-acc :permission "active"}])
    (util/should-fail-with "not initialized"
                           "cant call issue before without init")
    ;; needs swap account authority
    (.then #(eos/transact swap-acc "init" init-config
                          [{:actor bk-acc :permission "active"}]))
    (util/should-fail-with (str "missing authority of " swap-acc)
                           "only swap account can init")
    ;; cant init with invalid name
    (.then #(eos/transact swap-acc "init" (assoc  init-config :token_contract "noaccount")))
    (util/should-fail-with "token contract does not exsist")
    ;; can set config
    (.then #(eos/transact swap-acc "init" init-config))
    (util/should-succeed "can perform init")
    (.then #(eos/get-table-rows swap-acc swap-acc "config"))
    (.then #(is (= (vals (first %)) (vals init-config)) "config incorrect"))
    eos/wait-block
    ;; cant set config twice
    (.then #(eos/transact swap-acc "init" init-config))
    (util/should-fail-with "already initialized"
                           "can only initialize once")
    (.then done))))

(deftest update-after-init
  (async
   done
   (let [new-update-config (update-in update-config [:tx_max_age] inc)
   new-config (update-in init-config [:tx_max_age] inc)]
   (->
    ;; can perform update
    (eos/transact swap-acc "update" new-update-config)
    (util/should-succeed "can perform update")

    (.then #(eos/get-table-rows swap-acc swap-acc "config"))

    ;; compare
    (.then #(do
        (is (not (= (vals (first %)) (vals init-config))) "config incorrect")
        (is (= (vals (first %)) (vals new-config)) "config incorrect")
        ))
    (.then done)))))

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
           (eos/transact swap-acc "mkbookkeeper" {:account token-acc}
                         [{:actor swap-acc :permission "owner"}])
           eos/wait-block
           (.then #(eos/transact swap-acc "mkbookkeeper" {:account token-acc}
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
           (eos/transact swap-acc "rmbookkeeper" {:account token-acc}
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
           (util/should-fail-with "registered"
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
    (.then #(let [id (re-find #"\d+" %)]
              (is (= (int? id)))
              (eos/get-table-row swap-acc swap-acc "nep5" id)))
    (.then (fn [row]
             (testing "nep5 tx is correct"
               (is (= (get row "txid") tx-hash))
               (is (= (get row "value") (:value tx-parsed))))))
    ;; cant create same tx twice
    eos/wait-block
    (.then #(do-posttx))
    (util/should-fail-with "tx already posted")
    ;; requires bookkeeper and signature
    (.then #(do-posttx owner-acc))
    (util/should-fail-with "not a bookkeeper" "require registered bookkeeper")
    (.then #(do-posttx bk-acc [{:actor owner-acc :permission "active"}]))
    (util/should-fail-with (str "missing authority of " bk-acc)
                           "require bookkeeper signature")
    (.then done))))

(defn do-posttx-n
  ([t] (do-posttx-n t (:value tx-parsed)))
  ([t v]
   (eos/transact swap-acc "posttx"
                     {:bookkeeper bk-acc :rawtx (.serialize t false)
                      :asset_hash (:script-hash tx-parsed)
                      :value v :to owner-acc}
                     [{:actor bk-acc :permission "active"}])))

(deftest cleartx
  (async
   done
   (->
    ;; tx must exist
    (eos/transact swap-acc "cleartx" {:txid (.reverseHex Neon/u (.-hash tx2))}
                  [{:actor swap-acc :permission "owner"}])
    (util/should-fail-with "tx does not exist")
    (.then #(do-posttx-n tx2))
    ;; requires contract auth
    (.then #(eos/transact swap-acc "cleartx" {:txid (.reverseHex Neon/u (.-hash tx2))}
                          [{:actor bk-acc :permission "active"}]))
    (util/should-fail-with (str "missing authority of " swap-acc))
    ;; success
    (.then #(eos/transact swap-acc "cleartx" {:txid (.reverseHex Neon/u (.-hash tx2))}
                          [{:actor swap-acc :permission "owner"}]))
    (util/should-succeed "can clear tx")
    (.then done))))

(deftest swap-limits
  (async
   done
   (-> (eos/get-table-rows swap-acc swap-acc "global")
       (.then
        (fn [[{swap-total "swap_total"  last-reset "last_limit_resert"}]]
          (is (= swap-total (* 2 (:value tx-parsed))) "correct swap total")
          ;; post a new tx and see that it updates
          (-> (do-posttx-n tx2)
              (.then #(eos/get-table-rows swap-acc swap-acc "global"))
              (.then #(is (= (get-in % [0 "swap_total"])
                             (+ swap-total (:value tx-parsed)))
                          "swap total do update"))
              (.then #(do-posttx-n tx3 (dec (:global_swap_limit init-config))))
              (util/should-fail-with "global swap limit reached")
              ;; wait until limit reset
              (eos/wait-block (* 2 (:limit_reset_time_sec init-config)))
              ;; can post txs again
              (.then #(do-posttx-n tx3 (:global_swap_limit init-config)))
              util/should-succeed
              ;; limits should have updated
              (.then #(eos/get-table-rows swap-acc swap-acc "global"))
              (.then #(do (is (= (get-in % [0 "swap_total"])
                                 (:global_swap_limit init-config))
                              "swap total updated")
                          (is (not (= (get-in % [0 "last_limit_reset"]) last-reset
                                      "limit reset time is updated"))))))))
       (.then done))))

(deftest issue-success
  (async
   done
   (->
    (eos/transact swap-acc "issue" {:txid tx-hash})
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
    eos/wait-block
    (.then done))))

(deftest issue-fail
  (async
   done
   (->
    (eos/transact swap-acc "issue" {:txid  (.reverseHex Neon/u (.-hash tx1))})
    (.then #(testing "transaction not made"
              (is (nil? %))))
    (util/should-fail-with "tx already issued"
                           "cant issue tokens twice")
    (.then done))))


(defn -main []
  (run-tests))
