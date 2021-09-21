// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.dropdown.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spade.core');
goog.require('nw_calculator.styles');
nw_calculator.components.dropdown.styles.dropdown_class_factory$ = (function nw_calculator$components$dropdown$styles$dropdown_class_factory$(style_name28990,params28991){
var style28993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name28990)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$dropdown$basic_DASH_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_right,nw_calculator.styles.relative_6,cljs.core.cst$kw$height,cljs.core.cst$kw$2rem], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$css,spade.runtime.compile_css(style28993),cljs.core.cst$kw$name,style_name28990], null);
});

var factory_name28992_28995 = spade.util.factory__GT_name(nw_calculator.components.dropdown.styles.dropdown_class_factory$);
nw_calculator.components.dropdown.styles.dropdown_class = (function nw_calculator$components$dropdown$styles$dropdown_class(){
return spade.runtime.ensure_style_BANG_(cljs.core.cst$kw$class,factory_name28992_28995,nw_calculator.components.dropdown.styles.dropdown_class_factory$,cljs.core.PersistentVector.EMPTY);
});