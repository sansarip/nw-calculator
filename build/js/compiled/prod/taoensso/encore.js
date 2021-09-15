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
var ret__4867__auto___16577 = (function (){
taoensso.encore.have = (function taoensso$encore$have(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16578 = arguments.length;
var i__4819__auto___16579 = (0);
while(true){
if((i__4819__auto___16579 < len__4818__auto___16578)){
args__4824__auto__.push((arguments[i__4819__auto___16579]));

var G__16580 = (i__4819__auto___16579 + (1));
i__4819__auto___16579 = G__16580;
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
(taoensso.encore.have.cljs$lang$applyTo = (function (seq16571){
var G__16572 = cljs.core.first(seq16571);
var seq16571__$1 = cljs.core.next(seq16571);
var G__16573 = cljs.core.first(seq16571__$1);
var seq16571__$2 = cljs.core.next(seq16571__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16572,G__16573,seq16571__$2);
}));

return null;
})()
;
(taoensso.encore.have.cljs$lang$macro = true);


var ret__4867__auto___16581 = (function (){
taoensso.encore.have_QMARK_ = (function taoensso$encore$have_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16582 = arguments.length;
var i__4819__auto___16583 = (0);
while(true){
if((i__4819__auto___16583 < len__4818__auto___16582)){
args__4824__auto__.push((arguments[i__4819__auto___16583]));

var G__16584 = (i__4819__auto___16583 + (1));
i__4819__auto___16583 = G__16584;
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
(taoensso.encore.have_QMARK_.cljs$lang$applyTo = (function (seq16574){
var G__16575 = cljs.core.first(seq16574);
var seq16574__$1 = cljs.core.next(seq16574);
var G__16576 = cljs.core.first(seq16574__$1);
var seq16574__$2 = cljs.core.next(seq16574__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16575,G__16576,seq16574__$2);
}));

return null;
})()
;
(taoensso.encore.have_QMARK_.cljs$lang$macro = true);

var ret__4867__auto___16593 = (function (){
taoensso.encore.if_clj = (function taoensso$encore$if_clj(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16594 = arguments.length;
var i__4819__auto___16595 = (0);
while(true){
if((i__4819__auto___16595 < len__4818__auto___16594)){
args__4824__auto__.push((arguments[i__4819__auto___16595]));

var G__16596 = (i__4819__auto___16595 + (1));
i__4819__auto___16595 = G__16596;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.if_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.if_clj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,then,p__16589){
var vec__16590 = p__16589;
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16590,(0),null);
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return else$;
} else {
return then;
}
}));

(taoensso.encore.if_clj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.if_clj.cljs$lang$applyTo = (function (seq16585){
var G__16586 = cljs.core.first(seq16585);
var seq16585__$1 = cljs.core.next(seq16585);
var G__16587 = cljs.core.first(seq16585__$1);
var seq16585__$2 = cljs.core.next(seq16585__$1);
var G__16588 = cljs.core.first(seq16585__$2);
var seq16585__$3 = cljs.core.next(seq16585__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16586,G__16587,G__16588,seq16585__$3);
}));

return null;
})()
;
(taoensso.encore.if_clj.cljs$lang$macro = true);

var ret__4867__auto___16605 = (function (){
taoensso.encore.if_cljs = (function taoensso$encore$if_cljs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16606 = arguments.length;
var i__4819__auto___16607 = (0);
while(true){
if((i__4819__auto___16607 < len__4818__auto___16606)){
args__4824__auto__.push((arguments[i__4819__auto___16607]));

var G__16608 = (i__4819__auto___16607 + (1));
i__4819__auto___16607 = G__16608;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.if_cljs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.if_cljs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,then,p__16601){
var vec__16602 = p__16601;
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16602,(0),null);
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return then;
} else {
return else$;
}
}));

(taoensso.encore.if_cljs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.if_cljs.cljs$lang$applyTo = (function (seq16597){
var G__16598 = cljs.core.first(seq16597);
var seq16597__$1 = cljs.core.next(seq16597);
var G__16599 = cljs.core.first(seq16597__$1);
var seq16597__$2 = cljs.core.next(seq16597__$1);
var G__16600 = cljs.core.first(seq16597__$2);
var seq16597__$3 = cljs.core.next(seq16597__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16598,G__16599,G__16600,seq16597__$3);
}));

return null;
})()
;
(taoensso.encore.if_cljs.cljs$lang$macro = true);

var ret__4867__auto___16615 = (function (){
/**
 * Like `core/if-let` but can bind multiple values for `then` iff all tests
 *   are truthy, supports internal unconditional `:let`s.
 */
taoensso.encore.if_let = (function taoensso$encore$if_let(var_args){
var G__16611 = arguments.length;
switch (G__16611) {
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
var vec__16612 = s;
var seq__16613 = cljs.core.seq(vec__16612);
var first__16614 = cljs.core.first(seq__16613);
var seq__16613__$1 = cljs.core.next(seq__16613);
var b1 = first__16614;
var first__16614__$1 = cljs.core.first(seq__16613__$1);
var seq__16613__$2 = cljs.core.next(seq__16613__$1);
var b2 = first__16614__$1;
var bnext = seq__16613__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b1,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$b2__16609__auto__,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16609__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,b1,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16609__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
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

var ret__4867__auto___16623 = (function (){
/**
 * Like `core/if-some` but can bind multiple values for `then` iff all tests
 *   are non-nil, supports internal unconditional `:let`s.
 */
taoensso.encore.if_some = (function taoensso$encore$if_some(var_args){
var G__16619 = arguments.length;
switch (G__16619) {
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
var vec__16620 = s;
var seq__16621 = cljs.core.seq(vec__16620);
var first__16622 = cljs.core.first(seq__16621);
var seq__16621__$1 = cljs.core.next(seq__16621);
var b1 = first__16622;
var first__16622__$1 = cljs.core.first(seq__16621__$1);
var seq__16621__$2 = cljs.core.next(seq__16621__$1);
var b2 = first__16622__$1;
var bnext = seq__16621__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b1,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$b2__16617__auto__,null,(1),null)),(new cljs.core.List(null,b2,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16617__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,b1,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$b2__16617__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(bnext),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
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

var ret__4867__auto___16627 = (function (){
/**
 * Like `core/if-not` but acts like `if-let` when given a binding vector
 *   as test expr.
 */
taoensso.encore.if_not = (function taoensso$encore$if_not(var_args){
var G__16626 = arguments.length;
switch (G__16626) {
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

var ret__4867__auto___16633 = (function (){
/**
 * Like `core/when` but acts like `when-let` when given a binding vector
 *   as test expr.
 */
taoensso.encore.when = (function taoensso$encore$when(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16634 = arguments.length;
var i__4819__auto___16635 = (0);
while(true){
if((i__4819__auto___16635 < len__4818__auto___16634)){
args__4824__auto__.push((arguments[i__4819__auto___16635]));

var G__16636 = (i__4819__auto___16635 + (1));
i__4819__auto___16635 = G__16636;
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
(taoensso.encore.when.cljs$lang$applyTo = (function (seq16629){
var G__16630 = cljs.core.first(seq16629);
var seq16629__$1 = cljs.core.next(seq16629);
var G__16631 = cljs.core.first(seq16629__$1);
var seq16629__$2 = cljs.core.next(seq16629__$1);
var G__16632 = cljs.core.first(seq16629__$2);
var seq16629__$3 = cljs.core.next(seq16629__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16630,G__16631,G__16632,seq16629__$3);
}));

return null;
})()
;
(taoensso.encore.when.cljs$lang$macro = true);

var ret__4867__auto___16641 = (function (){
/**
 * Like `core/when-not` but acts like `when-let` when given a binding vector
 *   as test expr.
 */
taoensso.encore.when_not = (function taoensso$encore$when_not(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16642 = arguments.length;
var i__4819__auto___16643 = (0);
while(true){
if((i__4819__auto___16643 < len__4818__auto___16642)){
args__4824__auto__.push((arguments[i__4819__auto___16643]));

var G__16644 = (i__4819__auto___16643 + (1));
i__4819__auto___16643 = G__16644;
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
(taoensso.encore.when_not.cljs$lang$applyTo = (function (seq16637){
var G__16638 = cljs.core.first(seq16637);
var seq16637__$1 = cljs.core.next(seq16637);
var G__16639 = cljs.core.first(seq16637__$1);
var seq16637__$2 = cljs.core.next(seq16637__$1);
var G__16640 = cljs.core.first(seq16637__$2);
var seq16637__$3 = cljs.core.next(seq16637__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16638,G__16639,G__16640,seq16637__$3);
}));

return null;
})()
;
(taoensso.encore.when_not.cljs$lang$macro = true);

var ret__4867__auto___16649 = (function (){
taoensso.encore.when_some = (function taoensso$encore$when_some(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16650 = arguments.length;
var i__4819__auto___16651 = (0);
while(true){
if((i__4819__auto___16651 < len__4818__auto___16650)){
args__4824__auto__.push((arguments[i__4819__auto___16651]));

var G__16652 = (i__4819__auto___16651 + (1));
i__4819__auto___16651 = G__16652;
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
(taoensso.encore.when_some.cljs$lang$applyTo = (function (seq16645){
var G__16646 = cljs.core.first(seq16645);
var seq16645__$1 = cljs.core.next(seq16645);
var G__16647 = cljs.core.first(seq16645__$1);
var seq16645__$2 = cljs.core.next(seq16645__$1);
var G__16648 = cljs.core.first(seq16645__$2);
var seq16645__$3 = cljs.core.next(seq16645__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16646,G__16647,G__16648,seq16645__$3);
}));

return null;
})()
;
(taoensso.encore.when_some.cljs$lang$macro = true);

var ret__4867__auto___16657 = (function (){
/**
 * Like `core/when-let` but can bind multiple values for `body` iff all tests
 *   are truthy, supports internal unconditional `:let`s.
 */
taoensso.encore.when_let = (function taoensso$encore$when_let(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16658 = arguments.length;
var i__4819__auto___16659 = (0);
while(true){
if((i__4819__auto___16659 < len__4818__auto___16658)){
args__4824__auto__.push((arguments[i__4819__auto___16659]));

var G__16660 = (i__4819__auto___16659 + (1));
i__4819__auto___16659 = G__16660;
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
(taoensso.encore.when_let.cljs$lang$applyTo = (function (seq16653){
var G__16654 = cljs.core.first(seq16653);
var seq16653__$1 = cljs.core.next(seq16653);
var G__16655 = cljs.core.first(seq16653__$1);
var seq16653__$2 = cljs.core.next(seq16653__$1);
var G__16656 = cljs.core.first(seq16653__$2);
var seq16653__$3 = cljs.core.next(seq16653__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16654,G__16655,G__16656,seq16653__$3);
}));

return null;
})()
;
(taoensso.encore.when_let.cljs$lang$macro = true);

var ret__4867__auto___16674 = (function (){
taoensso.encore._cond = (function taoensso$encore$_cond(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16675 = arguments.length;
var i__4819__auto___16676 = (0);
while(true){
if((i__4819__auto___16676 < len__4818__auto___16675)){
args__4824__auto__.push((arguments[i__4819__auto___16676]));

var G__16677 = (i__4819__auto___16676 + (1));
i__4819__auto___16676 = G__16677;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore._cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore._cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,throw_QMARK_,clauses){
var b2__14809__auto__ = cljs.core.seq(clauses);
if(b2__14809__auto__){
var vec__16667 = b2__14809__auto__;
var seq__16668 = cljs.core.seq(vec__16667);
var first__16669 = cljs.core.first(seq__16668);
var seq__16668__$1 = cljs.core.next(seq__16668);
var test = first__16669;
var first__16669__$1 = cljs.core.first(seq__16668__$1);
var seq__16668__$2 = cljs.core.next(seq__16668__$1);
var expr = first__16669__$1;
var more = seq__16668__$2;
if(cljs.core.next(clauses)){
var G__16670 = test;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$if_DASH_not,G__16670)){
if(cljs.core.empty_QMARK_(more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`encore/cond`: missing `then` clause for special test keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_form,test,cljs.core.cst$kw$expr_DASH_form,expr], null));
} else {
var G__16671 = test;
var G__16671__$1 = (((G__16671 instanceof cljs.core.Keyword))?G__16671.fqn:null);
switch (G__16671__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16671__$1)].join('')));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$if_DASH_some,G__16670)){
if(cljs.core.empty_QMARK_(more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`encore/cond`: missing `then` clause for special test keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_form,test,cljs.core.cst$kw$expr_DASH_form,expr], null));
} else {
var G__16672 = test;
var G__16672__$1 = (((G__16672 instanceof cljs.core.Keyword))?G__16672.fqn:null);
switch (G__16672__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16672__$1)].join('')));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$let,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$do,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_not,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$else,G__16670)){
return expr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__16670)){
return expr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__16670)){
return expr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return_DASH_when,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$x__16661__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__16661__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$if_DASH_let,G__16670)){
if(cljs.core.empty_QMARK_(more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`encore/cond`: missing `then` clause for special test keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_form,test,cljs.core.cst$kw$expr_DASH_form,expr], null));
} else {
var G__16673 = test;
var G__16673__$1 = (((G__16673 instanceof cljs.core.Keyword))?G__16673.fqn:null);
switch (G__16673__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16673__$1)].join('')));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_some,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_some,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return_DASH_some,G__16670)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_some,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$x__16662__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__16662__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,throw_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
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
(taoensso.encore._cond.cljs$lang$applyTo = (function (seq16663){
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
(taoensso.encore._cond.cljs$lang$macro = true);

var ret__4867__auto___16684 = (function (){
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
var len__4818__auto___16685 = arguments.length;
var i__4819__auto___16686 = (0);
while(true){
if((i__4819__auto___16686 < len__4818__auto___16685)){
args__4824__auto__.push((arguments[i__4819__auto___16686]));

var G__16687 = (i__4819__auto___16686 + (1));
i__4819__auto___16686 = G__16687;
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
(taoensso.encore.cond.cljs$lang$applyTo = (function (seq16681){
var G__16682 = cljs.core.first(seq16681);
var seq16681__$1 = cljs.core.next(seq16681);
var G__16683 = cljs.core.first(seq16681__$1);
var seq16681__$2 = cljs.core.next(seq16681__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16682,G__16683,seq16681__$2);
}));

return null;
})()
;
(taoensso.encore.cond.cljs$lang$macro = true);

var ret__4867__auto___16691 = (function (){
/**
 * Like `cond` but throws on non-match like `case` and `condp`.
 */
taoensso.encore.cond_BANG_ = (function taoensso$encore$cond_BANG_(var_args){
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

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.cond_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.cond_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH__DASH_cond,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clauses], 0))));
}));

(taoensso.encore.cond_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.cond_BANG_.cljs$lang$applyTo = (function (seq16688){
var G__16689 = cljs.core.first(seq16688);
var seq16688__$1 = cljs.core.next(seq16688);
var G__16690 = cljs.core.first(seq16688__$1);
var seq16688__$2 = cljs.core.next(seq16688__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16689,G__16690,seq16688__$2);
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
var G__16696 = arguments.length;
switch (G__16696) {
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
var vec__16697 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16697,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16697,(1),null);
var vec__16700 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16700,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16700,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

var ret__4867__auto___16711 = (function (){
/**
 * Like `core/defonce` but supports optional docstring and attrs map.
 */
taoensso.encore.defonce = (function taoensso$encore$defonce(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16712 = arguments.length;
var i__4819__auto___16713 = (0);
while(true){
if((i__4819__auto___16713 < len__4818__auto___16712)){
args__4824__auto__.push((arguments[i__4819__auto___16713]));

var G__16714 = (i__4819__auto___16713 + (1));
i__4819__auto___16713 = G__16714;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.defonce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.defonce.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,args){
var vec__16708 = taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2(sym,args);
var sym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16708,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16708,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defonce,null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defonce,null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.defonce.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.defonce.cljs$lang$applyTo = (function (seq16704){
var G__16705 = cljs.core.first(seq16704);
var seq16704__$1 = cljs.core.next(seq16704);
var G__16706 = cljs.core.first(seq16704__$1);
var seq16704__$2 = cljs.core.next(seq16704__$1);
var G__16707 = cljs.core.first(seq16704__$2);
var seq16704__$3 = cljs.core.next(seq16704__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16705,G__16706,G__16707,seq16704__$3);
}));

return null;
})()
;
(taoensso.encore.defonce.cljs$lang$macro = true);

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;

var ret__4867__auto___16724 = (function (){
taoensso.encore.do_nil = (function taoensso$encore$do_nil(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16725 = arguments.length;
var i__4819__auto___16726 = (0);
while(true){
if((i__4819__auto___16726 < len__4818__auto___16725)){
args__4824__auto__.push((arguments[i__4819__auto___16726]));

var G__16727 = (i__4819__auto___16726 + (1));
i__4819__auto___16726 = G__16727;
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
(taoensso.encore.do_nil.cljs$lang$applyTo = (function (seq16715){
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
(taoensso.encore.do_nil.cljs$lang$macro = true);


var ret__4867__auto___16728 = (function (){
taoensso.encore.do_false = (function taoensso$encore$do_false(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16729 = arguments.length;
var i__4819__auto___16730 = (0);
while(true){
if((i__4819__auto___16730 < len__4818__auto___16729)){
args__4824__auto__.push((arguments[i__4819__auto___16730]));

var G__16731 = (i__4819__auto___16730 + (1));
i__4819__auto___16730 = G__16731;
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
(taoensso.encore.do_false.cljs$lang$applyTo = (function (seq16718){
var G__16719 = cljs.core.first(seq16718);
var seq16718__$1 = cljs.core.next(seq16718);
var G__16720 = cljs.core.first(seq16718__$1);
var seq16718__$2 = cljs.core.next(seq16718__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16719,G__16720,seq16718__$2);
}));

return null;
})()
;
(taoensso.encore.do_false.cljs$lang$macro = true);


var ret__4867__auto___16732 = (function (){
taoensso.encore.do_true = (function taoensso$encore$do_true(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16733 = arguments.length;
var i__4819__auto___16734 = (0);
while(true){
if((i__4819__auto___16734 < len__4818__auto___16733)){
args__4824__auto__.push((arguments[i__4819__auto___16734]));

var G__16735 = (i__4819__auto___16734 + (1));
i__4819__auto___16734 = G__16735;
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
(taoensso.encore.do_true.cljs$lang$applyTo = (function (seq16721){
var G__16722 = cljs.core.first(seq16721);
var seq16721__$1 = cljs.core.next(seq16721);
var G__16723 = cljs.core.first(seq16721__$1);
var seq16721__$2 = cljs.core.next(seq16721__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16722,G__16723,seq16721__$2);
}));

return null;
})()
;
(taoensso.encore.do_true.cljs$lang$macro = true);

var ret__4867__auto___16748 = (function (){
/**
 * Cross between `doto`, `cond->` and `as->`.
 */
taoensso.encore.doto_cond = (function taoensso$encore$doto_cond(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16749 = arguments.length;
var i__4819__auto___16750 = (0);
while(true){
if((i__4819__auto___16750 < len__4818__auto___16749)){
args__4824__auto__.push((arguments[i__4819__auto___16750]));

var G__16751 = (i__4819__auto___16750 + (1));
i__4819__auto___16750 = G__16751;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.encore.doto_cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.encore.doto_cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16740,clauses){
var vec__16741 = p__16740;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(1),null);
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = (function (p__16744){
var vec__16745 = p__16744;
var test_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,test_expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null))], 0))));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}));

(taoensso.encore.doto_cond.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.encore.doto_cond.cljs$lang$applyTo = (function (seq16736){
var G__16737 = cljs.core.first(seq16736);
var seq16736__$1 = cljs.core.next(seq16736);
var G__16738 = cljs.core.first(seq16736__$1);
var seq16736__$2 = cljs.core.next(seq16736__$1);
var G__16739 = cljs.core.first(seq16736__$2);
var seq16736__$3 = cljs.core.next(seq16736__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16737,G__16738,G__16739,seq16736__$3);
}));

return null;
})()
;
(taoensso.encore.doto_cond.cljs$lang$macro = true);

var ret__4867__auto___16755 = (function (){
/**
 * Declares given ns-qualified symbols, preserving metadata. Useful for
 *   circular dependencies.
 */
taoensso.encore.declare_remote = (function taoensso$encore$declare_remote(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16756 = arguments.length;
var i__4819__auto___16757 = (0);
while(true){
if((i__4819__auto___16757 < len__4818__auto___16756)){
args__4824__auto__.push((arguments[i__4819__auto___16757]));

var G__16758 = (i__4819__auto___16757 + (1));
i__4819__auto___16757 = G__16758;
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
(taoensso.encore.declare_remote.cljs$lang$applyTo = (function (seq16752){
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
(taoensso.encore.declare_remote.cljs$lang$macro = true);

var ret__4867__auto___16762 = (function (){
/**
 * Defines an alias for qualified source symbol, preserving its metadata (clj only):
 *  (defalias my-map-alias clojure.core/map)
 * 
 *   Cannot alias Cljs macros.
 *   Changes to source are not automatically applied to alias.
 */
taoensso.encore.defalias = (function taoensso$encore$defalias(var_args){
var G__16761 = arguments.length;
switch (G__16761) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$attrs__16759__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_select_DASH_keys,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,src,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$doc,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$arglists,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$private,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$macro,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,attrs__$1,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_alter_DASH_meta_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,src,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$attrs__16759__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))], 0))));
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
var G__16765 = arguments.length;
switch (G__16765) {
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
var readers__$1 = (cljs.core.truth_((function (){var G__16766 = readers;
var G__16767 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__16766,G__16767) : taoensso.encore.kw_identical_QMARK_.call(null,G__16766,G__16767));
})())?(function (){var G__16768 = cljs.core.symbol;
var G__16769 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__16768,G__16769) : taoensso.encore.map_keys.call(null,G__16768,G__16769));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__16770 = default$;
var G__16771 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__16770,G__16771) : taoensso.encore.kw_identical_QMARK_.call(null,G__16770,G__16771));
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
var G__16774 = arguments.length;
switch (G__16774) {
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
var _STAR_print_level_STAR__orig_val__16775 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__16776 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__16777 = null;
var _STAR_print_length_STAR__temp_val__16778 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__16777);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__16778);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__16776);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__16775);
}}));

(taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2);

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__14809__auto__ = (function (){var or__4212__auto__ = cljs.core.ex_data(x);
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
if(cljs.core.truth_(b2__14809__auto__)){
var data_map = b2__14809__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
var ret__4867__auto___16782 = (function (){
/**
 * Cross-platform try/catch/finally.
 */
taoensso.encore.catching = (function taoensso$encore$catching(var_args){
var G__16781 = arguments.length;
switch (G__16781) {
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

var ret__4867__auto___16788 = (function (){
/**
 * Handy for error-throwing unit tests.
 */
taoensso.encore.caught_error_data = (function taoensso$encore$caught_error_data(var_args){
var args__4824__auto__ = [];
var len__4818__auto___16789 = arguments.length;
var i__4819__auto___16790 = (0);
while(true){
if((i__4819__auto___16790 < len__4818__auto___16789)){
args__4824__auto__.push((arguments[i__4819__auto___16790]));

var G__16791 = (i__4819__auto___16790 + (1));
i__4819__auto___16790 = G__16791;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.caught_error_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.caught_error_data.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__16784__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_error_DASH_data,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__16784__auto__,null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.encore.caught_error_data.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.caught_error_data.cljs$lang$applyTo = (function (seq16785){
var G__16786 = cljs.core.first(seq16785);
var seq16785__$1 = cljs.core.next(seq16785);
var G__16787 = cljs.core.first(seq16785__$1);
var seq16785__$2 = cljs.core.next(seq16785__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16786,G__16787,seq16785__$2);
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
var c_16796 = (new cljs.core.Delay((function (){
return cljs.core.async.impl.channels.ManyToManyChannel;
}),null));
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
var c__4243__auto__ = cljs.core.deref(c_16796);
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
var b2__14809__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__14809__auto__)){
var ns = b2__14809__auto__;
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__14809__auto__)){
var n = b2__14809__auto__;
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__14809__auto__)){
var n = b2__14809__auto__;
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__14809__auto__)){
var n = b2__14809__auto__;
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14809__auto__)){
var n = b2__14809__auto__;
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14809__auto__)){
var n = b2__14809__auto__;
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14809__auto__)){
var f = b2__14809__auto__;
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__14809__auto__)){
var f = b2__14809__auto__;
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

var regex_16801 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__16798 = arguments.length;
switch (G__16798) {
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
var b2__14809__auto__ = (function (){var and__4210__auto__ = _QMARK_s;
if(cljs.core.truth_(and__4210__auto__)){
return clojure.string.trim(_QMARK_s);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(b2__14809__auto__)){
var s = b2__14809__auto__;
if((cljs.core.count(s) <= max_len)){
return cljs.core.re_find(regex_16801,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__16800 = arguments.length;
switch (G__16800) {
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
var b2__14809__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1(_QMARK_s);
if(cljs.core.truth_(b2__14809__auto__)){
var email = b2__14809__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__14809__auto__ = taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2(max_len,_QMARK_s);
if(cljs.core.truth_(b2__14809__auto__)){
var email = b2__14809__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e16804){var _ = e16804;
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
var G__16806 = arguments.length;
switch (G__16806) {
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
var G__16809 = arguments.length;
switch (G__16809) {
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
var G__16811 = arguments.length;
switch (G__16811) {
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
var ret__4867__auto___16825 = (function (){
/**
 * Returns first logical false/throwing expression (id/form), or nil.
 */
taoensso.encore.check_some = (function taoensso$encore$check_some(var_args){
var G__16821 = arguments.length;
switch (G__16821) {
case 3:
return taoensso.encore.check_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___16827 = arguments.length;
var i__4819__auto___16828 = (0);
while(true){
if((i__4819__auto___16828 < len__4818__auto___16827)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16828]));

var G__16829 = (i__4819__auto___16828 + (1));
i__4819__auto___16828 = G__16829;
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
(taoensso.encore.check_some.cljs$lang$applyTo = (function (seq16817){
var G__16818 = cljs.core.first(seq16817);
var seq16817__$1 = cljs.core.next(seq16817);
var G__16819 = cljs.core.first(seq16817__$1);
var seq16817__$2 = cljs.core.next(seq16817__$1);
var G__16820 = cljs.core.first(seq16817__$2);
var seq16817__$3 = cljs.core.next(seq16817__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16818,G__16819,G__16820,seq16817__$3);
}));

(taoensso.encore.check_some.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,test){
var vec__16822 = ((cljs.core.vector_QMARK_(test))?test:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,test], null));
var error_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16822,(0),null);
var test__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16822,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$test__16814__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$err__16815__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,test__$1,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$err__16815__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$err__16815__auto__,null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$test__16814__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,error_id,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,test__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$check_SLASH_falsey,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.check_some.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(taoensso.encore.check_some.cljs$lang$macro = true);

var ret__4867__auto___16837 = (function (){
/**
 * Returns all logical false/throwing expressions (ids/forms), or nil.
 */
taoensso.encore.check_all = (function taoensso$encore$check_all(var_args){
var G__16836 = arguments.length;
switch (G__16836) {
case 3:
return taoensso.encore.check_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___16839 = arguments.length;
var i__4819__auto___16840 = (0);
while(true){
if((i__4819__auto___16840 < len__4818__auto___16839)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16840]));

var G__16841 = (i__4819__auto___16840 + (1));
i__4819__auto___16840 = G__16841;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$errors__16830__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_filterv,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_identity,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (test__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_check_DASH_some,null,(1),null)),(new cljs.core.List(null,test__$1,null,(1),null)))));
}),cljs.core.cons(test,more)))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$errors__16830__auto__,null,(1),null))))),null,(1),null))], 0))));
}));

/** @this {Function} */
(taoensso.encore.check_all.cljs$lang$applyTo = (function (seq16832){
var G__16833 = cljs.core.first(seq16832);
var seq16832__$1 = cljs.core.next(seq16832);
var G__16834 = cljs.core.first(seq16832__$1);
var seq16832__$2 = cljs.core.next(seq16832__$1);
var G__16835 = cljs.core.first(seq16832__$2);
var seq16832__$3 = cljs.core.next(seq16832__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16833,G__16834,G__16835,seq16832__$3);
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
var G__16843 = arguments.length;
switch (G__16843) {
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
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__16845){
var vec__16846 = p__16845;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16846,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__16850 = arguments.length;
switch (G__16850) {
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
var G__16852 = acc;
var G__16853 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
var G__16854 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__16852,G__16853,G__16854) : rf.call(null,G__16852,G__16853,G__16854));
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__16855 = acc;
var G__16856 = k;
var G__16857 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16855,G__16856,G__16857) : f.call(null,G__16855,G__16856,G__16857));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16859_SHARP_,p2__16858_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__16858_SHARP_) : proc.call(null,p2__16858_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__16862_SHARP_,p2__16860_SHARP_,p3__16861_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__16860_SHARP_,p3__16861_SHARP_) : proc.call(null,p2__16860_SHARP_,p3__16861_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__16865_SHARP_,p2__16863_SHARP_,p3__16864_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__16863_SHARP_,p3__16864_SHARP_) : proc.call(null,p2__16863_SHARP_,p3__16864_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__16868_SHARP_,p2__16866_SHARP_,p3__16867_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__16866_SHARP_,p3__16867_SHARP_) : proc.call(null,p2__16866_SHARP_,p3__16867_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__14809__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__14809__auto__)){
var p = b2__14809__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__14809__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__14809__auto__)){
var p = b2__14809__auto__;
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
var G__16871 = arguments.length;
switch (G__16871) {
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
return ((function (){var G__16872 = (x - y);
return Math.abs(G__16872);
})() < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__16873 = (x - y);
return Math.abs(G__16873);
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
var ret__4867__auto___16886 = taoensso.encore._LT__EQ__STAR_ = (function taoensso$encore$_LT__EQ__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16875__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16875__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16875__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._LT__EQ__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16887 = taoensso.encore._GT__EQ__STAR_ = (function taoensso$encore$_GT__EQ__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16876__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16876__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16876__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._GT__EQ__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16888 = taoensso.encore._LT__STAR_ = (function taoensso$encore$_LT__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16877__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16877__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16877__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._LT__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16889 = taoensso.encore._GT__STAR_ = (function taoensso$encore$_GT__STAR_(_AMPERSAND_form,_AMPERSAND_env,x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$y__16878__auto__,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$y__16878__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$y__16878__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore._GT__STAR_.cljs$lang$macro = true);


var ret__4867__auto___16890 = taoensso.encore.min_STAR_ = (function taoensso$encore$min_STAR_(_AMPERSAND_form,_AMPERSAND_env,n1,n2){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$n1__16879__auto__,null,(1),null)),(new cljs.core.List(null,n1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16880__auto__,null,(1),null)),(new cljs.core.List(null,n2,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16879__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16880__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16880__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16879__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.min_STAR_.cljs$lang$macro = true);


var ret__4867__auto___16891 = taoensso.encore.max_STAR_ = (function taoensso$encore$max_STAR_(_AMPERSAND_form,_AMPERSAND_env,n1,n2){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$n1__16881__auto__,null,(1),null)),(new cljs.core.List(null,n1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16882__auto__,null,(1),null)),(new cljs.core.List(null,n2,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16881__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16882__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$n2__16882__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n1__16881__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.encore.max_STAR_.cljs$lang$macro = true);


var ret__4867__auto___16892 = taoensso.encore.clamp_STAR_ = (function taoensso$encore$clamp_STAR_(_AMPERSAND_form,_AMPERSAND_env,nmin,nmax,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$nmin__16883__auto__,null,(1),null)),(new cljs.core.List(null,nmin,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmax__16884__auto__,null,(1),null)),(new cljs.core.List(null,nmax,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16885__auto__,null,(1),null)),(new cljs.core.List(null,n,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16885__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmin__16883__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmin__16883__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16885__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmax__16884__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nmax__16884__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$n__16885__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
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
var G__16894 = arguments.length;
switch (G__16894) {
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
var rounded = (function (){var G__16895 = type;
var G__16895__$1 = (((G__16895 instanceof cljs.core.Keyword))?G__16895.fqn:null);
switch (G__16895__$1) {
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
var G__16898 = n;
return Math.round(G__16898);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__16899 = (n * 10.0);
return Math.round(G__16899);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__16900 = (n * 100.0);
return Math.round(G__16900);
})() / 100.0);
});

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
var G__16901 = ((n / divisor) * 100.0);
return Math.round(G__16901);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__16903 = arguments.length;
switch (G__16903) {
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

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__16904){
var map__16905 = p__16904;
var map__16905__$1 = cljs.core.__destructure_map(map__16905);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16905__$1,cljs.core.cst$kw$factor,(1000));
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
return cljs.core.with_meta(x,(function (){var G__16907 = cljs.core.meta(x);
var G__16908 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__16907,G__16908) : taoensso.encore.merge.call(null,G__16907,G__16908));
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
var G__16914 = arguments.length;
switch (G__16914) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___16916 = arguments.length;
var i__4819__auto___16917 = (0);
while(true){
if((i__4819__auto___16917 < len__4818__auto___16916)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16917]));

var G__16918 = (i__4819__auto___16917 + (1));
i__4819__auto___16917 = G__16918;
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
return taoensso.encore.revery_QMARK_((function (p1__16909_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16909_SHARP_,x);
}),more);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq16911){
var G__16912 = cljs.core.first(seq16911);
var seq16911__$1 = cljs.core.next(seq16911);
var G__16913 = cljs.core.first(seq16911__$1);
var seq16911__$2 = cljs.core.next(seq16911__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16912,G__16913,seq16911__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__16924 = arguments.length;
switch (G__16924) {
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
var len__4818__auto___16926 = arguments.length;
var i__4819__auto___16927 = (0);
while(true){
if((i__4819__auto___16927 < len__4818__auto___16926)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16927]));

var G__16928 = (i__4819__auto___16927 + (1));
i__4819__auto___16927 = G__16928;
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
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq16920){
var G__16921 = cljs.core.first(seq16920);
var seq16920__$1 = cljs.core.next(seq16920);
var G__16922 = cljs.core.first(seq16920__$1);
var seq16920__$2 = cljs.core.next(seq16920__$1);
var G__16923 = cljs.core.first(seq16920__$2);
var seq16920__$3 = cljs.core.next(seq16920__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16921,G__16922,G__16923,seq16920__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__16929 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16929,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16929,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__14809__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__14809__auto__)){
var s = b2__14809__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__14809__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__14809__auto__)){
var s = b2__14809__auto__;
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
var vec__16933 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16933,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16933,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16933,(2),null);
var vec__16936 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16936,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16936,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16936,(2),null);
var vec__16939 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16932_SHARP_){
var or__4212__auto__ = p1__16932_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16939,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16939,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16939,(2),null);
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
var G__16943 = arguments.length;
switch (G__16943) {
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
var len__4818__auto___16946 = arguments.length;
var i__4819__auto___16947 = (0);
while(true){
if((i__4819__auto___16947 < len__4818__auto___16946)){
args__4824__auto__.push((arguments[i__4819__auto___16947]));

var G__16948 = (i__4819__auto___16947 + (1));
i__4819__auto___16947 = G__16948;
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
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq16945){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16945));
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
var G__16952 = arguments.length;
switch (G__16952) {
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

var sentinel_16958 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__16957 = arguments.length;
switch (G__16957) {
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
var o__$2 = goog.object.get(o__$1,cljs.core.name(cljs.core.first(ks__$1)),sentinel_16958);
if((o__$2 === sentinel_16958)){
return not_found;
} else {
var G__16960 = o__$2;
var G__16961 = cljs.core.next(ks__$1);
o__$1 = G__16960;
ks__$1 = G__16961;
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
var G__16966 = arguments.length;
switch (G__16966) {
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
var len__4818__auto___16973 = arguments.length;
var i__4819__auto___16974 = (0);
while(true){
if((i__4819__auto___16974 < len__4818__auto___16973)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16974]));

var G__16975 = (i__4819__auto___16974 + (1));
i__4819__auto___16974 = G__16975;
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
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq16963){
var G__16964 = cljs.core.first(seq16963);
var seq16963__$1 = cljs.core.next(seq16963);
var G__16965 = cljs.core.first(seq16963__$1);
var seq16963__$2 = cljs.core.next(seq16963__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16964,G__16965,seq16963__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__16971 = arguments.length;
switch (G__16971) {
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
var len__4818__auto___16977 = arguments.length;
var i__4819__auto___16978 = (0);
while(true){
if((i__4819__auto___16978 < len__4818__auto___16977)){
args_arr__4839__auto__.push((arguments[i__4819__auto___16978]));

var G__16979 = (i__4819__auto___16978 + (1));
i__4819__auto___16978 = G__16979;
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
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq16968){
var G__16969 = cljs.core.first(seq16968);
var seq16968__$1 = cljs.core.next(seq16968);
var G__16970 = cljs.core.first(seq16968__$1);
var seq16968__$2 = cljs.core.next(seq16968__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16969,G__16970,seq16968__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__16985 = arguments.length;
switch (G__16985) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17005 = arguments.length;
var i__4819__auto___17006 = (0);
while(true){
if((i__4819__auto___17006 < len__4818__auto___17005)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17006]));

var G__17007 = (i__4819__auto___17006 + (1));
i__4819__auto___17006 = G__17007;
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
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq16981){
var G__16982 = cljs.core.first(seq16981);
var seq16981__$1 = cljs.core.next(seq16981);
var G__16983 = cljs.core.first(seq16981__$1);
var seq16981__$2 = cljs.core.next(seq16981__$1);
var G__16984 = cljs.core.first(seq16981__$2);
var seq16981__$3 = cljs.core.next(seq16981__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16982,G__16983,G__16984,seq16981__$3);
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
var G__16991 = arguments.length;
switch (G__16991) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17009 = arguments.length;
var i__4819__auto___17010 = (0);
while(true){
if((i__4819__auto___17010 < len__4818__auto___17009)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17010]));

var G__17011 = (i__4819__auto___17010 + (1));
i__4819__auto___17010 = G__17011;
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
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq16987){
var G__16988 = cljs.core.first(seq16987);
var seq16987__$1 = cljs.core.next(seq16987);
var G__16989 = cljs.core.first(seq16987__$1);
var seq16987__$2 = cljs.core.next(seq16987__$1);
var G__16990 = cljs.core.first(seq16987__$2);
var seq16987__$3 = cljs.core.next(seq16987__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16988,G__16989,G__16990,seq16987__$3);
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
var G__16997 = arguments.length;
switch (G__16997) {
case 3:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17013 = arguments.length;
var i__4819__auto___17014 = (0);
while(true){
if((i__4819__auto___17014 < len__4818__auto___17013)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17014]));

var G__17015 = (i__4819__auto___17014 + (1));
i__4819__auto___17014 = G__17015;
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
(taoensso.encore.dis_assoc_some.cljs$lang$applyTo = (function (seq16993){
var G__16994 = cljs.core.first(seq16993);
var seq16993__$1 = cljs.core.next(seq16993);
var G__16995 = cljs.core.first(seq16993__$1);
var seq16993__$2 = cljs.core.next(seq16993__$1);
var G__16996 = cljs.core.first(seq16993__$2);
var seq16993__$3 = cljs.core.next(seq16993__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16994,G__16995,G__16996,seq16993__$3);
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
var G__17003 = arguments.length;
switch (G__17003) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17017 = arguments.length;
var i__4819__auto___17018 = (0);
while(true){
if((i__4819__auto___17018 < len__4818__auto___17017)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17018]));

var G__17019 = (i__4819__auto___17018 + (1));
i__4819__auto___17018 = G__17019;
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
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq16999){
var G__17000 = cljs.core.first(seq16999);
var seq16999__$1 = cljs.core.next(seq16999);
var G__17001 = cljs.core.first(seq16999__$1);
var seq16999__$2 = cljs.core.next(seq16999__$1);
var G__17002 = cljs.core.first(seq16999__$2);
var seq16999__$3 = cljs.core.next(seq16999__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17000,G__17001,G__17002,seq16999__$3);
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
var G__17021 = arguments.length;
switch (G__17021) {
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
var G__17024 = arguments.length;
switch (G__17024) {
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
var vec__17026 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17026,(0),null);
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
var vec__17032 = xs__$1;
var seq__17033 = cljs.core.seq(vec__17032);
var first__17034 = cljs.core.first(seq__17033);
var seq__17033__$1 = cljs.core.next(seq__17033);
var x1 = first__17034;
var xn = seq__17033__$1;
if(xn){
var G__17035 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__17036 = xn;
butlast = G__17035;
xs__$1 = G__17036;
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
var len__4818__auto___17039 = arguments.length;
var i__4819__auto___17040 = (0);
while(true){
if((i__4819__auto___17040 < len__4818__auto___17039)){
args__4824__auto__.push((arguments[i__4819__auto___17040]));

var G__17041 = (i__4819__auto___17040 + (1));
i__4819__auto___17040 = G__17041;
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
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq17037){
var G__17038 = cljs.core.first(seq17037);
var seq17037__$1 = cljs.core.next(seq17037);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17038,seq17037__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__17046 = arguments.length;
switch (G__17046) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17048 = arguments.length;
var i__4819__auto___17049 = (0);
while(true){
if((i__4819__auto___17049 < len__4818__auto___17048)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17049]));

var G__17050 = (i__4819__auto___17049 + (1));
i__4819__auto___17049 = G__17050;
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
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq17043){
var G__17044 = cljs.core.first(seq17043);
var seq17043__$1 = cljs.core.next(seq17043);
var G__17045 = cljs.core.first(seq17043__$1);
var seq17043__$2 = cljs.core.next(seq17043__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17044,G__17045,seq17043__$2);
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
var G__17052 = arguments.length;
switch (G__17052) {
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
var G__17055 = arguments.length;
switch (G__17055) {
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
var G__17057 = null;
var G__17057__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__17057__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__17057__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__17057 = function(acc,input){
switch(arguments.length){
case 0:
return G__17057__0.call(this);
case 1:
return G__17057__1.call(this,acc);
case 2:
return G__17057__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17057.cljs$core$IFn$_invoke$arity$0 = G__17057__0;
G__17057.cljs$core$IFn$_invoke$arity$1 = G__17057__1;
G__17057.cljs$core$IFn$_invoke$arity$2 = G__17057__2;
return G__17057;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

var p_BANG__17067 = cljs.core.persistent_BANG_;
var t_17068 = cljs.core.transient$;
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
var G__17058 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),(function (){var G__17059 = cljs.core.PersistentArrayMap.EMPTY;
return (t_17068.cljs$core$IFn$_invoke$arity$1 ? t_17068.cljs$core$IFn$_invoke$arity$1(G__17059) : t_17068.call(null,G__17059));
})(),m);
return (p_BANG__17067.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17067.cljs$core$IFn$_invoke$arity$1(G__17058) : p_BANG__17067.call(null,G__17058));
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
var G__17060 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),(function (){var G__17061 = cljs.core.PersistentArrayMap.EMPTY;
return (t_17068.cljs$core$IFn$_invoke$arity$1 ? t_17068.cljs$core$IFn$_invoke$arity$1(G__17061) : t_17068.call(null,G__17061));
})(),m);
return (p_BANG__17067.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17067.cljs$core$IFn$_invoke$arity$1(G__17060) : p_BANG__17067.call(null,G__17060));
});

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17062 = cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),(t_17068.cljs$core$IFn$_invoke$arity$1 ? t_17068.cljs$core$IFn$_invoke$arity$1(m) : t_17068.call(null,m)),m);
return (p_BANG__17067.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17067.cljs$core$IFn$_invoke$arity$1(G__17062) : p_BANG__17067.call(null,G__17062));
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17063 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_17068.cljs$core$IFn$_invoke$arity$1 ? t_17068.cljs$core$IFn$_invoke$arity$1(m) : t_17068.call(null,m)),m);
return (p_BANG__17067.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17067.cljs$core$IFn$_invoke$arity$1(G__17063) : p_BANG__17067.call(null,G__17063));
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17064 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_17068.cljs$core$IFn$_invoke$arity$1 ? t_17068.cljs$core$IFn$_invoke$arity$1(m) : t_17068.call(null,m)),m);
return (p_BANG__17067.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17067.cljs$core$IFn$_invoke$arity$1(G__17064) : p_BANG__17067.call(null,G__17064));
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17065 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_17068.cljs$core$IFn$_invoke$arity$1 ? t_17068.cljs$core$IFn$_invoke$arity$1(m) : t_17068.call(null,m)),m);
return (p_BANG__17067.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17067.cljs$core$IFn$_invoke$arity$1(G__17065) : p_BANG__17067.call(null,G__17065));
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__17066 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),(t_17068.cljs$core$IFn$_invoke$arity$1 ? t_17068.cljs$core$IFn$_invoke$arity$1(m) : t_17068.call(null,m)),m);
return (p_BANG__17067.cljs$core$IFn$_invoke$arity$1 ? p_BANG__17067.cljs$core$IFn$_invoke$arity$1(G__17066) : p_BANG__17067.call(null,G__17066));
}
});
/**
 * Returns a map like the one given, replacing keys using
 *   the given {<old-new> <new-key>} replacements.
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
var b2__14809__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(k) : replacements.call(null,k));
if(cljs.core.truth_(b2__14809__auto__)){
var rk = b2__14809__auto__;
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
return taoensso.encore.revery_QMARK_((function (p1__17069_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__17069_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__17071 = arguments.length;
switch (G__17071) {
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
var b2__14809__auto__ = cljs.core.seq(ks);
if(b2__14809__auto__){
var ks_seq = b2__14809__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__14809__auto____$1 = cljs.core.next(ks_seq);
if(b2__14809__auto____$1){
var ks__$1 = b2__14809__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__17072 = f;
var G__17073 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17072,G__17073) : taoensso.encore.kw_identical_QMARK_.call(null,G__17072,G__17073));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__17074 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17074) : f.call(null,G__17074));
})();
if(cljs.core.truth_((function (){var G__17075 = v;
var G__17076 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17075,G__17076) : taoensso.encore.kw_identical_QMARK_.call(null,G__17075,G__17076));
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
var G__17079 = arguments.length;
switch (G__17079) {
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
var G__17086 = arguments.length;
switch (G__17086) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17088 = arguments.length;
var i__4819__auto___17089 = (0);
while(true){
if((i__4819__auto___17089 < len__4818__auto___17088)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17089]));

var G__17090 = (i__4819__auto___17089 + (1));
i__4819__auto___17089 = G__17090;
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
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq17082){
var G__17083 = cljs.core.first(seq17082);
var seq17082__$1 = cljs.core.next(seq17082);
var G__17084 = cljs.core.first(seq17082__$1);
var seq17082__$2 = cljs.core.next(seq17082__$1);
var G__17085 = cljs.core.first(seq17082__$2);
var seq17082__$3 = cljs.core.next(seq17082__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17083,G__17084,G__17085,seq17082__$3);
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__17092 = arguments.length;
switch (G__17092) {
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
var G__17098 = arguments.length;
switch (G__17098) {
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
var len__4818__auto___17100 = arguments.length;
var i__4819__auto___17101 = (0);
while(true){
if((i__4819__auto___17101 < len__4818__auto___17100)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17101]));

var G__17102 = (i__4819__auto___17101 + (1));
i__4819__auto___17101 = G__17102;
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
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq17095){
var G__17096 = cljs.core.first(seq17095);
var seq17095__$1 = cljs.core.next(seq17095);
var G__17097 = cljs.core.first(seq17095__$1);
var seq17095__$2 = cljs.core.next(seq17095__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17096,G__17097,seq17095__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__17103 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__17104 = cljs.core.next(s1);
var G__17105 = cljs.core.next(s2);
v = G__17103;
s1 = G__17104;
s2 = G__17105;
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
var ret__4867__auto___17106 = taoensso.encore.new_object = (function taoensso$encore$new_object(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$Object$,null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.new_object.cljs$lang$macro = true);

var not_found_17113 = ({});
taoensso.encore._merge_with = (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv((function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_17113);
if((lv === not_found_17113)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__17109 = rv;
var G__17110 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17109,G__17110) : taoensso.encore.kw_identical_QMARK_.call(null,G__17109,G__17110));
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
if(cljs.core.truth_((function (){var G__17111 = new_rv;
var G__17112 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17111,G__17112) : taoensso.encore.kw_identical_QMARK_.call(null,G__17111,G__17112));
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
var len__4818__auto___17120 = arguments.length;
var i__4819__auto___17121 = (0);
while(true){
if((i__4819__auto___17121 < len__4818__auto___17120)){
args__4824__auto__.push((arguments[i__4819__auto___17121]));

var G__17122 = (i__4819__auto___17121 + (1));
i__4819__auto___17121 = G__17122;
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
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq17114){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17114));
}));


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17123 = arguments.length;
var i__4819__auto___17124 = (0);
while(true){
if((i__4819__auto___17124 < len__4818__auto___17123)){
args__4824__auto__.push((arguments[i__4819__auto___17124]));

var G__17125 = (i__4819__auto___17124 + (1));
i__4819__auto___17124 = G__17125;
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
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq17115){
var G__17116 = cljs.core.first(seq17115);
var seq17115__$1 = cljs.core.next(seq17115);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17116,seq17115__$1);
}));


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17126 = arguments.length;
var i__4819__auto___17127 = (0);
while(true){
if((i__4819__auto___17127 < len__4818__auto___17126)){
args__4824__auto__.push((arguments[i__4819__auto___17127]));

var G__17128 = (i__4819__auto___17127 + (1));
i__4819__auto___17127 = G__17128;
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
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq17117){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17117));
}));


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17129 = arguments.length;
var i__4819__auto___17130 = (0);
while(true){
if((i__4819__auto___17130 < len__4818__auto___17129)){
args__4824__auto__.push((arguments[i__4819__auto___17130]));

var G__17131 = (i__4819__auto___17130 + (1));
i__4819__auto___17130 = G__17131;
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
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq17118){
var G__17119 = cljs.core.first(seq17118);
var seq17118__$1 = cljs.core.next(seq17118);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17119,seq17118__$1);
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
var ret__4867__auto___17143 = (function (){
/**
 * Micro optimization, mostly for cljs.
 */
taoensso.encore._if_cas_BANG_ = (function taoensso$encore$_if_cas_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17144 = arguments.length;
var i__4819__auto___17145 = (0);
while(true){
if((i__4819__auto___17145 < len__4818__auto___17144)){
args__4824__auto__.push((arguments[i__4819__auto___17145]));

var G__17146 = (i__4819__auto___17145 + (1));
i__4819__auto___17145 = G__17146;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((6) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((6)),(0),null)):null);
return taoensso.encore._if_cas_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4825__auto__);
});

(taoensso.encore._if_cas_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,atom_,old_val,new_val,then,p__17139){
var vec__17140 = p__17139;
var _QMARK_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17140,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_reset_BANG_,null,(1),null)),(new cljs.core.List(null,atom_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new_val,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$compareAndSet,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(atom_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,old_val,null,(1),null)),(new cljs.core.List(null,new_val,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,_QMARK_else,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore._if_cas_BANG_.cljs$lang$maxFixedArity = (6));

/** @this {Function} */
(taoensso.encore._if_cas_BANG_.cljs$lang$applyTo = (function (seq17132){
var G__17133 = cljs.core.first(seq17132);
var seq17132__$1 = cljs.core.next(seq17132);
var G__17134 = cljs.core.first(seq17132__$1);
var seq17132__$2 = cljs.core.next(seq17132__$1);
var G__17135 = cljs.core.first(seq17132__$2);
var seq17132__$3 = cljs.core.next(seq17132__$2);
var G__17136 = cljs.core.first(seq17132__$3);
var seq17132__$4 = cljs.core.next(seq17132__$3);
var G__17137 = cljs.core.first(seq17132__$4);
var seq17132__$5 = cljs.core.next(seq17132__$4);
var G__17138 = cljs.core.first(seq17132__$5);
var seq17132__$6 = cljs.core.next(seq17132__$5);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17133,G__17134,G__17135,G__17136,G__17137,G__17138,seq17132__$6);
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
var v1 = (function (){var G__17147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17147) : f.call(null,G__17147));
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
if(cljs.core.truth_((function (){var G__17148 = f;
var G__17149 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17148,G__17149) : taoensso.encore.kw_identical_QMARK_.call(null,G__17148,G__17149));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
cljs.core.reset_BANG_(atom_,m1);

var G__17150 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__17151 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17150,G__17151) : return$.call(null,G__17150,G__17151));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__17152 = v1;
var G__17153 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17152,G__17153) : taoensso.encore.kw_identical_QMARK_.call(null,G__17152,G__17153));
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

var G__17154 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__17155 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17154,G__17155) : return$.call(null,G__17154,G__17155));
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__14809__auto__ = cljs.core.seq(ks);
if(b2__14809__auto__){
var ks_seq = b2__14809__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__17156 = f;
var G__17157 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17156,G__17157) : taoensso.encore.kw_identical_QMARK_.call(null,G__17156,G__17157));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__14809__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__14809__auto__))
,ks);
cljs.core.reset_BANG_(atom_,m1);

var G__17158 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__17159 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17158,G__17159) : return$.call(null,G__17158,G__17159));
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__17160 = v1;
var G__17161 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17160,G__17161) : taoensso.encore.kw_identical_QMARK_.call(null,G__17160,G__17161));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__14809__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__14809__auto__))
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
var b2__14809__auto__ = cljs.core.seq(ks);
if(b2__14809__auto__){
var ks_seq = b2__14809__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
cljs.core.reset_BANG_(atom_,m1);

var G__17162 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__17163 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__17162,G__17163) : return$.call(null,G__17162,G__17163));
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_17166 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__17165 = arguments.length;
switch (G__17165) {
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
return taoensso.encore._swap_k1_BANG_(return_17166,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_17166,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_17170 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__17169 = arguments.length;
switch (G__17169) {
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
return taoensso.encore._reset_k1_BANG_(return_17170,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_17170,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_17174 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__17173 = arguments.length;
switch (G__17173) {
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
return taoensso.encore._swap_k1_BANG_(return_17174,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_17174,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__17177 = arguments.length;
switch (G__17177) {
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
var vec__17178 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17178,(0),null);
return v0;
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

var not_found_17184 = ({});
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_17184,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});
var return_17187 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__17186 = arguments.length;
switch (G__17186) {
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
return taoensso.encore._swap_k0_BANG_(return_17187,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_17187,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_17187,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_17191 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__17190 = arguments.length;
switch (G__17190) {
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
return taoensso.encore._reset_k0_BANG_(return_17191,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_17191,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_17191,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_17195 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__17194 = arguments.length;
switch (G__17194) {
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
return taoensso.encore._swap_k0_BANG_(return_17195,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_17195,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_17195,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);

var ret__4867__auto___17197 = taoensso.encore.now_dt_STAR_ = (function taoensso$encore$now_dt_STAR_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Date$,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$java$util$Date$,null,(1),null))))),null,(1),null))], 0))));
});
(taoensso.encore.now_dt_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17198 = taoensso.encore.now_udt_STAR_ = (function taoensso$encore$now_udt_STAR_(_AMPERSAND_form,_AMPERSAND_env){
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
taoensso.encore.now_nano = (function (){var b2__14809__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__14809__auto__)){
var perf = b2__14809__auto__;
var b2__14809__auto____$1 = (function (){var or__4212__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
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
if(cljs.core.truth_(b2__14809__auto____$1)){
var f = b2__14809__auto____$1;
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

var ret__4867__auto___17199 = taoensso.encore.now_nano_STAR_ = (function taoensso$encore$now_nano_STAR_(_AMPERSAND_form,_AMPERSAND_env){
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
var G__17208__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__17202 = x1;
var G__17203 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17202,G__17203) : taoensso.encore.kw_identical_QMARK_.call(null,G__17202,G__17203));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__17204 = x2;
var G__17205 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17204,G__17205) : taoensso.encore.kw_identical_QMARK_.call(null,G__17204,G__17205));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__17206 = x1;
var G__17207 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17206,G__17207) : taoensso.encore.kw_identical_QMARK_.call(null,G__17206,G__17207));
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
var G__17208 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17209__i = 0, G__17209__a = new Array(arguments.length -  0);
while (G__17209__i < G__17209__a.length) {G__17209__a[G__17209__i] = arguments[G__17209__i + 0]; ++G__17209__i;}
  xs = new cljs.core.IndexedSeq(G__17209__a,0,null);
} 
return G__17208__delegate.call(this,xs);};
G__17208.cljs$lang$maxFixedArity = 0;
G__17208.cljs$lang$applyTo = (function (arglist__17210){
var xs = cljs.core.seq(arglist__17210);
return G__17208__delegate(xs);
});
G__17208.cljs$core$IFn$_invoke$arity$variadic = G__17208__delegate;
return G__17208;
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
var G__17211__delegate = function (args){
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
var G__17211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17212__i = 0, G__17212__a = new Array(arguments.length -  0);
while (G__17212__i < G__17212__a.length) {G__17212__a[G__17212__i] = arguments[G__17212__i + 0]; ++G__17212__i;}
  args = new cljs.core.IndexedSeq(G__17212__a,0,null);
} 
return G__17211__delegate.call(this,args);};
G__17211.cljs$lang$maxFixedArity = 0;
G__17211.cljs$lang$applyTo = (function (arglist__17213){
var args = cljs.core.seq(arglist__17213);
return G__17211__delegate(args);
});
G__17211.cljs$core$IFn$_invoke$arity$variadic = G__17211__delegate;
return G__17211;
})()
;
});
var ret__4867__auto___17214 = taoensso.encore._gc_now_QMARK_ = (function taoensso$encore$_gc_now_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
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
var G__17216 = arguments.length;
switch (G__17216) {
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
var e_17238 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17217){if((e17217 instanceof Error)){
var e_17238 = e17217;
return e_17238;
} else {
throw e17217;

}
}})();
if((e_17238 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1915,"(pos-int? ttl-ms)",ttl_ms,e_17238,null);
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return (function() { 
var G__17239__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__17218 = a1;
var G__17219 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17218,G__17219) : taoensso.encore.kw_identical_QMARK_.call(null,G__17218,G__17219));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__17220 = a2;
var G__17221 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17220,G__17221) : taoensso.encore.kw_identical_QMARK_.call(null,G__17220,G__17221));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_17240 = null;
cljs.core.reset_BANG_(latch_,latch_17240);

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

var fresh_QMARK_ = (function (){var G__17222 = a1;
var G__17223 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17222,G__17223) : taoensso.encore.kw_identical_QMARK_.call(null,G__17222,G__17223));
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
var G__17239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17241__i = 0, G__17241__a = new Array(arguments.length -  0);
while (G__17241__i < G__17241__a.length) {G__17241__a[G__17241__i] = arguments[G__17241__i + 0]; ++G__17241__i;}
  args = new cljs.core.IndexedSeq(G__17241__a,0,null);
} 
return G__17239__delegate.call(this,args);};
G__17239.cljs$lang$maxFixedArity = 0;
G__17239.cljs$lang$applyTo = (function (arglist__17242){
var args = cljs.core.seq(arglist__17242);
return G__17239__delegate(args);
});
G__17239.cljs$core$IFn$_invoke$arity$variadic = G__17239__delegate;
return G__17239;
})()
;
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (){var fexpr__17225 = (function (x){
var or__4212__auto__ = (x == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__17226 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__17226.cljs$core$IFn$_invoke$arity$1 ? fexpr__17226.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17226.call(null,x));
}
});
return fexpr__17225(ttl_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1967,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_17243 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17227){if((e17227 instanceof Error)){
var e_17243 = e17227;
return e_17243;
} else {
throw e17227;

}
}})();
if((e_17243 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1968,"(pos-int? cache-size)",cache_size,e_17243,null);
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
var G__17244__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__17228 = a1;
var G__17229 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17228,G__17229) : taoensso.encore.kw_identical_QMARK_.call(null,G__17228,G__17229));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__17230 = a2;
var G__17231 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17230,G__17231) : taoensso.encore.kw_identical_QMARK_.call(null,G__17230,G__17231));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_17245 = null;
cljs.core.reset_BANG_(latch_,latch_17245);

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

var snapshot_17246 = cljs.core.deref(cache_);
var n_to_gc_17247 = (cljs.core.count(snapshot_17246) - cache_size__$1);
if((n_to_gc_17247 > (64))){
var ks_to_gc_17248 = (function (){var G__17232 = n_to_gc_17247;
var G__17233 = (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_17246,k);
return (e.tick_lru + e.tick_lfu);
});
var G__17234 = cljs.core.keys(snapshot_17246);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__17232,G__17233,G__17234) : taoensso.encore.top.call(null,G__17232,G__17233,G__17234));
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
})()),ks_to_gc_17248));
}));
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__17235 = a1;
var G__17236 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17235,G__17236) : taoensso.encore.kw_identical_QMARK_.call(null,G__17235,G__17236));
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
var G__17244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17249__i = 0, G__17249__a = new Array(arguments.length -  0);
while (G__17249__i < G__17249__a.length) {G__17249__a[G__17249__i] = arguments[G__17249__i + 0]; ++G__17249__i;}
  args = new cljs.core.IndexedSeq(G__17249__a,0,null);
} 
return G__17244__delegate.call(this,args);};
G__17244.cljs$lang$maxFixedArity = 0;
G__17244.cljs$lang$applyTo = (function (arglist__17250){
var args = cljs.core.seq(arglist__17250);
return G__17244__delegate(args);
});
G__17244.cljs$core$IFn$_invoke$arity$variadic = G__17244__delegate;
return G__17244;
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

