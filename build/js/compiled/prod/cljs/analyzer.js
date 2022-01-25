// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.analyzer.impl');
goog.require('cljs.analyzer.passes.and_or');
goog.require('cljs.env');
goog.require('cljs.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$sym$cljs$user;
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_checked_arrays_STAR_ = false;
cljs.analyzer._STAR_check_alias_dupes_STAR_ = true;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_fn_invoke_direct_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dep_DASH_path,cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = false;
/**
 * The namespace of the constants table as a symbol.
 */
cljs.analyzer.constants_ns_sym = cljs.core.cst$sym$cljs$core$constants;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$private_DASH_var_DASH_access,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$declared_DASH_arglists_DASH_mismatch,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_with_DASH_overwriting_DASH_method,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$non_DASH_dynamic_DASH_earmuffed_DASH_var,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.unchecked_arrays_QMARK_ = (function cljs$analyzer$unchecked_arrays_QMARK_(){
return cljs.core._STAR_unchecked_arrays_STAR_;
});
cljs.analyzer.compiler_options = (function cljs$analyzer$compiler_options(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
});
cljs.analyzer.get_externs = (function cljs$analyzer$get_externs(){
return cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
});
/**
 * Returns false-y, :warn, or :error based on configuration and the
 * current value of *unchecked-arrays*.
 */
cljs.analyzer.checked_arrays = (function cljs$analyzer$checked_arrays(){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advanced,cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.compiler_options()))) && ((!(cljs.core._STAR_unchecked_arrays_STAR_))))){
return cljs.analyzer._STAR_checked_arrays_STAR_;
} else {
return null;
}
});
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 63, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"await",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.es5_allowed = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["default",null], null), null);
cljs.analyzer.SENTINEL = ({});
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
var G__24203 = arguments.length;
switch (G__24203) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k1);
}
}));

(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$2,k2);
}
}
}));

(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$3,k3);
}
}
}
}));

(cljs.analyzer.gets.cljs$lang$maxFixedArity = 5);

cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
var G__24206 = arguments.length;
switch (G__24206) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$kw$cljs);
}));

(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [clojure.string.replace(cljs.analyzer.munge_path(ns),".","/"),".",cljs.core.name(ext)].join('');
}));

(cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2);

cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
var G__24209 = arguments.length;
switch (G__24209) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(x,(0),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map()),cljs.core.memoize(get_deps));
}));

(cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = (memo_get_deps.cljs$core$IFn$_invoke$arity$1 ? memo_get_deps.cljs$core$IFn$_invoke$arity$1(x) : memo_get_deps.call(null,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deps], 0));

var seq__24210_24231 = cljs.core.seq(deps);
var chunk__24211_24232 = null;
var count__24212_24233 = (0);
var i__24213_24234 = (0);
while(true){
if((i__24213_24234 < count__24212_24233)){
var dep_24235 = chunk__24211_24232.cljs$core$IIndexed$_nth$arity$2(null,i__24213_24234);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_24235,(depth + (1)),state,memo_get_deps);


var G__24236 = seq__24210_24231;
var G__24237 = chunk__24211_24232;
var G__24238 = count__24212_24233;
var G__24239 = (i__24213_24234 + (1));
seq__24210_24231 = G__24236;
chunk__24211_24232 = G__24237;
count__24212_24233 = G__24238;
i__24213_24234 = G__24239;
continue;
} else {
var temp__5753__auto___24240 = cljs.core.seq(seq__24210_24231);
if(temp__5753__auto___24240){
var seq__24210_24241__$1 = temp__5753__auto___24240;
if(cljs.core.chunked_seq_QMARK_(seq__24210_24241__$1)){
var c__4638__auto___24242 = cljs.core.chunk_first(seq__24210_24241__$1);
var G__24243 = cljs.core.chunk_rest(seq__24210_24241__$1);
var G__24244 = c__4638__auto___24242;
var G__24245 = cljs.core.count(c__4638__auto___24242);
var G__24246 = (0);
seq__24210_24231 = G__24243;
chunk__24211_24232 = G__24244;
count__24212_24233 = G__24245;
i__24213_24234 = G__24246;
continue;
} else {
var dep_24247 = cljs.core.first(seq__24210_24241__$1);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_24247,(depth + (1)),state,memo_get_deps);


var G__24248 = cljs.core.next(seq__24210_24241__$1);
var G__24249 = null;
var G__24250 = (0);
var G__24251 = (0);
seq__24210_24231 = G__24248;
chunk__24211_24232 = G__24249;
count__24212_24233 = G__24250;
i__24213_24234 = G__24251;
continue;
}
} else {
}
}
break;
}

var seq__24214_24252 = cljs.core.seq(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state),cljs.core._LT_,depth));
var chunk__24215_24253 = null;
var count__24216_24254 = (0);
var i__24217_24255 = (0);
while(true){
if((i__24217_24255 < count__24216_24254)){
var vec__24224_24256 = chunk__24215_24253.cljs$core$IIndexed$_nth$arity$2(null,i__24217_24255);
var _LT_depth_24257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24224_24256,(0),null);
var __24258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24224_24256,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_24257], null),clojure.set.difference,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deps], 0));


var G__24259 = seq__24214_24252;
var G__24260 = chunk__24215_24253;
var G__24261 = count__24216_24254;
var G__24262 = (i__24217_24255 + (1));
seq__24214_24252 = G__24259;
chunk__24215_24253 = G__24260;
count__24216_24254 = G__24261;
i__24217_24255 = G__24262;
continue;
} else {
var temp__5753__auto___24263 = cljs.core.seq(seq__24214_24252);
if(temp__5753__auto___24263){
var seq__24214_24264__$1 = temp__5753__auto___24263;
if(cljs.core.chunked_seq_QMARK_(seq__24214_24264__$1)){
var c__4638__auto___24265 = cljs.core.chunk_first(seq__24214_24264__$1);
var G__24266 = cljs.core.chunk_rest(seq__24214_24264__$1);
var G__24267 = c__4638__auto___24265;
var G__24268 = cljs.core.count(c__4638__auto___24265);
var G__24269 = (0);
seq__24214_24252 = G__24266;
chunk__24215_24253 = G__24267;
count__24216_24254 = G__24268;
i__24217_24255 = G__24269;
continue;
} else {
var vec__24227_24270 = cljs.core.first(seq__24214_24264__$1);
var _LT_depth_24271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24227_24270,(0),null);
var __24272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24227_24270,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_24271], null),clojure.set.difference,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deps], 0));


var G__24273 = cljs.core.next(seq__24214_24264__$1);
var G__24274 = null;
var G__24275 = (0);
var G__24276 = (0);
seq__24214_24252 = G__24273;
chunk__24215_24253 = G__24274;
count__24216_24254 = G__24275;
i__24217_24255 = G__24276;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(cljs.core.deref(state))));
} else {
return null;
}
}));

(cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4);


cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$op)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.error_message !== 'undefined')){
} else {
cljs.analyzer.error_message = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__24277 = cljs.core.get_global_hierarchy;
return (fexpr__24277.cljs$core$IFn$_invoke$arity$0 ? fexpr__24277.cljs$core$IFn$_invoke$arity$0() : fexpr__24277.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","error-message"),(function() { 
var G__24278__delegate = function (warning_type,_){
return warning_type;
};
var G__24278 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__24279__i = 0, G__24279__a = new Array(arguments.length -  1);
while (G__24279__i < G__24279__a.length) {G__24279__a[G__24279__i] = arguments[G__24279__i + 1]; ++G__24279__i;}
  _ = new cljs.core.IndexedSeq(G__24279__a,0,null);
} 
return G__24278__delegate.call(this,warning_type,_);};
G__24278.cljs$lang$maxFixedArity = 1;
G__24278.cljs$lang$applyTo = (function (arglist__24280){
var warning_type = cljs.core.first(arglist__24280);
var _ = cljs.core.rest(arglist__24280);
return G__24278__delegate(warning_type,_);
});
G__24278.cljs$core$IFn$_invoke$arity$variadic = G__24278__delegate;
return G__24278;
})()
,cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$preamble_DASH_missing,(function (warning_type,info){
return ["Preamble resource file not found: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cst$kw$missing.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unprovided,(function (warning_type,info){
return ["Required namespace not provided for ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cst$kw$unprovided.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_var,(function (warning_type,info){
return [(cljs.core.truth_(cljs.core.cst$kw$macro_DASH_present_QMARK_.cljs$core$IFn$_invoke$arity$1(info))?"Can't take value of macro ":"Use of undeclared Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$private_DASH_var_DASH_access,(function (warning_type,info){
return ["var: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))," is not public"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_ns,(function (warning_type,p__24281){
var map__24282 = p__24281;
var map__24282__$1 = cljs.core.__destructure_map(map__24282);
var info = map__24282__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282__$1,cljs.core.cst$kw$js_DASH_provide);
return ["No such namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljs),", ",cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljc),", or JavaScript source providing \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),"\"",((clojure.string.includes_QMARK_(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1(ns_sym),"_"))?" (Please check that namespaces with dashes use underscores in the ClojureScript file name)":null)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns,(function (warning_type,p__24283){
var map__24284 = p__24283;
var map__24284__$1 = cljs.core.__destructure_map(map__24284);
var info = map__24284__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,cljs.core.cst$kw$js_DASH_provide);
return ["No such macros namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$clj)," or ",cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljc)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dynamic,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info))," not declared ^:dynamic"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$redef,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))," already refers to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))))," being replaced by: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$redef_DASH_in_DASH_file,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(info))," is being replaced"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_var,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))))," no longer fn, references are stale"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_arity,(function (warning_type,info){
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$argc.cljs$core$IFn$_invoke$arity$1(info)),") passed to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = cljs.core.cst$kw$ctor.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info))))," is deprecated"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$declared_DASH_arglists_DASH_mismatch,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))))," declared arglists ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(info))," mismatch defined arglists ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$defined.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,(function (warning_type,info){
return ["Invalid :refer, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lib.cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))," does not exist"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_deprecated,(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," is deprecated"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,(function (warning_type,info){
return ["Can't resolve protocol symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,(function (warning_type,info){
return ["Symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," is not a protocol"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,(function (warning_type,info){
if(cljs.core.truth_(cljs.core.cst$kw$no_DASH_such_DASH_method.cljs$core$IFn$_invoke$arity$1(info))){
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," does not declare method called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))," does not declare arity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$invalid_DASH_arity.cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,(function (warning_type,info){
return ["Duplicated methods in protocol implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," implemented multiple times"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," declares method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_with_DASH_overwriting_DASH_method,(function (warning_type,info){
var overwritten_protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$existing.cljs$core$IFn$_invoke$arity$1(info));
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," is overwriting ",(cljs.core.truth_(overwritten_protocol)?"method":"function")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),(cljs.core.truth_(overwritten_protocol)?[" of protocol ",cljs.core.name(overwritten_protocol)].join(''):null)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method,(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))," implements method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,(function (warning_type,info){
return ["Ignoring target object \"",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(info)], 0)),"\" passed in recur to protocol method head"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),": Can't have more than 1 variadic overload"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),": Can't have fixed arity function with more params than variadic function"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$overload_DASH_arity,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),": Can't have 2 overloads with same arity"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,(function (warning_type,info){
return ["Extending an existing JavaScript type - use a different symbol name ","instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$current_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info))," e.g ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suggested_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_arithmetic,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(info)),", all arguments must be numbers, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(info))," instead"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_array_DASH_access,(function (warning_type,p__24285){
var map__24286 = p__24285;
var map__24286__$1 = cljs.core.__destructure_map(map__24286);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$name);
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$types);
var G__24287 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget,G__24287)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$object,cljs.core.first(types))) || (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$string,null], null), null),cljs.core.rest(types)))))?[" (consider ",((((2) === cljs.core.count(types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_,G__24287)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$object,cljs.core.first(types))) || (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$string,null], null), null),cljs.core.rest(types)))))?[" (consider ",((((2) === cljs.core.count(types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset,G__24287)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$object,cljs.core.first(types))) || (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$string,null], null), null),cljs.core.butlast(cljs.core.rest(types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_,G__24287)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$object,cljs.core.first(types))) || (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$string,null], null), null),cljs.core.butlast(cljs.core.rest(types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24287)].join('')));

}
}
}
}
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke_DASH_ctor,(function (warning_type,info){
return ["Cannot invoke type constructor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info))))," as function "].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info))," is a single segment namespace"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$munged_DASH_namespace,(function (warning_type,p__24289){
var map__24290 = p__24289;
var map__24290__$1 = cljs.core.__destructure_map(map__24290);
var info = map__24290__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,cljs.core.cst$kw$name);
var munged = cljs.core.munge(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24288_SHARP_){
if(cljs.core.truth_((cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1(p1__24288_SHARP_) : cljs.analyzer.js_reserved.call(null,p1__24288_SHARP_)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24288_SHARP_),"$"].join('');
} else {
return p1__24288_SHARP_;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name),/\./))));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," contains a reserved JavaScript keyword,"," the corresponding Google Closure namespace will be munged to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_DASH_var_DASH_clash,(function (warning_type,p__24291){
var map__24292 = p__24291;
var map__24292__$1 = cljs.core.__destructure_map(map__24292);
var info = map__24292__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24292__$1,cljs.core.cst$kw$ns);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24292__$1,cljs.core.cst$kw$var);
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," clashes with var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$non_DASH_dynamic_DASH_earmuffed_DASH_var,(function (warning_type,p__24293){
var map__24294 = p__24293;
var map__24294__$1 = cljs.core.__destructure_map(map__24294);
var info = map__24294__$1;
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24294__$1,cljs.core.cst$kw$var);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," not declared dynamic and thus is not dynamically rebindable, but its name ","suggests otherwise. Please either indicate ^:dynamic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," or change the name"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,(function (warning_type,p__24295){
var map__24296 = p__24295;
var map__24296__$1 = cljs.core.__destructure_map(map__24296);
var info = map__24296__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24296__$1,cljs.core.cst$kw$protocol);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24296__$1,cljs.core.cst$kw$method);
return ["Bad extend-type method shape for protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),", method arities must be grouped together"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,(function (warning_type,p__24297){
var map__24298 = p__24297;
var map__24298__$1 = cljs.core.__destructure_map(map__24298);
var info = map__24298__$1;
var module_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$module_DASH_type);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,cljs.core.cst$kw$file);
return ["Unsupported JavaScript module type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,(function (warning_type,p__24299){
var map__24300 = p__24299;
var map__24300__$1 = cljs.core.__destructure_map(map__24300);
var preprocess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24300__$1,cljs.core.cst$kw$preprocess);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24300__$1,cljs.core.cst$kw$file);
return ["Unsupported preprocess value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,(function (warning_type,p__24301){
var map__24302 = p__24301;
var map__24302__$1 = cljs.core.__destructure_map(map__24302);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24302__$1,cljs.core.cst$kw$name);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," is shadowed by a local"].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$infer_DASH_warning,(function (warning_type,p__24303){
var map__24304 = p__24303;
var map__24304__$1 = cljs.core.__destructure_map(map__24304);
var warn_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24304__$1,cljs.core.cst$kw$warn_DASH_type);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24304__$1,cljs.core.cst$kw$form);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24304__$1,cljs.core.cst$kw$type);
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24304__$1,cljs.core.cst$kw$property);
var G__24305 = warn_type;
var G__24305__$1 = (((G__24305 instanceof cljs.core.Keyword))?G__24305.fqn:null);
switch (G__24305__$1) {
case "target":
return ["Cannot infer target type in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),""].join('');

break;
case "property":
return ["Cannot resolve property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," for inferred type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
case "object":
return ["Adding extern to Object for property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," due to ","ambiguous expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24305__$1)].join('')));

}
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_((warning_type.cljs$core$IFn$_invoke$arity$1 ? warning_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_) : warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_)))){
var temp__5753__auto__ = (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(warning_type,extra) : cljs.analyzer.error_message.call(null,warning_type,extra));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
var _STAR_print_fn_STAR__orig_val__24307 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__24308 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24308);

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__24309 = env;
var G__24310 = ["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
return (cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2(G__24309,G__24310) : cljs.analyzer.message.call(null,G__24309,G__24310));
})()], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24307);
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
var G__24311 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__24312 = (n__$1 - (1));
ret = G__24311;
n__$1 = G__24312;
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.repeat_char("0",(pad - len))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join(''):hex);
return ["_u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex__$1),"_"].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error(["constant type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(value))," not supported"].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),(1)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
var name__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",name))?"_DOT_":clojure.string.replace(clojure.string.replace(cljs.core.munge(clojure.string.replace(name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,(function (p1__24313_SHARP_){
return cljs.analyzer.hex_format(p1__24313_SHARP_,(4));
})));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([prefix,name__$1].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
var G__24315 = arguments.length;
switch (G__24315) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(null,val);
}));

(cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__24316 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table], null),(function (table){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(table,val))){
return table;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,val,cljs.analyzer.gen_constant_id(val));
}
}));
if(cljs.core.truth_(env)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__24316,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$cljs$analyzer_SLASH_constants], null),(function (p__24317){
var map__24318 = p__24317;
var map__24318__$1 = cljs.core.__destructure_map(map__24318);
var constants = map__24318__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24318__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24318__$1,cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY);
var G__24319 = constants;
if((!(cljs.core.contains_QMARK_(seen,val)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__24319,cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$order,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,val)], 0));
} else {
return G__24319;
}
}));
} else {
return G__24316;
}
}));
}));

(cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2);

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$core], null),cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null);
cljs.analyzer.namespaces = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.t_cljs$analyzer24321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.analyzer.t_cljs$analyzer24321 = (function (meta24322){
this.meta24322 = meta24322;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.analyzer.t_cljs$analyzer24321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24323,meta24322__$1){
var self__ = this;
var _24323__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer24321(meta24322__$1));
}));

(cljs.analyzer.t_cljs$analyzer24321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24323){
var self__ = this;
var _24323__$1 = this;
return self__.meta24322;
}));

(cljs.analyzer.t_cljs$analyzer24321.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((!((cljs.env._STAR_compiler_STAR_ == null)))){
return cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
} else {
return cljs.analyzer.default_namespaces;
}
}));

(cljs.analyzer.t_cljs$analyzer24321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta24322], null);
}));

(cljs.analyzer.t_cljs$analyzer24321.cljs$lang$type = true);

(cljs.analyzer.t_cljs$analyzer24321.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer24321");

(cljs.analyzer.t_cljs$analyzer24321.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.analyzer/t_cljs$analyzer24321");
}));

/**
 * Positional factory function for cljs.analyzer/t_cljs$analyzer24321.
 */
cljs.analyzer.__GT_t_cljs$analyzer24321 = (function cljs$analyzer$__GT_t_cljs$analyzer24321(meta24322){
return (new cljs.analyzer.t_cljs$analyzer24321(meta24322));
});

}

return (new cljs.analyzer.t_cljs$analyzer24321(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var G__24325 = arguments.length;
switch (G__24325) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,key);
}));

(cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var temp__5755__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cenv),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,key], null));
if((temp__5755__auto__ == null)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$user,key)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null);
} else {
return null;
}
} else {
var ns = temp__5755__auto__;
return ns;
}
}));

(cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2);

cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__4212__auto__ = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
var G__24328 = arguments.length;
switch (G__24328) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2(ns,false);
}));

(cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__4212__auto__ = (cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros) == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24329){
var vec__24330 = p__24329;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24330,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24330,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta(v);
var ns__$1 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vm,cljs.core.cst$kw$ns,ns__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.cst$kw$macro,true], 0));
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24333){
var vec__24334 = p__24333;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24334,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_(ns)))));
} else {
return null;
}
}));

(cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2);

/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__24141__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__24141__auto__ == null)){
(cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0());
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$locals,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fn_DASH_scope,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$js_DASH_globals,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24338_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__24338_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$name,p1__24338_SHARP_,cljs.core.cst$kw$ns,cljs.core.cst$sym$js], null)],null));
}),cljs.core.list(cljs.core.cst$sym$alert,cljs.core.cst$sym$window,cljs.core.cst$sym$document,cljs.core.cst$sym$console,cljs.core.cst$sym$escape,cljs.core.cst$sym$unescape,cljs.core.cst$sym$screen,cljs.core.cst$sym$location,cljs.core.cst$sym$navigator,cljs.core.cst$sym$history,cljs.core.cst$sym$location,cljs.core.cst$sym$global,cljs.core.cst$sym$process,cljs.core.cst$sym$require,cljs.core.cst$sym$module,cljs.core.cst$sym$exports)))], null);
}finally {if((val__24141__auto__ == null)){
(cljs.env._STAR_compiler_STAR_ = null);
} else {
}
}});
cljs.analyzer.source_info__GT_error_data = (function cljs$analyzer$source_info__GT_error_data(p__24339){
var map__24340 = p__24339;
var map__24340__$1 = cljs.core.__destructure_map(map__24340);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340__$1,cljs.core.cst$kw$column);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$clojure$error_SLASH_source,file,cljs.core.cst$kw$clojure$error_SLASH_line,line,cljs.core.cst$kw$clojure$error_SLASH_column,column], null);
});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var G__24342 = arguments.length;
switch (G__24342) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(null,env);
} else {
return null;
}
}));

(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
var G__24343 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$sym$cljs$core))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.cst$kw$line,cljs.analyzer.get_line(name,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(name,env)], null);
if(cljs.core.truth_(cljs.core.cst$kw$root_DASH_source_DASH_info.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__24343,cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$root_DASH_source_DASH_info], null))], 0));
} else {
return G__24343;
}
}));

(cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2);

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[" at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[" in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__24345 = cljs.core.seq(cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__24346 = null;
var count__24347 = (0);
var i__24348 = (0);
while(true){
if((i__24348 < count__24347)){
var handler = chunk__24346.cljs$core$IIndexed$_nth$arity$2(null,i__24348);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));


var G__24349 = seq__24345;
var G__24350 = chunk__24346;
var G__24351 = count__24347;
var G__24352 = (i__24348 + (1));
seq__24345 = G__24349;
chunk__24346 = G__24350;
count__24347 = G__24351;
i__24348 = G__24352;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24345);
if(temp__5753__auto__){
var seq__24345__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24345__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__24345__$1);
var G__24353 = cljs.core.chunk_rest(seq__24345__$1);
var G__24354 = c__4638__auto__;
var G__24355 = cljs.core.count(c__4638__auto__);
var G__24356 = (0);
seq__24345 = G__24353;
chunk__24346 = G__24354;
count__24347 = G__24355;
i__24348 = G__24356;
continue;
} else {
var handler = cljs.core.first(seq__24345__$1);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));


var G__24357 = cljs.core.next(seq__24345__$1);
var G__24358 = null;
var G__24359 = (0);
var G__24360 = (0);
seq__24345 = G__24357;
chunk__24346 = G__24358;
count__24347 = G__24359;
i__24348 = G__24360;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.accumulating_warning_handler = (function cljs$analyzer$accumulating_warning_handler(warn_acc){
return (function (warning_type,env,extra){
if(cljs.core.truth_((warning_type.cljs$core$IFn$_invoke$arity$1 ? warning_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_) : warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(warn_acc,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warning_type,env,extra], null));
} else {
return null;
}
});
});
cljs.analyzer.replay_accumulated_warnings = (function cljs$analyzer$replay_accumulated_warnings(warn_acc){
return cljs.core.run_BANG_((function (p1__24361_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.warning,p1__24361_SHARP_);
}),cljs.core.deref(warn_acc));
});
cljs.analyzer.error_data = (function cljs$analyzer$error_data(var_args){
var G__24363 = arguments.length;
switch (G__24363) {
case 2:
return cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2 = (function (env,phase){
return cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3(env,phase,null);
}));

(cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3 = (function (env,phase,symbol){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.analyzer.source_info__GT_error_data(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_phase,phase], null),(cljs.core.truth_(symbol)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_symbol,symbol], null):null)], 0));
}));

(cljs.analyzer.error_data.cljs$lang$maxFixedArity = 3);

cljs.analyzer.compile_syntax_error = (function cljs$analyzer$compile_syntax_error(env,msg,symbol){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$compile_DASH_syntax_DASH_check,symbol),(new Error(msg)));
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
var G__24366 = arguments.length;
switch (G__24366) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,msg,null);
}));

(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.message(env,msg),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$tag,cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error),cause);
}));

(cljs.analyzer.error.cljs$lang$maxFixedArity = 3);

cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)));
});
cljs.analyzer.has_error_data_QMARK_ = (function cljs$analyzer$has_error_data_QMARK_(ex){
return cljs.core.contains_QMARK_(cljs.core.ex_data(ex),cljs.core.cst$kw$clojure$error_SLASH_phase);
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$String,"null",cljs.core.cst$sym$goog$string,"null",cljs.core.cst$sym$goog,"null",cljs.core.cst$sym$goog$object,"null",cljs.core.cst$sym$Math,"null",cljs.core.cst$sym$goog$array,"null"], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_(cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prefix,prefix__$1,cljs.core.cst$kw$suffix,suffix__$1,cljs.core.cst$kw$macro_DASH_present_QMARK_,(!(((function (){var G__24369 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1));
var G__24370 = env__$1;
return (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(G__24369,G__24370) : cljs.analyzer.get_expander.call(null,G__24369,G__24370));
})() == null)))], null));
});
});
/**
 * If a library name has the form foo$bar, return a vector of the library and
 * the sublibrary property.
 */
cljs.analyzer.lib_AMPERSAND_sublib = (function cljs$analyzer$lib_AMPERSAND_sublib(lib){
var temp__5751__auto__ = cljs.core.re_matches(/(.*)\$(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(temp__5751__auto__)){
var xs = temp__5751__auto__;
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),xs);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,null], null);
}
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix))){
return null;
} else {
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env);
return (((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)))) || ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)))));
}
});
cljs.analyzer.internal_js_module_exists_QMARK_ = (function cljs$analyzer$internal_js_module_exists_QMARK_(js_module_index,module){
return cljs.core.contains_QMARK_(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__24371){
var vec__24372 = p__24371;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24372,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null);
})),js_module_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module));
});
cljs.analyzer.js_module_exists_QMARK__STAR_ = cljs.core.memoize(cljs.analyzer.internal_js_module_exists_QMARK_);
cljs.analyzer.js_module_exists_QMARK_ = (function cljs$analyzer$js_module_exists_QMARK_(module){
var G__24375 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index], null));
var G__24376 = module;
return (cljs.analyzer.js_module_exists_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.js_module_exists_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2(G__24375,G__24376) : cljs.analyzer.js_module_exists_QMARK__STAR_.call(null,G__24375,G__24376));
});
cljs.analyzer.node_module_dep_QMARK_ = (function cljs$analyzer$node_module_dep_QMARK_(module){
try{return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")) && (cljs.core.boolean$((function (){var or__4212__auto__ = require.resolve(cljs.core.str.cljs$core$IFn$_invoke$arity$1(module));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return require.resolve(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(module)));
}
})())));
}catch (e24377){var _ = e24377;
return false;
}});
cljs.analyzer.dep_has_global_exports_QMARK_ = (function cljs$analyzer$dep_has_global_exports_QMARK_(module){
var vec__24378 = cljs.analyzer.lib_AMPERSAND_sublib(module);
var module__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24378,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24378,(1),null);
var global_exports = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_dependency_DASH_index,cljs.core.str.cljs$core$IFn$_invoke$arity$1(module__$1),cljs.core.cst$kw$global_DASH_exports], null));
return ((cljs.core.contains_QMARK_(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(module__$1))) || (cljs.core.contains_QMARK_(global_exports,cljs.core.name(module__$1))));
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
var G__24382 = arguments.length;
switch (G__24382) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning(env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,warn);
}));

(cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix);
var suffix_str = (((((!((".." === sufstr)))) && (/\./.test(sufstr))))?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix_str);
if((((!(cljs.analyzer.implicit_import_QMARK_(env,prefix,suffix__$1)))) && ((((!(cljs.analyzer.loaded_js_ns_QMARK_(env,prefix)))) && ((((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core,prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$unquote,suffix__$1)))))) && ((((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.cst$kw$defs,suffix__$1) == null)) && (cljs.core.not(cljs.analyzer.js_module_exists_QMARK_(prefix))))))))))){
return (missing_fn.cljs$core$IFn$_invoke$arity$3 ? missing_fn.cljs$core$IFn$_invoke$arity$3(env,prefix,suffix__$1) : missing_fn.call(null,env,prefix,suffix__$1));
} else {
return null;
}
}));

(cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4);

cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,["Unable to resolve var: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)," in this context"].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(var_args){
var G__24385 = arguments.length;
switch (G__24385) {
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3(env,name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name));
}));

(cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
}));

(cljs.analyzer.resolve_ns_alias.cljs$lang$maxFixedArity = 3);

cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(var_args){
var G__24388 = arguments.length;
switch (G__24388) {
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3(env,name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name));
}));

(cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
}));

(cljs.analyzer.resolve_macro_ns_alias.cljs$lang$maxFixedArity = 3);

/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core,ns_sym)) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.implicit_nses,ns_sym) == null)) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_sym) == null)) && (cljs.core.not(cljs.analyzer.js_module_exists_QMARK_(ns_sym))))))))))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_ns,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,ns_sym,cljs.core.cst$kw$js_DASH_provide,ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__4210__auto__ = (function (){var or__4212__auto__ = (!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$sym$cljs$core,cljs.core.cst$kw$defs,sym) == null)));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var temp__5755__auto__ = (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(sym,env) : cljs.analyzer.get_expander.call(null,sym,env));
if((temp__5755__auto__ == null)){
return false;
} else {
var mac = temp__5755__auto__;
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns.getName(),cljs.core.cst$sym$cljs$core$macros);
}
}
})();
if(and__4210__auto__){
return (!(cljs.core.contains_QMARK_(cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym)));
} else {
return and__4210__auto__;
}
});
/**
 * Is sym public?
 */
cljs.analyzer.public_name_QMARK_ = (function cljs$analyzer$public_name_QMARK_(ns,sym){
var var_ast = (function (){var or__4212__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs,sym);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(ns),"$macros"].join('')),cljs.core.cst$kw$defs,sym);
}
})();
return (((!((var_ast == null)))) && (cljs.core.not((function (){var or__4212__auto__ = cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(var_ast);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$anonymous.cljs$core$IFn$_invoke$arity$1(var_ast);
}
})())));
});
cljs.analyzer.js_tag_QMARK_ = (function cljs$analyzer$js_tag_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",cljs.core.namespace(x))))));
});
cljs.analyzer.normalize_js_tag = (function cljs$analyzer$normalize_js_tag(x){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,x)))){
return cljs.core.with_meta(cljs.core.cst$sym$js,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(x),/\./))),cljs.core.cst$sym$prototype)], null));
} else {
return x;
}
});
/**
 * Ensures that a type tag is a set.
 */
cljs.analyzer.__GT_type_set = (function cljs$analyzer$__GT_type_set(t){
if(cljs.analyzer.impl.cljs_set_QMARK_(t)){
return t;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([t]);
}
});
cljs.analyzer.canonicalize_type = (function cljs$analyzer$canonicalize_type(t){

if((t instanceof cljs.core.Symbol)){
return t;
} else {
if(cljs.core.empty_QMARK_(t)){
return null;
} else {
if(((1) === cljs.core.count(t))){
return cljs.core.first(t);
} else {
if(cljs.core.contains_QMARK_(t,cljs.core.cst$sym$any)){
return cljs.core.cst$sym$any;
} else {
if(cljs.core.contains_QMARK_(t,cljs.core.cst$sym$seq)){
var res = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(t,cljs.core.cst$sym$clj_DASH_nil);
if(((1) === cljs.core.count(res))){
return cljs.core.cst$sym$seq;
} else {
return res;
}
} else {
return t;

}
}
}
}
}
});
/**
 * Produces a union of types.
 */
cljs.analyzer.add_types = (function cljs$analyzer$add_types(var_args){
var G__24394 = arguments.length;
switch (G__24394) {
case 0:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___24396 = arguments.length;
var i__4819__auto___24397 = (0);
while(true){
if((i__4819__auto___24397 < len__4818__auto___24396)){
args_arr__4839__auto__.push((arguments[i__4819__auto___24397]));

var G__24398 = (i__4819__auto___24397 + (1));
i__4819__auto___24397 = G__24398;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.cst$sym$any;
}));

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$1 = (function (t1){
return t1;
}));

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2 = (function (t1,t2){
if((((t1 == null)) || ((t2 == null)))){
return cljs.core.cst$sym$any;
} else {
return cljs.analyzer.canonicalize_type(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.__GT_type_set(t1),cljs.analyzer.__GT_type_set(t2)));
}
}));

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$variadic = (function (t1,t2,ts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.add_types,cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2(t1,t2),ts);
}));

/** @this {Function} */
(cljs.analyzer.add_types.cljs$lang$applyTo = (function (seq24391){
var G__24392 = cljs.core.first(seq24391);
var seq24391__$1 = cljs.core.next(seq24391);
var G__24393 = cljs.core.first(seq24391__$1);
var seq24391__$2 = cljs.core.next(seq24391__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24392,G__24393,seq24391__$2);
}));

(cljs.analyzer.add_types.cljs$lang$maxFixedArity = (2));

cljs.analyzer.alias__GT_type = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$sym$object,cljs.core.cst$sym$Object,cljs.core.cst$sym$string,cljs.core.cst$sym$String,cljs.core.cst$sym$number,cljs.core.cst$sym$Number,cljs.core.cst$sym$array,cljs.core.cst$sym$Array,cljs.core.cst$sym$function,cljs.core.cst$sym$Function,cljs.core.cst$sym$boolean,cljs.core.cst$sym$Boolean,cljs.core.cst$sym$symbol,cljs.core.cst$sym$Symbol], null);
cljs.analyzer.has_extern_QMARK__STAR_ = (function cljs$analyzer$has_extern_QMARK__STAR_(var_args){
var G__24400 = arguments.length;
switch (G__24400) {
case 2:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var pre__$1 = (function (){var temp__5755__auto__ = cljs.core.find(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(externs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Window,cljs.core.cst$sym$prototype], null)),cljs.core.first(pre));
if((temp__5755__auto__ == null)){
return pre;
} else {
var me = temp__5755__auto__;
var temp__5755__auto____$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(me)));
if((temp__5755__auto____$1 == null)){
return pre;
} else {
var tag = temp__5755__auto____$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.cst$sym$prototype], null),cljs.core.next(pre));
}
}
})();
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3(pre__$1,externs,externs);
}));

(cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (pre,externs,top){
while(true){
if(cljs.core.empty_QMARK_(pre)){
return true;
} else {
var x = cljs.core.first(pre);
var me = cljs.core.find(externs,x);
if(cljs.core.not(me)){
return false;
} else {
var vec__24401 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24401,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24401,(1),null);
var xmeta = cljs.core.meta(x_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Function,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(xmeta));
if(and__4210__auto__){
return cljs.core.cst$kw$ctor.cljs$core$IFn$_invoke$arity$1(xmeta);
} else {
return and__4210__auto__;
}
})())){
var or__4212__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$prototype], null),cljs.core.next(pre)),externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.next(pre),externs_SINGLEQUOTE_,top);
}
} else {
var G__24405 = cljs.core.next(pre);
var G__24406 = externs_SINGLEQUOTE_;
var G__24407 = top;
pre = G__24405;
externs = G__24406;
top = G__24407;
continue;
}

}

}
break;
}
}));

(cljs.analyzer.has_extern_QMARK__STAR_.cljs$lang$maxFixedArity = 3);

cljs.analyzer.has_extern_QMARK_ = (function cljs$analyzer$has_extern_QMARK_(var_args){
var G__24409 = arguments.length;
switch (G__24409) {
case 1:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2(pre,cljs.analyzer.get_externs());
}));

(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var or__4212__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2(pre,externs);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pre)))?(function (){var x = cljs.core.first(pre);
var or__4212__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(externs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Window,cljs.core.cst$sym$prototype], null),x));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(externs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Number], null),x));
}
})():null);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(pre)),"cljs$");
}
}
}));

(cljs.analyzer.has_extern_QMARK_.cljs$lang$maxFixedArity = 2);

cljs.analyzer.js_tag = (function cljs$analyzer$js_tag(var_args){
var G__24412 = arguments.length;
switch (G__24412) {
case 1:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(pre,cljs.core.cst$kw$tag);
}));

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2 = (function (pre,tag_type){
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3(pre,tag_type,cljs.analyzer.get_externs());
}));

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3 = (function (pre,tag_type,externs){
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4(pre,tag_type,externs,externs);
}));

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4 = (function (pre,tag_type,externs,top){
var temp__5753__auto__ = cljs.core.find(externs,cljs.core.first(pre));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__24413 = temp__5753__auto__;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24413,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24413,(1),null);
var me = vec__24413;
var tag = (function (){var G__24416 = cljs.core.meta(p);
return (tag_type.cljs$core$IFn$_invoke$arity$1 ? tag_type.cljs$core$IFn$_invoke$arity$1(G__24416) : tag_type.call(null,G__24416));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),(1))){
if(cljs.core.truth_(tag)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.analyzer.alias__GT_type.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.alias__GT_type.cljs$core$IFn$_invoke$arity$2(tag,tag) : cljs.analyzer.alias__GT_type.call(null,tag,tag))));
} else {
return null;
}
} else {
var or__4212__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4(cljs.core.next(pre),tag_type,externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$prototype], null),cljs.core.next(pre)),tag_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(top,tag),top);
}
}
} else {
return null;
}
}));

(cljs.analyzer.js_tag.cljs$lang$maxFixedArity = 4);

cljs.analyzer.dotted_symbol_QMARK_ = (function cljs$analyzer$dotted_symbol_QMARK_(sym){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
return ((goog.string.contains(s,".")) && ((!(goog.string.contains(s,"..")))));
});
cljs.analyzer.munge_node_lib = (function cljs$analyzer$munge_node_lib(name){
return ["node$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[.\\/]/,"$$")))].join('');
});
cljs.analyzer.munge_global_export = (function cljs$analyzer$munge_global_export(name){
return ["global$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[.\\/]/,"$$")))].join('');
});
/**
 * Takes a namespace and an unqualified symbol and potentially returns a new
 *   symbol to be used in lieu of the original.
 */
cljs.analyzer.resolve_alias = (function cljs$analyzer$resolve_alias(ns,sym){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core,ns);
if(and__4210__auto__){
var and__4210__auto____$1 = (function (){var fexpr__24418 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$aget,"null",cljs.core.cst$sym$aset,"null"], null), null);
return (fexpr__24418.cljs$core$IFn$_invoke$arity$1 ? fexpr__24418.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__24418.call(null,sym));
})();
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.analyzer.checked_arrays();
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warn,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$aget,cljs.core.cst$sym$checked_DASH_aget,cljs.core.cst$sym$aset,cljs.core.cst$sym$checked_DASH_aset], null),cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$aget,cljs.core.cst$sym$checked_DASH_aget_SINGLEQUOTE_,cljs.core.cst$sym$aset,cljs.core.cst$sym$checked_DASH_aset_SINGLEQUOTE_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.checked_arrays(),sym], null));
} else {
return sym;
}
});
cljs.analyzer.ns__GT_module_type = (function cljs$analyzer$ns__GT_module_type(ns){
if(cljs.core.truth_(cljs.analyzer.js_module_exists_QMARK_(ns))){
return cljs.core.cst$kw$js;
} else {
if(cljs.analyzer.node_module_dep_QMARK_(ns)){
return cljs.core.cst$kw$node;
} else {
if(cljs.analyzer.dep_has_global_exports_QMARK_(ns)){
return cljs.core.cst$kw$global;
} else {
return null;
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.resolve_STAR_ !== 'undefined')){
} else {
cljs.analyzer.resolve_STAR_ = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__24419 = cljs.core.get_global_hierarchy;
return (fexpr__24419.cljs$core$IFn$_invoke$arity$0 ? fexpr__24419.cljs$core$IFn$_invoke$arity$0() : fexpr__24419.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","resolve*"),(function (env,sym,full_ns,current_ns){
return cljs.analyzer.ns__GT_module_type(full_ns);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.analyzer.resolve_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (env,sym,full_ns,current_ns){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),cljs.core.name(sym)),cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$ns,full_ns], null);
}));
cljs.analyzer.extern_pre = (function cljs$analyzer$extern_pre(sym,current_ns){
var pre = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Object], null),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),/\./))));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$externs], null),pre),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0));
}

return pre;
});
cljs.analyzer.node_like_QMARK_ = (function cljs$analyzer$node_like_QMARK_(var_args){
var G__24421 = arguments.length;
switch (G__24421) {
case 0:
return cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.compiler_options());
}));

(cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core.cst$kw$nodejs_DASH_rt.cljs$core$IFn$_invoke$arity$1(opts) === false));
}));

(cljs.analyzer.node_like_QMARK_.cljs$lang$maxFixedArity = 1);

cljs.analyzer.resolve_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$node,(function (env,sym,full_ns,current_ns){
if(cljs.core.truth_(cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$0())){
var pre = cljs.analyzer.extern_pre(sym,current_ns);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ns,current_ns,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_node_lib(full_ns),".",cljs.core.name(sym)].join('')),cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$tag,cljs.core.with_meta(cljs.core.cst$sym$js,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,pre], null)),cljs.core.cst$kw$foreign,true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ns,current_ns,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_node_lib(full_ns),".",cljs.core.name(sym)].join('')),cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$foreign,true], null);
}
}));
cljs.analyzer.resolve_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$global,(function (env,sym,full_ns,current_ns){
var pre = cljs.analyzer.extern_pre(sym,current_ns);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ns,current_ns,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_global_export(full_ns),".",cljs.core.name(sym)].join('')),cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$tag,cljs.core.with_meta(cljs.core.cst$sym$js,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,pre], null)),cljs.core.cst$kw$foreign,true], null);
}));
/**
 * Specially-treated symbols for which we don't trigger :private-var-access warnings.
 */
cljs.analyzer.private_var_access_exceptions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_,"null",cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_,"null",cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget,"null",cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset,"null"], null), null);
cljs.analyzer.resolve_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,sym,full_ns,current_ns){
var sym_ast = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),cljs.core.name(sym));
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_ns,full_ns);
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(sym_ast);
if(cljs.core.truth_(and__4210__auto____$1)){
return ((cljs.core.not(cljs.analyzer._STAR_private_var_access_nowarn_STAR_)) && ((!(cljs.core.contains_QMARK_(cljs.analyzer.private_var_access_exceptions,sym_name)))));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$private_DASH_var_DASH_access,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,sym_name], null));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym_ast,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sym_name,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$ns,full_ns], null)], 0));
}));
cljs.analyzer.required_QMARK_ = (function cljs$analyzer$required_QMARK_(ns,env){
return ((cljs.core.contains_QMARK_(cljs.core.set(cljs.core.vals(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$requires))),ns)) || (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.vals(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$uses))),ns)));
});
/**
 * Returns true if ns is a required namespace and a JavaScript module that
 * might be invokeable as a function.
 */
cljs.analyzer.invokeable_ns_QMARK_ = (function cljs$analyzer$invokeable_ns_QMARK_(ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns);
var and__4210__auto__ = cljs.analyzer.required_QMARK_(ns__$1,env);
if(and__4210__auto__){
var or__4212__auto__ = cljs.analyzer.js_module_exists_QMARK_(ns__$1);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ((cljs.analyzer.node_module_dep_QMARK_(ns__$1)) || (cljs.analyzer.dep_has_global_exports_QMARK_(ns__$1)));
}
} else {
return and__4210__auto__;
}
});
cljs.analyzer.resolve_invokeable_ns = (function cljs$analyzer$resolve_invokeable_ns(ns,current_ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns);
var module_type = cljs.analyzer.ns__GT_module_type(ns__$1);
var G__24423 = module_type;
var G__24423__$1 = (((G__24423 instanceof cljs.core.Keyword))?G__24423.fqn:null);
switch (G__24423__$1) {
case "js":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$js_DASH_module_DASH_index,ns__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns__$1);
}
})()),cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$ns,cljs.core.cst$sym$js], null);

break;
case "node":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.analyzer.munge_node_lib(cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns__$1))),cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$ns,current_ns], null);

break;
case "global":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.analyzer.munge_global_export(cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns__$1))),cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$ns,current_ns], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24423__$1)].join('')));

}
});
cljs.analyzer.handle_symbol_local = (function cljs$analyzer$handle_symbol_local(sym,lb){
if((lb instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,sym], null);
} else {
return lb;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
var G__24427 = arguments.length;
switch (G__24427) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,null);
}));

(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$4(env,sym,confirm,true);
}));

(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$4 = (function (env,sym,confirm,default_QMARK_){
while(true){
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
if(("js" === cljs.core.namespace(sym))){
var symn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var shadowed_by_local = cljs.analyzer.handle_symbol_local(symn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,symn));
if((!((shadowed_by_local == null)))){
cljs.analyzer.warning(cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,sym], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadowed_by_local,cljs.core.cst$kw$op,cljs.core.cst$kw$local);
} else {
var pre = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),/\./)));
if(((cljs.core.not(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre))) && (cljs.core.not(cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$externs], null),pre),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,sym,cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_var,cljs.core.cst$kw$ns,cljs.core.cst$sym$js,cljs.core.cst$kw$tag,cljs.core.with_meta((function (){var or__4212__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1(pre);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.cst$sym$js;
}
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,pre], null))], null),(function (){var temp__5753__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(pre,cljs.core.cst$kw$ret_DASH_tag);
if(cljs.core.truth_(temp__5753__auto__)){
var ret_tag = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$js_DASH_fn_DASH_var,true,cljs.core.cst$kw$ret_DASH_tag,ret_tag], null);
} else {
return null;
}
})()], 0));

}
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var lb = cljs.analyzer.handle_symbol_local(sym,cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,sym));
var current_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
if((!((lb == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lb,cljs.core.cst$kw$op,cljs.core.cst$kw$local);
} else {
if((!((cljs.core.namespace(sym) == null)))){
var ns = cljs.core.namespace(sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3(env,ns__$1,(function (){var or__4212__auto__ = (function (){var and__4210__auto__ = cljs.analyzer.js_module_exists_QMARK_(ns__$1);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$js_DASH_module_DASH_index,ns__$1,cljs.core.cst$kw$name);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns__$1);
}
})());
if((!((confirm == null)))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_ns,full_ns)){
cljs.analyzer.confirm_ns(env,full_ns);
} else {
}

var G__24428_24435 = env;
var G__24429_24436 = full_ns;
var G__24430_24437 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__24428_24435,G__24429_24436,G__24430_24437) : confirm.call(null,G__24428_24435,G__24429_24436,G__24430_24437));
} else {
}

return (cljs.analyzer.resolve_STAR_.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.resolve_STAR_.cljs$core$IFn$_invoke$arity$4(env,sym,full_ns,current_ns) : cljs.analyzer.resolve_STAR_.call(null,env,sym,full_ns,current_ns));
} else {
if(cljs.analyzer.dotted_symbol_QMARK_(sym)){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx));
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx + (1)));
var temp__5751__auto__ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$4(env,prefix,null,false);
if(cljs.core.truth_(temp__5751__auto__)){
var resolved = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(resolved,cljs.core.cst$kw$name,((function (env,sym,confirm,default_QMARK_,resolved,temp__5751__auto__,idx,prefix,suffix,s,lb,current_ns,locals){
return (function (p1__24425_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24425_SHARP_),".",suffix].join(''));
});})(env,sym,confirm,default_QMARK_,resolved,temp__5751__auto__,idx,prefix,suffix,s,lb,current_ns,locals))
);
} else {
var idx__$1 = s.lastIndexOf(".");
var pre = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx__$1);
var suf = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx__$1 + (1)));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pre,suf),cljs.core.cst$kw$ns,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(pre)], null);
}
} else {
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$uses,sym) == null)))){
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$uses,sym);
return (cljs.analyzer.resolve_STAR_.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.resolve_STAR_.cljs$core$IFn$_invoke$arity$4(env,sym,full_ns,current_ns) : cljs.analyzer.resolve_STAR_.call(null,env,sym,full_ns,current_ns));
} else {
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$renames,sym) == null)))){
var qualified_symbol = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$renames,sym);
var full_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_symbol));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
return (cljs.analyzer.resolve_STAR_.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.resolve_STAR_.cljs$core$IFn$_invoke$arity$4(env,sym__$1,full_ns,current_ns) : cljs.analyzer.resolve_STAR_.call(null,env,sym__$1,full_ns,current_ns));
} else {
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$imports,sym) == null)))){
var G__24438 = env;
var G__24439 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$imports,sym);
var G__24440 = confirm;
var G__24441 = default_QMARK_;
env = G__24438;
sym = G__24439;
confirm = G__24440;
default_QMARK_ = G__24441;
continue;
} else {
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$defs,sym) == null)))){
if((!((confirm == null)))){
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(env,current_ns,sym) : confirm.call(null,env,current_ns,sym));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$ns,current_ns], null)], 0));
} else {
if(cljs.analyzer.core_name_QMARK_(env,sym)){
var sym__$1 = cljs.analyzer.resolve_alias(cljs.core.cst$sym$cljs$core,sym);
if((!((confirm == null)))){
var G__24431_24442 = env;
var G__24432_24443 = cljs.core.cst$sym$cljs$core;
var G__24433_24444 = sym__$1;
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__24431_24442,G__24432_24443,G__24433_24444) : confirm.call(null,G__24431_24442,G__24432_24443,G__24433_24444));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$sym$cljs$core,cljs.core.cst$kw$defs,sym__$1),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)),cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$ns,cljs.core.cst$sym$cljs$core], null)], 0));
} else {
if(cljs.core.truth_(cljs.analyzer.invokeable_ns_QMARK_(s,env))){
return cljs.analyzer.resolve_invokeable_ns(s,current_ns,env);
} else {
if(cljs.core.truth_(default_QMARK_)){
if((!((confirm == null)))){
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(env,current_ns,sym) : confirm.call(null,env,current_ns,sym));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,current_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.cst$kw$ns,current_ns], null)], 0));
} else {
return null;
}

}
}
}
}
}
}
}
}
}
}
break;
}
}));

(cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 4);

/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not(cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)))){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__24445 = cljs.core.seq(names);
var chunk__24446 = null;
var count__24447 = (0);
var i__24448 = (0);
while(true){
if((i__24448 < count__24447)){
var name = chunk__24446.cljs$core$IIndexed$_nth$arity$2(null,i__24448);
var env_24449__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_24450 = cljs.analyzer.resolve_existing_var(env_24449__$1,name);
if(cljs.core.truth_((function (){var and__4210__auto__ = ev_24450;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_24450));
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_24449__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_24450,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_24450)], null));
} else {
}


var G__24451 = seq__24445;
var G__24452 = chunk__24446;
var G__24453 = count__24447;
var G__24454 = (i__24448 + (1));
seq__24445 = G__24451;
chunk__24446 = G__24452;
count__24447 = G__24453;
i__24448 = G__24454;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24445);
if(temp__5753__auto__){
var seq__24445__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24445__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__24445__$1);
var G__24455 = cljs.core.chunk_rest(seq__24445__$1);
var G__24456 = c__4638__auto__;
var G__24457 = cljs.core.count(c__4638__auto__);
var G__24458 = (0);
seq__24445 = G__24455;
chunk__24446 = G__24456;
count__24447 = G__24457;
i__24448 = G__24458;
continue;
} else {
var name = cljs.core.first(seq__24445__$1);
var env_24459__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_24460 = cljs.analyzer.resolve_existing_var(env_24459__$1,name);
if(cljs.core.truth_((function (){var and__4210__auto__ = ev_24460;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_24460));
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_24459__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_24460,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_24460)], null));
} else {
}


