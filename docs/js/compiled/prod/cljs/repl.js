// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23902){
var map__23903 = p__23902;
var map__23903__$1 = cljs.core.__destructure_map(map__23903);
var m = map__23903__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23903__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23903__$1,cljs.core.cst$kw$name);
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
var seq__23904_23932 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23905_23933 = null;
var count__23906_23934 = (0);
var i__23907_23935 = (0);
while(true){
if((i__23907_23935 < count__23906_23934)){
var f_23936 = chunk__23905_23933.cljs$core$IIndexed$_nth$arity$2(null,i__23907_23935);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23936], 0));


var G__23937 = seq__23904_23932;
var G__23938 = chunk__23905_23933;
var G__23939 = count__23906_23934;
var G__23940 = (i__23907_23935 + (1));
seq__23904_23932 = G__23937;
chunk__23905_23933 = G__23938;
count__23906_23934 = G__23939;
i__23907_23935 = G__23940;
continue;
} else {
var temp__5753__auto___23941 = cljs.core.seq(seq__23904_23932);
if(temp__5753__auto___23941){
var seq__23904_23942__$1 = temp__5753__auto___23941;
if(cljs.core.chunked_seq_QMARK_(seq__23904_23942__$1)){
var c__4638__auto___23943 = cljs.core.chunk_first(seq__23904_23942__$1);
var G__23944 = cljs.core.chunk_rest(seq__23904_23942__$1);
var G__23945 = c__4638__auto___23943;
var G__23946 = cljs.core.count(c__4638__auto___23943);
var G__23947 = (0);
seq__23904_23932 = G__23944;
chunk__23905_23933 = G__23945;
count__23906_23934 = G__23946;
i__23907_23935 = G__23947;
continue;
} else {
var f_23948 = cljs.core.first(seq__23904_23942__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23948], 0));


var G__23949 = cljs.core.next(seq__23904_23942__$1);
var G__23950 = null;
var G__23951 = (0);
var G__23952 = (0);
seq__23904_23932 = G__23949;
chunk__23905_23933 = G__23950;
count__23906_23934 = G__23951;
i__23907_23935 = G__23952;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23953 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23953], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_23953)))?cljs.core.second(arglists_23953):arglists_23953)], 0));
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
var seq__23908_23954 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23909_23955 = null;
var count__23910_23956 = (0);
var i__23911_23957 = (0);
while(true){
if((i__23911_23957 < count__23910_23956)){
var vec__23920_23958 = chunk__23909_23955.cljs$core$IIndexed$_nth$arity$2(null,i__23911_23957);
var name_23959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920_23958,(0),null);
var map__23923_23960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920_23958,(1),null);
var map__23923_23961__$1 = cljs.core.__destructure_map(map__23923_23960);
var doc_23962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23923_23961__$1,cljs.core.cst$kw$doc);
var arglists_23963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23923_23961__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23959], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23963], 0));

if(cljs.core.truth_(doc_23962)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23962], 0));
} else {
}


var G__23964 = seq__23908_23954;
var G__23965 = chunk__23909_23955;
var G__23966 = count__23910_23956;
var G__23967 = (i__23911_23957 + (1));
seq__23908_23954 = G__23964;
chunk__23909_23955 = G__23965;
count__23910_23956 = G__23966;
i__23911_23957 = G__23967;
continue;
} else {
var temp__5753__auto___23968 = cljs.core.seq(seq__23908_23954);
if(temp__5753__auto___23968){
var seq__23908_23969__$1 = temp__5753__auto___23968;
if(cljs.core.chunked_seq_QMARK_(seq__23908_23969__$1)){
var c__4638__auto___23970 = cljs.core.chunk_first(seq__23908_23969__$1);
var G__23971 = cljs.core.chunk_rest(seq__23908_23969__$1);
var G__23972 = c__4638__auto___23970;
var G__23973 = cljs.core.count(c__4638__auto___23970);
var G__23974 = (0);
seq__23908_23954 = G__23971;
chunk__23909_23955 = G__23972;
count__23910_23956 = G__23973;
i__23911_23957 = G__23974;
continue;
} else {
var vec__23924_23975 = cljs.core.first(seq__23908_23969__$1);
var name_23976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23924_23975,(0),null);
var map__23927_23977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23924_23975,(1),null);
var map__23927_23978__$1 = cljs.core.__destructure_map(map__23927_23977);
var doc_23979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23927_23978__$1,cljs.core.cst$kw$doc);
var arglists_23980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23927_23978__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23976], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23980], 0));

if(cljs.core.truth_(doc_23979)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23979], 0));
} else {
}


var G__23981 = cljs.core.next(seq__23908_23969__$1);
var G__23982 = null;
var G__23983 = (0);
var G__23984 = (0);
seq__23908_23954 = G__23981;
chunk__23909_23955 = G__23982;
count__23910_23956 = G__23983;
i__23911_23957 = G__23984;
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

var seq__23928 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__23929 = null;
var count__23930 = (0);
var i__23931 = (0);
while(true){
if((i__23931 < count__23930)){
var role = chunk__23929.cljs$core$IIndexed$_nth$arity$2(null,i__23931);
var temp__5753__auto___23985__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___23985__$1)){
var spec_23986 = temp__5753__auto___23985__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23986)], 0));
} else {
}


