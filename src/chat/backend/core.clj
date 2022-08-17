(ns chat.backend.core
  (:require [chat.backend.handlers :as handler]
            [reitit.ring :as ring]
            [ring.middleware.cors :refer [wrap-cors]]

            [reitit.coercion.spec]
            [reitit.ring.coercion :as coercion]

            [chat.backend.ws :as ws]

            [muuntaja.core :as m]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [org.httpkit.server :as server]))

(def router
  (ring/router
   ["/ws" handler/ws-handler]
   
   {:data {:coercion   reitit.coercion.spec/coercion
           :muuntaja   m/instance
           :middleware [muuntaja/format-middleware
                        coercion/coerce-response-middleware
                        coercion/coerce-request-middleware]}}))

(def app
  (ring/ring-handler
   router))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn start-server []
  (println "Starting server on port 3000")
  (reset! server (server/run-server
    (wrap-cors #'app
               :access-control-allow-origin #".*"
               :access-control-allow-methods #{:get :put :post :delete :options})
    {:port 3000})))