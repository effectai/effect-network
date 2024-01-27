(ns e2e.force
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
   [e2e.vaccount :as vacc]
   ["eosjs/dist/eosjs-key-conversions" :refer [PrivateKey Signature PublicKey]]
   ["eosjs/dist/ripemd" :refer [RIPEMD160]]
   [clojure.string :as string]
   [elliptic :refer [ec]]))

(def owner-acc "eosio")
(def acc-2 (eos/random-account "acc"))
(def acc-3 (eos/random-account "acc"))
(def acc-4 (eos/random-account "acc"))
(def acc-5 (eos/random-account "acc"))
(def vacc-acc (eos/random-account "vacc"))
(def token-acc (eos/random-account "tkn"))
(def force-acc (eos/random-account "force"))
;; (def proxy-acc (eos/random-account "proxy"))
(def fee-acc (eos/random-account "fee"))

(println "force-acc" force-acc)
(println "vacc-acc" vacc-acc)

(defn buf->hex [buf]
  (.toString buf "hex"))

(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(defn tx-as-owner [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "owner"}]))

(defn get-in-rows
  "Applies `get-in` on the result of `get-table-rows`

  Scope is assumed to be the same as account"
  ([acc tbl vec] (get-in-rows acc acc tbl vec))
  ([acc scope tbl vec]
   (.then (eos/get-table-rows acc scope tbl)
          #(get-in % vec))))

(println "acc-4 " acc-4)
(println "acc-5 " acc-5)
(println "acc-3 " acc-3)
(println "acc-2 " acc-2)
(println "token" token-acc)

(def accs [["address" (vacc/pub->addr vacc/keypair-pub)]
           ["name" acc-3]    ;; vaccount id = 1
           ["name" acc-2]    ;;
           ["name" acc-4]    ;; vaccount id = 3
           ["name" acc-5]])  ;; vaccount-id = 4

(def force-vacc-id 5)

(def atomic-acc "atomicassets")
(def force-collection-name "forcecollect")

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p-may-fail! (eos/create-account owner-acc force-acc))
          (<p-may-fail! (eos/create-account owner-acc fee-acc))
          (<p-may-fail! (eos/create-account owner-acc "atomicassets"))
          (<p! (eos/create-account owner-acc vacc-acc))
          (<p! (deploy-file vacc-acc "contracts/vaccount/vaccount"))
          (<p-may-fail! (deploy-file force-acc "contracts/force/force"))
          ;; (<p! (deploy-file proxy-acc "contracts/taskproxy/taskproxy"))
          (<!  (e2e.token/deploy-token token-acc [owner-acc token-acc]))

          (<p! (eos/update-auth vacc-acc "xfer" "active"
                                [{:permission {:actor vacc-acc :permission "eosio.code"}
                                  :weight 1}]))

          ;; set permissions for atomic assets account
          (<p-may-fail! (deploy-file "atomicassets" "tests/atomicassets"))
          (<p-may-fail! (tx-as atomic-acc atomic-acc "init" {}))
          (<p-may-fail! (eos/update-auth atomic-acc "active" "owner"
                                [{:permission {:actor atomic-acc :permission "eosio.code"}
                                  :weight 1}]))

          (<p! (eos/transact "eosio" "linkauth"
                             {:account vacc-acc
                              :requirement "xfer"
                              :code token-acc
                              :type "transfer"}
                             [{:actor vacc-acc :permission "active"}]))

          (<p! (eos/update-auth
                force-acc "xfer" "active"
                [{:permission {:actor force-acc :permission "eosio.code"} :weight 1}]))

          (<p! (eos/transact "eosio" "linkauth"
                             {:account force-acc
                              :requirement "xfer"
                              :code vacc-acc
                              :type "vtransfer"}
                             [{:actor force-acc :permission "active"}]))

          (<p! (eos/transact "eosio" "linkauth"
                             {:account force-acc
                              :requirement "xfer"
                              :code vacc-acc
                              :type "withdraw"}
                             [{:actor force-acc :permission "active"}]))
          (<p! (eos/transact "eosio" "linkauth"
                             {:account force-acc
                              :requirement "xfer"
                              :code token-acc
                              :type "transfer"}
                             [{:actor force-acc :permission "active"}]))

          (doseq [[type acc] accs]
            (when (= "name" type)
              (<p! (eos/create-account owner-acc acc)))
            (<p! (tx-as owner-acc vacc-acc "open"
                        {:acc [type acc] :payer owner-acc
                         :symbol {:contract token-acc :sym "4,EFX"}})))


          ;; deploy atomicassets and create default collection
          (<p-may-fail! (tx-as owner-acc atomic-acc "createcol"
                               {:author owner-acc
                                :collection_name force-collection-name
                                :allow_notify true
                                :authorized_accounts [owner-acc]
                                :notify_accounts []
                                :market_fee 0
                                :data ""}))
          (<p-may-fail! (tx-as owner-acc atomic-acc "createschema"
                               {:authorized_creator owner-acc
                                :collection_name force-collection-name
                                :schema_name "default"
                                :schema_format [{:name "name" :type "string"}]}))
          (<p! (tx-as owner-acc atomic-acc "mintasset"
                               {:authorized_minter owner-acc
                                :collection_name force-collection-name
                                :schema_name "default"
                                :template_id -1
                                :new_asset_owner acc-3
                                :immutable_data ""
                                :mutable_data ""
                                :tokens_to_back []}))

          (done)
          (catch js/Error e (prn "Error " e))))))
   :after (fn [])})

