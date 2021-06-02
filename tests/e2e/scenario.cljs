;;
;; This test sets up a DAO with a stake distribution similar to production.
;;
;; The main test (`scenario-full`) will load a snapshot of user stakes and have
;; every user vote on a variety of proposals. It then checks if the vote counts
;; add up correctly and if fee distribution is correct.
;;

(ns e2e.scenario
  (:require [eos-cljs.core :as eos]
            [eos-cljs.node-api :refer [deploy-file]]
            [e2e.util :as util :refer [p-all wait]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go <!] ]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                                       <p-should-fail-with! <p-may-fail! async-deftest]]
            [clojure.string :as string]
            fs
            e2e.proposals
            e2e.token
            e2e.dao
            e2e.stake))

(def owner "eosio")

(def users (map #(eos/random-account "u") (range 500)))
(prn (take 10 users))

(def terms-hash "1e1fe1b13e6e43d8f9cb3263817b24d7dcf8070a8fcaba3e8ced94ea263dd450")

(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(defn- create-accounts
  "Returns a promise that creates a list of accounts"
  [accs]
  (apply p-all (map #(eos/create-account owner %) accs)))

(def cycle-duration-sec 1209600)
(def cycle-date (- (.valueOf (js/Date.)) 0;(* cycle-duration-sec 1e3)
                   ))
(def day-msec (* 60 60 24 1e3))
(def day-sec  (* 60 60 24))
(def default-stake-age 17280000) ; 200 days

(defn- deploy-contracts
  "This function deployes the DAO stack in fresh accounts.

  It:
  - Creates new acccounts and code
  - Creates EFX and NFX tokens
  - Setup tokens for staking"
  []
  (let [token [(eos/random-account "tkn") "token"]
        stake [(eos/random-account "stk") "stake"]
        dao   [(eos/random-account "dao") "dao"]
        props [(eos/random-account "prp") "proposals"]
        fee   [(eos/random-account "fee") "feepool"]
        accs  [token stake dao props fee]
        names (map first accs)

        stake-config {:token_contract (first token) :stake_symbol "4,EFX"
                      :claim_symbol "4,NFX" :age_limit default-stake-age
                      :scale_factor (* 1000000 1) :unstake_delay_sec 2
                      :stake_bonus_age default-stake-age
                      :stake_bonus_deadline "2022-05-18T14:37:30"}

        dao-config {:stake_contract (first stake) :proposal_contract (first props)
                    :utl_token_sym {:contract (first token) :sym "4,EFX"}
                    :gov_token_sym {:contract (first token) :sym "4,NFX"}}


        props-config {:cycle_duration_sec cycle-duration-sec
                      :quorum 4
                      :cycle_voting_duration_sec (dec cycle-duration-sec)
                      :proposal_cost {:quantity "0.0000 EFX" :contract (first token)}
                      :dao_contract (first dao)
                      :first_cycle_start_time
                      (.toLocaleDateString (js/Date. (- cycle-date (* cycle-duration-sec 1e3)
                                                        (* day-sec 1e3) )) "en-US")}

        add-cycle-fn #(eos/transact (first props) "addcycle"
                                    {:start_time (.toLocaleDateString (js/Date. %) "en-US")
                                     :budget [{:quantity "326000.0000 EFX"
                                               :contract (first token)}]})]
    (go
      (try
        (<p! (create-accounts names))
        (<p! (apply p-all
                    (map
                     (fn [[acc file]]  (deploy-file acc (str "contracts/" file "/" file))) accs)))
        (<p! (p-all
              (eos/transact (first token) "create" {:issuer owner :maximum_supply "650000000.0000 EFX"})
              (eos/transact (first token) "create" {:issuer owner :maximum_supply "120000000.0000 NFX"})
              (eos/transact (first stake) "init" stake-config)))

        (<p! (eos/transact (first dao) "init" dao-config))
        (<p! (eos/transact (first dao) "newmemterms" {:hash terms-hash}))

        (<p! (eos/transact (first props) "init" props-config))

        (<p! (add-cycle-fn (- cycle-date (* day-sec 1e3))))

        (<p! (eos/transact (first stake) "create"
                           {:stake_symbol "4,EFX" :claim_symbol "4,NFX"
                            :token_contract (first token) :unstake_delay_sec 2}))
        (<p! (eos/transact (first stake) "create"
                           {:stake_symbol "4,NFX" :claim_symbol "4,NFX"
                            :token_contract (first token) :unstake_delay_sec 2}))

        (catch js/Error e (prn e)))

      (prn "Created accounts " names)
      names)))

(defn- create-snapshot-accounts
  "Load a snapshot and create the accounts and stake entries

  It also registers them as dao members"
  [token-acc stake-acc dao-acc]
  (let [stake-lines (-> "tests/e2e/stakes.csv" fs/readFileSync .toString
                        (string/split "\n") rest)

        stakes (->> stake-lines
                    (take 50) ; (un)comment to test smaller set of users
                    (map #(string/split % ","))
                    (map (fn [[efx nfx]] [(.toFixed (js/parseFloat efx) 4)
                                         (.toFixed  (js/parseFloat nfx) 4)]))
                    (filter #(not(or (= (first %) "0.0000") (= (second %) "0.0000")))))

        votes (repeatedly (count stakes) #(rand-int 3))

        stake-fn (fn [user amount]
                   (tx-as user token-acc "transfer" {:from user :to stake-acc
                                                     :quantity amount :memo "stake"}))

        users-sel (take (count stakes) users)]
    (println "Creating " (count stakes) " staked accounts")
    (go
      (try
        (doseq [[user [efx nfx]] (zipmap users-sel stakes)]
          (.write js/process.stdout ".")
          (<p-may-fail! (<p! (eos/create-account owner user)))

          (<p! (eos/transact token-acc "issue" {:to user :quantity (str efx " EFX") :memo ""}
                             [{:actor owner :permission "active"}]))
          (<p! (eos/transact token-acc "issue" {:to user :quantity (str nfx " NFX") :memo ""}
                             [{:actor owner :permission "active"}]))

          (<p! (tx-as user stake-acc "open" {:owner user :ram_payer user :symbol "4,EFX"}))
          (<p! (tx-as user stake-acc "open" {:owner user :ram_payer user :symbol "4,NFX"}))

          (<p! (stake-fn user (str efx " EFX")))
          (<p! (stake-fn user (str nfx " NFX")))

          (<p! (tx-as user dao-acc "memberreg" {:account user :agreedterms terms-hash})))

        (map #(into [] %) (partition 3 (interleave users-sel stakes votes)))
        (catch js/Error e (prn e))))))

(defn- create-proposals
  [token-acc props-acc n]
  (let [user (first users)
        base-prop {:author user
                   :pay [{:field_0 {:quantity "400.0000 EFX" :contract token-acc}
                          :field_1 "2010-01-12"}]
                   :content_hash "aa" :category 0 :cycle 1 :transaction_hash nil}]
    (go
      (try
        (doseq [idx (range n)]
          (<p! (tx-as user props-acc "createprop" (assoc base-prop :content_hash (str "p" idx)))))
        (catch js/Error e (prn e))))))


(defn- apply-user-votes [user-stake-vote props-acc prop-id]
  (go
    (try
      (doseq [[user [efx nfx] vote :as qq] user-stake-vote]
        (<p! (tx-as user props-acc "addvote" {:voter user :vote_type vote :prop_id prop-id})))
      (catch js/Error e (prn e)))))

(defn calc-vote-weight [efx nfx age]
  (let [efx-float (js/parseFloat efx)
        nfx-float (js/parseFloat nfx)
        nfx-int (int nfx-float)
        efx-power-float (+ efx-float (* (/ age (* 200 day-sec)) efx-float))
        efx-power (int efx-power-float)
        power-factor (quot efx-power 20)]
    (js/Math.min power-factor nfx-int)))

(async-deftest scenario-full
  (let [[token stake dao props fee] (<! (deploy-contracts))
        user-stake-vote (<! (create-snapshot-accounts token stake dao))
        n-props 5]
    (<! (create-proposals token props n-props))
    (<p! (eos/transact props "cycleupdate" {}))

    (let [prop-rows (<p! (eos/get-table-rows props props "proposal"))]
      ;; first round of voting: every user votes 0
      ;; (doseq [{:strs [id]} prop-rows]
        ;; (<! (apply-user-votes (map #(update % 2 (constantly 0)) user-stake-vote) props id)))

      ;; every user updates to their final vote
      (doseq [{:strs [id]} prop-rows]
        (<! (apply-user-votes user-stake-vote props id))))

    ;; run checks
    (let [vote-weight (for [[user [efx nfx] _] user-stake-vote]
                        [user (calc-vote-weight efx nfx default-stake-age)])
          user-vote-weight (into {} vote-weight)
          total-user-vote-weight (reduce + (vals user-vote-weight))
          prop-rows (<p! (eos/get-table-rows props props "proposal"))
          vote-rows (<p! (eos/get-table-rows props props "vote" {:limit 10000}))
          total-cycle-vote-weight (* total-user-vote-weight n-props)]

      (println "\n\nINFO: total user vote weight = " total-user-vote-weight)
      (println "INFO: total cycle vote weight = " total-cycle-vote-weight)

      ;; check total registered votes
      (let [vote-weight-sum (->> vote-rows (map #(get % "weight")) (reduce +))]
        (is (= vote-weight-sum total-cycle-vote-weight)))

      ;; check each users vote weight
      (doseq [{:strs [voter weight id]} vote-rows]
        (is (= (get user-vote-weight voter) weight) (str "fail for " voter weight id)))

      ;; check the score of each proposal
      (doseq [{:strs [vote_counts] :as g} prop-rows
              votes-0 (->> user-stake-vote (filter #(= (nth % 2) 0)) (reduce #(+ %)))]
        (let [prop-vote-count (->> vote_counts (map #(get % "value")) (reduce +))]
          (is (= prop-vote-count total-user-vote-weight)))))))

(defn -main [& args]
  (try
    (run-tests)
    (catch js/Error e (println e))))
