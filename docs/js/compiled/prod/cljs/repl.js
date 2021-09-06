// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23899){
var map__23900 = p__23899;
var map__23900__$1 = cljs.core.__destructure_map(map__23900);
var m = map__23900__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23900__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23900__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5735__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__23901_23929 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23902_23930 = null;
var count__23903_23931 = (0);
var i__23904_23932 = (0);
while(true){
if((i__23904_23932 < count__23903_23931)){
var f_23933 = chunk__23902_23930.cljs$core$IIndexed$_nth$arity$2(null,i__23904_23932);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23933], 0));


var G__23934 = seq__23901_23929;
var G__23935 = chunk__23902_23930;
var G__23936 = count__23903_23931;
var G__23937 = (i__23904_23932 + (1));
seq__23901_23929 = G__23934;
chunk__23902_23930 = G__23935;
count__23903_23931 = G__23936;
i__23904_23932 = G__23937;
continue;
} else {
var temp__5735__auto___23938 = cljs.core.seq(seq__23901_23929);
if(temp__5735__auto___23938){
var seq__23901_23939__$1 = temp__5735__auto___23938;
if(cljs.core.chunked_seq_QMARK_(seq__23901_23939__$1)){
var c__4638__auto___23940 = cljs.core.chunk_first(seq__23901_23939__$1);
var G__23941 = cljs.core.chunk_rest(seq__23901_23939__$1);
var G__23942 = c__4638__auto___23940;
var G__23943 = cljs.core.count(c__4638__auto___23940);
var G__23944 = (0);
seq__23901_23929 = G__23941;
chunk__23902_23930 = G__23942;
count__23903_23931 = G__23943;
i__23904_23932 = G__23944;
continue;
} else {
var f_23945 = cljs.core.first(seq__23901_23939__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23945], 0));


var G__23946 = cljs.core.next(seq__23901_23939__$1);
var G__23947 = null;
var G__23948 = (0);
var G__23949 = (0);
seq__23901_23929 = G__23946;
chunk__23902_23930 = G__23947;
count__23903_23931 = G__23948;
i__23904_23932 = G__23949;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23950 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23950], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_23950)))?cljs.core.second(arglists_23950):arglists_23950)], 0));
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
var seq__23905_23951 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23906_23952 = null;
var count__23907_23953 = (0);
var i__23908_23954 = (0);
while(true){
if((i__23908_23954 < count__23907_23953)){
var vec__23917_23955 = chunk__23906_23952.cljs$core$IIndexed$_nth$arity$2(null,i__23908_23954);
var name_23956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917_23955,(0),null);
var map__23920_23957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917_23955,(1),null);
var map__23920_23958__$1 = cljs.core.__destructure_map(map__23920_23957);
var doc_23959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23920_23958__$1,cljs.core.cst$kw$doc);
var arglists_23960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23920_23958__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23956], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23960], 0));

if(cljs.core.truth_(doc_23959)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23959], 0));
} else {
}


var G__23961 = seq__23905_23951;
var G__23962 = chunk__23906_23952;
var G__23963 = count__23907_23953;
var G__23964 = (i__23908_23954 + (1));
seq__23905_23951 = G__23961;
chunk__23906_23952 = G__23962;
count__23907_23953 = G__23963;
i__23908_23954 = G__23964;
continue;
} else {
var temp__5735__auto___23965 = cljs.core.seq(seq__23905_23951);
if(temp__5735__auto___23965){
var seq__23905_23966__$1 = temp__5735__auto___23965;
if(cljs.core.chunked_seq_QMARK_(seq__23905_23966__$1)){
var c__4638__auto___23967 = cljs.core.chunk_first(seq__23905_23966__$1);
var G__23968 = cljs.core.chunk_rest(seq__23905_23966__$1);
var G__23969 = c__4638__auto___23967;
var G__23970 = cljs.core.count(c__4638__auto___23967);
var G__23971 = (0);
seq__23905_23951 = G__23968;
chunk__23906_23952 = G__23969;
count__23907_23953 = G__23970;
i__23908_23954 = G__23971;
continue;
} else {
var vec__23921_23972 = cljs.core.first(seq__23905_23966__$1);
var name_23973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23921_23972,(0),null);
var map__23924_23974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23921_23972,(1),null);
var map__23924_23975__$1 = cljs.core.__destructure_map(map__23924_23974);
var doc_23976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23924_23975__$1,cljs.core.cst$kw$doc);
var arglists_23977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23924_23975__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23973], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23977], 0));

if(cljs.core.truth_(doc_23976)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23976], 0));
} else {
}


var G__23978 = cljs.core.next(seq__23905_23966__$1);
var G__23979 = null;
var G__23980 = (0);
var G__23981 = (0);
seq__23905_23951 = G__23978;
chunk__23906_23952 = G__23979;
count__23907_23953 = G__23980;
i__23908_23954 = G__23981;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__23925 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__23926 = null;
var count__23927 = (0);
var i__23928 = (0);
while(true){
if((i__23928 < count__23927)){
var role = chunk__23926.cljs$core$IIndexed$_nth$arity$2(null,i__23928);
var temp__5735__auto___23982__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___23982__$1)){
var spec_23983 = temp__5735__auto___23982__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23983)], 0));
} else {
}


