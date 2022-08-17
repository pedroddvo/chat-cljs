(ns chat.backend.ws
  (:require [org.httpkit.server :refer [send! with-channel on-close on-receive]]
            [muuntaja.core :as m]
            [taoensso.timbre :as t]))

(defonce channels (atom #{}))

;; Implement database support... eventually
(defonce messages (atom []))

(defn connect! [channel]
  (swap! channels conj channel))

(defn disconnect! [channel status]
  (swap! channels #(remove #{channel} %)))

(defn notify-clients [msg]
  (t/debug (m/encode "application/json" msg))
  (doseq [channel @channels]
    (send! channel (m/encode "application/json" msg))))

(defn ws-handler [request]
  #_{:clj-kondo/ignore [:unresolved-symbol]}
  (with-channel request channel
    (connect! channel)
    (on-close channel (partial disconnect! channel))
    (on-receive channel
                #(do
                  (swap! messages conj %)
                  (notify-clients @messages)))))