(ns efx.test
  (:require efx.token efx.swap
            [cljs.test :refer-macros [run-tests]]))

(defn -main []
  (-> (run-tests 'efx.token)
      (.then #(run-tests 'efx.swap))
      (.then prn)))
