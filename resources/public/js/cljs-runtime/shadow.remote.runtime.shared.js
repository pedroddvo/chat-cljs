goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16157,res){
var map__16158 = p__16157;
var map__16158__$1 = cljs.core.__destructure_map(map__16158);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16158__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16158__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16159 = res;
var G__16159__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16159,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16159);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16159__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16159__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16161 = arguments.length;
switch (G__16161) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16162,msg,handlers,timeout_after_ms){
var map__16163 = p__16162;
var map__16163__$1 = cljs.core.__destructure_map(map__16163);
var runtime = map__16163__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16163__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16339 = arguments.length;
var i__5770__auto___16340 = (0);
while(true){
if((i__5770__auto___16340 < len__5769__auto___16339)){
args__5775__auto__.push((arguments[i__5770__auto___16340]));

var G__16341 = (i__5770__auto___16340 + (1));
i__5770__auto___16340 = G__16341;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16175,ev,args){
var map__16176 = p__16175;
var map__16176__$1 = cljs.core.__destructure_map(map__16176);
var runtime = map__16176__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16176__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16177 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16180 = null;
var count__16181 = (0);
var i__16182 = (0);
while(true){
if((i__16182 < count__16181)){
var ext = chunk__16180.cljs$core$IIndexed$_nth$arity$2(null,i__16182);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16342 = seq__16177;
var G__16343 = chunk__16180;
var G__16344 = count__16181;
var G__16345 = (i__16182 + (1));
seq__16177 = G__16342;
chunk__16180 = G__16343;
count__16181 = G__16344;
i__16182 = G__16345;
continue;
} else {
var G__16346 = seq__16177;
var G__16347 = chunk__16180;
var G__16348 = count__16181;
var G__16349 = (i__16182 + (1));
seq__16177 = G__16346;
chunk__16180 = G__16347;
count__16181 = G__16348;
i__16182 = G__16349;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16177);
if(temp__5804__auto__){
var seq__16177__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16177__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16177__$1);
var G__16350 = cljs.core.chunk_rest(seq__16177__$1);
var G__16351 = c__5568__auto__;
var G__16352 = cljs.core.count(c__5568__auto__);
var G__16353 = (0);
seq__16177 = G__16350;
chunk__16180 = G__16351;
count__16181 = G__16352;
i__16182 = G__16353;
continue;
} else {
var ext = cljs.core.first(seq__16177__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16354 = cljs.core.next(seq__16177__$1);
var G__16355 = null;
var G__16356 = (0);
var G__16357 = (0);
seq__16177 = G__16354;
chunk__16180 = G__16355;
count__16181 = G__16356;
i__16182 = G__16357;
continue;
} else {
var G__16358 = cljs.core.next(seq__16177__$1);
var G__16359 = null;
var G__16360 = (0);
var G__16361 = (0);
seq__16177 = G__16358;
chunk__16180 = G__16359;
count__16181 = G__16360;
i__16182 = G__16361;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16169){
var G__16170 = cljs.core.first(seq16169);
var seq16169__$1 = cljs.core.next(seq16169);
var G__16171 = cljs.core.first(seq16169__$1);
var seq16169__$2 = cljs.core.next(seq16169__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16170,G__16171,seq16169__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16192,p__16193){
var map__16194 = p__16192;
var map__16194__$1 = cljs.core.__destructure_map(map__16194);
var runtime = map__16194__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16194__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16195 = p__16193;
var map__16195__$1 = cljs.core.__destructure_map(map__16195);
var msg = map__16195__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16195__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16196 = cljs.core.deref(state_ref);
var map__16196__$1 = cljs.core.__destructure_map(map__16196);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16196__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16196__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16197){
var map__16198 = p__16197;
var map__16198__$1 = cljs.core.__destructure_map(map__16198);
var runtime = map__16198__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16199,msg){
var map__16200 = p__16199;
var map__16200__$1 = cljs.core.__destructure_map(map__16200);
var runtime = map__16200__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16200__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16206,key,p__16207){
var map__16208 = p__16206;
var map__16208__$1 = cljs.core.__destructure_map(map__16208);
var state = map__16208__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16208__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16209 = p__16207;
var map__16209__$1 = cljs.core.__destructure_map(map__16209);
var spec = map__16209__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16215,key,spec){
var map__16216 = p__16215;
var map__16216__$1 = cljs.core.__destructure_map(map__16216);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16216__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16217_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16217_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16218_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16218_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16219_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16219_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16220_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16220_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16222_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16222_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16250,key){
var map__16251 = p__16250;
var map__16251__$1 = cljs.core.__destructure_map(map__16251);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16251__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16255,msg){
var map__16256 = p__16255;
var map__16256__$1 = cljs.core.__destructure_map(map__16256);
var runtime = map__16256__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16256__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16278,p__16279){
var map__16280 = p__16278;
var map__16280__$1 = cljs.core.__destructure_map(map__16280);
var runtime = map__16280__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16281 = p__16279;
var map__16281__$1 = cljs.core.__destructure_map(map__16281);
var msg = map__16281__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16307 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16309 = null;
var count__16310 = (0);
var i__16311 = (0);
while(true){
if((i__16311 < count__16310)){
var map__16332 = chunk__16309.cljs$core$IIndexed$_nth$arity$2(null,i__16311);
var map__16332__$1 = cljs.core.__destructure_map(map__16332);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16332__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16418 = seq__16307;
var G__16419 = chunk__16309;
var G__16420 = count__16310;
var G__16421 = (i__16311 + (1));
seq__16307 = G__16418;
chunk__16309 = G__16419;
count__16310 = G__16420;
i__16311 = G__16421;
continue;
} else {
var G__16422 = seq__16307;
var G__16423 = chunk__16309;
var G__16424 = count__16310;
var G__16425 = (i__16311 + (1));
seq__16307 = G__16422;
chunk__16309 = G__16423;
count__16310 = G__16424;
i__16311 = G__16425;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16307);
if(temp__5804__auto__){
var seq__16307__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16307__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16307__$1);
var G__16426 = cljs.core.chunk_rest(seq__16307__$1);
var G__16427 = c__5568__auto__;
var G__16428 = cljs.core.count(c__5568__auto__);
var G__16429 = (0);
seq__16307 = G__16426;
chunk__16309 = G__16427;
count__16310 = G__16428;
i__16311 = G__16429;
continue;
} else {
var map__16333 = cljs.core.first(seq__16307__$1);
var map__16333__$1 = cljs.core.__destructure_map(map__16333);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16333__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16430 = cljs.core.next(seq__16307__$1);
var G__16431 = null;
var G__16432 = (0);
var G__16433 = (0);
seq__16307 = G__16430;
chunk__16309 = G__16431;
count__16310 = G__16432;
i__16311 = G__16433;
continue;
} else {
var G__16434 = cljs.core.next(seq__16307__$1);
var G__16435 = null;
var G__16436 = (0);
var G__16437 = (0);
seq__16307 = G__16434;
chunk__16309 = G__16435;
count__16310 = G__16436;
i__16311 = G__16437;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