var G__24461 = cljs.core.next(seq__24445__$1);
var G__24462 = null;
var G__24463 = (0);
var G__24464 = (0);
seq__24445 = G__24461;
chunk__24446 = G__24462;
count__24447 = G__24463;
i__24448 = G__24464;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces);
if((!((cljs.core.namespace(sym) == null)))){
var ns__$1 = cljs.core.namespace(sym);
var ns__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns__$2);
var full_ns__$1 = (((!(clojure.string.ends_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),"$macros"))))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),"$macros"].join('')):full_ns);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns__$1,cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null));
} else {
if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null)) == null)))){
var full_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,sym], null));
} else {
if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$rename_DASH_macros,sym], null)) == null)))){
var qualified_symbol = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$rename_DASH_macros,sym], null));
var full_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_symbol));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,sym__$1], null));
} else {
var ns__$1 = (((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$macros,sym], null)) == null))))?ns:((cljs.analyzer.core_name_QMARK_(env,sym))?cljs.analyzer.impl.CLJS_CORE_MACROS_SYM:null));
if((!((ns__$1 == null)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,cljs.core.cst$kw$defs,sym], null));
} else {
return null;
}

}
}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 22, [cljs.core.cst$sym$_AMPERSAND_,"null",cljs.core.cst$sym$case_STAR_,"null",cljs.core.cst$sym$defrecord_STAR_,"null",cljs.core.cst$sym$try,"null",cljs.core.cst$sym$ns_STAR_,"null",cljs.core.cst$sym$loop_STAR_,"null",cljs.core.cst$sym$do,"null",cljs.core.cst$sym$letfn_STAR_,"null",cljs.core.cst$sym$if,"null",cljs.core.cst$sym$new,"null",cljs.core.cst$sym$ns,"null",cljs.core.cst$sym$deftype_STAR_,"null",cljs.core.cst$sym$let_STAR_,"null",cljs.core.cst$sym$js_STAR_,"null",cljs.core.cst$sym$fn_STAR_,"null",cljs.core.cst$sym$recur,"null",cljs.core.cst$sym$set_BANG_,"null",cljs.core.cst$sym$_DOT_,"null",cljs.core.cst$sym$var,"null",cljs.core.cst$sym$quote,"null",cljs.core.cst$sym$throw,"null",cljs.core.cst$sym$def,"null"], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer._STAR_allow_ns_STAR_ = true;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$op,cljs.core.cst$kw$const,cljs.core.cst$kw$val,sym,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Keyword], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var temp__5755__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e)));
if((temp__5755__auto__ == null)){
var temp__5755__auto____$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(e);
if((temp__5755__auto____$1 == null)){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e));
} else {
var tag = temp__5755__auto____$1;
return tag;
}
} else {
var tag = temp__5755__auto__;
return tag;
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__4212__auto__ = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count(params);
return cljs.core.some((function (m){
var and__4210__auto__ = (function (){var or__4212__auto__ = (cljs.core.cst$kw$fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return m;
} else {
return and__4210__auto__;
}
}),methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((((!((t == null)))) && ((t instanceof cljs.core.Symbol)))){
var var$ = (function (){var _STAR_private_var_access_nowarn_STAR__orig_val__24465 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__24466 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__24466);

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,t);
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__24465);
}})();
var temp__5755__auto__ = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5755__auto__ == null)){
var temp__5755__auto____$1 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$));
if((temp__5755__auto____$1 == null)){
var temp__5755__auto____$2 = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5755__auto____$2 == null)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap,"null",cljs.core.cst$sym$cljs$core_SLASH_List,"null"], null), null),t);
} else {
var proto = temp__5755__auto____$2;
return proto;
}
} else {
var type = temp__5755__auto____$1;
return type;
}
} else {
var type = temp__5755__auto__;
return type;
}
} else {
return null;
}
});
cljs.analyzer.unwrap_quote = (function cljs$analyzer$unwrap_quote(p__24467){
var map__24468 = p__24467;
var map__24468__$1 = cljs.core.__destructure_map(map__24468);
var expr = map__24468__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24468__$1,cljs.core.cst$kw$op);
if(cljs.core.keyword_identical_QMARK_(op,cljs.core.cst$kw$quote)){
return cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(expr);
} else {
return expr;
}
});
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__24469 = cljs.analyzer.unwrap_quote(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(e));
var map__24469__$1 = cljs.core.__destructure_map(map__24469);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24469__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24469__$1,cljs.core.cst$kw$form);
var then_tag = (function (){var G__24470 = env;
var G__24471 = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24470,G__24471) : cljs.analyzer.infer_tag.call(null,G__24470,G__24471));
})();
if(((cljs.core.keyword_identical_QMARK_(op,cljs.core.cst$kw$const)) && ((((!((form == null)))) && ((!(form === false))))))){
return then_tag;
} else {
var else_tag = (function (){var G__24472 = env;
var G__24473 = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24472,G__24473) : cljs.analyzer.infer_tag.call(null,G__24472,G__24473));
})();
if(((cljs.core.symbol_identical_QMARK_(then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_(else_tag,cljs.analyzer.impl.IGNORE_SYM)))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_(then_tag,cljs.analyzer.impl.IGNORE_SYM)){
return else_tag;
} else {
if((((((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.impl.NOT_NATIVE,then_tag) == null)))) || (cljs.analyzer.type_QMARK_(env,then_tag)))) && ((((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.impl.NOT_NATIVE,else_tag) == null)))) || (cljs.analyzer.type_QMARK_(env,else_tag)))))){
return cljs.core.cst$sym$clj;
} else {
if((((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.impl.BOOLEAN_OR_SEQ,then_tag) == null)))) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.impl.BOOLEAN_OR_SEQ,else_tag) == null)))))){
return cljs.core.cst$sym$seq;
} else {
var then_tag__$1 = ((cljs.analyzer.impl.cljs_set_QMARK_(then_tag))?then_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([then_tag]));
var else_tag__$1 = ((cljs.analyzer.impl.cljs_set_QMARK_(else_tag))?else_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([else_tag]));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,p__24474){
var map__24475 = p__24474;
var map__24475__$1 = cljs.core.__destructure_map(map__24475);
var e = map__24475__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24475__$1,cljs.core.cst$kw$fn);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24475__$1,cljs.core.cst$kw$args);
var me = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.find_matching_method(f,args),cljs.core.cst$kw$op,cljs.core.cst$kw$fn_DASH_method);
var temp__5755__auto__ = (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,me) : cljs.analyzer.infer_tag.call(null,env,me));
if((temp__5755__auto__ == null)){
var map__24476 = f;
var map__24476__$1 = cljs.core.__destructure_map(map__24476);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24476__$1,cljs.core.cst$kw$info);
var temp__5755__auto____$1 = ((((cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info) === true) || (cljs.core.cst$kw$js_DASH_fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info) === true)))?cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(info):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info)))?cljs.core.cst$sym$js:null));
if((temp__5755__auto____$1 == null)){
return cljs.analyzer.impl.ANY_SYM;
} else {
var ret_tag = temp__5755__auto____$1;
return ret_tag;
}
} else {
var ret_tag = temp__5755__auto__;
return ret_tag;
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var temp__5755__auto__ = cljs.analyzer.get_tag(e);
if((temp__5755__auto__ == null)){
var G__24477 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e);
var G__24477__$1 = (((G__24477 instanceof cljs.core.Keyword))?G__24477.fqn:null);
switch (G__24477__$1) {
case "recur":
return cljs.analyzer.impl.IGNORE_SYM;

break;
case "throw":
return cljs.analyzer.impl.IGNORE_SYM;

break;
case "let":
var G__24478 = env;
var G__24479 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24478,G__24479) : cljs.analyzer.infer_tag.call(null,G__24478,G__24479));

break;
case "loop":
var G__24480 = env;
var G__24481 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24480,G__24481) : cljs.analyzer.infer_tag.call(null,G__24480,G__24481));

break;
case "do":
var G__24482 = env;
var G__24483 = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24482,G__24483) : cljs.analyzer.infer_tag.call(null,G__24482,G__24483));

break;
case "fn-method":
var G__24484 = env;
var G__24485 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24484,G__24485) : cljs.analyzer.infer_tag.call(null,G__24484,G__24485));

break;
case "def":
var G__24486 = env;
var G__24487 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24486,G__24487) : cljs.analyzer.infer_tag.call(null,G__24486,G__24487));

break;
case "invoke":
return cljs.analyzer.infer_invoke(env,e);

break;
case "if":
return cljs.analyzer.infer_if(env,e);

break;
case "const":
var G__24488 = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__24488)){
return cljs.analyzer.impl.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24488)){
return cljs.analyzer.impl.BOOLEAN_SYM;
} else {
return cljs.analyzer.impl.ANY_SYM;

}
}

break;
case "quote":
var G__24489 = env;
var G__24490 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24489,G__24490) : cljs.analyzer.infer_tag.call(null,G__24489,G__24490));

break;
case "var":
case "local":
case "js-var":
case "binding":
var temp__5755__auto____$1 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e);
if((temp__5755__auto____$1 == null)){
var G__24491 = env;
var G__24492 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__24491,G__24492) : cljs.analyzer.infer_tag.call(null,G__24491,G__24492));
} else {
var init = temp__5755__auto____$1;
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.infer_tag.call(null,env,init));
}

break;
case "host-field":
case "host-call":
return cljs.analyzer.impl.ANY_SYM;

break;
case "js":
return cljs.analyzer.impl.ANY_SYM;

break;
default:
return null;

}
} else {
var tag = temp__5755__auto__;
return tag;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.parse !== 'undefined')){
} else {
cljs.analyzer.parse = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__24494 = cljs.core.get_global_hierarchy;
return (fexpr__24494.cljs$core$IFn$_invoke$arity$0 ? fexpr__24494.cljs$core$IFn$_invoke$arity$0() : fexpr__24494.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","parse"),(function() { 
var G__24495__delegate = function (op,rest){
return op;
};
var G__24495 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__24496__i = 0, G__24496__a = new Array(arguments.length -  1);
while (G__24496__i < G__24496__a.length) {G__24496__a[G__24496__i] = arguments[G__24496__i + 1]; ++G__24496__i;}
  rest = new cljs.core.IndexedSeq(G__24496__a,0,null);
} 
return G__24495__delegate.call(this,op,rest);};
G__24495.cljs$lang$maxFixedArity = 1;
G__24495.cljs$lang$applyTo = (function (arglist__24497){
var op = cljs.core.first(arglist__24497);
var rest = cljs.core.rest(arglist__24497);
return G__24495__delegate(op,rest);
});
G__24495.cljs$core$IFn$_invoke$arity$variadic = G__24495__delegate;
return G__24495;
})()
,cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.analyzer.var_meta = (function cljs$analyzer$var_meta(var_args){
var G__24501 = arguments.length;
switch (G__24501) {
case 1:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1 = (function (var$){
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2(var$,null);
}));

(cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2 = (function (var$,expr_env){
var sym = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$);
var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$doc,cljs.core.cst$kw$file,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null);
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var user_meta = cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys(user_meta);
return cljs.core.zipmap(uks,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24498_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_meta,p1__24498_SHARP_),null,(1),null)),(2),null));
}),uks));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24499_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(var$,p1__24499_SHARP_),null,(1),null)),(2),null));
}),ks)),cljs.core.cst$kw$name,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$test,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_cljs$lang$test,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))], 0)))),cljs.core.cst$kw$arglists,(function (){var arglists = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists)))?cljs.core.second(arglists):arglists);
return (new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta,arglists_SINGLEQUOTE_,cljs.core.cst$kw$arglists_DASH_meta.cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null)),(2),null));
})()], 0))], 0));
if(cljs.core.truth_(expr_env)){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,m) : cljs.analyzer.analyze.call(null,expr_env,m));
} else {
return m;
}
}));

(cljs.analyzer.var_meta.cljs$lang$maxFixedArity = 2);

cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var _STAR_private_var_access_nowarn_STAR__orig_val__24503 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__24504 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__24504);

try{var env__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals);
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env__$1,sym,cljs.analyzer.confirm_var_exists_throw());
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var temp__5757__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5757__auto__ == null)){
return null;
} else {
var var_ns = temp__5757__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym)),cljs.core.cst$kw$sym,(function (){var G__24505 = expr_env;
var G__24506 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_ns),cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null)))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24505,G__24506) : cljs.analyzer.analyze.call(null,G__24505,G__24506));
})(),cljs.core.cst$kw$meta,cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2(var$,expr_env)], null);
}
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__24503);
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$var,(function (op,env,p__24507,_,___$1){
var vec__24508 = p__24507;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(1),null);
var form = vec__24508;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(form))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Wrong number of args to var");
} else {
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Argument to var must be symbol");
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$the_DASH_var,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var,cljs.core.cst$kw$sym,cljs.core.cst$kw$meta], null),cljs.core.cst$kw$form,form], null),cljs.analyzer.var_ast(env,sym)], 0));
}));
cljs.analyzer.predicate__GT_tag = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$cljs$core_SLASH_array_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_char_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_var_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_DASH_entry_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_double_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_ident_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_inst_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_float_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_true_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_volatile_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_infinite_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_undefined_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_uuid_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_record_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_reduced_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_tagged_DASH_literal_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_zero_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_false_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_ident_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_seqable_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_seq_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_delay_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_regexp_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_ident_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_],[cljs.core.cst$sym$array,cljs.core.cst$sym$boolean,cljs.core.cst$sym$string,cljs.core.cst$sym$cljs$core_SLASH_ISequential,cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.core.cst$sym$cljs$core_SLASH_Symbol,cljs.core.cst$sym$cljs$core_SLASH_Symbol,cljs.core.cst$sym$cljs$core_SLASH_Var,cljs.core.cst$sym$cljs$core_SLASH_IMapEntry,cljs.core.cst$sym$number,cljs.core.cst$sym$string,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_Keyword,"null",cljs.core.cst$sym$cljs$core_SLASH_Symbol,"null"], null), null),cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.core.cst$sym$cljs$core_SLASH_Inst,cljs.core.cst$sym$number,cljs.core.cst$sym$boolean,cljs.core.cst$sym$number,cljs.core.cst$sym$cljs$core_SLASH_Volatile,cljs.core.cst$sym$number,cljs.core.cst$sym$number,cljs.core.cst$sym$clj_DASH_nil,cljs.core.cst$sym$cljs$core_SLASH_IUUID,cljs.core.cst$sym$cljs$core_SLASH_IRecord,cljs.core.cst$sym$cljs$core_SLASH_Reduced,cljs.core.cst$sym$cljs$core_SLASH_ITaggedLiteral,cljs.core.cst$sym$clj_DASH_nil,cljs.core.cst$sym$number,cljs.core.cst$sym$boolean,cljs.core.cst$sym$cljs$core_SLASH_IList,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_Keyword,"null",cljs.core.cst$sym$cljs$core_SLASH_Symbol,"null"], null), null),cljs.core.cst$sym$cljs$core_SLASH_Keyword,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$cljs$core_SLASH_ISeqable,"null",cljs.core.cst$sym$array,"null",cljs.core.cst$sym$string,"null"], null), null),cljs.core.cst$sym$cljs$core_SLASH_Symbol,cljs.core.cst$sym$seq,cljs.core.cst$sym$cljs$core_SLASH_Delay,cljs.core.cst$sym$js_SLASH_RegExp,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_Keyword,"null",cljs.core.cst$sym$cljs$core_SLASH_Symbol,"null"], null), null),cljs.core.cst$sym$cljs$core_SLASH_IChunkedSeq]);
/**
 * Look for a predicate-induced tag when the test expression is a simple
 * application of a predicate to a local, as in (string? x).
 */
cljs.analyzer.simple_predicate_induced_tag = (function cljs$analyzer$simple_predicate_induced_tag(env,test){
if(((cljs.core.list_QMARK_(test)) && (((((2) === cljs.core.count(test))) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,test)))))){
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__24511 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24512 = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24512);

try{var G__24513 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24514 = cljs.core.first(test);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24513,G__24514) : cljs.analyzer.analyze.call(null,G__24513,G__24514));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24511);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$var,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
var temp__5753__auto__ = (function (){var G__24515 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(analyzed_fn);
return (cljs.analyzer.predicate__GT_tag.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.predicate__GT_tag.cljs$core$IFn$_invoke$arity$1(G__24515) : cljs.analyzer.predicate__GT_tag.call(null,G__24515));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var tag = temp__5753__auto__;
var sym = cljs.core.last(test);
if(cljs.core.truth_((function (){var and__4210__auto__ = (cljs.core.namespace(sym) == null);
if(and__4210__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,sym], null));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,tag], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Look for a type-check-induced tag when the test expression is the use of
 *   instance? on a local, as in (instance? UUID x) or implements? on a local, as
 *   in (implements? ICounted x).
 */
cljs.analyzer.type_check_induced_tag = (function cljs$analyzer$type_check_induced_tag(env,test){
if(((cljs.core.list_QMARK_(test)) && (((((3) === cljs.core.count(test))) && (((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,test)) && ((!(cljs.core.contains_QMARK_(cljs.analyzer.specials,cljs.core.first(test))))))))))){
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__24516 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24517 = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24517);

try{var G__24518 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24519 = cljs.core.first(test);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24518,G__24519) : cljs.analyzer.analyze.call(null,G__24518,G__24519));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24516);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$var,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
if(cljs.core.truth_((function (){var G__24521 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(analyzed_fn);
var fexpr__24520 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_,"null",cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,"null"], null), null);
return (fexpr__24520.cljs$core$IFn$_invoke$arity$1 ? fexpr__24520.cljs$core$IFn$_invoke$arity$1(G__24521) : fexpr__24520.call(null,G__24521));
})())){
var analyzed_type = (function (){var _STAR_cljs_warnings_STAR__orig_val__24522 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24523 = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24523);

try{var G__24524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24525 = cljs.core.second(test);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24524,G__24525) : cljs.analyzer.analyze.call(null,G__24524,G__24525));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24522);
}})();
var tag = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(analyzed_type);
var sym = cljs.core.last(test);
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$var,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(analyzed_type));
if(and__4210__auto__){
var and__4210__auto____$1 = (cljs.core.namespace(sym) == null);
if(and__4210__auto____$1){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,sym], null));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,tag], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Refine a tag to exclude clj-nil if the test is a local.
 */
cljs.analyzer.truth_induced_tag = (function cljs$analyzer$truth_induced_tag(env,test){
if(cljs.core.truth_((function (){var and__4210__auto__ = (test instanceof cljs.core.Symbol);
if(and__4210__auto__){
var and__4210__auto____$1 = (cljs.core.namespace(test) == null);
if(and__4210__auto____$1){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,test], null));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
var analyzed_symbol = (function (){var _STAR_cljs_warnings_STAR__orig_val__24526 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24527 = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24527);

try{var G__24528 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24529 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24528,G__24529) : cljs.analyzer.analyze.call(null,G__24528,G__24529));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24526);
}})();
var temp__5753__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(analyzed_symbol);
if(cljs.core.truth_(temp__5753__auto__)){
var tag = temp__5753__auto__;
if(((cljs.core.set_QMARK_(tag)) && (cljs.core.contains_QMARK_(tag,cljs.core.cst$sym$clj_DASH_nil)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.analyzer.canonicalize_type(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$clj_DASH_nil))], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Looks at the test and sets any tags which are induced by virtue
 *   of the test being truthy. For example in (if (string? x) x :bar)
 *   the local x in the then branch must be of string type.
 */
cljs.analyzer.set_test_induced_tags = (function cljs$analyzer$set_test_induced_tags(env,test){
var vec__24530 = (function (){var or__4212__auto__ = cljs.analyzer.simple_predicate_induced_tag(env,test);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.analyzer.type_check_induced_tag(env,test);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.analyzer.truth_induced_tag(env,test);
}
}
})();
var local = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24530,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24530,(1),null);
var G__24533 = env;
if(cljs.core.truth_(local)){
return cljs.core.assoc_in(G__24533,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,local,cljs.core.cst$kw$tag], null),tag);
} else {
return G__24533;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (op,env,p__24534,name,_){
var vec__24535 = p__24534;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(3),null);
var form = vec__24535;
if((cljs.core.count(form) < (3))){
throw cljs.analyzer.compile_syntax_error(env,"Too few arguments to if",cljs.core.cst$sym$if);
} else {
}

if((cljs.core.count(form) > (4))){
throw cljs.analyzer.compile_syntax_error(env,"Too many arguments to if",cljs.core.cst$sym$if);
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR__orig_val__24538 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24539 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24539);

try{var G__24540 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24541 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24540,G__24541) : cljs.analyzer.analyze.call(null,G__24540,G__24541));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24538);
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR__orig_val__24542 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__24543 = true;
(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__24543);

try{var G__24544 = cljs.analyzer.set_test_induced_tags(env,test);
var G__24545 = then;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24544,G__24545) : cljs.analyzer.analyze.call(null,G__24544,G__24545));
}finally {(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__24542);
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR__orig_val__24546 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__24547 = true;
(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__24547);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,else$) : cljs.analyzer.analyze.call(null,env,else$));
}finally {(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__24546);
}})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$if,cljs.core.cst$kw$form,form,cljs.core.cst$kw$test,test_expr,cljs.core.cst$kw$then,then_expr,cljs.core.cst$kw$else,else_expr,cljs.core.cst$kw$unchecked,cljs.core._STAR_unchecked_if_STAR_,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$test,cljs.core.cst$kw$then,cljs.core.cst$kw$else], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$case_STAR_,(function (op,env,p__24550,name,_){
var vec__24551 = p__24550;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551,(1),null);
var tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551,(2),null);
var thens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551,(3),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551,(4),null);
var form = vec__24551;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","case* must switch on symbol","\n","(symbol? sym)"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error(["Assert failed: ","case* tests must be grouped in vectors","\n","(every? vector? tests)"].join('')));
}

var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var v = (function (){var _STAR_recur_frames_STAR__orig_val__24554 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24555 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24555);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24554);
}})();
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24548_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,t) : cljs.analyzer.analyze.call(null,expr_env,t));
}),p1__24548_SHARP_);
}),tests);
var thens__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24549_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,p1__24549_SHARP_) : cljs.analyzer.analyze.call(null,env,p1__24549_SHARP_));
}),thens);
var nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (tests__$2,then){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$op,cljs.core.cst$kw$case_DASH_node,cljs.core.cst$kw$env,env,cljs.core.cst$kw$tests,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (test){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$op,cljs.core.cst$kw$case_DASH_test,cljs.core.cst$kw$form,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(test),cljs.core.cst$kw$env,expr_env,cljs.core.cst$kw$test,test,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$test], null)], null);
}),tests__$2),cljs.core.cst$kw$then,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$op,cljs.core.cst$kw$case_DASH_then,cljs.core.cst$kw$form,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(then),cljs.core.cst$kw$env,env,cljs.core.cst$kw$then,then,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$then], null)], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tests,cljs.core.cst$kw$then], null)], null);
}),tests__$1,thens__$1);
var default$__$1 = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,default$) : cljs.analyzer.analyze.call(null,env,default$));
if(cljs.core.every_QMARK_((function (t){
var or__4212__auto__ = cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$const,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(t));
if(and__4210__auto__){
var G__24557 = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(t);
var fexpr__24556 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_);
return (fexpr__24556.cljs$core$IFn$_invoke$arity$1 ? fexpr__24556.cljs$core$IFn$_invoke$arity$1(G__24557) : fexpr__24556.call(null,G__24557));
} else {
return and__4210__auto__;
}
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,tests__$1))){
} else {
throw (new Error(["Assert failed: ","case* tests must be numbers, strings, or constants","\n","(every? (fn [t] (or (-> t :info :const) (and (= :const (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$case,cljs.core.cst$kw$form,form,cljs.core.cst$kw$test,v,cljs.core.cst$kw$nodes,nodes,cljs.core.cst$kw$default,default$__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$test,cljs.core.cst$kw$nodes,cljs.core.cst$kw$default], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$throw,(function (op,env,p__24558,name,_){
var vec__24559 = p__24558;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24559,(0),null);
var throw_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24559,(1),null);
var form = vec__24559;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(form))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too few arguments to throw, throw expects a single Error instance");
} else {
if(((2) < cljs.core.count(form))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to throw, throw expects a single Error instance");
} else {
}
}

var throw_expr = (function (){var _STAR_recur_frames_STAR__orig_val__24562 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24563 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24563);

try{var G__24564 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24565 = throw_form;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24564,G__24565) : cljs.analyzer.analyze.call(null,G__24564,G__24565));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24562);
}})();
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$throw,cljs.core.cst$kw$form,form,cljs.core.cst$kw$exception,throw_expr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exception], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$try,(function (op,env,p__24570,name,_){
var vec__24571 = p__24570;
var seq__24572 = cljs.core.seq(vec__24571);
var first__24573 = cljs.core.first(seq__24572);
var seq__24572__$1 = cljs.core.next(seq__24572);
var ___$1 = first__24573;
var body = seq__24572__$1;
var form = vec__24571;
var catchenv = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null),(function (p1__24566_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,p1__24566_SHARP_)){
return cljs.core.cst$kw$return;
} else {
return p1__24566_SHARP_;
}
}));
var catch_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,(function (p1__24567_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__24567_SHARP_),cljs.core.cst$sym$catch);
}));
var default_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(catch_QMARK_,(function (p1__24568_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__24568_SHARP_),cljs.core.cst$kw$default);
}));
var finally_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,(function (p1__24569_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__24569_SHARP_),cljs.core.cst$sym$finally);
}));
var map__24574 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$start,cljs.core.cst$kw$forms,body,cljs.core.cst$kw$body,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$cblocks,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$dblock,null,cljs.core.cst$kw$fblock,null], null);
while(true){
if(cljs.core.seq_QMARK_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser))){
var vec__24579 = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser);
var seq__24580 = cljs.core.seq(vec__24579);
var first__24581 = cljs.core.first(seq__24580);
var seq__24580__$1 = cljs.core.next(seq__24580);
var form__$1 = first__24581;
var forms_STAR_ = seq__24580__$1;
var parser_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$forms,forms_STAR_);
var G__24582 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser);
var G__24582__$1 = (((G__24582 instanceof cljs.core.Keyword))?G__24582.fqn:null);
switch (G__24582__$1) {
case "start":
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__24603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$catches);
parser = G__24603;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__24604 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__24604;
continue;
} else {
var G__24605 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),cljs.core.conj,form__$1);
parser = G__24605;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_((default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? default_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : default_QMARK_.call(null,form__$1)))){
var G__24606 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$dblock,form__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,cljs.core.cst$kw$finally], 0));
parser = G__24606;
continue;
} else {
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__24607 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cblocks], null),cljs.core.conj,form__$1);
parser = G__24607;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__24608 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__24608;
continue;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid try form");

}
}
}

break;
case "finally":
var G__24609 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$fblock,form__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,cljs.core.cst$kw$done], 0));
parser = G__24609;
continue;

break;
case "done":
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Unexpected form after finally");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24582__$1)].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__24574__$1 = cljs.core.__destructure_map(map__24574);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24574__$1,cljs.core.cst$kw$body);
var cblocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24574__$1,cljs.core.cst$kw$cblocks);
var dblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24574__$1,cljs.core.cst$kw$dblock);
var fblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24574__$1,cljs.core.cst$kw$fblock);
var finally$ = ((cljs.core.seq(fblock))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var _STAR_recur_frames_STAR__orig_val__24583 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24584 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24584);

try{var G__24585 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__24586 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.rest(fblock))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24585,G__24586) : cljs.analyzer.analyze.call(null,G__24585,G__24586));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24583);
}})(),cljs.core.cst$kw$body_QMARK_,true):null);
var e = (cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.seq(cblocks);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("e"):null);
var default$ = (function (){var temp__5751__auto__ = dblock;
if(cljs.core.truth_(temp__5751__auto__)){
var vec__24587 = temp__5751__auto__;
var seq__24588 = cljs.core.seq(vec__24587);
var first__24589 = cljs.core.first(seq__24588);
var seq__24588__$1 = cljs.core.next(seq__24588);
var ___$2 = first__24589;
var first__24589__$1 = cljs.core.first(seq__24588__$1);
var seq__24588__$2 = cljs.core.next(seq__24588__$1);
var ___$3 = first__24589__$1;
var first__24589__$2 = cljs.core.first(seq__24588__$2);
var seq__24588__$3 = cljs.core.next(seq__24588__$2);
var name__$1 = first__24589__$2;
var cb = seq__24588__$3;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))));
}
})();
var cblock = ((cljs.core.seq(cblocks))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__24590){
var vec__24591 = p__24590;
var seq__24592 = cljs.core.seq(vec__24591);
var first__24593 = cljs.core.first(seq__24592);
var seq__24592__$1 = cljs.core.next(seq__24592);
var ___$2 = first__24593;
var first__24593__$1 = cljs.core.first(seq__24592__$1);
var seq__24592__$2 = cljs.core.next(seq__24592__$1);
var type = first__24593__$1;
var first__24593__$2 = cljs.core.first(seq__24592__$2);
var seq__24592__$3 = cljs.core.next(seq__24592__$2);
var name__$1 = first__24593__$2;
var cb = seq__24592__$3;
if(cljs.core.truth_(name__$1)){
if(cljs.core.not(cljs.core.namespace(name__$1))){
} else {
throw (new Error(["Assert failed: ","Can't qualify symbol in catch","\n","(not (namespace name))"].join('')));
}
} else {
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0)))),null,(1),null))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cblocks], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$else,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))], 0)))):default$);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,e,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,e,cljs.core.cst$kw$line,cljs.analyzer.get_line(e,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var _STAR_recur_frames_STAR__orig_val__24594 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24595 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24595);

