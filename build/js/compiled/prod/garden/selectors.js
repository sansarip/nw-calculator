// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('garden.selectors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');

/**
 * @interface
 */
garden.selectors.ICSSSelector = function(){};

var garden$selectors$ICSSSelector$css_selector$dyn_29988 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (garden.selectors.css_selector[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (garden.selectors.css_selector["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICSSSelector.css-selector",this$);
}
}
});
garden.selectors.css_selector = (function garden$selectors$css_selector(this$){
if((((!((this$ == null)))) && ((!((this$.garden$selectors$ICSSSelector$css_selector$arity$1 == null)))))){
return this$.garden$selectors$ICSSSelector$css_selector$arity$1(this$);
} else {
return garden$selectors$ICSSSelector$css_selector$dyn_29988(this$);
}
});

garden.selectors.selector_QMARK_ = (function garden$selectors$selector_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.garden$selectors$ICSSSelector$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,x);
}
});
goog.object.set(garden.selectors.ICSSSelector,"string",true);

goog.object.set(garden.selectors.css_selector,"string",(function (this$){
return this$;
}));

(cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {garden.selectors.ICSSSelector}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.selectors.CSSSelector = (function (selector,__meta,__extmap,__hash){
this.selector = selector;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k29991,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__29996 = k29991;
var G__29996__$1 = (((G__29996 instanceof cljs.core.Keyword))?G__29996.fqn:null);
switch (G__29996__$1) {
case "selector":
return self__.selector;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29991,else__4464__auto__);

}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__29997){
var vec__29998 = p__29997;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29998,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29998,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#garden.selectors.CSSSelector{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$selector,self__.selector],null))], null),self__.__extmap));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29990){
var self__ = this;
var G__29990__$1 = this;
return (new cljs.core.RecordIter((0),G__29990__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selector], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__30001 = (function (coll__4458__auto__){
return (-1534393016 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__30001(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29992,other29993){
var self__ = this;
var this29992__$1 = this;
return (((!((other29993 == null)))) && ((((this29992__$1.constructor === other29993.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29992__$1.selector,other29993.selector)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29992__$1.__extmap,other29993.__extmap)))))));
}));

(garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL);

(garden.selectors.CSSSelector.prototype.garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return garden.selectors.css_selector(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(this$__$1));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selector,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k29991){
var self__ = this;
var this__4468__auto____$1 = this;
var G__30002 = k29991;
var G__30002__$1 = (((G__30002 instanceof cljs.core.Keyword))?G__30002.fqn:null);
switch (G__30002__$1) {
case "selector":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29991);

}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__29990){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__30003 = cljs.core.keyword_identical_QMARK_;
var expr__30004 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__30006 = cljs.core.cst$kw$selector;
var G__30007 = expr__30004;
return (pred__30003.cljs$core$IFn$_invoke$arity$2 ? pred__30003.cljs$core$IFn$_invoke$arity$2(G__30006,G__30007) : pred__30003.call(null,G__30006,G__30007));
})())){
return (new garden.selectors.CSSSelector(G__29990,self__.__meta,self__.__extmap,null));
} else {
return (new garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__29990),null));
}
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$selector,self__.selector,null))], null),self__.__extmap));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__29990){
var self__ = this;
var this__4460__auto____$1 = this;
return (new garden.selectors.CSSSelector(self__.selector,G__29990,self__.__extmap,self__.__hash));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(garden.selectors.CSSSelector.prototype.call = (function() {
var G__30011 = null;
var G__30011__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__30011__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))].join(''),null,null,null));
});
var G__30011__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''),null,null,null));
});
var G__30011__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c))].join(''),null,null,null));
});
var G__30011__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d))].join(''),null,null,null));
});
var G__30011__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e))].join(''),null,null,null));
});
var G__30011__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f))].join(''),null,null,null));
});
var G__30011__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g))].join(''),null,null,null));
});
var G__30011__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h))].join(''),null,null,null));
});
var G__30011__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i))].join(''),null,null,null));
});
var G__30011__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j))].join(''),null,null,null));
});
var G__30011__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k))].join(''),null,null,null));
});
var G__30011__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l))].join(''),null,null,null));
});
var G__30011__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m))].join(''),null,null,null));
});
var G__30011__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n))].join(''),null,null,null));
});
var G__30011__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o))].join(''),null,null,null));
});
var G__30011__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p))].join(''),null,null,null));
});
var G__30011__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q))].join(''),null,null,null));
});
var G__30011__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r))].join(''),null,null,null));
});
var G__30011__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s))].join(''),null,null,null));
});
var G__30011__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(t))].join(''),null,null,null));
});
G__30011 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
switch(arguments.length){
case 1:
return G__30011__1.call(this,self__);
case 2:
return G__30011__2.call(this,self__,a);
case 3:
return G__30011__3.call(this,self__,a,b);
case 4:
return G__30011__4.call(this,self__,a,b,c);
case 5:
return G__30011__5.call(this,self__,a,b,c,d);
case 6:
return G__30011__6.call(this,self__,a,b,c,d,e);
case 7:
return G__30011__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__30011__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__30011__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__30011__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__30011__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__30011__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__30011__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__30011__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__30011__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__30011__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__30011__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__30011__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__30011__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__30011__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__30011__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__30011.cljs$core$IFn$_invoke$arity$1 = G__30011__1;
G__30011.cljs$core$IFn$_invoke$arity$2 = G__30011__2;
G__30011.cljs$core$IFn$_invoke$arity$3 = G__30011__3;
G__30011.cljs$core$IFn$_invoke$arity$4 = G__30011__4;
G__30011.cljs$core$IFn$_invoke$arity$5 = G__30011__5;
G__30011.cljs$core$IFn$_invoke$arity$6 = G__30011__6;
G__30011.cljs$core$IFn$_invoke$arity$7 = G__30011__7;
G__30011.cljs$core$IFn$_invoke$arity$8 = G__30011__8;
G__30011.cljs$core$IFn$_invoke$arity$9 = G__30011__9;
G__30011.cljs$core$IFn$_invoke$arity$10 = G__30011__10;
G__30011.cljs$core$IFn$_invoke$arity$11 = G__30011__11;
G__30011.cljs$core$IFn$_invoke$arity$12 = G__30011__12;
G__30011.cljs$core$IFn$_invoke$arity$13 = G__30011__13;
G__30011.cljs$core$IFn$_invoke$arity$14 = G__30011__14;
G__30011.cljs$core$IFn$_invoke$arity$15 = G__30011__15;
G__30011.cljs$core$IFn$_invoke$arity$16 = G__30011__16;
G__30011.cljs$core$IFn$_invoke$arity$17 = G__30011__17;
G__30011.cljs$core$IFn$_invoke$arity$18 = G__30011__18;
G__30011.cljs$core$IFn$_invoke$arity$19 = G__30011__19;
G__30011.cljs$core$IFn$_invoke$arity$20 = G__30011__20;
G__30011.cljs$core$IFn$_invoke$arity$21 = G__30011__21;
return G__30011;
})()
);

