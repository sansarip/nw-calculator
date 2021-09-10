// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.analyzer.passes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.analyzer.passes.apply_passes = (function cljs$analyzer$passes$apply_passes(var_args){
var G__21708 = arguments.length;
switch (G__21708) {
case 2:
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$2 = (function (ast,passes){
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3(ast,passes,null);
}));

(cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3 = (function (ast,passes,opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast__$1,pass){
var G__21709 = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ast__$1);
var G__21710 = ast__$1;
var G__21711 = opts;
return (pass.cljs$core$IFn$_invoke$arity$3 ? pass.cljs$core$IFn$_invoke$arity$3(G__21709,G__21710,G__21711) : pass.call(null,G__21709,G__21710,G__21711));
}),ast,passes);
}));

(cljs.analyzer.passes.apply_passes.cljs$lang$maxFixedArity = 3);

cljs.analyzer.passes.walk = (function cljs$analyzer$passes$walk(var_args){
var G__21715 = arguments.length;
switch (G__21715) {
case 2:
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$2 = (function (ast,passes){
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3(ast,passes,null);
}));

(cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3 = (function (ast,passes,opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast__$1,child_k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast__$1,child_k,(function (){var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast__$1,child_k);
if(cljs.core.vector_QMARK_(child)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__21713_SHARP_){
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3(p1__21713_SHARP_,passes,opts);
})),child);
} else {
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3(child,passes,opts);
}
})());
}),(function (){var G__21716 = ast;
if((G__21716 == null)){
return null;
} else {
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3(G__21716,passes,opts);
}
})(),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
}));

(cljs.analyzer.passes.walk.cljs$lang$maxFixedArity = 3);

