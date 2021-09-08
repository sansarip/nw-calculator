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
var _STAR_always_update_STAR__orig_val__29257 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29258 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29258);

try{var G__29259 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__29260 = container;
var G__29261 = (function (){
var _STAR_always_update_STAR__orig_val__29262 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29263 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29263);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29262);
}});
return reagent.dom.global$module$react_dom.render(G__29259,G__29260,G__29261);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29257);
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
var G__29265 = arguments.length;
switch (G__29265) {
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

var vec__29266 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29266,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29266,(1),null);
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

var seq__29270_29286 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__29271_29287 = null;
var count__29272_29288 = (0);
var i__29273_29289 = (0);
while(true){
if((i__29273_29289 < count__29272_29288)){
var vec__29280_29290 = chunk__29271_29287.cljs$core$IIndexed$_nth$arity$2(null,i__29273_29289);
var container_29291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29280_29290,(0),null);
var comp_29292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29280_29290,(1),null);
reagent.dom.re_render_component(comp_29292,container_29291);


var G__29293 = seq__29270_29286;
var G__29294 = chunk__29271_29287;
var G__29295 = count__29272_29288;
var G__29296 = (i__29273_29289 + (1));
seq__29270_29286 = G__29293;
chunk__29271_29287 = G__29294;
count__29272_29288 = G__29295;
i__29273_29289 = G__29296;
continue;
} else {
var temp__5753__auto___29297 = cljs.core.seq(seq__29270_29286);
if(temp__5753__auto___29297){
var seq__29270_29298__$1 = temp__5753__auto___29297;
if(cljs.core.chunked_seq_QMARK_(seq__29270_29298__$1)){
var c__4638__auto___29299 = cljs.core.chunk_first(seq__29270_29298__$1);
var G__29300 = cljs.core.chunk_rest(seq__29270_29298__$1);
var G__29301 = c__4638__auto___29299;
var G__29302 = cljs.core.count(c__4638__auto___29299);
var G__29303 = (0);
seq__29270_29286 = G__29300;
chunk__29271_29287 = G__29301;
count__29272_29288 = G__29302;
i__29273_29289 = G__29303;
continue;
} else {
var vec__29283_29304 = cljs.core.first(seq__29270_29298__$1);
var container_29305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283_29304,(0),null);
var comp_29306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283_29304,(1),null);
reagent.dom.re_render_component(comp_29306,container_29305);


var G__29307 = cljs.core.next(seq__29270_29298__$1);
var G__29308 = null;
var G__29309 = (0);
var G__29310 = (0);
seq__29270_29286 = G__29307;
chunk__29271_29287 = G__29308;
count__29272_29288 = G__29309;
i__29273_29289 = G__29310;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
