(ns set-highguard
  (:require
   [eos-cljs.core :as eos]
   [cljs.core :refer [*command-line-args*]]
   [clojure.string :as string]
   [clojure.pprint :refer [pprint]]
   [cljs.core.async.interop :refer [<p!]]
   [cljs.core.async :refer [go] :as async]

   [eos-cljs.node-api :as eos-node :refer [deploy-file]]
   [eos-cljs.macros :refer-macros [<p-may-fail!]]))

(let [actions [{:account       "eosio"
                :name          "updateauth"
                :authorization [{:actor "theeffectdao" :permission "dao"}]
                :data          {:account    "theeffectdao"
                                :permission "highguard",
                                :parent     "dao",
                                :auth
                                {:threshold 4
                                 :keys []
                                 :accounts [{:permission {:actor "cryptonode42"
                                                          :permission "active"}
                                             :weight 1}
                                            {:permission {:actor "djstrikanova"
                                                          :permission "active"}
                                             :weight 1}
                                            {:permission {:actor "hazdkmbxgene"
                                                          :permission "active"}
                                             :weight 1}
                                            {:permission {:actor "laurenseosio"
                                                          :permission "active"}
                                             :weight 1}
                                            {:permission {:actor "miggysmallz1"
                                                          :permission "active"}
                                             :weight 1}
                                            {:permission {:actor "rochelle.ai"
                                                          :permission "active"}
                                             :weight 1}
                                            {:permission {:actor "scarletalpha"
                                                          :permission "active"}
                                             :weight 1}]
                                 :waits []}}}]
      proposer "hazdkmbxgene"]
  (<p!
   (eos/transact
    [{:account       "eosio.msig"
      :name          "propose"
      :authorization [{:actor proposer :permission "active"}]
      :data
      {:proposer      proposer
       :proposal_name "highguard"
       :requested     [{:actor prop-acc :permission "dao"}]
       :trx           {:expiration             "2023-02-01T10:00:00"
                       :ref_block_num          0
                       :ref_block_prefix       0
                       :max_net_usage_words    0
                       :max_cpu_usage_ms       0
                       :delay_sec              0
                       :context_free_actions   []
                       :actions                (<p! (.serializeActions @eos/api (clj->js actions)))
                       :transaction_extensions []}}}])))
