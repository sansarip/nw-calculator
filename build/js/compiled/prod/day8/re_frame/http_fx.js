// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.simple');
goog.require('ajax.xhrio');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__27788){
var vec__27789 = p__27788;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27789,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27789,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__27794){
var map__27795 = p__27794;
var map__27795__$1 = cljs.core.__destructure_map(map__27795);
var request = map__27795__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27795__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27795__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__27792_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__27792_SHARP_));
}),(function (p1__27793_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__27793_SHARP_));
}),api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure,cljs.core.cst$kw$on_DASH_request], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5751__auto__ = cljs.core.cst$kw$on_DASH_request.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var on_request = temp__5751__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__27796 = cljs.core.seq(seq_request_maps);
var chunk__27797 = null;
var count__27798 = (0);
var i__27799 = (0);
while(true){
if((i__27799 < count__27798)){
var request__$1 = chunk__27797.cljs$core$IIndexed$_nth$arity$2(null,i__27799);
var xhrio_27800 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_27800);


var G__27801 = seq__27796;
var G__27802 = chunk__27797;
var G__27803 = count__27798;
var G__27804 = (i__27799 + (1));
seq__27796 = G__27801;
chunk__27797 = G__27802;
count__27798 = G__27803;
i__27799 = G__27804;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27796);
if(temp__5753__auto__){
var seq__27796__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27796__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27796__$1);
var G__27805 = cljs.core.chunk_rest(seq__27796__$1);
var G__27806 = c__4638__auto__;
var G__27807 = cljs.core.count(c__4638__auto__);
var G__27808 = (0);
seq__27796 = G__27805;
chunk__27797 = G__27806;
count__27798 = G__27807;
i__27799 = G__27808;
continue;
} else {
var request__$1 = cljs.core.first(seq__27796__$1);
var xhrio_27809 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_27809);


var G__27810 = cljs.core.next(seq__27796__$1);
var G__27811 = null;
var G__27812 = (0);
var G__27813 = (0);
seq__27796 = G__27810;
chunk__27797 = G__27811;
count__27798 = G__27812;
i__27799 = G__27813;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(cljs.core.cst$kw$http_DASH_xhrio,day8.re_frame.http_fx.http_effect);
