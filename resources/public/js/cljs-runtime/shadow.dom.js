goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15212 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15212(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15215 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15215(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14322 = coll;
var G__14323 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14322,G__14323) : shadow.dom.lazy_native_coll_seq.call(null,G__14322,G__14323));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14369 = arguments.length;
switch (G__14369) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14379 = arguments.length;
switch (G__14379) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14434 = arguments.length;
switch (G__14434) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14437 = arguments.length;
switch (G__14437) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14439 = arguments.length;
switch (G__14439) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14448 = arguments.length;
switch (G__14448) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14457){if((e14457 instanceof Object)){
var e = e14457;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14457;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14470 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14471 = null;
var count__14472 = (0);
var i__14473 = (0);
while(true){
if((i__14473 < count__14472)){
var el = chunk__14471.cljs$core$IIndexed$_nth$arity$2(null,i__14473);
var handler_15239__$1 = ((function (seq__14470,chunk__14471,count__14472,i__14473,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14470,chunk__14471,count__14472,i__14473,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15239__$1);


var G__15240 = seq__14470;
var G__15241 = chunk__14471;
var G__15242 = count__14472;
var G__15243 = (i__14473 + (1));
seq__14470 = G__15240;
chunk__14471 = G__15241;
count__14472 = G__15242;
i__14473 = G__15243;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14470);
if(temp__5804__auto__){
var seq__14470__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14470__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14470__$1);
var G__15244 = cljs.core.chunk_rest(seq__14470__$1);
var G__15245 = c__5568__auto__;
var G__15246 = cljs.core.count(c__5568__auto__);
var G__15247 = (0);
seq__14470 = G__15244;
chunk__14471 = G__15245;
count__14472 = G__15246;
i__14473 = G__15247;
continue;
} else {
var el = cljs.core.first(seq__14470__$1);
var handler_15248__$1 = ((function (seq__14470,chunk__14471,count__14472,i__14473,el,seq__14470__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14470,chunk__14471,count__14472,i__14473,el,seq__14470__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15248__$1);


var G__15249 = cljs.core.next(seq__14470__$1);
var G__15250 = null;
var G__15251 = (0);
var G__15252 = (0);
seq__14470 = G__15249;
chunk__14471 = G__15250;
count__14472 = G__15251;
i__14473 = G__15252;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14504 = arguments.length;
switch (G__14504) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14505 = cljs.core.seq(events);
var chunk__14506 = null;
var count__14507 = (0);
var i__14508 = (0);
while(true){
if((i__14508 < count__14507)){
var vec__14547 = chunk__14506.cljs$core$IIndexed$_nth$arity$2(null,i__14508);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15260 = seq__14505;
var G__15261 = chunk__14506;
var G__15262 = count__14507;
var G__15263 = (i__14508 + (1));
seq__14505 = G__15260;
chunk__14506 = G__15261;
count__14507 = G__15262;
i__14508 = G__15263;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14505);
if(temp__5804__auto__){
var seq__14505__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14505__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14505__$1);
var G__15264 = cljs.core.chunk_rest(seq__14505__$1);
var G__15265 = c__5568__auto__;
var G__15266 = cljs.core.count(c__5568__auto__);
var G__15267 = (0);
seq__14505 = G__15264;
chunk__14506 = G__15265;
count__14507 = G__15266;
i__14508 = G__15267;
continue;
} else {
var vec__14550 = cljs.core.first(seq__14505__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14550,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15269 = cljs.core.next(seq__14505__$1);
var G__15270 = null;
var G__15271 = (0);
var G__15272 = (0);
seq__14505 = G__15269;
chunk__14506 = G__15270;
count__14507 = G__15271;
i__14508 = G__15272;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14553 = cljs.core.seq(styles);
var chunk__14554 = null;
var count__14555 = (0);
var i__14556 = (0);
while(true){
if((i__14556 < count__14555)){
var vec__14563 = chunk__14554.cljs$core$IIndexed$_nth$arity$2(null,i__14556);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14563,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15277 = seq__14553;
var G__15278 = chunk__14554;
var G__15279 = count__14555;
var G__15280 = (i__14556 + (1));
seq__14553 = G__15277;
chunk__14554 = G__15278;
count__14555 = G__15279;
i__14556 = G__15280;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14553);
if(temp__5804__auto__){
var seq__14553__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14553__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14553__$1);
var G__15283 = cljs.core.chunk_rest(seq__14553__$1);
var G__15284 = c__5568__auto__;
var G__15285 = cljs.core.count(c__5568__auto__);
var G__15286 = (0);
seq__14553 = G__15283;
chunk__14554 = G__15284;
count__14555 = G__15285;
i__14556 = G__15286;
continue;
} else {
var vec__14566 = cljs.core.first(seq__14553__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14566,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15287 = cljs.core.next(seq__14553__$1);
var G__15288 = null;
var G__15289 = (0);
var G__15290 = (0);
seq__14553 = G__15287;
chunk__14554 = G__15288;
count__14555 = G__15289;
i__14556 = G__15290;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14599_15291 = key;
var G__14599_15292__$1 = (((G__14599_15291 instanceof cljs.core.Keyword))?G__14599_15291.fqn:null);
switch (G__14599_15292__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15299 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_15299,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_15299,"aria-");
}
})())){
el.setAttribute(ks_15299,value);
} else {
(el[ks_15299] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14610){
var map__14611 = p__14610;
var map__14611__$1 = cljs.core.__destructure_map(map__14611);
var props = map__14611__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14611__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14618 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14669 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14669,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14669;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14671 = arguments.length;
switch (G__14671) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14672){
var vec__14673 = p__14672;
var seq__14674 = cljs.core.seq(vec__14673);
var first__14675 = cljs.core.first(seq__14674);
var seq__14674__$1 = cljs.core.next(seq__14674);
var nn = first__14675;
var first__14675__$1 = cljs.core.first(seq__14674__$1);
var seq__14674__$2 = cljs.core.next(seq__14674__$1);
var np = first__14675__$1;
var nc = seq__14674__$2;
var node = vec__14673;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14676 = nn;
var G__14677 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14676,G__14677) : create_fn.call(null,G__14676,G__14677));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14678 = nn;
var G__14679 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14678,G__14679) : create_fn.call(null,G__14678,G__14679));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14680 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680,(1),null);
var seq__14683_15308 = cljs.core.seq(node_children);
var chunk__14684_15309 = null;
var count__14685_15310 = (0);
var i__14686_15311 = (0);
while(true){
if((i__14686_15311 < count__14685_15310)){
var child_struct_15312 = chunk__14684_15309.cljs$core$IIndexed$_nth$arity$2(null,i__14686_15311);
var children_15313 = shadow.dom.dom_node(child_struct_15312);
if(cljs.core.seq_QMARK_(children_15313)){
var seq__14763_15314 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15313));
var chunk__14786_15315 = null;
var count__14787_15316 = (0);
var i__14788_15317 = (0);
while(true){
if((i__14788_15317 < count__14787_15316)){
var child_15318 = chunk__14786_15315.cljs$core$IIndexed$_nth$arity$2(null,i__14788_15317);
if(cljs.core.truth_(child_15318)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15318);


var G__15319 = seq__14763_15314;
var G__15320 = chunk__14786_15315;
var G__15321 = count__14787_15316;
var G__15322 = (i__14788_15317 + (1));
seq__14763_15314 = G__15319;
chunk__14786_15315 = G__15320;
count__14787_15316 = G__15321;
i__14788_15317 = G__15322;
continue;
} else {
var G__15323 = seq__14763_15314;
var G__15324 = chunk__14786_15315;
var G__15325 = count__14787_15316;
var G__15326 = (i__14788_15317 + (1));
seq__14763_15314 = G__15323;
chunk__14786_15315 = G__15324;
count__14787_15316 = G__15325;
i__14788_15317 = G__15326;
continue;
}
} else {
var temp__5804__auto___15327 = cljs.core.seq(seq__14763_15314);
if(temp__5804__auto___15327){
var seq__14763_15328__$1 = temp__5804__auto___15327;
if(cljs.core.chunked_seq_QMARK_(seq__14763_15328__$1)){
var c__5568__auto___15329 = cljs.core.chunk_first(seq__14763_15328__$1);
var G__15330 = cljs.core.chunk_rest(seq__14763_15328__$1);
var G__15331 = c__5568__auto___15329;
var G__15332 = cljs.core.count(c__5568__auto___15329);
var G__15333 = (0);
seq__14763_15314 = G__15330;
chunk__14786_15315 = G__15331;
count__14787_15316 = G__15332;
i__14788_15317 = G__15333;
continue;
} else {
var child_15334 = cljs.core.first(seq__14763_15328__$1);
if(cljs.core.truth_(child_15334)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15334);


var G__15335 = cljs.core.next(seq__14763_15328__$1);
var G__15336 = null;
var G__15337 = (0);
var G__15338 = (0);
seq__14763_15314 = G__15335;
chunk__14786_15315 = G__15336;
count__14787_15316 = G__15337;
i__14788_15317 = G__15338;
continue;
} else {
var G__15339 = cljs.core.next(seq__14763_15328__$1);
var G__15340 = null;
var G__15341 = (0);
var G__15342 = (0);
seq__14763_15314 = G__15339;
chunk__14786_15315 = G__15340;
count__14787_15316 = G__15341;
i__14788_15317 = G__15342;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15313);
}


var G__15343 = seq__14683_15308;
var G__15344 = chunk__14684_15309;
var G__15345 = count__14685_15310;
var G__15346 = (i__14686_15311 + (1));
seq__14683_15308 = G__15343;
chunk__14684_15309 = G__15344;
count__14685_15310 = G__15345;
i__14686_15311 = G__15346;
continue;
} else {
var temp__5804__auto___15347 = cljs.core.seq(seq__14683_15308);
if(temp__5804__auto___15347){
var seq__14683_15348__$1 = temp__5804__auto___15347;
if(cljs.core.chunked_seq_QMARK_(seq__14683_15348__$1)){
var c__5568__auto___15350 = cljs.core.chunk_first(seq__14683_15348__$1);
var G__15351 = cljs.core.chunk_rest(seq__14683_15348__$1);
var G__15352 = c__5568__auto___15350;
var G__15353 = cljs.core.count(c__5568__auto___15350);
var G__15354 = (0);
seq__14683_15308 = G__15351;
chunk__14684_15309 = G__15352;
count__14685_15310 = G__15353;
i__14686_15311 = G__15354;
continue;
} else {
var child_struct_15355 = cljs.core.first(seq__14683_15348__$1);
var children_15356 = shadow.dom.dom_node(child_struct_15355);
if(cljs.core.seq_QMARK_(children_15356)){
var seq__14814_15358 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15356));
var chunk__14816_15359 = null;
var count__14817_15360 = (0);
var i__14818_15361 = (0);
while(true){
if((i__14818_15361 < count__14817_15360)){
var child_15362 = chunk__14816_15359.cljs$core$IIndexed$_nth$arity$2(null,i__14818_15361);
if(cljs.core.truth_(child_15362)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15362);


var G__15363 = seq__14814_15358;
var G__15364 = chunk__14816_15359;
var G__15365 = count__14817_15360;
var G__15366 = (i__14818_15361 + (1));
seq__14814_15358 = G__15363;
chunk__14816_15359 = G__15364;
count__14817_15360 = G__15365;
i__14818_15361 = G__15366;
continue;
} else {
var G__15368 = seq__14814_15358;
var G__15369 = chunk__14816_15359;
var G__15370 = count__14817_15360;
var G__15371 = (i__14818_15361 + (1));
seq__14814_15358 = G__15368;
chunk__14816_15359 = G__15369;
count__14817_15360 = G__15370;
i__14818_15361 = G__15371;
continue;
}
} else {
var temp__5804__auto___15372__$1 = cljs.core.seq(seq__14814_15358);
if(temp__5804__auto___15372__$1){
var seq__14814_15373__$1 = temp__5804__auto___15372__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14814_15373__$1)){
var c__5568__auto___15374 = cljs.core.chunk_first(seq__14814_15373__$1);
var G__15375 = cljs.core.chunk_rest(seq__14814_15373__$1);
var G__15376 = c__5568__auto___15374;
var G__15377 = cljs.core.count(c__5568__auto___15374);
var G__15378 = (0);
seq__14814_15358 = G__15375;
chunk__14816_15359 = G__15376;
count__14817_15360 = G__15377;
i__14818_15361 = G__15378;
continue;
} else {
var child_15381 = cljs.core.first(seq__14814_15373__$1);
if(cljs.core.truth_(child_15381)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15381);


var G__15382 = cljs.core.next(seq__14814_15373__$1);
var G__15383 = null;
var G__15384 = (0);
var G__15385 = (0);
seq__14814_15358 = G__15382;
chunk__14816_15359 = G__15383;
count__14817_15360 = G__15384;
i__14818_15361 = G__15385;
continue;
} else {
var G__15386 = cljs.core.next(seq__14814_15373__$1);
var G__15387 = null;
var G__15388 = (0);
var G__15389 = (0);
seq__14814_15358 = G__15386;
chunk__14816_15359 = G__15387;
count__14817_15360 = G__15388;
i__14818_15361 = G__15389;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15356);
}


var G__15390 = cljs.core.next(seq__14683_15348__$1);
var G__15391 = null;
var G__15392 = (0);
var G__15393 = (0);
seq__14683_15308 = G__15390;
chunk__14684_15309 = G__15391;
count__14685_15310 = G__15392;
i__14686_15311 = G__15393;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14882 = cljs.core.seq(node);
var chunk__14883 = null;
var count__14884 = (0);
var i__14885 = (0);
while(true){
if((i__14885 < count__14884)){
var n = chunk__14883.cljs$core$IIndexed$_nth$arity$2(null,i__14885);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15398 = seq__14882;
var G__15399 = chunk__14883;
var G__15400 = count__14884;
var G__15401 = (i__14885 + (1));
seq__14882 = G__15398;
chunk__14883 = G__15399;
count__14884 = G__15400;
i__14885 = G__15401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14882);
if(temp__5804__auto__){
var seq__14882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14882__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14882__$1);
var G__15403 = cljs.core.chunk_rest(seq__14882__$1);
var G__15404 = c__5568__auto__;
var G__15405 = cljs.core.count(c__5568__auto__);
var G__15406 = (0);
seq__14882 = G__15403;
chunk__14883 = G__15404;
count__14884 = G__15405;
i__14885 = G__15406;
continue;
} else {
var n = cljs.core.first(seq__14882__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15410 = cljs.core.next(seq__14882__$1);
var G__15411 = null;
var G__15412 = (0);
var G__15413 = (0);
seq__14882 = G__15410;
chunk__14883 = G__15411;
count__14884 = G__15412;
i__14885 = G__15413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14889 = arguments.length;
switch (G__14889) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14891 = arguments.length;
switch (G__14891) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14898 = arguments.length;
switch (G__14898) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15417 = arguments.length;
var i__5770__auto___15418 = (0);
while(true){
if((i__5770__auto___15418 < len__5769__auto___15417)){
args__5775__auto__.push((arguments[i__5770__auto___15418]));

var G__15419 = (i__5770__auto___15418 + (1));
i__5770__auto___15418 = G__15419;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14944_15420 = cljs.core.seq(nodes);
var chunk__14945_15421 = null;
var count__14946_15422 = (0);
var i__14947_15423 = (0);
while(true){
if((i__14947_15423 < count__14946_15422)){
var node_15424 = chunk__14945_15421.cljs$core$IIndexed$_nth$arity$2(null,i__14947_15423);
fragment.appendChild(shadow.dom._to_dom(node_15424));


var G__15425 = seq__14944_15420;
var G__15426 = chunk__14945_15421;
var G__15427 = count__14946_15422;
var G__15428 = (i__14947_15423 + (1));
seq__14944_15420 = G__15425;
chunk__14945_15421 = G__15426;
count__14946_15422 = G__15427;
i__14947_15423 = G__15428;
continue;
} else {
var temp__5804__auto___15429 = cljs.core.seq(seq__14944_15420);
if(temp__5804__auto___15429){
var seq__14944_15430__$1 = temp__5804__auto___15429;
if(cljs.core.chunked_seq_QMARK_(seq__14944_15430__$1)){
var c__5568__auto___15431 = cljs.core.chunk_first(seq__14944_15430__$1);
var G__15432 = cljs.core.chunk_rest(seq__14944_15430__$1);
var G__15433 = c__5568__auto___15431;
var G__15434 = cljs.core.count(c__5568__auto___15431);
var G__15435 = (0);
seq__14944_15420 = G__15432;
chunk__14945_15421 = G__15433;
count__14946_15422 = G__15434;
i__14947_15423 = G__15435;
continue;
} else {
var node_15436 = cljs.core.first(seq__14944_15430__$1);
fragment.appendChild(shadow.dom._to_dom(node_15436));


var G__15437 = cljs.core.next(seq__14944_15430__$1);
var G__15438 = null;
var G__15439 = (0);
var G__15440 = (0);
seq__14944_15420 = G__15437;
chunk__14945_15421 = G__15438;
count__14946_15422 = G__15439;
i__14947_15423 = G__15440;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14909){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14909));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14948_15441 = cljs.core.seq(scripts);
var chunk__14949_15442 = null;
var count__14950_15443 = (0);
var i__14951_15444 = (0);
while(true){
if((i__14951_15444 < count__14950_15443)){
var vec__14958_15445 = chunk__14949_15442.cljs$core$IIndexed$_nth$arity$2(null,i__14951_15444);
var script_tag_15446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958_15445,(0),null);
var script_body_15447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958_15445,(1),null);
eval(script_body_15447);


var G__15448 = seq__14948_15441;
var G__15449 = chunk__14949_15442;
var G__15450 = count__14950_15443;
var G__15451 = (i__14951_15444 + (1));
seq__14948_15441 = G__15448;
chunk__14949_15442 = G__15449;
count__14950_15443 = G__15450;
i__14951_15444 = G__15451;
continue;
} else {
var temp__5804__auto___15452 = cljs.core.seq(seq__14948_15441);
if(temp__5804__auto___15452){
var seq__14948_15453__$1 = temp__5804__auto___15452;
if(cljs.core.chunked_seq_QMARK_(seq__14948_15453__$1)){
var c__5568__auto___15454 = cljs.core.chunk_first(seq__14948_15453__$1);
var G__15455 = cljs.core.chunk_rest(seq__14948_15453__$1);
var G__15456 = c__5568__auto___15454;
var G__15457 = cljs.core.count(c__5568__auto___15454);
var G__15458 = (0);
seq__14948_15441 = G__15455;
chunk__14949_15442 = G__15456;
count__14950_15443 = G__15457;
i__14951_15444 = G__15458;
continue;
} else {
var vec__14961_15459 = cljs.core.first(seq__14948_15453__$1);
var script_tag_15460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14961_15459,(0),null);
var script_body_15461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14961_15459,(1),null);
eval(script_body_15461);


var G__15462 = cljs.core.next(seq__14948_15453__$1);
var G__15463 = null;
var G__15464 = (0);
var G__15465 = (0);
seq__14948_15441 = G__15462;
chunk__14949_15442 = G__15463;
count__14950_15443 = G__15464;
i__14951_15444 = G__15465;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14964){
var vec__14965 = p__14964;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14965,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14965,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14969 = arguments.length;
switch (G__14969) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14993 = cljs.core.seq(style_keys);
var chunk__14994 = null;
var count__14995 = (0);
var i__14996 = (0);
while(true){
if((i__14996 < count__14995)){
var it = chunk__14994.cljs$core$IIndexed$_nth$arity$2(null,i__14996);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15476 = seq__14993;
var G__15477 = chunk__14994;
var G__15478 = count__14995;
var G__15479 = (i__14996 + (1));
seq__14993 = G__15476;
chunk__14994 = G__15477;
count__14995 = G__15478;
i__14996 = G__15479;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14993);
if(temp__5804__auto__){
var seq__14993__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14993__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14993__$1);
var G__15480 = cljs.core.chunk_rest(seq__14993__$1);
var G__15481 = c__5568__auto__;
var G__15482 = cljs.core.count(c__5568__auto__);
var G__15483 = (0);
seq__14993 = G__15480;
chunk__14994 = G__15481;
count__14995 = G__15482;
i__14996 = G__15483;
continue;
} else {
var it = cljs.core.first(seq__14993__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15484 = cljs.core.next(seq__14993__$1);
var G__15485 = null;
var G__15486 = (0);
var G__15487 = (0);
seq__14993 = G__15484;
chunk__14994 = G__15485;
count__14995 = G__15486;
i__14996 = G__15487;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k14998,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15002 = k14998;
var G__15002__$1 = (((G__15002 instanceof cljs.core.Keyword))?G__15002.fqn:null);
switch (G__15002__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14998,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15004){
var vec__15005 = p__15004;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14997){
var self__ = this;
var G__14997__$1 = this;
return (new cljs.core.RecordIter((0),G__14997__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14999,other15000){
var self__ = this;
var this14999__$1 = this;
return (((!((other15000 == null)))) && ((((this14999__$1.constructor === other15000.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14999__$1.x,other15000.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14999__$1.y,other15000.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14999__$1.__extmap,other15000.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k14998){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15033 = k14998;
var G__15033__$1 = (((G__15033 instanceof cljs.core.Keyword))?G__15033.fqn:null);
switch (G__15033__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14998);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__14997){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15037 = cljs.core.keyword_identical_QMARK_;
var expr__15038 = k__5352__auto__;
if(cljs.core.truth_((pred__15037.cljs$core$IFn$_invoke$arity$2 ? pred__15037.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15038) : pred__15037.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15038)))){
return (new shadow.dom.Coordinate(G__14997,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15037.cljs$core$IFn$_invoke$arity$2 ? pred__15037.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15038) : pred__15037.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15038)))){
return (new shadow.dom.Coordinate(self__.x,G__14997,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__14997),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__14997){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14997,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15001){
var extmap__5385__auto__ = (function (){var G__15042 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15001,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15001)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15042);
} else {
return G__15042;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15001),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15001),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15056,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15060 = k15056;
var G__15060__$1 = (((G__15060 instanceof cljs.core.Keyword))?G__15060.fqn:null);
switch (G__15060__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15056,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15061){
var vec__15062 = p__15061;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15062,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15062,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15055){
var self__ = this;
var G__15055__$1 = this;
return (new cljs.core.RecordIter((0),G__15055__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15057,other15058){
var self__ = this;
var this15057__$1 = this;
return (((!((other15058 == null)))) && ((((this15057__$1.constructor === other15058.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15057__$1.w,other15058.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15057__$1.h,other15058.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15057__$1.__extmap,other15058.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15056){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15065 = k15056;
var G__15065__$1 = (((G__15065 instanceof cljs.core.Keyword))?G__15065.fqn:null);
switch (G__15065__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15056);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15055){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15066 = cljs.core.keyword_identical_QMARK_;
var expr__15067 = k__5352__auto__;
if(cljs.core.truth_((pred__15066.cljs$core$IFn$_invoke$arity$2 ? pred__15066.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15067) : pred__15066.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15067)))){
return (new shadow.dom.Size(G__15055,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15066.cljs$core$IFn$_invoke$arity$2 ? pred__15066.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15067) : pred__15066.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15067)))){
return (new shadow.dom.Size(self__.w,G__15055,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15055),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15055){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15055,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15059){
var extmap__5385__auto__ = (function (){var G__15071 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15059,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15059)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15071);
} else {
return G__15071;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15059),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15059),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__15495 = (i + (1));
var G__15496 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15495;
ret = G__15496;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15076){
var vec__15077 = p__15076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15081 = arguments.length;
switch (G__15081) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15499 = ps;
var G__15500 = (i + (1));
el__$1 = G__15499;
i = G__15500;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15102 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15102,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15102,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15102,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15105_15504 = cljs.core.seq(props);
var chunk__15106_15505 = null;
var count__15107_15506 = (0);
var i__15108_15507 = (0);
while(true){
if((i__15108_15507 < count__15107_15506)){
var vec__15118_15508 = chunk__15106_15505.cljs$core$IIndexed$_nth$arity$2(null,i__15108_15507);
var k_15509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118_15508,(0),null);
var v_15510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118_15508,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15509);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15509),v_15510);


var G__15511 = seq__15105_15504;
var G__15512 = chunk__15106_15505;
var G__15513 = count__15107_15506;
var G__15514 = (i__15108_15507 + (1));
seq__15105_15504 = G__15511;
chunk__15106_15505 = G__15512;
count__15107_15506 = G__15513;
i__15108_15507 = G__15514;
continue;
} else {
var temp__5804__auto___15515 = cljs.core.seq(seq__15105_15504);
if(temp__5804__auto___15515){
var seq__15105_15516__$1 = temp__5804__auto___15515;
if(cljs.core.chunked_seq_QMARK_(seq__15105_15516__$1)){
var c__5568__auto___15517 = cljs.core.chunk_first(seq__15105_15516__$1);
var G__15518 = cljs.core.chunk_rest(seq__15105_15516__$1);
var G__15519 = c__5568__auto___15517;
var G__15520 = cljs.core.count(c__5568__auto___15517);
var G__15521 = (0);
seq__15105_15504 = G__15518;
chunk__15106_15505 = G__15519;
count__15107_15506 = G__15520;
i__15108_15507 = G__15521;
continue;
} else {
var vec__15121_15522 = cljs.core.first(seq__15105_15516__$1);
var k_15523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15121_15522,(0),null);
var v_15524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15121_15522,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15523);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15523),v_15524);


var G__15525 = cljs.core.next(seq__15105_15516__$1);
var G__15526 = null;
var G__15527 = (0);
var G__15528 = (0);
seq__15105_15504 = G__15525;
chunk__15106_15505 = G__15526;
count__15107_15506 = G__15527;
i__15108_15507 = G__15528;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15125 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15125,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15125,(1),null);
var seq__15128_15531 = cljs.core.seq(node_children);
var chunk__15130_15532 = null;
var count__15131_15533 = (0);
var i__15132_15534 = (0);
while(true){
if((i__15132_15534 < count__15131_15533)){
var child_struct_15535 = chunk__15130_15532.cljs$core$IIndexed$_nth$arity$2(null,i__15132_15534);
if((!((child_struct_15535 == null)))){
if(typeof child_struct_15535 === 'string'){
var text_15536 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15536),child_struct_15535].join(''));
} else {
var children_15537 = shadow.dom.svg_node(child_struct_15535);
if(cljs.core.seq_QMARK_(children_15537)){
var seq__15154_15539 = cljs.core.seq(children_15537);
var chunk__15156_15540 = null;
var count__15157_15541 = (0);
var i__15158_15542 = (0);
while(true){
if((i__15158_15542 < count__15157_15541)){
var child_15543 = chunk__15156_15540.cljs$core$IIndexed$_nth$arity$2(null,i__15158_15542);
if(cljs.core.truth_(child_15543)){
node.appendChild(child_15543);


var G__15545 = seq__15154_15539;
var G__15546 = chunk__15156_15540;
var G__15547 = count__15157_15541;
var G__15548 = (i__15158_15542 + (1));
seq__15154_15539 = G__15545;
chunk__15156_15540 = G__15546;
count__15157_15541 = G__15547;
i__15158_15542 = G__15548;
continue;
} else {
var G__15549 = seq__15154_15539;
var G__15550 = chunk__15156_15540;
var G__15551 = count__15157_15541;
var G__15552 = (i__15158_15542 + (1));
seq__15154_15539 = G__15549;
chunk__15156_15540 = G__15550;
count__15157_15541 = G__15551;
i__15158_15542 = G__15552;
continue;
}
} else {
var temp__5804__auto___15553 = cljs.core.seq(seq__15154_15539);
if(temp__5804__auto___15553){
var seq__15154_15555__$1 = temp__5804__auto___15553;
if(cljs.core.chunked_seq_QMARK_(seq__15154_15555__$1)){
var c__5568__auto___15556 = cljs.core.chunk_first(seq__15154_15555__$1);
var G__15557 = cljs.core.chunk_rest(seq__15154_15555__$1);
var G__15558 = c__5568__auto___15556;
var G__15559 = cljs.core.count(c__5568__auto___15556);
var G__15560 = (0);
seq__15154_15539 = G__15557;
chunk__15156_15540 = G__15558;
count__15157_15541 = G__15559;
i__15158_15542 = G__15560;
continue;
} else {
var child_15561 = cljs.core.first(seq__15154_15555__$1);
if(cljs.core.truth_(child_15561)){
node.appendChild(child_15561);


var G__15562 = cljs.core.next(seq__15154_15555__$1);
var G__15563 = null;
var G__15564 = (0);
var G__15565 = (0);
seq__15154_15539 = G__15562;
chunk__15156_15540 = G__15563;
count__15157_15541 = G__15564;
i__15158_15542 = G__15565;
continue;
} else {
var G__15566 = cljs.core.next(seq__15154_15555__$1);
var G__15567 = null;
var G__15568 = (0);
var G__15569 = (0);
seq__15154_15539 = G__15566;
chunk__15156_15540 = G__15567;
count__15157_15541 = G__15568;
i__15158_15542 = G__15569;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15537);
}
}


var G__15570 = seq__15128_15531;
var G__15571 = chunk__15130_15532;
var G__15572 = count__15131_15533;
var G__15573 = (i__15132_15534 + (1));
seq__15128_15531 = G__15570;
chunk__15130_15532 = G__15571;
count__15131_15533 = G__15572;
i__15132_15534 = G__15573;
continue;
} else {
var G__15574 = seq__15128_15531;
var G__15575 = chunk__15130_15532;
var G__15576 = count__15131_15533;
var G__15577 = (i__15132_15534 + (1));
seq__15128_15531 = G__15574;
chunk__15130_15532 = G__15575;
count__15131_15533 = G__15576;
i__15132_15534 = G__15577;
continue;
}
} else {
var temp__5804__auto___15578 = cljs.core.seq(seq__15128_15531);
if(temp__5804__auto___15578){
var seq__15128_15579__$1 = temp__5804__auto___15578;
if(cljs.core.chunked_seq_QMARK_(seq__15128_15579__$1)){
var c__5568__auto___15580 = cljs.core.chunk_first(seq__15128_15579__$1);
var G__15581 = cljs.core.chunk_rest(seq__15128_15579__$1);
var G__15582 = c__5568__auto___15580;
var G__15583 = cljs.core.count(c__5568__auto___15580);
var G__15584 = (0);
seq__15128_15531 = G__15581;
chunk__15130_15532 = G__15582;
count__15131_15533 = G__15583;
i__15132_15534 = G__15584;
continue;
} else {
var child_struct_15585 = cljs.core.first(seq__15128_15579__$1);
if((!((child_struct_15585 == null)))){
if(typeof child_struct_15585 === 'string'){
var text_15586 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15586),child_struct_15585].join(''));
} else {
var children_15587 = shadow.dom.svg_node(child_struct_15585);
if(cljs.core.seq_QMARK_(children_15587)){
var seq__15166_15588 = cljs.core.seq(children_15587);
var chunk__15168_15589 = null;
var count__15169_15590 = (0);
var i__15170_15591 = (0);
while(true){
if((i__15170_15591 < count__15169_15590)){
var child_15592 = chunk__15168_15589.cljs$core$IIndexed$_nth$arity$2(null,i__15170_15591);
if(cljs.core.truth_(child_15592)){
node.appendChild(child_15592);


var G__15593 = seq__15166_15588;
var G__15594 = chunk__15168_15589;
var G__15595 = count__15169_15590;
var G__15596 = (i__15170_15591 + (1));
seq__15166_15588 = G__15593;
chunk__15168_15589 = G__15594;
count__15169_15590 = G__15595;
i__15170_15591 = G__15596;
continue;
} else {
var G__15597 = seq__15166_15588;
var G__15598 = chunk__15168_15589;
var G__15599 = count__15169_15590;
var G__15600 = (i__15170_15591 + (1));
seq__15166_15588 = G__15597;
chunk__15168_15589 = G__15598;
count__15169_15590 = G__15599;
i__15170_15591 = G__15600;
continue;
}
} else {
var temp__5804__auto___15604__$1 = cljs.core.seq(seq__15166_15588);
if(temp__5804__auto___15604__$1){
var seq__15166_15605__$1 = temp__5804__auto___15604__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15166_15605__$1)){
var c__5568__auto___15606 = cljs.core.chunk_first(seq__15166_15605__$1);
var G__15607 = cljs.core.chunk_rest(seq__15166_15605__$1);
var G__15608 = c__5568__auto___15606;
var G__15609 = cljs.core.count(c__5568__auto___15606);
var G__15610 = (0);
seq__15166_15588 = G__15607;
chunk__15168_15589 = G__15608;
count__15169_15590 = G__15609;
i__15170_15591 = G__15610;
continue;
} else {
var child_15611 = cljs.core.first(seq__15166_15605__$1);
if(cljs.core.truth_(child_15611)){
node.appendChild(child_15611);


var G__15612 = cljs.core.next(seq__15166_15605__$1);
var G__15613 = null;
var G__15614 = (0);
var G__15615 = (0);
seq__15166_15588 = G__15612;
chunk__15168_15589 = G__15613;
count__15169_15590 = G__15614;
i__15170_15591 = G__15615;
continue;
} else {
var G__15616 = cljs.core.next(seq__15166_15605__$1);
var G__15617 = null;
var G__15618 = (0);
var G__15619 = (0);
seq__15166_15588 = G__15616;
chunk__15168_15589 = G__15617;
count__15169_15590 = G__15618;
i__15170_15591 = G__15619;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15587);
}
}


var G__15620 = cljs.core.next(seq__15128_15579__$1);
var G__15621 = null;
var G__15622 = (0);
var G__15623 = (0);
seq__15128_15531 = G__15620;
chunk__15130_15532 = G__15621;
count__15131_15533 = G__15622;
i__15132_15534 = G__15623;
continue;
} else {
var G__15624 = cljs.core.next(seq__15128_15579__$1);
var G__15625 = null;
var G__15626 = (0);
var G__15627 = (0);
seq__15128_15531 = G__15624;
chunk__15130_15532 = G__15625;
count__15131_15533 = G__15626;
i__15132_15534 = G__15627;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15628 = arguments.length;
var i__5770__auto___15629 = (0);
while(true){
if((i__5770__auto___15629 < len__5769__auto___15628)){
args__5775__auto__.push((arguments[i__5770__auto___15629]));

var G__15630 = (i__5770__auto___15629 + (1));
i__5770__auto___15629 = G__15630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15172){
var G__15173 = cljs.core.first(seq15172);
var seq15172__$1 = cljs.core.next(seq15172);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15173,seq15172__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__15177 = arguments.length;
switch (G__15177) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__12066__auto___15632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_15198){
var state_val_15199 = (state_15198[(1)]);
if((state_val_15199 === (1))){
var state_15198__$1 = state_15198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15198__$1,(2),once_or_cleanup);
} else {
if((state_val_15199 === (2))){
var inst_15195 = (state_15198[(2)]);
var inst_15196 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_15198__$1 = (function (){var statearr_15200 = state_15198;
(statearr_15200[(7)] = inst_15195);

return statearr_15200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15198__$1,inst_15196);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12007__auto__ = null;
var shadow$dom$state_machine__12007__auto____0 = (function (){
var statearr_15201 = [null,null,null,null,null,null,null,null];
(statearr_15201[(0)] = shadow$dom$state_machine__12007__auto__);

(statearr_15201[(1)] = (1));

return statearr_15201;
});
var shadow$dom$state_machine__12007__auto____1 = (function (state_15198){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_15198);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e15202){var ex__12010__auto__ = e15202;
var statearr_15203_15641 = state_15198;
(statearr_15203_15641[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_15198[(4)]))){
var statearr_15204_15642 = state_15198;
(statearr_15204_15642[(1)] = cljs.core.first((state_15198[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15643 = state_15198;
state_15198 = G__15643;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
shadow$dom$state_machine__12007__auto__ = function(state_15198){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12007__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12007__auto____1.call(this,state_15198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12007__auto____0;
shadow$dom$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12007__auto____1;
return shadow$dom$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_15205 = f__12067__auto__();
(statearr_15205[(6)] = c__12066__auto___15632);

return statearr_15205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
