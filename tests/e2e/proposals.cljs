(ns e2e.proposals
  (:require [eos-cljs.core :as eos]
            [eosjs :refer [Api JsonRpc RpcError Serialize]]
            [goog.string :as gstring]
            [clojure.string :as string]
            cljs.reader
            [eos-cljs.node-api :refer [deploy-file]]
            [e2e.util :as util :refer [p-all wait]]
            [cljs.test :refer-macros [deftest is testing run-tests async
                                      use-fixtures]]
            [cljs.core.async :refer [go <!] ]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                                       <p-should-fail-with! <p-may-fail!
                                       async-deftest]]
            e2e.token
            e2e.dao
            e2e.stake))

(def owner-acc e2e.token/owner-acc)
(def acc-2 (eos/random-account "acc"))
(def acc-3 (eos/random-account "acc"))
(def token-acc (eos/random-account "tkn"))
(def prop-acc (eos/random-account "prop"))
(def stake-acc (eos/random-account "stk"))
(def dao-acc e2e.dao/dao-acc)

(println "prop acc = " prop-acc)
(println "acc-2 = " acc-2)
(println "acc-3 = " acc-3)
(println "token acc = " token-acc)
(println "stake acc = " stake-acc)

(def cycle-duration-sec 1209600)
(def cycle-start-date (js/Date. (- (.valueOf (js/Date.)) (* cycle-duration-sec 1e3))))
(def proposal-cost "1.0000 EFX")


(defn make-time-string-after
  "Time in EOS format (2022-12-29T13:31:47.000) `delta-sec` from now."
  [delta-sec] (js/Date. (+ (.valueOf (js/Date.)) (* delta-sec 1e3))))
(defn make-time-string [] (make-time-string-after 0))

(def hash1 "ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5246")

(defn eos-tx-owner [contr action args]
  (eos/transact contr action args [{:actor owner-acc :permission "active"}]))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p! (p-all (eos/create-account owner-acc prop-acc)
                      (eos/create-account owner-acc acc-3)
                      (eos/create-account owner-acc acc-2)
                      (eos/create-account owner-acc "treasury.efx")
                      (eos/create-account owner-acc "feepool.efx")))

          (<p! (eos/update-auth
                prop-acc "dao" "active"
                [{:permission {:actor prop-acc :permission "eosio.code"} :weight 1}]))

          (<p! (deploy-file prop-acc "contracts/proposals/proposals"))

          ;; deploy eosio.msig as privileged
          (<p-may-fail! (eos/create-account owner-acc "eosio.msig"))
          (<p-may-fail! (deploy-file "eosio.msig" "tests/eosio.msig"))

          (<! (e2e.token/deploy-token token-acc [owner-acc token-acc prop-acc]))
          (<! (e2e.stake/deploy-stake
               stake-acc token-acc "4,EFX" "4,NFX"
               [[owner-acc "1056569.0000 EFX" "37276.0000 NFX"]
                [token-acc "606645.0000 EFX" "24042.0000 NFX"]]))
          (<! (e2e.dao/deploy-dao dao-acc stake-acc prop-acc token-acc
                                  "4,EFX" "4,NFX" [owner-acc token-acc acc-2]))

          ;; proposal needs a dao permission that can make token transactions
          (<p! (eos/transact "eosio" "linkauth"
                             {:account     prop-acc
                              :requirement "dao"
                              :code        token-acc
                              :type        "transfer"}
                             [{:actor prop-acc :permission "active"}]))
          (<p! (eos/transact "eosio" "linkauth"
                             {:account     prop-acc
                              :requirement "dao"
                              :code        "eosio.msig"
                              :type        "propose"}
                             [{:actor prop-acc :permission "active"}]))
          (<p! (eos/transact "eosio" "linkauth"
                             {:account     prop-acc
                              :requirement "dao"
                              :code        "eosio.msig"
                              :type        "approve"}
                             [{:actor prop-acc :permission "active"}]))
          (catch js/Error e (prn e)))
        (done))))
   :after (fn [])})

(def prop-config {:cycle_duration_sec cycle-duration-sec
                  :quorum 4
                  :cycle_voting_duration_sec 0
                  :proposal_cost {:quantity proposal-cost :contract token-acc}
                  :dao_contract dao-acc
                  :current_cycle nil
                  :first_cycle_start_time (.toLocaleDateString cycle-start-date "en-US")})

