(ns token.test
  (:require
   [eos-deploys.core :as eos]
   [clojure.string :as string]
   [cljs.test :refer [do-report report] :refer-macros [deftest is testing run-tests async use-fixtures]]))

;; (def account "efxefxefxefx")
(def account "jesse")

;; Use fixture to deploy
(use-fixtures :once
  {:before (fn []
             (async
              done
              (-> (eos/deploy account "contracts/effect-token/src/effect-token")
                  (.then prn)
                  (.catch #(is (= (.-message %) eos/msg-contract-exist)))
                  (.then done))))
   :after (fn [])})

(def total-supply "650000000.0000 EFX")

(deftest create-token
  (async
   done
   (->
    (eos/transact account "create" {:issuer account :maximum_supply total-supply})
    (.catch prn)
    (.then eos/wait-block)
    (.then #(eos/get-table-rows account "EFX" "stat"))
    (.then #(let [{max-supply "max_supply" issuer "issuer" supply "supply"} (first %)]
              (is (= max-supply total-supply))
              (is (= issuer account))
              (is (= supply "0.0000 EFX"))))
    (.then done))))

(run-tests)
