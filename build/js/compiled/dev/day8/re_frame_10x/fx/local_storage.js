// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.fx.local_storage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('goog.testing.storage.FakeMechanism');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e35725){if((e35725 instanceof Error)){
var _ = e35725;
return (new goog.testing.storage.FakeMechanism());
} else {
throw e35725;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
/**
 * Adds a unique prefix to local storage keys to ensure they don't collide with the host application
 */
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){
return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(var_args){
var G__35727 = arguments.length;
switch (G__35727) {
case 1:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.fx.local_storage.load.call(null,key,null);
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e35729){if((e35729 instanceof Error)){
var _ = e35729;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e35729;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__35730 = cljs.core.seq.call(null,day8.re_frame_10x.fx.local_storage.all_keys.call(null));
var chunk__35731 = null;
var count__35732 = (0);
var i__35733 = (0);
while(true){
if((i__35733 < count__35732)){
var k = cljs.core._nth.call(null,chunk__35731,i__35733);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__35734 = seq__35730;
var G__35735 = chunk__35731;
var G__35736 = count__35732;
var G__35737 = (i__35733 + (1));
seq__35730 = G__35734;
chunk__35731 = G__35735;
count__35732 = G__35736;
i__35733 = G__35737;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__35730);
if(temp__5753__auto__){
var seq__35730__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35730__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__35730__$1);
var G__35738 = cljs.core.chunk_rest.call(null,seq__35730__$1);
var G__35739 = c__4638__auto__;
var G__35740 = cljs.core.count.call(null,c__4638__auto__);
var G__35741 = (0);
seq__35730 = G__35738;
chunk__35731 = G__35739;
count__35732 = G__35740;
i__35733 = G__35741;
continue;
} else {
var k = cljs.core.first.call(null,seq__35730__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__35742 = cljs.core.next.call(null,seq__35730__$1);
var G__35743 = null;
var G__35744 = (0);
var G__35745 = (0);
seq__35730 = G__35742;
chunk__35731 = G__35743;
count__35732 = G__35744;
i__35733 = G__35745;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__35749 = arguments.length;
switch (G__35749) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___35751 = arguments.length;
var i__4819__auto___35752 = (0);
while(true){
if((i__4819__auto___35752 < len__4818__auto___35751)){
args_arr__4839__auto__.push((arguments[i__4819__auto___35752]));

var G__35753 = (i__4819__auto___35752 + (1));
i__4819__auto___35752 = G__35753;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after.call(null,(function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key.call(null,key),cljs.core.pr_str.call(null,db));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after.call(null,(function (db){
return cljs.core.run_BANG_.call(null,(function (k){
var v = ((cljs.core.vector_QMARK_.call(null,k))?cljs.core.get_in.call(null,db,k):cljs.core.get.call(null,db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key.call(null,key),cljs.core.pr_str.call(null,v));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq35747){
var G__35748 = cljs.core.first.call(null,seq35747);
var seq35747__$1 = cljs.core.next.call(null,seq35747);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35748,seq35747__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_cofx.call(null,new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__35754){
var map__35755 = p__35754;
var map__35755__$1 = cljs.core.__destructure_map.call(null,map__35755);
var key = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var or = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"or","or",235744169));
return cljs.core.assoc.call(null,coeffects,cljs.core.keyword.call(null,key),day8.re_frame_10x.fx.local_storage.load.call(null,key,or));
}));

//# sourceMappingURL=local_storage.js.map