(garden.selectors.CSSSelector.prototype.apply = (function (self__,args29995){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29995)));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return (new garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(t))].join(''),null,null,null));
}));

(garden.selectors.CSSSelector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$selector], null);
}));

(garden.selectors.CSSSelector.cljs$lang$type = true);

(garden.selectors.CSSSelector.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"garden.selectors/CSSSelector",null,(1),null));
}));

(garden.selectors.CSSSelector.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"garden.selectors/CSSSelector");
}));

/**
 * Positional factory function for garden.selectors/CSSSelector.
 */
garden.selectors.__GT_CSSSelector = (function garden$selectors$__GT_CSSSelector(selector){
return (new garden.selectors.CSSSelector(selector,null,null,null));
});

/**
 * Factory function for garden.selectors/CSSSelector, taking a map of keywords to field values.
 */
garden.selectors.map__GT_CSSSelector = (function garden$selectors$map__GT_CSSSelector(G__29994){
var extmap__4501__auto__ = (function (){var G__30008 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29994,cljs.core.cst$kw$selector);
if(cljs.core.record_QMARK_(G__29994)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30008);
} else {
return G__30008;
}
})();
return (new garden.selectors.CSSSelector(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(G__29994),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

garden.selectors.selector = (function garden$selectors$selector(x){
return (new garden.selectors.CSSSelector(x,null,null,null));
});
garden.selectors.html_tags = cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$a,cljs.core.cst$sym$abbr,cljs.core.cst$sym$address,cljs.core.cst$sym$area,cljs.core.cst$sym$article,cljs.core.cst$sym$aside,cljs.core.cst$sym$audio,cljs.core.cst$sym$b,cljs.core.cst$sym$base,cljs.core.cst$sym$bdi,cljs.core.cst$sym$bdo,cljs.core.cst$sym$blockquote,cljs.core.cst$sym$body,cljs.core.cst$sym$br,cljs.core.cst$sym$button,cljs.core.cst$sym$canvas,cljs.core.cst$sym$caption,cljs.core.cst$sym$cite,cljs.core.cst$sym$code,cljs.core.cst$sym$col,cljs.core.cst$sym$colgroup,cljs.core.cst$sym$command,cljs.core.cst$sym$datalist,cljs.core.cst$sym$dd,cljs.core.cst$sym$del,cljs.core.cst$sym$details,cljs.core.cst$sym$dfn,cljs.core.cst$sym$div,cljs.core.cst$sym$dl,cljs.core.cst$sym$dt,cljs.core.cst$sym$em,cljs.core.cst$sym$embed,cljs.core.cst$sym$fieldset,cljs.core.cst$sym$figcaption,cljs.core.cst$sym$figure,cljs.core.cst$sym$footer,cljs.core.cst$sym$form,cljs.core.cst$sym$h1,cljs.core.cst$sym$h2,cljs.core.cst$sym$h3,cljs.core.cst$sym$h4,cljs.core.cst$sym$h5,cljs.core.cst$sym$h6,cljs.core.cst$sym$head,cljs.core.cst$sym$header,cljs.core.cst$sym$hgroup,cljs.core.cst$sym$hr,cljs.core.cst$sym$html,cljs.core.cst$sym$i,cljs.core.cst$sym$iframe,cljs.core.cst$sym$img,cljs.core.cst$sym$input,cljs.core.cst$sym$ins,cljs.core.cst$sym$kbd,cljs.core.cst$sym$keygen,cljs.core.cst$sym$label,cljs.core.cst$sym$legend,cljs.core.cst$sym$li,cljs.core.cst$sym$link,cljs.core.cst$sym$map,cljs.core.cst$sym$mark,cljs.core.cst$sym$math,cljs.core.cst$sym$menu,cljs.core.cst$sym$meta,cljs.core.cst$sym$meter,cljs.core.cst$sym$nav,cljs.core.cst$sym$noscript,cljs.core.cst$sym$object,cljs.core.cst$sym$ol,cljs.core.cst$sym$optgroup,cljs.core.cst$sym$option,cljs.core.cst$sym$output,cljs.core.cst$sym$p,cljs.core.cst$sym$param,cljs.core.cst$sym$pre,cljs.core.cst$sym$progress,cljs.core.cst$sym$q,cljs.core.cst$sym$rp,cljs.core.cst$sym$rt,cljs.core.cst$sym$ruby,cljs.core.cst$sym$s,cljs.core.cst$sym$samp,cljs.core.cst$sym$script,cljs.core.cst$sym$section,cljs.core.cst$sym$select,cljs.core.cst$sym$small,cljs.core.cst$sym$source,cljs.core.cst$sym$span,cljs.core.cst$sym$strong,cljs.core.cst$sym$style,cljs.core.cst$sym$sub,cljs.core.cst$sym$summary,cljs.core.cst$sym$sup,cljs.core.cst$sym$svg,cljs.core.cst$sym$table,cljs.core.cst$sym$tbody,cljs.core.cst$sym$td,cljs.core.cst$sym$textarea,cljs.core.cst$sym$tfoot,cljs.core.cst$sym$th,cljs.core.cst$sym$thead,cljs.core.cst$sym$time,cljs.core.cst$sym$title,cljs.core.cst$sym$tr,cljs.core.cst$sym$track,cljs.core.cst$sym$u,cljs.core.cst$sym$ul,cljs.core.cst$sym$var,cljs.core.cst$sym$video,cljs.core.cst$sym$wbr], true);
/**
 * CSS a type selector.
 */
