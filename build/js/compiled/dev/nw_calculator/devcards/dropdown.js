// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.devcards.dropdown');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('nw_calculator.components');
goog.require('nw_calculator.devcards.sample_data');
goog.require('reagent.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.dropdown","nw_calculator.devcards.dropdown",1501876911),new cljs.core.Keyword(null,"dropdown","dropdown",1343185805)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dropdown",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.dropdown !== 'undefined') && (typeof nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316 = (function (meta29317){
this.meta29317 = meta29317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29318,meta29317__$1){
var self__ = this;
var _29318__$1 = this;
return (new nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316(meta29317__$1));
}));

(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29318){
var self__ = this;
var _29318__$1 = this;
return self__.meta29317;
}));

(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (){
var with_let29319 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29319","with-let29319",1750951915));
var temp__5757__auto___29322 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29322 == null)){
} else {
var c__8434__auto___29323 = temp__5757__auto___29322;
if((with_let29319.generation === c__8434__auto___29323.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29319.generation = c__8434__auto___29323.ratomGeneration);
}

var init29320 = (with_let29319.length === (0));
var item = ((((init29320) || (cljs.core.not.call(null,with_let29319.hasOwnProperty((0))))))?(with_let29319[(0)] = (function (option){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-map","item-map",677069923),option], null)], null);
})):(with_let29319[(0)]));
var res29321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.w-56","div.flex.flex-col.gap-4.w-56",1760232847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.dropdown_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Tier 3 Metals",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,nw_calculator.devcards.sample_data.items))], null),new cljs.core.Keyword(null,"container-props","container-props",-1692729191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white"], null),new cljs.core.Keyword(null,"make-option","make-option",-1702447554),item,new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"options","options",99638489),nw_calculator.devcards.sample_data.items], null)], null)], null);
return res29321;
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

(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29317","meta29317",1102032845,null)], null);
}));

(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.cljs$lang$type = true);

(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.cljs$lang$ctorStr = "nw-calculator.devcards.dropdown/t_nw_calculator$devcards$dropdown29316");

(nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.dropdown/t_nw_calculator$devcards$dropdown29316");
}));

/**
 * Positional factory function for nw-calculator.devcards.dropdown/t_nw_calculator$devcards$dropdown29316.
 */
nw_calculator.devcards.dropdown.__GT_t_nw_calculator$devcards$dropdown29316 = (function nw_calculator$devcards$dropdown$__GT_t_nw_calculator$devcards$dropdown29316(meta29317){
return (new nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316(meta29317));
});

}

return (new nw_calculator.devcards.dropdown.t_nw_calculator$devcards$dropdown29316(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=dropdown.js.map
