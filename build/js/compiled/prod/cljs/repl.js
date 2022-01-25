// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26989){
var map__26990 = p__26989;
var map__26990__$1 = cljs.core.__destructure_map(map__26990);
var m = map__26990__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990__$1,cljs.core.cst$kw$name);
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
var seq__26991_27019 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26992_27020 = null;
var count__26993_27021 = (0);
var i__26994_27022 = (0);
while(true){
if((i__26994_27022 < count__26993_27021)){
var f_27023 = chunk__26992_27020.cljs$core$IIndexed$_nth$arity$2(null,i__26994_27022);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27023], 0));


var G__27024 = seq__26991_27019;
var G__27025 = chunk__26992_27020;
var G__27026 = count__26993_27021;
var G__27027 = (i__26994_27022 + (1));
seq__26991_27019 = G__27024;
chunk__26992_27020 = G__27025;
count__26993_27021 = G__27026;
i__26994_27022 = G__27027;
continue;
} else {
var temp__5753__auto___27028 = cljs.core.seq(seq__26991_27019);
if(temp__5753__auto___27028){
var seq__26991_27029__$1 = temp__5753__auto___27028;
if(cljs.core.chunked_seq_QMARK_(seq__26991_27029__$1)){
var c__4638__auto___27030 = cljs.core.chunk_first(seq__26991_27029__$1);
var G__27031 = cljs.core.chunk_rest(seq__26991_27029__$1);
var G__27032 = c__4638__auto___27030;
var G__27033 = cljs.core.count(c__4638__auto___27030);
var G__27034 = (0);
seq__26991_27019 = G__27031;
chunk__26992_27020 = G__27032;
count__26993_27021 = G__27033;
i__26994_27022 = G__27034;
continue;
} else {
var f_27035 = cljs.core.first(seq__26991_27029__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27035], 0));


var G__27036 = cljs.core.next(seq__26991_27029__$1);
var G__27037 = null;
var G__27038 = (0);
var G__27039 = (0);
seq__26991_27019 = G__27036;
chunk__26992_27020 = G__27037;
count__26993_27021 = G__27038;
i__26994_27022 = G__27039;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27040 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27040], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_27040)))?cljs.core.second(arglists_27040):arglists_27040)], 0));
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
var seq__26995_27041 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__26996_27042 = null;
var count__26997_27043 = (0);
var i__26998_27044 = (0);
while(true){
if((i__26998_27044 < count__26997_27043)){
var vec__27007_27045 = chunk__26996_27042.cljs$core$IIndexed$_nth$arity$2(null,i__26998_27044);
var name_27046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007_27045,(0),null);
var map__27010_27047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007_27045,(1),null);
var map__27010_27048__$1 = cljs.core.__destructure_map(map__27010_27047);
var doc_27049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27010_27048__$1,cljs.core.cst$kw$doc);
var arglists_27050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27010_27048__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27046], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27050], 0));

if(cljs.core.truth_(doc_27049)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27049], 0));
} else {
}


var G__27051 = seq__26995_27041;
var G__27052 = chunk__26996_27042;
var G__27053 = count__26997_27043;
var G__27054 = (i__26998_27044 + (1));
seq__26995_27041 = G__27051;
chunk__26996_27042 = G__27052;
count__26997_27043 = G__27053;
i__26998_27044 = G__27054;
continue;
} else {
var temp__5753__auto___27055 = cljs.core.seq(seq__26995_27041);
if(temp__5753__auto___27055){
var seq__26995_27056__$1 = temp__5753__auto___27055;
if(cljs.core.chunked_seq_QMARK_(seq__26995_27056__$1)){
var c__4638__auto___27057 = cljs.core.chunk_first(seq__26995_27056__$1);
var G__27058 = cljs.core.chunk_rest(seq__26995_27056__$1);
var G__27059 = c__4638__auto___27057;
var G__27060 = cljs.core.count(c__4638__auto___27057);
var G__27061 = (0);
seq__26995_27041 = G__27058;
chunk__26996_27042 = G__27059;
count__26997_27043 = G__27060;
i__26998_27044 = G__27061;
continue;
} else {
var vec__27011_27062 = cljs.core.first(seq__26995_27056__$1);
var name_27063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27011_27062,(0),null);
var map__27014_27064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27011_27062,(1),null);
var map__27014_27065__$1 = cljs.core.__destructure_map(map__27014_27064);
var doc_27066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27014_27065__$1,cljs.core.cst$kw$doc);
var arglists_27067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27014_27065__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27063], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27067], 0));

if(cljs.core.truth_(doc_27066)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27066], 0));
} else {
}


var G__27068 = cljs.core.next(seq__26995_27056__$1);
var G__27069 = null;
var G__27070 = (0);
var G__27071 = (0);
seq__26995_27041 = G__27068;
chunk__26996_27042 = G__27069;
count__26997_27043 = G__27070;
i__26998_27044 = G__27071;
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

var seq__27015 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__27016 = null;
var count__27017 = (0);
var i__27018 = (0);
while(true){
if((i__27018 < count__27017)){
var role = chunk__27016.cljs$core$IIndexed$_nth$arity$2(null,i__27018);
var temp__5753__auto___27072__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27072__$1)){
var spec_27073 = temp__5753__auto___27072__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27073)], 0));
} else {
}


