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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__26004){
var vec__26005 = p__26004;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26005,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26005,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__26010){
var map__26011 = p__26010;
var map__26011__$1 = cljs.core.__destructure_map(map__26011);
var request = map__26011__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26011__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26011__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__26008_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__26008_SHARP_));
}),(function (p1__26009_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__26009_SHARP_));
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
var seq__26012 = cljs.core.seq(seq_request_maps);
var chunk__26013 = null;
var count__26014 = (0);
var i__26015 = (0);
while(true){
if((i__26015 < count__26014)){
var request__$1 = chunk__26013.cljs$core$IIndexed$_nth$arity$2(null,i__26015);
var xhrio_26016 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_26016);


var G__26017 = seq__26012;
var G__26018 = chunk__26013;
var G__26019 = count__26014;
var G__26020 = (i__26015 + (1));
seq__26012 = G__26017;
chunk__26013 = G__26018;
count__26014 = G__26019;
i__26015 = G__26020;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26012);
if(temp__5753__auto__){
var seq__26012__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26012__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__26012__$1);
var G__26021 = cljs.core.chunk_rest(seq__26012__$1);
var G__26022 = c__4638__auto__;
var G__26023 = cljs.core.count(c__4638__auto__);
var G__26024 = (0);
seq__26012 = G__26021;
chunk__26013 = G__26022;
count__26014 = G__26023;
i__26015 = G__26024;
continue;
} else {
var request__$1 = cljs.core.first(seq__26012__$1);
var xhrio_26025 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_26025);


var G__26026 = cljs.core.next(seq__26012__$1);
var G__26027 = null;
var G__26028 = (0);
var G__26029 = (0);
seq__26012 = G__26026;
chunk__26013 = G__26027;
count__26014 = G__26028;
i__26015 = G__26029;
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
