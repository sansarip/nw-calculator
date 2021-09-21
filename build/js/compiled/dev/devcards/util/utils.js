// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
goog.require('react');
devcards.util.utils.global$module$react = goog.global["React"];
devcards.util.utils.react_holder = devcards.util.utils.global$module$react;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5751__auto__)){
var doc = temp__5751__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21224_21228 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21225_21229 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21226_21230 = true;
var _STAR_print_fn_STAR__temp_val__21227_21231 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21226_21230);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21227_21231);

try{cljs.pprint.pprint.call(null,obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21225_21229);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21224_21228);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
}catch (e21222){if((e21222 instanceof Error)){
var e1 = e21222;
try{return obj.toString();
}catch (e21223){if((e21223 instanceof Error)){
var e2 = e21223;
return "<<Un-printable Type>>";
} else {
throw e21223;

}
}} else {
throw e21222;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__21232 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__21233 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__21233);

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__21232);
}});

//# sourceMappingURL=utils.js.map
