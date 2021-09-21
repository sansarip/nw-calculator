// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.debux.common.util');
goog.require('day8.re_frame.debux.common.macro_specs');
goog.require('cljs.spec.alpha');
goog.require('clojure.zip');
cljs.core.enable_console_print_BANG_();

/**
 * @define {boolean}
 */
day8.re_frame.tracing.trace_enabled_QMARK_ = goog.define("day8.re_frame.tracing.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame.tracing.is_trace_enabled_QMARK_ = (function day8$re_frame$tracing$is_trace_enabled_QMARK_(){
return day8.re_frame.tracing.trace_enabled_QMARK_;
});
day8.re_frame.tracing.reset_indent_level_BANG_ = day8.re_frame.debux.common.util.reset_indent_level_BANG_;
day8.re_frame.tracing.set_print_seq_length_BANG_ = day8.re_frame.debux.common.util.set_print_seq_length_BANG_;
var ret__4867__auto___25372 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25373 = arguments.length;
var i__4819__auto___25374 = (0);
while(true){
if((i__4819__auto___25374 < len__4818__auto___25373)){
args__4824__auto__.push((arguments[i__4819__auto___25374]));

var G__25375 = (i__4819__auto___25374 + (1));
i__4819__auto___25374 = G__25375;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,opts){
var opts_SINGLEQUOTE_ = day8.re_frame.debux.common.util.parse_opts(opts);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$debux$dbgn_SLASH_dbgn,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,opts_SINGLEQUOTE_,null,(1),null))], 0))));
}));

(day8.re_frame.tracing.dbgn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq25368){
var G__25369 = cljs.core.first(seq25368);
var seq25368__$1 = cljs.core.next(seq25368);
var G__25370 = cljs.core.first(seq25368__$1);
var seq25368__$2 = cljs.core.next(seq25368__$1);
var G__25371 = cljs.core.first(seq25368__$2);
var seq25368__$3 = cljs.core.next(seq25368__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25369,G__25370,G__25371,seq25368__$3);
}));

return null;
})()
;
(day8.re_frame.tracing.dbgn.cljs$lang$macro = true);

var ret__4867__auto___25376 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$debux$cs$macro_DASH_types_SLASH_register_DASH_macros_BANG_,null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,symbols,null,(1),null))], 0))));
});
(day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true);

var ret__4867__auto___25379 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__25378 = arguments.length;
switch (G__25378) {
case 2:
return day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$debux$cs$macro_DASH_types_SLASH_show_DASH_macros,null,(1),null)))));
}));

(day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,macro_type){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$debux$cs$macro_DASH_types_SLASH_show_DASH_macros,null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)))));
}));

(day8.re_frame.tracing.show_macros.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(day8.re_frame.tracing.show_macros.cljs$lang$macro = true);

day8.re_frame.tracing.find_symbols = (function day8$re_frame$tracing$find_symbols(args){

var loc = day8.re_frame.debux.common.util.sequential_zip(args);
var seen = cljs.core.PersistentVector.EMPTY;
while(true){
var node = clojure.zip.node(loc);
if(clojure.zip.end_QMARK_(loc)){
return seen;
} else {
if((node instanceof cljs.core.Symbol)){
var G__25381 = clojure.zip.next(loc);
var G__25382 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node);
loc = G__25381;
seen = G__25382;
continue;
} else {
var G__25383 = clojure.zip.next(loc);
var G__25384 = seen;
loc = G__25383;
seen = G__25384;
continue;

}
}
break;
}
});
day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25387 = arguments.length;
var i__4819__auto___25388 = (0);
while(true){
if((i__4819__auto___25388 < len__4818__auto___25387)){
args__4824__auto__.push((arguments[i__4819__auto___25388]));

var G__25389 = (i__4819__auto___25388 + (1));
i__4819__auto___25388 = G__25389;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic = (function (args_PLUS_body,send_form){
var args = (function (){var or__4212__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var body_or_prepost = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(0));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1));
var args_symbols = day8.re_frame.tracing.find_symbols(args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,body_or_prepost)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$dbgn_SLASH_dbgn_DASH_forms,null,(1),null)),(new cljs.core.List(null,body,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,send_form,null,(1),null)),(new cljs.core.List(null,args_symbols,null,(1),null))], 0)))),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$prepost.cljs$core$IFn$_invoke$arity$1(body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$dbgn_SLASH_dbgn_DASH_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,send_form,null,(1),null)),(new cljs.core.List(null,args_symbols,null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

(day8.re_frame.tracing.fn_body.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame.tracing.fn_body.cljs$lang$applyTo = (function (seq25385){
var G__25386 = cljs.core.first(seq25385);
var seq25385__$1 = cljs.core.next(seq25385);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25386,seq25385__$1);
}));

var ret__4867__auto___25394 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25395 = arguments.length;
var i__4819__auto___25396 = (0);
while(true){
if((i__4819__auto___25396 < len__4818__auto___25395)){
args__4824__auto__.push((arguments[i__4819__auto___25396]));

var G__25397 = (i__4819__auto___25396 + (1));
i__4819__auto___25396 = G__25397;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$day8$re_DASH_frame$debux$common$macro_DASH_specs_SLASH_defn_DASH_args,definition);
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(conformed);
var bs = cljs.core.cst$kw$bs.cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(0)),cljs.core.cst$kw$arity_DASH_1);
var args_PLUS_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(args_PLUS_body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25390_SHARP_){
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(p1__25390_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0));
}),cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(args_PLUS_body))], 0))));
}
}));