var limit_spec_17263 = (function (n,ms){
var e_17264 = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17251){if((e17251 instanceof Error)){
var e_17264 = e17251;
return e_17264;
} else {
throw e17251;

}
}})();
if((e_17264 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2124,"(pos-int? n)",n,e_17264,null);
}

var e_17265 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17252){if((e17252 instanceof Error)){
var e_17265 = e17252;
return e_17265;
} else {
throw e17252;

}
}})();
if((e_17265 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2124,"(pos-int? ms)",ms,e_17265,null);
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,sid,p__17253){
var vec__17254 = p__17253;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17254,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17254,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_17263(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__17257){
var vec__17258 = p__17257;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__4212__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__17262 = i.cljs$core$IDeref$_deref$arity$1(null);
var fexpr__17261 = (function (i__$1){
return (i__$1 + (1));
});
return fexpr__17261(G__17262);
})());
}
})(),limit_spec_17263(n,ms));
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
var latch_17272 = null;
cljs.core.reset_BANG_(latch_,latch_17272);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,(function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv((function (acc__$1,sid,e){
var b2__14809__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__14809__auto__)){
var s = b2__14809__auto__;
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
var b2__14809__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__14809__auto__)){
var s = b2__14809__auto__;
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
var b2__14809__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__14809__auto__)){
var h = b2__14809__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__14809__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__14809__auto__)){
var l = b2__14809__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__14809__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__14809__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__14809__auto____$1)){
var e = b2__14809__auto____$1;
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
});})(b2__14809__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
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
if(cljs.core.truth_((function (){var G__17266 = cmd;
var G__17267 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17266,G__17267) : taoensso.encore.kw_identical_QMARK_.call(null,G__17266,G__17267));
})())){
if(cljs.core.truth_((function (){var G__17268 = req_id;
var G__17269 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17268,G__17269) : taoensso.encore.kw_identical_QMARK_.call(null,G__17268,G__17269));
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__17270 = cmd;
var G__17271 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17270,G__17271) : taoensso.encore.kw_identical_QMARK_.call(null,G__17270,G__17271));
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
var vec__17273 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17273,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17273,(1),null);
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
var G__17299 = null;
var G__17299__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17278 = cljs.core._deref(self__.n_);
var fexpr__17277 = (function (c){
return (c + (1));
});
return fexpr__17277(G__17278);
})());

