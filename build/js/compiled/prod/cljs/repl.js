// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24623){
var map__24624 = p__24623;
var map__24624__$1 = cljs.core.__destructure_map(map__24624);
var m = map__24624__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24624__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24624__$1,cljs.core.cst$kw$name);
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
var seq__24625_24653 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__24626_24654 = null;
var count__24627_24655 = (0);
var i__24628_24656 = (0);
while(true){
if((i__24628_24656 < count__24627_24655)){
var f_24657 = chunk__24626_24654.cljs$core$IIndexed$_nth$arity$2(null,i__24628_24656);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24657], 0));


var G__24658 = seq__24625_24653;
var G__24659 = chunk__24626_24654;
var G__24660 = count__24627_24655;
var G__24661 = (i__24628_24656 + (1));
seq__24625_24653 = G__24658;
chunk__24626_24654 = G__24659;
count__24627_24655 = G__24660;
i__24628_24656 = G__24661;
continue;
} else {
var temp__5753__auto___24662 = cljs.core.seq(seq__24625_24653);
if(temp__5753__auto___24662){
var seq__24625_24663__$1 = temp__5753__auto___24662;
if(cljs.core.chunked_seq_QMARK_(seq__24625_24663__$1)){
var c__4638__auto___24664 = cljs.core.chunk_first(seq__24625_24663__$1);
var G__24665 = cljs.core.chunk_rest(seq__24625_24663__$1);
var G__24666 = c__4638__auto___24664;
var G__24667 = cljs.core.count(c__4638__auto___24664);
var G__24668 = (0);
seq__24625_24653 = G__24665;
chunk__24626_24654 = G__24666;
count__24627_24655 = G__24667;
i__24628_24656 = G__24668;
continue;
} else {
var f_24669 = cljs.core.first(seq__24625_24663__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24669], 0));


var G__24670 = cljs.core.next(seq__24625_24663__$1);
var G__24671 = null;
var G__24672 = (0);
var G__24673 = (0);
seq__24625_24653 = G__24670;
chunk__24626_24654 = G__24671;
count__24627_24655 = G__24672;
i__24628_24656 = G__24673;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24674 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24674], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_24674)))?cljs.core.second(arglists_24674):arglists_24674)], 0));
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
var seq__24629_24675 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__24630_24676 = null;
var count__24631_24677 = (0);
var i__24632_24678 = (0);
while(true){
if((i__24632_24678 < count__24631_24677)){
var vec__24641_24679 = chunk__24630_24676.cljs$core$IIndexed$_nth$arity$2(null,i__24632_24678);
var name_24680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24641_24679,(0),null);
var map__24644_24681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24641_24679,(1),null);
var map__24644_24682__$1 = cljs.core.__destructure_map(map__24644_24681);
var doc_24683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24644_24682__$1,cljs.core.cst$kw$doc);
var arglists_24684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24644_24682__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24680], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24684], 0));

if(cljs.core.truth_(doc_24683)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24683], 0));
} else {
}


var G__24685 = seq__24629_24675;
var G__24686 = chunk__24630_24676;
var G__24687 = count__24631_24677;
var G__24688 = (i__24632_24678 + (1));
seq__24629_24675 = G__24685;
chunk__24630_24676 = G__24686;
count__24631_24677 = G__24687;
i__24632_24678 = G__24688;
continue;
} else {
var temp__5753__auto___24689 = cljs.core.seq(seq__24629_24675);
if(temp__5753__auto___24689){
var seq__24629_24690__$1 = temp__5753__auto___24689;
if(cljs.core.chunked_seq_QMARK_(seq__24629_24690__$1)){
var c__4638__auto___24691 = cljs.core.chunk_first(seq__24629_24690__$1);
var G__24692 = cljs.core.chunk_rest(seq__24629_24690__$1);
var G__24693 = c__4638__auto___24691;
var G__24694 = cljs.core.count(c__4638__auto___24691);
var G__24695 = (0);
seq__24629_24675 = G__24692;
chunk__24630_24676 = G__24693;
count__24631_24677 = G__24694;
i__24632_24678 = G__24695;
continue;
} else {
var vec__24645_24696 = cljs.core.first(seq__24629_24690__$1);
var name_24697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24645_24696,(0),null);
var map__24648_24698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24645_24696,(1),null);
var map__24648_24699__$1 = cljs.core.__destructure_map(map__24648_24698);
var doc_24700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24648_24699__$1,cljs.core.cst$kw$doc);
var arglists_24701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24648_24699__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24697], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24701], 0));

if(cljs.core.truth_(doc_24700)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24700], 0));
} else {
}


var G__24702 = cljs.core.next(seq__24629_24690__$1);
var G__24703 = null;
var G__24704 = (0);
var G__24705 = (0);
seq__24629_24675 = G__24702;
chunk__24630_24676 = G__24703;
count__24631_24677 = G__24704;
i__24632_24678 = G__24705;
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

var seq__24649 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__24650 = null;
var count__24651 = (0);
var i__24652 = (0);
while(true){
if((i__24652 < count__24651)){
var role = chunk__24650.cljs$core$IIndexed$_nth$arity$2(null,i__24652);
var temp__5753__auto___24706__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24706__$1)){
var spec_24707 = temp__5753__auto___24706__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24707)], 0));
} else {
}


