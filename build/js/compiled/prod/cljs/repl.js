// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26990){
var map__26991 = p__26990;
var map__26991__$1 = cljs.core.__destructure_map(map__26991);
var m = map__26991__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26991__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26991__$1,cljs.core.cst$kw$name);
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
var seq__26992_27020 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26993_27021 = null;
var count__26994_27022 = (0);
var i__26995_27023 = (0);
while(true){
if((i__26995_27023 < count__26994_27022)){
var f_27024 = chunk__26993_27021.cljs$core$IIndexed$_nth$arity$2(null,i__26995_27023);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27024], 0));


var G__27025 = seq__26992_27020;
var G__27026 = chunk__26993_27021;
var G__27027 = count__26994_27022;
var G__27028 = (i__26995_27023 + (1));
seq__26992_27020 = G__27025;
chunk__26993_27021 = G__27026;
count__26994_27022 = G__27027;
i__26995_27023 = G__27028;
continue;
} else {
var temp__5753__auto___27029 = cljs.core.seq(seq__26992_27020);
if(temp__5753__auto___27029){
var seq__26992_27030__$1 = temp__5753__auto___27029;
if(cljs.core.chunked_seq_QMARK_(seq__26992_27030__$1)){
var c__4638__auto___27031 = cljs.core.chunk_first(seq__26992_27030__$1);
var G__27032 = cljs.core.chunk_rest(seq__26992_27030__$1);
var G__27033 = c__4638__auto___27031;
var G__27034 = cljs.core.count(c__4638__auto___27031);
var G__27035 = (0);
seq__26992_27020 = G__27032;
chunk__26993_27021 = G__27033;
count__26994_27022 = G__27034;
i__26995_27023 = G__27035;
continue;
} else {
var f_27036 = cljs.core.first(seq__26992_27030__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27036], 0));


var G__27037 = cljs.core.next(seq__26992_27030__$1);
var G__27038 = null;
var G__27039 = (0);
var G__27040 = (0);
seq__26992_27020 = G__27037;
chunk__26993_27021 = G__27038;
count__26994_27022 = G__27039;
i__26995_27023 = G__27040;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27041 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27041], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_27041)))?cljs.core.second(arglists_27041):arglists_27041)], 0));
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
var seq__26996_27042 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26997_27043 = null;
var count__26998_27044 = (0);
var i__26999_27045 = (0);
while(true){
if((i__26999_27045 < count__26998_27044)){
var vec__27008_27046 = chunk__26997_27043.cljs$core$IIndexed$_nth$arity$2(null,i__26999_27045);
var name_27047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27008_27046,(0),null);
var map__27011_27048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27008_27046,(1),null);
var map__27011_27049__$1 = cljs.core.__destructure_map(map__27011_27048);
var doc_27050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27011_27049__$1,cljs.core.cst$kw$doc);
var arglists_27051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27011_27049__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27047], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27051], 0));

if(cljs.core.truth_(doc_27050)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27050], 0));
} else {
}


var G__27052 = seq__26996_27042;
var G__27053 = chunk__26997_27043;
var G__27054 = count__26998_27044;
var G__27055 = (i__26999_27045 + (1));
seq__26996_27042 = G__27052;
chunk__26997_27043 = G__27053;
count__26998_27044 = G__27054;
i__26999_27045 = G__27055;
continue;
} else {
var temp__5753__auto___27056 = cljs.core.seq(seq__26996_27042);
if(temp__5753__auto___27056){
var seq__26996_27057__$1 = temp__5753__auto___27056;
if(cljs.core.chunked_seq_QMARK_(seq__26996_27057__$1)){
var c__4638__auto___27058 = cljs.core.chunk_first(seq__26996_27057__$1);
var G__27059 = cljs.core.chunk_rest(seq__26996_27057__$1);
var G__27060 = c__4638__auto___27058;
var G__27061 = cljs.core.count(c__4638__auto___27058);
var G__27062 = (0);
seq__26996_27042 = G__27059;
chunk__26997_27043 = G__27060;
count__26998_27044 = G__27061;
i__26999_27045 = G__27062;
continue;
} else {
var vec__27012_27063 = cljs.core.first(seq__26996_27057__$1);
var name_27064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27012_27063,(0),null);
var map__27015_27065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27012_27063,(1),null);
var map__27015_27066__$1 = cljs.core.__destructure_map(map__27015_27065);
var doc_27067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015_27066__$1,cljs.core.cst$kw$doc);
var arglists_27068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015_27066__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27064], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27068], 0));

if(cljs.core.truth_(doc_27067)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27067], 0));
} else {
}


var G__27069 = cljs.core.next(seq__26996_27057__$1);
var G__27070 = null;
var G__27071 = (0);
var G__27072 = (0);
seq__26996_27042 = G__27069;
chunk__26997_27043 = G__27070;
count__26998_27044 = G__27071;
i__26999_27045 = G__27072;
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

var seq__27016 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__27017 = null;
var count__27018 = (0);
var i__27019 = (0);
while(true){
if((i__27019 < count__27018)){
var role = chunk__27017.cljs$core$IIndexed$_nth$arity$2(null,i__27019);
var temp__5753__auto___27073__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27073__$1)){
var spec_27074 = temp__5753__auto___27073__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27074)], 0));
} else {
}


