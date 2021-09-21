// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.devcards.item');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('nw_calculator.components');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.devcards.sample_data');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.item","nw_calculator.devcards.item",491420296),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"item",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.item !== 'undefined') && (typeof nw_calculator.devcards.item.t_nw_calculator$devcards$item29292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.item.t_nw_calculator$devcards$item29292 = (function (meta29293){
this.meta29293 = meta29293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29294,meta29293__$1){
var self__ = this;
var _29294__$1 = this;
return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29292(meta29293__$1));
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29294){
var self__ = this;
var _29294__$1 = this;
return self__.meta29293;
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-map","item-map",677069923),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tier","tier",-1071893374),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"png-url","png-url",1496264747),new cljs.core.Keyword(null,"skill-level","skill-level",-512504658),new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"xp","xp",550374458),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"external-url","external-url",-1665502145)],[(2),"Iron Ingot","https://cdn.newworldfans.com/db_images/db/items_hires/ingott2.png",(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Iron Ore",new cljs.core.Keyword(null,"id","id",-1388402092),"-1581714941",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(4),new cljs.core.Keyword(null,"external-url","external-url",-1665502145),"https://newworldfans.com/db/item/iron-ore-cb358b",new cljs.core.Keyword(null,"png-url","png-url",1496264747),"https://cdn.newworldfans.com/db_images/db/items_hires/oret1.png",new cljs.core.Keyword(null,"tier","tier",-1071893374),(1)], null)], null),"-961420380",(36),(2),"https://newworldfans.com/crafting/Smelting/2970-iron-ingot"])], null)], null);
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

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29293","meta29293",1929695669,null)], null);
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.cljs$lang$type = true);

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.cljs$lang$ctorStr = "nw-calculator.devcards.item/t_nw_calculator$devcards$item29292");

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29292.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.item/t_nw_calculator$devcards$item29292");
}));

/**
 * Positional factory function for nw-calculator.devcards.item/t_nw_calculator$devcards$item29292.
 */
nw_calculator.devcards.item.__GT_t_nw_calculator$devcards$item29292 = (function nw_calculator$devcards$item$__GT_t_nw_calculator$devcards$item29292(meta29293){
return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29292(meta29293));
});

}

return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29292(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.item","nw_calculator.devcards.item",491420296),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"item",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Linkable item",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.item !== 'undefined') && (typeof nw_calculator.devcards.item.t_nw_calculator$devcards$item29295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.item.t_nw_calculator$devcards$item29295 = (function (meta29296){
this.meta29296 = meta29296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29297,meta29296__$1){
var self__ = this;
var _29297__$1 = this;
return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29295(meta29296__$1));
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29297){
var self__ = this;
var _29297__$1 = this;
return self__.meta29296;
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (){
var with_let29298 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29298","with-let29298",1228390506));
var temp__5757__auto___29301 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29301 == null)){
} else {
var c__8434__auto___29302 = temp__5757__auto___29301;
if((with_let29298.generation === c__8434__auto___29302.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29298.generation = c__8434__auto___29302.ratomGeneration);
}

var init29299 = (with_let29298.length === (0));
var item_map = ((((init29299) || (cljs.core.not.call(null,with_let29298.hasOwnProperty((0))))))?(with_let29298[(0)] = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tier","tier",-1071893374),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"png-url","png-url",1496264747),new cljs.core.Keyword(null,"skill-level","skill-level",-512504658),new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"xp","xp",550374458),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"external-url","external-url",-1665502145)],[(2),"Iron Ingot","https://cdn.newworldfans.com/db_images/db/items_hires/ingott2.png",(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Iron Ore",new cljs.core.Keyword(null,"id","id",-1388402092),"-1581714941",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(4),new cljs.core.Keyword(null,"external-url","external-url",-1665502145),"https://newworldfans.com/db/item/iron-ore-cb358b",new cljs.core.Keyword(null,"png-url","png-url",1496264747),"https://cdn.newworldfans.com/db_images/db/items_hires/oret1.png",new cljs.core.Keyword(null,"tier","tier",-1071893374),(1)], null)], null),"-961420380",(36),(2),"https://newworldfans.com/crafting/Smelting/2970-iron-ingot"])):(with_let29298[(0)]));
var res29300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4","div.mt-4",-1531088843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map,new cljs.core.Keyword(null,"custom-name","custom-name",1003503291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"external-url","external-url",-1665502145).cljs$core$IFn$_invoke$arity$1(item_map),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item_map)], null)], null)], null)], null);
return res29300;
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

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29296","meta29296",119793301,null)], null);
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.cljs$lang$type = true);

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.cljs$lang$ctorStr = "nw-calculator.devcards.item/t_nw_calculator$devcards$item29295");

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29295.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.item/t_nw_calculator$devcards$item29295");
}));

/**
 * Positional factory function for nw-calculator.devcards.item/t_nw_calculator$devcards$item29295.
 */
