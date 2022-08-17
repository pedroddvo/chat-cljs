goog.provide('chat.frontend.ws');
chat.frontend.ws.handlers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),(function (m){
return console.log(m.data.text().then((function (p1__12031_SHARP_){
return console.log(p1__12031_SHARP_);
})));
}),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opening a new connection"], 0));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Closing a connection"], 0));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__12032_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error occurred in websocket: ",p1__12032_SHARP_], 0));
})], null);
chat.frontend.ws.socket = wscljs.client.create("ws://localhost:3000/ws",chat.frontend.ws.handlers);
chat.frontend.ws.send_message = (function chat$frontend$ws$send_message(message){
return wscljs.client.send.cljs$core$IFn$_invoke$arity$3(chat.frontend.ws.socket,message,wscljs.format.json);
});

//# sourceMappingURL=chat.frontend.ws.js.map
