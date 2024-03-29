(ns e2e.stake
  (:require
   [eos-cljs.core :as eos]
   [eos-cljs.node-api :refer [deploy-file]]
   e2e.token
   [e2e.util :as util :refer [p-all wait]]
   ["@cityofzion/neon-js" :refer [rpc tx] :as Neon]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])
   [clojure.core.async.interop :refer [<p!]]
   [clojure.core.async :refer [go]]
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
   [e2e.macros :refer-macros [async-deftest <p-should-succeed! <p-should-fail-with!
                              <p-may-fail!]]
   ))

(def stake-acc (eos/random-account "stk"))
(def token-acc e2e.token/account)
(def owner-acc e2e.token/owner-acc)
(def intercept-acc "breekean2222")
(def intercept-to-acc "theeffectdao")
(def tkn-acc (eos/random-account "zbc"))   ; second token contract

(def sym "STK")
(def sym-f "4,STK")
(def claim-sym "CLM")
(def total-amount "15000000.0000")
(def total-supply (str total-amount " " sym))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (<p! (p-all
              (eos/create-account owner-acc stake-acc)
              (eos/create-account owner-acc tkn-acc)
              (eos/create-account owner-acc intercept-acc)
              (eos/create-account owner-acc intercept-to-acc)
              (eos/create-account owner-acc token-acc)))
        (println (str
                  "> Owner acc " owner-acc
                  "\n> Created STAKE account " stake-acc
                  "\n> Created TOKEN account " token-acc))
        (<p! (p-all
              (deploy-file stake-acc "contracts/stake/stake")
              (deploy-file tkn-acc "contracts/token/token")
              (deploy-file token-acc "contracts/token/token")))
        (<p! (p-all
              (eos/update-auth stake-acc "active"
                               [{:permission {:actor token-acc :permission "eosio.code"}
                                 :weight 1}
                                {:permission {:actor stake-acc :permission "eosio.code"}
                                 :weight 1}
                                {:permission {:actor tkn-acc :permission "eosio.code"}
                                 :weight 1}])
              (eos/transact token-acc "create"
                            {:issuer stake-acc :maximum_supply total-supply})
              (eos/transact token-acc "create"
                            {:issuer stake-acc :maximum_supply (str "1000.0000 " claim-sym)})
              (eos/transact tkn-acc "create"
                            {:issuer stake-acc :maximum_supply total-supply})))
        (<p! (p-all
              (eos/transact token-acc "issue"
                            {:to owner-acc :quantity (str "500.0000 " sym) :memo "hi"}
                            [{:actor stake-acc :permission "owner"}])
              (eos/transact token-acc "issue"
                            {:to owner-acc :quantity (str "100.0000 " claim-sym) :memo "hi"}
                            [{:actor stake-acc :permission "owner"}])
              (eos/transact tkn-acc "issue"
                            {:to owner-acc :quantity (str "500.0000 " sym) :memo "hi"}
                            [{:actor stake-acc :permission "owner"}])))
        (done))))
   :after (fn [])})

(def init-config {:token_contract token-acc :stake_symbol (str "4," sym)
                  :claim_symbol (str "4," claim-sym) :age_limit 65
                  :scale_factor (*  1000000 1) :unstake_delay_sec 2
                  :stake_bonus_age 60
                  :stake_bonus_deadline "2050-05-18T14:37:30"})

(defn deploy-stake
  "Deploy a basic stake account and fill it with data for testing"
  ([acc token-acc stake-sym claim-sym members]
   (go (<p! (eos/create-account owner-acc acc))
       (<p! (deploy-file acc "contracts/stake/stake"))
       (<p! (eos/transact acc "init" (assoc init-config :token_contract token-acc
                                            :stake_symbol stake-sym
                                            :claim_symbol claim-sym)))
       (try
         (<p! (eos/transact acc "create"
                            {:stake_symbol claim-sym :claim_symbol claim-sym
                             :token_contract token-acc :unstake_delay_sec 2}
                            [{:actor acc :permission "owner"}]))
         (<p! (eos/transact acc "create"
                            {:stake_symbol stake-sym :claim_symbol stake-sym
                             :token_contract token-acc :unstake_delay_sec 2}
                            [{:actor acc :permission "owner"}]))
         (catch js/Error e (prn e)))
       (doseq [[m efx nfx] members]
         (try
           (<p! (eos/transact acc "open" {:owner m :ram_payer m :symbol stake-sym}
                              [{:actor m :permission "active"}]))
           (<p! (eos/transact acc "open" {:owner m :ram_payer m :symbol claim-sym}
                              [{:actor m :permission "active"}]))
           (<p! (eos/transact token-acc "transfer"
                              {:from m :to acc :quantity efx  :memo "stake"}
                              [{:actor m :permission "active"}]))
           (<p! (eos/transact token-acc "transfer"
                              {:from m :to acc :quantity nfx :memo "stake"}
                              [{:actor m :permission "active"}]))
           (catch js/Error e (prn e)))))))

