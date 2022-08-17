goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12434){
var map__12435 = p__12434;
var map__12435__$1 = cljs.core.__destructure_map(map__12435);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12435__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12436_12465 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12437_12466 = null;
var count__12438_12467 = (0);
var i__12439_12468 = (0);
while(true){
if((i__12439_12468 < count__12438_12467)){
var vec__12450_12469 = chunk__12437_12466.cljs$core$IIndexed$_nth$arity$2(null,i__12439_12468);
var k_12470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450_12469,(0),null);
var cb_12471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12450_12469,(1),null);
try{var G__12456_12472 = cljs.core.deref(re_frame.trace.traces);
(cb_12471.cljs$core$IFn$_invoke$arity$1 ? cb_12471.cljs$core$IFn$_invoke$arity$1(G__12456_12472) : cb_12471.call(null,G__12456_12472));
}catch (e12454){var e_12474 = e12454;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12470,"while storing",cljs.core.deref(re_frame.trace.traces),e_12474], 0));
}

var G__12475 = seq__12436_12465;
var G__12476 = chunk__12437_12466;
var G__12477 = count__12438_12467;
var G__12478 = (i__12439_12468 + (1));
seq__12436_12465 = G__12475;
chunk__12437_12466 = G__12476;
count__12438_12467 = G__12477;
i__12439_12468 = G__12478;
continue;
} else {
var temp__5804__auto___12479 = cljs.core.seq(seq__12436_12465);
if(temp__5804__auto___12479){
var seq__12436_12480__$1 = temp__5804__auto___12479;
if(cljs.core.chunked_seq_QMARK_(seq__12436_12480__$1)){
var c__5568__auto___12481 = cljs.core.chunk_first(seq__12436_12480__$1);
var G__12482 = cljs.core.chunk_rest(seq__12436_12480__$1);
var G__12483 = c__5568__auto___12481;
var G__12484 = cljs.core.count(c__5568__auto___12481);
var G__12485 = (0);
seq__12436_12465 = G__12482;
chunk__12437_12466 = G__12483;
count__12438_12467 = G__12484;
i__12439_12468 = G__12485;
continue;
} else {
var vec__12457_12486 = cljs.core.first(seq__12436_12480__$1);
var k_12487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457_12486,(0),null);
var cb_12488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457_12486,(1),null);
try{var G__12461_12489 = cljs.core.deref(re_frame.trace.traces);
(cb_12488.cljs$core$IFn$_invoke$arity$1 ? cb_12488.cljs$core$IFn$_invoke$arity$1(G__12461_12489) : cb_12488.call(null,G__12461_12489));
}catch (e12460){var e_12490 = e12460;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12487,"while storing",cljs.core.deref(re_frame.trace.traces),e_12490], 0));
}

var G__12491 = cljs.core.next(seq__12436_12480__$1);
var G__12492 = null;
var G__12493 = (0);
var G__12494 = (0);
seq__12436_12465 = G__12491;
chunk__12437_12466 = G__12492;
count__12438_12467 = G__12493;
i__12439_12468 = G__12494;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
