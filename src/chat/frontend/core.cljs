(ns chat.frontend.core
  (:require [reagent.dom :as rd]
            [chat.frontend.view :as view]
            [chat.frontend.ws :as ws]))

(rd/render
 [view/chat-view]
 (js/document.getElementById "app"))