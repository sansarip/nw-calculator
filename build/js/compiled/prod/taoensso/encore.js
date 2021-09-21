// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.object');
goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(12),(0)], null);
var ret__4867__auto___16611 = (function (){
taoensso.encore.have = (function taoensso$encore$have(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16612 = arguments.length;
var i__4819__auto___16613 = (0);
while(true){
if((i__4819__auto___16613 < len__4818__auto___16612)){
args__4824__auto__.push((arguments[i__4819__auto___16613]));

var G__16614 = (i__4819__auto___16613 + (1));
i__4819__auto___16613 = G__16614;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.have.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.have.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$truss_SLASH_have,null,(1),null)),args)));
}));

(taoensso.encore.have.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.have.cljs$lang$applyTo = (function (seq16605){
var G__16606 = cljs.core.first(seq16605);
var seq16605__$1 = cljs.core.next(seq16605);
var G__16607 = cljs.core.first(seq16605__$1);
var seq16605__$2 = cljs.core.next(seq16605__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16606,G__16607,seq16605__$2);
}));

return null;
})()
;
(taoensso.encore.have.cljs$lang$macro = true);


var ret__4867__auto___16615 = (function (){
taoensso.encore.have_QMARK_ = (function taoensso$encore$have_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16616 = arguments.length;
var i__4819__auto___16617 = (0);
while(true){
if((i__4819__auto___16617 < len__4818__auto___16616)){
args__4824__auto__.push((arguments[i__4819__auto___16617]));

var G__16618 = (i__4819__auto___16617 + (1));
i__4819__auto___16617 = G__16618;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.have_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.have_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$truss_SLASH_have_QMARK_,null,(1),null)),args)));
}));

(taoensso.encore.have_QMARK_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.have_QMARK_.cljs$lang$applyTo = (function (seq16608){
var G__16609 = cljs.core.first(seq16608);
var seq16608__$1 = cljs.core.next(seq16608);
var G__16610 = cljs.core.first(seq16608__$1);
var seq16608__$2 = cljs.core.next(seq16608__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16609,G__16610,seq16608__$2);
}));

return null;
})()
;
(taoensso.encore.have_QMARK_.cljs$lang$macro = true);

var ret__4867__auto___16627 = (function (){
taoensso.encore.if_clj = (function taoensso$encore$if_clj(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16628 = arguments.length;
var i__4819__auto___16629 = (0);
while(true){
if((i__4819__auto___16629 < len__4818__auto___16628)){
args__4824__auto__.push((arguments[i__4819__auto___16629]));

var G__16630 = (i__4819__auto___16629 + (1));
i__4819__auto___16629 = G__16630;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.if_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.if_clj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,then,p__16623){
var vec__16624 = p__16623;
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16624,(0),null);
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return else$;
} else {
return then;
}
}));

(taoensso.encore.if_clj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.if_clj.cljs$lang$applyTo = (function (seq16619){
var G__16620 = cljs.core.first(seq16619);
var seq16619__$1 = cljs.core.next(seq16619);
var G__16621 = cljs.core.first(seq16619__$1);
var seq16619__$2 = cljs.core.next(seq16619__$1);
var G__16622 = cljs.core.first(seq16619__$2);
var seq16619__$3 = cljs.core.next(seq16619__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16620,G__16621,G__16622,seq16619__$3);
}));

return null;
})()
;
(taoensso.encore.if_clj.cljs$lang$macro = true);

var ret__4867__auto___16639 = (function (){
taoensso.encore.if_cljs = (function taoensso$encore$if_cljs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16640 = arguments.length;
var i__4819__auto___16641 = (0);
while(true){
if((i__4819__auto___16641 < len__4818__auto___16640)){
args__4824__auto__.push((arguments[i__4819__auto___16641]));

var G__16642 = (i__4819__auto___16641 + (1));
i__4819__auto___16641 = G__16642;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.if_cljs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.if_cljs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,then,p__16635){
var vec__16636 = p__16635;
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16636,(0),null);
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return then;
} else {
return else$;
}
}));

(taoensso.encore.if_cljs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.if_cljs.cljs$lang$applyTo = (function (seq16631){
var G__16632 = cljs.core.first(seq16631);
var seq16631__$1 = cljs.core.next(seq16631);
var G__16633 = cljs.core.first(seq16631__$1);
var seq16631__$2 = cljs.core.next(seq16631__$1);
var G__16634 = cljs.core.first(seq16631__$2);
var seq16631__$3 = cljs.core.next(seq16631__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16632,G__16633,G__16634,seq16631__$3);
}));

return null;
})()
;
(taoensso.encore.if_cljs.cljs$lang$macro = true);

var ret__4867__auto___16649 = (function (){
/**
 * Like `core/if-let` but can bind multiple values for `then` iff all tests
 *   are truthy, supports internal unconditional `:let`s.
 */
taoensso.encore.if_let = (function taoensso$encore$if_let(var_args){
var G__16645 = arguments.length;
switch (G__16645) {
case 4:
return taoensso.encore.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.if_let.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.encore.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(taoensso.encore.if_let.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$){
var s = cljs.core.seq(bindings);
if(s){
var vec__16646 = s;
var seq__16647 = cljs.core.seq(vec__16646);
var first__16648 = cljs.core.first(seq__16647);
var seq__16647__$1 = cljs.core.next(seq__16647);
var b1 = first__16648;
var first__16648__$1 = cljs.core.first(seq__16647__$1);
var seq__16647__$2 = cljs.core.next(seq__16647__$1);
var b2 = first__16648__$1;
var bnext = seq__16647__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b1,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$b2__16643__auto__,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16643__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,b1,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16643__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
}
} else {
return then;
}
}));

(taoensso.encore.if_let.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.encore.if_let.cljs$lang$macro = true);

var ret__4867__auto___16657 = (function (){
/**
 * Like `core/if-some` but can bind multiple values for `then` iff all tests
 *   are non-nil, supports internal unconditional `:let`s.
 */
taoensso.encore.if_some = (function taoensso$encore$if_some(var_args){
var G__16653 = arguments.length;
switch (G__16653) {
case 4:
return taoensso.encore.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.if_some.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.encore.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(taoensso.encore.if_some.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$){
var s = cljs.core.seq(bindings);
if(s){
var vec__16654 = s;
var seq__16655 = cljs.core.seq(vec__16654);
var first__16656 = cljs.core.first(seq__16655);
var seq__16655__$1 = cljs.core.next(seq__16655);
var b1 = first__16656;
var first__16656__$1 = cljs.core.first(seq__16655__$1);
var seq__16655__$2 = cljs.core.next(seq__16655__$1);
var b2 = first__16656__$1;
var bnext = seq__16655__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b1,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$b2__16651__auto__,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16651__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,b1,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16651__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
} else {
return then;
}
}));

(taoensso.encore.if_some.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.encore.if_some.cljs$lang$macro = true);

var ret__4867__auto___16661 = (function (){
/**
 * Like `core/if-not` but acts like `if-let` when given a binding vector
 *   as test expr.
 */
taoensso.encore.if_not = (function taoensso$encore$if_not(var_args){
var G__16660 = arguments.length;
switch (G__16660) {
case 4:
return taoensso.encore.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.encore.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test_or_bindings,then){
if(cljs.core.vector_QMARK_(test_or_bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,then,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,then,null,(1),null))], 0))));
}
}));

(taoensso.encore.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test_or_bindings,then,else$){
if(cljs.core.vector_QMARK_(test_or_bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,then,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,then,null,(1),null))], 0))));
}
}));

(taoensso.encore.if_not.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.encore.if_not.cljs$lang$macro = true);

var ret__4867__auto___16667 = (function (){
/**
 * Like `core/when` but acts like `when-let` when given a binding vector
 *   as test expr.
 */
taoensso.encore.when = (function taoensso$encore$when(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16668 = arguments.length;
var i__4819__auto___16669 = (0);
while(true){
if((i__4819__auto___16669 < len__4818__auto___16668)){
args__4824__auto__.push((arguments[i__4819__auto___16669]));

var G__16670 = (i__4819__auto___16669 + (1));
i__4819__auto___16669 = G__16670;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test_or_bindings,body){
if(cljs.core.vector_QMARK_(test_or_bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}
}));

(taoensso.encore.when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.when.cljs$lang$applyTo = (function (seq16663){
var G__16664 = cljs.core.first(seq16663);
var seq16663__$1 = cljs.core.next(seq16663);
var G__16665 = cljs.core.first(seq16663__$1);
var seq16663__$2 = cljs.core.next(seq16663__$1);
var G__16666 = cljs.core.first(seq16663__$2);
var seq16663__$3 = cljs.core.next(seq16663__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16664,G__16665,G__16666,seq16663__$3);
}));

return null;
})()
;
(taoensso.encore.when.cljs$lang$macro = true);

var ret__4867__auto___16675 = (function (){
/**
 * Like `core/when-not` but acts like `when-let` when given a binding vector
 *   as test expr.
 */
taoensso.encore.when_not = (function taoensso$encore$when_not(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16676 = arguments.length;
var i__4819__auto___16677 = (0);
while(true){
if((i__4819__auto___16677 < len__4818__auto___16676)){
args__4824__auto__.push((arguments[i__4819__auto___16677]));

var G__16678 = (i__4819__auto___16677 + (1));
i__4819__auto___16677 = G__16678;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test_or_bindings,body){
if(cljs.core.vector_QMARK_(test_or_bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
}
}));

(taoensso.encore.when_not.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.when_not.cljs$lang$applyTo = (function (seq16671){
var G__16672 = cljs.core.first(seq16671);
var seq16671__$1 = cljs.core.next(seq16671);
var G__16673 = cljs.core.first(seq16671__$1);
var seq16671__$2 = cljs.core.next(seq16671__$1);
var G__16674 = cljs.core.first(seq16671__$2);
var seq16671__$3 = cljs.core.next(seq16671__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16672,G__16673,G__16674,seq16671__$3);
}));

return null;
})()
;
(taoensso.encore.when_not.cljs$lang$macro = true);

var ret__4867__auto___16683 = (function (){
taoensso.encore.when_some = (function taoensso$encore$when_some(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16684 = arguments.length;
var i__4819__auto___16685 = (0);
while(true){
if((i__4819__auto___16685 < len__4818__auto___16684)){
args__4824__auto__.push((arguments[i__4819__auto___16685]));

var G__16686 = (i__4819__auto___16685 + (1));
i__4819__auto___16685 = G__16686;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test_or_bindings,body){
if(cljs.core.vector_QMARK_(test_or_bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),(new cljs.core.List(null,test_or_bindings,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
}
}));

(taoensso.encore.when_some.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.when_some.cljs$lang$applyTo = (function (seq16679){
var G__16680 = cljs.core.first(seq16679);
var seq16679__$1 = cljs.core.next(seq16679);
var G__16681 = cljs.core.first(seq16679__$1);
var seq16679__$2 = cljs.core.next(seq16679__$1);
var G__16682 = cljs.core.first(seq16679__$2);
var seq16679__$3 = cljs.core.next(seq16679__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16680,G__16681,G__16682,seq16679__$3);
}));

return null;
})()
;
(taoensso.encore.when_some.cljs$lang$macro = true);

var ret__4867__auto___16691 = (function (){
/**
 * Like `core/when-let` but can bind multiple values for `body` iff all tests
 *   are truthy, supports internal unconditional `:let`s.
 */
taoensso.encore.when_let = (function taoensso$encore$when_let(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16692 = arguments.length;
var i__4819__auto___16693 = (0);
while(true){
if((i__4819__auto___16693 < len__4818__auto___16692)){
args__4824__auto__.push((arguments[i__4819__auto___16693]));

var G__16694 = (i__4819__auto___16693 + (1));
i__4819__auto___16693 = G__16694;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
}));

(taoensso.encore.when_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.when_let.cljs$lang$applyTo = (function (seq16687){
var G__16688 = cljs.core.first(seq16687);
var seq16687__$1 = cljs.core.next(seq16687);
var G__16689 = cljs.core.first(seq16687__$1);
var seq16687__$2 = cljs.core.next(seq16687__$1);
var G__16690 = cljs.core.first(seq16687__$2);
var seq16687__$3 = cljs.core.next(seq16687__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16688,G__16689,G__16690,seq16687__$3);
}));

return null;
})()
;
(taoensso.encore.when_let.cljs$lang$macro = true);

var ret__4867__auto___16708 = (function (){
taoensso.encore._cond = (function taoensso$encore$_cond(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16709 = arguments.length;
var i__4819__auto___16710 = (0);
while(true){
if((i__4819__auto___16710 < len__4818__auto___16709)){
args__4824__auto__.push((arguments[i__4819__auto___16710]));

var G__16711 = (i__4819__auto___16710 + (1));
i__4819__auto___16710 = G__16711;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore._cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore._cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,throw_QMARK_,clauses){
var b2__14843__auto__ = cljs.core.seq(clauses);
if(b2__14843__auto__){
var vec__16701 = b2__14843__auto__;
var seq__16702 = cljs.core.seq(vec__16701);
var first__16703 = cljs.core.first(seq__16702);
var seq__16702__$1 = cljs.core.next(seq__16702);
var test = first__16703;
var first__16703__$1 = cljs.core.first(seq__16702__$1);
var seq__16702__$2 = cljs.core.next(seq__16702__$1);
var expr = first__16703__$1;
var more = seq__16702__$2;
if(cljs.core.next(clauses)){
var G__16704 = test;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$if_DASH_not,G__16704)){
if(cljs.core.empty_QMARK_(more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`encore/cond`: missing `then` clause for special test keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_form,test,cljs.core.cst$kw$expr_DASH_form,expr], null));
} else {
var G__16705 = test;
var G__16705__$1 = (((G__16705 instanceof cljs.core.Keyword))?G__16705.fqn:null);
switch (G__16705__$1) {
case "if-let":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
case "if-some":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
case "if-not":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_not,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16705__$1)].join('')));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$if_DASH_some,G__16704)){
if(cljs.core.empty_QMARK_(more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`encore/cond`: missing `then` clause for special test keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_form,test,cljs.core.cst$kw$expr_DASH_form,expr], null));
} else {
var G__16706 = test;
var G__16706__$1 = (((G__16706 instanceof cljs.core.Keyword))?G__16706.fqn:null);
switch (G__16706__$1) {
case "if-let":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
case "if-some":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
case "if-not":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_not,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16706__$1)].join('')));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$let,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$do,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_not,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$else,G__16704)){
return expr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__16704)){
return expr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__16704)){
return expr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return_DASH_when,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$x__16695__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__16695__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$if_DASH_let,G__16704)){
if(cljs.core.empty_QMARK_(more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`encore/cond`: missing `then` clause for special test keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_form,test,cljs.core.cst$kw$expr_DASH_form,expr], null));
} else {
var G__16707 = test;
var G__16707__$1 = (((G__16707 instanceof cljs.core.Keyword))?G__16707.fqn:null);
switch (G__16707__$1) {
case "if-let":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
case "if-some":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
case "if-not":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_not,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.first(more),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(more)], 0)))),null,(1),null))], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16707__$1)].join('')));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_some,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_some,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return_DASH_some,G__16704)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$x__16696__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__16696__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if((test instanceof cljs.core.Keyword)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`encore/cond`: unrecognized special test keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_form,test,cljs.core.cst$kw$expr_DASH_form,expr], null));
} else {
if(cljs.core.vector_QMARK_(test)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(((cljs.core.list_QMARK_(test)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(test),cljs.core.cst$sym$not)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.second(test),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}
}
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
return test;
}
} else {
if(cljs.core.truth_(throw_QMARK_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_ex_DASH_info,null,(1),null)),(new cljs.core.List(null,"`encore/cond!`: no matching clause",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)))));
} else {
return null;
}
}
}));

(taoensso.encore._cond.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore._cond.cljs$lang$applyTo = (function (seq16697){
var G__16698 = cljs.core.first(seq16697);
var seq16697__$1 = cljs.core.next(seq16697);
var G__16699 = cljs.core.first(seq16697__$1);
var seq16697__$2 = cljs.core.next(seq16697__$1);
var G__16700 = cljs.core.first(seq16697__$2);
var seq16697__$3 = cljs.core.next(seq16697__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16698,G__16699,G__16700,seq16697__$3);
}));

return null;
})()
;
(taoensso.encore._cond.cljs$lang$macro = true);

var ret__4867__auto___16718 = (function (){
/**
 * Like `core/cond` but supports implicit final `else` clause, and special
 *   clause keywords for advanced behaviour:
 * 
 *   (cond
 *  :let [x "x"] ; Establish bindings visible to following forms
 * 
 *  :do (println (str "x value: " x)) ; Eval expr for side effects
 * 
 *  :if-let [y "y"
 *           z nil]
 *  "y and z were both truthy"
 * 
 *  :if-some [y "y"
 *            z nil]
 *  "y and z were both non-nil")
 * 
 *   :let support inspired by https://github.com/Engelberg/better-cond.
 *   Simple, flexible way to eliminate deeply-nested control flow code.
 */
taoensso.encore.cond = (function taoensso$encore$cond(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16719 = arguments.length;
var i__4819__auto___16720 = (0);
while(true){
if((i__4819__auto___16720 < len__4818__auto___16719)){
args__4824__auto__.push((arguments[i__4819__auto___16720]));

var G__16721 = (i__4819__auto___16720 + (1));
i__4819__auto___16720 = G__16721;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clauses], 0))));
}));

(taoensso.encore.cond.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.cond.cljs$lang$applyTo = (function (seq16715){
var G__16716 = cljs.core.first(seq16715);
var seq16715__$1 = cljs.core.next(seq16715);
var G__16717 = cljs.core.first(seq16715__$1);
var seq16715__$2 = cljs.core.next(seq16715__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16716,G__16717,seq16715__$2);
}));

return null;
})()
;
(taoensso.encore.cond.cljs$lang$macro = true);

var ret__4867__auto___16725 = (function (){
/**
 * Like `cond` but throws on non-match like `case` and `condp`.
 */
taoensso.encore.cond_BANG_ = (function taoensso$encore$cond_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16726 = arguments.length;
var i__4819__auto___16727 = (0);
while(true){
if((i__4819__auto___16727 < len__4818__auto___16726)){
args__4824__auto__.push((arguments[i__4819__auto___16727]));

var G__16728 = (i__4819__auto___16727 + (1));
i__4819__auto___16727 = G__16728;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.cond_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.cond_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clauses], 0))));
}));

(taoensso.encore.cond_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.cond_BANG_.cljs$lang$applyTo = (function (seq16722){
var G__16723 = cljs.core.first(seq16722);
var seq16722__$1 = cljs.core.next(seq16722);
var G__16724 = cljs.core.first(seq16722__$1);
var seq16722__$2 = cljs.core.next(seq16722__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16723,G__16724,seq16722__$2);
}));

return null;
})()
;
(taoensso.encore.cond_BANG_.cljs$lang$macro = true);

/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__16730 = arguments.length;
switch (G__16730) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__16731 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16731,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16731,(1),null);
var vec__16734 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16734,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16734,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

