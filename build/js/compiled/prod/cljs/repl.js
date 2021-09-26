// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26969){
var map__26970 = p__26969;
var map__26970__$1 = cljs.core.__destructure_map(map__26970);
var m = map__26970__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$name);
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
var seq__26971_26999 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26972_27000 = null;
var count__26973_27001 = (0);
var i__26974_27002 = (0);
while(true){
if((i__26974_27002 < count__26973_27001)){
var f_27003 = chunk__26972_27000.cljs$core$IIndexed$_nth$arity$2(null,i__26974_27002);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27003], 0));


var G__27004 = seq__26971_26999;
var G__27005 = chunk__26972_27000;
var G__27006 = count__26973_27001;
var G__27007 = (i__26974_27002 + (1));
seq__26971_26999 = G__27004;
chunk__26972_27000 = G__27005;
count__26973_27001 = G__27006;
i__26974_27002 = G__27007;
continue;
} else {
var temp__5753__auto___27008 = cljs.core.seq(seq__26971_26999);
if(temp__5753__auto___27008){
var seq__26971_27009__$1 = temp__5753__auto___27008;
if(cljs.core.chunked_seq_QMARK_(seq__26971_27009__$1)){
var c__4638__auto___27010 = cljs.core.chunk_first(seq__26971_27009__$1);
var G__27011 = cljs.core.chunk_rest(seq__26971_27009__$1);
var G__27012 = c__4638__auto___27010;
var G__27013 = cljs.core.count(c__4638__auto___27010);
var G__27014 = (0);
seq__26971_26999 = G__27011;
chunk__26972_27000 = G__27012;
count__26973_27001 = G__27013;
i__26974_27002 = G__27014;
continue;
} else {
var f_27015 = cljs.core.first(seq__26971_27009__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27015], 0));


var G__27016 = cljs.core.next(seq__26971_27009__$1);
var G__27017 = null;
var G__27018 = (0);
var G__27019 = (0);
seq__26971_26999 = G__27016;
chunk__26972_27000 = G__27017;
count__26973_27001 = G__27018;
i__26974_27002 = G__27019;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27020 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27020], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_27020)))?cljs.core.second(arglists_27020):arglists_27020)], 0));
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
var seq__26975_27021 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26976_27022 = null;
var count__26977_27023 = (0);
var i__26978_27024 = (0);
while(true){
if((i__26978_27024 < count__26977_27023)){
var vec__26987_27025 = chunk__26976_27022.cljs$core$IIndexed$_nth$arity$2(null,i__26978_27024);
var name_27026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987_27025,(0),null);
var map__26990_27027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987_27025,(1),null);
var map__26990_27028__$1 = cljs.core.__destructure_map(map__26990_27027);
var doc_27029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990_27028__$1,cljs.core.cst$kw$doc);
var arglists_27030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990_27028__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27026], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27030], 0));

if(cljs.core.truth_(doc_27029)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27029], 0));
} else {
}


var G__27031 = seq__26975_27021;
var G__27032 = chunk__26976_27022;
var G__27033 = count__26977_27023;
var G__27034 = (i__26978_27024 + (1));
seq__26975_27021 = G__27031;
chunk__26976_27022 = G__27032;
count__26977_27023 = G__27033;
i__26978_27024 = G__27034;
continue;
} else {
var temp__5753__auto___27035 = cljs.core.seq(seq__26975_27021);
if(temp__5753__auto___27035){
var seq__26975_27036__$1 = temp__5753__auto___27035;
if(cljs.core.chunked_seq_QMARK_(seq__26975_27036__$1)){
var c__4638__auto___27037 = cljs.core.chunk_first(seq__26975_27036__$1);
var G__27038 = cljs.core.chunk_rest(seq__26975_27036__$1);
var G__27039 = c__4638__auto___27037;
var G__27040 = cljs.core.count(c__4638__auto___27037);
var G__27041 = (0);
seq__26975_27021 = G__27038;
chunk__26976_27022 = G__27039;
count__26977_27023 = G__27040;
i__26978_27024 = G__27041;
continue;
} else {
var vec__26991_27042 = cljs.core.first(seq__26975_27036__$1);
var name_27043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26991_27042,(0),null);
var map__26994_27044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26991_27042,(1),null);
var map__26994_27045__$1 = cljs.core.__destructure_map(map__26994_27044);
var doc_27046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26994_27045__$1,cljs.core.cst$kw$doc);
var arglists_27047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26994_27045__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27043], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27047], 0));

if(cljs.core.truth_(doc_27046)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27046], 0));
} else {
}


var G__27048 = cljs.core.next(seq__26975_27036__$1);
var G__27049 = null;
var G__27050 = (0);
var G__27051 = (0);
seq__26975_27021 = G__27048;
chunk__26976_27022 = G__27049;
count__26977_27023 = G__27050;
i__26978_27024 = G__27051;
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

var seq__26995 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__26996 = null;
var count__26997 = (0);
var i__26998 = (0);
while(true){
if((i__26998 < count__26997)){
var role = chunk__26996.cljs$core$IIndexed$_nth$arity$2(null,i__26998);
var temp__5753__auto___27052__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27052__$1)){
var spec_27053 = temp__5753__auto___27052__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27053)], 0));
} else {
}


