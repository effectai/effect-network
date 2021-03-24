(ns e2e.proposals
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [p-all wait]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go <!] ]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                                       <p-should-fail-with! <p-may-fail! async-deftest]]
            e2e.token
            e2e.dao
            e2e.stake))

(def owner-acc e2e.token/owner-acc)
(def acc-2 (eos/random-account "acc"))
(def token-acc (eos/random-account "tkn"))
(def prop-acc (eos/random-account "prop"))
(def stake-acc (eos/random-account "stk"))
(def dao-acc e2e.dao/dao-acc)
(println "prop acc = " prop-acc)
(println "acc-2 = " acc-2)
(println "token acc = " token-acc)
(println "stake acc = " stake-acc)
(def first-cycle-start-time  1608292800) ; 12/18/2020 @ 12:00pm (UTC)
(def proposal-cost "1.0000 EFX")

(defn eos-tx-owner [contr action args]
  (eos/transact contr action args [{:actor owner-acc :permission "active"}]))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (<p! (p-all (eos/create-account owner-acc prop-acc)
                    (eos/create-account owner-acc acc-2)))

        (<p! (eos/update-auth
              prop-acc "xfer"
              [{:permission {:actor prop-acc :permission "eosio.code"} :weight 1}]))

        (<p! (eos/deploy prop-acc "contracts/effect-proposals/effect-proposals"))
        (<! (e2e.token/deploy-token token-acc [owner-acc token-acc prop-acc]))
        (<! (e2e.stake/deploy-stake stake-acc token-acc "4,EFX" "4,NFX"
                                    [[owner-acc "1056569.0000 EFX" "37276.0000 NFX"]
                                     [token-acc "606645.0000 EFX" "24042.0000 NFX"]]))
        (<! (e2e.dao/deploy-dao dao-acc stake-acc prop-acc token-acc "4,EFX" "4,NFX"
                                [owner-acc token-acc acc-2]))

        ;; proposal needs a xfer permission that can make token transactions
        (<p! (eos/transact "eosio" "linkauth"
                           {:account prop-acc
                            :requirement "xfer"
                            :code token-acc
                            :type "transfer"}
                           [{:actor prop-acc :permission "active"}]))
        (done))))
   :after (fn [])})

(def prop-config {:cycle_duration_sec 1209600
                  :quorum 4
                  :cycle_voting_duration_sec 0
                  :proposal_cost {:quantity proposal-cost :contract token-acc}
                  :dao_contract dao-acc
                  :first_cycle_start_time "2020-11-18 12:00:00"})

(defn deploy-proposals
  "Deploy a basic proposal account and fill it with data for testing"
  ([acc]
   (go
     (try
       (<p! (eos/create-account owner-acc acc))
       (<p! (eos/deploy acc "contracts/effect-proposals/effect-proposals"))
       (<p! (eos/transact acc "init" prop-config))
       (print "Deployed proposals")
       (catch js/Error e "Error deploying props " e)))))

(async-deftest init
  (<p-should-fail-with!
   (eos/transact prop-acc "update" prop-config)
   "need init to update"
   "not yet initialized")
  (<p-should-succeed!
   (eos/transact prop-acc "init" prop-config)
   "can init")
  (<p-should-succeed!
   (eos/transact prop-acc "update"
                 (assoc-in prop-config [:proposal_cost :quantity] "0.0000 EFX"))
   "can update after init")
  (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
    (is (= (count rows) 1))))

(def base-prop
  {:author owner-acc
   :pay [{:field_0 {:quantity "400.0000 EFX" :contract token-acc}
          :field_1 "2010-01-12"}]
   :content_hash "aa" :category 0 :cycle 0 :transaction_hash nil})

(async-deftest proposal-payment
  (<p! (eos/transact prop-acc "update" prop-config))
  ;; note: change the content_hash to avoid duplicate transactions
  (<p-should-fail-with!
   (eos/transact prop-acc "createprop" (assoc base-prop :content_hash "ee")
                 [{:actor owner-acc :permission "active"}])
   "need a reservation"
   "no proposal reserved")
  (<p-should-fail-with! (eos-tx-owner token-acc "transfer"
                                      {:from owner-acc :to prop-acc
                                       :quantity "1.5000 EFX" :memo "proposal"})
                        "needs correct amount"
                        "wrong amount")
  (<p-should-succeed! (eos-tx-owner token-acc "transfer"
                                    {:from owner-acc :to prop-acc
                                     :quantity proposal-cost :memo "proposal"})
                      "can send correct amount")
  (<p! (eos/transact token-acc "issue" {:to acc-2 :quantity proposal-cost :memo ""}))
  (<p-should-succeed! (eos/transact token-acc "transfer"
                                    {:from acc-2 :to prop-acc
                                     :quantity proposal-cost :memo "proposal"}
                                    [{:actor acc-2 :permission "active"}])
                      "can send correct amount twice"))

