goog.provide('wscljs.format');

/**
 * Protocol used to define encoding format for socket messages.
 * @interface
 */
wscljs.format.Format = function(){};

var wscljs$format$Format$read$dyn_12173 = (function (formatter,string){
var x__5393__auto__ = (((formatter == null))?null:formatter);
var m__5394__auto__ = (wscljs.format.read[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__5394__auto__.call(null,formatter,string));
} else {
var m__5392__auto__ = (wscljs.format.read["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__5392__auto__.call(null,formatter,string));
} else {
throw cljs.core.missing_protocol("Format.read",formatter);
}
}
});
wscljs.format.read = (function wscljs$format$read(formatter,string){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$read$arity$2 == null)))))){
return formatter.wscljs$format$Format$read$arity$2(formatter,string);
} else {
return wscljs$format$Format$read$dyn_12173(formatter,string);
}
});

var wscljs$format$Format$write$dyn_12174 = (function (formatter,value){
var x__5393__auto__ = (((formatter == null))?null:formatter);
var m__5394__auto__ = (wscljs.format.write[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__5394__auto__.call(null,formatter,value));
} else {
var m__5392__auto__ = (wscljs.format.write["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__5392__auto__.call(null,formatter,value));
} else {
throw cljs.core.missing_protocol("Format.write",formatter);
}
}
});
wscljs.format.write = (function wscljs$format$write(formatter,value){
if((((!((formatter == null)))) && ((!((formatter.wscljs$format$Format$write$arity$2 == null)))))){
return formatter.wscljs$format$Format$write$arity$2(formatter,value);
} else {
return wscljs$format$Format$write$dyn_12174(formatter,value);
}
});

/**
 * The identity formatter. Does nothing to the input or output.
 */
wscljs.format.identity = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format12116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format12116 = (function (meta12117){
this.meta12117 = meta12117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format12116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12118,meta12117__$1){
var self__ = this;
var _12118__$1 = this;
return (new wscljs.format.t_wscljs$format12116(meta12117__$1));
}));

(wscljs.format.t_wscljs$format12116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12118){
var self__ = this;
var _12118__$1 = this;
return self__.meta12117;
}));

(wscljs.format.t_wscljs$format12116.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format12116.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(wscljs.format.t_wscljs$format12116.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return v;
}));

(wscljs.format.t_wscljs$format12116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12117","meta12117",1275853666,null)], null);
}));

(wscljs.format.t_wscljs$format12116.cljs$lang$type = true);

(wscljs.format.t_wscljs$format12116.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format12116");

(wscljs.format.t_wscljs$format12116.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"wscljs.format/t_wscljs$format12116");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format12116.
 */
wscljs.format.__GT_t_wscljs$format12116 = (function wscljs$format$__GT_t_wscljs$format12116(meta12117){
return (new wscljs.format.t_wscljs$format12116(meta12117));
});

}

return (new wscljs.format.t_wscljs$format12116(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in JSON.
 */
wscljs.format.json = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format12167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format12167 = (function (meta12168){
this.meta12168 = meta12168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format12167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12169,meta12168__$1){
var self__ = this;
var _12169__$1 = this;
return (new wscljs.format.t_wscljs$format12167(meta12168__$1));
}));

(wscljs.format.t_wscljs$format12167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12169){
var self__ = this;
var _12169__$1 = this;
return self__.meta12168;
}));

(wscljs.format.t_wscljs$format12167.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format12167.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));

(wscljs.format.t_wscljs$format12167.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return JSON.stringify(cljs.core.clj__GT_js(v));
}));

(wscljs.format.t_wscljs$format12167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12168","meta12168",1792519016,null)], null);
}));

(wscljs.format.t_wscljs$format12167.cljs$lang$type = true);

(wscljs.format.t_wscljs$format12167.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format12167");

(wscljs.format.t_wscljs$format12167.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"wscljs.format/t_wscljs$format12167");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format12167.
 */
wscljs.format.__GT_t_wscljs$format12167 = (function wscljs$format$__GT_t_wscljs$format12167(meta12168){
return (new wscljs.format.t_wscljs$format12167(meta12168));
});

}

return (new wscljs.format.t_wscljs$format12167(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data serialized as EDN.
 */
wscljs.format.edn = (function (){
if((typeof wscljs !== 'undefined') && (typeof wscljs.format !== 'undefined') && (typeof wscljs.format.t_wscljs$format12170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {wscljs.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
wscljs.format.t_wscljs$format12170 = (function (meta12171){
this.meta12171 = meta12171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(wscljs.format.t_wscljs$format12170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12172,meta12171__$1){
var self__ = this;
var _12172__$1 = this;
return (new wscljs.format.t_wscljs$format12170(meta12171__$1));
}));

(wscljs.format.t_wscljs$format12170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12172){
var self__ = this;
var _12172__$1 = this;
return self__.meta12171;
}));

(wscljs.format.t_wscljs$format12170.prototype.wscljs$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(wscljs.format.t_wscljs$format12170.prototype.wscljs$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(wscljs.format.t_wscljs$format12170.prototype.wscljs$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}));

(wscljs.format.t_wscljs$format12170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12171","meta12171",-1326294612,null)], null);
}));

(wscljs.format.t_wscljs$format12170.cljs$lang$type = true);

(wscljs.format.t_wscljs$format12170.cljs$lang$ctorStr = "wscljs.format/t_wscljs$format12170");

(wscljs.format.t_wscljs$format12170.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"wscljs.format/t_wscljs$format12170");
}));

/**
 * Positional factory function for wscljs.format/t_wscljs$format12170.
 */
wscljs.format.__GT_t_wscljs$format12170 = (function wscljs$format$__GT_t_wscljs$format12170(meta12171){
return (new wscljs.format.t_wscljs$format12170(meta12171));
});

}

return (new wscljs.format.t_wscljs$format12170(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=wscljs.format.js.map
