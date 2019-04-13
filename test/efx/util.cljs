(ns efx.util
  (:require ["@cityofzion/neon-js" :as Neon]
            [clojure.string :as string]
            [cljs.test :refer-macros [is]]))

(defn parse-nep5
  "Retrieve nep5 arguments from transaction object"
  [tx]
  (let [{script-hash "scriptHash"  [method [value from to]] "args"}
        (first (js->clj (.toScriptParams (Neon/sc.ScriptBuilder. (.-script tx)))))]
    {:script-hash script-hash :method method
     :value (.toNumber (.mul (Neon/u.Fixed8. (Neon/u.fixed82num value value)) 1e8))
     :from from :to to}))

(defn pprint-json [obj]
  (.log js/console (js/JSON.stringify obj nil 4)))

(defn should-fail [p msg]
  (-> p
      (.then #(is nil msg))
      (.catch #(is (not (nil? (.-message %))) msg))))

(defn should-succeed [p msg]
  (-> p
      (.catch #(is false msg))
      (.then #(do (is true msg)
                  %))))

(defn should-fail-with [p chk msg]
  (-> p
      (.then #(is nil msg))
      (.catch #(is (string/ends-with? (.-message %) chk) msg))))
