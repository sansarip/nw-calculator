// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('garden.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.color');
goog.require('garden.compression');
goog.require('garden.selectors');
goog.require('garden.units');
goog.require('garden.util');
goog.require('garden.types');
/**
 * The current compiler flags.
 */
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$pretty_DASH_print_QMARK_,true,cljs.core.cst$kw$preamble,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_to,null,cljs.core.cst$kw$vendors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$auto_DASH_prefix,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$media_DASH_expressions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nesting_DASH_behavior,cljs.core.cst$kw$default], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.  Also used to support feature queries.
 */
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$merge,(function (expr,context){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,expr], 0));
}),cljs.core.cst$kw$default,(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__4867__auto___28606 = (function (){
garden.compiler.with_selector_context = (function garden$compiler$with_selector_context(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28607 = arguments.length;
var i__4819__auto___28608 = (0);
while(true){
if((i__4819__auto___28608 < len__4818__auto___28607)){
args__4824__auto__.push((arguments[i__4819__auto___28608]));

var G__28609 = (i__4819__auto___28608 + (1));
i__4819__auto___28608 = G__28609;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$garden$compiler_SLASH__STAR_selector_DASH_context_STAR_,null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
}));

(garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq28602){
var G__28603 = cljs.core.first(seq28602);
var seq28602__$1 = cljs.core.next(seq28602);
var G__28604 = cljs.core.first(seq28602__$1);
var seq28602__$2 = cljs.core.next(seq28602__$1);
var G__28605 = cljs.core.first(seq28602__$2);
var seq28602__$3 = cljs.core.next(seq28602__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28603,G__28604,G__28605,seq28602__$3);
}));

return null;
})()
;
(garden.compiler.with_selector_context.cljs$lang$macro = true);

var ret__4867__auto___28614 = (function (){
garden.compiler.with_media_query_context = (function garden$compiler$with_media_query_context(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28615 = arguments.length;
var i__4819__auto___28616 = (0);
while(true){
if((i__4819__auto___28616 < len__4818__auto___28615)){
args__4824__auto__.push((arguments[i__4819__auto___28616]));

var G__28617 = (i__4819__auto___28616 + (1));
i__4819__auto___28616 = G__28617;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$garden$compiler_SLASH__STAR_media_DASH_query_DASH_context_STAR_,null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
}));

(garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq28610){
var G__28611 = cljs.core.first(seq28610);
var seq28610__$1 = cljs.core.next(seq28610);
var G__28612 = cljs.core.first(seq28610__$1);
var seq28610__$2 = cljs.core.next(seq28610__$1);
var G__28613 = cljs.core.first(seq28610__$2);
var seq28610__$3 = cljs.core.next(seq28610__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28611,G__28612,G__28613,seq28610__$3);
}));

return null;
})()
;
(garden.compiler.with_media_query_context.cljs$lang$macro = true);

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
garden.compiler.vendors = (function garden$compiler$vendors(){
return cljs.core.seq(cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
garden.compiler.auto_prefixed_properties = (function garden$compiler$auto_prefixed_properties(){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_)));
});
garden.compiler.auto_prefix_QMARK_ = (function garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_(garden.compiler.auto_prefixed_properties(),property);
});
garden.compiler.top_level_expression_QMARK_ = (function garden$compiler$top_level_expression_QMARK_(x){
var or__4212__auto__ = (garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1 ? garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : garden.util.rule_QMARK_.call(null,x));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ((garden.util.at_import_QMARK_(x)) || (((garden.util.at_media_QMARK_(x)) || (((garden.util.at_supports_QMARK_(x)) || (garden.util.at_keyframes_QMARK_(x)))))));
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
garden.compiler.divide_vec = (function garden$compiler$divide_vec(pred,coll){
var fexpr__28618 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove);
return (fexpr__28618.cljs$core$IFn$_invoke$arity$2 ? fexpr__28618.cljs$core$IFn$_invoke$arity$2(pred,coll) : fexpr__28618.call(null,pred,coll));
});

/**
 * @interface
 */
garden.compiler.IExpandable = function(){};

var garden$compiler$IExpandable$expand$dyn_28619 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (garden.compiler.expand[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (garden.compiler.expand["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IExpandable.expand",this$);
}
}
});
/**
 * Return a list containing the expanded form of `this`.
 */
