// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12294,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12298 = k12294;
var G__12298__$1 = (((G__12298 instanceof cljs.core.Keyword))?G__12298.fqn:null);
switch (G__12298__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12294,else__4464__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12299){
var vec__12300 = p__12299;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.trie.Wild{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12293){
var self__ = this;
var G__12293__$1 = this;
return (new cljs.core.RecordIter((0),G__12293__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__12303 = (function (coll__4458__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__12303(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12295,other12296){
var self__ = this;
var this12295__$1 = this;
return (((!((other12296 == null)))) && ((((this12295__$1.constructor === other12296.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12295__$1.value,other12296.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12295__$1.__extmap,other12296.__extmap)))))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12294){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12304 = k12294;
var G__12304__$1 = (((G__12304 instanceof cljs.core.Keyword))?G__12304.fqn:null);
switch (G__12304__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12294);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12293){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12305 = cljs.core.keyword_identical_QMARK_;
var expr__12306 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__12308 = cljs.core.cst$kw$value;
var G__12309 = expr__12306;
return (pred__12305.cljs$core$IFn$_invoke$arity$2 ? pred__12305.cljs$core$IFn$_invoke$arity$2(G__12308,G__12309) : pred__12305.call(null,G__12308,G__12309));
})())){
return (new reitit.trie.Wild(G__12293,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12293),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12293){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__12293,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__12297){
var extmap__4501__auto__ = (function (){var G__12310 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12297,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__12297)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12310);
} else {
return G__12310;
}
})();
return (new reitit.trie.Wild(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__12297),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12314,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12318 = k12314;
var G__12318__$1 = (((G__12318 instanceof cljs.core.Keyword))?G__12318.fqn:null);
switch (G__12318__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12314,else__4464__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12319){
var vec__12320 = p__12319;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12320,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12320,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12313){
var self__ = this;
var G__12313__$1 = this;
return (new cljs.core.RecordIter((0),G__12313__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__12323 = (function (coll__4458__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__12323(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12315,other12316){
var self__ = this;
var this12315__$1 = this;
return (((!((other12316 == null)))) && ((((this12315__$1.constructor === other12316.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12315__$1.value,other12316.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12315__$1.__extmap,other12316.__extmap)))))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12314){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12324 = k12314;
var G__12324__$1 = (((G__12324 instanceof cljs.core.Keyword))?G__12324.fqn:null);
switch (G__12324__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12314);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12313){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12325 = cljs.core.keyword_identical_QMARK_;
var expr__12326 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__12328 = cljs.core.cst$kw$value;
var G__12329 = expr__12326;
return (pred__12325.cljs$core$IFn$_invoke$arity$2 ? pred__12325.cljs$core$IFn$_invoke$arity$2(G__12328,G__12329) : pred__12325.call(null,G__12328,G__12329));
})())){
return (new reitit.trie.CatchAll(G__12313,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12313),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12313){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__12313,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__12317){
var extmap__4501__auto__ = (function (){var G__12330 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12317,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__12317)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12330);
} else {
return G__12330;
}
})();
return (new reitit.trie.CatchAll(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__12317),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12334,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12338 = k12334;
var G__12338__$1 = (((G__12338 instanceof cljs.core.Keyword))?G__12338.fqn:null);
switch (G__12338__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12334,else__4464__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12339){
var vec__12340 = p__12339;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12340,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12340,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.trie.Match{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12333){
var self__ = this;
var G__12333__$1 = this;
return (new cljs.core.RecordIter((0),G__12333__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$data], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__12343 = (function (coll__4458__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__12343(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12335,other12336){
var self__ = this;
var this12335__$1 = this;
return (((!((other12336 == null)))) && ((((this12335__$1.constructor === other12336.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.params,other12336.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.data,other12336.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.__extmap,other12336.__extmap)))))))));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$data,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12334){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12344 = k12334;
var G__12344__$1 = (((G__12344 instanceof cljs.core.Keyword))?G__12344.fqn:null);
switch (G__12344__$1) {
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12334);

}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12333){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12345 = cljs.core.keyword_identical_QMARK_;
var expr__12346 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__12348 = cljs.core.cst$kw$params;
var G__12349 = expr__12346;
return (pred__12345.cljs$core$IFn$_invoke$arity$2 ? pred__12345.cljs$core$IFn$_invoke$arity$2(G__12348,G__12349) : pred__12345.call(null,G__12348,G__12349));
})())){
return (new reitit.trie.Match(G__12333,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12350 = cljs.core.cst$kw$data;
var G__12351 = expr__12346;
return (pred__12345.cljs$core$IFn$_invoke$arity$2 ? pred__12345.cljs$core$IFn$_invoke$arity$2(G__12350,G__12351) : pred__12345.call(null,G__12350,G__12351));
})())){
return (new reitit.trie.Match(self__.params,G__12333,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12333),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12333){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__12333,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params,cljs.core.cst$sym$data], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__12337){
var extmap__4501__auto__ = (function (){var G__12352 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12337,cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data], 0));
if(cljs.core.record_QMARK_(G__12337)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12352);
} else {
return G__12352;
}
})();
return (new reitit.trie.Match(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__12337),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__12337),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12356,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12360 = k12356;
var G__12360__$1 = (((G__12360 instanceof cljs.core.Keyword))?G__12360.fqn:null);
switch (G__12360__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12356,else__4464__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12361){
var vec__12362 = p__12361;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.trie.Node{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wilds,self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_all,self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12355){
var self__ = this;
var G__12355__$1 = this;
return (new cljs.core.RecordIter((0),G__12355__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,cljs.core.cst$kw$wilds,cljs.core.cst$kw$catch_DASH_all,cljs.core.cst$kw$params,cljs.core.cst$kw$data], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__12365 = (function (coll__4458__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__12365(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12357,other12358){
var self__ = this;
var this12357__$1 = this;
return (((!((other12358 == null)))) && ((((this12357__$1.constructor === other12358.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12357__$1.children,other12358.children)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12357__$1.wilds,other12358.wilds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12357__$1.catch_all,other12358.catch_all)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12357__$1.params,other12358.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12357__$1.data,other12358.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12357__$1.__extmap,other12358.__extmap)))))))))))))));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$children,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$wilds,null,cljs.core.cst$kw$catch_DASH_all,null,cljs.core.cst$kw$data,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12356){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12366 = k12356;
var G__12366__$1 = (((G__12366 instanceof cljs.core.Keyword))?G__12366.fqn:null);
switch (G__12366__$1) {
case "children":
case "wilds":
case "catch-all":
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12356);

}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12355){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12367 = cljs.core.keyword_identical_QMARK_;
var expr__12368 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__12370 = cljs.core.cst$kw$children;
var G__12371 = expr__12368;
return (pred__12367.cljs$core$IFn$_invoke$arity$2 ? pred__12367.cljs$core$IFn$_invoke$arity$2(G__12370,G__12371) : pred__12367.call(null,G__12370,G__12371));
})())){
return (new reitit.trie.Node(G__12355,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12372 = cljs.core.cst$kw$wilds;
var G__12373 = expr__12368;
return (pred__12367.cljs$core$IFn$_invoke$arity$2 ? pred__12367.cljs$core$IFn$_invoke$arity$2(G__12372,G__12373) : pred__12367.call(null,G__12372,G__12373));
})())){
return (new reitit.trie.Node(self__.children,G__12355,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12374 = cljs.core.cst$kw$catch_DASH_all;
var G__12375 = expr__12368;
return (pred__12367.cljs$core$IFn$_invoke$arity$2 ? pred__12367.cljs$core$IFn$_invoke$arity$2(G__12374,G__12375) : pred__12367.call(null,G__12374,G__12375));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,G__12355,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12376 = cljs.core.cst$kw$params;
var G__12377 = expr__12368;
return (pred__12367.cljs$core$IFn$_invoke$arity$2 ? pred__12367.cljs$core$IFn$_invoke$arity$2(G__12376,G__12377) : pred__12367.call(null,G__12376,G__12377));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__12355,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12378 = cljs.core.cst$kw$data;
var G__12379 = expr__12368;
return (pred__12367.cljs$core$IFn$_invoke$arity$2 ? pred__12367.cljs$core$IFn$_invoke$arity$2(G__12378,G__12379) : pred__12367.call(null,G__12378,G__12379));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__12355,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12355),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$children,self__.children,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$wilds,self__.wilds,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$catch_DASH_all,self__.catch_all,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12355){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__12355,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$children,cljs.core.cst$sym$wilds,cljs.core.cst$sym$catch_DASH_all,cljs.core.cst$sym$params,cljs.core.cst$sym$data], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__12359){
var extmap__4501__auto__ = (function (){var G__12380 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12359,cljs.core.cst$kw$children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wilds,cljs.core.cst$kw$catch_DASH_all,cljs.core.cst$kw$params,cljs.core.cst$kw$data], 0));
if(cljs.core.record_QMARK_(G__12359)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12380);
} else {
return G__12380;
}
})();
return (new reitit.trie.Node(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__12359),cljs.core.cst$kw$wilds.cljs$core$IFn$_invoke$arity$1(G__12359),cljs.core.cst$kw$catch_DASH_all.cljs$core$IFn$_invoke$arity$1(G__12359),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__12359),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__12359),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_12383 = (function (this$,i,max,path){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.match[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4510__auto__.call(null,this$,i,max,path));
} else {
var m__4508__auto__ = (reitit.trie.match["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4508__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_12383(this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_12384 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.view[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.trie.view["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_12384(this$);
}
});

var reitit$trie$Matcher$depth$dyn_12385 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.depth[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.trie.depth["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_12385(this$);
}
});

