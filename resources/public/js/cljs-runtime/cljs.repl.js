goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17217){
var map__17218 = p__17217;
var map__17218__$1 = cljs.core.__destructure_map(map__17218);
var m = map__17218__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17218__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17218__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17219_17431 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17220_17432 = null;
var count__17221_17433 = (0);
var i__17222_17434 = (0);
while(true){
if((i__17222_17434 < count__17221_17433)){
var f_17435 = chunk__17220_17432.cljs$core$IIndexed$_nth$arity$2(null,i__17222_17434);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17435], 0));


var G__17436 = seq__17219_17431;
var G__17437 = chunk__17220_17432;
var G__17438 = count__17221_17433;
var G__17439 = (i__17222_17434 + (1));
seq__17219_17431 = G__17436;
chunk__17220_17432 = G__17437;
count__17221_17433 = G__17438;
i__17222_17434 = G__17439;
continue;
} else {
var temp__5804__auto___17440 = cljs.core.seq(seq__17219_17431);
if(temp__5804__auto___17440){
var seq__17219_17441__$1 = temp__5804__auto___17440;
if(cljs.core.chunked_seq_QMARK_(seq__17219_17441__$1)){
var c__5568__auto___17442 = cljs.core.chunk_first(seq__17219_17441__$1);
var G__17443 = cljs.core.chunk_rest(seq__17219_17441__$1);
var G__17444 = c__5568__auto___17442;
var G__17445 = cljs.core.count(c__5568__auto___17442);
var G__17446 = (0);
seq__17219_17431 = G__17443;
chunk__17220_17432 = G__17444;
count__17221_17433 = G__17445;
i__17222_17434 = G__17446;
continue;
} else {
var f_17447 = cljs.core.first(seq__17219_17441__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17447], 0));


var G__17448 = cljs.core.next(seq__17219_17441__$1);
var G__17449 = null;
var G__17450 = (0);
var G__17451 = (0);
seq__17219_17431 = G__17448;
chunk__17220_17432 = G__17449;
count__17221_17433 = G__17450;
i__17222_17434 = G__17451;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17452 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17452], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17452)))?cljs.core.second(arglists_17452):arglists_17452)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17226_17453 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17227_17454 = null;
var count__17228_17455 = (0);
var i__17229_17456 = (0);
while(true){
if((i__17229_17456 < count__17228_17455)){
var vec__17242_17457 = chunk__17227_17454.cljs$core$IIndexed$_nth$arity$2(null,i__17229_17456);
var name_17458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17242_17457,(0),null);
var map__17245_17459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17242_17457,(1),null);
var map__17245_17460__$1 = cljs.core.__destructure_map(map__17245_17459);
var doc_17461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17245_17460__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17245_17460__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17458], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17462], 0));

if(cljs.core.truth_(doc_17461)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17461], 0));
} else {
}


var G__17469 = seq__17226_17453;
var G__17470 = chunk__17227_17454;
var G__17471 = count__17228_17455;
var G__17472 = (i__17229_17456 + (1));
seq__17226_17453 = G__17469;
chunk__17227_17454 = G__17470;
count__17228_17455 = G__17471;
i__17229_17456 = G__17472;
continue;
} else {
var temp__5804__auto___17473 = cljs.core.seq(seq__17226_17453);
if(temp__5804__auto___17473){
var seq__17226_17474__$1 = temp__5804__auto___17473;
if(cljs.core.chunked_seq_QMARK_(seq__17226_17474__$1)){
var c__5568__auto___17475 = cljs.core.chunk_first(seq__17226_17474__$1);
var G__17476 = cljs.core.chunk_rest(seq__17226_17474__$1);
var G__17477 = c__5568__auto___17475;
var G__17478 = cljs.core.count(c__5568__auto___17475);
var G__17479 = (0);
seq__17226_17453 = G__17476;
chunk__17227_17454 = G__17477;
count__17228_17455 = G__17478;
i__17229_17456 = G__17479;
continue;
} else {
var vec__17246_17480 = cljs.core.first(seq__17226_17474__$1);
var name_17481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246_17480,(0),null);
var map__17249_17482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246_17480,(1),null);
var map__17249_17483__$1 = cljs.core.__destructure_map(map__17249_17482);
var doc_17484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17249_17483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17249_17483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17481], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17485], 0));

if(cljs.core.truth_(doc_17484)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17484], 0));
} else {
}


var G__17486 = cljs.core.next(seq__17226_17474__$1);
var G__17487 = null;
var G__17488 = (0);
var G__17489 = (0);
seq__17226_17453 = G__17486;
chunk__17227_17454 = G__17487;
count__17228_17455 = G__17488;
i__17229_17456 = G__17489;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17253 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17254 = null;
var count__17255 = (0);
var i__17256 = (0);
while(true){
if((i__17256 < count__17255)){
var role = chunk__17254.cljs$core$IIndexed$_nth$arity$2(null,i__17256);
var temp__5804__auto___17490__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17490__$1)){
var spec_17492 = temp__5804__auto___17490__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17492)], 0));
} else {
}


