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
(def acc-2 "acc")
(def vacc-acc (eos/random-account "vacc"))
(def token-acc (eos/random-account "tkn"))
(def force-acc (eos/random-account "force"))
(println "force-acc" force-acc)

(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(def accs [["address" (vacc/pub->addr vacc/keypair-pub)]
           ["name" (eos/random-account "acc")]
           ["name" (eos/random-account "acc")]])

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p-may-fail! (eos/create-account owner-acc vacc-acc))
          (<p-may-fail! (eos/create-account owner-acc force-acc))
          (<p-may-fail! (eos/create-account owner-acc acc-2))
          (<p! (deploy-file vacc-acc "contracts/vaccount/vaccount"))
          (<p! (deploy-file force-acc "contracts/force/force"))
          (<! (e2e.token/deploy-token token-acc [owner-acc token-acc]))
          (doseq [[type acc] accs]
            (when (= "name" type)
              (<p! (eos/create-account owner-acc acc))))
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
                                :sig nil}))))

(async-deftest mkbatch
  (testing "campaign owner can create batch"
    (<p-should-succeed! (tx-as acc-2 force-acc "mkbatch"
                               {:id 0
                                :campaign_id 0
                                :content {:field_0 0 :field_1 vacc/hash160-1}
                                :merkle_root "8eddac4c1c9be884586f99c045dd05df9dac2cebe2db4b83f04d34a21f56f667"
                                :sig nil}))))

(defn -main [& args]
  (run-tests))
