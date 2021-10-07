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
(def vacc-acc (eos/random-account "vacc"))
(def token-acc (eos/random-account "tkn"))
(def force-acc (eos/random-account "force"))
(println "force-acc" force-acc)
(println "vacc-acc" vacc-acc)

(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(def acc-3 (eos/random-account "acc"))
(println "acc-3 " acc-3)
(def accs [["address" (vacc/pub->addr vacc/keypair-pub)]
           ["name" acc-3]
           ["name" acc-2]])

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
          (<! (e2e.token/deploy-token token-acc [owner-acc token-acc]))
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
    (<p-should-fail! (tx-as owner-acc force-acc "init" {:vaccount_contract vacc-acc})))
  (testing "owner can init"
    (<p-should-succeed! (eos/transact force-acc "init" {:vaccount_contract vacc-acc}))))

(async-deftest mkcampaign
  (testing "can create campaign from eos account"
    (<p-should-succeed! (tx-as acc-2 force-acc "mkcampaign"
                               {:owner ["name" acc-2]
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :reward {:quantity "1.0000 EFX" :contract token-acc}
                                :payer acc-2
                                :sig nil}))))

(async-deftest mkbatch
  (testing "campaign owner can create batch"
    (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                               {:id 0
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :task_merkle_root "363944d30edab512d827d74e66085eb327f7e700bf07011a1e407c66182b5a98"
                                :num_tasks 10
                                :payer acc-2
                                :sig nil}))))

(async-deftest campaignjoin
  (testing "account can join a campaign"
    (<p-should-succeed! (tx-as acc-3 force-acc "joincampaign"
                               {:campaign_id 0
                                :account_id 1
                                :payer acc-3
                                :sig nil}))))


(defn sha256 [data]
  (vacc/bytes->hex (.digest (.update (.hash ec) data))))

(defn buf->hex [buf]
  (.toString buf "hex"))

(async-deftest reservetask
  (let [task-data ["aa" "bb" "cc" "dd"]
        leaves (map #(sha256 (vacc/hex->bytes %)) task-data)
        tree (MerkleTree. (clj->js leaves) sha256)
        root (.toString (.getRoot tree) "hex")

        proof  (.getProof tree (first leaves))
        hex-proof (map #(buf->hex (.-data %)) proof)
        pos (map #(if (= (.-position %) "left") 0 1) proof)]
    (testing "can make reservation"
      (<p-should-succeed!
       (tx-as acc-3 force-acc "reservetask" {:proof hex-proof
                                             :position pos
                                             :data (first task-data)
                                             :campaign_id 0
                                             :batch_id 0
                                             :account_id 1
                                             :payer acc-3
                                             :sig nil
                                             })))
    (<p! (eos/wait-block (js/Promise.resolve 1)) 300)
    (testing "must join campaign"
      (<p-should-fail-with!
       (tx-as acc-2 force-acc "reservetask" {:proof hex-proof
                                             :position pos
                                             :data (first task-data)
                                             :campaign_id 0
                                             :batch_id 0
                                             :account_id 2
                                             :payer acc-2
                                             :sig nil})
       "" "campaign not joined")
      (tx-as acc-2 force-acc "joincampaign"
             {:campaign_id 0
              :account_id 2
              :payer acc-2
              :sig nil}))
    (testing "cant exceed repetitions"
      (<p-should-fail-with!
       (tx-as acc-3 force-acc "reservetask" {:proof hex-proof
                                             :position pos
                                             :data (first task-data)
                                             :campaign_id 0
                                             :batch_id 0
                                             :account_id 1
                                             :payer acc-3
                                             :sig nil})
       "" "account already did task")

      (<p-should-fail-with!
       (tx-as acc-2 force-acc "reservetask" {:proof hex-proof
                                             :position pos
                                             :data (first task-data)
                                             :campaign_id 0
                                             :batch_id 0
                                             :account_id 2
                                             :payer acc-2
                                             :sig nil})
       "" "task already completed"))))

(defn -main [& args]
  (run-tests))
