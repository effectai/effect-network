#!/usr/bin/env bb

;; Pin proposal IPFS objects to Amazon S3 or Pinata.
;;
;; Usage:
;; - Install babashka
;; - Install aws CLI
;; - Configure aws CLI with credentials
;; - Get a Pinata API JWT with pinning permissions
;; - Store it in the PINATA_JWT environment variable
;; - Run this script for example: ./pin-proposal-ipfs.sh --target "S3"
;;
;; This script fetches the IPFS hashes of all proposals in the `daoproposals`
;; contract and pins them using the Pinata API. This serves as an extra backup
;; on IPFS in case some core nodes go offline.

(ns validate-txs
  (:require [bencode.core :as b]
            [clojure.java.shell :refer [sh]]
            [babashka.curl :as curl]
            [cheshire.core :as json]
            [clojure.string :as string]
            [clojure.tools.cli :refer [parse-opts]]))

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
                                            "limit" 1000
                                            "json" true})
               :content-type :json
               :accept :json})
   :body
   (json/decode true)
   :rows))

(defn get-proposals []
  (get-table-rows "proposal" prop-contract prop-contract))

;; retrieve hashes from blockchain.
(def hashes (->> (get-proposals)
                 (map :content_hash)))

(defn pinata-pin-by-hash! [hash]
  (println "PINATA: Pinning " hash)
  (print (curl/post (str pinata-url "/pinning/pinByHash")
             {:body (json/generate-string {"hashToPin" hash})
              :headers {"Authorization" (str "Bearer " pinata-jwt)
                        "Content-Type" "application/json"}})))

(defn get-ipfs-content [hash]
  (:body (curl/get (str "https://ipfs.effect.ai/ipfs/" hash))))

(defn s3-copy-proposal-content! [hash]
  (println "S3: Backing up " hash)
  (let [content (get-ipfs-content hash)]
  (print (:err (sh "bash" "-c" (str "echo " (json/generate-string content) " | aws s3 cp - s3://dao-backups/" hash)))))
)

(defn choose-target [target]
  (case target
    ;; for each hash, backup content to S3.
    "S3"  (doall (map s3-copy-proposal-content! hashes))

    ;; pin hashes on pinata.
    "PINATA"  (doall (map pinata-pin-by-hash! hashes)))
  )
  
(def cli-options
  ;; An option with a required argument
  [["-t" "--target S3|PINATA" "Target to backup to."
    :default "PINATA"
    :parse-fn #(choose-target %)]])

(:options (parse-opts *command-line-args* cli-options))

(println "Done.")