var G__24708 = seq__24649;
var G__24709 = chunk__24650;
var G__24710 = count__24651;
var G__24711 = (i__24652 + (1));
seq__24649 = G__24708;
chunk__24650 = G__24709;
count__24651 = G__24710;
i__24652 = G__24711;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__24649);
if(temp__5753__auto____$1){
var seq__24649__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24649__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__24649__$1);
var G__24712 = cljs.core.chunk_rest(seq__24649__$1);
var G__24713 = c__4638__auto__;
var G__24714 = cljs.core.count(c__4638__auto__);
var G__24715 = (0);
seq__24649 = G__24712;
chunk__24650 = G__24713;
count__24651 = G__24714;
i__24652 = G__24715;
continue;
} else {
var role = cljs.core.first(seq__24649__$1);
var temp__5753__auto___24716__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24716__$2)){
var spec_24717 = temp__5753__auto___24716__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24717)], 0));
} else {
}


var G__24718 = cljs.core.next(seq__24649__$1);
var G__24719 = null;
var G__24720 = (0);
var G__24721 = (0);
seq__24649 = G__24718;
chunk__24650 = G__24719;
count__24651 = G__24720;
i__24652 = G__24721;
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
var G__24722 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24723 = cljs.core.ex_cause(t);
via = G__24722;
t = G__24723;
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
var map__24726 = datafied_throwable;
var map__24726__$1 = cljs.core.__destructure_map(map__24726);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24726__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24726__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24726__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__24727 = cljs.core.last(via);
var map__24727__$1 = cljs.core.__destructure_map(map__24727);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24727__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24727__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24727__$1,cljs.core.cst$kw$data);
var map__24728 = data;
var map__24728__$1 = cljs.core.__destructure_map(map__24728);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24728__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24728__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24728__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__24729 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24729__$1 = cljs.core.__destructure_map(map__24729);
var top_data = map__24729__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24729__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24730 = phase;
var G__24730__$1 = (((G__24730 instanceof cljs.core.Keyword))?G__24730.fqn:null);
switch (G__24730__$1) {
case "read-source":
var map__24731 = data;
var map__24731__$1 = cljs.core.__destructure_map(map__24731);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24731__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24731__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__24732 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24732__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24732,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24732);
var G__24732__$2 = (cljs.core.truth_((function (){var fexpr__24733 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24733.cljs$core$IFn$_invoke$arity$1 ? fexpr__24733.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24733.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24732__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24732__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24732__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24732__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24734 = top_data;
var G__24734__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24734,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__24734);
var G__24734__$2 = (cljs.core.truth_((function (){var fexpr__24735 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24735.cljs$core$IFn$_invoke$arity$1 ? fexpr__24735.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24735.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24734__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__24734__$1);
var G__24734__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24734__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24734__$2);
var G__24734__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24734__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24734__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24734__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24734__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24736 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24736,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24736,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24736,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24736,(3),null);
var G__24739 = top_data;
var G__24739__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24739,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__24739);
var G__24739__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24739__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__24739__$1);
var G__24739__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24739__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24739__$2);
var G__24739__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24739__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__24739__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24739__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__24739__$4;
}

break;
case "execution":
var vec__24740 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24725_SHARP_){
var or__4212__auto__ = (p1__24725_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__24743 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24743.cljs$core$IFn$_invoke$arity$1 ? fexpr__24743.cljs$core$IFn$_invoke$arity$1(p1__24725_SHARP_) : fexpr__24743.call(null,p1__24725_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__24744 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__24744__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24744,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__24744);
var G__24744__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24744__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__24744__$1);
var G__24744__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24744__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24744__$2);
var G__24744__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24744__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__24744__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24744__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__24744__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24730__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24748){
var map__24749 = p__24748;
var map__24749__$1 = cljs.core.__destructure_map(map__24749);
var triage_data = map__24749__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24749__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var G__24750 = phase;
var G__24750__$1 = (((G__24750 instanceof cljs.core.Keyword))?G__24750.fqn:null);
switch (G__24750__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24751 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24752 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24753 = loc;
var G__24754 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24755_24788 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24756_24789 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24757_24790 = true;
var _STAR_print_fn_STAR__temp_val__24758_24791 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24757_24790);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24758_24791);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24746_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24746_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24756_24789);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24755_24788);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24751,G__24752,G__24753,G__24754) : format.call(null,G__24751,G__24752,G__24753,G__24754));

break;
case "macroexpansion":
var G__24759 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24760 = cause_type;
var G__24761 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24762 = loc;
var G__24763 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24759,G__24760,G__24761,G__24762,G__24763) : format.call(null,G__24759,G__24760,G__24761,G__24762,G__24763));

break;
case "compile-syntax-check":
var G__24764 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24765 = cause_type;
var G__24766 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24767 = loc;
var G__24768 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24764,G__24765,G__24766,G__24767,G__24768) : format.call(null,G__24764,G__24765,G__24766,G__24767,G__24768));

break;
case "compilation":
var G__24769 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24770 = cause_type;
var G__24771 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24772 = loc;
var G__24773 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24769,G__24770,G__24771,G__24772,G__24773) : format.call(null,G__24769,G__24770,G__24771,G__24772,G__24773));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24774 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24775 = symbol;
var G__24776 = loc;
var G__24777 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24778_24792 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24779_24793 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24780_24794 = true;
var _STAR_print_fn_STAR__temp_val__24781_24795 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24780_24794);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24781_24795);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24747_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24747_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24779_24793);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24778_24792);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24774,G__24775,G__24776,G__24777) : format.call(null,G__24774,G__24775,G__24776,G__24777));
} else {
var G__24782 = "Execution error%s at %s(%s).\n%s\n";
var G__24783 = cause_type;
var G__24784 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24785 = loc;
var G__24786 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24782,G__24783,G__24784,G__24785,G__24786) : format.call(null,G__24782,G__24783,G__24784,G__24785,G__24786));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24750__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
