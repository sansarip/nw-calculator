// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.devcards.collapsible_tree');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('nw_calculator.components');
goog.require('nw_calculator.components.collapsible_tree.component');
goog.require('nw_calculator.utilities');
goog.require('nw_calculator.devcards.sample_data');
goog.require('react');
nw_calculator.devcards.collapsible_tree.global$module$react = goog.global["React"];
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.collapsible_tree","nw_calculator.devcards.collapsible_tree",-20318242),new cljs.core.Keyword(null,"collapsible-tree","collapsible-tree",1094850386)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"collapsible-tree",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.collapsible_tree !== 'undefined') && (typeof nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331 = (function (meta29332){
this.meta29332 = meta29332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29333,meta29332__$1){
var self__ = this;
var _29333__$1 = this;
return (new nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331(meta29332__$1));
}));

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29333){
var self__ = this;
var _29333__$1 = this;
return self__.meta29332;
}));

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (){
var with_let29334 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29334","with-let29334",114701925));
var temp__5757__auto___29372 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29372 == null)){
} else {
var c__8434__auto___29373 = temp__5757__auto___29372;
if((with_let29334.generation === c__8434__auto___29373.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29334.generation = c__8434__auto___29373.ratomGeneration);
}

var init29335 = (with_let29334.length === (0));
var collapsed_item_updaters = ((((init29335) || (cljs.core.not.call(null,with_let29334.hasOwnProperty((0))))))?(with_let29334[(0)] = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)):(with_let29334[(0)]));
var set_collapsed_updater = ((((init29335) || (cljs.core.not.call(null,with_let29334.hasOwnProperty((1))))))?(with_let29334[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.call(null,collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29334[(1)]));
var unset_collapsed_updater = ((((init29335) || (cljs.core.not.call(null,with_let29334.hasOwnProperty((2))))))?(with_let29334[(2)] = (function (id){
return cljs.core.swap_BANG_.call(null,collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29334[(2)]));
var expand_all = ((((init29335) || (cljs.core.not.call(null,with_let29334.hasOwnProperty((3))))))?(with_let29334[(3)] = (function (){
var seq__29337 = cljs.core.seq.call(null,cljs.core.deref.call(null,collapsed_item_updaters));
var chunk__29338 = null;
var count__29339 = (0);
var i__29340 = (0);
while(true){
if((i__29340 < count__29339)){
var vec__29347 = cljs.core._nth.call(null,chunk__29338,i__29340);
var _ = cljs.core.nth.call(null,vec__29347,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29347,(1),null);
set_collapsed_item.call(null,false);


var G__29374 = seq__29337;
var G__29375 = chunk__29338;
var G__29376 = count__29339;
var G__29377 = (i__29340 + (1));
seq__29337 = G__29374;
chunk__29338 = G__29375;
count__29339 = G__29376;
i__29340 = G__29377;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__29337);
if(temp__5753__auto__){
var seq__29337__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29337__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__29337__$1);
var G__29378 = cljs.core.chunk_rest.call(null,seq__29337__$1);
var G__29379 = c__4638__auto__;
var G__29380 = cljs.core.count.call(null,c__4638__auto__);
var G__29381 = (0);
seq__29337 = G__29378;
chunk__29338 = G__29379;
count__29339 = G__29380;
i__29340 = G__29381;
continue;
} else {
var vec__29350 = cljs.core.first.call(null,seq__29337__$1);
var _ = cljs.core.nth.call(null,vec__29350,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29350,(1),null);
set_collapsed_item.call(null,false);


var G__29382 = cljs.core.next.call(null,seq__29337__$1);
var G__29383 = null;
var G__29384 = (0);
var G__29385 = (0);
seq__29337 = G__29382;
chunk__29338 = G__29383;
count__29339 = G__29384;
i__29340 = G__29385;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29334[(3)]));
var collapse_all = ((((init29335) || (cljs.core.not.call(null,with_let29334.hasOwnProperty((4))))))?(with_let29334[(4)] = (function (){
var seq__29353 = cljs.core.seq.call(null,cljs.core.deref.call(null,collapsed_item_updaters));
var chunk__29354 = null;
var count__29355 = (0);
var i__29356 = (0);
while(true){
if((i__29356 < count__29355)){
var vec__29363 = cljs.core._nth.call(null,chunk__29354,i__29356);
var _ = cljs.core.nth.call(null,vec__29363,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29363,(1),null);
set_collapsed_item.call(null,true);


var G__29386 = seq__29353;
var G__29387 = chunk__29354;
var G__29388 = count__29355;
var G__29389 = (i__29356 + (1));
seq__29353 = G__29386;
chunk__29354 = G__29387;
count__29355 = G__29388;
i__29356 = G__29389;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__29353);
if(temp__5753__auto__){
var seq__29353__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29353__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__29353__$1);
var G__29390 = cljs.core.chunk_rest.call(null,seq__29353__$1);
var G__29391 = c__4638__auto__;
var G__29392 = cljs.core.count.call(null,c__4638__auto__);
var G__29393 = (0);
seq__29353 = G__29390;
chunk__29354 = G__29391;
count__29355 = G__29392;
i__29356 = G__29393;
continue;
} else {
var vec__29366 = cljs.core.first.call(null,seq__29353__$1);
var _ = cljs.core.nth.call(null,vec__29366,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29366,(1),null);
set_collapsed_item.call(null,true);


var G__29394 = cljs.core.next.call(null,seq__29353__$1);
var G__29395 = null;
var G__29396 = (0);
var G__29397 = (0);
seq__29353 = G__29394;
chunk__29354 = G__29395;
count__29355 = G__29396;
i__29356 = G__29397;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29334[(4)]));
var make_node = ((((init29335) || (cljs.core.not.call(null,with_let29334.hasOwnProperty((5))))))?(with_let29334[(5)] = (function (p__29369){
var map__29370 = p__29369;
var map__29370__$1 = cljs.core.__destructure_map.call(null,map__29370);
var map__29371 = cljs.core.get.call(null,map__29370__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__29371__$1 = cljs.core.__destructure_map.call(null,map__29371);
var item_map = map__29371__$1;
var name = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var external_url = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"external-url","external-url",-1665502145));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"popup-on-hover?","popup-on-hover?",-2068184278),true,new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map,new cljs.core.Keyword(null,"custom-name","custom-name",1003503291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),external_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),name], null)], null)], null);
})):(with_let29334[(5)]));
var res29336 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-collapsed-updater","set-collapsed-updater",-1291318937),set_collapsed_updater,new cljs.core.Keyword(null,"unset-collapsed-updater","unset-collapsed-updater",-986631966),unset_collapsed_updater], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tree-map","tree-map",-267458478),cljs.core.first.call(null,nw_calculator.devcards.sample_data.items),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.Keyword(null,"make-node","make-node",1103973934),make_node,new cljs.core.Keyword(null,"set-collapsed-updater","set-collapsed-updater",-1291318937),set_collapsed_updater,new cljs.core.Keyword(null,"unset-collapsed-updater","unset-collapsed-updater",-986631966),unset_collapsed_updater], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.m-4.w-72","button.button.m-4.w-72",-1159673597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),collapse_all], null),"collapse all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.m-4.w-72","button.button.m-4.w-72",-1159673597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),expand_all], null),"expand all"], null)], null);
return res29336;
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

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29332","meta29332",132918747,null)], null);
}));

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.cljs$lang$type = true);

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.cljs$lang$ctorStr = "nw-calculator.devcards.collapsible-tree/t_nw_calculator$devcards$collapsible_tree29331");

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.collapsible-tree/t_nw_calculator$devcards$collapsible_tree29331");
}));

