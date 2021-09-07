// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.search.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spade.core');
goog.require('nw_calculator.styles');
nw_calculator.components.search.styles.search_class_factory$ = (function nw_calculator$components$search$styles$search_class_factory$(style_name29016,params29017){
var style29019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name29016)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$search$basic_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_right,cljs.core.cst$kw$2rem], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$css,spade.runtime.compile_css(style29019),cljs.core.cst$kw$name,style_name29016], null);
});

var factory_name29018_29021 = spade.util.factory__GT_name(nw_calculator.components.search.styles.search_class_factory$);
nw_calculator.components.search.styles.search_class = (function nw_calculator$components$search$styles$search_class(){
return spade.runtime.ensure_style_BANG_(cljs.core.cst$kw$class,factory_name29018_29021,nw_calculator.components.search.styles.search_class_factory$,cljs.core.PersistentVector.EMPTY);
});
