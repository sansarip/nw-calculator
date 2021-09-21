// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__29392 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29393 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29393);

try{var G__29394 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__29395 = container;
var G__29396 = (function (){
var _STAR_always_update_STAR__orig_val__29397 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29398 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29398);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29397);
}});
return reagent.dom.global$module$react_dom.render(G__29394,G__29395,G__29396);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29392);
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
var G__29400 = arguments.length;
switch (G__29400) {
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

var vec__29401 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29401,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29401,(1),null);
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
return reagent.dom.global$module$react_dom.findDOMNode(this$);
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

var seq__29405_29421 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__29406_29422 = null;
var count__29407_29423 = (0);
var i__29408_29424 = (0);
while(true){
if((i__29408_29424 < count__29407_29423)){
var vec__29415_29425 = chunk__29406_29422.cljs$core$IIndexed$_nth$arity$2(null,i__29408_29424);
var container_29426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415_29425,(0),null);
var comp_29427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415_29425,(1),null);
reagent.dom.re_render_component(comp_29427,container_29426);


var G__29428 = seq__29405_29421;
var G__29429 = chunk__29406_29422;
var G__29430 = count__29407_29423;
var G__29431 = (i__29408_29424 + (1));
seq__29405_29421 = G__29428;
chunk__29406_29422 = G__29429;
count__29407_29423 = G__29430;
i__29408_29424 = G__29431;
continue;
} else {
var temp__5753__auto___29432 = cljs.core.seq(seq__29405_29421);
if(temp__5753__auto___29432){
var seq__29405_29433__$1 = temp__5753__auto___29432;
if(cljs.core.chunked_seq_QMARK_(seq__29405_29433__$1)){
var c__4638__auto___29434 = cljs.core.chunk_first(seq__29405_29433__$1);
var G__29435 = cljs.core.chunk_rest(seq__29405_29433__$1);
var G__29436 = c__4638__auto___29434;
var G__29437 = cljs.core.count(c__4638__auto___29434);
var G__29438 = (0);
seq__29405_29421 = G__29435;
chunk__29406_29422 = G__29436;
count__29407_29423 = G__29437;
i__29408_29424 = G__29438;
continue;
} else {
var vec__29418_29439 = cljs.core.first(seq__29405_29433__$1);
var container_29440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29418_29439,(0),null);
var comp_29441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29418_29439,(1),null);
reagent.dom.re_render_component(comp_29441,container_29440);


var G__29442 = cljs.core.next(seq__29405_29433__$1);
var G__29443 = null;
var G__29444 = (0);
var G__29445 = (0);
seq__29405_29421 = G__29442;
chunk__29406_29422 = G__29443;
count__29407_29423 = G__29444;
i__29408_29424 = G__29445;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
