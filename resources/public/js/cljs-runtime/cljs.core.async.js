goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12152 = arguments.length;
switch (G__12152) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12153 = (function (f,blockable,meta12154){
this.f = f;
this.blockable = blockable;
this.meta12154 = meta12154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12155,meta12154__$1){
var self__ = this;
var _12155__$1 = this;
return (new cljs.core.async.t_cljs$core$async12153(self__.f,self__.blockable,meta12154__$1));
}));

(cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12155){
var self__ = this;
var _12155__$1 = this;
return self__.meta12154;
}));

(cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12154","meta12154",918921133,null)], null);
}));

(cljs.core.async.t_cljs$core$async12153.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12153");

(cljs.core.async.t_cljs$core$async12153.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12153");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12153.
 */
cljs.core.async.__GT_t_cljs$core$async12153 = (function cljs$core$async$__GT_t_cljs$core$async12153(f__$1,blockable__$1,meta12154){
return (new cljs.core.async.t_cljs$core$async12153(f__$1,blockable__$1,meta12154));
});

}

return (new cljs.core.async.t_cljs$core$async12153(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12173 = arguments.length;
switch (G__12173) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12181 = arguments.length;
switch (G__12181) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12196 = arguments.length;
switch (G__12196) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14313 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14313) : fn1.call(null,val_14313));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14313) : fn1.call(null,val_14313));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12210 = arguments.length;
switch (G__12210) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___14315 = n;
var x_14316 = (0);
while(true){
if((x_14316 < n__5636__auto___14315)){
(a[x_14316] = x_14316);

var G__14317 = (x_14316 + (1));
x_14316 = G__14317;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12211 = (function (flag,meta12212){
this.flag = flag;
this.meta12212 = meta12212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12213,meta12212__$1){
var self__ = this;
var _12213__$1 = this;
return (new cljs.core.async.t_cljs$core$async12211(self__.flag,meta12212__$1));
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12213){
var self__ = this;
var _12213__$1 = this;
return self__.meta12212;
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12212","meta12212",1798241139,null)], null);
}));

(cljs.core.async.t_cljs$core$async12211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12211");

(cljs.core.async.t_cljs$core$async12211.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12211.
 */
cljs.core.async.__GT_t_cljs$core$async12211 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12211(flag__$1,meta12212){
return (new cljs.core.async.t_cljs$core$async12211(flag__$1,meta12212));
});

}

return (new cljs.core.async.t_cljs$core$async12211(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12214 = (function (flag,cb,meta12215){
this.flag = flag;
this.cb = cb;
this.meta12215 = meta12215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12216,meta12215__$1){
var self__ = this;
var _12216__$1 = this;
return (new cljs.core.async.t_cljs$core$async12214(self__.flag,self__.cb,meta12215__$1));
}));

(cljs.core.async.t_cljs$core$async12214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12216){
var self__ = this;
var _12216__$1 = this;
return self__.meta12215;
}));

(cljs.core.async.t_cljs$core$async12214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12215","meta12215",1955556858,null)], null);
}));

(cljs.core.async.t_cljs$core$async12214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12214");

(cljs.core.async.t_cljs$core$async12214.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12214.
 */
cljs.core.async.__GT_t_cljs$core$async12214 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12214(flag__$1,cb__$1,meta12215){
return (new cljs.core.async.t_cljs$core$async12214(flag__$1,cb__$1,meta12215));
});

}

