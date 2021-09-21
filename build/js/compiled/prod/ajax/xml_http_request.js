// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__13752 = e.target.readyState;
var fexpr__13751 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__13751.cljs$core$IFn$_invoke$arity$1 ? fexpr__13751.cljs$core$IFn$_invoke$arity$1(G__13752) : fexpr__13751.call(null,G__13752));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13754,handler){
var map__13755 = p__13754;
var map__13755__$1 = cljs.core.__destructure_map(map__13755);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13755__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13755__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13755__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13755__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13755__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13755__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13755__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__13753_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13753_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___13772 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___13772)){
var response_type_13773 = temp__5753__auto___13772;
(this$__$1.responseType = cljs.core.name(response_type_13773));
} else {
}

var seq__13756_13774 = cljs.core.seq(headers);
var chunk__13757_13775 = null;
var count__13758_13776 = (0);
var i__13759_13777 = (0);
while(true){
if((i__13759_13777 < count__13758_13776)){
var vec__13766_13778 = chunk__13757_13775.cljs$core$IIndexed$_nth$arity$2(null,i__13759_13777);
var k_13779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766_13778,(0),null);
var v_13780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766_13778,(1),null);
this$__$1.setRequestHeader(k_13779,v_13780);


var G__13781 = seq__13756_13774;
var G__13782 = chunk__13757_13775;
var G__13783 = count__13758_13776;
var G__13784 = (i__13759_13777 + (1));
seq__13756_13774 = G__13781;
chunk__13757_13775 = G__13782;
count__13758_13776 = G__13783;
i__13759_13777 = G__13784;
continue;
} else {
var temp__5753__auto___13785 = cljs.core.seq(seq__13756_13774);
if(temp__5753__auto___13785){
var seq__13756_13786__$1 = temp__5753__auto___13785;
if(cljs.core.chunked_seq_QMARK_(seq__13756_13786__$1)){
var c__4638__auto___13787 = cljs.core.chunk_first(seq__13756_13786__$1);
var G__13788 = cljs.core.chunk_rest(seq__13756_13786__$1);
var G__13789 = c__4638__auto___13787;
var G__13790 = cljs.core.count(c__4638__auto___13787);
var G__13791 = (0);
seq__13756_13774 = G__13788;
chunk__13757_13775 = G__13789;
count__13758_13776 = G__13790;
i__13759_13777 = G__13791;
continue;
} else {
var vec__13769_13792 = cljs.core.first(seq__13756_13786__$1);
var k_13793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13769_13792,(0),null);
var v_13794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13769_13792,(1),null);
this$__$1.setRequestHeader(k_13793,v_13794);


var G__13795 = cljs.core.next(seq__13756_13786__$1);
var G__13796 = null;
var G__13797 = (0);
var G__13798 = (0);
seq__13756_13774 = G__13795;
chunk__13757_13775 = G__13796;
count__13758_13776 = G__13797;
i__13759_13777 = G__13798;
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
