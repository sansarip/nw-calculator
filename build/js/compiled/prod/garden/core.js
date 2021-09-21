// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28779 = arguments.length;
var i__4819__auto___28780 = (0);
while(true){
if((i__4819__auto___28780 < len__4818__auto___28779)){
args__4824__auto__.push((arguments[i__4819__auto___28780]));

var G__28781 = (i__4819__auto___28780 + (1));
i__4819__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
}));

(garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.css.cljs$lang$applyTo = (function (seq28778){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28778));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28783 = arguments.length;
var i__4819__auto___28784 = (0);
while(true){
if((i__4819__auto___28784 < len__4818__auto___28783)){
args__4824__auto__.push((arguments[i__4819__auto___28784]));

var G__28785 = (i__4819__auto___28784 + (1));
i__4819__auto___28784 = G__28785;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
}));

(garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.style.cljs$lang$applyTo = (function (seq28782){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28782));
}));

