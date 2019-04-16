(ns local
  (:require
   [eos-deploys.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])))

(defn usage [opts]
  (->> ["Run as `npm run deploy <token contract> <swap contract> <stake contract>"
        ""
        "The `eosio` account will be used to setup other accounts
        using the default keys in a privnet."]
       (string/join "\n")))

(def efx-supply "650000000.0000 EFX")
(def nfx-supply "20000000000.0000 NFX")
(def efx-sym "EFX")
(def nfx-sym "NFX")

(def stake-config {:token_contract token-acc :stake_symbol efx-sym
                   :claim_symbol nfx-sym :age_limit 5 :scale_factor (*  1000000 1)
                   :unstake_delay_sec 2})

(def swap-config {:token_contract token-acc :token_symbol efx-sym
                  :issue_memo "Token Swap"})

(defn setup [owner-acc token-acc swap-acc stake-acc]
  (print "\n========================\nCREATE TOKENS" "\n========================\n")
  (-> (eos/transact token-acc "create" {:issuer swap-acc :maximum_supply efx-supply})
      (.catch prn)      
      (.then #(println "> Token created " efx-sym))
      (.then #(eos/transact token-acc "create"
                            {:issuer stake-acc :maximum_supply nfx-supply}))
      (.catch prn)      
      (.then #(println "> Token created " nfx-sym))        
      (.then #(eos/transact stake-acc "init"
                            (assoc stake-config :token_contract token-acc)
                            [{:actor stake-acc :permission "owner"}]))
      (.catch prn)
      (.then #(eos/transact swap-acc "init"
                            (assoc swap-config :token_contract token-acc)))
      (.catch prn)
      (.then #(eos/transact swap-acc "mkbookkeeper" {:account "eosio"}))
      (.catch prn)))

(defn -main []
  (let [[token-acc swap-acc stake-acc] *command-line-args*
        owner-acc "eosio"]
    (->
     (eos/create-account owner-acc token-acc)
     (.catch prn)
     (.then #(eos/create-account owner-acc swap-acc))
     (.catch prn)
     (.then #(eos/create-account owner-acc stake-acc))     
     (.catch prn)
     (.then #(eos/deploy token-acc "contracts/effect-token/effect-token"))
     (.catch prn)
     (.then #(eos/deploy swap-acc "contracts/swap/swap"))
     (.catch prn)
     (.then #(eos/deploy stake-acc "contracts/stake/stake"))
     (.catch prn)
     (.then #(eos/update-auth swap-acc "active"
                              [{:permission
                                {:actor owner-acc :permission "active"}
                                :weight 1}
                               {:permission
                                {:actor swap-acc :permission "eosio.code"}
                                :weight 1}]))
     (.then #(eos/update-auth stake-acc "active"
                              [{:permission {:actor token-acc :permission "eosio.code"}
                                :weight 1}
                               {:permission {:actor stake-acc :permission "eosio.code"}
                                :weight 1}]))
     (.then #(setup owner-acc token-acc swap-acc stake-acc))
     (.then #(print "\nDone!\n")))))
