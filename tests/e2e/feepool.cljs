(ns e2e.feepool
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [wait p-all]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go <!]]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                                       <p-should-fail-with! <p-may-fail!
                                       async-deftest]]
            e2e.token e2e.dao e2e.stake
            [e2e.proposals :refer [base-prop proposal-cost]]))


(def owner-acc e2e.token/owner-acc)
(def token-acc e2e.proposals/token-acc)
(def prop-acc e2e.proposals/prop-acc)
(def dao-acc e2e.proposals/dao-acc)
(def stake-acc e2e.proposals/stake-acc)
(def fee-acc (eos/random-account "fee"))

(println (str "fee acc = " fee-acc))

(defn eos-tx-owner [contr action args]
  (eos/transact contr action args [{:actor owner-acc :permission "active"}]))
(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p! (eos/create-account owner-acc fee-acc))
          (<p! (eos/update-auth
                fee-acc "xfer"
                [{:permission {:actor fee-acc :permission "eosio.code"} :weight 1}]))
          (<! (e2e.proposals/deploy-proposals prop-acc))
          (<! (e2e.token/deploy-token token-acc [owner-acc prop-acc]))
          (<! (e2e.stake/deploy-stake stake-acc token-acc "4,EFX" "4,NFX"
                                      [[owner-acc "1056569.0000 EFX" "37276.0000 NFX"]
                                       [prop-acc "309999.0000 EFX" "10002.0000 NFX"]]))
          (<! (e2e.dao/deploy-dao dao-acc stake-acc prop-acc token-acc "4,EFX" "4,NFX"
                                  [owner-acc prop-acc]))          
          (<p! (eos/deploy fee-acc "contracts/feepool/feepool"))
          (<p! (eos/transact "eosio" "linkauth"
                             {:account fee-acc
                              :requirement "xfer"
                              :code token-acc
                              :type "transfer"}
                             [{:actor fee-acc :permission "active"}]))
          (done)
          (catch js/Error e (prn "Error " e))))))
   :after (fn [])})

(deftest init
  (async
   done
   (go
     (try
       (<p-should-fail-with!
        (eos/transact fee-acc "init" {:proposal_contract prop-acc} [{:actor owner-acc :permission "active"}])
        "only fee-acc can init"
        (str "missing authority of " fee-acc))
       (<p-should-succeed!
        (eos/transact fee-acc "init" {:proposal_contract prop-acc})
        "can init")
       (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "config"))]
         (is (= (count rows) 1)))
       (done)
       (catch js/Error e (prn "Error" e))))))

(deftest addfees
  (async
   done
   (go
     (try
       (<p-should-succeed!
        (eos-tx-owner token-acc "transfer"
                      {:from     owner-acc
                       :to       fee-acc
                       :memo     "token not allowed"
                       :quantity "1000.0000 EFX"})
        "can transfer")
       (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "balance"))]
         (is (empty? rows)))
       (<p-should-succeed!
        (eos/transact fee-acc "update"
                      {:proposal_contract prop-acc
                       :allowed_symbols   [{:contract token-acc :sym "4,EFX"}]})
        "can update")
       (<p-should-succeed!
        (eos-tx-owner token-acc "transfer"
                      {:from owner-acc :to fee-acc :memo "token allowed" :quantity "1000.0000 EFX"})
        "can transfer")
       (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "balance"))]
         (is (= (count rows) 1))
         (is (= (get-in rows [0 "balance" "value"])) 10000000))
       (done)
       (catch js/Error e (prn "Error" e))))))

(def base-cycle {:start_time "2021-01-01 12:00:00"
                 :budget [{:quantity (str "326000.0000 EFX")
                           :contract token-acc}]})

(def prop-config (assoc e2e.proposals/prop-config
                        :cycle_voting_duration_sec 1e8
                        :cycle_duration_sec (inc 1e8)))

(async-deftest newcycle
  (<p! (eos/transact prop-acc "addcycle" base-cycle))
  (<p! (wait 1000))
  (<p! (eos/transact prop-acc "cycleupdate" {}))
  (<p-should-succeed!
   (eos-tx-owner token-acc "transfer"
                 {:from owner-acc :to fee-acc :memo "token allowed" :quantity "500.0000 EFX"})
   "can transfer")
  (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "balance"))]
    (is (= (count rows) 2))))

(async-deftest claim
  ;; add a proposal, activate it, vote, then finalize the cycle
  (<p! (eos-tx-owner token-acc "transfer"
                     {:from owner-acc :to prop-acc :quantity proposal-cost :memo "proposal"}))
  (<p! (p-all (eos-tx-owner prop-acc "createprop" (assoc base-prop :cycle 2))
              (eos/transact prop-acc "addcycle" base-cycle)
              (eos/transact prop-acc "addcycle" base-cycle)))
  (<p! (eos/transact prop-acc "cycleupdate" {}))
  (<p! (eos/transact prop-acc "update" prop-config))
  (<p! (p-all (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 0})
              (eos/transact prop-acc "addvote" {:voter prop-acc :prop_id 0 :vote_type 1})))

  ;; add fees and finalize cycle
  (<p-should-succeed!
   (eos-tx-owner token-acc "transfer"
                 {:from owner-acc :to fee-acc :memo "" :quantity "92000000.0000 EFX"})
   "can add more feees")
  (<p! (eos/transact prop-acc "update" (assoc prop-config :cycle_duration_sec 2
                                              :cycle_voting_duration_sec 1)))
  (<p! (eos/transact prop-acc "cycleupdate" {}))
  (<p! (eos-tx-owner prop-acc "processcycle" {:account owner-acc :id 2}))

  (<p-should-succeed! (eos-tx-owner fee-acc "claimreward" {:account owner-acc})))

(defn -main [& args]
  (run-tests))
