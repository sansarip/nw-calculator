// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('day8.re_frame.debux.common.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('cljs.analyzer.api');
goog.require('cljs.repl');
goog.require('re_frame.trace');
day8.re_frame.debux.common.util.map__GT_seq = (function day8$re_frame$debux$common$util$map__GT_seq(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__24077){
var vec__24078 = p__24077;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24078,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}),cljs.core.PersistentVector.EMPTY,m);
});
day8.re_frame.debux.common.util.sequential_zip = (function day8$re_frame$debux$common$util$sequential_zip(root){
return clojure.zip.zipper((function (p1__24081_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__24081_SHARP_)) || (cljs.core.map_QMARK_(p1__24081_SHARP_)));
}),(function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.with_meta(day8.re_frame.debux.common.util.map__GT_seq(x),cljs.core.meta(x));
} else {
return x;

}
}),(function (x,children){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(x));
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.with_meta(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__24082){
var vec__24083 = p__24082;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24083,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),children)),cljs.core.meta(x));
} else {
return children;

}
}
}),root);
});
day8.re_frame.debux.common.util.right_or_next = (function day8$re_frame$debux$common$util$right_or_next(loc){
while(true){
var temp__5751__auto__ = clojure.zip.right(loc);
if(cljs.core.truth_(temp__5751__auto__)){
var right = temp__5751__auto__;
return right;
} else {
if(cljs.core.sequential_QMARK_(clojure.zip.node(loc))){
var rightmost = clojure.zip.rightmost(clojure.zip.down(loc));
if(cljs.core.sequential_QMARK_(clojure.zip.node(rightmost))){
var G__24086 = rightmost;
loc = G__24086;
continue;
} else {
return clojure.zip.next(rightmost);
}
} else {
return clojure.zip.next(loc);
}
}
break;
}
});
day8.re_frame.debux.common.util.auto_gensym_pattern = /(.*)__\d+__auto__/;
day8.re_frame.debux.common.util.anon_gensym_pattern = /G__\d+/;
day8.re_frame.debux.common.util.named_gensym_pattern = /(.*?)\d{2,}/;
day8.re_frame.debux.common.util.anon_param_pattern = /p(\d+)__\d+#/;
day8.re_frame.debux.common.util.form_tree_seq = (function day8$re_frame$debux$common$util$form_tree_seq(form){
return cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,form);
});
/**
 * Reverse gensym'd names to their original source form to make them easier to read.
 */
day8.re_frame.debux.common.util.with_gensyms_names = (function day8$re_frame$debux$common$util$with_gensyms_names(form,mapping){
var gen_name = (function (result,name){
if((!(cljs.core.contains_QMARK_(result,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join(''))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join('');
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24088_SHARP_){
return (!(cljs.core.contains_QMARK_(result,p1__24088_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24087_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24087_SHARP_),"#"].join('');
}),cljs.core.iterate(cljs.core.inc,(2)))));
}
});
var name_for = (function (result,sym_name){
var temp__5751__auto__ = cljs.core.re_matches(day8.re_frame.debux.common.util.auto_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__5751__auto__)){
var groups = temp__5751__auto__;
return gen_name(result,cljs.core.second(groups));
} else {
if(cljs.core.truth_(cljs.core.re_matches(day8.re_frame.debux.common.util.anon_gensym_pattern,sym_name))){
return gen_name(result,"gensym");
} else {
var temp__5751__auto____$1 = cljs.core.re_matches(day8.re_frame.debux.common.util.named_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__5751__auto____$1)){
var groups = temp__5751__auto____$1;
return gen_name(result,cljs.core.second(groups));
} else {
var temp__5751__auto____$2 = cljs.core.re_matches(day8.re_frame.debux.common.util.anon_param_pattern,sym_name);
if(cljs.core.truth_(temp__5751__auto____$2)){
var groups = temp__5751__auto____$2;
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(groups))].join('');
} else {
return null;
}
}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,sym_name){
if(cljs.core.contains_QMARK_(result,sym_name)){
return result;
} else {
var temp__5751__auto__ = name_for(result,sym_name);
if(cljs.core.truth_(temp__5751__auto__)){
var new_name = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,sym_name,new_name);
} else {
return result;
}
}
}),mapping,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24089_SHARP_){
return (((p1__24089_SHARP_ instanceof cljs.core.Symbol)) && ((cljs.core.namespace(p1__24089_SHARP_) == null)));
}),day8.re_frame.debux.common.util.form_tree_seq(form))));
});
/**
 * Tidy up fully qualified names that have aliases in the existing namespace.
 */