garden.selectors.a = garden.selectors.selector("a");

/**
 * CSS abbr type selector.
 */
garden.selectors.abbr = garden.selectors.selector("abbr");

/**
 * CSS address type selector.
 */
garden.selectors.address = garden.selectors.selector("address");

/**
 * CSS area type selector.
 */
garden.selectors.area = garden.selectors.selector("area");

/**
 * CSS article type selector.
 */
garden.selectors.article = garden.selectors.selector("article");

/**
 * CSS aside type selector.
 */
garden.selectors.aside = garden.selectors.selector("aside");

/**
 * CSS audio type selector.
 */
garden.selectors.audio = garden.selectors.selector("audio");

/**
 * CSS b type selector.
 */
garden.selectors.b = garden.selectors.selector("b");

/**
 * CSS base type selector.
 */
garden.selectors.base = garden.selectors.selector("base");

/**
 * CSS bdi type selector.
 */
garden.selectors.bdi = garden.selectors.selector("bdi");

/**
 * CSS bdo type selector.
 */
garden.selectors.bdo = garden.selectors.selector("bdo");

/**
 * CSS blockquote type selector.
 */
garden.selectors.blockquote = garden.selectors.selector("blockquote");

/**
 * CSS body type selector.
 */
garden.selectors.body = garden.selectors.selector("body");

/**
 * CSS br type selector.
 */
garden.selectors.br = garden.selectors.selector("br");

/**
 * CSS button type selector.
 */
garden.selectors.button = garden.selectors.selector("button");

/**
 * CSS canvas type selector.
 */
garden.selectors.canvas = garden.selectors.selector("canvas");

/**
 * CSS caption type selector.
 */
garden.selectors.caption = garden.selectors.selector("caption");

/**
 * CSS cite type selector.
 */
garden.selectors.cite = garden.selectors.selector("cite");

/**
 * CSS code type selector.
 */
garden.selectors.code = garden.selectors.selector("code");

/**
 * CSS col type selector.
 */
garden.selectors.col = garden.selectors.selector("col");

/**
 * CSS colgroup type selector.
 */
garden.selectors.colgroup = garden.selectors.selector("colgroup");

/**
 * CSS command type selector.
 */
garden.selectors.command = garden.selectors.selector("command");

/**
 * CSS datalist type selector.
 */
garden.selectors.datalist = garden.selectors.selector("datalist");

/**
 * CSS dd type selector.
 */
garden.selectors.dd = garden.selectors.selector("dd");

/**
 * CSS del type selector.
 */
garden.selectors.del = garden.selectors.selector("del");

/**
 * CSS details type selector.
 */
garden.selectors.details = garden.selectors.selector("details");

/**
 * CSS dfn type selector.
 */
garden.selectors.dfn = garden.selectors.selector("dfn");

/**
 * CSS div type selector.
 */
garden.selectors.div = garden.selectors.selector("div");

/**
 * CSS dl type selector.
 */
garden.selectors.dl = garden.selectors.selector("dl");

/**
 * CSS dt type selector.
 */
garden.selectors.dt = garden.selectors.selector("dt");

/**
 * CSS em type selector.
 */
garden.selectors.em = garden.selectors.selector("em");

/**
 * CSS embed type selector.
 */
garden.selectors.embed = garden.selectors.selector("embed");

/**
 * CSS fieldset type selector.
 */
garden.selectors.fieldset = garden.selectors.selector("fieldset");

/**
 * CSS figcaption type selector.
 */
garden.selectors.figcaption = garden.selectors.selector("figcaption");

/**
 * CSS figure type selector.
 */
garden.selectors.figure = garden.selectors.selector("figure");

/**
 * CSS footer type selector.
 */
garden.selectors.footer = garden.selectors.selector("footer");

/**
 * CSS form type selector.
 */
garden.selectors.form = garden.selectors.selector("form");

/**
 * CSS h1 type selector.
 */
garden.selectors.h1 = garden.selectors.selector("h1");

/**
 * CSS h2 type selector.
 */
garden.selectors.h2 = garden.selectors.selector("h2");

/**
 * CSS h3 type selector.
 */
garden.selectors.h3 = garden.selectors.selector("h3");

/**
 * CSS h4 type selector.
 */
garden.selectors.h4 = garden.selectors.selector("h4");

/**
 * CSS h5 type selector.
 */
garden.selectors.h5 = garden.selectors.selector("h5");

/**
 * CSS h6 type selector.
 */
garden.selectors.h6 = garden.selectors.selector("h6");

/**
 * CSS head type selector.
 */
garden.selectors.head = garden.selectors.selector("head");

/**
 * CSS header type selector.
 */
garden.selectors.header = garden.selectors.selector("header");

/**
 * CSS hgroup type selector.
 */
garden.selectors.hgroup = garden.selectors.selector("hgroup");

/**
 * CSS hr type selector.
 */
garden.selectors.hr = garden.selectors.selector("hr");

/**
 * CSS html type selector.
 */
garden.selectors.html = garden.selectors.selector("html");

/**
 * CSS i type selector.
 */
