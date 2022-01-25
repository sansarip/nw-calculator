// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26978){
var map__26979 = p__26978;
var map__26979__$1 = cljs.core.__destructure_map(map__26979);
var m = map__26979__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26979__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26979__$1,cljs.core.cst$kw$name);
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
var seq__26980_27008 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26981_27009 = null;
var count__26982_27010 = (0);
var i__26983_27011 = (0);
while(true){
if((i__26983_27011 < count__26982_27010)){
var f_27012 = chunk__26981_27009.cljs$core$IIndexed$_nth$arity$2(null,i__26983_27011);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27012], 0));


var G__27013 = seq__26980_27008;
var G__27014 = chunk__26981_27009;
var G__27015 = count__26982_27010;
var G__27016 = (i__26983_27011 + (1));
seq__26980_27008 = G__27013;
chunk__26981_27009 = G__27014;
count__26982_27010 = G__27015;
i__26983_27011 = G__27016;
continue;
} else {
var temp__5753__auto___27017 = cljs.core.seq(seq__26980_27008);
if(temp__5753__auto___27017){
var seq__26980_27018__$1 = temp__5753__auto___27017;
if(cljs.core.chunked_seq_QMARK_(seq__26980_27018__$1)){
var c__4638__auto___27019 = cljs.core.chunk_first(seq__26980_27018__$1);
var G__27020 = cljs.core.chunk_rest(seq__26980_27018__$1);
var G__27021 = c__4638__auto___27019;
var G__27022 = cljs.core.count(c__4638__auto___27019);
var G__27023 = (0);
seq__26980_27008 = G__27020;
chunk__26981_27009 = G__27021;
count__26982_27010 = G__27022;
i__26983_27011 = G__27023;
continue;
} else {
var f_27024 = cljs.core.first(seq__26980_27018__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27024], 0));


var G__27025 = cljs.core.next(seq__26980_27018__$1);
var G__27026 = null;
var G__27027 = (0);
var G__27028 = (0);
seq__26980_27008 = G__27025;
chunk__26981_27009 = G__27026;
count__26982_27010 = G__27027;
i__26983_27011 = G__27028;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27029 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27029], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_27029)))?cljs.core.second(arglists_27029):arglists_27029)], 0));
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
var seq__26984_27030 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26985_27031 = null;
var count__26986_27032 = (0);
var i__26987_27033 = (0);
while(true){
if((i__26987_27033 < count__26986_27032)){
var vec__26996_27034 = chunk__26985_27031.cljs$core$IIndexed$_nth$arity$2(null,i__26987_27033);
var name_27035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26996_27034,(0),null);
var map__26999_27036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26996_27034,(1),null);
var map__26999_27037__$1 = cljs.core.__destructure_map(map__26999_27036);
var doc_27038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999_27037__$1,cljs.core.cst$kw$doc);
var arglists_27039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999_27037__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27035], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27039], 0));

if(cljs.core.truth_(doc_27038)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27038], 0));
} else {
}


var G__27040 = seq__26984_27030;
var G__27041 = chunk__26985_27031;
var G__27042 = count__26986_27032;
var G__27043 = (i__26987_27033 + (1));
seq__26984_27030 = G__27040;
chunk__26985_27031 = G__27041;
count__26986_27032 = G__27042;
i__26987_27033 = G__27043;
continue;
} else {
var temp__5753__auto___27044 = cljs.core.seq(seq__26984_27030);
if(temp__5753__auto___27044){
var seq__26984_27045__$1 = temp__5753__auto___27044;
if(cljs.core.chunked_seq_QMARK_(seq__26984_27045__$1)){
var c__4638__auto___27046 = cljs.core.chunk_first(seq__26984_27045__$1);
var G__27047 = cljs.core.chunk_rest(seq__26984_27045__$1);
var G__27048 = c__4638__auto___27046;
var G__27049 = cljs.core.count(c__4638__auto___27046);
var G__27050 = (0);
seq__26984_27030 = G__27047;
chunk__26985_27031 = G__27048;
count__26986_27032 = G__27049;
i__26987_27033 = G__27050;
continue;
} else {
var vec__27000_27051 = cljs.core.first(seq__26984_27045__$1);
var name_27052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27000_27051,(0),null);
var map__27003_27053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27000_27051,(1),null);
var map__27003_27054__$1 = cljs.core.__destructure_map(map__27003_27053);
var doc_27055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003_27054__$1,cljs.core.cst$kw$doc);
var arglists_27056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003_27054__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27052], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27056], 0));

if(cljs.core.truth_(doc_27055)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27055], 0));
} else {
}


var G__27057 = cljs.core.next(seq__26984_27045__$1);
var G__27058 = null;
var G__27059 = (0);
var G__27060 = (0);
seq__26984_27030 = G__27057;
chunk__26985_27031 = G__27058;
count__26986_27032 = G__27059;
i__26987_27033 = G__27060;
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

var seq__27004 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__27005 = null;
var count__27006 = (0);
var i__27007 = (0);
while(true){
if((i__27007 < count__27006)){
var role = chunk__27005.cljs$core$IIndexed$_nth$arity$2(null,i__27007);
var temp__5753__auto___27061__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27061__$1)){
var spec_27062 = temp__5753__auto___27061__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27062)], 0));
} else {
}


