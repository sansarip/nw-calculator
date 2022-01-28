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
var ret__4867__auto___27739 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27740 = arguments.length;
var i__4819__auto___27741 = (0);
while(true){
if((i__4819__auto___27741 < len__4818__auto___27740)){
args__4824__auto__.push((arguments[i__4819__auto___27741]));

var G__27742 = (i__4819__auto___27741 + (1));
i__4819__auto___27741 = G__27742;
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
(day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq27735){
var G__27736 = cljs.core.first(seq27735);
var seq27735__$1 = cljs.core.next(seq27735);
var G__27737 = cljs.core.first(seq27735__$1);
var seq27735__$2 = cljs.core.next(seq27735__$1);
var G__27738 = cljs.core.first(seq27735__$2);
var seq27735__$3 = cljs.core.next(seq27735__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27736,G__27737,G__27738,seq27735__$3);
}));

return null;
})()
;
(day8.re_frame.tracing.dbgn.cljs$lang$macro = true);

var ret__4867__auto___27743 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$debux$cs$macro_DASH_types_SLASH_register_DASH_macros_BANG_,null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,symbols,null,(1),null))], 0))));
});
(day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true);

var ret__4867__auto___27746 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__27745 = arguments.length;
switch (G__27745) {
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
var G__27748 = clojure.zip.next(loc);
var G__27749 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node);
loc = G__27748;
seen = G__27749;
continue;
} else {
var G__27750 = clojure.zip.next(loc);
var G__27751 = seen;
loc = G__27750;
seen = G__27751;
continue;

}
}
break;
}
});
day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27754 = arguments.length;
var i__4819__auto___27755 = (0);
while(true){
if((i__4819__auto___27755 < len__4818__auto___27754)){
args__4824__auto__.push((arguments[i__4819__auto___27755]));

var G__27756 = (i__4819__auto___27755 + (1));
i__4819__auto___27755 = G__27756;
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
(day8.re_frame.tracing.fn_body.cljs$lang$applyTo = (function (seq27752){
var G__27753 = cljs.core.first(seq27752);
var seq27752__$1 = cljs.core.next(seq27752);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27753,seq27752__$1);
}));

var ret__4867__auto___27761 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27762 = arguments.length;
var i__4819__auto___27763 = (0);
while(true){
if((i__4819__auto___27763 < len__4818__auto___27762)){
args__4824__auto__.push((arguments[i__4819__auto___27763]));

var G__27764 = (i__4819__auto___27763 + (1));
i__4819__auto___27763 = G__27764;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27757_SHARP_){
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(p1__27757_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0));
}),cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(args_PLUS_body))], 0))));
}
}));

(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq27758){
var G__27759 = cljs.core.first(seq27758);
var seq27758__$1 = cljs.core.next(seq27758);
var G__27760 = cljs.core.first(seq27758__$1);
var seq27758__$2 = cljs.core.next(seq27758__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27759,G__27760,seq27758__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___27768 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27769 = arguments.length;
var i__4819__auto___27770 = (0);
while(true){
if((i__4819__auto___27770 < len__4818__auto___27769)){
args__4824__auto__.push((arguments[i__4819__auto___27770]));

var G__27771 = (i__4819__auto___27770 + (1));
i__4819__auto___27770 = G__27771;
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
(day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq27765){
var G__27766 = cljs.core.first(seq27765);
var seq27765__$1 = cljs.core.next(seq27765);
var G__27767 = cljs.core.first(seq27765__$1);
var seq27765__$2 = cljs.core.next(seq27765__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27766,G__27767,seq27765__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced.cljs$lang$macro = true);

var ret__4867__auto___27776 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27777 = arguments.length;
var i__4819__auto___27778 = (0);
while(true){
if((i__4819__auto___27778 < len__4818__auto___27777)){
args__4824__auto__.push((arguments[i__4819__auto___27778]));

var G__27779 = (i__4819__auto___27778 + (1));
i__4819__auto___27778 = G__27779;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27772_SHARP_){
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(p1__27772_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0));
}),bodies)], 0))));
}
}));

(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq27773){
var G__27774 = cljs.core.first(seq27773);
var seq27773__$1 = cljs.core.next(seq27773);
var G__27775 = cljs.core.first(seq27773__$1);
var seq27773__$2 = cljs.core.next(seq27773__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27774,G__27775,seq27773__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___27783 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27784 = arguments.length;
var i__4819__auto___27785 = (0);
while(true){
if((i__4819__auto___27785 < len__4818__auto___27784)){
args__4824__auto__.push((arguments[i__4819__auto___27785]));

var G__27786 = (i__4819__auto___27785 + (1));
i__4819__auto___27785 = G__27786;
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
(day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq27780){
var G__27781 = cljs.core.first(seq27780);
var seq27780__$1 = cljs.core.next(seq27780);
var G__27782 = cljs.core.first(seq27780__$1);
var seq27780__$2 = cljs.core.next(seq27780__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27781,G__27782,seq27780__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced.cljs$lang$macro = true);

