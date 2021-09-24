// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25222){
var map__25223 = p__25222;
var map__25223__$1 = cljs.core.__destructure_map(map__25223);
var m = map__25223__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223__$1,cljs.core.cst$kw$name);
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
var seq__25224_25252 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__25225_25253 = null;
var count__25226_25254 = (0);
var i__25227_25255 = (0);
while(true){
if((i__25227_25255 < count__25226_25254)){
var f_25256 = chunk__25225_25253.cljs$core$IIndexed$_nth$arity$2(null,i__25227_25255);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25256], 0));


var G__25257 = seq__25224_25252;
var G__25258 = chunk__25225_25253;
var G__25259 = count__25226_25254;
var G__25260 = (i__25227_25255 + (1));
seq__25224_25252 = G__25257;
chunk__25225_25253 = G__25258;
count__25226_25254 = G__25259;
i__25227_25255 = G__25260;
continue;
} else {
var temp__5753__auto___25261 = cljs.core.seq(seq__25224_25252);
if(temp__5753__auto___25261){
var seq__25224_25262__$1 = temp__5753__auto___25261;
if(cljs.core.chunked_seq_QMARK_(seq__25224_25262__$1)){
var c__4638__auto___25263 = cljs.core.chunk_first(seq__25224_25262__$1);
var G__25264 = cljs.core.chunk_rest(seq__25224_25262__$1);
var G__25265 = c__4638__auto___25263;
var G__25266 = cljs.core.count(c__4638__auto___25263);
var G__25267 = (0);
seq__25224_25252 = G__25264;
chunk__25225_25253 = G__25265;
count__25226_25254 = G__25266;
i__25227_25255 = G__25267;
continue;
} else {
var f_25268 = cljs.core.first(seq__25224_25262__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25268], 0));


var G__25269 = cljs.core.next(seq__25224_25262__$1);
var G__25270 = null;
var G__25271 = (0);
var G__25272 = (0);
seq__25224_25252 = G__25269;
chunk__25225_25253 = G__25270;
count__25226_25254 = G__25271;
i__25227_25255 = G__25272;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25273 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25273], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_25273)))?cljs.core.second(arglists_25273):arglists_25273)], 0));
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
var seq__25228_25274 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__25229_25275 = null;
var count__25230_25276 = (0);
var i__25231_25277 = (0);
while(true){
if((i__25231_25277 < count__25230_25276)){
var vec__25240_25278 = chunk__25229_25275.cljs$core$IIndexed$_nth$arity$2(null,i__25231_25277);
var name_25279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25240_25278,(0),null);
var map__25243_25280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25240_25278,(1),null);
var map__25243_25281__$1 = cljs.core.__destructure_map(map__25243_25280);
var doc_25282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243_25281__$1,cljs.core.cst$kw$doc);
var arglists_25283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25243_25281__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25279], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25283], 0));

if(cljs.core.truth_(doc_25282)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25282], 0));
} else {
}


var G__25284 = seq__25228_25274;
var G__25285 = chunk__25229_25275;
var G__25286 = count__25230_25276;
var G__25287 = (i__25231_25277 + (1));
seq__25228_25274 = G__25284;
chunk__25229_25275 = G__25285;
count__25230_25276 = G__25286;
i__25231_25277 = G__25287;
continue;
} else {
var temp__5753__auto___25288 = cljs.core.seq(seq__25228_25274);
if(temp__5753__auto___25288){
var seq__25228_25289__$1 = temp__5753__auto___25288;
if(cljs.core.chunked_seq_QMARK_(seq__25228_25289__$1)){
var c__4638__auto___25290 = cljs.core.chunk_first(seq__25228_25289__$1);
var G__25291 = cljs.core.chunk_rest(seq__25228_25289__$1);
var G__25292 = c__4638__auto___25290;
var G__25293 = cljs.core.count(c__4638__auto___25290);
var G__25294 = (0);
seq__25228_25274 = G__25291;
chunk__25229_25275 = G__25292;
count__25230_25276 = G__25293;
i__25231_25277 = G__25294;
continue;
} else {
var vec__25244_25295 = cljs.core.first(seq__25228_25289__$1);
var name_25296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25244_25295,(0),null);
var map__25247_25297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25244_25295,(1),null);
var map__25247_25298__$1 = cljs.core.__destructure_map(map__25247_25297);
var doc_25299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25247_25298__$1,cljs.core.cst$kw$doc);
var arglists_25300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25247_25298__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25296], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25300], 0));

if(cljs.core.truth_(doc_25299)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25299], 0));
} else {
}


var G__25301 = cljs.core.next(seq__25228_25289__$1);
var G__25302 = null;
var G__25303 = (0);
var G__25304 = (0);
seq__25228_25274 = G__25301;
chunk__25229_25275 = G__25302;
count__25230_25276 = G__25303;
i__25231_25277 = G__25304;
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

var seq__25248 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__25249 = null;
var count__25250 = (0);
var i__25251 = (0);
while(true){
if((i__25251 < count__25250)){
var role = chunk__25249.cljs$core$IIndexed$_nth$arity$2(null,i__25251);
var temp__5753__auto___25305__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___25305__$1)){
var spec_25306 = temp__5753__auto___25305__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25306)], 0));
} else {
}