garden.selectors.i = garden.selectors.selector("i");

/**
 * CSS iframe type selector.
 */
garden.selectors.iframe = garden.selectors.selector("iframe");

/**
 * CSS img type selector.
 */
garden.selectors.img = garden.selectors.selector("img");

/**
 * CSS input type selector.
 */
garden.selectors.input = garden.selectors.selector("input");

/**
 * CSS ins type selector.
 */
garden.selectors.ins = garden.selectors.selector("ins");

/**
 * CSS kbd type selector.
 */
garden.selectors.kbd = garden.selectors.selector("kbd");

/**
 * CSS keygen type selector.
 */
garden.selectors.keygen = garden.selectors.selector("keygen");

/**
 * CSS label type selector.
 */
garden.selectors.label = garden.selectors.selector("label");

/**
 * CSS legend type selector.
 */
garden.selectors.legend = garden.selectors.selector("legend");

/**
 * CSS li type selector.
 */
garden.selectors.li = garden.selectors.selector("li");

/**
 * CSS link type selector.
 */
garden.selectors.link = garden.selectors.selector("link");

/**
 * CSS map type selector.
 */
garden.selectors.map = garden.selectors.selector("map");

/**
 * CSS mark type selector.
 */
garden.selectors.mark = garden.selectors.selector("mark");

/**
 * CSS math type selector.
 */
garden.selectors.math = garden.selectors.selector("math");

/**
 * CSS menu type selector.
 */
garden.selectors.menu = garden.selectors.selector("menu");

/**
 * CSS meta type selector.
 */
garden.selectors.meta = garden.selectors.selector("meta");

/**
 * CSS meter type selector.
 */
garden.selectors.meter = garden.selectors.selector("meter");

/**
 * CSS nav type selector.
 */
garden.selectors.nav = garden.selectors.selector("nav");

/**
 * CSS noscript type selector.
 */
garden.selectors.noscript = garden.selectors.selector("noscript");

/**
 * CSS object type selector.
 */
garden.selectors.object = garden.selectors.selector("object");

/**
 * CSS ol type selector.
 */
garden.selectors.ol = garden.selectors.selector("ol");

/**
 * CSS optgroup type selector.
 */
garden.selectors.optgroup = garden.selectors.selector("optgroup");

/**
 * CSS option type selector.
 */
garden.selectors.option = garden.selectors.selector("option");

/**
 * CSS output type selector.
 */
garden.selectors.output = garden.selectors.selector("output");

/**
 * CSS p type selector.
 */
garden.selectors.p = garden.selectors.selector("p");

/**
 * CSS param type selector.
 */
garden.selectors.param = garden.selectors.selector("param");

/**
 * CSS pre type selector.
 */
garden.selectors.pre = garden.selectors.selector("pre");

/**
 * CSS progress type selector.
 */
garden.selectors.progress = garden.selectors.selector("progress");

/**
 * CSS q type selector.
 */
garden.selectors.q = garden.selectors.selector("q");

/**
 * CSS rp type selector.
 */
garden.selectors.rp = garden.selectors.selector("rp");

/**
 * CSS rt type selector.
 */
garden.selectors.rt = garden.selectors.selector("rt");

/**
 * CSS ruby type selector.
 */
garden.selectors.ruby = garden.selectors.selector("ruby");

/**
 * CSS s type selector.
 */
garden.selectors.s = garden.selectors.selector("s");

/**
 * CSS samp type selector.
 */
garden.selectors.samp = garden.selectors.selector("samp");

/**
 * CSS script type selector.
 */
garden.selectors.script = garden.selectors.selector("script");

/**
 * CSS section type selector.
 */
garden.selectors.section = garden.selectors.selector("section");

/**
 * CSS select type selector.
 */
garden.selectors.select = garden.selectors.selector("select");

/**
 * CSS small type selector.
 */
garden.selectors.small = garden.selectors.selector("small");

/**
 * CSS source type selector.
 */
garden.selectors.source = garden.selectors.selector("source");

/**
 * CSS span type selector.
 */
garden.selectors.span = garden.selectors.selector("span");

/**
 * CSS strong type selector.
 */
garden.selectors.strong = garden.selectors.selector("strong");

/**
 * CSS style type selector.
 */
garden.selectors.style = garden.selectors.selector("style");

/**
 * CSS sub type selector.
 */
garden.selectors.sub = garden.selectors.selector("sub");

/**
 * CSS summary type selector.
 */
garden.selectors.summary = garden.selectors.selector("summary");

/**
 * CSS sup type selector.
 */
garden.selectors.sup = garden.selectors.selector("sup");

/**
 * CSS svg type selector.
 */
garden.selectors.svg = garden.selectors.selector("svg");

/**
 * CSS table type selector.
 */
garden.selectors.table = garden.selectors.selector("table");

/**
 * CSS tbody type selector.
 */
garden.selectors.tbody = garden.selectors.selector("tbody");

/**
 * CSS td type selector.
 */
garden.selectors.td = garden.selectors.selector("td");

/**
 * CSS textarea type selector.
 */
garden.selectors.textarea = garden.selectors.selector("textarea");

/**
 * CSS tfoot type selector.
 */
garden.selectors.tfoot = garden.selectors.selector("tfoot");

/**
 * CSS th type selector.
 */
garden.selectors.th = garden.selectors.selector("th");

/**
 * CSS thead type selector.
 */
garden.selectors.thead = garden.selectors.selector("thead");

/**
 * CSS time type selector.
 */
garden.selectors.time = garden.selectors.selector("time");

/**
 * CSS title type selector.
 */
garden.selectors.title = garden.selectors.selector("title");

/**
 * CSS tr type selector.
 */
garden.selectors.tr = garden.selectors.selector("tr");

/**
 * CSS track type selector.
 */
garden.selectors.track = garden.selectors.selector("track");

/**
 * CSS u type selector.
 */
garden.selectors.u = garden.selectors.selector("u");

