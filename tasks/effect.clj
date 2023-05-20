(ns effect
  (:require [babashka.tasks :refer [shell clojure]]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [io.aviso.ansi :as ansi :refer [compose]]
            [clojure.string :as string]
            [clojure.pprint :as pprint])
  (:import java.time.format.DateTimeFormatter
           java.time.LocalDateTime))

(def payer "efxefxefxefx")
(def payer-net {:mainnet "efxdeployer1"
                "mainnet" "efxdeployer1"
                :jungle4 "efxefxefxefx"
                "jungle4" "efxefxefxefx"})

(def rpcs {:jungle4 "https://jungle4.cryptolions.io:443"
           :mainnet "https://eos.greymass.com"})
(def wallet-pass (slurp "jungle3-password.txt"))

(declare do-cleos)

(def powerup {:jungle4 #(do-cleos :jungle4 "push" "action" "eosio" "powerup"
                                  (str "[\"" payer "\", \"" %1 "\", 1, 100000000000, 100000000000, \"1.0000 EOS\"]")
                                  "-p" payer)})

(def deployment
  {:jungle4
   {:dao       {:account "efxdao111112"
                :path    "contracts/dao"
                :hash    nil}
    :proposals {:account "efxproposals"
                :path    "contracts/proposals"
                :hash    nil}
    :force     {:account "efxforce1112"
                :path    "contracts/force"
                :hash    nil}
    :vaccount  {:account "efxaccount11"
                :path    "contracts/vaccount"
                :hash    nil}
    :token     {:account "efxtoken1112"
                :path    "contracts/token"
                :hash    nil}
    :stake     {:account "efxstake1111"
                :path    "contracts/stake"
                :hash    nil}
    :feepool   {:account "efxfeepool11"
                :path    "contracts/feepool"
                :hash    nil}}
   :mainnet
   {:proposals {:account "daoproposals"
                :path    "contracts/proposals"
                :hash    "d4ab62fdfec73e954577b0500b2c625d5991c0cee4fb39f25e31e07605c96093"}
    :dao       {:account "theeffectdao"
                :path    "contracts/dao"
                :hash    "22814f2c83433da8e929533e4b46bb3be95bc8826c4e4bcc62242f05b4cd2744"}
    :force     {:account "force.efx"
                :path    "contracts/force"
                :hash    "17e1dab4a77306e236b6f879bb059cd162e97b204e8e530daac8c7666717313b"}}})

(def get-acc (memoize (fn [net acc] (-> deployment net acc :account))))

(defn log-info [msg]
  (println (compose [:green "[#] " msg])))

(defn backup-proposals []
  (println "Backing up proposals"))

(defn cleos [net & args]
  (->> args
       (apply (partial shell
                       {:out :string :err :string }
                       "cleos" "--url" (rpcs (keyword net))))))

(defn prn-cleos [net & args]
  (->> args
       (concat ["cleos" "--url" (rpcs (keyword net))])
       (clojure.string/join " ")
       println))

(defn get-proposals-in-cycle [net cycle]
  (let [prop-acc (-> deployment net :proposals :account)]
    (-> (cleos
         net "get" "table" prop-acc prop-acc "proposal"
         "-L" cycle "-U" cycle "--index" 3 "--key-type" "i64")
        :out
        (json/decode true)
        :rows)))

(defn get-last-cycle [net]
  (let [prop-acc (-> deployment net :proposals :account)]
    (-> (cleos net "get" "table" prop-acc prop-acc "cycle" "-l" "1" "-r")
        :out
        (json/decode true)
        :rows
        first)))

(defn get-proposal-config [net]
  (let [prop-acc (-> deployment net :proposals :account)]
    (-> (cleos net "get" "table" prop-acc prop-acc "config")
        :out
        (json/decode true)
        :rows
        first)))

(def msig-skeleton
  {:expiration             nil
   :ref_block_num          0
   :ref_block_prefix       0
   :max_net_usage_words    0
   :max_cpu_usage_ms       0
   :delay_sec              0
   :context_free_actions   []
   :transaction_extensions []
   :signatures             []
   :context_free_data      []})

(defn make-msig-tx [actions deadline-days]
  (let [date      (.plusDays (LocalDateTime/now) deadline-days)
        formatter (DateTimeFormatter/ofPattern "yyyy-MM-dd'T'HH:mm:ss")]
    (-> msig-skeleton
        (assoc :expiration (.format date formatter))
        (assoc :actions    actions)
        json/encode)))



