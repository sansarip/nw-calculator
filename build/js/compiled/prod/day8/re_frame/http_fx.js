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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__25974){
var vec__25975 = p__25974;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25975,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25975,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__25980){
var map__25981 = p__25980;
var map__25981__$1 = cljs.core.__destructure_map(map__25981);
var request = map__25981__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25981__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25981__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__25978_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__25978_SHARP_));
}),(function (p1__25979_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__25979_SHARP_));
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
var seq__25982 = cljs.core.seq(seq_request_maps);
var chunk__25983 = null;
var count__25984 = (0);
var i__25985 = (0);
while(true){
if((i__25985 < count__25984)){
var request__$1 = chunk__25983.cljs$core$IIndexed$_nth$arity$2(null,i__25985);
var xhrio_25986 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_25986);


var G__25987 = seq__25982;
var G__25988 = chunk__25983;
var G__25989 = count__25984;
var G__25990 = (i__25985 + (1));
seq__25982 = G__25987;
chunk__25983 = G__25988;
count__25984 = G__25989;
i__25985 = G__25990;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25982);
if(temp__5753__auto__){
var seq__25982__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25982__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__25982__$1);
var G__25991 = cljs.core.chunk_rest(seq__25982__$1);
var G__25992 = c__4638__auto__;
var G__25993 = cljs.core.count(c__4638__auto__);
var G__25994 = (0);
seq__25982 = G__25991;
chunk__25983 = G__25992;
count__25984 = G__25993;
i__25985 = G__25994;
continue;
} else {
var request__$1 = cljs.core.first(seq__25982__$1);
var xhrio_25995 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_25995);


var G__25996 = cljs.core.next(seq__25982__$1);
var G__25997 = null;
var G__25998 = (0);
var G__25999 = (0);
seq__25982 = G__25996;
chunk__25983 = G__25997;
count__25984 = G__25998;
i__25985 = G__25999;
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