(defn deploy-proposals
  "Deploy a basic proposal account and fill it with data for testing"
  ([acc]
   (go
     (try
       (<p! (eos/create-account owner-acc acc))
       (<p! (deploy-file acc "contracts/proposals/proposals"))
       (<p! (eos/transact acc "init" prop-config))
       (print "Deployed proposals")
       (catch js/Error e "Error deploying props " e)))))

;;;;;;;;;;
;; Init
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
                 (-> prop-config
                     (assoc-in [:proposal_cost :quantity] "0.0000 EFX")))
   "can update after init")

  (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
    (is (= (count rows) 1))))

(def base-prop
  {:author       owner-acc
   :pay          [{:field_0 {:quantity "400.0000 EFX" :contract token-acc}
                   :field_1 "2010-01-12"}]
   :content_hash "aa"
   :category     0
   :cycle        0
   :msig         nil})

;;;;;;;;;;
;; Proposal payments
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

(async-deftest update-proposal
  (<p-should-succeed! (eos/transact prop-acc "updateprop"
                                    (assoc base-prop :id 0 :cycle 2)
                                    [{:actor owner-acc :permission "active"}])
                      "can update proposal")

  (<p-should-succeed! (eos/transact prop-acc "updateprop"
                                    (assoc base-prop :id 1 :cycle 2)
                                    [{:actor acc-2 :permission "active"}])
                      "can update proposal"))

(defn- change-voting-duration
  "Helper function to change the cycle and voting duration config.
  This config is convenient to change during testing."
  [cd vd]
  (eos/transact prop-acc "update"
                (assoc prop-config
                       :cycle_duration_sec cd
                       :cycle_voting_duration_sec vd)))

(defn create-cycle [budget]
  (eos/transact prop-acc "addcycle"
                {:start_time (.toLocaleDateString cycle-start-date "en-US")
                 :budget [{:quantity budget :contract token-acc}]}))

(defn get-config [] (.then (eos/get-table-rows prop-acc prop-acc "config") first))

(async-deftest add-cycle
  (<p-should-succeed! (create-cycle "326000.000 EFX"))
  (<p-should-succeed! (create-cycle "500.1000 EFX"))
  (<p-should-succeed! (create-cycle "326000.2000 EFX"))
  (<p-should-succeed! (create-cycle "326000.3000 EFX"))
  (<p-should-succeed! (create-cycle "326000.4000 EFX"))
  (<p-should-succeed! (create-cycle "326000.5000 EFX"))

  (let [{cycle "current_cycle"} (<p! (get-config))]
    (is (= cycle 0)))

  (<p-should-succeed! (eos/transact prop-acc "cycleupdate" {})
                      "can progress cycle")
  (let [{cycle "current_cycle"} (<p! (get-config))]
    (is (= cycle 1)))

  (<p! (eos/wait-block (js/Promise.resolve 1)) 2)
  (<p-should-succeed! (eos/transact prop-acc "cycleupdate" {})
                      "can progress cycle")
  (let [{cycle "current_cycle"} (<p! (get-config))]
    (is (= cycle 2))))

(async-deftest update-cycle
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
                        (str "missing authority of " prop-acc)))

