// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24593){
var map__24594 = p__24593;
var map__24594__$1 = cljs.core.__destructure_map(map__24594);
var m = map__24594__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24594__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24594__$1,cljs.core.cst$kw$name);
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
var seq__24595_24623 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__24596_24624 = null;
var count__24597_24625 = (0);
var i__24598_24626 = (0);
while(true){
if((i__24598_24626 < count__24597_24625)){
var f_24627 = chunk__24596_24624.cljs$core$IIndexed$_nth$arity$2(null,i__24598_24626);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24627], 0));


var G__24628 = seq__24595_24623;
var G__24629 = chunk__24596_24624;
var G__24630 = count__24597_24625;
var G__24631 = (i__24598_24626 + (1));
seq__24595_24623 = G__24628;
chunk__24596_24624 = G__24629;
count__24597_24625 = G__24630;
i__24598_24626 = G__24631;
continue;
} else {
var temp__5753__auto___24632 = cljs.core.seq(seq__24595_24623);
if(temp__5753__auto___24632){
var seq__24595_24633__$1 = temp__5753__auto___24632;
if(cljs.core.chunked_seq_QMARK_(seq__24595_24633__$1)){
var c__4638__auto___24634 = cljs.core.chunk_first(seq__24595_24633__$1);
var G__24635 = cljs.core.chunk_rest(seq__24595_24633__$1);
var G__24636 = c__4638__auto___24634;
var G__24637 = cljs.core.count(c__4638__auto___24634);
var G__24638 = (0);
seq__24595_24623 = G__24635;
chunk__24596_24624 = G__24636;
count__24597_24625 = G__24637;
i__24598_24626 = G__24638;
continue;
} else {
var f_24639 = cljs.core.first(seq__24595_24633__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24639], 0));


var G__24640 = cljs.core.next(seq__24595_24633__$1);
var G__24641 = null;
var G__24642 = (0);
var G__24643 = (0);
seq__24595_24623 = G__24640;
chunk__24596_24624 = G__24641;
count__24597_24625 = G__24642;
i__24598_24626 = G__24643;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24644 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24644], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_24644)))?cljs.core.second(arglists_24644):arglists_24644)], 0));
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
var seq__24599_24645 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__24600_24646 = null;
var count__24601_24647 = (0);
var i__24602_24648 = (0);
while(true){
if((i__24602_24648 < count__24601_24647)){
var vec__24611_24649 = chunk__24600_24646.cljs$core$IIndexed$_nth$arity$2(null,i__24602_24648);
var name_24650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24611_24649,(0),null);
var map__24614_24651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24611_24649,(1),null);
var map__24614_24652__$1 = cljs.core.__destructure_map(map__24614_24651);
var doc_24653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24614_24652__$1,cljs.core.cst$kw$doc);
var arglists_24654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24614_24652__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24650], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24654], 0));

if(cljs.core.truth_(doc_24653)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24653], 0));
} else {
}


var G__24655 = seq__24599_24645;
var G__24656 = chunk__24600_24646;
var G__24657 = count__24601_24647;
var G__24658 = (i__24602_24648 + (1));
seq__24599_24645 = G__24655;
chunk__24600_24646 = G__24656;
count__24601_24647 = G__24657;
i__24602_24648 = G__24658;
continue;
} else {
var temp__5753__auto___24659 = cljs.core.seq(seq__24599_24645);
if(temp__5753__auto___24659){
var seq__24599_24660__$1 = temp__5753__auto___24659;
if(cljs.core.chunked_seq_QMARK_(seq__24599_24660__$1)){
var c__4638__auto___24661 = cljs.core.chunk_first(seq__24599_24660__$1);
var G__24662 = cljs.core.chunk_rest(seq__24599_24660__$1);
var G__24663 = c__4638__auto___24661;
var G__24664 = cljs.core.count(c__4638__auto___24661);
var G__24665 = (0);
seq__24599_24645 = G__24662;
chunk__24600_24646 = G__24663;
count__24601_24647 = G__24664;
i__24602_24648 = G__24665;
continue;
} else {
var vec__24615_24666 = cljs.core.first(seq__24599_24660__$1);
var name_24667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24615_24666,(0),null);
var map__24618_24668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24615_24666,(1),null);
var map__24618_24669__$1 = cljs.core.__destructure_map(map__24618_24668);
var doc_24670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24618_24669__$1,cljs.core.cst$kw$doc);
var arglists_24671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24618_24669__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24667], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24671], 0));

if(cljs.core.truth_(doc_24670)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24670], 0));
} else {
}


var G__24672 = cljs.core.next(seq__24599_24660__$1);
var G__24673 = null;
var G__24674 = (0);
var G__24675 = (0);
seq__24599_24645 = G__24672;
chunk__24600_24646 = G__24673;
count__24601_24647 = G__24674;
i__24602_24648 = G__24675;
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

var seq__24619 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__24620 = null;
var count__24621 = (0);
var i__24622 = (0);
while(true){
if((i__24622 < count__24621)){
var role = chunk__24620.cljs$core$IIndexed$_nth$arity$2(null,i__24622);
var temp__5753__auto___24676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24676__$1)){
var spec_24677 = temp__5753__auto___24676__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24677)], 0));
} else {
}


