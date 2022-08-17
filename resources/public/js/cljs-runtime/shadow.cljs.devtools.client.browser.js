goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18181 = arguments.length;
var i__5770__auto___18182 = (0);
while(true){
if((i__5770__auto___18182 < len__5769__auto___18181)){
args__5775__auto__.push((arguments[i__5770__auto___18182]));

var G__18183 = (i__5770__auto___18182 + (1));
i__5770__auto___18182 = G__18183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17899){
var G__17900 = cljs.core.first(seq17899);
var seq17899__$1 = cljs.core.next(seq17899);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17900,seq17899__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17901 = cljs.core.seq(sources);
var chunk__17902 = null;
var count__17903 = (0);
var i__17904 = (0);
while(true){
if((i__17904 < count__17903)){
var map__17911 = chunk__17902.cljs$core$IIndexed$_nth$arity$2(null,i__17904);
var map__17911__$1 = cljs.core.__destructure_map(map__17911);
var src = map__17911__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17912){var e_18184 = e17912;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18184);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18184.message)].join('')));
}

var G__18185 = seq__17901;
var G__18186 = chunk__17902;
var G__18187 = count__17903;
var G__18188 = (i__17904 + (1));
seq__17901 = G__18185;
chunk__17902 = G__18186;
count__17903 = G__18187;
i__17904 = G__18188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17901);
if(temp__5804__auto__){
var seq__17901__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17901__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17901__$1);
var G__18189 = cljs.core.chunk_rest(seq__17901__$1);
var G__18190 = c__5568__auto__;
var G__18191 = cljs.core.count(c__5568__auto__);
var G__18192 = (0);
seq__17901 = G__18189;
chunk__17902 = G__18190;
count__17903 = G__18191;
i__17904 = G__18192;
continue;
} else {
var map__17913 = cljs.core.first(seq__17901__$1);
var map__17913__$1 = cljs.core.__destructure_map(map__17913);
var src = map__17913__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17913__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17913__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17913__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17914){var e_18193 = e17914;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18193);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18193.message)].join('')));
}

var G__18194 = cljs.core.next(seq__17901__$1);
var G__18195 = null;
var G__18196 = (0);
var G__18197 = (0);
seq__17901 = G__18194;
chunk__17902 = G__18195;
count__17903 = G__18196;
i__17904 = G__18197;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__17915 = cljs.core.seq(js_requires);
var chunk__17916 = null;
var count__17917 = (0);
var i__17918 = (0);
while(true){
if((i__17918 < count__17917)){
var js_ns = chunk__17916.cljs$core$IIndexed$_nth$arity$2(null,i__17918);
var require_str_18198 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18198);


var G__18199 = seq__17915;
var G__18200 = chunk__17916;
var G__18201 = count__17917;
var G__18202 = (i__17918 + (1));
seq__17915 = G__18199;
chunk__17916 = G__18200;
count__17917 = G__18201;
i__17918 = G__18202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17915);
if(temp__5804__auto__){
var seq__17915__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17915__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17915__$1);
var G__18203 = cljs.core.chunk_rest(seq__17915__$1);
var G__18204 = c__5568__auto__;
var G__18205 = cljs.core.count(c__5568__auto__);
var G__18206 = (0);
seq__17915 = G__18203;
chunk__17916 = G__18204;
count__17917 = G__18205;
i__17918 = G__18206;
continue;
} else {
var js_ns = cljs.core.first(seq__17915__$1);
var require_str_18207 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18207);