day8.re_frame.debux.common.util.with_symbols_names = (function day8$re_frame$debux$common$util$with_symbols_names(form,p__24091,mapping){
var map__24092 = p__24091;
var map__24092__$1 = cljs.core.__destructure_map(map__24092);
var state = map__24092__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$context);
var refers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$refers);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$aliases);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,sym){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.namespace(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),cljs.core.name(sym));
} else {
return result;
}
}),mapping,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24090_SHARP_){
var and__4210__auto__ = (p1__24090_SHARP_ instanceof cljs.core.Symbol);
if(and__4210__auto__){
return cljs.core.namespace(p1__24090_SHARP_);
} else {
return and__4210__auto__;
}
}),day8.re_frame.debux.common.util.form_tree_seq(form)));
});
/**
 * Takes a macroexpanded form and tidies it up to be more readable by
 *   unmapping gensyms and replacing fully qualified namespaces with aliases
 *   or nothing if the function is referred.
 */
day8.re_frame.debux.common.util.tidy_macroexpanded_form = (function day8$re_frame$debux$common$util$tidy_macroexpanded_form(form,state){
var mapping = day8.re_frame.debux.common.util.with_symbols_names(form,state,day8.re_frame.debux.common.util.with_gensyms_names(form,cljs.core.PersistentArrayMap.EMPTY));
var loc = day8.re_frame.debux.common.util.sequential_zip(form);
while(true){
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
if((clojure.zip.node(loc) instanceof cljs.core.Symbol)){
var G__24093 = clojure.zip.next(clojure.zip.edit(loc,((function (loc,mapping){
return (function (sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(mapping,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),sym));
});})(loc,mapping))
));
loc = G__24093;
continue;
} else {
var G__24094 = clojure.zip.next(loc);
loc = G__24094;
continue;
}
}
break;
}
});
day8.re_frame.debux.common.util.send_form_BANG_ = (function day8$re_frame$debux$common$util$send_form_BANG_(form){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19023__auto___24095 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form,form], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form,form], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__19023__auto___24095);

return null;
} else {
return null;
}
});
day8.re_frame.debux.common.util.send_trace_BANG_ = (function day8$re_frame$debux$common$util$send_trace_BANG_(code_trace){
var code = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tags,cljs.core.cst$kw$code], null),cljs.core.PersistentVector.EMPTY);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19023__auto___24096 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$form,day8.re_frame.debux.common.util.tidy_macroexpanded_form(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$result,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$indent_DASH_level,cljs.core.cst$kw$indent_DASH_level.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$syntax_DASH_order,cljs.core.cst$kw$syntax_DASH_order.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$num_DASH_seen,cljs.core.cst$kw$num_DASH_seen.cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$form,day8.re_frame.debux.common.util.tidy_macroexpanded_form(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$result,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$indent_DASH_level,cljs.core.cst$kw$indent_DASH_level.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$syntax_DASH_order,cljs.core.cst$kw$syntax_DASH_order.cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.cst$kw$num_DASH_seen,cljs.core.cst$kw$num_DASH_seen.cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__19023__auto___24096);

return null;
} else {
return null;
}
});
var ret__4867__auto___24098 = /**
 * The internal macro to debug dbg macro.
 * <form any> a form to be evaluated
 */
day8.re_frame.debux.common.util.d = (function day8$re_frame$debux$common$util$d(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$return__24097__auto__,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_println,null,(1),null)),(new cljs.core.List(null,">> dbg_:",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"=>\n",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return__24097__auto__,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<<",null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return__24097__auto__,null,(1),null))], 0))));
});
(day8.re_frame.debux.common.util.d.cljs$lang$macro = true);