var ret__4867__auto___16745 = (function (){
/**
 * Like `core/defonce` but supports optional docstring and attrs map.
 */
taoensso.encore.defonce = (function taoensso$encore$defonce(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16746 = arguments.length;
var i__4819__auto___16747 = (0);
while(true){
if((i__4819__auto___16747 < len__4818__auto___16746)){
args__4824__auto__.push((arguments[i__4819__auto___16747]));

var G__16748 = (i__4819__auto___16747 + (1));
i__4819__auto___16747 = G__16748;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.defonce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.defonce.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,args){
var vec__16742 = taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2(sym,args);
var sym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defonce,null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defonce,null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.defonce.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.defonce.cljs$lang$applyTo = (function (seq16738){
var G__16739 = cljs.core.first(seq16738);
var seq16738__$1 = cljs.core.next(seq16738);
var G__16740 = cljs.core.first(seq16738__$1);
var seq16738__$2 = cljs.core.next(seq16738__$1);
var G__16741 = cljs.core.first(seq16738__$2);
var seq16738__$3 = cljs.core.next(seq16738__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16739,G__16740,G__16741,seq16738__$3);
}));

return null;
})()
;
(taoensso.encore.defonce.cljs$lang$macro = true);

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;

var ret__4867__auto___16758 = (function (){
taoensso.encore.do_nil = (function taoensso$encore$do_nil(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16759 = arguments.length;
var i__4819__auto___16760 = (0);
while(true){
if((i__4819__auto___16760 < len__4818__auto___16759)){
args__4824__auto__.push((arguments[i__4819__auto___16760]));

var G__16761 = (i__4819__auto___16760 + (1));
i__4819__auto___16760 = G__16761;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.do_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.do_nil.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(taoensso.encore.do_nil.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.do_nil.cljs$lang$applyTo = (function (seq16749){
var G__16750 = cljs.core.first(seq16749);
var seq16749__$1 = cljs.core.next(seq16749);
var G__16751 = cljs.core.first(seq16749__$1);
var seq16749__$2 = cljs.core.next(seq16749__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16750,G__16751,seq16749__$2);
}));

return null;
})()
;
(taoensso.encore.do_nil.cljs$lang$macro = true);


var ret__4867__auto___16762 = (function (){
taoensso.encore.do_false = (function taoensso$encore$do_false(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16763 = arguments.length;
var i__4819__auto___16764 = (0);
while(true){
if((i__4819__auto___16764 < len__4818__auto___16763)){
args__4824__auto__.push((arguments[i__4819__auto___16764]));

var G__16765 = (i__4819__auto___16764 + (1));
i__4819__auto___16764 = G__16765;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.do_false.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.do_false.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0))));
}));

(taoensso.encore.do_false.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.do_false.cljs$lang$applyTo = (function (seq16752){
var G__16753 = cljs.core.first(seq16752);
var seq16752__$1 = cljs.core.next(seq16752);
var G__16754 = cljs.core.first(seq16752__$1);
var seq16752__$2 = cljs.core.next(seq16752__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16753,G__16754,seq16752__$2);
}));

return null;
})()
;
(taoensso.encore.do_false.cljs$lang$macro = true);


var ret__4867__auto___16766 = (function (){
taoensso.encore.do_true = (function taoensso$encore$do_true(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16767 = arguments.length;
var i__4819__auto___16768 = (0);
while(true){
if((i__4819__auto___16768 < len__4818__auto___16767)){
args__4824__auto__.push((arguments[i__4819__auto___16768]));

var G__16769 = (i__4819__auto___16768 + (1));
i__4819__auto___16768 = G__16769;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.do_true.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.do_true.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0))));
}));

(taoensso.encore.do_true.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.do_true.cljs$lang$applyTo = (function (seq16755){
var G__16756 = cljs.core.first(seq16755);
var seq16755__$1 = cljs.core.next(seq16755);
var G__16757 = cljs.core.first(seq16755__$1);
var seq16755__$2 = cljs.core.next(seq16755__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16756,G__16757,seq16755__$2);
}));

return null;
})()
;
(taoensso.encore.do_true.cljs$lang$macro = true);

var ret__4867__auto___16782 = (function (){
/**
 * Cross between `doto`, `cond->` and `as->`.
 */
taoensso.encore.doto_cond = (function taoensso$encore$doto_cond(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16783 = arguments.length;
var i__4819__auto___16784 = (0);
while(true){
if((i__4819__auto___16784 < len__4818__auto___16783)){
args__4824__auto__.push((arguments[i__4819__auto___16784]));

var G__16785 = (i__4819__auto___16784 + (1));
i__4819__auto___16784 = G__16785;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.doto_cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.doto_cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16774,clauses){
var vec__16775 = p__16774;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(1),null);
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = (function (p__16778){
var vec__16779 = p__16778;
var test_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,test_expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null))], 0))));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}));

(taoensso.encore.doto_cond.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.doto_cond.cljs$lang$applyTo = (function (seq16770){
var G__16771 = cljs.core.first(seq16770);
var seq16770__$1 = cljs.core.next(seq16770);
var G__16772 = cljs.core.first(seq16770__$1);
var seq16770__$2 = cljs.core.next(seq16770__$1);
var G__16773 = cljs.core.first(seq16770__$2);
var seq16770__$3 = cljs.core.next(seq16770__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16771,G__16772,G__16773,seq16770__$3);
}));

return null;
})()
;
(taoensso.encore.doto_cond.cljs$lang$macro = true);

var ret__4867__auto___16789 = (function (){
/**
 * Declares given ns-qualified symbols, preserving metadata. Useful for
 *   circular dependencies.
 */
taoensso.encore.declare_remote = (function taoensso$encore$declare_remote(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16790 = arguments.length;
var i__4819__auto___16791 = (0);
while(true){
if((i__4819__auto___16791 < len__4818__auto___16790)){
args__4824__auto__.push((arguments[i__4819__auto___16791]));

var G__16792 = (i__4819__auto___16791 + (1));
i__4819__auto___16791 = G__16792;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.declare_remote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.declare_remote.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
var original_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
var ns = cljs.core.namespace(s);
var v = cljs.core.name(s);
var m = cljs.core.meta(s);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_in_DASH_ns,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_declare,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v),m),null,(1),null))))),null,(1),null))], 0))));
}),syms),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_in_DASH_ns,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(original_ns),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.encore.declare_remote.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.declare_remote.cljs$lang$applyTo = (function (seq16786){
var G__16787 = cljs.core.first(seq16786);
var seq16786__$1 = cljs.core.next(seq16786);
var G__16788 = cljs.core.first(seq16786__$1);
var seq16786__$2 = cljs.core.next(seq16786__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16787,G__16788,seq16786__$2);
}));

return null;
})()
;
(taoensso.encore.declare_remote.cljs$lang$macro = true);

var ret__4867__auto___16796 = (function (){
/**
 * Defines an alias for qualified source symbol, preserving its metadata (clj only):
 *  (defalias my-map-alias clojure.core/map)
 * 
 *   Cannot alias Cljs macros.
 *   Changes to source are not automatically applied to alias.
 */
taoensso.encore.defalias = (function taoensso$encore$defalias(var_args){
var G__16795 = arguments.length;
switch (G__16795) {
case 3:
return taoensso.encore.defalias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.defalias.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.defalias.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.encore.defalias.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,src){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_defalias,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(src)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,src,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(taoensso.encore.defalias.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,src){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_defalias,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,src,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(taoensso.encore.defalias.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,src,attrs){
var attrs__$1 = ((typeof attrs === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,attrs], null):attrs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$attrs__16793__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_select_DASH_keys,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,src,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$doc,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$arglists,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$private,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$macro,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,attrs__$1,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_alter_DASH_meta_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,src,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$attrs__16793__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.encore.defalias.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.encore.defalias.cljs$lang$macro = true);


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__16799 = arguments.length;
switch (G__16799) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((function (){var G__16800 = readers;
var G__16801 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__16800,G__16801) : taoensso.encore.kw_identical_QMARK_.call(null,G__16800,G__16801));
})())?(function (){var G__16802 = cljs.core.symbol;
var G__16803 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__16802,G__16803) : taoensso.encore.map_keys.call(null,G__16802,G__16803));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__16804 = default$;
var G__16805 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__16804,G__16805) : taoensso.encore.kw_identical_QMARK_.call(null,G__16804,G__16805));
})())?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__16808 = arguments.length;
switch (G__16808) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__16809 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__16810 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__16811 = null;
var _STAR_print_length_STAR__temp_val__16812 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__16811);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__16812);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__16810);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__16809);
}}));

(taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2);

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__14843__auto__ = (function (){var or__4212__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_((function (){var c__4243__auto__ = cljs.core.cst$kw$default;
var x__4244__auto__ = x;
return (x__4244__auto__ instanceof c__4243__auto__);
})())){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__14843__auto__)){
var data_map = b2__14843__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
var ret__4867__auto___16816 = (function (){
/**
 * Cross-platform try/catch/finally.
 */
taoensso.encore.catching = (function taoensso$encore$catching(var_args){
var G__16815 = arguments.length;
switch (G__16815) {
case 3:
return taoensso.encore.catching.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.catching.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.catching.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.encore.catching.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,try_expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,try_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(taoensso.encore.catching.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,try_expr,error_sym,catch_expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$try,null,(1),null)),(new cljs.core.List(null,try_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$catch,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$default,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,error_sym,null,(1),null)),(new cljs.core.List(null,catch_expr,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$try,null,(1),null)),(new cljs.core.List(null,try_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$catch,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_Throwable,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,error_sym,null,(1),null)),(new cljs.core.List(null,catch_expr,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.catching.cljs$core$IFn$_invoke$arity$6 = (function (_AMPERSAND_form,_AMPERSAND_env,try_expr,error_sym,catch_expr,finally_expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$try,null,(1),null)),(new cljs.core.List(null,try_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$catch,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$default,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,error_sym,null,(1),null)),(new cljs.core.List(null,catch_expr,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$finally,null,(1),null)),(new cljs.core.List(null,finally_expr,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$try,null,(1),null)),(new cljs.core.List(null,try_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$catch,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_Throwable,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,error_sym,null,(1),null)),(new cljs.core.List(null,catch_expr,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$finally,null,(1),null)),(new cljs.core.List(null,finally_expr,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.catching.cljs$lang$maxFixedArity = 6);

return null;
})()
;
(taoensso.encore.catching.cljs$lang$macro = true);

var ret__4867__auto___16822 = (function (){
/**
 * Handy for error-throwing unit tests.
 */
taoensso.encore.caught_error_data = (function taoensso$encore$caught_error_data(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16823 = arguments.length;
var i__4819__auto___16824 = (0);
while(true){
if((i__4819__auto___16824 < len__4818__auto___16823)){
args__4824__auto__.push((arguments[i__4819__auto___16824]));

var G__16825 = (i__4819__auto___16824 + (1));
i__4819__auto___16824 = G__16825;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.caught_error_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.caught_error_data.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__16818__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_error_DASH_data,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__16818__auto__,null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.encore.caught_error_data.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.caught_error_data.cljs$lang$applyTo = (function (seq16819){
var G__16820 = cljs.core.first(seq16819);
var seq16819__$1 = cljs.core.next(seq16819);
var G__16821 = cljs.core.first(seq16819__$1);
var seq16819__$2 = cljs.core.next(seq16819__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16820,G__16821,seq16819__$2);
}));

return null;
})()
;
(taoensso.encore.caught_error_data.cljs$lang$macro = true);

taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.transient_QMARK_ = (function taoensso$encore$transient_QMARK_(x){
return (x instanceof cljs.core.ITransientCollection);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__4210__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__4210__auto____$1)){
return true;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__4210__auto__ = (x instanceof cljs.core.Symbol);
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__4210__auto____$1)){
return true;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__4210__auto__ = (x instanceof cljs.core.Keyword);
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__4210__auto____$1)){
return true;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return ((typeof x === 'number') && ((((!(isNaN(x)))) && ((!((x === Infinity)))))));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((((!(isNaN(x)))) && ((((!((x === Infinity)))) && ((!((parseFloat(x) === parseInt(x,(10)))))))))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return ((typeof x === 'number') && ((((!(isNaN(x)))) && ((((!((x === Infinity)))) && ((parseFloat(x) === parseInt(x,(10)))))))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x < (0))))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return ((typeof x === 'number') && ((x > (0))));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return ((typeof x === 'number') && ((x < (0))));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pnum_QMARK_ = (function taoensso$encore$pnum_QMARK_(x){
var and__4210__auto__ = typeof x === 'number';
if(and__4210__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__4210__auto__;
}
});

taoensso.encore.rnum_QMARK_ = (function taoensso$encore$rnum_QMARK_(x){
var and__4210__auto__ = typeof x === 'number';
if(and__4210__auto__){
var n = x;
return (((n >= -1.0)) && ((n <= 1.0)));
} else {
return and__4210__auto__;
}
});
var c_16830 = (new cljs.core.Delay((function (){
return cljs.core.async.impl.channels.ManyToManyChannel;
}),null));
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
var c__4243__auto__ = cljs.core.deref(c_16830);
var x__4244__auto__ = x;
return (x__4244__auto__ instanceof c__4243__auto__);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__14843__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__14843__auto__)){
var ns = b2__14843__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__14843__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__14843__auto__)){
var n = b2__14843__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__14843__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__14843__auto__)){
var n = b2__14843__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__14843__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__14843__auto__)){
var n = b2__14843__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__14843__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14843__auto__)){
var n = b2__14843__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__14843__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14843__auto__)){
var n = b2__14843__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pnum = (function taoensso$encore$as__QMARK_pnum(x){
var b2__14843__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14843__auto__)){
var f = b2__14843__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_rnum = (function taoensso$encore$as__QMARK_rnum(x){
var b2__14843__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14843__auto__)){
var f = b2__14843__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < -1.0)){
return -0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")))))))){
return false;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1")))))))){
return true;
} else {
return null;
}
}
}
}
});