(async-deftest
 init
 (testing "other accounts cant init"
   (<p-should-fail! (tx-as owner-acc force-acc "init" {:vaccount_contract vacc-acc
                                                       :force_vaccount_id force-vacc-id
                                                       :payout_delay_sec 1
                                                       :release_task_delay_sec 0})))
 (testing "owner can init"
   (<p-should-succeed! (tx-as-owner force-acc force-acc "init" {:vaccount_contract vacc-acc
                                                                :force_vaccount_id force-vacc-id
                                                                :payout_delay_sec 1
                                                                :release_task_delay_sec 0
                                                                :fee_contract fee-acc
                                                                :fee_percentage 0.1}))))

(defn get-composite-key-hex [id-1 id-2]
  (vacc/bytes->hex
   (.getUint8Array
    (doto (new (.-SerialBuffer Serialize))
      (.reserve 64) (.pushUint32 id-1) (.pushUint32 id-2)) 8)))

(defn get-composite-key [id-1 id-2]
  (js/parseInt
   (.binaryToDecimal Numeric
                     (.getUint8Array
                      (doto (new (.-SerialBuffer Serialize))
                        (.reserve 64) (.pushUint32 id-1) (.pushUint32 id-2)) 8))))

(defn pack-mkcampaign-params [content]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 9) (.push 0) (.pushString content))))

(defn pack-editcampaign-params [camp-id content]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 10) (.pushUint32 camp-id)  (.push 0) (.pushString content))))

(defn pack-rmcampaign-params [camp-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 11) (.pushUint32 camp-id))))

(defn pack-task-params [mark task-id acc-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push mark) (.pushNumberAsUint64 task-id)(.pushUint32 acc-id))))

(defn pack-mkbatch-params [id camp-id content]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 8) (.pushUint32 id) (.pushUint32 camp-id) (.push 0) (.pushString content))))

(defn pack-rmbatch-params [id camp-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 12) (.pushUint32 id) (.pushUint32 camp-id))))

(defn pack-closebatch-params [id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize)) (.push 16) (.pushNumberAsUint64 id))))

(defn pack-reopenbatch-params [id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize)) (.push 17) (.pushNumberAsUint64 id))))

(defn pack-payout-params [acc-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize)) (.push 13) (.pushUint32 acc-id))))

(defn pack-reservetask-params [last-task-done camp-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 6)
     (.pushUint32 last-task-done)
     (.pushUint32 camp-id))))

(defn pack-submittask-params [sub-id data]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 5) (.pushNumberAsUint64 sub-id) (.pushString data))))

(defn hash-params [p] (.digest (.update (.hash ec) p)))

(defn sign-params [p]
  (as-> p x
    (hash-params x)
    (.sign vacc/keypair x)
    (.fromElliptic Signature x 0)
    (.toString x)))