day8.re_frame.debux.common.util.indent_level_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
day8.re_frame.debux.common.util.reset_indent_level_BANG_ = (function day8$re_frame$debux$common$util$reset_indent_level_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame.debux.common.util.indent_level_STAR_,(1));
});
day8.re_frame.debux.common.util.print_seq_length_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100));
day8.re_frame.debux.common.util.set_print_seq_length_BANG_ = (function day8$re_frame$debux$common$util$set_print_seq_length_BANG_(num){
return cljs.core.reset_BANG_(day8.re_frame.debux.common.util.print_seq_length_STAR_,num);
});
var ret__4867__auto___24099 = day8.re_frame.debux.common.util.read_source = (function day8$re_frame$debux$common$util$read_source(_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$repl_SLASH_source,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_out_DASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$day8$re_DASH_frame$debux$common$util_SLASH_read_DASH_string,null,(1),null))], 0))));
});
(day8.re_frame.debux.common.util.read_source.cljs$lang$macro = true);

day8.re_frame.debux.common.util.cljs_env_QMARK_ = (function day8$re_frame$debux$common$util$cljs_env_QMARK_(env){
return cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Transsub-forms a vector into an array-map with key/value pairs.
 *   (def a 10)
 *   (def b 20)
 *   (vec-map [a b :c [30 40]])
 *   => {:a 10 :b 20 ::c :c :[30 40] [30 40]}
 */
day8.re_frame.debux.common.util.vec__GT_map = (function day8$re_frame$debux$common$util$vec__GT_map(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (elm){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(elm)),null,(1),null)),(new cljs.core.List(null,elm,null,(1),null))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
day8.re_frame.debux.common.util.replace__AMPERSAND_ = (function day8$re_frame$debux$common$util$replace__AMPERSAND_(v){
return clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_AMPERSAND_)], null),v);
});
day8.re_frame.debux.common.util.take_n_if_seq = (function day8$re_frame$debux$common$util$take_n_if_seq(n,result){
if(cljs.core.seq_QMARK_(result)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4212__auto__ = n;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.deref(day8.re_frame.debux.common.util.print_seq_length_STAR_);
}
})(),result);
} else {
return result;
}
});
day8.re_frame.debux.common.util.truncate = (function day8$re_frame$debux$common$util$truncate(s){
if((cljs.core.count(s) > (70))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.substring((0),(70)))," ..."].join('');
} else {
return s;
}
});
day8.re_frame.debux.common.util.make_bars_ = (function day8$re_frame$debux$common$util$make_bars_(times){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(times,"|"));
});
day8.re_frame.debux.common.util.make_bars = cljs.core.memoize(day8.re_frame.debux.common.util.make_bars_);
day8.re_frame.debux.common.util.prepend_bars = (function day8$re_frame$debux$common$util$prepend_bars(line,indent_level){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((day8.re_frame.debux.common.util.make_bars.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame.debux.common.util.make_bars.cljs$core$IFn$_invoke$arity$1(indent_level) : day8.re_frame.debux.common.util.make_bars.call(null,indent_level)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
day8.re_frame.debux.common.util.print_form_with_indent = (function day8$re_frame$debux$common$util$print_form_with_indent(form,indent_level){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.debux.common.util.prepend_bars(form,indent_level)], 0));

return cljs.core.flush();
});
day8.re_frame.debux.common.util.form_header = (function day8$re_frame$debux$common$util$form_header(var_args){
var args__4824__auto__ = [];
var len__4818__auto___24106 = arguments.length;
var i__4819__auto___24107 = (0);
while(true){
if((i__4819__auto___24107 < len__4818__auto___24106)){
args__4824__auto__.push((arguments[i__4819__auto___24107]));

var G__24108 = (i__4819__auto___24107 + (1));
i__4819__auto___24107 = G__24108;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame.debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame.debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__24102){
var vec__24103 = p__24102;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24103,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.debux.common.util.truncate(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__4210__auto__ = msg;
if(cljs.core.truth_(and__4210__auto__)){
return ["   <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),">"].join('');
} else {
return and__4210__auto__;
}
})())," =>"].join('');
}));

(day8.re_frame.debux.common.util.form_header.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame.debux.common.util.form_header.cljs$lang$applyTo = (function (seq24100){
var G__24101 = cljs.core.first(seq24100);
var seq24100__$1 = cljs.core.next(seq24100);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24101,seq24100__$1);
}));

