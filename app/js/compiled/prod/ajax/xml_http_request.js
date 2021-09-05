// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12400 = e.target.readyState;
var fexpr__12399 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__12399.cljs$core$IFn$_invoke$arity$1 ? fexpr__12399.cljs$core$IFn$_invoke$arity$1(G__12400) : fexpr__12399.call(null,G__12400));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12402,handler){
var map__12403 = p__12402;
var map__12403__$1 = cljs.core.__destructure_map(map__12403);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12403__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12403__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12403__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12403__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12403__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12403__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12403__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12401_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12401_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___12420 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___12420)){
var response_type_12421 = temp__5735__auto___12420;
(this$__$1.responseType = cljs.core.name(response_type_12421));
} else {
}

var seq__12404_12422 = cljs.core.seq(headers);
var chunk__12405_12423 = null;
var count__12406_12424 = (0);
var i__12407_12425 = (0);
while(true){
if((i__12407_12425 < count__12406_12424)){
var vec__12414_12426 = chunk__12405_12423.cljs$core$IIndexed$_nth$arity$2(null,i__12407_12425);
var k_12427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414_12426,(0),null);
var v_12428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414_12426,(1),null);
this$__$1.setRequestHeader(k_12427,v_12428);


var G__12429 = seq__12404_12422;
var G__12430 = chunk__12405_12423;
var G__12431 = count__12406_12424;
var G__12432 = (i__12407_12425 + (1));
seq__12404_12422 = G__12429;
chunk__12405_12423 = G__12430;
count__12406_12424 = G__12431;
i__12407_12425 = G__12432;
continue;
} else {
var temp__5735__auto___12433 = cljs.core.seq(seq__12404_12422);
if(temp__5735__auto___12433){
var seq__12404_12434__$1 = temp__5735__auto___12433;
if(cljs.core.chunked_seq_QMARK_(seq__12404_12434__$1)){
var c__4638__auto___12435 = cljs.core.chunk_first(seq__12404_12434__$1);
var G__12436 = cljs.core.chunk_rest(seq__12404_12434__$1);
var G__12437 = c__4638__auto___12435;
var G__12438 = cljs.core.count(c__4638__auto___12435);
var G__12439 = (0);
seq__12404_12422 = G__12436;
chunk__12405_12423 = G__12437;
count__12406_12424 = G__12438;
i__12407_12425 = G__12439;
continue;
} else {
var vec__12417_12440 = cljs.core.first(seq__12404_12434__$1);
var k_12441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417_12440,(0),null);
var v_12442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417_12440,(1),null);
this$__$1.setRequestHeader(k_12441,v_12442);


var G__12443 = cljs.core.next(seq__12404_12434__$1);
var G__12444 = null;
var G__12445 = (0);
var G__12446 = (0);
seq__12404_12422 = G__12443;
chunk__12405_12423 = G__12444;
count__12406_12424 = G__12445;
i__12407_12425 = G__12446;
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
