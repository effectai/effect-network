(ns e2e.feepool
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [should-fail should-fail-with]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go <!] ]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                                       <p-should-fail-with! <p-may-fail!]]
            e2e.token
            e2e.dao
            e2e.stake
            e2e.proposals))


(def owner-acc e2e.token/owner-acc)
(def fee-acc (eos/random-account "fee"))
(def prop-acc (eos/random-account "prop"))

(defn eos-tx-owner [contr action args]
  (eos/transact contr action args [{:actor owner-acc :permission "active"}]))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p! (eos/create-account owner-acc fee-acc))
          (<! (e2e.proposals/deploy-proposals prop-acc))
          (<p! (eos/deploy fee-acc "contracts/feepool/feepool"))
          (done)
          (catch js/Error e (prn "Error " e))))))
   :after (fn [])})

(deftest init
  (async
   done
   (go
     (try
       (<p-should-succeed!
        (eos/transact fee-acc "init" {:proposal_contract prop-acc})
        "can init")
       (let [rows (<p! (eos/get-table-rows prop-acc prop-acc "config"))]
         (is (= (count rows) 1)))
       (done)
       (catch js/Error e (prn "Error" e))))))

(defn -main [& args]
  (try
    (run-tests)
    (catch js/Error e (prn "Error " e))))