(def update-config (select-keys init-config [:unstake_delay_sec :stake_bonus_age
                                             :stake_bonus_deadline]))

(deftest update-bofore-init
  (async
   done
   (->
    ;; needs swap account authority
    (eos/transact stake-acc "update" update-config
                  [{:actor tkn-acc :permission "active"}])
    (util/should-fail-with (str "missing authority of " stake-acc)
                           "only stake account can update")
    ;; cant update before init
    (.then #(eos/transact stake-acc "update" update-config
                          [{:actor stake-acc :permission "owner"}]))
    (util/should-fail-with "not initialized"
                           "cant call update before init")
    (.then done))))

(deftest initialize
  (async
   done
   (->
    ;; needs stake account authority
    (eos/transact stake-acc "init" init-config
                  [{:actor owner-acc :permission "active"}])
    (util/should-fail-with (str "missing authority of " stake-acc)
                           "only stake account can init")
    ;; cant init with invalid name
    (.then #(eos/transact stake-acc "init" (assoc  init-config :token_contract "noaccount")
                            [{:actor stake-acc :permission "owner"}]))
    (util/should-fail-with "token contract does not exsist")
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

(deftest update-after-init
  (async
   done
   (let [new-update-config (update-in update-config [:stake_bonus_age] inc)
         new-config (update-in init-config [:stake_bonus_age] inc)]
     (->
      ;; can perform update
      (eos/transact stake-acc "update" new-update-config
                    [{:actor stake-acc :permission "owner"}])
      (util/should-succeed "can perform update")
      (.then #(eos/get-table-rows stake-acc stake-acc "config"))
      ;; compare
      (.then #(do
                (is (not (= (vals (first %)) (vals init-config))) "config incorrect")
                (is (= (vals (first %)) (vals new-config)) "config incorrect")))
      (.then done)))))

(def owner-perm [{:actor owner-acc :permission "active"}])

(defn stake-tx [from quantity perm]
  (eos/transact token-acc "transfer"
                {:from owner-acc :to stake-acc :quantity quantity :memo "stake"}
                perm))

(deftest create
  (async
   done
   (go
     ;; only owner can create stake token
     (<p! (util/should-fail-with
           (eos/transact stake-acc "create"
                         {:stake_symbol (str "4," sym) :claim_symbol (str "4," claim-sym)
                          :token_contract token-acc :unstake_delay_sec 2}
                         [{:actor owner-acc :permission "owner"}])
           (str "missing authority of " stake-acc)))
     (<p! (util/should-succeed
           (eos/transact stake-acc "create"
                         {:stake_symbol (str "4," sym) :claim_symbol (str "4," claim-sym)
                          :token_contract token-acc :unstake_delay_sec 2}
                         [{:actor stake-acc :permission "owner"}])
           "can create first token"))

     ;; stat table is filled correctly
     (<p! (util/wait 500))
     (let [[row & rest] (<p! (eos/get-table-rows stake-acc sym "stat"))]
       (is (empty? rest))
       (is (= (row "stake_symbol") (str "4," sym)))
       (is (= (row "claim_symbol") (str "4," claim-sym)))
       (is (= (row "token_contract") token-acc)))

     (done))))

(deftest stake
  (async
   done
   (let [stk-amount (str "100.0000 " sym)]
     (->
      ;; needs open stake entry
      (stake-tx owner-acc stk-amount owner-perm)
      (util/should-fail-with "you must open a stake before staking")
      ;; can perform a stake
      (.then
       #(eos/transact [{:account stake-acc :name "open"
                        :authorization owner-perm
                        :data {:owner owner-acc :ram_payer owner-acc :symbol sym-f}}
                       {:account token-acc :name "transfer"
                        :authorization owner-perm
                        :data {:from owner-acc :to stake-acc :quantity stk-amount
                               :memo "stake"}}]))
      (util/should-succeed "can perform a stake")
      ;; needs specific memo
      (.then #(eos/transact token-acc "transfer"
                            {:from owner-acc :to stake-acc :quantity (str "1.0000 " sym) :memo ""}
                            [{:actor owner-acc :permission "active"}]))
      (util/should-fail-with "only stake transactions are accepted")
      ;; unkown assets get transferred without adding stake
      (.then #(eos/transact token-acc "transfer"
                            {:from owner-acc :to stake-acc :quantity (str "2.0000 " claim-sym) :memo "stake"}
                            [{:actor owner-acc :permission "active"}]))
      (util/should-succeed "unkown assets can be sent")
      ;; cant stake from a different token contract
      ;; the transfer is allowed, but shouldnt affect stake
      (.then
       #(eos/transact tkn-acc "transfer"
                      {:from owner-acc :to stake-acc :quantity stk-amount :memo "stake"}
                      [{:actor owner-acc :permission "active"}]))
      (util/should-succeed "can transfer from different account")
      (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
      (.then #(is (= (get-in % [0 "amount"]) stk-amount)
                  "cant stake from different account"))
      (eos/wait-block 3)
      (.then done)))))