var G__18208 = cljs.core.next(seq__17915__$1);
var G__18209 = null;
var G__18210 = (0);
var G__18211 = (0);
seq__17915 = G__18208;
chunk__17916 = G__18209;
count__17917 = G__18210;
i__17918 = G__18211;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17920){
var map__17921 = p__17920;
var map__17921__$1 = cljs.core.__destructure_map(map__17921);
var msg = map__17921__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17921__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17921__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17922(s__17923){
return (new cljs.core.LazySeq(null,(function (){
var s__17923__$1 = s__17923;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17923__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17928 = cljs.core.first(xs__6360__auto__);
var map__17928__$1 = cljs.core.__destructure_map(map__17928);
var src = map__17928__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17928__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__17923__$1,map__17928,map__17928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17921,map__17921__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17922_$_iter__17924(s__17925){
return (new cljs.core.LazySeq(null,((function (s__17923__$1,map__17928,map__17928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17921,map__17921__$1,msg,info,reload_info){
return (function (){
var s__17925__$1 = s__17925;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17925__$1);
if(temp__5804__auto____$1){
var s__17925__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17925__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17925__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17927 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17926 = (0);
while(true){
if((i__17926 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__17926);
cljs.core.chunk_append(b__17927,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18212 = (i__17926 + (1));
i__17926 = G__18212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17927),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17922_$_iter__17924(cljs.core.chunk_rest(s__17925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17927),null);
}
} else {
var warning = cljs.core.first(s__17925__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17922_$_iter__17924(cljs.core.rest(s__17925__$2)));
}
} else {
return null;
}
break;
}
});})(s__17923__$1,map__17928,map__17928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17921,map__17921__$1,msg,info,reload_info))
,null,null));
});})(s__17923__$1,map__17928,map__17928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17921,map__17921__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17922(cljs.core.rest(s__17923__$1)));
} else {
var G__18213 = cljs.core.rest(s__17923__$1);
s__17923__$1 = G__18213;
continue;
}
} else {
var G__18214 = cljs.core.rest(s__17923__$1);
s__17923__$1 = G__18214;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__17929_18215 = cljs.core.seq(warnings);
var chunk__17930_18216 = null;
var count__17931_18217 = (0);
var i__17932_18218 = (0);
while(true){
if((i__17932_18218 < count__17931_18217)){
var map__17935_18219 = chunk__17930_18216.cljs$core$IIndexed$_nth$arity$2(null,i__17932_18218);
var map__17935_18220__$1 = cljs.core.__destructure_map(map__17935_18219);
var w_18221 = map__17935_18220__$1;
var msg_18222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935_18220__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935_18220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935_18220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935_18220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18225)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18223),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18224),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18222__$1)].join(''));


var G__18226 = seq__17929_18215;
var G__18227 = chunk__17930_18216;
var G__18228 = count__17931_18217;
var G__18229 = (i__17932_18218 + (1));
seq__17929_18215 = G__18226;
chunk__17930_18216 = G__18227;
count__17931_18217 = G__18228;
i__17932_18218 = G__18229;
continue;
} else {
var temp__5804__auto___18230 = cljs.core.seq(seq__17929_18215);
if(temp__5804__auto___18230){
var seq__17929_18231__$1 = temp__5804__auto___18230;
if(cljs.core.chunked_seq_QMARK_(seq__17929_18231__$1)){
var c__5568__auto___18232 = cljs.core.chunk_first(seq__17929_18231__$1);
var G__18233 = cljs.core.chunk_rest(seq__17929_18231__$1);
var G__18234 = c__5568__auto___18232;
var G__18235 = cljs.core.count(c__5568__auto___18232);
var G__18236 = (0);
seq__17929_18215 = G__18233;
chunk__17930_18216 = G__18234;
count__17931_18217 = G__18235;
i__17932_18218 = G__18236;
continue;
} else {
var map__17936_18237 = cljs.core.first(seq__17929_18231__$1);
var map__17936_18238__$1 = cljs.core.__destructure_map(map__17936_18237);
var w_18239 = map__17936_18238__$1;
var msg_18240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17936_18238__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17936_18238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17936_18238__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17936_18238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18243)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18241),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18242),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18240__$1)].join(''));


