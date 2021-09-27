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
var _STAR_always_update_STAR__orig_val__31295 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31296 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31296);

try{var G__31297 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__31298 = container;
var G__31299 = (function (){
var _STAR_always_update_STAR__orig_val__31300 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31301 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31301);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31300);
}});
return reagent.dom.global$module$react_dom.render(G__31297,G__31298,G__31299);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31295);
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
var G__31303 = arguments.length;
switch (G__31303) {
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

var vec__31304 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31304,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31304,(1),null);
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

var seq__31308_31324 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__31309_31325 = null;
var count__31310_31326 = (0);
var i__31311_31327 = (0);
while(true){
if((i__31311_31327 < count__31310_31326)){
var vec__31318_31328 = chunk__31309_31325.cljs$core$IIndexed$_nth$arity$2(null,i__31311_31327);
var container_31329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31318_31328,(0),null);
var comp_31330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31318_31328,(1),null);
reagent.dom.re_render_component(comp_31330,container_31329);


var G__31331 = seq__31308_31324;
var G__31332 = chunk__31309_31325;
var G__31333 = count__31310_31326;
var G__31334 = (i__31311_31327 + (1));
seq__31308_31324 = G__31331;
chunk__31309_31325 = G__31332;
count__31310_31326 = G__31333;
i__31311_31327 = G__31334;
continue;
} else {
var temp__5753__auto___31335 = cljs.core.seq(seq__31308_31324);
if(temp__5753__auto___31335){
var seq__31308_31336__$1 = temp__5753__auto___31335;
if(cljs.core.chunked_seq_QMARK_(seq__31308_31336__$1)){
var c__4638__auto___31337 = cljs.core.chunk_first(seq__31308_31336__$1);
var G__31338 = cljs.core.chunk_rest(seq__31308_31336__$1);
var G__31339 = c__4638__auto___31337;
var G__31340 = cljs.core.count(c__4638__auto___31337);
var G__31341 = (0);
seq__31308_31324 = G__31338;
chunk__31309_31325 = G__31339;
count__31310_31326 = G__31340;
i__31311_31327 = G__31341;
continue;
} else {
var vec__31321_31342 = cljs.core.first(seq__31308_31336__$1);
var container_31343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31321_31342,(0),null);
var comp_31344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31321_31342,(1),null);
reagent.dom.re_render_component(comp_31344,container_31343);


var G__31345 = cljs.core.next(seq__31308_31336__$1);
var G__31346 = null;
var G__31347 = (0);
var G__31348 = (0);
seq__31308_31324 = G__31345;
chunk__31309_31325 = G__31346;
count__31310_31326 = G__31347;
i__31311_31327 = G__31348;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