var G__27054 = seq__26995;
var G__27055 = chunk__26996;
var G__27056 = count__26997;
var G__27057 = (i__26998 + (1));
seq__26995 = G__27054;
chunk__26996 = G__27055;
count__26997 = G__27056;
i__26998 = G__27057;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__26995);
if(temp__5753__auto____$1){
var seq__26995__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26995__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__26995__$1);
var G__27058 = cljs.core.chunk_rest(seq__26995__$1);
var G__27059 = c__4638__auto__;
var G__27060 = cljs.core.count(c__4638__auto__);
var G__27061 = (0);
seq__26995 = G__27058;
chunk__26996 = G__27059;
count__26997 = G__27060;
i__26998 = G__27061;
continue;
} else {
var role = cljs.core.first(seq__26995__$1);
var temp__5753__auto___27062__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27062__$2)){
var spec_27063 = temp__5753__auto___27062__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27063)], 0));
} else {
}


var G__27064 = cljs.core.next(seq__26995__$1);
var G__27065 = null;
var G__27066 = (0);
var G__27067 = (0);
seq__26995 = G__27064;
chunk__26996 = G__27065;
count__26997 = G__27066;
i__26998 = G__27067;
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
var G__27068 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27069 = cljs.core.ex_cause(t);
via = G__27068;
t = G__27069;
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
var map__27072 = datafied_throwable;
var map__27072__$1 = cljs.core.__destructure_map(map__27072);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27072__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27072__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27072__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__27073 = cljs.core.last(via);
var map__27073__$1 = cljs.core.__destructure_map(map__27073);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27073__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27073__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27073__$1,cljs.core.cst$kw$data);
var map__27074 = data;
var map__27074__$1 = cljs.core.__destructure_map(map__27074);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27074__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27074__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27074__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__27075 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27075__$1 = cljs.core.__destructure_map(map__27075);
var top_data = map__27075__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27076 = phase;
var G__27076__$1 = (((G__27076 instanceof cljs.core.Keyword))?G__27076.fqn:null);
switch (G__27076__$1) {
case "read-source":
var map__27077 = data;
var map__27077__$1 = cljs.core.__destructure_map(map__27077);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27077__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27077__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__27078 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27078__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27078,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27078);
var G__27078__$2 = (cljs.core.truth_((function (){var fexpr__27079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27079.cljs$core$IFn$_invoke$arity$1 ? fexpr__27079.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27079.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27078__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27078__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27078__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27078__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27080 = top_data;
var G__27080__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27080,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27080);
var G__27080__$2 = (cljs.core.truth_((function (){var fexpr__27081 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27081.cljs$core$IFn$_invoke$arity$1 ? fexpr__27081.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27081.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27080__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27080__$1);
var G__27080__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27080__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27080__$2);
var G__27080__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27080__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27080__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27080__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27080__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27082 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27082,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27082,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27082,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27082,(3),null);
var G__27085 = top_data;
var G__27085__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27085,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__27085);
var G__27085__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27085__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__27085__$1);
var G__27085__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27085__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27085__$2);
var G__27085__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27085__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27085__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27085__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27085__$4;
}

break;
case "execution":
var vec__27086 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27086,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27086,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27086,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27086,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27071_SHARP_){
var or__4212__auto__ = (p1__27071_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__27089 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27089.cljs$core$IFn$_invoke$arity$1 ? fexpr__27089.cljs$core$IFn$_invoke$arity$1(p1__27071_SHARP_) : fexpr__27089.call(null,p1__27071_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__27090 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__27090__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27090,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__27090);
var G__27090__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27090__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27090__$1);
var G__27090__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27090__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27090__$2);
var G__27090__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27090__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__27090__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27090__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27090__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27076__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27094){
var map__27095 = p__27094;
var map__27095__$1 = cljs.core.__destructure_map(map__27095);
var triage_data = map__27095__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__27096 = phase;
var G__27096__$1 = (((G__27096 instanceof cljs.core.Keyword))?G__27096.fqn:null);
switch (G__27096__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27097 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27098 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27099 = loc;
var G__27100 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27101_27134 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27102_27135 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27103_27136 = true;
var _STAR_print_fn_STAR__temp_val__27104_27137 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27103_27136);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27104_27137);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27092_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27092_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27102_27135);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27101_27134);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27097,G__27098,G__27099,G__27100) : format.call(null,G__27097,G__27098,G__27099,G__27100));

break;
case "macroexpansion":
var G__27105 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27106 = cause_type;
var G__27107 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27108 = loc;
var G__27109 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27105,G__27106,G__27107,G__27108,G__27109) : format.call(null,G__27105,G__27106,G__27107,G__27108,G__27109));

break;
case "compile-syntax-check":
var G__27110 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27111 = cause_type;
var G__27112 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27113 = loc;
var G__27114 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27110,G__27111,G__27112,G__27113,G__27114) : format.call(null,G__27110,G__27111,G__27112,G__27113,G__27114));

break;
case "compilation":
var G__27115 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27116 = cause_type;
var G__27117 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27118 = loc;
var G__27119 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27115,G__27116,G__27117,G__27118,G__27119) : format.call(null,G__27115,G__27116,G__27117,G__27118,G__27119));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27120 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27121 = symbol;
var G__27122 = loc;
var G__27123 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27124_27138 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27125_27139 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27126_27140 = true;
var _STAR_print_fn_STAR__temp_val__27127_27141 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27126_27140);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27127_27141);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27093_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27093_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27125_27139);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27124_27138);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27120,G__27121,G__27122,G__27123) : format.call(null,G__27120,G__27121,G__27122,G__27123));
} else {
var G__27128 = "Execution error%s at %s(%s).\n%s\n";
var G__27129 = cause_type;
var G__27130 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27131 = loc;
var G__27132 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27128,G__27129,G__27130,G__27131,G__27132) : format.call(null,G__27128,G__27129,G__27130,G__27131,G__27132));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27096__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