(async-deftest mkcampaign
  (testing "can create campaign from eos account"
    (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                               {:owner ["name" acc-2]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :max_task_time 0
                                :reward {:quantity "1.0000 EFX" :contract token-acc}
                                :qualis []
                                :payer acc-2
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                               {:owner ["name" acc-2]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :max_task_time 5
                                :reward {:quantity "11.0000 EFX" :contract token-acc}
                                :qualis []
                                :payer acc-2
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-4 force-acc "mkcampaign"
                               {:owner ["name" acc-4]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :max_task_time 5
                                :reward {:quantity "2.0000 EFX" :contract token-acc}
                                :qualis []
                                :payer acc-4
                                :sig nil})))

  (testing "can create campaign from pub key hash"
    (let [ipfs-hash  "QmPU1fL3oVZGKhGeNSMGxJgY7NsK6MQEpMyZF3CvQwRz4T"
          params (pack-mkcampaign-params ipfs-hash)]
      (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                                 {:owner (first accs)
                                  :content {:field_0 0 :field_1 ipfs-hash}
                                  :max_task_time 5
                                  :reward {:quantity "115.0000 EFX" :contract token-acc}
                                  :qualis []
                                  :payer acc-2
                                  :sig (sign-params params)}))
      (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                                 {:owner (first accs)
                                  :content {:field_0 0 :field_1 ipfs-hash}
                                  :max_task_time 5
                                  :reward {:quantity "110.0000 EFX" :contract token-acc}
                                  :qualis []
                                  :payer acc-2
                                  :sig (sign-params params)}))
      (<p-should-succeed! (tx-as acc-4 force-acc "mkcampaign"
                                 {:owner (first accs)
                                  :content {:field_0 0 :field_1 ipfs-hash}
                                  :max_task_time 5
                                  :reward {:quantity "11.0000 EFX" :contract token-acc}
                                  :qualis []
                                  :payer acc-4
                                  :sig (sign-params params)})))))

(async-deftest editcampaign
  (testing "can edit campaign from eos account"
    (<p-should-succeed! (tx-as acc-2 force-acc "editcampaign"
                               {:campaign_id 0
                                :owner ["name" acc-2]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :reward {:quantity "3.0000 EFX" :contract token-acc}
                                :qualis []
                                :payer acc-2
                                :sig nil
                                :paused false})))

)


(async-deftest rmcampaign
  (testing "only campaign owner can erase"
    (<p-should-fail! (tx-as acc-3 force-acc "rmcampaign"
                            {:campaign_id 1
                             :owner ["name" acc-2]
                             :sig nil}))
    (is (some? (<p! (eos/get-table-row force-acc force-acc "campaign" 1)))))

  (testing "can erase campaign from eos account"
    (is (not (nil? (<p! (eos/get-table-row force-acc force-acc "campaign" 1)))))
    (<p-should-succeed! (tx-as acc-2 force-acc "rmcampaign"
                               {:campaign_id 1
                                :owner ["name" acc-2]
                                :sig nil}))
    (is (nil? (<p! (eos/get-table-row force-acc force-acc "campaign" 1)))))

)

;; NOTE: this root must match the merkle trees generated in `reserve-task`