var reitit$trie$Matcher$length$dyn_12386 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.length[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.trie.length["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_12386(this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_12387 = (function (this$,params,data){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4510__auto__.call(null,this$,params,data));
} else {
var m__4508__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4508__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_12387(this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_12388 = (function (this$,path,matcher){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4510__auto__.call(null,this$,path,matcher));
} else {
var m__4508__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4508__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_12388(this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_12389 = (function (this$,key,end,matcher){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4510__auto__.call(null,this$,key,end,matcher));
} else {
var m__4508__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4508__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_12389(this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_12390 = (function (this$,key,params,data){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4510__auto__.call(null,this$,key,params,data));
} else {
var m__4508__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4508__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_12390(this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_12391 = (function (this$,matchers,ordered_QMARK_){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4510__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__4508__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4508__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_12391(this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_12392 = (function (this$,matcher){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie._pretty[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4510__auto__.call(null,this$,matcher));
} else {
var m__4508__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4508__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_12392(this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_12393 = (function (this$,matcher){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4510__auto__.call(null,this$,matcher));
} else {
var m__4508__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4508__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_12393(this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,cljs.core.cst$kw$params,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4298__auto__ = cljs.core.count(s1);
var y__4299__auto__ = cljs.core.count(s2);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__12394 = (i + (1));
i = G__12394;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5751__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__12395){
var map__12396 = p__12395;
var map__12396__$1 = cljs.core.__destructure_map(map__12396);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12396__$1,cljs.core.cst$kw$syntax,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$bracket,null], null), null));
var bracket_QMARK_ = cljs.core.cst$kw$bracket.cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__4210__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__4210__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4212__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_unclosed_DASH_brackets,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__12397 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__12398 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__12399 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__12397;
from = G__12398;
to = G__12399;
continue;
} else {
var G__12400 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__12401 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__12402 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__12400;
from = G__12401;
to = G__12402;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__4210__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4212__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__12403 = ss;
var G__12404 = from;
var G__12405 = (to + (1));
ss = G__12403;
from = G__12404;
to = G__12405;
continue;
} else {
var G__12406 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__12407 = cljs.core.long$(to_SINGLEQUOTE_);
var G__12408 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__12406;
from = G__12407;
to = G__12408;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__4210__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__12409 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__12410 = cljs.core.long$(to_SINGLEQUOTE_);
var G__12411 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__12409;
from = G__12410;
to = G__12411;
continue;
} else {
var G__12412 = ss;
var G__12413 = from;
var G__12414 = (to + (1));
ss = G__12412;
from = G__12413;
to = G__12414;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__12415,p__12416){
var vec__12417 = p__12415;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417,(0),null);
var p1s = vec__12417;
var vec__12420 = p__12416;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(0),null);
var p2s = vec__12420;
var _split = (function (p){
var temp__5751__auto__ = (function (){var and__4210__auto__ = p;
if(cljs.core.truth_(and__4210__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__12423){
var vec__12424 = p__12423;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12424,(0),null);
var pps = vec__12424;
var i = (function (){var and__4210__auto__ = p;
if(cljs.core.truth_(and__4210__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4210__auto__ = i;
if(cljs.core.truth_(and__4210__auto__)){
return (i > (0));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__12427){
var vec__12428 = p__12427;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(0),null);
var ps = vec__12428;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5751__auto__ = (function (){var and__4210__auto__ = typeof p1 === 'string';
if(and__4210__auto__){
var and__4210__auto____$1 = typeof p2 === 'string';
if(and__4210__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cp = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__12431 = reitit.trie._slice_start(parts1,parts2);
var vec__12434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12431,(0),null);
var seq__12435 = cljs.core.seq(vec__12434);
var first__12436 = cljs.core.first(seq__12435);
var seq__12435__$1 = cljs.core.next(seq__12435);
var s1 = first__12436;
var ss1 = seq__12435__$1;
var vec__12437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12431,(1),null);
var seq__12438 = cljs.core.seq(vec__12437);
var first__12439 = cljs.core.first(seq__12438);
var seq__12438__$1 = cljs.core.next(seq__12438);
var s2 = first__12439;
var ss2 = seq__12438__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__12440 = reitit.trie._slice_end(s1,ss1);
var G__12441 = reitit.trie._slice_end(s2,ss2);
parts1 = G__12440;
parts2 = G__12441;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__12442 = ss1;
var G__12443 = ss2;
parts1 = G__12442;
parts2 = G__12443;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_(reitit.trie.split_path(path1,opts),reitit.trie.split_path(path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$children,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$wilds,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$catch_DASH_all,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__12444,fp,params,data){
var vec__12445 = p__12444;
var seq__12446 = cljs.core.seq(vec__12445);
var first__12447 = cljs.core.first(seq__12446);
var seq__12446__$1 = cljs.core.next(seq__12446);
var path = first__12447;
var ps = seq__12446__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.cst$kw$data,data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_following_DASH_parameters,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,fp,cljs.core.cst$kw$parameters,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wilds,path], null),(function (n){
var G__12448 = (function (){var or__4212__auto__ = n;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__12449 = ps;
var G__12450 = fp;
var G__12451 = params;
var G__12452 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__12448,G__12449,G__12450,G__12451,G__12452) : reitit.trie._insert.call(null,G__12448,G__12449,G__12450,G__12451,G__12452));
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_all,path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$data,data], null))):((cljs.core.empty_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__4212__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__12453){
var vec__12454 = p__12453;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454,(1),null);
var temp__5751__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5751__auto__)){
var cp = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__12457 = n;
var G__12458 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__12459 = fp;
var G__12460 = params;
var G__12461 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__12457,G__12458,G__12459,G__12460,G__12461) : reitit.trie._insert.call(null,G__12457,G__12458,G__12459,G__12460,G__12461));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,((cp).length));
var n_SINGLEQUOTE_ = (function (){var G__12462 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__12463 = ps;
var G__12464 = fp;
var G__12465 = params;
var G__12466 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__12462,G__12463,G__12464,G__12465,G__12466) : reitit.trie._insert.call(null,G__12462,G__12463,G__12464,G__12465,G__12466));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__12467 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__12468 = null;
var G__12469 = null;
var G__12470 = null;
var G__12471 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__12467,G__12468,G__12469,G__12470,G__12471) : reitit.trie._insert.call(null,G__12467,G__12468,G__12469,G__12470,G__12471));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$children,(function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,path], null),(function (){var G__12472 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__12473 = ps;
var G__12474 = fp;
var G__12475 = params;
var G__12476 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__12472,G__12473,G__12474,G__12475,G__12476) : reitit.trie._insert.call(null,G__12472,G__12473,G__12474,G__12475,G__12476));
})());
}
})()
))));
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,""], null));
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,cljs.core.cst$kw$data),child], 0)),cljs.core.cst$kw$children,cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie12477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie12477 = (function (meta12478){
this.meta12478 = meta12478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie12477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12479,meta12478__$1){
var self__ = this;
var _12479__$1 = this;
return (new reitit.trie.t_reitit$trie12477(meta12478__$1));
}));