garden.compiler.expand = (function garden$compiler$expand(this$){
if((((!((this$ == null)))) && ((!((this$.garden$compiler$IExpandable$expand$arity$1 == null)))))){
return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else {
return garden$compiler$IExpandable$expand$dyn_28619(this$);
}
});

/**
 * Like flatten but only affects seqs.
 */
garden.compiler.expand_seqs = (function garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core.seq_QMARK_(x)){
return (garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1(x) : garden.compiler.expand_seqs.call(null,x));
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
garden.compiler.expand_declaration_1 = (function garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_(declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__28620_SHARP_,p2__28621_SHARP_){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__28620_SHARP_,"-",p2__28621_SHARP_], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__28622){
var vec__28623 = p__28622;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(1),null);
if(garden.util.hash_map_QMARK_(v)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m1,p__28626){
var vec__28627 = p__28626;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28627,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28627,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m1,prefix(k,k1),v1);
}),m,(garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1(v) : garden.compiler.expand_declaration_1.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,garden.util.to_str(k),v);
}
}),cljs.core.empty(declaration),declaration);
});
garden.compiler.expand_declaration = (function garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_(declaration)){
return declaration;
} else {
return cljs.core.with_meta(garden.compiler.expand_declaration_1(declaration),cljs.core.meta(declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
garden.compiler.extract_reference = (function garden$compiler$extract_reference(selector){
var temp__5753__auto__ = cljs.core.re_find(garden.compiler.parent_selector_re,garden.util.to_str(cljs.core.last(selector)));
if(cljs.core.truth_(temp__5753__auto__)){
var reference = temp__5753__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(reference));
} else {
return null;
}
});
garden.compiler.expand_selector_reference = (function garden$compiler$expand_selector_reference(selector){
var temp__5751__auto__ = garden.compiler.extract_reference(selector);
if(cljs.core.truth_(temp__5751__auto__)){
var reference = temp__5751__auto__;
var parent = cljs.core.butlast(selector);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parent),(new cljs.core.List(null,garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(parent),reference], 0)),null,(1),null)));
} else {
return selector;
}
});
garden.compiler.expand_selector = (function garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq(parent))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent,selector__$1], 0))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,selector__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand_selector_reference,selector__$2);
});
garden.compiler.expand_rule = (function garden$compiler$expand_rule(rule){
var vec__28630 = cljs.core.split_with(garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28630,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28630,(1),null);
var selector__$1 = garden.compiler.expand_selector(selector,garden.compiler._STAR_selector_context_STAR_);
var children__$1 = garden.compiler.expand(children);
var vec__28633 = garden.compiler.divide_vec(garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(1),null);
var ys = (function (){var _STAR_selector_context_STAR__orig_val__28636 = garden.compiler._STAR_selector_context_STAR_;
var _STAR_selector_context_STAR__temp_val__28637 = ((cljs.core.seq(selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);
(garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__temp_val__28637);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs], 0)));
}finally {(garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__orig_val__28636);
}})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ys,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declarations], 0))));
});
if((typeof garden !== 'undefined') && (typeof garden.compiler !== 'undefined') && (typeof garden.compiler.expand_at_rule !== 'undefined')){
} else {
garden.compiler.expand_at_rule = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__28638 = cljs.core.get_global_hierarchy;
return (fexpr__28638.cljs$core$IFn$_invoke$arity$0 ? fexpr__28638.cljs$core$IFn$_invoke$arity$0() : fexpr__28638.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","expand-at-rule"),cljs.core.cst$kw$identifier,cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyframes,(function (p__28639){
var map__28640 = p__28639;
var map__28640__$1 = cljs.core.__destructure_map(map__28640);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28640__$1,cljs.core.cst$kw$value);
var map__28641 = value;
var map__28641__$1 = cljs.core.__destructure_map(map__28641);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28641__$1,cljs.core.cst$kw$identifier);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28641__$1,cljs.core.cst$kw$frames);
return (new cljs.core.List(null,(new garden.types.CSSAtRule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,garden.util.to_str(identifier),cljs.core.cst$kw$frames,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frames], 0))], null),null,null,null)),null,(1),null));
}));
garden.compiler.expand_media_query_expression = (function garden$compiler$expand_media_query_expression(expression){
var temp__5751__auto__ = (function (){var G__28642 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_expressions,cljs.core.cst$kw$nesting_DASH_behavior], null));
return (garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1(G__28642) : garden.compiler.media_expression_behavior.call(null,G__28642));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(expression,garden.compiler._STAR_media_query_context_STAR_) : f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_));
} else {
return expression;
}
});
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$media,(function (p__28643){
var map__28644 = p__28643;
var map__28644__$1 = cljs.core.__destructure_map(map__28644);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28644__$1,cljs.core.cst$kw$value);
var map__28645 = value;
var map__28645__$1 = cljs.core.__destructure_map(map__28645);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28645__$1,cljs.core.cst$kw$media_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28645__$1,cljs.core.cst$kw$rules);
var media_queries__$1 = garden.compiler.expand_media_query_expression(media_queries);
var xs = (function (){var _STAR_media_query_context_STAR__orig_val__28649 = garden.compiler._STAR_media_query_context_STAR_;
var _STAR_media_query_context_STAR__temp_val__28650 = media_queries__$1;
(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__temp_val__28650);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.expand(rules)], 0)));
}finally {(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__orig_val__28649);
}})();
var vec__28646 = garden.compiler.divide_vec(garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28646,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28646,(1),null);
return cljs.core.cons((new garden.types.CSSAtRule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries__$1,cljs.core.cst$kw$rules,rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$feature,(function (p__28651){
var map__28652 = p__28651;
var map__28652__$1 = cljs.core.__destructure_map(map__28652);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28652__$1,cljs.core.cst$kw$value);
var map__28653 = value;
var map__28653__$1 = cljs.core.__destructure_map(map__28653);
var feature_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28653__$1,cljs.core.cst$kw$feature_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28653__$1,cljs.core.cst$kw$rules);
var feature_queries__$1 = garden.compiler.expand_media_query_expression(feature_queries);
var xs = (function (){var _STAR_media_query_context_STAR__orig_val__28657 = garden.compiler._STAR_media_query_context_STAR_;
var _STAR_media_query_context_STAR__temp_val__28658 = feature_queries__$1;
(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__temp_val__28658);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.expand(rules)], 0)));
}finally {(garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__orig_val__28657);
}})();
var vec__28654 = garden.compiler.divide_vec(garden.util.at_supports_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(1),null);
return cljs.core.cons((new garden.types.CSSAtRule(cljs.core.cst$kw$feature,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$feature_DASH_queries,feature_queries__$1,cljs.core.cst$kw$rules,rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_stylesheet = (function garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand,garden.compiler.expand(xs)));
});
goog.object.set(garden.compiler.IExpandable,"null",true);

