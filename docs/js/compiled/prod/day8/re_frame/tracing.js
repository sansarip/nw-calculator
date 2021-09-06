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
var ret__4867__auto___24648 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___24649 = arguments.length;
var i__4819__auto___24650 = (0);
while(true){
if((i__4819__auto___24650 < len__4818__auto___24649)){
args__4824__auto__.push((arguments[i__4819__auto___24650]));

var G__24651 = (i__4819__auto___24650 + (1));
i__4819__auto___24650 = G__24651;
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
(day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq24644){
var G__24645 = cljs.core.first(seq24644);
var seq24644__$1 = cljs.core.next(seq24644);
var G__24646 = cljs.core.first(seq24644__$1);
var seq24644__$2 = cljs.core.next(seq24644__$1);
var G__24647 = cljs.core.first(seq24644__$2);
var seq24644__$3 = cljs.core.next(seq24644__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24645,G__24646,G__24647,seq24644__$3);
}));

return null;
})()
;
(day8.re_frame.tracing.dbgn.cljs$lang$macro = true);

var ret__4867__auto___24652 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$debux$cs$macro_DASH_types_SLASH_register_DASH_macros_BANG_,null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,symbols,null,(1),null))], 0))));
});
(day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true);

var ret__4867__auto___24655 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__24654 = arguments.length;
switch (G__24654) {
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
var G__24657 = clojure.zip.next(loc);
var G__24658 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node);
loc = G__24657;
seen = G__24658;
continue;
} else {
var G__24659 = clojure.zip.next(loc);
var G__24660 = seen;
loc = G__24659;
seen = G__24660;
continue;

}
}
break;
}
});
day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(var_args){
var args__4824__auto__ = [];
var len__4818__auto___24663 = arguments.length;
var i__4819__auto___24664 = (0);
while(true){
if((i__4819__auto___24664 < len__4818__auto___24663)){
args__4824__auto__.push((arguments[i__4819__auto___24664]));

var G__24665 = (i__4819__auto___24664 + (1));
i__4819__auto___24664 = G__24665;
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
(day8.re_frame.tracing.fn_body.cljs$lang$applyTo = (function (seq24661){
var G__24662 = cljs.core.first(seq24661);
var seq24661__$1 = cljs.core.next(seq24661);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24662,seq24661__$1);
}));

var ret__4867__auto___24670 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___24671 = arguments.length;
var i__4819__auto___24672 = (0);
while(true){
if((i__4819__auto___24672 < len__4818__auto___24671)){
args__4824__auto__.push((arguments[i__4819__auto___24672]));

var G__24673 = (i__4819__auto___24672 + (1));
i__4819__auto___24672 = G__24673;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24666_SHARP_){
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(p1__24666_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0));
}),cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(args_PLUS_body))], 0))));
}
}));

(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq24667){
var G__24668 = cljs.core.first(seq24667);
var seq24667__$1 = cljs.core.next(seq24667);
var G__24669 = cljs.core.first(seq24667__$1);
var seq24667__$2 = cljs.core.next(seq24667__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24668,G__24669,seq24667__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___24677 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___24678 = arguments.length;
var i__4819__auto___24679 = (0);
while(true){
if((i__4819__auto___24679 < len__4818__auto___24678)){
args__4824__auto__.push((arguments[i__4819__auto___24679]));

var G__24680 = (i__4819__auto___24679 + (1));
i__4819__auto___24679 = G__24680;
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
(day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq24674){
var G__24675 = cljs.core.first(seq24674);
var seq24674__$1 = cljs.core.next(seq24674);
var G__24676 = cljs.core.first(seq24674__$1);
var seq24674__$2 = cljs.core.next(seq24674__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24675,G__24676,seq24674__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced.cljs$lang$macro = true);

var ret__4867__auto___24685 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___24686 = arguments.length;
var i__4819__auto___24687 = (0);
while(true){
if((i__4819__auto___24687 < len__4818__auto___24686)){
args__4824__auto__.push((arguments[i__4819__auto___24687]));

var G__24688 = (i__4819__auto___24687 + (1));
i__4819__auto___24687 = G__24688;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24681_SHARP_){
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic(p1__24681_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_AMPERSAND_form], 0));
}),bodies)], 0))));
}
}));

(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq24682){
var G__24683 = cljs.core.first(seq24682);
var seq24682__$1 = cljs.core.next(seq24682);
var G__24684 = cljs.core.first(seq24682__$1);
var seq24682__$2 = cljs.core.next(seq24682__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24683,G__24684,seq24682__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___24692 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___24693 = arguments.length;
var i__4819__auto___24694 = (0);
while(true){
if((i__4819__auto___24694 < len__4818__auto___24693)){
args__4824__auto__.push((arguments[i__4819__auto___24694]));

var G__24695 = (i__4819__auto___24694 + (1));
i__4819__auto___24694 = G__24695;
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
(day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq24689){
var G__24690 = cljs.core.first(seq24689);
var seq24689__$1 = cljs.core.next(seq24689);
var G__24691 = cljs.core.first(seq24689__$1);
var seq24689__$2 = cljs.core.next(seq24689__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24690,G__24691,seq24689__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced.cljs$lang$macro = true);

