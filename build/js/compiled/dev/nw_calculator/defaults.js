// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi75270 = compound2.core.indexer.call(null,cljs.core.merge.call(null,compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"by-id","by-id",-2129473981),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"one-to-one","one-to-one",-984522312),new cljs.core.Keyword(null,"kfn","kfn",-911220526),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-conflict","on-conflict",1595391642),(function (a,_){
return a;
})], null)));
if((((!((pi75270 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi75270.compound2$core$PrimaryIndex$))))?true:(((!pi75270.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,compound2.core.PrimaryIndex,pi75270):false)):cljs.core.native_satisfies_QMARK_.call(null,compound2.core.PrimaryIndex,pi75270))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi75270)"].join('')));
}

return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("compound2.core","add-items","compound2.core/add-items",-1582321840,null),(function (m75272,xs__10020__auto__){
var px75271 = compound2.core.before.call(null,pi75270,cljs.core.get.call(null,m75272,compound2.core.id.call(null,pi75270)));
var G__75281 = xs__10020__auto__;
var vec__75282 = G__75281;
var seq__75283 = cljs.core.seq.call(null,vec__75282);
var first__75284 = cljs.core.first.call(null,seq__75283);
var seq__75283__$1 = cljs.core.next.call(null,seq__75283);
var x75273 = first__75284;
var more__10021__auto__ = seq__75283__$1;
var xs__10020__auto____$1 = vec__75282;
var px75271__$1 = px75271;
var G__75281__$1 = G__75281;
while(true){
var px75271__$2 = px75271__$1;
var vec__75285 = G__75281__$1;
var seq__75286 = cljs.core.seq.call(null,vec__75285);
var first__75287 = cljs.core.first.call(null,seq__75286);
var seq__75286__$1 = cljs.core.next.call(null,seq__75286);
var x75273__$1 = first__75287;
var more__10021__auto____$1 = seq__75286__$1;
var xs__10020__auto____$2 = vec__75285;
if(cljs.core.seq.call(null,xs__10020__auto____$2)){
var k__10022__auto__ = compound2.core.extract_key.call(null,pi75270,x75273__$1);
var ex75275 = compound2.core.get_by_key.call(null,pi75270,px75271__$2,k__10022__auto__);
if(cljs.core.truth_(ex75275)){
var new75276 = compound2.core.on_conflict.call(null,pi75270,ex75275,x75273__$1);
var G__75298 = compound2.core.index.call(null,pi75270,px75271__$2,k__10022__auto__,new75276);
var G__75299 = more__10021__auto____$1;
px75271__$1 = G__75298;
G__75281__$1 = G__75299;
continue;
} else {
var G__75300 = compound2.core.index.call(null,pi75270,px75271__$2,k__10022__auto__,x75273__$1);
var G__75301 = more__10021__auto____$1;
px75271__$1 = G__75300;
G__75281__$1 = G__75301;
continue;
}
} else {
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id.call(null,pi75270),compound2.core.after.call(null,pi75270,px75271__$2)]),cljs.core.meta.call(null,m75272));
}
break;
}
}),new cljs.core.Symbol("compound2.core","remove-keys","compound2.core/remove-keys",-384447827,null),(function (m75272,ks__10023__auto__){
var px75271 = compound2.core.before.call(null,pi75270,cljs.core.get.call(null,m75272,compound2.core.id.call(null,pi75270)));
var G__75291 = ks__10023__auto__;
var vec__75292 = G__75291;
var seq__75293 = cljs.core.seq.call(null,vec__75292);
var first__75294 = cljs.core.first.call(null,seq__75293);
var seq__75293__$1 = cljs.core.next.call(null,seq__75293);
var k75274 = first__75294;
var more__10021__auto__ = seq__75293__$1;
var ks__10023__auto____$1 = vec__75292;
var px75271__$1 = px75271;
var G__75291__$1 = G__75291;
while(true){
var px75271__$2 = px75271__$1;
var vec__75295 = G__75291__$1;
var seq__75296 = cljs.core.seq.call(null,vec__75295);
var first__75297 = cljs.core.first.call(null,seq__75296);
var seq__75296__$1 = cljs.core.next.call(null,seq__75296);
var k75274__$1 = first__75297;
var more__10021__auto____$1 = seq__75296__$1;
var ks__10023__auto____$2 = vec__75295;
if(cljs.core.seq.call(null,ks__10023__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key.call(null,pi75270,px75271__$2,k75274__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex75275 = temp__5751__auto__;
var G__75302 = compound2.core.unindex.call(null,pi75270,px75271__$2,k75274__$1,ex75275);
var G__75303 = more__10021__auto____$1;
px75271__$1 = G__75302;
G__75291__$1 = G__75303;
continue;
} else {
var G__75304 = px75271__$2;
var G__75305 = more__10021__auto____$1;
px75271__$1 = G__75304;
G__75291__$1 = G__75305;
continue;
}
} else {
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id.call(null,pi75270),compound2.core.after.call(null,pi75270,px75271__$2)]),cljs.core.meta.call(null,m75272));
}
break;
}
}),new cljs.core.Symbol("compound2.core","items","compound2.core/items",493606175,null),(function (m75272){
return compound2.core.get_all.call(null,pi75270,cljs.core.get.call(null,m75272,compound2.core.id.call(null,pi75270)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),nw_calculator.defaults.empty_item,new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370),(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"items","items",1031954938),nw_calculator.defaults.items_index,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.PersistentVector.EMPTY], null);

//# sourceMappingURL=defaults.js.map