try{var G__24596 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(catchenv,cljs.core.cst$kw$locals,locals__$1);
var G__24597 = cblock;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24596,G__24597) : cljs.analyzer.analyze.call(null,G__24596,G__24597));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24594);
}})():null);
var try$ = (function (){var _STAR_recur_frames_STAR__orig_val__24598 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24599 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24599);

try{var G__24600 = (cljs.core.truth_((function (){var or__4212__auto__ = e;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return finally$;
}
})())?catchenv:env);
var G__24601 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body__$1)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24600,G__24601) : cljs.analyzer.analyze.call(null,G__24600,G__24601));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24598);
}})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$try,cljs.core.cst$kw$form,form,cljs.core.cst$kw$body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(try$,cljs.core.cst$kw$body_QMARK_,true),cljs.core.cst$kw$finally,finally$,cljs.core.cst$kw$name,e,cljs.core.cst$kw$catch,catch$,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),(cljs.core.truth_(catch$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(finally$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$finally], null):null)], 0)))], null);
}));
cljs.analyzer.valid_proto = (function cljs$analyzer$valid_proto(x){
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
});
cljs.analyzer.elide_env = (function cljs$analyzer$elide_env(env,ast,opts){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$env);
});
cljs.analyzer.replace_env_pass = (function cljs$analyzer$replace_env_pass(new_env){
return (function (env,ast,opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$env,new_env);
});
});
cljs.analyzer.ast_children = (function cljs$analyzer$ast_children(ast){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (c){
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,c);
if(cljs.core.vector_QMARK_(g)){
return g;
} else {
if(cljs.core.truth_(g)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null);
} else {
return null;
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast)], 0));
});
cljs.analyzer.constant_value_QMARK_ = (function cljs$analyzer$constant_value_QMARK_(p__24610){
var map__24611 = p__24610;
var map__24611__$1 = cljs.core.__destructure_map(map__24611);
var ast = map__24611__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24611__$1,cljs.core.cst$kw$op);
var or__4212__auto__ = (function (){var fexpr__24612 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$const,null,cljs.core.cst$kw$quote,null], null), null);
return (fexpr__24612.cljs$core$IFn$_invoke$arity$1 ? fexpr__24612.cljs$core$IFn$_invoke$arity$1(op) : fexpr__24612.call(null,op));
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = (function (){var fexpr__24613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$vector,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$map,null], null), null);
return (fexpr__24613.cljs$core$IFn$_invoke$arity$1 ? fexpr__24613.cljs$core$IFn$_invoke$arity$1(op) : fexpr__24613.call(null,op));
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.every_QMARK_(cljs.analyzer.constant_value_QMARK_,cljs.analyzer.ast_children(ast));
} else {
return and__4210__auto__;
}
}
});
cljs.analyzer.const_expr__GT_constant_value = (function cljs$analyzer$const_expr__GT_constant_value(p__24614){
var map__24615 = p__24614;
var map__24615__$1 = cljs.core.__destructure_map(map__24615);
var e = map__24615__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24615__$1,cljs.core.cst$kw$op);
var G__24616 = op;
var G__24616__$1 = (((G__24616 instanceof cljs.core.Keyword))?G__24616.fqn:null);
switch (G__24616__$1) {
case "quote":
var G__24617 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.const_expr__GT_constant_value.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.const_expr__GT_constant_value.cljs$core$IFn$_invoke$arity$1(G__24617) : cljs.analyzer.const_expr__GT_constant_value.call(null,G__24617));

break;
case "const":
return cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(e);

break;
case "map":
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.const_expr__GT_constant_value,cljs.core.cst$kw$keys.cljs$core$IFn$_invoke$arity$1(e)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.const_expr__GT_constant_value,cljs.core.cst$kw$vals.cljs$core$IFn$_invoke$arity$1(e)));

break;
case "set":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.const_expr__GT_constant_value,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(e)));

break;
case "vector":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.const_expr__GT_constant_value,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(e)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24616__$1)].join('')));

}
});
cljs.analyzer.earmuffed_QMARK_ = (function cljs$analyzer$earmuffed_QMARK_(sym){
var s = cljs.core.name(sym);
return (((((s).length) > (2))) && (((clojure.string.starts_with_QMARK_(s,"*")) && (clojure.string.ends_with_QMARK_(s,"*")))));
});
cljs.analyzer.core_ns_QMARK_ = (function cljs$analyzer$core_ns_QMARK_(ns_sym){
var s = cljs.core.name(ns_sym);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$user,ns_sym)) && (((clojure.string.starts_with_QMARK_(s,"cljs.")) || (clojure.string.starts_with_QMARK_(s,"clojure.")))));
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$def,(function (op,env,form,_,___$1){
if((cljs.core.count(form) > (4))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
} else {
}

var pfn = (function() {
var G__24636 = null;
var G__24636__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,sym], null);
});
var G__24636__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$init,init], null);
});
var G__24636__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$init,init], null);
});
G__24636 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__24636__2.call(this,___$2,sym);
case 3:
return G__24636__3.call(this,___$2,sym,doc);
case 4:
return G__24636__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24636.cljs$core$IFn$_invoke$arity$2 = G__24636__2;
G__24636.cljs$core$IFn$_invoke$arity$3 = G__24636__3;
G__24636.cljs$core$IFn$_invoke$arity$4 = G__24636__4;
return G__24636;
})()
;
var args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pfn,form);
var sym = cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(args);
var const_QMARK_ = cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var sym_meta = cljs.core.meta(sym);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var protocol = cljs.analyzer.valid_proto(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)));
var dynamic = cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var sym_ns = cljs.core.namespace(sym);
var sym__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = sym_ns;
if(cljs.core.truth_(and__4210__auto__)){
return (!(cljs.core.symbol_identical_QMARK_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym_ns),ns_name)));
} else {
return and__4210__auto__;
}
})())?(function(){throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Can't def ns-qualified name in namespace ",sym_ns].join(''))})():(((!((sym_ns == null))))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)):sym
));
if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns], null)) == null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join('')),cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1))], null));
} else {
}

if((!((cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym__$1)) == null)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't redefine a constant");
} else {
}

var temp__5757__auto___24637 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if((temp__5757__auto___24637 == null)){
} else {
var doc_24638 = temp__5757__auto___24637;
if(typeof doc_24638 === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
}
}

if(((cljs.core.not(dynamic)) && (((cljs.analyzer.earmuffed_QMARK_(sym__$1)) && ((!(cljs.analyzer.core_ns_QMARK_(ns_name)))))))){
cljs.analyzer.warning(cljs.core.cst$kw$non_DASH_dynamic_DASH_earmuffed_DASH_var,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)], null));
} else {
}

var temp__5757__auto___24639 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if((temp__5757__auto___24639 == null)){
} else {
var v_24640 = temp__5757__auto___24639;
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(v_24640));
if(and__4210__auto____$1){
var and__4210__auto____$2 = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__4210__auto____$2){
var and__4210__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__4210__auto____$3)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.analyzer._STAR_file_defs_STAR_),sym__$1);
} else {
return and__4210__auto____$3;
}
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$redef_DASH_in_DASH_file,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(v_24640)], null));
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(v_24640);
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(v_24640);
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(v_24640),cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$declared_DASH_arglists_DASH_mismatch,env,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ns_DASH_name,ns_name,cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$declared,cljs.core.second(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(v_24640)),cljs.core.cst$kw$defined,cljs.core.second(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta))], null));
} else {
}
}

var env__$1 = ((((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.cst$sym$cljs$core)) && (cljs.analyzer.core_name_QMARK_(env,sym__$1)))) || ((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$uses,sym__$1], null)) == null))))))?(function (){var ev = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),cljs.core.with_meta(sym__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true], null)));
var conj_to_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
if(cljs.analyzer.public_name_QMARK_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(ev),sym__$1)){
cljs.analyzer.warning(cljs.core.cst$kw$redef,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$ns,cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(ev),cljs.core.cst$kw$ns_DASH_name,ns_name], null));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$excludes], null),conj_to_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym__$1], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes], null),conj_to_set,sym__$1);
})():env);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$locals),sym__$1));
var init_expr = ((cljs.core.contains_QMARK_(args,cljs.core.cst$kw$init))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),sym_meta,((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1)], 0)));

var _STAR_recur_frames_STAR__orig_val__24620 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24621 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24621);

try{var _STAR_allow_ns_STAR__orig_val__24622 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__24623 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__24623);

try{var G__24624 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24625 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(args);
var G__24626 = sym__$1;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(G__24624,G__24625,G__24626) : cljs.analyzer.analyze.call(null,G__24624,G__24625,G__24626));
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__24622);
}}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24620);
}})()
:null);
var fn_var_QMARK_ = (((!((init_expr == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$fn)));
var tag__$1 = ((fn_var_QMARK_)?(function (){var or__4212__auto__ = cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = tag;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.cst$kw$inferred_DASH_ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(init_expr);
}
}
})():(cljs.core.truth_(tag)?tag:(cljs.core.truth_(dynamic)?cljs.analyzer.impl.ANY_SYM:cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(init_expr)
)));
var export_as = (function (){var temp__5753__auto__ = cljs.core.cst$kw$export.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var export_val = temp__5753__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__4212__auto__ = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1));
}
})();
var temp__5757__auto___24641 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if((temp__5757__auto___24641 == null)){
} else {
var v_24642 = temp__5757__auto___24641;
if(((cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1)))) && (((cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(v_24642) === true) && ((!(fn_var_QMARK_))))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_name,ns_name,cljs.core.cst$kw$sym,sym__$1], null));
} else {
}
}

if((((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null)) == null)) || (cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(sym_meta))))){
if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym__$1);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),(function (){var G__24627 = sym_meta;
if(cljs.core.truth_(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24627,cljs.core.cst$kw$test,true);
} else {
return G__24627;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$meta,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sym_meta,cljs.core.cst$kw$test),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file], null),(function (f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env__$1)),cljs.core.cst$sym$cljs$core)){
return "cljs/core.cljs";
} else {
return f;
}
}))], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,doc], null):null),(cljs.core.truth_(const_QMARK_)?(function (){var const_expr = (function (){var _STAR_passes_STAR__orig_val__24628 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__24629 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$context,cljs.core.cst$kw$expr], null)));
(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__24629);

try{var G__24630 = env__$1;
var G__24631 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(args);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24630,G__24631) : cljs.analyzer.analyze.call(null,G__24630,G__24631));
}finally {(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__24628);
}})();
if(cljs.core.truth_(cljs.analyzer.constant_value_QMARK_(const_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$const_DASH_expr,const_expr], null);
} else {
return null;
}
})():null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,protocol], null):null),(function (){var temp__5753__auto__ = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var protocol_symbol = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol_DASH_symbol,protocol_symbol,cljs.core.cst$kw$info,cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol_symbol)),cljs.core.cst$kw$impls,cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),((fn_var_QMARK_)?(function (){var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24619_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(p1__24619_SHARP_)));
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fn_DASH_var,cljs.core.not(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(sym_meta)),cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__5755__auto__ = cljs.core.cst$kw$top_DASH_fn.cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5755__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic_QMARK_,cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,params,cljs.core.cst$kw$arglists,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
} else {
var top_fn_meta = temp__5755__auto__;
return top_fn_meta;
}
})()], 0));
})():null),(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$declared,true,cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$method_DASH_params,cljs.core.second(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta))], null):null),((((fn_var_QMARK_) && ((!((tag__$1 == null))))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):(cljs.core.truth_(tag__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag__$1], null):null))], 0)));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env__$1,cljs.core.cst$kw$op,cljs.core.cst$kw$def,cljs.core.cst$kw$form,form,cljs.core.cst$kw$ns,ns_name,cljs.core.cst$kw$name,var_name,cljs.core.cst$kw$var,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24632 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$locals),cljs.core.cst$kw$context,cljs.core.cst$kw$expr),cljs.core.cst$kw$def_DASH_var,true);
var G__24633 = sym__$1;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24632,G__24633) : cljs.analyzer.analyze.call(null,G__24632,G__24633));
})(),cljs.core.cst$kw$op,cljs.core.cst$kw$var),cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(sym_meta)], null),(function (){var temp__5753__auto__ = cljs.core.cst$kw$goog_DASH_define.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__5753__auto__)){
var goog_type = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$goog_DASH_define,goog_type], null);
} else {
return null;
}
})(),((cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$1) === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var_DASH_ast,cljs.analyzer.var_ast(env__$1,sym__$1)], null):null),(function (){var temp__5757__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5757__auto__ == null)){
return null;
} else {
var test = temp__5757__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,(function (){var G__24634 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24635 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24634,G__24635) : cljs.analyzer.analyze.call(null,G__24634,G__24635));
})()], null);
}
})(),(((!((tag__$1 == null))))?((fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag__$1], null)):null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),(((!((export_as == null))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$export,export_as], null):null),(((!((init_expr == null))))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$init,init_expr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var,cljs.core.cst$kw$init], null)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var], null)], null))], 0));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__24643,p__24644){
var vec__24645 = p__24643;
var locals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24645,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24645,(1),null);
var vec__24648 = p__24644;
var arg_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24648,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24648,(1),null);
if(cljs.core.truth_(cljs.core.namespace(name))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Can't use qualified name as parameter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var line = cljs.analyzer.get_line(name,env);
var column = cljs.analyzer.get_col(name,env);
var nmeta = cljs.core.meta(name);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((!((locals == null))))?cljs.analyzer.handle_symbol_local(name,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(name) : locals.call(null,name))):null);
var env__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null)], 0));
var param = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$arg_DASH_id,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[name,true,cljs.core.cst$kw$binding,env__$1,column,line,arg_id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,shadow], null),tag,shadow,cljs.core.cst$kw$arg]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name,param),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR__orig_val__24651 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24652 = recur_frames;
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24652);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze.call(null,env,form));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24651);
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type,analyze_body_QMARK_){
var param_names = cljs.core.first(form);
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,"null"], null), null),param_names));
var param_names__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,"null"], null), null),param_names));
var body = cljs.core.next(form);
var step = cljs.analyzer.analyze_fn_method_param(env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__24653 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,step_init,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,param_names__$1));
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24653,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24653,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast(params):params);
var fixed_arity = cljs.core.count(params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$params,params,cljs.core.cst$kw$flag,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$tags,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
var recur_frames = cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$locals,locals__$1], 0));
var body_form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body)));
var expr = (cljs.core.truth_(analyze_body_QMARK_)?cljs.analyzer.analyze_fn_method_body(body_env,body_form,recur_frames):null);
var recurs = cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(recur_frame));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$fn_DASH_method,cljs.core.cst$kw$variadic_QMARK_,variadic,cljs.core.cst$kw$params,params,cljs.core.cst$kw$fixed_DASH_arity,fixed_arity,cljs.core.cst$kw$type,type,cljs.core.cst$kw$form,form,cljs.core.cst$kw$recurs,recurs], null),(((!((expr == null))))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expr,cljs.core.cst$kw$body_QMARK_,true),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$body], null)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null)], null))], 0));
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((!((name == null)))){
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.analyzer.handle_symbol_local(name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,name));
var shadow__$1 = (((shadow == null))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_globals,name], null)):null);
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$op,cljs.core.cst$kw$binding,cljs.core.cst$kw$local,cljs.core.cst$kw$fn,cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_self_DASH_name,true,cljs.core.cst$kw$fn_DASH_scope,fn_scope,cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$shadow,shadow__$1], null)], null);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
var ret_tag = (((!((tag == null))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag], null):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name_var,ret_tag], 0));
} else {
return null;
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24656_SHARP_){
return cljs.analyzer.analyze_fn_method(menv,locals,p1__24656_SHARP_,type,true);
}),meths);
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
return cljs.analyzer.analyze_fn_methods_pass2_STAR_(menv,locals,type,meths);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fn_STAR_,(function (op,env,p__24658,name,_){
var vec__24659 = p__24658;
var seq__24660 = cljs.core.seq(vec__24659);
var first__24661 = cljs.core.first(seq__24660);
var seq__24660__$1 = cljs.core.next(seq__24660);
var ___$1 = first__24661;
var args = seq__24660__$1;
var form = vec__24659;
var named_fn_QMARK_ = (cljs.core.first(args) instanceof cljs.core.Symbol);
var vec__24662 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq(args)], null));
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24662,(0),null);
var meths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24662,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?(new cljs.core.List(null,meths,null,(1),null)):meths);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var(env,locals,name__$1);
var env__$1 = (((!((name__$1 == null))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_scope], null),cljs.core.conj,name_var):env);
var locals__$1 = (((((!((locals == null)))) && (named_fn_QMARK_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta(form);
var type = cljs.core.cst$kw$cljs$analyzer_SLASH_type.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__24665 = env__$1;
if((cljs.core.count(meths__$1) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24665,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
} else {
return G__24665;
}
})(),cljs.core.cst$kw$in_DASH_loop),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol_DASH_impl,proto_impl,cljs.core.cst$kw$protocol_DASH_inline,proto_inline], null)], 0));
var methods$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24657_SHARP_){
var _STAR_allow_ns_STAR__orig_val__24666 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__24667 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__24667);

try{return cljs.analyzer.analyze_fn_method(menv,locals__$1,p1__24657_SHARP_,type,(name__$1 == null));
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__24666);
}}),meths__$1);
var mfa = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fixed_DASH_arity),cljs.core.max,(0),methods$);
var variadic = cljs.core.boolean$(cljs.core.some(cljs.core.cst$kw$variadic_QMARK_,methods$));
var locals__$2 = ((named_fn_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa,cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$)], 0)):locals__$1);
var methods$__$1 = (((!((name__$1 == null))))?(function (){var _STAR_allow_ns_STAR__orig_val__24668 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__24669 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__24669);

try{return cljs.analyzer.analyze_fn_methods_pass2(menv,locals__$2,type,meths__$1);
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__24668);
}})():cljs.core.vec(methods$));
var form__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(form,cljs.core.dissoc,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,cljs.core.cst$kw$cljs$analyzer_SLASH_type);
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = (((!((name_var == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$local,cljs.core.cst$kw$methods], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$methods], null));
var inferred_ret_tag = (function (){var inferred_tags = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag,env__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,methods$__$1));
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inferred_tags))){
return cljs.core.first(inferred_tags);
} else {
return null;
}
})();
var ast = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$children,cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$name,cljs.core.cst$kw$loop_DASH_lets,cljs.core.cst$kw$inferred_DASH_ret_DASH_tag,cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$variadic_QMARK_,cljs.core.cst$kw$methods,cljs.core.cst$kw$recur_DASH_frames,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$form,cljs.core.cst$kw$tag,cljs.core.cst$kw$in_DASH_loop,cljs.core.cst$kw$jsdoc],[children,proto_inline,name_var,cljs.analyzer._STAR_loop_lets_STAR_,inferred_ret_tag,proto_impl,cljs.core.cst$kw$fn,env__$1,variadic,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,cljs.core.cst$sym$function,cljs.core.cst$kw$in_DASH_loop.cljs$core$IFn$_invoke$arity$1(env__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]),(((!((name_var == null))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$local,name_var], null):null)], 0));
var variadic_methods_24670 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$variadic_QMARK_),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),methods$__$1);
var variadic_params_24671 = (((cljs.core.count(variadic_methods_24670) > (0)))?cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(variadic_methods_24670,(0)))):(0));
var param_counts_24672 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$params)),methods$__$1);
if(((1) < cljs.core.count(variadic_methods_24670))){
cljs.analyzer.warning(cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if((!((((variadic_params_24671 === (0))) || ((variadic_params_24671 === ((1) + mfa))))))){
cljs.analyzer.warning(cljs.core.cst$kw$variadic_DASH_max_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts_24672),param_counts_24672)){
cljs.analyzer.warning(cljs.core.cst$kw$overload_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(ast) : cljs.analyzer.analyze_wrap_meta.call(null,ast));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$letfn_STAR_,(function (op,env,p__24673,name,_){
var vec__24674 = p__24673;
var seq__24675 = cljs.core.seq(vec__24674);
var first__24676 = cljs.core.first(seq__24675);
var seq__24675__$1 = cljs.core.next(seq__24675);
var ___$1 = first__24676;
var first__24676__$1 = cljs.core.first(seq__24675__$1);
var seq__24675__$2 = cljs.core.next(seq__24675__$1);
var bindings = first__24676__$1;
var exprs = seq__24675__$2;
var form = vec__24674;
if(((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
var names = cljs.core.keys(n__GT_fexpr);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var vec__24677 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__24683,n){
var vec__24684 = p__24683;
var map__24687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24684,(0),null);
var map__24687__$1 = cljs.core.__destructure_map(map__24687);
var env__$1 = map__24687__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24687__$1,cljs.core.cst$kw$locals);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24684,(1),null);
var ret_tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR__orig_val__24688 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24689 = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24689);

try{var G__24690 = env__$1;
var G__24691 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(n) : n__GT_fexpr.call(null,n));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24690,G__24691) : cljs.analyzer.analyze.call(null,G__24690,G__24691));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24688);
}})();
var be = (function (){var G__24692 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$method_DASH_params,cljs.core.cst$kw$op,cljs.core.cst$kw$column,cljs.core.cst$kw$variadic_QMARK_,cljs.core.cst$kw$line,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[n,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.core.cst$kw$binding,cljs.analyzer.get_col(n,env__$1),cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.analyzer.get_line(n,env__$1),cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),true,cljs.analyzer.handle_symbol_local(n,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(n) : locals.call(null,n))),cljs.core.cst$kw$letfn]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24692,cljs.core.cst$kw$ret_DASH_tag,ret_tag);
} else {
return G__24692;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,n], null),be),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24677,(0),null);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24677,(1),null);
var meth_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var vec__24680 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__24693,p__24694){
var vec__24695 = p__24693;
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24695,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24695,(1),null);
var map__24698 = p__24694;
var map__24698__$1 = cljs.core.__destructure_map(map__24698);
var be = map__24698__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,cljs.core.cst$kw$name);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,cljs.core.cst$kw$shadow);
var env__$1 = cljs.core.assoc_in(meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),shadow);
var fexpr = (function (){var G__24699 = env__$1;
var G__24700 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(name__$1) : n__GT_fexpr.call(null,name__$1));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24699,G__24700) : cljs.analyzer.analyze.call(null,G__24699,G__24700));
})();
var be_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(be,cljs.core.cst$kw$init,fexpr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$variadic_QMARK_,cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$init], null)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes__$1,be_SINGLEQUOTE_)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24680,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24680,(1),null);
var expr = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24701 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env__$2,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__24702 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24701,G__24702) : cljs.analyzer.analyze.call(null,G__24701,G__24702));
})(),cljs.core.cst$kw$body_QMARK_,true);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$letfn,cljs.core.cst$kw$bindings,bes__$1,cljs.core.cst$kw$body,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,cljs.core.cst$kw$body], null)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24703_SHARP_){
var G__24704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__24705 = p1__24703_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24704,G__24705) : cljs.analyzer.analyze.call(null,G__24704,G__24705));
}),cljs.core.butlast(exprs));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR__orig_val__24706 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24707 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24707);

try{return cljs.analyzer.analyze_do_statements_STAR_(env,exprs);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24706);
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$do,(function (op,env,p__24708,_,___$1){
var vec__24709 = p__24708;
var seq__24710 = cljs.core.seq(vec__24709);
var first__24711 = cljs.core.first(seq__24710);
var seq__24710__$1 = cljs.core.next(seq__24710);
var ___$2 = first__24711;
var exprs = seq__24710__$1;
var form = vec__24709;
var statements = cljs.analyzer.analyze_do_statements(env,exprs);
if((cljs.core.count(exprs) <= (1))){
var ret = (function (){var G__24712 = env;
var G__24713 = cljs.core.first(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24712,G__24713) : cljs.analyzer.analyze.call(null,G__24712,G__24713));
})();
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$statements,cljs.core.cst$kw$ret], null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
} else {
var ret_env = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return));
var ret = (function (){var G__24714 = ret_env;
var G__24715 = cljs.core.last(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24714,G__24715) : cljs.analyzer.analyze.call(null,G__24714,G__24715));
})();
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$statements,cljs.core.cst$kw$ret], null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR__orig_val__24716 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_loop_lets_STAR__temp_val__24717 = loop_lets;
(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__24717);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.analyze.call(null,env,init));
}finally {(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__24716);
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var temp__5755__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
if((temp__5755__auto__ == null)){
var temp__5755__auto____$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if((temp__5755__auto____$1 == null)){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(init_expr));
} else {
var tag = temp__5755__auto____$1;
return tag;
}
} else {
var tag = temp__5755__auto__;
return tag;
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings,op){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encl_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
while(true){
var temp__5755__auto__ = cljs.core.first(bindings__$1);
if((temp__5755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
} else {
var vec__24722 = temp__5755__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24722,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24722,(1),null);
if((((!((cljs.core.namespace(name) == null)))) || (goog.string.contains(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".")))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,["Invalid local name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init(env,init,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line(name,env);
var col = cljs.analyzer.get_col(name,env);
var shadow = cljs.analyzer.handle_symbol_local(name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name], null)));
var be = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$children,cljs.core.cst$kw$init,cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$init], null),init_expr,name,true,cljs.core.cst$kw$binding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,shadow], null),cljs.analyzer.get_let_tag(name,init_expr),shadow,op]);
var be__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([be,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$methods,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__24722,name,init,temp__5755__auto__){
return (function (p1__24718_SHARP_){
return cljs.core.select_keys(p1__24718_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$fixed_DASH_arity,cljs.core.cst$kw$variadic_QMARK_], null));
});})(bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__24722,name,init,temp__5755__auto__))
,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr))),cljs.core.cst$kw$variadic_QMARK_,cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr))], null)], 0)):be);
var G__24725 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be__$1);
var G__24726 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name], null),be__$1);
var G__24727 = cljs.core.next(bindings__$1);
bes = G__24725;
env = G__24726;
bindings__$1 = G__24727;
continue;
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings,op){
var _STAR_recur_frames_STAR__orig_val__24728 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24729 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24729);

