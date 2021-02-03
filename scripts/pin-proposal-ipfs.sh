#!/usr/bin/env bb

;; Pin proposal IPFS objects to Pinata.
;;
;; Usage:
;; - Install babashka
;; - Get a Pinata API JWT with pinning permissions
;; - Store it in the PINATA_JWT environment variable
;; - Run this script
;;
;; This script fetches the IPFS hashes of all proposals in the `daoproposals`
;; contract and pins them using the Pinata API. This serves as an extra backup
;; on IPFS in case some core nodes go offline.

(ns validate-txs
  (:require [bencode.core :as b]
            [clojure.java.shell :refer [sh]]
            [babashka.curl :as curl]
            [cheshire.core :as json]
            [clojure.string :as string]))

(def eos-api (or (System/getenv "EOS_API") "http://eos.greymass.com"))
(def pinata-jwt (System/getenv "PINATA_JWT"))
(def pinata-url "https://api.pinata.cloud")
(def prop-contract "daoproposals")

(defn get-table-rows [table scope code]
  (->
   (curl/post (str eos-api "/v1/chain/get_table_rows")
              {:body (json/generate-string {"table" table
                                            "scope" scope
                                            "code" code
                                            "limit" 30
                                            "json" true})
               :content-type :json
               :accept :json})
   :body
   (json/decode true)
   :rows))

(defn get-proposals []
  (get-table-rows "proposal" prop-contract prop-contract))

(defn pinata-pin-by-hash! [hash]
  (curl/post (str pinata-url "/pinning/pinByHash")
             {:body (json/generate-string {"hashToPin" hash})
              :headers {"Authorization" (str "Bearer " pinata-jwt)
                        "Content-Type" "application/json"}}))


(println "Collecting hashes...")

(def hashes (->> (get-proposals)
                 (map :content_hash)))

(println (str "Pinning " (count hashes) " files..."))

(doall (map pinata-pin-by-hash! hashes))

(println "Done.")
