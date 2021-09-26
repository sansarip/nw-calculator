// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26971){
var map__26972 = p__26971;
var map__26972__$1 = cljs.core.__destructure_map(map__26972);
var m = map__26972__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26972__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26972__$1,cljs.core.cst$kw$name);
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
var seq__26973_27001 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26974_27002 = null;
var count__26975_27003 = (0);
var i__26976_27004 = (0);
while(true){
if((i__26976_27004 < count__26975_27003)){
var f_27005 = chunk__26974_27002.cljs$core$IIndexed$_nth$arity$2(null,i__26976_27004);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27005], 0));


var G__27006 = seq__26973_27001;
var G__27007 = chunk__26974_27002;
var G__27008 = count__26975_27003;
var G__27009 = (i__26976_27004 + (1));
seq__26973_27001 = G__27006;
chunk__26974_27002 = G__27007;
count__26975_27003 = G__27008;
i__26976_27004 = G__27009;
continue;
} else {
var temp__5753__auto___27010 = cljs.core.seq(seq__26973_27001);
if(temp__5753__auto___27010){
var seq__26973_27011__$1 = temp__5753__auto___27010;
if(cljs.core.chunked_seq_QMARK_(seq__26973_27011__$1)){
var c__4638__auto___27012 = cljs.core.chunk_first(seq__26973_27011__$1);
var G__27013 = cljs.core.chunk_rest(seq__26973_27011__$1);
var G__27014 = c__4638__auto___27012;
var G__27015 = cljs.core.count(c__4638__auto___27012);
var G__27016 = (0);
seq__26973_27001 = G__27013;
chunk__26974_27002 = G__27014;
count__26975_27003 = G__27015;
i__26976_27004 = G__27016;
continue;
} else {
var f_27017 = cljs.core.first(seq__26973_27011__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27017], 0));


var G__27018 = cljs.core.next(seq__26973_27011__$1);
var G__27019 = null;
var G__27020 = (0);
var G__27021 = (0);
seq__26973_27001 = G__27018;
chunk__26974_27002 = G__27019;
count__26975_27003 = G__27020;
i__26976_27004 = G__27021;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27022 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27022], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_27022)))?cljs.core.second(arglists_27022):arglists_27022)], 0));
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
var seq__26977_27023 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26978_27024 = null;
var count__26979_27025 = (0);
var i__26980_27026 = (0);
while(true){
if((i__26980_27026 < count__26979_27025)){
var vec__26989_27027 = chunk__26978_27024.cljs$core$IIndexed$_nth$arity$2(null,i__26980_27026);
var name_27028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989_27027,(0),null);
var map__26992_27029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989_27027,(1),null);
var map__26992_27030__$1 = cljs.core.__destructure_map(map__26992_27029);
var doc_27031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26992_27030__$1,cljs.core.cst$kw$doc);
var arglists_27032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26992_27030__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27028], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27032], 0));

if(cljs.core.truth_(doc_27031)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27031], 0));
} else {
}


var G__27033 = seq__26977_27023;
var G__27034 = chunk__26978_27024;
var G__27035 = count__26979_27025;
var G__27036 = (i__26980_27026 + (1));
seq__26977_27023 = G__27033;
chunk__26978_27024 = G__27034;
count__26979_27025 = G__27035;
i__26980_27026 = G__27036;
continue;
} else {
var temp__5753__auto___27037 = cljs.core.seq(seq__26977_27023);
if(temp__5753__auto___27037){
var seq__26977_27038__$1 = temp__5753__auto___27037;
if(cljs.core.chunked_seq_QMARK_(seq__26977_27038__$1)){
var c__4638__auto___27039 = cljs.core.chunk_first(seq__26977_27038__$1);
var G__27040 = cljs.core.chunk_rest(seq__26977_27038__$1);
var G__27041 = c__4638__auto___27039;
var G__27042 = cljs.core.count(c__4638__auto___27039);
var G__27043 = (0);
seq__26977_27023 = G__27040;
chunk__26978_27024 = G__27041;
count__26979_27025 = G__27042;
i__26980_27026 = G__27043;
continue;
} else {
var vec__26993_27044 = cljs.core.first(seq__26977_27038__$1);
var name_27045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26993_27044,(0),null);
var map__26996_27046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26993_27044,(1),null);
var map__26996_27047__$1 = cljs.core.__destructure_map(map__26996_27046);
var doc_27048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26996_27047__$1,cljs.core.cst$kw$doc);
var arglists_27049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26996_27047__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27045], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27049], 0));

if(cljs.core.truth_(doc_27048)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27048], 0));
} else {
}


var G__27050 = cljs.core.next(seq__26977_27038__$1);
var G__27051 = null;
var G__27052 = (0);
var G__27053 = (0);
seq__26977_27023 = G__27050;
chunk__26978_27024 = G__27051;
count__26979_27025 = G__27052;
i__26980_27026 = G__27053;
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

var seq__26997 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__26998 = null;
var count__26999 = (0);
var i__27000 = (0);
while(true){
if((i__27000 < count__26999)){
var role = chunk__26998.cljs$core$IIndexed$_nth$arity$2(null,i__27000);
var temp__5753__auto___27054__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27054__$1)){
var spec_27055 = temp__5753__auto___27054__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27055)], 0));
} else {
}


