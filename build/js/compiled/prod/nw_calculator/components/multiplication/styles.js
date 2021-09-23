// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.multiplication.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spade.core');
goog.require('nw_calculator.styles');
nw_calculator.components.multiplication.styles.multiplication_class_factory$ = (function nw_calculator$components$multiplication$styles$multiplication_class_factory$(style_name29241,params29242){
var style29244 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name29241)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$multiplier,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$100_PERCENT_,cljs.core.cst$kw$bottom,cljs.core.cst$kw$4$5rem], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$basic_DASH_input$product,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border,cljs.core.cst$kw$0px,cljs.core.cst$kw$padding,nw_calculator.styles.with_config("{{sizes.relative.4}} 0px 0px 0px")], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$css,spade.runtime.compile_css(style29244),cljs.core.cst$kw$name,style_name29241], null);
});

var factory_name29243_29246 = spade.util.factory__GT_name(nw_calculator.components.multiplication.styles.multiplication_class_factory$);
nw_calculator.components.multiplication.styles.multiplication_class = (function nw_calculator$components$multiplication$styles$multiplication_class(){
return spade.runtime.ensure_style_BANG_(cljs.core.cst$kw$class,factory_name29243_29246,nw_calculator.components.multiplication.styles.multiplication_class_factory$,cljs.core.PersistentVector.EMPTY);
});
