// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25251){
var map__25252 = p__25251;
var map__25252__$1 = cljs.core.__destructure_map(map__25252);
var m = map__25252__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25252__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25252__$1,cljs.core.cst$kw$name);
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
var seq__25253_25281 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__25254_25282 = null;
var count__25255_25283 = (0);
var i__25256_25284 = (0);
while(true){
if((i__25256_25284 < count__25255_25283)){
var f_25285 = chunk__25254_25282.cljs$core$IIndexed$_nth$arity$2(null,i__25256_25284);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25285], 0));


var G__25286 = seq__25253_25281;
var G__25287 = chunk__25254_25282;
var G__25288 = count__25255_25283;
var G__25289 = (i__25256_25284 + (1));
seq__25253_25281 = G__25286;
chunk__25254_25282 = G__25287;
count__25255_25283 = G__25288;
i__25256_25284 = G__25289;
continue;
} else {
var temp__5753__auto___25290 = cljs.core.seq(seq__25253_25281);
if(temp__5753__auto___25290){
var seq__25253_25291__$1 = temp__5753__auto___25290;
if(cljs.core.chunked_seq_QMARK_(seq__25253_25291__$1)){
var c__4638__auto___25292 = cljs.core.chunk_first(seq__25253_25291__$1);
var G__25293 = cljs.core.chunk_rest(seq__25253_25291__$1);
var G__25294 = c__4638__auto___25292;
var G__25295 = cljs.core.count(c__4638__auto___25292);
var G__25296 = (0);
seq__25253_25281 = G__25293;
chunk__25254_25282 = G__25294;
count__25255_25283 = G__25295;
i__25256_25284 = G__25296;
continue;
} else {
var f_25297 = cljs.core.first(seq__25253_25291__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25297], 0));


var G__25298 = cljs.core.next(seq__25253_25291__$1);
var G__25299 = null;
var G__25300 = (0);
var G__25301 = (0);
seq__25253_25281 = G__25298;
chunk__25254_25282 = G__25299;
count__25255_25283 = G__25300;
i__25256_25284 = G__25301;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25302 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25302], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_25302)))?cljs.core.second(arglists_25302):arglists_25302)], 0));
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
var seq__25257_25303 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__25258_25304 = null;
var count__25259_25305 = (0);
var i__25260_25306 = (0);
while(true){
if((i__25260_25306 < count__25259_25305)){
var vec__25269_25307 = chunk__25258_25304.cljs$core$IIndexed$_nth$arity$2(null,i__25260_25306);
var name_25308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25269_25307,(0),null);
var map__25272_25309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25269_25307,(1),null);
var map__25272_25310__$1 = cljs.core.__destructure_map(map__25272_25309);
var doc_25311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272_25310__$1,cljs.core.cst$kw$doc);
var arglists_25312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272_25310__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25308], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25312], 0));

if(cljs.core.truth_(doc_25311)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25311], 0));
} else {
}


var G__25313 = seq__25257_25303;
var G__25314 = chunk__25258_25304;
var G__25315 = count__25259_25305;
var G__25316 = (i__25260_25306 + (1));
seq__25257_25303 = G__25313;
chunk__25258_25304 = G__25314;
count__25259_25305 = G__25315;
i__25260_25306 = G__25316;
continue;
} else {
var temp__5753__auto___25317 = cljs.core.seq(seq__25257_25303);
if(temp__5753__auto___25317){
var seq__25257_25318__$1 = temp__5753__auto___25317;
if(cljs.core.chunked_seq_QMARK_(seq__25257_25318__$1)){
var c__4638__auto___25319 = cljs.core.chunk_first(seq__25257_25318__$1);
var G__25320 = cljs.core.chunk_rest(seq__25257_25318__$1);
var G__25321 = c__4638__auto___25319;
var G__25322 = cljs.core.count(c__4638__auto___25319);
var G__25323 = (0);
seq__25257_25303 = G__25320;
chunk__25258_25304 = G__25321;
count__25259_25305 = G__25322;
i__25260_25306 = G__25323;
continue;
} else {
var vec__25273_25324 = cljs.core.first(seq__25257_25318__$1);
var name_25325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25273_25324,(0),null);
var map__25276_25326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25273_25324,(1),null);
var map__25276_25327__$1 = cljs.core.__destructure_map(map__25276_25326);
var doc_25328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25276_25327__$1,cljs.core.cst$kw$doc);
var arglists_25329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25276_25327__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25325], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25329], 0));

if(cljs.core.truth_(doc_25328)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25328], 0));
} else {
}


var G__25330 = cljs.core.next(seq__25257_25318__$1);
var G__25331 = null;
var G__25332 = (0);
var G__25333 = (0);
seq__25257_25303 = G__25330;
chunk__25258_25304 = G__25331;
count__25259_25305 = G__25332;
i__25260_25306 = G__25333;
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

var seq__25277 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__25278 = null;
var count__25279 = (0);
var i__25280 = (0);
while(true){
if((i__25280 < count__25279)){
var role = chunk__25278.cljs$core$IIndexed$_nth$arity$2(null,i__25280);
var temp__5753__auto___25334__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___25334__$1)){
var spec_25335 = temp__5753__auto___25334__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25335)], 0));
} else {
}


