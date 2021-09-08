// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27740 = arguments.length;
var i__4819__auto___27741 = (0);
while(true){
if((i__4819__auto___27741 < len__4818__auto___27740)){
args__4824__auto__.push((arguments[i__4819__auto___27741]));

var G__27742 = (i__4819__auto___27741 + (1));
i__4819__auto___27741 = G__27742;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__27743__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__27743 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__27744__i = 0, G__27744__a = new Array(arguments.length -  0);
while (G__27744__i < G__27744__a.length) {G__27744__a[G__27744__i] = arguments[G__27744__i + 0]; ++G__27744__i;}
  children = new cljs.core.IndexedSeq(G__27744__a,0,null);
} 
return G__27743__delegate.call(this,children);};
G__27743.cljs$lang$maxFixedArity = 0;
G__27743.cljs$lang$applyTo = (function (arglist__27745){
var children = cljs.core.seq(arglist__27745);
return G__27743__delegate(children);
});
G__27743.cljs$core$IFn$_invoke$arity$variadic = G__27743__delegate;
return G__27743;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq27738){
var G__27739 = cljs.core.first(seq27738);
var seq27738__$1 = cljs.core.next(seq27738);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27739,seq27738__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__27746__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__27746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27747__i = 0, G__27747__a = new Array(arguments.length -  0);
while (G__27747__i < G__27747__a.length) {G__27747__a[G__27747__i] = arguments[G__27747__i + 0]; ++G__27747__i;}
  args = new cljs.core.IndexedSeq(G__27747__a,0,null);
} 
return G__27746__delegate.call(this,args);};
G__27746.cljs$lang$maxFixedArity = 0;
G__27746.cljs$lang$applyTo = (function (arglist__27748){
var args = cljs.core.seq(arglist__27748);
return G__27746__delegate(args);
});
G__27746.cljs$core$IFn$_invoke$arity$variadic = G__27746__delegate;
return G__27746;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27750 = arguments.length;
var i__4819__auto___27751 = (0);
while(true){
if((i__4819__auto___27751 < len__4818__auto___27750)){
args__4824__auto__.push((arguments[i__4819__auto___27751]));

var G__27752 = (i__4819__auto___27751 + (1));
i__4819__auto___27751 = G__27752;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq27749){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27749));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__27756 = arguments.length;
switch (G__27756) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___27758 = arguments.length;
var i__4819__auto___27759 = (0);
while(true){
if((i__4819__auto___27759 < len__4818__auto___27758)){
args_arr__4839__auto__.push((arguments[i__4819__auto___27759]));

var G__27760 = (i__4819__auto___27759 + (1));
i__4819__auto___27759 = G__27760;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq27754){
var G__27755 = cljs.core.first(seq27754);
var seq27754__$1 = cljs.core.next(seq27754);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27755,seq27754__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27763 = arguments.length;
var i__4819__auto___27764 = (0);
while(true){
if((i__4819__auto___27764 < len__4818__auto___27763)){
args__4824__auto__.push((arguments[i__4819__auto___27764]));

var G__27765 = (i__4819__auto___27764 + (1));
i__4819__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq27761){
var G__27762 = cljs.core.first(seq27761);
var seq27761__$1 = cljs.core.next(seq27761);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27762,seq27761__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27768 = arguments.length;
var i__4819__auto___27769 = (0);
while(true){
if((i__4819__auto___27769 < len__4818__auto___27768)){
args__4824__auto__.push((arguments[i__4819__auto___27769]));

var G__27770 = (i__4819__auto___27769 + (1));
i__4819__auto___27769 = G__27770;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(cljs.core.cst$kw$feature,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$feature_DASH_queries,feature_queries,cljs.core.cst$kw$rules,rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq27766){
var G__27767 = cljs.core.first(seq27766);
var seq27766__$1 = cljs.core.next(seq27766);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27767,seq27766__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27773 = arguments.length;
var i__4819__auto___27774 = (0);
while(true){
if((i__4819__auto___27774 < len__4818__auto___27773)){
args__4824__auto__.push((arguments[i__4819__auto___27774]));

var G__27775 = (i__4819__auto___27774 + (1));
i__4819__auto___27774 = G__27775;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq27771){
var G__27772 = cljs.core.first(seq27771);
var seq27771__$1 = cljs.core.next(seq27771);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27772,seq27771__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
