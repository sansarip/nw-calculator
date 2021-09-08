// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('garden.compression');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
garden.compression.token_fn = (function garden$compression$token_fn(p__28188){
var vec__28189 = p__28188;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28189,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28189,(1),null);
return (function (s){
var temp__5753__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5753__auto__)){
var chunk = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$chunk,chunk,cljs.core.cst$kw$size,cljs.core.count(chunk)], null);
} else {
return null;
}
});
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
garden.compression.tokenizer = (function garden$compression$tokenizer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28194 = arguments.length;
var i__4819__auto___28195 = (0);
while(true){
if((i__4819__auto___28195 < len__4818__auto___28194)){
args__4824__auto__.push((arguments[i__4819__auto___28195]));

var G__28196 = (i__4819__auto___28195 + (1));
i__4819__auto___28195 = G__28196;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compression.token_fn,tags_PLUS_regexes);
return (function (s){
return cljs.core.some((function (p1__28192_SHARP_){
return (p1__28192_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28192_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__28192_SHARP_.call(null,s));
}),fs);
});
}));

(garden.compression.tokenizer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.compression.tokenizer.cljs$lang$applyTo = (function (seq28193){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28193));
}));

/**
 * Tokenizer used during stylesheet compression.
 */
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_brace,/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_brace,/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_paren,/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_paren,/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comma,/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colon,/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$semicolon,/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$and,/^and\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$space_PLUS_,/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$white_DASH_space_PLUS_,/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$any,/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
garden.compression.compress_stylesheet = (function garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5751__auto__ = (garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1 ? garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1(s1) : garden.compression.stylesheet_tokenizer.call(null,s1));
if(cljs.core.truth_(temp__5751__auto__)){
var map__28197 = temp__5751__auto__;
var map__28197__$1 = cljs.core.__destructure_map(map__28197);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28197__$1,cljs.core.cst$kw$tag);
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28197__$1,cljs.core.cst$kw$chunk);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28197__$1,cljs.core.cst$kw$size);
var G__28200 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__28201 = [s2,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28199 = tag;
var G__28199__$1 = (((G__28199 instanceof cljs.core.Keyword))?G__28199.fqn:null);
switch (G__28199__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "and":
return "and ";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__28200;
s2 = G__28201;
continue;
} else {
return s2;
}
break;
}
});