(async-deftest mkbatch
  (testing "cannot create batch with high repetitions"
    (<p-should-fail! (tx-as acc-2 force-acc "mkbatch"
                            {:id 0
                             :campaign_id 0
                             :content {:field_0 0 :field_1 vacc/hash160-1}
                             :repetitions 100
                             :payer acc-2
                             :sig nil})))

  (testing "campaign owner can create batch"
    (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                               {:id 0
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :repetitions 2
                                :payer acc-2
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                               {:id 1
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :repetitions 1
                                :payer acc-2
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                               {:id 2
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :repetitions 1
                                :payer acc-2
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-4 force-acc "mkbatch"
                               {:id 0
                                :campaign_id 2
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :repetitions 1
                                :payer acc-4
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-4 force-acc "mkbatch"
                               {:id 1
                                :campaign_id 2
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :repetitions 1
                                :payer acc-4
                                :sig nil})))

  (testing "pub key hash can create batch"
    (let [params-1 (pack-mkbatch-params 0 3 vacc/hash160-1)
          params-2 (pack-mkbatch-params 1 3 vacc/hash160-1)
          params-3 (pack-mkbatch-params 0 5 vacc/hash160-1)]
      (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                                 {:id 0
                                  :campaign_id 3
                                  :content {:field_0 0 :field_1 vacc/hash160-1}
                                  :repetitions 1
                                  :payer acc-2
                                  :sig (sign-params params-1)}))
      (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                                 {:id 1
                                  :campaign_id 3
                                  :content {:field_0 0 :field_1 vacc/hash160-1}
                                  :repetitions 1
                                  :payer acc-2
                                  :sig (sign-params params-2)}))
      (<p-should-succeed! (tx-as acc-4 force-acc "mkbatch"
                                 {:id 0
                                  :campaign_id 5
                                  :content {:field_0 0 :field_1 vacc/hash160-1}
                                  :payer acc-4
                                  :repetitions 1
                                  :sig (sign-params params-3)})))))

(async-deftest rmbatch
  (testing "only campaign owner can erase batch"
    (<p-should-fail! (tx-as acc-3 force-acc "rmbatch"
                            {:id 2
                             :campaign_id 0
                             :sig nil})))

  (testing "cannot erase batch from nonexistent campaign"
    (<p-should-fail! (tx-as acc-2 force-acc "rmbatch"
                            {:id 1
                             :campaign_id 99
                             :sig nil})))

  (testing "cannot erase nonexistent batch"
    (<p-should-fail! (tx-as acc-2 force-acc "rmbatch"
                            {:id 99
                             :campaign_id 0
                             :sig nil})))

  (testing "can erase batch from eos account"
    (<p-should-succeed! (tx-as acc-2 force-acc "rmbatch"
                               {:id 2
                                :campaign_id 0
                                :sig nil})))

  (testing "can erase batch from pub key hash"
    (let [params (pack-rmbatch-params 1 3)]
      (<p-should-succeed! (tx-as acc-2 force-acc "rmbatch"
                                 {:id 1
                                  :campaign_id 3
                                  :sig (sign-params params)})))))

(defn efx-quant [n]
  {:quantity (str n ".0000 EFX") :contract token-acc})

(defn v-transfer [from from-id amount memo]
  (eos/transact
   token-acc
   "transfer"
   {:from owner-acc
    :to force-acc
    :quantity (:quantity (efx-quant amount))
    :memo memo}
   [{:actor owner-acc :permission "active"}]))

(defn publish-batch
  ([acc acc-id batch-id num-tasks ]
   (publish-batch acc acc-id batch-id num-tasks nil))
  ([acc acc-id batch-id num-tasks sig]
   (tx-as acc force-acc "publishbatch"
          {:account_id acc-id
           :batch_id batch-id
           :num_tasks num-tasks
           :sig sig})))

(async-deftest deposit
  ;; open an account for force, deposit some funds to acc-2
  (<p! (eos/transact
        [{:account vacc-acc :name "open"
          :authorization [{:actor force-acc :permission "owner"}]
          :data {:acc ["name" force-acc]
                 :payer force-acc
                 :symbol {:contract token-acc :sym "4,EFX"}}}
         {:account token-acc :name "transfer"
          :authorization [{:actor owner-acc :permission "active"}]
          :data {:from owner-acc :to vacc-acc :memo "2"
                 :quantity "1500.0000 EFX"}}
         {:account token-acc :name "transfer"
          :authorization [{:actor owner-acc :permission "active"}]
          :data {:from owner-acc :to vacc-acc :memo "3"
                 :quantity "1000.0000 EFX"}}]))

  (<p! (eos/wait-block (js/Promise.resolve 1)) 300)

  (let [batch-0-cost (* 3 10 2)
        batch-0-fee (* batch-0-cost 0.1)]

    (testing "can not publish batch underfunded"
      (<p-should-succeed! (v-transfer owner-acc 2 (+ batch-0-cost batch-0-fee -1) "0"))
      (<p-should-fail-with! (publish-batch acc-2 2 0 10) "" "batch is underfunded"))

    (testing "can publish funded batch"
      (<p! (eos/wait-block (js/Promise.resolve 1)) 500)
      (<p! (v-transfer owner-acc 2 1 "0"))
      (<p-should-succeed! (publish-batch acc-2 2 0 4)))

    (testing "can fund and publish other batches"
      (<p-should-succeed! (v-transfer acc-4 3 50 (str (get-composite-key 0 2))))
      (<p-should-succeed! (v-transfer acc-4 3 50 (str (get-composite-key 1 2))))
      ;; (<p-should-succeed! (v-transfer acc-4 3 50 (str (get-composite-key 2 0))))
      ;; (<p-should-succeed! (v-transfer acc-4 3 50 (str (get-composite-key 0 5))))
      (<p-should-succeed! (publish-batch acc-4 3 (get-composite-key 0 2) 3)) ; campaign 2 batch 0
      (<p-should-succeed! (publish-batch acc-4 3 (get-composite-key 1 2) 3))  ; campaign 2 batch 1
      ;; (<p-should-succeed! (publish-batch acc-2 2 (get-composite-key 2 0) 3))  ; campaign 0 batch 2
      ;; (<p-should-succeed!
      ;;  (publish-batch acc-4 3 (get-composite-key 0 5) 3
      ;;                 (sign-params (pack-reopenbatch-params (get-composite-key 0 5)))))
      )))

(defn sha256 [data]
  (vacc/bytes->hex (.digest (.update (.hash ec) data))))

#_(async-deftest closebatch
  (let [params (pack-closebatch-params (get-composite-key 0 5))]
    (testing "campaign owner can pause batch"
             (is (= (<p! (get-in-rows force-acc "batch" [2 "num_tasks"])) 3))
             (is (= (<p! (get-in-rows force-acc "batch" [5 "num_tasks"])) 3))

             (<p-should-succeed! (tx-as acc-4 force-acc "closebatch"
                                        {:batch_id (get-composite-key 0 2)
                                         :owner ["name" acc-4]
                                         :sig nil}))
             (is (= (<p! (get-in-rows force-acc "batch" [2 "num_tasks"])) 0))
             (<p-should-succeed! (tx-as acc-2 force-acc "closebatch"
                                        {:batch_id (get-composite-key 0 5)
                                         :owner (first accs)
                                         :sig (sign-params params)}))
             (is (= (<p! (get-in-rows force-acc "batch" [4 "num_tasks"])) 0)))))

