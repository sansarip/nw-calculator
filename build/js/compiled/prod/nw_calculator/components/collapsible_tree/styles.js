// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.components.collapsible_tree.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('nw_calculator.styles');
goog.require('spade.core');
nw_calculator.components.collapsible_tree.styles.tree_class_factory$ = (function nw_calculator$components$collapsible_tree$styles$tree_class_factory$(style_name30810,params30811){
var style30813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name30810)].join(''),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>dt","&>dt>dl","&>dt>div","&>dl>dt",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"0px !important",cljs.core.cst$kw$padding,"0px !important"], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$css,spade.runtime.compile_css(style30813),cljs.core.cst$kw$name,style_name30810], null);
});

var factory_name30812_30815 = spade.util.factory__GT_name(nw_calculator.components.collapsible_tree.styles.tree_class_factory$);
nw_calculator.components.collapsible_tree.styles.tree_class = (function nw_calculator$components$collapsible_tree$styles$tree_class(){
return spade.runtime.ensure_style_BANG_(cljs.core.cst$kw$class,factory_name30812_30815,nw_calculator.components.collapsible_tree.styles.tree_class_factory$,cljs.core.PersistentVector.EMPTY);
});
