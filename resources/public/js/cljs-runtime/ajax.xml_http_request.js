goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__13148 = e.target.readyState;
var fexpr__13147 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__13147.cljs$core$IFn$_invoke$arity$1 ? fexpr__13147.cljs$core$IFn$_invoke$arity$1(G__13148) : fexpr__13147.call(null,G__13148));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13156,handler){
var map__13157 = p__13156;
var map__13157__$1 = cljs.core.__destructure_map(map__13157);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13157__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13157__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__13154_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__13154_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___13178 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___13178)){
var response_type_13179 = temp__5804__auto___13178;
(this$__$1.responseType = cljs.core.name(response_type_13179));
} else {
}

var seq__13158_13180 = cljs.core.seq(headers);
var chunk__13159_13181 = null;
var count__13160_13182 = (0);
var i__13161_13183 = (0);
while(true){
if((i__13161_13183 < count__13160_13182)){
var vec__13172_13184 = chunk__13159_13181.cljs$core$IIndexed$_nth$arity$2(null,i__13161_13183);
var k_13185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172_13184,(0),null);
var v_13186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172_13184,(1),null);
this$__$1.setRequestHeader(k_13185,v_13186);


var G__13187 = seq__13158_13180;
var G__13188 = chunk__13159_13181;
var G__13189 = count__13160_13182;
var G__13190 = (i__13161_13183 + (1));
seq__13158_13180 = G__13187;
chunk__13159_13181 = G__13188;
count__13160_13182 = G__13189;
i__13161_13183 = G__13190;
continue;
} else {
var temp__5804__auto___13191 = cljs.core.seq(seq__13158_13180);
if(temp__5804__auto___13191){
var seq__13158_13192__$1 = temp__5804__auto___13191;
if(cljs.core.chunked_seq_QMARK_(seq__13158_13192__$1)){
var c__5568__auto___13193 = cljs.core.chunk_first(seq__13158_13192__$1);
var G__13194 = cljs.core.chunk_rest(seq__13158_13192__$1);
var G__13195 = c__5568__auto___13193;
var G__13196 = cljs.core.count(c__5568__auto___13193);
var G__13197 = (0);
seq__13158_13180 = G__13194;
chunk__13159_13181 = G__13195;
count__13160_13182 = G__13196;
i__13161_13183 = G__13197;
continue;
} else {
var vec__13175_13198 = cljs.core.first(seq__13158_13192__$1);
var k_13199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13175_13198,(0),null);
var v_13200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13175_13198,(1),null);
this$__$1.setRequestHeader(k_13199,v_13200);


var G__13201 = cljs.core.next(seq__13158_13192__$1);
var G__13202 = null;
var G__13203 = (0);
var G__13204 = (0);
seq__13158_13180 = G__13201;
chunk__13159_13181 = G__13202;
count__13160_13182 = G__13203;
i__13161_13183 = G__13204;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
