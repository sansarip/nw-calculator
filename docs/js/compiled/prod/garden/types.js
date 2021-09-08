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

(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k27063,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__27067 = k27063;
var G__27067__$1 = (((G__27067 instanceof cljs.core.Keyword))?G__27067.fqn:null);
switch (G__27067__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27063,else__4464__auto__);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__27068){
var vec__27069 = p__27068;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27069,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27069,(1),null);
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

(garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27062){
var self__ = this;
var G__27062__$1 = this;
return (new cljs.core.RecordIter((0),G__27062__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unit,cljs.core.cst$kw$magnitude], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4319__auto____$1 = (function (){var fexpr__27072 = (function (coll__4458__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__27072(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27064,other27065){
var self__ = this;
var this27064__$1 = this;
return (((!((other27065 == null)))) && ((((this27064__$1.constructor === other27065.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27064__$1.unit,other27065.unit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27064__$1.magnitude,other27065.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27064__$1.__extmap,other27065.__extmap)))))))));
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

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k27063){
var self__ = this;
var this__4468__auto____$1 = this;
var G__27073 = k27063;
var G__27073__$1 = (((G__27073 instanceof cljs.core.Keyword))?G__27073.fqn:null);
switch (G__27073__$1) {
case "unit":
case "magnitude":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27063);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__27062){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__27074 = cljs.core.keyword_identical_QMARK_;
var expr__27075 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__27077 = cljs.core.cst$kw$unit;
var G__27078 = expr__27075;
return (pred__27074.cljs$core$IFn$_invoke$arity$2 ? pred__27074.cljs$core$IFn$_invoke$arity$2(G__27077,G__27078) : pred__27074.call(null,G__27077,G__27078));
})())){
return (new garden.types.CSSUnit(G__27062,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27079 = cljs.core.cst$kw$magnitude;
var G__27080 = expr__27075;
return (pred__27074.cljs$core$IFn$_invoke$arity$2 ? pred__27074.cljs$core$IFn$_invoke$arity$2(G__27079,G__27080) : pred__27074.call(null,G__27079,G__27080));
})())){
return (new garden.types.CSSUnit(self__.unit,G__27062,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__27062),null));
}
}
}));

(garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$unit,self__.unit,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$magnitude,self__.magnitude,null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__27062){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__27062,self__.__extmap,self__.__hash));
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
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__27066){
var extmap__4501__auto__ = (function (){var G__27081 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27066,cljs.core.cst$kw$unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$magnitude], 0));
if(cljs.core.record_QMARK_(G__27066)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27081);
} else {
return G__27081;
}
})();
return (new garden.types.CSSUnit(cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(G__27066),cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$1(G__27066),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k27085,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__27089 = k27085;
var G__27089__$1 = (((G__27089 instanceof cljs.core.Keyword))?G__27089.fqn:null);
switch (G__27089__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27085,else__4464__auto__);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__27090){
var vec__27091 = p__27090;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(1),null);
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

(garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27084){
var self__ = this;
var G__27084__$1 = this;
return (new cljs.core.RecordIter((0),G__27084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$f,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4319__auto____$1 = (function (){var fexpr__27094 = (function (coll__4458__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__27094(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27086,other27087){
var self__ = this;
var this27086__$1 = this;
return (((!((other27087 == null)))) && ((((this27086__$1.constructor === other27087.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27086__$1.f,other27087.f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27086__$1.args,other27087.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27086__$1.__extmap,other27087.__extmap)))))))));
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

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k27085){
var self__ = this;
var this__4468__auto____$1 = this;
var G__27095 = k27085;
var G__27095__$1 = (((G__27095 instanceof cljs.core.Keyword))?G__27095.fqn:null);
switch (G__27095__$1) {
case "f":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27085);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__27084){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__27096 = cljs.core.keyword_identical_QMARK_;
var expr__27097 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__27099 = cljs.core.cst$kw$f;
var G__27100 = expr__27097;
return (pred__27096.cljs$core$IFn$_invoke$arity$2 ? pred__27096.cljs$core$IFn$_invoke$arity$2(G__27099,G__27100) : pred__27096.call(null,G__27099,G__27100));
})())){
return (new garden.types.CSSFunction(G__27084,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27101 = cljs.core.cst$kw$args;
var G__27102 = expr__27097;
return (pred__27096.cljs$core$IFn$_invoke$arity$2 ? pred__27096.cljs$core$IFn$_invoke$arity$2(G__27101,G__27102) : pred__27096.call(null,G__27101,G__27102));
})())){
return (new garden.types.CSSFunction(self__.f,G__27084,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__27084),null));
}
}
}));

(garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$f,self__.f,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__27084){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__27084,self__.__extmap,self__.__hash));
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
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__27088){
var extmap__4501__auto__ = (function (){var G__27103 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27088,cljs.core.cst$kw$f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__27088)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27103);
} else {
return G__27103;
}
})();
return (new garden.types.CSSFunction(cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__27088),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__27088),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k27107,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__27111 = k27107;
var G__27111__$1 = (((G__27111 instanceof cljs.core.Keyword))?G__27111.fqn:null);
switch (G__27111__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27107,else__4464__auto__);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__27112){
var vec__27113 = p__27112;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27113,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27113,(1),null);
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

(garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27106){
var self__ = this;
var G__27106__$1 = this;
return (new cljs.core.RecordIter((0),G__27106__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$identifier,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4319__auto____$1 = (function (){var fexpr__27116 = (function (coll__4458__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__27116(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27108,other27109){
var self__ = this;
var this27108__$1 = this;
return (((!((other27109 == null)))) && ((((this27108__$1.constructor === other27109.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27108__$1.identifier,other27109.identifier)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27108__$1.value,other27109.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27108__$1.__extmap,other27109.__extmap)))))))));
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

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k27107){
var self__ = this;
var this__4468__auto____$1 = this;
var G__27117 = k27107;
var G__27117__$1 = (((G__27117 instanceof cljs.core.Keyword))?G__27117.fqn:null);
switch (G__27117__$1) {
case "identifier":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27107);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__27106){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__27118 = cljs.core.keyword_identical_QMARK_;
var expr__27119 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__27121 = cljs.core.cst$kw$identifier;
var G__27122 = expr__27119;
return (pred__27118.cljs$core$IFn$_invoke$arity$2 ? pred__27118.cljs$core$IFn$_invoke$arity$2(G__27121,G__27122) : pred__27118.call(null,G__27121,G__27122));
})())){
return (new garden.types.CSSAtRule(G__27106,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27123 = cljs.core.cst$kw$value;
var G__27124 = expr__27119;
return (pred__27118.cljs$core$IFn$_invoke$arity$2 ? pred__27118.cljs$core$IFn$_invoke$arity$2(G__27123,G__27124) : pred__27118.call(null,G__27123,G__27124));
})())){
return (new garden.types.CSSAtRule(self__.identifier,G__27106,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__27106),null));
}
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$identifier,self__.identifier,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__27106){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__27106,self__.__extmap,self__.__hash));
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
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__27110){
var extmap__4501__auto__ = (function (){var G__27125 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27110,cljs.core.cst$kw$identifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value], 0));
if(cljs.core.record_QMARK_(G__27110)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27125);
} else {
return G__27125;
}
})();
return (new garden.types.CSSAtRule(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(G__27110),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__27110),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