(reitit.trie.t_reitit$trie12477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12479){
var self__ = this;
var _12479__$1 = this;
return self__.meta12478;
}));

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie12480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie12480 = (function (meta12478,_,params,data,match,meta12481){
this.meta12478 = meta12478;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta12481 = meta12481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie12480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12482,meta12481__$1){
var self__ = this;
var _12482__$1 = this;
return (new reitit.trie.t_reitit$trie12480(self__.meta12478,self__._,self__.params,self__.data,self__.match,meta12481__$1));
}));

(reitit.trie.t_reitit$trie12480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12482){
var self__ = this;
var _12482__$1 = this;
return self__.meta12481;
}));

(reitit.trie.t_reitit$trie12480.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie12480.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie12480.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie12480.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie12480.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie12480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12478,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie12477], null)),cljs.core.cst$sym$params,cljs.core.cst$sym$data,cljs.core.cst$sym$match,cljs.core.cst$sym$meta12481], null);
}));

(reitit.trie.t_reitit$trie12480.cljs$lang$type = true);

(reitit.trie.t_reitit$trie12480.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie12480");

(reitit.trie.t_reitit$trie12480.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.trie/t_reitit$trie12480");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie12480.
 */
reitit.trie.__GT_t_reitit$trie12480 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie12480(meta12478__$1,___$2,params__$1,data__$1,match__$1,meta12481){
return (new reitit.trie.t_reitit$trie12480(meta12478__$1,___$2,params__$1,data__$1,match__$1,meta12481));
});

}

