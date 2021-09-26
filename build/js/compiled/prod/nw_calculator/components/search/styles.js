// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.search.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spade.core');
goog.require('nw_calculator.styles');
nw_calculator.components.search.styles.search_class_factory$ = (function nw_calculator$components$search$styles$search_class_factory$(style_name30982,params30983){
var style30985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name30982)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$search$basic_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_right,nw_calculator.styles.relative_8], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$css,spade.runtime.compile_css(style30985),cljs.core.cst$kw$name,style_name30982], null);
});

var factory_name30984_30987 = spade.util.factory__GT_name(nw_calculator.components.search.styles.search_class_factory$);
nw_calculator.components.search.styles.search_class = (function nw_calculator$components$search$styles$search_class(){
return spade.runtime.ensure_style_BANG_(cljs.core.cst$kw$class,factory_name30984_30987,nw_calculator.components.search.styles.search_class_factory$,cljs.core.PersistentVector.EMPTY);
});
