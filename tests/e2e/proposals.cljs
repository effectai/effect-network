(ns e2e.proposals
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [should-fail should-fail-with]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go] ]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                                       <p-should-fail-with!]]
            e2e.token
            e2e.dao))

(def owner-acc e2e.token/owner-acc)
(def token-acc (eos/random-account "tkn"))
(def prop-acc (eos/random-account "prop"))
(def dao-acc e2e.dao/dao-acc)
(println "prop acc = " prop-acc)
(println "token acc = " token-acc)
(def first-cycle-start-time  1608292800) ; 12/18/2020 @ 12:00pm (UTC)
(def proposal-cost "1.0000 EFX")

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go (<p! (eos/create-account owner-acc prop-acc))
          (<p! (eos/deploy prop-acc "contracts/effect-proposals/effect-proposals"))
          (e2e.token/deploy-token token-acc [owner-acc])
          (e2e.dao/deploy-dao dao-acc [owner-acc])
          (done))))
   :after (fn [])})

(deftest init
  (async
   done
   (go
     (<p-should-fail-with!
      (eos/transact prop-acc "update"
                    {:cycle_duration_sec 10 :quorum 2
                     :proposal_cost {:quantity proposal-cost :contract token-acc}})
      "need init to update"
      "not yet initialized")
     (<p-should-succeed!
      (eos/transact prop-acc "init"
                    {:cycle_duration_sec 10
                     :proposal_cost {:quantity proposal-cost :contract token-acc}
                     :quorum 2
                     :first_cycle_start_time "2020-12-18 12:00:00"
                     :dao_contract dao-acc})
      "can init")
     (<p-should-succeed!
      (eos/transact prop-acc "update"
                    {:cycle_duration_sec 10 :quorum 2
                     :proposal_cost {:quantity "0.0000 EFX" :contract token-acc}
                     })
      "can update after init")
     (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
       (is (= (count rows) 1)))
     (done))))

(def base-prop
  {:author owner-acc
   :pay [{:field_0 {:quantity "400.0000 EFX" :contract token-acc}
          :field_1 "2010-01-12"}]
   :content_hash "aa" :category 0 :cycle 0 :transaction_hash nil})

(deftest new-proposal
  (async
   done
   (go
     (try
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
       (catch js/Error e (prn e)))
     (done))))

(deftest proposal-payment
  (async
   done
   (go
     (try
       (<p! (eos/transact prop-acc "update"
                          {:cycle_duration_sec 10 :quorum 1
                           :proposal_cost {:quantity proposal-cost :contract token-acc}}))
       ;; note: change the content_hash to avoid duplicate transactions
       (<p-should-fail-with!
        (eos/transact prop-acc "createprop" (assoc base-prop :content_hash "ee")
                      [{:actor owner-acc :permission "active"}])
        "need a reservation"
        "no proposal reserved")
       (<p! (eos/transact token-acc "transfer"
                          {:from owner-acc :to prop-acc
                           :quantity proposal-cost :memo "proposal"}
                          [{:actor owner-acc :permission "active"}]))
       (<p-should-succeed!
        (eos/transact prop-acc "createprop" (assoc base-prop :content_hash "bb")
                      [{:actor owner-acc :permission "active"}])
        "can make a paid proposal after reservation")
       (catch js/Error e  (prn e)))
     (done))))

(defn -main [& args]
    (run-tests))
