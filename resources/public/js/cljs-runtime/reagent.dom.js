goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11735 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11736 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11736);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__11737 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11738 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11738);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11737);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11735);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11743 = arguments.length;
switch (G__11743) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11748 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11755_11776 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11756_11777 = null;
var count__11757_11778 = (0);
var i__11758_11779 = (0);
while(true){
if((i__11758_11779 < count__11757_11778)){
var vec__11769_11780 = chunk__11756_11777.cljs$core$IIndexed$_nth$arity$2(null,i__11758_11779);
var container_11781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11769_11780,(0),null);
var comp_11782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11769_11780,(1),null);
reagent.dom.re_render_component(comp_11782,container_11781);


var G__11783 = seq__11755_11776;
var G__11784 = chunk__11756_11777;
var G__11785 = count__11757_11778;
var G__11786 = (i__11758_11779 + (1));
seq__11755_11776 = G__11783;
chunk__11756_11777 = G__11784;
count__11757_11778 = G__11785;
i__11758_11779 = G__11786;
continue;
} else {
var temp__5804__auto___11787 = cljs.core.seq(seq__11755_11776);
if(temp__5804__auto___11787){
var seq__11755_11788__$1 = temp__5804__auto___11787;
if(cljs.core.chunked_seq_QMARK_(seq__11755_11788__$1)){
var c__5568__auto___11789 = cljs.core.chunk_first(seq__11755_11788__$1);
var G__11790 = cljs.core.chunk_rest(seq__11755_11788__$1);
var G__11791 = c__5568__auto___11789;
var G__11792 = cljs.core.count(c__5568__auto___11789);
var G__11793 = (0);
seq__11755_11776 = G__11790;
chunk__11756_11777 = G__11791;
count__11757_11778 = G__11792;
i__11758_11779 = G__11793;
continue;
} else {
var vec__11772_11794 = cljs.core.first(seq__11755_11788__$1);
var container_11795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11772_11794,(0),null);
var comp_11796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11772_11794,(1),null);
reagent.dom.re_render_component(comp_11796,container_11795);


var G__11797 = cljs.core.next(seq__11755_11788__$1);
var G__11798 = null;
var G__11799 = (0);
var G__11800 = (0);
seq__11755_11776 = G__11797;
chunk__11756_11777 = G__11798;
count__11757_11778 = G__11799;
i__11758_11779 = G__11800;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
