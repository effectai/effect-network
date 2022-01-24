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
   [merkletreejs :refer [MerkleTree]]
   [clojure.string :as string]
   [elliptic :refer [ec]]))

(def owner-acc "eosio")
(def acc-2 (eos/random-account "acc"))
(def acc-3 (eos/random-account "acc"))
(def acc-4 (eos/random-account "acc"))
(def vacc-acc (eos/random-account "vacc"))
(def token-acc (eos/random-account "tkn"))
(def force-acc (eos/random-account "force"))
(println "force-acc" force-acc)
(println "vacc-acc" vacc-acc)

(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(defn tx-as-owner [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "owner"}]))

(println "acc-3 " acc-3)
(println "acc-2 " acc-2)
(def accs [["address" (vacc/pub->addr vacc/keypair-pub)]
           ["name" acc-3]
           ["name" acc-2]
           ["name" acc-4]])

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p-may-fail! (eos/create-account owner-acc vacc-acc))
          (<p-may-fail! (eos/create-account owner-acc force-acc))
          (<p! (deploy-file vacc-acc "contracts/vaccount/vaccount"))
          (<p! (deploy-file force-acc "contracts/force/force"))
          (<!  (e2e.token/deploy-token token-acc [owner-acc token-acc]))
          (<p! (eos/update-auth force-acc "active"
                  [{:permission {:actor force-acc :permission "eosio.code"}
                    :weight 1}]))
          (doseq [[type acc] accs]
            (when (= "name" type)
              (<p! (eos/create-account owner-acc acc)))
            (<p! (tx-as owner-acc vacc-acc "open"
                        {:acc [type acc] :payer owner-acc
                         :symbol {:contract token-acc :sym "4,EFX"}})))
          (done)
          (catch js/Error e (prn "Error " e))))))
   :after (fn [])})

(async-deftest init
  (testing "other accounts cant init"
    (<p-should-fail! (tx-as owner-acc force-acc "init" {:vaccount_contract vacc-acc
                                                        :force_vaccount_id 4
                                                        :payout_delay_sec 1})))
  (testing "owner can init"
    (<p-should-succeed! (tx-as-owner force-acc force-acc "init" {:vaccount_contract vacc-acc
                                                                 :force_vaccount_id 4
                                                                 :payout_delay_sec 1}))))

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

(defn pack-mkbatch-params [id camp-id content root]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 8) (.pushUint32 id) (.pushUint32 camp-id) (.push 0) (.pushString content)
     (.pushUint8ArrayChecked (vacc/hex->bytes root) 32))))

(defn pack-rmbatch-params [id camp-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 12) (.pushUint32 id) (.pushUint32 camp-id))))

(defn pack-joincampaign-params [camp-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize)) (.push 7) (.pushUint32 camp-id))))

(defn pack-payout-params [acc-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize)) (.push 13) (.pushUint32 acc-id))))

(defn pack-reservetask-params [leaf-hash camp-id batch-id]
  (.asUint8Array
   (doto (new (.-SerialBuffer Serialize))
     (.push 6) (.pushUint8ArrayChecked (vacc/hex->bytes leaf-hash) 32)
     (.pushUint32 camp-id) (.pushUint32 batch-id))))

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
                                :reward {:quantity "1.0000 EFX" :contract token-acc}
                                :payer acc-2
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                               {:owner ["name" acc-2]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :reward {:quantity "11.0000 EFX" :contract token-acc}
                                :payer acc-2
                                :sig nil})))

  (testing "can create campaign from pub key hash"
    (let [ipfs-hash  "QmPU1fL3oVZGKhGeNSMGxJgY7NsK6MQEpMyZF3CvQwRz4T"
          params (pack-mkcampaign-params ipfs-hash)]
      (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                                 {:owner (first accs)
                                  :content {:field_0 0 :field_1 ipfs-hash}
                                  :reward {:quantity "115.0000 EFX" :contract token-acc}
                                  :payer acc-2
                                  :sig (sign-params params)}))
      (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                                 {:owner (first accs)
                                  :content {:field_0 0 :field_1 ipfs-hash}
                                  :reward {:quantity "110.0000 EFX" :contract token-acc}
                                  :payer acc-2
                                  :sig (sign-params params)})))))

