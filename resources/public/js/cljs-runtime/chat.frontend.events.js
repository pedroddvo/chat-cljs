goog.provide('chat.frontend.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request","request",1772954723),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/hello",new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_request_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hello.get","success","hello.get/success",-1183609028)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hello.get","failure","hello.get/failure",-442788799)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-chat-field","update-chat-field",726987271),(function (db,p__12037){
var vec__12038 = p__12037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"chat-field","chat-field",1514929728),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-message","send-message",185030731),(function (db,_){
return chat.frontend.ws.send_message(cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"chat-field","chat-field",1514929728),""));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY);
})], 0));

//# sourceMappingURL=chat.frontend.events.js.map