/**
 * CSS ul type selector.
 */
garden.selectors.ul = garden.selectors.selector("ul");

/**
 * CSS var type selector.
 */
garden.selectors.var$ = garden.selectors.selector("var");

/**
 * CSS video type selector.
 */
garden.selectors.video = garden.selectors.selector("video");

/**
 * CSS wbr type selector.
 */
garden.selectors.wbr = garden.selectors.selector("wbr");
garden.selectors.pseudo_classes = cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$active,cljs.core.cst$sym$checked,cljs.core.cst$sym$default,cljs.core.cst$sym$disabled,cljs.core.cst$sym$empty,cljs.core.cst$sym$enabled,cljs.core.cst$sym$first,cljs.core.cst$sym$first_DASH_child,cljs.core.cst$sym$first_DASH_of_DASH_type,cljs.core.cst$sym$fullscreen,cljs.core.cst$sym$focus,cljs.core.cst$sym$hover,cljs.core.cst$sym$indeterminate,cljs.core.cst$sym$in_DASH_range,cljs.core.cst$sym$invalid,cljs.core.cst$sym$last_DASH_child,cljs.core.cst$sym$last_DASH_of_DASH_type,cljs.core.cst$sym$left,cljs.core.cst$sym$links,cljs.core.cst$sym$only_DASH_child,cljs.core.cst$sym$only_DASH_of_DASH_type,cljs.core.cst$sym$optional,cljs.core.cst$sym$out_DASH_of_DASH_range,cljs.core.cst$sym$read_DASH_only,cljs.core.cst$sym$read_DASH_write,cljs.core.cst$sym$required,cljs.core.cst$sym$right,cljs.core.cst$sym$root,cljs.core.cst$sym$scope,cljs.core.cst$sym$target,cljs.core.cst$sym$valid,cljs.core.cst$sym$visited], true);
/**
 * CSS :active pseudo-class selector.
 */
garden.selectors.active = garden.selectors.selector(":active");

/**
 * CSS :checked pseudo-class selector.
 */
garden.selectors.checked = garden.selectors.selector(":checked");

/**
 * CSS :default pseudo-class selector.
 */
garden.selectors.default$ = garden.selectors.selector(":default");

/**
 * CSS :disabled pseudo-class selector.
 */
garden.selectors.disabled = garden.selectors.selector(":disabled");

/**
 * CSS :empty pseudo-class selector.
 */
garden.selectors.empty = garden.selectors.selector(":empty");

/**
 * CSS :enabled pseudo-class selector.
 */
garden.selectors.enabled = garden.selectors.selector(":enabled");

/**
 * CSS :first pseudo-class selector.
 */
garden.selectors.first = garden.selectors.selector(":first");

/**
 * CSS :first-child pseudo-class selector.
 */
garden.selectors.first_child = garden.selectors.selector(":first-child");

/**
 * CSS :first-of-type pseudo-class selector.
 */
garden.selectors.first_of_type = garden.selectors.selector(":first-of-type");

/**
 * CSS :fullscreen pseudo-class selector.
 */
garden.selectors.fullscreen = garden.selectors.selector(":fullscreen");

/**
 * CSS :focus pseudo-class selector.
 */
garden.selectors.focus = garden.selectors.selector(":focus");

/**
 * CSS :hover pseudo-class selector.
 */
garden.selectors.hover = garden.selectors.selector(":hover");

/**
 * CSS :indeterminate pseudo-class selector.
 */
garden.selectors.indeterminate = garden.selectors.selector(":indeterminate");

/**
 * CSS :in-range pseudo-class selector.
 */
garden.selectors.in_range = garden.selectors.selector(":in-range");

/**
 * CSS :invalid pseudo-class selector.
 */
garden.selectors.invalid = garden.selectors.selector(":invalid");

/**
 * CSS :last-child pseudo-class selector.
 */
garden.selectors.last_child = garden.selectors.selector(":last-child");

/**
 * CSS :last-of-type pseudo-class selector.
 */
garden.selectors.last_of_type = garden.selectors.selector(":last-of-type");

/**
 * CSS :left pseudo-class selector.
 */
garden.selectors.left = garden.selectors.selector(":left");

/**
 * CSS :links pseudo-class selector.
 */
garden.selectors.links = garden.selectors.selector(":links");

/**
 * CSS :only-child pseudo-class selector.
 */
garden.selectors.only_child = garden.selectors.selector(":only-child");

/**
 * CSS :only-of-type pseudo-class selector.
 */
garden.selectors.only_of_type = garden.selectors.selector(":only-of-type");

/**
 * CSS :optional pseudo-class selector.
 */
garden.selectors.optional = garden.selectors.selector(":optional");

/**
 * CSS :out-of-range pseudo-class selector.
 */
garden.selectors.out_of_range = garden.selectors.selector(":out-of-range");

/**
 * CSS :read-only pseudo-class selector.
 */
garden.selectors.read_only = garden.selectors.selector(":read-only");

/**
 * CSS :read-write pseudo-class selector.
 */
garden.selectors.read_write = garden.selectors.selector(":read-write");

/**
 * CSS :required pseudo-class selector.
 */
garden.selectors.required = garden.selectors.selector(":required");

/**
 * CSS :right pseudo-class selector.
 */
garden.selectors.right = garden.selectors.selector(":right");

/**
 * CSS :root pseudo-class selector.
 */
garden.selectors.root = garden.selectors.selector(":root");

/**
 * CSS :scope pseudo-class selector.
 */
garden.selectors.scope = garden.selectors.selector(":scope");

/**
 * CSS :target pseudo-class selector.
 */
garden.selectors.target = garden.selectors.selector(":target");

/**
 * CSS :valid pseudo-class selector.
 */
garden.selectors.valid = garden.selectors.selector(":valid");

/**
 * CSS :visited pseudo-class selector.
 */