var G__23987 = seq__23928;
var G__23988 = chunk__23929;
var G__23989 = count__23930;
var G__23990 = (i__23931 + (1));
seq__23928 = G__23987;
chunk__23929 = G__23988;
count__23930 = G__23989;
i__23931 = G__23990;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__23928);
if(temp__5753__auto____$1){
var seq__23928__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23928__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__23928__$1);
var G__23991 = cljs.core.chunk_rest(seq__23928__$1);
var G__23992 = c__4638__auto__;
var G__23993 = cljs.core.count(c__4638__auto__);
var G__23994 = (0);
seq__23928 = G__23991;
chunk__23929 = G__23992;
count__23930 = G__23993;
i__23931 = G__23994;
continue;
} else {
var role = cljs.core.first(seq__23928__$1);
var temp__5753__auto___23995__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___23995__$2)){
var spec_23996 = temp__5753__auto___23995__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23996)], 0));
} else {
}


var G__23997 = cljs.core.next(seq__23928__$1);
var G__23998 = null;
var G__23999 = (0);
var G__24000 = (0);
seq__23928 = G__23997;
chunk__23929 = G__23998;
count__23930 = G__23999;
i__23931 = G__24000;
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
var G__24001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24002 = cljs.core.ex_cause(t);
via = G__24001;
t = G__24002;
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
var map__24005 = datafied_throwable;
var map__24005__$1 = cljs.core.__destructure_map(map__24005);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24005__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24005__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24005__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__24006 = cljs.core.last(via);
var map__24006__$1 = cljs.core.__destructure_map(map__24006);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006__$1,cljs.core.cst$kw$data);
var map__24007 = data;
var map__24007__$1 = cljs.core.__destructure_map(map__24007);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24007__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24007__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24007__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__24008 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24008__$1 = cljs.core.__destructure_map(map__24008);
var top_data = map__24008__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24008__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24009 = phase;
var G__24009__$1 = (((G__24009 instanceof cljs.core.Keyword))?G__24009.fqn:null);
switch (G__24009__$1) {
case "read-source":
var map__24010 = data;
var map__24010__$1 = cljs.core.__destructure_map(map__24010);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24010__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24010__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__24011 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24011__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24011,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24011);
var G__24011__$2 = (cljs.core.truth_((function (){var fexpr__24012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24012.cljs$core$IFn$_invoke$arity$1 ? fexpr__24012.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24012.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24011__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24011__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24011__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24011__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24013 = top_data;
var G__24013__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24013,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24013);
var G__24013__$2 = (cljs.core.truth_((function (){var fexpr__24014 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24014.cljs$core$IFn$_invoke$arity$1 ? fexpr__24014.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24014.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24013__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24013__$1);
var G__24013__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24013__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24013__$2);
var G__24013__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24013__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24013__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24013__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24013__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24015 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(3),null);
var G__24018 = top_data;
var G__24018__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24018,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__24018);
var G__24018__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24018__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__24018__$1);
var G__24018__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24018__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24018__$2);
var G__24018__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24018__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24018__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24018__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24018__$4;
}

break;
case "execution":
var vec__24019 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24019,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24019,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24019,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24019,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24004_SHARP_){
var or__4212__auto__ = (p1__24004_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__24022 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24022.cljs$core$IFn$_invoke$arity$1 ? fexpr__24022.cljs$core$IFn$_invoke$arity$1(p1__24004_SHARP_) : fexpr__24022.call(null,p1__24004_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__24023 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__24023__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24023,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__24023);
var G__24023__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24023__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24023__$1);
var G__24023__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24023__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24023__$2);
var G__24023__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24023__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__24023__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24023__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24023__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24009__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24027){
var map__24028 = p__24027;
var map__24028__$1 = cljs.core.__destructure_map(map__24028);
var triage_data = map__24028__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__24029 = phase;
var G__24029__$1 = (((G__24029 instanceof cljs.core.Keyword))?G__24029.fqn:null);
switch (G__24029__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24030 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24031 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24032 = loc;
var G__24033 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24034_24067 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24035_24068 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24036_24069 = true;
var _STAR_print_fn_STAR__temp_val__24037_24070 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24036_24069);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24037_24070);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24025_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24025_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24035_24068);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24034_24067);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24030,G__24031,G__24032,G__24033) : format.call(null,G__24030,G__24031,G__24032,G__24033));

break;
case "macroexpansion":
var G__24038 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24039 = cause_type;
var G__24040 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24041 = loc;
var G__24042 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24038,G__24039,G__24040,G__24041,G__24042) : format.call(null,G__24038,G__24039,G__24040,G__24041,G__24042));

break;
case "compile-syntax-check":
var G__24043 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24044 = cause_type;
var G__24045 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24046 = loc;
var G__24047 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24043,G__24044,G__24045,G__24046,G__24047) : format.call(null,G__24043,G__24044,G__24045,G__24046,G__24047));

break;
case "compilation":
var G__24048 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24049 = cause_type;
var G__24050 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24051 = loc;
var G__24052 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24048,G__24049,G__24050,G__24051,G__24052) : format.call(null,G__24048,G__24049,G__24050,G__24051,G__24052));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24053 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24054 = symbol;
var G__24055 = loc;
var G__24056 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24057_24071 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24058_24072 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24059_24073 = true;
var _STAR_print_fn_STAR__temp_val__24060_24074 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24059_24073);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24060_24074);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24026_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24026_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24058_24072);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24057_24071);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24053,G__24054,G__24055,G__24056) : format.call(null,G__24053,G__24054,G__24055,G__24056));
} else {
var G__24061 = "Execution error%s at %s(%s).\n%s\n";
var G__24062 = cause_type;
var G__24063 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24064 = loc;
var G__24065 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24061,G__24062,G__24063,G__24064,G__24065) : format.call(null,G__24061,G__24062,G__24063,G__24064,G__24065));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24029__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