var G__27074 = seq__27015;
var G__27075 = chunk__27016;
var G__27076 = count__27017;
var G__27077 = (i__27018 + (1));
seq__27015 = G__27074;
chunk__27016 = G__27075;
count__27017 = G__27076;
i__27018 = G__27077;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__27015);
if(temp__5753__auto____$1){
var seq__27015__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27015__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27015__$1);
var G__27078 = cljs.core.chunk_rest(seq__27015__$1);
var G__27079 = c__4638__auto__;
var G__27080 = cljs.core.count(c__4638__auto__);
var G__27081 = (0);
seq__27015 = G__27078;
chunk__27016 = G__27079;
count__27017 = G__27080;
i__27018 = G__27081;
continue;
} else {
var role = cljs.core.first(seq__27015__$1);
var temp__5753__auto___27082__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27082__$2)){
var spec_27083 = temp__5753__auto___27082__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27083)], 0));
} else {
}


var G__27084 = cljs.core.next(seq__27015__$1);
var G__27085 = null;
var G__27086 = (0);
var G__27087 = (0);
seq__27015 = G__27084;
chunk__27016 = G__27085;
count__27017 = G__27086;
i__27018 = G__27087;
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
var G__27088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27089 = cljs.core.ex_cause(t);
via = G__27088;
t = G__27089;
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
var map__27092 = datafied_throwable;
var map__27092__$1 = cljs.core.__destructure_map(map__27092);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27092__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__27093 = cljs.core.last(via);
var map__27093__$1 = cljs.core.__destructure_map(map__27093);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,cljs.core.cst$kw$data);
var map__27094 = data;
var map__27094__$1 = cljs.core.__destructure_map(map__27094);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27094__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27094__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27094__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__27095 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27095__$1 = cljs.core.__destructure_map(map__27095);
var top_data = map__27095__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27096 = phase;
var G__27096__$1 = (((G__27096 instanceof cljs.core.Keyword))?G__27096.fqn:null);
switch (G__27096__$1) {
case "read-source":
var map__27097 = data;
var map__27097__$1 = cljs.core.__destructure_map(map__27097);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__27098 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27098__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27098,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27098);
var G__27098__$2 = (cljs.core.truth_((function (){var fexpr__27099 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27099.cljs$core$IFn$_invoke$arity$1 ? fexpr__27099.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27099.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27098__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27098__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27098__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27098__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27100 = top_data;
var G__27100__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27100,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__27100);
var G__27100__$2 = (cljs.core.truth_((function (){var fexpr__27101 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27101.cljs$core$IFn$_invoke$arity$1 ? fexpr__27101.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27101.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27100__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__27100__$1);
var G__27100__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27100__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27100__$2);
var G__27100__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27100__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27100__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27100__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27100__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27102 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(3),null);
var G__27105 = top_data;
var G__27105__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27105,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__27105);
var G__27105__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27105__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__27105__$1);
var G__27105__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27105__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27105__$2);
var G__27105__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27105__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__27105__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27105__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__27105__$4;
}

break;
case "execution":
var vec__27106 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27106,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27106,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27106,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27106,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27091_SHARP_){
var or__4212__auto__ = (p1__27091_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__27109 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27109.cljs$core$IFn$_invoke$arity$1 ? fexpr__27109.cljs$core$IFn$_invoke$arity$1(p1__27091_SHARP_) : fexpr__27109.call(null,p1__27091_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__27110 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__27110__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27110,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__27110);
var G__27110__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27110__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__27110__$1);
var G__27110__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27110__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27110__$2);
var G__27110__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27110__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__27110__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27110__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__27110__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27096__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27114){
var map__27115 = p__27114;
var map__27115__$1 = cljs.core.__destructure_map(map__27115);
var triage_data = map__27115__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__27116 = phase;
var G__27116__$1 = (((G__27116 instanceof cljs.core.Keyword))?G__27116.fqn:null);
switch (G__27116__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27117 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27118 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27119 = loc;
var G__27120 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27121_27154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27122_27155 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27123_27156 = true;
var _STAR_print_fn_STAR__temp_val__27124_27157 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27123_27156);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27124_27157);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27112_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27112_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27122_27155);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27121_27154);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27117,G__27118,G__27119,G__27120) : format.call(null,G__27117,G__27118,G__27119,G__27120));

break;
case "macroexpansion":
var G__27125 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27126 = cause_type;
var G__27127 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27128 = loc;
var G__27129 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27125,G__27126,G__27127,G__27128,G__27129) : format.call(null,G__27125,G__27126,G__27127,G__27128,G__27129));

break;
case "compile-syntax-check":
var G__27130 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27131 = cause_type;
var G__27132 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27133 = loc;
var G__27134 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27130,G__27131,G__27132,G__27133,G__27134) : format.call(null,G__27130,G__27131,G__27132,G__27133,G__27134));

break;
case "compilation":
var G__27135 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27136 = cause_type;
var G__27137 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27138 = loc;
var G__27139 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27135,G__27136,G__27137,G__27138,G__27139) : format.call(null,G__27135,G__27136,G__27137,G__27138,G__27139));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27140 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27141 = symbol;
var G__27142 = loc;
var G__27143 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27144_27158 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27145_27159 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27146_27160 = true;
var _STAR_print_fn_STAR__temp_val__27147_27161 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27146_27160);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27147_27161);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27113_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27113_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27145_27159);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27144_27158);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27140,G__27141,G__27142,G__27143) : format.call(null,G__27140,G__27141,G__27142,G__27143));
} else {
var G__27148 = "Execution error%s at %s(%s).\n%s\n";
var G__27149 = cause_type;
var G__27150 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27151 = loc;
var G__27152 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27148,G__27149,G__27150,G__27151,G__27152) : format.call(null,G__27148,G__27149,G__27150,G__27151,G__27152));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27116__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