#_(async-deftest reopenbatch
  (let [params (pack-reopenbatch-params (get-composite-key 0 5))]
    (testing "campaign owner can pause batch"
      (is (= (<p! (get-in-rows force-acc "batch" [2 "num_tasks"])) 0))
      (is (= (<p! (get-in-rows force-acc "batch" [5 "num_tasks"])) 0))
      (<p-should-succeed! (tx-as acc-4 force-acc "publishbatch"
                                 {:batch_id (get-composite-key 0 2)
                                  :num_tasks 2
                                  :sig nil}))
      (is (= (<p! (get-in-rows force-acc "batch" [2 "num_tasks"])) 2))
      (<p-should-succeed! (tx-as acc-2 force-acc "publishbatch"
                                 {:batch_id (get-composite-key 0 5)
                                  :num_tasks 3
                                  :sig (sign-params params)}))
      (is (= (<p! (get-in-rows force-acc "batch" [5 "num_tasks"])) 3)))))

(def task-data ["aaeebb" "bb1234" "cc" "dd"])



(async-deftest reservetask
  (testing "user 1 makes reservation"
    (js/console.log
     (eos/tx-get-console
      (<p-should-succeed!
       (tx-as acc-3 force-acc "reservetask" {:campaign_id 0
                                             :account_id 1
                                             :payer acc-3
                                             :quali_assets []
                                             :sig nil}))))
    (is (= (<p! (get-in-rows force-acc "campaign" [0 "tasks_done"])) 0))
    (let [rows (<p! (eos/get-table-rows force-acc force-acc "reservation"))]
      (is (= (count rows) 1))
      (is (= (get-in rows [0 "account_id"]) 1))))

  (testing "user 1 can not make more reservations"
    (<p-should-fail-with!
     (tx-as acc-3 force-acc "reservetask" {:campaign_id 0
                                           :account_id 1
                                           :payer acc-3
                                           :quali_assets [0]
                                           :sig nil})
     "" "you already have a reservation"))

  (testing "user 2 steals the exsiting reservation"
    (js/console.log
     (eos/tx-get-console
      (<p-should-succeed!
       (tx-as acc-2 force-acc "reservetask" {:campaign_id 0
                                             :account_id 2
                                             :payer acc-2
                                             :quali_assets [0]
                                             :sig nil})
       (is (= (<p! (get-in-rows force-acc "campaign" [0 "tasks_done"])) 0))
       (let [rows (<p! (eos/get-table-rows force-acc force-acc "reservation"))]
         (is (= (count rows) 1))
         (is (= (get-in rows [0 "account_id"]) 2) ))))))

  (testing "user 1 completes task in second campaign"
    (<p-should-succeed!
     (tx-as acc-3 force-acc "reservetask" {:campaign_id 2
                                           :account_id 1
                                           :payer acc-3
                                           :quali_assets nil
                                           :sig nil}))
    (is (= (<p! (get-in-rows force-acc "campaign" [1 "tasks_done"])) 1))
    (let [rows (<p! (eos/get-table-rows force-acc force-acc "reservation"))]
      (is (= (count rows) 2))
      (is (= (get-in rows [1 "account_id"]) 1)))

    (<p-should-succeed!
     (tx-as acc-2 force-acc "reservetask" {:campaign_id 2
                                           :quali_assets nil
                                           :account_id 2
                                           :payer acc-2
                                           :sig nil}))
    (is (= (<p! (get-in-rows force-acc "campaign" [1 "tasks_done"])) 2))))



