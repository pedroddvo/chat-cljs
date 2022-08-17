(ns chat.backend.handlers
  (:require [ring.util.http-response :refer [ok]]
            [chat.backend.ws :as ws]
            [taoensso.timbre :as timbre]))

(defn send-handler [{data :body-params}]
  (println "Recieved message " data)
  (ok {:response data}))

(defn ws-handler [request]
  (ws/ws-handler request))