var G__18244 = cljs.core.next(seq__17929_18231__$1);
var G__18245 = null;
var G__18246 = (0);
var G__18247 = (0);
seq__17929_18215 = G__18244;
chunk__17930_18216 = G__18245;
count__17931_18217 = G__18246;
i__17932_18218 = G__18247;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17919_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17919_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17937){
var map__17938 = p__17937;
var map__17938__$1 = cljs.core.__destructure_map(map__17938);
var msg = map__17938__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17938__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17938__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17939 = cljs.core.seq(updates);
var chunk__17941 = null;
var count__17942 = (0);
var i__17943 = (0);
while(true){
if((i__17943 < count__17942)){
var path = chunk__17941.cljs$core$IIndexed$_nth$arity$2(null,i__17943);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18053_18248 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18057_18249 = null;
var count__18058_18250 = (0);
var i__18059_18251 = (0);
while(true){
if((i__18059_18251 < count__18058_18250)){
var node_18252 = chunk__18057_18249.cljs$core$IIndexed$_nth$arity$2(null,i__18059_18251);
if(cljs.core.not(node_18252.shadow$old)){
var path_match_18253 = shadow.cljs.devtools.client.browser.match_paths(node_18252.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18253)){
var new_link_18254 = (function (){var G__18085 = node_18252.cloneNode(true);
G__18085.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18253),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18085;
})();
(node_18252.shadow$old = true);

(new_link_18254.onload = ((function (seq__18053_18248,chunk__18057_18249,count__18058_18250,i__18059_18251,seq__17939,chunk__17941,count__17942,i__17943,new_link_18254,path_match_18253,node_18252,path,map__17938,map__17938__$1,msg,updates,reload_info){
return (function (e){
var seq__18086_18255 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18088_18256 = null;
var count__18089_18257 = (0);
var i__18090_18258 = (0);
while(true){
if((i__18090_18258 < count__18089_18257)){
var map__18094_18259 = chunk__18088_18256.cljs$core$IIndexed$_nth$arity$2(null,i__18090_18258);
var map__18094_18260__$1 = cljs.core.__destructure_map(map__18094_18259);
var task_18261 = map__18094_18260__$1;
var fn_str_18262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18094_18260__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18094_18260__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18264 = goog.getObjectByName(fn_str_18262,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18263)].join(''));

(fn_obj_18264.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18264.cljs$core$IFn$_invoke$arity$2(path,new_link_18254) : fn_obj_18264.call(null,path,new_link_18254));


var G__18265 = seq__18086_18255;
var G__18266 = chunk__18088_18256;
var G__18267 = count__18089_18257;
var G__18268 = (i__18090_18258 + (1));
seq__18086_18255 = G__18265;
chunk__18088_18256 = G__18266;
count__18089_18257 = G__18267;
i__18090_18258 = G__18268;
continue;
} else {
var temp__5804__auto___18269 = cljs.core.seq(seq__18086_18255);
if(temp__5804__auto___18269){
var seq__18086_18270__$1 = temp__5804__auto___18269;
if(cljs.core.chunked_seq_QMARK_(seq__18086_18270__$1)){
var c__5568__auto___18271 = cljs.core.chunk_first(seq__18086_18270__$1);
var G__18272 = cljs.core.chunk_rest(seq__18086_18270__$1);
var G__18273 = c__5568__auto___18271;
var G__18274 = cljs.core.count(c__5568__auto___18271);
var G__18275 = (0);
seq__18086_18255 = G__18272;
chunk__18088_18256 = G__18273;
count__18089_18257 = G__18274;
i__18090_18258 = G__18275;
continue;
} else {
var map__18095_18276 = cljs.core.first(seq__18086_18270__$1);
var map__18095_18277__$1 = cljs.core.__destructure_map(map__18095_18276);
var task_18278 = map__18095_18277__$1;
var fn_str_18279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18095_18277__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18095_18277__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18281 = goog.getObjectByName(fn_str_18279,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18280)].join(''));

(fn_obj_18281.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18281.cljs$core$IFn$_invoke$arity$2(path,new_link_18254) : fn_obj_18281.call(null,path,new_link_18254));


var G__18282 = cljs.core.next(seq__18086_18270__$1);
var G__18283 = null;
var G__18284 = (0);
var G__18285 = (0);
seq__18086_18255 = G__18282;
chunk__18088_18256 = G__18283;
count__18089_18257 = G__18284;
i__18090_18258 = G__18285;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18252);
});})(seq__18053_18248,chunk__18057_18249,count__18058_18250,i__18059_18251,seq__17939,chunk__17941,count__17942,i__17943,new_link_18254,path_match_18253,node_18252,path,map__17938,map__17938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18253], 0));

goog.dom.insertSiblingAfter(new_link_18254,node_18252);


var G__18286 = seq__18053_18248;
var G__18287 = chunk__18057_18249;
var G__18288 = count__18058_18250;
var G__18289 = (i__18059_18251 + (1));
seq__18053_18248 = G__18286;
chunk__18057_18249 = G__18287;
count__18058_18250 = G__18288;
i__18059_18251 = G__18289;
continue;
} else {
var G__18290 = seq__18053_18248;
var G__18291 = chunk__18057_18249;
var G__18292 = count__18058_18250;
var G__18293 = (i__18059_18251 + (1));
seq__18053_18248 = G__18290;
chunk__18057_18249 = G__18291;
count__18058_18250 = G__18292;
i__18059_18251 = G__18293;
continue;
}
} else {
var G__18294 = seq__18053_18248;
var G__18295 = chunk__18057_18249;
var G__18296 = count__18058_18250;
var G__18297 = (i__18059_18251 + (1));
seq__18053_18248 = G__18294;
chunk__18057_18249 = G__18295;
count__18058_18250 = G__18296;
i__18059_18251 = G__18297;
continue;
}
} else {
var temp__5804__auto___18298 = cljs.core.seq(seq__18053_18248);
if(temp__5804__auto___18298){
var seq__18053_18299__$1 = temp__5804__auto___18298;
if(cljs.core.chunked_seq_QMARK_(seq__18053_18299__$1)){
var c__5568__auto___18300 = cljs.core.chunk_first(seq__18053_18299__$1);
var G__18301 = cljs.core.chunk_rest(seq__18053_18299__$1);
var G__18302 = c__5568__auto___18300;
var G__18303 = cljs.core.count(c__5568__auto___18300);
var G__18304 = (0);
seq__18053_18248 = G__18301;
chunk__18057_18249 = G__18302;
count__18058_18250 = G__18303;
i__18059_18251 = G__18304;
continue;
} else {
var node_18305 = cljs.core.first(seq__18053_18299__$1);
if(cljs.core.not(node_18305.shadow$old)){
var path_match_18306 = shadow.cljs.devtools.client.browser.match_paths(node_18305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18306)){
var new_link_18307 = (function (){var G__18096 = node_18305.cloneNode(true);
G__18096.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18096;
})();
(node_18305.shadow$old = true);

(new_link_18307.onload = ((function (seq__18053_18248,chunk__18057_18249,count__18058_18250,i__18059_18251,seq__17939,chunk__17941,count__17942,i__17943,new_link_18307,path_match_18306,node_18305,seq__18053_18299__$1,temp__5804__auto___18298,path,map__17938,map__17938__$1,msg,updates,reload_info){
return (function (e){
var seq__18097_18308 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18099_18309 = null;
var count__18100_18310 = (0);
var i__18101_18311 = (0);
while(true){
if((i__18101_18311 < count__18100_18310)){
var map__18105_18312 = chunk__18099_18309.cljs$core$IIndexed$_nth$arity$2(null,i__18101_18311);
var map__18105_18313__$1 = cljs.core.__destructure_map(map__18105_18312);
var task_18314 = map__18105_18313__$1;
var fn_str_18315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18105_18313__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18105_18313__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18317 = goog.getObjectByName(fn_str_18315,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18316)].join(''));

(fn_obj_18317.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18317.cljs$core$IFn$_invoke$arity$2(path,new_link_18307) : fn_obj_18317.call(null,path,new_link_18307));


var G__18318 = seq__18097_18308;
var G__18319 = chunk__18099_18309;
var G__18320 = count__18100_18310;
var G__18321 = (i__18101_18311 + (1));
seq__18097_18308 = G__18318;
chunk__18099_18309 = G__18319;
count__18100_18310 = G__18320;
i__18101_18311 = G__18321;
continue;
} else {
var temp__5804__auto___18322__$1 = cljs.core.seq(seq__18097_18308);
if(temp__5804__auto___18322__$1){
var seq__18097_18323__$1 = temp__5804__auto___18322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18097_18323__$1)){
var c__5568__auto___18324 = cljs.core.chunk_first(seq__18097_18323__$1);
var G__18325 = cljs.core.chunk_rest(seq__18097_18323__$1);
var G__18326 = c__5568__auto___18324;
var G__18327 = cljs.core.count(c__5568__auto___18324);
var G__18328 = (0);
seq__18097_18308 = G__18325;
chunk__18099_18309 = G__18326;
count__18100_18310 = G__18327;
i__18101_18311 = G__18328;
continue;
} else {
var map__18106_18329 = cljs.core.first(seq__18097_18323__$1);
var map__18106_18330__$1 = cljs.core.__destructure_map(map__18106_18329);
var task_18331 = map__18106_18330__$1;
var fn_str_18332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106_18330__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106_18330__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18334 = goog.getObjectByName(fn_str_18332,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18333)].join(''));

(fn_obj_18334.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18334.cljs$core$IFn$_invoke$arity$2(path,new_link_18307) : fn_obj_18334.call(null,path,new_link_18307));


var G__18335 = cljs.core.next(seq__18097_18323__$1);
var G__18336 = null;
var G__18337 = (0);
var G__18338 = (0);
seq__18097_18308 = G__18335;
chunk__18099_18309 = G__18336;
count__18100_18310 = G__18337;
i__18101_18311 = G__18338;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18305);
});})(seq__18053_18248,chunk__18057_18249,count__18058_18250,i__18059_18251,seq__17939,chunk__17941,count__17942,i__17943,new_link_18307,path_match_18306,node_18305,seq__18053_18299__$1,temp__5804__auto___18298,path,map__17938,map__17938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18306], 0));

goog.dom.insertSiblingAfter(new_link_18307,node_18305);


var G__18339 = cljs.core.next(seq__18053_18299__$1);
var G__18340 = null;
var G__18341 = (0);
var G__18342 = (0);
seq__18053_18248 = G__18339;
chunk__18057_18249 = G__18340;
count__18058_18250 = G__18341;
i__18059_18251 = G__18342;
continue;
} else {
var G__18343 = cljs.core.next(seq__18053_18299__$1);
var G__18344 = null;
var G__18345 = (0);
var G__18346 = (0);
seq__18053_18248 = G__18343;
chunk__18057_18249 = G__18344;
count__18058_18250 = G__18345;
i__18059_18251 = G__18346;
continue;
}
} else {
var G__18347 = cljs.core.next(seq__18053_18299__$1);
var G__18348 = null;
var G__18349 = (0);
var G__18350 = (0);
seq__18053_18248 = G__18347;
chunk__18057_18249 = G__18348;
count__18058_18250 = G__18349;
i__18059_18251 = G__18350;
continue;
}
}
} else {
}
}
break;
}