;; (async-deftest reservetask
;;   (let []
;;     (testing "can make reservation"
;;       (<p-should-succeed!
;;        (tx-as acc-3 force-acc "reservetask" {:campaign_id 0
;;                                              :account_id 1
;;                                              :payer acc-3
;;                                              :sig nil})
;;        "can reserve for campaign 0")

;;       (<p-should-fail-with!
;;        (tx-as acc-3 force-acc "reservetask" {:campaign_id 0
;;                                              :account_id 1
;;                                              :payer acc-3
;;                                              :sig nil})
;;        "missing qualification" "missing qualification")

;;       (<p-should-succeed!
;;        (tx-as acc-3 force-acc "reservetask" {:campaign_id 0
;;                                              :account_id 0
;;                                              :payer acc-3
;;                                              :sig (sign-params (pack-reservetask-params 1 0))}))

;;       (<p-should-succeed!
;;        (tx-as acc-3 force-acc "reservetask" {:campaign_id 2
;;                                              :account_id 1
;;                                              :payer acc-3
;;                                              :sig nil})
;;        "can reserve for campaign 2"))

;;     (<p! (eos/wait-block (js/Promise.resolve 1)) 300)
;;     (testing "must join campaign"
;;       (<p-should-fail-with!
;;        (tx-as acc-2 force-acc "reservetask" {:campaign_id 0
;;                                              :account_id 2
;;                                              :payer acc-2
;;                                              :sig nil})
;;        "" "missing qualification")
;;       (<p! (tx-as acc-2 force-acc "assignquali" {:quali_id 0 :user_id 2 :payer acc-2
;;                                                  :value ""
;;                                                  :sig (sign-params (pack-assignquali-params 0 2 ""))})))

;;     (testing "cant exceed repetitions"
;;       (let [reserve-data  {:campaign_id 0
;;                            :account_id 1
;;                            :payer acc-3
;;                            :sig nil}]
;;         (<p-should-fail-with!
;;          (tx-as acc-3 force-acc "reservetask" reserve-data) "" "account already did task")

;;         (<p-should-succeed!
;;          (tx-as acc-2 force-acc "reservetask" (assoc reserve-data :account_id 2 :payer acc-2)))

;;         (<p-should-fail-with!
;;          (tx-as acc-5 force-acc "reservetask" (assoc reserve-data :account_id 4 :payer acc-5))
;;          "" "task already completed")))))

;; (async-deftest releasetask
;;   (testing "other workers cannot release reserved task before delay."
;;     (<p-should-fail! (tx-as acc-4 force-acc "releasetask"
;;                             {:task_id 1
;;                              :account_id 3
;;                              :payer acc-4
;;                              :sig nil
;;                              })))
;;   (<p! (util/wait 6000))
;;   (testing "campaign owner can release reserved task with eos account"
;;     (<p-should-succeed! (tx-as acc-2 force-acc "releasetask"
;;                                {:task_id 0
;;                                 :account_id 2
;;                                 :payer acc-2
;;                                 :sig nil
;;                                 })))

;;   (testing "worker cannot release already released task"
;;     (<p-should-fail! (tx-as acc-3 force-acc "releasetask"
;;                             {:task_id 0
;;                              :account_id 1
;;                              :payer acc-3
;;                              :sig nil
;;                              })))

;;   (testing "can release reserved task with pub key hash"
;;     (<p-should-succeed! (tx-as acc-4 force-acc "releasetask"
;;                                {:task_id 1
;;                                 :account_id 0
;;                                 :payer acc-4
;;                                 :sig (sign-params (pack-task-params 14 1 0))}))))