goog.object.set(garden.compiler.expand,"null",(function (this$){
return null;
}));

(cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.Cons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
}));

(cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

goog.object.set(garden.compiler.IExpandable,"_",true);

goog.object.set(garden.compiler.expand,"_",(function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
}));

(cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

(garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : garden.compiler.expand_at_rule.call(null,this$__$1));
}));

(cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
}));

(cljs.core.List.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
}));

/**
 * @interface
 */
garden.compiler.CSSRenderer = function(){};

var garden$compiler$CSSRenderer$render_css$dyn_28659 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (garden.compiler.render_css[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (garden.compiler.render_css["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSSRenderer.render-css",this$);
}
}
});
/**
 * Convert a Clojure data type in to a string of CSS.
 */
garden.compiler.render_css = (function garden$compiler$render_css(this$){
if((((!((this$ == null)))) && ((!((this$.garden$compiler$CSSRenderer$render_css$arity$1 == null)))))){
return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
return garden$compiler$CSSRenderer$render_css$dyn_28659(this$);
}
});

garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
garden.compiler.space_separated_list = (function garden$compiler$space_separated_list(var_args){
var G__28661 = arguments.length;
switch (G__28661) {
case 1:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
}));

(garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
}));

(garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2);

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.compiler.comma_separated_list = (function garden$compiler$comma_separated_list(var_args){
var G__28664 = arguments.length;
switch (G__28664) {
case 1:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
}));

(garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4611__auto__ = (function garden$compiler$iter__28665(s__28666){
return (new cljs.core.LazySeq(null,(function (){
var s__28666__$1 = s__28666;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28666__$1);
if(temp__5753__auto__){
var s__28666__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28666__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28666__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28668 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28667 = (0);
while(true){
if((i__28667 < size__4610__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__28667);
cljs.core.chunk_append(b__28668,((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))));

var G__28670 = (i__28667 + (1));
i__28667 = G__28670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28668),garden$compiler$iter__28665(cljs.core.chunk_rest(s__28666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28668),null);
}
} else {
var x = cljs.core.first(s__28666__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),garden$compiler$iter__28665(cljs.core.rest(s__28666__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.comma,ys);
}));

(garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2);

garden.compiler.rule_join = (function garden$compiler$rule_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function garden$compiler$indent_str(s){
return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
garden.compiler.render_value = (function garden$compiler$render_value(x){
if(garden.util.at_keyframes_QMARK_(x)){
return garden.util.to_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$identifier], null)));
} else {
return garden.compiler.render_css(x);
}
});
garden.compiler.render_property_and_value = (function garden$compiler$render_property_and_value(p__28671){
var vec__28672 = p__28671;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28672,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28672,(1),null);
if(cljs.core.set_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_(val))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,val):garden.compiler.render_value(val));
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,garden.compiler.colon,val__$1,garden.compiler.semicolon], 0));
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
garden.compiler.add_blocks = (function garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__28675_SHARP_){
return cljs.core.cons(p1__28675_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__28675_SHARP_) : f.call(null,p1__28675_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declaration], 0));
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
garden.compiler.prefixed_blocks = (function garden$compiler$prefixed_blocks(vendors,p__28676){
var vec__28677 = p__28676;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28677,(1),null);
var iter__4611__auto__ = (function garden$compiler$prefixed_blocks_$_iter__28680(s__28681){
return (new cljs.core.LazySeq(null,(function (){
var s__28681__$1 = s__28681;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28681__$1);
if(temp__5753__auto__){
var s__28681__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28681__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28681__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28683 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28682 = (0);
while(true){
if((i__28682 < size__4610__auto__)){
var vendor = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__28682);
cljs.core.chunk_append(b__28683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null));

var G__28684 = (i__28682 + (1));
i__28682 = G__28684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28683),garden$compiler$prefixed_blocks_$_iter__28680(cljs.core.chunk_rest(s__28681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28683),null);
}
} else {
var vendor = cljs.core.first(s__28681__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null),garden$compiler$prefixed_blocks_$_iter__28680(cljs.core.rest(s__28681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
garden.compiler.prefix_all_properties = (function garden$compiler$prefix_all_properties(vendors,declaration){
return garden.compiler.add_blocks(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
garden.compiler.prefix_auto_properties = (function garden$compiler$prefix_auto_properties(vendors,declaration){
return garden.compiler.add_blocks((function (block){
var vec__28685 = block;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28685,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28685,(1),null);
if(garden.compiler.auto_prefix_QMARK_(cljs.core.name(p))){
return garden.compiler.prefixed_blocks(vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
garden.compiler.prefix_declaration = (function garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__4212__auto__ = cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return garden.compiler.vendors();
}
})();
var prefix_fn = (cljs.core.truth_(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration)))?garden.compiler.prefix_all_properties:garden.compiler.prefix_auto_properties);
return (prefix_fn.cljs$core$IFn$_invoke$arity$2 ? prefix_fn.cljs$core$IFn$_invoke$arity$2(vendors,declaration) : prefix_fn.call(null,vendors,declaration));
});
garden.compiler.render_declaration = (function garden$compiler$render_declaration(declaration){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,garden.compiler.prefix_declaration(declaration)));
});
garden.compiler.render_selector = (function garden$compiler$render_selector(selector){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
garden.compiler.render_rule = (function garden$compiler$render_rule(p__28688){
var vec__28689 = p__28688;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28689,(0),null);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28689,(1),null);
var rule = vec__28689;
if(((cljs.core.seq(rule)) && (cljs.core.every_QMARK_(cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_selector(selector)),garden.compiler.l_brace,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,declarations)))),garden.compiler.r_brace].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
garden.compiler.render_media_expr_part = (function garden$compiler$render_media_expr_part(p__28692){
var vec__28693 = p__28692;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(1),null);
var vec__28696 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = v;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(sv);
} else {
return and__4210__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),garden.compiler.colon,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
garden.compiler.render_media_expr = (function garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render the individual components of a query expression.
 */
garden.compiler.render_feature_expr_part = (function garden$compiler$render_feature_expr_part(p__28699){
var vec__28700 = p__28699;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700,(1),null);
var vec__28703 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28703,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28703,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = v;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(sv);
} else {
return and__4210__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),garden.compiler.colon,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}
});
/**
 * Make a query expression from one or more maps. Keys are not
 *   validated.
 */
garden.compiler.render_feature_expr = (function garden$compiler$render_feature_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_feature_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_feature_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
garden.compiler.render_unit = (function garden$compiler$render_unit(css_unit){
var map__28706 = css_unit;
var map__28706__$1 = cljs.core.__destructure_map(map__28706);
var magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28706__$1,cljs.core.cst$kw$magnitude);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28706__$1,cljs.core.cst$kw$unit);
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.name(unit)].join('');
});
/**
 * Render a CSS function.
 */
garden.compiler.render_function = (function garden$compiler$render_function(css_function){
var map__28707 = css_function;
var map__28707__$1 = cljs.core.__destructure_map(map__28707);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28707__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28707__$1,cljs.core.cst$kw$args);
var args__$1 = ((cljs.core.sequential_QMARK_(args))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(args):garden.util.to_str(args));
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%s(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.util.to_str(f),args__$1], 0));
});
garden.compiler.render_color = (function garden$compiler$render_color(c){
var temp__5751__auto__ = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5751__auto__)){
var a = temp__5751__auto__;
var map__28708 = garden.color.as_hsl(c);
var map__28708__$1 = cljs.core.__destructure_map(map__28708);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28708__$1,cljs.core.cst$kw$hue);
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28708__$1,cljs.core.cst$kw$saturation);
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28708__$1,cljs.core.cst$kw$lightness);
var vec__28709 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28709,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28709,(1),null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("hsla(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null))], 0));
} else {
return garden.color.as_hex(c);
}
});
if((typeof garden !== 'undefined') && (typeof garden.compiler !== 'undefined') && (typeof garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
garden.compiler.render_at_rule = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__28712 = cljs.core.get_global_hierarchy;
return (fexpr__28712.cljs$core$IFn$_invoke$arity$0 ? fexpr__28712.cljs$core$IFn$_invoke$arity$0() : fexpr__28712.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","render-at-rule"),cljs.core.cst$kw$identifier,cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_){
return null;
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$import,(function (p__28713){
var map__28714 = p__28713;
var map__28714__$1 = cljs.core.__destructure_map(map__28714);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28714__$1,cljs.core.cst$kw$value);
var map__28715 = value;
var map__28715__$1 = cljs.core.__destructure_map(map__28715);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28715__$1,cljs.core.cst$kw$url);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28715__$1,cljs.core.cst$kw$media_DASH_queries);
var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes(url):garden.compiler.render_css(url));
var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr(media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),garden.compiler.semicolon].join('');
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyframes,(function (p__28717){
var map__28718 = p__28717;
var map__28718__$1 = cljs.core.__destructure_map(map__28718);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28718__$1,cljs.core.cst$kw$value);
var map__28719 = value;
var map__28719__$1 = cljs.core.__destructure_map(map__28719);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,cljs.core.cst$kw$identifier);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,cljs.core.cst$kw$frames);
if(cljs.core.seq(frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.to_str(identifier)),garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,frames)))),garden.compiler.r_brace_1].join('');
var prefix = (function (vendor){
return ["@",garden.util.vendor_prefix(vendor,"keyframes ")].join('');
});
return garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28716_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28716_SHARP_),body].join('');
}),cljs.core.cons("@keyframes ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(prefix,garden.compiler.vendors()))));
} else {
return null;
}
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$media,(function (p__28720){
var map__28721 = p__28720;
var map__28721__$1 = cljs.core.__destructure_map(map__28721);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28721__$1,cljs.core.cst$kw$value);
var map__28722 = value;
var map__28722__$1 = cljs.core.__destructure_map(map__28722);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28722__$1,cljs.core.cst$kw$media_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28722__$1,cljs.core.cst$kw$rules);
if(cljs.core.seq(rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_media_expr(media_queries)),garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,rules)))),garden.compiler.r_brace_1].join('');
} else {
return null;
}
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$feature,(function (p__28723){
var map__28724 = p__28723;
var map__28724__$1 = cljs.core.__destructure_map(map__28724);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28724__$1,cljs.core.cst$kw$value);
var map__28725 = value;
var map__28725__$1 = cljs.core.__destructure_map(map__28725);
var feature_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28725__$1,cljs.core.cst$kw$feature_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28725__$1,cljs.core.cst$kw$rules);
if(cljs.core.seq(rules)){
return ["@supports ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_feature_expr(feature_queries)),garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,rules)))),garden.compiler.r_brace_1].join('');
} else {
return null;
}
}));
goog.object.set(garden.compiler.CSSRenderer,"null",true);