return (new reitit.trie.t_reitit$trie12480(self__.meta12478,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie12483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie12483 = (function (meta12478,_,path,matcher,size,meta12484){
this.meta12478 = meta12478;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta12484 = meta12484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie12483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12485,meta12484__$1){
var self__ = this;
var _12485__$1 = this;
return (new reitit.trie.t_reitit$trie12483(self__.meta12478,self__._,self__.path,self__.matcher,self__.size,meta12484__$1));
}));

(reitit.trie.t_reitit$trie12483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12485){
var self__ = this;
var _12485__$1 = this;
return self__.meta12484;
}));

(reitit.trie.t_reitit$trie12483.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie12483.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__12505 = (j + (1));
j = G__12505;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie12483.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie12483.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie12483.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
}));

(reitit.trie.t_reitit$trie12483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12478,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie12477], null)),cljs.core.cst$sym$path,cljs.core.cst$sym$matcher,cljs.core.cst$sym$size,cljs.core.cst$sym$meta12484], null);
}));

(reitit.trie.t_reitit$trie12483.cljs$lang$type = true);

(reitit.trie.t_reitit$trie12483.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie12483");

(reitit.trie.t_reitit$trie12483.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.trie/t_reitit$trie12483");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie12483.
 */
reitit.trie.__GT_t_reitit$trie12483 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie12483(meta12478__$1,___$2,path__$1,matcher__$1,size__$1,meta12484){
return (new reitit.trie.t_reitit$trie12483(meta12478__$1,___$2,path__$1,matcher__$1,size__$1,meta12484));
});

}

