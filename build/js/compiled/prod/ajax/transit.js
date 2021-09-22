// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.transit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
goog.require('ajax.util');
ajax.transit.transit_type = (function ajax$transit$transit_type(p__13911){
var map__13912 = p__13911;
var map__13912__$1 = cljs.core.__destructure_map(map__13912);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13912__$1,cljs.core.cst$kw$type);
var or__4212__auto__ = type;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.transit.transit_write_fn = (function ajax$transit$transit_write_fn(type,opts){
var writer = (function (){var or__4212__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,opts);
}
})();
return (function ajax$transit$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
});
/**
 * Returns a Transit request format.
 * 
 * Options include:
 * :writer Explicit Transit writer. If not supplied one will be created using the other options.
 *         The default type is :json for ClojureScript and :msgpack for Clojure.
 * :type Override the default transit type with value :json, :json-verbose or :msgpack
 * :handlers Custom Transit handlers (refer to Transit documentation)
 */
ajax.transit.transit_request_format = (function ajax$transit$transit_request_format(var_args){
var G__13914 = arguments.length;
switch (G__13914) {
case 0:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var type = ajax.transit.transit_type(opts);
var mime_type = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json_DASH_verbose))))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.transit.transit_write_fn(type,opts),cljs.core.cst$kw$content_DASH_type,["application/transit+",mime_type].join('')], null);
}));

(ajax.transit.transit_request_format.cljs$lang$maxFixedArity = 1);

ajax.transit.transit_read_fn = (function ajax$transit$transit_read_fn(opts){
var reader = (function (){var or__4212__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,opts);
}
})();
return (function ajax$transit$transit_read_fn_$_transit_read_response(response){
return cognitect.transit.read(reader,ajax.protocols._body(response));
});
});
/**
 * Returns a Transit request format.
 * 
 * Options include:
 * :reader (CLJS only) Explicit Transit reader. If not supplied one will be created using the other options.
 * :handlers Custom Transit handlers (refer to Transit documentation)
 */
ajax.transit.transit_response_format = (function ajax$transit$transit_response_format(var_args){
var G__13917 = arguments.length;
switch (G__13917) {
case 0:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.transit.transit_type(opts),opts);
}));

(ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.transit.transit_read_fn(opts),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
}));

(ajax.transit.transit_response_format.cljs$lang$maxFixedArity = 2);

