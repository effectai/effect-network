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

(def tkn-acc (eos/random-account "zbc"))   ; second token contract

(def sym "STK")
(def claim-sym "CLM")
(def total-amount "15000000.0000")
(def total-supply (str total-amount " " sym))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (->
       (eos/create-account owner-acc stake-acc)
       (.then #(eos/create-account owner-acc tkn-acc))
       (.then #(println (str "> Created STAKE account " stake-acc
                             "\n> Created TOKEN account " tkn-acc)))
       eos/wait-block
       eos/wait-block
       (.then #(eos/deploy stake-acc "contracts/stake/stake"))
       (.then #(eos/deploy tkn-acc "contracts/effect-token/src/effect-token"))
       eos/wait-block
       eos/wait-block
       (.then #(eos/update-auth stake-acc "active"
                                [{:permission {:actor token-acc :permission "eosio.code"}
                                  :weight 1}
                                 {:permission {:actor stake-acc :permission "eosio.code"}
                                  :weight 1}
                                 {:permission {:actor tkn-acc :permission "eosio.code"}
                                  :weight 1}]))
       eos/wait-block
       (.then #(eos/transact token-acc "create"
                             {:issuer stake-acc :maximum_supply total-supply}))
       (.then #(eos/transact token-acc "create"
                             {:issuer stake-acc :maximum_supply (str "1000.0000 " claim-sym)}))
       (.then #(eos/transact tkn-acc "create"
                             {:issuer stake-acc :maximum_supply total-supply}))
       eos/wait-block
       (.then
        #(eos/transact token-acc "issue"
                       {:to owner-acc :quantity (str "500.0000 " sym) :memo "hi"}
                       [{:actor stake-acc :permission "owner"}]))
       (.then
        #(eos/transact token-acc "issue"
                       {:to owner-acc :quantity (str "100.0000 " claim-sym) :memo "hi"}
                       [{:actor stake-acc :permission "owner"}]))
       (.then
        #(eos/transact tkn-acc "issue"
                       {:to owner-acc :quantity (str "500.0000 " sym) :memo "hi"}
                       [{:actor stake-acc :permission "owner"}]))
       (.catch prn)
       (.then done))))
   :after (fn [])})

(def init-config {:token_contract token-acc :stake_symbol sym
                  :claim_symbol claim-sym :age_limit 5 :scale_factor (*  1000000 1)})

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
                  {:from owner-acc :to stake-acc :quantity (str "100.0000 " sym) :memo "stake"}
                  [{:actor owner-acc :permission "active"}])
    (util/should-succeed "can perform a stake")
    ;; needs specific memo
    (.then #(eos/transact token-acc "transfer"
                         {:from owner-acc :to stake-acc :quantity (str "1.0000 " sym) :memo ""}
                         [{:actor owner-acc :permission "active"}]))
    (util/should-fail-with "only stake transactions are accepted")
    ;; needs specific asset
    (.then #(eos/transact token-acc "transfer"
                         {:from owner-acc :to stake-acc :quantity (str "2.0000 " claim-sym) :memo "stake"}
                         [{:actor owner-acc :permission "active"}]))
    (util/should-fail-with "asset cant be staked")
    ;; cant stake from a different token contract
    (.then
     #(eos/transact tkn-acc "transfer"
                    {:from owner-acc :to stake-acc :quantity (str "100.0000 " sym) :memo "stake"}
                    [{:actor owner-acc :permission "active"}]))
    (util/should-fail-with "contract is not allowed to stake")
    (.then done))))

(defn doclaim
  ([] (eos/transact stake-acc "claim" {:owner owner-acc :token sym}
                    [{:actor owner-acc :permission "active"}])))

(deftest claim
  (async
   done
   (->
    ;; stake needs age to claim
    (eos/transact stake-acc "claim" {:owner owner-acc :token sym}
                  [{:actor owner-acc :permission "active"}])
    (util/should-fail-with "nothing to claim" "stakes needs some age to claim")
    ;; check stake age after claims
    (eos/wait-block 4)
    (.then doclaim)
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then (fn [[{claim_age "last_claim_age"}]]
             (is (> claim_age 1) "token age is increasing")))
    (eos/wait-block 4)
    (.then doclaim)
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then (fn [[{claim_age "last_claim_age"}]]
             (is (<= claim_age (:age_limit init-config)) "token age is increasing")))
    (eos/wait-block 4)
    (.then doclaim)
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then (fn [[{claim_age "last_claim_age"}]]
             (is (= claim_age (:age_limit init-config)) "age reaches limit")))
    (.then done))))
