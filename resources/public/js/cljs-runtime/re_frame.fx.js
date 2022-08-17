goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__12696 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12697 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12697);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___12827 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___12827)){
var new_db_12828 = temp__5804__auto___12827;
var fexpr__12702_12829 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12702_12829.cljs$core$IFn$_invoke$arity$1 ? fexpr__12702_12829.cljs$core$IFn$_invoke$arity$1(new_db_12828) : fexpr__12702_12829.call(null,new_db_12828));
} else {
}

var seq__12704 = cljs.core.seq(effects_without_db);
var chunk__12705 = null;
var count__12706 = (0);
var i__12707 = (0);
while(true){
if((i__12707 < count__12706)){
var vec__12719 = chunk__12705.cljs$core$IIndexed$_nth$arity$2(null,i__12707);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12719,(1),null);
var temp__5802__auto___12838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12838)){
var effect_fn_12839 = temp__5802__auto___12838;
(effect_fn_12839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12840 = seq__12704;
var G__12841 = chunk__12705;
var G__12842 = count__12706;
var G__12843 = (i__12707 + (1));
seq__12704 = G__12840;
chunk__12705 = G__12841;
count__12706 = G__12842;
i__12707 = G__12843;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12704);
if(temp__5804__auto__){
var seq__12704__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12704__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12704__$1);
var G__12844 = cljs.core.chunk_rest(seq__12704__$1);
var G__12845 = c__5568__auto__;
var G__12846 = cljs.core.count(c__5568__auto__);
var G__12847 = (0);
seq__12704 = G__12844;
chunk__12705 = G__12845;
count__12706 = G__12846;
i__12707 = G__12847;
continue;
} else {
var vec__12724 = cljs.core.first(seq__12704__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(1),null);
var temp__5802__auto___12848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12848)){
var effect_fn_12849 = temp__5802__auto___12848;
(effect_fn_12849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12850 = cljs.core.next(seq__12704__$1);
var G__12851 = null;
var G__12852 = (0);
var G__12853 = (0);
seq__12704 = G__12850;
chunk__12705 = G__12851;
count__12706 = G__12852;
i__12707 = G__12853;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12412__auto___12854 = re_frame.interop.now();
var duration__12413__auto___12855 = (end__12412__auto___12854 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12413__auto___12855,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12412__auto___12854);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12696);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___12856 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___12856)){
var new_db_12857 = temp__5804__auto___12856;
var fexpr__12729_12858 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12729_12858.cljs$core$IFn$_invoke$arity$1 ? fexpr__12729_12858.cljs$core$IFn$_invoke$arity$1(new_db_12857) : fexpr__12729_12858.call(null,new_db_12857));
} else {
}