var G__18351 = seq__17939;
var G__18352 = chunk__17941;
var G__18353 = count__17942;
var G__18354 = (i__17943 + (1));
seq__17939 = G__18351;
chunk__17941 = G__18352;
count__17942 = G__18353;
i__17943 = G__18354;
continue;
} else {
var G__18355 = seq__17939;
var G__18356 = chunk__17941;
var G__18357 = count__17942;
var G__18358 = (i__17943 + (1));
seq__17939 = G__18355;
chunk__17941 = G__18356;
count__17942 = G__18357;
i__17943 = G__18358;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17939);
if(temp__5804__auto__){
var seq__17939__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17939__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17939__$1);
var G__18359 = cljs.core.chunk_rest(seq__17939__$1);
var G__18360 = c__5568__auto__;
var G__18361 = cljs.core.count(c__5568__auto__);
var G__18362 = (0);
seq__17939 = G__18359;
chunk__17941 = G__18360;
count__17942 = G__18361;
i__17943 = G__18362;
continue;
} else {
var path = cljs.core.first(seq__17939__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18107_18363 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18111_18364 = null;
var count__18112_18365 = (0);
var i__18113_18366 = (0);
while(true){
if((i__18113_18366 < count__18112_18365)){
var node_18367 = chunk__18111_18364.cljs$core$IIndexed$_nth$arity$2(null,i__18113_18366);
if(cljs.core.not(node_18367.shadow$old)){
var path_match_18368 = shadow.cljs.devtools.client.browser.match_paths(node_18367.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18368)){
var new_link_18369 = (function (){var G__18139 = node_18367.cloneNode(true);
G__18139.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18368),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18139;
})();
(node_18367.shadow$old = true);

(new_link_18369.onload = ((function (seq__18107_18363,chunk__18111_18364,count__18112_18365,i__18113_18366,seq__17939,chunk__17941,count__17942,i__17943,new_link_18369,path_match_18368,node_18367,path,seq__17939__$1,temp__5804__auto__,map__17938,map__17938__$1,msg,updates,reload_info){
return (function (e){
var seq__18140_18370 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18142_18371 = null;
var count__18143_18372 = (0);
var i__18144_18373 = (0);
while(true){
if((i__18144_18373 < count__18143_18372)){
var map__18148_18374 = chunk__18142_18371.cljs$core$IIndexed$_nth$arity$2(null,i__18144_18373);
var map__18148_18375__$1 = cljs.core.__destructure_map(map__18148_18374);
var task_18376 = map__18148_18375__$1;
var fn_str_18377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148_18375__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148_18375__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18379 = goog.getObjectByName(fn_str_18377,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18378)].join(''));

(fn_obj_18379.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18379.cljs$core$IFn$_invoke$arity$2(path,new_link_18369) : fn_obj_18379.call(null,path,new_link_18369));


var G__18380 = seq__18140_18370;
var G__18381 = chunk__18142_18371;
var G__18382 = count__18143_18372;
var G__18383 = (i__18144_18373 + (1));
seq__18140_18370 = G__18380;
chunk__18142_18371 = G__18381;
count__18143_18372 = G__18382;
i__18144_18373 = G__18383;
continue;
} else {
var temp__5804__auto___18384__$1 = cljs.core.seq(seq__18140_18370);
if(temp__5804__auto___18384__$1){
var seq__18140_18385__$1 = temp__5804__auto___18384__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18140_18385__$1)){
var c__5568__auto___18386 = cljs.core.chunk_first(seq__18140_18385__$1);
var G__18387 = cljs.core.chunk_rest(seq__18140_18385__$1);
var G__18388 = c__5568__auto___18386;
var G__18389 = cljs.core.count(c__5568__auto___18386);
var G__18390 = (0);
seq__18140_18370 = G__18387;
chunk__18142_18371 = G__18388;
count__18143_18372 = G__18389;
i__18144_18373 = G__18390;
continue;
} else {
var map__18149_18391 = cljs.core.first(seq__18140_18385__$1);
var map__18149_18392__$1 = cljs.core.__destructure_map(map__18149_18391);
var task_18393 = map__18149_18392__$1;
var fn_str_18394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18149_18392__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18149_18392__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18396 = goog.getObjectByName(fn_str_18394,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18395)].join(''));

(fn_obj_18396.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18396.cljs$core$IFn$_invoke$arity$2(path,new_link_18369) : fn_obj_18396.call(null,path,new_link_18369));


var G__18397 = cljs.core.next(seq__18140_18385__$1);
var G__18398 = null;
var G__18399 = (0);
var G__18400 = (0);
seq__18140_18370 = G__18397;
chunk__18142_18371 = G__18398;
count__18143_18372 = G__18399;
i__18144_18373 = G__18400;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18367);
});})(seq__18107_18363,chunk__18111_18364,count__18112_18365,i__18113_18366,seq__17939,chunk__17941,count__17942,i__17943,new_link_18369,path_match_18368,node_18367,path,seq__17939__$1,temp__5804__auto__,map__17938,map__17938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18368], 0));

goog.dom.insertSiblingAfter(new_link_18369,node_18367);


var G__18401 = seq__18107_18363;
var G__18402 = chunk__18111_18364;
var G__18403 = count__18112_18365;
var G__18404 = (i__18113_18366 + (1));
seq__18107_18363 = G__18401;
chunk__18111_18364 = G__18402;
count__18112_18365 = G__18403;
i__18113_18366 = G__18404;
continue;
} else {
var G__18405 = seq__18107_18363;
var G__18406 = chunk__18111_18364;
var G__18407 = count__18112_18365;
var G__18408 = (i__18113_18366 + (1));
seq__18107_18363 = G__18405;
chunk__18111_18364 = G__18406;
count__18112_18365 = G__18407;
i__18113_18366 = G__18408;
continue;
}
} else {
var G__18409 = seq__18107_18363;
var G__18410 = chunk__18111_18364;
var G__18411 = count__18112_18365;
var G__18412 = (i__18113_18366 + (1));
seq__18107_18363 = G__18409;
chunk__18111_18364 = G__18410;
count__18112_18365 = G__18411;
i__18113_18366 = G__18412;
continue;
}
} else {
var temp__5804__auto___18413__$1 = cljs.core.seq(seq__18107_18363);
if(temp__5804__auto___18413__$1){
var seq__18107_18414__$1 = temp__5804__auto___18413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18107_18414__$1)){
var c__5568__auto___18415 = cljs.core.chunk_first(seq__18107_18414__$1);
var G__18416 = cljs.core.chunk_rest(seq__18107_18414__$1);
var G__18417 = c__5568__auto___18415;
var G__18418 = cljs.core.count(c__5568__auto___18415);
var G__18419 = (0);
seq__18107_18363 = G__18416;
chunk__18111_18364 = G__18417;
count__18112_18365 = G__18418;
i__18113_18366 = G__18419;
continue;
} else {
var node_18420 = cljs.core.first(seq__18107_18414__$1);
if(cljs.core.not(node_18420.shadow$old)){
var path_match_18421 = shadow.cljs.devtools.client.browser.match_paths(node_18420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18421)){
var new_link_18422 = (function (){var G__18150 = node_18420.cloneNode(true);
G__18150.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18421),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18150;
})();
(node_18420.shadow$old = true);

(new_link_18422.onload = ((function (seq__18107_18363,chunk__18111_18364,count__18112_18365,i__18113_18366,seq__17939,chunk__17941,count__17942,i__17943,new_link_18422,path_match_18421,node_18420,seq__18107_18414__$1,temp__5804__auto___18413__$1,path,seq__17939__$1,temp__5804__auto__,map__17938,map__17938__$1,msg,updates,reload_info){
return (function (e){
var seq__18151_18423 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18153_18424 = null;
var count__18154_18425 = (0);
var i__18155_18426 = (0);
while(true){
if((i__18155_18426 < count__18154_18425)){
var map__18159_18427 = chunk__18153_18424.cljs$core$IIndexed$_nth$arity$2(null,i__18155_18426);
var map__18159_18428__$1 = cljs.core.__destructure_map(map__18159_18427);
var task_18429 = map__18159_18428__$1;
var fn_str_18430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159_18428__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159_18428__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18432 = goog.getObjectByName(fn_str_18430,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18431)].join(''));

(fn_obj_18432.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18432.cljs$core$IFn$_invoke$arity$2(path,new_link_18422) : fn_obj_18432.call(null,path,new_link_18422));


var G__18433 = seq__18151_18423;
var G__18434 = chunk__18153_18424;
var G__18435 = count__18154_18425;
var G__18436 = (i__18155_18426 + (1));
seq__18151_18423 = G__18433;
chunk__18153_18424 = G__18434;
count__18154_18425 = G__18435;
i__18155_18426 = G__18436;
continue;
} else {
var temp__5804__auto___18437__$2 = cljs.core.seq(seq__18151_18423);
if(temp__5804__auto___18437__$2){
var seq__18151_18438__$1 = temp__5804__auto___18437__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18151_18438__$1)){
var c__5568__auto___18439 = cljs.core.chunk_first(seq__18151_18438__$1);
var G__18440 = cljs.core.chunk_rest(seq__18151_18438__$1);
var G__18441 = c__5568__auto___18439;
var G__18442 = cljs.core.count(c__5568__auto___18439);
var G__18443 = (0);
seq__18151_18423 = G__18440;
chunk__18153_18424 = G__18441;
count__18154_18425 = G__18442;
i__18155_18426 = G__18443;
continue;
} else {
var map__18160_18444 = cljs.core.first(seq__18151_18438__$1);
var map__18160_18445__$1 = cljs.core.__destructure_map(map__18160_18444);
var task_18446 = map__18160_18445__$1;
var fn_str_18447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18160_18445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18160_18445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18449 = goog.getObjectByName(fn_str_18447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18448)].join(''));

(fn_obj_18449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18449.cljs$core$IFn$_invoke$arity$2(path,new_link_18422) : fn_obj_18449.call(null,path,new_link_18422));


var G__18450 = cljs.core.next(seq__18151_18438__$1);
var G__18451 = null;
var G__18452 = (0);
var G__18453 = (0);
seq__18151_18423 = G__18450;
chunk__18153_18424 = G__18451;
count__18154_18425 = G__18452;
i__18155_18426 = G__18453;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18420);
});})(seq__18107_18363,chunk__18111_18364,count__18112_18365,i__18113_18366,seq__17939,chunk__17941,count__17942,i__17943,new_link_18422,path_match_18421,node_18420,seq__18107_18414__$1,temp__5804__auto___18413__$1,path,seq__17939__$1,temp__5804__auto__,map__17938,map__17938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18421], 0));

