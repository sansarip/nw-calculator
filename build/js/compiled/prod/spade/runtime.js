// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('spade.runtime');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.core');
goog.require('garden.types');
if((typeof spade !== 'undefined') && (typeof spade.runtime !== 'undefined') && (typeof spade.runtime._STAR_injected_STAR_ !== 'undefined')){
} else {
spade.runtime._STAR_injected_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof spade !== 'undefined') && (typeof spade.runtime !== 'undefined') && (typeof spade.runtime._STAR_css_compile_flags_STAR_ !== 'undefined')){
} else {
spade.runtime._STAR_css_compile_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty_DASH_print_QMARK_,goog.DEBUG], null);
}
spade.runtime.__GT_css_var = (function spade$runtime$__GT_css_var(n){
return garden.types.__GT_CSSFunction("var",n);
});
spade.runtime.compile_css = (function spade$runtime$compile_css(elements){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spade.runtime._STAR_css_compile_flags_STAR_,elements], 0));
});
spade.runtime.perform_update_BANG_ = (function spade$runtime$perform_update_BANG_(obj,css){
return (cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(obj).innerHTML = css);
});
spade.runtime.update_BANG_ = (function spade$runtime$update_BANG_(id,css){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(spade.runtime._STAR_injected_STAR_,cljs.core.update,id,(function spade$runtime$update_BANG__$_update_injected_style(obj){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(obj),css)){
} else {
spade.runtime.perform_update_BANG_(obj,css);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.cst$kw$source,css);
}));
});
spade.runtime.inject_BANG_ = (function spade$runtime$inject_BANG_(id,css){
var head = document.head;
var element = (function (){var G__30611 = document.createElement("style");
G__30611.setAttribute("spade-id",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));

return G__30611;
})();
var obj = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$element,element,cljs.core.cst$kw$source,css,cljs.core.cst$kw$id,id], null);
if((!((head == null)))){
} else {
throw (new Error(["Assert failed: ","An head element is required in the dom to inject the style.","\n","(some? head)"].join('')));
}

head.appendChild(element);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(spade.runtime._STAR_injected_STAR_,cljs.core.assoc,id,obj);

return spade.runtime.perform_update_BANG_(obj,css);
});
spade.runtime.compose_names = (function spade$runtime$compose_names(p__30612){
var map__30613 = p__30612;
var map__30613__$1 = cljs.core.__destructure_map(map__30613);
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30613__$1,cljs.core.cst$kw$name);
var composed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30613__$1,cljs.core.cst$kw$composes);
if(cljs.core.not(composed)){
return style_name;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
if(typeof item === 'string'){
return item;
} else {
if(((cljs.core.map_QMARK_(item)) && (typeof cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(item) === 'string'))){
return cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(item);
} else {
throw (new Error(["Invalid argument to :composes key:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')));

}
}
}),((cljs.core.seq_QMARK_(composed))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(composed,style_name):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [composed,style_name], null))));
}
});
spade.runtime.ensure_style_BANG_ = (function spade$runtime$ensure_style_BANG_(mode,base_style_name,factory,params){
var map__30614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(factory,base_style_name,params,params);
var map__30614__$1 = cljs.core.__destructure_map(map__30614);
var info = map__30614__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,cljs.core.cst$kw$css);
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30614__$1,cljs.core.cst$kw$name);
var existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spade.runtime._STAR_injected_STAR_),style_name);
if(cljs.core.truth_(existing)){
spade.runtime.update_BANG_(style_name,css);
} else {
spade.runtime.inject_BANG_(style_name,css);
}

var G__30615 = mode;
var G__30615__$1 = (((G__30615 instanceof cljs.core.Keyword))?G__30615.fqn:null);
switch (G__30615__$1) {
case "attrs":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,spade.runtime.compose_names(info)], null);

break;
case "class":
case "keyframes":
return spade.runtime.compose_names(info);

break;
case "global":
return css;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30615__$1)].join('')));

}
});
