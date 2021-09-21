// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.devcards.search');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('nw_calculator.components');
goog.require('reagent.core');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.devcards.sample_data');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.search","nw_calculator.devcards.search",1896826488),new cljs.core.Keyword(null,"search","search",1564939822)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.search !== 'undefined') && (typeof nw_calculator.devcards.search.t_nw_calculator$devcards$search29110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.search.t_nw_calculator$devcards$search29110 = (function (meta29111){
this.meta29111 = meta29111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29112,meta29111__$1){
var self__ = this;
var _29112__$1 = this;
return (new nw_calculator.devcards.search.t_nw_calculator$devcards$search29110(meta29111__$1));
}));

(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29112){
var self__ = this;
var _29112__$1 = this;
return self__.meta29111;
}));

(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (state){
var with_let29113 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29113","with-let29113",-346057372));
var temp__5757__auto___29116 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29116 == null)){
} else {
var c__8434__auto___29117 = temp__5757__auto___29116;
if((with_let29113.generation === c__8434__auto___29117.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29113.generation = c__8434__auto___29117.ratomGeneration);
}

var init29114 = (with_let29113.length === (0));
var set_loading_BANG_ = ((((init29114) || (cljs.core.not.call(null,with_let29113.hasOwnProperty((0))))))?(with_let29113[(0)] = (function (p1__29108_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),p1__29108_SHARP_);
})):(with_let29113[(0)]));
var on_search = ((((init29114) || (cljs.core.not.call(null,with_let29113.hasOwnProperty((1))))))?(with_let29113[(1)] = nw_calculator.utilities.debounce.call(null,(function (search_term){
set_loading_BANG_.call(null,true);

return setTimeout((function() { 
var G__29118__delegate = function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__29109_SHARP_){
return nw_calculator.utilities.fuzzy_search.call(null,p1__29109_SHARP_,search_term);
}),cljs.core.vector,new cljs.core.Keyword(null,"name","name",1843675177)),nw_calculator.devcards.sample_data.items))));

return set_loading_BANG_.call(null,false);
};
var G__29118 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29119__i = 0, G__29119__a = new Array(arguments.length -  0);
while (G__29119__i < G__29119__a.length) {G__29119__a[G__29119__i] = arguments[G__29119__i + 0]; ++G__29119__i;}
  _ = new cljs.core.IndexedSeq(G__29119__a,0,null);
} 
return G__29118__delegate.call(this,_);};
G__29118.cljs$lang$maxFixedArity = 0;
G__29118.cljs$lang$applyTo = (function (arglist__29120){
var _ = cljs.core.seq(arglist__29120);
return G__29118__delegate(_);
});
G__29118.cljs$core$IFn$_invoke$arity$variadic = G__29118__delegate;
return G__29118;
})()
,(100));
}),(100))):(with_let29113[(1)]));
var clear_results = ((((init29114) || (cljs.core.not.call(null,with_let29113.hasOwnProperty((2))))))?(with_let29113[(2)] = (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY);
})):(with_let29113[(2)]));
var on_clear = ((((init29114) || (cljs.core.not.call(null,with_let29113.hasOwnProperty((3))))))?(with_let29113[(3)] = clear_results):(with_let29113[(3)]));
var on_select = ((((init29114) || (cljs.core.not.call(null,with_let29113.hasOwnProperty((4))))))?(with_let29113[(4)] = (function (_item){
return clear_results.call(null);
})):(with_let29113[(4)]));
var make_result = ((((init29114) || (cljs.core.not.call(null,with_let29113.hasOwnProperty((5))))))?(with_let29113[(5)] = (function (item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map,new cljs.core.Keyword(null,"custom-quantity","custom-quantity",-1300704698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null)], null)], null);
})):(with_let29113[(5)]));
var res29115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white","div.bg-white",543846635),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.search_component,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"on-search","on-search",-1282068148),new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.Keyword(null,"container-props","container-props",-1692729191),new cljs.core.Keyword(null,"make-result","make-result",1014199613),new cljs.core.Keyword(null,"results","results",-1134170113)],[on_clear,new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),on_search,new cljs.core.Keyword(null,"name","name",1843675177),on_select,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for an item \uD83D\uDD0D"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white"], null),make_result,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))])], null)], null);
return res29115;
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

(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29111","meta29111",-163232455,null)], null);
}));

(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.cljs$lang$type = true);

(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.cljs$lang$ctorStr = "nw-calculator.devcards.search/t_nw_calculator$devcards$search29110");

(nw_calculator.devcards.search.t_nw_calculator$devcards$search29110.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.search/t_nw_calculator$devcards$search29110");
}));

/**
 * Positional factory function for nw-calculator.devcards.search/t_nw_calculator$devcards$search29110.
 */
nw_calculator.devcards.search.__GT_t_nw_calculator$devcards$search29110 = (function nw_calculator$devcards$search$__GT_t_nw_calculator$devcards$search29110(meta29111){
return (new nw_calculator.devcards.search.t_nw_calculator$devcards$search29110(meta29111));
});

}

return (new nw_calculator.devcards.search.t_nw_calculator$devcards$search29110(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=search.js.map
