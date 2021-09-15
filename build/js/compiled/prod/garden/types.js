// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('garden.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');

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

(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12092,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12096 = k12092;
var G__12096__$1 = (((G__12096 instanceof cljs.core.Keyword))?G__12096.fqn:null);
switch (G__12096__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12092,else__4464__auto__);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12097){
var vec__12098 = p__12097;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12098,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12098,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#garden.types.CSSUnit{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unit,self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$magnitude,self__.magnitude],null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12091){
var self__ = this;
var G__12091__$1 = this;
return (new cljs.core.RecordIter((0),G__12091__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unit,cljs.core.cst$kw$magnitude], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (2 + cljs.core.count(self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__12101 = (function (coll__4458__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__12101(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12093,other12094){
var self__ = this;
var this12093__$1 = this;
return (((!((other12094 == null)))) && ((((this12093__$1.constructor === other12094.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12093__$1.unit,other12094.unit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12093__$1.magnitude,other12094.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12093__$1.__extmap,other12094.__extmap)))))))));
}));

(garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$unit,null,cljs.core.cst$kw$magnitude,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12092){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12102 = k12092;
var G__12102__$1 = (((G__12102 instanceof cljs.core.Keyword))?G__12102.fqn:null);
switch (G__12102__$1) {
case "unit":
case "magnitude":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12092);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12091){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12103 = cljs.core.keyword_identical_QMARK_;
var expr__12104 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__12106 = cljs.core.cst$kw$unit;
var G__12107 = expr__12104;
return (pred__12103.cljs$core$IFn$_invoke$arity$2 ? pred__12103.cljs$core$IFn$_invoke$arity$2(G__12106,G__12107) : pred__12103.call(null,G__12106,G__12107));
})())){
return (new garden.types.CSSUnit(G__12091,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12108 = cljs.core.cst$kw$magnitude;
var G__12109 = expr__12104;
return (pred__12103.cljs$core$IFn$_invoke$arity$2 ? pred__12103.cljs$core$IFn$_invoke$arity$2(G__12108,G__12109) : pred__12103.call(null,G__12108,G__12109));
})())){
return (new garden.types.CSSUnit(self__.unit,G__12091,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12091),null));
}
}
}));

(garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$unit,self__.unit,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$magnitude,self__.magnitude,null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12091){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__12091,self__.__extmap,self__.__hash));
}));

(garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$unit,cljs.core.cst$sym$magnitude], null);
}));

(garden.types.CSSUnit.cljs$lang$type = true);

(garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"garden.types/CSSUnit",null,(1),null));
}));

(garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"garden.types/CSSUnit");
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
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__12095){
var extmap__4501__auto__ = (function (){var G__12110 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12095,cljs.core.cst$kw$unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$magnitude], 0));
if(cljs.core.record_QMARK_(G__12095)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12110);
} else {
return G__12110;
}
})();
return (new garden.types.CSSUnit(cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(G__12095),cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$1(G__12095),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12114,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12118 = k12114;
var G__12118__$1 = (((G__12118 instanceof cljs.core.Keyword))?G__12118.fqn:null);
switch (G__12118__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12114,else__4464__auto__);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12119){
var vec__12120 = p__12119;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12120,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12120,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#garden.types.CSSFunction{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$f,self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12113){
var self__ = this;
var G__12113__$1 = this;
return (new cljs.core.RecordIter((0),G__12113__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (2 + cljs.core.count(self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__12123 = (function (coll__4458__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__12123(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12115,other12116){
var self__ = this;
var this12115__$1 = this;
return (((!((other12116 == null)))) && ((((this12115__$1.constructor === other12116.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12115__$1.f,other12116.f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12115__$1.args,other12116.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12115__$1.__extmap,other12116.__extmap)))))))));
}));

(garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$f,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12114){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12124 = k12114;
var G__12124__$1 = (((G__12124 instanceof cljs.core.Keyword))?G__12124.fqn:null);
switch (G__12124__$1) {
case "f":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12114);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12113){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12125 = cljs.core.keyword_identical_QMARK_;
var expr__12126 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__12128 = cljs.core.cst$kw$f;
var G__12129 = expr__12126;
return (pred__12125.cljs$core$IFn$_invoke$arity$2 ? pred__12125.cljs$core$IFn$_invoke$arity$2(G__12128,G__12129) : pred__12125.call(null,G__12128,G__12129));
})())){
return (new garden.types.CSSFunction(G__12113,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12130 = cljs.core.cst$kw$args;
var G__12131 = expr__12126;
return (pred__12125.cljs$core$IFn$_invoke$arity$2 ? pred__12125.cljs$core$IFn$_invoke$arity$2(G__12130,G__12131) : pred__12125.call(null,G__12130,G__12131));
})())){
return (new garden.types.CSSFunction(self__.f,G__12113,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12113),null));
}
}
}));

(garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$f,self__.f,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12113){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__12113,self__.__extmap,self__.__hash));
}));

(garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$args], null);
}));

(garden.types.CSSFunction.cljs$lang$type = true);

(garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"garden.types/CSSFunction",null,(1),null));
}));

(garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"garden.types/CSSFunction");
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
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__12117){
var extmap__4501__auto__ = (function (){var G__12132 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12117,cljs.core.cst$kw$f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__12117)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12132);
} else {
return G__12132;
}
})();
return (new garden.types.CSSFunction(cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__12117),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__12117),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12136,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12140 = k12136;
var G__12140__$1 = (((G__12140 instanceof cljs.core.Keyword))?G__12140.fqn:null);
switch (G__12140__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12136,else__4464__auto__);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12141){
var vec__12142 = p__12141;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#garden.types.CSSAtRule{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$identifier,self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12135){
var self__ = this;
var G__12135__$1 = this;
return (new cljs.core.RecordIter((0),G__12135__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$identifier,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (2 + cljs.core.count(self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__12145 = (function (coll__4458__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__12145(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12137,other12138){
var self__ = this;
var this12137__$1 = this;
return (((!((other12138 == null)))) && ((((this12137__$1.constructor === other12138.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12137__$1.identifier,other12138.identifier)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12137__$1.value,other12138.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12137__$1.__extmap,other12138.__extmap)))))))));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$identifier,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12136){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12146 = k12136;
var G__12146__$1 = (((G__12146 instanceof cljs.core.Keyword))?G__12146.fqn:null);
switch (G__12146__$1) {
case "identifier":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12136);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12135){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12147 = cljs.core.keyword_identical_QMARK_;
var expr__12148 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__12150 = cljs.core.cst$kw$identifier;
var G__12151 = expr__12148;
return (pred__12147.cljs$core$IFn$_invoke$arity$2 ? pred__12147.cljs$core$IFn$_invoke$arity$2(G__12150,G__12151) : pred__12147.call(null,G__12150,G__12151));
})())){
return (new garden.types.CSSAtRule(G__12135,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12152 = cljs.core.cst$kw$value;
var G__12153 = expr__12148;
return (pred__12147.cljs$core$IFn$_invoke$arity$2 ? pred__12147.cljs$core$IFn$_invoke$arity$2(G__12152,G__12153) : pred__12147.call(null,G__12152,G__12153));
})())){
return (new garden.types.CSSAtRule(self__.identifier,G__12135,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12135),null));
}
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$identifier,self__.identifier,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12135){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__12135,self__.__extmap,self__.__hash));
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$identifier,cljs.core.cst$sym$value], null);
}));

(garden.types.CSSAtRule.cljs$lang$type = true);

(garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"garden.types/CSSAtRule",null,(1),null));
}));

(garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"garden.types/CSSAtRule");
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
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__12139){
var extmap__4501__auto__ = (function (){var G__12154 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12139,cljs.core.cst$kw$identifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value], 0));
if(cljs.core.record_QMARK_(G__12139)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12154);
} else {
return G__12154;
}
})();
return (new garden.types.CSSAtRule(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(G__12139),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__12139),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