return (new reitit.trie.t_reitit$trie12483(self__.meta12478,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie12486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie12486 = (function (meta12478,_,key,end,matcher,meta12487){
this.meta12478 = meta12478;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta12487 = meta12487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie12486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12488,meta12487__$1){
var self__ = this;
var _12488__$1 = this;
return (new reitit.trie.t_reitit$trie12486(self__.meta12478,self__._,self__.key,self__.end,self__.matcher,meta12487__$1));
}));

(reitit.trie.t_reitit$trie12486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12488){
var self__ = this;
var _12488__$1 = this;
return self__.meta12487;
}));

(reitit.trie.t_reitit$trie12486.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie12486.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5751__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__12494 = cljs.core._EQ_;
var expr__12495 = c;
if(cljs.core.truth_((pred__12494.cljs$core$IFn$_invoke$arity$2 ? pred__12494.cljs$core$IFn$_invoke$arity$2(self__.end,expr__12495) : pred__12494.call(null,self__.end,expr__12495)))){
var temp__5751__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__12497 = "%";
var G__12498 = expr__12495;
return (pred__12494.cljs$core$IFn$_invoke$arity$2 ? pred__12494.cljs$core$IFn$_invoke$arity$2(G__12497,G__12498) : pred__12494.call(null,G__12497,G__12498));
})())){
var G__12506 = true;
var G__12507 = (j + (1));
percent_QMARK_ = G__12506;
j = G__12507;
continue;
} else {
var G__12508 = percent_QMARK_;
var G__12509 = (j + (1));
percent_QMARK_ = G__12508;
j = G__12509;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie12486.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie12486.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie12486.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie12486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12478,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie12477], null)),cljs.core.cst$sym$key,cljs.core.cst$sym$end,cljs.core.cst$sym$matcher,cljs.core.cst$sym$meta12487], null);
}));

