(ns jungle
  (:require
   [eos-deploys.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   (clojure.pprint :refer [pprint])))

(def token-acc "forbeginners")
(def swap-acc "dontworrybet")
(def symb "ABC")
(def bk-acc "foreveryoung")
(def total-supply "650000000.0000")

(defn usage [opts]
  (->> ["Run as `npm run deploy jungle <PRIVATE KEY FOR SIGNING>`"
        ""
        "The private key is used for signing all transactions."
        ""
        "Code will be deployed to:"
        (str "- " token-acc " (token)")
        (str "- " swap-acc " (swap)")
        ""]
       (string/join "\n")))

(defn -main []
  (if (empty? *command-line-args*)
    (print (usage nil))
    (let [[privatekey] *command-line-args*]
      (eos/set-api! (assoc (:jungle eos/apis) :priv-keys [privatekey]))
      (->
       ;; set authorities
       (eos/update-auth swap-acc "active"
                        [{:permission
                          {:actor swap-acc :permission "eosio.code"}
                          :weight 1}])
       ;; deploy fresh code
       (.then #(eos/deploy token-acc "contracts/effect-token/src/effect-token"))
       (.catch prn)
       (.then #(eos/deploy swap-acc "contracts/swap/swap"))
       (.catch prn)
       eos/wait-block
       ;; create the token
       (.then  (print "\n========================\nCREATE TOKEN" symb
                      " in " token-acc "\n========================\n"))
       (.then #(eos/transact token-acc "create"
                             {:issuer swap-acc :maximum_supply (str total-supply symb)}))
       (.catch prn)
       ;; add a bookkeeper that can post neo txs
       (.then #(eos/transact swap-acc "mkbookkeeper" {:account bk-acc}
                             [{:actor swap-acc :permission "owner"}]))
       (.catch prn)
       (.then #(print "\nDone!\n"))))))
