// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('oops.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,cljs.core.cst$kw$warning_DASH_reporting,cljs.core.cst$kw$use_DASH_envelope,cljs.core.cst$kw$error_DASH_reporting,cljs.core.cst$kw$object_DASH_is_DASH_frozen,cljs.core.cst$kw$expected_DASH_function_DASH_value,cljs.core.cst$kw$child_DASH_factory,cljs.core.cst$kw$invalid_DASH_selector,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.cst$kw$object_DASH_is_DASH_sealed,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,cljs.core.cst$kw$missing_DASH_object_DASH_key,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable],[cljs.core.cst$kw$warn,cljs.core.cst$kw$console,true,cljs.core.cst$kw$throw,cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$js_DASH_obj,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,true,cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$error]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

(oops.config._STAR_runtime_config_STAR_ = new_config);

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25994 = arguments.length;
var i__4819__auto___25995 = (0);
while(true){
if((i__4819__auto___25995 < len__4818__auto___25994)){
args__4824__auto__.push((arguments[i__4819__auto___25995]));

var G__25996 = (i__4819__auto___25995 + (1));
i__4819__auto___25995 = G__25996;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
}));

(oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq25992){
var G__25993 = cljs.core.first(seq25992);
var seq25992__$1 = cljs.core.next(seq25992);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25993,seq25992__$1);
}));

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26004 = arguments.length;
var i__4819__auto___26005 = (0);
while(true){
if((i__4819__auto___26005 < len__4818__auto___26004)){
args__4824__auto__.push((arguments[i__4819__auto___26005]));

var G__26006 = (i__4819__auto___26005 + (1));
i__4819__auto___26005 = G__26006;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__25999){
var vec__26000 = p__25999;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26000,(0),null);
var G__26003 = (function (){var or__4212__auto__ = config;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__26003) : key.call(null,G__26003));
}));

(oops.config.get_config_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.get_config_key.cljs$lang$applyTo = (function (seq25997){
var G__25998 = cljs.core.first(seq25997);
var seq25997__$1 = cljs.core.next(seq25997);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25998,seq25997__$1);
}));

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26013 = arguments.length;
var i__4819__auto___26014 = (0);
while(true){
if((i__4819__auto___26014 < len__4818__auto___26013)){
args__4824__auto__.push((arguments[i__4819__auto___26014]));

var G__26015 = (i__4819__auto___26014 + (1));
i__4819__auto___26014 = G__26015;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__26009){
var vec__26010 = p__26009;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26010,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__4212__auto__ = config;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
}));

(oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq26007){
var G__26008 = cljs.core.first(seq26007);
var seq26007__$1 = cljs.core.next(seq26007);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26008,seq26007__$1);
}));

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26021 = arguments.length;
var i__4819__auto___26022 = (0);
while(true){
if((i__4819__auto___26022 < len__4818__auto___26021)){
args__4824__auto__.push((arguments[i__4819__auto___26022]));

var G__26023 = (i__4819__auto___26022 + (1));
i__4819__auto___26022 = G__26023;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26017){
var vec__26018 = p__26017;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq26016){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26016));
}));

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26029 = arguments.length;
var i__4819__auto___26030 = (0);
while(true){
if((i__4819__auto___26030 < len__4818__auto___26029)){
args__4824__auto__.push((arguments[i__4819__auto___26030]));

var G__26031 = (i__4819__auto___26030 + (1));
i__4819__auto___26030 = G__26031;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26025){
var vec__26026 = p__26025;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26026,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq26024){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26024));
}));

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26037 = arguments.length;
var i__4819__auto___26038 = (0);
while(true){
if((i__4819__auto___26038 < len__4818__auto___26037)){
args__4824__auto__.push((arguments[i__4819__auto___26038]));

var G__26039 = (i__4819__auto___26038 + (1));
i__4819__auto___26038 = G__26039;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26033){
var vec__26034 = p__26033;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26034,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq26032){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26032));
}));

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26045 = arguments.length;
var i__4819__auto___26046 = (0);
while(true){
if((i__4819__auto___26046 < len__4818__auto___26045)){
args__4824__auto__.push((arguments[i__4819__auto___26046]));

var G__26047 = (i__4819__auto___26046 + (1));
i__4819__auto___26046 = G__26047;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__26041){
var vec__26042 = p__26041;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26042,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_child_factory.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_child_factory.cljs$lang$applyTo = (function (seq26040){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26040));
}));

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26053 = arguments.length;
var i__4819__auto___26054 = (0);
while(true){
if((i__4819__auto___26054 < len__4818__auto___26053)){
args__4824__auto__.push((arguments[i__4819__auto___26054]));

var G__26055 = (i__4819__auto___26054 + (1));
i__4819__auto___26054 = G__26055;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26049){
var vec__26050 = p__26049;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26050,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq26048){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26048));
}));

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26061 = arguments.length;
var i__4819__auto___26062 = (0);
while(true){
if((i__4819__auto___26062 < len__4818__auto___26061)){
args__4824__auto__.push((arguments[i__4819__auto___26062]));

var G__26063 = (i__4819__auto___26062 + (1));
i__4819__auto___26062 = G__26063;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26057){
var vec__26058 = p__26057;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq26056){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26056));
}));