day8.re_frame.debux.common.util.prepend_blanks = (function day8$re_frame$debux$common$util$prepend_blanks(lines){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24109_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24109_SHARP_)].join('');
}),lines);
});
day8.re_frame.debux.common.util.pprint_result_with_indent = (function day8$re_frame$debux$common$util$pprint_result_with_indent(result,indent_level){
var res = result;
var result__$1 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24111_24115 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24112_24116 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24113_24117 = true;
var _STAR_print_fn_STAR__temp_val__24114_24118 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24113_24117);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24114_24118);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(res);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24112_24116);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24111_24115);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
var pprint = clojure.string.trim(result__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24110_SHARP_){
return day8.re_frame.debux.common.util.prepend_bars(p1__24110_SHARP_,indent_level);
}),day8.re_frame.debux.common.util.prepend_blanks(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pprint,/\n/))))], 0));

return cljs.core.flush();
});
day8.re_frame.debux.common.util.insert_blank_line = (function day8$re_frame$debux$common$util$insert_blank_line(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));

return cljs.core.flush();
});
day8.re_frame.debux.common.util.parse_opts = (function day8$re_frame$debux$common$util$parse_opts(opts){
var opts__$1 = opts;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var f = cljs.core.first(opts__$1);
var s = cljs.core.second(opts__$1);
if(cljs.core.empty_QMARK_(opts__$1)){
return acc;
} else {
if(typeof f === 'number'){
var G__24123 = cljs.core.next(opts__$1);
var G__24124 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$n,f);
opts__$1 = G__24123;
acc = G__24124;
continue;
} else {
if(typeof f === 'string'){
var G__24125 = cljs.core.next(opts__$1);
var G__24126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$msg,f);
opts__$1 = G__24125;
acc = G__24126;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$if)){
var G__24127 = cljs.core.nnext(opts__$1);
var G__24128 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$condition,s);
opts__$1 = G__24127;
acc = G__24128;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$js)){
var G__24129 = cljs.core.next(opts__$1);
var G__24130 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$js,true);
opts__$1 = G__24129;
acc = G__24130;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__24121 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$o,null,cljs.core.cst$kw$once,null], null), null);
return (fexpr__24121.cljs$core$IFn$_invoke$arity$1 ? fexpr__24121.cljs$core$IFn$_invoke$arity$1(f) : fexpr__24121.call(null,f));
})())){
var G__24131 = cljs.core.next(opts__$1);
var G__24132 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$once,true);
opts__$1 = G__24131;
acc = G__24132;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__24122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,null,cljs.core.cst$kw$style,null], null), null);
return (fexpr__24122.cljs$core$IFn$_invoke$arity$1 ? fexpr__24122.cljs$core$IFn$_invoke$arity$1(f) : fexpr__24122.call(null,f));
})())){
var G__24133 = cljs.core.nnext(opts__$1);
var G__24134 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$style,s);
opts__$1 = G__24133;
acc = G__24134;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$clog)){
var G__24135 = cljs.core.next(opts__$1);
var G__24136 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$clog,true);
opts__$1 = G__24135;
acc = G__24136;
continue;
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
break;
}
});
day8.re_frame.debux.common.util.quote_val = (function day8$re_frame$debux$common$util$quote_val(p__24137){
var vec__24138 = p__24137;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))))));
});
day8.re_frame.debux.common.util.quote_vals = (function day8$re_frame$debux$common$util$quote_vals(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.debux.common.util.quote_val,m));
});
day8.re_frame.debux.common.util.include_recur_QMARK_ = (function day8$re_frame$debux$common$util$include_recur_QMARK_(form){
var G__24143 = cljs.core.cst$sym$recur;
var fexpr__24142 = (function (){var fexpr__24144 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.flatten);
return (fexpr__24144.cljs$core$IFn$_invoke$arity$1 ? fexpr__24144.cljs$core$IFn$_invoke$arity$1(form) : fexpr__24144.call(null,form));
})();
return (fexpr__24142.cljs$core$IFn$_invoke$arity$1 ? fexpr__24142.cljs$core$IFn$_invoke$arity$1(G__24143) : fexpr__24142.call(null,G__24143));
});
day8.re_frame.debux.common.util.o_skip_QMARK_ = (function day8$re_frame$debux$common$util$o_skip_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$debux$common$macro_DASH_specs_SLASH_o_DASH_skip,sym);
});
day8.re_frame.debux.common.util.spy_first = (function day8$re_frame$debux$common$util$spy_first(result,quoted_form,indent){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,(function (){var G__24146 = quoted_form;
var G__24147 = cljs.core.cst$sym$dummy;
return (day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__24146,G__24147) : day8.re_frame.debux.common.util.remove_d.call(null,G__24146,G__24147));
})(),cljs.core.cst$kw$result,result,cljs.core.cst$kw$indent_DASH_level,indent], null));

