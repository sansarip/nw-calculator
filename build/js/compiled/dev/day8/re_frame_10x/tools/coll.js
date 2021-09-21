// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.tools.coll');
goog.require('cljs.core');
/**
 * Get the last element in the vector. Returns nil if v is empty
 */
day8.re_frame_10x.tools.coll.last_in_vec = (function day8$re_frame_10x$tools$coll$last_in_vec(v){
var num = cljs.core.count.call(null,v);
if((num === (0))){
return null;
} else {
return cljs.core.nth.call(null,v,(num - (1)));
}
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.tools.coll.find_all_indexes_in_vec = (function day8$re_frame_10x$tools$coll$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.call(null,(function (p1__33983_SHARP_,p2__33982_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__33982_SHARP_))){
return p1__33983_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.tools.coll.find_index_in_vec = (function day8$re_frame_10x$tools$coll$find_index_in_vec(pred,v){
return cljs.core.first.call(null,day8.re_frame_10x.tools.coll.find_all_indexes_in_vec.call(null,pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.tools.coll.id_between_xf = (function day8$re_frame_10x$tools$coll$id_between_xf(beginning,ending){
return cljs.core.filter.call(null,(function (p1__33984_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33984_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33984_SHARP_) <= ending)));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.tools.coll.dissoc_in = (function day8$re_frame_10x$tools$coll$dissoc_in(m,p__33985){
var vec__33986 = p__33985;
var seq__33987 = cljs.core.seq.call(null,vec__33986);
var first__33988 = cljs.core.first.call(null,seq__33987);
var seq__33987__$1 = cljs.core.next.call(null,seq__33987);
var k = first__33988;
var ks = seq__33987__$1;
if(ks){
var temp__5751__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var nextmap = temp__5751__auto__;
var newmap = day8.re_frame_10x.tools.coll.dissoc_in.call(null,nextmap,ks);
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
/**
 * cljs.core/get-in with support for index access of lists.
 */
day8.re_frame_10x.tools.coll.get_in_with_lists = (function day8$re_frame_10x$tools$coll$get_in_with_lists(m,ks){
return cljs.core.reduce.call(null,(function (ret,k){
if(cljs.core.list_QMARK_.call(null,ret)){
return cljs.core.nth.call(null,ret,k);
} else {
return cljs.core.get.call(null,ret,k);
}
}),m,ks);
});

//# sourceMappingURL=coll.js.map
