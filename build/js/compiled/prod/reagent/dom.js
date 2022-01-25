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
var _STAR_always_update_STAR__orig_val__31372 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31373 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31373);

try{var G__31374 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__31375 = container;
var G__31376 = (function (){
var _STAR_always_update_STAR__orig_val__31377 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31378 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31378);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31377);
}});
return reagent.dom.global$module$react_dom.render(G__31374,G__31375,G__31376);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31372);
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
var G__31380 = arguments.length;
switch (G__31380) {
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

var vec__31381 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31381,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31381,(1),null);
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

var seq__31385_31401 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__31386_31402 = null;
var count__31387_31403 = (0);
var i__31388_31404 = (0);
while(true){
if((i__31388_31404 < count__31387_31403)){
var vec__31395_31405 = chunk__31386_31402.cljs$core$IIndexed$_nth$arity$2(null,i__31388_31404);
var container_31406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31395_31405,(0),null);
var comp_31407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31395_31405,(1),null);
reagent.dom.re_render_component(comp_31407,container_31406);


var G__31408 = seq__31385_31401;
var G__31409 = chunk__31386_31402;
var G__31410 = count__31387_31403;
var G__31411 = (i__31388_31404 + (1));
seq__31385_31401 = G__31408;
chunk__31386_31402 = G__31409;
count__31387_31403 = G__31410;
i__31388_31404 = G__31411;
continue;
} else {
var temp__5753__auto___31412 = cljs.core.seq(seq__31385_31401);
if(temp__5753__auto___31412){
var seq__31385_31413__$1 = temp__5753__auto___31412;
if(cljs.core.chunked_seq_QMARK_(seq__31385_31413__$1)){
var c__4638__auto___31414 = cljs.core.chunk_first(seq__31385_31413__$1);
var G__31415 = cljs.core.chunk_rest(seq__31385_31413__$1);
var G__31416 = c__4638__auto___31414;
var G__31417 = cljs.core.count(c__4638__auto___31414);
var G__31418 = (0);
seq__31385_31401 = G__31415;
chunk__31386_31402 = G__31416;
count__31387_31403 = G__31417;
i__31388_31404 = G__31418;
continue;
} else {
var vec__31398_31419 = cljs.core.first(seq__31385_31413__$1);
var container_31420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31398_31419,(0),null);
var comp_31421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31398_31419,(1),null);
reagent.dom.re_render_component(comp_31421,container_31420);


var G__31422 = cljs.core.next(seq__31385_31413__$1);
var G__31423 = null;
var G__31424 = (0);
var G__31425 = (0);
seq__31385_31401 = G__31422;
chunk__31386_31402 = G__31423;
count__31387_31403 = G__31424;
i__31388_31404 = G__31425;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
