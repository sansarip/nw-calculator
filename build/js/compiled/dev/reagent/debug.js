// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__9855__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9856__i = 0, G__9856__a = new Array(arguments.length -  0);
while (G__9856__i < G__9856__a.length) {G__9856__a[G__9856__i] = arguments[G__9856__i + 0]; ++G__9856__i;}
  args = new cljs.core.IndexedSeq(G__9856__a,0,null);
} 
return G__9855__delegate.call(this,args);};
G__9855.cljs$lang$maxFixedArity = 0;
G__9855.cljs$lang$applyTo = (function (arglist__9857){
var args = cljs.core.seq(arglist__9857);
return G__9855__delegate(args);
});
G__9855.cljs$core$IFn$_invoke$arity$variadic = G__9855__delegate;
return G__9855;
})()
);

(o.error = (function() { 
var G__9858__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9859__i = 0, G__9859__a = new Array(arguments.length -  0);
while (G__9859__i < G__9859__a.length) {G__9859__a[G__9859__i] = arguments[G__9859__i + 0]; ++G__9859__i;}
  args = new cljs.core.IndexedSeq(G__9859__a,0,null);
} 
return G__9858__delegate.call(this,args);};
G__9858.cljs$lang$maxFixedArity = 0;
G__9858.cljs$lang$applyTo = (function (arglist__9860){
var args = cljs.core.seq(arglist__9860);
return G__9858__delegate(args);
});
G__9858.cljs$core$IFn$_invoke$arity$variadic = G__9858__delegate;
return G__9858;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