var regex_16835 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__16832 = arguments.length;
switch (G__16832) {
case 1:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((320),_QMARK_s);
}));

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__14843__auto__ = (function (){var and__4210__auto__ = _QMARK_s;
if(cljs.core.truth_(and__4210__auto__)){
return clojure.string.trim(_QMARK_s);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(b2__14843__auto__)){
var s = b2__14843__auto__;
if((cljs.core.count(s) <= max_len)){
return cljs.core.re_find(regex_16835,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__16834 = arguments.length;
switch (G__16834) {
case 1:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
var b2__14843__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(_QMARK_s);
if(cljs.core.truth_(b2__14843__auto__)){
var email = b2__14843__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__14843__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(max_len,_QMARK_s);
if(cljs.core.truth_(b2__14843__auto__)){
var email = b2__14843__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e16838){var _ = e16838;
return false;
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__16840 = arguments.length;
switch (G__16840) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failure against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`as-",cljs.core.name(as_name),"` failed against: `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nblank_trim(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank_DASH_trim,x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(var_args){
var G__16843 = arguments.length;
switch (G__16843) {
case 1:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__4212__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
}));

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__4212__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
}));

(taoensso.encore.as_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(var_args){
var G__16845 = arguments.length;
switch (G__16845) {
case 1:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
}));

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2(n,x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
}));

(taoensso.encore.as_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});

taoensso.encore.as_pnum = (function taoensso$encore$as_pnum(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_pnum(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pnum,x);
}
});

taoensso.encore.as_rnum = (function taoensso$encore$as_rnum(x){
var or__4212__auto__ = taoensso.encore.as__QMARK_rnum(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$rnum,x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
var ret__4867__auto___16859 = (function (){
/**
 * Returns first logical false/throwing expression (id/form), or nil.
 */
taoensso.encore.check_some = (function taoensso$encore$check_some(var_args){
var G__16855 = arguments.length;
switch (G__16855) {
case 3:
return taoensso.encore.check_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___16861 = arguments.length;
var i__4819__auto___16862 = (0);
while(true){
if((i__4819__auto___16862 < len__4818__auto___16861)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16862]));

var G__16863 = (i__4819__auto___16862 + (1));
i__4819__auto___16862 = G__16863;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.check_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.check_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (test__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_check_DASH_some,null,(1),null)),(new cljs.core.List(null,test__$1,null,(1),null)))));
}),cljs.core.cons(test,more)))));
}));

/** @this {Function} */
(taoensso.encore.check_some.cljs$lang$applyTo = (function (seq16851){
var G__16852 = cljs.core.first(seq16851);
var seq16851__$1 = cljs.core.next(seq16851);
var G__16853 = cljs.core.first(seq16851__$1);
var seq16851__$2 = cljs.core.next(seq16851__$1);
var G__16854 = cljs.core.first(seq16851__$2);
var seq16851__$3 = cljs.core.next(seq16851__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16852,G__16853,G__16854,seq16851__$3);
}));

(taoensso.encore.check_some.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,test){
var vec__16856 = ((cljs.core.vector_QMARK_(test))?test:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,test], null));
var error_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856,(0),null);
var test__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$test__16848__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$err__16849__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,test__$1,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$err__16849__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$err__16849__auto__,null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$test__16848__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,error_id,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,test__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$check_SLASH_falsey,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.check_some.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(taoensso.encore.check_some.cljs$lang$macro = true);

var ret__4867__auto___16871 = (function (){
/**
 * Returns all logical false/throwing expressions (ids/forms), or nil.
 */
taoensso.encore.check_all = (function taoensso$encore$check_all(var_args){
var G__16870 = arguments.length;
switch (G__16870) {
case 3:
return taoensso.encore.check_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___16873 = arguments.length;
var i__4819__auto___16874 = (0);
while(true){
if((i__4819__auto___16874 < len__4818__auto___16873)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16874]));

var G__16875 = (i__4819__auto___16874 + (1));
i__4819__auto___16874 = G__16875;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.check_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.check_all.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,test){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_check_DASH_some,null,(1),null)),(new cljs.core.List(null,test,null,(1),null)))));
}));

(taoensso.encore.check_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$errors__16864__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_filterv,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_identity,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (test__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_check_DASH_some,null,(1),null)),(new cljs.core.List(null,test__$1,null,(1),null)))));
}),cljs.core.cons(test,more)))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$errors__16864__auto__,null,(1),null))))),null,(1),null))], 0))));
}));

/** @this {Function} */
(taoensso.encore.check_all.cljs$lang$applyTo = (function (seq16866){
var G__16867 = cljs.core.first(seq16866);
var seq16866__$1 = cljs.core.next(seq16866);
var G__16868 = cljs.core.first(seq16866__$1);
var seq16866__$2 = cljs.core.next(seq16866__$1);
var G__16869 = cljs.core.first(seq16866__$2);
var seq16866__$3 = cljs.core.next(seq16866__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16867,G__16868,G__16869,seq16866__$3);
}));

(taoensso.encore.check_all.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(taoensso.encore.check_all.cljs$lang$macro = true);

taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__16877 = arguments.length;
switch (G__16877) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

taoensso.encore.convey_reduced = (function taoensso$encore$convey_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return cljs.core.reduced(x);
} else {
return x;
}
});
/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__16879){
var vec__16880 = p__16879;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16880,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__16884 = arguments.length;
switch (G__16884) {
case 3:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,start,end){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,start,end,step){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,step));
}));

(taoensso.encore.reduce_n.cljs$lang$maxFixedArity = 5);

/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 *  As `reduce-kv` against vector coll, but works on any seqable coll type.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var c = (taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.counter.call(null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var G__16886 = acc;
var G__16887 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
var G__16888 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__16886,G__16887,G__16888) : rf.call(null,G__16886,G__16887,G__16888));
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__16889 = acc;
var G__16890 = k;
var G__16891 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16889,G__16890,G__16891) : f.call(null,G__16889,G__16890,G__16891));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16893_SHARP_,p2__16892_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__16892_SHARP_) : proc.call(null,p2__16892_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__16896_SHARP_,p2__16894_SHARP_,p3__16895_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__16894_SHARP_,p3__16895_SHARP_) : proc.call(null,p2__16894_SHARP_,p3__16895_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__16899_SHARP_,p2__16897_SHARP_,p3__16898_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__16897_SHARP_,p3__16898_SHARP_) : proc.call(null,p2__16897_SHARP_,p3__16898_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__16902_SHARP_,p2__16900_SHARP_,p3__16901_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__16900_SHARP_,p3__16901_SHARP_) : proc.call(null,p2__16900_SHARP_,p3__16901_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__14843__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__14843__auto__)){
var p = b2__14843__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__14843__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__14843__auto__)){
var p = b2__14843__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__16905 = arguments.length;
switch (G__16905) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__16906 = (x - y);
return Math.abs(G__16906);
})() < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__16907 = (x - y);
return Math.abs(G__16907);
})() < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
var ret__4867__auto___16920 = taoensso.encore._LT__EQ__STAR_ = (function taoensso$encore$_LT__EQ__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16909__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16909__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16909__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._LT__EQ__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16921 = taoensso.encore._GT__EQ__STAR_ = (function taoensso$encore$_GT__EQ__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16910__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16910__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16910__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._GT__EQ__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16922 = taoensso.encore._LT__STAR_ = (function taoensso$encore$_LT__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16911__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16911__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16911__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._LT__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16923 = taoensso.encore._GT__STAR_ = (function taoensso$encore$_GT__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16912__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16912__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16912__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._GT__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16924 = taoensso.encore.min_STAR_ = (function taoensso$encore$min_STAR_(_AMPERSAND_form,_AMPERSAND_env,n1,n2){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$n1__16913__auto__,null,(1),null)),(new cljs.core.List(null,n1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16914__auto__,null,(1),null)),(new cljs.core.List(null,n2,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16913__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16914__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16914__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16913__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.min_STAR_.cljs$lang$macro = true);


var ret__4867__auto___16925 = taoensso.encore.max_STAR_ = (function taoensso$encore$max_STAR_(_AMPERSAND_form,_AMPERSAND_env,n1,n2){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$n1__16915__auto__,null,(1),null)),(new cljs.core.List(null,n1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16916__auto__,null,(1),null)),(new cljs.core.List(null,n2,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16915__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16916__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16916__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16915__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.max_STAR_.cljs$lang$macro = true);


var ret__4867__auto___16926 = taoensso.encore.clamp_STAR_ = (function taoensso$encore$clamp_STAR_(_AMPERSAND_form,_AMPERSAND_env,nmin,nmax,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$nmin__16917__auto__,null,(1),null)),(new cljs.core.List(null,nmin,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmax__16918__auto__,null,(1),null)),(new cljs.core.List(null,nmax,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16919__auto__,null,(1),null)),(new cljs.core.List(null,n,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16919__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmin__16917__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmin__16917__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16919__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmax__16918__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmax__16918__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16919__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.clamp_STAR_.cljs$lang$macro = true);

taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__16928 = arguments.length;
switch (G__16928) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__16929 = type;
var G__16929__$1 = (((G__16929 instanceof cljs.core.Keyword))?G__16929.fqn:null);
switch (G__16929__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
}));

(taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3);

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__16932 = n;
return Math.round(G__16932);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__16933 = (n * 10.0);
return Math.round(G__16933);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__16934 = (n * 100.0);
return Math.round(G__16934);
})() / 100.0);
});

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
var G__16935 = ((n / divisor) * 100.0);
return Math.round(G__16935);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__16937 = arguments.length;
switch (G__16937) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__16938){
var map__16939 = p__16938;
var map__16939__$1 = cljs.core.__destructure_map(map__16939);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16939__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

taoensso.encore.chance = (function taoensso$encore$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
});
taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = (((typeof window !== 'undefined'))?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__16941 = cljs.core.meta(x);
var G__16942 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__16941,G__16942) : taoensso.encore.merge.call(null,G__16941,G__16942));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__16948 = arguments.length;
switch (G__16948) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___16950 = arguments.length;
var i__4819__auto___16951 = (0);
while(true){
if((i__4819__auto___16951 < len__4818__auto___16950)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16951]));

var G__16952 = (i__4819__auto___16951 + (1));
i__4819__auto___16951 = G__16952;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__4210__auto__ = taoensso.encore.some_QMARK_(x);
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__4210__auto____$1){
return taoensso.encore.revery_QMARK_((function (p1__16943_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16943_SHARP_,x);
}),more);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq16945){
var G__16946 = cljs.core.first(seq16945);
var seq16945__$1 = cljs.core.next(seq16945);
var G__16947 = cljs.core.first(seq16945__$1);
var seq16945__$2 = cljs.core.next(seq16945__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16946,G__16947,seq16945__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__16958 = arguments.length;
switch (G__16958) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___16960 = arguments.length;
var i__4819__auto___16961 = (0);
while(true){
if((i__4819__auto___16961 < len__4818__auto___16960)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16961]));

var G__16962 = (i__4819__auto___16961 + (1));
i__4819__auto___16961 = G__16962;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq16954){
var G__16955 = cljs.core.first(seq16954);
var seq16954__$1 = cljs.core.next(seq16954);
var G__16956 = cljs.core.first(seq16954__$1);
var seq16954__$2 = cljs.core.next(seq16954__$1);
var G__16957 = cljs.core.first(seq16954__$2);
var seq16954__$3 = cljs.core.next(seq16954__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16955,G__16956,G__16957,seq16954__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__16963 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16963,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16963,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__14843__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__14843__auto__)){
var s = b2__14843__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__14843__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__14843__auto__)){
var s = b2__14843__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__16967 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16967,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16967,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16967,(2),null);
var vec__16970 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(2),null);
var vec__16973 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16966_SHARP_){
var or__4212__auto__ = p1__16966_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__16977 = arguments.length;
switch (G__16977) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16980 = arguments.length;
var i__4819__auto___16981 = (0);
while(true){
if((i__4819__auto___16981 < len__4818__auto___16980)){
args__4824__auto__.push((arguments[i__4819__auto___16981]));

var G__16982 = (i__4819__auto___16981 + (1));
i__4819__auto___16981 = G__16982;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq16979){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16979));
}));

taoensso.encore.ensure_vec = (function taoensso$encore$ensure_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.ensure_set = (function taoensso$encore$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
return goog.object.set((((o == null))?({}):o),cljs.core.name(k),v);
});
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__16986 = arguments.length;
switch (G__16986) {
case 1:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1 = (function (k){
return goog.object.get(window,cljs.core.name(k));
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,cljs.core.name(k),null);
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,cljs.core.name(k),not_found);
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_16992 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__16991 = arguments.length;
switch (G__16991) {
case 1:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(window,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = goog.object.get(o__$1,cljs.core.name(cljs.core.first(ks__$1)),sentinel_16992);
if((o__$2 === sentinel_16992)){
return not_found;
} else {
var G__16994 = o__$2;
var G__16995 = cljs.core.next(ks__$1);
o__$1 = G__16994;
ks__$1 = G__16995;
continue;
}
} else {
return o__$1;
}
break;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__17000 = arguments.length;
switch (G__17000) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17007 = arguments.length;
var i__4819__auto___17008 = (0);
while(true){
if((i__4819__auto___17008 < len__4818__auto___17007)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17008]));

var G__17009 = (i__4819__auto___17008 + (1));
i__4819__auto___17008 = G__17009;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq16997){
var G__16998 = cljs.core.first(seq16997);
var seq16997__$1 = cljs.core.next(seq16997);
var G__16999 = cljs.core.first(seq16997__$1);
var seq16997__$2 = cljs.core.next(seq16997__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16998,G__16999,seq16997__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__17005 = arguments.length;
switch (G__17005) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17011 = arguments.length;
var i__4819__auto___17012 = (0);
while(true){
if((i__4819__auto___17012 < len__4818__auto___17011)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17012]));

var G__17013 = (i__4819__auto___17012 + (1));
i__4819__auto___17012 = G__17013;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq17002){
var G__17003 = cljs.core.first(seq17002);
var seq17002__$1 = cljs.core.next(seq17002);
var G__17004 = cljs.core.first(seq17002__$1);
var seq17002__$2 = cljs.core.next(seq17002__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17003,G__17004,seq17002__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__17019 = arguments.length;
switch (G__17019) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17039 = arguments.length;
var i__4819__auto___17040 = (0);
while(true){
if((i__4819__auto___17040 < len__4818__auto___17039)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17040]));

var G__17041 = (i__4819__auto___17040 + (1));
i__4819__auto___17040 = G__17041;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq17015){
var G__17016 = cljs.core.first(seq17015);
var seq17015__$1 = cljs.core.next(seq17015);
var G__17017 = cljs.core.first(seq17015__$1);
var seq17015__$2 = cljs.core.next(seq17015__$1);
var G__17018 = cljs.core.first(seq17015__$2);
var seq17015__$3 = cljs.core.next(seq17015__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17016,G__17017,G__17018,seq17015__$3);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__17025 = arguments.length;
switch (G__17025) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17043 = arguments.length;
var i__4819__auto___17044 = (0);
while(true){
if((i__4819__auto___17044 < len__4818__auto___17043)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17044]));

var G__17045 = (i__4819__auto___17044 + (1));
i__4819__auto___17044 = G__17045;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq17021){
var G__17022 = cljs.core.first(seq17021);
var seq17021__$1 = cljs.core.next(seq17021);
var G__17023 = cljs.core.first(seq17021__$1);
var seq17021__$2 = cljs.core.next(seq17021__$1);
var G__17024 = cljs.core.first(seq17021__$2);
var seq17021__$3 = cljs.core.next(seq17021__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17022,G__17023,G__17024,seq17021__$3);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv if its value is not nil, otherwise dissocs it.
 */
taoensso.encore.dis_assoc_some = (function taoensso$encore$dis_assoc_some(var_args){
var G__17031 = arguments.length;
switch (G__17031) {
case 3:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17047 = arguments.length;
var i__4819__auto___17048 = (0);
while(true){
if((i__4819__auto___17048 < len__4818__auto___17047)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17048]));

var G__17049 = (i__4819__auto___17048 + (1));
i__4819__auto___17048 = G__17049;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.dis_assoc_some.cljs$lang$applyTo = (function (seq17027){
var G__17028 = cljs.core.first(seq17027);
var seq17027__$1 = cljs.core.next(seq17027);
var G__17029 = cljs.core.first(seq17027__$1);
var seq17027__$2 = cljs.core.next(seq17027__$1);
var G__17030 = cljs.core.first(seq17027__$2);
var seq17027__$3 = cljs.core.next(seq17027__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17028,G__17029,G__17030,seq17027__$3);
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.dis_assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__17037 = arguments.length;
switch (G__17037) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17051 = arguments.length;
var i__4819__auto___17052 = (0);
while(true){
if((i__4819__auto___17052 < len__4818__auto___17051)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17052]));

var G__17053 = (i__4819__auto___17052 + (1));
i__4819__auto___17052 = G__17053;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq17033){
var G__17034 = cljs.core.first(seq17033);
var seq17033__$1 = cljs.core.next(seq17033);
var G__17035 = cljs.core.first(seq17033__$1);
var seq17033__$2 = cljs.core.next(seq17033__$1);
var G__17036 = cljs.core.first(seq17033__$2);
var seq17033__$3 = cljs.core.next(seq17033__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17034,G__17035,G__17036,seq17033__$3);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__17055 = arguments.length;
switch (G__17055) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__17058 = arguments.length;
switch (G__17058) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__17060 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17060,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__17066 = xs__$1;
var seq__17067 = cljs.core.seq(vec__17066);
var first__17068 = cljs.core.first(seq__17067);
var seq__17067__$1 = cljs.core.next(seq__17067);
var x1 = first__17068;
var xn = seq__17067__$1;
if(xn){
var G__17069 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__17070 = xn;
butlast = G__17069;
xs__$1 = G__17070;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.ensure_set(x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17073 = arguments.length;
var i__4819__auto___17074 = (0);
while(true){
if((i__4819__auto___17074 < len__4818__auto___17073)){
args__4824__auto__.push((arguments[i__4819__auto___17074]));

var G__17075 = (i__4819__auto___17074 + (1));
i__4819__auto___17074 = G__17075;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq17071){
var G__17072 = cljs.core.first(seq17071);
var seq17071__$1 = cljs.core.next(seq17071);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17072,seq17071__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__17080 = arguments.length;
switch (G__17080) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17082 = arguments.length;
var i__4819__auto___17083 = (0);
while(true){
if((i__4819__auto___17083 < len__4818__auto___17082)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17083]));

var G__17084 = (i__4819__auto___17083 + (1));
i__4819__auto___17083 = G__17084;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq17077){
var G__17078 = cljs.core.first(seq17077);
var seq17077__$1 = cljs.core.next(seq17077);
var G__17079 = cljs.core.first(seq17077__$1);
var seq17077__$2 = cljs.core.next(seq17077__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17078,G__17079,seq17077__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_(coll)))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__17086 = arguments.length;
switch (G__17086) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__17089 = arguments.length;
switch (G__17089) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
return (function() {
var G__17091 = null;
var G__17091__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__17091__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__17091__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__17091 = function(acc,input){
switch(arguments.length){
case 0:
return G__17091__0.call(this);
case 1:
return G__17091__1.call(this,acc);
case 2:
return G__17091__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17091.cljs$core$IFn$_invoke$arity$0 = G__17091__0;
G__17091.cljs$core$IFn$_invoke$arity$1 = G__17091__1;
G__17091.cljs$core$IFn$_invoke$arity$2 = G__17091__2;
return G__17091;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

var p_BANG__17101 = cljs.core.persistent_BANG_;
var t_17102 = cljs.core.transient$;
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
var G__17092 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),(function (){var G__17093 = cljs.core.PersistentArrayMap.EMPTY;
return (t_17102.cljs$core$IFn$_invoke$arity$1 ? t_17102.cljs$core$IFn$_invoke$arity$1(G__17093) : t_17102.call(null,G__17093));
})(),m);
return (p_BANG__17101.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17101.cljs$core$IFn$_invoke$arity$1(G__17092) : p_BANG__17101.call(null,G__17092));
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
var G__17094 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),(function (){var G__17095 = cljs.core.PersistentArrayMap.EMPTY;
return (t_17102.cljs$core$IFn$_invoke$arity$1 ? t_17102.cljs$core$IFn$_invoke$arity$1(G__17095) : t_17102.call(null,G__17095));
})(),m);
return (p_BANG__17101.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17101.cljs$core$IFn$_invoke$arity$1(G__17094) : p_BANG__17101.call(null,G__17094));
});

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17096 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),(t_17102.cljs$core$IFn$_invoke$arity$1 ? t_17102.cljs$core$IFn$_invoke$arity$1(m) : t_17102.call(null,m)),m);
return (p_BANG__17101.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17101.cljs$core$IFn$_invoke$arity$1(G__17096) : p_BANG__17101.call(null,G__17096));
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17097 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_17102.cljs$core$IFn$_invoke$arity$1 ? t_17102.cljs$core$IFn$_invoke$arity$1(m) : t_17102.call(null,m)),m);
return (p_BANG__17101.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17101.cljs$core$IFn$_invoke$arity$1(G__17097) : p_BANG__17101.call(null,G__17097));
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17098 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_17102.cljs$core$IFn$_invoke$arity$1 ? t_17102.cljs$core$IFn$_invoke$arity$1(m) : t_17102.call(null,m)),m);
return (p_BANG__17101.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17101.cljs$core$IFn$_invoke$arity$1(G__17098) : p_BANG__17101.call(null,G__17098));
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17099 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_17102.cljs$core$IFn$_invoke$arity$1 ? t_17102.cljs$core$IFn$_invoke$arity$1(m) : t_17102.call(null,m)),m);
return (p_BANG__17101.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17101.cljs$core$IFn$_invoke$arity$1(G__17099) : p_BANG__17101.call(null,G__17099));
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17100 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_17102.cljs$core$IFn$_invoke$arity$1 ? t_17102.cljs$core$IFn$_invoke$arity$1(m) : t_17102.call(null,m)),m);
return (p_BANG__17101.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17101.cljs$core$IFn$_invoke$arity$1(G__17100) : p_BANG__17101.call(null,G__17100));
}
});
/**
 * Returns a map like the one given, replacing keys using
 *   the given {<old-new> <new-key>} replacements.
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
var b2__14843__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(k) : replacements.call(null,k));
if(cljs.core.truth_(b2__14843__auto__)){
var rk = b2__14843__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k),rk,v);
} else {
return m__$1;
}
}),cljs.core.transient$(m),m));
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.ensure_set(ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__17103_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__17103_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__17105 = arguments.length;
switch (G__17105) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__14843__auto__ = cljs.core.seq(ks);
if(b2__14843__auto__){
var ks_seq = b2__14843__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__14843__auto____$1 = cljs.core.next(ks_seq);
if(b2__14843__auto____$1){
var ks__$1 = b2__14843__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__17106 = f;
var G__17107 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17106,G__17107) : taoensso.encore.kw_identical_QMARK_.call(null,G__17106,G__17107));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__17108 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17108) : f.call(null,G__17108));
})();
if(cljs.core.truth_((function (){var G__17109 = v;
var G__17110 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17109,G__17110) : taoensso.encore.kw_identical_QMARK_.call(null,G__17109,G__17110));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__17113 = arguments.length;
switch (G__17113) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__17120 = arguments.length;
switch (G__17120) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17122 = arguments.length;
var i__4819__auto___17123 = (0);
while(true){
if((i__4819__auto___17123 < len__4818__auto___17122)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17123]));

var G__17124 = (i__4819__auto___17123 + (1));
i__4819__auto___17123 = G__17124;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq17116){
var G__17117 = cljs.core.first(seq17116);
var seq17116__$1 = cljs.core.next(seq17116);
var G__17118 = cljs.core.first(seq17116__$1);
var seq17116__$2 = cljs.core.next(seq17116__$1);
var G__17119 = cljs.core.first(seq17116__$2);
var seq17116__$3 = cljs.core.next(seq17116__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17117,G__17118,G__17119,seq17116__$3);
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__17126 = arguments.length;
switch (G__17126) {
case 1:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__4212__auto__ = basis;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null,v)))){
var paths_from_basis = taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,in$){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,in$);
}),acc,paths_from_basis);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),m));
}));

(taoensso.encore.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__17132 = arguments.length;
switch (G__17132) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17134 = arguments.length;
var i__4819__auto___17135 = (0);
while(true){
if((i__4819__auto___17135 < len__4818__auto___17134)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17135]));

var G__17136 = (i__4819__auto___17135 + (1));
i__4819__auto___17135 = G__17136;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq17129){
var G__17130 = cljs.core.first(seq17129);
var seq17129__$1 = cljs.core.next(seq17129);
var G__17131 = cljs.core.first(seq17129__$1);
var seq17129__$2 = cljs.core.next(seq17129__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17130,G__17131,seq17129__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__17137 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__17138 = cljs.core.next(s1);
var G__17139 = cljs.core.next(s2);
v = G__17137;
s1 = G__17138;
s2 = G__17139;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var ret__4867__auto___17140 = taoensso.encore.new_object = (function taoensso$encore$new_object(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$Object$,null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.new_object.cljs$lang$macro = true);

var not_found_17147 = ({});
taoensso.encore._merge_with = (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv((function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_17147);
if((lv === not_found_17147)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__17143 = rv;
var G__17144 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17143,G__17144) : taoensso.encore.kw_identical_QMARK_.call(null,G__17143,G__17144));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((function (){var G__17145 = new_rv;
var G__17146 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17145,G__17146) : taoensso.encore.kw_identical_QMARK_.call(null,G__17145,G__17146));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
}),(function (){var or__4212__auto__ = acc;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
}),null,maps);
});
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17154 = arguments.length;
var i__4819__auto___17155 = (0);
while(true){
if((i__4819__auto___17155 < len__4818__auto___17154)){
args__4824__auto__.push((arguments[i__4819__auto___17155]));

var G__17156 = (i__4819__auto___17155 + (1));
i__4819__auto___17155 = G__17156;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq17148){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17148));
}));


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17157 = arguments.length;
var i__4819__auto___17158 = (0);
while(true){
if((i__4819__auto___17158 < len__4818__auto___17157)){
args__4824__auto__.push((arguments[i__4819__auto___17158]));

var G__17159 = (i__4819__auto___17158 + (1));
i__4819__auto___17158 = G__17159;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq17149){
var G__17150 = cljs.core.first(seq17149);
var seq17149__$1 = cljs.core.next(seq17149);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17150,seq17149__$1);
}));


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17160 = arguments.length;
var i__4819__auto___17161 = (0);
while(true){
if((i__4819__auto___17161 < len__4818__auto___17160)){
args__4824__auto__.push((arguments[i__4819__auto___17161]));

var G__17162 = (i__4819__auto___17161 + (1));
i__4819__auto___17161 = G__17162;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq17151){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17151));
}));


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17163 = arguments.length;
var i__4819__auto___17164 = (0);
while(true){
if((i__4819__auto___17164 < len__4818__auto___17163)){
args__4824__auto__.push((arguments[i__4819__auto___17164]));

var G__17165 = (i__4819__auto___17164 + (1));
i__4819__auto___17164 = G__17165;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,f,maps);
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq17152){
var G__17153 = cljs.core.first(seq17152);
var seq17152__$1 = cljs.core.next(seq17152);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17153,seq17152__$1);
}));


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = cljs.core.cst$sym$clojure$lang$IAtom;
var ret__4867__auto___17177 = (function (){
/**
 * Micro optimization, mostly for cljs.
 */
taoensso.encore._if_cas_BANG_ = (function taoensso$encore$_if_cas_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17178 = arguments.length;
var i__4819__auto___17179 = (0);
while(true){
if((i__4819__auto___17179 < len__4818__auto___17178)){
args__4824__auto__.push((arguments[i__4819__auto___17179]));

var G__17180 = (i__4819__auto___17179 + (1));
i__4819__auto___17179 = G__17180;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((6) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((6)),(0),null)):null);
return taoensso.encore._if_cas_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4825__auto__);
});

(taoensso.encore._if_cas_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,atom_,old_val,new_val,then,p__17173){
var vec__17174 = p__17173;
var _QMARK_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17174,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_reset_BANG_,null,(1),null)),(new cljs.core.List(null,atom_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new_val,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$compareAndSet,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(atom_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,old_val,null,(1),null)),(new cljs.core.List(null,new_val,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,_QMARK_else,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore._if_cas_BANG_.cljs$lang$maxFixedArity = (6));

/** @this {Function} */
(taoensso.encore._if_cas_BANG_.cljs$lang$applyTo = (function (seq17166){
var G__17167 = cljs.core.first(seq17166);
var seq17166__$1 = cljs.core.next(seq17166);
var G__17168 = cljs.core.first(seq17166__$1);
var seq17166__$2 = cljs.core.next(seq17166__$1);
var G__17169 = cljs.core.first(seq17166__$2);
var seq17166__$3 = cljs.core.next(seq17166__$2);
var G__17170 = cljs.core.first(seq17166__$3);
var seq17166__$4 = cljs.core.next(seq17166__$3);
var G__17171 = cljs.core.first(seq17166__$4);
var seq17166__$5 = cljs.core.next(seq17166__$4);
var G__17172 = cljs.core.first(seq17166__$5);
var seq17166__$6 = cljs.core.next(seq17166__$5);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17167,G__17168,G__17169,G__17170,G__17171,G__17172,seq17166__$6);
}));

return null;
})()
;
(taoensso.encore._if_cas_BANG_.cljs$lang$macro = true);

/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value actually changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref(atom_);
cljs.core.reset_BANG_(atom_,val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,val)){
return false;
} else {
return true;
}
break;
}
});
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__17181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17181) : f.call(null,G__17181));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
cljs.core.reset_BANG_(atom_,m1);

return v1;
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
cljs.core.reset_BANG_(atom_,v1);

if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref(atom_);
cljs.core.reset_BANG_(atom_,v1);

return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((function (){var G__17182 = f;
var G__17183 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17182,G__17183) : taoensso.encore.kw_identical_QMARK_.call(null,G__17182,G__17183));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
cljs.core.reset_BANG_(atom_,m1);

var G__17184 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__17185 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17184,G__17185) : return$.call(null,G__17184,G__17185));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__17186 = v1;
var G__17187 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17186,G__17187) : taoensso.encore.kw_identical_QMARK_.call(null,G__17186,G__17187));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
cljs.core.reset_BANG_(atom_,m1);

if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
cljs.core.reset_BANG_(atom_,m1);

var G__17188 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__17189 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17188,G__17189) : return$.call(null,G__17188,G__17189));
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__14843__auto__ = cljs.core.seq(ks);
if(b2__14843__auto__){
var ks_seq = b2__14843__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__17190 = f;
var G__17191 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17190,G__17191) : taoensso.encore.kw_identical_QMARK_.call(null,G__17190,G__17191));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__14843__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__14843__auto__))
,ks);
cljs.core.reset_BANG_(atom_,m1);

var G__17192 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__17193 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17192,G__17193) : return$.call(null,G__17192,G__17193));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__17194 = v1;
var G__17195 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17194,G__17195) : taoensso.encore.kw_identical_QMARK_.call(null,G__17194,G__17195));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__14843__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__14843__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
cljs.core.reset_BANG_(atom_,m1);

if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__14843__auto__ = cljs.core.seq(ks);
if(b2__14843__auto__){
var ks_seq = b2__14843__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
cljs.core.reset_BANG_(atom_,m1);

var G__17196 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__17197 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17196,G__17197) : return$.call(null,G__17196,G__17197));
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_17200 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__17199 = arguments.length;
switch (G__17199) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_17200,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_17200,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_17204 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__17203 = arguments.length;
switch (G__17203) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_17204,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_17204,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_17208 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__17207 = arguments.length;
switch (G__17207) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_17208,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_17208,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__17211 = arguments.length;
switch (G__17211) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__17212 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17212,(0),null);
return v0;
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

var not_found_17218 = ({});
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_17218,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});
var return_17221 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__17220 = arguments.length;
switch (G__17220) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_17221,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_17221,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_17221,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_17225 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__17224 = arguments.length;
switch (G__17224) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_17225,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_17225,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_17225,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_17229 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__17228 = arguments.length;
switch (G__17228) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_17229,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_17229,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_17229,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);

var ret__4867__auto___17231 = taoensso.encore.now_dt_STAR_ = (function taoensso$encore$now_dt_STAR_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Date$,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$java$util$Date$,null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.now_dt_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17232 = taoensso.encore.now_udt_STAR_ = (function taoensso$encore$now_udt_STAR_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$getTime,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Date$,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$java$lang$System_SLASH_currentTimeMillis,null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.now_udt_STAR_.cljs$lang$macro = true);


taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__14843__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__14843__auto__)){
var perf = b2__14843__auto__;
var b2__14843__auto____$1 = (function (){var or__4212__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
var or__4212__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__4212__auto____$3)){
return or__4212__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__14843__auto____$1)){
var f = b2__14843__auto____$1;
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
})();

var ret__4867__auto___17233 = taoensso.encore.now_nano_STAR_ = (function taoensso$encore$now_nano_STAR_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$java$lang$System_SLASH_nanoTime,null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.now_nano_STAR_.cljs$lang$macro = true);

/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var G__17242__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__17236 = x1;
var G__17237 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17236,G__17237) : taoensso.encore.kw_identical_QMARK_.call(null,G__17236,G__17237));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__17238 = x2;
var G__17239 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17238,G__17239) : taoensso.encore.kw_identical_QMARK_.call(null,G__17238,G__17239));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__17240 = x1;
var G__17241 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17240,G__17241) : taoensso.encore.kw_identical_QMARK_.call(null,G__17240,G__17241));
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__17242 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17243__i = 0, G__17243__a = new Array(arguments.length -  0);
while (G__17243__i < G__17243__a.length) {G__17243__a[G__17243__i] = arguments[G__17243__i + 0]; ++G__17243__i;}
  xs = new cljs.core.IndexedSeq(G__17243__a,0,null);
} 
return G__17242__delegate.call(this,xs);};
G__17242.cljs$lang$maxFixedArity = 0;
G__17242.cljs$lang$applyTo = (function (arglist__17244){
var xs = cljs.core.seq(arglist__17244);
return G__17242__delegate(xs);
});
G__17242.cljs$core$IFn$_invoke$arity$variadic = G__17242__delegate;
return G__17242;
})()
;
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__17245__delegate = function (args){
return cljs.core.deref((function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null))]);
}
})),args);
}
})());
};
var G__17245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17246__i = 0, G__17246__a = new Array(arguments.length -  0);
while (G__17246__i < G__17246__a.length) {G__17246__a[G__17246__i] = arguments[G__17246__i + 0]; ++G__17246__i;}
  args = new cljs.core.IndexedSeq(G__17246__a,0,null);
} 
return G__17245__delegate.call(this,args);};
G__17245.cljs$lang$maxFixedArity = 0;
G__17245.cljs$lang$applyTo = (function (arglist__17247){
var args = cljs.core.seq(arglist__17247);
return G__17245__delegate(args);
});
G__17245.cljs$core$IFn$_invoke$arity$variadic = G__17245__delegate;
return G__17245;
})()
;
});
var ret__4867__auto___17248 = taoensso.encore._gc_now_QMARK_ = (function taoensso$encore$_gc_now_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$java$lang$Math_SLASH_random,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1.0 / (16000)),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$random,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Math,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1.0 / (16000)),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._gc_now_QMARK_.cljs$lang$macro = true);


/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__17250 = arguments.length;
switch (G__17250) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_17272 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17251){if((e17251 instanceof Error)){
var e_17272 = e17251;
return e_17272;
} else {
throw e17251;

}
}})();
if((e_17272 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1915,"(pos-int? ttl-ms)",ttl_ms,e_17272,null);
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return (function() { 
var G__17273__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__17252 = a1;
var G__17253 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17252,G__17253) : taoensso.encore.kw_identical_QMARK_.call(null,G__17252,G__17253));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__17254 = a2;
var G__17255 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17254,G__17255) : taoensso.encore.kw_identical_QMARK_.call(null,G__17254,G__17255));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_17274 = null;
cljs.core.reset_BANG_(latch_,latch_17274);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__4212__auto__ = m;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var fresh_QMARK_ = (function (){var G__17256 = a1;
var G__17257 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17256,G__17257) : taoensso.encore.kw_identical_QMARK_.call(null,G__17256,G__17257));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__4212__auto__ = (_QMARK_e == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
}));
return cljs.core.deref(e.delay);
}
};
var G__17273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17275__i = 0, G__17275__a = new Array(arguments.length -  0);
while (G__17275__i < G__17275__a.length) {G__17275__a[G__17275__i] = arguments[G__17275__i + 0]; ++G__17275__i;}
  args = new cljs.core.IndexedSeq(G__17275__a,0,null);
} 
return G__17273__delegate.call(this,args);};
G__17273.cljs$lang$maxFixedArity = 0;
G__17273.cljs$lang$applyTo = (function (arglist__17276){
var args = cljs.core.seq(arglist__17276);
return G__17273__delegate(args);
});
G__17273.cljs$core$IFn$_invoke$arity$variadic = G__17273__delegate;
return G__17273;
})()
;
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (){var fexpr__17259 = (function (x){
var or__4212__auto__ = (x == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__17260 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__17260.cljs$core$IFn$_invoke$arity$1 ? fexpr__17260.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17260.call(null,x));
}
});
return fexpr__17259(ttl_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1967,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_17277 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17261){if((e17261 instanceof Error)){
var e_17277 = e17261;
return e_17277;
} else {
throw e17261;

}
}})();
if((e_17277 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1968,"(pos-int? cache-size)",cache_size,e_17277,null);
}

var tick_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__4212__auto__ = ttl_ms;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = (!((ttl_ms__$1 === (0))));
var cache_size__$1 = cljs.core.long$(cache_size);
return (function() { 
var G__17278__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__17262 = a1;
var G__17263 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17262,G__17263) : taoensso.encore.kw_identical_QMARK_.call(null,G__17262,G__17263));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__17264 = a2;
var G__17265 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17264,G__17265) : taoensso.encore.kw_identical_QMARK_.call(null,G__17264,G__17265));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_17279 = null;
cljs.core.reset_BANG_(latch_,latch_17279);

if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$((function (){var or__4212__auto__ = m;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var snapshot_17280 = cljs.core.deref(cache_);
var n_to_gc_17281 = (cljs.core.count(snapshot_17280) - cache_size__$1);
if((n_to_gc_17281 > (64))){
var ks_to_gc_17282 = (function (){var G__17266 = n_to_gc_17281;
var G__17267 = (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_17280,k);
return (e.tick_lru + e.tick_lfu);
});
var G__17268 = cljs.core.keys(snapshot_17280);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__17266,G__17267,G__17268) : taoensso.encore.top.call(null,G__17266,G__17267,G__17268));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,(function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),cljs.core.transient$((function (){var or__4212__auto__ = m;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_17282));
}));
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__17269 = a1;
var G__17270 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17269,G__17270) : taoensso.encore.kw_identical_QMARK_.call(null,G__17269,G__17270));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,(function (n){
return (n + (1));
}));
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__4212__auto__ = (_QMARK_e == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
}));
return cljs.core.deref(e.delay);
}
};
var G__17278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17283__i = 0, G__17283__a = new Array(arguments.length -  0);
while (G__17283__i < G__17283__a.length) {G__17283__a[G__17283__i] = arguments[G__17283__i + 0]; ++G__17283__i;}
  args = new cljs.core.IndexedSeq(G__17283__a,0,null);
} 
return G__17278__delegate.call(this,args);};
G__17278.cljs$lang$maxFixedArity = 0;
G__17278.cljs$lang$applyTo = (function (arglist__17284){
var args = cljs.core.seq(arglist__17284);
return G__17278__delegate(args);
});
G__17278.cljs$core$IFn$_invoke$arity$variadic = G__17278__delegate;
return G__17278;
})()
;
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);

/**
 * Fastest-possible Clj memoize. Non-racy, 0-3 arity only.
 *   Cljs just passes through to `core/memoize`.
 */
taoensso.encore.fmemoize = (function taoensso$encore$fmemoize(f){
return cljs.core.memoize(f);
});

/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_sid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_17297 = (function (n,ms){
var e_17298 = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17285){if((e17285 instanceof Error)){
var e_17298 = e17285;
return e_17298;
} else {
throw e17285;

}
}})();
if((e_17298 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2124,"(pos-int? n)",n,e_17298,null);
}

var e_17299 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17286){if((e17286 instanceof Error)){
var e_17299 = e17286;
return e_17299;
} else {
throw e17286;

}
}})();
if((e_17299 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2124,"(pos-int? ms)",ms,e_17299,null);
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,sid,p__17287){
var vec__17288 = p__17287;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17288,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17288,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_17297(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__17291){
var vec__17292 = p__17291;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__4212__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__17296 = i.cljs$core$IDeref$_deref$arity$1(null);
var fexpr__17295 = (function (i__$1){
return (i__$1 + (1));
});
return fexpr__17295(G__17296);
})());
}
})(),limit_spec_17297(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`encore/cond!`: no matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if(((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5)))){
var latch_17306 = null;
cljs.core.reset_BANG_(latch_,latch_17306);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,(function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv((function (acc__$1,sid,e){
var b2__14843__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__14843__auto__)){
var s = b2__14843__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
}),cljs.core.transient$((function (){var or__4212__auto__ = reqs;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
}));
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__14843__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__14843__auto__)){
var s = b2__14843__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__4212__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__14843__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__14843__auto__)){
var h = b2__14843__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__14843__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__14843__auto__)){
var l = b2__14843__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__14843__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__14843__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__14843__auto____$1)){
var e = b2__14843__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__14843__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries));

return null;
}
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,(function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((function (){var G__17300 = cmd;
var G__17301 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17300,G__17301) : taoensso.encore.kw_identical_QMARK_.call(null,G__17300,G__17301));
})())){
if(cljs.core.truth_((function (){var G__17302 = req_id;
var G__17303 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17302,G__17303) : taoensso.encore.kw_identical_QMARK_.call(null,G__17302,G__17303));
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__17304 = cmd;
var G__17305 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17304,G__17305) : taoensso.encore.kw_identical_QMARK_.call(null,G__17304,G__17305));
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,cmd,cljs.core.cst$kw$req_DASH_id,req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__17307 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(1),null);
return f;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.Counter = (function (n_){
this.n_ = n_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.Counter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.n_);
}));

(taoensso.encore.Counter.prototype.call = (function() {
var G__17333 = null;
var G__17333__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17312 = cljs.core._deref(self__.n_);
var fexpr__17311 = (function (c){
return (c + (1));
});
return fexpr__17311(G__17312);
})());

return n;
});
var G__17333__2 = (function (self__,add){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17314 = cljs.core._deref(self__.n_);
var fexpr__17313 = (function (c){
return (c + add);
});
return fexpr__17313(G__17314);
})());

return n;
});
var G__17333__3 = (function (self__,action,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17315 = action;
var G__17315__$1 = (((G__17315 instanceof cljs.core.Keyword))?G__17315.fqn:null);
switch (G__17315__$1) {
case "add":
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17317 = cljs.core._deref(self__.n_);
var fexpr__17316 = (function (c){
return (c + n);
});
return fexpr__17316(G__17317);
})());

return null;

break;
case "set":
cljs.core.vreset_BANG_(self__.n_,n);

return null;

break;
case "set=":
case "set-get":
return cljs.core.vreset_BANG_(self__.n_,n);

break;
case "=set":
case "get-set":
var o = cljs.core.deref(self__.n_);
cljs.core.vreset_BANG_(self__.n_,n);

return o;

break;
case "=+":
case "get-add":
var o = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17319 = cljs.core._deref(self__.n_);
var fexpr__17318 = (function (c){
return (c + n);
});
return fexpr__17318(G__17319);
})());

return o;

break;
case "+=":
case "add-get":
return cljs.core._vreset_BANG_(self__.n_,(function (){var G__17321 = cljs.core._deref(self__.n_);
var fexpr__17320 = (function (c){
return (c + n);
});
return fexpr__17320(G__17321);
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17315__$1)].join('')));

}
});
G__17333 = function(self__,action,n){
switch(arguments.length){
case 1:
return G__17333__1.call(this,self__);
case 2:
return G__17333__2.call(this,self__,action);
case 3:
return G__17333__3.call(this,self__,action,n);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__17333.cljs$core$IFn$_invoke$arity$1 = G__17333__1;
G__17333.cljs$core$IFn$_invoke$arity$2 = G__17333__2;
G__17333.cljs$core$IFn$_invoke$arity$3 = G__17333__3;
return G__17333;
})()
);

(taoensso.encore.Counter.prototype.apply = (function (self__,args17310){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17310)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17323 = cljs.core._deref(self__.n_);
var fexpr__17322 = (function (c){
return (c + (1));
});
return fexpr__17322(G__17323);
})());

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17325 = cljs.core._deref(self__.n_);
var fexpr__17324 = (function (c){
return (c + add);
});
return fexpr__17324(G__17325);
})());

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__17326 = action;
var G__17326__$1 = (((G__17326 instanceof cljs.core.Keyword))?G__17326.fqn:null);
switch (G__17326__$1) {
case "add":
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17328 = cljs.core._deref(self__.n_);
var fexpr__17327 = (function (c){
return (c + n);
});
return fexpr__17327(G__17328);
})());

return null;

break;
case "set":
cljs.core.vreset_BANG_(self__.n_,n);

return null;

break;
case "set=":
case "set-get":
return cljs.core.vreset_BANG_(self__.n_,n);

break;
case "=set":
case "get-set":
var o = cljs.core.deref(self__.n_);
cljs.core.vreset_BANG_(self__.n_,n);

return o;

break;
case "=+":
case "get-add":
var o = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17330 = cljs.core._deref(self__.n_);
var fexpr__17329 = (function (c){
return (c + n);
});
return fexpr__17329(G__17330);
})());

return o;

break;
case "+=":
case "add-get":
return cljs.core._vreset_BANG_(self__.n_,(function (){var G__17332 = cljs.core._deref(self__.n_);
var fexpr__17331 = (function (c){
return (c + n);
});
return fexpr__17331(G__17332);
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17326__$1)].join('')));

}
}));

(taoensso.encore.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$n_], null);
}));

(taoensso.encore.Counter.cljs$lang$type = true);

(taoensso.encore.Counter.cljs$lang$ctorStr = "taoensso.encore/Counter");

(taoensso.encore.Counter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/Counter");
}));

/**
 * Positional factory function for taoensso.encore/Counter.
 */
taoensso.encore.__GT_Counter = (function taoensso$encore$__GT_Counter(n_){
return (new taoensso.encore.Counter(n_));
});

/**
 * Returns a fast atomic Counter with `init` initial int value:
 *  - (<counter>    ) -> add 1, return old val
 *  - (<counter> <n>) -> add n, return old val
 * 
 *  Experimental 3-arity version takes an `action`:
 *    :add, :set, :set-get, :get-set, :get-add, :add-get
 */
taoensso.encore.counter = (function taoensso$encore$counter(var_args){
var G__17337 = arguments.length;
switch (G__17337) {
case 0:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((0));
}));

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new taoensso.encore.Counter(cljs.core.volatile_BANG_(init)));
}));

(taoensso.encore.counter.cljs$lang$maxFixedArity = 1);

taoensso.encore.rc_deref = (function taoensso$encore$rc_deref(msecs,ts_,n_skip_,gc_fn){
var t1 = (new Date()).getTime();
var n_skip0 = cljs.core.deref(n_skip_);
var ts = cljs.core.deref(ts_);
var n_total = cljs.core.count(ts);
var n_window = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,t0){
if(((t1 - t0) <= msecs)){
return (n + (1));
} else {
return n;
}
}),(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(ts,n_skip0));
var n_skip1 = (n_total - n_window);
if((n_skip0 < n_skip1)){
cljs.core.reset_BANG_(n_skip_,n_skip1);

if((n_skip1 > (10000))){
(gc_fn.cljs$core$IFn$_invoke$arity$1 ? gc_fn.cljs$core$IFn$_invoke$arity$1(n_skip1) : gc_fn.call(null,n_skip1));
} else {
}
} else {
}

return n_window;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.RollingCounter = (function (msecs,ts_,n_skip_){
this.msecs = msecs;
this.ts_ = ts_;
this.n_skip_ = n_skip_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.RollingCounter.prototype.call = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ts_,(function (){var t1 = (new Date()).getTime();
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,t1);
});
})());

return this$;
}));

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args17339){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17339)));
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ts_,(function (){var t1 = (new Date()).getTime();
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,t1);
});
})());

return this$;
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.rc_deref(self__.msecs,self__.ts_,self__.n_skip_,(function taoensso$encore$gc(n_skip1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ts_,(function (v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,n_skip1);
}));

return cljs.core.reset_BANG_(self__.n_skip_,(0));
}));
}));

(taoensso.encore.RollingCounter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$msecs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.cst$sym$ts_,cljs.core.cst$sym$n_DASH_skip_], null);
}));

(taoensso.encore.RollingCounter.cljs$lang$type = true);

(taoensso.encore.RollingCounter.cljs$lang$ctorStr = "taoensso.encore/RollingCounter");

(taoensso.encore.RollingCounter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/RollingCounter");
}));

/**
 * Positional factory function for taoensso.encore/RollingCounter.
 */
taoensso.encore.__GT_RollingCounter = (function taoensso$encore$__GT_RollingCounter(msecs,ts_,n_skip_){
return (new taoensso.encore.RollingCounter(msecs,ts_,n_skip_));
});

/**
 * Experimental. Returns a RollingCounter that you can:
 *  - Invoke to increment count in last `msecs` window and return RollingCounter.
 *  - Deref  to return    count in last `msecs` window.
 */
taoensso.encore.rolling_counter = (function taoensso$encore$rolling_counter(msecs){
return (new taoensso.encore.RollingCounter(cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(msecs)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17340){if((e17340 instanceof Error)){
var e = e17340;
return e;
} else {
throw e17340;

}
}})();
if((e == null)){
return msecs;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2389,"(pos-int? msecs)",msecs,e,null);
}
})()),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))));
});
taoensso.encore.system_newline = "\n";
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__17345 = arguments.length;
switch (G__17345) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17347 = arguments.length;
var i__4819__auto___17348 = (0);
while(true){
if((i__4819__auto___17348 < len__4818__auto___17347)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17348]));

var G__17349 = (i__4819__auto___17348 + (1));
i__4819__auto___17348 = G__17349;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq17342){
var G__17343 = cljs.core.first(seq17342);
var seq17342__$1 = cljs.core.next(seq17342);
var G__17344 = cljs.core.first(seq17342__$1);
var seq17342__$2 = cljs.core.next(seq17342__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17343,G__17344,seq17342__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__17351 = arguments.length;
switch (G__17351) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__4210__auto__ = separator;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__4210__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__17354 = arguments.length;
switch (G__17354) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__17357 = arguments.length;
switch (G__17357) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__17360 = arguments.length;
switch (G__17360) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__17363__delegate = function (args){
var G__17362 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__17362) : replacement.call(null,G__17362));
};
var G__17363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17364__i = 0, G__17364__a = new Array(arguments.length -  0);
while (G__17364__i < G__17364__a.length) {G__17364__a[G__17364__i] = arguments[G__17364__i + 0]; ++G__17364__i;}
  args = new cljs.core.IndexedSeq(G__17364__a,0,null);
} 
return G__17363__delegate.call(this,args);};
G__17363.cljs$lang$maxFixedArity = 0;
G__17363.cljs$lang$applyTo = (function (arglist__17365){
var args = cljs.core.seq(arglist__17365);
return G__17363__delegate(args);
});
G__17363.cljs$core$IFn$_invoke$arity$variadic = G__17363__delegate;
return G__17363;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((((void 0 === x)) || ((x == null)))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__4212__auto__ = fmt;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17368 = arguments.length;
var i__4819__auto___17369 = (0);
while(true){
if((i__4819__auto___17369 < len__4818__auto___17368)){
args__4824__auto__.push((arguments[i__4819__auto___17369]));

var G__17370 = (i__4819__auto___17369 + (1));
i__4819__auto___17369 = G__17370;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq17366){
var G__17367 = cljs.core.first(seq17366);
var seq17366__$1 = cljs.core.next(seq17366);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17367,seq17366__$1);
}));

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17372 = arguments.length;
var i__4819__auto___17373 = (0);
while(true){
if((i__4819__auto___17373 < len__4818__auto___17372)){
args__4824__auto__.push((arguments[i__4819__auto___17373]));

var G__17374 = (i__4819__auto___17373 + (1));
i__4819__auto___17373 = G__17374;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq17371){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17371));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__17376 = arguments.length;
switch (G__17376) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17379 = arguments.length;
var i__4819__auto___17380 = (0);
while(true){
if((i__4819__auto___17380 < len__4818__auto___17379)){
args__4824__auto__.push((arguments[i__4819__auto___17380]));

var G__17381 = (i__4819__auto___17380 + (1));
i__4819__auto___17380 = G__17381;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq17378){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17378));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__4210__auto__ = s1;
if(cljs.core.truth_(and__4210__auto__)){
return s2;
} else {
return and__4210__auto__;
}
})())){
var vx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1"], null);
var v1 = cljs.core.vec(s1);
var v2 = cljs.core.vec(s2);
var n1 = cljs.core.count(v1);
var n2 = cljs.core.count(v2);
var nmax = (function (){var x__4295__auto__ = n1;
var y__4296__auto__ = n2;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var nmin = (function (){var x__4298__auto__ = n1;
var y__4299__auto__ = n2;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
if((idx >= nmin)){
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vx,(1)));
if(and__4210__auto__){
return acc;
} else {
return and__4210__auto__;
}
} else {
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v1,idx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v2,idx));
if(and__4210__auto__){
return acc;
} else {
return and__4210__auto__;
}
}
}),true,nmax);
} else {
return null;
}
});
var ret__4867__auto___17385 = (function (){
taoensso.encore.thread_local_proxy = (function taoensso$encore$thread_local_proxy(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17386 = arguments.length;
var i__4819__auto___17387 = (0);
while(true){
if((i__4819__auto___17387 < len__4818__auto___17386)){
args__4824__auto__.push((arguments[i__4819__auto___17387]));

var G__17388 = (i__4819__auto___17387 + (1));
i__4819__auto___17387 = G__17388;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.thread_local_proxy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.thread_local_proxy.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_proxy,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_ThreadLocal,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_initialValue,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.thread_local_proxy.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.thread_local_proxy.cljs$lang$applyTo = (function (seq17382){
var G__17383 = cljs.core.first(seq17382);
var seq17382__$1 = cljs.core.next(seq17382);
var G__17384 = cljs.core.first(seq17382__$1);
var seq17382__$2 = cljs.core.next(seq17382__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17383,G__17384,seq17382__$2);
}));

return null;
})()
;
(taoensso.encore.thread_local_proxy.cljs$lang$macro = true);

/**
 * Returns `size` random bytes using `secure-rng` or `js/Crypto`.
 */
taoensso.encore.secure_rand_bytes = (function taoensso$encore$secure_rand_bytes(size){
var ba = (new Uint8Array(size));
Crypto.getRandomValues(ba);

return ba;
});
taoensso.encore.nanoid_alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
/**
 * Ref.
 *  Java impl.: https://bit.ly/3dtYv73,
 *    JS impl.: https://bit.ly/3fYv1zT,
 *  Motivation: https://bit.ly/2VhWuEO
 */
taoensso.encore.parse_alphabet = taoensso.encore.fmemoize((function (alphabet,len){
var an = cljs.core.count(alphabet);
var len__$1 = cljs.core.long$(len);
var _ = (((((an < (1))) || ((an > (256)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`alphabet`: must be \u2115\u2208[1,256]",cljs.core.PersistentArrayMap.EMPTY)})():null);
var ___$1 = (((len__$1 <= (0)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`len`: must be \u2115\u2208[0,\u221E)",cljs.core.PersistentArrayMap.EMPTY)})():null);
var mask = (((2) << ((function (){var G__17389 = ((function (){var G__17390 = (an - (1));
return Math.log(G__17390);
})() / Math.log((2)));
return Math.floor(G__17389);
})() | (0))) - (1));
var step = cljs.core.long$((function (){var G__17391 = (((1.6 * mask) * len__$1) / an);
return Math.ceil(G__17391);
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mask,step,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,alphabet)], null);
}));
/**
 * Experimental.
 *   Given `alphabet` (a string of possible characters), returns a securely
 *   random string of length `len`.
 * 
 *   Trying to do this the obvious/naive way (by repeatedly generating a secure
 *   random number and mapping it to an alphabet character with modulo) actually
 *   introduces bias into ids that can be exploited by an attacker.
 * 
 *   The method used here is designed to eliminate that bias.
 *   Based on https://bit.ly/3dtYv73.
 */
taoensso.encore.secure_rand_id = (function taoensso$encore$secure_rand_id(alphabet,len){
var vec__17392 = (taoensso.encore.parse_alphabet.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.parse_alphabet.cljs$core$IFn$_invoke$arity$2(alphabet,len) : taoensso.encore.parse_alphabet.call(null,alphabet,len));
var mask = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17392,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17392,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17392,(2),null);
var an = cljs.core.count(v);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
while(true){
var ba = taoensso.encore.secure_rand_bytes(step);
var result = taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3(((function (ba,vec__17392,mask,step,v,an,sb){
return (function (acc,idx){
var alpha_idx = (mask & (ba[idx]));
if((alpha_idx >= an)){
return acc;
} else {
var acc__$1 = taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(alpha_idx) : v.call(null,alpha_idx)));
if((cljs.core.count(acc__$1) === len)){
return cljs.core.reduced(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc__$1));
} else {
return acc__$1;
}
}
});})(ba,vec__17392,mask,step,v,an,sb))
,sb,step);
if(typeof result === 'string'){
return result;
} else {
continue;
}
break;
}
});
var alphabet_17399 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");
var mask_17400 = (63);
/**
 * Experimental. Optimized variant of `secure-rand-id` that returns Nano IDs
 *  as in https://github.com/ai/nanoid.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__17396 = arguments.length;
switch (G__17396) {
case 0:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((21));
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1 = (function (len){
var ba = taoensso.encore.secure_rand_bytes(len);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__17398 = (mask_17400 & (ba[idx]));
return (alphabet_17399.cljs$core$IFn$_invoke$arity$1 ? alphabet_17399.cljs$core$IFn$_invoke$arity$1(G__17398) : alphabet_17399.call(null,G__17398));
})());
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ba.length));
}));

(taoensso.encore.nanoid.cljs$lang$maxFixedArity = 1);

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
/**
 * Like `core/sort` but:
 *  - Returns a vector.
 *  - `comparator` can be `:asc`, `:desc`, or an arbitrary comparator.
 *  - An optional `keyfn` may be provided, as in `core/sort-by`.
 */
taoensso.encore.sortv = (function taoensso$encore$sortv(var_args){
var G__17403 = arguments.length;
switch (G__17403) {
case 1:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,cljs.core.cst$kw$asc,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2 = (function (comparator,coll){
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3(null,comparator,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_keyfn,comparator,coll){
if(cljs.core.seq(coll)){
var comparator__$1 = (function (){var G__17404 = comparator;
var G__17404__$1 = (((G__17404 instanceof cljs.core.Keyword))?G__17404.fqn:null);
switch (G__17404__$1) {
case "asc":
return cljs.core.compare;

break;
case "dsc":
case "desc":
return (function (x,y){
return cljs.core.compare(y,x);
});

break;
default:
return comparator;

}
})();
var comparator__$2 = (function (){var b2__14843__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__14843__auto__)){
var kfn = b2__14843__auto__;
return (function (x,y){
var G__17405 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(x) : kfn.call(null,x));
var G__17406 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(y) : kfn.call(null,y));
return (comparator__$1.cljs$core$IFn$_invoke$arity$2 ? comparator__$1.cljs$core$IFn$_invoke$arity$2(G__17405,G__17406) : comparator__$1.call(null,G__17405,G__17406));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array(coll);
var G__17407_17411 = a;
var G__17408_17412 = cljs.core.fn__GT_comparator(comparator__$2);
goog.array.stableSort(G__17407_17411,G__17408_17412);

return cljs.core.with_meta(cljs.core.vec(a),cljs.core.meta(coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_17418 = ({});
var nil__GT_sentinel_17419 = (function (x){
if((x == null)){
return sentinel_17418;
} else {
return x;
}
});
var sentinel__GT_nil_17420 = (function (x){
if((x === sentinel_17418)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items.
 *  Clj impln is O(N.logn) vs O(N.logN) for (take n (sort-by ...)).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__17417 = arguments.length;
switch (G__17417) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__4298__auto__ = coll_size;
var y__4299__auto__ = cljs.core.long$(n);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__17423 = arguments.length;
switch (G__17423) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__17426 = arguments.length;
switch (G__17426) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17444 = arguments.length;
var i__4819__auto___17445 = (0);
while(true){
if((i__4819__auto___17445 < len__4818__auto___17444)){
args__4824__auto__.push((arguments[i__4819__auto___17445]));

var G__17446 = (i__4819__auto___17445 + (1));
i__4819__auto___17445 = G__17446;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__17441){
var map__17442 = p__17441;
var map__17442__$1 = cljs.core.__destructure_map(map__17442);
var opts = map__17442__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$ms);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$weeks);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$msecs);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$months);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$secs);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$mins);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$hours);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17442__$1,cljs.core.cst$kw$years);
taoensso.truss.impl.revery_QMARK_((function (__in){
if(cljs.core.truth_((function (){var fexpr__17443 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null);
return (fexpr__17443.cljs$core$IFn$_invoke$arity$1 ? fexpr__17443.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__17443.call(null,__in));
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2951,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
}),cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq17440){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17440));
}));

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
var ret__4867__auto___17454 = (function (){
/**
 * Compile-time version of `ms`
 */
taoensso.encore.msecs = (function taoensso$encore$msecs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17455 = arguments.length;
var i__4819__auto___17456 = (0);
while(true){
if((i__4819__auto___17456 < len__4818__auto___17455)){
args__4824__auto__.push((arguments[i__4819__auto___17456]));

var G__17457 = (i__4819__auto___17456 + (1));
i__4819__auto___17456 = G__17457;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.msecs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.msecs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,opts){
return cljs.core.eval(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_ms,null,(1),null)),opts))));
}));

(taoensso.encore.msecs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.msecs.cljs$lang$applyTo = (function (seq17451){
var G__17452 = cljs.core.first(seq17451);
var seq17451__$1 = cljs.core.next(seq17451);
var G__17453 = cljs.core.first(seq17451__$1);
var seq17451__$2 = cljs.core.next(seq17451__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17452,G__17453,seq17451__$2);
}));

return null;
})()
;
(taoensso.encore.msecs.cljs$lang$macro = true);

var ret__4867__auto___17458 = taoensso.encore.get_env = (function taoensso$encore$get_env(_AMPERSAND_form,_AMPERSAND_env){
var ks = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(taoensso.encore.str_starts_with_QMARK_(cljs.core.name(in$),"__")){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,taoensso.encore.without_meta(in$));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.keys(_AMPERSAND_env));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_zipmap,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,ks,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null))], 0))));
});
(taoensso.encore.get_env.cljs$lang$macro = true);

var ret__4867__auto___17463 = (function (){
/**
 * Returns number of milliseconds it took to execute body.
 */
taoensso.encore.time_ms = (function taoensso$encore$time_ms(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17464 = arguments.length;
var i__4819__auto___17465 = (0);
while(true){
if((i__4819__auto___17465 < len__4818__auto___17464)){
args__4824__auto__.push((arguments[i__4819__auto___17465]));

var G__17466 = (i__4819__auto___17465 + (1));
i__4819__auto___17465 = G__17466;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.time_ms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$t0__17459__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_udt_STAR_,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_udt_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$t0__17459__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.time_ms.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.time_ms.cljs$lang$applyTo = (function (seq17460){
var G__17461 = cljs.core.first(seq17460);
var seq17460__$1 = cljs.core.next(seq17460);
var G__17462 = cljs.core.first(seq17460__$1);
var seq17460__$2 = cljs.core.next(seq17460__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17461,G__17462,seq17460__$2);
}));

return null;
})()
;
(taoensso.encore.time_ms.cljs$lang$macro = true);

var ret__4867__auto___17471 = (function (){
/**
 * Returns number of nanoseconds it took to execute body.
 */
taoensso.encore.time_ns = (function taoensso$encore$time_ns(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17472 = arguments.length;
var i__4819__auto___17473 = (0);
while(true){
if((i__4819__auto___17473 < len__4818__auto___17472)){
args__4824__auto__.push((arguments[i__4819__auto___17473]));

var G__17474 = (i__4819__auto___17473 + (1));
i__4819__auto___17473 = G__17474;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.time_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.time_ns.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$t0__17467__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano_STAR_,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$t0__17467__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.time_ns.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.time_ns.cljs$lang$applyTo = (function (seq17468){
var G__17469 = cljs.core.first(seq17468);
var seq17468__$1 = cljs.core.next(seq17468);
var G__17470 = cljs.core.first(seq17468__$1);
var seq17468__$2 = cljs.core.next(seq17468__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17469,G__17470,seq17468__$2);
}));

return null;
})()
;
(taoensso.encore.time_ns.cljs$lang$macro = true);

var ret__4867__auto___17485 = (function (){
/**
 * Returns fastest of 3 sets of times for each form, in msecs.
 */
taoensso.encore.quick_bench = (function taoensso$encore$quick_bench(var_args){
var G__17484 = arguments.length;
switch (G__17484) {
case 4:
return taoensso.encore.quick_bench.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17487 = arguments.length;
var i__4819__auto___17488 = (0);
while(true){
if((i__4819__auto___17488 < len__4818__auto___17487)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17488]));

var G__17489 = (i__4819__auto___17488 + (1));
i__4819__auto___17488 = G__17489;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((4)),(0),null));
return taoensso.encore.quick_bench.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4840__auto__);

}
});

(taoensso.encore.quick_bench.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,nlaps,form,more){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (form__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_quick_DASH_bench,null,(1),null)),(new cljs.core.List(null,nlaps,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form__$1,null,(1),null))], 0))));
}),cljs.core.cons(form,more));
}));

/** @this {Function} */
(taoensso.encore.quick_bench.cljs$lang$applyTo = (function (seq17479){
var G__17480 = cljs.core.first(seq17479);
var seq17479__$1 = cljs.core.next(seq17479);
var G__17481 = cljs.core.first(seq17479__$1);
var seq17479__$2 = cljs.core.next(seq17479__$1);
var G__17482 = cljs.core.first(seq17479__$2);
var seq17479__$3 = cljs.core.next(seq17479__$2);
var G__17483 = cljs.core.first(seq17479__$3);
var seq17479__$4 = cljs.core.next(seq17479__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17480,G__17481,G__17482,G__17483,seq17479__$4);
}));

(taoensso.encore.quick_bench.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,nlaps,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null)),(new cljs.core.List(null,nlaps,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$nsets__17476__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(6),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$nsets__17476__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_have,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_pos_DASH_num_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nsets__17476__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_round2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__SLASH_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_double,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_reduce,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_min,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_for,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$___17477__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_range,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nsets__17476__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_time_DASH_ns,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_dotimes,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$___17477__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17475__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,1000000.0,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.encore.quick_bench.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(taoensso.encore.quick_bench.cljs$lang$macro = true);

var ret__4867__auto___17493 = (function (){
taoensso.encore.qb = (function taoensso$encore$qb(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17494 = arguments.length;
var i__4819__auto___17495 = (0);
while(true){
if((i__4819__auto___17495 < len__4818__auto___17494)){
args__4824__auto__.push((arguments[i__4819__auto___17495]));

var G__17496 = (i__4819__auto___17495 + (1));
i__4819__auto___17495 = G__17496;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.qb.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.qb.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_quick_DASH_bench,null,(1),null)),args)));
}));

(taoensso.encore.qb.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.qb.cljs$lang$applyTo = (function (seq17490){
var G__17491 = cljs.core.first(seq17490);
var seq17490__$1 = cljs.core.next(seq17490);
var G__17492 = cljs.core.first(seq17490__$1);
var seq17490__$2 = cljs.core.next(seq17490__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17491,G__17492,seq17490__$2);
}));

return null;
})()
;
(taoensso.encore.qb.cljs$lang$macro = true);

var ret__4867__auto___17502 = (function (){
taoensso.encore.bench = (function taoensso$encore$bench(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17503 = arguments.length;
var i__4819__auto___17504 = (0);
while(true){
if((i__4819__auto___17504 < len__4818__auto___17503)){
args__4824__auto__.push((arguments[i__4819__auto___17504]));

var G__17505 = (i__4819__auto___17504 + (1));
i__4819__auto___17504 = G__17505;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.encore.bench.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.encore.bench.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,nlaps,opts,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_bench_STAR_,null,(1),null)),(new cljs.core.List(null,nlaps,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.bench.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.encore.bench.cljs$lang$applyTo = (function (seq17497){
var G__17498 = cljs.core.first(seq17497);
var seq17497__$1 = cljs.core.next(seq17497);
var G__17499 = cljs.core.first(seq17497__$1);
var seq17497__$2 = cljs.core.next(seq17497__$1);
var G__17500 = cljs.core.first(seq17497__$2);
var seq17497__$3 = cljs.core.next(seq17497__$2);
var G__17501 = cljs.core.first(seq17497__$3);
var seq17497__$4 = cljs.core.next(seq17497__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17498,G__17499,G__17500,G__17501,seq17497__$4);
}));

return null;
})()
;
(taoensso.encore.bench.cljs$lang$macro = true);

taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__17514__delegate = function (xs){
var b2__14843__auto__ = console.log;
if(cljs.core.truth_(b2__14843__auto__)){
var f = b2__14843__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__17514 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17515__i = 0, G__17515__a = new Array(arguments.length -  0);
while (G__17515__i < G__17515__a.length) {G__17515__a[G__17515__i] = arguments[G__17515__i + 0]; ++G__17515__i;}
  xs = new cljs.core.IndexedSeq(G__17515__a,0,null);
} 
return G__17514__delegate.call(this,xs);};
G__17514.cljs$lang$maxFixedArity = 0;
G__17514.cljs$lang$applyTo = (function (arglist__17516){
var xs = cljs.core.seq(arglist__17516);
return G__17514__delegate(xs);
});
G__17514.cljs$core$IFn$_invoke$arity$variadic = G__17514__delegate;
return G__17514;
})()
:(function() { 
var G__17517__delegate = function (xs){
return null;
};
var G__17517 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17518__i = 0, G__17518__a = new Array(arguments.length -  0);
while (G__17518__i < G__17518__a.length) {G__17518__a[G__17518__i] = arguments[G__17518__i + 0]; ++G__17518__i;}
  xs = new cljs.core.IndexedSeq(G__17518__a,0,null);
} 
return G__17517__delegate.call(this,xs);};
G__17517.cljs$lang$maxFixedArity = 0;
G__17517.cljs$lang$applyTo = (function (arglist__17519){
var xs = cljs.core.seq(arglist__17519);
return G__17517__delegate(xs);
});
G__17517.cljs$core$IFn$_invoke$arity$variadic = G__17517__delegate;
return G__17517;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17520 = arguments.length;
var i__4819__auto___17521 = (0);
while(true){
if((i__4819__auto___17521 < len__4818__auto___17520)){
args__4824__auto__.push((arguments[i__4819__auto___17521]));

var G__17522 = (i__4819__auto___17521 + (1));
i__4819__auto___17521 = G__17522;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__17507 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__17507) : taoensso.encore.console_log.call(null,G__17507));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq17506){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17506));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17523 = arguments.length;
var i__4819__auto___17524 = (0);
while(true){
if((i__4819__auto___17524 < len__4818__auto___17523)){
args__4824__auto__.push((arguments[i__4819__auto___17524]));

var G__17525 = (i__4819__auto___17524 + (1));
i__4819__auto___17524 = G__17525;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq17508){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17508));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17526 = arguments.length;
var i__4819__auto___17527 = (0);
while(true){
if((i__4819__auto___17527 < len__4818__auto___17526)){
args__4824__auto__.push((arguments[i__4819__auto___17527]));

var G__17528 = (i__4819__auto___17527 + (1));
i__4819__auto___17527 = G__17528;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__17511 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__17511) : taoensso.encore.console_log.call(null,G__17511));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq17509){
var G__17510 = cljs.core.first(seq17509);
var seq17509__$1 = cljs.core.next(seq17509);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17510,seq17509__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17529 = arguments.length;
var i__4819__auto___17530 = (0);
while(true){
if((i__4819__auto___17530 < len__4818__auto___17529)){
args__4824__auto__.push((arguments[i__4819__auto___17530]));

var G__17531 = (i__4819__auto___17530 + (1));
i__4819__auto___17530 = G__17531;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_(fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq17512){
var G__17513 = cljs.core.first(seq17512);
var seq17512__$1 = cljs.core.next(seq17512);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17513,seq17512__$1);
}));

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__14843__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__14843__auto__)){
var js_win = b2__14843__auto__;
var b2__14843__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__14843__auto____$1)){
var loc = b2__14843__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *     be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(params)).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_17555 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17532){if((e17532 instanceof Error)){
var e_17555 = e17532;
return e_17555;
} else {
throw e17532;

}
}})();
if((e_17555 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3276,"(map? params)",params,e_17555,null);
}

if(cljs.core.truth_((function (){var and__4210__auto__ = (typeof FormData !== 'undefined');
if(and__4210__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__4210__auto__;
}
})())){
var form_data = (new FormData());
var seq__17533_17556 = cljs.core.seq(params);
var chunk__17534_17557 = null;
var count__17535_17558 = (0);
var i__17536_17559 = (0);
while(true){
if((i__17536_17559 < count__17535_17558)){
var vec__17543_17560 = chunk__17534_17557.cljs$core$IIndexed$_nth$arity$2(null,i__17536_17559);
var k_17561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17543_17560,(0),null);
var v_17562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17543_17560,(1),null);
form_data.append(cljs.core.name(k_17561),v_17562);


var G__17563 = seq__17533_17556;
var G__17564 = chunk__17534_17557;
var G__17565 = count__17535_17558;
var G__17566 = (i__17536_17559 + (1));
seq__17533_17556 = G__17563;
chunk__17534_17557 = G__17564;
count__17535_17558 = G__17565;
i__17536_17559 = G__17566;
continue;
} else {
var temp__5753__auto___17567 = cljs.core.seq(seq__17533_17556);
if(temp__5753__auto___17567){
var seq__17533_17568__$1 = temp__5753__auto___17567;
if(cljs.core.chunked_seq_QMARK_(seq__17533_17568__$1)){
var c__4638__auto___17569 = cljs.core.chunk_first(seq__17533_17568__$1);
var G__17570 = cljs.core.chunk_rest(seq__17533_17568__$1);
var G__17571 = c__4638__auto___17569;
var G__17572 = cljs.core.count(c__4638__auto___17569);
var G__17573 = (0);
seq__17533_17556 = G__17570;
chunk__17534_17557 = G__17571;
count__17535_17558 = G__17572;
i__17536_17559 = G__17573;
continue;
} else {
var vec__17546_17574 = cljs.core.first(seq__17533_17568__$1);
var k_17575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17546_17574,(0),null);
var v_17576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17546_17574,(1),null);
form_data.append(cljs.core.name(k_17575),v_17576);


var G__17577 = cljs.core.next(seq__17533_17568__$1);
var G__17578 = null;
var G__17579 = (0);
var G__17580 = (0);
seq__17533_17556 = G__17577;
chunk__17534_17557 = G__17578;
count__17535_17558 = G__17579;
i__17536_17559 = G__17580;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});
return (function (uri,method,params){
if(cljs.core.truth_((function (){var fexpr__17551 = (function (x){
var or__4212__auto__ = (x == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var fexpr__17552 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__17552.cljs$core$IFn$_invoke$arity$1 ? fexpr__17552.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17552.call(null,x));
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var fexpr__17553 = taoensso.truss.impl.non_throwing(taoensso.encore.js_form_data_QMARK_);
return (fexpr__17553.cljs$core$IFn$_invoke$arity$1 ? fexpr__17553.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17553.call(null,x));
}
}
});
return fexpr__17551(params);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3288,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__17554 = method;
var G__17554__$1 = (((G__17554 instanceof cljs.core.Keyword))?G__17554.fqn:null);
switch (G__17554__$1) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17554__$1)].join('')));

}
});
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *     {:method     :post
 *      :params     {:username "Rich Hickey" :type "Awesome"}
 *      :headers    {"Foo" "Bar"}
 *      :resp-type  :text
 *      :timeout-ms 7000
 *      :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *     }
 *     (fn async-callback-fn [resp-map]
 *       (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *         ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *         ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                            :abort :http-error :exception :xhr-pool-depleted}
 *         (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__17583,callback_fn){
var map__17584 = p__17583;
var map__17584__$1 = cljs.core.__destructure_map(map__17584);
var opts = map__17584__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17584__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17584__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17584__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17584__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17584__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17584__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__17586 = (function (x){
var or__4212__auto__ = (x == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__17587 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__17587.cljs$core$IFn$_invoke$arity$1 ? fexpr__17587.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17587.call(null,x));
}
});
return fexpr__17586(timeout_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3320,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__14843__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__14843__auto__)){
var xhr = b2__14843__auto__;
try{var timeout_ms__$1 = (function (){var or__4212__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__17593 = method;
var G__17593__$1 = (((G__17593 instanceof cljs.core.Keyword))?G__17593.fqn:null);
switch (G__17593__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17593__$1)].join('')));

}
})();
var vec__17590 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17590,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17590,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys((function (p1__17582_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__17582_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__14843__auto____$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__14843__auto____$1)){
var pf = b2__14843__auto____$1;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__4210__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__4210__auto__;
}
})())?(loaded / total):null);
var G__17594 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__17594) : pf.call(null,G__17594));
}));
} else {
return null;
}
})();
var G__17595_17604 = xhr;
goog.events.listenOnce(G__17595_17604,goog.net.EventType.READY,(function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
}));

goog.events.listenOnce(G__17595_17604,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__17596 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});
if(match_QMARK_("/edn")){
return cljs.core.cst$kw$edn;
} else {
if(match_QMARK_("/json")){
return cljs.core.cst$kw$json;
} else {
if(match_QMARK_("/xml")){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
try{var G__17600 = resp_type__$1;
var G__17600__$1 = (((G__17600 instanceof cljs.core.Keyword))?G__17600.fqn:null);
switch (G__17600__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17600__$1)].join('')));

}
}catch (e17599){var _e = e17599;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17596,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17596,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17596,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__17601 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__17601) : callback_fn.call(null,G__17601));
}));


xhr.setTimeoutInterval((function (){var or__4212__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e17588){var e = e17588;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__17589_17606 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__17589_17606) : callback_fn.call(null,G__17589_17606));

return null;
}} else {
var G__17602_17607 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__17602_17607) : callback_fn.call(null,G__17602_17607));

return null;
}
});
/**
 * Based on https://goo.gl/fBqy6e
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17614 = arguments.length;
var i__4819__auto___17615 = (0);
while(true){
if((i__4819__auto___17615 < len__4818__auto___17614)){
args__4824__auto__.push((arguments[i__4819__auto___17615]));

var G__17616 = (i__4819__auto___17615 + (1));
i__4819__auto___17615 = G__17616;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__17610){
var vec__17611 = p__17610;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17611,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq17608){
var G__17609 = cljs.core.first(seq17608);
var seq17608__$1 = cljs.core.next(seq17608);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17609,seq17608__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [taoensso.encore.url_encode(taoensso.encore.as_qname(k)),"=",taoensso.encore.url_encode((function (){var or__4212__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})())].join('');
});
var join = (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__4611__auto__ = (function taoensso$encore$format_query_string_$_iter__17617(s__17618){
return (new cljs.core.LazySeq(null,(function (){
var s__17618__$1 = s__17618;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__17618__$1);
if(temp__5753__auto__){
var s__17618__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17618__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__17618__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__17620 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__17619 = (0);
while(true){
if((i__17619 < size__4610__auto__)){
var vec__17621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__17619);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17621,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__17620,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__4212__auto__ = cljs.core.seq(v);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__17627 = (i__17619 + (1));
i__17619 = G__17627;
continue;
} else {
var G__17628 = (i__17619 + (1));
i__17619 = G__17628;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17620),taoensso$encore$format_query_string_$_iter__17617(cljs.core.chunk_rest(s__17618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17620),null);
}
} else {
var vec__17624 = cljs.core.first(s__17618__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17624,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__4212__auto__ = cljs.core.seq(v);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__17617(cljs.core.rest(s__17618__$2)));
} else {
var G__17629 = cljs.core.rest(s__17618__$2);
s__17618__$1 = G__17629;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__14843__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__14843__auto__)){
var cur = b2__14843__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17639 = arguments.length;
var i__4819__auto___17640 = (0);
while(true){
if((i__4819__auto___17640 < len__4818__auto___17639)){
args__4824__auto__.push((arguments[i__4819__auto___17640]));

var G__17641 = (i__4819__auto___17640 + (1));
i__4819__auto___17640 = G__17641;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__17632){
var vec__17633 = p__17632;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17633,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17633,(1),null);
if(((clojure.string.blank_QMARK_(s)) || ((!(taoensso.encore.str_contains_QMARK_(s,"=")))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){
var b2__14843__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__14843__auto__)){
var vec__17636 = b2__14843__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17636,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq17630){
var G__17631 = cljs.core.first(seq17630);
var seq17630__$1 = cljs.core.next(seq17630);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17631,seq17630__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__17642 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17642,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17642,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__14843__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__14843__auto__)){
var qstr = b2__14843__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__17648__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempting to call uninitialized stub fn (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__17648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17649__i = 0, G__17649__a = new Array(arguments.length -  0);
while (G__17649__i < G__17649__a.length) {G__17649__a[G__17649__i] = arguments[G__17649__i + 0]; ++G__17649__i;}
  args = new cljs.core.IndexedSeq(G__17649__a,0,null);
} 
return G__17648__delegate.call(this,args);};
G__17648.cljs$lang$maxFixedArity = 0;
G__17648.cljs$lang$applyTo = (function (arglist__17650){
var args = cljs.core.seq(arglist__17650);
return G__17648__delegate(args);
});
G__17648.cljs$core$IFn$_invoke$arity$variadic = G__17648__delegate;
return G__17648;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,f,cljs.core.cst$kw$type,cljs.core.type(f)], null));
}
});
var always_17665 = (function taoensso$encore$always(_QMARK_in_str){
return true;
});
var never_17666 = (function taoensso$encore$never(_QMARK_in_str){
return false;
});
var wild_str__GT__QMARK_re_pattern_17667 = (function (s){
if(taoensso.encore.str_contains_QMARK_(s,"*")){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join(''),".","\\."),"*","(.*)"));
} else {
return null;
}
});
var compile_17668 = (function taoensso$encore$compile(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_((function (){var fexpr__17653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,cljs.core.cst$kw$any,null], null), null);
return (fexpr__17653.cljs$core$IFn$_invoke$arity$1 ? fexpr__17653.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__17653.call(null,spec));
})())){
return always_17665;
} else {
if(cljs.core.truth_((function (){var fexpr__17654 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$none]);
return (fexpr__17654.cljs$core$IFn$_invoke$arity$1 ? fexpr__17654.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__17654.call(null,spec));
})())){
return never_17666;
} else {
if(taoensso.encore.re_pattern_QMARK_(spec)){
return ((function (spec,cache_QMARK_,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667){
return (function (in_str){
return cljs.core.re_find(spec,in_str);
});
;})(spec,cache_QMARK_,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667))
} else {
if(typeof spec === 'string'){
var b2__14843__auto__ = wild_str__GT__QMARK_re_pattern_17667(spec);
if(cljs.core.truth_(b2__14843__auto__)){
var re_pattern = b2__14843__auto__;
var G__17669 = re_pattern;
var G__17670 = cache_QMARK_;
spec = G__17669;
cache_QMARK_ = G__17670;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__14843__auto__,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667){
return (function (in_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_str,spec);
});
;})(spec,cache_QMARK_,b2__14843__auto__,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667))
}
} else {
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
if(cljs.core.truth_((function (){var fexpr__17655 = cljs.core.set(spec);
return (fexpr__17655.cljs$core$IFn$_invoke$arity$1 ? fexpr__17655.cljs$core$IFn$_invoke$arity$1("*") : fexpr__17655.call(null,"*"));
})())){
return always_17665;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec),(1))){
var G__17671 = cljs.core.first(spec);
var G__17672 = cache_QMARK_;
spec = G__17671;
cache_QMARK_ = G__17672;
continue;
} else {
var vec__17656 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (spec,cache_QMARK_,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667){
return (function (p__17659,spec__$1){
var vec__17660 = p__17659;
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17660,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17660,(1),null);
var b2__14843__auto__ = ((taoensso.encore.re_pattern_QMARK_(spec__$1))?spec__$1:wild_str__GT__QMARK_re_pattern_17667(spec__$1));
if(cljs.core.truth_(b2__14843__auto__)){
var re_pattern = b2__14843__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_strs,spec__$1),re_patterns], null);
}
});})(spec,cache_QMARK_,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17656,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17656,(1),null);
var fx_match = cljs.core.not_empty(fixed_strs);
var re_match = (function (){var b2__14843__auto__ = cljs.core.not_empty(re_patterns);
if(cljs.core.truth_(b2__14843__auto__)){
var re_patterns__$1 = b2__14843__auto__;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__14843__auto__,vec__17656,fixed_strs,re_patterns,fx_match,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667){
return (function (in_str){
return taoensso.encore.rsome(((function (spec,cache_QMARK_,re_patterns__$1,b2__14843__auto__,vec__17656,fixed_strs,re_patterns,fx_match,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667){
return (function (p1__17652_SHARP_){
return cljs.core.re_find(p1__17652_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__14843__auto__,vec__17656,fixed_strs,re_patterns,fx_match,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__14843__auto__,vec__17656,fixed_strs,re_patterns,fx_match,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667))
;
if(cljs.core.truth_(cache_QMARK_)){
return taoensso.encore.fmemoize(f);
} else {
return f;
}
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__4210__auto__ = fx_match;
if(cljs.core.truth_(and__4210__auto__)){
return re_match;
} else {
return and__4210__auto__;
}
})())){
return ((function (spec,cache_QMARK_,vec__17656,fixed_strs,re_patterns,fx_match,re_match,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667){
return (function (in_str){
var or__4212__auto__ = (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(in_str) : fx_match.call(null,in_str));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(in_str) : re_match.call(null,in_str));
}
});
;})(spec,cache_QMARK_,vec__17656,fixed_strs,re_patterns,fx_match,re_match,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667))
} else {
if(cljs.core.truth_(fx_match)){
return fx_match;
} else {
if(cljs.core.truth_(re_match)){
return re_match;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`encore/cond!`: no matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected compile spec type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,spec,cljs.core.cst$kw$type,cljs.core.type(spec)], null));
}
}
}
}
}
break;
}
});
/**
 * Compiles given spec and returns a fast (fn conform? [?in-str]).
 * 
 *  Spec may be:
 *    - A regex pattern. Will conform on match.
 *    - A string, in which any "*"s will act as wildcards (#".*").
 *      Will conform on match.
 * 
 *    - A vector or set of regex patterns or strings.
 *      Will conform on ANY match.
 *      If you need literal "*"s, use an explicit regex pattern instead.
 * 
 *    - {:allow <allow-spec> :deny <deny-spec> :cache? <bool>}.
 *      Will conform iff allow-spec matches AND deny-spec does NOT.
 * 
 *  Input may be: namespace strings, class names, etc.
 *  Useful as string allowlist (whitelist) and/or denylist (blacklist).
 * 
 *  Spec examples:
 *    #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *    {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}
 */
taoensso.encore.compile_str_filter = (function taoensso$encore$compile_str_filter(spec){
while(true){
if(cljs.core.map_QMARK_(spec)){
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$cache_QMARK_);
var allow_spec = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$allow);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$whitelist);
}
})();
var deny_spec = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$deny);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$blacklist);
}
})();
var allow = (function (){var b2__14843__auto__ = allow_spec;
if(cljs.core.truth_(b2__14843__auto__)){
var as = b2__14843__auto__;
return compile_17668(as,cache_QMARK_);
} else {
return null;
}
})();
var deny = (function (){var b2__14843__auto__ = deny_spec;
if(cljs.core.truth_(b2__14843__auto__)){
var ds = b2__14843__auto__;
return compile_17668(ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,always_17665)){
return never_17666;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,never_17666)){
return never_17666;
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = allow;
if(cljs.core.truth_(and__4210__auto__)){
return deny;
} else {
return and__4210__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667,compile_17668){
return (function (_QMARK_in_str){
var in_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
if(cljs.core.truth_((allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(in_str) : allow.call(null,in_str)))){
if(cljs.core.truth_((deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(in_str) : deny.call(null,in_str)))){
return false;
} else {
return true;
}
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667,compile_17668))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,always_17665)){
return always_17665;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667,compile_17668){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__17663 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
return (allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(G__17663) : allow.call(null,G__17663));
})())){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667,compile_17668))
}
} else {
if(cljs.core.truth_(deny)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,never_17666)){
return always_17665;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667,compile_17668){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__17664 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
return (deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(G__17664) : deny.call(null,G__17664));
})())){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17665,never_17666,wild_str__GT__QMARK_re_pattern_17667,compile_17668))
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("compile-str-filter: `allow-spec` and `deny-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow_DASH_spec,allow_spec,cljs.core.cst$kw$deny_DASH_spec,deny_spec], null));
}
}
}
}
}
} else {
var G__17673 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,spec,cljs.core.cst$kw$deny,null], null);
spec = G__17673;
continue;
}
break;
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_17678 = (function (_,msecs,f){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__4510__auto__.call(null,_,msecs,f));
} else {
var m__4508__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__4508__auto__.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_17678(_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = ({});

taoensso.encore._tout_cancelled = ({});

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return cljs.core.cst$kw$timeout_SLASH_pending;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return cljs.core.cst$kw$timeout_SLASH_cancelled;
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_17679 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_17679(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_17680 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_17680(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_17681 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_17681(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_17682 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_17682(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_17683 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_17683(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_17684 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_17684(_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__17685 = cljs.core.deref(self__.result__);
var G__17686 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17685,G__17686) : taoensso.encore.kw_identical_QMARK_.call(null,G__17685,G__17686));
})());
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__17687 = cljs.core.deref(self__.result__);
var G__17688 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17687,G__17688) : taoensso.encore.kw_identical_QMARK_.call(null,G__17687,G__17688));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__17689 = cljs.core.deref(self__.result__);
var G__17690 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17689,G__17690) : taoensso.encore.kw_identical_QMARK_.call(null,G__17689,G__17690));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result__,cljs.core.cst$sym$udt], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__17692 = arguments.length;
switch (G__17692) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),null));
if(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_)){
return cljs.core.deref(result_);
} else {
return null;
}
});
var impl_17694 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_17694,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

