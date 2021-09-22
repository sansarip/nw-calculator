// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__13707 = e.target.readyState;
var fexpr__13706 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__13706.cljs$core$IFn$_invoke$arity$1 ? fexpr__13706.cljs$core$IFn$_invoke$arity$1(G__13707) : fexpr__13706.call(null,G__13707));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13709,handler){
var map__13710 = p__13709;
var map__13710__$1 = cljs.core.__destructure_map(map__13710);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13710__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13710__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__13708_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13708_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___13727 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___13727)){
var response_type_13728 = temp__5753__auto___13727;
(this$__$1.responseType = cljs.core.name(response_type_13728));
} else {
}

var seq__13711_13729 = cljs.core.seq(headers);
var chunk__13712_13730 = null;
var count__13713_13731 = (0);
var i__13714_13732 = (0);
while(true){
if((i__13714_13732 < count__13713_13731)){
var vec__13721_13733 = chunk__13712_13730.cljs$core$IIndexed$_nth$arity$2(null,i__13714_13732);
var k_13734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13721_13733,(0),null);
var v_13735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13721_13733,(1),null);
this$__$1.setRequestHeader(k_13734,v_13735);


var G__13736 = seq__13711_13729;
var G__13737 = chunk__13712_13730;
var G__13738 = count__13713_13731;
var G__13739 = (i__13714_13732 + (1));
seq__13711_13729 = G__13736;
chunk__13712_13730 = G__13737;
count__13713_13731 = G__13738;
i__13714_13732 = G__13739;
continue;
} else {
var temp__5753__auto___13740 = cljs.core.seq(seq__13711_13729);
if(temp__5753__auto___13740){
var seq__13711_13741__$1 = temp__5753__auto___13740;
if(cljs.core.chunked_seq_QMARK_(seq__13711_13741__$1)){
var c__4638__auto___13742 = cljs.core.chunk_first(seq__13711_13741__$1);
var G__13743 = cljs.core.chunk_rest(seq__13711_13741__$1);
var G__13744 = c__4638__auto___13742;
var G__13745 = cljs.core.count(c__4638__auto___13742);
var G__13746 = (0);
seq__13711_13729 = G__13743;
chunk__13712_13730 = G__13744;
count__13713_13731 = G__13745;
i__13714_13732 = G__13746;
continue;
} else {
var vec__13724_13747 = cljs.core.first(seq__13711_13741__$1);
var k_13748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13724_13747,(0),null);
var v_13749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13724_13747,(1),null);
this$__$1.setRequestHeader(k_13748,v_13749);


var G__13750 = cljs.core.next(seq__13711_13741__$1);
var G__13751 = null;
var G__13752 = (0);
var G__13753 = (0);
seq__13711_13729 = G__13750;
chunk__13712_13730 = G__13751;
count__13713_13731 = G__13752;
i__13714_13732 = G__13753;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4212__auto__ = body;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
