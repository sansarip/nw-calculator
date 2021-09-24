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
var len__4818__auto___27780 = arguments.length;
var i__4819__auto___27781 = (0);
while(true){
if((i__4819__auto___27781 < len__4818__auto___27780)){
args__4824__auto__.push((arguments[i__4819__auto___27781]));

var G__27782 = (i__4819__auto___27781 + (1));
i__4819__auto___27781 = G__27782;
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
var G__27783__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__27783 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__27784__i = 0, G__27784__a = new Array(arguments.length -  0);
while (G__27784__i < G__27784__a.length) {G__27784__a[G__27784__i] = arguments[G__27784__i + 0]; ++G__27784__i;}
  children = new cljs.core.IndexedSeq(G__27784__a,0,null);
} 
return G__27783__delegate.call(this,children);};
G__27783.cljs$lang$maxFixedArity = 0;
G__27783.cljs$lang$applyTo = (function (arglist__27785){
var children = cljs.core.seq(arglist__27785);
return G__27783__delegate(children);
});
G__27783.cljs$core$IFn$_invoke$arity$variadic = G__27783__delegate;
return G__27783;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq27778){
var G__27779 = cljs.core.first(seq27778);
var seq27778__$1 = cljs.core.next(seq27778);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27779,seq27778__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__27786__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__27786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27787__i = 0, G__27787__a = new Array(arguments.length -  0);
while (G__27787__i < G__27787__a.length) {G__27787__a[G__27787__i] = arguments[G__27787__i + 0]; ++G__27787__i;}
  args = new cljs.core.IndexedSeq(G__27787__a,0,null);
} 
return G__27786__delegate.call(this,args);};
G__27786.cljs$lang$maxFixedArity = 0;
G__27786.cljs$lang$applyTo = (function (arglist__27788){
var args = cljs.core.seq(arglist__27788);
return G__27786__delegate(args);
});
G__27786.cljs$core$IFn$_invoke$arity$variadic = G__27786__delegate;
return G__27786;
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
var len__4818__auto___27790 = arguments.length;
var i__4819__auto___27791 = (0);
while(true){
if((i__4819__auto___27791 < len__4818__auto___27790)){
args__4824__auto__.push((arguments[i__4819__auto___27791]));

var G__27792 = (i__4819__auto___27791 + (1));
i__4819__auto___27791 = G__27792;
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
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq27789){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27789));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__27796 = arguments.length;
switch (G__27796) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___27798 = arguments.length;
var i__4819__auto___27799 = (0);
while(true){
if((i__4819__auto___27799 < len__4818__auto___27798)){
args_arr__4839__auto__.push((arguments[i__4819__auto___27799]));

var G__27800 = (i__4819__auto___27799 + (1));
i__4819__auto___27799 = G__27800;
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
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq27794){
var G__27795 = cljs.core.first(seq27794);
var seq27794__$1 = cljs.core.next(seq27794);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27795,seq27794__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27803 = arguments.length;
var i__4819__auto___27804 = (0);
while(true){
if((i__4819__auto___27804 < len__4818__auto___27803)){
args__4824__auto__.push((arguments[i__4819__auto___27804]));

var G__27805 = (i__4819__auto___27804 + (1));
i__4819__auto___27804 = G__27805;
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
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq27801){
var G__27802 = cljs.core.first(seq27801);
var seq27801__$1 = cljs.core.next(seq27801);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27802,seq27801__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27808 = arguments.length;
var i__4819__auto___27809 = (0);
while(true){
if((i__4819__auto___27809 < len__4818__auto___27808)){
args__4824__auto__.push((arguments[i__4819__auto___27809]));

var G__27810 = (i__4819__auto___27809 + (1));
i__4819__auto___27809 = G__27810;
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
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq27806){
var G__27807 = cljs.core.first(seq27806);
var seq27806__$1 = cljs.core.next(seq27806);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27807,seq27806__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27813 = arguments.length;
var i__4819__auto___27814 = (0);
while(true){
if((i__4819__auto___27814 < len__4818__auto___27813)){
args__4824__auto__.push((arguments[i__4819__auto___27814]));

var G__27815 = (i__4819__auto___27814 + (1));
i__4819__auto___27814 = G__27815;
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
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq27811){
var G__27812 = cljs.core.first(seq27811);
var seq27811__$1 = cljs.core.next(seq27811);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27812,seq27811__$1);
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
