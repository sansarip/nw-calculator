// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23895){
var map__23896 = p__23895;
var map__23896__$1 = cljs.core.__destructure_map(map__23896);
var m = map__23896__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23896__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23896__$1,cljs.core.cst$kw$name);
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
var seq__23897_23925 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23898_23926 = null;
var count__23899_23927 = (0);
var i__23900_23928 = (0);
while(true){
if((i__23900_23928 < count__23899_23927)){
var f_23929 = chunk__23898_23926.cljs$core$IIndexed$_nth$arity$2(null,i__23900_23928);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23929], 0));


var G__23930 = seq__23897_23925;
var G__23931 = chunk__23898_23926;
var G__23932 = count__23899_23927;
var G__23933 = (i__23900_23928 + (1));
seq__23897_23925 = G__23930;
chunk__23898_23926 = G__23931;
count__23899_23927 = G__23932;
i__23900_23928 = G__23933;
continue;
} else {
var temp__5735__auto___23934 = cljs.core.seq(seq__23897_23925);
if(temp__5735__auto___23934){
var seq__23897_23935__$1 = temp__5735__auto___23934;
if(cljs.core.chunked_seq_QMARK_(seq__23897_23935__$1)){
var c__4638__auto___23936 = cljs.core.chunk_first(seq__23897_23935__$1);
var G__23937 = cljs.core.chunk_rest(seq__23897_23935__$1);
var G__23938 = c__4638__auto___23936;
var G__23939 = cljs.core.count(c__4638__auto___23936);
var G__23940 = (0);
seq__23897_23925 = G__23937;
chunk__23898_23926 = G__23938;
count__23899_23927 = G__23939;
i__23900_23928 = G__23940;
continue;
} else {
var f_23941 = cljs.core.first(seq__23897_23935__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23941], 0));


var G__23942 = cljs.core.next(seq__23897_23935__$1);
var G__23943 = null;
var G__23944 = (0);
var G__23945 = (0);
seq__23897_23925 = G__23942;
chunk__23898_23926 = G__23943;
count__23899_23927 = G__23944;
i__23900_23928 = G__23945;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23946 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23946], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_23946)))?cljs.core.second(arglists_23946):arglists_23946)], 0));
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
var seq__23901_23947 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23902_23948 = null;
var count__23903_23949 = (0);
var i__23904_23950 = (0);
while(true){
if((i__23904_23950 < count__23903_23949)){
var vec__23913_23951 = chunk__23902_23948.cljs$core$IIndexed$_nth$arity$2(null,i__23904_23950);
var name_23952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23913_23951,(0),null);
var map__23916_23953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23913_23951,(1),null);
var map__23916_23954__$1 = cljs.core.__destructure_map(map__23916_23953);
var doc_23955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23916_23954__$1,cljs.core.cst$kw$doc);
var arglists_23956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23916_23954__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23952], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23956], 0));

if(cljs.core.truth_(doc_23955)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23955], 0));
} else {
}


var G__23957 = seq__23901_23947;
var G__23958 = chunk__23902_23948;
var G__23959 = count__23903_23949;
var G__23960 = (i__23904_23950 + (1));
seq__23901_23947 = G__23957;
chunk__23902_23948 = G__23958;
count__23903_23949 = G__23959;
i__23904_23950 = G__23960;
continue;
} else {
var temp__5735__auto___23961 = cljs.core.seq(seq__23901_23947);
if(temp__5735__auto___23961){
var seq__23901_23962__$1 = temp__5735__auto___23961;
if(cljs.core.chunked_seq_QMARK_(seq__23901_23962__$1)){
var c__4638__auto___23963 = cljs.core.chunk_first(seq__23901_23962__$1);
var G__23964 = cljs.core.chunk_rest(seq__23901_23962__$1);
var G__23965 = c__4638__auto___23963;
var G__23966 = cljs.core.count(c__4638__auto___23963);
var G__23967 = (0);
seq__23901_23947 = G__23964;
chunk__23902_23948 = G__23965;
count__23903_23949 = G__23966;
i__23904_23950 = G__23967;
continue;
} else {
var vec__23917_23968 = cljs.core.first(seq__23901_23962__$1);
var name_23969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917_23968,(0),null);
var map__23920_23970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917_23968,(1),null);
var map__23920_23971__$1 = cljs.core.__destructure_map(map__23920_23970);
var doc_23972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23920_23971__$1,cljs.core.cst$kw$doc);
var arglists_23973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23920_23971__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23969], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23973], 0));

if(cljs.core.truth_(doc_23972)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23972], 0));
} else {
}


var G__23974 = cljs.core.next(seq__23901_23962__$1);
var G__23975 = null;
var G__23976 = (0);
var G__23977 = (0);
seq__23901_23947 = G__23974;
chunk__23902_23948 = G__23975;
count__23903_23949 = G__23976;
i__23904_23950 = G__23977;
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

var seq__23921 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__23922 = null;
var count__23923 = (0);
var i__23924 = (0);
while(true){
if((i__23924 < count__23923)){
var role = chunk__23922.cljs$core$IIndexed$_nth$arity$2(null,i__23924);
var temp__5735__auto___23978__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___23978__$1)){
var spec_23979 = temp__5735__auto___23978__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23979)], 0));
} else {
}


