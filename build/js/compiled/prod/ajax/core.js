// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
/**
 * Call this on the result of `ajax-request` to cancel the request.
 */
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14026 = arguments.length;
var i__4819__auto___14027 = (0);
while(true){
if((i__4819__auto___14027 < len__4818__auto___14026)){
args__4824__auto__.push((arguments[i__4819__auto___14027]));

var G__14028 = (i__4819__auto___14027 + (1));
i__4819__auto___14027 = G__14028;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.GET.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.GET.cljs$lang$applyTo = (function (seq14024){
var G__14025 = cljs.core.first(seq14024);
var seq14024__$1 = cljs.core.next(seq14024);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14025,seq14024__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14031 = arguments.length;
var i__4819__auto___14032 = (0);
while(true){
if((i__4819__auto___14032 < len__4818__auto___14031)){
args__4824__auto__.push((arguments[i__4819__auto___14032]));

var G__14033 = (i__4819__auto___14032 + (1));
i__4819__auto___14032 = G__14033;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.HEAD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.HEAD.cljs$lang$applyTo = (function (seq14029){
var G__14030 = cljs.core.first(seq14029);
var seq14029__$1 = cljs.core.next(seq14029);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14030,seq14029__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14036 = arguments.length;
var i__4819__auto___14037 = (0);
while(true){
if((i__4819__auto___14037 < len__4818__auto___14036)){
args__4824__auto__.push((arguments[i__4819__auto___14037]));

var G__14038 = (i__4819__auto___14037 + (1));
i__4819__auto___14037 = G__14038;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.POST.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.POST.cljs$lang$applyTo = (function (seq14034){
var G__14035 = cljs.core.first(seq14034);
var seq14034__$1 = cljs.core.next(seq14034);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14035,seq14034__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14041 = arguments.length;
var i__4819__auto___14042 = (0);
while(true){
if((i__4819__auto___14042 < len__4818__auto___14041)){
args__4824__auto__.push((arguments[i__4819__auto___14042]));

var G__14043 = (i__4819__auto___14042 + (1));
i__4819__auto___14042 = G__14043;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.PUT.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PUT.cljs$lang$applyTo = (function (seq14039){
var G__14040 = cljs.core.first(seq14039);
var seq14039__$1 = cljs.core.next(seq14039);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14040,seq14039__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14046 = arguments.length;
var i__4819__auto___14047 = (0);
while(true){
if((i__4819__auto___14047 < len__4818__auto___14046)){
args__4824__auto__.push((arguments[i__4819__auto___14047]));

var G__14048 = (i__4819__auto___14047 + (1));
i__4819__auto___14047 = G__14048;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.DELETE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.DELETE.cljs$lang$applyTo = (function (seq14044){
var G__14045 = cljs.core.first(seq14044);
var seq14044__$1 = cljs.core.next(seq14044);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14045,seq14044__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14051 = arguments.length;
var i__4819__auto___14052 = (0);
while(true){
if((i__4819__auto___14052 < len__4818__auto___14051)){
args__4824__auto__.push((arguments[i__4819__auto___14052]));

var G__14053 = (i__4819__auto___14052 + (1));
i__4819__auto___14052 = G__14053;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq14049){
var G__14050 = cljs.core.first(seq14049);
var seq14049__$1 = cljs.core.next(seq14049);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14050,seq14049__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14056 = arguments.length;
var i__4819__auto___14057 = (0);
while(true){
if((i__4819__auto___14057 < len__4818__auto___14056)){
args__4824__auto__.push((arguments[i__4819__auto___14057]));

var G__14058 = (i__4819__auto___14057 + (1));
i__4819__auto___14057 = G__14058;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.TRACE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.TRACE.cljs$lang$applyTo = (function (seq14054){
var G__14055 = cljs.core.first(seq14054);
var seq14054__$1 = cljs.core.next(seq14054);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14055,seq14054__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14061 = arguments.length;
var i__4819__auto___14062 = (0);
while(true){
if((i__4819__auto___14062 < len__4818__auto___14061)){
args__4824__auto__.push((arguments[i__4819__auto___14062]));

var G__14063 = (i__4819__auto___14062 + (1));
i__4819__auto___14062 = G__14063;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.PATCH.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PATCH.cljs$lang$applyTo = (function (seq14059){
var G__14060 = cljs.core.first(seq14059);
var seq14059__$1 = cljs.core.next(seq14059);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14060,seq14059__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14066 = arguments.length;
var i__4819__auto___14067 = (0);
while(true){
if((i__4819__auto___14067 < len__4818__auto___14066)){
args__4824__auto__.push((arguments[i__4819__auto___14067]));

var G__14068 = (i__4819__auto___14067 + (1));
i__4819__auto___14067 = G__14068;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__13583__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__13583__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__13583__auto__));
}));

(ajax.core.PURGE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PURGE.cljs$lang$applyTo = (function (seq14064){
var G__14065 = cljs.core.first(seq14064);
var seq14064__$1 = cljs.core.next(seq14064);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14065,seq14064__$1);
}));

