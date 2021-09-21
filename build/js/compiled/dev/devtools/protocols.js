// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devtools.protocols');
goog.require('cljs.core');

/**
 * Marker protocol indicating a devtools template.
 * @interface
 */
devtools.protocols.ITemplate = function(){};


/**
 * Marker protocol indicating a devtools group.
 * @interface
 */
devtools.protocols.IGroup = function(){};


/**
 * Marker protocol indicating a devtools surrogate object.
 * @interface
 */
devtools.protocols.ISurrogate = function(){};


/**
 * @interface
 */
devtools.protocols.IFormat = function(){};

var devtools$protocols$IFormat$_header$dyn_34038 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.protocols._header[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,value);
} else {
var m__4508__auto__ = (devtools.protocols._header["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IFormat.-header",value);
}
}
});
devtools.protocols._header = (function devtools$protocols$_header(value){
if((((!((value == null)))) && ((!((value.devtools$protocols$IFormat$_header$arity$1 == null)))))){
return value.devtools$protocols$IFormat$_header$arity$1(value);
} else {
return devtools$protocols$IFormat$_header$dyn_34038.call(null,value);
}
});

var devtools$protocols$IFormat$_has_body$dyn_34039 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.protocols._has_body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,value);
} else {
var m__4508__auto__ = (devtools.protocols._has_body["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IFormat.-has-body",value);
}
}
});
devtools.protocols._has_body = (function devtools$protocols$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$protocols$IFormat$_has_body$arity$1 == null)))))){
return value.devtools$protocols$IFormat$_has_body$arity$1(value);
} else {
return devtools$protocols$IFormat$_has_body$dyn_34039.call(null,value);
}
});

var devtools$protocols$IFormat$_body$dyn_34040 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.protocols._body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,value);
} else {
var m__4508__auto__ = (devtools.protocols._body["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IFormat.-body",value);
}
}
});
devtools.protocols._body = (function devtools$protocols$_body(value){
if((((!((value == null)))) && ((!((value.devtools$protocols$IFormat$_body$arity$1 == null)))))){
return value.devtools$protocols$IFormat$_body$arity$1(value);
} else {
return devtools$protocols$IFormat$_body$dyn_34040.call(null,value);
}
});


//# sourceMappingURL=protocols.js.map
