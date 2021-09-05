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
var G__18054__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18055__i = 0, G__18055__a = new Array(arguments.length -  0);
while (G__18055__i < G__18055__a.length) {G__18055__a[G__18055__i] = arguments[G__18055__i + 0]; ++G__18055__i;}
  args = new cljs.core.IndexedSeq(G__18055__a,0,null);
} 
return G__18054__delegate.call(this,args);};
G__18054.cljs$lang$maxFixedArity = 0;
G__18054.cljs$lang$applyTo = (function (arglist__18056){
var args = cljs.core.seq(arglist__18056);
return G__18054__delegate(args);
});
G__18054.cljs$core$IFn$_invoke$arity$variadic = G__18054__delegate;
return G__18054;
})()
);

(o.error = (function() { 
var G__18057__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18058__i = 0, G__18058__a = new Array(arguments.length -  0);
while (G__18058__i < G__18058__a.length) {G__18058__a[G__18058__i] = arguments[G__18058__i + 0]; ++G__18058__i;}
  args = new cljs.core.IndexedSeq(G__18058__a,0,null);
} 
return G__18057__delegate.call(this,args);};
G__18057.cljs$lang$maxFixedArity = 0;
G__18057.cljs$lang$applyTo = (function (arglist__18059){
var args = cljs.core.seq(arglist__18059);
return G__18057__delegate(args);
});
G__18057.cljs$core$IFn$_invoke$arity$variadic = G__18057__delegate;
return G__18057;
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
