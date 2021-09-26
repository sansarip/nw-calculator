// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__14229__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14230__i = 0, G__14230__a = new Array(arguments.length -  0);
while (G__14230__i < G__14230__a.length) {G__14230__a[G__14230__i] = arguments[G__14230__i + 0]; ++G__14230__i;}
  args = new cljs.core.IndexedSeq(G__14230__a,0,null);
} 
return G__14229__delegate.call(this,args);};
G__14229.cljs$lang$maxFixedArity = 0;
G__14229.cljs$lang$applyTo = (function (arglist__14231){
var args = cljs.core.seq(arglist__14231);
return G__14229__delegate(args);
});
G__14229.cljs$core$IFn$_invoke$arity$variadic = G__14229__delegate;
return G__14229;
})()
);

(o.error = (function() { 
var G__14232__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14233__i = 0, G__14233__a = new Array(arguments.length -  0);
while (G__14233__i < G__14233__a.length) {G__14233__a[G__14233__i] = arguments[G__14233__i + 0]; ++G__14233__i;}
  args = new cljs.core.IndexedSeq(G__14233__a,0,null);
} 
return G__14232__delegate.call(this,args);};
G__14232.cljs$lang$maxFixedArity = 0;
G__14232.cljs$lang$applyTo = (function (arglist__14234){
var args = cljs.core.seq(arglist__14234);
return G__14232__delegate(args);
});
G__14232.cljs$core$IFn$_invoke$arity$variadic = G__14232__delegate;
return G__14232;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