var ret__4867__auto___17699 = (function (){
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute body after timeout.
 *   Body must be non-blocking or cheap.
 */
taoensso.encore.after_timeout = (function taoensso$encore$after_timeout(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17700 = arguments.length;
var i__4819__auto___17701 = (0);
while(true){
if((i__4819__auto___17701 < len__4818__auto___17700)){
args__4824__auto__.push((arguments[i__4819__auto___17701]));

var G__17702 = (i__4819__auto___17701 + (1));
i__4819__auto___17701 = G__17702;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.after_timeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.after_timeout.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,msecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_call_DASH_after_DASH_timeout,null,(1),null)),(new cljs.core.List(null,msecs,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.after_timeout.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.after_timeout.cljs$lang$applyTo = (function (seq17695){
var G__17696 = cljs.core.first(seq17695);
var seq17695__$1 = cljs.core.next(seq17695);
var G__17697 = cljs.core.first(seq17695__$1);
var seq17695__$2 = cljs.core.next(seq17695__$1);
var G__17698 = cljs.core.first(seq17695__$2);
var seq17695__$3 = cljs.core.next(seq17695__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17696,G__17697,G__17698,seq17695__$3);
}));

return null;
})()
;
(taoensso.encore.after_timeout.cljs$lang$macro = true);

taoensso.encore._ex_message = (function taoensso$encore$_ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
taoensso.encore._matching_throwable = (function taoensso$encore$_matching_throwable(var_args){
var G__17704 = arguments.length;
switch (G__17704) {
case 1:
return taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$1 = (function (ex){
if(cljs.core.truth_(ex)){
return ex;
} else {
return null;
}
}));

(taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$2 = (function (c,ex){
if(cljs.core.truth_((function (){var c__4243__auto__ = (function (){var G__17705 = c;
var G__17705__$1 = (((G__17705 instanceof cljs.core.Keyword))?G__17705.fqn:null);
switch (G__17705__$1) {
case "default":
return Error;

break;
case "any":
return Error;

break;
default:
return c;

}
})();
var x__4244__auto__ = ex;
return (x__4244__auto__ instanceof c__4243__auto__);
})())){
return ex;
} else {
return null;
}
}));

(taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$3 = (function (c,pattern,ex){
if(cljs.core.truth_((function (){var and__4210__auto__ = taoensso.encore._matching_throwable.cljs$core$IFn$_invoke$arity$2(c,ex);
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.map_QMARK_(pattern)){
var b2__14843__auto__ = cljs.core.ex_data(ex);
if(cljs.core.truth_(b2__14843__auto__)){
var data = b2__14843__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pattern,cljs.core.select_keys(data,cljs.core.keys(pattern)));
} else {
return false;
}
} else {
return cljs.core.boolean$(cljs.core.re_find(cljs.core.re_pattern(pattern),taoensso.encore._ex_message(ex)));
}
} else {
return and__4210__auto__;
}
})())){
return ex;
} else {
return null;
}
}));

(taoensso.encore._matching_throwable.cljs$lang$maxFixedArity = 3);

var ret__4867__auto___17710 = (function (){
/**
 * Evaluates `form` and returns ?throwable thrown by form that matches
 *   given criteria:
 * 
 *  - `c` may be:
 *    - A class (e.g. ArithmeticException, AssertionError, etc.)
 *    - `:default` => default platform throwable (Exception or js/Error)
 *    - `:any`     => any     platform throwable (Throwable or js/Error)
 * 
 *  - `pattern` may be
 *    - A string or Regex against which `ex-message` will be matched.
 *    - A map             against which `ex-data`    will be matched.
 * 
 *   Useful for unit tests, e.g.:
 *  (is (thrown :default {:a :b} (throw (ex-info "Test" {:a :b :c :d}))))
 */
taoensso.encore.thrown = (function taoensso$encore$thrown(var_args){
var G__17709 = arguments.length;
switch (G__17709) {
case 3:
return taoensso.encore.thrown.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.thrown.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.thrown.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.encore.thrown.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_matching_DASH_throwable,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$t,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$t,null,(1),null))], 0)))),null,(1),null)))));
}));

