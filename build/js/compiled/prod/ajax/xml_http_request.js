// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14980 = e.target.readyState;
var fexpr__14979 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14979.cljs$core$IFn$_invoke$arity$1 ? fexpr__14979.cljs$core$IFn$_invoke$arity$1(G__14980) : fexpr__14979.call(null,G__14980));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14982,handler){
var map__14983 = p__14982;
var map__14983__$1 = cljs.core.__destructure_map(map__14983);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14983__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14983__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__14981_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14981_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___15000 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___15000)){
var response_type_15001 = temp__5753__auto___15000;
(this$__$1.responseType = cljs.core.name(response_type_15001));
} else {
}

var seq__14984_15002 = cljs.core.seq(headers);
var chunk__14985_15003 = null;
var count__14986_15004 = (0);
var i__14987_15005 = (0);
while(true){
if((i__14987_15005 < count__14986_15004)){
var vec__14994_15006 = chunk__14985_15003.cljs$core$IIndexed$_nth$arity$2(null,i__14987_15005);
var k_15007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14994_15006,(0),null);
var v_15008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14994_15006,(1),null);
this$__$1.setRequestHeader(k_15007,v_15008);


var G__15009 = seq__14984_15002;
var G__15010 = chunk__14985_15003;
var G__15011 = count__14986_15004;
var G__15012 = (i__14987_15005 + (1));
seq__14984_15002 = G__15009;
chunk__14985_15003 = G__15010;
count__14986_15004 = G__15011;
i__14987_15005 = G__15012;
continue;
} else {
var temp__5753__auto___15013 = cljs.core.seq(seq__14984_15002);
if(temp__5753__auto___15013){
var seq__14984_15014__$1 = temp__5753__auto___15013;
if(cljs.core.chunked_seq_QMARK_(seq__14984_15014__$1)){
var c__4638__auto___15015 = cljs.core.chunk_first(seq__14984_15014__$1);
var G__15016 = cljs.core.chunk_rest(seq__14984_15014__$1);
var G__15017 = c__4638__auto___15015;
var G__15018 = cljs.core.count(c__4638__auto___15015);
var G__15019 = (0);
seq__14984_15002 = G__15016;
chunk__14985_15003 = G__15017;
count__14986_15004 = G__15018;
i__14987_15005 = G__15019;
continue;
} else {
var vec__14997_15020 = cljs.core.first(seq__14984_15014__$1);
var k_15021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14997_15020,(0),null);
var v_15022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14997_15020,(1),null);
this$__$1.setRequestHeader(k_15021,v_15022);


var G__15023 = cljs.core.next(seq__14984_15014__$1);
var G__15024 = null;
var G__15025 = (0);
var G__15026 = (0);
seq__14984_15002 = G__15023;
chunk__14985_15003 = G__15024;
count__14986_15004 = G__15025;
i__14987_15005 = G__15026;
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
