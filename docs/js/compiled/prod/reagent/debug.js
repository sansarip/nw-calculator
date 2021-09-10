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
var G__12864__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12865__i = 0, G__12865__a = new Array(arguments.length -  0);
while (G__12865__i < G__12865__a.length) {G__12865__a[G__12865__i] = arguments[G__12865__i + 0]; ++G__12865__i;}
  args = new cljs.core.IndexedSeq(G__12865__a,0,null);
} 
return G__12864__delegate.call(this,args);};
G__12864.cljs$lang$maxFixedArity = 0;
G__12864.cljs$lang$applyTo = (function (arglist__12866){
var args = cljs.core.seq(arglist__12866);
return G__12864__delegate(args);
});
G__12864.cljs$core$IFn$_invoke$arity$variadic = G__12864__delegate;
return G__12864;
})()
);

(o.error = (function() { 
var G__12867__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12868__i = 0, G__12868__a = new Array(arguments.length -  0);
while (G__12868__i < G__12868__a.length) {G__12868__a[G__12868__i] = arguments[G__12868__i + 0]; ++G__12868__i;}
  args = new cljs.core.IndexedSeq(G__12868__a,0,null);
} 
return G__12867__delegate.call(this,args);};
G__12867.cljs$lang$maxFixedArity = 0;
G__12867.cljs$lang$applyTo = (function (arglist__12869){
var args = cljs.core.seq(arglist__12869);
return G__12867__delegate(args);
});
G__12867.cljs$core$IFn$_invoke$arity$variadic = G__12867__delegate;
return G__12867;
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