var G__24678 = seq__24619;
var G__24679 = chunk__24620;
var G__24680 = count__24621;
var G__24681 = (i__24622 + (1));
seq__24619 = G__24678;
chunk__24620 = G__24679;
count__24621 = G__24680;
i__24622 = G__24681;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__24619);
if(temp__5753__auto____$1){
var seq__24619__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24619__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__24619__$1);
var G__24682 = cljs.core.chunk_rest(seq__24619__$1);
var G__24683 = c__4638__auto__;
var G__24684 = cljs.core.count(c__4638__auto__);
var G__24685 = (0);
seq__24619 = G__24682;
chunk__24620 = G__24683;
count__24621 = G__24684;
i__24622 = G__24685;
continue;
} else {
var role = cljs.core.first(seq__24619__$1);
var temp__5753__auto___24686__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24686__$2)){
var spec_24687 = temp__5753__auto___24686__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24687)], 0));
} else {
}


var G__24688 = cljs.core.next(seq__24619__$1);
var G__24689 = null;
var G__24690 = (0);
var G__24691 = (0);
seq__24619 = G__24688;
chunk__24620 = G__24689;
count__24621 = G__24690;
i__24622 = G__24691;
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
var G__24692 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24693 = cljs.core.ex_cause(t);
via = G__24692;
t = G__24693;
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
var map__24696 = datafied_throwable;
var map__24696__$1 = cljs.core.__destructure_map(map__24696);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24696__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24696__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24696__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__24697 = cljs.core.last(via);
var map__24697__$1 = cljs.core.__destructure_map(map__24697);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,cljs.core.cst$kw$data);
var map__24698 = data;
var map__24698__$1 = cljs.core.__destructure_map(map__24698);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24698__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__24699 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24699__$1 = cljs.core.__destructure_map(map__24699);
var top_data = map__24699__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24700 = phase;
var G__24700__$1 = (((G__24700 instanceof cljs.core.Keyword))?G__24700.fqn:null);
switch (G__24700__$1) {
case "read-source":
var map__24701 = data;
var map__24701__$1 = cljs.core.__destructure_map(map__24701);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24701__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24701__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__24702 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24702__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24702,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24702);
var G__24702__$2 = (cljs.core.truth_((function (){var fexpr__24703 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24703.cljs$core$IFn$_invoke$arity$1 ? fexpr__24703.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24703.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24702__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24702__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24702__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24702__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24704 = top_data;
var G__24704__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24704,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24704);
var G__24704__$2 = (cljs.core.truth_((function (){var fexpr__24705 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24705.cljs$core$IFn$_invoke$arity$1 ? fexpr__24705.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24705.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24704__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24704__$1);
var G__24704__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24704__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24704__$2);
var G__24704__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24704__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24704__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24704__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24704__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24706 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(3),null);
var G__24709 = top_data;
var G__24709__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24709,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__24709);
var G__24709__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24709__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__24709__$1);
var G__24709__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24709__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24709__$2);
var G__24709__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24709__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24709__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24709__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24709__$4;
}

break;
case "execution":
var vec__24710 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24695_SHARP_){
var or__4212__auto__ = (p1__24695_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__24713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24713.cljs$core$IFn$_invoke$arity$1 ? fexpr__24713.cljs$core$IFn$_invoke$arity$1(p1__24695_SHARP_) : fexpr__24713.call(null,p1__24695_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__24714 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__24714__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24714,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__24714);
var G__24714__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24714__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24714__$1);
var G__24714__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24714__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24714__$2);
var G__24714__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24714__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__24714__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24714__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24714__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24700__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24718){
var map__24719 = p__24718;
var map__24719__$1 = cljs.core.__destructure_map(map__24719);
var triage_data = map__24719__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__24720 = phase;
var G__24720__$1 = (((G__24720 instanceof cljs.core.Keyword))?G__24720.fqn:null);
switch (G__24720__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24721 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24722 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24723 = loc;
var G__24724 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24725_24758 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24726_24759 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24727_24760 = true;
var _STAR_print_fn_STAR__temp_val__24728_24761 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24727_24760);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24728_24761);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24716_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24716_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24726_24759);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24725_24758);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24721,G__24722,G__24723,G__24724) : format.call(null,G__24721,G__24722,G__24723,G__24724));

break;
case "macroexpansion":
var G__24729 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24730 = cause_type;
var G__24731 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24732 = loc;
var G__24733 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24729,G__24730,G__24731,G__24732,G__24733) : format.call(null,G__24729,G__24730,G__24731,G__24732,G__24733));

break;
case "compile-syntax-check":
var G__24734 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24735 = cause_type;
var G__24736 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24737 = loc;
var G__24738 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24734,G__24735,G__24736,G__24737,G__24738) : format.call(null,G__24734,G__24735,G__24736,G__24737,G__24738));

break;
case "compilation":
var G__24739 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24740 = cause_type;
var G__24741 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24742 = loc;
var G__24743 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24739,G__24740,G__24741,G__24742,G__24743) : format.call(null,G__24739,G__24740,G__24741,G__24742,G__24743));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24744 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24745 = symbol;
var G__24746 = loc;
var G__24747 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24748_24762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24749_24763 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24750_24764 = true;
var _STAR_print_fn_STAR__temp_val__24751_24765 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24750_24764);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24751_24765);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24717_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24717_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24749_24763);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24748_24762);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24744,G__24745,G__24746,G__24747) : format.call(null,G__24744,G__24745,G__24746,G__24747));
} else {
var G__24752 = "Execution error%s at %s(%s).\n%s\n";
var G__24753 = cause_type;
var G__24754 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24755 = loc;
var G__24756 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24752,G__24753,G__24754,G__24755,G__24756) : format.call(null,G__24752,G__24753,G__24754,G__24755,G__24756));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24720__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
