// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.xhrio');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri');
goog.require('goog.json');
goog.require('goog.events');
goog.require('ajax.protocols');
(goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12659,handler){
var map__12660 = p__12659;
var map__12660__$1 = cljs.core.__destructure_map(map__12660);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12660__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12660__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.cst$kw$response_DASH_format);
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,cljs.core.cst$kw$progress_DASH_handler);
var this$__$1 = this;
var temp__5735__auto___12664 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___12664)){
var response_type_12665 = temp__5735__auto___12664;
this$__$1.setResponseType(cljs.core.name(response_type_12665));
} else {
}

if(cljs.core.fn_QMARK_(progress_handler)){
var G__12661_12666 = this$__$1;
G__12661_12666.setProgressEventsEnabled(true);

goog.events.listen(G__12661_12666,goog.net.EventType.UPLOAD_PROGRESS,progress_handler);

} else {
}

var G__12662 = this$__$1;
goog.events.listen(G__12662,goog.net.EventType.COMPLETE,(function (p1__12658_SHARP_){
var G__12663 = p1__12658_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12663) : handler.call(null,G__12663));
}));

G__12662.setTimeoutInterval(timeout);

G__12662.setWithCredentials(with_credentials);

G__12662.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__12662;
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(this$__$1.getResponseHeaders());
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
}));
(goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12667,handler){
var map__12668 = p__12667;
var map__12668__$1 = cljs.core.__destructure_map(map__12668);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$headers);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$id);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12668__$1,cljs.core.cst$kw$timeout,(0));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$priority);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$max_DASH_retries);
var this$__$1 = this;
var G__12669 = this$__$1;
G__12669.setTimeoutInterval(timeout);

G__12669.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);

return G__12669;
}));