goog.dom.insertSiblingAfter(new_link_18422,node_18420);


var G__18454 = cljs.core.next(seq__18107_18414__$1);
var G__18455 = null;
var G__18456 = (0);
var G__18457 = (0);
seq__18107_18363 = G__18454;
chunk__18111_18364 = G__18455;
count__18112_18365 = G__18456;
i__18113_18366 = G__18457;
continue;
} else {
var G__18458 = cljs.core.next(seq__18107_18414__$1);
var G__18459 = null;
var G__18460 = (0);
var G__18461 = (0);
seq__18107_18363 = G__18458;
chunk__18111_18364 = G__18459;
count__18112_18365 = G__18460;
i__18113_18366 = G__18461;
continue;
}
} else {
var G__18462 = cljs.core.next(seq__18107_18414__$1);
var G__18463 = null;
var G__18464 = (0);
var G__18465 = (0);
seq__18107_18363 = G__18462;
chunk__18111_18364 = G__18463;
count__18112_18365 = G__18464;
i__18113_18366 = G__18465;
continue;
}
}
} else {
}
}
break;
}


var G__18466 = cljs.core.next(seq__17939__$1);
var G__18467 = null;
var G__18468 = (0);
var G__18469 = (0);
seq__17939 = G__18466;
chunk__17941 = G__18467;
count__17942 = G__18468;
i__17943 = G__18469;
continue;
} else {
var G__18470 = cljs.core.next(seq__17939__$1);
var G__18471 = null;
var G__18472 = (0);
var G__18473 = (0);
seq__17939 = G__18470;
chunk__17941 = G__18471;
count__17942 = G__18472;
i__17943 = G__18473;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__18161){
var map__18162 = p__18161;
var map__18162__$1 = cljs.core.__destructure_map(map__18162);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18162__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__18163){
var map__18164 = p__18163;
var map__18164__$1 = cljs.core.__destructure_map(map__18164);
var _ = map__18164__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18164__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18165,done,error){
var map__18166 = p__18165;
var map__18166__$1 = cljs.core.__destructure_map(map__18166);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18166__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18167,done,error){
var map__18168 = p__18167;
var map__18168__$1 = cljs.core.__destructure_map(map__18168);
var msg = map__18168__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18169){
var map__18170 = p__18169;
var map__18170__$1 = cljs.core.__destructure_map(map__18170);
var src = map__18170__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18171 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18171) : done.call(null,G__18171));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18172){
var map__18173 = p__18172;
var map__18173__$1 = cljs.core.__destructure_map(map__18173);
var msg__$1 = map__18173__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18174){var ex = e18174;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18175){
var map__18176 = p__18175;
var map__18176__$1 = cljs.core.__destructure_map(map__18176);
var env = map__18176__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18176__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18177){
var map__18178 = p__18177;
var map__18178__$1 = cljs.core.__destructure_map(map__18178);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18178__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18178__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18179){
var map__18180 = p__18179;
var map__18180__$1 = cljs.core.__destructure_map(map__18180);
var svc = map__18180__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