garden.selectors.visited = garden.selectors.selector(":visited");
garden.selectors.lang = cljs.core.with_meta((function() { 
var garden$selectors$lang__delegate = function (args__29868__auto__){
var v__29869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (language){
return cljs.core.name(language);
}),args__29868__auto__);
var v__29869__auto____$1 = ((garden.selectors.selector_QMARK_(v__29869__auto__))?garden.selectors.css_selector(v__29869__auto__):v__29869__auto__);
return garden.selectors.selector([":","lang","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__29869__auto____$1),")"].join(''));
};
var garden$selectors$lang = function (var_args){
var args__29868__auto__ = null;
if (arguments.length > 0) {
var G__30014__i = 0, G__30014__a = new Array(arguments.length -  0);
while (G__30014__i < G__30014__a.length) {G__30014__a[G__30014__i] = arguments[G__30014__i + 0]; ++G__30014__i;}
  args__29868__auto__ = new cljs.core.IndexedSeq(G__30014__a,0,null);
} 
return garden$selectors$lang__delegate.call(this,args__29868__auto__);};
garden$selectors$lang.cljs$lang$maxFixedArity = 0;
garden$selectors$lang.cljs$lang$applyTo = (function (arglist__30015){
var args__29868__auto__ = cljs.core.seq(arglist__30015);
return garden$selectors$lang__delegate(args__29868__auto__);
});
garden$selectors$lang.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$lang__delegate;
return garden$selectors$lang;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rettag,null], null));
garden.selectors.not = cljs.core.with_meta((function() { 
var garden$selectors$not__delegate = function (args__29868__auto__){
var v__29869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (selector){
return garden.selectors.css_selector(selector);
}),args__29868__auto__);
var v__29869__auto____$1 = ((garden.selectors.selector_QMARK_(v__29869__auto__))?garden.selectors.css_selector(v__29869__auto__):v__29869__auto__);
return garden.selectors.selector([":","not","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__29869__auto____$1),")"].join(''));
};
var garden$selectors$not = function (var_args){
var args__29868__auto__ = null;
if (arguments.length > 0) {
var G__30016__i = 0, G__30016__a = new Array(arguments.length -  0);
while (G__30016__i < G__30016__a.length) {G__30016__a[G__30016__i] = arguments[G__30016__i + 0]; ++G__30016__i;}
  args__29868__auto__ = new cljs.core.IndexedSeq(G__30016__a,0,null);
} 
return garden$selectors$not__delegate.call(this,args__29868__auto__);};
garden$selectors$not.cljs$lang$maxFixedArity = 0;
garden$selectors$not.cljs$lang$applyTo = (function (arglist__30017){
var args__29868__auto__ = cljs.core.seq(arglist__30017);
return garden$selectors$not__delegate(args__29868__auto__);
});
garden$selectors$not.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$not__delegate;
return garden$selectors$not;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rettag,null], null));
garden.selectors.nth_child_re = (new RegExp("\\s*(?:[-+]?\\d+n\\s*(?:[-+]\\s*\\d+)?|[-+]?\\d+|odd|even)\\s*","i"));
/**
 * nth-child helper.
 */
garden.selectors.nth_x = (function garden$selectors$nth_x(x){
if(((typeof x === 'string') || ((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))))){
} else {
throw (new Error(["Assert failed: ","Argument must be a string, keyword, or symbol","\n","(or (string? x) (keyword? x) (symbol? x))"].join('')));
}

var s = cljs.core.name(x);
var temp__5751__auto__ = cljs.core.re_matches(garden.selectors.nth_child_re,s);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return m;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",["Invalid value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0))].join(''));
}
});
/**
 * CSS :nth-child pseudo class selector.
 */
garden.selectors.nth_child = cljs.core.with_meta((function() { 
var garden$selectors$nth_child__delegate = function (args__29868__auto__){
var v__29869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'number'){
return garden.selectors.nth_x([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"n"].join(''));
} else {
return garden.selectors.nth_x(x);
}
}),args__29868__auto__);
var v__29869__auto____$1 = ((garden.selectors.selector_QMARK_(v__29869__auto__))?garden.selectors.css_selector(v__29869__auto__):v__29869__auto__);
return garden.selectors.selector([":","nth-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__29869__auto____$1),")"].join(''));
};
var garden$selectors$nth_child = function (var_args){
var args__29868__auto__ = null;
if (arguments.length > 0) {
var G__30018__i = 0, G__30018__a = new Array(arguments.length -  0);
while (G__30018__i < G__30018__a.length) {G__30018__a[G__30018__i] = arguments[G__30018__i + 0]; ++G__30018__i;}
  args__29868__auto__ = new cljs.core.IndexedSeq(G__30018__a,0,null);
} 
return garden$selectors$nth_child__delegate.call(this,args__29868__auto__);};
garden$selectors$nth_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_child.cljs$lang$applyTo = (function (arglist__30019){
var args__29868__auto__ = cljs.core.seq(arglist__30019);
return garden$selectors$nth_child__delegate(args__29868__auto__);
});
garden$selectors$nth_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_child__delegate;
return garden$selectors$nth_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rettag,null], null));
/**
 * CSS :nth-last-child pseudo class selector.
 */
