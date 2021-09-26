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
var _STAR_always_update_STAR__orig_val__31283 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31284 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31284);

try{var G__31285 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__31286 = container;
var G__31287 = (function (){
var _STAR_always_update_STAR__orig_val__31288 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31289 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31289);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31288);
}});
return reagent.dom.global$module$react_dom.render(G__31285,G__31286,G__31287);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31283);
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
var G__31291 = arguments.length;
switch (G__31291) {
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

var vec__31292 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31292,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31292,(1),null);
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

var seq__31296_31312 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__31297_31313 = null;
var count__31298_31314 = (0);
var i__31299_31315 = (0);
while(true){
if((i__31299_31315 < count__31298_31314)){
var vec__31306_31316 = chunk__31297_31313.cljs$core$IIndexed$_nth$arity$2(null,i__31299_31315);
var container_31317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306_31316,(0),null);
var comp_31318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306_31316,(1),null);
reagent.dom.re_render_component(comp_31318,container_31317);


var G__31319 = seq__31296_31312;
var G__31320 = chunk__31297_31313;
var G__31321 = count__31298_31314;
var G__31322 = (i__31299_31315 + (1));
seq__31296_31312 = G__31319;
chunk__31297_31313 = G__31320;
count__31298_31314 = G__31321;
i__31299_31315 = G__31322;
continue;
} else {
var temp__5753__auto___31323 = cljs.core.seq(seq__31296_31312);
if(temp__5753__auto___31323){
var seq__31296_31324__$1 = temp__5753__auto___31323;
if(cljs.core.chunked_seq_QMARK_(seq__31296_31324__$1)){
var c__4638__auto___31325 = cljs.core.chunk_first(seq__31296_31324__$1);
var G__31326 = cljs.core.chunk_rest(seq__31296_31324__$1);
var G__31327 = c__4638__auto___31325;
var G__31328 = cljs.core.count(c__4638__auto___31325);
var G__31329 = (0);
seq__31296_31312 = G__31326;
chunk__31297_31313 = G__31327;
count__31298_31314 = G__31328;
i__31299_31315 = G__31329;
continue;
} else {
var vec__31309_31330 = cljs.core.first(seq__31296_31324__$1);
var container_31331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31309_31330,(0),null);
var comp_31332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31309_31330,(1),null);
reagent.dom.re_render_component(comp_31332,container_31331);


var G__31333 = cljs.core.next(seq__31296_31324__$1);
var G__31334 = null;
var G__31335 = (0);
var G__31336 = (0);
seq__31296_31312 = G__31333;
chunk__31297_31313 = G__31334;
count__31298_31314 = G__31335;
i__31299_31315 = G__31336;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
