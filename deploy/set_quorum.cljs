(ns set-quorum
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

(defn -main [& args]
  (let [private-keys *command-line-args*]
    (eos-node/set-api! :mainnet {:priv-keys private-keys})
    (go
      (try
        (let [actions [{:account       prop-acc
                        :name          "update"
                        :authorization [{:actor      prop-acc
                                         :permission "dao"}]
                        :data
                        {:cycle_duration_sec        1209600
                         :cycle_voting_duration_sec 950400
                         :proposal_cost             {:quantity "100.0000 EFX"
                                                     :contract "effecttokens"}
                         :quorum                    1500000
                         :current_cycle             nil}}
                       {:account       "eosio"
                        :name          "updateauth"
                        :authorization [{:actor      prop-acc
                                         :permission "dao"}]
                        :data
                        {:account    prop-acc
                         :permission "highguard"
                         :parent     "dao"
                         :auth
                         {:keys      []
                          :threshold 1
                          :accounts
                          [{:permission {:actor      dao-acc
                                         :permission "highguard"}
                            :weight     1}]
                          :waits     []}}}
                       {:account       "eosio"
                        :name          "linkauth"
                        :authorization [{:actor      prop-acc
                                         :permission "dao"}]
                        :data
                        {:account     prop-acc
                         :requirement "highguard"
                         :code        prop-acc
                         :type        "update"}}]

              proposer "hazdkmbxgene"]
          (<p! (eos/transact "eosio.msig" "cancel" {:proposer      proposer
                                                    :proposal_name "quorum"
                                                    :canceler      proposer}
                             [{:actor proposer :permission "active"}]))

          (<p!
           (eos/transact
            [{:account       "eosio.msig"
              :name          "propose"
              :authorization [{:actor proposer :permission "active"}]
              :data
              {:proposer      proposer
               :proposal_name "quorum"
               :requested     [{:actor prop-acc :permission "dao"}]
               :trx           {:expiration             "2023-02-01T10:00:00"
                               :ref_block_num          0
                               :ref_block_prefix       0
                               :max_net_usage_words    0
                               :max_cpu_usage_ms       0
                               :delay_sec              0
                               :context_free_actions   []
                               :actions
                               (<p! (.serializeActions @eos/api (clj->js actions)))
                               :transaction_extensions []}}}])))

        (catch js/Error e (prn e))))))