(taoensso.encore.thrown.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,c,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_matching_DASH_throwable,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$t,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$t,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.thrown.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,c,pattern,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_matching_DASH_throwable,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pattern,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$t,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$t,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.thrown.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.encore.thrown.cljs$lang$macro = true);

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.idx_fn = taoensso.encore.counter;

taoensso.encore.vec_STAR_ = taoensso.encore.ensure_vec;

taoensso.encore.set_STAR_ = taoensso.encore.ensure_set;

taoensso.encore.have_transducers_QMARK_ = true;

taoensso.encore.pval_QMARK_ = taoensso.encore.pnum_QMARK_;

taoensso.encore.as__QMARK_pval = taoensso.encore.as__QMARK_pnum;

taoensso.encore.as_pval = taoensso.encore.as_pnum;

var nolist_QMARK__17896 = (function (p1__17712_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__17712_SHARP_);
});
/**
 * Deprecated, prefer `compile-str-filter` instead.
 */
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__17719 = arguments.length;
switch (G__17719) {
case 1:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 = (function (ns_pattern){
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2(ns_pattern,null);
}));

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2 = (function (whitelist,blacklist){
if(((nolist_QMARK__17896(whitelist)) && (nolist_QMARK__17896(blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.compile_str_filter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,whitelist,cljs.core.cst$kw$deny,blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


var ret__4867__auto___17898 = (function (){
taoensso.encore.if_lets = (function taoensso$encore$if_lets(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17899 = arguments.length;
var i__4819__auto___17900 = (0);
while(true){
if((i__4819__auto___17900 < len__4818__auto___17899)){
args__4824__auto__.push((arguments[i__4819__auto___17900]));

var G__17901 = (i__4819__auto___17900 + (1));
i__4819__auto___17900 = G__17901;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.if_lets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.if_lets.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),args)));
}));

(taoensso.encore.if_lets.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.if_lets.cljs$lang$applyTo = (function (seq17720){
var G__17721 = cljs.core.first(seq17720);
var seq17720__$1 = cljs.core.next(seq17720);
var G__17722 = cljs.core.first(seq17720__$1);
var seq17720__$2 = cljs.core.next(seq17720__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17721,G__17722,seq17720__$2);
}));

return null;
})()
;
(taoensso.encore.if_lets.cljs$lang$macro = true);


var ret__4867__auto___17902 = (function (){
taoensso.encore.when_lets = (function taoensso$encore$when_lets(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17903 = arguments.length;
var i__4819__auto___17904 = (0);
while(true){
if((i__4819__auto___17904 < len__4818__auto___17903)){
args__4824__auto__.push((arguments[i__4819__auto___17904]));

var G__17905 = (i__4819__auto___17904 + (1));
i__4819__auto___17904 = G__17905;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.when_lets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.when_lets.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_let,null,(1),null)),args)));
}));

(taoensso.encore.when_lets.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.when_lets.cljs$lang$applyTo = (function (seq17723){
var G__17724 = cljs.core.first(seq17723);
var seq17723__$1 = cljs.core.next(seq17723);
var G__17725 = cljs.core.first(seq17723__$1);
var seq17723__$2 = cljs.core.next(seq17723__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17724,G__17725,seq17723__$2);
}));

return null;
})()
;
(taoensso.encore.when_lets.cljs$lang$macro = true);