var G__27056 = seq__26997;
var G__27057 = chunk__26998;
var G__27058 = count__26999;
var G__27059 = (i__27000 + (1));
seq__26997 = G__27056;
chunk__26998 = G__27057;
count__26999 = G__27058;
i__27000 = G__27059;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__26997);
if(temp__5753__auto____$1){
var seq__26997__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26997__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__26997__$1);
var G__27060 = cljs.core.chunk_rest(seq__26997__$1);
var G__27061 = c__4638__auto__;
var G__27062 = cljs.core.count(c__4638__auto__);
var G__27063 = (0);
seq__26997 = G__27060;
chunk__26998 = G__27061;
count__26999 = G__27062;
i__27000 = G__27063;
continue;
} else {
var role = cljs.core.first(seq__26997__$1);
var temp__5753__auto___27064__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27064__$2)){
var spec_27065 = temp__5753__auto___27064__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27065)], 0));
} else {
}


var G__27066 = cljs.core.next(seq__26997__$1);
var G__27067 = null;
var G__27068 = (0);
var G__27069 = (0);
seq__26997 = G__27066;
chunk__26998 = G__27067;
count__26999 = G__27068;
i__27000 = G__27069;
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
var G__27070 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27071 = cljs.core.ex_cause(t);
via = G__27070;
t = G__27071;
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
var map__27074 = datafied_throwable;
var map__27074__$1 = cljs.core.__destructure_map(map__27074);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27074__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27074__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27074__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__27075 = cljs.core.last(via);
var map__27075__$1 = cljs.core.__destructure_map(map__27075);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.cst$kw$data);
var map__27076 = data;
var map__27076__$1 = cljs.core.__destructure_map(map__27076);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__27077 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27077__$1 = cljs.core.__destructure_map(map__27077);
var top_data = map__27077__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27077__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27078 = phase;
var G__27078__$1 = (((G__27078 instanceof cljs.core.Keyword))?G__27078.fqn:null);
switch (G__27078__$1) {
case "read-source":
var map__27079 = data;
var map__27079__$1 = cljs.core.__destructure_map(map__27079);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27079__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27079__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__27080 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27080__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27080,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27080);
var G__27080__$2 = (cljs.core.truth_((function (){var fexpr__27081 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27081.cljs$core$IFn$_invoke$arity$1 ? fexpr__27081.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27081.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27080__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27080__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27080__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27080__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27082 = top_data;
var G__27082__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27082,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27082);
var G__27082__$2 = (cljs.core.truth_((function (){var fexpr__27083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27083.cljs$core$IFn$_invoke$arity$1 ? fexpr__27083.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27083.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27082__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27082__$1);
var G__27082__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27082__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27082__$2);
var G__27082__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27082__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27082__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27082__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27082__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27084 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27084,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27084,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27084,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27084,(3),null);
var G__27087 = top_data;
var G__27087__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__27087);
var G__27087__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__27087__$1);
var G__27087__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27087__$2);
var G__27087__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27087__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27087__$4;
}

break;
case "execution":
var vec__27088 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27073_SHARP_){
var or__4212__auto__ = (p1__27073_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__27091 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27091.cljs$core$IFn$_invoke$arity$1 ? fexpr__27091.cljs$core$IFn$_invoke$arity$1(p1__27073_SHARP_) : fexpr__27091.call(null,p1__27073_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__27092 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__27092__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27092,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__27092);
var G__27092__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27092__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27092__$1);
var G__27092__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27092__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27092__$2);
var G__27092__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27092__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__27092__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27092__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27092__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27078__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27096){
var map__27097 = p__27096;
var map__27097__$1 = cljs.core.__destructure_map(map__27097);
var triage_data = map__27097__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__27098 = phase;
var G__27098__$1 = (((G__27098 instanceof cljs.core.Keyword))?G__27098.fqn:null);
switch (G__27098__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27099 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27100 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27101 = loc;
var G__27102 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27103_27136 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27104_27137 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27105_27138 = true;
var _STAR_print_fn_STAR__temp_val__27106_27139 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27105_27138);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27106_27139);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27094_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27094_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27104_27137);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27103_27136);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27099,G__27100,G__27101,G__27102) : format.call(null,G__27099,G__27100,G__27101,G__27102));

break;
case "macroexpansion":
var G__27107 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27108 = cause_type;
var G__27109 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27110 = loc;
var G__27111 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27107,G__27108,G__27109,G__27110,G__27111) : format.call(null,G__27107,G__27108,G__27109,G__27110,G__27111));

break;
case "compile-syntax-check":
var G__27112 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27113 = cause_type;
var G__27114 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27115 = loc;
var G__27116 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27112,G__27113,G__27114,G__27115,G__27116) : format.call(null,G__27112,G__27113,G__27114,G__27115,G__27116));

break;
case "compilation":
var G__27117 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27118 = cause_type;
var G__27119 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27120 = loc;
var G__27121 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27117,G__27118,G__27119,G__27120,G__27121) : format.call(null,G__27117,G__27118,G__27119,G__27120,G__27121));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27122 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27123 = symbol;
var G__27124 = loc;
var G__27125 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27126_27140 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27127_27141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27128_27142 = true;
var _STAR_print_fn_STAR__temp_val__27129_27143 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27128_27142);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27129_27143);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27095_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27095_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27127_27141);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27126_27140);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27122,G__27123,G__27124,G__27125) : format.call(null,G__27122,G__27123,G__27124,G__27125));
} else {
var G__27130 = "Execution error%s at %s(%s).\n%s\n";
var G__27131 = cause_type;
var G__27132 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27133 = loc;
var G__27134 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27130,G__27131,G__27132,G__27133,G__27134) : format.call(null,G__27130,G__27131,G__27132,G__27133,G__27134));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27098__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