nw_calculator.devcards.item.__GT_t_nw_calculator$devcards$item29295 = (function nw_calculator$devcards$item$__GT_t_nw_calculator$devcards$item29295(meta29296){
return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29295(meta29296));
});

}

return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29295(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.item","nw_calculator.devcards.item",491420296),new cljs.core.Keyword(null,"item","item",249373802)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"item",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Searchable item",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.item !== 'undefined') && (typeof nw_calculator.devcards.item.t_nw_calculator$devcards$item29304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.item.t_nw_calculator$devcards$item29304 = (function (meta29305){
this.meta29305 = meta29305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29306,meta29305__$1){
var self__ = this;
var _29306__$1 = this;
return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29304(meta29305__$1));
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29306){
var self__ = this;
var _29306__$1 = this;
return self__.meta29305;
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (state){
var with_let29307 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29307","with-let29307",1463206569));
var temp__5757__auto___29312 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29312 == null)){
} else {
var c__8434__auto___29313 = temp__5757__auto___29312;
if((with_let29307.generation === c__8434__auto___29313.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29307.generation = c__8434__auto___29313.ratomGeneration);
}

var init29308 = (with_let29307.length === (0));
var clear_selected_item_BANG_ = ((((init29308) || (cljs.core.not.call(null,with_let29307.hasOwnProperty((0))))))?(with_let29307[(0)] = (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.PersistentVector.EMPTY], null));
})):(with_let29307[(0)]));
var on_search = ((((init29308) || (cljs.core.not.call(null,with_let29307.hasOwnProperty((1))))))?(with_let29307[(1)] = nw_calculator.utilities.debounce.call(null,(function (search_term){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__29303_SHARP_){
return nw_calculator.utilities.fuzzy_search.call(null,p1__29303_SHARP_,search_term);
}),new cljs.core.Keyword(null,"name","name",1843675177)),nw_calculator.devcards.sample_data.items))));
}),(100))):(with_let29307[(1)]));
var clear_results_BANG_ = ((((init29308) || (cljs.core.not.call(null,with_let29307.hasOwnProperty((2))))))?(with_let29307[(2)] = (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY);
})):(with_let29307[(2)]));
var on_clear = ((((init29308) || (cljs.core.not.call(null,with_let29307.hasOwnProperty((3))))))?(with_let29307[(3)] = (function (){
clear_results_BANG_.call(null);

return clear_selected_item_BANG_.call(null);
})):(with_let29307[(3)]));
var on_select = ((((init29308) || (cljs.core.not.call(null,with_let29307.hasOwnProperty((4))))))?(with_let29307[(4)] = (function (item_map){
clear_results_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),item_map);
})):(with_let29307[(4)]));
var make_result = ((((init29308) || (cljs.core.not.call(null,with_let29307.hasOwnProperty((5))))))?(with_let29307[(5)] = (function (item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map], null)], null);
})):(with_let29307[(5)]));
var res29309 = (function (){var map__29310 = cljs.core.deref.call(null,state);
var map__29310__$1 = cljs.core.__destructure_map.call(null,map__29310);
var map__29311 = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942));
var map__29311__$1 = cljs.core.__destructure_map.call(null,map__29311);
var selected_item = map__29311__$1;
var external_url = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"external-url","external-url",-1665502145));
var results = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4","div.mt-4",-1531088843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"popup-on-hover?","popup-on-hover?",-2068184278),true,new cljs.core.Keyword(null,"item-map","item-map",677069923),selected_item,new cljs.core.Keyword(null,"custom-name","custom-name",1003503291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"make-result","make-result",1014199613),make_result,new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for an item \uD83D\uDD0D"], null),new cljs.core.Keyword(null,"on-search","on-search",-1282068148),on_search,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),on_clear,new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select,new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"results","results",-1134170113),results], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = selected_item;
if(cljs.core.truth_(and__4210__auto__)){
return external_url;
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),external_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.text-base.fas.fa-external-link-alt","i.text-base.fas.fa-external-link-alt",-447681013)], null)], null):null)], null)], null)], null)], null);
})();
return res29309;
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

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29305","meta29305",-268623104,null)], null);
}));

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.cljs$lang$type = true);

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.cljs$lang$ctorStr = "nw-calculator.devcards.item/t_nw_calculator$devcards$item29304");

(nw_calculator.devcards.item.t_nw_calculator$devcards$item29304.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.item/t_nw_calculator$devcards$item29304");
}));

/**
 * Positional factory function for nw-calculator.devcards.item/t_nw_calculator$devcards$item29304.
 */
nw_calculator.devcards.item.__GT_t_nw_calculator$devcards$item29304 = (function nw_calculator$devcards$item$__GT_t_nw_calculator$devcards$item29304(meta29305){
return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29304(meta29305));
});

}

return (new nw_calculator.devcards.item.t_nw_calculator$devcards$item29304(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=item.js.map