var ret__4867__auto___17906 = (function (){
taoensso.encore.if_not_STAR_ = (function taoensso$encore$if_not_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17907 = arguments.length;
var i__4819__auto___17908 = (0);
while(true){
if((i__4819__auto___17908 < len__4818__auto___17907)){
args__4824__auto__.push((arguments[i__4819__auto___17908]));

var G__17909 = (i__4819__auto___17908 + (1));
i__4819__auto___17908 = G__17909;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.if_not_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.if_not_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_not,null,(1),null)),args)));
}));

(taoensso.encore.if_not_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.if_not_STAR_.cljs$lang$applyTo = (function (seq17726){
var G__17727 = cljs.core.first(seq17726);
var seq17726__$1 = cljs.core.next(seq17726);
var G__17728 = cljs.core.first(seq17726__$1);
var seq17726__$2 = cljs.core.next(seq17726__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17727,G__17728,seq17726__$2);
}));

return null;
})()
;
(taoensso.encore.if_not_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17910 = (function (){
taoensso.encore.cond_STAR_ = (function taoensso$encore$cond_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17911 = arguments.length;
var i__4819__auto___17912 = (0);
while(true){
if((i__4819__auto___17912 < len__4818__auto___17911)){
args__4824__auto__.push((arguments[i__4819__auto___17912]));

var G__17913 = (i__4819__auto___17912 + (1));
i__4819__auto___17912 = G__17913;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.cond_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.cond_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_cond,null,(1),null)),args)));
}));

