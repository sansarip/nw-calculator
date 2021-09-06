// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12900 = e.target.readyState;
var fexpr__12899 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__12899.cljs$core$IFn$_invoke$arity$1 ? fexpr__12899.cljs$core$IFn$_invoke$arity$1(G__12900) : fexpr__12899.call(null,G__12900));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12902,handler){
var map__12903 = p__12902;
var map__12903__$1 = cljs.core.__destructure_map(map__12903);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12903__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12903__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12901_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12901_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___12920 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___12920)){
var response_type_12921 = temp__5735__auto___12920;
(this$__$1.responseType = cljs.core.name(response_type_12921));
} else {
}

var seq__12904_12922 = cljs.core.seq(headers);
var chunk__12905_12923 = null;
var count__12906_12924 = (0);
var i__12907_12925 = (0);
while(true){
if((i__12907_12925 < count__12906_12924)){
var vec__12914_12926 = chunk__12905_12923.cljs$core$IIndexed$_nth$arity$2(null,i__12907_12925);
var k_12927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12914_12926,(0),null);
var v_12928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12914_12926,(1),null);
this$__$1.setRequestHeader(k_12927,v_12928);


var G__12929 = seq__12904_12922;
var G__12930 = chunk__12905_12923;
var G__12931 = count__12906_12924;
var G__12932 = (i__12907_12925 + (1));
seq__12904_12922 = G__12929;
chunk__12905_12923 = G__12930;
count__12906_12924 = G__12931;
i__12907_12925 = G__12932;
continue;
} else {
var temp__5735__auto___12933 = cljs.core.seq(seq__12904_12922);
if(temp__5735__auto___12933){
var seq__12904_12934__$1 = temp__5735__auto___12933;
if(cljs.core.chunked_seq_QMARK_(seq__12904_12934__$1)){
var c__4638__auto___12935 = cljs.core.chunk_first(seq__12904_12934__$1);
var G__12936 = cljs.core.chunk_rest(seq__12904_12934__$1);
var G__12937 = c__4638__auto___12935;
var G__12938 = cljs.core.count(c__4638__auto___12935);
var G__12939 = (0);
seq__12904_12922 = G__12936;
chunk__12905_12923 = G__12937;
count__12906_12924 = G__12938;
i__12907_12925 = G__12939;
continue;
} else {
var vec__12917_12940 = cljs.core.first(seq__12904_12934__$1);
var k_12941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917_12940,(0),null);
var v_12942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917_12940,(1),null);
this$__$1.setRequestHeader(k_12941,v_12942);


var G__12943 = cljs.core.next(seq__12904_12934__$1);
var G__12944 = null;
var G__12945 = (0);
var G__12946 = (0);
seq__12904_12922 = G__12943;
chunk__12905_12923 = G__12944;
count__12906_12924 = G__12945;
i__12907_12925 = G__12946;
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