var G__25307 = seq__25248;
var G__25308 = chunk__25249;
var G__25309 = count__25250;
var G__25310 = (i__25251 + (1));
seq__25248 = G__25307;
chunk__25249 = G__25308;
count__25250 = G__25309;
i__25251 = G__25310;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__25248);
if(temp__5753__auto____$1){
var seq__25248__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25248__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__25248__$1);
var G__25311 = cljs.core.chunk_rest(seq__25248__$1);
var G__25312 = c__4638__auto__;
var G__25313 = cljs.core.count(c__4638__auto__);
var G__25314 = (0);
seq__25248 = G__25311;
chunk__25249 = G__25312;
count__25250 = G__25313;
i__25251 = G__25314;
continue;
} else {
var role = cljs.core.first(seq__25248__$1);
var temp__5753__auto___25315__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___25315__$2)){
var spec_25316 = temp__5753__auto___25315__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25316)], 0));
} else {
}


var G__25317 = cljs.core.next(seq__25248__$1);
var G__25318 = null;
var G__25319 = (0);
var G__25320 = (0);
seq__25248 = G__25317;
chunk__25249 = G__25318;
count__25250 = G__25319;
i__25251 = G__25320;
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
var G__25321 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__25322 = cljs.core.ex_cause(t);
via = G__25321;
t = G__25322;
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
var map__25325 = datafied_throwable;
var map__25325__$1 = cljs.core.__destructure_map(map__25325);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25325__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25325__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25325__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__25326 = cljs.core.last(via);
var map__25326__$1 = cljs.core.__destructure_map(map__25326);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,cljs.core.cst$kw$data);
var map__25327 = data;
var map__25327__$1 = cljs.core.__destructure_map(map__25327);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25327__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25327__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25327__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__25328 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25328__$1 = cljs.core.__destructure_map(map__25328);
var top_data = map__25328__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25328__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25329 = phase;
var G__25329__$1 = (((G__25329 instanceof cljs.core.Keyword))?G__25329.fqn:null);
switch (G__25329__$1) {
case "read-source":
var map__25330 = data;
var map__25330__$1 = cljs.core.__destructure_map(map__25330);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25330__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25330__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__25331 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25331__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25331,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__25331);
var G__25331__$2 = (cljs.core.truth_((function (){var fexpr__25332 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25332.cljs$core$IFn$_invoke$arity$1 ? fexpr__25332.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25332.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25331__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__25331__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25331__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__25331__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25333 = top_data;
var G__25333__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25333,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__25333);
var G__25333__$2 = (cljs.core.truth_((function (){var fexpr__25334 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25334.cljs$core$IFn$_invoke$arity$1 ? fexpr__25334.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25334.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25333__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__25333__$1);
var G__25333__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25333__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__25333__$2);
var G__25333__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25333__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__25333__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25333__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__25333__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25335 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25335,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25335,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25335,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25335,(3),null);
var G__25338 = top_data;
var G__25338__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25338,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__25338);
var G__25338__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25338__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__25338__$1);
var G__25338__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25338__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25338__$2);
var G__25338__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25338__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__25338__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25338__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__25338__$4;
}

break;
case "execution":
var vec__25339 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25324_SHARP_){
var or__4212__auto__ = (p1__25324_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__25342 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25342.cljs$core$IFn$_invoke$arity$1 ? fexpr__25342.cljs$core$IFn$_invoke$arity$1(p1__25324_SHARP_) : fexpr__25342.call(null,p1__25324_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__25343 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__25343__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25343,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__25343);
var G__25343__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25343__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__25343__$1);
var G__25343__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25343__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25343__$2);
var G__25343__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25343__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__25343__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25343__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__25343__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25329__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25347){
var map__25348 = p__25347;
var map__25348__$1 = cljs.core.__destructure_map(map__25348);
var triage_data = map__25348__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25348__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__25349 = phase;
var G__25349__$1 = (((G__25349 instanceof cljs.core.Keyword))?G__25349.fqn:null);
switch (G__25349__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25350 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25351 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25352 = loc;
var G__25353 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25354_25387 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25355_25388 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25356_25389 = true;
var _STAR_print_fn_STAR__temp_val__25357_25390 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25356_25389);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25357_25390);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25345_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25345_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25355_25388);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25354_25387);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25350,G__25351,G__25352,G__25353) : format.call(null,G__25350,G__25351,G__25352,G__25353));

break;
case "macroexpansion":
var G__25358 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25359 = cause_type;
var G__25360 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25361 = loc;
var G__25362 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25358,G__25359,G__25360,G__25361,G__25362) : format.call(null,G__25358,G__25359,G__25360,G__25361,G__25362));

break;
case "compile-syntax-check":
var G__25363 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25364 = cause_type;
var G__25365 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25366 = loc;
var G__25367 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25363,G__25364,G__25365,G__25366,G__25367) : format.call(null,G__25363,G__25364,G__25365,G__25366,G__25367));

break;
case "compilation":
var G__25368 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25369 = cause_type;
var G__25370 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25371 = loc;
var G__25372 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25368,G__25369,G__25370,G__25371,G__25372) : format.call(null,G__25368,G__25369,G__25370,G__25371,G__25372));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25373 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25374 = symbol;
var G__25375 = loc;
var G__25376 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25377_25391 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25378_25392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25379_25393 = true;
var _STAR_print_fn_STAR__temp_val__25380_25394 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25379_25393);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25380_25394);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25346_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25346_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25378_25392);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25377_25391);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25373,G__25374,G__25375,G__25376) : format.call(null,G__25373,G__25374,G__25375,G__25376));
} else {
var G__25381 = "Execution error%s at %s(%s).\n%s\n";
var G__25382 = cause_type;
var G__25383 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25384 = loc;
var G__25385 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25381,G__25382,G__25383,G__25384,G__25385) : format.call(null,G__25381,G__25382,G__25383,G__25384,G__25385));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25349__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