var G__23980 = seq__23921;
var G__23981 = chunk__23922;
var G__23982 = count__23923;
var G__23983 = (i__23924 + (1));
seq__23921 = G__23980;
chunk__23922 = G__23981;
count__23923 = G__23982;
i__23924 = G__23983;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__23921);
if(temp__5735__auto____$1){
var seq__23921__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23921__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__23921__$1);
var G__23984 = cljs.core.chunk_rest(seq__23921__$1);
var G__23985 = c__4638__auto__;
var G__23986 = cljs.core.count(c__4638__auto__);
var G__23987 = (0);
seq__23921 = G__23984;
chunk__23922 = G__23985;
count__23923 = G__23986;
i__23924 = G__23987;
continue;
} else {
var role = cljs.core.first(seq__23921__$1);
var temp__5735__auto___23988__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___23988__$2)){
var spec_23989 = temp__5735__auto___23988__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23989)], 0));
} else {
}


var G__23990 = cljs.core.next(seq__23921__$1);
var G__23991 = null;
var G__23992 = (0);
var G__23993 = (0);
seq__23921 = G__23990;
chunk__23922 = G__23991;
count__23923 = G__23992;
i__23924 = G__23993;
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
var G__23994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23995 = cljs.core.ex_cause(t);
via = G__23994;
t = G__23995;
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
var map__23998 = datafied_throwable;
var map__23998__$1 = cljs.core.__destructure_map(map__23998);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23998__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23998__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23998__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__23999 = cljs.core.last(via);
var map__23999__$1 = cljs.core.__destructure_map(map__23999);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23999__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23999__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23999__$1,cljs.core.cst$kw$data);
var map__24000 = data;
var map__24000__$1 = cljs.core.__destructure_map(map__24000);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24000__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24000__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24000__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__24001 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24001__$1 = cljs.core.__destructure_map(map__24001);
var top_data = map__24001__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24001__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24002 = phase;
var G__24002__$1 = (((G__24002 instanceof cljs.core.Keyword))?G__24002.fqn:null);
switch (G__24002__$1) {
case "read-source":
var map__24003 = data;
var map__24003__$1 = cljs.core.__destructure_map(map__24003);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24003__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24003__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__24004 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24004__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24004,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24004);
var G__24004__$2 = (cljs.core.truth_((function (){var fexpr__24005 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24005.cljs$core$IFn$_invoke$arity$1 ? fexpr__24005.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24005.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24004__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24004__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24004__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24004__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24006 = top_data;
var G__24006__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24006,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24006);
var G__24006__$2 = (cljs.core.truth_((function (){var fexpr__24007 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24007.cljs$core$IFn$_invoke$arity$1 ? fexpr__24007.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24007.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24006__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24006__$1);
var G__24006__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24006__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24006__$2);
var G__24006__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24006__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24006__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24006__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24006__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24008 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008,(3),null);
var G__24011 = top_data;
var G__24011__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24011,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__24011);
var G__24011__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24011__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__24011__$1);
var G__24011__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24011__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24011__$2);
var G__24011__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24011__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24011__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24011__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24011__$4;
}

break;
case "execution":
var vec__24012 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24012,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23997_SHARP_){
var or__4212__auto__ = (p1__23997_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__24015 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24015.cljs$core$IFn$_invoke$arity$1 ? fexpr__24015.cljs$core$IFn$_invoke$arity$1(p1__23997_SHARP_) : fexpr__24015.call(null,p1__23997_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__24016 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__24016__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24016,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__24016);
var G__24016__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24016__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24016__$1);
var G__24016__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24016__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24016__$2);
var G__24016__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24016__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__24016__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24016__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24016__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24002__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24020){
var map__24021 = p__24020;
var map__24021__$1 = cljs.core.__destructure_map(map__24021);
var triage_data = map__24021__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__24022 = phase;
var G__24022__$1 = (((G__24022 instanceof cljs.core.Keyword))?G__24022.fqn:null);
switch (G__24022__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24023 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24024 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24025 = loc;
var G__24026 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24027_24060 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24028_24061 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24029_24062 = true;
var _STAR_print_fn_STAR__temp_val__24030_24063 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24029_24062);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24030_24063);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24018_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24018_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24028_24061);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24027_24060);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24023,G__24024,G__24025,G__24026) : format.call(null,G__24023,G__24024,G__24025,G__24026));

break;
case "macroexpansion":
var G__24031 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24032 = cause_type;
var G__24033 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24034 = loc;
var G__24035 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24031,G__24032,G__24033,G__24034,G__24035) : format.call(null,G__24031,G__24032,G__24033,G__24034,G__24035));

break;
case "compile-syntax-check":
var G__24036 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24037 = cause_type;
var G__24038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24039 = loc;
var G__24040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24036,G__24037,G__24038,G__24039,G__24040) : format.call(null,G__24036,G__24037,G__24038,G__24039,G__24040));

break;
case "compilation":
var G__24041 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24042 = cause_type;
var G__24043 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24044 = loc;
var G__24045 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24041,G__24042,G__24043,G__24044,G__24045) : format.call(null,G__24041,G__24042,G__24043,G__24044,G__24045));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24046 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24047 = symbol;
var G__24048 = loc;
var G__24049 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24050_24064 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24051_24065 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24052_24066 = true;
var _STAR_print_fn_STAR__temp_val__24053_24067 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24052_24066);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24053_24067);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24019_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24019_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24051_24065);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24050_24064);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24046,G__24047,G__24048,G__24049) : format.call(null,G__24046,G__24047,G__24048,G__24049));
} else {
var G__24054 = "Execution error%s at %s(%s).\n%s\n";
var G__24055 = cause_type;
var G__24056 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24057 = loc;
var G__24058 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24054,G__24055,G__24056,G__24057,G__24058) : format.call(null,G__24054,G__24055,G__24056,G__24057,G__24058));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24022__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
