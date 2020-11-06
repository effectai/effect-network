(ns e2e.dao
  (:require [eos-cljs.core :as eos]
            [e2e.util :as util :refer [should-fail should-fail-with]]
            [cljs.test :refer-macros [deftest is testing run-tests async use-fixtures]]
            [cljs.core.async :refer [go] ]
            [cljs.core.async.interop :refer [<p!]]
            [eos-cljs.macros :refer [promise->]]
            e2e.token
            ))

(def owner-acc e2e.token/owner-acc)
(def dao-acc (eos/random-account "dao"))
(println "dao acc = "dao-acc)

(def terms [{:hash "1e1fe1b13e6e43d8f9cb3263817b24d7dcf8070a8fcaba3e8ced94ea263dd450"}
            {:hash "09de7554ad8e52ce863d60ab5bb60fa60d9401a8ac78d412c6060cb992465fd7"}])

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
     ;; duplicate terms
     (<p! (eos/transact dao-acc "newmemterms" (first terms)))
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
       (is (= $ 0) "incorrect terms version"))
     (<p! (util/wait 500))

     ;; cant regiser someone else
     (<p! (util/should-fail-with
           (eos/transact dao-acc "memberreg"
                         {:account dao-acc
                          :agreedterms (:hash (first terms))}
                         [{:actor owner-acc :permission "active"}])
           (str "missing authority of " dao-acc)))
     
     ;; can register with new terms
     (<p! (eos/transact dao-acc "newmemterms" (second terms)))
     (<p! (util/should-succeed
           (eos/transact dao-acc "memberreg"
                         {:account dao-acc
                          :agreedterms (:hash (second terms))})
           "can register with new terms"))
     (as-> (<p! (eos/get-table-rows dao-acc dao-acc "member")) $
       (group-by #(get % "account") $)
       (get-in $ [dao-acc 0 "agreedtermsversion"])
       (is (= $ 1) "member not found in table"))
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
