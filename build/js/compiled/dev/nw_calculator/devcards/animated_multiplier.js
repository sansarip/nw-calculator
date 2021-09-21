// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.devcards.animated_multiplier');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('nw_calculator.components');
goog.require('reagent.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.animated_multiplier","nw_calculator.devcards.animated_multiplier",-361833941),new cljs.core.Keyword(null,"animated-multiplier","animated-multiplier",-1021458626)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"animated-multiplier",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.animated_multiplier !== 'undefined') && (typeof nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710 = (function (meta74711){
this.meta74711 = meta74711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74712,meta74711__$1){
var self__ = this;
var _74712__$1 = this;
return (new nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710(meta74711__$1));
}));

(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74712){
var self__ = this;
var _74712__$1 = this;
return self__.meta74711;
}));

(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-8","div.flex.flex-col.gap-8",-1949008744),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.call(null,(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.animated_multiplier_component], null);
})),cljs.core.range.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-6","div.flex.gap-6",-1261228584),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.button-outline","button.button.button-outline",1211973845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
})], null),"Inc"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.button-outline","button.button.button-outline",1211973845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.dec);
})], null),"Dec"], null)], null)], null);
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

(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74711","meta74711",-1250336183,null)], null);
}));

(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.cljs$lang$type = true);

(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.cljs$lang$ctorStr = "nw-calculator.devcards.animated-multiplier/t_nw_calculator$devcards$animated_multiplier74710");

(nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.animated-multiplier/t_nw_calculator$devcards$animated_multiplier74710");
}));

/**
 * Positional factory function for nw-calculator.devcards.animated-multiplier/t_nw_calculator$devcards$animated_multiplier74710.
 */
nw_calculator.devcards.animated_multiplier.__GT_t_nw_calculator$devcards$animated_multiplier74710 = (function nw_calculator$devcards$animated_multiplier$__GT_t_nw_calculator$devcards$animated_multiplier74710(meta74711){
return (new nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710(meta74711));
});

}

return (new nw_calculator.devcards.animated_multiplier.t_nw_calculator$devcards$animated_multiplier74710(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(1)], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=animated_multiplier.js.map
