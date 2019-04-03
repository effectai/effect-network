(ns local
  (:require
   [eos-deploys.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])))

(defn usage [opts]
  (->> ["Run as `npm run deploy <owner> <token contract> <swap contract>"
        ""]
       (string/join "\n")))

(defn setup [owner-acc token-acc swap-acc asset]
  (print "\n========================\nCREATE TOKEN" asset "\n========================\n")
  (->
   (eos/transact token-acc "create" {:issuer owner-acc :maximum_supply asset})
   (.then #(do (print "> Token created") (eos/wait-block %)))
   ;; (.then (eos/transact token-acc "issue" {:to owner-acc :quantity "1 EFX" :memo "issue"}))
   ;; (.then #(do (print "\n> 1 token issued to" owner-acc) (eos/wait-block %)))
   (.catch prn)))

(defn -main []
  (let [[owner-acc token-acc swap-acc asset] *command-line-args*]
    (->
     (eos/create-account owner-acc token-acc)
     (.catch prn)
     (.then #(eos/create-account owner-acc swap-acc))
     (.catch prn)
     (.then eos/wait-block)
     (.then #(eos/update-auth swap-acc "active"
                              [{:permission
                                {:actor owner-acc :permission "active"}
                                :weight 1}
                               {:permission
                                {:actor swap-acc :permission "eosio.code"}
                                :weight 1}]))
     (.then #(eos/update-auth token-acc "active" swap-acc "active"))
     (.then eos/wait-block)
     (.then #(eos/deploy token-acc "contracts/effect-token/src/effect-token"))
     (.catch prn)
     (.then #(eos/deploy swap-acc "contracts/swap/swap"))
     (.catch prn)
     (.then eos/wait-block)
     (.then #(setup owner-acc token-acc swap-acc "650000000.0000 EFX"))

     (.then #(print "\nDone!\n")))))
