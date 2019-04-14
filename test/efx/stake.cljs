(ns efx.stake
  (:require
   [eos-deploys.core :as eos]
   efx.token
   [efx.util :as util]
   ["@cityofzion/neon-js" :refer [rpc tx] :as Neon]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
   ))

(def stake-acc (eos/random-account "stk"))
(def token-acc efx.token/account)
(def owner-acc efx.token/owner-acc)

(def sym "STK")
(def total-amount "15000000.0000")
(def total-supply (str total-amount " " sym))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (->
       (eos/create-account owner-acc stake-acc)
       (.catch prn)
       (.then #(println (str "> Created STAKE account " stake-acc)))
       eos/wait-block
       (.then #(eos/deploy stake-acc "contracts/stake/stake"))
       (.catch prn)
       (.then #(eos/update-auth stake-acc "active"
                                [{:permission {:actor token-acc :permission "eosio.code"}
                                  :weight 1}]))
       eos/wait-block
       (.then #(eos/transact token-acc "create"
                             {:issuer stake-acc :maximum_supply total-supply}))
       eos/wait-block
       (.then #(eos/transact token-acc "issue" {:to owner-acc :quantity (str "500.0000 " sym) :memo "hi"}
                             [{:actor stake-acc :permission "owner"}]))
       (.catch prn)
       (.then done))))
   :after (fn [])})

(def init-config {:token_contract token-acc :stake_symbol sym :claim_symbol sym})

(deftest initialize
  (async
   done
   (->
    ;; needs stake account authority
    (eos/transact stake-acc "init" init-config
                  [{:actor owner-acc :permission "active"}])
    (util/should-fail-with (str "missing authority of " stake-acc)
                           "only stake account can init")
    ;; can set config
    (.then #(eos/transact stake-acc "init" init-config
                          [{:actor stake-acc :permission "owner"}]))
    (util/should-succeed "can perform init")
    (.then #(eos/get-table-rows stake-acc stake-acc "config"))
    (.then #(is (= (vals (first %)) (vals init-config)) "config incorrect"))
    eos/wait-block
    ;; cant set config twice
    (.then #(eos/transact stake-acc "init" init-config
                          [{:actor stake-acc :permission "owner"}]))
    (util/should-fail-with "already initialized"
                           "can only initialize once")
    (.then done))))

(deftest stake
  (async
   done
   (->
    ;; perform stake
    (eos/transact token-acc "transfer"
                  {:from owner-acc :to stake-acc :quantity (str "1.0000 " sym) :memo "stake"}
                  [{:actor owner-acc :permission "active"}])
    util/should-succeed
    ;; needs specific memo
    (.then #(eos/transact token-acc "transfer"
                         {:from owner-acc :to stake-acc :quantity (str "1.0000 " sym) :memo ""}
                         [{:actor owner-acc :permission "active"}]))
    (util/should-fail-with "only stake transactions are accepted" "needs stake memo")
    (.then done))))

(deftest claim
  (async
   done
   (->
    ;; stake needs age to claim
    (eos/transact stake-acc "claim" {:owner owner-acc :token sym}
                  [{:actor owner-acc :permission "active"}])
    (util/should-fail-with "stake too young to claim" "stakes needs some age to claim")
    ;; can claim after 10 blocks
    (eos/wait-block 10)
    (.then #(eos/transact stake-acc "claim" {:owner owner-acc :token sym}
                          [{:actor owner-acc :permission "active"}]))
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then (fn [[{claim_age "last_claim_age"}]]
             (is (and (> claim_age 3) (< claim_age 7)) "stake should have age after claim")))
    (.then prn)
    (.catch prn)
    (.then done))))