goog.object.set(garden.compiler.render_css,"null",(function (this$){
return "";
}));

(garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_color(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_unit(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

goog.object.set(garden.compiler.CSSRenderer,"number",true);

goog.object.set(garden.compiler.render_css,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_function(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

goog.object.set(garden.compiler.CSSRenderer,"_",true);

goog.object.set(garden.compiler.render_css,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));

(garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return (garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : garden.compiler.render_at_rule.call(null,this$__$1));
}));

(cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

(cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
}));

(cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.List.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
}));
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
garden.compiler.compile_style = (function garden$compiler$compile_style(ms){
return cljs.core.first(garden.compiler.render_css(garden.compiler.expand(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
garden.compiler.do_compile = (function garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR__orig_val__28726 = garden.compiler._STAR_flags_STAR_;
var _STAR_flags_STAR__temp_val__28727 = flags;
(garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__temp_val__28727);

try{return garden.compiler.rule_join(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet(rules)))));
}finally {(garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__orig_val__28726);
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
garden.compiler.do_preamble = (function garden$compiler$do_preamble(p__28728,stylesheet){
var map__28729 = p__28728;
var map__28729__$1 = cljs.core.__destructure_map(map__28729);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28729__$1,cljs.core.cst$kw$preamble);
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
garden.compiler.do_compression = (function garden$compiler$do_compression(p__28730,stylesheet){
var map__28731 = p__28730;
var map__28731__$1 = cljs.core.__destructure_map(map__28731);
var pretty_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28731__$1,cljs.core.cst$kw$pretty_DASH_print_QMARK_);
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28731__$1,cljs.core.cst$kw$pretty_DASH_print);
if(cljs.core.truth_((function (){var or__4212__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return garden.compression.compress_stylesheet(stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
garden.compiler.do_output_to = (function garden$compiler$do_output_to(p__28732,stylesheet){
var map__28733 = p__28732;
var map__28733__$1 = cljs.core.__destructure_map(map__28733);
var output_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28733__$1,cljs.core.cst$kw$output_DASH_to);
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
garden.compiler.compile_css = (function garden$compiler$compile_css(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28739 = arguments.length;
var i__4819__auto___28740 = (0);
while(true){
if((i__4819__auto___28740 < len__4818__auto___28739)){
args__4824__auto__.push((arguments[i__4819__auto___28740]));

var G__28741 = (i__4819__auto___28740 + (1));
i__4819__auto___28740 = G__28741;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__28736 = (cljs.core.truth_((function (){var and__4210__auto__ = garden.util.hash_map_QMARK_(flags);
if(and__4210__auto__){
return cljs.core.some(cljs.core.set(cljs.core.keys(flags)),cljs.core.keys(garden.compiler._STAR_flags_STAR_));
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler._STAR_flags_STAR_,flags], 0)),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons(flags,rules)], null));
var flags__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736,(1),null);
return garden.compiler.do_output_to(flags__$1,garden.compiler.do_compression(flags__$1,garden.compiler.do_preamble(flags__$1,garden.compiler.do_compile(flags__$1,rules__$1))));
}));

(garden.compiler.compile_css.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.compiler.compile_css.cljs$lang$applyTo = (function (seq28734){
var G__28735 = cljs.core.first(seq28734);
var seq28734__$1 = cljs.core.next(seq28734);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28735,seq28734__$1);
}));