(async-deftest vote
  ;; needs to be in voting period
  (<p-should-fail-with!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 0 :comment_hash nil})
   "can vote on own proposal"
   "not in voting period")

  (<p! (eos/transact prop-acc "update"
                     (assoc prop-config
                            :cycle_duration_sec (inc 9e6)
                            :cycle_voting_duration_sec 9e6)))

  (<p-should-succeed!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 0 :comment_hash nil})
   "can vote on own proposal")

  (<p-should-succeed!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 1 :comment_hash nil})
   "can update vote")

  (<p-should-succeed!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 1 :comment_hash "h1"})
   "can update vote comment")


  (<p-should-succeed!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 0 :vote_type 2 :comment_hash "h2"})
   "can update vote twice")

  (<p! (eos/wait-block (js/Promise.resolve 42) 2))
  (<p! (eos/transact prop-acc "addvote"
                     {:voter token-acc :prop_id 0 :vote_type 1 :comment_hash nil}
                     [{:actor token-acc :permission "active"}])
       "multiple accounts can vote")

  (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "vote"))]
    (is (= (get-in rows [0 "comment_hash"]) "h2")))

  (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))
        r (->> rows (filter #(= (% "id") 0)) first)]
    (is (= (get-in r ["vote_counts" 0 "second"]) 0))
    (is (= (get-in r ["vote_counts" 1 "second"]) 24042))
    (is (= (get-in r ["vote_counts" 2 "second"]) 37276)))

  (<p! (eos/wait-block (js/Promise.resolve 42) 2))

  (<p! (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 1 :vote_type 1 :comment_hash nil})
       "multiple accounts can vote")

  (<p! (eos/transact dao-acc "newmemterms" {:hash hash1}))
  (<p-should-fail-with!
   (eos-tx-owner prop-acc "addvote" {:voter owner-acc :prop_id 1 :vote_type 3 :comment_hash nil})
   "needs latest terms accepted"
   "agreed terms are not the latest")

  (<p! (eos/transact dao-acc "memberreg"
                     {:account acc-2 :agreedterms hash1}
                     [{:actor acc-2 :permission "active"}]))
  (<p! (eos/transact dao-acc "memberreg"
                     {:account owner-acc :agreedterms hash1}
                     [{:actor owner-acc :permission "active"}])))

(defn efx-quant [n]
  (str (gstring/format "%.4f" n) " EFX"))

