(ns efx.test
  (:require efx.token efx.swap efx.stake
            [cljs.test :refer-macros [run-tests]]))

(defn -main []
  (-> (run-tests 'efx.token)
      (.then #(run-tests 'efx.swap))
      (.then #(run-tests 'efx.stake))
      (.then prn)))
