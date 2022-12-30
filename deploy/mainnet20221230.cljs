(ns mainnet20221230
  (:require
   [eos-cljs.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   [clojure.pprint :refer [pprint]]
   [cljs.core.async.interop :refer [<p!]]
   [cljs.core.async :refer [go] :as async]

   [eos-cljs.node-api :as eos-node :refer [deploy-file]]
   [eos-cljs.macros :refer-macros [<p-may-fail!]]))

(def token-acc "effecttokens")
(def vaccount-acc "vaccount.efx")
(def force-acc "force.efx")
(def feepool-acc "feepool.efx")
(def prop-acc "daoproposals")
(def dao-acc "theeffectdao")

(def expected-hash "ed2ca87f6f982bcebb661561e1841b1ecdb7f401d33198907aa2ab006d1f2009")
(def prop-file "contracts/proposals/proposals")

(defn -main [& args]
  (let [private-keys *command-line-args*]
    (eos-node/set-api! :mainnet {:priv-keys private-keys})
    (go
      (try
        ;; delete the old xfer permission
        (<p! (eos/transact "eosio" "unlinkauth"
                           {:account prop-acc
                            :code    token-acc
                            :type    "transfer"}
                           [{:actor prop-acc :permission "active"}]))
        (<p! (eos/transact "eosio" "deleteauth"
                           {:account    prop-acc
                            :permission "xfer"}
                           [{:actor prop-acc :permission "active"}]))

        ;; add the dao permission and link its auths
        (<p! (eos/update-auth
              prop-acc
              "dao"
              "active"
              [{:permission {:actor prop-acc :permission "eosio.code"} :weight 1}]))
        (<p! (eos/transact
              "eosio"
              "linkauth"
              {:account     prop-acc
               :requirement "dao"
               :code        token-acc
               :type        "transfer"}
              [{:actor prop-acc :permission "active"}]))
        (<p! (eos/transact
              "eosio"
              "linkauth"
              {:account     prop-acc
               :requirement "dao"
               :code        "eosio.msig"
               :type        "propose"}
              [{:actor prop-acc :permission "active"}]))
        (<p! (eos/transact "eosio" "linkauth"
                           {:account     prop-acc
                            :requirement "dao"
                            :code        "eosio.msig"
                            :type        "approve"}
                           [{:actor prop-acc :permission "active"}]))

        ;; allow setfee in force.efx
        (<p! (eos/update-auth
              force-acc
              "dao"
              "active"
              [{:permission {:actor "therealforce" :permission "dao"} :weight 1}]))

        ;; add theeffectdao@dao permission, which will be the parent
        ;; of theeffectdao@highguard, and can set new memterms
        (<p! (eos/update-auth
              dao-acc
              "dao"
              "active"
              [{:permission {:actor prop-acc :permission "dao"} :weight 1}]))
        (<p! (eos/transact
              "eosio"
              "linkauth"
              {:account     dao-acc
               :requirement "dao"
               :code        dao-acc
               :type        "newmemterms"}
              [{:actor dao-acc :permission "active"}]))

        ;; deploy the code
        (<p! (deploy-file prop-acc prop-file))

        (catch js/Error e (prn e))))))