try{return cljs.analyzer.analyze_let_bindings_STAR_(encl_env,bindings,op);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24728);
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
var G__24730 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__24731 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24730,G__24731) : cljs.analyzer.analyze.call(null,G__24730,G__24731));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR__orig_val__24732 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR__orig_val__24733 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_recur_frames_STAR__temp_val__24734 = recur_frames;
var _STAR_loop_lets_STAR__temp_val__24735 = loop_lets;
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24734);

(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__24735);

try{return cljs.analyzer.analyze_let_body_STAR_(env,context,exprs);
}finally {(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__24733);

(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24732);
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__24736,is_loop,widened_tags){
while(true){
var vec__24737 = p__24736;
var seq__24738 = cljs.core.seq(vec__24737);
var first__24739 = cljs.core.first(seq__24738);
var seq__24738__$1 = cljs.core.next(seq__24738);
var _ = first__24739;
var first__24739__$1 = cljs.core.first(seq__24738__$1);
var seq__24738__$2 = cljs.core.next(seq__24738__$1);
var bindings = first__24739__$1;
var exprs = seq__24738__$2;
var form = vec__24737;
if(((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,"bindings must be vector of even number of elements");
}

var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(encl_env);
var op = ((is_loop === true)?cljs.core.cst$kw$loop:cljs.core.cst$kw$let);
var bindings__$1 = (cljs.core.truth_(widened_tags)?cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (encl_env,p__24736,is_loop,widened_tags,context,op,vec__24737,seq__24738,first__24739,seq__24738__$1,_,first__24739__$1,seq__24738__$2,bindings,exprs,form){
return (function (p__24743,widened_tag){
var vec__24744 = p__24743;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24744,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24744,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,cljs.core.cst$kw$tag,widened_tag),init], null);
});})(encl_env,p__24736,is_loop,widened_tags,context,op,vec__24737,seq__24738,first__24739,seq__24738__$1,_,first__24739__$1,seq__24738__$2,bindings,exprs,form))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings),widened_tags], 0))):bindings);
var vec__24740 = cljs.analyzer.analyze_let_bindings((function (){var G__24747 = encl_env;
if(is_loop === true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24747,cljs.core.cst$kw$in_DASH_loop,true);
} else {
return G__24747;
}
})(),bindings__$1,op);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,bes,cljs.core.cst$kw$flag,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$tags,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag,bes))], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:(((!((cljs.analyzer._STAR_loop_lets_STAR_ == null))))?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var warn_acc = (cljs.core.truth_((function (){var and__4210__auto__ = is_loop;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(widened_tags);
} else {
return and__4210__auto__;
}
})())?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY):null);
var expr = (cljs.core.truth_(warn_acc)?(function (){var _STAR_cljs_warning_handlers_STAR__orig_val__24748 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__24749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.accumulating_warning_handler(warn_acc)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__24749);

try{return cljs.analyzer.analyze_let_body(env,context,exprs,recur_frames,loop_lets);
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__24748);
}})():cljs.analyzer.analyze_let_body(env,context,exprs,recur_frames,loop_lets));
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,cljs.core.cst$kw$body], null);
var nil__GT_any = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.cst$sym$any);
if(cljs.core.truth_((function (){var and__4210__auto__ = is_loop;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.not(widened_tags)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nil__GT_any,cljs.core.deref(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(recur_frame))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nil__GT_any,cljs.core.cst$kw$tag),bes))));
} else {
return and__4210__auto__;
}
})())){
var G__24750 = encl_env;
var G__24751 = form;
var G__24752 = is_loop;
var G__24753 = cljs.core.deref(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(recur_frame));
encl_env = G__24750;
p__24736 = G__24751;
is_loop = G__24752;
widened_tags = G__24753;
continue;
} else {
if(cljs.core.truth_(warn_acc)){
cljs.analyzer.replay_accumulated_warnings(warn_acc);
} else {
}

return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,encl_env,cljs.core.cst$kw$bindings,bes,cljs.core.cst$kw$body,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expr,cljs.core.cst$kw$body_QMARK_,true),cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,children], null);
}
break;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,false,null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$loop_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,true,null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$recur,(function (op,env,p__24755,_,___$1){
var vec__24756 = p__24755;
var seq__24757 = cljs.core.seq(vec__24756);
var first__24758 = cljs.core.first(seq__24757);
var seq__24757__$1 = cljs.core.next(seq__24757);
var ___$2 = first__24758;
var exprs = seq__24757__$1;
var form = vec__24756;
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first(cljs.analyzer._STAR_recur_frames_STAR_);
var add_implicit_target_object_QMARK_ = (function (){var and__4210__auto__ = cljs.core.cst$kw$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame)) - (1)));
} else {
return and__4210__auto__;
}
})();
var exprs__$1 = (function (){var G__24759 = exprs;
if(cljs.core.truth_(add_implicit_target_object_QMARK_)){
return cljs.core.cons(null,G__24759);
} else {
return G__24759;
}
})();
var exprs__$2 = (function (){var _STAR_recur_frames_STAR__orig_val__24760 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24761 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24761);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24754_SHARP_){
var G__24762 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__24763 = p1__24754_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24762,G__24763) : cljs.analyzer.analyze.call(null,G__24762,G__24763));
}),exprs__$1));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24760);
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't recur here");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs__$2),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["recur argument count mismatch, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame)))," args, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(exprs__$2))].join(''));
}

if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(add_implicit_target_object_QMARK_);
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(cljs.core.first(exprs__$2))], null));
} else {
}

cljs.core.reset_BANG_(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(frame),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(frame),(function (tags){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (tag,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loop,cljs.core.cst$kw$local.cljs$core$IFn$_invoke$arity$1(expr))){
return cljs.core.cst$sym$any;
} else {
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(expr));
}
}),tags,exprs__$2);
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$recur,cljs.core.cst$kw$form,form], null),cljs.core.cst$kw$frame,frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exprs,exprs__$2,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exprs], null)], 0));
}));
cljs.analyzer.analyze_const = (function cljs$analyzer$analyze_const(env,form){
var map__24764 = (function (){var G__24765 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$quoted_QMARK_,true);
var G__24766 = form;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__24765,G__24766) : cljs.analyzer.analyze.call(null,G__24765,G__24766));
})();
var map__24764__$1 = cljs.core.__destructure_map(map__24764);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24764__$1,cljs.core.cst$kw$tag);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$const,cljs.core.cst$kw$env,env,cljs.core.cst$kw$literal_QMARK_,true,cljs.core.cst$kw$val,form,cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$form,form], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$quote,(function (_,env,p__24767,___$1,___$2){
var vec__24768 = p__24767;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24768,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24768,(1),null);
var form = vec__24768;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(form))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Wrong number of args to quote");
} else {
}

var expr = cljs.analyzer.analyze_const(env,x);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$quote,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(expr),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$new,(function (_,env,p__24772,___$1,___$2){
var vec__24773 = p__24772;
var seq__24774 = cljs.core.seq(vec__24773);
var first__24775 = cljs.core.first(seq__24774);
var seq__24774__$1 = cljs.core.next(seq__24774);
var ___$3 = first__24775;
var first__24775__$1 = cljs.core.first(seq__24774__$1);
var seq__24774__$2 = cljs.core.next(seq__24774__$1);
var ctor = first__24775__$1;
var args = seq__24774__$2;
var form = vec__24773;
var _STAR_recur_frames_STAR__orig_val__24776 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24777 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24777);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ctorexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,ctor) : cljs.analyzer.analyze.call(null,enve,ctor));
var ctor_var = (cljs.core.truth_((function (){var G__24779 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ctorexpr);
var fexpr__24778 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,null,cljs.core.cst$kw$js_DASH_var,null,cljs.core.cst$kw$local,null], null), null);
return (fexpr__24778.cljs$core$IFn$_invoke$arity$1 ? fexpr__24778.cljs$core$IFn$_invoke$arity$1(G__24779) : fexpr__24778.call(null,G__24779));
})())?cljs.analyzer.resolve_existing_var(env,ctor):null);
var record_args = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$record.cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
} else {
return and__4210__auto__;
}
})())?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,null) : cljs.analyzer.analyze.call(null,enve,null))):null);
var argexprs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24771_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__24771_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__24771_SHARP_));
}),args)),record_args);
var known_num_fields = cljs.core.cst$kw$num_DASH_fields.cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count(args);
if(((cljs.core.not(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)))) && ((((!((known_num_fields == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(known_num_fields,argc)))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$argc,argc,cljs.core.cst$kw$ctor,ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$new,cljs.core.cst$kw$form,form,cljs.core.cst$kw$class,ctorexpr,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class,cljs.core.cst$kw$args], null),cljs.core.cst$kw$tag,(function (){var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__4212__auto__ = (function (){var fexpr__24780 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Object,cljs.core.cst$sym$object,cljs.core.cst$sym$js_SLASH_String,cljs.core.cst$sym$string,cljs.core.cst$sym$js_SLASH_Array,cljs.core.cst$sym$array,cljs.core.cst$sym$js_SLASH_Number,cljs.core.cst$sym$number,cljs.core.cst$sym$js_SLASH_Function,cljs.core.cst$sym$function,cljs.core.cst$sym$js_SLASH_Boolean,cljs.core.cst$sym$boolean], null);
return (fexpr__24780.cljs$core$IFn$_invoke$arity$1 ? fexpr__24780.cljs$core$IFn$_invoke$arity$1(name) : fexpr__24780.call(null,name));
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return name;
}
})()], null);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24776);
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$set_BANG_,(function (_,env,p__24781,___$1,___$2){
var vec__24782 = p__24781;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24782,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24782,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24782,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24782,(3),null);
var form = vec__24782;
var vec__24785 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$_DOT_,null,(1),null)),(new cljs.core.List(null,target,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0)))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(0),null);
var val__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(1),null);
var _STAR_recur_frames_STAR__orig_val__24788 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24789 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24789);

try{var _STAR_private_var_access_nowarn_STAR__orig_val__24790 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__24791 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__24791);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var texpr = (((target__$1 instanceof cljs.core.Symbol))?(function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_)) && (((val__$1 === true) || (val__$1 === false))))){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,cljs.core.cst$sym$_STAR_unchecked_DASH_arrays_STAR_)) && (((val__$1 === true) || (val__$1 === false))))){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,cljs.core.cst$sym$_STAR_warn_DASH_on_DASH_infer_STAR_)) && (((val__$1 === true) || (val__$1 === false))))){
(cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_cljs_warnings_STAR_,cljs.core.cst$kw$infer_DASH_warning,val__$1));
} else {
}
}
}

if((!((cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),target__$1)) == null)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! a constant");
} else {
}

var local_24797 = cljs.analyzer.handle_symbol_local(target__$1,(function (){var G__24792 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (target__$1.cljs$core$IFn$_invoke$arity$1 ? target__$1.cljs$core$IFn$_invoke$arity$1(G__24792) : target__$1.call(null,G__24792));
})());
if(cljs.core.truth_((function (){var or__4212__auto__ = (local_24797 == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(local_24797);
if(cljs.core.truth_(and__4210__auto__)){
var or__4212__auto____$1 = cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(local_24797);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_24797);
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_24797);
}
}
} else {
return and__4210__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! local var or non-mutable field");
}

return (cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze_symbol.call(null,enve,target__$1));
})()
:((cljs.core.seq_QMARK_(target__$1))?(function (){var texpr = (cljs.core.truth_(cljs.core.cst$kw$extend_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(target__$1)))?(function (){var _STAR_cljs_warnings_STAR__orig_val__24793 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24794 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_cljs_warnings_STAR_,cljs.core.cst$kw$infer_DASH_warning,false);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24794);

try{return (cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3(enve,target__$1,null) : cljs.analyzer.analyze_seq.call(null,enve,target__$1,null));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24793);
}})():(cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3(enve,target__$1,null) : cljs.analyzer.analyze_seq.call(null,enve,target__$1,null)));
if(cljs.core.truth_(cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(texpr))){
return texpr;
} else {
return null;
}
})():null)
);
var vexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,val__$1) : cljs.analyzer.analyze.call(null,enve,val__$1));
if(cljs.core.seq_QMARK_(target__$1)){
var sym_24798 = (function (){var G__24795 = target__$1;
if((G__24795 == null)){
return null;
} else {
return cljs.core.second(G__24795);
}
})();
var meta_24799 = cljs.core.meta(sym_24798);
var temp__5753__auto___24800 = (function (){var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(vexpr));
if(and__4210__auto__){
return cljs.core.cst$kw$top_DASH_fn.cljs$core$IFn$_invoke$arity$1(meta_24799);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto___24800)){
var info_24801 = temp__5753__auto___24800;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$defs,sym_24798,cljs.core.cst$kw$methods], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(info_24801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fixed_DASH_arity,cljs.core.cst$kw$variadic_QMARK_], null)),cljs.core.select_keys(cljs.core.first(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(vexpr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag], null))], 0))], 0));
} else {
}
} else {
}

if(cljs.core.truth_(texpr)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"set! target must be a field or a symbol naming a var");
}

if(((cljs.core.not(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))) && ((!(((function (){var fexpr__24796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$_STAR_warn_DASH_on_DASH_infer_STAR_,"null",cljs.core.cst$sym$_STAR_unchecked_DASH_arrays_STAR_,"null",cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_,"null"], null), null);
return (fexpr__24796.cljs$core$IFn$_invoke$arity$1 ? fexpr__24796.cljs$core$IFn$_invoke$arity$1(target__$1) : fexpr__24796.call(null,target__$1));
})() == null)))))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$no_DASH_op], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$set_BANG_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,texpr,cljs.core.cst$kw$val,vexpr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target,cljs.core.cst$kw$val], null)], null);

}
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__24790);
}}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24788);
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
var js_index = cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
var temp__5755__auto__ = cljs.core.find(js_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(dep))));
if((temp__5755__auto__ == null)){
return false;
} else {
var vec__24802 = temp__5755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24802,(0),null);
var map__24805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24802,(1),null);
var map__24805__$1 = cljs.core.__destructure_map(map__24805);
var foreign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24805__$1,cljs.core.cst$kw$foreign);
return foreign;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
var G__24808 = arguments.length;
switch (G__24808) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4(lib,deps,env,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var _STAR_cljs_dep_set_STAR__orig_val__24809 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__24810 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);
(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__24810);

try{if(cljs.core.every_QMARK_((function (p1__24806_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__24806_SHARP_)));
}),deps)){
} else {
throw (new Error(["Assert failed: ",["Circular dependency detected, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''),"\n","(every? (fn* [p1__24806#] (not (contains? *cljs-dep-set* p1__24806#))) deps)"].join('')));
}

var seq__24811 = cljs.core.seq(deps);
var chunk__24812 = null;
var count__24813 = (0);
var i__24814 = (0);
while(true){
if((i__24814 < count__24813)){
var dep = chunk__24812.cljs$core$IIndexed$_nth$arity$2(null,i__24814);
if(cljs.core.truth_((function (){var or__4212__auto__ = (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)) == null)));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.analyzer.node_module_dep_QMARK_(dep);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.analyzer.js_module_exists_QMARK_(cljs.core.name(dep));
}
}
})())){
} else {
var idx_24824 = cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler);
var dep_24825__$1 = cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(dep));
if(cljs.core.contains_QMARK_(idx_24824,cljs.core.name(dep_24825__$1))){
var dep_name_24826 = cljs.core.name(dep_24825__$1);
if(clojure.string.starts_with_QMARK_(dep_name_24826,"goog.")){
} else {
}
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__24819 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__24820 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep_24825__$1,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep_24825__$1)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24819,G__24820) : cljs.analyzer.error_message.call(null,G__24819,G__24820));
})());
}
}


var G__24827 = seq__24811;
var G__24828 = chunk__24812;
var G__24829 = count__24813;
var G__24830 = (i__24814 + (1));
seq__24811 = G__24827;
chunk__24812 = G__24828;
count__24813 = G__24829;
i__24814 = G__24830;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24811);
if(temp__5753__auto__){
var seq__24811__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24811__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__24811__$1);
var G__24831 = cljs.core.chunk_rest(seq__24811__$1);
var G__24832 = c__4638__auto__;
var G__24833 = cljs.core.count(c__4638__auto__);
var G__24834 = (0);
seq__24811 = G__24831;
chunk__24812 = G__24832;
count__24813 = G__24833;
i__24814 = G__24834;
continue;
} else {
var dep = cljs.core.first(seq__24811__$1);
if(cljs.core.truth_((function (){var or__4212__auto__ = (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)) == null)));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.analyzer.node_module_dep_QMARK_(dep);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.analyzer.js_module_exists_QMARK_(cljs.core.name(dep));
}
}
})())){
} else {
var idx_24835 = cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler);
var dep_24836__$1 = cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(dep));
if(cljs.core.contains_QMARK_(idx_24835,cljs.core.name(dep_24836__$1))){
var dep_name_24837 = cljs.core.name(dep_24836__$1);
if(clojure.string.starts_with_QMARK_(dep_name_24837,"goog.")){
} else {
}
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__24821 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__24822 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep_24836__$1,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep_24836__$1)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24821,G__24822) : cljs.analyzer.error_message.call(null,G__24821,G__24822));
})());
}
}


var G__24838 = cljs.core.next(seq__24811__$1);
var G__24839 = null;
var G__24840 = (0);
var G__24841 = (0);
seq__24811 = G__24838;
chunk__24812 = G__24839;
count__24813 = G__24840;
i__24814 = G__24841;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__24809);
}}));

(cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4);

cljs.analyzer.missing_use_QMARK_ = (function cljs$analyzer$missing_use_QMARK_(lib,sym,cenv){
var js_lib = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_dependency_DASH_index,cljs.core.name(lib)], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,lib,cljs.core.cst$kw$defs,sym], null),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found)) && ((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib,cljs.core.cst$kw$group),cljs.core.cst$kw$goog)))) && (((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib,cljs.core.cst$kw$closure_DASH_lib))) && ((((!(cljs.analyzer.node_module_dep_QMARK_(lib)))) && ((!(cljs.analyzer.dep_has_global_exports_QMARK_(lib)))))))))));
});
cljs.analyzer.missing_rename_QMARK_ = (function cljs$analyzer$missing_rename_QMARK_(sym,cenv){
var lib = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(sym));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
return cljs.analyzer.missing_use_QMARK_(lib,sym__$1,cenv);
});
cljs.analyzer.missing_use_macro_QMARK_ = (function cljs$analyzer$missing_use_macro_QMARK_(lib,sym){
if((lib instanceof cljs.core.Symbol)){
var the_ns = cljs.core.find_macros_ns(lib);
return (((the_ns == null)) || ((the_ns.findInternedVar(sym) == null)));
} else {
return null;
}
});
cljs.analyzer.missing_rename_macro_QMARK_ = (function cljs$analyzer$missing_rename_macro_QMARK_(sym){
var lib = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(sym));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var the_ns = cljs.core.find_macros_ns(lib);
return (((the_ns == null)) || ((the_ns.findInternedVar(sym__$1) == null)));
});
cljs.analyzer.missing_uses = (function cljs$analyzer$missing_uses(uses,env){
var cenv = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24842){
var vec__24843 = p__24842;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24843,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24843,(1),null);
return cljs.analyzer.missing_use_QMARK_(lib,sym,cenv);
}),uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24846){
var vec__24847 = p__24846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24847,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24847,(1),null);
return cljs.analyzer.missing_rename_QMARK_(qualified_sym,cenv);
}),renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24850){
var vec__24851 = p__24850;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24851,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24851,(1),null);
return cljs.analyzer.missing_use_macro_QMARK_(lib,sym);
}),use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24854){
var vec__24855 = p__24854;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24855,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24855,(1),null);
return cljs.core.not(cljs.analyzer.missing_use_macro_QMARK_(lib,sym));
}),use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24858){
var vec__24859 = p__24858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24859,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24859,(1),null);
return (!(cljs.analyzer.missing_rename_macro_QMARK_(qualified_sym)));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var seq__24862 = cljs.core.seq(uses);
var chunk__24863 = null;
var count__24864 = (0);
var i__24865 = (0);
while(true){
if((i__24865 < count__24864)){
var vec__24876 = chunk__24863.cljs$core$IIndexed$_nth$arity$2(null,i__24865);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24876,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24876,(1),null);
if(cljs.analyzer.missing_use_QMARK_(lib,sym,cenv)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__24879 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__24880 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24879,G__24880) : cljs.analyzer.error_message.call(null,G__24879,G__24880));
})());
} else {
}


var G__24886 = seq__24862;
var G__24887 = chunk__24863;
var G__24888 = count__24864;
var G__24889 = (i__24865 + (1));
seq__24862 = G__24886;
chunk__24863 = G__24887;
count__24864 = G__24888;
i__24865 = G__24889;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24862);
if(temp__5753__auto__){
var seq__24862__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24862__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__24862__$1);
var G__24890 = cljs.core.chunk_rest(seq__24862__$1);
var G__24891 = c__4638__auto__;
var G__24892 = cljs.core.count(c__4638__auto__);
var G__24893 = (0);
seq__24862 = G__24890;
chunk__24863 = G__24891;
count__24864 = G__24892;
i__24865 = G__24893;
continue;
} else {
var vec__24881 = cljs.core.first(seq__24862__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24881,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24881,(1),null);
if(cljs.analyzer.missing_use_QMARK_(lib,sym,cenv)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__24884 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__24885 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24884,G__24885) : cljs.analyzer.error_message.call(null,G__24884,G__24885));
})());
} else {
}


var G__24894 = cljs.core.next(seq__24862__$1);
var G__24895 = null;
var G__24896 = (0);
var G__24897 = (0);
seq__24862 = G__24894;
chunk__24863 = G__24895;
count__24864 = G__24896;
i__24865 = G__24897;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(var_args){
var G__24899 = arguments.length;
switch (G__24899) {
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3(use_macros,null,env);
}));

(cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var seq__24900_24925 = cljs.core.seq(use_macros);
var chunk__24901_24926 = null;
var count__24902_24927 = (0);
var i__24903_24928 = (0);
while(true){
if((i__24903_24928 < count__24902_24927)){
var vec__24914_24929 = chunk__24901_24926.cljs$core$IIndexed$_nth$arity$2(null,i__24903_24928);
var sym_24930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914_24929,(0),null);
var lib_24931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914_24929,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_(lib_24931,sym_24930))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__24917 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__24918 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_24931,cljs.core.cst$kw$sym,sym_24930], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24917,G__24918) : cljs.analyzer.error_message.call(null,G__24917,G__24918));
})());
} else {
}


var G__24932 = seq__24900_24925;
var G__24933 = chunk__24901_24926;
var G__24934 = count__24902_24927;
var G__24935 = (i__24903_24928 + (1));
seq__24900_24925 = G__24932;
chunk__24901_24926 = G__24933;
count__24902_24927 = G__24934;
i__24903_24928 = G__24935;
continue;
} else {
var temp__5753__auto___24936 = cljs.core.seq(seq__24900_24925);
if(temp__5753__auto___24936){
var seq__24900_24937__$1 = temp__5753__auto___24936;
if(cljs.core.chunked_seq_QMARK_(seq__24900_24937__$1)){
var c__4638__auto___24938 = cljs.core.chunk_first(seq__24900_24937__$1);
var G__24939 = cljs.core.chunk_rest(seq__24900_24937__$1);
var G__24940 = c__4638__auto___24938;
var G__24941 = cljs.core.count(c__4638__auto___24938);
var G__24942 = (0);
seq__24900_24925 = G__24939;
chunk__24901_24926 = G__24940;
count__24902_24927 = G__24941;
i__24903_24928 = G__24942;
continue;
} else {
var vec__24919_24943 = cljs.core.first(seq__24900_24937__$1);
var sym_24944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24919_24943,(0),null);
var lib_24945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24919_24943,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_(lib_24945,sym_24944))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__24922 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__24923 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_24945,cljs.core.cst$kw$sym,sym_24944], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24922,G__24923) : cljs.analyzer.error_message.call(null,G__24922,G__24923));
})());
} else {
}


var G__24946 = cljs.core.next(seq__24900_24937__$1);
var G__24947 = null;
var G__24948 = (0);
var G__24949 = (0);
seq__24900_24925 = G__24946;
chunk__24901_24926 = G__24947;
count__24902_24927 = G__24948;
i__24903_24928 = G__24949;
continue;
}
} else {
}
}
break;
}

cljs.analyzer.check_uses(cljs.analyzer.missing_use_macros(missing_uses,env),env);

return cljs.analyzer.inferred_use_macros(missing_uses,env);
}));

(cljs.analyzer.check_use_macros.cljs$lang$maxFixedArity = 3);

cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__24953,env){
var map__24954 = p__24953;
var map__24954__$1 = cljs.core.__destructure_map(map__24954);
var ast = map__24954__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,cljs.core.cst$kw$name);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,cljs.core.cst$kw$use_DASH_macros);
var missing_uses = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(uses);
} else {
return and__4210__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null);
var maybe_macros = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,uses,cljs.core.keys(missing_uses));
var remove_missing_uses = (function (p1__24950_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__24950_SHARP_,cljs.core.keys(missing_uses));
});
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros], null),(function (p1__24951_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__24951_SHARP_,cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3(use_macros,missing_uses,env)], 0)),cljs.analyzer.inferred_use_macros(maybe_macros,env)], 0));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),remove_missing_uses);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (p1__24952_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__24952_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$use_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$use_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$uses], null),remove_missing_uses);
}));

return ast_SINGLEQUOTE_;
});
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__24958,env){
var map__24959 = p__24958;
var map__24959__$1 = cljs.core.__destructure_map(map__24959);
var ast = map__24959__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,cljs.core.cst$kw$name);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24959__$1,cljs.core.cst$kw$renames);
var missing_renames = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(renames);
} else {
return and__4210__auto__;
}
})())?cljs.analyzer.missing_renames(renames,env):null);
var maybe_macros = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,renames,cljs.core.keys(missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros(missing_renames,env);
var remove_missing_renames = (function (p1__24955_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__24955_SHARP_,cljs.core.keys(missing_renames));
});
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rename_DASH_macros], null),(function (p1__24956_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__24956_SHARP_,missing_rename_macros], 0)),cljs.analyzer.inferred_rename_macros(maybe_macros,env)], 0));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),remove_missing_renames);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (p1__24957_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__24957_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$rename_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$rename_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$renames], null),remove_missing_renames);
}));