(taoensso.encore.cond_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.cond_STAR_.cljs$lang$applyTo = (function (seq17729){
var G__17730 = cljs.core.first(seq17729);
var seq17729__$1 = cljs.core.next(seq17729);
var G__17731 = cljs.core.first(seq17729__$1);
var seq17729__$2 = cljs.core.next(seq17729__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17730,G__17731,seq17729__$2);
}));

return null;
})()
;
(taoensso.encore.cond_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17914 = (function (){
taoensso.encore.defonce_STAR_ = (function taoensso$encore$defonce_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17915 = arguments.length;
var i__4819__auto___17916 = (0);
while(true){
if((i__4819__auto___17916 < len__4818__auto___17915)){
args__4824__auto__.push((arguments[i__4819__auto___17916]));

var G__17917 = (i__4819__auto___17916 + (1));
i__4819__auto___17916 = G__17917;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.defonce_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.defonce_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_defonce,null,(1),null)),args)));
}));

(taoensso.encore.defonce_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.defonce_STAR_.cljs$lang$applyTo = (function (seq17732){
var G__17733 = cljs.core.first(seq17732);
var seq17732__$1 = cljs.core.next(seq17732);
var G__17734 = cljs.core.first(seq17732__$1);
var seq17732__$2 = cljs.core.next(seq17732__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17733,G__17734,seq17732__$2);
}));

return null;
})()
;
(taoensso.encore.defonce_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17918 = (function (){
taoensso.encore.have_in = (function taoensso$encore$have_in(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17919 = arguments.length;
var i__4819__auto___17920 = (0);
while(true){
if((i__4819__auto___17920 < len__4818__auto___17919)){
args__4824__auto__.push((arguments[i__4819__auto___17920]));

var G__17921 = (i__4819__auto___17920 + (1));
i__4819__auto___17920 = G__17921;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.have_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.have_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a1,an){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_have,null,(1),null)),(new cljs.core.List(null,a1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$in,null,(1),null)),an], 0))));
}));

(taoensso.encore.have_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.have_in.cljs$lang$applyTo = (function (seq17735){
var G__17736 = cljs.core.first(seq17735);
var seq17735__$1 = cljs.core.next(seq17735);
var G__17737 = cljs.core.first(seq17735__$1);
var seq17735__$2 = cljs.core.next(seq17735__$1);
var G__17738 = cljs.core.first(seq17735__$2);
var seq17735__$3 = cljs.core.next(seq17735__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17736,G__17737,G__17738,seq17735__$3);
}));

return null;
})()
;
(taoensso.encore.have_in.cljs$lang$macro = true);


var ret__4867__auto___17922 = (function (){
taoensso.encore.have_in_BANG_ = (function taoensso$encore$have_in_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17923 = arguments.length;
var i__4819__auto___17924 = (0);
while(true){
if((i__4819__auto___17924 < len__4818__auto___17923)){
args__4824__auto__.push((arguments[i__4819__auto___17924]));

var G__17925 = (i__4819__auto___17924 + (1));
i__4819__auto___17924 = G__17925;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.have_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.have_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a1,an){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_have_BANG_,null,(1),null)),(new cljs.core.List(null,a1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$in,null,(1),null)),an], 0))));
}));

(taoensso.encore.have_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.have_in_BANG_.cljs$lang$applyTo = (function (seq17739){
var G__17740 = cljs.core.first(seq17739);
var seq17739__$1 = cljs.core.next(seq17739);
var G__17741 = cljs.core.first(seq17739__$1);
var seq17739__$2 = cljs.core.next(seq17739__$1);
var G__17742 = cljs.core.first(seq17739__$2);
var seq17739__$3 = cljs.core.next(seq17739__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17740,G__17741,G__17742,seq17739__$3);
}));

return null;
})()
;
(taoensso.encore.have_in_BANG_.cljs$lang$macro = true);


var ret__4867__auto___17926 = (function (){
taoensso.encore.cond_throw = (function taoensso$encore$cond_throw(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17927 = arguments.length;
var i__4819__auto___17928 = (0);
while(true){
if((i__4819__auto___17928 < len__4818__auto___17927)){
args__4824__auto__.push((arguments[i__4819__auto___17928]));

var G__17929 = (i__4819__auto___17928 + (1));
i__4819__auto___17928 = G__17929;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.cond_throw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.cond_throw.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_cond_BANG_,null,(1),null)),args)));
}));

(taoensso.encore.cond_throw.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.cond_throw.cljs$lang$applyTo = (function (seq17743){
var G__17744 = cljs.core.first(seq17743);
var seq17743__$1 = cljs.core.next(seq17743);
var G__17745 = cljs.core.first(seq17743__$1);
var seq17743__$2 = cljs.core.next(seq17743__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17744,G__17745,seq17743__$2);
}));

return null;
})()
;
(taoensso.encore.cond_throw.cljs$lang$macro = true);


var ret__4867__auto___17930 = (function (){
taoensso.encore.catch_errors_STAR_ = (function taoensso$encore$catch_errors_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17931 = arguments.length;
var i__4819__auto___17932 = (0);
while(true){
if((i__4819__auto___17932 < len__4818__auto___17931)){
args__4824__auto__.push((arguments[i__4819__auto___17932]));

var G__17933 = (i__4819__auto___17932 + (1));
i__4819__auto___17932 = G__17933;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.catch_errors_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.catch_errors_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),args)));
}));

(taoensso.encore.catch_errors_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.catch_errors_STAR_.cljs$lang$applyTo = (function (seq17746){
var G__17747 = cljs.core.first(seq17746);
var seq17746__$1 = cljs.core.next(seq17746);
var G__17748 = cljs.core.first(seq17746__$1);
var seq17746__$2 = cljs.core.next(seq17746__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17747,G__17748,seq17746__$2);
}));

return null;
})()
;
(taoensso.encore.catch_errors_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17934 = (function (){
taoensso.encore.use_fixtures_STAR_ = (function taoensso$encore$use_fixtures_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17935 = arguments.length;
var i__4819__auto___17936 = (0);
while(true){
if((i__4819__auto___17936 < len__4818__auto___17935)){
args__4824__auto__.push((arguments[i__4819__auto___17936]));

var G__17937 = (i__4819__auto___17936 + (1));
i__4819__auto___17936 = G__17937;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.use_fixtures_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.use_fixtures_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_use_DASH_fixtures,null,(1),null)),args)));
}));

(taoensso.encore.use_fixtures_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.use_fixtures_STAR_.cljs$lang$applyTo = (function (seq17749){
var G__17750 = cljs.core.first(seq17749);
var seq17749__$1 = cljs.core.next(seq17749);
var G__17751 = cljs.core.first(seq17749__$1);
var seq17749__$2 = cljs.core.next(seq17749__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17750,G__17751,seq17749__$2);
}));

return null;
})()
;
(taoensso.encore.use_fixtures_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17938 = (function (){
taoensso.encore.nano_time_STAR_ = (function taoensso$encore$nano_time_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17939 = arguments.length;
var i__4819__auto___17940 = (0);
while(true){
if((i__4819__auto___17940 < len__4818__auto___17939)){
args__4824__auto__.push((arguments[i__4819__auto___17940]));

var G__17941 = (i__4819__auto___17940 + (1));
i__4819__auto___17940 = G__17941;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.nano_time_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.nano_time_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano_STAR_,null,(1),null)),args)));
}));

(taoensso.encore.nano_time_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.nano_time_STAR_.cljs$lang$applyTo = (function (seq17752){
var G__17753 = cljs.core.first(seq17752);
var seq17752__$1 = cljs.core.next(seq17752);
var G__17754 = cljs.core.first(seq17752__$1);
var seq17752__$2 = cljs.core.next(seq17752__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17753,G__17754,seq17752__$2);
}));

return null;
})()
;
(taoensso.encore.nano_time_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17942 = (function (){
taoensso.encore.qbench = (function taoensso$encore$qbench(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17943 = arguments.length;
var i__4819__auto___17944 = (0);
while(true){
if((i__4819__auto___17944 < len__4818__auto___17943)){
args__4824__auto__.push((arguments[i__4819__auto___17944]));

var G__17945 = (i__4819__auto___17944 + (1));
i__4819__auto___17944 = G__17945;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.qbench.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.qbench.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_quick_DASH_bench,null,(1),null)),args)));
}));

(taoensso.encore.qbench.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.qbench.cljs$lang$applyTo = (function (seq17755){
var G__17756 = cljs.core.first(seq17755);
var seq17755__$1 = cljs.core.next(seq17755);
var G__17757 = cljs.core.first(seq17755__$1);
var seq17755__$2 = cljs.core.next(seq17755__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17756,G__17757,seq17755__$2);
}));

return null;
})()
;
(taoensso.encore.qbench.cljs$lang$macro = true);


var ret__4867__auto___17946 = (function (){
taoensso.encore.catch_errors = (function taoensso$encore$catch_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17947 = arguments.length;
var i__4819__auto___17948 = (0);
while(true){
if((i__4819__auto___17948 < len__4818__auto___17947)){
args__4824__auto__.push((arguments[i__4819__auto___17948]));

var G__17949 = (i__4819__auto___17948 + (1));
i__4819__auto___17948 = G__17949;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.catch_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.catch_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__17713__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__17713__auto__,null,(1),null)))))),null,(1),null))], 0))));
}));