garden.selectors.nth_last_child = cljs.core.with_meta((function() { 
var garden$selectors$nth_last_child__delegate = function (args__29868__auto__){
var v__29869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__29868__auto__);
var v__29869__auto____$1 = ((garden.selectors.selector_QMARK_(v__29869__auto__))?garden.selectors.css_selector(v__29869__auto__):v__29869__auto__);
return garden.selectors.selector([":","nth-last-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__29869__auto____$1),")"].join(''));
};
var garden$selectors$nth_last_child = function (var_args){
var args__29868__auto__ = null;
if (arguments.length > 0) {
var G__30020__i = 0, G__30020__a = new Array(arguments.length -  0);
while (G__30020__i < G__30020__a.length) {G__30020__a[G__30020__i] = arguments[G__30020__i + 0]; ++G__30020__i;}
  args__29868__auto__ = new cljs.core.IndexedSeq(G__30020__a,0,null);
} 
return garden$selectors$nth_last_child__delegate.call(this,args__29868__auto__);};
garden$selectors$nth_last_child.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_child.cljs$lang$applyTo = (function (arglist__30021){
var args__29868__auto__ = cljs.core.seq(arglist__30021);
return garden$selectors$nth_last_child__delegate(args__29868__auto__);
});
garden$selectors$nth_last_child.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_child__delegate;
return garden$selectors$nth_last_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rettag,null], null));
/**
 * CSS :nth-of-type pseudo class selector.
 */
garden.selectors.nth_of_type = cljs.core.with_meta((function() { 
var garden$selectors$nth_of_type__delegate = function (args__29868__auto__){
var v__29869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__29868__auto__);
var v__29869__auto____$1 = ((garden.selectors.selector_QMARK_(v__29869__auto__))?garden.selectors.css_selector(v__29869__auto__):v__29869__auto__);
return garden.selectors.selector([":","nth-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__29869__auto____$1),")"].join(''));
};
var garden$selectors$nth_of_type = function (var_args){
var args__29868__auto__ = null;
if (arguments.length > 0) {
var G__30022__i = 0, G__30022__a = new Array(arguments.length -  0);
while (G__30022__i < G__30022__a.length) {G__30022__a[G__30022__i] = arguments[G__30022__i + 0]; ++G__30022__i;}
  args__29868__auto__ = new cljs.core.IndexedSeq(G__30022__a,0,null);
} 
return garden$selectors$nth_of_type__delegate.call(this,args__29868__auto__);};
garden$selectors$nth_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_of_type.cljs$lang$applyTo = (function (arglist__30023){
var args__29868__auto__ = cljs.core.seq(arglist__30023);
return garden$selectors$nth_of_type__delegate(args__29868__auto__);
});
garden$selectors$nth_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_of_type__delegate;
return garden$selectors$nth_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rettag,null], null));
/**
 * CSS :nth-last-of-type pseudo class selector.
 */
garden.selectors.nth_last_of_type = cljs.core.with_meta((function() { 
var garden$selectors$nth_last_of_type__delegate = function (args__29868__auto__){
var v__29869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return garden.selectors.nth_x(x);
}),args__29868__auto__);
var v__29869__auto____$1 = ((garden.selectors.selector_QMARK_(v__29869__auto__))?garden.selectors.css_selector(v__29869__auto__):v__29869__auto__);
return garden.selectors.selector([":","nth-last-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__29869__auto____$1),")"].join(''));
};
var garden$selectors$nth_last_of_type = function (var_args){
var args__29868__auto__ = null;
if (arguments.length > 0) {
var G__30024__i = 0, G__30024__a = new Array(arguments.length -  0);
while (G__30024__i < G__30024__a.length) {G__30024__a[G__30024__i] = arguments[G__30024__i + 0]; ++G__30024__i;}
  args__29868__auto__ = new cljs.core.IndexedSeq(G__30024__a,0,null);
} 
return garden$selectors$nth_last_of_type__delegate.call(this,args__29868__auto__);};
garden$selectors$nth_last_of_type.cljs$lang$maxFixedArity = 0;
garden$selectors$nth_last_of_type.cljs$lang$applyTo = (function (arglist__30025){
var args__29868__auto__ = cljs.core.seq(arglist__30025);
return garden$selectors$nth_last_of_type__delegate(args__29868__auto__);
});
garden$selectors$nth_last_of_type.cljs$core$IFn$_invoke$arity$variadic = garden$selectors$nth_last_of_type__delegate;
return garden$selectors$nth_last_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rettag,null], null));
/**
 * CSS ::after pseudo element selector.
 */
garden.selectors.after = garden.selectors.selector("::after");
/**
 * CSS ::before pseudo element selector.
 */
garden.selectors.before = garden.selectors.selector("::before");
/**
 * CSS ::first-letter pseudo element selector.
 */
garden.selectors.first_letter = garden.selectors.selector("::first-letter");
/**
 * CSS ::first-line pseudo element selector.
 */
garden.selectors.first_line = garden.selectors.selector("::first-line");
garden.selectors.attr = (function garden$selectors$attr(var_args){
var G__30027 = arguments.length;
switch (G__30027) {
case 1:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(garden.selectors.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return garden.selectors.selector(["[",cljs.core.name(attr_name),"]"].join(''));
}));

(garden.selectors.attr.cljs$core$IFn$_invoke$arity$3 = (function (attr_name,op,attr_value){
var v = cljs.core.name(attr_value);
var v__$1 = (cljs.core.truth_(cljs.core.re_matches(/\"(\\|[^\"])*\"|'(\\|[^\'])*'/,v))?v:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
return garden.selectors.selector(["[",cljs.core.name(attr_name),cljs.core.name(op),v__$1,"]"].join(''));
}));

(garden.selectors.attr.cljs$lang$maxFixedArity = 3);

garden.selectors.attr_EQ_ = (function garden$selectors$attr_EQ_(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"=",attr_value);
});
garden.selectors.attr_contains = (function garden$selectors$attr_contains(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"~=",attr_value);
});
garden.selectors.attr_starts_with = (function garden$selectors$attr_starts_with(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"^=",attr_value);
});
garden.selectors.attr_starts_with_STAR_ = (function garden$selectors$attr_starts_with_STAR_(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"|=",attr_value);
});
garden.selectors.attr_ends_with = (function garden$selectors$attr_ends_with(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"$=",attr_value);
});
garden.selectors.attr_matches = (function garden$selectors$attr_matches(attr_name,attr_value){
return garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"*=",attr_value);
});
/**
 * Descendant combinator.
 */
