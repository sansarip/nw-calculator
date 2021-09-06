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
var _STAR_always_update_STAR__orig_val__29241 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29242 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29242);

try{var G__29243 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__29244 = container;
var G__29245 = (function (){
var _STAR_always_update_STAR__orig_val__29246 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29247 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29247);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29246);
}});
return reagent.dom.global$module$react_dom.render(G__29243,G__29244,G__29245);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29241);
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
var G__29249 = arguments.length;
switch (G__29249) {
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

var vec__29250 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29250,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29250,(1),null);
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

var seq__29254_29270 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__29255_29271 = null;
var count__29256_29272 = (0);
var i__29257_29273 = (0);
while(true){
if((i__29257_29273 < count__29256_29272)){
var vec__29264_29274 = chunk__29255_29271.cljs$core$IIndexed$_nth$arity$2(null,i__29257_29273);
var container_29275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264_29274,(0),null);
var comp_29276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264_29274,(1),null);
reagent.dom.re_render_component(comp_29276,container_29275);


var G__29277 = seq__29254_29270;
var G__29278 = chunk__29255_29271;
var G__29279 = count__29256_29272;
var G__29280 = (i__29257_29273 + (1));
seq__29254_29270 = G__29277;
chunk__29255_29271 = G__29278;
count__29256_29272 = G__29279;
i__29257_29273 = G__29280;
continue;
} else {
var temp__5735__auto___29281 = cljs.core.seq(seq__29254_29270);
if(temp__5735__auto___29281){
var seq__29254_29282__$1 = temp__5735__auto___29281;
if(cljs.core.chunked_seq_QMARK_(seq__29254_29282__$1)){
var c__4638__auto___29283 = cljs.core.chunk_first(seq__29254_29282__$1);
var G__29284 = cljs.core.chunk_rest(seq__29254_29282__$1);
var G__29285 = c__4638__auto___29283;
var G__29286 = cljs.core.count(c__4638__auto___29283);
var G__29287 = (0);
seq__29254_29270 = G__29284;
chunk__29255_29271 = G__29285;
count__29256_29272 = G__29286;
i__29257_29273 = G__29287;
continue;
} else {
var vec__29267_29288 = cljs.core.first(seq__29254_29282__$1);
var container_29289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29267_29288,(0),null);
var comp_29290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29267_29288,(1),null);
reagent.dom.re_render_component(comp_29290,container_29289);


var G__29291 = cljs.core.next(seq__29254_29282__$1);
var G__29292 = null;
var G__29293 = (0);
var G__29294 = (0);
seq__29254_29270 = G__29291;
chunk__29255_29271 = G__29292;
count__29256_29272 = G__29293;
i__29257_29273 = G__29294;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
