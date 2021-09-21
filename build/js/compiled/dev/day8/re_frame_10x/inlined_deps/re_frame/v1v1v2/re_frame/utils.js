// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.dissoc_in = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$utils$dissoc_in(m,p__33237){
var vec__33238 = p__33237;
var seq__33239 = cljs.core.seq.call(null,vec__33238);
var first__33240 = cljs.core.first.call(null,seq__33239);
var seq__33239__$1 = cljs.core.next.call(null,seq__33239);
var k = first__33240;
var ks = seq__33239__$1;
var keys = vec__33238;
if(ks){
var temp__5751__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var nextmap = temp__5751__auto__;
var newmap = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$utils$apply_kw(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33243 = arguments.length;
var i__4819__auto___33244 = (0);
while(true){
if((i__4819__auto___33244 < len__4818__auto___33243)){
args__4824__auto__.push((arguments[i__4819__auto___33244]));

var G__33245 = (i__4819__auto___33244 + (1));
i__4819__auto___33244 = G__33245;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq33241){
var G__33242 = cljs.core.first.call(null,seq33241);
var seq33241__$1 = cljs.core.next.call(null,seq33241);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33242,seq33241__$1);
}));


//# sourceMappingURL=utils.js.map
