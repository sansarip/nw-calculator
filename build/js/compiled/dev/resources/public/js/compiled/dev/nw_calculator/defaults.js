// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.defaults');
goog.require('cljs.core');
goog.require('compound2.core');
nw_calculator.defaults.items_index = (function (){var pi93756 = compound2.core.indexer.call(null,cljs.core.merge.call(null,compound2.core.primary_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"by-id","by-id",-2129473981),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"one-to-one","one-to-one",-984522312),new cljs.core.Keyword(null,"kfn","kfn",-911220526),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-conflict","on-conflict",1595391642),(function (a,_){
return a;
})], null)));
if((((!((pi93756 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pi93756.compound2$core$PrimaryIndex$))))?true:(((!pi93756.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,compound2.core.PrimaryIndex,pi93756):false)):cljs.core.native_satisfies_QMARK_.call(null,compound2.core.PrimaryIndex,pi93756))){
} else {
throw (new Error(["Assert failed: ","Firsi index musi be a primary index","\n","(clojure.core/satisfies? compound2.core/PrimaryIndex pi93756)"].join('')));
}

return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("compound2.core","add-items","compound2.core/add-items",-1582321840,null),(function (m93758,xs__10020__auto__){
var px93757 = compound2.core.before.call(null,pi93756,cljs.core.get.call(null,m93758,compound2.core.id.call(null,pi93756)));
var G__93767 = xs__10020__auto__;
var vec__93768 = G__93767;
var seq__93769 = cljs.core.seq.call(null,vec__93768);
var first__93770 = cljs.core.first.call(null,seq__93769);
var seq__93769__$1 = cljs.core.next.call(null,seq__93769);
var x93759 = first__93770;
var more__10021__auto__ = seq__93769__$1;
var xs__10020__auto____$1 = vec__93768;
var px93757__$1 = px93757;
var G__93767__$1 = G__93767;
while(true){
var px93757__$2 = px93757__$1;
var vec__93771 = G__93767__$1;
var seq__93772 = cljs.core.seq.call(null,vec__93771);
var first__93773 = cljs.core.first.call(null,seq__93772);
var seq__93772__$1 = cljs.core.next.call(null,seq__93772);
var x93759__$1 = first__93773;
var more__10021__auto____$1 = seq__93772__$1;
var xs__10020__auto____$2 = vec__93771;
if(cljs.core.seq.call(null,xs__10020__auto____$2)){
var k__10022__auto__ = compound2.core.extract_key.call(null,pi93756,x93759__$1);
var ex93761 = compound2.core.get_by_key.call(null,pi93756,px93757__$2,k__10022__auto__);
if(cljs.core.truth_(ex93761)){
var new93762 = compound2.core.on_conflict.call(null,pi93756,ex93761,x93759__$1);
var G__93784 = compound2.core.index.call(null,pi93756,px93757__$2,k__10022__auto__,new93762);
var G__93785 = more__10021__auto____$1;
px93757__$1 = G__93784;
G__93767__$1 = G__93785;
continue;
} else {
var G__93786 = compound2.core.index.call(null,pi93756,px93757__$2,k__10022__auto__,x93759__$1);
var G__93787 = more__10021__auto____$1;
px93757__$1 = G__93786;
G__93767__$1 = G__93787;
continue;
}
} else {
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id.call(null,pi93756),compound2.core.after.call(null,pi93756,px93757__$2)]),cljs.core.meta.call(null,m93758));
}
break;
}
}),new cljs.core.Symbol("compound2.core","remove-keys","compound2.core/remove-keys",-384447827,null),(function (m93758,ks__10023__auto__){
var px93757 = compound2.core.before.call(null,pi93756,cljs.core.get.call(null,m93758,compound2.core.id.call(null,pi93756)));
var G__93777 = ks__10023__auto__;
var vec__93778 = G__93777;
var seq__93779 = cljs.core.seq.call(null,vec__93778);
var first__93780 = cljs.core.first.call(null,seq__93779);
var seq__93779__$1 = cljs.core.next.call(null,seq__93779);
var k93760 = first__93780;
var more__10021__auto__ = seq__93779__$1;
var ks__10023__auto____$1 = vec__93778;
var px93757__$1 = px93757;
var G__93777__$1 = G__93777;
while(true){
var px93757__$2 = px93757__$1;
var vec__93781 = G__93777__$1;
var seq__93782 = cljs.core.seq.call(null,vec__93781);
var first__93783 = cljs.core.first.call(null,seq__93782);
var seq__93782__$1 = cljs.core.next.call(null,seq__93782);
var k93760__$1 = first__93783;
var more__10021__auto____$1 = seq__93782__$1;
var ks__10023__auto____$2 = vec__93781;
if(cljs.core.seq.call(null,ks__10023__auto____$2)){
var temp__5751__auto__ = compound2.core.get_by_key.call(null,pi93756,px93757__$2,k93760__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ex93761 = temp__5751__auto__;
var G__93788 = compound2.core.unindex.call(null,pi93756,px93757__$2,k93760__$1,ex93761);
var G__93789 = more__10021__auto____$1;
px93757__$1 = G__93788;
G__93777__$1 = G__93789;
continue;
} else {
var G__93790 = px93757__$2;
var G__93791 = more__10021__auto____$1;
px93757__$1 = G__93790;
G__93777__$1 = G__93791;
continue;
}
} else {
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([compound2.core.id.call(null,pi93756),compound2.core.after.call(null,pi93756,px93757__$2)]),cljs.core.meta.call(null,m93758));
}
break;
}
}),new cljs.core.Symbol("compound2.core","items","compound2.core/items",493606175,null),(function (m93758){
return compound2.core.get_all.call(null,pi93756,cljs.core.get.call(null,m93758,compound2.core.id.call(null,pi93756)));
})], null));
})();
nw_calculator.defaults.empty_item = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.PersistentVector.EMPTY], null);
nw_calculator.defaults.empty_selected_item = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),nw_calculator.defaults.empty_item,new cljs.core.Keyword(null,"selected-options","selected-options",1306833224),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"quantity-multiplier","quantity-multiplier",-252611370),(1)], null);
nw_calculator.defaults.default_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"items","items",1031954938),nw_calculator.defaults.items_index,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw_calculator.defaults.empty_selected_item], null),new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.PersistentVector.EMPTY], null);

//# sourceMappingURL=defaults.js.map
