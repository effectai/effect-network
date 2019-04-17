(ns jungle
  (:require
   [eos-deploys.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])))

(def token-acc "forbeginners")
(def swap-acc "dontworrybet")
(def stake-acc "upandrunning")
(def bk-acc "foreveryoung")

(def tkn-sym "TKN")
(def clm-sym "CLM")
(def tkn-total-supply "650000000.0000")
(def clm-total-supply "20000000000.0000")

(def sec-per-day 86400)

(def stake-config {:token_contract token-acc :stake_symbol tkn-sym
                   :claim_symbol clm-sym :age_limit (* 200 sec-per-day)
                   :scale_factor (*  1000000 sec-per-day)
                   :unstake_delay_sec (* 7 sec-per-day)})

(def swap-config {:token_contract token-acc :token_symbol tkn-sym
                  :issue_memo (str "Welcome to EOS " tkn-sym "!")})

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
       (.then #(prn  (str clm-total-supply " " clm-sym) "xxxx"))
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
