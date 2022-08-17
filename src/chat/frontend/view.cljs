(ns chat.frontend.view
  (:require [re-frame.core :as rf]
            [chat.frontend.events]))

(defn message-html [messages]
  (map
   #(conj [:p] %)
   messages))

(def message-box
  [:div.p-4.w-full.h-full.relative.flex.flex-row
   (message-html @(rf/subscribe [:messages]))])

(def chat-box
  [:div.m-4.p-4.absolute.z-10.shadow-xl.border-2.rounded-lg.flex.flex-col.items-center.gap-3
   {:class "h-1/4 w-3/4"}
   [:div.flex.flex-row.justify-between.w-full
    [:h1.flex-none.font-semibold.text-lg "Message"]
    [:button.flex-none.rounded-full.bg-green-600.text-green-100.px-4
     {:on-click #(rf/dispatch [:send-message])}
     "Send"]]
   [:textarea.flex-grow.h-full.w-full
    {:on-change #(rf/dispatch [:update-chat-field (-> % .-target .-value)])}]])

(defn chat-view []
  [:div.flex.items-end.justify-around.w-full.h-full
   message-box
   chat-box])