;; (async-deftest reclaimtask
;;   (testing "can not reclaim task when not qualified"
;;     (<p-should-fail-with! (tx-as acc-2 force-acc "reclaimtask"
;;                                  {:task_id 1
;;                                   :account_id 3
;;                                   :payer acc-2
;;                                   :sig nil})
;;                           "" "missing qualification"))

;;   (let [submitted-first (get (<p! (eos/get-table-row force-acc force-acc "submission" 1))
;;                              "submitted_on")]
;;     (testing "can reclaim released task with eos account"
;;       (<p-should-succeed! (tx-as acc-2 force-acc "reclaimtask"
;;                                  {:task_id 1
;;                                   :account_id 2
;;                                   :payer acc-2
;;                                   :sig nil})))
;;     (let [submitted-after (get (<p! (eos/get-table-row force-acc force-acc "submission" 1))
;;                                "submitted_on")]
;;       (is (not (= submitted-first submitted-after))
;;           "reclaimtask should reset submitted_on")))

;;   (testing "can reclaim released task with pub key hash"
;;     (<p-should-succeed! (tx-as acc-3 force-acc "reclaimtask"
;;                                {:task_id 0
;;                                 :account_id 0
;;                                 :payer acc-3
;;                                 :sig (sign-params (pack-task-params 15 0 0))}))))


(defn reserve-task-fn [campaign-id account account-id]
  (tx-as account force-acc "reservetask" {:campaign_id campaign-id
                                          :account_id account-id
                                          :quali_assets nil
                                          :payer account
                                          :sig nil}))

(defn submit-task-fn [campaign-id task-idx account account-id]
  (tx-as account force-acc "submittask" {:campaign_id campaign-id
                                         :data (str "test data " task-idx)
                                         :account_id account-id
                                         :task_idx task-idx
                                         :payer account
                                         :sig nil}))

(async-deftest submit-task
  (testing "can not submit for other user"
    (js/console.log
     (eos/tx-get-console
      (<p-should-fail-with!
       (tx-as acc-3 force-acc "submittask" {:data "testdata"
                                            :campaign_id 0
                                            :task_idx 0
                                            :account_id 3
                                            :sig nil
                                            :payer acc-3})
       "" "already submitted or not reserved by you"))))

  (testing "can submit task"
    (js/console.log
     (eos/tx-get-console
      (<p-should-succeed!
       (tx-as acc-2 force-acc "submittask" {:data "testdata"
                                            :campaign_id 0
                                            :task_idx 0
                                            :account_id 2
                                            :sig nil
                                            :payer acc-2}))))
    (let [rows (<p! (eos/get-table-rows force-acc force-acc "submission"))]
      (is (= (count rows) 1))
      (is (= (get-in rows [0 "account_id"]) 2))
      (is (= (get-in rows [0 "data"]) "testdata"))))

  (testing "can not double submit"
    (<p-should-fail-with!
     (tx-as acc-2 force-acc "submittask" {:data "testdata 3"
                                          :campaign_id 0
                                          :task_idx 0
                                          :account_id 2
                                          :sig nil
                                          :payer acc-2})
     "" "already submitted or not reserved by you"))

  (testing "submit 2 more tasks"))

(async-deftest reservetask-carryover
  (testing "complete first batch of campaign 2"
    (<p-should-succeed! (reserve-task-fn 2 acc-5 4) "acc5 reserve")
    (<p-should-succeed! (submit-task-fn 2 0 acc-3 1) "acc3 submit")
    (<p-should-succeed! (reserve-task-fn 2 acc-4 3) "acc4 submit")
    (<p! (util/wait 100))
    (<p-should-succeed! (submit-task-fn 2 2 acc-5 4) "acc5 submit")
    (<p-should-succeed! (reserve-task-fn 2 acc-3 1) "acc3 reserve")
    (<p! (util/wait 100))
    (<p-should-succeed! (reserve-task-fn 2 acc-5 4) "acc5 reserve")
    (<p-should-succeed! (submit-task-fn 2 4 acc-3 1) "acc3 submit")
    (<p! (util/wait 100)))
  (testing "can not reserve when depleted"
    (<p-should-fail-with! (reserve-task-fn 2 acc-3 1) "acc3 reserve" "no batches available" ))
  (testing "can publish new batch and work"
    (<p-should-succeed! (tx-as acc-4 force-acc "mkbatch"
                               {:id 2
                                :campaign_id 2
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :repetitions 1
                                :payer acc-4
                                :sig nil}))
    (<p-should-succeed! (v-transfer acc-4 3 50 (str (get-composite-key 2 2))))
    (<p-should-succeed! (publish-batch acc-4 3 (get-composite-key 2 2) 3))
    (<p-should-succeed! (reserve-task-fn 2 acc-3 1) "acc3 reserve")))

