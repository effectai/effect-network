(ns jungle
  (:require
   [eos-cljs.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   [clojure.pprint :refer [pprint]]
   [cljs.core.async.interop :refer [<p!]]
   [cljs.core.async :refer [go]]
   [eos-cljs.node-api :refer [deploy-file]]
   [eos-cljs.macros :refer-macros [<p-may-fail!]]))

(def token-acc   "efxtoken1111") ;;alt=toke3onkylin
(def account-acc "efxaccount11")
(def force-acc   "efxforce1112") ;;old=efxforce1111

(def jungle-3-api
  {:rpc-url "https://jungle3.cryptolions.io:443"
   :chain-id "2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840"
   :priv-keys []})

(defn p-all
  "Shorthand for applyin js/Promise.all to its arguments.

  Promises may fail and the exception will just printend."
  [& ps]
  (js/Promise.all (clj->js (map #(.catch % (fn [e] (prn e))) ps))))

(defn -main [& args]
  (let [private-keys *command-line-args*]
    (reset! eos/api (eos-cljs.node-api/make-api (assoc jungle-3-api :priv-keys private-keys)))
    (go
      (try
        ;; deploy latest instance of every contract
        (println "going")
        (<p! (apply p-all
                    (map
                     (fn [[acc file]]  (deploy-file acc (str "contracts/" file "/" file)))
                     [[token-acc "token"]
                      [account-acc "vaccount"]
                      [force-acc "force"]])))
        (println "donene")

        (<p-may-fail! (eos/update-auth
                       account-acc "xfer"
                       [{:permission {:actor account-acc :permission "eosio.code"} :weight 1}]))

        (<p-may-fail! (eos/transact "eosio" "linkauth"
                                    {:account account-acc
                                     :requirement "xfer"
                                     :code token-acc
                                     :type "transfer"}
                                    [{:actor account-acc :permission "owner"}]))

        (<p! (eos/transact force-acc "init" {:vaccount_contract account-acc
                                             :force_vaccount_id 333
                                             :payout_delay_sec 1800
                                             :release_task_delay_sec 300}))


        (catch js/Error e (prn e))))))