/**
 * Positional factory function for nw-calculator.devcards.collapsible-tree/t_nw_calculator$devcards$collapsible_tree29331.
 */
nw_calculator.devcards.collapsible_tree.__GT_t_nw_calculator$devcards$collapsible_tree29331 = (function nw_calculator$devcards$collapsible_tree$__GT_t_nw_calculator$devcards$collapsible_tree29331(meta29332){
return (new nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331(meta29332));
});

}

return (new nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29331(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw_calculator.devcards.collapsible_tree","nw_calculator.devcards.collapsible_tree",-20318242),new cljs.core.Keyword(null,"collapsible-tree","collapsible-tree",1094850386)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"collapsible-tree",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Searchable root items",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.devcards !== 'undefined') && (typeof nw_calculator.devcards.collapsible_tree !== 'undefined') && (typeof nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399 = (function (meta29400){
this.meta29400 = meta29400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29401,meta29400__$1){
var self__ = this;
var _29401__$1 = this;
return (new nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399(meta29400__$1));
}));

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29401){
var self__ = this;
var _29401__$1 = this;
return self__.meta29400;
}));

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14779__auto__,devcard_opts__14780__auto__){
var self__ = this;
var this__14779__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14780__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14798__auto__ = (function (state){
var with_let29402 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let29402","with-let29402",179678589));
var temp__5757__auto___29440 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___29440 == null)){
} else {
var c__8434__auto___29441 = temp__5757__auto___29440;
if((with_let29402.generation === c__8434__auto___29441.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29402.generation = c__8434__auto___29441.ratomGeneration);
}

var init29403 = (with_let29402.length === (0));
var collapsed_item_updaters = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((0))))))?(with_let29402[(0)] = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)):(with_let29402[(0)]));
var set_collapsed_updater = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((1))))))?(with_let29402[(1)] = (function (id,updater){
return cljs.core.swap_BANG_.call(null,collapsed_item_updaters,cljs.core.assoc,id,updater);
})):(with_let29402[(1)]));
var unset_collapsed_updater = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((2))))))?(with_let29402[(2)] = (function (id){
return cljs.core.swap_BANG_.call(null,collapsed_item_updaters,cljs.core.dissoc,id);
})):(with_let29402[(2)]));
var expand_all = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((3))))))?(with_let29402[(3)] = (function (){
var seq__29405 = cljs.core.seq.call(null,cljs.core.deref.call(null,collapsed_item_updaters));
var chunk__29406 = null;
var count__29407 = (0);
var i__29408 = (0);
while(true){
if((i__29408 < count__29407)){
var vec__29415 = cljs.core._nth.call(null,chunk__29406,i__29408);
var _ = cljs.core.nth.call(null,vec__29415,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29415,(1),null);
set_collapsed_item.call(null,false);


var G__29442 = seq__29405;
var G__29443 = chunk__29406;
var G__29444 = count__29407;
var G__29445 = (i__29408 + (1));
seq__29405 = G__29442;
chunk__29406 = G__29443;
count__29407 = G__29444;
i__29408 = G__29445;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__29405);
if(temp__5753__auto__){
var seq__29405__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29405__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__29405__$1);
var G__29446 = cljs.core.chunk_rest.call(null,seq__29405__$1);
var G__29447 = c__4638__auto__;
var G__29448 = cljs.core.count.call(null,c__4638__auto__);
var G__29449 = (0);
seq__29405 = G__29446;
chunk__29406 = G__29447;
count__29407 = G__29448;
i__29408 = G__29449;
continue;
} else {
var vec__29418 = cljs.core.first.call(null,seq__29405__$1);
var _ = cljs.core.nth.call(null,vec__29418,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29418,(1),null);
set_collapsed_item.call(null,false);


var G__29450 = cljs.core.next.call(null,seq__29405__$1);
var G__29451 = null;
var G__29452 = (0);
var G__29453 = (0);
seq__29405 = G__29450;
chunk__29406 = G__29451;
count__29407 = G__29452;
i__29408 = G__29453;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29402[(3)]));
var collapse_all = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((4))))))?(with_let29402[(4)] = (function (){
var seq__29421 = cljs.core.seq.call(null,cljs.core.deref.call(null,collapsed_item_updaters));
var chunk__29422 = null;
var count__29423 = (0);
var i__29424 = (0);
while(true){
if((i__29424 < count__29423)){
var vec__29431 = cljs.core._nth.call(null,chunk__29422,i__29424);
var _ = cljs.core.nth.call(null,vec__29431,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29431,(1),null);
set_collapsed_item.call(null,true);


var G__29454 = seq__29421;
var G__29455 = chunk__29422;
var G__29456 = count__29423;
var G__29457 = (i__29424 + (1));
seq__29421 = G__29454;
chunk__29422 = G__29455;
count__29423 = G__29456;
i__29424 = G__29457;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__29421);
if(temp__5753__auto__){
var seq__29421__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29421__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__29421__$1);
var G__29458 = cljs.core.chunk_rest.call(null,seq__29421__$1);
var G__29459 = c__4638__auto__;
var G__29460 = cljs.core.count.call(null,c__4638__auto__);
var G__29461 = (0);
seq__29421 = G__29458;
chunk__29422 = G__29459;
count__29423 = G__29460;
i__29424 = G__29461;
continue;
} else {
var vec__29434 = cljs.core.first.call(null,seq__29421__$1);
var _ = cljs.core.nth.call(null,vec__29434,(0),null);
var set_collapsed_item = cljs.core.nth.call(null,vec__29434,(1),null);
set_collapsed_item.call(null,true);


var G__29462 = cljs.core.next.call(null,seq__29421__$1);
var G__29463 = null;
var G__29464 = (0);
var G__29465 = (0);
seq__29421 = G__29462;
chunk__29422 = G__29463;
count__29423 = G__29464;
i__29424 = G__29465;
continue;
}
} else {
return null;
}
}
break;
}
})):(with_let29402[(4)]));
var clear_selected_item_BANG_ = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((5))))))?(with_let29402[(5)] = (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.PersistentVector.EMPTY], null));
})):(with_let29402[(5)]));
var on_search = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((6))))))?(with_let29402[(6)] = nw_calculator.utilities.debounce.call(null,(function (search_term){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__29398_SHARP_){
return nw_calculator.utilities.fuzzy_search.call(null,p1__29398_SHARP_,search_term);
}),cljs.core.vector,new cljs.core.Keyword(null,"name","name",1843675177)),nw_calculator.devcards.sample_data.items))));
}),(100))):(with_let29402[(6)]));
var clear_results_BANG_ = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((7))))))?(with_let29402[(7)] = (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY);
})):(with_let29402[(7)]));
var on_clear = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((8))))))?(with_let29402[(8)] = (function (){
clear_results_BANG_.call(null);

return clear_selected_item_BANG_.call(null);
})):(with_let29402[(8)]));
var on_select = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((9))))))?(with_let29402[(9)] = (function (item_map){
clear_results_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),item_map);
})):(with_let29402[(9)]));
var make_result = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((10))))))?(with_let29402[(10)] = (function (item_map){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map], null)], null);
})):(with_let29402[(10)]));
var make_node = ((((init29403) || (cljs.core.not.call(null,with_let29402.hasOwnProperty((11))))))?(with_let29402[(11)] = (function (p__29437){
var map__29438 = p__29437;
var map__29438__$1 = cljs.core.__destructure_map.call(null,map__29438);
var map__29439 = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__29439__$1 = cljs.core.__destructure_map.call(null,map__29439);
var item_map = map__29439__$1;
var external_url = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"external-url","external-url",-1665502145));
var name = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var root_node_QMARK_ = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"root-node?","root-node?",1770650387));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.item_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"popup-on-hover?","popup-on-hover?",-2068184278),true,new cljs.core.Keyword(null,"item-map","item-map",677069923),item_map,new cljs.core.Keyword(null,"container-props","container-props",-1692729191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white"], null),new cljs.core.Keyword(null,"custom-quantity","custom-quantity",-1300704698),(cljs.core.truth_(root_node_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.basic-input.w-12-imp","input.basic-input.w-12-imp",603518820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"1"], null)], null):null),new cljs.core.Keyword(null,"custom-name","custom-name",1003503291),(cljs.core.truth_(root_node_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),nw_calculator.components.search_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"make-result","make-result",1014199613),make_result,new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for an item \uD83D\uDD0D",new cljs.core.Keyword(null,"default-value","default-value",232220170),name], null),new cljs.core.Keyword(null,"on-search","on-search",-1282068148),on_search,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),on_clear,new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select,new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null),(cljs.core.truth_(external_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),external_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.text-base.fas.fa-external-link-alt","i.text-base.fas.fa-external-link-alt",-447681013)], null)], null):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),external_url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),name], null))], null)], null);
})):(with_let29402[(11)]));
var res29404 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.card_component,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nw_calculator.components.collapsible_tree.component.collapsible_list_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-collapsed-updater","set-collapsed-updater",-1291318937),set_collapsed_updater,new cljs.core.Keyword(null,"unset-collapsed-updater","unset-collapsed-updater",-986631966),unset_collapsed_updater], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.components.collapsible_tree_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree-map","tree-map",-267458478),new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"container-props","container-props",-1692729191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"bg-white","bg-white",-1453241673)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.Keyword(null,"make-node","make-node",1103973934),make_node], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.m-4.w-56","button.button.m-4.w-56",678005164),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),collapse_all], null),"collapse all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.m-4.w-56","button.button.m-4.w-56",678005164),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),expand_all], null),"expand all"], null)], null);
return res29404;
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

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29400","meta29400",-188951478,null)], null);
}));

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.cljs$lang$type = true);

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.cljs$lang$ctorStr = "nw-calculator.devcards.collapsible-tree/t_nw_calculator$devcards$collapsible_tree29399");

(nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"nw-calculator.devcards.collapsible-tree/t_nw_calculator$devcards$collapsible_tree29399");
}));

/**
 * Positional factory function for nw-calculator.devcards.collapsible-tree/t_nw_calculator$devcards$collapsible_tree29399.
 */
nw_calculator.devcards.collapsible_tree.__GT_t_nw_calculator$devcards$collapsible_tree29399 = (function nw_calculator$devcards$collapsible_tree$__GT_t_nw_calculator$devcards$collapsible_tree29399(meta29400){
return (new nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399(meta29400));
});

}

return (new nw_calculator.devcards.collapsible_tree.t_nw_calculator$devcards$collapsible_tree29399(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),cljs.core.first.call(null,nw_calculator.devcards.sample_data.items),new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=collapsible_tree.js.map
