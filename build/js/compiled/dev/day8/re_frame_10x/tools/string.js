// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.tools.string');
goog.require('cljs.core');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39112 = arguments.length;
var i__4819__auto___39113 = (0);
while(true){
if((i__4819__auto___39113 < len__4818__auto___39112)){
args__4824__auto__.push((arguments[i__4819__auto___39113]));

var G__39114 = (i__4819__auto___39113 + (1));
i__4819__auto___39113 = G__39114;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39108){
var vec__39109 = p__39108;
var plural = cljs.core.nth.call(null,vec__39109,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq39105){
var G__39106 = cljs.core.first.call(null,seq39105);
var seq39105__$1 = cljs.core.next.call(null,seq39105);
var G__39107 = cljs.core.first.call(null,seq39105__$1);
var seq39105__$2 = cljs.core.next.call(null,seq39105__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39106,G__39107,seq39105__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39122 = arguments.length;
var i__4819__auto___39123 = (0);
while(true){
if((i__4819__auto___39123 < len__4818__auto___39122)){
args__4824__auto__.push((arguments[i__4819__auto___39123]));

var G__39124 = (i__4819__auto___39123 + (1));
i__4819__auto___39123 = G__39124;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39118){
var vec__39119 = p__39118;
var plural = cljs.core.nth.call(null,vec__39119,(0),null);
if(cljs.core._EQ_.call(null,(1),num)){
return singular;
} else {
var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq39115){
var G__39116 = cljs.core.first.call(null,seq39115);
var seq39115__$1 = cljs.core.next.call(null,seq39115);
var G__39117 = cljs.core.first.call(null,seq39115__$1);
var seq39115__$2 = cljs.core.next.call(null,seq39115__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39116,G__39117,seq39115__$2);
}));


//# sourceMappingURL=string.js.map