var seq__12730 = cljs.core.seq(effects_without_db);
var chunk__12731 = null;
var count__12732 = (0);
var i__12733 = (0);
while(true){
if((i__12733 < count__12732)){
var vec__12753 = chunk__12731.cljs$core$IIndexed$_nth$arity$2(null,i__12733);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12753,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12753,(1),null);
var temp__5802__auto___12859 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12859)){
var effect_fn_12860 = temp__5802__auto___12859;
(effect_fn_12860.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12860.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12860.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12861 = seq__12730;
var G__12862 = chunk__12731;
var G__12863 = count__12732;
var G__12864 = (i__12733 + (1));
seq__12730 = G__12861;
chunk__12731 = G__12862;
count__12732 = G__12863;
i__12733 = G__12864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12730);
if(temp__5804__auto__){
var seq__12730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12730__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12730__$1);
var G__12865 = cljs.core.chunk_rest(seq__12730__$1);
var G__12866 = c__5568__auto__;
var G__12867 = cljs.core.count(c__5568__auto__);
var G__12868 = (0);
seq__12730 = G__12865;
chunk__12731 = G__12866;
count__12732 = G__12867;
i__12733 = G__12868;
continue;
} else {
var vec__12767 = cljs.core.first(seq__12730__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(1),null);
var temp__5802__auto___12869 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12869)){
var effect_fn_12870 = temp__5802__auto___12869;
(effect_fn_12870.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12870.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12870.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12871 = cljs.core.next(seq__12730__$1);
var G__12872 = null;
var G__12873 = (0);
var G__12874 = (0);
seq__12730 = G__12871;
chunk__12731 = G__12872;
count__12732 = G__12873;
i__12733 = G__12874;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__12777){
var map__12778 = p__12777;
var map__12778__$1 = cljs.core.__destructure_map(map__12778);
var effect = map__12778__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12778__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12778__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__12780 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12781 = null;
var count__12782 = (0);
var i__12783 = (0);
while(true){
if((i__12783 < count__12782)){
var effect = chunk__12781.cljs$core$IIndexed$_nth$arity$2(null,i__12783);
re_frame.fx.dispatch_later(effect);


var G__12875 = seq__12780;
var G__12876 = chunk__12781;
var G__12877 = count__12782;
var G__12878 = (i__12783 + (1));
seq__12780 = G__12875;
chunk__12781 = G__12876;
count__12782 = G__12877;
i__12783 = G__12878;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12780);
if(temp__5804__auto__){
var seq__12780__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12780__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12780__$1);
var G__12879 = cljs.core.chunk_rest(seq__12780__$1);
var G__12880 = c__5568__auto__;
var G__12881 = cljs.core.count(c__5568__auto__);
var G__12882 = (0);
seq__12780 = G__12879;
chunk__12781 = G__12880;
count__12782 = G__12881;
i__12783 = G__12882;
continue;
} else {
var effect = cljs.core.first(seq__12780__$1);
re_frame.fx.dispatch_later(effect);


var G__12883 = cljs.core.next(seq__12780__$1);
var G__12884 = null;
var G__12885 = (0);
var G__12886 = (0);
seq__12780 = G__12883;
chunk__12781 = G__12884;
count__12782 = G__12885;
i__12783 = G__12886;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__12784 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__12785 = null;
var count__12786 = (0);
var i__12787 = (0);
while(true){
if((i__12787 < count__12786)){
var vec__12799 = chunk__12785.cljs$core$IIndexed$_nth$arity$2(null,i__12787);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___12887 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12887)){
var effect_fn_12888 = temp__5802__auto___12887;
(effect_fn_12888.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12888.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12888.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12889 = seq__12784;
var G__12890 = chunk__12785;
var G__12891 = count__12786;
var G__12892 = (i__12787 + (1));
seq__12784 = G__12889;
chunk__12785 = G__12890;
count__12786 = G__12891;
i__12787 = G__12892;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12784);
if(temp__5804__auto__){
var seq__12784__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12784__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12784__$1);
var G__12893 = cljs.core.chunk_rest(seq__12784__$1);
var G__12894 = c__5568__auto__;
var G__12895 = cljs.core.count(c__5568__auto__);
var G__12896 = (0);
seq__12784 = G__12893;
chunk__12785 = G__12894;
count__12786 = G__12895;
i__12787 = G__12896;
continue;
} else {
var vec__12802 = cljs.core.first(seq__12784__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___12897 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12897)){
var effect_fn_12898 = temp__5802__auto___12897;
(effect_fn_12898.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12898.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12898.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12899 = cljs.core.next(seq__12784__$1);
var G__12900 = null;
var G__12901 = (0);
var G__12902 = (0);
seq__12784 = G__12899;
chunk__12785 = G__12900;
count__12786 = G__12901;
i__12787 = G__12902;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12806 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12807 = null;
var count__12808 = (0);
var i__12809 = (0);
while(true){
if((i__12809 < count__12808)){
var event = chunk__12807.cljs$core$IIndexed$_nth$arity$2(null,i__12809);
re_frame.router.dispatch(event);


var G__12903 = seq__12806;
var G__12904 = chunk__12807;
var G__12905 = count__12808;
var G__12906 = (i__12809 + (1));
seq__12806 = G__12903;
chunk__12807 = G__12904;
count__12808 = G__12905;
i__12809 = G__12906;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12806);
if(temp__5804__auto__){
var seq__12806__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12806__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12806__$1);
var G__12907 = cljs.core.chunk_rest(seq__12806__$1);
var G__12908 = c__5568__auto__;
var G__12909 = cljs.core.count(c__5568__auto__);
var G__12910 = (0);
seq__12806 = G__12907;
chunk__12807 = G__12908;
count__12808 = G__12909;
i__12809 = G__12910;
continue;
} else {
var event = cljs.core.first(seq__12806__$1);
re_frame.router.dispatch(event);


var G__12911 = cljs.core.next(seq__12806__$1);
var G__12912 = null;
var G__12913 = (0);
var G__12914 = (0);
seq__12806 = G__12911;
chunk__12807 = G__12912;
count__12808 = G__12913;
i__12809 = G__12914;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12814 = cljs.core.seq(value);
var chunk__12815 = null;
var count__12816 = (0);
var i__12817 = (0);
while(true){
if((i__12817 < count__12816)){
var event = chunk__12815.cljs$core$IIndexed$_nth$arity$2(null,i__12817);
clear_event(event);


var G__12915 = seq__12814;
var G__12916 = chunk__12815;
var G__12917 = count__12816;
var G__12918 = (i__12817 + (1));
seq__12814 = G__12915;
chunk__12815 = G__12916;
count__12816 = G__12917;
i__12817 = G__12918;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12814);
if(temp__5804__auto__){
var seq__12814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12814__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12814__$1);
var G__12919 = cljs.core.chunk_rest(seq__12814__$1);
var G__12920 = c__5568__auto__;
var G__12921 = cljs.core.count(c__5568__auto__);
var G__12922 = (0);
seq__12814 = G__12919;
chunk__12815 = G__12920;
count__12816 = G__12921;
i__12817 = G__12922;
continue;
} else {
var event = cljs.core.first(seq__12814__$1);
clear_event(event);


var G__12923 = cljs.core.next(seq__12814__$1);
var G__12924 = null;
var G__12925 = (0);
var G__12934 = (0);
seq__12814 = G__12923;
chunk__12815 = G__12924;
count__12816 = G__12925;
i__12817 = G__12934;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