garden.selectors.descendant = (function garden$selectors$descendant(var_args){
var G__30033 = arguments.length;
switch (G__30033) {
case 2:
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___30035 = arguments.length;
var i__4819__auto___30036 = (0);
while(true){
if((i__4819__auto___30036 < len__4818__auto___30035)){
args_arr__4839__auto__.push((arguments[i__4819__auto___30036]));

var G__30037 = (i__4819__auto___30036 + (1));
i__4819__auto___30036 = G__30037;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
}));

(garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,cljs.core.cons(garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2(a,b),more))));
}));

/** @this {Function} */
(garden.selectors.descendant.cljs$lang$applyTo = (function (seq30030){
var G__30031 = cljs.core.first(seq30030);
var seq30030__$1 = cljs.core.next(seq30030);
var G__30032 = cljs.core.first(seq30030__$1);
var seq30030__$2 = cljs.core.next(seq30030__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30031,G__30032,seq30030__$2);
}));

(garden.selectors.descendant.cljs$lang$maxFixedArity = (2));

/**
 * Adjacent sibling combinator.
 */
garden.selectors._PLUS_ = (function garden$selectors$_PLUS_(a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
});
/**
 * General sibling combinator.
 */
garden.selectors._ = (function garden$selectors$_(a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," ~ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
});
/**
 * Child combinator.
 */
garden.selectors._GT_ = (function garden$selectors$_GT_(var_args){
var G__30042 = arguments.length;
switch (G__30042) {
case 1:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___30044 = arguments.length;
var i__4819__auto___30045 = (0);
while(true){
if((i__4819__auto___30045 < len__4818__auto___30044)){
args_arr__4839__auto__.push((arguments[i__4819__auto___30045]));

var G__30046 = (i__4819__auto___30045 + (1));
i__4819__auto___30045 = G__30046;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return garden.selectors.selector(a);
}));

(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(a))," > ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.selectors.css_selector(b))].join(''));
}));

(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,cljs.core.cons(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(a,b),more))));
}));

/** @this {Function} */
(garden.selectors._GT_.cljs$lang$applyTo = (function (seq30039){
var G__30040 = cljs.core.first(seq30039);
var seq30039__$1 = cljs.core.next(seq30039);
var G__30041 = cljs.core.first(seq30039__$1);
var seq30039__$2 = cljs.core.next(seq30039__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30040,G__30041,seq30039__$2);
}));

(garden.selectors._GT_.cljs$lang$maxFixedArity = (2));

/**
 * Parent selector.
 */
garden.selectors._AMPERSAND_ = garden.selectors.selector("&");
garden.selectors.lex_specificity = (function garden$selectors$lex_specificity(s){
var id_selector_re = /^\#[a-zA-Z][\w-]*/;
var class_selector_re = /^\.[a-zA-Z][\w-]*/;
var attribute_selector_re = /^\[[^\]]*\]/;
var type_selector_re = /^[a-zA-Z][\w-]/;
var pseudo_class_re = /^:[a-zA-Z][\w-]*(?:\([^\)]+\))?/;
var pseudo_element_re = /^::[a-zA-Z][\w-]*/;
return cljs.core.some((function (p__30047){
var vec__30048 = p__30047;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(1),null);
var temp__5751__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_selector_re,cljs.core.cst$kw$a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector_re,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute_selector_re,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_class_re,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_selector_re,cljs.core.cst$kw$c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_element_re,cljs.core.cst$kw$c], null)], null));
});
garden.selectors.specificity_STAR_ = (function garden$selectors$specificity_STAR_(selector){
var s = garden.selectors.css_selector(selector);
var score = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$a,(0),cljs.core.cst$kw$b,(0),cljs.core.cst$kw$c,(0)], null);
var s__$1 = s;
var score__$1 = score;
while(true){
if(cljs.core.empty_QMARK_(s__$1)){
return score__$1;
} else {
var temp__5751__auto__ = garden.selectors.lex_specificity(s__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__30057 = temp__5751__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(1),null);
var temp__5751__auto____$1 = cljs.core.re_find(/^:not\(([^\)]*)\)/,m);
if(cljs.core.truth_(temp__5751__auto____$1)){
var vec__30060 = temp__5751__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(1),null);
var G__30063 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__30064 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([score__$1,(garden.selectors.specificity_STAR_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.specificity_STAR_.cljs$core$IFn$_invoke$arity$1(inner) : garden.selectors.specificity_STAR_.call(null,inner))], 0));
s__$1 = G__30063;
score__$1 = G__30064;
continue;
} else {
var G__30065 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__30066 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(score__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.inc);
s__$1 = G__30065;
score__$1 = G__30066;
continue;
}
} else {
var G__30067 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1));
var G__30068 = score__$1;
s__$1 = G__30067;
score__$1 = G__30068;
continue;
}
}
break;
}
});
/**
 * Calculate a CSS3 selector's specificity.
 *   
 *   Example:
 * 
 *  (specificity "#s12:not(FOO)")
 *  ;; => 101
 *  (specificity (a hover))
 *  ;; => 10
 *   
 */
garden.selectors.specificity = (function garden$selectors$specificity(selector){
if((((!((selector == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === selector.garden$selectors$ICSSSelector$))))?true:(((!selector.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,selector):false)):cljs.core.native_satisfies_QMARK_(garden.selectors.ICSSSelector,selector))){
} else {
throw (new Error("Assert failed: (satisfies? ICSSSelector selector)"));
}

var map__30070 = garden.selectors.specificity_STAR_(selector);
var map__30070__$1 = cljs.core.__destructure_map(map__30070);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30070__$1,cljs.core.cst$kw$a);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30070__$1,cljs.core.cst$kw$b);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30070__$1,cljs.core.cst$kw$c);
var sv = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),/^0*/,"");
if(cljs.core.empty_QMARK_(sv)){
return (0);
} else {
return parseInt(sv);
}
});
