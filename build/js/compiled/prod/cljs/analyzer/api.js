// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.analyzer.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.analyzer');
goog.require('cljs.env');
/**
 * Creates an empty compilation state Atom<Map>. The optional opts arg is a map
 * representing the compiler configuration. See the documentation
 * for details: https://clojurescript.org/reference/compiler-options
 */
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(var_args){
var G__25450 = arguments.length;
switch (G__25450) {
case 0:
return cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
if((!((cljs.env._STAR_compiler_STAR_ == null)))){
return cljs.env._STAR_compiler_STAR_;
} else {
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
}
}));

(cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(opts);
}));

(cljs.analyzer.api.empty_state.cljs$lang$maxFixedArity = 1);

/**
 * Return the current compiler state atom.
 */
cljs.analyzer.api.current_state = (function cljs$analyzer$api$current_state(){
return cljs.env._STAR_compiler_STAR_;
});
/**
 * Return the current file under analysis or compilation.
 */
cljs.analyzer.api.current_file = (function cljs$analyzer$api$current_file(){
return cljs.analyzer._STAR_cljs_file_STAR_;
});
/**
 * Return the current ns under analysis or compilation.
 */
cljs.analyzer.api.current_ns = (function cljs$analyzer$api$current_ns(){
return cljs.analyzer._STAR_cljs_ns_STAR_;
});
var ret__4867__auto___25456 = (function (){
/**
 * Run the body with the given compilation state Atom<Map>.
 */
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25457 = arguments.length;
var i__4819__auto___25458 = (0);
while(true){
if((i__4819__auto___25458 < len__4818__auto___25457)){
args__4824__auto__.push((arguments[i__4819__auto___25458]));

var G__25459 = (i__4819__auto___25458 + (1));
i__4819__auto___25458 = G__25459;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.analyzer.api.with_state.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env,null,(1),null)),(new cljs.core.List(null,state,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.api.with_state.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.with_state.cljs$lang$applyTo = (function (seq25452){
var G__25453 = cljs.core.first(seq25452);
var seq25452__$1 = cljs.core.next(seq25452);
var G__25454 = cljs.core.first(seq25452__$1);
var seq25452__$2 = cljs.core.next(seq25452__$1);
var G__25455 = cljs.core.first(seq25452__$2);
var seq25452__$3 = cljs.core.next(seq25452__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25453,G__25454,G__25455,seq25452__$3);
}));

return null;
})()
;
(cljs.analyzer.api.with_state.cljs$lang$macro = true);

/**
 * Creates an empty analysis environment.
 */
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env();
});
var ret__4867__auto___25463 = (function (){
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25464 = arguments.length;
var i__4819__auto___25465 = (0);
while(true){
if((i__4819__auto___25465 < len__4818__auto___25464)){
args__4824__auto__.push((arguments[i__4819__auto___25465]));

var G__25466 = (i__4819__auto___25465 + (1));
i__4819__auto___25465 = G__25466;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_warnings_STAR_,null,(1),null)),(new cljs.core.List(null,no_warnings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq25460){
var G__25461 = cljs.core.first(seq25460);
var seq25460__$1 = cljs.core.next(seq25460);
var G__25462 = cljs.core.first(seq25460__$1);
var seq25460__$2 = cljs.core.next(seq25460__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25461,G__25462,seq25460__$2);
}));

return null;
})()
;
(cljs.analyzer.api.no_warn.cljs$lang$macro = true);

/**
 * Test if the given warning-type is enabled.
 */
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return (cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1(warning_type) : cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type));
});
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler(warning_type,env,extra);
});
var ret__4867__auto___25471 = (function (){
/**
 * Helper macro for custom handling of emitted warnings. Handlers should be
 * a vector of functions. The signature of these functions is
 * [warn-type env warn-info]. warn-type is a keyword describing the warning,
 * env is the analysis environment, and warn-info is a map of extra useful
 * information for a particular warning type.
 */
cljs.analyzer.api.with_warning_handlers = (function cljs$analyzer$api$with_warning_handlers(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25472 = arguments.length;
var i__4819__auto___25473 = (0);
while(true){
if((i__4819__auto___25473 < len__4818__auto___25472)){
args__4824__auto__.push((arguments[i__4819__auto___25473]));

var G__25474 = (i__4819__auto___25473 + (1));
i__4819__auto___25473 = G__25474;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.analyzer.api.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$analyzer_SLASH_with_DASH_warning_DASH_handlers,null,(1),null)),(new cljs.core.List(null,handlers,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.api.with_warning_handlers.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.with_warning_handlers.cljs$lang$applyTo = (function (seq25467){
var G__25468 = cljs.core.first(seq25467);
var seq25467__$1 = cljs.core.next(seq25467);
var G__25469 = cljs.core.first(seq25467__$1);
var seq25467__$2 = cljs.core.next(seq25467__$1);
var G__25470 = cljs.core.first(seq25467__$2);
var seq25467__$3 = cljs.core.next(seq25467__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25468,G__25469,G__25470,seq25467__$3);
}));

return null;
})()
;
(cljs.analyzer.api.with_warning_handlers.cljs$lang$macro = true);

/**
 * Helper for generating the standard analyzer messages for warnings. Should be
 *   passed warn-type and warn-info. See with-warning-handlers.
 */
cljs.analyzer.api.warning_message = (function cljs$analyzer$api$warning_message(warn_type,warn_info){
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(warn_type,warn_info) : cljs.analyzer.error_message.call(null,warn_type,warn_info));
});
/**
 * Get the enabled warning types.
 */
cljs.analyzer.api.enabled_warnings = (function cljs$analyzer$api$enabled_warnings(){
return cljs.analyzer._STAR_cljs_warnings_STAR_;
});
/**
 * Return the compiler options from compiler state.
 */
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
var G__25476 = arguments.length;
switch (G__25476) {
case 0:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.current_state());
}));

(cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$options);
}));

(cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = 1);

/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
var G__25479 = arguments.length;
switch (G__25479) {
case 0:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.current_state());
}));

(cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$js_DASH_dependency_DASH_index);
}));

(cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = 1);

/**
 * ClojureScript's default analysis passes.
 */
cljs.analyzer.api.default_passes = cljs.analyzer.default_passes;
var ret__4867__auto___25485 = (function (){
/**
 * Evaluate the body with the provided sequence of compiler passes.
 */
cljs.analyzer.api.with_passes = (function cljs$analyzer$api$with_passes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25486 = arguments.length;
var i__4819__auto___25487 = (0);
while(true){
if((i__4819__auto___25487 < len__4818__auto___25486)){
args__4824__auto__.push((arguments[i__4819__auto___25487]));

var G__25488 = (i__4819__auto___25487 + (1));
i__4819__auto___25487 = G__25488;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_passes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.analyzer.api.with_passes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,passes,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_passes_STAR_,null,(1),null)),(new cljs.core.List(null,passes,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.api.with_passes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.with_passes.cljs$lang$applyTo = (function (seq25481){
var G__25482 = cljs.core.first(seq25481);
var seq25481__$1 = cljs.core.next(seq25481);
var G__25483 = cljs.core.first(seq25481__$1);
var seq25481__$2 = cljs.core.next(seq25481__$1);
var G__25484 = cljs.core.first(seq25481__$2);
var seq25481__$3 = cljs.core.next(seq25481__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25482,G__25483,G__25484,seq25481__$3);
}));

return null;
})()
;
(cljs.analyzer.api.with_passes.cljs$lang$macro = true);

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{var _STAR_private_var_access_nowarn_STAR__orig_val__25490 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__25491 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__25491);

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__25490);
}}catch (e25489){var e = e25489;
return cljs.analyzer.resolve_macro_var(env,sym);
}});
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
var G__25493 = arguments.length;
switch (G__25493) {
case 0:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
}));

(cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces));
}));

(cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = 1);

/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
var G__25496 = arguments.length;
switch (G__25496) {
case 1:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,sym);
}));

(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,sym], null));
}));

(cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
var G__25499 = arguments.length;
switch (G__25499) {
case 1:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0));
}));

(cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
var G__25502 = arguments.length;
switch (G__25502) {
case 1:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25503){
var vec__25504 = p__25503;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25504,(1),null);
return cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0))));
}));

(cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
var G__25509 = arguments.length;
switch (G__25509) {
case 2:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3(cljs.env._STAR_compiler_STAR_,ns,sym);
}));

(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs,sym], null));
}));

(cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = 3);

/**
 * Removes the namespace named by the symbol.
 */
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
var G__25512 = arguments.length;
switch (G__25512) {
case 1:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns], 0));
}));

(cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = 2);

var ret__4867__auto___25518 = (function (){
/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25519 = arguments.length;
var i__4819__auto___25520 = (0);
while(true){
if((i__4819__auto___25520 < len__4818__auto___25519)){
args__4824__auto__.push((arguments[i__4819__auto___25520]));

var G__25521 = (i__4819__auto___25520 + (1));
i__4819__auto___25520 = G__25521;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_ns_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$user,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env,null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq25514){
var G__25515 = cljs.core.first(seq25514);
var seq25514__$1 = cljs.core.next(seq25514);
var G__25516 = cljs.core.first(seq25514__$1);
var seq25514__$2 = cljs.core.next(seq25514__$1);
var G__25517 = cljs.core.first(seq25514__$2);
var seq25514__$3 = cljs.core.next(seq25514__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25515,G__25516,G__25517,seq25514__$3);
}));

return null;
})()
;
(cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true);