(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq25391){
var G__25392 = cljs.core.first(seq25391);
var seq25391__$1 = cljs.core.next(seq25391);
var G__25393 = cljs.core.first(seq25391__$1);
var seq25391__$2 = cljs.core.next(seq25391__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25392,G__25393,seq25391__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___25401 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25402 = arguments.length;
var i__4819__auto___25403 = (0);
while(true){
if((i__4819__auto___25403 < len__4818__auto___25402)){
args__4824__auto__.push((arguments[i__4819__auto___25403]));

var G__25404 = (i__4819__auto___25403 + (1));
i__4819__auto___25403 = G__25404;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_is_DASH_trace_DASH_enabled_QMARK_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_defn_DASH_traced_STAR_,null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),definition))),null,(1),null))], 0))));
}));

(day8.re_frame.tracing.defn_traced.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq25398){
var G__25399 = cljs.core.first(seq25398);
var seq25398__$1 = cljs.core.next(seq25398);
var G__25400 = cljs.core.first(seq25398__$1);
var seq25398__$2 = cljs.core.next(seq25398__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25399,G__25400,seq25398__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced.cljs$lang$macro = true);

var ret__4867__auto___25409 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25410 = arguments.length;
var i__4819__auto___25411 = (0);
while(true){
if((i__4819__auto___25411 < len__4818__auto___25410)){
args__4824__auto__.push((arguments[i__4819__auto___25411]));

var G__25412 = (i__4819__auto___25411 + (1));
i__4819__auto___25411 = G__25412;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$day8$re_DASH_frame$debux$common$macro_DASH_specs_SLASH_fn_DASH_args,definition);
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(conformed);
var bs = cljs.core.cst$kw$bs.cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(0)),cljs.core.cst$kw$arity_DASH_1);
var args_PLUS_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(args_PLUS_body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0))], 0))));
} else {
var bodies = cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(args_PLUS_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25405_SHARP_){
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(p1__25405_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0));
}),bodies)], 0))));
}
}));

(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq25406){
var G__25407 = cljs.core.first(seq25406);
var seq25406__$1 = cljs.core.next(seq25406);
var G__25408 = cljs.core.first(seq25406__$1);
var seq25406__$2 = cljs.core.next(seq25406__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25407,G__25408,seq25406__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___25416 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___25417 = arguments.length;
var i__4819__auto___25418 = (0);
while(true){
if((i__4819__auto___25418 < len__4818__auto___25417)){
args__4824__auto__.push((arguments[i__4819__auto___25418]));

var G__25419 = (i__4819__auto___25418 + (1));
i__4819__auto___25418 = G__25419;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_is_DASH_trace_DASH_enabled_QMARK_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$tracing_SLASH_fn_DASH_traced_STAR_,null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),definition))),null,(1),null))], 0))));
}));

(day8.re_frame.tracing.fn_traced.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq25413){
var G__25414 = cljs.core.first(seq25413);
var seq25413__$1 = cljs.core.next(seq25413);
var G__25415 = cljs.core.first(seq25413__$1);
var seq25413__$2 = cljs.core.next(seq25413__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25414,G__25415,seq25413__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced.cljs$lang$macro = true);