return n;
});
var G__17299__2 = (function (self__,add){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17280 = cljs.core._deref(self__.n_);
var fexpr__17279 = (function (c){
return (c + add);
});
return fexpr__17279(G__17280);
})());

return n;
});
var G__17299__3 = (function (self__,action,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17281 = action;
var G__17281__$1 = (((G__17281 instanceof cljs.core.Keyword))?G__17281.fqn:null);
switch (G__17281__$1) {
case "add":
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17283 = cljs.core._deref(self__.n_);
var fexpr__17282 = (function (c){
return (c + n);
});
return fexpr__17282(G__17283);
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
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17285 = cljs.core._deref(self__.n_);
var fexpr__17284 = (function (c){
return (c + n);
});
return fexpr__17284(G__17285);
})());

return o;

break;
case "+=":
case "add-get":
return cljs.core._vreset_BANG_(self__.n_,(function (){var G__17287 = cljs.core._deref(self__.n_);
var fexpr__17286 = (function (c){
return (c + n);
});
return fexpr__17286(G__17287);
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17281__$1)].join('')));

}
});
G__17299 = function(self__,action,n){
switch(arguments.length){
case 1:
return G__17299__1.call(this,self__);
case 2:
return G__17299__2.call(this,self__,action);
case 3:
return G__17299__3.call(this,self__,action,n);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__17299.cljs$core$IFn$_invoke$arity$1 = G__17299__1;
G__17299.cljs$core$IFn$_invoke$arity$2 = G__17299__2;
G__17299.cljs$core$IFn$_invoke$arity$3 = G__17299__3;
return G__17299;
})()
);

