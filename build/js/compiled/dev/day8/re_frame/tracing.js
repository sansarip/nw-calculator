// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('day8.re_frame.debux.common.util');
goog.require('day8.re_frame.debux.common.macro_specs');
goog.require('cljs.spec.alpha');
goog.require('clojure.zip');
cljs.core.enable_console_print_BANG_.call(null);

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
var ret__4867__auto___20235 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20236 = arguments.length;
var i__4819__auto___20237 = (0);
while(true){
if((i__4819__auto___20237 < len__4818__auto___20236)){
args__4824__auto__.push((arguments[i__4819__auto___20237]));

var G__20238 = (i__4819__auto___20237 + (1));
i__4819__auto___20237 = G__20238;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,opts){
var opts_SINGLEQUOTE_ = day8.re_frame.debux.common.util.parse_opts.call(null,opts);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.debux.dbgn","dbgn","day8.re-frame.debux.dbgn/dbgn",279891549,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,opts_SINGLEQUOTE_,null,(1),null)))));
}));

(day8.re_frame.tracing.dbgn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq20231){
var G__20232 = cljs.core.first.call(null,seq20231);
var seq20231__$1 = cljs.core.next.call(null,seq20231);
var G__20233 = cljs.core.first.call(null,seq20231__$1);
var seq20231__$2 = cljs.core.next.call(null,seq20231__$1);
var G__20234 = cljs.core.first.call(null,seq20231__$2);
var seq20231__$3 = cljs.core.next.call(null,seq20231__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20232,G__20233,G__20234,seq20231__$3);
}));

return null;
})()
;
(day8.re_frame.tracing.dbgn.cljs$lang$macro = true);

var ret__4867__auto___20239 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.debux.cs.macro-types","register-macros!","day8.re-frame.debux.cs.macro-types/register-macros!",674889760,null),null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),(new cljs.core.List(null,symbols,null,(1),null)))));
});
(day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true);

var ret__4867__auto___20242 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__20241 = arguments.length;
switch (G__20241) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.debux.cs.macro-types","show-macros","day8.re-frame.debux.cs.macro-types/show-macros",-671237860,null),null,(1),null)))));
}));

(day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,macro_type){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.debux.cs.macro-types","show-macros","day8.re-frame.debux.cs.macro-types/show-macros",-671237860,null),null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)))));
}));

(day8.re_frame.tracing.show_macros.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(day8.re_frame.tracing.show_macros.cljs$lang$macro = true);

day8.re_frame.tracing.find_symbols = (function day8$re_frame$tracing$find_symbols(args){

var loc = day8.re_frame.debux.common.util.sequential_zip.call(null,args);
var seen = cljs.core.PersistentVector.EMPTY;
while(true){
var node = clojure.zip.node.call(null,loc);
if(clojure.zip.end_QMARK_.call(null,loc)){
return seen;
} else {
if((node instanceof cljs.core.Symbol)){
var G__20244 = clojure.zip.next.call(null,loc);
var G__20245 = cljs.core.conj.call(null,seen,node);
loc = G__20244;
seen = G__20245;
continue;
} else {
var G__20246 = clojure.zip.next.call(null,loc);
var G__20247 = seen;
loc = G__20246;
seen = G__20247;
continue;

}
}
break;
}
});
day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20250 = arguments.length;
var i__4819__auto___20251 = (0);
while(true){
if((i__4819__auto___20251 < len__4818__auto___20250)){
args__4824__auto__.push((arguments[i__4819__auto___20251]));

var G__20252 = (i__4819__auto___20251 + (1));
i__4819__auto___20251 = G__20252;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.fn_body.cljs$core$IFn$_invoke$arity$variadic = (function (args_PLUS_body,send_form){
var args = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var body_or_prepost = cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(0));
var body = cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1));
var args_symbols = day8.re_frame.tracing.find_symbols.call(null,args);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),body_or_prepost)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("dbgn","dbgn-forms","dbgn/dbgn-forms",-1354469701,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null)),(new cljs.core.List(null,send_form,null,(1),null)),(new cljs.core.List(null,args_symbols,null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"prepost","prepost",1251610712).cljs$core$IFn$_invoke$arity$1(body),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("dbgn","dbgn-forms","dbgn/dbgn-forms",-1354469701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(body),null,(1),null)),(new cljs.core.List(null,send_form,null,(1),null)),(new cljs.core.List(null,args_symbols,null,(1),null))))),null,(1),null)))));
}
}));

(day8.re_frame.tracing.fn_body.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame.tracing.fn_body.cljs$lang$applyTo = (function (seq20248){
var G__20249 = cljs.core.first.call(null,seq20248);
var seq20248__$1 = cljs.core.next.call(null,seq20248);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20249,seq20248__$1);
}));

