(ns e2e.macros
  (:require
   [cljs.test :refer-macros [is]]
   [cljs.core.async.interop :refer [<p!]]))

(defmacro <p-may-fail!
  [body msg]
  `(try
     (cljs.core.async.interop/<p! ~body)
     (catch js/Error e# (prn e#))))

(defmacro <p-should-fail!
  [body msg]
  `(try
     (cljs.core.async.interop/<p! ~body)
     (cljs.test/is nil ~msg)
     (catch js/Error e# (cljs.test/is true ~msg))))

(defmacro <p-should-fail-with!
  [body msg chk]
  `(try
     (cljs.core.async.interop/<p! ~body)
     (cljs.test/is nil ~msg)
     (catch js/Error e#
       (let [err# (.-message (.-cause e#))
             pass? (clojure.string/ends-with? err# ~chk)]
         (when (not pass?) (prn (str "expected =" ~chk " actual = " err#)))
         (cljs.test/is pass? ~msg)))))

(defmacro <p-should-succeed!
  [body msg]
  `(try
     (cljs.core.async.interop/<p! ~body)
     (cljs.test/is true ~msg)
     (catch js/Error e#
       (prn "test failed with " e#)
       (cljs.test/is nil ~msg))))