var G__25336 = seq__25277;
var G__25337 = chunk__25278;
var G__25338 = count__25279;
var G__25339 = (i__25280 + (1));
seq__25277 = G__25336;
chunk__25278 = G__25337;
count__25279 = G__25338;
i__25280 = G__25339;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__25277);
if(temp__5753__auto____$1){
var seq__25277__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25277__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__25277__$1);
var G__25340 = cljs.core.chunk_rest(seq__25277__$1);
var G__25341 = c__4638__auto__;
var G__25342 = cljs.core.count(c__4638__auto__);
var G__25343 = (0);
seq__25277 = G__25340;
chunk__25278 = G__25341;
count__25279 = G__25342;
i__25280 = G__25343;
continue;
} else {
var role = cljs.core.first(seq__25277__$1);
var temp__5753__auto___25344__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___25344__$2)){
var spec_25345 = temp__5753__auto___25344__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25345)], 0));
} else {
}


var G__25346 = cljs.core.next(seq__25277__$1);
var G__25347 = null;
var G__25348 = (0);
var G__25349 = (0);
seq__25277 = G__25346;
chunk__25278 = G__25347;
count__25279 = G__25348;
i__25280 = G__25349;
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
var G__25350 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__25351 = cljs.core.ex_cause(t);
via = G__25350;
t = G__25351;
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
var map__25354 = datafied_throwable;
var map__25354__$1 = cljs.core.__destructure_map(map__25354);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25354__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25354__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25354__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__25355 = cljs.core.last(via);
var map__25355__$1 = cljs.core.__destructure_map(map__25355);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25355__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25355__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25355__$1,cljs.core.cst$kw$data);
var map__25356 = data;
var map__25356__$1 = cljs.core.__destructure_map(map__25356);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25356__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25356__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25356__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__25357 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25357__$1 = cljs.core.__destructure_map(map__25357);
var top_data = map__25357__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25357__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25358 = phase;
var G__25358__$1 = (((G__25358 instanceof cljs.core.Keyword))?G__25358.fqn:null);
switch (G__25358__$1) {
case "read-source":
var map__25359 = data;
var map__25359__$1 = cljs.core.__destructure_map(map__25359);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25359__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25359__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__25360 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25360__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25360,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__25360);
var G__25360__$2 = (cljs.core.truth_((function (){var fexpr__25361 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25361.cljs$core$IFn$_invoke$arity$1 ? fexpr__25361.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25361.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25360__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__25360__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25360__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__25360__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25362 = top_data;
var G__25362__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25362,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__25362);
var G__25362__$2 = (cljs.core.truth_((function (){var fexpr__25363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25363.cljs$core$IFn$_invoke$arity$1 ? fexpr__25363.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25363.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25362__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__25362__$1);
var G__25362__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25362__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__25362__$2);
var G__25362__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25362__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__25362__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25362__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__25362__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25364 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25364,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25364,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25364,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25364,(3),null);
var G__25367 = top_data;
var G__25367__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25367,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__25367);
var G__25367__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25367__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__25367__$1);
var G__25367__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25367__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25367__$2);
var G__25367__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25367__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__25367__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25367__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__25367__$4;
}

break;
case "execution":
var vec__25368 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25353_SHARP_){
var or__4212__auto__ = (p1__25353_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__25371 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25371.cljs$core$IFn$_invoke$arity$1 ? fexpr__25371.cljs$core$IFn$_invoke$arity$1(p1__25353_SHARP_) : fexpr__25371.call(null,p1__25353_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__25372 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__25372__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25372,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__25372);
var G__25372__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25372__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__25372__$1);
var G__25372__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25372__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25372__$2);
var G__25372__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25372__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__25372__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25372__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__25372__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25358__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25376){
var map__25377 = p__25376;
var map__25377__$1 = cljs.core.__destructure_map(map__25377);
var triage_data = map__25377__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25377__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__25378 = phase;
var G__25378__$1 = (((G__25378 instanceof cljs.core.Keyword))?G__25378.fqn:null);
switch (G__25378__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25379 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25380 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25381 = loc;
var G__25382 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25383_25416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25384_25417 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25385_25418 = true;
var _STAR_print_fn_STAR__temp_val__25386_25419 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25385_25418);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25386_25419);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25374_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25374_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25384_25417);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25383_25416);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25379,G__25380,G__25381,G__25382) : format.call(null,G__25379,G__25380,G__25381,G__25382));

break;
case "macroexpansion":
var G__25387 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25388 = cause_type;
var G__25389 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25390 = loc;
var G__25391 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25387,G__25388,G__25389,G__25390,G__25391) : format.call(null,G__25387,G__25388,G__25389,G__25390,G__25391));

break;
case "compile-syntax-check":
var G__25392 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25393 = cause_type;
var G__25394 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25395 = loc;
var G__25396 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25392,G__25393,G__25394,G__25395,G__25396) : format.call(null,G__25392,G__25393,G__25394,G__25395,G__25396));

break;
case "compilation":
var G__25397 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25398 = cause_type;
var G__25399 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25400 = loc;
var G__25401 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25397,G__25398,G__25399,G__25400,G__25401) : format.call(null,G__25397,G__25398,G__25399,G__25400,G__25401));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25402 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25403 = symbol;
var G__25404 = loc;
var G__25405 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25406_25420 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25407_25421 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25408_25422 = true;
var _STAR_print_fn_STAR__temp_val__25409_25423 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25408_25422);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25409_25423);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25375_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25375_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25407_25421);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25406_25420);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25402,G__25403,G__25404,G__25405) : format.call(null,G__25402,G__25403,G__25404,G__25405));
} else {
var G__25410 = "Execution error%s at %s(%s).\n%s\n";
var G__25411 = cause_type;
var G__25412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25413 = loc;
var G__25414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25410,G__25411,G__25412,G__25413,G__25414) : format.call(null,G__25410,G__25411,G__25412,G__25413,G__25414));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25378__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
