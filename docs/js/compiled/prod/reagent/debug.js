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
var G__18055__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18056__i = 0, G__18056__a = new Array(arguments.length -  0);
while (G__18056__i < G__18056__a.length) {G__18056__a[G__18056__i] = arguments[G__18056__i + 0]; ++G__18056__i;}
  args = new cljs.core.IndexedSeq(G__18056__a,0,null);
} 
return G__18055__delegate.call(this,args);};
G__18055.cljs$lang$maxFixedArity = 0;
G__18055.cljs$lang$applyTo = (function (arglist__18057){
var args = cljs.core.seq(arglist__18057);
return G__18055__delegate(args);
});
G__18055.cljs$core$IFn$_invoke$arity$variadic = G__18055__delegate;
return G__18055;
})()
);

(o.error = (function() { 
var G__18058__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18059__i = 0, G__18059__a = new Array(arguments.length -  0);
while (G__18059__i < G__18059__a.length) {G__18059__a[G__18059__i] = arguments[G__18059__i + 0]; ++G__18059__i;}
  args = new cljs.core.IndexedSeq(G__18059__a,0,null);
} 
return G__18058__delegate.call(this,args);};
G__18058.cljs$lang$maxFixedArity = 0;
G__18058.cljs$lang$applyTo = (function (arglist__18060){
var args = cljs.core.seq(arglist__18060);
return G__18058__delegate(args);
});
G__18058.cljs$core$IFn$_invoke$arity$variadic = G__18058__delegate;
return G__18058;
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