return (new cljs.core.async.t_cljs$core$async12214(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12220_SHARP_){
var G__12225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12220_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12225) : fret.call(null,G__12225));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12221_SHARP_){
var G__12226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12221_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12226) : fret.call(null,G__12226));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14318 = (i + (1));
i = G__14318;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14319 = arguments.length;
var i__5770__auto___14320 = (0);
while(true){
if((i__5770__auto___14320 < len__5769__auto___14319)){
args__5775__auto__.push((arguments[i__5770__auto___14320]));

var G__14321 = (i__5770__auto___14320 + (1));
i__5770__auto___14320 = G__14321;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12232){
var map__12233 = p__12232;
var map__12233__$1 = cljs.core.__destructure_map(map__12233);
var opts = map__12233__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12227){
var G__12228 = cljs.core.first(seq12227);
var seq12227__$1 = cljs.core.next(seq12227);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12228,seq12227__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12238 = arguments.length;
switch (G__12238) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12066__auto___14325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12265){
var state_val_12266 = (state_12265[(1)]);
if((state_val_12266 === (7))){
var inst_12261 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12273_14326 = state_12265__$1;
(statearr_12273_14326[(2)] = inst_12261);

(statearr_12273_14326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (1))){
var state_12265__$1 = state_12265;
var statearr_12274_14327 = state_12265__$1;
(statearr_12274_14327[(2)] = null);

(statearr_12274_14327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (4))){
var inst_12241 = (state_12265[(7)]);
var inst_12241__$1 = (state_12265[(2)]);
var inst_12242 = (inst_12241__$1 == null);
var state_12265__$1 = (function (){var statearr_12275 = state_12265;
(statearr_12275[(7)] = inst_12241__$1);

return statearr_12275;
})();
if(cljs.core.truth_(inst_12242)){
var statearr_12276_14328 = state_12265__$1;
(statearr_12276_14328[(1)] = (5));

} else {
var statearr_12277_14329 = state_12265__$1;
(statearr_12277_14329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (13))){
var state_12265__$1 = state_12265;
var statearr_12278_14330 = state_12265__$1;
(statearr_12278_14330[(2)] = null);

(statearr_12278_14330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (6))){
var inst_12241 = (state_12265[(7)]);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12265__$1,(11),to,inst_12241);
} else {
if((state_val_12266 === (3))){
var inst_12263 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12265__$1,inst_12263);
} else {
if((state_val_12266 === (12))){
var state_12265__$1 = state_12265;
var statearr_12282_14331 = state_12265__$1;
(statearr_12282_14331[(2)] = null);

(statearr_12282_14331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (2))){
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12265__$1,(4),from);
} else {
if((state_val_12266 === (11))){
var inst_12254 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
if(cljs.core.truth_(inst_12254)){
var statearr_12283_14332 = state_12265__$1;
(statearr_12283_14332[(1)] = (12));

} else {
var statearr_12284_14333 = state_12265__$1;
(statearr_12284_14333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (9))){
var state_12265__$1 = state_12265;
var statearr_12285_14334 = state_12265__$1;
(statearr_12285_14334[(2)] = null);

(statearr_12285_14334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (5))){
var state_12265__$1 = state_12265;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12286_14335 = state_12265__$1;
(statearr_12286_14335[(1)] = (8));

} else {
var statearr_12287_14336 = state_12265__$1;
(statearr_12287_14336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (14))){
var inst_12259 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12288_14337 = state_12265__$1;
(statearr_12288_14337[(2)] = inst_12259);

(statearr_12288_14337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (10))){
var inst_12251 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12289_14338 = state_12265__$1;
(statearr_12289_14338[(2)] = inst_12251);

(statearr_12289_14338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (8))){
var inst_12248 = cljs.core.async.close_BANG_(to);
var state_12265__$1 = state_12265;
var statearr_12290_14339 = state_12265__$1;
(statearr_12290_14339[(2)] = inst_12248);

(statearr_12290_14339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_12291 = [null,null,null,null,null,null,null,null];
(statearr_12291[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_12291[(1)] = (1));

return statearr_12291;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_12265){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12265);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12292){var ex__12010__auto__ = e12292;
var statearr_12293_14340 = state_12265;
(statearr_12293_14340[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12265[(4)]))){
var statearr_12294_14341 = state_12265;
(statearr_12294_14341[(1)] = cljs.core.first((state_12265[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14342 = state_12265;
state_12265 = G__14342;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_12265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_12265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12297 = f__12067__auto__();
(statearr_12297[(6)] = c__12066__auto___14325);

return statearr_12297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__12299){
var vec__12300 = p__12299;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(1),null);
var job = vec__12300;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12066__auto___14346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12307){
var state_val_12308 = (state_12307[(1)]);
if((state_val_12308 === (1))){
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12307__$1,(2),res,v);
} else {
if((state_val_12308 === (2))){
var inst_12304 = (state_12307[(2)]);
var inst_12305 = cljs.core.async.close_BANG_(res);
var state_12307__$1 = (function (){var statearr_12309 = state_12307;
(statearr_12309[(7)] = inst_12304);

return statearr_12309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12307__$1,inst_12305);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0 = (function (){
var statearr_12317 = [null,null,null,null,null,null,null,null];
(statearr_12317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__);

(statearr_12317[(1)] = (1));

return statearr_12317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1 = (function (state_12307){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12307);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12318){var ex__12010__auto__ = e12318;
var statearr_12319_14357 = state_12307;
(statearr_12319_14357[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12307[(4)]))){
var statearr_12320_14358 = state_12307;
(statearr_12320_14358[(1)] = cljs.core.first((state_12307[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14359 = state_12307;
state_12307 = G__14359;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = function(state_12307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1.call(this,state_12307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12321 = f__12067__auto__();
(statearr_12321[(6)] = c__12066__auto___14346);

return statearr_12321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12322){
var vec__12323 = p__12322;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12323,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12323,(1),null);
var job = vec__12323;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___14360 = n;
var __14361 = (0);
while(true){
if((__14361 < n__5636__auto___14360)){
var G__12326_14362 = type;
var G__12326_14363__$1 = (((G__12326_14362 instanceof cljs.core.Keyword))?G__12326_14362.fqn:null);
switch (G__12326_14363__$1) {
case "compute":
var c__12066__auto___14365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14361,c__12066__auto___14365,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async){
return (function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = ((function (__14361,c__12066__auto___14365,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async){
return (function (state_12364){
var state_val_12365 = (state_12364[(1)]);
if((state_val_12365 === (1))){
var state_12364__$1 = state_12364;
var statearr_12370_14367 = state_12364__$1;
(statearr_12370_14367[(2)] = null);

(statearr_12370_14367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (2))){
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12364__$1,(4),jobs);
} else {
if((state_val_12365 === (3))){
var inst_12362 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12364__$1,inst_12362);
} else {
if((state_val_12365 === (4))){
var inst_12329 = (state_12364[(2)]);
var inst_12330 = process__$1(inst_12329);
var state_12364__$1 = state_12364;
if(cljs.core.truth_(inst_12330)){
var statearr_12384_14370 = state_12364__$1;
(statearr_12384_14370[(1)] = (5));

} else {
var statearr_12385_14371 = state_12364__$1;
(statearr_12385_14371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (5))){
var state_12364__$1 = state_12364;
var statearr_12386_14372 = state_12364__$1;
(statearr_12386_14372[(2)] = null);

(statearr_12386_14372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (6))){
var state_12364__$1 = state_12364;
var statearr_12387_14373 = state_12364__$1;
(statearr_12387_14373[(2)] = null);

(statearr_12387_14373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (7))){
var inst_12360 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12388_14374 = state_12364__$1;
(statearr_12388_14374[(2)] = inst_12360);

(statearr_12388_14374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14361,c__12066__auto___14365,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async))
;
return ((function (__14361,switch__12006__auto__,c__12066__auto___14365,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0 = (function (){
var statearr_12389 = [null,null,null,null,null,null,null];
(statearr_12389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__);

(statearr_12389[(1)] = (1));

return statearr_12389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1 = (function (state_12364){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12364);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12390){var ex__12010__auto__ = e12390;
var statearr_12391_14375 = state_12364;
(statearr_12391_14375[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12364[(4)]))){
var statearr_12392_14377 = state_12364;
(statearr_12392_14377[(1)] = cljs.core.first((state_12364[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14378 = state_12364;
state_12364 = G__14378;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = function(state_12364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1.call(this,state_12364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__;
})()
;})(__14361,switch__12006__auto__,c__12066__auto___14365,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async))
})();
var state__12068__auto__ = (function (){var statearr_12393 = f__12067__auto__();
(statearr_12393[(6)] = c__12066__auto___14365);

return statearr_12393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
});})(__14361,c__12066__auto___14365,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async))
);


break;
case "async":
var c__12066__auto___14380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14361,c__12066__auto___14380,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async){
return (function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = ((function (__14361,c__12066__auto___14380,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async){
return (function (state_12406){
var state_val_12407 = (state_12406[(1)]);
if((state_val_12407 === (1))){
var state_12406__$1 = state_12406;
var statearr_12408_14381 = state_12406__$1;
(statearr_12408_14381[(2)] = null);

(statearr_12408_14381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12407 === (2))){
var state_12406__$1 = state_12406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12406__$1,(4),jobs);
} else {
if((state_val_12407 === (3))){
var inst_12404 = (state_12406[(2)]);
var state_12406__$1 = state_12406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12406__$1,inst_12404);
} else {
if((state_val_12407 === (4))){
var inst_12396 = (state_12406[(2)]);
var inst_12397 = async(inst_12396);
var state_12406__$1 = state_12406;
if(cljs.core.truth_(inst_12397)){
var statearr_12409_14382 = state_12406__$1;
(statearr_12409_14382[(1)] = (5));

} else {
var statearr_12410_14383 = state_12406__$1;
(statearr_12410_14383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12407 === (5))){
var state_12406__$1 = state_12406;
var statearr_12411_14384 = state_12406__$1;
(statearr_12411_14384[(2)] = null);

(statearr_12411_14384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12407 === (6))){
var state_12406__$1 = state_12406;
var statearr_12412_14385 = state_12406__$1;
(statearr_12412_14385[(2)] = null);

(statearr_12412_14385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12407 === (7))){
var inst_12402 = (state_12406[(2)]);
var state_12406__$1 = state_12406;
var statearr_12413_14386 = state_12406__$1;
(statearr_12413_14386[(2)] = inst_12402);

(statearr_12413_14386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14361,c__12066__auto___14380,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async))
;
return ((function (__14361,switch__12006__auto__,c__12066__auto___14380,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0 = (function (){
var statearr_12414 = [null,null,null,null,null,null,null];
(statearr_12414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__);

(statearr_12414[(1)] = (1));

return statearr_12414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1 = (function (state_12406){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12406);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12415){var ex__12010__auto__ = e12415;
var statearr_12416_14387 = state_12406;
(statearr_12416_14387[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12406[(4)]))){
var statearr_12417_14388 = state_12406;
(statearr_12417_14388[(1)] = cljs.core.first((state_12406[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14389 = state_12406;
state_12406 = G__14389;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = function(state_12406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1.call(this,state_12406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__;
})()
;})(__14361,switch__12006__auto__,c__12066__auto___14380,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async))
})();
var state__12068__auto__ = (function (){var statearr_12418 = f__12067__auto__();
(statearr_12418[(6)] = c__12066__auto___14380);

return statearr_12418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
});})(__14361,c__12066__auto___14380,G__12326_14362,G__12326_14363__$1,n__5636__auto___14360,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12326_14363__$1)].join('')));

}

var G__14390 = (__14361 + (1));
__14361 = G__14390;
continue;
} else {
}
break;
}

var c__12066__auto___14391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12440){
var state_val_12441 = (state_12440[(1)]);
if((state_val_12441 === (7))){
var inst_12436 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12442_14392 = state_12440__$1;
(statearr_12442_14392[(2)] = inst_12436);

(statearr_12442_14392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (1))){
var state_12440__$1 = state_12440;
var statearr_12443_14393 = state_12440__$1;
(statearr_12443_14393[(2)] = null);

(statearr_12443_14393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (4))){
var inst_12421 = (state_12440[(7)]);
var inst_12421__$1 = (state_12440[(2)]);
var inst_12422 = (inst_12421__$1 == null);
var state_12440__$1 = (function (){var statearr_12444 = state_12440;
(statearr_12444[(7)] = inst_12421__$1);

return statearr_12444;
})();
if(cljs.core.truth_(inst_12422)){
var statearr_12445_14394 = state_12440__$1;
(statearr_12445_14394[(1)] = (5));

} else {
var statearr_12446_14395 = state_12440__$1;
(statearr_12446_14395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (6))){
var inst_12421 = (state_12440[(7)]);
var inst_12426 = (state_12440[(8)]);
var inst_12426__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12428 = [inst_12421,inst_12426__$1];
var inst_12429 = (new cljs.core.PersistentVector(null,2,(5),inst_12427,inst_12428,null));
var state_12440__$1 = (function (){var statearr_12447 = state_12440;
(statearr_12447[(8)] = inst_12426__$1);

return statearr_12447;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12440__$1,(8),jobs,inst_12429);
} else {
if((state_val_12441 === (3))){
var inst_12438 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12440__$1,inst_12438);
} else {
if((state_val_12441 === (2))){
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12440__$1,(4),from);
} else {
if((state_val_12441 === (9))){
var inst_12433 = (state_12440[(2)]);
var state_12440__$1 = (function (){var statearr_12451 = state_12440;
(statearr_12451[(9)] = inst_12433);

return statearr_12451;
})();
var statearr_12452_14396 = state_12440__$1;
(statearr_12452_14396[(2)] = null);

(statearr_12452_14396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (5))){
var inst_12424 = cljs.core.async.close_BANG_(jobs);
var state_12440__$1 = state_12440;
var statearr_12453_14397 = state_12440__$1;
(statearr_12453_14397[(2)] = inst_12424);

(statearr_12453_14397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (8))){
var inst_12426 = (state_12440[(8)]);
var inst_12431 = (state_12440[(2)]);
var state_12440__$1 = (function (){var statearr_12454 = state_12440;
(statearr_12454[(10)] = inst_12431);

return statearr_12454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12440__$1,(9),results,inst_12426);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0 = (function (){
var statearr_12455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__);

(statearr_12455[(1)] = (1));

return statearr_12455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1 = (function (state_12440){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12440);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12456){var ex__12010__auto__ = e12456;
var statearr_12457_14398 = state_12440;
(statearr_12457_14398[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12440[(4)]))){
var statearr_12458_14399 = state_12440;
(statearr_12458_14399[(1)] = cljs.core.first((state_12440[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14400 = state_12440;
state_12440 = G__14400;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = function(state_12440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1.call(this,state_12440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12459 = f__12067__auto__();
(statearr_12459[(6)] = c__12066__auto___14391);

return statearr_12459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


var c__12066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12497){
var state_val_12498 = (state_12497[(1)]);
if((state_val_12498 === (7))){
var inst_12493 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12499_14401 = state_12497__$1;
(statearr_12499_14401[(2)] = inst_12493);

(statearr_12499_14401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (20))){
var state_12497__$1 = state_12497;
var statearr_12500_14402 = state_12497__$1;
(statearr_12500_14402[(2)] = null);

(statearr_12500_14402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (1))){
var state_12497__$1 = state_12497;
var statearr_12501_14407 = state_12497__$1;
(statearr_12501_14407[(2)] = null);

(statearr_12501_14407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (4))){
var inst_12462 = (state_12497[(7)]);
var inst_12462__$1 = (state_12497[(2)]);
var inst_12463 = (inst_12462__$1 == null);
var state_12497__$1 = (function (){var statearr_12502 = state_12497;
(statearr_12502[(7)] = inst_12462__$1);

return statearr_12502;
})();
if(cljs.core.truth_(inst_12463)){
var statearr_12503_14408 = state_12497__$1;
(statearr_12503_14408[(1)] = (5));

} else {
var statearr_12504_14409 = state_12497__$1;
(statearr_12504_14409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (15))){
var inst_12475 = (state_12497[(8)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12497__$1,(18),to,inst_12475);
} else {
if((state_val_12498 === (21))){
var inst_12488 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12505_14410 = state_12497__$1;
(statearr_12505_14410[(2)] = inst_12488);

(statearr_12505_14410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (13))){
var inst_12490 = (state_12497[(2)]);
var state_12497__$1 = (function (){var statearr_12506 = state_12497;
(statearr_12506[(9)] = inst_12490);

return statearr_12506;
})();
var statearr_12507_14411 = state_12497__$1;
(statearr_12507_14411[(2)] = null);

(statearr_12507_14411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (6))){
var inst_12462 = (state_12497[(7)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12497__$1,(11),inst_12462);
} else {
if((state_val_12498 === (17))){
var inst_12483 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
if(cljs.core.truth_(inst_12483)){
var statearr_12508_14412 = state_12497__$1;
(statearr_12508_14412[(1)] = (19));

} else {
var statearr_12509_14413 = state_12497__$1;
(statearr_12509_14413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (3))){
var inst_12495 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12497__$1,inst_12495);
} else {
if((state_val_12498 === (12))){
var inst_12472 = (state_12497[(10)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12497__$1,(14),inst_12472);
} else {
if((state_val_12498 === (2))){
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12497__$1,(4),results);
} else {
if((state_val_12498 === (19))){
var state_12497__$1 = state_12497;
var statearr_12513_14418 = state_12497__$1;
(statearr_12513_14418[(2)] = null);

(statearr_12513_14418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (11))){
var inst_12472 = (state_12497[(2)]);
var state_12497__$1 = (function (){var statearr_12520 = state_12497;
(statearr_12520[(10)] = inst_12472);

return statearr_12520;
})();
var statearr_12521_14419 = state_12497__$1;
(statearr_12521_14419[(2)] = null);

(statearr_12521_14419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (9))){
var state_12497__$1 = state_12497;
var statearr_12522_14420 = state_12497__$1;
(statearr_12522_14420[(2)] = null);

(statearr_12522_14420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (5))){
var state_12497__$1 = state_12497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12523_14421 = state_12497__$1;
(statearr_12523_14421[(1)] = (8));

} else {
var statearr_12524_14422 = state_12497__$1;
(statearr_12524_14422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (14))){
var inst_12475 = (state_12497[(8)]);
var inst_12477 = (state_12497[(11)]);
var inst_12475__$1 = (state_12497[(2)]);
var inst_12476 = (inst_12475__$1 == null);
var inst_12477__$1 = cljs.core.not(inst_12476);
var state_12497__$1 = (function (){var statearr_12525 = state_12497;
(statearr_12525[(8)] = inst_12475__$1);

(statearr_12525[(11)] = inst_12477__$1);

return statearr_12525;
})();
if(inst_12477__$1){
var statearr_12526_14424 = state_12497__$1;
(statearr_12526_14424[(1)] = (15));

} else {
var statearr_12527_14425 = state_12497__$1;
(statearr_12527_14425[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (16))){
var inst_12477 = (state_12497[(11)]);
var state_12497__$1 = state_12497;
var statearr_12528_14426 = state_12497__$1;
(statearr_12528_14426[(2)] = inst_12477);

(statearr_12528_14426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (10))){
var inst_12469 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12529_14432 = state_12497__$1;
(statearr_12529_14432[(2)] = inst_12469);

(statearr_12529_14432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (18))){
var inst_12480 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12530_14435 = state_12497__$1;
(statearr_12530_14435[(2)] = inst_12480);

(statearr_12530_14435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (8))){
var inst_12466 = cljs.core.async.close_BANG_(to);
var state_12497__$1 = state_12497;
var statearr_12531_14441 = state_12497__$1;
(statearr_12531_14441[(2)] = inst_12466);

(statearr_12531_14441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0 = (function (){
var statearr_12532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__);

(statearr_12532[(1)] = (1));

return statearr_12532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1 = (function (state_12497){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12497);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12533){var ex__12010__auto__ = e12533;
var statearr_12534_14442 = state_12497;
(statearr_12534_14442[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12497[(4)]))){
var statearr_12535_14443 = state_12497;
(statearr_12535_14443[(1)] = cljs.core.first((state_12497[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14444 = state_12497;
state_12497 = G__14444;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__ = function(state_12497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1.call(this,state_12497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12536 = f__12067__auto__();
(statearr_12536[(6)] = c__12066__auto__);

return statearr_12536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));

return c__12066__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12538 = arguments.length;
switch (G__12538) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12540 = arguments.length;
switch (G__12540) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12548 = arguments.length;
switch (G__12548) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12066__auto___14450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12578){
var state_val_12579 = (state_12578[(1)]);
if((state_val_12579 === (7))){
var inst_12574 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12580_14451 = state_12578__$1;
(statearr_12580_14451[(2)] = inst_12574);

(statearr_12580_14451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (1))){
var state_12578__$1 = state_12578;
var statearr_12581_14452 = state_12578__$1;
(statearr_12581_14452[(2)] = null);

(statearr_12581_14452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (4))){
var inst_12555 = (state_12578[(7)]);
var inst_12555__$1 = (state_12578[(2)]);
var inst_12556 = (inst_12555__$1 == null);
var state_12578__$1 = (function (){var statearr_12582 = state_12578;
(statearr_12582[(7)] = inst_12555__$1);

return statearr_12582;
})();
if(cljs.core.truth_(inst_12556)){
var statearr_12583_14453 = state_12578__$1;
(statearr_12583_14453[(1)] = (5));

} else {
var statearr_12584_14454 = state_12578__$1;
(statearr_12584_14454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (13))){
var state_12578__$1 = state_12578;
var statearr_12585_14455 = state_12578__$1;
(statearr_12585_14455[(2)] = null);

(statearr_12585_14455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (6))){
var inst_12555 = (state_12578[(7)]);
var inst_12561 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12555) : p.call(null,inst_12555));
var state_12578__$1 = state_12578;
if(cljs.core.truth_(inst_12561)){
var statearr_12586_14456 = state_12578__$1;
(statearr_12586_14456[(1)] = (9));

} else {
var statearr_12591_14458 = state_12578__$1;
(statearr_12591_14458[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (3))){
var inst_12576 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12578__$1,inst_12576);
} else {
if((state_val_12579 === (12))){
var state_12578__$1 = state_12578;
var statearr_12592_14459 = state_12578__$1;
(statearr_12592_14459[(2)] = null);

(statearr_12592_14459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (2))){
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12578__$1,(4),ch);
} else {
if((state_val_12579 === (11))){
var inst_12555 = (state_12578[(7)]);
var inst_12565 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12578__$1,(8),inst_12565,inst_12555);
} else {
if((state_val_12579 === (9))){
var state_12578__$1 = state_12578;
var statearr_12593_14460 = state_12578__$1;
(statearr_12593_14460[(2)] = tc);

(statearr_12593_14460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (5))){
var inst_12558 = cljs.core.async.close_BANG_(tc);
var inst_12559 = cljs.core.async.close_BANG_(fc);
var state_12578__$1 = (function (){var statearr_12595 = state_12578;
(statearr_12595[(8)] = inst_12558);

return statearr_12595;
})();
var statearr_12599_14461 = state_12578__$1;
(statearr_12599_14461[(2)] = inst_12559);

(statearr_12599_14461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (14))){
var inst_12572 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12600_14462 = state_12578__$1;
(statearr_12600_14462[(2)] = inst_12572);

(statearr_12600_14462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (10))){
var state_12578__$1 = state_12578;
var statearr_12601_14463 = state_12578__$1;
(statearr_12601_14463[(2)] = fc);

(statearr_12601_14463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (8))){
var inst_12567 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
if(cljs.core.truth_(inst_12567)){
var statearr_12602_14464 = state_12578__$1;
(statearr_12602_14464[(1)] = (12));

} else {
var statearr_12603_14465 = state_12578__$1;
(statearr_12603_14465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_12604 = [null,null,null,null,null,null,null,null,null];
(statearr_12604[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_12604[(1)] = (1));

return statearr_12604;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_12578){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12578);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12605){var ex__12010__auto__ = e12605;
var statearr_12606_14487 = state_12578;
(statearr_12606_14487[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12578[(4)]))){
var statearr_12607_14488 = state_12578;
(statearr_12607_14488[(1)] = cljs.core.first((state_12578[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14489 = state_12578;
state_12578 = G__14489;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_12578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_12578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12608 = f__12067__auto__();
(statearr_12608[(6)] = c__12066__auto___14450);

return statearr_12608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12630){
var state_val_12631 = (state_12630[(1)]);
if((state_val_12631 === (7))){
var inst_12626 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12637_14490 = state_12630__$1;
(statearr_12637_14490[(2)] = inst_12626);

(statearr_12637_14490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (1))){
var inst_12609 = init;
var inst_12610 = inst_12609;
var state_12630__$1 = (function (){var statearr_12638 = state_12630;
(statearr_12638[(7)] = inst_12610);

return statearr_12638;
})();
var statearr_12639_14491 = state_12630__$1;
(statearr_12639_14491[(2)] = null);

(statearr_12639_14491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (4))){
var inst_12613 = (state_12630[(8)]);
var inst_12613__$1 = (state_12630[(2)]);
var inst_12614 = (inst_12613__$1 == null);
var state_12630__$1 = (function (){var statearr_12640 = state_12630;
(statearr_12640[(8)] = inst_12613__$1);

return statearr_12640;
})();
if(cljs.core.truth_(inst_12614)){
var statearr_12641_14492 = state_12630__$1;
(statearr_12641_14492[(1)] = (5));

} else {
var statearr_12642_14493 = state_12630__$1;
(statearr_12642_14493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (6))){
var inst_12613 = (state_12630[(8)]);
var inst_12617 = (state_12630[(9)]);
var inst_12610 = (state_12630[(7)]);
var inst_12617__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12610,inst_12613) : f.call(null,inst_12610,inst_12613));
var inst_12618 = cljs.core.reduced_QMARK_(inst_12617__$1);
var state_12630__$1 = (function (){var statearr_12647 = state_12630;
(statearr_12647[(9)] = inst_12617__$1);

return statearr_12647;
})();
if(inst_12618){
var statearr_12648_14494 = state_12630__$1;
(statearr_12648_14494[(1)] = (8));

} else {
var statearr_12649_14495 = state_12630__$1;
(statearr_12649_14495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (3))){
var inst_12628 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12630__$1,inst_12628);
} else {
if((state_val_12631 === (2))){
var state_12630__$1 = state_12630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12630__$1,(4),ch);
} else {
if((state_val_12631 === (9))){
var inst_12617 = (state_12630[(9)]);
var inst_12610 = inst_12617;
var state_12630__$1 = (function (){var statearr_12650 = state_12630;
(statearr_12650[(7)] = inst_12610);

return statearr_12650;
})();
var statearr_12651_14496 = state_12630__$1;
(statearr_12651_14496[(2)] = null);

(statearr_12651_14496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (5))){
var inst_12610 = (state_12630[(7)]);
var state_12630__$1 = state_12630;
var statearr_12652_14497 = state_12630__$1;
(statearr_12652_14497[(2)] = inst_12610);

(statearr_12652_14497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (10))){
var inst_12624 = (state_12630[(2)]);
var state_12630__$1 = state_12630;
var statearr_12659_14498 = state_12630__$1;
(statearr_12659_14498[(2)] = inst_12624);

(statearr_12659_14498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12631 === (8))){
var inst_12617 = (state_12630[(9)]);
var inst_12620 = cljs.core.deref(inst_12617);
var state_12630__$1 = state_12630;
var statearr_12660_14499 = state_12630__$1;
(statearr_12660_14499[(2)] = inst_12620);

(statearr_12660_14499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12007__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12007__auto____0 = (function (){
var statearr_12667 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12667[(0)] = cljs$core$async$reduce_$_state_machine__12007__auto__);

(statearr_12667[(1)] = (1));

return statearr_12667;
});
var cljs$core$async$reduce_$_state_machine__12007__auto____1 = (function (state_12630){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12630);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12668){var ex__12010__auto__ = e12668;
var statearr_12669_14500 = state_12630;
(statearr_12669_14500[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12630[(4)]))){
var statearr_12670_14501 = state_12630;
(statearr_12670_14501[(1)] = cljs.core.first((state_12630[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14502 = state_12630;
state_12630 = G__14502;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12007__auto__ = function(state_12630){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12007__auto____1.call(this,state_12630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12007__auto____0;
cljs$core$async$reduce_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12007__auto____1;
return cljs$core$async$reduce_$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12671 = f__12067__auto__();
(statearr_12671[(6)] = c__12066__auto__);

return statearr_12671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));

return c__12066__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12677){
var state_val_12678 = (state_12677[(1)]);
if((state_val_12678 === (1))){
var inst_12672 = cljs.core.async.reduce(f__$1,init,ch);
var state_12677__$1 = state_12677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12677__$1,(2),inst_12672);
} else {
if((state_val_12678 === (2))){
var inst_12674 = (state_12677[(2)]);
var inst_12675 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12674) : f__$1.call(null,inst_12674));
var state_12677__$1 = state_12677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12677__$1,inst_12675);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12007__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12007__auto____0 = (function (){
var statearr_12692 = [null,null,null,null,null,null,null];
(statearr_12692[(0)] = cljs$core$async$transduce_$_state_machine__12007__auto__);

(statearr_12692[(1)] = (1));

return statearr_12692;
});
var cljs$core$async$transduce_$_state_machine__12007__auto____1 = (function (state_12677){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12677);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12693){var ex__12010__auto__ = e12693;
var statearr_12694_14525 = state_12677;
(statearr_12694_14525[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12677[(4)]))){
var statearr_12695_14526 = state_12677;
(statearr_12695_14526[(1)] = cljs.core.first((state_12677[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14527 = state_12677;
state_12677 = G__14527;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12007__auto__ = function(state_12677){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12007__auto____1.call(this,state_12677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12007__auto____0;
cljs$core$async$transduce_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12007__auto____1;
return cljs$core$async$transduce_$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12696 = f__12067__auto__();
(statearr_12696[(6)] = c__12066__auto__);

return statearr_12696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));

return c__12066__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__12698 = arguments.length;
switch (G__12698) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12726){
var state_val_12727 = (state_12726[(1)]);
if((state_val_12727 === (7))){
var inst_12708 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12728_14529 = state_12726__$1;
(statearr_12728_14529[(2)] = inst_12708);

(statearr_12728_14529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (1))){
var inst_12699 = cljs.core.seq(coll);
var inst_12700 = inst_12699;
var state_12726__$1 = (function (){var statearr_12729 = state_12726;
(statearr_12729[(7)] = inst_12700);

return statearr_12729;
})();
var statearr_12730_14530 = state_12726__$1;
(statearr_12730_14530[(2)] = null);

(statearr_12730_14530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (4))){
var inst_12700 = (state_12726[(7)]);
var inst_12706 = cljs.core.first(inst_12700);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12726__$1,(7),ch,inst_12706);
} else {
if((state_val_12727 === (13))){
var inst_12720 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12731_14531 = state_12726__$1;
(statearr_12731_14531[(2)] = inst_12720);

(statearr_12731_14531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (6))){
var inst_12711 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
if(cljs.core.truth_(inst_12711)){
var statearr_12732_14532 = state_12726__$1;
(statearr_12732_14532[(1)] = (8));

} else {
var statearr_12733_14533 = state_12726__$1;
(statearr_12733_14533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (3))){
var inst_12724 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12726__$1,inst_12724);
} else {
if((state_val_12727 === (12))){
var state_12726__$1 = state_12726;
var statearr_12738_14534 = state_12726__$1;
(statearr_12738_14534[(2)] = null);

(statearr_12738_14534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (2))){
var inst_12700 = (state_12726[(7)]);
var state_12726__$1 = state_12726;
if(cljs.core.truth_(inst_12700)){
var statearr_12745_14535 = state_12726__$1;
(statearr_12745_14535[(1)] = (4));

} else {
var statearr_12746_14536 = state_12726__$1;
(statearr_12746_14536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (11))){
var inst_12717 = cljs.core.async.close_BANG_(ch);
var state_12726__$1 = state_12726;
var statearr_12747_14537 = state_12726__$1;
(statearr_12747_14537[(2)] = inst_12717);

(statearr_12747_14537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (9))){
var state_12726__$1 = state_12726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12748_14538 = state_12726__$1;
(statearr_12748_14538[(1)] = (11));

} else {
var statearr_12749_14539 = state_12726__$1;
(statearr_12749_14539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (5))){
var inst_12700 = (state_12726[(7)]);
var state_12726__$1 = state_12726;
var statearr_12750_14540 = state_12726__$1;
(statearr_12750_14540[(2)] = inst_12700);

(statearr_12750_14540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (10))){
var inst_12722 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12751_14541 = state_12726__$1;
(statearr_12751_14541[(2)] = inst_12722);

(statearr_12751_14541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (8))){
var inst_12700 = (state_12726[(7)]);
var inst_12713 = cljs.core.next(inst_12700);
var inst_12700__$1 = inst_12713;
var state_12726__$1 = (function (){var statearr_12752 = state_12726;
(statearr_12752[(7)] = inst_12700__$1);

return statearr_12752;
})();
var statearr_12753_14542 = state_12726__$1;
(statearr_12753_14542[(2)] = null);

(statearr_12753_14542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_12754 = [null,null,null,null,null,null,null,null];
(statearr_12754[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_12754[(1)] = (1));

return statearr_12754;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_12726){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12726);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e12755){var ex__12010__auto__ = e12755;
var statearr_12756_14543 = state_12726;
(statearr_12756_14543[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12726[(4)]))){
var statearr_12757_14544 = state_12726;
(statearr_12757_14544[(1)] = cljs.core.first((state_12726[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14545 = state_12726;
state_12726 = G__14545;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_12726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_12726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_12758 = f__12067__auto__();
(statearr_12758[(6)] = c__12066__auto__);

return statearr_12758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));

return c__12066__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12766 = arguments.length;
switch (G__12766) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_14569 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14569(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14570 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14570(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14571 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14571(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14572 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14572(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12783 = (function (ch,cs,meta12784){
this.ch = ch;
this.cs = cs;
this.meta12784 = meta12784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12785,meta12784__$1){
var self__ = this;
var _12785__$1 = this;
return (new cljs.core.async.t_cljs$core$async12783(self__.ch,self__.cs,meta12784__$1));
}));

(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12785){
var self__ = this;
var _12785__$1 = this;
return self__.meta12784;
}));

(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12783.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12784","meta12784",839846004,null)], null);
}));

(cljs.core.async.t_cljs$core$async12783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12783");

(cljs.core.async.t_cljs$core$async12783.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async12783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12783.
 */
cljs.core.async.__GT_t_cljs$core$async12783 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12783(ch__$1,cs__$1,meta12784){
return (new cljs.core.async.t_cljs$core$async12783(ch__$1,cs__$1,meta12784));
});

}

return (new cljs.core.async.t_cljs$core$async12783(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12066__auto___14573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_12943){
var state_val_12944 = (state_12943[(1)]);
if((state_val_12944 === (7))){
var inst_12939 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_12945_14574 = state_12943__$1;
(statearr_12945_14574[(2)] = inst_12939);

(statearr_12945_14574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (20))){
var inst_12837 = (state_12943[(7)]);
var inst_12849 = cljs.core.first(inst_12837);
var inst_12850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12849,(0),null);
var inst_12851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12849,(1),null);
var state_12943__$1 = (function (){var statearr_12946 = state_12943;
(statearr_12946[(8)] = inst_12850);

return statearr_12946;
})();
if(cljs.core.truth_(inst_12851)){
var statearr_12947_14575 = state_12943__$1;
(statearr_12947_14575[(1)] = (22));

} else {
var statearr_12948_14576 = state_12943__$1;
(statearr_12948_14576[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (27))){
var inst_12796 = (state_12943[(9)]);
var inst_12883 = (state_12943[(10)]);
var inst_12885 = (state_12943[(11)]);
var inst_12890 = (state_12943[(12)]);
var inst_12890__$1 = cljs.core._nth(inst_12883,inst_12885);
var inst_12892 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12890__$1,inst_12796,done);
var state_12943__$1 = (function (){var statearr_12949 = state_12943;
(statearr_12949[(12)] = inst_12890__$1);

return statearr_12949;
})();
if(cljs.core.truth_(inst_12892)){
var statearr_12950_14577 = state_12943__$1;
(statearr_12950_14577[(1)] = (30));

} else {
var statearr_12951_14578 = state_12943__$1;
(statearr_12951_14578[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (1))){
var state_12943__$1 = state_12943;
var statearr_12962_14579 = state_12943__$1;
(statearr_12962_14579[(2)] = null);

(statearr_12962_14579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (24))){
var inst_12837 = (state_12943[(7)]);
var inst_12856 = (state_12943[(2)]);
var inst_12857 = cljs.core.next(inst_12837);
var inst_12815 = inst_12857;
var inst_12816 = null;
var inst_12817 = (0);
var inst_12818 = (0);
var state_12943__$1 = (function (){var statearr_12963 = state_12943;
(statearr_12963[(13)] = inst_12856);

(statearr_12963[(14)] = inst_12818);

(statearr_12963[(15)] = inst_12817);

(statearr_12963[(16)] = inst_12815);

(statearr_12963[(17)] = inst_12816);

return statearr_12963;
})();
var statearr_12964_14580 = state_12943__$1;
(statearr_12964_14580[(2)] = null);

(statearr_12964_14580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (39))){
var state_12943__$1 = state_12943;
var statearr_12968_14581 = state_12943__$1;
(statearr_12968_14581[(2)] = null);

(statearr_12968_14581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (4))){
var inst_12796 = (state_12943[(9)]);
var inst_12796__$1 = (state_12943[(2)]);
var inst_12797 = (inst_12796__$1 == null);
var state_12943__$1 = (function (){var statearr_12969 = state_12943;
(statearr_12969[(9)] = inst_12796__$1);

return statearr_12969;
})();
if(cljs.core.truth_(inst_12797)){
var statearr_12970_14582 = state_12943__$1;
(statearr_12970_14582[(1)] = (5));

} else {
var statearr_12971_14583 = state_12943__$1;
(statearr_12971_14583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (15))){
var inst_12818 = (state_12943[(14)]);
var inst_12817 = (state_12943[(15)]);
var inst_12815 = (state_12943[(16)]);
var inst_12816 = (state_12943[(17)]);
var inst_12833 = (state_12943[(2)]);
var inst_12834 = (inst_12818 + (1));
var tmp12965 = inst_12817;
var tmp12966 = inst_12815;
var tmp12967 = inst_12816;
var inst_12815__$1 = tmp12966;
var inst_12816__$1 = tmp12967;
var inst_12817__$1 = tmp12965;
var inst_12818__$1 = inst_12834;
var state_12943__$1 = (function (){var statearr_12972 = state_12943;
(statearr_12972[(14)] = inst_12818__$1);

(statearr_12972[(15)] = inst_12817__$1);

(statearr_12972[(16)] = inst_12815__$1);

(statearr_12972[(18)] = inst_12833);

(statearr_12972[(17)] = inst_12816__$1);

return statearr_12972;
})();
var statearr_12973_14585 = state_12943__$1;
(statearr_12973_14585[(2)] = null);

(statearr_12973_14585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (21))){
var inst_12860 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_12977_14586 = state_12943__$1;
(statearr_12977_14586[(2)] = inst_12860);

(statearr_12977_14586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (31))){
var inst_12890 = (state_12943[(12)]);
var inst_12895 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12890);
var state_12943__$1 = state_12943;
var statearr_12988_14587 = state_12943__$1;
(statearr_12988_14587[(2)] = inst_12895);

(statearr_12988_14587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (32))){
var inst_12882 = (state_12943[(19)]);
var inst_12883 = (state_12943[(10)]);
var inst_12884 = (state_12943[(20)]);
var inst_12885 = (state_12943[(11)]);
var inst_12897 = (state_12943[(2)]);
var inst_12898 = (inst_12885 + (1));
var tmp12974 = inst_12882;
var tmp12975 = inst_12883;
var tmp12976 = inst_12884;
var inst_12882__$1 = tmp12974;
var inst_12883__$1 = tmp12975;
var inst_12884__$1 = tmp12976;
var inst_12885__$1 = inst_12898;
var state_12943__$1 = (function (){var statearr_12989 = state_12943;
(statearr_12989[(21)] = inst_12897);

(statearr_12989[(19)] = inst_12882__$1);

(statearr_12989[(10)] = inst_12883__$1);

(statearr_12989[(20)] = inst_12884__$1);

(statearr_12989[(11)] = inst_12885__$1);

return statearr_12989;
})();
var statearr_12990_14588 = state_12943__$1;
(statearr_12990_14588[(2)] = null);

(statearr_12990_14588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (40))){
var inst_12910 = (state_12943[(22)]);
var inst_12916 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12910);
var state_12943__$1 = state_12943;
var statearr_12991_14589 = state_12943__$1;
(statearr_12991_14589[(2)] = inst_12916);

(statearr_12991_14589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (33))){
var inst_12901 = (state_12943[(23)]);
var inst_12903 = cljs.core.chunked_seq_QMARK_(inst_12901);
var state_12943__$1 = state_12943;
if(inst_12903){
var statearr_12992_14590 = state_12943__$1;
(statearr_12992_14590[(1)] = (36));

} else {
var statearr_12993_14591 = state_12943__$1;
(statearr_12993_14591[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (13))){
var inst_12827 = (state_12943[(24)]);
var inst_12830 = cljs.core.async.close_BANG_(inst_12827);
var state_12943__$1 = state_12943;
var statearr_12994_14592 = state_12943__$1;
(statearr_12994_14592[(2)] = inst_12830);

(statearr_12994_14592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (22))){
var inst_12850 = (state_12943[(8)]);
var inst_12853 = cljs.core.async.close_BANG_(inst_12850);
var state_12943__$1 = state_12943;
var statearr_12995_14593 = state_12943__$1;
(statearr_12995_14593[(2)] = inst_12853);

(statearr_12995_14593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (36))){
var inst_12901 = (state_12943[(23)]);
var inst_12905 = cljs.core.chunk_first(inst_12901);
var inst_12906 = cljs.core.chunk_rest(inst_12901);
var inst_12907 = cljs.core.count(inst_12905);
var inst_12882 = inst_12906;
var inst_12883 = inst_12905;
var inst_12884 = inst_12907;
var inst_12885 = (0);
var state_12943__$1 = (function (){var statearr_12996 = state_12943;
(statearr_12996[(19)] = inst_12882);

(statearr_12996[(10)] = inst_12883);

(statearr_12996[(20)] = inst_12884);

(statearr_12996[(11)] = inst_12885);

return statearr_12996;
})();
var statearr_12997_14594 = state_12943__$1;
(statearr_12997_14594[(2)] = null);

(statearr_12997_14594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (41))){
var inst_12901 = (state_12943[(23)]);
var inst_12918 = (state_12943[(2)]);
var inst_12919 = cljs.core.next(inst_12901);
var inst_12882 = inst_12919;
var inst_12883 = null;
var inst_12884 = (0);
var inst_12885 = (0);
var state_12943__$1 = (function (){var statearr_12998 = state_12943;
(statearr_12998[(19)] = inst_12882);

(statearr_12998[(10)] = inst_12883);

(statearr_12998[(20)] = inst_12884);

(statearr_12998[(25)] = inst_12918);

(statearr_12998[(11)] = inst_12885);

return statearr_12998;
})();
var statearr_12999_14595 = state_12943__$1;
(statearr_12999_14595[(2)] = null);

(statearr_12999_14595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (43))){
var state_12943__$1 = state_12943;
var statearr_13000_14596 = state_12943__$1;
(statearr_13000_14596[(2)] = null);

(statearr_13000_14596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (29))){
var inst_12927 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_13001_14597 = state_12943__$1;
(statearr_13001_14597[(2)] = inst_12927);

(statearr_13001_14597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (44))){
var inst_12936 = (state_12943[(2)]);
var state_12943__$1 = (function (){var statearr_13002 = state_12943;
(statearr_13002[(26)] = inst_12936);

return statearr_13002;
})();
var statearr_13003_14598 = state_12943__$1;
(statearr_13003_14598[(2)] = null);

(statearr_13003_14598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (6))){
var inst_12874 = (state_12943[(27)]);
var inst_12873 = cljs.core.deref(cs);
var inst_12874__$1 = cljs.core.keys(inst_12873);
var inst_12875 = cljs.core.count(inst_12874__$1);
var inst_12876 = cljs.core.reset_BANG_(dctr,inst_12875);
var inst_12881 = cljs.core.seq(inst_12874__$1);
var inst_12882 = inst_12881;
var inst_12883 = null;
var inst_12884 = (0);
var inst_12885 = (0);
var state_12943__$1 = (function (){var statearr_13004 = state_12943;
(statearr_13004[(19)] = inst_12882);

(statearr_13004[(27)] = inst_12874__$1);

(statearr_13004[(10)] = inst_12883);

(statearr_13004[(20)] = inst_12884);

(statearr_13004[(28)] = inst_12876);

(statearr_13004[(11)] = inst_12885);

return statearr_13004;
})();
var statearr_13014_14626 = state_12943__$1;
(statearr_13014_14626[(2)] = null);

(statearr_13014_14626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (28))){
var inst_12882 = (state_12943[(19)]);
var inst_12901 = (state_12943[(23)]);
var inst_12901__$1 = cljs.core.seq(inst_12882);
var state_12943__$1 = (function (){var statearr_13015 = state_12943;
(statearr_13015[(23)] = inst_12901__$1);

return statearr_13015;
})();
if(inst_12901__$1){
var statearr_13016_14627 = state_12943__$1;
(statearr_13016_14627[(1)] = (33));

} else {
var statearr_13017_14628 = state_12943__$1;
(statearr_13017_14628[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (25))){
var inst_12884 = (state_12943[(20)]);
var inst_12885 = (state_12943[(11)]);
var inst_12887 = (inst_12885 < inst_12884);
var inst_12888 = inst_12887;
var state_12943__$1 = state_12943;
if(cljs.core.truth_(inst_12888)){
var statearr_13018_14629 = state_12943__$1;
(statearr_13018_14629[(1)] = (27));

} else {
var statearr_13019_14630 = state_12943__$1;
(statearr_13019_14630[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (34))){
var state_12943__$1 = state_12943;
var statearr_13020_14631 = state_12943__$1;
(statearr_13020_14631[(2)] = null);

(statearr_13020_14631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (17))){
var state_12943__$1 = state_12943;
var statearr_13021_14632 = state_12943__$1;
(statearr_13021_14632[(2)] = null);

(statearr_13021_14632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (3))){
var inst_12941 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12943__$1,inst_12941);
} else {
if((state_val_12944 === (12))){
var inst_12865 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_13022_14633 = state_12943__$1;
(statearr_13022_14633[(2)] = inst_12865);

(statearr_13022_14633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (2))){
var state_12943__$1 = state_12943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12943__$1,(4),ch);
} else {
if((state_val_12944 === (23))){
var state_12943__$1 = state_12943;
var statearr_13023_14634 = state_12943__$1;
(statearr_13023_14634[(2)] = null);

(statearr_13023_14634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (35))){
var inst_12925 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_13024_14635 = state_12943__$1;
(statearr_13024_14635[(2)] = inst_12925);

(statearr_13024_14635[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (19))){
var inst_12837 = (state_12943[(7)]);
var inst_12841 = cljs.core.chunk_first(inst_12837);
var inst_12842 = cljs.core.chunk_rest(inst_12837);
var inst_12843 = cljs.core.count(inst_12841);
var inst_12815 = inst_12842;
var inst_12816 = inst_12841;
var inst_12817 = inst_12843;
var inst_12818 = (0);
var state_12943__$1 = (function (){var statearr_13025 = state_12943;
(statearr_13025[(14)] = inst_12818);

(statearr_13025[(15)] = inst_12817);

(statearr_13025[(16)] = inst_12815);

(statearr_13025[(17)] = inst_12816);

return statearr_13025;
})();
var statearr_13030_14636 = state_12943__$1;
(statearr_13030_14636[(2)] = null);

(statearr_13030_14636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (11))){
var inst_12837 = (state_12943[(7)]);
var inst_12815 = (state_12943[(16)]);
var inst_12837__$1 = cljs.core.seq(inst_12815);
var state_12943__$1 = (function (){var statearr_13031 = state_12943;
(statearr_13031[(7)] = inst_12837__$1);

return statearr_13031;
})();
if(inst_12837__$1){
var statearr_13032_14637 = state_12943__$1;
(statearr_13032_14637[(1)] = (16));

} else {
var statearr_13033_14638 = state_12943__$1;
(statearr_13033_14638[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (9))){
var inst_12867 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_13034_14639 = state_12943__$1;
(statearr_13034_14639[(2)] = inst_12867);

(statearr_13034_14639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (5))){
var inst_12813 = cljs.core.deref(cs);
var inst_12814 = cljs.core.seq(inst_12813);
var inst_12815 = inst_12814;
var inst_12816 = null;
var inst_12817 = (0);
var inst_12818 = (0);
var state_12943__$1 = (function (){var statearr_13035 = state_12943;
(statearr_13035[(14)] = inst_12818);

(statearr_13035[(15)] = inst_12817);

(statearr_13035[(16)] = inst_12815);

(statearr_13035[(17)] = inst_12816);

return statearr_13035;
})();
var statearr_13036_14640 = state_12943__$1;
(statearr_13036_14640[(2)] = null);

(statearr_13036_14640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (14))){
var state_12943__$1 = state_12943;
var statearr_13037_14641 = state_12943__$1;
(statearr_13037_14641[(2)] = null);

(statearr_13037_14641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (45))){
var inst_12933 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_13038_14642 = state_12943__$1;
(statearr_13038_14642[(2)] = inst_12933);

(statearr_13038_14642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (26))){
var inst_12874 = (state_12943[(27)]);
var inst_12929 = (state_12943[(2)]);
var inst_12930 = cljs.core.seq(inst_12874);
var state_12943__$1 = (function (){var statearr_13039 = state_12943;
(statearr_13039[(29)] = inst_12929);

return statearr_13039;
})();
if(inst_12930){
var statearr_13040_14647 = state_12943__$1;
(statearr_13040_14647[(1)] = (42));

} else {
var statearr_13041_14648 = state_12943__$1;
(statearr_13041_14648[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (16))){
var inst_12837 = (state_12943[(7)]);
var inst_12839 = cljs.core.chunked_seq_QMARK_(inst_12837);
var state_12943__$1 = state_12943;
if(inst_12839){
var statearr_13042_14651 = state_12943__$1;
(statearr_13042_14651[(1)] = (19));

} else {
var statearr_13043_14656 = state_12943__$1;
(statearr_13043_14656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (38))){
var inst_12922 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_13044_14657 = state_12943__$1;
(statearr_13044_14657[(2)] = inst_12922);

(statearr_13044_14657[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (30))){
var state_12943__$1 = state_12943;
var statearr_13045_14658 = state_12943__$1;
(statearr_13045_14658[(2)] = null);

(statearr_13045_14658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (10))){
var inst_12818 = (state_12943[(14)]);
var inst_12816 = (state_12943[(17)]);
var inst_12826 = cljs.core._nth(inst_12816,inst_12818);
var inst_12827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12826,(0),null);
var inst_12828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12826,(1),null);
var state_12943__$1 = (function (){var statearr_13046 = state_12943;
(statearr_13046[(24)] = inst_12827);

return statearr_13046;
})();
if(cljs.core.truth_(inst_12828)){
var statearr_13047_14661 = state_12943__$1;
(statearr_13047_14661[(1)] = (13));

} else {
var statearr_13048_14662 = state_12943__$1;
(statearr_13048_14662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (18))){
var inst_12863 = (state_12943[(2)]);
var state_12943__$1 = state_12943;
var statearr_13049_14663 = state_12943__$1;
(statearr_13049_14663[(2)] = inst_12863);

(statearr_13049_14663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (42))){
var state_12943__$1 = state_12943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12943__$1,(45),dchan);
} else {
if((state_val_12944 === (37))){
var inst_12796 = (state_12943[(9)]);
var inst_12910 = (state_12943[(22)]);
var inst_12901 = (state_12943[(23)]);
var inst_12910__$1 = cljs.core.first(inst_12901);
var inst_12913 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12910__$1,inst_12796,done);
var state_12943__$1 = (function (){var statearr_13050 = state_12943;
(statearr_13050[(22)] = inst_12910__$1);

return statearr_13050;
})();
if(cljs.core.truth_(inst_12913)){
var statearr_13051_14667 = state_12943__$1;
(statearr_13051_14667[(1)] = (39));

} else {
var statearr_13052_14668 = state_12943__$1;
(statearr_13052_14668[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12944 === (8))){
var inst_12818 = (state_12943[(14)]);
var inst_12817 = (state_12943[(15)]);
var inst_12820 = (inst_12818 < inst_12817);
var inst_12821 = inst_12820;
var state_12943__$1 = state_12943;
if(cljs.core.truth_(inst_12821)){
var statearr_13053_14700 = state_12943__$1;
(statearr_13053_14700[(1)] = (10));

} else {
var statearr_13054_14701 = state_12943__$1;
(statearr_13054_14701[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12007__auto__ = null;
var cljs$core$async$mult_$_state_machine__12007__auto____0 = (function (){
var statearr_13068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13068[(0)] = cljs$core$async$mult_$_state_machine__12007__auto__);

(statearr_13068[(1)] = (1));

return statearr_13068;
});
var cljs$core$async$mult_$_state_machine__12007__auto____1 = (function (state_12943){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_12943);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13069){var ex__12010__auto__ = e13069;
var statearr_13070_14702 = state_12943;
(statearr_13070_14702[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_12943[(4)]))){
var statearr_13071_14703 = state_12943;
(statearr_13071_14703[(1)] = cljs.core.first((state_12943[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14704 = state_12943;
state_12943 = G__14704;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12007__auto__ = function(state_12943){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12007__auto____1.call(this,state_12943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12007__auto____0;
cljs$core$async$mult_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12007__auto____1;
return cljs$core$async$mult_$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13072 = f__12067__auto__();
(statearr_13072[(6)] = c__12066__auto___14573);

return statearr_13072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13074 = arguments.length;
switch (G__13074) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_14711 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_14711(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14717 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_14717(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14832 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14832(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14833 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_14833(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14834 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14834(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14835 = arguments.length;
var i__5770__auto___14836 = (0);
while(true){
if((i__5770__auto___14836 < len__5769__auto___14835)){
args__5775__auto__.push((arguments[i__5770__auto___14836]));

var G__14837 = (i__5770__auto___14836 + (1));
i__5770__auto___14836 = G__14837;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13096){
var map__13097 = p__13096;
var map__13097__$1 = cljs.core.__destructure_map(map__13097);
var opts = map__13097__$1;
var statearr_13098_14838 = state;
(statearr_13098_14838[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13104_14839 = state;
(statearr_13104_14839[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_13105_14840 = state;
(statearr_13105_14840[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13088){
var G__13089 = cljs.core.first(seq13088);
var seq13088__$1 = cljs.core.next(seq13088);
var G__13090 = cljs.core.first(seq13088__$1);
var seq13088__$2 = cljs.core.next(seq13088__$1);
var G__13091 = cljs.core.first(seq13088__$2);
var seq13088__$3 = cljs.core.next(seq13088__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13089,G__13090,G__13091,seq13088__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13117 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13118){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13118 = meta13118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13119,meta13118__$1){
var self__ = this;
var _13119__$1 = this;
return (new cljs.core.async.t_cljs$core$async13117(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13118__$1));
}));

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13119){
var self__ = this;
var _13119__$1 = this;
return self__.meta13118;
}));

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13118","meta13118",1618017283,null)], null);
}));

(cljs.core.async.t_cljs$core$async13117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13117");

(cljs.core.async.t_cljs$core$async13117.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13117.
 */
cljs.core.async.__GT_t_cljs$core$async13117 = (function cljs$core$async$mix_$___GT_t_cljs$core$async13117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13118){
return (new cljs.core.async.t_cljs$core$async13117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13118));
});

}

return (new cljs.core.async.t_cljs$core$async13117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12066__auto___14879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_13202){
var state_val_13203 = (state_13202[(1)]);
if((state_val_13203 === (7))){
var inst_13162 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
if(cljs.core.truth_(inst_13162)){
var statearr_13205_14880 = state_13202__$1;
(statearr_13205_14880[(1)] = (8));

} else {
var statearr_13206_14881 = state_13202__$1;
(statearr_13206_14881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (20))){
var inst_13155 = (state_13202[(7)]);
var state_13202__$1 = state_13202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13202__$1,(23),out,inst_13155);
} else {
if((state_val_13203 === (1))){
var inst_13138 = calc_state();
var inst_13139 = cljs.core.__destructure_map(inst_13138);
var inst_13140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13139,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13139,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13139,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13143 = inst_13138;
var state_13202__$1 = (function (){var statearr_13207 = state_13202;
(statearr_13207[(8)] = inst_13142);

(statearr_13207[(9)] = inst_13140);

(statearr_13207[(10)] = inst_13141);

(statearr_13207[(11)] = inst_13143);

return statearr_13207;
})();
var statearr_13208_14886 = state_13202__$1;
(statearr_13208_14886[(2)] = null);

(statearr_13208_14886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (24))){
var inst_13146 = (state_13202[(12)]);
var inst_13143 = inst_13146;
var state_13202__$1 = (function (){var statearr_13209 = state_13202;
(statearr_13209[(11)] = inst_13143);

return statearr_13209;
})();
var statearr_13210_14887 = state_13202__$1;
(statearr_13210_14887[(2)] = null);

(statearr_13210_14887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (4))){
var inst_13157 = (state_13202[(13)]);
var inst_13155 = (state_13202[(7)]);
var inst_13154 = (state_13202[(2)]);
var inst_13155__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13154,(0),null);
var inst_13156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13154,(1),null);
var inst_13157__$1 = (inst_13155__$1 == null);
var state_13202__$1 = (function (){var statearr_13211 = state_13202;
(statearr_13211[(14)] = inst_13156);

(statearr_13211[(13)] = inst_13157__$1);

(statearr_13211[(7)] = inst_13155__$1);

return statearr_13211;
})();
if(cljs.core.truth_(inst_13157__$1)){
var statearr_13215_14914 = state_13202__$1;
(statearr_13215_14914[(1)] = (5));

} else {
var statearr_13216_14915 = state_13202__$1;
(statearr_13216_14915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (15))){
var inst_13176 = (state_13202[(15)]);
var inst_13147 = (state_13202[(16)]);
var inst_13176__$1 = cljs.core.empty_QMARK_(inst_13147);
var state_13202__$1 = (function (){var statearr_13219 = state_13202;
(statearr_13219[(15)] = inst_13176__$1);

return statearr_13219;
})();
if(inst_13176__$1){
var statearr_13220_14916 = state_13202__$1;
(statearr_13220_14916[(1)] = (17));

} else {
var statearr_13221_14917 = state_13202__$1;
(statearr_13221_14917[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (21))){
var inst_13146 = (state_13202[(12)]);
var inst_13143 = inst_13146;
var state_13202__$1 = (function (){var statearr_13222 = state_13202;
(statearr_13222[(11)] = inst_13143);

return statearr_13222;
})();
var statearr_13223_14918 = state_13202__$1;
(statearr_13223_14918[(2)] = null);

(statearr_13223_14918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (13))){
var inst_13169 = (state_13202[(2)]);
var inst_13170 = calc_state();
var inst_13143 = inst_13170;
var state_13202__$1 = (function (){var statearr_13224 = state_13202;
(statearr_13224[(17)] = inst_13169);

(statearr_13224[(11)] = inst_13143);

return statearr_13224;
})();
var statearr_13225_14919 = state_13202__$1;
(statearr_13225_14919[(2)] = null);

(statearr_13225_14919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (22))){
var inst_13196 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
var statearr_13226_14920 = state_13202__$1;
(statearr_13226_14920[(2)] = inst_13196);

(statearr_13226_14920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (6))){
var inst_13156 = (state_13202[(14)]);
var inst_13160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13156,change);
var state_13202__$1 = state_13202;
var statearr_13227_14921 = state_13202__$1;
(statearr_13227_14921[(2)] = inst_13160);

(statearr_13227_14921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (25))){
var state_13202__$1 = state_13202;
var statearr_13232_14922 = state_13202__$1;
(statearr_13232_14922[(2)] = null);

(statearr_13232_14922[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (17))){
var inst_13156 = (state_13202[(14)]);
var inst_13148 = (state_13202[(18)]);
var inst_13178 = (inst_13148.cljs$core$IFn$_invoke$arity$1 ? inst_13148.cljs$core$IFn$_invoke$arity$1(inst_13156) : inst_13148.call(null,inst_13156));
var inst_13179 = cljs.core.not(inst_13178);
var state_13202__$1 = state_13202;
var statearr_13233_14923 = state_13202__$1;
(statearr_13233_14923[(2)] = inst_13179);

(statearr_13233_14923[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (3))){
var inst_13200 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13202__$1,inst_13200);
} else {
if((state_val_13203 === (12))){
var state_13202__$1 = state_13202;
var statearr_13237_14924 = state_13202__$1;
(statearr_13237_14924[(2)] = null);

(statearr_13237_14924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (2))){
var inst_13146 = (state_13202[(12)]);
var inst_13143 = (state_13202[(11)]);
var inst_13146__$1 = cljs.core.__destructure_map(inst_13143);
var inst_13147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13146__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13146__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13146__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13202__$1 = (function (){var statearr_13241 = state_13202;
(statearr_13241[(12)] = inst_13146__$1);

(statearr_13241[(18)] = inst_13148);

(statearr_13241[(16)] = inst_13147);

return statearr_13241;
})();
return cljs.core.async.ioc_alts_BANG_(state_13202__$1,(4),inst_13149);
} else {
if((state_val_13203 === (23))){
var inst_13187 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
if(cljs.core.truth_(inst_13187)){
var statearr_13242_14925 = state_13202__$1;
(statearr_13242_14925[(1)] = (24));

} else {
var statearr_13243_14926 = state_13202__$1;
(statearr_13243_14926[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (19))){
var inst_13182 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
var statearr_13248_14927 = state_13202__$1;
(statearr_13248_14927[(2)] = inst_13182);

(statearr_13248_14927[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (11))){
var inst_13156 = (state_13202[(14)]);
var inst_13166 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13156);
var state_13202__$1 = state_13202;
var statearr_13252_14928 = state_13202__$1;
(statearr_13252_14928[(2)] = inst_13166);

(statearr_13252_14928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (9))){
var inst_13173 = (state_13202[(19)]);
var inst_13156 = (state_13202[(14)]);
var inst_13147 = (state_13202[(16)]);
var inst_13173__$1 = (inst_13147.cljs$core$IFn$_invoke$arity$1 ? inst_13147.cljs$core$IFn$_invoke$arity$1(inst_13156) : inst_13147.call(null,inst_13156));
var state_13202__$1 = (function (){var statearr_13253 = state_13202;
(statearr_13253[(19)] = inst_13173__$1);

return statearr_13253;
})();
if(cljs.core.truth_(inst_13173__$1)){
var statearr_13257_14929 = state_13202__$1;
(statearr_13257_14929[(1)] = (14));

} else {
var statearr_13258_14930 = state_13202__$1;
(statearr_13258_14930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (5))){
var inst_13157 = (state_13202[(13)]);
var state_13202__$1 = state_13202;
var statearr_13263_14931 = state_13202__$1;
(statearr_13263_14931[(2)] = inst_13157);

(statearr_13263_14931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (14))){
var inst_13173 = (state_13202[(19)]);
var state_13202__$1 = state_13202;
var statearr_13264_14932 = state_13202__$1;
(statearr_13264_14932[(2)] = inst_13173);

(statearr_13264_14932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (26))){
var inst_13192 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
var statearr_13265_14933 = state_13202__$1;
(statearr_13265_14933[(2)] = inst_13192);

(statearr_13265_14933[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (16))){
var inst_13184 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
if(cljs.core.truth_(inst_13184)){
var statearr_13266_14934 = state_13202__$1;
(statearr_13266_14934[(1)] = (20));

} else {
var statearr_13267_14935 = state_13202__$1;
(statearr_13267_14935[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (10))){
var inst_13198 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
var statearr_13268_14936 = state_13202__$1;
(statearr_13268_14936[(2)] = inst_13198);

(statearr_13268_14936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (18))){
var inst_13176 = (state_13202[(15)]);
var state_13202__$1 = state_13202;
var statearr_13269_14937 = state_13202__$1;
(statearr_13269_14937[(2)] = inst_13176);

(statearr_13269_14937[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (8))){
var inst_13155 = (state_13202[(7)]);
var inst_13164 = (inst_13155 == null);
var state_13202__$1 = state_13202;
if(cljs.core.truth_(inst_13164)){
var statearr_13270_14938 = state_13202__$1;
(statearr_13270_14938[(1)] = (11));

} else {
var statearr_13271_14939 = state_13202__$1;
(statearr_13271_14939[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12007__auto__ = null;
var cljs$core$async$mix_$_state_machine__12007__auto____0 = (function (){
var statearr_13272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13272[(0)] = cljs$core$async$mix_$_state_machine__12007__auto__);

(statearr_13272[(1)] = (1));

return statearr_13272;
});
var cljs$core$async$mix_$_state_machine__12007__auto____1 = (function (state_13202){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_13202);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13273){var ex__12010__auto__ = e13273;
var statearr_13274_14940 = state_13202;
(statearr_13274_14940[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_13202[(4)]))){
var statearr_13275_14941 = state_13202;
(statearr_13275_14941[(1)] = cljs.core.first((state_13202[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14942 = state_13202;
state_13202 = G__14942;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12007__auto__ = function(state_13202){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12007__auto____1.call(this,state_13202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12007__auto____0;
cljs$core$async$mix_$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12007__auto____1;
return cljs$core$async$mix_$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13276 = f__12067__auto__();
(statearr_13276[(6)] = c__12066__auto___14879);

return statearr_13276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14943 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14943(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14970 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14970(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14971 = (function() {
var G__14972 = null;
var G__14972__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__14972__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__14972 = function(p,v){
switch(arguments.length){
case 1:
return G__14972__1.call(this,p);
case 2:
return G__14972__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14972.cljs$core$IFn$_invoke$arity$1 = G__14972__1;
G__14972.cljs$core$IFn$_invoke$arity$2 = G__14972__2;
return G__14972;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13299 = arguments.length;
switch (G__13299) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14971(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14971(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__13308 = arguments.length;
switch (G__13308) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13306_SHARP_){
if(cljs.core.truth_((p1__13306_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13306_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13306_SHARP_.call(null,topic)))){
return p1__13306_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13306_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13310 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13311){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13311 = meta13311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13312,meta13311__$1){
var self__ = this;
var _13312__$1 = this;
return (new cljs.core.async.t_cljs$core$async13310(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13311__$1));
}));

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13312){
var self__ = this;
var _13312__$1 = this;
return self__.meta13311;
}));

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13310.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13311","meta13311",-1177542358,null)], null);
}));

(cljs.core.async.t_cljs$core$async13310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13310");

(cljs.core.async.t_cljs$core$async13310.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13310.
 */
cljs.core.async.__GT_t_cljs$core$async13310 = (function cljs$core$async$__GT_t_cljs$core$async13310(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13311){
return (new cljs.core.async.t_cljs$core$async13310(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13311));
});

}

return (new cljs.core.async.t_cljs$core$async13310(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12066__auto___14975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_13393){
var state_val_13394 = (state_13393[(1)]);
if((state_val_13394 === (7))){
var inst_13389 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13396_14976 = state_13393__$1;
(statearr_13396_14976[(2)] = inst_13389);

(statearr_13396_14976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (20))){
var state_13393__$1 = state_13393;
var statearr_13397_14977 = state_13393__$1;
(statearr_13397_14977[(2)] = null);

(statearr_13397_14977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (1))){
var state_13393__$1 = state_13393;
var statearr_13417_14978 = state_13393__$1;
(statearr_13417_14978[(2)] = null);

(statearr_13417_14978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (24))){
var inst_13372 = (state_13393[(7)]);
var inst_13381 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13372);
var state_13393__$1 = state_13393;
var statearr_13418_14979 = state_13393__$1;
(statearr_13418_14979[(2)] = inst_13381);

(statearr_13418_14979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (4))){
var inst_13315 = (state_13393[(8)]);
var inst_13315__$1 = (state_13393[(2)]);
var inst_13316 = (inst_13315__$1 == null);
var state_13393__$1 = (function (){var statearr_13419 = state_13393;
(statearr_13419[(8)] = inst_13315__$1);

return statearr_13419;
})();
if(cljs.core.truth_(inst_13316)){
var statearr_13420_14980 = state_13393__$1;
(statearr_13420_14980[(1)] = (5));

} else {
var statearr_13421_14981 = state_13393__$1;
(statearr_13421_14981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (15))){
var inst_13366 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13422_14982 = state_13393__$1;
(statearr_13422_14982[(2)] = inst_13366);

(statearr_13422_14982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (21))){
var inst_13386 = (state_13393[(2)]);
var state_13393__$1 = (function (){var statearr_13423 = state_13393;
(statearr_13423[(9)] = inst_13386);

return statearr_13423;
})();
var statearr_13424_14983 = state_13393__$1;
(statearr_13424_14983[(2)] = null);

(statearr_13424_14983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (13))){
var inst_13339 = (state_13393[(10)]);
var inst_13341 = cljs.core.chunked_seq_QMARK_(inst_13339);
var state_13393__$1 = state_13393;
if(inst_13341){
var statearr_13425_14984 = state_13393__$1;
(statearr_13425_14984[(1)] = (16));

} else {
var statearr_13426_14985 = state_13393__$1;
(statearr_13426_14985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (22))){
var inst_13378 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
if(cljs.core.truth_(inst_13378)){
var statearr_13427_14986 = state_13393__$1;
(statearr_13427_14986[(1)] = (23));

} else {
var statearr_13428_14987 = state_13393__$1;
(statearr_13428_14987[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (6))){
var inst_13374 = (state_13393[(11)]);
var inst_13315 = (state_13393[(8)]);
var inst_13372 = (state_13393[(7)]);
var inst_13372__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13315) : topic_fn.call(null,inst_13315));
var inst_13373 = cljs.core.deref(mults);
var inst_13374__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13373,inst_13372__$1);
var state_13393__$1 = (function (){var statearr_13429 = state_13393;
(statearr_13429[(11)] = inst_13374__$1);

(statearr_13429[(7)] = inst_13372__$1);

return statearr_13429;
})();
if(cljs.core.truth_(inst_13374__$1)){
var statearr_13430_14988 = state_13393__$1;
(statearr_13430_14988[(1)] = (19));

} else {
var statearr_13431_14989 = state_13393__$1;
(statearr_13431_14989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (25))){
var inst_13383 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13432_14990 = state_13393__$1;
(statearr_13432_14990[(2)] = inst_13383);

(statearr_13432_14990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (17))){
var inst_13339 = (state_13393[(10)]);
var inst_13348 = cljs.core.first(inst_13339);
var inst_13358 = cljs.core.async.muxch_STAR_(inst_13348);
var inst_13359 = cljs.core.async.close_BANG_(inst_13358);
var inst_13360 = cljs.core.next(inst_13339);
var inst_13325 = inst_13360;
var inst_13326 = null;
var inst_13327 = (0);
var inst_13328 = (0);
var state_13393__$1 = (function (){var statearr_13433 = state_13393;
(statearr_13433[(12)] = inst_13325);

(statearr_13433[(13)] = inst_13359);

(statearr_13433[(14)] = inst_13328);

(statearr_13433[(15)] = inst_13327);

(statearr_13433[(16)] = inst_13326);

return statearr_13433;
})();
var statearr_13434_14991 = state_13393__$1;
(statearr_13434_14991[(2)] = null);

(statearr_13434_14991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (3))){
var inst_13391 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13393__$1,inst_13391);
} else {
if((state_val_13394 === (12))){
var inst_13368 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13435_14992 = state_13393__$1;
(statearr_13435_14992[(2)] = inst_13368);

(statearr_13435_14992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (2))){
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13393__$1,(4),ch);
} else {
if((state_val_13394 === (23))){
var state_13393__$1 = state_13393;
var statearr_13436_15003 = state_13393__$1;
(statearr_13436_15003[(2)] = null);

(statearr_13436_15003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (19))){
var inst_13374 = (state_13393[(11)]);
var inst_13315 = (state_13393[(8)]);
var inst_13376 = cljs.core.async.muxch_STAR_(inst_13374);
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13393__$1,(22),inst_13376,inst_13315);
} else {
if((state_val_13394 === (11))){
var inst_13325 = (state_13393[(12)]);
var inst_13339 = (state_13393[(10)]);
var inst_13339__$1 = cljs.core.seq(inst_13325);
var state_13393__$1 = (function (){var statearr_13437 = state_13393;
(statearr_13437[(10)] = inst_13339__$1);

return statearr_13437;
})();
if(inst_13339__$1){
var statearr_13438_15008 = state_13393__$1;
(statearr_13438_15008[(1)] = (13));

} else {
var statearr_13439_15009 = state_13393__$1;
(statearr_13439_15009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (9))){
var inst_13370 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13440_15010 = state_13393__$1;
(statearr_13440_15010[(2)] = inst_13370);

(statearr_13440_15010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (5))){
var inst_13322 = cljs.core.deref(mults);
var inst_13323 = cljs.core.vals(inst_13322);
var inst_13324 = cljs.core.seq(inst_13323);
var inst_13325 = inst_13324;
var inst_13326 = null;
var inst_13327 = (0);
var inst_13328 = (0);
var state_13393__$1 = (function (){var statearr_13441 = state_13393;
(statearr_13441[(12)] = inst_13325);

(statearr_13441[(14)] = inst_13328);

(statearr_13441[(15)] = inst_13327);

(statearr_13441[(16)] = inst_13326);

return statearr_13441;
})();
var statearr_13442_15011 = state_13393__$1;
(statearr_13442_15011[(2)] = null);

(statearr_13442_15011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (14))){
var state_13393__$1 = state_13393;
var statearr_13446_15012 = state_13393__$1;
(statearr_13446_15012[(2)] = null);

(statearr_13446_15012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (16))){
var inst_13339 = (state_13393[(10)]);
var inst_13343 = cljs.core.chunk_first(inst_13339);
var inst_13344 = cljs.core.chunk_rest(inst_13339);
var inst_13345 = cljs.core.count(inst_13343);
var inst_13325 = inst_13344;
var inst_13326 = inst_13343;
var inst_13327 = inst_13345;
var inst_13328 = (0);
var state_13393__$1 = (function (){var statearr_13448 = state_13393;
(statearr_13448[(12)] = inst_13325);

(statearr_13448[(14)] = inst_13328);

(statearr_13448[(15)] = inst_13327);

(statearr_13448[(16)] = inst_13326);

return statearr_13448;
})();
var statearr_13449_15013 = state_13393__$1;
(statearr_13449_15013[(2)] = null);

(statearr_13449_15013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (10))){
var inst_13325 = (state_13393[(12)]);
var inst_13328 = (state_13393[(14)]);
var inst_13327 = (state_13393[(15)]);
var inst_13326 = (state_13393[(16)]);
var inst_13333 = cljs.core._nth(inst_13326,inst_13328);
var inst_13334 = cljs.core.async.muxch_STAR_(inst_13333);
var inst_13335 = cljs.core.async.close_BANG_(inst_13334);
var inst_13336 = (inst_13328 + (1));
var tmp13443 = inst_13325;
var tmp13444 = inst_13327;
var tmp13445 = inst_13326;
var inst_13325__$1 = tmp13443;
var inst_13326__$1 = tmp13445;
var inst_13327__$1 = tmp13444;
var inst_13328__$1 = inst_13336;
var state_13393__$1 = (function (){var statearr_13450 = state_13393;
(statearr_13450[(17)] = inst_13335);

(statearr_13450[(12)] = inst_13325__$1);

(statearr_13450[(14)] = inst_13328__$1);

(statearr_13450[(15)] = inst_13327__$1);

(statearr_13450[(16)] = inst_13326__$1);

return statearr_13450;
})();
var statearr_13451_15014 = state_13393__$1;
(statearr_13451_15014[(2)] = null);

(statearr_13451_15014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (18))){
var inst_13363 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13452_15015 = state_13393__$1;
(statearr_13452_15015[(2)] = inst_13363);

(statearr_13452_15015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (8))){
var inst_13328 = (state_13393[(14)]);
var inst_13327 = (state_13393[(15)]);
var inst_13330 = (inst_13328 < inst_13327);
var inst_13331 = inst_13330;
var state_13393__$1 = state_13393;
if(cljs.core.truth_(inst_13331)){
var statearr_13453_15016 = state_13393__$1;
(statearr_13453_15016[(1)] = (10));

} else {
var statearr_13454_15017 = state_13393__$1;
(statearr_13454_15017[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_13455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13455[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_13455[(1)] = (1));

return statearr_13455;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_13393){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_13393);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13467){var ex__12010__auto__ = e13467;
var statearr_13468_15018 = state_13393;
(statearr_13468_15018[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_13393[(4)]))){
var statearr_13469_15019 = state_13393;
(statearr_13469_15019[(1)] = cljs.core.first((state_13393[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15020 = state_13393;
state_13393 = G__15020;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_13393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_13393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13470 = f__12067__auto__();
(statearr_13470[(6)] = c__12066__auto___14975);

return statearr_13470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13472 = arguments.length;
switch (G__13472) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13475 = arguments.length;
switch (G__13475) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13477 = arguments.length;
switch (G__13477) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__12066__auto___15024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_13546){
var state_val_13547 = (state_13546[(1)]);
if((state_val_13547 === (7))){
var state_13546__$1 = state_13546;
var statearr_13548_15025 = state_13546__$1;
(statearr_13548_15025[(2)] = null);

(statearr_13548_15025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (1))){
var state_13546__$1 = state_13546;
var statearr_13549_15026 = state_13546__$1;
(statearr_13549_15026[(2)] = null);

(statearr_13549_15026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (4))){
var inst_13507 = (state_13546[(7)]);
var inst_13506 = (state_13546[(8)]);
var inst_13509 = (inst_13507 < inst_13506);
var state_13546__$1 = state_13546;
if(cljs.core.truth_(inst_13509)){
var statearr_13550_15027 = state_13546__$1;
(statearr_13550_15027[(1)] = (6));

} else {
var statearr_13551_15028 = state_13546__$1;
(statearr_13551_15028[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (15))){
var inst_13532 = (state_13546[(9)]);
var inst_13537 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13532);
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13546__$1,(17),out,inst_13537);
} else {
if((state_val_13547 === (13))){
var inst_13532 = (state_13546[(9)]);
var inst_13532__$1 = (state_13546[(2)]);
var inst_13533 = cljs.core.some(cljs.core.nil_QMARK_,inst_13532__$1);
var state_13546__$1 = (function (){var statearr_13552 = state_13546;
(statearr_13552[(9)] = inst_13532__$1);

return statearr_13552;
})();
if(cljs.core.truth_(inst_13533)){
var statearr_13553_15029 = state_13546__$1;
(statearr_13553_15029[(1)] = (14));

} else {
var statearr_13554_15030 = state_13546__$1;
(statearr_13554_15030[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (6))){
var state_13546__$1 = state_13546;
var statearr_13555_15031 = state_13546__$1;
(statearr_13555_15031[(2)] = null);

(statearr_13555_15031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (17))){
var inst_13539 = (state_13546[(2)]);
var state_13546__$1 = (function (){var statearr_13557 = state_13546;
(statearr_13557[(10)] = inst_13539);

return statearr_13557;
})();
var statearr_13558_15032 = state_13546__$1;
(statearr_13558_15032[(2)] = null);

(statearr_13558_15032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (3))){
var inst_13544 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13546__$1,inst_13544);
} else {
if((state_val_13547 === (12))){
var _ = (function (){var statearr_13565 = state_13546;
(statearr_13565[(4)] = cljs.core.rest((state_13546[(4)])));

return statearr_13565;
})();
var state_13546__$1 = state_13546;
var ex13556 = (state_13546__$1[(2)]);
var statearr_13566_15034 = state_13546__$1;
(statearr_13566_15034[(5)] = ex13556);


if((ex13556 instanceof Object)){
var statearr_13567_15035 = state_13546__$1;
(statearr_13567_15035[(1)] = (11));

(statearr_13567_15035[(5)] = null);

} else {
throw ex13556;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (2))){
var inst_13505 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13506 = cnt;
var inst_13507 = (0);
var state_13546__$1 = (function (){var statearr_13568 = state_13546;
(statearr_13568[(11)] = inst_13505);

(statearr_13568[(7)] = inst_13507);

(statearr_13568[(8)] = inst_13506);

return statearr_13568;
})();
var statearr_13569_15036 = state_13546__$1;
(statearr_13569_15036[(2)] = null);

(statearr_13569_15036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (11))){
var inst_13511 = (state_13546[(2)]);
var inst_13512 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13546__$1 = (function (){var statearr_13570 = state_13546;
(statearr_13570[(12)] = inst_13511);

return statearr_13570;
})();
var statearr_13571_15040 = state_13546__$1;
(statearr_13571_15040[(2)] = inst_13512);

(statearr_13571_15040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (9))){
var inst_13507 = (state_13546[(7)]);
var _ = (function (){var statearr_13572 = state_13546;
(statearr_13572[(4)] = cljs.core.cons((12),(state_13546[(4)])));

return statearr_13572;
})();
var inst_13518 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13507) : chs__$1.call(null,inst_13507));
var inst_13519 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13507) : done.call(null,inst_13507));
var inst_13520 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13518,inst_13519);
var ___$1 = (function (){var statearr_13573 = state_13546;
(statearr_13573[(4)] = cljs.core.rest((state_13546[(4)])));

return statearr_13573;
})();
var state_13546__$1 = state_13546;
var statearr_13574_15041 = state_13546__$1;
(statearr_13574_15041[(2)] = inst_13520);

(statearr_13574_15041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (5))){
var inst_13530 = (state_13546[(2)]);
var state_13546__$1 = (function (){var statearr_13575 = state_13546;
(statearr_13575[(13)] = inst_13530);

return statearr_13575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13546__$1,(13),dchan);
} else {
if((state_val_13547 === (14))){
var inst_13535 = cljs.core.async.close_BANG_(out);
var state_13546__$1 = state_13546;
var statearr_13580_15043 = state_13546__$1;
(statearr_13580_15043[(2)] = inst_13535);

(statearr_13580_15043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (16))){
var inst_13542 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
var statearr_13581_15044 = state_13546__$1;
(statearr_13581_15044[(2)] = inst_13542);

(statearr_13581_15044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (10))){
var inst_13507 = (state_13546[(7)]);
var inst_13523 = (state_13546[(2)]);
var inst_13524 = (inst_13507 + (1));
var inst_13507__$1 = inst_13524;
var state_13546__$1 = (function (){var statearr_13582 = state_13546;
(statearr_13582[(7)] = inst_13507__$1);

(statearr_13582[(14)] = inst_13523);

return statearr_13582;
})();
var statearr_13583_15045 = state_13546__$1;
(statearr_13583_15045[(2)] = null);

(statearr_13583_15045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (8))){
var inst_13528 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
var statearr_13584_15046 = state_13546__$1;
(statearr_13584_15046[(2)] = inst_13528);

(statearr_13584_15046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_13585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13585[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_13585[(1)] = (1));

return statearr_13585;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_13546){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_13546);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13586){var ex__12010__auto__ = e13586;
var statearr_13587_15047 = state_13546;
(statearr_13587_15047[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_13546[(4)]))){
var statearr_13588_15048 = state_13546;
(statearr_13588_15048[(1)] = cljs.core.first((state_13546[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15049 = state_13546;
state_13546 = G__15049;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_13546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_13546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13589 = f__12067__auto__();
(statearr_13589[(6)] = c__12066__auto___15024);

return statearr_13589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13612 = arguments.length;
switch (G__13612) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12066__auto___15051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_13644){
var state_val_13645 = (state_13644[(1)]);
if((state_val_13645 === (7))){
var inst_13623 = (state_13644[(7)]);
var inst_13624 = (state_13644[(8)]);
var inst_13623__$1 = (state_13644[(2)]);
var inst_13624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13623__$1,(0),null);
var inst_13625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13623__$1,(1),null);
var inst_13626 = (inst_13624__$1 == null);
var state_13644__$1 = (function (){var statearr_13646 = state_13644;
(statearr_13646[(7)] = inst_13623__$1);

(statearr_13646[(9)] = inst_13625);

(statearr_13646[(8)] = inst_13624__$1);

return statearr_13646;
})();
if(cljs.core.truth_(inst_13626)){
var statearr_13647_15052 = state_13644__$1;
(statearr_13647_15052[(1)] = (8));

} else {
var statearr_13648_15053 = state_13644__$1;
(statearr_13648_15053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (1))){
var inst_13613 = cljs.core.vec(chs);
var inst_13614 = inst_13613;
var state_13644__$1 = (function (){var statearr_13649 = state_13644;
(statearr_13649[(10)] = inst_13614);

return statearr_13649;
})();
var statearr_13650_15054 = state_13644__$1;
(statearr_13650_15054[(2)] = null);

(statearr_13650_15054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (4))){
var inst_13614 = (state_13644[(10)]);
var state_13644__$1 = state_13644;
return cljs.core.async.ioc_alts_BANG_(state_13644__$1,(7),inst_13614);
} else {
if((state_val_13645 === (6))){
var inst_13640 = (state_13644[(2)]);
var state_13644__$1 = state_13644;
var statearr_13651_15069 = state_13644__$1;
(statearr_13651_15069[(2)] = inst_13640);

(statearr_13651_15069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (3))){
var inst_13642 = (state_13644[(2)]);
var state_13644__$1 = state_13644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13644__$1,inst_13642);
} else {
if((state_val_13645 === (2))){
var inst_13614 = (state_13644[(10)]);
var inst_13616 = cljs.core.count(inst_13614);
var inst_13617 = (inst_13616 > (0));
var state_13644__$1 = state_13644;
if(cljs.core.truth_(inst_13617)){
var statearr_13654_15070 = state_13644__$1;
(statearr_13654_15070[(1)] = (4));

} else {
var statearr_13655_15082 = state_13644__$1;
(statearr_13655_15082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (11))){
var inst_13614 = (state_13644[(10)]);
var inst_13633 = (state_13644[(2)]);
var tmp13652 = inst_13614;
var inst_13614__$1 = tmp13652;
var state_13644__$1 = (function (){var statearr_13656 = state_13644;
(statearr_13656[(10)] = inst_13614__$1);

(statearr_13656[(11)] = inst_13633);

return statearr_13656;
})();
var statearr_13657_15083 = state_13644__$1;
(statearr_13657_15083[(2)] = null);

(statearr_13657_15083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (9))){
var inst_13624 = (state_13644[(8)]);
var state_13644__$1 = state_13644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13644__$1,(11),out,inst_13624);
} else {
if((state_val_13645 === (5))){
var inst_13638 = cljs.core.async.close_BANG_(out);
var state_13644__$1 = state_13644;
var statearr_13659_15084 = state_13644__$1;
(statearr_13659_15084[(2)] = inst_13638);

(statearr_13659_15084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (10))){
var inst_13636 = (state_13644[(2)]);
var state_13644__$1 = state_13644;
var statearr_13660_15085 = state_13644__$1;
(statearr_13660_15085[(2)] = inst_13636);

(statearr_13660_15085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13645 === (8))){
var inst_13623 = (state_13644[(7)]);
var inst_13625 = (state_13644[(9)]);
var inst_13614 = (state_13644[(10)]);
var inst_13624 = (state_13644[(8)]);
var inst_13628 = (function (){var cs = inst_13614;
var vec__13619 = inst_13623;
var v = inst_13624;
var c = inst_13625;
return (function (p1__13590_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13590_SHARP_);
});
})();
var inst_13629 = cljs.core.filterv(inst_13628,inst_13614);
var inst_13614__$1 = inst_13629;
var state_13644__$1 = (function (){var statearr_13661 = state_13644;
(statearr_13661[(10)] = inst_13614__$1);

return statearr_13661;
})();
var statearr_13662_15086 = state_13644__$1;
(statearr_13662_15086[(2)] = null);

(statearr_13662_15086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_13663 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13663[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_13663[(1)] = (1));

return statearr_13663;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_13644){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_13644);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13664){var ex__12010__auto__ = e13664;
var statearr_13665_15087 = state_13644;
(statearr_13665_15087[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_13644[(4)]))){
var statearr_13666_15088 = state_13644;
(statearr_13666_15088[(1)] = cljs.core.first((state_13644[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15089 = state_13644;
state_13644 = G__15089;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_13644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_13644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13667 = f__12067__auto__();
(statearr_13667[(6)] = c__12066__auto___15051);

return statearr_13667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13673 = arguments.length;
switch (G__13673) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12066__auto___15091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_13725){
var state_val_13726 = (state_13725[(1)]);
if((state_val_13726 === (7))){
var inst_13707 = (state_13725[(7)]);
var inst_13707__$1 = (state_13725[(2)]);
var inst_13708 = (inst_13707__$1 == null);
var inst_13709 = cljs.core.not(inst_13708);
var state_13725__$1 = (function (){var statearr_13727 = state_13725;
(statearr_13727[(7)] = inst_13707__$1);

return statearr_13727;
})();
if(inst_13709){
var statearr_13728_15092 = state_13725__$1;
(statearr_13728_15092[(1)] = (8));

} else {
var statearr_13729_15093 = state_13725__$1;
(statearr_13729_15093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (1))){
var inst_13702 = (0);
var state_13725__$1 = (function (){var statearr_13730 = state_13725;
(statearr_13730[(8)] = inst_13702);

return statearr_13730;
})();
var statearr_13731_15094 = state_13725__$1;
(statearr_13731_15094[(2)] = null);

(statearr_13731_15094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (4))){
var state_13725__$1 = state_13725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13725__$1,(7),ch);
} else {
if((state_val_13726 === (6))){
var inst_13720 = (state_13725[(2)]);
var state_13725__$1 = state_13725;
var statearr_13732_15095 = state_13725__$1;
(statearr_13732_15095[(2)] = inst_13720);

(statearr_13732_15095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (3))){
var inst_13722 = (state_13725[(2)]);
var inst_13723 = cljs.core.async.close_BANG_(out);
var state_13725__$1 = (function (){var statearr_13733 = state_13725;
(statearr_13733[(9)] = inst_13722);

return statearr_13733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13725__$1,inst_13723);
} else {
if((state_val_13726 === (2))){
var inst_13702 = (state_13725[(8)]);
var inst_13704 = (inst_13702 < n);
var state_13725__$1 = state_13725;
if(cljs.core.truth_(inst_13704)){
var statearr_13734_15096 = state_13725__$1;
(statearr_13734_15096[(1)] = (4));

} else {
var statearr_13735_15097 = state_13725__$1;
(statearr_13735_15097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (11))){
var inst_13702 = (state_13725[(8)]);
var inst_13712 = (state_13725[(2)]);
var inst_13713 = (inst_13702 + (1));
var inst_13702__$1 = inst_13713;
var state_13725__$1 = (function (){var statearr_13736 = state_13725;
(statearr_13736[(8)] = inst_13702__$1);

(statearr_13736[(10)] = inst_13712);

return statearr_13736;
})();
var statearr_13737_15098 = state_13725__$1;
(statearr_13737_15098[(2)] = null);

(statearr_13737_15098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (9))){
var state_13725__$1 = state_13725;
var statearr_13738_15099 = state_13725__$1;
(statearr_13738_15099[(2)] = null);

(statearr_13738_15099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (5))){
var state_13725__$1 = state_13725;
var statearr_13739_15100 = state_13725__$1;
(statearr_13739_15100[(2)] = null);

(statearr_13739_15100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (10))){
var inst_13717 = (state_13725[(2)]);
var state_13725__$1 = state_13725;
var statearr_13740_15101 = state_13725__$1;
(statearr_13740_15101[(2)] = inst_13717);

(statearr_13740_15101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13726 === (8))){
var inst_13707 = (state_13725[(7)]);
var state_13725__$1 = state_13725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13725__$1,(11),out,inst_13707);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_13741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13741[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_13741[(1)] = (1));

return statearr_13741;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_13725){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_13725);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13742){var ex__12010__auto__ = e13742;
var statearr_13743_15112 = state_13725;
(statearr_13743_15112[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_13725[(4)]))){
var statearr_13744_15113 = state_13725;
(statearr_13744_15113[(1)] = cljs.core.first((state_13725[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15114 = state_13725;
state_13725 = G__15114;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_13725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_13725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13745 = f__12067__auto__();
(statearr_13745[(6)] = c__12066__auto___15091);

return statearr_13745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13755 = (function (f,ch,meta13756){
this.f = f;
this.ch = ch;
this.meta13756 = meta13756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13757,meta13756__$1){
var self__ = this;
var _13757__$1 = this;
return (new cljs.core.async.t_cljs$core$async13755(self__.f,self__.ch,meta13756__$1));
}));

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13757){
var self__ = this;
var _13757__$1 = this;
return self__.meta13756;
}));

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13760 = (function (f,ch,meta13756,_,fn1,meta13761){
this.f = f;
this.ch = ch;
this.meta13756 = meta13756;
this._ = _;
this.fn1 = fn1;
this.meta13761 = meta13761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13762,meta13761__$1){
var self__ = this;
var _13762__$1 = this;
return (new cljs.core.async.t_cljs$core$async13760(self__.f,self__.ch,self__.meta13756,self__._,self__.fn1,meta13761__$1));
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13762){
var self__ = this;
var _13762__$1 = this;
return self__.meta13761;
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13750_SHARP_){
var G__13769 = (((p1__13750_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13750_SHARP_) : self__.f.call(null,p1__13750_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13769) : f1.call(null,G__13769));
});
}));

(cljs.core.async.t_cljs$core$async13760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13756","meta13756",-1428053231,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13755","cljs.core.async/t_cljs$core$async13755",2120592613,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13761","meta13761",-2063052564,null)], null);
}));

(cljs.core.async.t_cljs$core$async13760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13760");

(cljs.core.async.t_cljs$core$async13760.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13760.
 */
cljs.core.async.__GT_t_cljs$core$async13760 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13760(f__$1,ch__$1,meta13756__$1,___$2,fn1__$1,meta13761){
return (new cljs.core.async.t_cljs$core$async13760(f__$1,ch__$1,meta13756__$1,___$2,fn1__$1,meta13761));
});

}

return (new cljs.core.async.t_cljs$core$async13760(self__.f,self__.ch,self__.meta13756,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13770 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13770) : self__.f.call(null,G__13770));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13755.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13756","meta13756",-1428053231,null)], null);
}));

(cljs.core.async.t_cljs$core$async13755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13755");

(cljs.core.async.t_cljs$core$async13755.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13755.
 */
cljs.core.async.__GT_t_cljs$core$async13755 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13755(f__$1,ch__$1,meta13756){
return (new cljs.core.async.t_cljs$core$async13755(f__$1,ch__$1,meta13756));
});

}

return (new cljs.core.async.t_cljs$core$async13755(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13775 = (function (f,ch,meta13776){
this.f = f;
this.ch = ch;
this.meta13776 = meta13776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13777,meta13776__$1){
var self__ = this;
var _13777__$1 = this;
return (new cljs.core.async.t_cljs$core$async13775(self__.f,self__.ch,meta13776__$1));
}));

(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13777){
var self__ = this;
var _13777__$1 = this;
return self__.meta13776;
}));

(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13775.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13776","meta13776",66945273,null)], null);
}));

(cljs.core.async.t_cljs$core$async13775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13775");

(cljs.core.async.t_cljs$core$async13775.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13775.
 */
cljs.core.async.__GT_t_cljs$core$async13775 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13775(f__$1,ch__$1,meta13776){
return (new cljs.core.async.t_cljs$core$async13775(f__$1,ch__$1,meta13776));
});

}

return (new cljs.core.async.t_cljs$core$async13775(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13778 = (function (p,ch,meta13779){
this.p = p;
this.ch = ch;
this.meta13779 = meta13779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13780,meta13779__$1){
var self__ = this;
var _13780__$1 = this;
return (new cljs.core.async.t_cljs$core$async13778(self__.p,self__.ch,meta13779__$1));
}));

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13780){
var self__ = this;
var _13780__$1 = this;
return self__.meta13779;
}));

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13779","meta13779",-1804478489,null)], null);
}));

(cljs.core.async.t_cljs$core$async13778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13778");

(cljs.core.async.t_cljs$core$async13778.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13778.
 */
cljs.core.async.__GT_t_cljs$core$async13778 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13778(p__$1,ch__$1,meta13779){
return (new cljs.core.async.t_cljs$core$async13778(p__$1,ch__$1,meta13779));
});

}

return (new cljs.core.async.t_cljs$core$async13778(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13794 = arguments.length;
switch (G__13794) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12066__auto___15147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_13815){
var state_val_13816 = (state_13815[(1)]);
if((state_val_13816 === (7))){
var inst_13811 = (state_13815[(2)]);
var state_13815__$1 = state_13815;
var statearr_13821_15148 = state_13815__$1;
(statearr_13821_15148[(2)] = inst_13811);

(statearr_13821_15148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (1))){
var state_13815__$1 = state_13815;
var statearr_13822_15149 = state_13815__$1;
(statearr_13822_15149[(2)] = null);

(statearr_13822_15149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (4))){
var inst_13797 = (state_13815[(7)]);
var inst_13797__$1 = (state_13815[(2)]);
var inst_13798 = (inst_13797__$1 == null);
var state_13815__$1 = (function (){var statearr_13823 = state_13815;
(statearr_13823[(7)] = inst_13797__$1);

return statearr_13823;
})();
if(cljs.core.truth_(inst_13798)){
var statearr_13824_15150 = state_13815__$1;
(statearr_13824_15150[(1)] = (5));

} else {
var statearr_13825_15151 = state_13815__$1;
(statearr_13825_15151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (6))){
var inst_13797 = (state_13815[(7)]);
var inst_13802 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13797) : p.call(null,inst_13797));
var state_13815__$1 = state_13815;
if(cljs.core.truth_(inst_13802)){
var statearr_13826_15152 = state_13815__$1;
(statearr_13826_15152[(1)] = (8));

} else {
var statearr_13827_15153 = state_13815__$1;
(statearr_13827_15153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (3))){
var inst_13813 = (state_13815[(2)]);
var state_13815__$1 = state_13815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13815__$1,inst_13813);
} else {
if((state_val_13816 === (2))){
var state_13815__$1 = state_13815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13815__$1,(4),ch);
} else {
if((state_val_13816 === (11))){
var inst_13805 = (state_13815[(2)]);
var state_13815__$1 = state_13815;
var statearr_13828_15160 = state_13815__$1;
(statearr_13828_15160[(2)] = inst_13805);

(statearr_13828_15160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (9))){
var state_13815__$1 = state_13815;
var statearr_13829_15161 = state_13815__$1;
(statearr_13829_15161[(2)] = null);

(statearr_13829_15161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (5))){
var inst_13800 = cljs.core.async.close_BANG_(out);
var state_13815__$1 = state_13815;
var statearr_13830_15162 = state_13815__$1;
(statearr_13830_15162[(2)] = inst_13800);

(statearr_13830_15162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (10))){
var inst_13808 = (state_13815[(2)]);
var state_13815__$1 = (function (){var statearr_13831 = state_13815;
(statearr_13831[(8)] = inst_13808);

return statearr_13831;
})();
var statearr_13832_15163 = state_13815__$1;
(statearr_13832_15163[(2)] = null);

(statearr_13832_15163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13816 === (8))){
var inst_13797 = (state_13815[(7)]);
var state_13815__$1 = state_13815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13815__$1,(11),out,inst_13797);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_13833 = [null,null,null,null,null,null,null,null,null];
(statearr_13833[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_13833[(1)] = (1));

return statearr_13833;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_13815){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_13815);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13834){var ex__12010__auto__ = e13834;
var statearr_13835_15164 = state_13815;
(statearr_13835_15164[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_13815[(4)]))){
var statearr_13836_15165 = state_13815;
(statearr_13836_15165[(1)] = cljs.core.first((state_13815[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15174 = state_13815;
state_13815 = G__15174;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_13815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_13815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13841 = f__12067__auto__();
(statearr_13841[(6)] = c__12066__auto___15147);

return statearr_13841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13843 = arguments.length;
switch (G__13843) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_13912){
var state_val_13913 = (state_13912[(1)]);
if((state_val_13913 === (7))){
var inst_13908 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13914_15178 = state_13912__$1;
(statearr_13914_15178[(2)] = inst_13908);

(statearr_13914_15178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (20))){
var inst_13878 = (state_13912[(7)]);
var inst_13889 = (state_13912[(2)]);
var inst_13890 = cljs.core.next(inst_13878);
var inst_13864 = inst_13890;
var inst_13865 = null;
var inst_13866 = (0);
var inst_13867 = (0);
var state_13912__$1 = (function (){var statearr_13915 = state_13912;
(statearr_13915[(8)] = inst_13866);

(statearr_13915[(9)] = inst_13867);

(statearr_13915[(10)] = inst_13864);

(statearr_13915[(11)] = inst_13865);

(statearr_13915[(12)] = inst_13889);

return statearr_13915;
})();
var statearr_13916_15179 = state_13912__$1;
(statearr_13916_15179[(2)] = null);

(statearr_13916_15179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (1))){
var state_13912__$1 = state_13912;
var statearr_13917_15180 = state_13912__$1;
(statearr_13917_15180[(2)] = null);

(statearr_13917_15180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (4))){
var inst_13853 = (state_13912[(13)]);
var inst_13853__$1 = (state_13912[(2)]);
var inst_13854 = (inst_13853__$1 == null);
var state_13912__$1 = (function (){var statearr_13918 = state_13912;
(statearr_13918[(13)] = inst_13853__$1);

return statearr_13918;
})();
if(cljs.core.truth_(inst_13854)){
var statearr_13919_15181 = state_13912__$1;
(statearr_13919_15181[(1)] = (5));

} else {
var statearr_13920_15182 = state_13912__$1;
(statearr_13920_15182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (15))){
var state_13912__$1 = state_13912;
var statearr_13924_15183 = state_13912__$1;
(statearr_13924_15183[(2)] = null);

(statearr_13924_15183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (21))){
var state_13912__$1 = state_13912;
var statearr_13925_15184 = state_13912__$1;
(statearr_13925_15184[(2)] = null);

(statearr_13925_15184[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (13))){
var inst_13866 = (state_13912[(8)]);
var inst_13867 = (state_13912[(9)]);
var inst_13864 = (state_13912[(10)]);
var inst_13865 = (state_13912[(11)]);
var inst_13874 = (state_13912[(2)]);
var inst_13875 = (inst_13867 + (1));
var tmp13921 = inst_13866;
var tmp13922 = inst_13864;
var tmp13923 = inst_13865;
var inst_13864__$1 = tmp13922;
var inst_13865__$1 = tmp13923;
var inst_13866__$1 = tmp13921;
var inst_13867__$1 = inst_13875;
var state_13912__$1 = (function (){var statearr_13926 = state_13912;
(statearr_13926[(8)] = inst_13866__$1);

(statearr_13926[(9)] = inst_13867__$1);

(statearr_13926[(10)] = inst_13864__$1);

(statearr_13926[(14)] = inst_13874);

(statearr_13926[(11)] = inst_13865__$1);

return statearr_13926;
})();
var statearr_13927_15185 = state_13912__$1;
(statearr_13927_15185[(2)] = null);

(statearr_13927_15185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (22))){
var state_13912__$1 = state_13912;
var statearr_13928_15186 = state_13912__$1;
(statearr_13928_15186[(2)] = null);

(statearr_13928_15186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (6))){
var inst_13853 = (state_13912[(13)]);
var inst_13862 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13853) : f.call(null,inst_13853));
var inst_13863 = cljs.core.seq(inst_13862);
var inst_13864 = inst_13863;
var inst_13865 = null;
var inst_13866 = (0);
var inst_13867 = (0);
var state_13912__$1 = (function (){var statearr_13933 = state_13912;
(statearr_13933[(8)] = inst_13866);

(statearr_13933[(9)] = inst_13867);

(statearr_13933[(10)] = inst_13864);

(statearr_13933[(11)] = inst_13865);

return statearr_13933;
})();
var statearr_13934_15187 = state_13912__$1;
(statearr_13934_15187[(2)] = null);

(statearr_13934_15187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (17))){
var inst_13878 = (state_13912[(7)]);
var inst_13882 = cljs.core.chunk_first(inst_13878);
var inst_13883 = cljs.core.chunk_rest(inst_13878);
var inst_13884 = cljs.core.count(inst_13882);
var inst_13864 = inst_13883;
var inst_13865 = inst_13882;
var inst_13866 = inst_13884;
var inst_13867 = (0);
var state_13912__$1 = (function (){var statearr_13935 = state_13912;
(statearr_13935[(8)] = inst_13866);

(statearr_13935[(9)] = inst_13867);

(statearr_13935[(10)] = inst_13864);

(statearr_13935[(11)] = inst_13865);

return statearr_13935;
})();
var statearr_13936_15188 = state_13912__$1;
(statearr_13936_15188[(2)] = null);

(statearr_13936_15188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (3))){
var inst_13910 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13912__$1,inst_13910);
} else {
if((state_val_13913 === (12))){
var inst_13898 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13937_15189 = state_13912__$1;
(statearr_13937_15189[(2)] = inst_13898);

(statearr_13937_15189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (2))){
var state_13912__$1 = state_13912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13912__$1,(4),in$);
} else {
if((state_val_13913 === (23))){
var inst_13906 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13938_15190 = state_13912__$1;
(statearr_13938_15190[(2)] = inst_13906);

(statearr_13938_15190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (19))){
var inst_13893 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13939_15191 = state_13912__$1;
(statearr_13939_15191[(2)] = inst_13893);

(statearr_13939_15191[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (11))){
var inst_13864 = (state_13912[(10)]);
var inst_13878 = (state_13912[(7)]);
var inst_13878__$1 = cljs.core.seq(inst_13864);
var state_13912__$1 = (function (){var statearr_13940 = state_13912;
(statearr_13940[(7)] = inst_13878__$1);

return statearr_13940;
})();
if(inst_13878__$1){
var statearr_13941_15192 = state_13912__$1;
(statearr_13941_15192[(1)] = (14));

} else {
var statearr_13942_15193 = state_13912__$1;
(statearr_13942_15193[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (9))){
var inst_13900 = (state_13912[(2)]);
var inst_13901 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13912__$1 = (function (){var statearr_13943 = state_13912;
(statearr_13943[(15)] = inst_13900);

return statearr_13943;
})();
if(cljs.core.truth_(inst_13901)){
var statearr_13944_15206 = state_13912__$1;
(statearr_13944_15206[(1)] = (21));

} else {
var statearr_13945_15207 = state_13912__$1;
(statearr_13945_15207[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (5))){
var inst_13856 = cljs.core.async.close_BANG_(out);
var state_13912__$1 = state_13912;
var statearr_13946_15208 = state_13912__$1;
(statearr_13946_15208[(2)] = inst_13856);

(statearr_13946_15208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (14))){
var inst_13878 = (state_13912[(7)]);
var inst_13880 = cljs.core.chunked_seq_QMARK_(inst_13878);
var state_13912__$1 = state_13912;
if(inst_13880){
var statearr_13947_15209 = state_13912__$1;
(statearr_13947_15209[(1)] = (17));

} else {
var statearr_13948_15210 = state_13912__$1;
(statearr_13948_15210[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (16))){
var inst_13896 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13955_15211 = state_13912__$1;
(statearr_13955_15211[(2)] = inst_13896);

(statearr_13955_15211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (10))){
var inst_13867 = (state_13912[(9)]);
var inst_13865 = (state_13912[(11)]);
var inst_13872 = cljs.core._nth(inst_13865,inst_13867);
var state_13912__$1 = state_13912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13912__$1,(13),out,inst_13872);
} else {
if((state_val_13913 === (18))){
var inst_13878 = (state_13912[(7)]);
var inst_13887 = cljs.core.first(inst_13878);
var state_13912__$1 = state_13912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13912__$1,(20),out,inst_13887);
} else {
if((state_val_13913 === (8))){
var inst_13866 = (state_13912[(8)]);
var inst_13867 = (state_13912[(9)]);
var inst_13869 = (inst_13867 < inst_13866);
var inst_13870 = inst_13869;
var state_13912__$1 = state_13912;
if(cljs.core.truth_(inst_13870)){
var statearr_13956_15213 = state_13912__$1;
(statearr_13956_15213[(1)] = (10));

} else {
var statearr_13957_15214 = state_13912__$1;
(statearr_13957_15214[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12007__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12007__auto____0 = (function (){
var statearr_13961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13961[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12007__auto__);

(statearr_13961[(1)] = (1));

return statearr_13961;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12007__auto____1 = (function (state_13912){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_13912);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e13962){var ex__12010__auto__ = e13962;
var statearr_13963_15216 = state_13912;
(statearr_13963_15216[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_13912[(4)]))){
var statearr_13964_15217 = state_13912;
(statearr_13964_15217[(1)] = cljs.core.first((state_13912[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15218 = state_13912;
state_13912 = G__15218;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12007__auto__ = function(state_13912){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12007__auto____1.call(this,state_13912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12007__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12007__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_13965 = f__12067__auto__();
(statearr_13965[(6)] = c__12066__auto__);

return statearr_13965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));

return c__12066__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13967 = arguments.length;
switch (G__13967) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13977 = arguments.length;
switch (G__13977) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13981 = arguments.length;
switch (G__13981) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12066__auto___15222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_14019){
var state_val_14020 = (state_14019[(1)]);
if((state_val_14020 === (7))){
var inst_14014 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
var statearr_14021_15228 = state_14019__$1;
(statearr_14021_15228[(2)] = inst_14014);

(statearr_14021_15228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (1))){
var inst_13988 = null;
var state_14019__$1 = (function (){var statearr_14022 = state_14019;
(statearr_14022[(7)] = inst_13988);

return statearr_14022;
})();
var statearr_14023_15229 = state_14019__$1;
(statearr_14023_15229[(2)] = null);

(statearr_14023_15229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (4))){
var inst_13991 = (state_14019[(8)]);
var inst_13991__$1 = (state_14019[(2)]);
var inst_14000 = (inst_13991__$1 == null);
var inst_14001 = cljs.core.not(inst_14000);
var state_14019__$1 = (function (){var statearr_14024 = state_14019;
(statearr_14024[(8)] = inst_13991__$1);

return statearr_14024;
})();
if(inst_14001){
var statearr_14025_15230 = state_14019__$1;
(statearr_14025_15230[(1)] = (5));

} else {
var statearr_14026_15231 = state_14019__$1;
(statearr_14026_15231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (6))){
var state_14019__$1 = state_14019;
var statearr_14027_15233 = state_14019__$1;
(statearr_14027_15233[(2)] = null);

(statearr_14027_15233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (3))){
var inst_14016 = (state_14019[(2)]);
var inst_14017 = cljs.core.async.close_BANG_(out);
var state_14019__$1 = (function (){var statearr_14028 = state_14019;
(statearr_14028[(9)] = inst_14016);

return statearr_14028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14019__$1,inst_14017);
} else {
if((state_val_14020 === (2))){
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14019__$1,(4),ch);
} else {
if((state_val_14020 === (11))){
var inst_13991 = (state_14019[(8)]);
var inst_14008 = (state_14019[(2)]);
var inst_13988 = inst_13991;
var state_14019__$1 = (function (){var statearr_14029 = state_14019;
(statearr_14029[(10)] = inst_14008);

(statearr_14029[(7)] = inst_13988);

return statearr_14029;
})();
var statearr_14030_15234 = state_14019__$1;
(statearr_14030_15234[(2)] = null);

(statearr_14030_15234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (9))){
var inst_13991 = (state_14019[(8)]);
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14019__$1,(11),out,inst_13991);
} else {
if((state_val_14020 === (5))){
var inst_13991 = (state_14019[(8)]);
var inst_13988 = (state_14019[(7)]);
var inst_14003 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13991,inst_13988);
var state_14019__$1 = state_14019;
if(inst_14003){
var statearr_14032_15235 = state_14019__$1;
(statearr_14032_15235[(1)] = (8));

} else {
var statearr_14033_15236 = state_14019__$1;
(statearr_14033_15236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (10))){
var inst_14011 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
var statearr_14034_15237 = state_14019__$1;
(statearr_14034_15237[(2)] = inst_14011);

(statearr_14034_15237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (8))){
var inst_13988 = (state_14019[(7)]);
var tmp14031 = inst_13988;
var inst_13988__$1 = tmp14031;
var state_14019__$1 = (function (){var statearr_14035 = state_14019;
(statearr_14035[(7)] = inst_13988__$1);

return statearr_14035;
})();
var statearr_14036_15238 = state_14019__$1;
(statearr_14036_15238[(2)] = null);

(statearr_14036_15238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_14037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14037[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_14037[(1)] = (1));

return statearr_14037;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_14019){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_14019);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e14038){var ex__12010__auto__ = e14038;
var statearr_14040_15254 = state_14019;
(statearr_14040_15254[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_14019[(4)]))){
var statearr_14041_15255 = state_14019;
(statearr_14041_15255[(1)] = cljs.core.first((state_14019[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15256 = state_14019;
state_14019 = G__15256;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_14019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_14019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_14042 = f__12067__auto__();
(statearr_14042[(6)] = c__12066__auto___15222);

return statearr_14042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14046 = arguments.length;
switch (G__14046) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12066__auto___15258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_14086){
var state_val_14087 = (state_14086[(1)]);
if((state_val_14087 === (7))){
var inst_14082 = (state_14086[(2)]);
var state_14086__$1 = state_14086;
var statearr_14088_15259 = state_14086__$1;
(statearr_14088_15259[(2)] = inst_14082);

(statearr_14088_15259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (1))){
var inst_14049 = (new Array(n));
var inst_14050 = inst_14049;
var inst_14051 = (0);
var state_14086__$1 = (function (){var statearr_14089 = state_14086;
(statearr_14089[(7)] = inst_14050);

(statearr_14089[(8)] = inst_14051);

return statearr_14089;
})();
var statearr_14090_15268 = state_14086__$1;
(statearr_14090_15268[(2)] = null);

(statearr_14090_15268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (4))){
var inst_14054 = (state_14086[(9)]);
var inst_14054__$1 = (state_14086[(2)]);
var inst_14055 = (inst_14054__$1 == null);
var inst_14056 = cljs.core.not(inst_14055);
var state_14086__$1 = (function (){var statearr_14091 = state_14086;
(statearr_14091[(9)] = inst_14054__$1);

return statearr_14091;
})();
if(inst_14056){
var statearr_14092_15273 = state_14086__$1;
(statearr_14092_15273[(1)] = (5));

} else {
var statearr_14093_15274 = state_14086__$1;
(statearr_14093_15274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (15))){
var inst_14076 = (state_14086[(2)]);
var state_14086__$1 = state_14086;
var statearr_14094_15275 = state_14086__$1;
(statearr_14094_15275[(2)] = inst_14076);

(statearr_14094_15275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (13))){
var state_14086__$1 = state_14086;
var statearr_14095_15276 = state_14086__$1;
(statearr_14095_15276[(2)] = null);

(statearr_14095_15276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (6))){
var inst_14051 = (state_14086[(8)]);
var inst_14072 = (inst_14051 > (0));
var state_14086__$1 = state_14086;
if(cljs.core.truth_(inst_14072)){
var statearr_14097_15281 = state_14086__$1;
(statearr_14097_15281[(1)] = (12));

} else {
var statearr_14098_15282 = state_14086__$1;
(statearr_14098_15282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (3))){
var inst_14084 = (state_14086[(2)]);
var state_14086__$1 = state_14086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14086__$1,inst_14084);
} else {
if((state_val_14087 === (12))){
var inst_14050 = (state_14086[(7)]);
var inst_14074 = cljs.core.vec(inst_14050);
var state_14086__$1 = state_14086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14086__$1,(15),out,inst_14074);
} else {
if((state_val_14087 === (2))){
var state_14086__$1 = state_14086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14086__$1,(4),ch);
} else {
if((state_val_14087 === (11))){
var inst_14066 = (state_14086[(2)]);
var inst_14067 = (new Array(n));
var inst_14050 = inst_14067;
var inst_14051 = (0);
var state_14086__$1 = (function (){var statearr_14099 = state_14086;
(statearr_14099[(7)] = inst_14050);

(statearr_14099[(10)] = inst_14066);

(statearr_14099[(8)] = inst_14051);

return statearr_14099;
})();
var statearr_14100_15294 = state_14086__$1;
(statearr_14100_15294[(2)] = null);

(statearr_14100_15294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (9))){
var inst_14050 = (state_14086[(7)]);
var inst_14064 = cljs.core.vec(inst_14050);
var state_14086__$1 = state_14086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14086__$1,(11),out,inst_14064);
} else {
if((state_val_14087 === (5))){
var inst_14050 = (state_14086[(7)]);
var inst_14051 = (state_14086[(8)]);
var inst_14054 = (state_14086[(9)]);
var inst_14059 = (state_14086[(11)]);
var inst_14058 = (inst_14050[inst_14051] = inst_14054);
var inst_14059__$1 = (inst_14051 + (1));
var inst_14060 = (inst_14059__$1 < n);
var state_14086__$1 = (function (){var statearr_14102 = state_14086;
(statearr_14102[(12)] = inst_14058);

(statearr_14102[(11)] = inst_14059__$1);

return statearr_14102;
})();
if(cljs.core.truth_(inst_14060)){
var statearr_14103_15297 = state_14086__$1;
(statearr_14103_15297[(1)] = (8));

} else {
var statearr_14104_15298 = state_14086__$1;
(statearr_14104_15298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (14))){
var inst_14079 = (state_14086[(2)]);
var inst_14080 = cljs.core.async.close_BANG_(out);
var state_14086__$1 = (function (){var statearr_14106 = state_14086;
(statearr_14106[(13)] = inst_14079);

return statearr_14106;
})();
var statearr_14107_15300 = state_14086__$1;
(statearr_14107_15300[(2)] = inst_14080);

(statearr_14107_15300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (10))){
var inst_14070 = (state_14086[(2)]);
var state_14086__$1 = state_14086;
var statearr_14108_15301 = state_14086__$1;
(statearr_14108_15301[(2)] = inst_14070);

(statearr_14108_15301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14087 === (8))){
var inst_14050 = (state_14086[(7)]);
var inst_14059 = (state_14086[(11)]);
var tmp14105 = inst_14050;
var inst_14050__$1 = tmp14105;
var inst_14051 = inst_14059;
var state_14086__$1 = (function (){var statearr_14109 = state_14086;
(statearr_14109[(7)] = inst_14050__$1);

(statearr_14109[(8)] = inst_14051);

return statearr_14109;
})();
var statearr_14110_15302 = state_14086__$1;
(statearr_14110_15302[(2)] = null);

(statearr_14110_15302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_14111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14111[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_14111[(1)] = (1));

return statearr_14111;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_14086){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_14086);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e14112){var ex__12010__auto__ = e14112;
var statearr_14113_15303 = state_14086;
(statearr_14113_15303[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_14086[(4)]))){
var statearr_14114_15304 = state_14086;
(statearr_14114_15304[(1)] = cljs.core.first((state_14086[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15305 = state_14086;
state_14086 = G__15305;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_14086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_14086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_14115 = f__12067__auto__();
(statearr_14115[(6)] = c__12066__auto___15258);

return statearr_14115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14117 = arguments.length;
switch (G__14117) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12066__auto___15349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12067__auto__ = (function (){var switch__12006__auto__ = (function (state_14162){
var state_val_14163 = (state_14162[(1)]);
if((state_val_14163 === (7))){
var inst_14158 = (state_14162[(2)]);
var state_14162__$1 = state_14162;
var statearr_14164_15357 = state_14162__$1;
(statearr_14164_15357[(2)] = inst_14158);

(statearr_14164_15357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (1))){
var inst_14118 = [];
var inst_14119 = inst_14118;
var inst_14120 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14162__$1 = (function (){var statearr_14165 = state_14162;
(statearr_14165[(7)] = inst_14119);

(statearr_14165[(8)] = inst_14120);

return statearr_14165;
})();
var statearr_14166_15367 = state_14162__$1;
(statearr_14166_15367[(2)] = null);

(statearr_14166_15367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (4))){
var inst_14123 = (state_14162[(9)]);
var inst_14123__$1 = (state_14162[(2)]);
var inst_14124 = (inst_14123__$1 == null);
var inst_14125 = cljs.core.not(inst_14124);
var state_14162__$1 = (function (){var statearr_14167 = state_14162;
(statearr_14167[(9)] = inst_14123__$1);

return statearr_14167;
})();
if(inst_14125){
var statearr_14168_15379 = state_14162__$1;
(statearr_14168_15379[(1)] = (5));

} else {
var statearr_14169_15380 = state_14162__$1;
(statearr_14169_15380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (15))){
var inst_14119 = (state_14162[(7)]);
var inst_14150 = cljs.core.vec(inst_14119);
var state_14162__$1 = state_14162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14162__$1,(18),out,inst_14150);
} else {
if((state_val_14163 === (13))){
var inst_14145 = (state_14162[(2)]);
var state_14162__$1 = state_14162;
var statearr_14170_15394 = state_14162__$1;
(statearr_14170_15394[(2)] = inst_14145);

(statearr_14170_15394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (6))){
var inst_14119 = (state_14162[(7)]);
var inst_14147 = inst_14119.length;
var inst_14148 = (inst_14147 > (0));
var state_14162__$1 = state_14162;
if(cljs.core.truth_(inst_14148)){
var statearr_14185_15395 = state_14162__$1;
(statearr_14185_15395[(1)] = (15));

} else {
var statearr_14205_15396 = state_14162__$1;
(statearr_14205_15396[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (17))){
var inst_14155 = (state_14162[(2)]);
var inst_14156 = cljs.core.async.close_BANG_(out);
var state_14162__$1 = (function (){var statearr_14206 = state_14162;
(statearr_14206[(10)] = inst_14155);

return statearr_14206;
})();
var statearr_14207_15397 = state_14162__$1;
(statearr_14207_15397[(2)] = inst_14156);

(statearr_14207_15397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (3))){
var inst_14160 = (state_14162[(2)]);
var state_14162__$1 = state_14162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14162__$1,inst_14160);
} else {
if((state_val_14163 === (12))){
var inst_14119 = (state_14162[(7)]);
var inst_14138 = cljs.core.vec(inst_14119);
var state_14162__$1 = state_14162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14162__$1,(14),out,inst_14138);
} else {
if((state_val_14163 === (2))){
var state_14162__$1 = state_14162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14162__$1,(4),ch);
} else {
if((state_val_14163 === (11))){
var inst_14119 = (state_14162[(7)]);
var inst_14123 = (state_14162[(9)]);
var inst_14127 = (state_14162[(11)]);
var inst_14135 = inst_14119.push(inst_14123);
var tmp14208 = inst_14119;
var inst_14119__$1 = tmp14208;
var inst_14120 = inst_14127;
var state_14162__$1 = (function (){var statearr_14209 = state_14162;
(statearr_14209[(7)] = inst_14119__$1);

(statearr_14209[(8)] = inst_14120);

(statearr_14209[(12)] = inst_14135);

return statearr_14209;
})();
var statearr_14210_15402 = state_14162__$1;
(statearr_14210_15402[(2)] = null);

(statearr_14210_15402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (9))){
var inst_14120 = (state_14162[(8)]);
var inst_14131 = cljs.core.keyword_identical_QMARK_(inst_14120,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_14162__$1 = state_14162;
var statearr_14211_15407 = state_14162__$1;
(statearr_14211_15407[(2)] = inst_14131);

(statearr_14211_15407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (5))){
var inst_14123 = (state_14162[(9)]);
var inst_14120 = (state_14162[(8)]);
var inst_14127 = (state_14162[(11)]);
var inst_14128 = (state_14162[(13)]);
var inst_14127__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14123) : f.call(null,inst_14123));
var inst_14128__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14127__$1,inst_14120);
var state_14162__$1 = (function (){var statearr_14212 = state_14162;
(statearr_14212[(11)] = inst_14127__$1);

(statearr_14212[(13)] = inst_14128__$1);

return statearr_14212;
})();
if(inst_14128__$1){
var statearr_14213_15408 = state_14162__$1;
(statearr_14213_15408[(1)] = (8));

} else {
var statearr_14214_15409 = state_14162__$1;
(statearr_14214_15409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (14))){
var inst_14123 = (state_14162[(9)]);
var inst_14127 = (state_14162[(11)]);
var inst_14140 = (state_14162[(2)]);
var inst_14141 = [];
var inst_14142 = inst_14141.push(inst_14123);
var inst_14119 = inst_14141;
var inst_14120 = inst_14127;
var state_14162__$1 = (function (){var statearr_14215 = state_14162;
(statearr_14215[(14)] = inst_14142);

(statearr_14215[(7)] = inst_14119);

(statearr_14215[(8)] = inst_14120);

(statearr_14215[(15)] = inst_14140);

return statearr_14215;
})();
var statearr_14216_15467 = state_14162__$1;
(statearr_14216_15467[(2)] = null);

(statearr_14216_15467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (16))){
var state_14162__$1 = state_14162;
var statearr_14217_15468 = state_14162__$1;
(statearr_14217_15468[(2)] = null);

(statearr_14217_15468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (10))){
var inst_14133 = (state_14162[(2)]);
var state_14162__$1 = state_14162;
if(cljs.core.truth_(inst_14133)){
var statearr_14218_15469 = state_14162__$1;
(statearr_14218_15469[(1)] = (11));

} else {
var statearr_14219_15470 = state_14162__$1;
(statearr_14219_15470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (18))){
var inst_14152 = (state_14162[(2)]);
var state_14162__$1 = state_14162;
var statearr_14220_15471 = state_14162__$1;
(statearr_14220_15471[(2)] = inst_14152);

(statearr_14220_15471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (8))){
var inst_14128 = (state_14162[(13)]);
var state_14162__$1 = state_14162;
var statearr_14221_15472 = state_14162__$1;
(statearr_14221_15472[(2)] = inst_14128);

(statearr_14221_15472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12007__auto__ = null;
var cljs$core$async$state_machine__12007__auto____0 = (function (){
var statearr_14222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14222[(0)] = cljs$core$async$state_machine__12007__auto__);

(statearr_14222[(1)] = (1));

return statearr_14222;
});
var cljs$core$async$state_machine__12007__auto____1 = (function (state_14162){
while(true){
var ret_value__12008__auto__ = (function (){try{while(true){
var result__12009__auto__ = switch__12006__auto__(state_14162);
if(cljs.core.keyword_identical_QMARK_(result__12009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12009__auto__;
}
break;
}
}catch (e14223){var ex__12010__auto__ = e14223;
var statearr_14224_15473 = state_14162;
(statearr_14224_15473[(2)] = ex__12010__auto__);


if(cljs.core.seq((state_14162[(4)]))){
var statearr_14225_15474 = state_14162;
(statearr_14225_15474[(1)] = cljs.core.first((state_14162[(4)])));

} else {
throw ex__12010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15475 = state_14162;
state_14162 = G__15475;
continue;
} else {
return ret_value__12008__auto__;
}
break;
}
});
cljs$core$async$state_machine__12007__auto__ = function(state_14162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12007__auto____1.call(this,state_14162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12007__auto____0;
cljs$core$async$state_machine__12007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12007__auto____1;
return cljs$core$async$state_machine__12007__auto__;
})()
})();
var state__12068__auto__ = (function (){var statearr_14229 = f__12067__auto__();
(statearr_14229[(6)] = c__12066__auto___15349);

return statearr_14229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12068__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