var G__27075 = seq__27016;
var G__27076 = chunk__27017;
var G__27077 = count__27018;
var G__27078 = (i__27019 + (1));
seq__27016 = G__27075;
chunk__27017 = G__27076;
count__27018 = G__27077;
i__27019 = G__27078;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__27016);
if(temp__5753__auto____$1){
var seq__27016__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27016__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27016__$1);
var G__27079 = cljs.core.chunk_rest(seq__27016__$1);
var G__27080 = c__4638__auto__;
var G__27081 = cljs.core.count(c__4638__auto__);
var G__27082 = (0);
seq__27016 = G__27079;
chunk__27017 = G__27080;
count__27018 = G__27081;
i__27019 = G__27082;
continue;
} else {
var role = cljs.core.first(seq__27016__$1);
var temp__5753__auto___27083__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27083__$2)){
var spec_27084 = temp__5753__auto___27083__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27084)], 0));
} else {
}


var G__27085 = cljs.core.next(seq__27016__$1);
var G__27086 = null;
var G__27087 = (0);
var G__27088 = (0);
seq__27016 = G__27085;
chunk__27017 = G__27086;
count__27018 = G__27087;
i__27019 = G__27088;
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
var G__27089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27090 = cljs.core.ex_cause(t);
via = G__27089;
t = G__27090;
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
var map__27093 = datafied_throwable;
var map__27093__$1 = cljs.core.__destructure_map(map__27093);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27093__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__27094 = cljs.core.last(via);
var map__27094__$1 = cljs.core.__destructure_map(map__27094);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27094__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27094__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27094__$1,cljs.core.cst$kw$data);
var map__27095 = data;
var map__27095__$1 = cljs.core.__destructure_map(map__27095);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__27096 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27096__$1 = cljs.core.__destructure_map(map__27096);
var top_data = map__27096__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27096__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27097 = phase;
var G__27097__$1 = (((G__27097 instanceof cljs.core.Keyword))?G__27097.fqn:null);
switch (G__27097__$1) {
case "read-source":
var map__27098 = data;
var map__27098__$1 = cljs.core.__destructure_map(map__27098);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__27099 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27099__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27099,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27099);
var G__27099__$2 = (cljs.core.truth_((function (){var fexpr__27100 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27100.cljs$core$IFn$_invoke$arity$1 ? fexpr__27100.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27100.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27099__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27099__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27099__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27099__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27101 = top_data;
var G__27101__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27101,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27101);
var G__27101__$2 = (cljs.core.truth_((function (){var fexpr__27102 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27102.cljs$core$IFn$_invoke$arity$1 ? fexpr__27102.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27102.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27101__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27101__$1);
var G__27101__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27101__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27101__$2);
var G__27101__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27101__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27101__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27101__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27101__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27103 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(3),null);
var G__27106 = top_data;
var G__27106__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27106,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__27106);
var G__27106__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27106__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__27106__$1);
var G__27106__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27106__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27106__$2);
var G__27106__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27106__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27106__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27106__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27106__$4;
}

break;
case "execution":
var vec__27107 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27092_SHARP_){
var or__4212__auto__ = (p1__27092_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__27110 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27110.cljs$core$IFn$_invoke$arity$1 ? fexpr__27110.cljs$core$IFn$_invoke$arity$1(p1__27092_SHARP_) : fexpr__27110.call(null,p1__27092_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__27111 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__27111__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27111,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__27111);
var G__27111__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27111__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27111__$1);
var G__27111__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27111__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27111__$2);
var G__27111__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27111__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__27111__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27111__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27111__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27097__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27115){
var map__27116 = p__27115;
var map__27116__$1 = cljs.core.__destructure_map(map__27116);
var triage_data = map__27116__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__27117 = phase;
var G__27117__$1 = (((G__27117 instanceof cljs.core.Keyword))?G__27117.fqn:null);
switch (G__27117__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27118 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27119 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27120 = loc;
var G__27121 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27122_27155 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27123_27156 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27124_27157 = true;
var _STAR_print_fn_STAR__temp_val__27125_27158 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27124_27157);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27125_27158);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27113_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27113_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27123_27156);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27122_27155);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27118,G__27119,G__27120,G__27121) : format.call(null,G__27118,G__27119,G__27120,G__27121));

break;
case "macroexpansion":
var G__27126 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27127 = cause_type;
var G__27128 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27129 = loc;
var G__27130 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27126,G__27127,G__27128,G__27129,G__27130) : format.call(null,G__27126,G__27127,G__27128,G__27129,G__27130));

break;
case "compile-syntax-check":
var G__27131 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27132 = cause_type;
var G__27133 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27134 = loc;
var G__27135 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27131,G__27132,G__27133,G__27134,G__27135) : format.call(null,G__27131,G__27132,G__27133,G__27134,G__27135));

break;
case "compilation":
var G__27136 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27137 = cause_type;
var G__27138 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27139 = loc;
var G__27140 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27136,G__27137,G__27138,G__27139,G__27140) : format.call(null,G__27136,G__27137,G__27138,G__27139,G__27140));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27141 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27142 = symbol;
var G__27143 = loc;
var G__27144 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27145_27159 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27146_27160 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27147_27161 = true;
var _STAR_print_fn_STAR__temp_val__27148_27162 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27147_27161);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27148_27162);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27114_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27114_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27146_27160);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27145_27159);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27141,G__27142,G__27143,G__27144) : format.call(null,G__27141,G__27142,G__27143,G__27144));
} else {
var G__27149 = "Execution error%s at %s(%s).\n%s\n";
var G__27150 = cause_type;
var G__27151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27152 = loc;
var G__27153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27149,G__27150,G__27151,G__27152,G__27153) : format.call(null,G__27149,G__27150,G__27151,G__27152,G__27153));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27117__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
