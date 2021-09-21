// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$core$css(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32684 = arguments.length;
var i__4819__auto___32685 = (0);
while(true){
if((i__4819__auto___32685 < len__4818__auto___32684)){
args__4824__auto__.push((arguments[i__4819__auto___32685]));

var G__32686 = (i__4819__auto___32685 + (1));
i__4819__auto___32685 = G__32686;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler.compile_css,rules);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$lang$applyTo = (function (seq32683){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32683));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$core$style(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32688 = arguments.length;
var i__4819__auto___32689 = (0);
while(true){
if((i__4819__auto___32689 < len__4818__auto___32688)){
args__4824__auto__.push((arguments[i__4819__auto___32689]));

var G__32690 = (i__4819__auto___32689 + (1));
i__4819__auto___32689 = G__32690;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler.compile_style.call(null,maps);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$lang$applyTo = (function (seq32687){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32687));
}));


//# sourceMappingURL=core.js.map