(async-deftest qualifications

  (testing "can set campaign qualification requirement"
    (<p-should-succeed! (tx-as acc-2 force-acc "editcampaign"
                               {:campaign_id 0
                                :owner ["name" acc-2]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :reward {:quantity "3.0000 EFX" :contract token-acc}
                                :qualis [{:type 0
                                          :address ["name" force-collection-name]
                                          :data_filter nil}]
                                :paused false
                                :payer acc-2
                                :sig nil})))

  (testing "can not join campaign without NFT from collection"
    (<p-should-fail-with!
     (tx-as acc-3 force-acc "reservetask" {:campaign_id 0
                                           :account_id 1
                                           :payer acc-3
                                           :quali_assets []
                                           :sig nil})
     "" "wrong number of quali_assets"))

  (testing "can join campaign with NFT from collection"
    (let [acc-3-asset-id (<p! (get-in-rows atomic-acc acc-3 "assets" [0 "asset_id"]))]
      (<p-should-succeed!
       (tx-as acc-3 force-acc "reservetask" {:campaign_id 0
                                             :account_id 1
                                             :payer acc-3
                                             :quali_assets [acc-3-asset-id]
                                             :sig nil})))))

;; (async-deftest payout
;;   (let [params-1 (pack-payout-params 0)
;;         params-2 (pack-payout-params 2)]

;;     (testing "cannot payout before the delay is past"
;;       (<p-should-fail-with! (tx-as acc-2 force-acc "payout"
;;                                    {:payment_id 0
;;                                     :sig nil})
;;                             "" "not past payout delay"))

;;     (testing "cannot payout with nonexisting payment"
;;       (<p-should-fail-with! (tx-as acc-2 force-acc "payout"
;;                                    {:payment_id 2
;;                                     :sig (sign-params params-2)})
;;                             "" "payment not found"))

;;     (<p! (util/wait 3000))

;;     (testing "can payout from eos account"
;;       ;; test that account balance increases after payment
;;       (is (= (<p! (get-in-rows force-acc "payment" [1 "pending" "quantity"])) "3.0000 EFX"))
;;       (is (= (<p! (get-in-rows vacc-acc "account" [2 "balance" "quantity"])) "1434.0000 EFX"))

;;       (<p-should-succeed! (tx-as acc-2 force-acc "payout"
;;                                  {:payment_id 0
;;                                   :sig nil}))
;;       (is (= (<p! (get-in-rows vacc-acc "account" [2 "balance" "quantity"])) "1437.0000 EFX")))

;;     (testing "can payout from pub key hash."
;;       (<p-should-succeed! (tx-as acc-2 force-acc "payout"
;;                                  {:payment_id 1
;;                                   :sig (sign-params params-1)})))))

;; (async-deftest free-task-ram
;;   (testing "can not clear tasks when batch still exists"
;;     (<p-should-fail-with!
;;      (tx-as acc-2 force-acc "cleartasks"
;;             {:batch_id 0
;;              :campaign_id 0})
;;      "" "batch still exists"))
;;   (testing "can clear tasks of removed batch"
;;     (<p-should-succeed!
;;      (tx-as acc-2 force-acc "cleartasks"
;;             {:batch_id 1
;;              :campaign_id 0}))))

;; (async-deftest proxy
;;   (testing "proxy can create campaign"
;;     (<p-should-succeed!
;;      (tx-as proxy-acc force-acc "mkcampaign"
;;             {:owner ["name" proxy-acc]
;;              :content {:field_0 0 :field_1 vacc/hash160-1}
;;              :reward {:quantity "0.0000 EFX" :contract token-acc}
;;              :qualis []
;;              :payer proxy-acc
;;              :sig nil}))))

(defn -main [& args]
  (run-tests))
