(ns e2e.test
  (:require e2e.token e2e.swap e2e.stake
            [cljs.test :refer-macros [run-tests]]))

(defn -main []
  (-> (run-tests 'e2e.token)
      (.then #(run-tests 'e2e.swap))
      (.then #(run-tests 'e2e.stake))
      (.then prn)))