(reitit.trie.t_reitit$trie12486.cljs$lang$type = true);

(reitit.trie.t_reitit$trie12486.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie12486");

(reitit.trie.t_reitit$trie12486.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.trie/t_reitit$trie12486");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie12486.
 */
reitit.trie.__GT_t_reitit$trie12486 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie12486(meta12478__$1,___$2,key__$1,end__$1,matcher__$1,meta12487){
return (new reitit.trie.t_reitit$trie12486(meta12478__$1,___$2,key__$1,end__$1,matcher__$1,meta12487));
});

}

return (new reitit.trie.t_reitit$trie12486(self__.meta12478,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie12499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie12499 = (function (meta12478,_,key,params,data,match,meta12500){
this.meta12478 = meta12478;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta12500 = meta12500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie12499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12501,meta12500__$1){
var self__ = this;
var _12501__$1 = this;
return (new reitit.trie.t_reitit$trie12499(self__.meta12478,self__._,self__.key,self__.params,self__.data,self__.match,meta12500__$1));
}));

(reitit.trie.t_reitit$trie12499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12501){
var self__ = this;
var _12501__$1 = this;
return self__.meta12500;
}));

(reitit.trie.t_reitit$trie12499.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie12499.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie12499.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie12499.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie12499.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie12499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12478,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie12477], null)),cljs.core.cst$sym$key,cljs.core.cst$sym$params,cljs.core.cst$sym$data,cljs.core.cst$sym$match,cljs.core.cst$sym$meta12500], null);
}));

(reitit.trie.t_reitit$trie12499.cljs$lang$type = true);

(reitit.trie.t_reitit$trie12499.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie12499");

(reitit.trie.t_reitit$trie12499.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.trie/t_reitit$trie12499");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie12499.
 */
reitit.trie.__GT_t_reitit$trie12499 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie12499(meta12478__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta12500){
return (new reitit.trie.t_reitit$trie12499(meta12478__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta12500));
});

}

return (new reitit.trie.t_reitit$trie12499(self__.meta12478,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie12502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie12502 = (function (meta12478,_,matchers,ordered_QMARK_,size,meta12503){
this.meta12478 = meta12478;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta12503 = meta12503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie12502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12504,meta12503__$1){
var self__ = this;
var _12504__$1 = this;
return (new reitit.trie.t_reitit$trie12502(self__.meta12478,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta12503__$1));
}));

(reitit.trie.t_reitit$trie12502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12504){
var self__ = this;
var _12504__$1 = this;
return self__.meta12503;
}));

(reitit.trie.t_reitit$trie12502.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie12502.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4212__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__12510 = (j + (1));
j = G__12510;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie12502.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie12502.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie12502.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie12502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12478,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie12477], null)),cljs.core.cst$sym$matchers,cljs.core.cst$sym$ordered_QMARK_,cljs.core.cst$sym$size,cljs.core.cst$sym$meta12503], null);
}));

(reitit.trie.t_reitit$trie12502.cljs$lang$type = true);

(reitit.trie.t_reitit$trie12502.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie12502");

(reitit.trie.t_reitit$trie12502.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.trie/t_reitit$trie12502");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie12502.
 */
reitit.trie.__GT_t_reitit$trie12502 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie12502(meta12478__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta12503){
return (new reitit.trie.t_reitit$trie12502(meta12478__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta12503));
});

}

return (new reitit.trie.t_reitit$trie12502(self__.meta12478,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
}));

(reitit.trie.t_reitit$trie12477.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5751__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.__GT_Match(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie12477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12478], null);
}));

(reitit.trie.t_reitit$trie12477.cljs$lang$type = true);