return ast_SINGLEQUOTE_;
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"; offending spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec], 0))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if((((spec instanceof cljs.core.Symbol)) || (((typeof spec === 'string') || (cljs.core.sequential_QMARK_(spec)))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_(spec)){
if((((cljs.core.first(spec) instanceof cljs.core.Symbol)) || (typeof cljs.core.first(spec) === 'string'))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_(cljs.core.count(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as alias, :refer (names) and :rename {from to} options supported in :require"));
}

if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,null,cljs.core.cst$kw$rename,null,cljs.core.cst$kw$refer,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(spec))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as, :refer and :rename options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies(cljs.core.next(spec));
return ((((function (){var G__24960 = cljs.core.cst$kw$as;
var G__24961 = (0);
return (fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(G__24960,G__24961) : fs.call(null,G__24960,G__24961));
})() <= (1))) && (((function (){var G__24962 = cljs.core.cst$kw$refer;
var G__24963 = (0);
return (fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(G__24962,G__24963) : fs.call(null,G__24962,G__24963));
})() <= (1))));
})()){
return null;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__24965){
var vec__24966 = p__24965;
var seq__24967 = cljs.core.seq(vec__24966);
var first__24968 = cljs.core.first(seq__24967);
var seq__24967__$1 = cljs.core.next(seq__24967);
var k = first__24968;
var filters = seq__24967__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$refer_DASH_clojure)){
if(cljs.core.seq(cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(s))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

var valid_kws = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exclude,null,cljs.core.cst$kw$rename,null], null), null);
var xs = (function (){var fs = cljs.core.seq(filters);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$excludes,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$renames,cljs.core.PersistentArrayMap.EMPTY], null);
var err = (!(cljs.core.even_QMARK_(cljs.core.count(filters))));
while(true){
if(err === true){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only [:refer-clojure :exclude (names)] and optionally `:rename {from to}` specs supported");
} else {
if((!((fs == null)))){
var kw = cljs.core.first(fs);
if(cljs.core.truth_((valid_kws.cljs$core$IFn$_invoke$arity$1 ? valid_kws.cljs$core$IFn$_invoke$arity$1(kw) : valid_kws.call(null,kw)))){
var refs = cljs.core.second(fs);
if((!(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$exclude)) && (((cljs.core.sequential_QMARK_(refs)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,refs)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)) && (((cljs.core.map_QMARK_(refs)) && (cljs.core.every_QMARK_(((function (fs,ret,err,refs,kw,valid_kws,vec__24966,seq__24967,first__24968,seq__24967__$1,k,filters){
return (function (p1__24964_SHARP_){
return cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,p1__24964_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__24966,seq__24967,first__24968,seq__24967__$1,k,filters))
,refs)))))))))){
var G__24969 = fs;
var G__24970 = ret;
var G__24971 = true;
fs = G__24969;
ret = G__24970;
err = G__24971;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$exclude)){
var G__24972 = cljs.core.nnext(fs);
var G__24973 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$excludes], null),cljs.core.into,refs);
var G__24974 = false;
fs = G__24972;
ret = G__24973;
err = G__24974;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)){
var G__24975 = cljs.core.nnext(fs);
var G__24976 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),cljs.core.merge,refs);
var G__24977 = false;
fs = G__24975;
ret = G__24976;
err = G__24977;
continue;
} else {
return null;
}
}
}
} else {
var G__24978 = fs;
var G__24979 = ret;
var G__24980 = true;
fs = G__24978;
ret = G__24979;
err = G__24980;
continue;
}
} else {
return ret;

}
}
break;
}
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,xs], 0));
} else {
return s;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$excludes,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$renames,cljs.core.PersistentArrayMap.EMPTY], null),args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__24982){
var vec__24983 = p__24982;
var seq__24984 = cljs.core.seq(vec__24983);
var first__24985 = cljs.core.first(seq__24984);
var seq__24984__$1 = cljs.core.next(seq__24984);
var lib = first__24985;
var filters = seq__24984__$1;
var spec = vec__24983;
if((((lib instanceof cljs.core.Symbol)) && (cljs.core.odd_QMARK_(cljs.core.count(spec))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
}

var fs = cljs.core.seq(filters);
var ret = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
var err = false;
while(true){
if(err === true){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
} else {
if((!((fs == null)))){
var kw = cljs.core.first(fs);
var only_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$only);
if(((only_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)))){
if((!((cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([((only_QMARK_)?cljs.core.cst$kw$refer:kw)]),ret) == null)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :only and :rename options may only be specified once in :use / :use-macros"));
} else {
var refs = cljs.core.second(fs);
if((!(((((only_QMARK_) && (((cljs.core.sequential_QMARK_(refs)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,refs)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)) && (((cljs.core.map_QMARK_(refs)) && (cljs.core.every_QMARK_(((function (fs,ret,err,refs,kw,only_QMARK_,vec__24983,seq__24984,first__24985,seq__24984__$1,lib,filters,spec){
return (function (p1__24981_SHARP_){
return cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,p1__24981_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__24983,seq__24984,first__24985,seq__24984__$1,lib,filters,spec))
,refs)))))))))){
var G__24986 = fs;
var G__24987 = ret;
var G__24988 = true;
fs = G__24986;
ret = G__24987;
err = G__24988;
continue;
} else {
var G__24989 = cljs.core.nnext(fs);
var G__24990 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?cljs.core.cst$kw$refer:kw),refs], null));
var G__24991 = false;
fs = G__24989;
ret = G__24990;
err = G__24991;
continue;
}
}
} else {
var G__24992 = fs;
var G__24993 = ret;
var G__24994 = true;
fs = G__24992;
ret = G__24993;
err = G__24994;
continue;
}
} else {
if((!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),ret) == null)))){
return ret;
} else {
var G__24995 = fs;
var G__24996 = ret;
var G__24997 = true;
fs = G__24995;
ret = G__24996;
err = G__24997;
continue;
}

}
}
break;
}
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((((spec instanceof cljs.core.Symbol)) || (typeof spec === 'string'))){
var G__25013 = env;
var G__25014 = macros_QMARK_;
var G__25015 = deps;
var G__25016 = aliases;
var G__25017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__25013;
macros_QMARK_ = G__25014;
deps = G__25015;
aliases = G__25016;
spec = G__25017;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec(env,macros_QMARK_,spec);

var vec__24998 = spec;
var seq__24999 = cljs.core.seq(vec__24998);
var first__25000 = cljs.core.first(seq__24999);
var seq__24999__$1 = cljs.core.next(seq__24999);
var lib = first__25000;
var opts = seq__24999__$1;
var vec__25001 = (function (){var temp__5755__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),cljs.core.cst$kw$name);
if((temp__5755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,null], null);
} else {
var js_module_name = temp__5755__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(js_module_name),lib], null);
}
})();
var lib__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25001,(0),null);
var js_module_provides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25001,(1),null);
var map__25004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__25004__$1 = cljs.core.__destructure_map(map__25004);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25004__$1,cljs.core.cst$kw$as,((typeof lib__$1 === 'string')?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(lib__$1)):lib__$1));
var referred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25004__$1,cljs.core.cst$kw$refer);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25004__$1,cljs.core.cst$kw$rename);
var referred_without_renamed = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(renamed)),referred));
var vec__25005 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require,cljs.core.cst$kw$use,cljs.core.cst$kw$rename], null));
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25005,(0),null);
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25005,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25005,(2),null);
if((((alias instanceof cljs.core.Symbol)) || ((alias == null)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as must be followed by a symbol in :require / :require-macros"));
}

if((!((alias == null)))){
var alias_type_25018 = (cljs.core.truth_(macros_QMARK_)?cljs.core.cst$kw$macros:cljs.core.cst$kw$fns);
var lib_SINGLEQUOTE__25019 = (function (){var fexpr__25008 = alias_type_25018.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aliases));
return (fexpr__25008.cljs$core$IFn$_invoke$arity$1 ? fexpr__25008.cljs$core$IFn$_invoke$arity$1(alias) : fexpr__25008.call(null,alias));
})();
if((((!((lib_SINGLEQUOTE__25019 == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,lib_SINGLEQUOTE__25019)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_25018], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null)], 0));
} else {
}

if(((((cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred)))) || ((referred == null)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((!((alias == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null)], 0))]):null),(((!((referred_without_renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(referred_without_renamed,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(lib__$1)))]):null),(((!((renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env,macros_QMARK_,deps,aliases,spec,vec__24998,seq__24999,first__25000,seq__24999__$1,lib,opts,vec__25001,lib__$1,js_module_provides,map__25004,map__25004__$1,alias,referred,renamed,referred_without_renamed,vec__25005,rk,uk,renk){
return (function (m,p__25009){
var vec__25010 = p__25009;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25010,(0),null);
var renamed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25010,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([original]),referred))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Renamed symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)," not referred"].join(''));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
});})(env,macros_QMARK_,deps,aliases,spec,vec__24998,seq__24999,first__25000,seq__24999__$1,lib,opts,vec__25001,lib__$1,js_module_provides,map__25004,map__25004__$1,alias,referred,renamed,referred_without_renamed,vec__25005,rk,uk,renk))
,cljs.core.PersistentArrayMap.EMPTY,renamed)]):null)], 0));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((((cljs.core.sequential_QMARK_(spec)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,spec)))) || ((((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace(spec) == null)))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_(spec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25020_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25020_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(spec)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25020_SHARP_)].join(''))],null));
}),cljs.core.rest(spec))):(((!(((-1) === cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec).indexOf(".")))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec),/\./))),spec]):cljs.core.PersistentArrayMap.EMPTY
));
var seq__25021_25037 = cljs.core.seq(import_map);
var chunk__25022_25038 = null;
var count__25023_25039 = (0);
var i__25024_25040 = (0);
while(true){
if((i__25024_25040 < count__25023_25039)){
var vec__25031_25041 = chunk__25022_25038.cljs$core$IIndexed$_nth$arity$2(null,i__25024_25040);
var __25042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25031_25041,(0),null);
var spec_25043__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25031_25041,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_25043__$1);


var G__25044 = seq__25021_25037;
var G__25045 = chunk__25022_25038;
var G__25046 = count__25023_25039;
var G__25047 = (i__25024_25040 + (1));
seq__25021_25037 = G__25044;
chunk__25022_25038 = G__25045;
count__25023_25039 = G__25046;
i__25024_25040 = G__25047;
continue;
} else {
var temp__5753__auto___25048 = cljs.core.seq(seq__25021_25037);
if(temp__5753__auto___25048){
var seq__25021_25049__$1 = temp__5753__auto___25048;
if(cljs.core.chunked_seq_QMARK_(seq__25021_25049__$1)){
var c__4638__auto___25050 = cljs.core.chunk_first(seq__25021_25049__$1);
var G__25051 = cljs.core.chunk_rest(seq__25021_25049__$1);
var G__25052 = c__4638__auto___25050;
var G__25053 = cljs.core.count(c__4638__auto___25050);
var G__25054 = (0);
seq__25021_25037 = G__25051;
chunk__25022_25038 = G__25052;
count__25023_25039 = G__25053;
i__25024_25040 = G__25054;
continue;
} else {
var vec__25034_25055 = cljs.core.first(seq__25021_25049__$1);
var __25056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034_25055,(0),null);
var spec_25057__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25034_25055,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_25057__$1);


var G__25058 = cljs.core.next(seq__25021_25049__$1);
var G__25059 = null;
var G__25060 = (0);
var G__25061 = (0);
seq__25021_25037 = G__25058;
chunk__25022_25038 = G__25059;
count__25023_25039 = G__25060;
i__25024_25040 = G__25061;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$import,import_map,cljs.core.cst$kw$require,import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.core.truth_(cljs.analyzer._STAR_macro_infer_STAR_)){
var ns = ((cljs.core.sequential_QMARK_(form))?cljs.core.first(form):form);
var map__25062 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null));
var map__25062__$1 = cljs.core.__destructure_map(map__25062);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,cljs.core.cst$kw$require_DASH_macros);
var or__4212__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals(require_macros));
}
} else {
return null;
}
});
/**
 * Given a symbol that starts with clojure as the first segment return the
 * same symbol with the first segment replaced with cljs
 */
cljs.analyzer.clj_ns__GT_cljs_ns = (function cljs$analyzer$clj_ns__GT_cljs_ns(sym){
var segs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure",cljs.core.first(segs))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.cons("cljs",cljs.core.next(segs))));
} else {
return sym;
}
});
cljs.analyzer.canonicalize_specs = (function cljs$analyzer$canonicalize_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
var spec = cljs.core.second(quoted_spec_or_kw);
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.map_QMARK_(spec)))){
return spec;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
}
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(canonicalize,specs);
});
cljs.analyzer.canonicalize_import_specs = (function cljs$analyzer$canonicalize_import_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_import_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
return cljs.core.second(quoted_spec_or_kw);
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(canonicalize,specs);
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__25064 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25065){
var vec__25066 = p__25065;
var seq__25067 = cljs.core.seq(vec__25066);
var first__25068 = cljs.core.first(seq__25067);
var seq__25067__$1 = cljs.core.next(seq__25067);
var k = first__25068;
var specs = seq__25067__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__25064__$1 = cljs.core.__destructure_map(map__25064);
var indexed = map__25064__$1;
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25064__$1,cljs.core.cst$kw$require);
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$include_DASH_macros,null,cljs.core.cst$kw$refer_DASH_macros,null], null), null);
var remove_from_spec = (function (pred,spec){
while(true){
if(cljs.core.not((function (){var and__4210__auto__ = cljs.core.sequential_QMARK_(spec);
if(and__4210__auto__){
return cljs.core.some(pred,spec);
} else {
return and__4210__auto__;
}
})())){
return spec;
} else {
var vec__25069 = cljs.core.split_with(cljs.core.complement(pred),spec);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25069,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25069,(1),null);
var G__25076 = pred;
var G__25077 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),r));
pred = G__25076;
spec = G__25077;
continue;
}
break;
}
});
var replace_refer_macros = (function (spec){
if((!(cljs.core.sequential_QMARK_(spec)))){
return spec;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$refer_DASH_macros)){
return cljs.core.cst$kw$refer;
} else {
return x;
}
}),spec);
}
});
var reload_spec_QMARK_ = (function (p1__25063_SHARP_){
var fexpr__25072 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null);
return (fexpr__25072.cljs$core$IFn$_invoke$arity$1 ? fexpr__25072.cljs$core$IFn$_invoke$arity$1(p1__25063_SHARP_) : fexpr__25072.call(null,p1__25063_SHARP_));
});
var to_macro_specs = (function (specs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
return replace_refer_macros(remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rename,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$include_DASH_macros,null], null), null),x))));
} else {
return x;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
var or__4212__auto__ = (function (){var and__4210__auto__ = cljs.core.sequential_QMARK_(x);
if(and__4210__auto__){
return cljs.core.some(sugar_keys,x);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = reload_spec_QMARK_(x);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_(x);
}
}
}),specs));
});
var remove_sugar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_spec,sugar_keys);
var temp__5755__auto__ = cljs.core.seq(to_macro_specs(require));
if((temp__5755__auto__ == null)){
return args;
} else {
var require_specs = temp__5755__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
var vec__25073 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25073,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25073,(1),null);
return cljs.core.cons(k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_sugar,v));
} else {
return x;
}
}),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(xs))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(xs))], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__25078 = cljs.core.seq(to_check);
var chunk__25079 = null;
var count__25080 = (0);
var i__25081 = (0);
while(true){
if((i__25081 < count__25080)){
var vec__25088 = chunk__25079.cljs$core$IIndexed$_nth$arity$2(null,i__25081);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25088,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25088,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null));
} else {
}


var G__25094 = seq__25078;
var G__25095 = chunk__25079;
var G__25096 = count__25080;
var G__25097 = (i__25081 + (1));
seq__25078 = G__25094;
chunk__25079 = G__25095;
count__25080 = G__25096;
i__25081 = G__25097;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25078);
if(temp__5753__auto__){
var seq__25078__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25078__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__25078__$1);
var G__25098 = cljs.core.chunk_rest(seq__25078__$1);
var G__25099 = c__4638__auto__;
var G__25100 = cljs.core.count(c__4638__auto__);
var G__25101 = (0);
seq__25078 = G__25098;
chunk__25079 = G__25099;
count__25080 = G__25100;
i__25081 = G__25101;
continue;
} else {
var vec__25091 = cljs.core.first(seq__25078__$1);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25091,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25091,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null));
} else {
}


var G__25102 = cljs.core.next(seq__25078__$1);
var G__25103 = null;
var G__25104 = (0);
var G__25105 = (0);
seq__25078 = G__25102;
chunk__25079 = G__25103;
count__25080 = G__25104;
i__25081 = G__25105;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(name);
if((!(goog.string.endsWith(name_str,"$macros")))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([name_str,"$macros"].join(''));
} else {
return name;
}
});
cljs.analyzer.check_duplicate_aliases = (function cljs$analyzer$check_duplicate_aliases(env,old,new$){
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(old);
var seq__25106 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires,cljs.core.cst$kw$require_DASH_macros], null));
var chunk__25107 = null;
var count__25108 = (0);
var i__25109 = (0);
while(true){
if((i__25109 < count__25108)){
var k = chunk__25107.cljs$core$IIndexed$_nth$arity$2(null,i__25109);
var old_aliases_25126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,k);
var new_aliases_25127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new$,k);
var temp__5757__auto___25128 = cljs.core.some(cljs.core.set(cljs.core.keys(new_aliases_25127)),cljs.core.keys(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (seq__25106,chunk__25107,count__25108,i__25109,old_aliases_25126,new_aliases_25127,k,ns_name){
return (function (p__25118){
var vec__25119 = p__25118;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25119,(1),null);
var entry = vec__25119;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.find(new_aliases_25127,k__$1))));
});})(seq__25106,chunk__25107,count__25108,i__25109,old_aliases_25126,new_aliases_25127,k,ns_name))
,old_aliases_25126)));
if((temp__5757__auto___25128 == null)){
} else {
var alias_25129 = temp__5757__auto___25128;
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_25129)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_aliases_25126,alias_25129))].join(''));
}


var G__25130 = seq__25106;
var G__25131 = chunk__25107;
var G__25132 = count__25108;
var G__25133 = (i__25109 + (1));
seq__25106 = G__25130;
chunk__25107 = G__25131;
count__25108 = G__25132;
i__25109 = G__25133;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25106);
if(temp__5753__auto__){
var seq__25106__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25106__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__25106__$1);
var G__25134 = cljs.core.chunk_rest(seq__25106__$1);
var G__25135 = c__4638__auto__;
var G__25136 = cljs.core.count(c__4638__auto__);
var G__25137 = (0);
seq__25106 = G__25134;
chunk__25107 = G__25135;
count__25108 = G__25136;
i__25109 = G__25137;
continue;
} else {
var k = cljs.core.first(seq__25106__$1);
var old_aliases_25138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,k);
var new_aliases_25139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new$,k);
var temp__5757__auto___25140 = cljs.core.some(cljs.core.set(cljs.core.keys(new_aliases_25139)),cljs.core.keys(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (seq__25106,chunk__25107,count__25108,i__25109,old_aliases_25138,new_aliases_25139,k,seq__25106__$1,temp__5753__auto__,ns_name){
return (function (p__25122){
var vec__25123 = p__25122;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25123,(1),null);
var entry = vec__25123;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.find(new_aliases_25139,k__$1))));
});})(seq__25106,chunk__25107,count__25108,i__25109,old_aliases_25138,new_aliases_25139,k,seq__25106__$1,temp__5753__auto__,ns_name))
,old_aliases_25138)));
if((temp__5757__auto___25140 == null)){
} else {
var alias_25141 = temp__5757__auto___25140;
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_25141)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_aliases_25138,alias_25141))].join(''));
}


var G__25142 = cljs.core.next(seq__25106__$1);
var G__25143 = null;
var G__25144 = (0);
var G__25145 = (0);
seq__25106 = G__25142;
chunk__25107 = G__25143;
count__25108 = G__25144;
i__25109 = G__25145;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.merge_ns_info = (function cljs$analyzer$merge_ns_info(old,new$,env){
if((cljs.core.count(old) > (0))){
var deep_merge_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames,cljs.core.cst$kw$imports], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,cljs.core.select_keys(new$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$excludes], null)),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(old,deep_merge_keys),cljs.core.select_keys(new$,deep_merge_keys)], 0))], 0));
} else {
return new$;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ns,(function (_,env,p__25148,___$1,opts){
var vec__25149 = p__25148;
var seq__25150 = cljs.core.seq(vec__25149);
var first__25151 = cljs.core.first(seq__25150);
var seq__25150__$1 = cljs.core.next(seq__25150);
var ___$2 = first__25151;
var first__25151__$1 = cljs.core.first(seq__25150__$1);
var seq__25150__$2 = cljs.core.next(seq__25150__$1);
var name = first__25151__$1;
var args = seq__25150__$2;
var form = vec__25149;
if(cljs.core.truth_(cljs.analyzer._STAR_allow_ns_STAR_)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespace declarations must appear at the top-level.");
}

if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__25152 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__25152);
} else {
return G__25152;
}
})();
var segments_25186 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name__$1),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(segments_25186))){
cljs.analyzer.warning(cljs.core.cst$kw$single_DASH_segment_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

var segment_25187 = cljs.core.some(cljs.analyzer.js_reserved,segments_25186);
if((!((segment_25187 == null)))){
cljs.analyzer.warning(cljs.core.cst$kw$munged_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

cljs.analyzer.find_def_clash(env,name__$1,segments_25186);

var docstring = ((typeof cljs.core.first(args) === 'string')?cljs.core.first(args):null);
var mdocstr = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
var args__$1 = (((!((docstring == null))))?cljs.core.next(args):args);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?cljs.core.first(args__$1):null);
var args__$2 = cljs.analyzer.desugar_ns_specs((((!((metadata == null))))?cljs.core.next(args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(name__$1,cljs.core.merge,metadata);
var map__25153 = cljs.analyzer.parse_ns_excludes(env,args__$2);
var map__25153__$1 = cljs.core.__destructure_map(map__25153);
var excludes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25153__$1,cljs.core.cst$kw$excludes);
var core_renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25153__$1,cljs.core.cst$kw$renames);
var core_renames__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__25158){
var vec__25159 = p__25158;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159,(0),null);
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
}),cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.cst$kw$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null));
var reload = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null));
var reloads = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var map__25154 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__25162){
var vec__25163 = p__25162;
var seq__25164 = cljs.core.seq(vec__25163);
var first__25165 = cljs.core.first(seq__25164);
var seq__25164__$1 = cljs.core.next(seq__25164);
var k = first__25165;
var libs = seq__25164__$1;
var libspec = vec__25163;
if(cljs.core.truth_((function (){var fexpr__25166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null);
return (fexpr__25166.cljs$core$IFn$_invoke$arity$1 ? fexpr__25166.cljs$core$IFn$_invoke$arity$1(k) : fexpr__25166.call(null,k));
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported. Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)," instead."].join(''));
}

if(cljs.core.truth_((function (){var fexpr__25167 = cljs.core.deref(valid_forms);
return (fexpr__25167.cljs$core$IFn$_invoke$arity$1 ? fexpr__25167.cljs$core$IFn$_invoke$arity$1(k) : fexpr__25167.call(null,k));
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Only one ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," form is allowed per namespace definition"].join(''));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,k)){
} else {
if((!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload,null], null), null),libs) == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload);
} else {
}

if((!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload_DASH_all,null], null), null),libs) == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload_DASH_all);
} else {
}
}

var temp__5753__auto___25188 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25146_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__25146_SHARP_));
}),libs));
if(temp__5753__auto___25188){
var xs_25189 = temp__5753__auto___25188;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_25189),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25147_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__25147_SHARP_));
}),xs_25189)));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25168){
var vec__25169 = p__25168;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25169,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.cst$kw$refer_DASH_clojure);
}),args__$2));
var map__25154__$1 = cljs.core.__destructure_map(map__25154);
var params = map__25154__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154__$1,cljs.core.cst$kw$require);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154__$1,cljs.core.cst$kw$rename);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154__$1,cljs.core.cst$kw$require_DASH_macros);
var rename_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154__$1,cljs.core.cst$kw$rename_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154__$1,cljs.core.cst$kw$import);
var vec__25155 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (spec_map){
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2),(0),(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)).length) - (7))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__25172){
var vec__25173 = p__25172;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25173,(1),null);
var G__25176 = m;
if((!(cljs.core.symbol_identical_QMARK_(v,ns)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25176,k,v);
} else {
return G__25176;
}
}),cljs.core.PersistentArrayMap.EMPTY,spec_map);
} else {
return spec_map;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [require_macros,use_macros], null));
var require_macros__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25155,(0),null);
var use_macros__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25155,(1),null);
(cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2);

var ns_info = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$renames,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$excludes,cljs.core.cst$kw$name,cljs.core.cst$kw$imports,cljs.core.cst$kw$requires,cljs.core.cst$kw$uses,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$doc],[rename_macros,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([renames,core_renames__$1], 0)),use_macros__$1,excludes,name__$2,imports,requires,uses,require_macros__$1,(function (){var or__4212__auto__ = docstring;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return mdocstr;
}
})()]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name__$2], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_info], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deps))),cljs.core.cst$kw$reload,cljs.core.deref(reload),cljs.core.cst$kw$reloads,cljs.core.deref(reloads)], null),(function (){var G__25177 = ns_info;
var G__25177__$1 = (cljs.core.truth_((function (){var G__25179 = cljs.core.cst$kw$use;
var fexpr__25178 = cljs.core.deref(reload);
return (fexpr__25178.cljs$core$IFn$_invoke$arity$1 ? fexpr__25178.cljs$core$IFn$_invoke$arity$1(G__25179) : fexpr__25178.call(null,G__25179));
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__25177,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),(function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__25181 = cljs.core.cst$kw$use;
var fexpr__25180 = cljs.core.deref(reload);
return (fexpr__25180.cljs$core$IFn$_invoke$arity$1 ? fexpr__25180.cljs$core$IFn$_invoke$arity$1(G__25181) : fexpr__25180.call(null,G__25181));
})(),true]));
})):G__25177);
if(cljs.core.truth_((function (){var G__25183 = cljs.core.cst$kw$require;
var fexpr__25182 = cljs.core.deref(reload);
return (fexpr__25182.cljs$core$IFn$_invoke$arity$1 ? fexpr__25182.cljs$core$IFn$_invoke$arity$1(G__25183) : fexpr__25182.call(null,G__25183));
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__25177__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),(function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__25185 = cljs.core.cst$kw$require;
var fexpr__25184 = cljs.core.deref(reload);
return (fexpr__25184.cljs$core$IFn$_invoke$arity$1 ? fexpr__25184.cljs$core$IFn$_invoke$arity$1(G__25185) : fexpr__25184.call(null,G__25185));
})(),true]));
}));
} else {
return G__25177__$1;
}
})()], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ns_STAR_,(function (_,env,p__25193,___$1,opts){
var vec__25194 = p__25193;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25194,(0),null);
var quoted_specs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25194,(1),null);
var form = vec__25194;
var temp__5753__auto___25220 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25190_SHARP_){
return ((cljs.core.seq_QMARK_(p1__25190_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__25190_SHARP_))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__5753__auto___25220)){
var not_quoted_25221 = temp__5753__auto___25220;
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Arguments to ",cljs.core.name(cljs.core.first(quoted_specs))," must be quoted. Offending spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_25221)].join(''));
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_allow_ns_STAR_)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Calls to `",cljs.core.name(cljs.core.first(quoted_specs)),"` must appear at the top-level."].join(''));
}