return result;
});
day8.re_frame.debux.common.util.spy_last = (function day8$re_frame$debux$common$util$spy_last(quoted_form,indent,result){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,(function (){var G__24148 = quoted_form;
var G__24149 = cljs.core.cst$sym$dummy;
return (day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__24148,G__24149) : day8.re_frame.debux.common.util.remove_d.call(null,G__24148,G__24149));
})(),cljs.core.cst$kw$result,result,cljs.core.cst$kw$indent_DASH_level,indent], null));

return result;
});
day8.re_frame.debux.common.util.spy_comp = (function day8$re_frame$debux$common$util$spy_comp(quoted_form,indent,form){
return (function() { 
var G__24152__delegate = function (arg){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form,arg);
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,(function (){var G__24150 = quoted_form;
var G__24151 = cljs.core.cst$sym$dummy;
return (day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__24150,G__24151) : day8.re_frame.debux.common.util.remove_d.call(null,G__24150,G__24151));
})(),cljs.core.cst$kw$result,result,cljs.core.cst$kw$indent_DASH_level,indent], null));

return result;
};
var G__24152 = function (var_args){
var arg = null;
if (arguments.length > 0) {
var G__24153__i = 0, G__24153__a = new Array(arguments.length -  0);
while (G__24153__i < G__24153__a.length) {G__24153__a[G__24153__i] = arguments[G__24153__i + 0]; ++G__24153__i;}
  arg = new cljs.core.IndexedSeq(G__24153__a,0,null);
} 
return G__24152__delegate.call(this,arg);};
G__24152.cljs$lang$maxFixedArity = 0;
G__24152.cljs$lang$applyTo = (function (arglist__24154){
var arg = cljs.core.seq(arglist__24154);
return G__24152__delegate(arg);
});
G__24152.cljs$core$IFn$_invoke$arity$variadic = G__24152__delegate;
return G__24152;
})()
;
});
day8.re_frame.debux.common.util.debux_skip_symbol_QMARK_ = (function day8$re_frame$debux$common$util$debux_skip_symbol_QMARK_(sym){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$day8$re_DASH_frame$debux$common$macro_DASH_specs_SLASH_skip,null,cljs.core.cst$sym$day8$re_DASH_frame$debux$common$macro_DASH_specs_SLASH_o_DASH_skip,null,cljs.core.cst$sym$day8$re_DASH_frame$debux$common$macro_DASH_specs_SLASH_skip_DASH_outer,null,cljs.core.cst$kw$day8$re_DASH_frame$debux$common$macro_DASH_specs_SLASH_skip_DASH_place,null], null), null),sym);
});
day8.re_frame.debux.common.util.spy_first_QMARK_ = (function day8$re_frame$debux$common$util$spy_first_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$day8$re_DASH_frame$debux$common$util_SLASH_spy_DASH_first,sym);
});
day8.re_frame.debux.common.util.remove_d = (function day8$re_frame$debux$common$util$remove_d(form,d_sym){
var loc = day8.re_frame.debux.common.util.sequential_zip(form);
while(true){
var node = clojure.zip.node(loc);
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
if(((cljs.core.seq_QMARK_(node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d_sym,cljs.core.first(node))) || (((day8.re_frame.debux.common.util.debux_skip_symbol_QMARK_(cljs.core.first(node))) || (day8.re_frame.debux.common.util.spy_first_QMARK_(cljs.core.first(node))))))))){
var G__24155 = clojure.zip.replace(loc,cljs.core.last(node));
loc = G__24155;
continue;
} else {
if(((cljs.core.seq_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$day8$re_DASH_frame$debux$common$util_SLASH_spy_DASH_last,cljs.core.first(node))))){
var G__24156 = clojure.zip.replace(loc,cljs.core.last(node));
loc = G__24156;
continue;
} else {
var G__24157 = clojure.zip.next(loc);
loc = G__24157;
continue;

}
}
}
break;
}
});
