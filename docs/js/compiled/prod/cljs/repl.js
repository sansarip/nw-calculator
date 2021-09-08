// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23909){
var map__23910 = p__23909;
var map__23910__$1 = cljs.core.__destructure_map(map__23910);
var m = map__23910__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23910__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23910__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__23911_23939 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23912_23940 = null;
var count__23913_23941 = (0);
var i__23914_23942 = (0);
while(true){
if((i__23914_23942 < count__23913_23941)){
var f_23943 = chunk__23912_23940.cljs$core$IIndexed$_nth$arity$2(null,i__23914_23942);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23943], 0));


var G__23944 = seq__23911_23939;
var G__23945 = chunk__23912_23940;
var G__23946 = count__23913_23941;
var G__23947 = (i__23914_23942 + (1));
seq__23911_23939 = G__23944;
chunk__23912_23940 = G__23945;
count__23913_23941 = G__23946;
i__23914_23942 = G__23947;
continue;
} else {
var temp__5753__auto___23948 = cljs.core.seq(seq__23911_23939);
if(temp__5753__auto___23948){
var seq__23911_23949__$1 = temp__5753__auto___23948;
if(cljs.core.chunked_seq_QMARK_(seq__23911_23949__$1)){
var c__4638__auto___23950 = cljs.core.chunk_first(seq__23911_23949__$1);
var G__23951 = cljs.core.chunk_rest(seq__23911_23949__$1);
var G__23952 = c__4638__auto___23950;
var G__23953 = cljs.core.count(c__4638__auto___23950);
var G__23954 = (0);
seq__23911_23939 = G__23951;
chunk__23912_23940 = G__23952;
count__23913_23941 = G__23953;
i__23914_23942 = G__23954;
continue;
} else {
var f_23955 = cljs.core.first(seq__23911_23949__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23955], 0));


var G__23956 = cljs.core.next(seq__23911_23949__$1);
var G__23957 = null;
var G__23958 = (0);
var G__23959 = (0);
seq__23911_23939 = G__23956;
chunk__23912_23940 = G__23957;
count__23913_23941 = G__23958;
i__23914_23942 = G__23959;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23960 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23960], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_23960)))?cljs.core.second(arglists_23960):arglists_23960)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__23915_23961 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23916_23962 = null;
var count__23917_23963 = (0);
var i__23918_23964 = (0);
while(true){
if((i__23918_23964 < count__23917_23963)){
var vec__23927_23965 = chunk__23916_23962.cljs$core$IIndexed$_nth$arity$2(null,i__23918_23964);
var name_23966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23927_23965,(0),null);
var map__23930_23967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23927_23965,(1),null);
var map__23930_23968__$1 = cljs.core.__destructure_map(map__23930_23967);
var doc_23969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23930_23968__$1,cljs.core.cst$kw$doc);
var arglists_23970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23930_23968__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23966], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23970], 0));

if(cljs.core.truth_(doc_23969)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23969], 0));
} else {
}


var G__23971 = seq__23915_23961;
var G__23972 = chunk__23916_23962;
var G__23973 = count__23917_23963;
var G__23974 = (i__23918_23964 + (1));
seq__23915_23961 = G__23971;
chunk__23916_23962 = G__23972;
count__23917_23963 = G__23973;
i__23918_23964 = G__23974;
continue;
} else {
var temp__5753__auto___23975 = cljs.core.seq(seq__23915_23961);
if(temp__5753__auto___23975){
var seq__23915_23976__$1 = temp__5753__auto___23975;
if(cljs.core.chunked_seq_QMARK_(seq__23915_23976__$1)){
var c__4638__auto___23977 = cljs.core.chunk_first(seq__23915_23976__$1);
var G__23978 = cljs.core.chunk_rest(seq__23915_23976__$1);
var G__23979 = c__4638__auto___23977;
var G__23980 = cljs.core.count(c__4638__auto___23977);
var G__23981 = (0);
seq__23915_23961 = G__23978;
chunk__23916_23962 = G__23979;
count__23917_23963 = G__23980;
i__23918_23964 = G__23981;
continue;
} else {
var vec__23931_23982 = cljs.core.first(seq__23915_23976__$1);
var name_23983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23931_23982,(0),null);
var map__23934_23984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23931_23982,(1),null);
var map__23934_23985__$1 = cljs.core.__destructure_map(map__23934_23984);
var doc_23986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23934_23985__$1,cljs.core.cst$kw$doc);
var arglists_23987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23934_23985__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23983], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23987], 0));

if(cljs.core.truth_(doc_23986)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23986], 0));
} else {
}


var G__23988 = cljs.core.next(seq__23915_23976__$1);
var G__23989 = null;
var G__23990 = (0);
var G__23991 = (0);
seq__23915_23961 = G__23988;
chunk__23916_23962 = G__23989;
count__23917_23963 = G__23990;
i__23918_23964 = G__23991;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__23935 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__23936 = null;
var count__23937 = (0);
var i__23938 = (0);
while(true){
if((i__23938 < count__23937)){
var role = chunk__23936.cljs$core$IIndexed$_nth$arity$2(null,i__23938);
var temp__5753__auto___23992__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___23992__$1)){
var spec_23993 = temp__5753__auto___23992__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23993)], 0));
} else {
}


