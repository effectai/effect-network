(ns effect
  (:require [babashka.tasks :refer [shell clojure]]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [io.aviso.ansi :as ansi :refer [compose]]
            [clojure.string :as string]))

(def payer "efxefxefxefx")

(def rpcs {:jungle4 "https://jungle4.cryptolions.io:443"})
(def wallet-pass (slurp "~/eosio-wallet/jungle3-password.txt"))

(def deployment
  {:jungle4 [{:account "efxforce1112"
              :path    "contracts/force"
              :hash    "17e1dab4a77306e236b6f879bb059cd162e97b204e8e530daac8c7666717313b"}
             {:account "efxaccount11"
              :path    "contracts/vaccount"
              :hash    "2e1ae138c7cdcda4e237f4ca5dddc2e2d1782929925cf15c2ffc34c87dbc0cef"}
             {:account "efxtoken1112"
              :path    "contracts/token"
              :hash    "27b86425a499657a738065cdb0e44c5fa1b5969f57e6ee9b6e7abf394348736d"}]})

(defn backup-proposals []
  (println "Backing up proposals"))

(defn cleos [net & args]
  (->> args
       (apply (partial shell
                       {:out :string :err :string }
                       "cleos" "--url" (rpcs net)))))

(defn unlock []
  (shell "cleos" "wallet" "lock_all")
  (shell "cleos" "wallet" "unlock" "-n" "jungle3"  "--password" wallet-pass))

(defn get-account [net acc]
  (json/decode (cleos net "get" "account" acc "--json") true))

(defn get-ram [net acc]
  (let [acc   (get-account net acc)
        total (:ram_quota acc)
        used  (:ram_usage acc)]
    {:total     total
     :used      used
     :available (- total used)}))

(defn buy-ram [net receiver bytes]
  (let [res (cleos net "system" "buyram" payer receiver "-b" bytes)]
    (cond (string/includes? (:err res) "overdrawn balance")
          [nil "overdrawn balance"]

          (zero? (:exit res))
          (do
            (println res)
            [true "txid"])

          (:err res)
          (do
            (println (compose [:bright-red (:err res)]))
            [nil "unkown error"]))))

(defn get-needed-ram-from-error
  "Get the number of bytes of RAM missing for a deploy.
  This always returns 500 bytes more than required to avoid rounding
  errors that occur sometimes."
  [e]
  (when-let [[needed available]
             (->> e
                  (re-find  #"needs (\d+) bytes has (\d+) bytes")
                  rest (into []))]
    (+ 500
       (- (Integer/parseInt needed) (Integer/parseInt available)))))

(defn get-executed-tx-from-err [e]
  (->> e (re-find  #"executed transaction: ([a-z0-9]+)") last))

(defn deploy-account
  [net account path]
  (let [res (cleos net "set" "contract" account path)]
    (cond
      (string/includes? (:err res) "insufficient ram")
      (let [needed (get-needed-ram-from-error (:err res))]
        (println (compose [:red "[◯] Account is missing " [:bold needed]
                           " bytes of RAM"]))
        (println (compose [:bright-yellow "[❯] Buying ram for " payer]))
        (let [[status msg] (buy-ram net account needed)]
          (if status
            (do
              (println (compose [:green "[❯] RAM bought, deploying again"]))
              (deploy-account net account path))
            (throw (Exception. msg)))))

      (string/includes? (:err res) "new code is the same as the existing code")
      (println (compose [:green "[✔] On-chain code matches local code"]))

      (zero? (:exit res))
      (println (compose [:green "[✔] " (get-executed-tx-from-err (:err res))]))

      (:err res)
      (println (compose [:bright-red "[✖] Error: " (:err res)])))))

(defn deploy [net]
  (unlock)
  (let [net (keyword net)]
    (println (str "Deploying to " (rpcs net)))
    (doseq [{:keys [account path hash]} (deployment net)]
      (println (compose [:green "\n[#] Deploying " path " to "
                         [:yellow.bold account]]))
      (deploy-account net account path))))
