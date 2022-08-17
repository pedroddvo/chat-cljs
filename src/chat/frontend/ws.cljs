(ns chat.frontend.ws
  (:require [wscljs.client :as ws]
            [wscljs.format :as fmt]))

(def handlers {:on-message (fn [m] (js/console.log (-> m
                                                       .-data
                                                       .text
                                                       (.then #(js/console.log %)))))
               :on-open   #(println "Opening a new connection")
               :on-close  #(println "Closing a connection")
               :on-error  #(println "Error occurred in websocket: " %)})

(def socket (ws/create "ws://localhost:3000/ws" handlers))

(defn send-message [message]
  (ws/send socket message fmt/json))