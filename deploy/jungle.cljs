(ns jungle
  (:require
   [eos-cljs.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])))

(def token-acc "forbeginners")
(def swap-acc "dontworrybet")
(def stake-acc "stktest11111")
(def bk-acc "foreveryoung")

(def tkn-sym "UTL")
(def clm-sym "GOV")
(def tkn-total-supply "650000000.0000")
(def clm-total-supply "20000000000.0000")

(def sec-per-day 86400)

(def stake-config {:token_contract token-acc :stake_symbol (str "4," tkn-sym)
                   :claim_symbol (str "4," clm-sym) :age_limit (* 200 sec-per-day)
                   :scale_factor (* 10000000000 sec-per-day)
                   :unstake_delay_sec (* 7 sec-per-day)
                   :stake_bonus_age (* 50 sec-per-day)
                   :stake_bonus_deadline "2019-04-18T15:59:44.500"})

(def swap-config {:token_contract token-acc :token_symbol tkn-sym
                  :issue_memo (str "Welcome to EOS " tkn-sym "!")
                  :tx_max_age 10000
                  :min_tx_value 1 :max_tx_value 100000})

(defn usage [opts]
  (->> ["Run as `npm run deploy jungle <PRIVATE KEY FOR SIGNING>`"
        ""
        "The private key is used for signing all transactions."
        ""
        "Code will be deployed to:"
        (str "- " token-acc " (token)")
        (str "- " swap-acc " (swap)")
        (str "- " stake-acc " (stake)")
        ""
        (str bk-acc " is a book keeper which is allowed to posttx")
        ""]
       (string/join "\n")))

(defn -main []
  (if (empty? *command-line-args*)
    (print (usage nil))
    (let [[privatekey] *command-line-args*]
      (eos/set-api! (assoc (:jungle eos/apis) :priv-keys [privatekey]))
      (->
       ;; deploy fresh code
       (eos/deploy token-acc "contracts/effect-token/effect-token")
       (.catch prn)
       (.then #(eos/deploy swap-acc "contracts/swap/swap"))
       (.catch prn)
       (.then #(eos/deploy stake-acc "contracts/stake/stake"))
       (.catch prn)
       ;; set authorities
       (.then
        #(eos/update-auth swap-acc "active"
                          [{:permission
                            {:actor swap-acc :permission "eosio.code"}
                            :weight 1}]))
       (.then
        #(eos/update-auth stake-acc "active"
                          [{:permission
                            {:actor stake-acc :permission "eosio.code"}
                            :weight 1}]))
       eos/wait-block
       ;; create the token
       (.then #(print "\n========================\nCREATE TOKEN" tkn-sym
                      " in " token-acc "\n========================\n"))
       (.then
        #(eos/transact token-acc "create"
                       {:issuer swap-acc :maximum_supply (str tkn-total-supply " " tkn-sym)}))
       (.catch prn)
       (.then
        #(eos/transact token-acc "create"
                       {:issuer stake-acc :maximum_supply (str clm-total-supply " " clm-sym)}))
       (.catch prn)
       ;; initialize stake and swap
       (.then
        #(eos/transact stake-acc "init" stake-config
                       [{:actor stake-acc :permission "owner"}]))
       (.catch prn)
       (.then
        #(eos/transact swap-acc "init" swap-config
                       [{:actor swap-acc :permission "owner"}]))
       (.catch prn)
       ;; add a bookkeeper that can post neo txs
       (.then #(eos/transact swap-acc "mkbookkeeper" {:account bk-acc}
                             [{:actor swap-acc :permission "owner"}]))
       (.catch prn)
       (.then #(print "\nDone!\n"))))))
