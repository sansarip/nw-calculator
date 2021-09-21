// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.devcards.item_multiplier');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('nw_calculator.components');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.item_multiplier","nw_calculator.devcards.item_multiplier",1297122333),new cljs.core.Keyword(null,"item-multipler","item-multipler",-894106395)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"item-multipler",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.item_multiplier !== 'undefined') && (typeof nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726 = (function (meta19727){
this.meta19727 = meta19727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19728,meta19727__$1){
var self__ = this;
var _19728__$1 = this;
return (new nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726(meta19727__$1));
}));

(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19728){
var self__ = this;
var _19728__$1 = this;
return self__.meta19727;
}));

(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_multiplier_component], null);
});
if(cljs.core.fn_QMARK_.call(null,v__14798__auto__)){
return (function (data_atom__14799__auto__,owner__14800__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__14798__auto__,data_atom__14799__auto__,owner__14800__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__14798__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__14780__auto__))));
}));

(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19727","meta19727",-1553488837,null)], null);
}));

(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.cljs$lang$type = true);

(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.cljs$lang$ctorStr = "nw-calculator.devcards.item-multiplier/t_nw_calculator$devcards$item_multiplier19726");

(nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.item-multiplier/t_nw_calculator$devcards$item_multiplier19726");
}));

/**
 * Positional factory function for nw-calculator.devcards.item-multiplier/t_nw_calculator$devcards$item_multiplier19726.
 */
nw_calculator.devcards.item_multiplier.__GT_t_nw_calculator$devcards$item_multiplier19726 = (function nw_calculator$devcards$item_multiplier$__GT_t_nw_calculator$devcards$item_multiplier19726(meta19727){
return (new nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726(meta19727));
});

}

return (new nw_calculator.devcards.item_multiplier.t_nw_calculator$devcards$item_multiplier19726(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=item_multiplier.js.map
