(ns e2e.dao
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [should-fail should-fail-with]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go] ]
            [cljs.core.async.interop :refer [<p!]]
            e2e.token))

(def owner-acc e2e.token/owner-acc)
(def dao-acc (eos/random-account "dao"))
(println "dao acc = "dao-acc)

(def terms [{:hash "1e1fe1b13e6e43d8f9cb3263817b24d7dcf8070a8fcaba3e8ced94ea263dd450"}
            {:hash "09de7554ad8e52ce863d60ab5bb60fa60d9401a8ac78d412c6060cb992465fd7"}])

(defn deploy-dao
  "Deploy a basic dao account and fill it with data for testing"
  ([acc] (deploy-dao acc []))
  ([acc members]
   (let [terms (first terms)]
     (go (<p! (eos/create-account owner-acc acc))
         (<p! (eos/deploy acc "contracts/effect-dao/effect-dao"))
         (<p! (eos/transact acc "newmemterms" terms))
         (doseq [m members]
           (<p! (eos/transact acc "memberreg"
                              {:account owner-acc :agreedterms (:hash terms)}
                              [{:actor m :permission "active"}])))))))

(use-fixtures :once
  {:before
   (fn []
     (async
      done
      (go (<p! (eos/create-account owner-acc dao-acc))
          (<p! (eos/deploy dao-acc "contracts/effect-dao/effect-dao"))
          (done))))
   :after (fn [])})

(deftest new-member-terms
  (async
   done
   (go
     ;; can register terms
     (<p! (eos/transact dao-acc "newmemterms" (first terms)))
     (let [rows (<p! (eos/get-table-rows dao-acc dao-acc "memberterms"))]
       (is (= (count rows) 1) "there should be 1 terms")
       (is (= (get-in rows [0 "hash"]) (-> terms first :hash)) "wrong term hash"))

     ;; duplicate terms
     (<p! (util/wait 1000))
     (<p!
      (util/should-fail-with
       (eos/transact dao-acc "newmemterms" (first terms))
       "terms are a duplicate of the latest"))

     ;; needs legal hash
     (<p!
      (js/Promise.all
       #js [(util/should-fail-with
             (eos/transact dao-acc "newmemterms" {:hash "aabb"})
             "incorrect size")
            (util/should-fail-with
             (eos/transact dao-acc "newmemterms" {:hash "aabbaabbaabbaabbaabb"})
             "incorrect size")]))

     ;; can register more terms
     (<p! (eos/transact dao-acc "newmemterms" (second terms)))
     (<p! (eos/transact dao-acc "newmemterms" (first terms)))
     (<p! (util/wait 500))
     (let [rows (<p! (eos/get-table-rows dao-acc dao-acc "memberterms"))]
       (prn rows)
       (is (= (count rows) 3) "there should be 3 terms")
       (is (= (get-in rows [0 "hash"]) (-> terms first :hash)) "wrong term hash"))
     (done))))
;
(deftest member-register
  (async
   done
   (go
     ;; needs correct terms
     (<p! (util/should-fail-with
           (eos/transact dao-acc "memberreg"
                         {:account dao-acc
                          :agreedterms (:hash (second terms))})
           "agreed terms are not the latest"))
     (is (empty? (<p! (eos/get-table-rows dao-acc dao-acc "member")))
         "there shouldn't be any registered members")

     ;; can register
     (<p! (util/should-succeed
           (eos/transact dao-acc "memberreg"
                         {:account dao-acc
                          :agreedterms (:hash (first terms))})
           "can register"))
     (as-> (<p! (eos/get-table-rows dao-acc dao-acc "member")) $
       (group-by #(get % "account") $)
       (get-in $ [dao-acc 0 "agreedtermsversion"])
       (is (= $ 2) "incorrect terms version"))
     (<p! (util/wait 500))

     ;; cant regiser someone else
     (<p! (util/should-fail-with
           (eos/transact dao-acc "memberreg"
                         {:account dao-acc
                          :agreedterms (:hash (first terms))}
                         [{:actor owner-acc :permission "active"}])
           (str "missing authority of " dao-acc)))

     ;; can update terms of existing registration
     (<p! (eos/transact dao-acc "newmemterms" (second terms)))
     (<p! (util/should-succeed
           (eos/transact dao-acc "memberreg"
                         {:account dao-acc
                          :agreedterms (:hash (second terms))})
           "can register with new terms"))
     (as-> (<p! (eos/get-table-rows dao-acc dao-acc "member")) $
       (group-by #(get % "account") $)
       (get-in $ [dao-acc 0 "agreedtermsversion"])
       (is (= $ 3) "member not found in table"))
     (done))))

(deftest member-unregister
  (async
   done
   (go
     ;; cant unregister other member
     (<p! (util/should-fail-with
           (eos/transact dao-acc "memberunreg" {:account dao-acc}
                         [{:actor owner-acc :permission "active"}])
           (str "missing authority of " dao-acc)))
     ;; cant unregister if not registered member
     (<p! (util/should-fail-with
           (eos/transact dao-acc "memberunreg" {:account owner-acc}
                         [{:actor owner-acc :permission "active"}])
           "member is not registered"))
     ;; can unregister
     (<p! (util/should-succeed
           (eos/transact dao-acc "memberunreg" {:account dao-acc})))
     (as-> (<p! (eos/get-table-rows dao-acc dao-acc "member")) $
       (is (empty? $) "unregistered member found in table"))
     (done))))

(defn -main [& args]
    (run-tests))