(async-deftest editcampaign
  (testing "can edit campaign from eos account"
    (<p-should-succeed! (tx-as acc-2 force-acc "editcampaign"
                               {:campaign_id 0
                                :owner ["name" acc-2]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :reward {:quantity "3.0000 EFX" :contract token-acc}
                                :payer acc-2
                                :sig nil})))

  (testing "can edit campaign from pub key hash"
    (let [ipfs-hash "QmPoB7nH4Q94C4YxT4rEcQDv3m76HT14wHbUL1gpEa4vWG"
          params (pack-editcampaign-params 2 ipfs-hash)]
      (<p-should-succeed! (tx-as acc-2 force-acc "editcampaign"
                                 {:campaign_id 2
                                  :owner (first accs)
                                  :content {:field_0 0 :field_1 ipfs-hash}
                                  :reward {:quantity "115.0000 EFX" :contract token-acc}
                                  :payer acc-2
                                  :sig (sign-params params)})))))


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

  (testing "can erase campaign from pub key hash"
    (is (not (nil? (<p! (eos/get-table-row force-acc force-acc "campaign" 3)))))
    (let [params (pack-rmcampaign-params 3)]
      (<p-should-succeed! (tx-as acc-2 force-acc "rmcampaign"
                                 {:campaign_id 3
                                  :owner (first accs)
                                  :sig (sign-params params)})))
    (is (nil? (<p! (eos/get-table-row force-acc force-acc "campaign" 3))))))

;; NOTE: this root must match the merkle trees generated in `reserve-task`
(def merkle-root "9b15f697ff7f53e58d1873c9091a91ef83017171449499e9796c84cfdc5dd886")

(async-deftest mkbatch
  (testing "cannot create batch with high repetitions"
    (<p-should-fail! (tx-as acc-2 force-acc "mkbatch"
                               {:id 0
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :task_merkle_root merkle-root
                                :repetitions 100
                                :payer acc-2
                                :sig nil})))

  (testing "campaign owner can create batch"
    (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                               {:id 0
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :task_merkle_root merkle-root
                                :repetitions 2
                                :payer acc-2
                                :sig nil}))
    (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                               {:id 1
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :task_merkle_root merkle-root
                                :repetitions 1
                                :payer acc-2
                                :sig nil})))

  (testing "pub key hash can create batch"
    (let [merkle-root merkle-root
          params-1 (pack-mkbatch-params 0 2 vacc/hash160-1 merkle-root)
          params-2 (pack-mkbatch-params 1 2 vacc/hash160-1 merkle-root)]
      (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                                 {:id 0
                                  :campaign_id 2
                                  :content {:field_0 0 :field_1 vacc/hash160-1}
                                  :task_merkle_root merkle-root
                                  :repetitions 1
                                  :payer acc-2
                                  :sig (sign-params params-1)}))
      (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                                 {:id 1
                                  :campaign_id 2
                                  :content {:field_0 0 :field_1 vacc/hash160-1}
                                  :task_merkle_root merkle-root
                                  :repetitions 1
                                  :payer acc-2
                                  :sig (sign-params params-2)})))))

(async-deftest rmbatch
  (testing "only campaign owner can erase batch"
    (<p-should-fail! (tx-as acc-3 force-acc "rmbatch"
                            {:id 1
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
                            {:id 1
                             :campaign_id 0
                             :sig nil})))

  (testing "can erase batch from pub key hash"
    (let [params (pack-rmbatch-params 1 2)]
      (<p-should-succeed! (tx-as acc-2 force-acc "rmbatch"
                            {:id 1
                             :campaign_id 2
                             :sig (sign-params params)})))))

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
                 :quantity "500.0000 EFX"}}]))

  (<p! (eos/wait-block (js/Promise.resolve 1)) 300)

  (testing "vaccount can transfer efx to batch"
    (<p! (tx-as acc-2 vacc-acc "vtransfer"
                {:from_id 2
                 :to_id 4
                 :quantity {:quantity "100.0000 EFX" :contract token-acc}
                 :memo "0"
                 :sig nil
                 :fee nil})))

  (testing "can publish batch"
    (<p! (tx-as acc-2 force-acc "publishbatch"
                {:account_id 2
                 :batch_id 0
                 :num_tasks 10
                 :sig nil}))))

