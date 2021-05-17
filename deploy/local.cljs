(ns local
  (:require
   [eos-cljs.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])))

(defn usage [opts]
  (->> ["Run as `npm run deploy <token contract> <swap contract> <stake contract>"
        ""
        "The `eosio` account will be used to setup other accounts
        using the default keys in a privnet."]
       (string/join "\n")))

(def owner-acc "eosio")
(def token-acc "token")
(def stake-acc "stake")
(def swap-acc "swap")
(def bookkeeper-acc owner-acc)

(def efx-supply "650000000.0000 EFX")
(def nfx-supply "20000000000.0000 NFX")
(def efx-sym "EFX")
(def nfx-sym "NFX")

(def sec-per-day 86400)

(def stake-config {:token_contract token-acc :stake_symbol (str "4," efx-sym)
                   :claim_symbol (str "4," nfx-sym) :age_limit 5
                   :scale_factor (*  1000000 1)
                   :unstake_delay_sec 2
                   :stake_bonus_age (* 50 sec-per-day)
                   :stake_bonus_deadline "2019-05-03T15:59:44.500"})

(def swap-config {:token_contract token-acc :token_symbol efx-sym
                  :tx_max_age 600
                  :issue_memo "Token Swap"
                  :min_tx_value 1 :max_tx_value 100000
                  :global_swap_limit 100000000000
                  :limit_reset_time_sec 120})

(defn setup []
  (print "\n========================\nCREATE TOKENS" "\n========================\n")
  (-> (eos/transact token-acc "create" {:issuer swap-acc :maximum_supply efx-supply}
                    [{:actor token-acc :permission "owner"}])
      (.catch prn)
      (.then #(println "> Token created " efx-sym))
      (.then #(eos/transact token-acc "create"
                            {:issuer stake-acc :maximum_supply nfx-supply}
                            [{:actor token-acc :permission "owner"}]))
      (.catch prn)
      (.then #(println "> Token created " nfx-sym))
      (.then #(eos/transact stake-acc "init"
                            (assoc stake-config :token_contract token-acc)
                            [{:actor stake-acc :permission "owner"}]))
      (.catch prn)
      (.then #(eos/transact swap-acc "init"
                            (assoc swap-config :token_contract token-acc)
                            [{:actor swap-acc :permission "owner"}]))
      (.catch prn)
      (.then #(eos/transact swap-acc "mkbookkeeper" {:account bookkeeper-acc}
                            [{:actor swap-acc :permission "owner"}]))
      (.catch prn)))

(defn -main []
  (let [args *command-line-args*]
    (->
     (eos/create-account owner-acc token-acc)
     (.catch prn)
     (.then #(eos/create-account owner-acc swap-acc))
     (.catch prn)
     (.then #(eos/create-account owner-acc stake-acc))
     (.catch prn)
     (.then #(eos/deploy token-acc "contracts/token/token"))
     (.catch prn)
     (.then #(eos/deploy swap-acc "contracts/swap/swap"))
     (.catch prn)
     (.then #(eos/deploy stake-acc "contracts/stake/stake"))
     (.catch prn)
     (.then #(eos/update-auth swap-acc "active"
                              [{:permission {:actor swap-acc :permission "eosio.code"}
                                :weight 1}
                               ]))
     (.catch prn)
     (.then #(eos/update-auth stake-acc "active"
                              [{:permission {:actor stake-acc :permission "eosio.code"}
                                :weight 1}]))
     (.catch prn)
     (.then #(eos/transact
              [{:account "eosio"
                :name "updateauth"
                :authorization [{:actor bookkeeper-acc
                                 :permission "active"}]
                :data {:account bookkeeper-acc
                       :permission "posttx"
                       :parent "active"
                       :auth {:keys [{:key eos/pub-key
                                      :weight 1}]
                              :threshold 1
                              :accounts []
                              :waits []}}}
               {:account "eosio"
                :name "linkauth"
                :authorization [{:actor bookkeeper-acc
                                 :permission "active"}]
                :data {:account bookkeeper-acc
                       :requirement "posttx"
                       :code swap-acc
                       :type "posttx"}}
               {:account "eosio"
                :name "linkauth"
                :authorization [{:actor bookkeeper-acc
                                 :permission "active"}]
                :data {:account bookkeeper-acc
                       :requirement "posttx"
                       :code swap-acc
                       :type "issue"}}]))
     (.catch prn)
     (.then setup)
     (.then #(print "\nDone!\n")))))