var ret__4867__auto___20257 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20258 = arguments.length;
var i__4819__auto___20259 = (0);
while(true){
if((i__4819__auto___20259 < len__4818__auto___20258)){
args__4824__auto__.push((arguments[i__4819__auto___20259]));

var G__20260 = (i__4819__auto___20259 + (1));
i__4819__auto___20259 = G__20260;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("day8.re-frame.debux.common.macro-specs","defn-args","day8.re-frame.debux.common.macro-specs/defn-args",788964502),definition);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(conformed);
var bs = new cljs.core.Keyword(null,"bs","bs",1748393559).cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,bs,(0)),new cljs.core.Keyword(null,"arity-1","arity-1",105892478));
var args_PLUS_body = cljs.core.nth.call(null,bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),day8.re_frame.tracing.fn_body.call(null,args_PLUS_body,_AMPERSAND_form))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.map.call(null,(function (p1__20253_SHARP_){
return day8.re_frame.tracing.fn_body.call(null,p1__20253_SHARP_,_AMPERSAND_form);
}),new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(args_PLUS_body)))));
}
}));

(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq20254){
var G__20255 = cljs.core.first.call(null,seq20254);
var seq20254__$1 = cljs.core.next.call(null,seq20254);
var G__20256 = cljs.core.first.call(null,seq20254__$1);
var seq20254__$2 = cljs.core.next.call(null,seq20254__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20255,G__20256,seq20254__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___20264 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20265 = arguments.length;
var i__4819__auto___20266 = (0);
while(true){
if((i__4819__auto___20266 < len__4818__auto___20265)){
args__4824__auto__.push((arguments[i__4819__auto___20266]));

var G__20267 = (i__4819__auto___20266 + (1));
i__4819__auto___20266 = G__20267;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","is-trace-enabled?","day8.re-frame.tracing/is-trace-enabled?",-975964058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","defn-traced*","day8.re-frame.tracing/defn-traced*",-1958619923,null),null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),definition))),null,(1),null)))));
}));

(day8.re_frame.tracing.defn_traced.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq20261){
var G__20262 = cljs.core.first.call(null,seq20261);
var seq20261__$1 = cljs.core.next.call(null,seq20261);
var G__20263 = cljs.core.first.call(null,seq20261__$1);
var seq20261__$2 = cljs.core.next.call(null,seq20261__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20262,G__20263,seq20261__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.defn_traced.cljs$lang$macro = true);

var ret__4867__auto___20272 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20273 = arguments.length;
var i__4819__auto___20274 = (0);
while(true){
if((i__4819__auto___20274 < len__4818__auto___20273)){
args__4824__auto__.push((arguments[i__4819__auto___20274]));

var G__20275 = (i__4819__auto___20274 + (1));
i__4819__auto___20274 = G__20275;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("day8.re-frame.debux.common.macro-specs","fn-args","day8.re-frame.debux.common.macro-specs/fn-args",49249679),definition);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(conformed);
var bs = new cljs.core.Keyword(null,"bs","bs",1748393559).cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,bs,(0)),new cljs.core.Keyword(null,"arity-1","arity-1",105892478));
var args_PLUS_body = cljs.core.nth.call(null,bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),day8.re_frame.tracing.fn_body.call(null,args_PLUS_body,_AMPERSAND_form))));
} else {
var bodies = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(args_PLUS_body);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.map.call(null,(function (p1__20268_SHARP_){
return day8.re_frame.tracing.fn_body.call(null,p1__20268_SHARP_,_AMPERSAND_form);
}),bodies))));
}
}));

(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq20269){
var G__20270 = cljs.core.first.call(null,seq20269);
var seq20269__$1 = cljs.core.next.call(null,seq20269);
var G__20271 = cljs.core.first.call(null,seq20269__$1);
var seq20269__$2 = cljs.core.next.call(null,seq20269__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20270,G__20271,seq20269__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true);

var ret__4867__auto___20279 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20280 = arguments.length;
var i__4819__auto___20281 = (0);
while(true){
if((i__4819__auto___20281 < len__4818__auto___20280)){
args__4824__auto__.push((arguments[i__4819__auto___20281]));

var G__20282 = (i__4819__auto___20281 + (1));
i__4819__auto___20281 = G__20282;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","is-trace-enabled?","day8.re-frame.tracing/is-trace-enabled?",-975964058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","fn-traced*","day8.re-frame.tracing/fn-traced*",-656662851,null),null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),definition))),null,(1),null)))));
}));

(day8.re_frame.tracing.fn_traced.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq20276){
var G__20277 = cljs.core.first.call(null,seq20276);
var seq20276__$1 = cljs.core.next.call(null,seq20276);
var G__20278 = cljs.core.first.call(null,seq20276__$1);
var seq20276__$2 = cljs.core.next.call(null,seq20276__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20277,G__20278,seq20276__$2);
}));

return null;
})()
;
(day8.re_frame.tracing.fn_traced.cljs$lang$macro = true);


//# sourceMappingURL=tracing.js.map