var specs = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,cljs.core.first(quoted_specs)))?cljs.analyzer.canonicalize_import_specs(quoted_specs):cljs.analyzer.canonicalize_specs(quoted_specs));
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var args = cljs.analyzer.desugar_ns_specs((new cljs.core.List(null,specs,null,(1),null)));
var map__25197 = cljs.analyzer.parse_ns_excludes(env,args);
var map__25197__$1 = cljs.core.__destructure_map(map__25197);
var excludes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,cljs.core.cst$kw$excludes);
var core_renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,cljs.core.cst$kw$renames);
var core_renames__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__25199){
var vec__25200 = p__25199;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25200,(0),null);
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25200,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
}),cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.cst$kw$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var reload = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null));
var reloads = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var map__25198 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__25203){
var vec__25204 = p__25203;
var seq__25205 = cljs.core.seq(vec__25204);
var first__25206 = cljs.core.first(seq__25205);
var seq__25205__$1 = cljs.core.next(seq__25205);
var k = first__25206;
var libs = seq__25205__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,k)){
} else {
if((!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload,null], null), null),libs) == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload);
} else {
}

if((!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload_DASH_all,null], null), null),libs) == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload_DASH_all);
} else {
}
}

var temp__5757__auto___25222 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25191_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__25191_SHARP_));
}),libs));
if((temp__5757__auto___25222 == null)){
} else {
var xs_25223 = temp__5757__auto___25222;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_25223),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25192_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__25192_SHARP_));
}),xs_25223)));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25207){
var vec__25208 = p__25207;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25208,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.cst$kw$refer_DASH_clojure);
}),args));
var map__25198__$1 = cljs.core.__destructure_map(map__25198);
var params = map__25198__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$require);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$rename);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$require_DASH_macros);
var rename_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$rename_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$import);
(cljs.analyzer._STAR_cljs_ns_STAR_ = name);

var require_info = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$renames,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$excludes,cljs.core.cst$kw$name,cljs.core.cst$kw$imports,cljs.core.cst$kw$requires,cljs.core.cst$kw$uses,cljs.core.cst$kw$require_DASH_macros],[rename_macros,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([renames,core_renames__$1], 0)),use_macros,excludes,name,imports,requires,uses,require_macros]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name], null),cljs.analyzer.merge_ns_info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([require_info,env], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns_STAR_,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deps))),cljs.core.cst$kw$reload,cljs.core.deref(reload),cljs.core.cst$kw$reloads,cljs.core.deref(reloads)], null),(function (){var G__25211 = require_info;
var G__25211__$1 = (cljs.core.truth_((function (){var G__25213 = cljs.core.cst$kw$use;
var fexpr__25212 = cljs.core.deref(reload);
return (fexpr__25212.cljs$core$IFn$_invoke$arity$1 ? fexpr__25212.cljs$core$IFn$_invoke$arity$1(G__25213) : fexpr__25212.call(null,G__25213));
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__25211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),(function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__25215 = cljs.core.cst$kw$use;
var fexpr__25214 = cljs.core.deref(reload);
return (fexpr__25214.cljs$core$IFn$_invoke$arity$1 ? fexpr__25214.cljs$core$IFn$_invoke$arity$1(G__25215) : fexpr__25214.call(null,G__25215));
})(),true]));
})):G__25211);
if(cljs.core.truth_((function (){var G__25217 = cljs.core.cst$kw$require;
var fexpr__25216 = cljs.core.deref(reload);
return (fexpr__25216.cljs$core$IFn$_invoke$arity$1 ? fexpr__25216.cljs$core$IFn$_invoke$arity$1(G__25217) : fexpr__25216.call(null,G__25217));
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__25211__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),(function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__25219 = cljs.core.cst$kw$require;
var fexpr__25218 = cljs.core.deref(reload);
return (fexpr__25218.cljs$core$IFn$_invoke$arity$1 ? fexpr__25218.cljs$core$IFn$_invoke$arity$1(G__25219) : fexpr__25218.call(null,G__25219));
})(),true]));
}));
} else {
return G__25211__$1;
}
})()], 0));
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__25224){
var vec__25225 = p__25224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25225,(0),null);
var tsym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25225,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25225,(2),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25225,(3),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25225,(4),null);
var form = vec__25225;
var t = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tsym));
var locals = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,fld){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,fld,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$field,cljs.core.cst$kw$column,cljs.core.cst$kw$unsynchronized_DASH_mutable,cljs.core.cst$kw$line,cljs.core.cst$kw$tag,cljs.core.cst$kw$mutable,cljs.core.cst$kw$volatile_DASH_mutable,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[fld,true,cljs.analyzer.get_col(fld,env),cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.analyzer.get_line(fld,env),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(fld) : m.call(null,fld)),cljs.core.cst$kw$field]));
}),cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord,op))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null)):fields));
var protocols = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$defs,tsym], null),(function (m){
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4212__auto__ = m;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$name,t,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag,cljs.core.cst$sym$function,cljs.core.cst$kw$type,true,cljs.core.cst$kw$num_DASH_fields,cljs.core.count(fields),cljs.core.cst$kw$record,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord,op)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tsym),cljs.core.cst$kw$protocols),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocols,protocols], null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(tsym,env)], 0));
}));

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$children,cljs.core.cst$kw$pmasks,cljs.core.cst$kw$protocols,cljs.core.cst$kw$fields,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$t,cljs.core.cst$kw$form,cljs.core.cst$kw$tag,cljs.core.cst$kw$body],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),pmasks,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(protocols,cljs.core.cst$sym$cljs$core_SLASH_Object),fields,op,env,t,form,cljs.core.cst$sym$function,(function (){var G__25228 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$locals,locals);
var G__25229 = body;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__25228,G__25229) : cljs.analyzer.analyze.call(null,G__25228,G__25229));
})()]);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$deftype_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$deftype,env,form);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$defrecord_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$defrecord,env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__25230_SHARP_){
return cljs.core.boolean$((function (){var and__4210__auto__ = (p1__25230_SHARP_ instanceof cljs.core.Symbol);
if(and__4210__auto__){
return cljs.core.re_matches(/^-.*/,cljs.core.name(p1__25230_SHARP_));
} else {
return and__4210__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__25231){
var vec__25232 = p__25231;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25232,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25232,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25232,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?cljs.core.cst$kw$cljs$analyzer_SLASH_error:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
),((cljs.analyzer.property_symbol_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_property:(((member instanceof cljs.core.Symbol))?cljs.core.cst$kw$cljs$analyzer_SLASH_symbol:((cljs.core.seq_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_list:cljs.core.cst$kw$cljs$analyzer_SLASH_error
))),(((args == null))?cljs.core.List.EMPTY:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
)], null);
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.build_dot_form !== 'undefined')){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__25236 = cljs.core.get_global_hierarchy;
return (fexpr__25236.cljs$core$IFn$_invoke$arity$0 ? fexpr__25236.cljs$core$IFn$_invoke$arity$0() : fexpr__25236.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","build-dot-form"),(function (p1__25235_SHARP_){
return cljs.analyzer.classify_dot_form(p1__25235_SHARP_);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.List.EMPTY], null),(function (p__25237){
var vec__25238 = p__25237;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25238,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_access,cljs.core.cst$kw$target,target,cljs.core.cst$kw$field,cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop).substring((1))),cljs.core.meta(prop))], null);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.cst$kw$cljs$analyzer_SLASH_list], null),(function (p__25241){
var vec__25242 = p__25241;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25242,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25242,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25242,(2),null);
throw (new Error(["Cannot provide arguments ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)," on property access ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,meth,cljs.core.cst$kw$args,args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,cljs.core.first(meth),cljs.core.cst$kw$args,args], null);
}
});
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.cst$kw$cljs$analyzer_SLASH_expr], null),(function (p__25245){
var vec__25246 = p__25245;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25246,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25246,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25246,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.List.EMPTY], null),(function (p__25249){
var vec__25250 = p__25249;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25250,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25250,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25250,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_list,cljs.core.List.EMPTY], null),(function (p__25253){
var vec__25254 = p__25253;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25254,(0),null);
var meth_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25254,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25254,(2),null);
return cljs.analyzer.build_method_call(target,cljs.core.first(meth_expr),cljs.core.rest(meth_expr));
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (dot_form){
throw (new Error(["Unknown dot form of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,dot_form))," with classification ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.classify_dot_form(dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__25258 = (cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1(v) : cljs.analyzer.build_dot_form.call(null,v));
var map__25258__$1 = cljs.core.__destructure_map(map__25258);
var dot_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25258__$1,cljs.core.cst$kw$dot_DASH_action);
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25258__$1,cljs.core.cst$kw$target);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25258__$1,cljs.core.cst$kw$method);
var field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25258__$1,cljs.core.cst$kw$field);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25258__$1,cljs.core.cst$kw$args);
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var targetexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze.call(null,enve,target__$1));
var form_meta = cljs.core.meta(form);
var target_tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(targetexpr);
var prop = (function (){var or__4212__auto__ = field__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return method;
}
})();
var tag = (function (){var or__4212__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var and__4210__auto__ = cljs.analyzer.js_tag_QMARK_(target_tag);
if(and__4210__auto__){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.analyzer.normalize_js_tag(target_tag),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Object], null)),prop);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return null;
}
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$constructor,prop)) && ((((!(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"cljs$")))) && (cljs.core.not(cljs.core.cst$kw$protocol_DASH_prop.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(prop)))))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,cljs.core.first(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag))))){
cljs.analyzer.warning(cljs.core.cst$kw$infer_DASH_warning,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$warn_DASH_type,cljs.core.cst$kw$object,cljs.core.cst$kw$form,form,cljs.core.cst$kw$property,prop], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,target_tag)){
if(cljs.core.truth_((function (){var or__4212__auto__ = (target_tag == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__25259 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$any,"null"], null), null);
return (fexpr__25259.cljs$core$IFn$_invoke$arity$1 ? fexpr__25259.cljs$core$IFn$_invoke$arity$1(target_tag) : fexpr__25259.call(null,target_tag));
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$infer_DASH_warning,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$warn_DASH_type,cljs.core.cst$kw$target,cljs.core.cst$kw$form,form,cljs.core.cst$kw$property,prop], null));
} else {
}

var vec__25260_25267 = (function (){var G__25264 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag));
var fexpr__25263 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast,cljs.core.identity);
return (fexpr__25263.cljs$core$IFn$_invoke$arity$1 ? fexpr__25263.cljs$core$IFn$_invoke$arity$1(G__25264) : fexpr__25263.call(null,G__25264));
})();
var pre_SINGLEQUOTE__25268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25260_25267,(0),null);
var pre_25269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25260_25267,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_SINGLEQUOTE__25268);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_25269));
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$infer_DASH_warning,env,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$warn_DASH_type,cljs.core.cst$kw$property,cljs.core.cst$kw$form,form,cljs.core.cst$kw$type,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",(function (){var G__25265 = pre_SINGLEQUOTE__25268;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,cljs.core.last(pre_SINGLEQUOTE__25268))){
return cljs.core.butlast(G__25265);
} else {
return G__25265;
}
})())),cljs.core.cst$kw$property,prop], null));
} else {
}
} else {
}
} else {
}

if(cljs.analyzer.js_tag_QMARK_(tag)){
var pre_25270 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_25270))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$externs], null),pre_25270),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0));
}
} else {
}

var G__25266 = dot_action;
var G__25266__$1 = (((G__25266 instanceof cljs.core.Keyword))?G__25266.fqn:null);
switch (G__25266__$1) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$host_DASH_field,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$field,field__$1,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,((cljs.analyzer.js_tag_QMARK_(tag))?(function (){var or__4212__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag)),cljs.core.cst$kw$tag);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return tag;
}
})():tag)], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25257_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__25257_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__25257_SHARP_));
}),args);
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target,cljs.core.cst$kw$args], null);
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$op,cljs.core.cst$kw$host_DASH_call,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$method,method,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,((cljs.analyzer.js_tag_QMARK_(tag))?(function (){var or__4212__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag)),cljs.core.cst$kw$ret_DASH_tag);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$sym$js;
}
})():tag)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25266__$1)].join('')));

}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$_DOT_,(function (_,env,p__25272,___$1,___$2){
var vec__25273 = p__25272;
var seq__25274 = cljs.core.seq(vec__25273);
var first__25275 = cljs.core.first(seq__25274);
var seq__25274__$1 = cljs.core.next(seq__25274);
var ___$3 = first__25275;
var first__25275__$1 = cljs.core.first(seq__25274__$1);
var seq__25274__$2 = cljs.core.next(seq__25274__$1);
var target = first__25275__$1;
var vec__25276 = seq__25274__$2;
var seq__25277 = cljs.core.seq(vec__25276);
var first__25278 = cljs.core.first(seq__25277);
var seq__25277__$1 = cljs.core.next(seq__25277);
var field = first__25278;
var member_PLUS_ = seq__25277__$1;
var form = vec__25273;
var _STAR_recur_frames_STAR__orig_val__25279 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25280 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25280);

try{return cljs.analyzer.analyze_dot(env,target,field,member_PLUS_,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25279);
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta(form);
var temp__5755__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
if((temp__5755__auto__ == null)){
if(cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return cljs.core.cst$sym$number;
} else {
return null;
}
} else {
var tag = temp__5755__auto__;
return tag;
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return (new cljs.core.List(null,s,null,(1),null));
} else {
var end = s.indexOf("}",idx);
var inner = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs.core.cons(inner,(function (){var G__25281 = env;
var G__25282 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)));
return (cljs.analyzer.js_star_interp.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.js_star_interp.cljs$core$IFn$_invoke$arity$2(G__25281,G__25282) : cljs.analyzer.js_star_interp.call(null,G__25281,G__25282));
})()));
}),null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return (new cljs.core.List(null,s,null,(1),null));
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),(function (){var G__25283 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)));
return (cljs.analyzer.js_star_seg.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_star_seg.cljs$core$IFn$_invoke$arity$1(G__25283) : cljs.analyzer.js_star_seg.call(null,G__25283));
})());
}),null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$any,"null",cljs.core.cst$sym$long,"null",cljs.core.cst$sym$double,"null",cljs.core.cst$sym$number,"null"], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$clj_DASH_nil,t)){
return true;
} else {
if(cljs.analyzer.js_tag_QMARK_(t)){
return true;
} else {
if((((t instanceof cljs.core.Symbol)) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NUMERIC_SET,t) == null)))))){
return true;
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_(t)){
return ((cljs.core.contains_QMARK_(t,cljs.core.cst$sym$number)) || (((cljs.core.contains_QMARK_(t,cljs.core.cst$sym$long)) || (((cljs.core.contains_QMARK_(t,cljs.core.cst$sym$double)) || (((cljs.core.contains_QMARK_(t,cljs.core.cst$sym$any)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$js)))))))));
} else {
return null;
}
}

}
}
}
});
cljs.analyzer.array_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$sym$boolean,"null",cljs.core.cst$sym$floats,"null",cljs.core.cst$sym$longs,"null",cljs.core.cst$sym$objects,"null",cljs.core.cst$sym$array,"null",cljs.core.cst$sym$doubles,"null",cljs.core.cst$sym$chars,"null",cljs.core.cst$sym$ints,"null",cljs.core.cst$sym$shorts,"null",cljs.core.cst$sym$bytes,"null"], null), null);
cljs.analyzer.array_type_QMARK_ = (function cljs$analyzer$array_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$clj_DASH_nil,t)){
return true;
} else {
if(cljs.analyzer.js_tag_QMARK_(t)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$any,t)){
return true;
} else {
if(cljs.core.contains_QMARK_(cljs.analyzer.array_types,t)){
return true;
} else {
return cljs.core.boolean$(((cljs.analyzer.impl.cljs_set_QMARK_(t))?(function (){var or__4212__auto__ = cljs.core.contains_QMARK_(t,cljs.core.cst$sym$any);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.contains_QMARK_(t,cljs.core.cst$sym$js);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.core.some(cljs.analyzer.array_types,t);
}
}
})():null));

}
}
}
}
}
});
cljs.analyzer.analyze_js_star_args = (function cljs$analyzer$analyze_js_star_args(js_op,env,args){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25284,arg){
var vec__25285 = p__25284;
var argexprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25285,(0),null);
var env__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25285,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(argexprs,(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env__$1,arg) : cljs.analyzer.analyze.call(null,env__$1,arg))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_op,cljs.core.cst$sym$cljs$core_SLASH_and))?cljs.analyzer.set_test_induced_tags(env__$1,arg):env__$1)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,env], null),args));
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var form_meta = cljs.core.meta(form);
var segs = cljs.analyzer.js_star_seg(jsform);
var tag = cljs.analyzer.get_js_tag(form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var argexprs = cljs.analyzer.analyze_js_star_args(js_op,enve,args);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
var validate = (function (warning_type,valid_types_QMARK_){
var types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25288_SHARP_){
return cljs.analyzer.infer_tag(env,p1__25288_SHARP_);
}),argexprs);
if(cljs.core.truth_((valid_types_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_types_QMARK_.cljs$core$IFn$_invoke$arity$1(types) : valid_types_QMARK_.call(null,types)))){
return null;
} else {
return cljs.analyzer.warning(warning_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$types,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types)], null));
}
});
var op_match_QMARK_ = (function (sym){
return cljs.core.symbol_identical_QMARK_(sym,cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta));
});
if(numeric === true){
validate(cljs.core.cst$kw$invalid_DASH_arithmetic,(function (p1__25289_SHARP_){
return cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,p1__25289_SHARP_);
}));
} else {
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$args,cljs.core.cst$kw$children,cljs.core.cst$kw$numeric,cljs.core.cst$kw$segs,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$js_DASH_op,cljs.core.cst$kw$form,cljs.core.cst$kw$tag],[argexprs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),numeric,segs,cljs.core.cst$kw$js,env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR__orig_val__25290 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25291 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25291);

try{return cljs.analyzer.analyze_js_star_STAR_(env,jsform,args,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25290);
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$js_STAR_,(function (op,env,p__25292,_,___$1){
var vec__25293 = p__25292;
var seq__25294 = cljs.core.seq(vec__25293);
var first__25295 = cljs.core.first(seq__25294);
var seq__25294__$1 = cljs.core.next(seq__25294);
var ___$2 = first__25295;
var first__25295__$1 = cljs.core.first(seq__25294__$1);
var seq__25294__$2 = cljs.core.next(seq__25294__$1);
var jsform = first__25295__$1;
var args = seq__25294__$2;
var form = vec__25293;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid js* form");
}

if((!((args == null)))){
return cljs.analyzer.analyze_js_star(env,jsform,args,form);
} else {
var code = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.analyzer.js_star_interp(env,jsform));
var tag = cljs.analyzer.get_js_tag(form);
var form_meta = cljs.core.meta(form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$code,code,cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$numeric,numeric], null);
}
}));
cljs.analyzer.unsorted_map_QMARK_ = (function cljs$analyzer$unsorted_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.sorted_QMARK_(x)))));
});
/**
 * Mark a form as being analyzed. Assumes x satisfies IMeta. Useful to suppress
 *   warnings that will have been caught by a first compiler pass.
 */
cljs.analyzer.analyzed = (function cljs$analyzer$analyzed(x){
if(cljs.analyzer.unsorted_map_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true);
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true);

}
});
/**
 * Returns boolean if the form has already been marked as analyzed.
 */
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(x){
return cljs.core.boolean$(((cljs.analyzer.unsorted_map_QMARK_(x))?cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed.cljs$core$IFn$_invoke$arity$1(x):cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x))
));
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_((function (p1__25296_SHARP_){
return (((p1__25296_SHARP_ == null)) || ((((p1__25296_SHARP_ instanceof cljs.core.Symbol)) || (((typeof p1__25296_SHARP_ === 'string') || (((typeof p1__25296_SHARP_ === 'number') || (((p1__25296_SHARP_ === true) || (p1__25296_SHARP_ === false))))))))));
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return (((method_params == null)) || (cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([argc]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,method_params)))));
});
cljs.analyzer.record_tag_QMARK_ = (function cljs$analyzer$record_tag_QMARK_(tag){
return cljs.core.boolean$((function (){var and__4210__auto__ = (tag instanceof cljs.core.Symbol);
if(and__4210__auto__){
var and__4210__auto____$1 = (!((cljs.core.namespace(tag) == null)));
if(and__4210__auto____$1){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(tag)),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tag)),cljs.core.cst$kw$record], null));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})());
});
cljs.analyzer.record_basis = (function cljs$analyzer$record_basis(tag){
var positional_factory = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["->",cljs.core.name(tag)].join(''));
var fields = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(tag)),cljs.core.cst$kw$defs,positional_factory,cljs.core.cst$kw$method_DASH_params], null)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,fields);
});
cljs.analyzer.record_with_field_QMARK_ = (function cljs$analyzer$record_with_field_QMARK_(tag,field){
return ((cljs.analyzer.record_tag_QMARK_(tag)) && (cljs.core.contains_QMARK_(cljs.analyzer.record_basis(tag),field)));
});
cljs.analyzer.invalid_arity_QMARK_ = (function cljs$analyzer$invalid_arity_QMARK_(argc,method_params,variadic,max_fixed_arity){
var and__4210__auto__ = (!(cljs.analyzer.valid_arity_QMARK_(argc,method_params)));
if(and__4210__auto__){
var or__4212__auto__ = cljs.core.not(variadic);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto____$1 = variadic;
if(cljs.core.truth_(and__4210__auto____$1)){
return (argc < max_fixed_arity);
} else {
return and__4210__auto____$1;
}
}
} else {
return and__4210__auto__;
}
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__25298){
var vec__25299 = p__25298;
var seq__25300 = cljs.core.seq(vec__25299);
var first__25301 = cljs.core.first(seq__25300);
var seq__25300__$1 = cljs.core.next(seq__25300);
var f = first__25301;
var args = seq__25300__$1;
var form = vec__25299;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var fexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,f) : cljs.analyzer.analyze.call(null,enve,f));
var argc = cljs.core.count(args);
var fn_var_QMARK_ = (function (){var or__4212__auto__ = cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$js_DASH_fn_DASH_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
}
})();
var kw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(fexpr));
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var HO_invoke_QMARK_ = ((cljs.core.boolean$(cljs.analyzer._STAR_cljs_static_fns_STAR_)) && (((cljs.core.not(fn_var_QMARK_)) && ((((!(cljs.analyzer.js_tag_QMARK_(f)))) && ((((!(kw_QMARK_))) && ((!(cljs.analyzer.analyzed_QMARK_(f)))))))))));
var bind_f_expr_QMARK_ = ((HO_invoke_QMARK_) && ((!((f instanceof cljs.core.Symbol)))));
var bind_args_QMARK_ = ((HO_invoke_QMARK_) && ((!(cljs.analyzer.all_values_QMARK_(args)))));
if(fn_var_QMARK_){
var map__25302_25308 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr);
var map__25302_25309__$1 = cljs.core.__destructure_map(map__25302_25308);
var variadic_25310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25309__$1,cljs.core.cst$kw$variadic_QMARK_);
var max_fixed_arity_25311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25309__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var method_params_25312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25309__$1,cljs.core.cst$kw$method_DASH_params);
var name_25313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25309__$1,cljs.core.cst$kw$name);
var ns_25314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25309__$1,cljs.core.cst$kw$ns);
var macro_25315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25309__$1,cljs.core.cst$kw$macro);
if(cljs.core.truth_((function (){var and__4210__auto__ = (!(((goog.string.endsWith(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns),"$macros")) && (((cljs.core.symbol_identical_QMARK_(cur_ns,ns_25314)) && (macro_25315 === true))))));
if(and__4210__auto__){
return cljs.analyzer.invalid_arity_QMARK_(argc,method_params_25312,variadic_25310,max_fixed_arity_25311);
} else {
return and__4210__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name_25313,cljs.core.cst$kw$argc,argc], null));
} else {
}
} else {
}

if(((kw_QMARK_) && ((!(((((1) === argc)) || (((2) === argc)))))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.first(form),cljs.core.cst$kw$argc,argc], null));
} else {
}

var deprecated_QMARK__25316 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__25317 = cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(((cljs.core.boolean$(deprecated_QMARK__25316)) && ((!(cljs.core.boolean$(no_warn_QMARK__25317)))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
} else {
}

if((!((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr)) == null)))){
cljs.analyzer.warning(cljs.core.cst$kw$invoke_DASH_ctor,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
} else {
}

if(((bind_args_QMARK_) || (bind_f_expr_QMARK_))){
var arg_syms = ((bind_args_QMARK_)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(argc,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)):null);
var f_sym = ((bind_f_expr_QMARK_)?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("fexpr__"):null);
var bindings = (function (){var G__25303 = cljs.core.PersistentVector.EMPTY;
var G__25303__$1 = ((bind_args_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__25303,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arg_syms,args)):G__25303);
if(bind_f_expr_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__25303__$1,f_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.analyzer.analyzed(f)], 0));
} else {
return G__25303__$1;
}
})();
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var G__25304 = env;
var G__25305 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(bindings)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.analyzer.analyzed(((bind_f_expr_QMARK_)?f_sym:f)),null,(1),null)),((bind_args_QMARK_)?arg_syms:args)))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag], null)),null,(1),null))], 0))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__25304,G__25305) : cljs.analyzer.analyze.call(null,G__25304,G__25305));
} else {
var ana_expr = (function (p1__25297_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__25297_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__25297_SHARP_));
});
var argexprs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(ana_expr,args);
if((((((f instanceof cljs.core.Keyword)) && ((cljs.core.namespace(f) == null)))) && (((((1) === cljs.core.count(args))) && (cljs.analyzer.record_with_field_QMARK_(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.first(argexprs)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f)))))))){
var field_access_form = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.name(f)].join('')),args);
var _STAR_cljs_warnings_STAR__orig_val__25306 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__25307 = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__25307);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,field_access_form) : cljs.analyzer.analyze.call(null,env,field_access_form));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__25306);
}} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$invoke,cljs.core.cst$kw$form,form,cljs.core.cst$kw$fn,fexpr,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null)], null);
}
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR__orig_val__25318 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25319 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25319);

