(ns e2e.stake
  (:require
   [eos-deploys.core :as eos]
   e2e.token
   [e2e.util :as util]
   ["@cityofzion/neon-js" :refer [rpc tx] :as Neon]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
   ))

(def stake-acc (eos/random-account "stk"))
(def token-acc e2e.token/account)
(def owner-acc e2e.token/owner-acc)

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
       (.then #(eos/deploy tkn-acc "contracts/effect-token/effect-token"))
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

(def init-config {:token_contract token-acc :stake_symbol (str "4," sym)
                  :claim_symbol (str "4," claim-sym) :age_limit 65
                  :scale_factor (*  1000000 1) :unstake_delay_sec 2
                  :stake_bonus_age 60
                  :stake_bonus_deadline "2019-05-18T14:37:30"})

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

(def owner-perm [{:actor owner-acc :permission "active"}])

(deftest stake
  (async
   done
   (->
    ;; needs open stake entry
    (eos/transact token-acc "transfer"
                  {:from owner-acc :to stake-acc :quantity (str "100.0000 " sym) :memo "stake"}
                  owner-perm)
    (util/should-fail-with "you must open a stake before staking")
    (.then
     #(eos/transact [{:account stake-acc :name "open"
                      :authorization owner-perm
                      :data {:owner owner-acc :ram_payer owner-acc}}
                     {:account token-acc :name "transfer"
                      :authorization owner-perm
                      :data {:from owner-acc :to stake-acc :quantity (str "100.0000 " sym)
                             :memo "stake"}}]))
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
    (eos/wait-block 3)
    (.then done))))



(defn doclaim
  [] (eos/transact stake-acc "claim" {:owner owner-acc :token sym} owner-perm))

(deftest claim
  (async
   done
   (->
    ;; check stake age after claims
    (doclaim)
    (util/should-succeed "can claim")
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

(deftest unstake
  (async
   done
   (->
    (eos/transact stake-acc "refund" {:owner owner-acc} owner-perm)
    (util/should-fail-with "no unstake exists")
    ;; can unstake
    (.then #(eos/transact stake-acc "unstake"
                          {:owner owner-acc :quantity (str "1.0000 " sym)}
                          owner-perm))
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then (fn [[{amount "amount"}]]
             (is (= amount (str "99.0000 " sym)) "unstake should decrease stake")))
    ;; cant unstake too much
    (.then #(eos/transact stake-acc "unstake"
                          {:owner owner-acc :quantity (str "101.0000 " sym)} owner-perm))
    (util/should-fail-with "not enough staked")
    ;; refund fails
    (.then #(eos/transact stake-acc "refund" {:owner owner-acc} owner-perm))
    (util/should-fail-with "unstake is still pending")
    ;; refund succeeds
    (eos/wait-block 5)
    (.then #(eos/transact stake-acc "refund" {:owner owner-acc} owner-perm))
    (.then #(eos/get-table-rows token-acc owner-acc "accounts"))
    (.then #(is (= (get-in % [0 "balance"]) (str "401.0000 " sym)) "stake refund is correct"))
    (.then #(eos/get-table-rows stake-acc owner-acc "unstake"))
    (.then #(is (= (empty? %)) "unstake table is empty"))
    (.then done))))

(deftest dilute
  (async
   done
   (->
    ;; claim is mandatory to dilute
    (eos/transact token-acc "transfer"
                  {:from owner-acc :to stake-acc :quantity (str "100.0000 " sym) :memo "stake"}
                  owner-perm)
    (util/should-fail-with "you must claim before diluting your stake")
    ;; fetch current stake info for comparison
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then
     (fn [[{amount "amount" last-age "last_claim_age" :as pp}]]
       (->
        ;; can dilute when combined with claim
        (eos/transact [{:account stake-acc :name "claim"
                        :authorization owner-perm
                        :data {:owner owner-acc :token sym}}
                       {:account token-acc :name "transfer"
                        :authorization owner-perm
                        :data {:from owner-acc :to stake-acc
                               :quantity (str "100.0000 " sym) :memo "stake"}}])
        (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
        (.then (fn [[{amount "amount" new-age "last_claim_age"}]]
                 (is (> last-age new-age) "age has diluted")
                 (is (= amount (str "199.0000 " sym)) "stake is added")))
        (.then done)))))))
