(ns e2e.feepool
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [wait]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go <!]]
            [cljs.core.async.interop :refer [<p!]]
            [e2e.macros
             :refer-macros
             [<p-should-fail!
              <p-should-succeed!
              <p-should-fail-with!
              <p-may-fail!]]
            e2e.token
            e2e.dao
            e2e.stake
            e2e.proposals))


(def owner-acc e2e.token/owner-acc)
(def token-acc e2e.proposals/token-acc)
(def prop-acc e2e.proposals/prop-acc)
(def fee-acc (eos/random-account "fee"))

(println (str "fee acc = " fee-acc))

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
                     (<! (e2e.token/deploy-token token-acc [owner-acc]))
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
      (<p-should-fail-with!
       (eos/transact fee-acc "init" {:proposal_contract prop-acc} [{:actor owner-acc :permission "active"}])
       "only fee-acc can init"
       (str "missing authority of " fee-acc))
      (<p-should-succeed!
       (eos/transact fee-acc "init" {:proposal_contract prop-acc})
       "can init")
      (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "config"))]
        (is (= (count rows) 1)))
      (done)
      (catch js/Error e (prn "Error" e))))))

(deftest addfees
  (async
   done
   (go
    (try
      (<p-should-succeed!
       (eos-tx-owner token-acc "transfer"
                     {:from     owner-acc
                      :to       fee-acc
                      :memo     "token not allowed"
                      :quantity "1000.0000 EFX"})
       "can transfer")
      (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "balance"))]
        (is (empty? rows)))
      (<p-should-succeed!
       (eos/transact fee-acc "update"
                     {:proposal_contract prop-acc
                      :allowed_symbols   [{:contract token-acc :sym "4,EFX"}]})
       "can update")
      (<p-should-succeed!
       (eos-tx-owner token-acc "transfer"
                     {:from owner-acc :to fee-acc :memo "token allowed" :quantity "1000.0000 EFX"})
       "can transfer")
      (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "balance"))]
        (is (= (count rows) 1))
        (is (= (get-in rows [0 "balance" "value"])) 10000000))
      (done)
      (catch js/Error e (prn "Error" e))))))

(deftest newcycle
  (async
   done
   (go
    (try
      (<p!
       (eos/transact prop-acc "addcycle"
                     {:start_time "2021-01-01 12:00:00"
                      :budget     [{:quantity (str "326000.0000 EFX")
                                    :contract token-acc}]}))
      (<p! (wait 1000))
      (<p! (eos/transact prop-acc "cycleupdate" {}))
      (<p-should-succeed!
       (eos-tx-owner token-acc "transfer"
                     {:from owner-acc :to fee-acc :memo "token allowed" :quantity "500.0000 EFX"})
       "can transfer")
      (let [rows (<p! (eos/get-table-rows fee-acc fee-acc "balance"))]
        (is (= (count rows) 2)))
      (done)
      (catch js/Error e (prn "Error" e))))))

(defn -main [& args]
  (try
    (run-tests)
    (catch js/Error e (prn "Error " e))))