try{return cljs.analyzer.parse_invoke_STAR_(env,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25318);
}});
cljs.analyzer.desugar_dotted_expr = (function cljs$analyzer$desugar_dotted_expr(p__25320){
var map__25321 = p__25320;
var map__25321__$1 = cljs.core.__destructure_map(map__25321);
var expr = map__25321__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25321__$1,cljs.core.cst$kw$op);
var G__25322 = op;
var G__25322__$1 = (((G__25322 instanceof cljs.core.Keyword))?G__25322.fqn:null);
switch (G__25322__$1) {
case "var":
case "local":
if(cljs.analyzer.dotted_symbol_QMARK_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(expr))))){
var s = cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(expr));
var idx = s.lastIndexOf(".");
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((idx + (1)),((s).length)))?null:(function(){throw (new Error("Assert failed: (not= (inc idx) (count s))"))})());
var prefix = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(expr)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx)),cljs.core.meta(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(expr)));
var field = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx + (1))));
if(cljs.core.not(cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(expr))){
} else {
throw (new Error("Assert failed: (not (:const-expr expr))"));
}

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$host_DASH_field,cljs.core.cst$kw$env,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr),cljs.core.cst$kw$form,(new cljs.core.List(null,cljs.core.cst$sym$_DOT_,(new cljs.core.List(null,prefix,(new cljs.core.List(null,field,null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$target,(function (){var G__25323 = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(expr,cljs.core.cst$kw$name,prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form,prefix], 0)),cljs.core.cst$kw$tag),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info,cljs.core.cst$kw$name], null),prefix),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$context], null),cljs.core.cst$kw$expr);
return (cljs.analyzer.desugar_dotted_expr.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.desugar_dotted_expr.cljs$core$IFn$_invoke$arity$1(G__25323) : cljs.analyzer.desugar_dotted_expr.call(null,G__25323));
})(),cljs.core.cst$kw$field,field,cljs.core.cst$kw$tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(expr),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null)], null);
} else {
return expr;
}

break;
default:
return expr;

}
});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

var G__25325 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$op,cljs.core.cst$kw$const,cljs.core.cst$kw$val,sym,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Symbol], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__25325) : cljs.analyzer.analyze_wrap_meta.call(null,G__25325));
} else {
var map__25326 = cljs.core.meta(sym);
var map__25326__$1 = cljs.core.__destructure_map(map__25326);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,cljs.core.cst$kw$column);
var env__$1 = (((!((line == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$line,line):env);
var env__$2 = (((!((column == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$column,column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env__$2,cljs.core.cst$kw$form,sym], null);
var lcls = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env__$2);
var temp__5755__auto__ = cljs.analyzer.handle_symbol_local(sym,cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym));
if((temp__5755__auto__ == null)){
var sym_meta = cljs.core.meta(sym);
var sym_ns = cljs.core.namespace(sym);
var cur_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env__$2)));
var sym__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = sym_ns;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns,"cljs.core")) && (((goog.string.endsWith(cur_ns,"$macros")) && ((((!(goog.string.endsWith(sym_ns,"$macros")))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cur_ns,(0),(((cur_ns).length) - (7))))))))));
} else {
return and__4210__auto__;
}
})())?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([sym_ns,"$macros"].join(''),cljs.core.name(sym)):sym);
var info = (((!(cljs.core.contains_QMARK_(sym_meta,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed))))?cljs.analyzer.resolve_existing_var(env__$2,sym__$1):cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym__$1));
if(cljs.core.truth_(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(info))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(info)),"\n","(:op info)"].join('')));
}

return cljs.analyzer.desugar_dotted_expr((((!(cljs.core.cst$kw$def_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$2) === true)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.cst$kw$info,info),cljs.core.select_keys(info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$name,cljs.core.cst$kw$ns,cljs.core.cst$kw$tag], null)),(function (){var temp__5753__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5753__auto__)){
var const_expr = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$const_DASH_expr,const_expr], null);
} else {
return null;
}
})()], 0)):(function (){var info__$1 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym__$1);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$info,info__$1], 0)),cljs.core.select_keys(info__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$name,cljs.core.cst$kw$ns,cljs.core.cst$kw$tag], null))], 0));
})()));
} else {
var lb = temp__5755__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$info,lb], 0)),((cljs.core.map_QMARK_(lb))?cljs.core.select_keys(lb,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$local,cljs.core.cst$kw$arg_DASH_id,cljs.core.cst$kw$variadic_QMARK_,cljs.core.cst$kw$init], null)):null)], 0));
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
return (((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes,sym) == null)))) || ((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$excludes,sym) == null)))));
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
return (((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym) == null)))) || ((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$use_DASH_macros,sym) == null)))));
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
var res = (function (){var or__4212__auto__ = cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3(env,nstr,null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3(env,nstr,null);
}
})();
var nstr__$1 = (((!((res == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(res):nstr);
if(("clojure.core" === nstr__$1)){
return cljs.core.find_macros_ns(cljs.analyzer.impl.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr__$1)){
return cljs.core.find_macros_ns(cljs.core.cst$sym$cljs$repl);
} else {
if(goog.string.contains(nstr__$1,".")){
return cljs.core.find_macros_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr__$1));
} else {
var G__25327 = env;
var G__25327__$1 = (((G__25327 == null))?null:cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(G__25327));
var G__25327__$2 = (((G__25327__$1 == null))?null:cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(G__25327__$1));
var G__25327__$3 = (((G__25327__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__25327__$2,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr__$1)));
if((G__25327__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns(G__25327__$3);
}

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$locals,sym) == null)))) || (((cljs.analyzer.excluded_QMARK_(env,sym)) && ((!(cljs.analyzer.used_QMARK_(env,sym)))))))){
return null;
} else {
var nstr = cljs.core.namespace(sym);
if((!((nstr == null)))){
var ns = cljs.analyzer.get_expander_ns(env,nstr);
if((!((ns == null)))){
return ns.findInternedVar(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
} else {
return null;
}
} else {
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$rename_DASH_macros,sym) == null)))){
var qualified_symbol = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$rename_DASH_macros,sym);
var nsym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_symbol));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
return cljs.core.find_macros_ns(nsym).findInternedVar(sym__$1);
} else {
var nsym = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym);
if((((!((nsym == null)))) && ((nsym instanceof cljs.core.Symbol)))){
return cljs.core.find_macros_ns(nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns(cljs.analyzer.impl.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}

}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_(sym,env);
if((((!((mvar == null)))) && (mvar.isMacro()))){
return mvar;
} else {
return null;
}
});
var cached_var_25328 = (new cljs.core.Delay((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.ns_interns_STAR_(cljs.core.cst$sym$cljs$spec$alpha),cljs.core.cst$sym$macroexpand_DASH_check);
}),null));
cljs.analyzer.get_macroexpand_check_var = (function cljs$analyzer$get_macroexpand_check_var(){
if((!((cljs.core.find_ns_obj(cljs.core.cst$sym$cljs$spec$alpha) == null)))){
return cljs.core.deref(cached_var_25328);
} else {
return null;
}
});
cljs.analyzer.var__GT_sym = (function cljs$analyzer$var__GT_sym(var$){
return var$.sym;
});
cljs.analyzer.do_macroexpand_check = (function cljs$analyzer$do_macroexpand_check(env,form,mac_var){
if(cljs.core.not(cljs.core.cst$kw$spec_DASH_skip_DASH_macros.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
var mchk = cljs.analyzer.get_macroexpand_check_var();
if((!((mchk == null)))){
try{var G__25330 = mac_var;
var G__25331 = cljs.core.next(form);
return (mchk.cljs$core$IFn$_invoke$arity$2 ? mchk.cljs$core$IFn$_invoke$arity$2(G__25330,G__25331) : mchk.call(null,G__25330,G__25331));
}catch (e25329){var e = e25329;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$macro_DASH_syntax_DASH_check,cljs.analyzer.var__GT_sym(mac_var)),e);
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.check_macro_arity = (function cljs$analyzer$check_macro_arity(mac_var,form){
var mac_sym = mac_var.sym;
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(mac_sym)),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mac_sym))], null));
if(cljs.core.truth_(temp__5753__auto__)){
var map__25333 = temp__5753__auto__;
var map__25333__$1 = cljs.core.__destructure_map(map__25333);
var variadic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25333__$1,cljs.core.cst$kw$variadic_QMARK_);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25333__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var method_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25333__$1,cljs.core.cst$kw$method_DASH_params);
var argc = cljs.core.count(cljs.core.rest(form));
var offset = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.ffirst(method_params)))?(2):(0));
if(cljs.core.truth_(cljs.analyzer.invalid_arity_QMARK_(argc,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25332_SHARP_){
return cljs.core.nthrest(p1__25332_SHARP_,offset);
}),method_params),variadic_QMARK_,(cljs.core.truth_(max_fixed_arity)?(max_fixed_arity - offset):null)))){
throw (new Error((function (){var G__25334 = cljs.core.cst$kw$fn_DASH_arity;
var G__25335 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$argc,argc,cljs.core.cst$kw$name,mac_sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__25334,G__25335) : cljs.analyzer.error_message.call(null,G__25334,G__25335));
})()));
} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first(form);
if(cljs.core.contains_QMARK_(cljs.analyzer.specials,op)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$ns,op)){
cljs.analyzer.do_macroexpand_check(env,form,cljs.analyzer.get_expander(cljs.core.cst$sym$cljs$core_SLASH_ns_DASH_special_DASH_form,env));
} else {
}

return form;
} else {
var temp__5755__auto__ = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander(op,env):null);
if((temp__5755__auto__ == null)){
if((op instanceof cljs.core.Symbol)){
var opname = cljs.core.str.cljs$core$IFn$_invoke$arity$1(op);
if(("." === opname.charAt((0)))){
var vec__25336 = cljs.core.next(form);
var seq__25337 = cljs.core.seq(vec__25336);
var first__25338 = cljs.core.first(seq__25337);
var seq__25337__$1 = cljs.core.next(seq__25337);
var target = first__25338;
var args = seq__25337__$1;
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.analyzer.impl.DOT_SYM,target,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(opname,(1))),args),cljs.core.meta(form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.impl.NEW_SYM,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(opname,(0),(((opname).length) - (1)))),cljs.core.next(form)),cljs.core.meta(form));
} else {
return form;

}
}
} else {
return form;
}
} else {
var mac_var = temp__5755__auto__;
cljs.analyzer.do_macroexpand_check(env,form,mac_var);

var form_SINGLEQUOTE_ = (function (){try{cljs.analyzer.check_macro_arity(mac_var,form);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(mac_var),form,env,cljs.core.rest(form));
}catch (e25339){var e = e25339;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$macroexpansion,cljs.analyzer.var__GT_sym(mac_var)),e);
}})();
if(cljs.analyzer.impl.cljs_seq_QMARK_(form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first(form_SINGLEQUOTE_);
var sym = cljs.core.first(form);
if(cljs.core.symbol_identical_QMARK_(sym_SINGLEQUOTE_,cljs.analyzer.impl.JS_STAR_SYM)){
var sym__$1 = (((!((cljs.core.namespace(sym) == null))))?sym:cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$js_DASH_op,sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(mac_var.sym));
var mac_var_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mac_var.sym));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,mac_var_ns,cljs.core.cst$kw$defs,mac_var_name,cljs.core.cst$kw$meta,cljs.core.cst$kw$cljs$analyzer_SLASH_numeric], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(js_op,cljs.core.cst$kw$numeric,true):js_op);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
try{return cljs.analyzer.macroexpand_1_STAR_(env,form);
}catch (e25340){var err__24177__auto__ = e25340;
if(cljs.analyzer.has_error_data_QMARK_(err__24177__auto__)){
throw err__24177__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_(err__24177__auto__)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$compilation),err__24177__auto__);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$compilation),cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__24177__auto__.message,err__24177__auto__));

}
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(cljs.core.contains_QMARK_(cljs.analyzer.specials,op)){
return (cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5 ? cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5(op,env,form,name,opts) : cljs.analyzer.parse.call(null,op,env,form,name,opts));
} else {
return cljs.analyzer.parse_invoke(env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_(op,env,form,name,opts);
}catch (e25341){var err__24177__auto__ = e25341;
if(cljs.analyzer.has_error_data_QMARK_(err__24177__auto__)){
throw err__24177__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_(err__24177__auto__)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$compilation),err__24177__auto__);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$compilation),cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__24177__auto__.message,err__24177__auto__));

}
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
var G__25343 = arguments.length;
switch (G__25343) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
return (cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze_list.call(null,env,form));
} else {
var line = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var line__$1 = (((line == null))?cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env):line);
var col = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var col__$1 = (((col == null))?cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$line,line__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column,col__$1], 0));
var op = cljs.core.first(form);
if((op == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1(env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap(op,env__$1,form,name,opts);
} else {
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,mform,name,opts) : cljs.analyzer.analyze.call(null,env__$1,mform,name,opts));
}
}
}));

(cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4);

cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ks = (function (){var _STAR_recur_frames_STAR__orig_val__25347 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25348 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25348);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25345_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__25345_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__25345_SHARP_));
}),cljs.core.keys(form));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25347);
}})();
var vs = (function (){var _STAR_recur_frames_STAR__orig_val__25349 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25350 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25350);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25346_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__25346_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__25346_SHARP_));
}),cljs.core.vals(form));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25349);
}})();
var G__25351 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$map,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$keys,ks,cljs.core.cst$kw$vals,vs,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keys,cljs.core.cst$kw$vals], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IMap], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__25351) : cljs.analyzer.analyze_wrap_meta.call(null,G__25351));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR__orig_val__25353 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25354 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25354);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25352_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__25352_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__25352_SHARP_));
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25353);
}})();
var G__25355 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$list,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IList], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__25355) : cljs.analyzer.analyze_wrap_meta.call(null,G__25355));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR__orig_val__25357 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25358 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25358);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25356_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__25356_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__25356_SHARP_));
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25357);
}})();
var G__25359 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$vector,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IVector], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__25359) : cljs.analyzer.analyze_wrap_meta.call(null,G__25359));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR__orig_val__25361 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25362 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25362);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25360_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__25360_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__25360_SHARP_));
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25361);
}})();
var G__25363 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$set,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_ISet], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__25363) : cljs.analyzer.analyze_wrap_meta.call(null,G__25363));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
if(cljs.core.map_QMARK_(val)){
var keys = cljs.core.vec(cljs.core.keys(val));
var vals = (function (){var _STAR_recur_frames_STAR__orig_val__25366 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25367 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25367);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25364_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__25364_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__25364_SHARP_));
}),cljs.core.vals(val));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25366);
}})();
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_object,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$keys,keys,cljs.core.cst$kw$vals,vals,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vals], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$object], null);
} else {
var items = (function (){var _STAR_recur_frames_STAR__orig_val__25368 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25369 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25369);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25365_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__25365_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__25365_SHARP_));
}),val);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25368);
}})();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_array,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$array], null);
}
});
cljs.analyzer.record_ns_PLUS_name = (function cljs$analyzer$record_ns_PLUS_name(x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),/\//));
});
cljs.analyzer.analyze_record = (function cljs$analyzer$analyze_record(env,x){
var _items_ = (function (){var _STAR_recur_frames_STAR__orig_val__25374 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__25375 = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__25375);

try{var G__25376 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__25377 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__25376,G__25377) : cljs.analyzer.analyze.call(null,G__25376,G__25377));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__25374);
}})();
var vec__25371 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25371,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25371,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$op,cljs.core.cst$kw$const,cljs.core.cst$kw$val,x,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,x,cljs.core.cst$kw$tag,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$file,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$line,cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$source], 0));
});
cljs.analyzer.elide_analyzer_meta = (function cljs$analyzer$elide_analyzer_meta(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed);
});
cljs.analyzer.elide_irrelevant_meta = (function cljs$analyzer$elide_irrelevant_meta(m){
return cljs.analyzer.elide_analyzer_meta(cljs.analyzer.elide_reader_meta(m));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(form));
if((!((cljs.core.seq(m) == null)))){
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in(expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$context], null),cljs.core.cst$kw$expr);
var meta_expr = cljs.analyzer.analyze_map(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$with_DASH_meta,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$meta,meta_expr,cljs.core.cst$kw$expr,expr__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,cljs.core.cst$kw$expr], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,p__25379,_){
var map__25380 = p__25379;
var map__25380__$1 = cljs.core.__destructure_map(map__25380);
var ast = map__25380__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25380__$1,cljs.core.cst$kw$tag);
if((((tag == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$function,tag)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$methods,(function (ms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__25378_SHARP_){
return (cljs.analyzer.infer_type.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.infer_type.cljs$core$IFn$_invoke$arity$3(env,p1__25378_SHARP_,_) : cljs.analyzer.infer_type.call(null,env,p1__25378_SHARP_,_));
})),ms);
}));
} else {
var temp__5755__auto__ = cljs.analyzer.infer_tag(env,ast);
if((temp__5755__auto__ == null)){
return ast;
} else {
var tag__$1 = temp__5755__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$tag,tag__$1);
}
}
} else {
return ast;
}
});
cljs.analyzer.repl_self_require_QMARK_ = (function cljs$analyzer$repl_self_require_QMARK_(env,deps){
var and__4210__auto__ = cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4210__auto__;
}
});
cljs.analyzer.invoke_arg_type_validators = (function (){var aget_validator = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$valid_QMARK_,(function (p1__25381_SHARP_){
return ((cljs.analyzer.array_type_QMARK_(cljs.core.first(p1__25381_SHARP_))) && (cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,cljs.core.rest(p1__25381_SHARP_))));
}),cljs.core.cst$kw$warning_DASH_type,cljs.core.cst$kw$invalid_DASH_array_DASH_access], null);
var aset_validator = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$valid_QMARK_,(function (p1__25382_SHARP_){
return ((cljs.analyzer.array_type_QMARK_(cljs.core.first(p1__25382_SHARP_))) && (cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,cljs.core.butlast(cljs.core.rest(p1__25382_SHARP_)))));
}),cljs.core.cst$kw$warning_DASH_type,cljs.core.cst$kw$invalid_DASH_array_DASH_access], null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget,aget_validator,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset,aset_validator,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_,aget_validator,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_,aset_validator], null);
})();
cljs.analyzer.check_invoke_arg_types = (function cljs$analyzer$check_invoke_arg_types(env,p__25383,opts){
var map__25384 = p__25383;
var map__25384__$1 = cljs.core.__destructure_map(map__25384);
var ast = map__25384__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25384__$1,cljs.core.cst$kw$op);
if((((!(cljs.analyzer.analyzed_QMARK_(ast)))) && (cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$invoke,op)))){
var temp__5757__auto___25389 = cljs.core.find(cljs.analyzer.invoke_arg_type_validators,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(ast))));
if((temp__5757__auto___25389 == null)){
} else {
var vec__25385_25390 = temp__5757__auto___25389;
var name_25391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25385_25390,(0),null);
var map__25388_25392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25385_25390,(1),null);
var map__25388_25393__$1 = cljs.core.__destructure_map(map__25388_25392);
var valid_QMARK__25394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25388_25393__$1,cljs.core.cst$kw$valid_QMARK_);
var warning_type_25395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25388_25393__$1,cljs.core.cst$kw$warning_DASH_type);
var types_25396 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_((valid_QMARK__25394.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK__25394.cljs$core$IFn$_invoke$arity$1(types_25396) : valid_QMARK__25394.call(null,types_25396)))){
} else {
cljs.analyzer.warning(warning_type_25395,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name_25391,cljs.core.cst$kw$types,types_25396], null));
}
}
} else {
}

return cljs.analyzer.analyzed(ast);
});
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol(env,form);
} else {
if(((cljs.analyzer.impl.cljs_seq_QMARK_(form)) && ((!((cljs.core.seq(form) == null)))))){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,opts);
} else {
if(cljs.core.record_QMARK_(form)){
return cljs.analyzer.analyze_record(env,form);
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(form)){
return cljs.analyzer.analyze_map(env,form);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_(form)){
return cljs.analyzer.analyze_vector(env,form);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_(form)){
return cljs.analyzer.analyze_set(env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword(env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value(env,form);
} else {
var tag = (((form == null))?cljs.analyzer.impl.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.impl.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.impl.STRING_SYM:((form === true)?cljs.analyzer.impl.BOOLEAN_SYM:((form === false)?cljs.analyzer.impl.BOOLEAN_SYM:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,form))?cljs.core.cst$sym$cljs$core_SLASH_IList:null))))));
var G__25397 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$const,cljs.core.cst$kw$val,form,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25397,cljs.core.cst$kw$tag,tag);
} else {
return G__25397;
}

}
}
}
}
}
}
}
}
});
cljs.analyzer.default_passes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type,cljs.analyzer.passes.and_or.optimize,cljs.analyzer.check_invoke_arg_types], null);
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?cljs.analyzer.default_passes:passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq(form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form(env,form__$1,name,opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast__$1,pass){
return (pass.cljs$core$IFn$_invoke$arity$3 ? pass.cljs$core$IFn$_invoke$arity$3(env,ast__$1,opts) : pass.call(null,env,ast__$1,opts));
}),ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have a :children entry. This must be a vector of keywords naming
 *   the immediately nested fields mapped to an expr or vector of exprs. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
var G__25399 = arguments.length;
switch (G__25399) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(env,form,null);
}));

(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
try{if(cljs.analyzer.analyzed_QMARK_(form)){
var _STAR_cljs_warnings_STAR__orig_val__25401 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__25402 = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__25402);

try{return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__25401);
}} else {
return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}
}catch (e25400){var err__24177__auto__ = e25400;
if(cljs.analyzer.has_error_data_QMARK_(err__24177__auto__)){
throw err__24177__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_(err__24177__auto__)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$compilation),err__24177__auto__);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(null,cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$compilation),cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__24177__auto__.message,err__24177__auto__));

}
}
}}));

(cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4);

/**
 * Given a compiler state and a map from fully qualified symbols to constant
 *   EDN values, update the compiler state marking these vars as const to support
 *   direct substitution of these vars in source.
 */
cljs.analyzer.add_consts = (function cljs$analyzer$add_consts(compiler_state,constants_map){
return cljs.core.reduce_kv((function (compiler_state__$1,sym,value){
var ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(sym));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(compiler_state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$const_DASH_expr,(function (){var _STAR_passes_STAR__orig_val__25404 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__25405 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$context,cljs.core.cst$kw$expr], null)));
(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__25405);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.empty_env(),value);
}finally {(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__25404);
}})()], null));
}),compiler_state,constants_map);
});
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(sym){
if(((cljs.core.not(cljs.core.namespace(sym))) && (cljs.analyzer.dotted_symbol_QMARK_(sym)))){
return sym;
} else {
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__25406 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__25407 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__25407);

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)),sym);
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__25406);
}})());
}
});
var registry_ref_25408 = (new cljs.core.Delay((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.ns_interns_STAR_(cljs.core.cst$sym$cljs$spec$alpha$macros),cljs.core.cst$sym$registry_DASH_ref);
}),null));
var speced_vars_25409 = (new cljs.core.Delay((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.ns_interns_STAR_(cljs.core.cst$sym$cljs$spec$alpha$macros),cljs.core.cst$sym$_DASH_speced_DASH_vars);
}),null));
cljs.analyzer.get_spec_vars = (function cljs$analyzer$get_spec_vars(){
if((!((cljs.core.find_ns_obj(cljs.core.cst$sym$cljs$spec$alpha$macros) == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$registry_DASH_ref,cljs.core.deref(registry_ref_25408),cljs.core.cst$kw$speced_DASH_vars,cljs.core.deref(speced_vars_25409)], null);
} else {
return null;
}
});
/**
 * Dumps registered speced vars for a given namespace into the compiler
 *   environment.
 */
cljs.analyzer.dump_specs = (function cljs$analyzer$dump_specs(ns){
var spec_vars = cljs.analyzer.get_spec_vars();
var ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5753__auto__ = cljs.core.cst$kw$registry_DASH_ref.cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5753__auto__)){
var registry_ref = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_registry_DASH_ref,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__25410){
var vec__25411 = p__25410;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25411,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25411,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,cljs.core.namespace(k));
})),cljs.core.deref(cljs.core.deref(registry_ref)))], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.cst$kw$speced_DASH_vars.cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5753__auto__)){
var speced_vars = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_speced_DASH_vars,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (v){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,cljs.core.namespace(v))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$kw$fdef_DASH_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))));
})),cljs.core.deref(cljs.core.deref(speced_vars)))], null);
} else {
return null;
}
})()], 0));
});
/**
 * Registers speced vars found in a namespace analysis cache.
 */
cljs.analyzer.register_specs = (function cljs$analyzer$register_specs(cached_ns){
var map__25414 = cljs.analyzer.get_spec_vars();
var map__25414__$1 = cljs.core.__destructure_map(map__25414);
var registry_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25414__$1,cljs.core.cst$kw$registry_DASH_ref);
var speced_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25414__$1,cljs.core.cst$kw$speced_DASH_vars);
var temp__5753__auto___25415 = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_registry_DASH_ref.cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5753__auto___25415){
var registry_25416 = temp__5753__auto___25415;
if(cljs.core.truth_(registry_ref)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(registry_ref),cljs.core.into,registry_25416);
} else {
}
} else {
}

var temp__5753__auto__ = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_speced_DASH_vars.cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5753__auto__){
var vars = temp__5753__auto__;
if(cljs.core.truth_(speced_vars)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(speced_vars),cljs.core.into,vars);
} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.analyze_form_seq = (function cljs$analyzer$analyze_form_seq(var_args){
var G__25418 = arguments.length;
switch (G__25418) {
case 1:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1 = (function (forms){
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2(forms,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2 = (function (forms,opts){
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$3(forms,opts,false);
}));

(cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$3 = (function (forms,opts,return_last_QMARK_){
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.empty_env(),cljs.core.cst$kw$build_DASH_options,opts);
var _STAR_file_defs_STAR__orig_val__25419 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR__orig_val__25420 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR__orig_val__25421 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR__orig_val__25422 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_file_defs_STAR__temp_val__25423 = null;
var _STAR_cljs_ns_STAR__temp_val__25424 = cljs.core.cst$sym$cljs$user;
var _STAR_cljs_file_STAR__temp_val__25425 = null;
var _STAR_alias_map_STAR__temp_val__25426 = (function (){var or__4212__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
(cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__temp_val__25423);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__25424);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__25425);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__25426);

try{var ns = null;
var forms__$1 = forms;
var last_ast = null;
while(true){
if((!((forms__$1 == null)))){
var form = cljs.core.first(forms__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ast = cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,form,null,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$ns)){
var G__25428 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast);
var G__25429 = cljs.core.next(forms__$1);
var G__25430 = ast;
ns = G__25428;
forms__$1 = G__25429;
last_ast = G__25430;
continue;
} else {
var G__25431 = ns;
var G__25432 = cljs.core.next(forms__$1);
var G__25433 = ast;
ns = G__25431;
forms__$1 = G__25432;
last_ast = G__25433;
continue;
}
} else {
if(cljs.core.truth_(return_last_QMARK_)){
return last_ast;
} else {
return ns;
}
}
break;
}
}finally {(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__25422);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__25421);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__25420);

(cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__orig_val__25419);
}}));

(cljs.analyzer.analyze_form_seq.cljs$lang$maxFixedArity = 3);

/**
 * Ensures that a non-nil defs map exists in the compiler state for a given
 *   ns. (A non-nil defs map signifies that the namespace has been analyzed.)
 */
cljs.analyzer.ensure_defs = (function cljs$analyzer$ensure_defs(ns){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),(function (p1__25434_SHARP_){
var or__4212__auto__ = p1__25434_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
});