var G__23994 = seq__23935;
var G__23995 = chunk__23936;
var G__23996 = count__23937;
var G__23997 = (i__23938 + (1));
seq__23935 = G__23994;
chunk__23936 = G__23995;
count__23937 = G__23996;
i__23938 = G__23997;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__23935);
if(temp__5753__auto____$1){
var seq__23935__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23935__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__23935__$1);
var G__23998 = cljs.core.chunk_rest(seq__23935__$1);
var G__23999 = c__4638__auto__;
var G__24000 = cljs.core.count(c__4638__auto__);
var G__24001 = (0);
seq__23935 = G__23998;
chunk__23936 = G__23999;
count__23937 = G__24000;
i__23938 = G__24001;
continue;
} else {
var role = cljs.core.first(seq__23935__$1);
var temp__5753__auto___24002__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24002__$2)){
var spec_24003 = temp__5753__auto___24002__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24003)], 0));
} else {
}


var G__24004 = cljs.core.next(seq__23935__$1);
var G__24005 = null;
var G__24006 = (0);
var G__24007 = (0);
seq__23935 = G__24004;
chunk__23936 = G__24005;
count__23937 = G__24006;
i__23938 = G__24007;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,(((t instanceof cljs.core.ExceptionInfo))?cljs.core.cst$sym$cljs$core_SLASH_ExceptionInfo:(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24009 = cljs.core.ex_cause(t);
via = G__24008;
t = G__24009;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$via,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),cljs.core.cst$kw$trace,null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.cst$kw$clojure$error_SLASH_phase.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24012 = datafied_throwable;
var map__24012__$1 = cljs.core.__destructure_map(map__24012);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24012__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24012__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24012__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__24013 = cljs.core.last(via);
var map__24013__$1 = cljs.core.__destructure_map(map__24013);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24013__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24013__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24013__$1,cljs.core.cst$kw$data);
var map__24014 = data;
var map__24014__$1 = cljs.core.__destructure_map(map__24014);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24014__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24014__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24014__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__24015 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24015__$1 = cljs.core.__destructure_map(map__24015);
var top_data = map__24015__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24015__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24016 = phase;
var G__24016__$1 = (((G__24016 instanceof cljs.core.Keyword))?G__24016.fqn:null);
switch (G__24016__$1) {
case "read-source":
var map__24017 = data;
var map__24017__$1 = cljs.core.__destructure_map(map__24017);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24017__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24017__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__24018 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24018__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24018,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24018);
var G__24018__$2 = (cljs.core.truth_((function (){var fexpr__24019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24019.cljs$core$IFn$_invoke$arity$1 ? fexpr__24019.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24019.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24018__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24018__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24018__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24018__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24020 = top_data;
var G__24020__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24020);
var G__24020__$2 = (cljs.core.truth_((function (){var fexpr__24021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24021.cljs$core$IFn$_invoke$arity$1 ? fexpr__24021.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24021.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24020__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24020__$1);
var G__24020__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24020__$2);
var G__24020__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24020__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24020__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24022 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24022,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24022,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24022,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24022,(3),null);
var G__24025 = top_data;
var G__24025__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24025,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__24025);
var G__24025__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__24025__$1);
var G__24025__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24025__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24025__$2);
var G__24025__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24025__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24025__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24025__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24025__$4;
}

break;
case "execution":
var vec__24026 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24026,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24026,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24026,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24026,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24011_SHARP_){
var or__4212__auto__ = (p1__24011_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__24029 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24029.cljs$core$IFn$_invoke$arity$1 ? fexpr__24029.cljs$core$IFn$_invoke$arity$1(p1__24011_SHARP_) : fexpr__24029.call(null,p1__24011_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__24030 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__24030__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24030,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__24030);
var G__24030__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24030__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24030__$1);
var G__24030__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24030__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24030__$2);
var G__24030__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24030__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__24030__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24030__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24030__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24016__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24034){
var map__24035 = p__24034;
var map__24035__$1 = cljs.core.__destructure_map(map__24035);
var triage_data = map__24035__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24035__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24036 = phase;
var G__24036__$1 = (((G__24036 instanceof cljs.core.Keyword))?G__24036.fqn:null);
switch (G__24036__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24037 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24039 = loc;
var G__24040 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24041_24074 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24042_24075 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24043_24076 = true;
var _STAR_print_fn_STAR__temp_val__24044_24077 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24043_24076);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24044_24077);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24032_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24032_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24042_24075);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24041_24074);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24037,G__24038,G__24039,G__24040) : format.call(null,G__24037,G__24038,G__24039,G__24040));

break;
case "macroexpansion":
var G__24045 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24046 = cause_type;
var G__24047 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24048 = loc;
var G__24049 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24045,G__24046,G__24047,G__24048,G__24049) : format.call(null,G__24045,G__24046,G__24047,G__24048,G__24049));

break;
case "compile-syntax-check":
var G__24050 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24051 = cause_type;
var G__24052 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24053 = loc;
var G__24054 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24050,G__24051,G__24052,G__24053,G__24054) : format.call(null,G__24050,G__24051,G__24052,G__24053,G__24054));

break;
case "compilation":
var G__24055 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24056 = cause_type;
var G__24057 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24058 = loc;
var G__24059 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24055,G__24056,G__24057,G__24058,G__24059) : format.call(null,G__24055,G__24056,G__24057,G__24058,G__24059));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24060 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24061 = symbol;
var G__24062 = loc;
var G__24063 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24064_24078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24065_24079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24066_24080 = true;
var _STAR_print_fn_STAR__temp_val__24067_24081 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24066_24080);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24067_24081);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24033_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24033_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24065_24079);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24064_24078);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24060,G__24061,G__24062,G__24063) : format.call(null,G__24060,G__24061,G__24062,G__24063));
} else {
var G__24068 = "Execution error%s at %s(%s).\n%s\n";
var G__24069 = cause_type;
var G__24070 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24071 = loc;
var G__24072 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24068,G__24069,G__24070,G__24071,G__24072) : format.call(null,G__24068,G__24069,G__24070,G__24071,G__24072));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24036__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
