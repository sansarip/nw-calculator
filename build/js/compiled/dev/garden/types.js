// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('garden.types');
goog.require('cljs.core');

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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k28724,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__28728 = k28724;
var G__28728__$1 = (((G__28728 instanceof cljs.core.Keyword))?G__28728.fqn:null);
switch (G__28728__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28724,else__4464__auto__);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__28729){
var vec__28730 = p__28729;
var k__4485__auto__ = cljs.core.nth.call(null,vec__28730,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__28730,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#garden.types.CSSUnit{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28723){
var self__ = this;
var G__28723__$1 = this;
return (new cljs.core.RecordIter((0),G__28723__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28725,other28726){
var self__ = this;
var this28725__$1 = this;
return (((!((other28726 == null)))) && ((((this28725__$1.constructor === other28726.constructor)) && (((cljs.core._EQ_.call(null,this28725__$1.unit,other28726.unit)) && (((cljs.core._EQ_.call(null,this28725__$1.magnitude,other28726.magnitude)) && (cljs.core._EQ_.call(null,this28725__$1.__extmap,other28726.__extmap)))))))));
}));

(garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k28724){
var self__ = this;
var this__4468__auto____$1 = this;
var G__28733 = k28724;
var G__28733__$1 = (((G__28733 instanceof cljs.core.Keyword))?G__28733.fqn:null);
switch (G__28733__$1) {
case "unit":
case "magnitude":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k28724);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__28723){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__28734 = cljs.core.keyword_identical_QMARK_;
var expr__28735 = k__4470__auto__;
if(cljs.core.truth_(pred__28734.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__28735))){
return (new garden.types.CSSUnit(G__28723,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28734.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__28735))){
return (new garden.types.CSSUnit(self__.unit,G__28723,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__28723),null));
}
}
}));

(garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__28723){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__28723,self__.__extmap,self__.__hash));
}));

(garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
}));

(garden.types.CSSUnit.cljs$lang$type = true);

(garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"garden.types/CSSUnit",null,(1),null));
}));

(garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"garden.types/CSSUnit");
}));

/**
 * Positional factory function for garden.types/CSSUnit.
 */
garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for garden.types/CSSUnit, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__28727){
var extmap__4501__auto__ = (function (){var G__28737 = cljs.core.dissoc.call(null,G__28727,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
if(cljs.core.record_QMARK_.call(null,G__28727)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28737);
} else {
return G__28737;
}
})();
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__28727),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__28727),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k28741,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__28745 = k28741;
var G__28745__$1 = (((G__28745 instanceof cljs.core.Keyword))?G__28745.fqn:null);
switch (G__28745__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28741,else__4464__auto__);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__28746){
var vec__28747 = p__28746;
var k__4485__auto__ = cljs.core.nth.call(null,vec__28747,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__28747,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#garden.types.CSSFunction{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28740){
var self__ = this;
var G__28740__$1 = this;
return (new cljs.core.RecordIter((0),G__28740__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28742,other28743){
var self__ = this;
var this28742__$1 = this;
return (((!((other28743 == null)))) && ((((this28742__$1.constructor === other28743.constructor)) && (((cljs.core._EQ_.call(null,this28742__$1.f,other28743.f)) && (((cljs.core._EQ_.call(null,this28742__$1.args,other28743.args)) && (cljs.core._EQ_.call(null,this28742__$1.__extmap,other28743.__extmap)))))))));
}));

(garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k28741){
var self__ = this;
var this__4468__auto____$1 = this;
var G__28750 = k28741;
var G__28750__$1 = (((G__28750 instanceof cljs.core.Keyword))?G__28750.fqn:null);
switch (G__28750__$1) {
case "f":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k28741);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__28740){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__28751 = cljs.core.keyword_identical_QMARK_;
var expr__28752 = k__4470__auto__;
if(cljs.core.truth_(pred__28751.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__28752))){
return (new garden.types.CSSFunction(G__28740,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28751.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__28752))){
return (new garden.types.CSSFunction(self__.f,G__28740,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__28740),null));
}
}
}));

(garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__28740){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__28740,self__.__extmap,self__.__hash));
}));

(garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(garden.types.CSSFunction.cljs$lang$type = true);

(garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"garden.types/CSSFunction",null,(1),null));
}));

(garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"garden.types/CSSFunction");
}));

/**
 * Positional factory function for garden.types/CSSFunction.
 */
garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(f,args){
return (new garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for garden.types/CSSFunction, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__28744){
var extmap__4501__auto__ = (function (){var G__28754 = cljs.core.dissoc.call(null,G__28744,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__28744)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28754);
} else {
return G__28754;
}
})();
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__28744),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__28744),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k28758,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__28762 = k28758;
var G__28762__$1 = (((G__28762 instanceof cljs.core.Keyword))?G__28762.fqn:null);
switch (G__28762__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28758,else__4464__auto__);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__28763){
var vec__28764 = p__28763;
var k__4485__auto__ = cljs.core.nth.call(null,vec__28764,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__28764,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#garden.types.CSSAtRule{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28757){
var self__ = this;
var G__28757__$1 = this;
return (new cljs.core.RecordIter((0),G__28757__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28759,other28760){
var self__ = this;
var this28759__$1 = this;
return (((!((other28760 == null)))) && ((((this28759__$1.constructor === other28760.constructor)) && (((cljs.core._EQ_.call(null,this28759__$1.identifier,other28760.identifier)) && (((cljs.core._EQ_.call(null,this28759__$1.value,other28760.value)) && (cljs.core._EQ_.call(null,this28759__$1.__extmap,other28760.__extmap)))))))));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k28758){
var self__ = this;
var this__4468__auto____$1 = this;
var G__28767 = k28758;
var G__28767__$1 = (((G__28767 instanceof cljs.core.Keyword))?G__28767.fqn:null);
switch (G__28767__$1) {
case "identifier":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k28758);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__28757){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__28768 = cljs.core.keyword_identical_QMARK_;
var expr__28769 = k__4470__auto__;
if(cljs.core.truth_(pred__28768.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__28769))){
return (new garden.types.CSSAtRule(G__28757,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28768.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__28769))){
return (new garden.types.CSSAtRule(self__.identifier,G__28757,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__28757),null));
}
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__28757){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__28757,self__.__extmap,self__.__hash));
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(garden.types.CSSAtRule.cljs$lang$type = true);

(garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"garden.types/CSSAtRule",null,(1),null));
}));

(garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"garden.types/CSSAtRule");
}));

/**
 * Positional factory function for garden.types/CSSAtRule.
 */
garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for garden.types/CSSAtRule, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__28761){
var extmap__4501__auto__ = (function (){var G__28771 = cljs.core.dissoc.call(null,G__28761,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__28761)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28771);
} else {
return G__28771;
}
})();
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__28761),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__28761),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
});


//# sourceMappingURL=types.js.map