(reitit.trie.t_reitit$trie12477.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie12477");

(reitit.trie.t_reitit$trie12477.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.trie/t_reitit$trie12477");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie12477.
 */
reitit.trie.__GT_t_reitit$trie12477 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie12477(meta12478){
return (new reitit.trie.t_reitit$trie12477(meta12478));
});

}

return (new reitit.trie.t_reitit$trie12477(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__12512 = arguments.length;
switch (G__12512) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__12513){
var vec__12514 = p__12513;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__12517){
var map__12518 = p__12517;
var map__12518__$1 = cljs.core.__destructure_map(map__12518);
var opts = map__12518__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12518__$1,cljs.core.cst$kw$reitit$trie_SLASH_parameters,reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__12519 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__12519) : parameters.call(null,G__12519));
})();
return reitit.trie._insert((function (){var or__4212__auto__ = node;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__12522 = arguments.length;
switch (G__12522) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__12523,compiler,cp){
var map__12524 = p__12523;
var map__12524__$1 = cljs.core.__destructure_map(map__12524);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,cljs.core.cst$kw$data);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12524__$1,cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,cljs.core.cst$kw$children);
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,cljs.core.cst$kw$wilds);
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,cljs.core.cst$kw$catch_DASH_all);
var ends = (function (p__12525){
var map__12526 = p__12525;
var map__12526__$1 = cljs.core.__destructure_map(map__12526);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12526__$1,cljs.core.cst$kw$children);
var or__4212__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__12527 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12527,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__12527;
}
})(),(function (){var iter__4611__auto__ = (function reitit$trie$iter__12528(s__12529){
return (new cljs.core.LazySeq(null,(function (){
var s__12529__$1 = s__12529;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12529__$1);
if(temp__5753__auto__){
var s__12529__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12529__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__12529__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__12531 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__12530 = (0);
while(true){
if((i__12530 < size__4610__auto__)){
var vec__12532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__12530);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(1),null);
cljs.core.chunk_append(b__12531,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__12559 = (i__12530 + (1));
i__12530 = G__12559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12531),reitit$trie$iter__12528(cljs.core.chunk_rest(s__12529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12531),null);
}
} else {
var vec__12535 = cljs.core.first(s__12529__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__12528(cljs.core.rest(s__12529__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(children);
})()),(function (){var iter__4611__auto__ = (function reitit$trie$iter__12538(s__12539){
return (new cljs.core.LazySeq(null,(function (){
var s__12539__$1 = s__12539;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12539__$1);
if(temp__5753__auto__){
var s__12539__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12539__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__12539__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__12541 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__12540 = (0);
while(true){
if((i__12540 < size__4610__auto__)){
var vec__12542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__12540);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(1),null);
cljs.core.chunk_append(b__12541,(function (){var pv = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_multiple_DASH_terminators,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$terminators,ends__$1,cljs.core.cst$kw$path,reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__12560 = (i__12540 + (1));
i__12540 = G__12560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12541),reitit$trie$iter__12538(cljs.core.chunk_rest(s__12539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12541),null);
}
} else {
var vec__12545 = cljs.core.first(s__12539__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(1),null);
return cljs.core.cons((function (){var pv = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_multiple_DASH_terminators,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$terminators,ends__$1,cljs.core.cst$kw$path,reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__12538(cljs.core.rest(s__12539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(wilds);
})()),(function (){var iter__4611__auto__ = (function reitit$trie$iter__12548(s__12549){
return (new cljs.core.LazySeq(null,(function (){
var s__12549__$1 = s__12549;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12549__$1);
if(temp__5753__auto__){
var s__12549__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12549__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__12549__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__12551 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__12550 = (0);
while(true){
if((i__12550 < size__4610__auto__)){
var vec__12552 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__12550);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(1),null);
cljs.core.chunk_append(b__12551,reitit.trie.catch_all_matcher(compiler,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p),params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(c)));

var G__12561 = (i__12550 + (1));
i__12550 = G__12561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12551),reitit$trie$iter__12548(cljs.core.chunk_rest(s__12549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12551),null);
}
} else {
var vec__12555 = cljs.core.first(s__12549__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12555,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12555,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p),params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__12548(cljs.core.rest(s__12549__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__12563 = arguments.length;
switch (G__12563) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__12566 = arguments.length;
switch (G__12566) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);

