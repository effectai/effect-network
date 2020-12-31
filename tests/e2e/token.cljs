(ns e2e.token
  (:require
   [eos-cljs.core :as eos]
   [clojure.string :as string]
   [cljs.test :refer [do-report report] :refer-macros [deftest is testing run-tests async use-fixtures]]
   [cljs.core.async :refer [go] ]
   [cljs.core.async.interop :refer [<p!]]))

(def owner-acc "eosio")
(def account (eos/random-account "efx"))
(def sym "EFX")
(def total-amount "650000000.0000")
(def total-supply (str total-amount " " sym))

(defn deploy-token
  "Deploy a token account and issue tokens to `issues`"
  ([acc] (deploy-token acc []))
  ([acc issues]
   (go (<p! (eos/create-account owner-acc acc))
       (<p! (eos/deploy acc "contracts/effect-token/effect-token"))
       (eos/transact acc "create" {:issuer acc :maximum_supply total-supply})
       (eos/transact acc "create" {:issuer acc :maximum_supply "120000000.0000 NFX"})
       (doseq [m issues]
         (<p! (eos/transact acc "issue"
                            {:to m :quantity "300000000.0000 EFX" :memo ""}
                            [{:actor acc :permission "active"}]))
         (<p! (eos/transact acc "issue"
                            {:to m :quantity "1000000.0000 NFX" :memo ""}
                            [{:actor acc :permission "active"}]))))))

;; Use fixture to deploy
(use-fixtures :once
  {:before
   (fn []
     (async done (->
                  (eos/create-account owner-acc account)
                  (.then #(println (str "> Created TOKEN account " account)))
                  ;; (.catch #(is (string/ends-with? (.-message %) "name is already taken")))
                  eos/wait-block
                  (.then #(eos/deploy account "contracts/effect-token/effect-token"))
                  ;; (.catch #(is (= (.-message %) eos/msg-contract-exist)))
                  (.then done))))
   :after (fn [])})

(deftest create-token
  (async done (->
               (eos/transact account "create" {:issuer owner-acc :maximum_supply total-supply})
               (.catch prn)
               eos/wait-block
               (.then #(eos/get-table-rows account sym "stat"))
               (.then #(let [{max-supply "max_supply" issuer "issuer" supply "supply"} (first %)]
                         (is (= max-supply  total-supply))
                         (is (= issuer owner-acc))
                         (is (= supply (str "0.0000 " sym)))))
               (.then done))))

(defn -main []
  (run-tests))
