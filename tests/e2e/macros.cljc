(ns e2e.macros
  (:require
   [cljs.test :refer-macros [is]]
   [cljs.core.async.interop :refer [<p!]]
   [cljs.core.async :refer [go <!] ]
   [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]   ))

(defmacro <p-may-fail!
  [body msg]
  `(try
     (cljs.core.async.interop/<p! ~body)
     (catch js/Error e# nil)))

(defmacro <p-should-fail!
  [body msg]
  `(try
     (cljs.core.async.interop/<p! ~body)
     (cljs.test/is nil ~msg)
     (catch js/Error e# (cljs.test/is true ~msg))))

(defmacro <p-should-fail-with!
  [body msg chk]
  `(try
     (let [res (cljs.core.async.interop/<p! ~body)]
       (cljs.test/is nil ~msg)
       res)
     (catch js/Error e#
       (let [err# (.-message (.-cause e#))
             pass? (clojure.string/ends-with? err# ~chk)]
         (when (not pass?) (prn (str "expected =" ~chk " actual = " err#)))
         (cljs.test/is pass? ~msg)))))

(defmacro <p-should-succeed!
  [body msg]
  `(try
     (let [res# (cljs.core.async.interop/<p! ~body)]
       (cljs.test/is true ~msg)
       res#)
     (catch js/Error e#
       (let [err# (.-message (.-cause e#))]
         (cljs.test/is (= "succeeded" err#) ~msg)))))

(defmacro async-deftest
  [name & body]
  `(~'deftest ~name
    (~'async
     done#
     (~'go
      (try
        ~@body
        (catch js/Error e# (prn "Error " e#) (throw e#)))
      (done#)))))