(defn parse-efx-amount [asset-str]
  (-> asset-str (string/replace #" EFX$" "") cljs.reader/read-string))

(async-deftest process-cycle
  (let [treasury-rows (<p! (eos/get-table-rows token-acc "treasury.efx" "accounts"))
        treasury-before (or (get-in treasury-rows [0 "balance"]) "0.0000 EFX")
        fees-rows (<p! (eos/get-table-rows token-acc "feepool.efx" "accounts"))
        fees-before (or (get-in fees-rows [0 "balance"]) "0.0000 EFX")]
    (<p-should-fail-with!
     (eos-tx-owner prop-acc "processcycle" {:account owner-acc :id 2})
     "cycle needs to be in the past"
     "cycle is not in the past")
    (<p! (eos/transact prop-acc "update" (assoc prop-config :cycle_duration_sec 1)))
    (<p! (eos/transact prop-acc "cycleupdate" {}))
    (testing "can process cycle"
      (<p-should-succeed! (eos-tx-owner prop-acc "processcycle" {:account owner-acc :id 2})
                          "can finalize cycle")
      (let [treasury-rows (<p! (eos/get-table-rows token-acc "treasury.efx" "accounts"))
            fees-rows (<p! (eos/get-table-rows token-acc "feepool.efx" "accounts"))

            treasury-after (get-in treasury-rows [0 "balance"])
            fees-after (get-in fees-rows [0 "balance"])

            treasury-amount-after (+ (parse-efx-amount treasury-before) (* 100.1 0.7))
            fees-amount-after (+ (parse-efx-amount fees-before) (* 100.1 0.3))]
        (is (= treasury-after (efx-quant treasury-amount-after)))
        (is (= fees-after (efx-quant fees-amount-after)))))))

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

(defn create-prop
  "Helper to issue tokens, reserve, and create a proposal.
  Returns a promose of 1 transaction with 3 actions."
  [creator prop]
  (eos/transact
   [{:account       token-acc
     :name          "issue"
     :authorization [{:actor token-acc :permission "active"}]
     :data          {:to creator :quantity proposal-cost :memo ""}}
    {:account       token-acc
     :name          "transfer"
     :authorization [{:actor creator :permission "active"}]
     :data          {:from creator :to prop-acc :quantity proposal-cost :memo "proposal"}}
    {:account       prop-acc
     :name          "createprop"
     :authorization [{:actor creator :permission "active"}]
     :data          prop}]))

(async-deftest reject-proposal
  (<p! (create-prop acc-2 (assoc base-prop :content_hash "cc" :author acc-2 :cycle 4)))

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

(defn <make-msig-tx
  "Create the transaction object that can be passed to the `trx`
  argument of `eosio.msig` `propose` action.
  Good value for `expire` is `(make-time-string-after 300)`"
  [actions expire]
  (go
    {:expiration             expire
     :ref_block_num          0
     :ref_block_prefix       0
     :max_net_usage_words    0
     :max_cpu_usage_ms       0
     :delay_sec              0
     :context_free_actions   []
     :actions                (<p! (.serializeActions @eos/api (clj->js actions)))
     :transaction_extensions []}))

(defn propose-msig [proposer name actions expire]
  (go
    (eos/transact
     [{:account       "eosio.msig"
       :name          "propose"
       :authorization [{:actor proposer :permission "active"}]
       :data
       {:proposer      proposer
        :proposal_name name
        :requested     [{:actor prop-acc :permission "dao"}]
        :trx           (<! (<make-msig-tx actions expire))}}])))

;; line below is just an example to turn the transaction into serialized hex string:
;; serialized-tx (.toString (js/Buffer.from (.-serializedTransaction raw-tx)) "hex")

(defn get-proposal
  [id]
  (go
    (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))
          id   (if (= id :last) (dec (count rows)) id)]
      (->> rows (filter #(= (% "id") id)) first))))

(async-deftest msig
  (let [actions   [{:account       token-acc
                    :name          "transfer"
                    :authorization [{:actor      prop-acc
                                     :permission "dao"}]
                    :data          {:from     prop-acc
                                    :to       acc-2
                                    :quantity "1.0000 EFX"
                                    :memo     ""}}]
        expire    (make-time-string-after 300)
        msig-name "msigname"
        msig-tx   (<! (propose-msig acc-2 msig-name actions expire))]
    (testing "can create an eosio.msig transaction"
      (<p-should-succeed! msig-tx))

    (testing "can not execute msig before proposal"
      (<p-should-fail-with!
       (eos/transact "eosio.msig" "exec" {:proposer      acc-2
                                          :proposal_name msig-name
                                          :executer      acc-2}
                     [{:actor acc-2 :permission "active"}])
       "" "transaction authorization failed")
      (<p-should-fail-with!
       (eos/transact "eosio.msig" "exec" {:proposer      acc-2
                                          :proposal_name msig-name
                                          :executer      prop-acc}
                     [{:actor prop-acc :permission "active"}])
       "" "transaction authorization failed"))

    (testing "can create msig proposal"
      (<p-should-succeed!
       (create-prop acc-2 (assoc base-prop
                                 :msig msig-name
                                 :author acc-2
                                 :cycle 5)))
      (let [p (<! (get-proposal :last))]
        (is (= (get p "msig") msig-name))))

    ;; start cycle, vote, and end cycle
    (<p! (eos/transact prop-acc "cycleupdate" {}))
    (<p! (change-voting-duration (inc 9e6) 9e6))
    (<p! (eos/transact prop-acc "addvote"
                       {:voter        owner-acc
                        :prop_id      3
                        :vote_type    1
                        :comment_hash nil}
                       [{:actor owner-acc :permission "active"}]))
    (<p! (change-voting-duration 2 1))
    (<p! (wait 500))
    (<p! (eos/transact prop-acc "cycleupdate" {}))
    (<p! (eos-tx-owner prop-acc "processcycle" {:account owner-acc :id 5}))

    ;; replace the msig with a different transaction
    (<p! (eos/transact "eosio.msig" "cancel" {:proposer      acc-2
                                              :proposal_name msig-name
                                              :canceler      acc-2}
                       [{:actor acc-2 :permission "active"}]))

    (testing "can not execute replaced transaction"
      (<p-should-succeed!
       (<! (propose-msig acc-2
                         msig-name
                         (assoc-in actions [0 :data :to] acc-3)
                         expire)))
      (<p-should-fail-with!
       (eos/transact prop-acc "executeprop" {:id 3}) "" "hash mismatch"))

    ;; put back the original transaction
    (<p! (wait 750))
    (<p! (eos/transact "eosio.msig" "cancel" {:proposer      acc-2
                                              :proposal_name msig-name
                                              :canceler      acc-2}
                       [{:actor acc-2 :permission "active"}]))
    (<p! (<! (propose-msig acc-2 msig-name actions expire)))

    (testing "can execute the msig proposal"
      ;; below fails because eosio.msig is not a privileged account in our test environment
      #_(<p-should-succeed!
       (eos/transact prop-acc "executeprop" {:id 3})))))

(defn -main [& args]
  (run-tests))