(taoensso.encore.catch_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.catch_errors.cljs$lang$applyTo = (function (seq17758){
var G__17759 = cljs.core.first(seq17758);
var seq17758__$1 = cljs.core.next(seq17758);
var G__17760 = cljs.core.first(seq17758__$1);
var seq17758__$2 = cljs.core.next(seq17758__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17759,G__17760,seq17758__$2);
}));

return null;
})()
;
(taoensso.encore.catch_errors.cljs$lang$macro = true);


var ret__4867__auto___17950 = taoensso.encore._vol_BANG_ = (function taoensso$encore$_vol_BANG_(_AMPERSAND_form,_AMPERSAND_env,val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_volatile_BANG_,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));
});
(taoensso.encore._vol_BANG_.cljs$lang$macro = true);


var ret__4867__auto___17951 = taoensso.encore._vol_reset_BANG_ = (function taoensso$encore$_vol_reset_BANG_(_AMPERSAND_form,_AMPERSAND_env,vol_,val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vreset_BANG_,null,(1),null)),(new cljs.core.List(null,vol_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0))));
});
(taoensso.encore._vol_reset_BANG_.cljs$lang$macro = true);


var ret__4867__auto___17952 = (function (){
taoensso.encore._vol_swap_BANG_ = (function taoensso$encore$_vol_swap_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17953 = arguments.length;
var i__4819__auto___17954 = (0);
while(true){
if((i__4819__auto___17954 < len__4818__auto___17953)){
args__4824__auto__.push((arguments[i__4819__auto___17954]));

var G__17955 = (i__4819__auto___17954 + (1));
i__4819__auto___17954 = G__17955;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.encore._vol_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.encore._vol_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol_,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vswap_BANG_,null,(1),null)),(new cljs.core.List(null,vol_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),args], 0))));
}));

(taoensso.encore._vol_swap_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.encore._vol_swap_BANG_.cljs$lang$applyTo = (function (seq17761){
var G__17762 = cljs.core.first(seq17761);
var seq17761__$1 = cljs.core.next(seq17761);
var G__17763 = cljs.core.first(seq17761__$1);
var seq17761__$2 = cljs.core.next(seq17761__$1);
var G__17764 = cljs.core.first(seq17761__$2);
var seq17761__$3 = cljs.core.next(seq17761__$2);
var G__17765 = cljs.core.first(seq17761__$3);
var seq17761__$4 = cljs.core.next(seq17761__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17762,G__17763,G__17764,G__17765,seq17761__$4);
}));

return null;
})()
;
(taoensso.encore._vol_swap_BANG_.cljs$lang$macro = true);


taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17956 = arguments.length;
var i__4819__auto___17957 = (0);
while(true){
if((i__4819__auto___17957 < len__4818__auto___17956)){
args__4824__auto__.push((arguments[i__4819__auto___17957]));

var G__17958 = (i__4819__auto___17957 + (1));
i__4819__auto___17957 = G__17958;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__17768){
var vec__17769 = p__17768;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__4212__auto__ = type;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.round.cljs$lang$applyTo = (function (seq17766){
var G__17767 = cljs.core.first(seq17766);
var seq17766__$1 = cljs.core.next(seq17766);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17767,seq17766__$1);
}));


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__17773 = arguments.length;
switch (G__17773) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17960 = arguments.length;
var i__4819__auto___17961 = (0);
while(true){
if((i__4819__auto___17961 < len__4818__auto___17960)){
args__4824__auto__.push((arguments[i__4819__auto___17961]));

var G__17962 = (i__4819__auto___17961 + (1));
i__4819__auto___17961 = G__17962;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq17774){
var G__17775 = cljs.core.first(seq17774);
var seq17774__$1 = cljs.core.next(seq17774);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17775,seq17774__$1);
}));


var ret__4867__auto___17963 = (function (){
taoensso.encore.repeatedly_STAR_ = (function taoensso$encore$repeatedly_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17964 = arguments.length;
var i__4819__auto___17965 = (0);
while(true){
if((i__4819__auto___17965 < len__4818__auto___17964)){
args__4824__auto__.push((arguments[i__4819__auto___17965]));

var G__17966 = (i__4819__auto___17965 + (1));
i__4819__auto___17965 = G__17966;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.repeatedly_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.repeatedly_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_repeatedly_DASH_into_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),body], 0))));
}));

(taoensso.encore.repeatedly_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.repeatedly_STAR_.cljs$lang$applyTo = (function (seq17776){
var G__17777 = cljs.core.first(seq17776);
var seq17776__$1 = cljs.core.next(seq17776);
var G__17778 = cljs.core.first(seq17776__$1);
var seq17776__$2 = cljs.core.next(seq17776__$1);
var G__17779 = cljs.core.first(seq17776__$2);
var seq17776__$3 = cljs.core.next(seq17776__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17777,G__17778,G__17779,seq17776__$3);
}));

return null;
})()
;
(taoensso.encore.repeatedly_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17967 = (function (){
/**
 * Deprecated
 */
taoensso.encore.repeatedly_into_STAR_ = (function taoensso$encore$repeatedly_into_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17968 = arguments.length;
var i__4819__auto___17969 = (0);
while(true){
if((i__4819__auto___17969 < len__4818__auto___17968)){
args__4824__auto__.push((arguments[i__4819__auto___17969]));

var G__17970 = (i__4819__auto___17969 + (1));
i__4819__auto___17969 = G__17970;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.encore.repeatedly_into_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.encore.repeatedly_into_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,coll,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_repeatedly_DASH_into,null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.repeatedly_into_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.encore.repeatedly_into_STAR_.cljs$lang$applyTo = (function (seq17780){
var G__17781 = cljs.core.first(seq17780);
var seq17780__$1 = cljs.core.next(seq17780);
var G__17782 = cljs.core.first(seq17780__$1);
var seq17780__$2 = cljs.core.next(seq17780__$1);
var G__17783 = cljs.core.first(seq17780__$2);
var seq17780__$3 = cljs.core.next(seq17780__$2);
var G__17784 = cljs.core.first(seq17780__$3);
var seq17780__$4 = cljs.core.next(seq17780__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17781,G__17782,G__17783,G__17784,seq17780__$4);
}));

return null;
})()
;
(taoensso.encore.repeatedly_into_STAR_.cljs$lang$macro = true);


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ensure_set(x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__17785){
var vec__17786 = p__17785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17786,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17786,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17786,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return (function() { 
var G__17971__delegate = function (args){
var b2__14843__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__14843__auto__)){
var vec__17789 = b2__14843__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17789,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17789,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__17971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17972__i = 0, G__17972__a = new Array(arguments.length -  0);
while (G__17972__i < G__17972__a.length) {G__17972__a[G__17972__i] = arguments[G__17972__i + 0]; ++G__17972__i;}
  args = new cljs.core.IndexedSeq(G__17972__a,0,null);
} 
return G__17971__delegate.call(this,args);};
G__17971.cljs$lang$maxFixedArity = 0;
G__17971.cljs$lang$applyTo = (function (arglist__17973){
var args = cljs.core.seq(arglist__17973);
return G__17971__delegate(args);
});
G__17971.cljs$core$IFn$_invoke$arity$variadic = G__17971__delegate;
return G__17971;
})()
;
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return (function() { 
var G__17974__delegate = function (args){
var b2__14843__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__14843__auto__)){
var backoff = b2__14843__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__17974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17975__i = 0, G__17975__a = new Array(arguments.length -  0);
while (G__17975__i < G__17975__a.length) {G__17975__a[G__17975__i] = arguments[G__17975__i + 0]; ++G__17975__i;}
  args = new cljs.core.IndexedSeq(G__17975__a,0,null);
} 
return G__17974__delegate.call(this,args);};
G__17974.cljs$lang$maxFixedArity = 0;
G__17974.cljs$lang$applyTo = (function (arglist__17976){
var args = cljs.core.seq(arglist__17976);
return G__17974__delegate(args);
});
G__17974.cljs$core$IFn$_invoke$arity$variadic = G__17974__delegate;
return G__17974;
})()
;
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return (function() { 
var G__17977__delegate = function (args){
var b2__14843__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__14843__auto__)){
var backoff_ms = b2__14843__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__17977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17978__i = 0, G__17978__a = new Array(arguments.length -  0);
while (G__17978__i < G__17978__a.length) {G__17978__a[G__17978__i] = arguments[G__17978__i + 0]; ++G__17978__i;}
  args = new cljs.core.IndexedSeq(G__17978__a,0,null);
} 
return G__17977__delegate.call(this,args);};
G__17977.cljs$lang$maxFixedArity = 0;
G__17977.cljs$lang$applyTo = (function (arglist__17979){
var args = cljs.core.seq(arglist__17979);
return G__17977__delegate(args);
});
G__17977.cljs$core$IFn$_invoke$arity$variadic = G__17977__delegate;
return G__17977;
})()
;
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17980 = arguments.length;
var i__4819__auto___17981 = (0);
while(true){
if((i__4819__auto___17981 < len__4818__auto___17980)){
args__4824__auto__.push((arguments[i__4819__auto___17981]));

var G__17982 = (i__4819__auto___17981 + (1));
i__4819__auto___17981 = G__17982;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__17794){
var vec__17795 = p__17794;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17795,(0),null);
var b2__14843__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__14843__auto__)){
var js_win = b2__14843__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = nattempt;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq17792){
var G__17793 = cljs.core.first(seq17792);
var seq17792__$1 = cljs.core.next(seq17792);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17793,seq17792__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17983 = arguments.length;
var i__4819__auto___17984 = (0);
while(true){
if((i__4819__auto___17984 < len__4818__auto___17983)){
args__4824__auto__.push((arguments[i__4819__auto___17984]));

var G__17985 = (i__4819__auto___17984 + (1));
i__4819__auto___17984 = G__17985;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17800 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17800) : taoensso.encore.log_QMARK_.call(null,G__17800));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq17798){
var G__17799 = cljs.core.first(seq17798);
var seq17798__$1 = cljs.core.next(seq17798);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17799,seq17798__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17986 = arguments.length;
var i__4819__auto___17987 = (0);
while(true){
if((i__4819__auto___17987 < len__4818__auto___17986)){
args__4824__auto__.push((arguments[i__4819__auto___17987]));

var G__17988 = (i__4819__auto___17987 + (1));
i__4819__auto___17987 = G__17988;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17803 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17803) : taoensso.encore.log_QMARK_.call(null,G__17803));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq17801){
var G__17802 = cljs.core.first(seq17801);
var seq17801__$1 = cljs.core.next(seq17801);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17802,seq17801__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17989 = arguments.length;
var i__4819__auto___17990 = (0);
while(true){
if((i__4819__auto___17990 < len__4818__auto___17989)){
args__4824__auto__.push((arguments[i__4819__auto___17990]));

var G__17991 = (i__4819__auto___17990 + (1));
i__4819__auto___17990 = G__17991;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17806 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17806) : taoensso.encore.log_QMARK_.call(null,G__17806));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq17804){
var G__17805 = cljs.core.first(seq17804);
var seq17804__$1 = cljs.core.next(seq17804);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17805,seq17804__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17992 = arguments.length;
var i__4819__auto___17993 = (0);
while(true){
if((i__4819__auto___17993 < len__4818__auto___17992)){
args__4824__auto__.push((arguments[i__4819__auto___17993]));

var G__17994 = (i__4819__auto___17993 + (1));
i__4819__auto___17993 = G__17994;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17809 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17809) : taoensso.encore.log_QMARK_.call(null,G__17809));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq17807){
var G__17808 = cljs.core.first(seq17807);
var seq17807__$1 = cljs.core.next(seq17807);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17808,seq17807__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17995 = arguments.length;
var i__4819__auto___17996 = (0);
while(true){
if((i__4819__auto___17996 < len__4818__auto___17995)){
args__4824__auto__.push((arguments[i__4819__auto___17996]));

var G__17997 = (i__4819__auto___17996 + (1));
i__4819__auto___17996 = G__17997;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17812 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17812) : taoensso.encore.log_QMARK_.call(null,G__17812));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq17810){
var G__17811 = cljs.core.first(seq17810);
var seq17810__$1 = cljs.core.next(seq17810);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17811,seq17810__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17998 = arguments.length;
var i__4819__auto___17999 = (0);
while(true){
if((i__4819__auto___17999 < len__4818__auto___17998)){
args__4824__auto__.push((arguments[i__4819__auto___17999]));

var G__18000 = (i__4819__auto___17999 + (1));
i__4819__auto___17999 = G__18000;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17815 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17815) : taoensso.encore.log_QMARK_.call(null,G__17815));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq17813){
var G__17814 = cljs.core.first(seq17813);
var seq17813__$1 = cljs.core.next(seq17813);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17814,seq17813__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18001 = arguments.length;
var i__4819__auto___18002 = (0);
while(true){
if((i__4819__auto___18002 < len__4818__auto___18001)){
args__4824__auto__.push((arguments[i__4819__auto___18002]));

var G__18003 = (i__4819__auto___18002 + (1));
i__4819__auto___18002 = G__18003;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17818 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17818) : taoensso.encore.log_QMARK_.call(null,G__17818));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq17816){
var G__17817 = cljs.core.first(seq17816);
var seq17816__$1 = cljs.core.next(seq17816);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17817,seq17816__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18004 = arguments.length;
var i__4819__auto___18005 = (0);
while(true){
if((i__4819__auto___18005 < len__4818__auto___18004)){
args__4824__auto__.push((arguments[i__4819__auto___18005]));

var G__18006 = (i__4819__auto___18005 + (1));
i__4819__auto___18005 = G__18006;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__17821){
var vec__17822 = p__17821;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17822,(0),null);
var comparator = (function (){var or__4212__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__17714_SHARP_,p2__17715_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__17714_SHARP_,p2__17715_SHARP_) : comparator.call(null,p1__17714_SHARP_,p2__17715_SHARP_)) > (0))){
return p2__17715_SHARP_;
} else {
return p1__17714_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq17819){
var G__17820 = cljs.core.first(seq17819);
var seq17819__$1 = cljs.core.next(seq17819);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17820,seq17819__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18007 = arguments.length;
var i__4819__auto___18008 = (0);
while(true){
if((i__4819__auto___18008 < len__4818__auto___18007)){
args__4824__auto__.push((arguments[i__4819__auto___18008]));

var G__18009 = (i__4819__auto___18008 + (1));
i__4819__auto___18008 = G__18009;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__17827){
var vec__17828 = p__17827;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17828,(0),null);
var comparator = (function (){var or__4212__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__17716_SHARP_,p2__17717_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__17716_SHARP_,p2__17717_SHARP_) : comparator.call(null,p1__17716_SHARP_,p2__17717_SHARP_)) < (0))){
return p2__17717_SHARP_;
} else {
return p1__17716_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq17825){
var G__17826 = cljs.core.first(seq17825);
var seq17825__$1 = cljs.core.next(seq17825);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17826,seq17825__$1);
}));


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__4212__auto__ = x;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__17835 = (function (p__17836,seen__$1){
while(true){
var vec__17837 = p__17836;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(0),null);
var xs__$1 = vec__17837;
var b2__14843__auto__ = cljs.core.seq(xs__$1);
if(b2__14843__auto__){
var s = b2__14843__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__18010 = cljs.core.rest(s);
var G__18011 = seen__$1;
p__17836 = G__18010;
seen__$1 = G__18011;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
});
return fexpr__17835(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__17841 = arguments.length;
switch (G__17841) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__17842,in$){
var vec__17843 = p__17842;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_((function (){var G__17846 = kf;
var G__17847 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17846,G__17847) : taoensso.encore.kw_identical_QMARK_.call(null,G__17846,G__17847));
})())?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18013 = arguments.length;
var i__4819__auto___18014 = (0);
while(true){
if((i__4819__auto___18014 < len__4818__auto___18013)){
args__4824__auto__.push((arguments[i__4819__auto___18014]));

var G__18015 = (i__4819__auto___18014 + (1));
i__4819__auto___18014 = G__18015;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__17850){
var vec__17851 = p__17850;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17851,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17851,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_((function (){var G__17854 = kf;
var G__17855 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17854,G__17855) : taoensso.encore.kw_identical_QMARK_.call(null,G__17854,G__17855));
})())?(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}):kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs((function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq17848){
var G__17849 = cljs.core.first(seq17848);
var seq17848__$1 = cljs.core.next(seq17848);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17849,seq17848__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18016 = arguments.length;
var i__4819__auto___18017 = (0);
while(true){
if((i__4819__auto___18017 < len__4818__auto___18016)){
args__4824__auto__.push((arguments[i__4819__auto___18017]));

var G__18018 = (i__4819__auto___18017 + (1));
i__4819__auto___18017 = G__18018;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq17856){
var G__17857 = cljs.core.first(seq17856);
var seq17856__$1 = cljs.core.next(seq17856);
var G__17858 = cljs.core.first(seq17856__$1);
var seq17856__$2 = cljs.core.next(seq17856__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17857,G__17858,seq17856__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__4298__auto__ = signed_idx;
var y__4299__auto__ = max_idx;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
} else {
var x__4295__auto__ = (0);
var y__4296__auto__ = (signed_idx + max_idx);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18019 = arguments.length;
var i__4819__auto___18020 = (0);
while(true){
if((i__4819__auto___18020 < len__4818__auto___18019)){
args__4824__auto__.push((arguments[i__4819__auto___18020]));

var G__18021 = (i__4819__auto___18020 + (1));
i__4819__auto___18020 = G__18021;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__17862){
var map__17863 = p__17862;
var map__17863__$1 = cljs.core.__destructure_map(map__17863);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__15292__auto__ = (start_idx_STAR_ + max_len);
var n2__15293__auto__ = xlen;
if((n1__15292__auto__ > n2__15293__auto__)){
return n2__15293__auto__;
} else {
return n1__15292__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
}));

(taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq17859){
var G__17860 = cljs.core.first(seq17859);
var seq17859__$1 = cljs.core.next(seq17859);
var G__17861 = cljs.core.first(seq17859__$1);
var seq17859__$2 = cljs.core.next(seq17859__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17860,G__17861,seq17859__$2);
}));


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18022 = arguments.length;
var i__4819__auto___18023 = (0);
while(true){
if((i__4819__auto___18023 < len__4818__auto___18022)){
args__4824__auto__.push((arguments[i__4819__auto___18023]));

var G__18024 = (i__4819__auto___18023 + (1));
i__4819__auto___18023 = G__18024;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__17867){
var vec__17868 = p__17867;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17868,(0),null);
var vec__17871 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17871,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17871,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.substr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.substr.cljs$lang$applyTo = (function (seq17864){
var G__17865 = cljs.core.first(seq17864);
var seq17864__$1 = cljs.core.next(seq17864);
var G__17866 = cljs.core.first(seq17864__$1);
var seq17864__$2 = cljs.core.next(seq17864__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17865,G__17866,seq17864__$2);
}));



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18025 = arguments.length;
var i__4819__auto___18026 = (0);
while(true){
if((i__4819__auto___18026 < len__4818__auto___18025)){
args__4824__auto__.push((arguments[i__4819__auto___18026]));

var G__18027 = (i__4819__auto___18026 + (1));
i__4819__auto___18026 = G__18027;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__17877){
var vec__17878 = p__17877;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17878,(0),null);
var vec__17881 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17881,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17881,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq17874){
var G__17875 = cljs.core.first(seq17874);
var seq17874__$1 = cljs.core.next(seq17874);
var G__17876 = cljs.core.first(seq17874__$1);
var seq17874__$2 = cljs.core.next(seq17874__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17875,G__17876,seq17874__$2);
}));


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_(x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_(coll)){
var vec__17886 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17886,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__18028 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__18029 = cljs.core.next(ks__$1);
var G__18030 = cljs.core.next(vs__$1);
m = G__18028;
ks__$1 = G__18029;
vs__$1 = G__18030;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18031 = arguments.length;
var i__4819__auto___18032 = (0);
while(true){
if((i__4819__auto___18032 < len__4818__auto___18031)){
args__4824__auto__.push((arguments[i__4819__auto___18032]));

var G__18033 = (i__4819__auto___18032 + (1));
i__4819__auto___18032 = G__18033;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__17891 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17891,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17891,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17891,(2),null);
var f = (cljs.core.truth_((function (){var G__17894 = type;
var G__17895 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17894,G__17895) : taoensso.encore.kw_identical_QMARK_.call(null,G__17894,G__17895));
})())?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq17889){
var G__17890 = cljs.core.first(seq17889);
var seq17889__$1 = cljs.core.next(seq17889);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17890,seq17889__$1);
}));

