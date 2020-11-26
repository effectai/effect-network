(ns e2e.proposals
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [should-fail should-fail-with]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go] ]
            [cljs.core.async.interop :refer [<p!]]
            [eos-cljs.macros :refer [promise->]]
            e2e.token
            ))

(def owner-acc e2e.token/owner-acc)
(def token-acc (eos/random-account "tkn"))
(def prop-acc (eos/random-account "prop"))
(println "dao acc = " prop-acc)

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go (<p! (eos/create-account owner-acc prop-acc))
          (<p! (eos/deploy prop-acc "contracts/effect-proposals/effect-proposals"))
          (done))))
   :after (fn [])})

(deftest new-proposal
  (async
   done
   (go
     ;; can create proposal
     (try
       (<p! (eos/transact prop-acc "createprop" {:author prop-acc
                                                 :pay {:quantity "400.0000 EFX" :contract token-acc}
                                                 :content_hash "aa"
                                                 :category 0
                                                 :cycle 1
                                                 :deadline "2021-12-12"
                                                 :transaction_hash nil}))
       (catch js/Error e (prn e)))
     (prn "lts go")
     (try
       (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "proposal"))]
         (prn rows)
         )
       (catch js/Error e (prn e)))
     
     (done))))


(defn -main [& args]
    (run-tests))