(defn doclaim
  [] (eos/transact stake-acc "claim" {:owner owner-acc :symbol sym-f} owner-perm))

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
    (eos/wait-block 3)
    (.then doclaim)
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then (fn [[{claim_age "last_claim_age"}]]
             (is (<= claim_age (:age_limit init-config)) "token age is increasing")))
    (.then done))))

(deftest unstake
  (async
   done
   (->
    (eos/transact stake-acc "refund" {:owner owner-acc :symbol sym-f} owner-perm)
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
    ;; (.catch #(do (util/pprint-json % ) (throw %)))
    (util/should-fail-with "not enough staked")
    ;; refund fails
    (.then #(eos/transact stake-acc "refund" {:owner owner-acc :symbol sym-f} owner-perm))
    (util/should-fail-with "unstake is still pending")
    ;; deferred should be created and executed
    (.then eos/get-scheduled-txs)
    (.then #(is (not (empty? (:transactions %)))))
    (eos/wait-block 5)
    (.then eos/get-scheduled-txs)
    (.then #(is (empty? (:transactions %))))
    (.then #(eos/get-table-rows token-acc owner-acc "accounts"))
    (.then #(is (= (get-in % [0 "balance"]) (str "401.0000 " sym))
                "stake refund is correct"))
    (.then #(eos/get-table-rows stake-acc owner-acc "unstake"))
    (.then #(is (= (empty? %)) "unstake table is empty"))
    ;; test refund action when deferred fails?
    ;; (.then #(eos/transact stake-acc "refund" {:owner owner-acc} owner-perm))
    (.then done))))

(deftest dilute
  (async
   done
   (->
    ;; claim is mandatory to dilute
    (eos/transact token-acc "transfer"
                  {:from owner-acc :to stake-acc :quantity (str "100.0000 " sym) :memo "stake"}
                  owner-perm)
    (util/should-fail-with "you must claim before you can top-up a stake")
    ;; fetch current stake info for comparison
    (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
    (.then
     (fn [[{amount "amount" last-age "last_claim_age" :as pp}]]
       (->
        ;; can dilute when combined with claim
        (eos/transact [{:account stake-acc :name "claim"
                        :authorization owner-perm
                        :data {:owner owner-acc :symbol sym-f}}
                       {:account token-acc :name "transfer"
                        :authorization owner-perm
                        :data {:from owner-acc :to stake-acc
                               :quantity (str "100.0000 " sym) :memo "stake"}}])
        (.then #(eos/get-table-rows stake-acc owner-acc "stake"))
        (.then (fn [[{amount "amount" new-age "last_claim_age"}]]
                 (is (> last-age new-age) "age has diluted")
                 (is (= amount (str "199.0000 " sym)) "stake is added")))
        (.then done)))))))

;; Test the smart contract with a scenario of a multitude of tokens with large
;; stakes.
(deftest multi-token-scenario
  (async
   done
   (go
     (let [tokens [["AFX" "200.0000" 1] ["BFX" "650000000.0000" 5]
                   ["CFX" "10200000000.0000" 10] ["DFX" "382829842.0000" nil]]]
       ;; create the tokens and issue full supply
       (<p! (apply
             util/p-all
             (for [[t supply & _] tokens]
               (let [max-supply (str supply " " t)]
                 (eos/transact [{:account token-acc :name "create"
                                 :data {:issuer owner-acc :maximum_supply max-supply}
                                 :authorization [{:actor token-acc :permission "owner"}]}
                                {:account token-acc :name "issue"
                                 :data {:to owner-acc :quantity (str supply " " t) :memo ""}
                                 :authorization [{:actor owner-acc :permission "active"}]}])))))

       ;; enable the first 3 for staking
       (<p! (apply util/p-all
                   (for [[t _ unstake-delay] (take 3 tokens)]
                     (let [sym (str "4," t)]
                       (eos/transact
                        [{:account stake-acc :name "create"
                          :data {:stake_symbol sym :claim_symbol sym
                                 :token_contract token-acc
                                 :unstake_delay_sec unstake-delay}
                          :authorization [{:actor stake-acc :permission "owner"}]}
                         {:account stake-acc :name "open"
                          :data {:owner owner-acc :symbol sym :ram_payer owner-acc}
                          :authorization [{:actor owner-acc :permission "owner"}]}])))))

       (doseq [[t _ delay] tokens]
         (let [row (<p! (eos/get-table-rows stake-acc t "stat"))]
           (is (= (get-in row [0 "unstake_delay_sec"]) delay)
               "multiple tokens can be created")))

       ;; stake the full supply
       (<p! (apply
             util/p-all
             (for [[t supply & _] tokens]
               (eos/transact token-acc "transfer"
                             {:from owner-acc :to stake-acc
                              :quantity (str supply " " t) :memo "stake"}
                             [{:actor owner-acc :permission "active"}]))))
       (let [rows (<p! (eos/get-table-rows stake-acc owner-acc "stake"))]
         (is (= (count rows) 4) "multiple tokens can be staked")
         (doseq [[t supply _] (take 3 tokens)]
           (let [row (->> rows (filter #(string/ends-with? (% "amount") t)) first)]
             (is (= (get row "amount") (str supply " " t))
                 "the full supply of tokens can be staked")))
         (let [last-row (filter #(string/ends-with? (% "amount") "DFX") rows)]
           (is (empty? last-row) "non-stakeble token can not be staked")))

       ;; non-stakable tokens are transferred to stake contract
       (let [rows (<p! (eos/get-table-rows token-acc stake-acc "accounts"))]
         (let [[t supply _] (last tokens)
               row (->> rows (filter #(string/ends-with? (% "balance") t)) first)]
           (is (= (get row "balance") (str supply " " t))
               "stake contract receives unstakable tokens")))

       ;; unstake all tokens
       (<p! (util/wait 1000))
       (doseq [[t supply _] (take 3 tokens)]
         (<p! (util/should-succeed
               (eos/transact stake-acc "unstake"
                             {:owner owner-acc
                              :quantity (str supply " " t)}
                             [{:actor owner-acc :permission "active"}])
               "can always unstake")))

       ;; refund should now only work for low delay tokens
       (<p! (util/wait 5000))
       (doseq [[t supply delay] (take 3 tokens)]
         (if (<= delay 5)
           (<p! (util/should-succeed
                 (eos/transact stake-acc "refund"
                               {:owner owner-acc
                                :symbol (str "4," t)}
                               [{:actor owner-acc :permission "active"}])
                 "can refund token with low unstake delay"))
           (<p! (util/should-fail-with
                 (eos/transact stake-acc "refund"
                               {:owner owner-acc
                                :symbol (str "4," t)}
                               [{:actor owner-acc :permission "active"}])
                 "unstake is still pending"))))
       (let [rows (<p! (eos/get-table-rows stake-acc owner-acc "unstake"))]
         (= (count rows) 1))

       (done)))))

(def intercept-perm [{:actor intercept-acc :permission "active"}])

(async-deftest refund-intercept
  (let [stake-quan "829000.0000 STK"]
    (<p! (eos/transact [{:account stake-acc :name "open"
                         :authorization intercept-perm
                         :data {:owner intercept-acc :ram_payer intercept-acc :symbol sym-f}}
                        {:account token-acc :name "issue"
                         :authorization [{:actor stake-acc :permission "owner"}]
                         :data {:to intercept-acc :quantity stake-quan :memo ""}}
                        {:account token-acc :name "transfer"
                         :authorization intercept-perm
                         :data {:from intercept-acc :to stake-acc :quantity stake-quan
                                :memo "stake"}}]))
    (<p-should-succeed!
     (eos/transact stake-acc "unstake" {:owner intercept-acc :quantity stake-quan} intercept-perm)
     "blacklisted account can unstake")
    (<p! (wait 2000))
    (<p-may-fail!
     (eos/transact stake-acc "refund" {:owner intercept-acc :symbol sym-f} intercept-perm))
    (let [b1 (-> (<p! (eos/get-table-rows token-acc intercept-acc "accounts"))
                 first (get "balance"))
          b2 (-> (<p! (eos/get-table-rows token-acc intercept-to-acc "accounts"))
                 first (get "balance"))]
      (is (= b1 "0.0000 STK") "stake account gets no refund on an intercept")
      (is (= b2 stake-quan) "dao account receives the refund on an intercept"))))

(defn -main [& args]
  (run-tests))