(taoensso.encore.Counter.prototype.apply = (function (self__,args17276){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17276)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17289 = cljs.core._deref(self__.n_);
var fexpr__17288 = (function (c){
return (c + (1));
});
return fexpr__17288(G__17289);
})());

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var n = cljs.core.deref(self__.n_);
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17291 = cljs.core._deref(self__.n_);
var fexpr__17290 = (function (c){
return (c + add);
});
return fexpr__17290(G__17291);
})());

return n;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__17292 = action;
var G__17292__$1 = (((G__17292 instanceof cljs.core.Keyword))?G__17292.fqn:null);
switch (G__17292__$1) {
case "add":
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17294 = cljs.core._deref(self__.n_);
var fexpr__17293 = (function (c){
return (c + n);
});
return fexpr__17293(G__17294);
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
cljs.core._vreset_BANG_(self__.n_,(function (){var G__17296 = cljs.core._deref(self__.n_);
var fexpr__17295 = (function (c){
return (c + n);
});
return fexpr__17295(G__17296);
})());

return o;

break;
case "+=":
case "add-get":
return cljs.core._vreset_BANG_(self__.n_,(function (){var G__17298 = cljs.core._deref(self__.n_);
var fexpr__17297 = (function (c){
return (c + n);
});
return fexpr__17297(G__17298);
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17292__$1)].join('')));

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
var G__17303 = arguments.length;
switch (G__17303) {
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

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args17305){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17305)));
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
}catch (e17306){if((e17306 instanceof Error)){
var e = e17306;
return e;
} else {
throw e17306;

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
var G__17311 = arguments.length;
switch (G__17311) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17313 = arguments.length;
var i__4819__auto___17314 = (0);
while(true){
if((i__4819__auto___17314 < len__4818__auto___17313)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17314]));

var G__17315 = (i__4819__auto___17314 + (1));
i__4819__auto___17314 = G__17315;
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
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq17308){
var G__17309 = cljs.core.first(seq17308);
var seq17308__$1 = cljs.core.next(seq17308);
var G__17310 = cljs.core.first(seq17308__$1);
var seq17308__$2 = cljs.core.next(seq17308__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17309,G__17310,seq17308__$2);
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
var G__17317 = arguments.length;
switch (G__17317) {
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
var G__17320 = arguments.length;
switch (G__17320) {
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
var G__17323 = arguments.length;
switch (G__17323) {
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
var G__17326 = arguments.length;
switch (G__17326) {
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
var G__17329__delegate = function (args){
var G__17328 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__17328) : replacement.call(null,G__17328));
};
var G__17329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17330__i = 0, G__17330__a = new Array(arguments.length -  0);
while (G__17330__i < G__17330__a.length) {G__17330__a[G__17330__i] = arguments[G__17330__i + 0]; ++G__17330__i;}
  args = new cljs.core.IndexedSeq(G__17330__a,0,null);
} 
return G__17329__delegate.call(this,args);};
G__17329.cljs$lang$maxFixedArity = 0;
G__17329.cljs$lang$applyTo = (function (arglist__17331){
var args = cljs.core.seq(arglist__17331);
return G__17329__delegate(args);
});
G__17329.cljs$core$IFn$_invoke$arity$variadic = G__17329__delegate;
return G__17329;
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
var len__4818__auto___17334 = arguments.length;
var i__4819__auto___17335 = (0);
while(true){
if((i__4819__auto___17335 < len__4818__auto___17334)){
args__4824__auto__.push((arguments[i__4819__auto___17335]));

var G__17336 = (i__4819__auto___17335 + (1));
i__4819__auto___17335 = G__17336;
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
(taoensso.encore.format.cljs$lang$applyTo = (function (seq17332){
var G__17333 = cljs.core.first(seq17332);
var seq17332__$1 = cljs.core.next(seq17332);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17333,seq17332__$1);
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
var len__4818__auto___17338 = arguments.length;
var i__4819__auto___17339 = (0);
while(true){
if((i__4819__auto___17339 < len__4818__auto___17338)){
args__4824__auto__.push((arguments[i__4819__auto___17339]));

var G__17340 = (i__4819__auto___17339 + (1));
i__4819__auto___17339 = G__17340;
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
(taoensso.encore.path.cljs$lang$applyTo = (function (seq17337){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17337));
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
var G__17342 = arguments.length;
switch (G__17342) {
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
var len__4818__auto___17345 = arguments.length;
var i__4819__auto___17346 = (0);
while(true){
if((i__4819__auto___17346 < len__4818__auto___17345)){
args__4824__auto__.push((arguments[i__4819__auto___17346]));

var G__17347 = (i__4819__auto___17346 + (1));
i__4819__auto___17346 = G__17347;
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
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq17344){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17344));
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
var ret__4867__auto___17351 = (function (){
taoensso.encore.thread_local_proxy = (function taoensso$encore$thread_local_proxy(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17352 = arguments.length;
var i__4819__auto___17353 = (0);
while(true){
if((i__4819__auto___17353 < len__4818__auto___17352)){
args__4824__auto__.push((arguments[i__4819__auto___17353]));

var G__17354 = (i__4819__auto___17353 + (1));
i__4819__auto___17353 = G__17354;
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
(taoensso.encore.thread_local_proxy.cljs$lang$applyTo = (function (seq17348){
var G__17349 = cljs.core.first(seq17348);
var seq17348__$1 = cljs.core.next(seq17348);
var G__17350 = cljs.core.first(seq17348__$1);
var seq17348__$2 = cljs.core.next(seq17348__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17349,G__17350,seq17348__$2);
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
var mask = (((2) << ((function (){var G__17355 = ((function (){var G__17356 = (an - (1));
return Math.log(G__17356);
})() / Math.log((2)));
return Math.floor(G__17355);
})() | (0))) - (1));
var step = cljs.core.long$((function (){var G__17357 = (((1.6 * mask) * len__$1) / an);
return Math.ceil(G__17357);
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
var vec__17358 = (taoensso.encore.parse_alphabet.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.parse_alphabet.cljs$core$IFn$_invoke$arity$2(alphabet,len) : taoensso.encore.parse_alphabet.call(null,alphabet,len));
var mask = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(2),null);
var an = cljs.core.count(v);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
while(true){
var ba = taoensso.encore.secure_rand_bytes(step);
var result = taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3(((function (ba,vec__17358,mask,step,v,an,sb){
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
});})(ba,vec__17358,mask,step,v,an,sb))
,sb,step);
if(typeof result === 'string'){
return result;
} else {
continue;
}
break;
}
});
var alphabet_17365 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");
var mask_17366 = (63);
/**
 * Experimental. Optimized variant of `secure-rand-id` that returns Nano IDs
 *  as in https://github.com/ai/nanoid.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__17362 = arguments.length;
switch (G__17362) {
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
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__17364 = (mask_17366 & (ba[idx]));
return (alphabet_17365.cljs$core$IFn$_invoke$arity$1 ? alphabet_17365.cljs$core$IFn$_invoke$arity$1(G__17364) : alphabet_17365.call(null,G__17364));
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
var G__17369 = arguments.length;
switch (G__17369) {
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
var comparator__$1 = (function (){var G__17370 = comparator;
var G__17370__$1 = (((G__17370 instanceof cljs.core.Keyword))?G__17370.fqn:null);
switch (G__17370__$1) {
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
var comparator__$2 = (function (){var b2__14809__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__14809__auto__)){
var kfn = b2__14809__auto__;
return (function (x,y){
var G__17371 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(x) : kfn.call(null,x));
var G__17372 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(y) : kfn.call(null,y));
return (comparator__$1.cljs$core$IFn$_invoke$arity$2 ? comparator__$1.cljs$core$IFn$_invoke$arity$2(G__17371,G__17372) : comparator__$1.call(null,G__17371,G__17372));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array(coll);
var G__17373_17377 = a;
var G__17374_17378 = cljs.core.fn__GT_comparator(comparator__$2);
goog.array.stableSort(G__17373_17377,G__17374_17378);

return cljs.core.with_meta(cljs.core.vec(a),cljs.core.meta(coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_17384 = ({});
var nil__GT_sentinel_17385 = (function (x){
if((x == null)){
return sentinel_17384;
} else {
return x;
}
});
var sentinel__GT_nil_17386 = (function (x){
if((x === sentinel_17384)){
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
var G__17383 = arguments.length;
switch (G__17383) {
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
var G__17389 = arguments.length;
switch (G__17389) {
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
var G__17392 = arguments.length;
switch (G__17392) {
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
var len__4818__auto___17410 = arguments.length;
var i__4819__auto___17411 = (0);
while(true){
if((i__4819__auto___17411 < len__4818__auto___17410)){
args__4824__auto__.push((arguments[i__4819__auto___17411]));

var G__17412 = (i__4819__auto___17411 + (1));
i__4819__auto___17411 = G__17412;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__17407){
var map__17408 = p__17407;
var map__17408__$1 = cljs.core.__destructure_map(map__17408);
var opts = map__17408__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$ms);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$weeks);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$msecs);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$months);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$secs);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$mins);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$hours);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17408__$1,cljs.core.cst$kw$years);
taoensso.truss.impl.revery_QMARK_((function (__in){
if(cljs.core.truth_((function (){var fexpr__17409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null);
return (fexpr__17409.cljs$core$IFn$_invoke$arity$1 ? fexpr__17409.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__17409.call(null,__in));
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
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq17406){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17406));
}));

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
var ret__4867__auto___17420 = (function (){
/**
 * Compile-time version of `ms`
 */
taoensso.encore.msecs = (function taoensso$encore$msecs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17421 = arguments.length;
var i__4819__auto___17422 = (0);
while(true){
if((i__4819__auto___17422 < len__4818__auto___17421)){
args__4824__auto__.push((arguments[i__4819__auto___17422]));

var G__17423 = (i__4819__auto___17422 + (1));
i__4819__auto___17422 = G__17423;
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
(taoensso.encore.msecs.cljs$lang$applyTo = (function (seq17417){
var G__17418 = cljs.core.first(seq17417);
var seq17417__$1 = cljs.core.next(seq17417);
var G__17419 = cljs.core.first(seq17417__$1);
var seq17417__$2 = cljs.core.next(seq17417__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17418,G__17419,seq17417__$2);
}));

return null;
})()
;
(taoensso.encore.msecs.cljs$lang$macro = true);

var ret__4867__auto___17424 = taoensso.encore.get_env = (function taoensso$encore$get_env(_AMPERSAND_form,_AMPERSAND_env){
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

var ret__4867__auto___17429 = (function (){
/**
 * Returns number of milliseconds it took to execute body.
 */
taoensso.encore.time_ms = (function taoensso$encore$time_ms(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17430 = arguments.length;
var i__4819__auto___17431 = (0);
while(true){
if((i__4819__auto___17431 < len__4818__auto___17430)){
args__4824__auto__.push((arguments[i__4819__auto___17431]));

var G__17432 = (i__4819__auto___17431 + (1));
i__4819__auto___17431 = G__17432;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.time_ms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$t0__17425__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_udt_STAR_,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_udt_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$t0__17425__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.time_ms.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.time_ms.cljs$lang$applyTo = (function (seq17426){
var G__17427 = cljs.core.first(seq17426);
var seq17426__$1 = cljs.core.next(seq17426);
var G__17428 = cljs.core.first(seq17426__$1);
var seq17426__$2 = cljs.core.next(seq17426__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17427,G__17428,seq17426__$2);
}));

return null;
})()
;
(taoensso.encore.time_ms.cljs$lang$macro = true);

var ret__4867__auto___17437 = (function (){
/**
 * Returns number of nanoseconds it took to execute body.
 */
taoensso.encore.time_ns = (function taoensso$encore$time_ns(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17438 = arguments.length;
var i__4819__auto___17439 = (0);
while(true){
if((i__4819__auto___17439 < len__4818__auto___17438)){
args__4824__auto__.push((arguments[i__4819__auto___17439]));

var G__17440 = (i__4819__auto___17439 + (1));
i__4819__auto___17439 = G__17440;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.time_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.time_ns.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$t0__17433__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano_STAR_,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$t0__17433__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.encore.time_ns.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.time_ns.cljs$lang$applyTo = (function (seq17434){
var G__17435 = cljs.core.first(seq17434);
var seq17434__$1 = cljs.core.next(seq17434);
var G__17436 = cljs.core.first(seq17434__$1);
var seq17434__$2 = cljs.core.next(seq17434__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17435,G__17436,seq17434__$2);
}));

return null;
})()
;
(taoensso.encore.time_ns.cljs$lang$macro = true);

var ret__4867__auto___17451 = (function (){
/**
 * Returns fastest of 3 sets of times for each form, in msecs.
 */
taoensso.encore.quick_bench = (function taoensso$encore$quick_bench(var_args){
var G__17450 = arguments.length;
switch (G__17450) {
case 4:
return taoensso.encore.quick_bench.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___17453 = arguments.length;
var i__4819__auto___17454 = (0);
while(true){
if((i__4819__auto___17454 < len__4818__auto___17453)){
args_arr__4839__auto__.push((arguments[i__4819__auto___17454]));

var G__17455 = (i__4819__auto___17454 + (1));
i__4819__auto___17454 = G__17455;
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
(taoensso.encore.quick_bench.cljs$lang$applyTo = (function (seq17445){
var G__17446 = cljs.core.first(seq17445);
var seq17445__$1 = cljs.core.next(seq17445);
var G__17447 = cljs.core.first(seq17445__$1);
var seq17445__$2 = cljs.core.next(seq17445__$1);
var G__17448 = cljs.core.first(seq17445__$2);
var seq17445__$3 = cljs.core.next(seq17445__$2);
var G__17449 = cljs.core.first(seq17445__$3);
var seq17445__$4 = cljs.core.next(seq17445__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17446,G__17447,G__17448,G__17449,seq17445__$4);
}));

(taoensso.encore.quick_bench.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,nlaps,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null)),(new cljs.core.List(null,nlaps,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$nsets__17442__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(6),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$nsets__17442__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_have,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_pos_DASH_num_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nsets__17442__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_round2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__SLASH_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_double,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_reduce,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_min,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_for,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$___17443__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_range,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nsets__17442__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_time_DASH_ns,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_dotimes,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$___17443__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$nlaps__17441__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,1000000.0,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.encore.quick_bench.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(taoensso.encore.quick_bench.cljs$lang$macro = true);

var ret__4867__auto___17459 = (function (){
taoensso.encore.qb = (function taoensso$encore$qb(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17460 = arguments.length;
var i__4819__auto___17461 = (0);
while(true){
if((i__4819__auto___17461 < len__4818__auto___17460)){
args__4824__auto__.push((arguments[i__4819__auto___17461]));

var G__17462 = (i__4819__auto___17461 + (1));
i__4819__auto___17461 = G__17462;
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
(taoensso.encore.qb.cljs$lang$applyTo = (function (seq17456){
var G__17457 = cljs.core.first(seq17456);
var seq17456__$1 = cljs.core.next(seq17456);
var G__17458 = cljs.core.first(seq17456__$1);
var seq17456__$2 = cljs.core.next(seq17456__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17457,G__17458,seq17456__$2);
}));

return null;
})()
;
(taoensso.encore.qb.cljs$lang$macro = true);

var ret__4867__auto___17468 = (function (){
taoensso.encore.bench = (function taoensso$encore$bench(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17469 = arguments.length;
var i__4819__auto___17470 = (0);
while(true){
if((i__4819__auto___17470 < len__4818__auto___17469)){
args__4824__auto__.push((arguments[i__4819__auto___17470]));

var G__17471 = (i__4819__auto___17470 + (1));
i__4819__auto___17470 = G__17471;
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
(taoensso.encore.bench.cljs$lang$applyTo = (function (seq17463){
var G__17464 = cljs.core.first(seq17463);
var seq17463__$1 = cljs.core.next(seq17463);
var G__17465 = cljs.core.first(seq17463__$1);
var seq17463__$2 = cljs.core.next(seq17463__$1);
var G__17466 = cljs.core.first(seq17463__$2);
var seq17463__$3 = cljs.core.next(seq17463__$2);
var G__17467 = cljs.core.first(seq17463__$3);
var seq17463__$4 = cljs.core.next(seq17463__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17464,G__17465,G__17466,G__17467,seq17463__$4);
}));

return null;
})()
;
(taoensso.encore.bench.cljs$lang$macro = true);

taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__17480__delegate = function (xs){
var b2__14809__auto__ = console.log;
if(cljs.core.truth_(b2__14809__auto__)){
var f = b2__14809__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__17480 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17481__i = 0, G__17481__a = new Array(arguments.length -  0);
while (G__17481__i < G__17481__a.length) {G__17481__a[G__17481__i] = arguments[G__17481__i + 0]; ++G__17481__i;}
  xs = new cljs.core.IndexedSeq(G__17481__a,0,null);
} 
return G__17480__delegate.call(this,xs);};
G__17480.cljs$lang$maxFixedArity = 0;
G__17480.cljs$lang$applyTo = (function (arglist__17482){
var xs = cljs.core.seq(arglist__17482);
return G__17480__delegate(xs);
});
G__17480.cljs$core$IFn$_invoke$arity$variadic = G__17480__delegate;
return G__17480;
})()
:(function() { 
var G__17483__delegate = function (xs){
return null;
};
var G__17483 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17484__i = 0, G__17484__a = new Array(arguments.length -  0);
while (G__17484__i < G__17484__a.length) {G__17484__a[G__17484__i] = arguments[G__17484__i + 0]; ++G__17484__i;}
  xs = new cljs.core.IndexedSeq(G__17484__a,0,null);
} 
return G__17483__delegate.call(this,xs);};
G__17483.cljs$lang$maxFixedArity = 0;
G__17483.cljs$lang$applyTo = (function (arglist__17485){
var xs = cljs.core.seq(arglist__17485);
return G__17483__delegate(xs);
});
G__17483.cljs$core$IFn$_invoke$arity$variadic = G__17483__delegate;
return G__17483;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17486 = arguments.length;
var i__4819__auto___17487 = (0);
while(true){
if((i__4819__auto___17487 < len__4818__auto___17486)){
args__4824__auto__.push((arguments[i__4819__auto___17487]));

var G__17488 = (i__4819__auto___17487 + (1));
i__4819__auto___17487 = G__17488;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__17473 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__17473) : taoensso.encore.console_log.call(null,G__17473));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq17472){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17472));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17489 = arguments.length;
var i__4819__auto___17490 = (0);
while(true){
if((i__4819__auto___17490 < len__4818__auto___17489)){
args__4824__auto__.push((arguments[i__4819__auto___17490]));

var G__17491 = (i__4819__auto___17490 + (1));
i__4819__auto___17490 = G__17491;
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
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq17474){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17474));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17492 = arguments.length;
var i__4819__auto___17493 = (0);
while(true){
if((i__4819__auto___17493 < len__4818__auto___17492)){
args__4824__auto__.push((arguments[i__4819__auto___17493]));

var G__17494 = (i__4819__auto___17493 + (1));
i__4819__auto___17493 = G__17494;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__17477 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__17477) : taoensso.encore.console_log.call(null,G__17477));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq17475){
var G__17476 = cljs.core.first(seq17475);
var seq17475__$1 = cljs.core.next(seq17475);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17476,seq17475__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17495 = arguments.length;
var i__4819__auto___17496 = (0);
while(true){
if((i__4819__auto___17496 < len__4818__auto___17495)){
args__4824__auto__.push((arguments[i__4819__auto___17496]));

var G__17497 = (i__4819__auto___17496 + (1));
i__4819__auto___17496 = G__17497;
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
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq17478){
var G__17479 = cljs.core.first(seq17478);
var seq17478__$1 = cljs.core.next(seq17478);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17479,seq17478__$1);
}));

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__14809__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__14809__auto__)){
var js_win = b2__14809__auto__;
var b2__14809__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__14809__auto____$1)){
var loc = b2__14809__auto____$1;
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
var e_17521 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e17498){if((e17498 instanceof Error)){
var e_17521 = e17498;
return e_17521;
} else {
throw e17498;

}
}})();
if((e_17521 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3276,"(map? params)",params,e_17521,null);
}

if(cljs.core.truth_((function (){var and__4210__auto__ = (typeof FormData !== 'undefined');
if(and__4210__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__4210__auto__;
}
})())){
var form_data = (new FormData());
var seq__17499_17522 = cljs.core.seq(params);
var chunk__17500_17523 = null;
var count__17501_17524 = (0);
var i__17502_17525 = (0);
while(true){
if((i__17502_17525 < count__17501_17524)){
var vec__17509_17526 = chunk__17500_17523.cljs$core$IIndexed$_nth$arity$2(null,i__17502_17525);
var k_17527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17509_17526,(0),null);
var v_17528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17509_17526,(1),null);
form_data.append(cljs.core.name(k_17527),v_17528);


var G__17529 = seq__17499_17522;
var G__17530 = chunk__17500_17523;
var G__17531 = count__17501_17524;
var G__17532 = (i__17502_17525 + (1));
seq__17499_17522 = G__17529;
chunk__17500_17523 = G__17530;
count__17501_17524 = G__17531;
i__17502_17525 = G__17532;
continue;
} else {
var temp__5753__auto___17533 = cljs.core.seq(seq__17499_17522);
if(temp__5753__auto___17533){
var seq__17499_17534__$1 = temp__5753__auto___17533;
if(cljs.core.chunked_seq_QMARK_(seq__17499_17534__$1)){
var c__4638__auto___17535 = cljs.core.chunk_first(seq__17499_17534__$1);
var G__17536 = cljs.core.chunk_rest(seq__17499_17534__$1);
var G__17537 = c__4638__auto___17535;
var G__17538 = cljs.core.count(c__4638__auto___17535);
var G__17539 = (0);
seq__17499_17522 = G__17536;
chunk__17500_17523 = G__17537;
count__17501_17524 = G__17538;
i__17502_17525 = G__17539;
continue;
} else {
var vec__17512_17540 = cljs.core.first(seq__17499_17534__$1);
var k_17541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17512_17540,(0),null);
var v_17542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17512_17540,(1),null);
form_data.append(cljs.core.name(k_17541),v_17542);


var G__17543 = cljs.core.next(seq__17499_17534__$1);
var G__17544 = null;
var G__17545 = (0);
var G__17546 = (0);
seq__17499_17522 = G__17543;
chunk__17500_17523 = G__17544;
count__17501_17524 = G__17545;
i__17502_17525 = G__17546;
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
if(cljs.core.truth_((function (){var fexpr__17517 = (function (x){
var or__4212__auto__ = (x == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var fexpr__17518 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__17518.cljs$core$IFn$_invoke$arity$1 ? fexpr__17518.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17518.call(null,x));
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var fexpr__17519 = taoensso.truss.impl.non_throwing(taoensso.encore.js_form_data_QMARK_);
return (fexpr__17519.cljs$core$IFn$_invoke$arity$1 ? fexpr__17519.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17519.call(null,x));
}
}
});
return fexpr__17517(params);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3288,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__17520 = method;
var G__17520__$1 = (((G__17520 instanceof cljs.core.Keyword))?G__17520.fqn:null);
switch (G__17520__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17520__$1)].join('')));

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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__17549,callback_fn){
var map__17550 = p__17549;
var map__17550__$1 = cljs.core.__destructure_map(map__17550);
var opts = map__17550__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17550__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17550__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17550__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17550__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17550__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17550__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__17552 = (function (x){
var or__4212__auto__ = (x == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__17553 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__17553.cljs$core$IFn$_invoke$arity$1 ? fexpr__17553.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17553.call(null,x));
}
});
return fexpr__17552(timeout_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",3320,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__14809__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__14809__auto__)){
var xhr = b2__14809__auto__;
try{var timeout_ms__$1 = (function (){var or__4212__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__17559 = method;
var G__17559__$1 = (((G__17559 instanceof cljs.core.Keyword))?G__17559.fqn:null);
switch (G__17559__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17559__$1)].join('')));

}
})();
var vec__17556 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17556,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17556,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys((function (p1__17548_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__17548_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__14809__auto____$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__14809__auto____$1)){
var pf = b2__14809__auto____$1;
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
var G__17560 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__17560) : pf.call(null,G__17560));
}));
} else {
return null;
}
})();
var G__17561_17570 = xhr;
goog.events.listenOnce(G__17561_17570,goog.net.EventType.READY,(function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
}));

goog.events.listenOnce(G__17561_17570,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__17562 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
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
try{var G__17566 = resp_type__$1;
var G__17566__$1 = (((G__17566 instanceof cljs.core.Keyword))?G__17566.fqn:null);
switch (G__17566__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17566__$1)].join('')));

}
}catch (e17565){var _e = e17565;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17562,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17562,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17562,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__17567 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__17567) : callback_fn.call(null,G__17567));
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
}catch (e17554){var e = e17554;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__17555_17572 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__17555_17572) : callback_fn.call(null,G__17555_17572));

return null;
}} else {
var G__17568_17573 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__17568_17573) : callback_fn.call(null,G__17568_17573));

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
var len__4818__auto___17580 = arguments.length;
var i__4819__auto___17581 = (0);
while(true){
if((i__4819__auto___17581 < len__4818__auto___17580)){
args__4824__auto__.push((arguments[i__4819__auto___17581]));

var G__17582 = (i__4819__auto___17581 + (1));
i__4819__auto___17581 = G__17582;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__17576){
var vec__17577 = p__17576;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17577,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq17574){
var G__17575 = cljs.core.first(seq17574);
var seq17574__$1 = cljs.core.next(seq17574);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17575,seq17574__$1);
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
return join((function (){var iter__4611__auto__ = (function taoensso$encore$format_query_string_$_iter__17583(s__17584){
return (new cljs.core.LazySeq(null,(function (){
var s__17584__$1 = s__17584;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__17584__$1);
if(temp__5753__auto__){
var s__17584__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17584__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__17584__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__17586 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__17585 = (0);
while(true){
if((i__17585 < size__4610__auto__)){
var vec__17587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__17585);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17587,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__17586,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__4212__auto__ = cljs.core.seq(v);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__17593 = (i__17585 + (1));
i__17585 = G__17593;
continue;
} else {
var G__17594 = (i__17585 + (1));
i__17585 = G__17594;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17586),taoensso$encore$format_query_string_$_iter__17583(cljs.core.chunk_rest(s__17584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17586),null);
}
} else {
var vec__17590 = cljs.core.first(s__17584__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17590,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17590,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__4212__auto__ = cljs.core.seq(v);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__17583(cljs.core.rest(s__17584__$2)));
} else {
var G__17595 = cljs.core.rest(s__17584__$2);
s__17584__$1 = G__17595;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__14809__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__14809__auto__)){
var cur = b2__14809__auto__;
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
var len__4818__auto___17605 = arguments.length;
var i__4819__auto___17606 = (0);
while(true){
if((i__4819__auto___17606 < len__4818__auto___17605)){
args__4824__auto__.push((arguments[i__4819__auto___17606]));

var G__17607 = (i__4819__auto___17606 + (1));
i__4819__auto___17606 = G__17607;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__17598){
var vec__17599 = p__17598;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17599,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17599,(1),null);
if(((clojure.string.blank_QMARK_(s)) || ((!(taoensso.encore.str_contains_QMARK_(s,"=")))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){
var b2__14809__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__14809__auto__)){
var vec__17602 = b2__14809__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17602,(1),null);
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
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq17596){
var G__17597 = cljs.core.first(seq17596);
var seq17596__$1 = cljs.core.next(seq17596);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17597,seq17596__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__17608 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17608,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17608,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__14809__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__14809__auto__)){
var qstr = b2__14809__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__17614__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempting to call uninitialized stub fn (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__17614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17615__i = 0, G__17615__a = new Array(arguments.length -  0);
while (G__17615__i < G__17615__a.length) {G__17615__a[G__17615__i] = arguments[G__17615__i + 0]; ++G__17615__i;}
  args = new cljs.core.IndexedSeq(G__17615__a,0,null);
} 
return G__17614__delegate.call(this,args);};
G__17614.cljs$lang$maxFixedArity = 0;
G__17614.cljs$lang$applyTo = (function (arglist__17616){
var args = cljs.core.seq(arglist__17616);
return G__17614__delegate(args);
});
G__17614.cljs$core$IFn$_invoke$arity$variadic = G__17614__delegate;
return G__17614;
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
var always_17631 = (function taoensso$encore$always(_QMARK_in_str){
return true;
});
var never_17632 = (function taoensso$encore$never(_QMARK_in_str){
return false;
});
var wild_str__GT__QMARK_re_pattern_17633 = (function (s){
if(taoensso.encore.str_contains_QMARK_(s,"*")){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join(''),".","\\."),"*","(.*)"));
} else {
return null;
}
});
var compile_17634 = (function taoensso$encore$compile(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_((function (){var fexpr__17619 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,cljs.core.cst$kw$any,null], null), null);
return (fexpr__17619.cljs$core$IFn$_invoke$arity$1 ? fexpr__17619.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__17619.call(null,spec));
})())){
return always_17631;
} else {
if(cljs.core.truth_((function (){var fexpr__17620 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$none]);
return (fexpr__17620.cljs$core$IFn$_invoke$arity$1 ? fexpr__17620.cljs$core$IFn$_invoke$arity$1(spec) : fexpr__17620.call(null,spec));
})())){
return never_17632;
} else {
if(taoensso.encore.re_pattern_QMARK_(spec)){
return ((function (spec,cache_QMARK_,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633){
return (function (in_str){
return cljs.core.re_find(spec,in_str);
});
;})(spec,cache_QMARK_,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633))
} else {
if(typeof spec === 'string'){
var b2__14809__auto__ = wild_str__GT__QMARK_re_pattern_17633(spec);
if(cljs.core.truth_(b2__14809__auto__)){
var re_pattern = b2__14809__auto__;
var G__17635 = re_pattern;
var G__17636 = cache_QMARK_;
spec = G__17635;
cache_QMARK_ = G__17636;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__14809__auto__,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633){
return (function (in_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_str,spec);
});
;})(spec,cache_QMARK_,b2__14809__auto__,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633))
}
} else {
if(((cljs.core.vector_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
if(cljs.core.truth_((function (){var fexpr__17621 = cljs.core.set(spec);
return (fexpr__17621.cljs$core$IFn$_invoke$arity$1 ? fexpr__17621.cljs$core$IFn$_invoke$arity$1("*") : fexpr__17621.call(null,"*"));
})())){
return always_17631;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(spec),(1))){
var G__17637 = cljs.core.first(spec);
var G__17638 = cache_QMARK_;
spec = G__17637;
cache_QMARK_ = G__17638;
continue;
} else {
var vec__17622 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (spec,cache_QMARK_,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633){
return (function (p__17625,spec__$1){
var vec__17626 = p__17625;
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(1),null);
var b2__14809__auto__ = ((taoensso.encore.re_pattern_QMARK_(spec__$1))?spec__$1:wild_str__GT__QMARK_re_pattern_17633(spec__$1));
if(cljs.core.truth_(b2__14809__auto__)){
var re_pattern = b2__14809__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_strs,spec__$1),re_patterns], null);
}
});})(spec,cache_QMARK_,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(0),null);
var re_patterns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(1),null);
var fx_match = cljs.core.not_empty(fixed_strs);
var re_match = (function (){var b2__14809__auto__ = cljs.core.not_empty(re_patterns);
if(cljs.core.truth_(b2__14809__auto__)){
var re_patterns__$1 = b2__14809__auto__;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__14809__auto__,vec__17622,fixed_strs,re_patterns,fx_match,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633){
return (function (in_str){
return taoensso.encore.rsome(((function (spec,cache_QMARK_,re_patterns__$1,b2__14809__auto__,vec__17622,fixed_strs,re_patterns,fx_match,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633){
return (function (p1__17618_SHARP_){
return cljs.core.re_find(p1__17618_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__14809__auto__,vec__17622,fixed_strs,re_patterns,fx_match,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__14809__auto__,vec__17622,fixed_strs,re_patterns,fx_match,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633))
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
return ((function (spec,cache_QMARK_,vec__17622,fixed_strs,re_patterns,fx_match,re_match,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633){
return (function (in_str){
var or__4212__auto__ = (fx_match.cljs$core$IFn$_invoke$arity$1 ? fx_match.cljs$core$IFn$_invoke$arity$1(in_str) : fx_match.call(null,in_str));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (re_match.cljs$core$IFn$_invoke$arity$1 ? re_match.cljs$core$IFn$_invoke$arity$1(in_str) : re_match.call(null,in_str));
}
});
;})(spec,cache_QMARK_,vec__17622,fixed_strs,re_patterns,fx_match,re_match,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633))
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
var allow = (function (){var b2__14809__auto__ = allow_spec;
if(cljs.core.truth_(b2__14809__auto__)){
var as = b2__14809__auto__;
return compile_17634(as,cache_QMARK_);
} else {
return null;
}
})();
var deny = (function (){var b2__14809__auto__ = deny_spec;
if(cljs.core.truth_(b2__14809__auto__)){
var ds = b2__14809__auto__;
return compile_17634(ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,always_17631)){
return never_17632;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,never_17632)){
return never_17632;
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = allow;
if(cljs.core.truth_(and__4210__auto__)){
return deny;
} else {
return and__4210__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633,compile_17634){
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
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633,compile_17634))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow,always_17631)){
return always_17631;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633,compile_17634){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__17629 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
return (allow.cljs$core$IFn$_invoke$arity$1 ? allow.cljs$core$IFn$_invoke$arity$1(G__17629) : allow.call(null,G__17629));
})())){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633,compile_17634))
}
} else {
if(cljs.core.truth_(deny)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deny,never_17632)){
return always_17631;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633,compile_17634){
return (function (_QMARK_in_str){
if(cljs.core.truth_((function (){var G__17630 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_in_str);
return (deny.cljs$core$IFn$_invoke$arity$1 ? deny.cljs$core$IFn$_invoke$arity$1(G__17630) : deny.call(null,G__17630));
})())){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_17631,never_17632,wild_str__GT__QMARK_re_pattern_17633,compile_17634))
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("compile-str-filter: `allow-spec` and `deny-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow_DASH_spec,allow_spec,cljs.core.cst$kw$deny_DASH_spec,deny_spec], null));
}
}
}
}
}
} else {
var G__17639 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,spec,cljs.core.cst$kw$deny,null], null);
spec = G__17639;
continue;
}
break;
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_17644 = (function (_,msecs,f){
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
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_17644(_,msecs,f);
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

var taoensso$encore$ITimeoutFuture$tf_state$dyn_17645 = (function (_){
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
return taoensso$encore$ITimeoutFuture$tf_state$dyn_17645(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_17646 = (function (_){
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
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_17646(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_17647 = (function (_){
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
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_17647(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_17648 = (function (_){
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
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_17648(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_17649 = (function (_){
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
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_17649(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_17650 = (function (_){
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
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_17650(_);
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
return cljs.core.not((function (){var G__17651 = cljs.core.deref(self__.result__);
var G__17652 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17651,G__17652) : taoensso.encore.kw_identical_QMARK_.call(null,G__17651,G__17652));
})());
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__17653 = cljs.core.deref(self__.result__);
var G__17654 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17653,G__17654) : taoensso.encore.kw_identical_QMARK_.call(null,G__17653,G__17654));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__17655 = cljs.core.deref(self__.result__);
var G__17656 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17655,G__17656) : taoensso.encore.kw_identical_QMARK_.call(null,G__17655,G__17656));
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
var G__17658 = arguments.length;
switch (G__17658) {
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
var impl_17660 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_17660,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

var ret__4867__auto___17665 = (function (){
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute body after timeout.
 *   Body must be non-blocking or cheap.
 */
taoensso.encore.after_timeout = (function taoensso$encore$after_timeout(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17666 = arguments.length;
var i__4819__auto___17667 = (0);
while(true){
if((i__4819__auto___17667 < len__4818__auto___17666)){
args__4824__auto__.push((arguments[i__4819__auto___17667]));

var G__17668 = (i__4819__auto___17667 + (1));
i__4819__auto___17667 = G__17668;
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
(taoensso.encore.after_timeout.cljs$lang$applyTo = (function (seq17661){
var G__17662 = cljs.core.first(seq17661);
var seq17661__$1 = cljs.core.next(seq17661);
var G__17663 = cljs.core.first(seq17661__$1);
var seq17661__$2 = cljs.core.next(seq17661__$1);
var G__17664 = cljs.core.first(seq17661__$2);
var seq17661__$3 = cljs.core.next(seq17661__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17662,G__17663,G__17664,seq17661__$3);
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
var G__17670 = arguments.length;
switch (G__17670) {
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
if(cljs.core.truth_((function (){var c__4243__auto__ = (function (){var G__17671 = c;
var G__17671__$1 = (((G__17671 instanceof cljs.core.Keyword))?G__17671.fqn:null);
switch (G__17671__$1) {
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
var b2__14809__auto__ = cljs.core.ex_data(ex);
if(cljs.core.truth_(b2__14809__auto__)){
var data = b2__14809__auto__;
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

var ret__4867__auto___17676 = (function (){
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
var G__17675 = arguments.length;
switch (G__17675) {
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

var nolist_QMARK__17862 = (function (p1__17678_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__17678_SHARP_);
});
/**
 * Deprecated, prefer `compile-str-filter` instead.
 */
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__17685 = arguments.length;
switch (G__17685) {
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
if(((nolist_QMARK__17862(whitelist)) && (nolist_QMARK__17862(blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.compile_str_filter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,whitelist,cljs.core.cst$kw$deny,blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


var ret__4867__auto___17864 = (function (){
taoensso.encore.if_lets = (function taoensso$encore$if_lets(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17865 = arguments.length;
var i__4819__auto___17866 = (0);
while(true){
if((i__4819__auto___17866 < len__4818__auto___17865)){
args__4824__auto__.push((arguments[i__4819__auto___17866]));

var G__17867 = (i__4819__auto___17866 + (1));
i__4819__auto___17866 = G__17867;
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
(taoensso.encore.if_lets.cljs$lang$applyTo = (function (seq17686){
var G__17687 = cljs.core.first(seq17686);
var seq17686__$1 = cljs.core.next(seq17686);
var G__17688 = cljs.core.first(seq17686__$1);
var seq17686__$2 = cljs.core.next(seq17686__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17687,G__17688,seq17686__$2);
}));

return null;
})()
;
(taoensso.encore.if_lets.cljs$lang$macro = true);


var ret__4867__auto___17868 = (function (){
taoensso.encore.when_lets = (function taoensso$encore$when_lets(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17869 = arguments.length;
var i__4819__auto___17870 = (0);
while(true){
if((i__4819__auto___17870 < len__4818__auto___17869)){
args__4824__auto__.push((arguments[i__4819__auto___17870]));

var G__17871 = (i__4819__auto___17870 + (1));
i__4819__auto___17870 = G__17871;
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
(taoensso.encore.when_lets.cljs$lang$applyTo = (function (seq17689){
var G__17690 = cljs.core.first(seq17689);
var seq17689__$1 = cljs.core.next(seq17689);
var G__17691 = cljs.core.first(seq17689__$1);
var seq17689__$2 = cljs.core.next(seq17689__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17690,G__17691,seq17689__$2);
}));

return null;
})()
;
(taoensso.encore.when_lets.cljs$lang$macro = true);


var ret__4867__auto___17872 = (function (){
taoensso.encore.if_not_STAR_ = (function taoensso$encore$if_not_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17873 = arguments.length;
var i__4819__auto___17874 = (0);
while(true){
if((i__4819__auto___17874 < len__4818__auto___17873)){
args__4824__auto__.push((arguments[i__4819__auto___17874]));

var G__17875 = (i__4819__auto___17874 + (1));
i__4819__auto___17874 = G__17875;
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
(taoensso.encore.if_not_STAR_.cljs$lang$applyTo = (function (seq17692){
var G__17693 = cljs.core.first(seq17692);
var seq17692__$1 = cljs.core.next(seq17692);
var G__17694 = cljs.core.first(seq17692__$1);
var seq17692__$2 = cljs.core.next(seq17692__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17693,G__17694,seq17692__$2);
}));

return null;
})()
;
(taoensso.encore.if_not_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17876 = (function (){
taoensso.encore.cond_STAR_ = (function taoensso$encore$cond_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17877 = arguments.length;
var i__4819__auto___17878 = (0);
while(true){
if((i__4819__auto___17878 < len__4818__auto___17877)){
args__4824__auto__.push((arguments[i__4819__auto___17878]));

var G__17879 = (i__4819__auto___17878 + (1));
i__4819__auto___17878 = G__17879;
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
(taoensso.encore.cond_STAR_.cljs$lang$applyTo = (function (seq17695){
var G__17696 = cljs.core.first(seq17695);
var seq17695__$1 = cljs.core.next(seq17695);
var G__17697 = cljs.core.first(seq17695__$1);
var seq17695__$2 = cljs.core.next(seq17695__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17696,G__17697,seq17695__$2);
}));

return null;
})()
;
(taoensso.encore.cond_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17880 = (function (){
taoensso.encore.defonce_STAR_ = (function taoensso$encore$defonce_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17881 = arguments.length;
var i__4819__auto___17882 = (0);
while(true){
if((i__4819__auto___17882 < len__4818__auto___17881)){
args__4824__auto__.push((arguments[i__4819__auto___17882]));

var G__17883 = (i__4819__auto___17882 + (1));
i__4819__auto___17882 = G__17883;
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
(taoensso.encore.defonce_STAR_.cljs$lang$applyTo = (function (seq17698){
var G__17699 = cljs.core.first(seq17698);
var seq17698__$1 = cljs.core.next(seq17698);
var G__17700 = cljs.core.first(seq17698__$1);
var seq17698__$2 = cljs.core.next(seq17698__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17699,G__17700,seq17698__$2);
}));

return null;
})()
;
(taoensso.encore.defonce_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17884 = (function (){
taoensso.encore.have_in = (function taoensso$encore$have_in(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17885 = arguments.length;
var i__4819__auto___17886 = (0);
while(true){
if((i__4819__auto___17886 < len__4818__auto___17885)){
args__4824__auto__.push((arguments[i__4819__auto___17886]));

var G__17887 = (i__4819__auto___17886 + (1));
i__4819__auto___17886 = G__17887;
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
(taoensso.encore.have_in.cljs$lang$applyTo = (function (seq17701){
var G__17702 = cljs.core.first(seq17701);
var seq17701__$1 = cljs.core.next(seq17701);
var G__17703 = cljs.core.first(seq17701__$1);
var seq17701__$2 = cljs.core.next(seq17701__$1);
var G__17704 = cljs.core.first(seq17701__$2);
var seq17701__$3 = cljs.core.next(seq17701__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17702,G__17703,G__17704,seq17701__$3);
}));

return null;
})()
;
(taoensso.encore.have_in.cljs$lang$macro = true);


var ret__4867__auto___17888 = (function (){
taoensso.encore.have_in_BANG_ = (function taoensso$encore$have_in_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17889 = arguments.length;
var i__4819__auto___17890 = (0);
while(true){
if((i__4819__auto___17890 < len__4818__auto___17889)){
args__4824__auto__.push((arguments[i__4819__auto___17890]));

var G__17891 = (i__4819__auto___17890 + (1));
i__4819__auto___17890 = G__17891;
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
(taoensso.encore.have_in_BANG_.cljs$lang$applyTo = (function (seq17705){
var G__17706 = cljs.core.first(seq17705);
var seq17705__$1 = cljs.core.next(seq17705);
var G__17707 = cljs.core.first(seq17705__$1);
var seq17705__$2 = cljs.core.next(seq17705__$1);
var G__17708 = cljs.core.first(seq17705__$2);
var seq17705__$3 = cljs.core.next(seq17705__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17706,G__17707,G__17708,seq17705__$3);
}));

return null;
})()
;
(taoensso.encore.have_in_BANG_.cljs$lang$macro = true);


var ret__4867__auto___17892 = (function (){
taoensso.encore.cond_throw = (function taoensso$encore$cond_throw(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17893 = arguments.length;
var i__4819__auto___17894 = (0);
while(true){
if((i__4819__auto___17894 < len__4818__auto___17893)){
args__4824__auto__.push((arguments[i__4819__auto___17894]));

var G__17895 = (i__4819__auto___17894 + (1));
i__4819__auto___17894 = G__17895;
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
(taoensso.encore.cond_throw.cljs$lang$applyTo = (function (seq17709){
var G__17710 = cljs.core.first(seq17709);
var seq17709__$1 = cljs.core.next(seq17709);
var G__17711 = cljs.core.first(seq17709__$1);
var seq17709__$2 = cljs.core.next(seq17709__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17710,G__17711,seq17709__$2);
}));

return null;
})()
;
(taoensso.encore.cond_throw.cljs$lang$macro = true);


var ret__4867__auto___17896 = (function (){
taoensso.encore.catch_errors_STAR_ = (function taoensso$encore$catch_errors_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17897 = arguments.length;
var i__4819__auto___17898 = (0);
while(true){
if((i__4819__auto___17898 < len__4818__auto___17897)){
args__4824__auto__.push((arguments[i__4819__auto___17898]));

var G__17899 = (i__4819__auto___17898 + (1));
i__4819__auto___17898 = G__17899;
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
(taoensso.encore.catch_errors_STAR_.cljs$lang$applyTo = (function (seq17712){
var G__17713 = cljs.core.first(seq17712);
var seq17712__$1 = cljs.core.next(seq17712);
var G__17714 = cljs.core.first(seq17712__$1);
var seq17712__$2 = cljs.core.next(seq17712__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17713,G__17714,seq17712__$2);
}));

return null;
})()
;
(taoensso.encore.catch_errors_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17900 = (function (){
taoensso.encore.use_fixtures_STAR_ = (function taoensso$encore$use_fixtures_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17901 = arguments.length;
var i__4819__auto___17902 = (0);
while(true){
if((i__4819__auto___17902 < len__4818__auto___17901)){
args__4824__auto__.push((arguments[i__4819__auto___17902]));

var G__17903 = (i__4819__auto___17902 + (1));
i__4819__auto___17902 = G__17903;
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
(taoensso.encore.use_fixtures_STAR_.cljs$lang$applyTo = (function (seq17715){
var G__17716 = cljs.core.first(seq17715);
var seq17715__$1 = cljs.core.next(seq17715);
var G__17717 = cljs.core.first(seq17715__$1);
var seq17715__$2 = cljs.core.next(seq17715__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17716,G__17717,seq17715__$2);
}));

return null;
})()
;
(taoensso.encore.use_fixtures_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17904 = (function (){
taoensso.encore.nano_time_STAR_ = (function taoensso$encore$nano_time_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17905 = arguments.length;
var i__4819__auto___17906 = (0);
while(true){
if((i__4819__auto___17906 < len__4818__auto___17905)){
args__4824__auto__.push((arguments[i__4819__auto___17906]));

var G__17907 = (i__4819__auto___17906 + (1));
i__4819__auto___17906 = G__17907;
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
(taoensso.encore.nano_time_STAR_.cljs$lang$applyTo = (function (seq17718){
var G__17719 = cljs.core.first(seq17718);
var seq17718__$1 = cljs.core.next(seq17718);
var G__17720 = cljs.core.first(seq17718__$1);
var seq17718__$2 = cljs.core.next(seq17718__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17719,G__17720,seq17718__$2);
}));

return null;
})()
;
(taoensso.encore.nano_time_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17908 = (function (){
taoensso.encore.qbench = (function taoensso$encore$qbench(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17909 = arguments.length;
var i__4819__auto___17910 = (0);
while(true){
if((i__4819__auto___17910 < len__4818__auto___17909)){
args__4824__auto__.push((arguments[i__4819__auto___17910]));

var G__17911 = (i__4819__auto___17910 + (1));
i__4819__auto___17910 = G__17911;
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
(taoensso.encore.qbench.cljs$lang$applyTo = (function (seq17721){
var G__17722 = cljs.core.first(seq17721);
var seq17721__$1 = cljs.core.next(seq17721);
var G__17723 = cljs.core.first(seq17721__$1);
var seq17721__$2 = cljs.core.next(seq17721__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17722,G__17723,seq17721__$2);
}));

return null;
})()
;
(taoensso.encore.qbench.cljs$lang$macro = true);


var ret__4867__auto___17912 = (function (){
taoensso.encore.catch_errors = (function taoensso$encore$catch_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17913 = arguments.length;
var i__4819__auto___17914 = (0);
while(true){
if((i__4819__auto___17914 < len__4818__auto___17913)){
args__4824__auto__.push((arguments[i__4819__auto___17914]));

var G__17915 = (i__4819__auto___17914 + (1));
i__4819__auto___17914 = G__17915;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.catch_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.catch_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__17679__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__17679__auto__,null,(1),null)))))),null,(1),null))], 0))));
}));

(taoensso.encore.catch_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.catch_errors.cljs$lang$applyTo = (function (seq17724){
var G__17725 = cljs.core.first(seq17724);
var seq17724__$1 = cljs.core.next(seq17724);
var G__17726 = cljs.core.first(seq17724__$1);
var seq17724__$2 = cljs.core.next(seq17724__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17725,G__17726,seq17724__$2);
}));

return null;
})()
;
(taoensso.encore.catch_errors.cljs$lang$macro = true);


var ret__4867__auto___17916 = taoensso.encore._vol_BANG_ = (function taoensso$encore$_vol_BANG_(_AMPERSAND_form,_AMPERSAND_env,val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_volatile_BANG_,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)))));
});
(taoensso.encore._vol_BANG_.cljs$lang$macro = true);


var ret__4867__auto___17917 = taoensso.encore._vol_reset_BANG_ = (function taoensso$encore$_vol_reset_BANG_(_AMPERSAND_form,_AMPERSAND_env,vol_,val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vreset_BANG_,null,(1),null)),(new cljs.core.List(null,vol_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0))));
});
(taoensso.encore._vol_reset_BANG_.cljs$lang$macro = true);


var ret__4867__auto___17918 = (function (){
taoensso.encore._vol_swap_BANG_ = (function taoensso$encore$_vol_swap_BANG_(var_args){
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

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.encore._vol_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.encore._vol_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol_,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vswap_BANG_,null,(1),null)),(new cljs.core.List(null,vol_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),args], 0))));
}));

(taoensso.encore._vol_swap_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.encore._vol_swap_BANG_.cljs$lang$applyTo = (function (seq17727){
var G__17728 = cljs.core.first(seq17727);
var seq17727__$1 = cljs.core.next(seq17727);
var G__17729 = cljs.core.first(seq17727__$1);
var seq17727__$2 = cljs.core.next(seq17727__$1);
var G__17730 = cljs.core.first(seq17727__$2);
var seq17727__$3 = cljs.core.next(seq17727__$2);
var G__17731 = cljs.core.first(seq17727__$3);
var seq17727__$4 = cljs.core.next(seq17727__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17728,G__17729,G__17730,G__17731,seq17727__$4);
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
var len__4818__auto___17922 = arguments.length;
var i__4819__auto___17923 = (0);
while(true){
if((i__4819__auto___17923 < len__4818__auto___17922)){
args__4824__auto__.push((arguments[i__4819__auto___17923]));

var G__17924 = (i__4819__auto___17923 + (1));
i__4819__auto___17923 = G__17924;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__17734){
var vec__17735 = p__17734;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(1),null);
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
(taoensso.encore.round.cljs$lang$applyTo = (function (seq17732){
var G__17733 = cljs.core.first(seq17732);
var seq17732__$1 = cljs.core.next(seq17732);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17733,seq17732__$1);
}));


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__17739 = arguments.length;
switch (G__17739) {
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
var len__4818__auto___17926 = arguments.length;
var i__4819__auto___17927 = (0);
while(true){
if((i__4819__auto___17927 < len__4818__auto___17926)){
args__4824__auto__.push((arguments[i__4819__auto___17927]));

var G__17928 = (i__4819__auto___17927 + (1));
i__4819__auto___17927 = G__17928;
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
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq17740){
var G__17741 = cljs.core.first(seq17740);
var seq17740__$1 = cljs.core.next(seq17740);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17741,seq17740__$1);
}));


var ret__4867__auto___17929 = (function (){
taoensso.encore.repeatedly_STAR_ = (function taoensso$encore$repeatedly_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17930 = arguments.length;
var i__4819__auto___17931 = (0);
while(true){
if((i__4819__auto___17931 < len__4818__auto___17930)){
args__4824__auto__.push((arguments[i__4819__auto___17931]));

var G__17932 = (i__4819__auto___17931 + (1));
i__4819__auto___17931 = G__17932;
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
(taoensso.encore.repeatedly_STAR_.cljs$lang$applyTo = (function (seq17742){
var G__17743 = cljs.core.first(seq17742);
var seq17742__$1 = cljs.core.next(seq17742);
var G__17744 = cljs.core.first(seq17742__$1);
var seq17742__$2 = cljs.core.next(seq17742__$1);
var G__17745 = cljs.core.first(seq17742__$2);
var seq17742__$3 = cljs.core.next(seq17742__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17743,G__17744,G__17745,seq17742__$3);
}));

return null;
})()
;
(taoensso.encore.repeatedly_STAR_.cljs$lang$macro = true);


var ret__4867__auto___17933 = (function (){
/**
 * Deprecated
 */
taoensso.encore.repeatedly_into_STAR_ = (function taoensso$encore$repeatedly_into_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17934 = arguments.length;
var i__4819__auto___17935 = (0);
while(true){
if((i__4819__auto___17935 < len__4818__auto___17934)){
args__4824__auto__.push((arguments[i__4819__auto___17935]));

var G__17936 = (i__4819__auto___17935 + (1));
i__4819__auto___17935 = G__17936;
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
(taoensso.encore.repeatedly_into_STAR_.cljs$lang$applyTo = (function (seq17746){
var G__17747 = cljs.core.first(seq17746);
var seq17746__$1 = cljs.core.next(seq17746);
var G__17748 = cljs.core.first(seq17746__$1);
var seq17746__$2 = cljs.core.next(seq17746__$1);
var G__17749 = cljs.core.first(seq17746__$2);
var seq17746__$3 = cljs.core.next(seq17746__$2);
var G__17750 = cljs.core.first(seq17746__$3);
var seq17746__$4 = cljs.core.next(seq17746__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17747,G__17748,G__17749,G__17750,seq17746__$4);
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
var ids_QMARK_ = taoensso.encore.rsome((function (p__17751){
var vec__17752 = p__17751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return (function() { 
var G__17937__delegate = function (args){
var b2__14809__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__14809__auto__)){
var vec__17755 = b2__14809__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17755,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17755,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__17937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17938__i = 0, G__17938__a = new Array(arguments.length -  0);
while (G__17938__i < G__17938__a.length) {G__17938__a[G__17938__i] = arguments[G__17938__i + 0]; ++G__17938__i;}
  args = new cljs.core.IndexedSeq(G__17938__a,0,null);
} 
return G__17937__delegate.call(this,args);};
G__17937.cljs$lang$maxFixedArity = 0;
G__17937.cljs$lang$applyTo = (function (arglist__17939){
var args = cljs.core.seq(arglist__17939);
return G__17937__delegate(args);
});
G__17937.cljs$core$IFn$_invoke$arity$variadic = G__17937__delegate;
return G__17937;
})()
;
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return (function() { 
var G__17940__delegate = function (args){
var b2__14809__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__14809__auto__)){
var backoff = b2__14809__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__17940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17941__i = 0, G__17941__a = new Array(arguments.length -  0);
while (G__17941__i < G__17941__a.length) {G__17941__a[G__17941__i] = arguments[G__17941__i + 0]; ++G__17941__i;}
  args = new cljs.core.IndexedSeq(G__17941__a,0,null);
} 
return G__17940__delegate.call(this,args);};
G__17940.cljs$lang$maxFixedArity = 0;
G__17940.cljs$lang$applyTo = (function (arglist__17942){
var args = cljs.core.seq(arglist__17942);
return G__17940__delegate(args);
});
G__17940.cljs$core$IFn$_invoke$arity$variadic = G__17940__delegate;
return G__17940;
})()
;
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return (function() { 
var G__17943__delegate = function (args){
var b2__14809__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__14809__auto__)){
var backoff_ms = b2__14809__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__17943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17944__i = 0, G__17944__a = new Array(arguments.length -  0);
while (G__17944__i < G__17944__a.length) {G__17944__a[G__17944__i] = arguments[G__17944__i + 0]; ++G__17944__i;}
  args = new cljs.core.IndexedSeq(G__17944__a,0,null);
} 
return G__17943__delegate.call(this,args);};
G__17943.cljs$lang$maxFixedArity = 0;
G__17943.cljs$lang$applyTo = (function (arglist__17945){
var args = cljs.core.seq(arglist__17945);
return G__17943__delegate(args);
});
G__17943.cljs$core$IFn$_invoke$arity$variadic = G__17943__delegate;
return G__17943;
})()
;
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17946 = arguments.length;
var i__4819__auto___17947 = (0);
while(true){
if((i__4819__auto___17947 < len__4818__auto___17946)){
args__4824__auto__.push((arguments[i__4819__auto___17947]));

var G__17948 = (i__4819__auto___17947 + (1));
i__4819__auto___17947 = G__17948;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__17760){
var vec__17761 = p__17760;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17761,(0),null);
var b2__14809__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__14809__auto__)){
var js_win = b2__14809__auto__;
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
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq17758){
var G__17759 = cljs.core.first(seq17758);
var seq17758__$1 = cljs.core.next(seq17758);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17759,seq17758__$1);
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
var len__4818__auto___17949 = arguments.length;
var i__4819__auto___17950 = (0);
while(true){
if((i__4819__auto___17950 < len__4818__auto___17949)){
args__4824__auto__.push((arguments[i__4819__auto___17950]));

var G__17951 = (i__4819__auto___17950 + (1));
i__4819__auto___17950 = G__17951;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17766 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17766) : taoensso.encore.log_QMARK_.call(null,G__17766));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq17764){
var G__17765 = cljs.core.first(seq17764);
var seq17764__$1 = cljs.core.next(seq17764);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17765,seq17764__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17952 = arguments.length;
var i__4819__auto___17953 = (0);
while(true){
if((i__4819__auto___17953 < len__4818__auto___17952)){
args__4824__auto__.push((arguments[i__4819__auto___17953]));

var G__17954 = (i__4819__auto___17953 + (1));
i__4819__auto___17953 = G__17954;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17769 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17769) : taoensso.encore.log_QMARK_.call(null,G__17769));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq17767){
var G__17768 = cljs.core.first(seq17767);
var seq17767__$1 = cljs.core.next(seq17767);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17768,seq17767__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17955 = arguments.length;
var i__4819__auto___17956 = (0);
while(true){
if((i__4819__auto___17956 < len__4818__auto___17955)){
args__4824__auto__.push((arguments[i__4819__auto___17956]));

var G__17957 = (i__4819__auto___17956 + (1));
i__4819__auto___17956 = G__17957;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17772 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17772) : taoensso.encore.log_QMARK_.call(null,G__17772));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq17770){
var G__17771 = cljs.core.first(seq17770);
var seq17770__$1 = cljs.core.next(seq17770);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17771,seq17770__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17958 = arguments.length;
var i__4819__auto___17959 = (0);
while(true){
if((i__4819__auto___17959 < len__4818__auto___17958)){
args__4824__auto__.push((arguments[i__4819__auto___17959]));

var G__17960 = (i__4819__auto___17959 + (1));
i__4819__auto___17959 = G__17960;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17775 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17775) : taoensso.encore.log_QMARK_.call(null,G__17775));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq17773){
var G__17774 = cljs.core.first(seq17773);
var seq17773__$1 = cljs.core.next(seq17773);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17774,seq17773__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17961 = arguments.length;
var i__4819__auto___17962 = (0);
while(true){
if((i__4819__auto___17962 < len__4818__auto___17961)){
args__4824__auto__.push((arguments[i__4819__auto___17962]));

var G__17963 = (i__4819__auto___17962 + (1));
i__4819__auto___17962 = G__17963;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17778 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17778) : taoensso.encore.log_QMARK_.call(null,G__17778));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq17776){
var G__17777 = cljs.core.first(seq17776);
var seq17776__$1 = cljs.core.next(seq17776);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17777,seq17776__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
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

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17781 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17781) : taoensso.encore.log_QMARK_.call(null,G__17781));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq17779){
var G__17780 = cljs.core.first(seq17779);
var seq17779__$1 = cljs.core.next(seq17779);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17780,seq17779__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17967 = arguments.length;
var i__4819__auto___17968 = (0);
while(true){
if((i__4819__auto___17968 < len__4818__auto___17967)){
args__4824__auto__.push((arguments[i__4819__auto___17968]));

var G__17969 = (i__4819__auto___17968 + (1));
i__4819__auto___17968 = G__17969;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__17784 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17784) : taoensso.encore.log_QMARK_.call(null,G__17784));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq17782){
var G__17783 = cljs.core.first(seq17782);
var seq17782__$1 = cljs.core.next(seq17782);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17783,seq17782__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17970 = arguments.length;
var i__4819__auto___17971 = (0);
while(true){
if((i__4819__auto___17971 < len__4818__auto___17970)){
args__4824__auto__.push((arguments[i__4819__auto___17971]));

var G__17972 = (i__4819__auto___17971 + (1));
i__4819__auto___17971 = G__17972;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__17787){
var vec__17788 = p__17787;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17788,(0),null);
var comparator = (function (){var or__4212__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__17680_SHARP_,p2__17681_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__17680_SHARP_,p2__17681_SHARP_) : comparator.call(null,p1__17680_SHARP_,p2__17681_SHARP_)) > (0))){
return p2__17681_SHARP_;
} else {
return p1__17680_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq17785){
var G__17786 = cljs.core.first(seq17785);
var seq17785__$1 = cljs.core.next(seq17785);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17786,seq17785__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17973 = arguments.length;
var i__4819__auto___17974 = (0);
while(true){
if((i__4819__auto___17974 < len__4818__auto___17973)){
args__4824__auto__.push((arguments[i__4819__auto___17974]));

var G__17975 = (i__4819__auto___17974 + (1));
i__4819__auto___17974 = G__17975;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__17793){
var vec__17794 = p__17793;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17794,(0),null);
var comparator = (function (){var or__4212__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__17682_SHARP_,p2__17683_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__17682_SHARP_,p2__17683_SHARP_) : comparator.call(null,p1__17682_SHARP_,p2__17683_SHARP_)) < (0))){
return p2__17683_SHARP_;
} else {
return p1__17682_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq17791){
var G__17792 = cljs.core.first(seq17791);
var seq17791__$1 = cljs.core.next(seq17791);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17792,seq17791__$1);
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
var fexpr__17801 = (function (p__17802,seen__$1){
while(true){
var vec__17803 = p__17802;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17803,(0),null);
var xs__$1 = vec__17803;
var b2__14809__auto__ = cljs.core.seq(xs__$1);
if(b2__14809__auto__){
var s = b2__14809__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__17976 = cljs.core.rest(s);
var G__17977 = seen__$1;
p__17802 = G__17976;
seen__$1 = G__17977;
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
return fexpr__17801(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__17807 = arguments.length;
switch (G__17807) {
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
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__17808,in$){
var vec__17809 = p__17808;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(1),null);
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
}):(cljs.core.truth_((function (){var G__17812 = kf;
var G__17813 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17812,G__17813) : taoensso.encore.kw_identical_QMARK_.call(null,G__17812,G__17813));
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
var len__4818__auto___17979 = arguments.length;
var i__4819__auto___17980 = (0);
while(true){
if((i__4819__auto___17980 < len__4818__auto___17979)){
args__4824__auto__.push((arguments[i__4819__auto___17980]));

var G__17981 = (i__4819__auto___17980 + (1));
i__4819__auto___17980 = G__17981;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__17816){
var vec__17817 = p__17816;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_((function (){var G__17820 = kf;
var G__17821 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17820,G__17821) : taoensso.encore.kw_identical_QMARK_.call(null,G__17820,G__17821));
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
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq17814){
var G__17815 = cljs.core.first(seq17814);
var seq17814__$1 = cljs.core.next(seq17814);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17815,seq17814__$1);
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
var len__4818__auto___17982 = arguments.length;
var i__4819__auto___17983 = (0);
while(true){
if((i__4819__auto___17983 < len__4818__auto___17982)){
args__4824__auto__.push((arguments[i__4819__auto___17983]));

var G__17984 = (i__4819__auto___17983 + (1));
i__4819__auto___17983 = G__17984;
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
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq17822){
var G__17823 = cljs.core.first(seq17822);
var seq17822__$1 = cljs.core.next(seq17822);
var G__17824 = cljs.core.first(seq17822__$1);
var seq17822__$2 = cljs.core.next(seq17822__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17823,G__17824,seq17822__$2);
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
var len__4818__auto___17985 = arguments.length;
var i__4819__auto___17986 = (0);
while(true){
if((i__4819__auto___17986 < len__4818__auto___17985)){
args__4824__auto__.push((arguments[i__4819__auto___17986]));

var G__17987 = (i__4819__auto___17986 + (1));
i__4819__auto___17986 = G__17987;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__17828){
var map__17829 = p__17828;
var map__17829__$1 = cljs.core.__destructure_map(map__17829);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__15258__auto__ = (start_idx_STAR_ + max_len);
var n2__15259__auto__ = xlen;
if((n1__15258__auto__ > n2__15259__auto__)){
return n2__15259__auto__;
} else {
return n1__15258__auto__;
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
(taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq17825){
var G__17826 = cljs.core.first(seq17825);
var seq17825__$1 = cljs.core.next(seq17825);
var G__17827 = cljs.core.first(seq17825__$1);
var seq17825__$2 = cljs.core.next(seq17825__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17826,G__17827,seq17825__$2);
}));


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17988 = arguments.length;
var i__4819__auto___17989 = (0);
while(true){
if((i__4819__auto___17989 < len__4818__auto___17988)){
args__4824__auto__.push((arguments[i__4819__auto___17989]));

var G__17990 = (i__4819__auto___17989 + (1));
i__4819__auto___17989 = G__17990;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__17833){
var vec__17834 = p__17833;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17834,(0),null);
var vec__17837 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.substr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.substr.cljs$lang$applyTo = (function (seq17830){
var G__17831 = cljs.core.first(seq17830);
var seq17830__$1 = cljs.core.next(seq17830);
var G__17832 = cljs.core.first(seq17830__$1);
var seq17830__$2 = cljs.core.next(seq17830__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17831,G__17832,seq17830__$2);
}));



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17991 = arguments.length;
var i__4819__auto___17992 = (0);
while(true){
if((i__4819__auto___17992 < len__4818__auto___17991)){
args__4824__auto__.push((arguments[i__4819__auto___17992]));

var G__17993 = (i__4819__auto___17992 + (1));
i__4819__auto___17992 = G__17993;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__17843){
var vec__17844 = p__17843;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17844,(0),null);
var vec__17847 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17847,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17847,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq17840){
var G__17841 = cljs.core.first(seq17840);
var seq17840__$1 = cljs.core.next(seq17840);
var G__17842 = cljs.core.first(seq17840__$1);
var seq17840__$2 = cljs.core.next(seq17840__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17841,G__17842,seq17840__$2);
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
var vec__17852 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17852,(0),null);
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
var G__17994 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__17995 = cljs.core.next(ks__$1);
var G__17996 = cljs.core.next(vs__$1);
m = G__17994;
ks__$1 = G__17995;
vs__$1 = G__17996;
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
var len__4818__auto___17997 = arguments.length;
var i__4819__auto___17998 = (0);
while(true){
if((i__4819__auto___17998 < len__4818__auto___17997)){
args__4824__auto__.push((arguments[i__4819__auto___17998]));

var G__17999 = (i__4819__auto___17998 + (1));
i__4819__auto___17998 = G__17999;
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
var vec__17857 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17857,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17857,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17857,(2),null);
var f = (cljs.core.truth_((function (){var G__17860 = type;
var G__17861 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17860,G__17861) : taoensso.encore.kw_identical_QMARK_.call(null,G__17860,G__17861));
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
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq17855){
var G__17856 = cljs.core.first(seq17855);
var seq17855__$1 = cljs.core.next(seq17855);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17856,seq17855__$1);
}));

