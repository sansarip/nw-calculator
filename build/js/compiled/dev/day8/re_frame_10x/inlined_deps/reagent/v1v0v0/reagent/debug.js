// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__32776__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32777__i = 0, G__32777__a = new Array(arguments.length -  0);
while (G__32777__i < G__32777__a.length) {G__32777__a[G__32777__i] = arguments[G__32777__i + 0]; ++G__32777__i;}
  args = new cljs.core.IndexedSeq(G__32777__a,0,null);
} 
return G__32776__delegate.call(this,args);};
G__32776.cljs$lang$maxFixedArity = 0;
G__32776.cljs$lang$applyTo = (function (arglist__32778){
var args = cljs.core.seq(arglist__32778);
return G__32776__delegate(args);
});
G__32776.cljs$core$IFn$_invoke$arity$variadic = G__32776__delegate;
return G__32776;
})()
);

(o.error = (function() { 
var G__32779__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32780__i = 0, G__32780__a = new Array(arguments.length -  0);
while (G__32780__i < G__32780__a.length) {G__32780__a[G__32780__i] = arguments[G__32780__i + 0]; ++G__32780__i;}
  args = new cljs.core.IndexedSeq(G__32780__a,0,null);
} 
return G__32779__delegate.call(this,args);};
G__32779.cljs$lang$maxFixedArity = 0;
G__32779.cljs$lang$applyTo = (function (arglist__32781){
var args = cljs.core.seq(arglist__32781);
return G__32779__delegate(args);
});
G__32779.cljs$core$IFn$_invoke$arity$variadic = G__32779__delegate;
return G__32779;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
