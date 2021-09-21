// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.input');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__38893 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38894 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38894);

try{return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__38895 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38896 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38896);

try{cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38895);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38893);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp.call(null,comp,container,null);
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
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__38898 = arguments.length;
switch (G__38898) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.call(null,comp,container,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);

var vec__38899 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__38899,(0),null);
var callback = cljs.core.nth.call(null,vec__38899,(1),null);
var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp.call(null,f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom.findDOMNode(this$);
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
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);

var seq__38903_38919 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__38904_38920 = null;
var count__38905_38921 = (0);
var i__38906_38922 = (0);
while(true){
if((i__38906_38922 < count__38905_38921)){
var vec__38913_38923 = cljs.core._nth.call(null,chunk__38904_38920,i__38906_38922);
var container_38924 = cljs.core.nth.call(null,vec__38913_38923,(0),null);
var comp_38925 = cljs.core.nth.call(null,vec__38913_38923,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component.call(null,comp_38925,container_38924);


var G__38926 = seq__38903_38919;
var G__38927 = chunk__38904_38920;
var G__38928 = count__38905_38921;
var G__38929 = (i__38906_38922 + (1));
seq__38903_38919 = G__38926;
chunk__38904_38920 = G__38927;
count__38905_38921 = G__38928;
i__38906_38922 = G__38929;
continue;
} else {
var temp__5753__auto___38930 = cljs.core.seq.call(null,seq__38903_38919);
if(temp__5753__auto___38930){
var seq__38903_38931__$1 = temp__5753__auto___38930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38903_38931__$1)){
var c__4638__auto___38932 = cljs.core.chunk_first.call(null,seq__38903_38931__$1);
var G__38933 = cljs.core.chunk_rest.call(null,seq__38903_38931__$1);
var G__38934 = c__4638__auto___38932;
var G__38935 = cljs.core.count.call(null,c__4638__auto___38932);
var G__38936 = (0);
seq__38903_38919 = G__38933;
chunk__38904_38920 = G__38934;
count__38905_38921 = G__38935;
i__38906_38922 = G__38936;
continue;
} else {
var vec__38916_38937 = cljs.core.first.call(null,seq__38903_38931__$1);
var container_38938 = cljs.core.nth.call(null,vec__38916_38937,(0),null);
var comp_38939 = cljs.core.nth.call(null,vec__38916_38937,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component.call(null,comp_38939,container_38938);


var G__38940 = cljs.core.next.call(null,seq__38903_38931__$1);
var G__38941 = null;
var G__38942 = (0);
var G__38943 = (0);
seq__38903_38919 = G__38940;
chunk__38904_38920 = G__38941;
count__38905_38921 = G__38942;
i__38906_38922 = G__38943;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