var G__17493 = seq__17253;
var G__17494 = chunk__17254;
var G__17495 = count__17255;
var G__17496 = (i__17256 + (1));
seq__17253 = G__17493;
chunk__17254 = G__17494;
count__17255 = G__17495;
i__17256 = G__17496;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17253);
if(temp__5804__auto____$1){
var seq__17253__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17253__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17253__$1);
var G__17497 = cljs.core.chunk_rest(seq__17253__$1);
var G__17498 = c__5568__auto__;
var G__17499 = cljs.core.count(c__5568__auto__);
var G__17500 = (0);
seq__17253 = G__17497;
chunk__17254 = G__17498;
count__17255 = G__17499;
i__17256 = G__17500;
continue;
} else {
var role = cljs.core.first(seq__17253__$1);
var temp__5804__auto___17501__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17501__$2)){
var spec_17502 = temp__5804__auto___17501__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17502)], 0));
} else {
}


var G__17503 = cljs.core.next(seq__17253__$1);
var G__17504 = null;
var G__17505 = (0);
var G__17506 = (0);
seq__17253 = G__17503;
chunk__17254 = G__17504;
count__17255 = G__17505;
i__17256 = G__17506;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__17511 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__17512 = cljs.core.ex_cause(t);
via = G__17511;
t = G__17512;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17323 = datafied_throwable;
var map__17323__$1 = cljs.core.__destructure_map(map__17323);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17323__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17323__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17324 = cljs.core.last(via);
var map__17324__$1 = cljs.core.__destructure_map(map__17324);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17324__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17324__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17324__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17325 = data;
var map__17325__$1 = cljs.core.__destructure_map(map__17325);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17325__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17326 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17326__$1 = cljs.core.__destructure_map(map__17326);
var top_data = map__17326__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17326__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17360 = phase;
var G__17360__$1 = (((G__17360 instanceof cljs.core.Keyword))?G__17360.fqn:null);
switch (G__17360__$1) {
case "read-source":
var map__17362 = data;
var map__17362__$1 = cljs.core.__destructure_map(map__17362);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17362__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17362__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17363 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17363__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17363,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17363);
var G__17363__$2 = (cljs.core.truth_((function (){var fexpr__17364 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17364.cljs$core$IFn$_invoke$arity$1 ? fexpr__17364.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17364.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17363__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17363__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17363__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17366 = top_data;
var G__17366__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17366,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17366);
var G__17366__$2 = (cljs.core.truth_((function (){var fexpr__17367 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17367.cljs$core$IFn$_invoke$arity$1 ? fexpr__17367.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17367.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17366__$1);
var G__17366__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17366__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17366__$2);
var G__17366__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17366__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17366__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17366__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17366__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17368 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(3),null);
var G__17371 = top_data;
var G__17371__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17371,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17371);
var G__17371__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17371__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17371__$1);
var G__17371__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17371__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17371__$2);
var G__17371__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17371__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17371__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17371__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17371__$4;
}

break;
case "execution":
var vec__17373 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17373,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17373,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17373,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17373,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17302_SHARP_){
var or__5045__auto__ = (p1__17302_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__17377 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17377.cljs$core$IFn$_invoke$arity$1 ? fexpr__17377.cljs$core$IFn$_invoke$arity$1(p1__17302_SHARP_) : fexpr__17377.call(null,p1__17302_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__17378 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17378__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17378,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17378);
var G__17378__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17378__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17378__$1);
var G__17378__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17378__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17378__$2);
var G__17378__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17378__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17378__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17378__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17378__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17360__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17383){
var map__17384 = p__17383;
var map__17384__$1 = cljs.core.__destructure_map(map__17384);
var triage_data = map__17384__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17393 = phase;
var G__17393__$1 = (((G__17393 instanceof cljs.core.Keyword))?G__17393.fqn:null);
switch (G__17393__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17394 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17395 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17396 = loc;
var G__17397 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17398_17538 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17399_17539 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17400_17540 = true;
var _STAR_print_fn_STAR__temp_val__17401_17541 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17400_17540);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17401_17541);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17381_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17381_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17399_17539);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17398_17538);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17394,G__17395,G__17396,G__17397) : format.call(null,G__17394,G__17395,G__17396,G__17397));

break;
case "macroexpansion":
var G__17402 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17403 = cause_type;
var G__17404 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17405 = loc;
var G__17406 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17402,G__17403,G__17404,G__17405,G__17406) : format.call(null,G__17402,G__17403,G__17404,G__17405,G__17406));

break;
case "compile-syntax-check":
var G__17407 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17408 = cause_type;
var G__17409 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17410 = loc;
var G__17411 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17407,G__17408,G__17409,G__17410,G__17411) : format.call(null,G__17407,G__17408,G__17409,G__17410,G__17411));

break;
case "compilation":
var G__17412 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17413 = cause_type;
var G__17414 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17415 = loc;
var G__17416 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17412,G__17413,G__17414,G__17415,G__17416) : format.call(null,G__17412,G__17413,G__17414,G__17415,G__17416));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17417 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17418 = symbol;
var G__17419 = loc;
var G__17420 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17421_17542 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17422_17543 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17423_17544 = true;
var _STAR_print_fn_STAR__temp_val__17424_17545 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17423_17544);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17424_17545);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17382_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17382_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17422_17543);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17421_17542);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17417,G__17418,G__17419,G__17420) : format.call(null,G__17417,G__17418,G__17419,G__17420));
} else {
var G__17425 = "Execution error%s at %s(%s).\n%s\n";
var G__17426 = cause_type;
var G__17427 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17428 = loc;
var G__17429 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17425,G__17426,G__17427,G__17428,G__17429) : format.call(null,G__17425,G__17426,G__17427,G__17428,G__17429));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17393__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
