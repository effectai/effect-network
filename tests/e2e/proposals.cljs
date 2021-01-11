(ns e2e.proposals
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [should-fail should-fail-with]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go <!] ]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                                       <p-should-fail-with! <p-may-fail!]]
            e2e.token
            e2e.dao
            e2e.stake))

(def owner-acc e2e.token/owner-acc)
(def token-acc (eos/random-account "tkn"))
(def prop-acc (eos/random-account "prop"))
(def stake-acc (eos/random-account "stk"))
(def dao-acc e2e.dao/dao-acc)
(println "prop acc = " prop-acc)
(println "token acc = " token-acc)
(println "stake acc = " stake-acc)
(def first-cycle-start-time  1608292800) ; 12/18/2020 @ 12:00pm (UTC)
(def proposal-cost "1.0000 EFX")

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (<p! (eos/create-account owner-acc prop-acc))
        (<p! (eos/deploy prop-acc "contracts/effect-proposals/effect-proposals"))
        (<! (e2e.token/deploy-token token-acc [owner-acc]))
        (<! (e2e.stake/deploy-stake stake-acc token-acc "4,EFX" "4,NFX" [owner-acc]))
        (<! (e2e.dao/deploy-dao dao-acc stake-acc prop-acc token-acc "4,EFX" "4,NFX" [owner-acc]))
        (done))))
   :after (fn [])})

(def prop-config {:cycle_duration_sec 1209600 :quorum 2
                  :cycle_voting_duration_sec 0
                  :proposal_cost {:quantity proposal-cost :contract token-acc}
                  :dao_contract dao-acc
                  :first_cycle_start_time "2020-11-18 12:00:00"})

(deftest init
  (async
   done
   (go
     (try
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
         (is (= (count rows) 1)))
       (catch js/Error e (prn "======== " e)))
     (done))))

(def base-prop
  {:author owner-acc
   :pay [{:field_0 {:quantity "400.0000 EFX" :contract token-acc}
          :field_1 "2010-01-12"}]
   :content_hash "aa" :category 0 :cycle 0 :transaction_hash nil})

(deftest proposal-payment
  (async
   done
   (go
     (try
       (<p! (eos/transact prop-acc "update" prop-config))
       ;; note: change the content_hash to avoid duplicate transactions
       (<p-should-fail-with!
        (eos/transact prop-acc "createprop" (assoc base-prop :content_hash "ee")
                      [{:actor owner-acc :permission "active"}])
        "need a reservation"
        "no proposal reserved")
       (<p-should-fail-with! (eos/transact token-acc "transfer"
                                           {:from owner-acc :to prop-acc
                                            :quantity "1.5000 EFX" :memo "proposal"}
                                           [{:actor owner-acc :permission "active"}])
                             "needs correct amount"
                             "wrong amount")
       (<p-should-succeed! (eos/transact token-acc "transfer"
                                           {:from owner-acc :to prop-acc
                                            :quantity proposal-cost :memo "proposal"}
                                           [{:actor owner-acc :permission "active"}])
                             "can send correct amount")
       (catch js/Error e  (prn e)))
     (done))))

(deftest new-proposal
  (async
   done
   (go
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
     (<p! (eos/transact token-acc "transfer"
                        {:from owner-acc :to prop-acc
                         :quantity proposal-cost :memo "proposal"}
                        [{:actor owner-acc :permission "active"}])
          "can send correct amount")
     (<p-should-succeed!
      (eos/transact prop-acc "createprop" (assoc base-prop :content_hash "bb")
                    [{:actor owner-acc :permission "active"}])
      "can make a second proposal")
     (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))]
       (is (= (count rows) 2)))
     (done))))

(deftest update-proposal
  (async
   done
   (go
     (<p-should-succeed! (eos/transact prop-acc "updateprop"
                                       (assoc base-prop :id 0 :cycle 1)
                                       [{:actor owner-acc :permission "active"}])
                         "can update proposal")
     (<p-should-succeed! (eos/transact prop-acc "updateprop"
                                       (assoc base-prop :id 1 :cycle 1)
                                       [{:actor owner-acc :permission "active"}])
                         "can update proposal")
     (done))))

(deftest cycle-add
  (async
   done
   (go
     (<p-should-succeed! (eos/transact prop-acc "addcycle"
                                       {:start_time "2021-01-01 12:00:00"
                                        :budget [{:quantity (str "326000.0000 EFX")
                                                  :contract token-acc}]}))
     (let [[{cycle "current_cycle"}] (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
       (is (= cycle 0)))
     (<p-should-succeed! (eos/transact prop-acc "cycleupdate" {})
                         "can progress cycle")
     (let [[{cycle "current_cycle"}] (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
       (is (= cycle 1)))
     (<p! (eos/wait-block (js/Promise.resolve 1)))
     (<p-should-succeed! (eos/transact prop-acc "cycleupdate" {})
                         "can progress cycle")
     (let [[{cycle "current_cycle"}] (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
       (is (= cycle 1)))
     (done))))

(deftest vote
  (async
   done
   (go
     (try
       (do
         ;; needs to be in voting period
         (<p-should-fail-with!
          (eos/transact prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 0} [{:actor owner-acc :permission "active"}])
          "can vote on own proposal"
          "not in voting period")
         (<p! (eos/transact prop-acc "update"
                            (assoc prop-config
                                   :cycle_duration_sec (inc 9e6)
                                   :cycle_voting_duration_sec 9e6)))
         (<p-should-succeed!
          (eos/transact prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 0} [{:actor owner-acc :permission "active"}])
          "can vote on own proposal")
         (<p-should-succeed!
          (eos/transact prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 1} [{:actor owner-acc :permission "active"}])
          "can update vote")
         (<p-should-succeed!
          (eos/transact prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 2} [{:actor owner-acc :permission "active"}])
          "multiple accounts can vote")
         (<p! (eos/wait-block (js/Promise.resolve 42) 2))
         (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))
               r (->> rows (filter #(= (% "id") 0)) first)]
           (prn r)
           (is (= (get-in r ["vote_counts" 0 "value"]) 0))
           (is (= (get-in r ["vote_counts" 1 "value"]) 0))
           (is (= (get-in r ["vote_counts" 2 "value"]) 9)))
         (<p! (eos/wait-block (js/Promise.resolve 42) 2))
         (try
           (<p! (eos/transact dao-acc "newmemterms" {:hash  "ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5245"}))
           (<p-should-fail-with!
            (eos/transact prop-acc "addvote" {:voter owner-acc :prop_id 1 :vote_type 1}
                          [{:actor owner-acc :permission "active"}])
            "needs latest terms acceptee"
            "agreed terms are not the latest")
           (catch js/Error e (prn e))))
       (catch js/Error e (prn e)))
     (done))))

(defn -main [& args]
    (run-tests))