(async-deftest new-proposal
  (<p-should-fail-with!
   (eos/transact prop-acc "createprop" (assoc base-prop :author prop-acc))
   "need to be a dao member"
   "not a dao member")
  (<p-should-succeed!
   (eos/transact prop-acc "createprop" base-prop
                 [{:actor owner-acc :permission "active"}])
   "can make a proposal")
  (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))]
    (is (= (count rows) 1)))
  (<p-should-succeed!
   (eos/transact prop-acc "createprop" (assoc base-prop :content_hash "bb" :author acc-2)
                 [{:actor acc-2 :permission "active"}])
   "can make a second proposal")
  (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))]
    (is (= (count rows) 2))))

(deftest update-proposal
  (async
   done
   (go
     (<p-should-succeed! (eos/transact prop-acc "updateprop"
                                       (assoc base-prop :id 0 :cycle 2)
                                       [{:actor owner-acc :permission "active"}])
                         "can update proposal")
     (<p-should-succeed! (eos/transact prop-acc "updateprop"
                                       (assoc base-prop :id 1 :cycle 2)
                                       [{:actor acc-2 :permission "active"}])
                         "can update proposal")
     (done))))

(defn- change-voting-duration
  "Helper function to change the cycle and voting duration config.

  This config is convenient to change during testing."
  [cd vd]
  (eos/transact prop-acc "update"
                (assoc prop-config :cycle_duration_sec cd
                       :cycle_voting_duration_sec vd)))

(deftest cycle-add
  (async
   done
   (go
     (<p-should-succeed! (eos/transact prop-acc "addcycle"
                                       {:start_time "2021-01-01 12:00:00"
                                        :budget [{:quantity (str "326000.0000 EFX")
                                                  :contract token-acc}]}))
     (<p-should-succeed! (eos/transact prop-acc "addcycle"
                                       {:start_time "2021-01-01 12:00:00"
                                        :budget [{:quantity (str "500.1000 EFX")
                                                  :contract token-acc}]}))
     (<p-should-succeed! (eos/transact prop-acc "addcycle"
                                       {:start_time "2021-01-01 12:00:00"
                                        :budget [{:quantity (str "326000.2000 EFX")
                                                  :contract token-acc}]}))
     (<p-should-succeed! (eos/transact prop-acc "addcycle"
                                       {:start_time "2021-01-01 12:00:00"
                                        :budget [{:quantity (str "326000.3000 EFX")
                                                  :contract token-acc}]}))
     (let [[{cycle "current_cycle"} ] (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
       (is (= cycle 0)))
     (<p-should-succeed! (eos/transact prop-acc "cycleupdate" {})
                         "can progress cycle")
     (let [[{cycle "current_cycle"}] (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
       (is (= cycle 1)))
     (<p! (eos/wait-block (js/Promise.resolve 1)))
     (<p-should-succeed! (eos/transact prop-acc "cycleupdate" {})
                         "can progress cycle")
     (let [[{cycle "current_cycle"}] (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
       (is (= cycle 2)))
     (done))))

(deftest cycle-update
  (async
   done
   (go
     (<p-should-fail-with! (eos/transact prop-acc "updatecycle"
                                         {:id 2
                                          :start_time "2021-01-01 12:00:00"
                                          :budget [{:quantity (str "326000.0000 EFX")
                                                    :contract token-acc}]})
                           "cycle must be in the future"
                           "cycle is not in the future")
     (<p-should-succeed! (eos/transact prop-acc "updatecycle"
                                         {:id 3
                                          :start_time "2021-01-01 12:00:00"
                                          :budget [{:quantity (str "326000.0000 EFX")
                                                    :contract token-acc}]}))
     (<p-should-fail-with! (eos-tx-owner prop-acc "updatecycle"
                                         {:id 3
                                          :start_time "2021-01-01 12:00:00"
                                          :budget [{:quantity (str "326000.0000 EFX")
                                                    :contract token-acc}]})
                           "must be contract owner"
                           (str "missing authority of " prop-acc))
     (done))))

(async-deftest vote
  ;; needs to be in voting period
  (<p-should-fail-with!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 0})
   "can vote on own proposal"
   "not in voting period")
  (<p! (eos/transact prop-acc "update"
                     (assoc prop-config
                            :cycle_duration_sec (inc 9e6)
                            :cycle_voting_duration_sec 9e6)))
  (<p-should-succeed!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 0})
   "can vote on own proposal")
  (<p-should-succeed!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 1})
   "can update vote")
  (<p-should-succeed!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 2})
   "can update vote twice")
  (<p! (eos/wait-block (js/Promise.resolve 42) 2))
  (<p! (eos/transact prop-acc "addvote" {:voter token-acc :prop_id 0 :vote_type 1} [{:actor token-acc :permission "active"}])
       "multiple accounts can vote")
  (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))
        r (->> rows (filter #(= (% "id") 0)) first)]
    (is (= (get-in r ["vote_counts" 0 "value"]) 0))
    (is (= (get-in r ["vote_counts" 1 "value"]) 2))
    (is (= (get-in r ["vote_counts" 2 "value"]) 5)))
  (<p! (eos/wait-block (js/Promise.resolve 42) 2))
  (<p! (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 1 :vote_type 1})
       "multiple accounts can vote")
  (<p! (eos/transact dao-acc "newmemterms" {:hash "ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5246"}))
  (<p-should-fail-with!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 1 :vote_type 3})
   "needs latest terms accepted"
   "agreed terms are not the latest")
  (<p! (eos/transact dao-acc "memberreg"
                     {:account acc-2 :agreedterms "ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5246"}
                     [{:actor acc-2 :permission "active"}])))

