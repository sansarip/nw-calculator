// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__16426){
var vec__16427 = p__16426;
var seq__16428 = cljs.core.seq.call(null,vec__16427);
var first__16429 = cljs.core.first.call(null,seq__16428);
var seq__16428__$1 = cljs.core.next.call(null,seq__16428);
var k = first__16429;
var ks = seq__16428__$1;
var keys = vec__16427;
if(ks){
var temp__5751__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var nextmap = temp__5751__auto__;
var newmap = re_frame.utils.dissoc_in.call(null,nextmap,ks);
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
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
re_frame.utils.apply_kw = (function re_frame$utils$apply_kw(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16432 = arguments.length;
var i__4819__auto___16433 = (0);
while(true){
if((i__4819__auto___16433 < len__4818__auto___16432)){
args__4824__auto__.push((arguments[i__4819__auto___16433]));

var G__16434 = (i__4819__auto___16433 + (1));
i__4819__auto___16433 = G__16434;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
}));

(re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq16430){
var G__16431 = cljs.core.first.call(null,seq16430);
var seq16430__$1 = cljs.core.next.call(null,seq16430);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16431,seq16430__$1);
}));


//# sourceMappingURL=utils.js.map
