(ns e2e.util
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

(defn should-succeed
  ([p] (should-succeed p "should succeed"))
  ([p msg]
   (-> p
       (.catch #(is (= % msg) msg))
       (.then #(do (is true msg)
                   %)))))

(defn should-fail-with
  ([p chk] (should-fail-with p chk chk))
  ([p chk msg]
   (-> p
       (.then #(is nil msg))
       (.catch #(is (string/ends-with? (.-message %) chk) msg)))))

(defn wait [msec]
  (js/Promise. (fn [resolve reject] (js/setTimeout (fn [] (resolve true)) msec))))

(defn p-all
  "Shorthand for applyin js/Promise.all to its arguments"
  [& ps]
  (js/Promise.all (clj->js (map #(.catch % (fn [e] (prn e))) ps))))

(defn p-all-may-fall
  "Like `p-all` but where each promise may fail"
  [& ps]
  (js/Promise.all (clj->js (map #(.catch % (fn [e] (prn e))) ps))))
