(ns efx.token
  (:require
   [eos-deploys.core :as eos]
   [clojure.string :as string]
   [cljs.test :refer [do-report report] :refer-macros [deftest is testing run-tests async use-fixtures]]))

(def owner-acc "jesse")
(def account "efxefxefxefx")
(def sym "EFX")
(def total-amount "650000000.0000")
(def total-supply (str total-amount " " sym))

;; Use fixture to deploy
(use-fixtures :once
  {:before
   (fn []
     (async done (->
                  (eos/create-account owner-acc account)
                  (.catch #(is (string/ends-with? (.-message %) "name is already taken")))
                  (.then eos/wait-block)
                  (.then #(eos/deploy account "contracts/effect-token/src/effect-token"))
                  (.catch #(is (= (.-message %) eos/msg-contract-exist)))
                  (.then done))))
   :after (fn [])})

(deftest create-token
  (async done (->
               (eos/transact account "create" {:issuer account :maximum_supply total-supply})
               (.catch prn)
               (.then eos/wait-block)
               (.then #(eos/get-table-rows account sym "stat"))
               (.then #(let [{max-supply "max_supply" issuer "issuer" supply "supply"} (first %)]
                         (is (= max-supply  total-supply))
                         (is (= issuer account))
                         (is (= supply (str "25.0000 " sym)))))
               (.then done))))