var G__23984 = seq__23925;
var G__23985 = chunk__23926;
var G__23986 = count__23927;
var G__23987 = (i__23928 + (1));
seq__23925 = G__23984;
chunk__23926 = G__23985;
count__23927 = G__23986;
i__23928 = G__23987;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__23925);
if(temp__5735__auto____$1){
var seq__23925__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23925__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__23925__$1);
var G__23988 = cljs.core.chunk_rest(seq__23925__$1);
var G__23989 = c__4638__auto__;
var G__23990 = cljs.core.count(c__4638__auto__);
var G__23991 = (0);
seq__23925 = G__23988;
chunk__23926 = G__23989;
count__23927 = G__23990;
i__23928 = G__23991;
continue;
} else {
var role = cljs.core.first(seq__23925__$1);
var temp__5735__auto___23992__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___23992__$2)){
var spec_23993 = temp__5735__auto___23992__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23993)], 0));
} else {
}


var G__23994 = cljs.core.next(seq__23925__$1);
var G__23995 = null;
var G__23996 = (0);
var G__23997 = (0);
seq__23925 = G__23994;
chunk__23926 = G__23995;
count__23927 = G__23996;
i__23928 = G__23997;
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
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
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
var G__23998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23999 = cljs.core.ex_cause(t);
via = G__23998;
t = G__23999;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$via,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),cljs.core.cst$kw$trace,null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.cst$kw$clojure$error_SLASH_phase.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
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
var map__24002 = datafied_throwable;
var map__24002__$1 = cljs.core.__destructure_map(map__24002);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24002__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24002__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24002__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__24003 = cljs.core.last(via);
var map__24003__$1 = cljs.core.__destructure_map(map__24003);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24003__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24003__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24003__$1,cljs.core.cst$kw$data);
var map__24004 = data;
var map__24004__$1 = cljs.core.__destructure_map(map__24004);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24004__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24004__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24004__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__24005 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24005__$1 = cljs.core.__destructure_map(map__24005);
var top_data = map__24005__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24005__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24006 = phase;
var G__24006__$1 = (((G__24006 instanceof cljs.core.Keyword))?G__24006.fqn:null);
switch (G__24006__$1) {
case "read-source":
var map__24007 = data;
var map__24007__$1 = cljs.core.__destructure_map(map__24007);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24007__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24007__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__24008 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24008__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24008,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24008);
var G__24008__$2 = (cljs.core.truth_((function (){var fexpr__24009 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24009.cljs$core$IFn$_invoke$arity$1 ? fexpr__24009.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24009.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24008__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24008__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24008__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24008__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24010 = top_data;
var G__24010__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24010,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24010);
var G__24010__$2 = (cljs.core.truth_((function (){var fexpr__24011 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24011.cljs$core$IFn$_invoke$arity$1 ? fexpr__24011.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24011.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24010__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24010__$1);
var G__24010__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24010__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24010__$2);
var G__24010__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24010__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24010__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24010__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24010__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24012 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(3),null);
var G__24015 = top_data;
var G__24015__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24015,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__24015);
var G__24015__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24015__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__24015__$1);
var G__24015__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24015__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24015__$2);
var G__24015__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24015__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24015__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24015__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24015__$4;
}

break;
case "execution":
var vec__24016 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24001_SHARP_){
var or__4212__auto__ = (p1__24001_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__24019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24019.cljs$core$IFn$_invoke$arity$1 ? fexpr__24019.cljs$core$IFn$_invoke$arity$1(p1__24001_SHARP_) : fexpr__24019.call(null,p1__24001_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__24020 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__24020__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__24020);
var G__24020__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24020__$1);
var G__24020__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24020__$2);
var G__24020__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__24020__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24020__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24020__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24006__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24024){
var map__24025 = p__24024;
var map__24025__$1 = cljs.core.__destructure_map(map__24025);
var triage_data = map__24025__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__24026 = phase;
var G__24026__$1 = (((G__24026 instanceof cljs.core.Keyword))?G__24026.fqn:null);
switch (G__24026__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24027 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24028 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24029 = loc;
var G__24030 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24031_24064 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24032_24065 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24033_24066 = true;
var _STAR_print_fn_STAR__temp_val__24034_24067 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24033_24066);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24034_24067);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24022_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24022_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24032_24065);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24031_24064);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24027,G__24028,G__24029,G__24030) : format.call(null,G__24027,G__24028,G__24029,G__24030));

break;
case "macroexpansion":
var G__24035 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24036 = cause_type;
var G__24037 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24038 = loc;
var G__24039 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24035,G__24036,G__24037,G__24038,G__24039) : format.call(null,G__24035,G__24036,G__24037,G__24038,G__24039));

break;
case "compile-syntax-check":
var G__24040 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24041 = cause_type;
var G__24042 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24043 = loc;
var G__24044 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24040,G__24041,G__24042,G__24043,G__24044) : format.call(null,G__24040,G__24041,G__24042,G__24043,G__24044));

break;
case "compilation":
var G__24045 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24046 = cause_type;
var G__24047 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24048 = loc;
var G__24049 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24045,G__24046,G__24047,G__24048,G__24049) : format.call(null,G__24045,G__24046,G__24047,G__24048,G__24049));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24050 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24051 = symbol;
var G__24052 = loc;
var G__24053 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24054_24068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24055_24069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24056_24070 = true;
var _STAR_print_fn_STAR__temp_val__24057_24071 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24056_24070);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24057_24071);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24023_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24023_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24055_24069);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24054_24068);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24050,G__24051,G__24052,G__24053) : format.call(null,G__24050,G__24051,G__24052,G__24053));
} else {
var G__24058 = "Execution error%s at %s(%s).\n%s\n";
var G__24059 = cause_type;
var G__24060 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24061 = loc;
var G__24062 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24058,G__24059,G__24060,G__24061,G__24062) : format.call(null,G__24058,G__24059,G__24060,G__24061,G__24062));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24026__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
