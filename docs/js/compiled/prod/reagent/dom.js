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
var _STAR_always_update_STAR__orig_val__29244 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29245 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29245);

try{var G__29246 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__29247 = container;
var G__29248 = (function (){
var _STAR_always_update_STAR__orig_val__29249 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29250 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29250);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29249);
}});
return reagent.dom.global$module$react_dom.render(G__29246,G__29247,G__29248);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29244);
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
var G__29252 = arguments.length;
switch (G__29252) {
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

var vec__29253 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(1),null);
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

var seq__29257_29273 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__29258_29274 = null;
var count__29259_29275 = (0);
var i__29260_29276 = (0);
while(true){
if((i__29260_29276 < count__29259_29275)){
var vec__29267_29277 = chunk__29258_29274.cljs$core$IIndexed$_nth$arity$2(null,i__29260_29276);
var container_29278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29267_29277,(0),null);
var comp_29279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29267_29277,(1),null);
reagent.dom.re_render_component(comp_29279,container_29278);


var G__29280 = seq__29257_29273;
var G__29281 = chunk__29258_29274;
var G__29282 = count__29259_29275;
var G__29283 = (i__29260_29276 + (1));
seq__29257_29273 = G__29280;
chunk__29258_29274 = G__29281;
count__29259_29275 = G__29282;
i__29260_29276 = G__29283;
continue;
} else {
var temp__5753__auto___29284 = cljs.core.seq(seq__29257_29273);
if(temp__5753__auto___29284){
var seq__29257_29285__$1 = temp__5753__auto___29284;
if(cljs.core.chunked_seq_QMARK_(seq__29257_29285__$1)){
var c__4638__auto___29286 = cljs.core.chunk_first(seq__29257_29285__$1);
var G__29287 = cljs.core.chunk_rest(seq__29257_29285__$1);
var G__29288 = c__4638__auto___29286;
var G__29289 = cljs.core.count(c__4638__auto___29286);
var G__29290 = (0);
seq__29257_29273 = G__29287;
chunk__29258_29274 = G__29288;
count__29259_29275 = G__29289;
i__29260_29276 = G__29290;
continue;
} else {
var vec__29270_29291 = cljs.core.first(seq__29257_29285__$1);
var container_29292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29270_29291,(0),null);
var comp_29293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29270_29291,(1),null);
reagent.dom.re_render_component(comp_29293,container_29292);


var G__29294 = cljs.core.next(seq__29257_29285__$1);
var G__29295 = null;
var G__29296 = (0);
var G__29297 = (0);
seq__29257_29273 = G__29294;
chunk__29258_29274 = G__29295;
count__29259_29275 = G__29296;
i__29260_29276 = G__29297;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
