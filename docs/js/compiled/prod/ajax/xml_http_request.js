// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14218 = e.target.readyState;
var fexpr__14217 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14217.cljs$core$IFn$_invoke$arity$1 ? fexpr__14217.cljs$core$IFn$_invoke$arity$1(G__14218) : fexpr__14217.call(null,G__14218));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14220,handler){
var map__14221 = p__14220;
var map__14221__$1 = cljs.core.__destructure_map(map__14221);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14221__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14221__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14221__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14221__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14221__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14221__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14221__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__14219_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14219_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___14238 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___14238)){
var response_type_14239 = temp__5753__auto___14238;
(this$__$1.responseType = cljs.core.name(response_type_14239));
} else {
}

var seq__14222_14240 = cljs.core.seq(headers);
var chunk__14223_14241 = null;
var count__14224_14242 = (0);
var i__14225_14243 = (0);
while(true){
if((i__14225_14243 < count__14224_14242)){
var vec__14232_14244 = chunk__14223_14241.cljs$core$IIndexed$_nth$arity$2(null,i__14225_14243);
var k_14245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232_14244,(0),null);
var v_14246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232_14244,(1),null);
this$__$1.setRequestHeader(k_14245,v_14246);


var G__14247 = seq__14222_14240;
var G__14248 = chunk__14223_14241;
var G__14249 = count__14224_14242;
var G__14250 = (i__14225_14243 + (1));
seq__14222_14240 = G__14247;
chunk__14223_14241 = G__14248;
count__14224_14242 = G__14249;
i__14225_14243 = G__14250;
continue;
} else {
var temp__5753__auto___14251 = cljs.core.seq(seq__14222_14240);
if(temp__5753__auto___14251){
var seq__14222_14252__$1 = temp__5753__auto___14251;
if(cljs.core.chunked_seq_QMARK_(seq__14222_14252__$1)){
var c__4638__auto___14253 = cljs.core.chunk_first(seq__14222_14252__$1);
var G__14254 = cljs.core.chunk_rest(seq__14222_14252__$1);
var G__14255 = c__4638__auto___14253;
var G__14256 = cljs.core.count(c__4638__auto___14253);
var G__14257 = (0);
seq__14222_14240 = G__14254;
chunk__14223_14241 = G__14255;
count__14224_14242 = G__14256;
i__14225_14243 = G__14257;
continue;
} else {
var vec__14235_14258 = cljs.core.first(seq__14222_14252__$1);
var k_14259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14235_14258,(0),null);
var v_14260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14235_14258,(1),null);
this$__$1.setRequestHeader(k_14259,v_14260);


var G__14261 = cljs.core.next(seq__14222_14252__$1);
var G__14262 = null;
var G__14263 = (0);
var G__14264 = (0);
seq__14222_14240 = G__14261;
chunk__14223_14241 = G__14262;
count__14224_14242 = G__14263;
i__14225_14243 = G__14264;
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