(async-deftest process-cycle
  (<p-should-fail-with!
   (eos-tx-owner prop-acc "processcycle" {:account owner-acc :id 2})
   "cycle needs to be in the past"
   "cycle is not in the past")
  (<p! (eos/transact prop-acc "update" (assoc prop-config :cycle_duration_sec 1)))
  (<p! (eos/transact prop-acc "cycleupdate" {}))
  (<p-should-succeed! (eos-tx-owner prop-acc "processcycle" {:account owner-acc :id 2})
                      "can finalize cycle"))

(async-deftest execute-proposal
  (<p-should-succeed! (eos/transact prop-acc "executeprop" {:id 1})
                      "can execute proposal")
  (let [rows (<p! (eos/get-table-rows token-acc acc-2 "accounts"))]
    (is (= (-> rows first (get "balance")) "400.0000 EFX")
        "executed proposal gets paid"))
  (<p! (wait 500))
  (<p-should-fail-with! (eos/transact prop-acc "executeprop" {:id 1})
                        "can't execute proposal twice"
                        "proposal is not accepted")
  (<p-should-fail-with! (eos/transact prop-acc "executeprop" {:id 0})
                        "can't execute rejected proposal"
                        "proposal is not accepted"))

(async-deftest reject-proposal
  (<p! (eos/transact token-acc "issue" {:to acc-2 :quantity proposal-cost :memo ""}))
  (<p! (eos/transact token-acc "transfer"
                     {:from acc-2 :to prop-acc
                      :quantity proposal-cost :memo "proposal"}
                     [{:actor acc-2 :permission "active"}]))
  (<p! (eos/transact prop-acc "createprop" (assoc base-prop :content_hash "cc" :author acc-2 :cycle 4)
                     [{:actor acc-2 :permission "active"}]))
  (<p-should-fail-with! (eos-tx-owner prop-acc "hgrejectprop" {:id 2})
                        "needs self signature"
                        (str "missing authority of " prop-acc))
  (<p! (eos/transact prop-acc "cycleupdate" {}))
  (<p! (change-voting-duration (inc 9e6) 9e6))
  (<p-should-fail-with! (eos/transact prop-acc "hgrejectprop" {:id 2})
                        "voting period must have passed"
                        "voting period not ended")
  (<p! (change-voting-duration 1 0))
  (<p-should-succeed! (eos/transact prop-acc "hgrejectprop" {:id 2})))

(defn -main [& args]
  (run-tests))
