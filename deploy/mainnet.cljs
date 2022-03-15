(ns mainnet
  (:require
   [eos-cljs.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   [clojure.pprint :refer [pprint]]
   [cljs.core.async.interop :refer [<p!]]
   [cljs.core.async :refer [go] :as async]

   [eos-cljs.node-api :as eos-node :refer [deploy-file]]
   [eos-cljs.macros :refer-macros [<p-may-fail!]]))


(def token-acc "effecttokens")
(def vaccount-acc "vaccount.efx")
(def force-acc "force.efx")

(def contracts
  [
   {:account "force.efx"
    :file "contracts/force/force"}
   {:account vaccount-acc
    :file "contracts/vaccount/vaccount"}
   ])



(defn add-contract-hashes [contracts]
  (go
    (loop [cs contracts
           res []]
      (if (empty? cs)
        res
        (recur
         (rest cs)
         (conj res
               (assoc (first cs)
                      :file-hash (eos-node/get-file-hash (str (-> cs first :file) ".wasm"))
                      :deployed-hash (<p! (eos/get-code-hash (-> cs first :account))))))))))

(defn -main [& args]
  (let [private-keys *command-line-args*]
    (eos-node/set-api! :mainnet {:priv-keys private-keys})
    (go
      (try
        (let [contracts (<! (add-contract-hashes contracts))]
          (prn contracts)
          (doseq [{:keys [deployed-hash file-hash account file]} contracts]
            (when (not (= deployed-hash file-hash))
              (prn "Contract updated. Deploying " file " to " account)
              (let [res (<p! (deploy-file account file))]
                (prn "Finished deploying " account file-hash)))))
        (catch js/Error e (prn "Error: " e (ex-message e))))

      (<p-may-fail! (eos/update-auth
                     vaccount-acc "xfer" "active"
                     [{:permission {:actor vaccount-acc :permission "eosio.code"} :weight 1}]))

      (<p-may-fail! (eos/transact "eosio" "linkauth"
                                  {:account vaccount-acc
                                   :requirement "xfer"
                                   :code token-acc
                                   :type "transfer"}
                                  [{:actor vaccount-acc :permission "active"}]))

      (<p-may-fail! (eos/update-auth
                     force-acc "xfer" "active"
                     [{:permission {:actor force-acc :permission "eosio.code"} :weight 1}]))

      (<p-may-fail! (eos/transact "eosio" "linkauth"
                                  {:account force-acc
                                   :requirement "xfer"
                                   :code vaccount-acc
                                   :type "vtransfer"}
                                  [{:actor force-acc :permission "active"}]))

      (<p! (eos/transact force-acc "init" {:vaccount_contract vaccount-acc
                                           :force_vaccount_id 0
                                           :payout_delay_sec 1800
                                           :release_task_delay_sec 1800})))))