(defn extract-quantity [quantity]
  (Float/parseFloat (->> quantity (re-seq #"(\d+\.\d+) EFX") first second)))

(defn create-cycle-action [net start-time]
  (let [prop-acc (-> deployment net :proposals :account)]
    {:account       prop-acc
     :name          "addcycle"
     :data          {:start_time start-time
                     :budget     [{"quantity" "326000.0000 EFX"
                                   "contract" "effecttokens"}]},
     :authorization [{"actor"      "daoproposals",
                      "permission" "active"}]}))

(defn transfer-efx-action [from amount to]
  {:account       "effecttokens"
   :name          "transfer"
   :data          {:from     from
                   :to       to
                   :quantity (str (format "%.4f" amount) " EFX")
                   :memo     ""}
   :authorization [{"actor"      from
                    "permission" "active"}]})

(defn create-tx-json [actions filename]
  (->> {:delay_sec        0
        :max_cpu_usage_ms 0
        :actions          actions}
      json/encode
      (spit filename)))

(defn process-cycle [id]
  (try
    (let [net   :mainnet
          props (get-proposals-in-cycle net id)

          config     (get-proposal-config net)
          last-cycle (get-last-cycle net)

          cycle-spent (->> props
                           (map #(get-in % [:pay 0 :field_0 :quantity]))
                           (map extract-quantity)
                           (reduce +))

          funds-left (->  last-cycle :budget first :quantity extract-quantity (- cycle-spent))

          new-cycle-start (-> (:start_time last-cycle)
                              java.time.LocalDateTime/parse
                              (.plusSeconds (:cycle_duration_sec config))
                              .toString)

          new-cycle-actions [(create-cycle-action net new-cycle-start)
                             (transfer-efx-action "daoproposals" (* 0.3 funds-left) "feepool.efx")
                             (transfer-efx-action "daoproposals" (* 0.7 funds-left) "treasury.efx")
                             {:account       "daoproposals"
                              :name          "cycleupdate"
                              :data          {}
                              :authorization [{:actor "x.efx" :permission "active"}]}
                             {:account       "daoproposals"
                              :name          "processcycle"
                              :data          {:account "x.efx" :id id}
                              :authorization [{:actor "x.efx" :permission "active"}]}]

          exec-actions (->> props
                            (map
                             (fn [p]
                               (->
                                (cleos net "push" "action" "-s" "-j" "-d"
                                       (get-acc net :proposals)
                                       "executeprop"
                                       (json/encode {:id (:id p)})
                                       "-p" (str (get-acc net :proposals) "@highguard"))
                                :out (json/decode true) :actions)))
                            flatten
                            (into []))
          msig-tx      (make-msig-tx exec-actions 42)]

      (if (= (str (:id last-cycle)) id)
        (do
          (spit "highguardtx.json" msig-tx)
          (log-info (str "Highguard approval transaction: highguardtx.json. Run with:"))
          (println (str "cleosm multisig propose_trx cycle ~/highguard.json highguardtx.json <acc> -p <acc>"))
          (create-tx-json new-cycle-actions "newcycle.json")
          (log-info (str "New cycle transaction: newcycle.json. Run with:"))
          (println (str "cleosm push transaction newcycle.json")))
        (log-info "Cycle already processed.")))
    (catch Exception e (prn e))))

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

(def do-cleos-max-iterations 3)

(declare buy-ram)

(defn- do-cleos-it
  "Run a cleos transaction buying ram if needed.
  `it` is an iterator to track max recursion depth."
  [it net & args]
  (when (> it do-cleos-max-iterations)
    (throw (Exception. "Too many do-cleos tries")))
  (let [account (last args)
        res (try (apply (partial cleos net) args)
                 (catch Exception e
                   (:proc (ex-data e))))]
    (cond
      (string/includes? (:err res) "insufficient ram")
      (let [needed (get-needed-ram-from-error (:err res))]
        (println (compose [:red "[◯] Account is missing " [:bold needed]
                           " bytes of RAM"]))
        (println (compose [:bright-yellow "[❯] Buying ram for " account]))
        (let [[status msg] (buy-ram net account needed)]
          (if status
            (do
              (println (compose [:green "[❯] RAM bought, running again"]))
              (apply (partial do-cleos-it (inc it) net) args))
            (throw (Exception. msg)))))

      (string/includes? (:err res) "usage limit imposed")
      (if (get powerup net)
        (do
          (println (compose [:bright-red "[◯] Not enough resources, doing powerup"]))
          (println (compose [:bright-yellow "[❯] Powering up " account]))
          (let [res ((get powerup net) account)]
            (apply (partial do-cleos-it (inc it) net) args)))
        (do
          (println (compose [:bright-red "[✖] Not enough resources, needs powerup:\n" (:err res)]))))

      (zero? (:exit res))
      (let [txid (get-executed-tx-from-err (:err res))]
        (println (compose [:green "[✔] " (or txid (:err res))])))

      (:err res)
      (println (compose [:bright-red "[✖] Error: " (:err res)]))

      :else
      (println "ERROR" res))))

(defn do-cleos [net & args]
  (apply (partial do-cleos-it 0 (keyword net)) args))

(defn buy-ram
  [net receiver bytes]
  (let [res (do-cleos net "system" "buyram" (payer-net net) receiver "-b" bytes)]
    (cond (string/includes? (:err res) "overdrawn balance")
          [nil "overdrawn balance"]
          (zero? (:exit res))
          [true "txid"]
          (:err res)
          (do
            (println (compose [:bright-red (:err res)]))
            [nil "unkown error"]))))

(defn msig-deploy [net account contract-path]
  (unlock)
  (try
    (let [payer (payer-net (keyword net))
          acts (-> (cleos net "set" "contract" "-s" "-j" "-d" account contract-path)
                   :out
                   (json/decode true)
                   :actions)
          perms [{:actor account :permission "active"}]
          tx (make-msig-tx acts 42)]
      (let [res
            (do-cleos net "multisig" "propose_trx" "test"  (json/encode perms)
                      tx payer "-p" payer)]
        (prn "done?")))
    (catch Exception e (prn e))))

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
      (if (get powerup net)
        (do
          (println (compose [:bright-red "[◯] Not enough resources, doing powerup"]))
          (println (compose [:bright-yellow "[❯] Powering up " account]))
          (let [res ((get powerup net) account)]
            (deploy-account net account path)))
        (do
          (println (compose [:bright-red "[✖] Not enough resources, needs powerup:\n" (:err res)]))))

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

(defn init
  "Initialize all the contracts on a brand new deployment"
  [net]
  (unlock)
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

      (log-info "Initializing tokens")
      (do-cleos net "push" "action"
                (-> deployment net :token :account)
                "create"
                (str "[" payer ", \"650000000.0000 EFX\"]")
                "-p"
                (-> deployment net :token :account))
      (do-cleos net "push" "action"
                (-> deployment net :token :account)
                "create"
                (str "[" payer ", \"20000000000.0000 NFX\"]")
                "-p"
                (-> deployment net :token :account))

      ;;;;
      (log-info "Initializing vaccount")
      (do-cleos net "set" "account" "permission"
                (-> deployment net :vaccount :account)
                "xfer"
                (json/encode {:threshold 1
                              :keys []
                              :accounts [{:permission {:actor (-> deployment net :vaccount :account)
                                                       :permission "eosio.code"}
                                          :weight 1}]})
                "active"
                "-p"
                (-> deployment net :vaccount :account))
      (do-cleos net "set" "action" "permission"
                (-> deployment net :vaccount :account)
                (-> deployment net :token :account)
                "transfer"
                "xfer"
                "-p"
                (-> deployment net :vaccount :account))

      ;;;;;
      (log-info "Initializing force")
      (do-cleos net "push" "action"
                (-> deployment net :vaccount :account)
                "open"
                (str "[[name, " (-> deployment net :force :account) "],"
                     "[\"4,EFX\", \"" (-> deployment net :token :account) "\"],
                     " payer "]")
                "-p"
                payer)
      (do-cleos net "push" "action"
                (-> deployment net :force :account)
                "init"
                (str "[" (-> deployment net :vaccount :account)  ", 0, 1800, 1800]")
                "-p"
                (-> deployment net :force :account))
      (do-cleos net "push" "action"
                (-> deployment net :force :account)
                "migrate"
                (str "[" (-> deployment net :force :account) ", " (-> deployment net :feepool :account) ", 0.1]")
                "-p"
                (-> deployment net :force :account))
      (do-cleos net "set" "account" "permission"
                (-> deployment net :force :account)
                "xfer"
                (json/encode {:threshold 1
                              :keys []
                              :accounts [{:permission {:actor (-> deployment net :force :account)
                                                       :permission "eosio.code"}
                                          :weight 1}]})
                "active"
                "-p"
                (-> deployment net :force :account))
      (do-cleos net "set" "action" "permission"
                (-> deployment net :force :account)
                (-> deployment net :vaccount :account)
                "vtransfer"
                "xfer"
                "-p"
                (-> deployment net :force :account))
      (do-cleos net "set" "action" "permission"
                (-> deployment net :force :account)
                (-> deployment net :vaccount :account)
                "withdraw"
                "xfer"
                "-p"
                (-> deployment net :force :account))

      (log-info "Initializing feepool")
      (do-cleos net "push" "action"
                (-> deployment net :feepool :account)
                "init"
                (str "[" (-> deployment net :proposals :account)  "]")
                "-p"
                (-> deployment net :feepool :account))
      (catch Exception e (println e)))))

(defn make-atp [type msig-name proposer]
  (case type
    "addcol"
    (try
      (let [net :mainnet
            dao-acc (-> deployment net :dao :account)
            prop-acc (-> deployment net :proposals :account)
            acts (->
                  (cleos net "push" "action" "-s" "-j" "-d" dao-acc "addcol"
                         (json/encode [["pomelo" ".gems" "avatar.boid" "shufan.free"] false])
                         "-p" (str dao-acc "@dao"))
                  :out (json/decode true) :actions)
            perms [{:actor prop-acc  :permission "dao"}]
            tx (make-msig-tx acts 42)]
        (prn-cleos net "multisig" "propose_trx"
                   msig-name
                   (str "'" (json/encode perms) "'")
                   (str "'" tx "'")
                   proposer "-p" proposer))
      (catch Exception e (prn e)))))
