(ns mainnet20230115
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
(def feepool-acc "feepool.efx")
(def prop-acc "daoproposals")
(def dao-acc "theeffectdao")

(def expected-hash "d4ab62fdfec73e954577b0500b2c625d5991c0cee4fb39f25e31e07605c96093")
(def prop-file "contracts/proposals/proposals")

(defn -main [& args]
  (let [private-keys *command-line-args*]
    (eos-node/set-api! :mainnet {:priv-keys private-keys})
    (go
      (try
        (<p! (deploy-file prop-acc prop-file))
        (catch js/Error e (prn e))))))
