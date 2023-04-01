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
  {:jungle4
   {:dao       {:account "efxdao111112"
                :path    "contracts/dao"
                :hash    "23bea5b5ed625340b4260ea139dbc20bfbc2e1f3bffee6ab8bf4fc8cdb4233bb"}
    :proposals {:account "efxproposals"
                :path    "contracts/proposals"
                :hash    "d4ab62fdfec73e954577b0500b2c625d5991c0cee4fb39f25e31e07605c96093"}
    :force     {:account "efxforce1112"
                :path    "contracts/force"
                :hash    "17e1dab4a77306e236b6f879bb059cd162e97b204e8e530daac8c7666717313b"}
    :vaccount  {:account "efxaccount11"
                :path    "contracts/vaccount"
                :hash    "2e1ae138c7cdcda4e237f4ca5dddc2e2d1782929925cf15c2ffc34c87dbc0cef"}
    :token     {:account "efxtoken1112"
                :path    "contracts/token"
                :hash    "27b86425a499657a738065cdb0e44c5fa1b5969f57e6ee9b6e7abf394348736d"}
    :stake     {:account "efxstake1111"
                :path    "contracts/stake"
                :hash    "ec86c8383c154b51e67169af2da1006613218169ab6ea91904350b1f0e1dea4d"}}})

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
          [true "txid"]
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

(defn log-info [msg]
  (println (compose [:green "[#] " msg])))

(defn deploy-account
  [net account path]
  (let [res (try (cleos net "set" "contract" account path)
                 (catch Exception e
                   (:proc (ex-data e))))]
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

      (string/includes? (:err res) "usage limit imposed")
      (println (compose [:bright-red "[✖] Not enough resources, needs powerup:\n" (:err res)]))

      (zero? (:exit res))
      (do
        (println (compose [:green "[✔] " (get-executed-tx-from-err (:err res))])))

      (:err res)
      (println (compose [:bright-red "[✖] Error: " (:err res)]))

      :else
      (println "ERROR" res))))

(defn deploy [net]
  (unlock)
  (let [net (keyword net)]
    (println (str "Deploying to " (rpcs net)))
    (doseq [{:keys [account path hash]} (vals (deployment net))]
      (println (compose [:green "\n[#] Deploying " path " to "
                         [:yellow.bold account]]))
      (try
        (deploy-account net account path)
        (catch Exception e (prn e))))))

(defn init [net]
  (let [net (keyword net)]
    (try
      (log-info "Initializing DAO")
      (let [{:keys [status err out] :as res}
            (cleos net "push" "action"
                   (-> deployment net :dao :account)
                   "init"
                   (str "["
                        (-> deployment net :stake :account) ", "
                        (-> deployment net :proposals :account) ", "
                        "[\"4,EFX\", \"" (-> deployment net :token :account) "\"], "
                        "[\"4,NFX\", \"" (-> deployment net :token :account) "\"]"
                        "]")
                   "-p"
                   (-> deployment net :dao :account))]
        (log-info (str "Initialized " (get-executed-tx-from-err (:err res)))))

      (log-info "Initializing proposals")
      (let [{:keys [status err out] :as res}
            (cleos net "push" "action"
                   (-> deployment net :proposals :account)
                   "init"
                   (str "[1209600, 950400, "
                        "[\"100.0000 EFX\", \"" (-> deployment net :token :account) "\"], "
                        "1500000, \"2021-01-01T12:00:00\", "
                        (-> deployment net :dao :account)
                        "]")
                   "-p"
                   (-> deployment net :proposals :account))]
        (log-info (str "Initialized " (get-executed-tx-from-err (:err res)))))
      (catch Exception e (println e)))))
