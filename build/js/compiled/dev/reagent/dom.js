// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__30855 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__30856 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__30856);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__30857 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__30858 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__30858);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__30857);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__30855);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var G__30860 = arguments.length;
switch (G__30860) {
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
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__30861 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__30861,(0),null);
var callback = cljs.core.nth.call(null,vec__30861,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
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
reagent.ratom.flush_BANG_.call(null);

var seq__30865_30881 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__30866_30882 = null;
var count__30867_30883 = (0);
var i__30868_30884 = (0);
while(true){
if((i__30868_30884 < count__30867_30883)){
var vec__30875_30885 = cljs.core._nth.call(null,chunk__30866_30882,i__30868_30884);
var container_30886 = cljs.core.nth.call(null,vec__30875_30885,(0),null);
var comp_30887 = cljs.core.nth.call(null,vec__30875_30885,(1),null);
reagent.dom.re_render_component.call(null,comp_30887,container_30886);


var G__30888 = seq__30865_30881;
var G__30889 = chunk__30866_30882;
var G__30890 = count__30867_30883;
var G__30891 = (i__30868_30884 + (1));
seq__30865_30881 = G__30888;
chunk__30866_30882 = G__30889;
count__30867_30883 = G__30890;
i__30868_30884 = G__30891;
continue;
} else {
var temp__5753__auto___30892 = cljs.core.seq.call(null,seq__30865_30881);
if(temp__5753__auto___30892){
var seq__30865_30893__$1 = temp__5753__auto___30892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30865_30893__$1)){
var c__4638__auto___30894 = cljs.core.chunk_first.call(null,seq__30865_30893__$1);
var G__30895 = cljs.core.chunk_rest.call(null,seq__30865_30893__$1);
var G__30896 = c__4638__auto___30894;
var G__30897 = cljs.core.count.call(null,c__4638__auto___30894);
var G__30898 = (0);
seq__30865_30881 = G__30895;
chunk__30866_30882 = G__30896;
count__30867_30883 = G__30897;
i__30868_30884 = G__30898;
continue;
} else {
var vec__30878_30899 = cljs.core.first.call(null,seq__30865_30893__$1);
var container_30900 = cljs.core.nth.call(null,vec__30878_30899,(0),null);
var comp_30901 = cljs.core.nth.call(null,vec__30878_30899,(1),null);
reagent.dom.re_render_component.call(null,comp_30901,container_30900);


var G__30902 = cljs.core.next.call(null,seq__30865_30893__$1);
var G__30903 = null;
var G__30904 = (0);
var G__30905 = (0);
seq__30865_30881 = G__30902;
chunk__30866_30882 = G__30903;
count__30867_30883 = G__30904;
i__30868_30884 = G__30905;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