var G__27063 = seq__27004;
var G__27064 = chunk__27005;
var G__27065 = count__27006;
var G__27066 = (i__27007 + (1));
seq__27004 = G__27063;
chunk__27005 = G__27064;
count__27006 = G__27065;
i__27007 = G__27066;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__27004);
if(temp__5753__auto____$1){
var seq__27004__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27004__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27004__$1);
var G__27067 = cljs.core.chunk_rest(seq__27004__$1);
var G__27068 = c__4638__auto__;
var G__27069 = cljs.core.count(c__4638__auto__);
var G__27070 = (0);
seq__27004 = G__27067;
chunk__27005 = G__27068;
count__27006 = G__27069;
i__27007 = G__27070;
continue;
} else {
var role = cljs.core.first(seq__27004__$1);
var temp__5753__auto___27071__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27071__$2)){
var spec_27072 = temp__5753__auto___27071__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27072)], 0));
} else {
}


var G__27073 = cljs.core.next(seq__27004__$1);
var G__27074 = null;
var G__27075 = (0);
var G__27076 = (0);
seq__27004 = G__27073;
chunk__27005 = G__27074;
count__27006 = G__27075;
i__27007 = G__27076;
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
var G__27077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27078 = cljs.core.ex_cause(t);
via = G__27077;
t = G__27078;
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
var map__27081 = datafied_throwable;
var map__27081__$1 = cljs.core.__destructure_map(map__27081);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27081__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27081__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27081__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__27082 = cljs.core.last(via);
var map__27082__$1 = cljs.core.__destructure_map(map__27082);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27082__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27082__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27082__$1,cljs.core.cst$kw$data);
var map__27083 = data;
var map__27083__$1 = cljs.core.__destructure_map(map__27083);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27083__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27083__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27083__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__27084 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27084__$1 = cljs.core.__destructure_map(map__27084);
var top_data = map__27084__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27084__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27085 = phase;
var G__27085__$1 = (((G__27085 instanceof cljs.core.Keyword))?G__27085.fqn:null);
switch (G__27085__$1) {
case "read-source":
var map__27086 = data;
var map__27086__$1 = cljs.core.__destructure_map(map__27086);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27086__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27086__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__27087 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27087__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27087);
var G__27087__$2 = (cljs.core.truth_((function (){var fexpr__27088 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27088.cljs$core$IFn$_invoke$arity$1 ? fexpr__27088.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27088.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27087__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27087__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27087__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27087__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27089 = top_data;
var G__27089__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27089,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27089);
var G__27089__$2 = (cljs.core.truth_((function (){var fexpr__27090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27090.cljs$core$IFn$_invoke$arity$1 ? fexpr__27090.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27090.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27089__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27089__$1);
var G__27089__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27089__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27089__$2);
var G__27089__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27089__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27089__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27089__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27089__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27091 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(3),null);
var G__27094 = top_data;
var G__27094__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27094,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__27094);
var G__27094__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27094__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__27094__$1);
var G__27094__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27094__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27094__$2);
var G__27094__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27094__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27094__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27094__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27094__$4;
}

break;
case "execution":
var vec__27095 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27080_SHARP_){
var or__4212__auto__ = (p1__27080_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__27098 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27098.cljs$core$IFn$_invoke$arity$1 ? fexpr__27098.cljs$core$IFn$_invoke$arity$1(p1__27080_SHARP_) : fexpr__27098.call(null,p1__27080_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__27099 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__27099__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27099,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__27099);
var G__27099__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27099__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27099__$1);
var G__27099__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27099__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27099__$2);
var G__27099__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27099__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__27099__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27099__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27099__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27085__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27103){
var map__27104 = p__27103;
var map__27104__$1 = cljs.core.__destructure_map(map__27104);
var triage_data = map__27104__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__27105 = phase;
var G__27105__$1 = (((G__27105 instanceof cljs.core.Keyword))?G__27105.fqn:null);
switch (G__27105__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27106 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27107 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27108 = loc;
var G__27109 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27110_27143 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27111_27144 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27112_27145 = true;
var _STAR_print_fn_STAR__temp_val__27113_27146 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27112_27145);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27113_27146);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27101_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27101_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27111_27144);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27110_27143);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27106,G__27107,G__27108,G__27109) : format.call(null,G__27106,G__27107,G__27108,G__27109));

break;
case "macroexpansion":
var G__27114 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27115 = cause_type;
var G__27116 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27117 = loc;
var G__27118 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27114,G__27115,G__27116,G__27117,G__27118) : format.call(null,G__27114,G__27115,G__27116,G__27117,G__27118));

break;
case "compile-syntax-check":
var G__27119 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27120 = cause_type;
var G__27121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27122 = loc;
var G__27123 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27119,G__27120,G__27121,G__27122,G__27123) : format.call(null,G__27119,G__27120,G__27121,G__27122,G__27123));

break;
case "compilation":
var G__27124 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27125 = cause_type;
var G__27126 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27127 = loc;
var G__27128 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27124,G__27125,G__27126,G__27127,G__27128) : format.call(null,G__27124,G__27125,G__27126,G__27127,G__27128));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27129 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27130 = symbol;
var G__27131 = loc;
var G__27132 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27133_27147 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27134_27148 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27135_27149 = true;
var _STAR_print_fn_STAR__temp_val__27136_27150 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27135_27149);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27136_27150);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27102_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27102_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27134_27148);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27133_27147);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27129,G__27130,G__27131,G__27132) : format.call(null,G__27129,G__27130,G__27131,G__27132));
} else {
var G__27137 = "Execution error%s at %s(%s).\n%s\n";
var G__27138 = cause_type;
var G__27139 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27140 = loc;
var G__27141 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27137,G__27138,G__27139,G__27140,G__27141) : format.call(null,G__27137,G__27138,G__27139,G__27140,G__27141));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27105__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