(async-deftest campaignjoin
  (testing "account can join a campaign"
    (<p-should-succeed! (tx-as acc-3 force-acc "joincampaign"
                               {:campaign_id 0
                                :account_id 1
                                :payer acc-3
                                :sig nil})))
  (testing "pub key hash can join a campaign"
    (<p-should-succeed! (tx-as acc-3 force-acc "joincampaign"
                               {:campaign_id 0
                                :account_id 0
                                :payer acc-3
                                :sig (sign-params (pack-joincampaign-params 0))}))))


(defn sha256 [data]
  (vacc/bytes->hex (.digest (.update (.hash ec) data))))

(defn buf->hex [buf]
  (.toString buf "hex"))

(async-deftest reservetask
  (let [camp-id 0
        batch-id 0
        batch-pk "0000000000000000"

        task-data ["aaeebb" "bb1234" "cc" "dd"]
        task-data-prep (map #(str batch-pk %) task-data)
        leaves (map #(sha256 (vacc/hex->bytes %)) task-data-prep)
        tree (MerkleTree. (clj->js leaves) sha256)
        root (.toString (.getRoot tree) "hex")
        _ (prn "merkle root: " root)

        proof-1  (.getProof tree (first leaves))
        hex-proof-1 (map #(buf->hex (.-data %)) proof-1)
        pos-1 (map #(if (= (.-position %) "left") 0 1) proof-1)

        proof-2  (.getProof tree (second leaves))
        hex-proof-2 (map #(buf->hex (.-data %)) proof-2)
        pos-2 (map #(if (= (.-position %) "left") 0 1) proof-2)

        params-1 (pack-reservetask-params (first leaves) 0 0)
        params-2 (pack-reservetask-params (second leaves) 0 0)]
    (testing "can make reservation"
      (<p-should-succeed!
        (tx-as acc-3 force-acc "reservetask" {:proof hex-proof-1
                                              :position pos-1
                                              :data (first task-data)
                                              :campaign_id 0
                                              :batch_id 0
                                              :account_id 1
                                              :payer acc-3
                                              :sig nil}))
      (<p-should-succeed!
        (tx-as acc-3 force-acc "reservetask" {:proof hex-proof-1
                                              :position pos-1
                                              :data (first task-data)
                                              :campaign_id 0
                                              :batch_id 0
                                              :account_id 0
                                              :payer acc-3
                                              :sig (sign-params params-1)}))                                  
      (<p-should-succeed!
        (tx-as acc-3 force-acc "reservetask" {:proof hex-proof-2
                                              :position pos-2
                                              :data (second task-data)
                                              :campaign_id 0
                                              :batch_id 0
                                              :account_id 0
                                              :payer acc-3
                                              :sig (sign-params params-2)})))
    (<p! (eos/wait-block (js/Promise.resolve 1)) 300)
    (testing "must join campaign"
      (<p-should-fail-with!
        (tx-as acc-2 force-acc "reservetask" {:proof hex-proof-1
                                              :position pos-1
                                              :data (first task-data)
                                              :campaign_id 0
                                              :batch_id 0
                                              :account_id 2
                                              :payer acc-2
                                              :sig nil})
        "" "campaign not joined")
        (tx-as acc-2 force-acc "joincampaign" {:campaign_id 0
                                               :account_id 2
                                               :payer acc-2
                                               :sig nil}))
    (testing "cant exceed repetitions"
      (<p-should-fail-with!
        (tx-as acc-3 force-acc "reservetask" {:proof hex-proof-1
                                              :position pos-1
                                              :data (first task-data)
                                              :campaign_id 0
                                              :batch_id 0
                                              :account_id 1
                                              :payer acc-3
                                              :sig nil})
        "" "account already did task")

      (<p-should-fail-with!
        (tx-as acc-2 force-acc "reservetask" {:proof hex-proof-1
                                              :position pos-1
                                              :data (first task-data)
                                              :campaign_id 0
                                              :batch_id 0
                                              :account_id 2
                                              :payer acc-2
                                              :sig nil})
        "" "task already completed"))))

(async-deftest releasetask
  (testing "campaign owner can release reserved task with eos account"
    (<p-should-succeed! (tx-as acc-2 force-acc "releasetask"
                               {:task_id 0
                                :account_id 2
                                :payer acc-2
                                :sig nil
                                })))

  (testing "worker cannot release already released task"
    (<p-should-fail! (tx-as acc-3 force-acc "releasetask"
                               {:task_id 0
                                :account_id 1
                                :payer acc-3
                                :sig nil
                                })))

  (testing "other workers cannot release reserved tasks"
    (<p-should-fail! (tx-as acc-4 force-acc "releasetask"
                               {:task_id 1
                                :account_id 3
                                :payer acc-4
                                :sig nil
                                })))

  (testing "can release reserved task with pub key hash"
    (<p-should-succeed! (tx-as acc-4 force-acc "releasetask"
                               {:task_id 1
                                :account_id 0
                                :payer acc-4
                                :sig (sign-params (pack-task-params 14 1 0))}))))

(async-deftest reclaimtask
  (testing "can not reclaim task from not joined campaign"
    (<p-should-fail-with! (tx-as acc-2 force-acc "reclaimtask"
                                 {:task_id 1
                                  :account_id 3
                                  :payer acc-2
                                  :sig nil})
                          "" "campaign not joined"))

  (testing "can reclaim released task with eos account"
    (<p-should-succeed! (tx-as acc-2 force-acc "reclaimtask"
                               {:task_id 1
                                :account_id 2
                                :payer acc-2
                                :sig nil})))

  (testing "can reclaim released task with pub key hash"
    (<p-should-succeed! (tx-as acc-3 force-acc "reclaimtask"
                               {:task_id 0
                                :account_id 0
                                :payer acc-3
                                :sig (sign-params (pack-task-params 15 0 0))}))))

(async-deftest submit-task
  (<p-should-succeed!
    (tx-as acc-2 force-acc "submittask" {:data "testdata"
                                         :batch_id 0
                                         :task_id 1
                                         :account_id 2
                                         :sig nil
                                         :payer acc-2}))
  (let [data "testdata 2"]
    (<p-should-succeed!
      (tx-as acc-3 force-acc "submittask" {:data data
                                           :batch_id 0
                                           :task_id 0
                                           :account_id 0
                                           :sig (sign-params (pack-submittask-params 0 data))
                                           :payer acc-3}))))

(defn get-in-rows
  "Applies `get-in` on the result of `get-table-rows`

  Scope is assumed to be the same as account"
  [acc tbl vec]
  (.then (eos/get-table-rows acc acc tbl)
         #(get-in % vec)))

(async-deftest payout
  (let [params-1 (pack-payout-params 0)
        params-2 (pack-payout-params 2)]

    (testing "cannot payout before the delay is past"
      (<p-should-fail-with! (tx-as acc-2 force-acc "payout"
                                   {:payment_id 0
                                    :sig nil})
                            "" "not past payout delay"))

    (testing "cannot payout with nonexisting payment"
      (<p-should-fail-with! (tx-as acc-2 force-acc "payout"
                                   {:payment_id 2
                                    :sig (sign-params params-2)})
                            "" "payment not found"))

    (<p! (util/wait 10000))

    (testing "can payout from eos account"
      ;; test that account balance increases after payment
      (is (= (<p! (get-in-rows force-acc "payment" [1 "pending" "quantity"])) "3.0000 EFX"))
      (is (= (<p! (get-in-rows vacc-acc "account" [2 "balance" "quantity"])) "400.0000 EFX"))

      (<p-should-succeed! (tx-as acc-2 force-acc "payout"
                                 {:payment_id 0
                                  :sig nil}))
      (is (= (<p! (get-in-rows vacc-acc "account" [2 "balance" "quantity"])) "403.0000 EFX")))

    (testing "can payout from pub key hash."
      (<p-should-succeed! (tx-as acc-2 force-acc "payout"
                                 {:payment_id 1
                                  :sig (sign-params params-1)})))))

(defn -main [& args]
  (run-tests))
