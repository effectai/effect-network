(ns e2e.network
  (:require
   [eos-cljs.core :as eos]
   [e2e.util :as util :refer [wait p-all]]
   [eos-cljs.node-api :refer [deploy-file]]
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
   [cljs.core.async :refer [go <!]]
   [cljs.core.async.interop :refer [<p!]]
   [e2e.macros :refer-macros [<p-should-fail! <p-should-succeed!
                              <p-should-fail-with! <p-may-fail!
                              async-deftest]]
   [eosjs :refer [Serialize Numeric KeyType]]
   e2e.token
   [clojure.string :as string]
   [elliptic :refer [ec]]))

(def owner-acc "eosio")
(def net-acc (eos/random-account "netw"))
(def token-acc (eos/random-account "tkn"))

(def hash160-1 "4782a9ba01fd15de6b451ed71c06c218417ad54b")
(def hash160-2 "8d7f99f8161f2e73bf1b6bfd65cef852dd23640a")

;;================
;; BYTE HELPERS
;;================
(defn hex->bytes
  "Covnert hex string to byte array"
  [hex] (.hexToUint8Array Serialize hex))

(defn bytes->hex
  "Convert byte array to hex string"
  [bytes] (.arrayToHex Serialize bytes))

(defn name->bytes
  "Convert an eosio name string to byte array"
  [name]
  (let [buff (doto (new (.-SerialBuffer Serialize)) (.pushName name))]
    (.asUint8Array buff)))

(defn prn-logs
  "Prints the console logs of all actions in tx receipt"
  [tx-res]
  (.log js/console (.-action-traces (.-processed tx-res))))

(defn pad-right [a len sep]
  (let [diff (- len (count a))] (str a (reduce str (repeat diff sep)))))

(defn balance-index
  "Construct the index of the EOSIO account table by token

  If the type is \"name\" it will index by account name, if it's \"address\" it
  will index by truncated public key hash."
  [token-acc type acc]
  (pad-right
   (str (bytes->hex (name->bytes token-acc))
        (if (= type "address") "00" "01")
        (if (= type "name") (bytes->hex (name->bytes acc)) acc))
   64 "0"))


;; To check the Hex value of account names
(prn "DEBUG hex: " (bytes->hex (name->bytes owner-acc)))
(prn "DEBUG hex: " (bytes->hex (name->bytes token-acc)))

(println (str "network acc = " net-acc))
(println (str "token acc = " token-acc))

(defn eos-tx-owner [contr action args]
  (eos/transact contr action args [{:actor owner-acc :permission "active"}]))

(defn tx-as [acc contr action args]
  (eos/transact contr action args [{:actor acc :permission "active"}]))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go
        (try
          (<p-may-fail! (eos/create-account owner-acc net-acc))
          (<p! (deploy-file net-acc "contracts/network/network"))
          (<! (e2e.token/deploy-token token-acc [owner-acc token-acc]))
          (done)
          (catch js/Error e (prn "Error " e))))))
   :after (fn [])})

(def accs [["address" hash160-1]
           ["address" hash160-2]
           ["name" (eos/random-account "acc")]
           ["name" (eos/random-account "acc")]])

(async-deftest open
  ;; open a couple of accounts
  (doseq [acc accs]
    (prn "~ Opened account " acc)
    (<p-should-succeed!
     (tx-as owner-acc net-acc "open" {:acc acc
                                      :payer owner-acc
                                      :symbol {:contract token-acc :sym "4,EFX"}})))
  ;; check they exist
  (doseq [[type acc] accs]
    (prn (balance-index token-acc type acc) )))

(defn -main [& args]
  (run-tests))
