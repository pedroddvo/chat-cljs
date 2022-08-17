(ns chat.frontend.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [chat.frontend.ws :as ws]
            [day8.re-frame.http-fx]))

(rf/reg-event-fx
 :request
 (fn [_ _]
   {:http-xhrio {:method :get
                 :uri "http://localhost:3000/hello"
                 :response-format (ajax/transit-response-format)
                 :format (ajax/transit-request-format)
                 :on-success [:hello.get/success]
                 :on-failure [:hello.get/failure]}}))

(rf/reg-event-db
 :update-chat-field
 (fn [db [_ v]]
   (assoc db :chat-field v)))

;; (rf/reg-event-fx
;;  :send-message
;;  (fn [{db :db} _]
;;    (println (str "Sending message with params " (get db :chat-field "")))
;;    {:http-xhrio {:method :get
;;                  :uri "http://localhost:3000/wstest"
;;                  :params (get db :chat-field "")
;;                  :response-format (ajax/transit-response-format)
;;                  :format          (ajax/transit-request-format)
;;                  :on-success [:send-message/success]
;;                  :on-failure [:send-message/failure]}}))

;; (rf/reg-event-db
;;  :send-message/success
;;  (fn [_ response]
;;    (println (str "Success in sending message!"))
;;    (rf/dispatch [:update-messages])))

;; (rf/reg-event-db
;;  :send-message/failure
;;  (fn [_ e]
;;    (println (str "Failure in sending message!\n" e))))

(rf/reg-event-db
 :send-message
 (fn [db _]
   (ws/send-message (get db :chat-field ""))))

(rf/reg-sub
 :messages
 (fn [db _]
   (get db :messages [])))