// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljstache.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
cljstache.core.re_quote_replacement = cljs.core.identity;
/**
 * Apply f to each element of coll, concatenate all results into a
 *   String.
 */
cljstache.core.map_str = (function cljstache$core$map_str(f,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
cljstache.core.re_matcher = (function cljstache$core$re_matcher(pattern,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern(pattern),s], null);
});
cljstache.core.re_find = (function cljstache$core$re_find(var_args){
var G__27981 = arguments.length;
switch (G__27981) {
case 2:
return cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljstache.core.re_find.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2 = (function (re,s){
return cljs.core.re_find(re,s);
}));

(cljstache.core.re_find.cljs$core$IFn$_invoke$arity$1 = (function (p__27982){
var vec__27983 = p__27982;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(1),null);
return cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2(re,s);
}));

(cljstache.core.re_find.cljs$lang$maxFixedArity = 2);

cljstache.core.re_groups = (function cljstache$core$re_groups(p__27987){
var vec__27988 = p__27987;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27988,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27988,(1),null);
return re.exec(s);
});
cljstache.core.matcher_find = (function cljstache$core$matcher_find(var_args){
var G__27992 = arguments.length;
switch (G__27992) {
case 1:
return cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$1 = (function (m){
return cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$2(m,(0));
}));

(cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$2 = (function (p__27993,offset){
var vec__27994 = p__27993;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27994,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27994,(1),null);
var temp__5753__auto__ = m.exec(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,offset));
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$match_DASH_start,(match.index + offset),cljs.core.cst$kw$match_DASH_end,((match.index + cljs.core.count(cljs.core.first(match))) + offset)], null);
} else {
return null;
}
}));

(cljstache.core.matcher_find.cljs$lang$maxFixedArity = 2);


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
cljstache.core.Section = (function (name,body,start,end,inverted,__meta,__extmap,__hash){
this.name = name;
this.body = body;
this.start = start;
this.end = end;
this.inverted = inverted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljstache.core.Section.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(cljstache.core.Section.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k27999,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__28003 = k27999;
var G__28003__$1 = (((G__28003 instanceof cljs.core.Keyword))?G__28003.fqn:null);
switch (G__28003__$1) {
case "name":
return self__.name;

break;
case "body":
return self__.body;

break;
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
case "inverted":
return self__.inverted;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27999,else__4464__auto__);

}
}));

(cljstache.core.Section.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__28004){
var vec__28005 = p__28004;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28005,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28005,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljstache.core.Section.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#cljstache.core.Section{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$body,self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$inverted,self__.inverted],null))], null),self__.__extmap));
}));

(cljstache.core.Section.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27998){
var self__ = this;
var G__27998__$1 = this;
return (new cljs.core.RecordIter((0),G__27998__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$body,cljs.core.cst$kw$start,cljs.core.cst$kw$end,cljs.core.cst$kw$inverted], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljstache.core.Section.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(cljstache.core.Section.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,self__.inverted,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljstache.core.Section.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljstache.core.Section.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__28008 = (function (coll__4458__auto__){
return (5152572 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__28008(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljstache.core.Section.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28000,other28001){
var self__ = this;
var this28000__$1 = this;
return (((!((other28001 == null)))) && ((((this28000__$1.constructor === other28001.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28000__$1.name,other28001.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28000__$1.body,other28001.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28000__$1.start,other28001.start)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28000__$1.end,other28001.end)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28000__$1.inverted,other28001.inverted)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28000__$1.__extmap,other28001.__extmap)))))))))))))));
}));

(cljstache.core.Section.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$end,null,cljs.core.cst$kw$body,null,cljs.core.cst$kw$inverted,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,self__.inverted,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(cljstache.core.Section.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k27999){
var self__ = this;
var this__4468__auto____$1 = this;
var G__28009 = k27999;
var G__28009__$1 = (((G__28009 instanceof cljs.core.Keyword))?G__28009.fqn:null);
switch (G__28009__$1) {
case "name":
case "body":
case "start":
case "end":
case "inverted":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27999);

}
}));

(cljstache.core.Section.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__27998){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__28010 = cljs.core.keyword_identical_QMARK_;
var expr__28011 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__28013 = cljs.core.cst$kw$name;
var G__28014 = expr__28011;
return (pred__28010.cljs$core$IFn$_invoke$arity$2 ? pred__28010.cljs$core$IFn$_invoke$arity$2(G__28013,G__28014) : pred__28010.call(null,G__28013,G__28014));
})())){
return (new cljstache.core.Section(G__27998,self__.body,self__.start,self__.end,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28015 = cljs.core.cst$kw$body;
var G__28016 = expr__28011;
return (pred__28010.cljs$core$IFn$_invoke$arity$2 ? pred__28010.cljs$core$IFn$_invoke$arity$2(G__28015,G__28016) : pred__28010.call(null,G__28015,G__28016));
})())){
return (new cljstache.core.Section(self__.name,G__27998,self__.start,self__.end,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28017 = cljs.core.cst$kw$start;
var G__28018 = expr__28011;
return (pred__28010.cljs$core$IFn$_invoke$arity$2 ? pred__28010.cljs$core$IFn$_invoke$arity$2(G__28017,G__28018) : pred__28010.call(null,G__28017,G__28018));
})())){
return (new cljstache.core.Section(self__.name,self__.body,G__27998,self__.end,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28019 = cljs.core.cst$kw$end;
var G__28020 = expr__28011;
return (pred__28010.cljs$core$IFn$_invoke$arity$2 ? pred__28010.cljs$core$IFn$_invoke$arity$2(G__28019,G__28020) : pred__28010.call(null,G__28019,G__28020));
})())){
return (new cljstache.core.Section(self__.name,self__.body,self__.start,G__27998,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28021 = cljs.core.cst$kw$inverted;
var G__28022 = expr__28011;
return (pred__28010.cljs$core$IFn$_invoke$arity$2 ? pred__28010.cljs$core$IFn$_invoke$arity$2(G__28021,G__28022) : pred__28010.call(null,G__28021,G__28022));
})())){
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,G__27998,self__.__meta,self__.__extmap,null));
} else {
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,self__.inverted,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__27998),null));
}
}
}
}
}
}));

(cljstache.core.Section.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$body,self__.body,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start,self__.start,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end,self__.end,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$inverted,self__.inverted,null))], null),self__.__extmap));
}));

(cljstache.core.Section.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__27998){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,self__.inverted,G__27998,self__.__extmap,self__.__hash));
}));

(cljstache.core.Section.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljstache.core.Section.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$body,cljs.core.cst$sym$start,cljs.core.cst$sym$end,cljs.core.cst$sym$inverted], null);
}));

(cljstache.core.Section.cljs$lang$type = true);

(cljstache.core.Section.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljstache.core/Section",null,(1),null));
}));

(cljstache.core.Section.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"cljstache.core/Section");
}));

/**
 * Positional factory function for cljstache.core/Section.
 */
cljstache.core.__GT_Section = (function cljstache$core$__GT_Section(name,body,start,end,inverted){
return (new cljstache.core.Section(name,body,start,end,inverted,null,null,null));
});

/**
 * Factory function for cljstache.core/Section, taking a map of keywords to field values.
 */
cljstache.core.map__GT_Section = (function cljstache$core$map__GT_Section(G__28002){
var extmap__4501__auto__ = (function (){var G__28023 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28002,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$body,cljs.core.cst$kw$start,cljs.core.cst$kw$end,cljs.core.cst$kw$inverted], 0));
if(cljs.core.record_QMARK_(G__28002)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28023);
} else {
return G__28023;
}
})();
return (new cljstache.core.Section(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__28002),cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(G__28002),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__28002),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__28002),cljs.core.cst$kw$inverted.cljs$core$IFn$_invoke$arity$1(G__28002),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Replace all instances of pattern in str
 */
cljstache.core.str_replace = (function cljstache$core$str_replace(s,from,to){
return clojure.string.replace(s,cljs.core.re_pattern(from),to);
});
/**
 * Applies all replacements from the replacement list to the string.
 * Replacements are a sequence of two element sequences where the first element
 * is the pattern to match and the second is the replacement.
 * An optional third boolean argument can be set to true if the replacement
 * should not be quoted.
 */
cljstache.core.replace_all = (function cljstache$core$replace_all(string,replacements){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (string__$1,p__28026){
var vec__28027 = p__28026;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28027,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28027,(1),null);
var dont_quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28027,(2),null);
return cljstache.core.str_replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(string__$1),from,(cljs.core.truth_(dont_quote)?to:(cljstache.core.re_quote_replacement.cljs$core$IFn$_invoke$arity$1 ? cljstache.core.re_quote_replacement.cljs$core$IFn$_invoke$arity$1(to) : cljstache.core.re_quote_replacement.call(null,to))));
}),string,replacements);
});
/**
 * Replaces angle brackets with the respective HTML entities.
 */
cljstache.core.escape_html = (function cljstache$core$escape_html(string){
return cljstache.core.replace_all(string,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&","&amp;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"","&quot;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<","&lt;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [">","&gt;"], null)], null));
});
/**
 * Indent all lines of the partial by indent.
 */
cljstache.core.indent_partial = (function cljstache$core$indent_partial(partial,indent){
return cljstache.core.replace_all(partial,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\r\n|[\r\n])(.+)",["$1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),"$2"].join(''),true], null)], null));
});
cljstache.core.regex_chars = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\","{","}","[","]","(",")",".","?","^","+","-","|"], null);
/**
 * Escapes characters that have special meaning in regular expressions.
 */
cljstache.core.escape_regex = (function cljstache$core$escape_regex(regex){
return cljstache.core.replace_all(regex,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28030_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28030_SHARP_)].join(''));
}),cljstache.core.regex_chars));
});
/**
 * Unescapes characters that have special meaning in regular expressions.
 */
cljstache.core.unescape_regex = (function cljstache$core$unescape_regex(regex){
return cljstache.core.replace_all(regex,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (char$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\\\\\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join(''),char$,true], null);
}),cljstache.core.regex_chars));
});
cljstache.core.__GT_stringbuilder = (function cljstache$core$__GT_stringbuilder(var_args){
var G__28032 = arguments.length;
switch (G__28032) {
case 0:
return cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$1("");
}));

(cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(s);
}));

(cljstache.core.__GT_stringbuilder.cljs$lang$maxFixedArity = 1);

/**
 * Perform mutation on stringbuilder object
 */
cljstache.core.sb_BANG_ = (function cljstache$core$sb_BANG_(s,f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(s,f);

return s;
});
cljstache.core.sb__GT_str = (function cljstache$core$sb__GT_str(s){
return cljs.core.deref(s);
});
cljstache.core.sb_replace = (function cljstache$core$sb_replace(s,start,end,s_SINGLEQUOTE_){
return cljstache.core.sb_BANG_(s,(function (p1__28034_SHARP_){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__28034_SHARP_,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__28034_SHARP_,end)].join('');
}));
});
cljstache.core.sb_delete = (function cljstache$core$sb_delete(s,start,end){
return cljstache.core.sb_BANG_(s,(function (p1__28035_SHARP_){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__28035_SHARP_,(0),start),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__28035_SHARP_,end)].join('');
}));
});
cljstache.core.sb_append = (function cljstache$core$sb_append(s,s_SINGLEQUOTE_){
return cljstache.core.sb_BANG_(s,(function (p1__28036_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28036_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_)].join('');
}));
});
cljstache.core.sb_insert = (function cljstache$core$sb_insert(s,index,s_SINGLEQUOTE_){
return cljstache.core.sb_replace(s,index,index,s_SINGLEQUOTE_);
});
cljstache.core.delim_matcher = (function cljstache$core$delim_matcher(open,close,s){
return cljstache.core.re_matcher(cljs.core.re_pattern(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(open),".*?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(close),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\\{\\{",open))?"|\\{\\{.*?\\}\\}":null),")"].join('')),s);
});
cljstache.core.find_custom_delimiters = (function cljstache$core$find_custom_delimiters(open,close,s){
return cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(open),"=\\s*(.*?) (.*?)\\s*=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(close)].join('')),s);
});
/**
 * Replaces custom set delimiters with mustaches.
 */
cljstache.core.process_set_delimiters = (function cljstache$core$process_set_delimiters(template,data){
var builder = cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$1(template);
var data__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
var open_delim = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljstache.core.escape_regex("{{"));
var close_delim = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljstache.core.escape_regex("}}"));
var set_delims = (function (open,close){
var seq__28038 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_delim,open], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [close_delim,close], null)], null));
var chunk__28039 = null;
var count__28040 = (0);
var i__28041 = (0);
while(true){
if((i__28041 < count__28040)){
var vec__28048 = chunk__28039.cljs$core$IIndexed$_nth$arity$2(null,i__28041);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28048,(0),null);
var delim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28048,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(var$,cljs.core.constantly(cljstache.core.escape_regex(delim)));


var G__28055 = seq__28038;
var G__28056 = chunk__28039;
var G__28057 = count__28040;
var G__28058 = (i__28041 + (1));
seq__28038 = G__28055;
chunk__28039 = G__28056;
count__28040 = G__28057;
i__28041 = G__28058;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28038);
if(temp__5753__auto__){
var seq__28038__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28038__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__28038__$1);
var G__28059 = cljs.core.chunk_rest(seq__28038__$1);
var G__28060 = c__4638__auto__;
var G__28061 = cljs.core.count(c__4638__auto__);
var G__28062 = (0);
seq__28038 = G__28059;
chunk__28039 = G__28060;
count__28040 = G__28061;
i__28041 = G__28062;
continue;
} else {
var vec__28051 = cljs.core.first(seq__28038__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28051,(0),null);
var delim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28051,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(var$,cljs.core.constantly(cljstache.core.escape_regex(delim)));


var G__28063 = cljs.core.next(seq__28038__$1);
var G__28064 = null;
var G__28065 = (0);
var G__28066 = (0);
seq__28038 = G__28063;
chunk__28039 = G__28064;
count__28040 = G__28065;
i__28041 = G__28066;
continue;
}
} else {
return null;
}
}
break;
}
});
var offset_28067 = (0);
while(true){
var custom_delim_QMARK__28068 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\\{\\{",cljs.core.deref(open_delim));
var s_28069 = cljstache.core.sb__GT_str(builder);
var matcher_28070 = cljstache.core.delim_matcher(cljs.core.deref(open_delim),cljs.core.deref(close_delim),s_28069);
var temp__5753__auto___28071 = cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$2(matcher_28070,offset_28067);
if(cljs.core.truth_(temp__5753__auto___28071)){
var match_result_28072 = temp__5753__auto___28071;
var map__28054_28073 = match_result_28072;
var map__28054_28074__$1 = cljs.core.__destructure_map(map__28054_28073);
var match_start_28075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28054_28074__$1,cljs.core.cst$kw$match_DASH_start);
var match_end_28076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28054_28074__$1,cljs.core.cst$kw$match_DASH_end);
var match_28077 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s_28069,match_start_28075,match_end_28076);
if(((custom_delim_QMARK__28068) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{{{",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match_28077,(0),(3)))))){
var temp__5753__auto___28078__$1 = cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2(/\{\{\{(.*?)\}\}\}/,match_28077);
if(cljs.core.truth_(temp__5753__auto___28078__$1)){
var tag_28079 = temp__5753__auto___28078__$1;
cljstache.core.sb_replace(builder,match_start_28075,match_end_28076,["\\{\\{\\{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(tag_28079)),"\\}\\}\\}"].join(''));

var G__28080 = (match_end_28076 | (0));
offset_28067 = G__28080;
continue;
} else {
}
} else {
if(((custom_delim_QMARK__28068) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{{",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match_28077,(0),(2)))))){
var temp__5753__auto___28081__$1 = cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2(/\{\{(.*?)\}\}/,match_28077);
if(cljs.core.truth_(temp__5753__auto___28081__$1)){
var tag_28082 = temp__5753__auto___28081__$1;
cljstache.core.sb_replace(builder,match_start_28075,match_end_28076,["\\{\\{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(tag_28082)),"\\}\\}"].join(''));

var G__28083 = (match_end_28076 | (0));
offset_28067 = G__28083;
continue;
} else {
}
} else {
var temp__5751__auto___28084 = cljstache.core.find_custom_delimiters(cljs.core.deref(open_delim),cljs.core.deref(close_delim),match_28077);
if(cljs.core.truth_(temp__5751__auto___28084)){
var delim_change_28085 = temp__5751__auto___28084;
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(set_delims,cljs.core.rest(delim_change_28085));

cljstache.core.sb_delete(builder,match_start_28075,match_end_28076);

var G__28086 = (match_start_28075 | (0));
offset_28067 = G__28086;
continue;
} else {
var temp__5753__auto___28087__$1 = cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(open_delim)),"(.*?)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(close_delim))].join('')),match_28077);
if(cljs.core.truth_(temp__5753__auto___28087__$1)){
var tag_28088 = temp__5753__auto___28087__$1;
var section_start_28089 = cljstache.core.re_find.cljs$core$IFn$_invoke$arity$2(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(open_delim)),"\\s*#\\s*(.*?)\\s*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(close_delim))].join('')),cljs.core.first(tag_28088));
var key_28090 = (cljs.core.truth_(section_start_28089)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(section_start_28089)):null);
var value_28091 = (cljs.core.truth_(key_28090)?key_28090.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)):null);
if(cljs.core.truth_((function (){var and__4210__auto__ = value_28091;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.fn_QMARK_(value_28091)) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(open_delim),"\\{\\{")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(close_delim),"\\}\\}")))))));
} else {
return and__4210__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(data__$1,((function (offset_28067,section_start_28089,key_28090,value_28091,tag_28088,temp__5753__auto___28087__$1,temp__5751__auto___28084,map__28054_28073,map__28054_28074__$1,match_start_28075,match_end_28076,match_28077,match_result_28072,temp__5753__auto___28071,custom_delim_QMARK__28068,s_28069,matcher_28070,builder,data__$1,open_delim,close_delim,set_delims){
return (function (p1__28037_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__28037_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_28090], null),((function (offset_28067,section_start_28089,key_28090,value_28091,tag_28088,temp__5753__auto___28087__$1,temp__5751__auto___28084,map__28054_28073,map__28054_28074__$1,match_start_28075,match_end_28076,match_28077,match_result_28072,temp__5753__auto___28071,custom_delim_QMARK__28068,s_28069,matcher_28070,builder,data__$1,open_delim,close_delim,set_delims){
return (function (old){
return ((function (offset_28067,section_start_28089,key_28090,value_28091,tag_28088,temp__5753__auto___28087__$1,temp__5751__auto___28084,map__28054_28073,map__28054_28074__$1,match_start_28075,match_end_28076,match_28077,match_result_28072,temp__5753__auto___28071,custom_delim_QMARK__28068,s_28069,matcher_28070,builder,data__$1,open_delim,close_delim,set_delims){
return (function (data__$2){
return ["{{=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.unescape_regex(cljs.core.deref(open_delim)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.unescape_regex(cljs.core.deref(close_delim))),"=}}",cljs.core.str.cljs$core$IFn$_invoke$arity$1((old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(data__$2) : old.call(null,data__$2)))].join('');
});
;})(offset_28067,section_start_28089,key_28090,value_28091,tag_28088,temp__5753__auto___28087__$1,temp__5751__auto___28084,map__28054_28073,map__28054_28074__$1,match_start_28075,match_end_28076,match_28077,match_result_28072,temp__5753__auto___28071,custom_delim_QMARK__28068,s_28069,matcher_28070,builder,data__$1,open_delim,close_delim,set_delims))
});})(offset_28067,section_start_28089,key_28090,value_28091,tag_28088,temp__5753__auto___28087__$1,temp__5751__auto___28084,map__28054_28073,map__28054_28074__$1,match_start_28075,match_end_28076,match_28077,match_result_28072,temp__5753__auto___28071,custom_delim_QMARK__28068,s_28069,matcher_28070,builder,data__$1,open_delim,close_delim,set_delims))
);
});})(offset_28067,section_start_28089,key_28090,value_28091,tag_28088,temp__5753__auto___28087__$1,temp__5751__auto___28084,map__28054_28073,map__28054_28074__$1,match_start_28075,match_end_28076,match_28077,match_result_28072,temp__5753__auto___28071,custom_delim_QMARK__28068,s_28069,matcher_28070,builder,data__$1,open_delim,close_delim,set_delims))
);
} else {
}

cljstache.core.sb_replace(builder,match_start_28075,match_end_28076,["{{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(tag_28088)),"}}"].join(''));

var G__28092 = (match_end_28076 | (0));
offset_28067 = G__28092;
continue;
} else {
}
}

}
}
} else {
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstache.core.sb__GT_str(builder),cljs.core.deref(data__$1)], null);
});
/**
 * Creates pairs of partial replacements.
 */
cljstache.core.create_partial_replacements = (function cljstache$core$create_partial_replacements(template,partials){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4611__auto__ = (function cljstache$core$create_partial_replacements_$_iter__28093(s__28094){
return (new cljs.core.LazySeq(null,(function (){
var s__28094__$1 = s__28094;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28094__$1);
if(temp__5753__auto__){
var s__28094__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28094__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28094__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28096 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28095 = (0);
while(true){
if((i__28095 < size__4610__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4609__auto__,i__28095);
cljs.core.chunk_append(b__28096,(function (){var regex = cljs.core.re_pattern(["(\r\n|[\r\n]|^)([ \\t]*)\\{\\{>\\s*",cljs.core.name(k),"\\s*\\}\\}"].join(''));
var indent = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.re_seq(cljs.core.re_pattern(regex),template)),(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\\{\\{>\\s*",cljs.core.name(k),"\\s*\\}\\}"].join(''),cljs.core.first(cljstache.core.process_set_delimiters(cljstache.core.indent_partial(cljs.core.str.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(partials) : k.call(null,partials))),indent),cljs.core.PersistentArrayMap.EMPTY))], null)], null);
})());

var G__28097 = (i__28095 + (1));
i__28095 = G__28097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28096),cljstache$core$create_partial_replacements_$_iter__28093(cljs.core.chunk_rest(s__28094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28096),null);
}
} else {
var k = cljs.core.first(s__28094__$2);
return cljs.core.cons((function (){var regex = cljs.core.re_pattern(["(\r\n|[\r\n]|^)([ \\t]*)\\{\\{>\\s*",cljs.core.name(k),"\\s*\\}\\}"].join(''));
var indent = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.re_seq(cljs.core.re_pattern(regex),template)),(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\\{\\{>\\s*",cljs.core.name(k),"\\s*\\}\\}"].join(''),cljs.core.first(cljstache.core.process_set_delimiters(cljstache.core.indent_partial(cljs.core.str.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(partials) : k.call(null,partials))),indent),cljs.core.PersistentArrayMap.EMPTY))], null)], null);
})(),cljstache$core$create_partial_replacements_$_iter__28093(cljs.core.rest(s__28094__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.keys(partials));
})());
});
/**
 * Include partials within the template.
 */
cljstache.core.include_partials = (function cljstache$core$include_partials(template,partials){
return cljstache.core.replace_all(template,cljstache.core.create_partial_replacements(template,partials));
});
/**
 * Removes comments from the template.
 */
cljstache.core.remove_comments = (function cljstache$core$remove_comments(template){
var comment_regex = "\\{\\{\\![^\\}]*\\}\\}";
return cljstache.core.replace_all(template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(^|[\n\r])[ \t]*",comment_regex,"(\r\n|[\r\n]|$)"].join(''),"$1",true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comment_regex,""], null)], null));
});
/**
 * Return the next index of the supplied regex.
 */
cljstache.core.next_index = (function cljstache$core$next_index(var_args){
var G__28099 = arguments.length;
switch (G__28099) {
case 2:
return cljstache.core.next_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljstache.core.next_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljstache.core.next_index.cljs$core$IFn$_invoke$arity$2 = (function (section,regex){
return cljstache.core.next_index.cljs$core$IFn$_invoke$arity$3(section,regex,(0));
}));

(cljstache.core.next_index.cljs$core$IFn$_invoke$arity$3 = (function (section,regex,index){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(-1))){
return (-1);
} else {
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(section,index);
var matcher = (new RegExp(cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex).source,"g"));
var temp__5751__auto__ = regex.exec(s);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return (index + m.index);
} else {
return (-1);
}
}
}));

(cljstache.core.next_index.cljs$lang$maxFixedArity = 3);

/**
 * Find the next section start tag, starting to search at index.
 */
cljstache.core.find_section_start_tag = (function cljstache$core$find_section_start_tag(template,index){
return cljstache.core.next_index.cljs$core$IFn$_invoke$arity$3(template,/\{\{[#\^][^\}]*\}\}/,index);
});
/**
 * Find the matching end tag for a section at the specified level,
 * starting to search at index.
 */
cljstache.core.find_section_end_tag = (function cljstache$core$find_section_end_tag(template,index,level){
var next_start = cljstache.core.find_section_start_tag(template,index);
var next_end = cljstache.core.next_index.cljs$core$IFn$_invoke$arity$3(template,/\{\{\/[^\}]*\}\}/,index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_end,(-1))){
return (-1);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_start,(-1))) && ((next_start < next_end)))){
var G__28101 = template;
var G__28102 = (next_start + (3));
var G__28103 = (level + (1));
return (cljstache.core.find_section_end_tag.cljs$core$IFn$_invoke$arity$3 ? cljstache.core.find_section_end_tag.cljs$core$IFn$_invoke$arity$3(G__28101,G__28102,G__28103) : cljstache.core.find_section_end_tag.call(null,G__28101,G__28102,G__28103));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,(1))){
return next_end;
} else {
var G__28104 = template;
var G__28105 = (next_end + (3));
var G__28106 = (level - (1));
return (cljstache.core.find_section_end_tag.cljs$core$IFn$_invoke$arity$3 ? cljstache.core.find_section_end_tag.cljs$core$IFn$_invoke$arity$3(G__28104,G__28105,G__28106) : cljstache.core.find_section_end_tag.call(null,G__28104,G__28105,G__28106));
}
}
}
});
/**
 * Extracts the outer section from the template.
 */
cljstache.core.extract_section = (function cljstache$core$extract_section(template){
var start = cljstache.core.find_section_start_tag(template,(0));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,(-1))){
var inverted = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(template.charAt((start + (2)))),"^");
var end_tag = cljstache.core.find_section_end_tag(template,(start + (3)),(1));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(end_tag,(-1))){
var end = (template.indexOf("}}",end_tag) + (2));
var section = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(template,start,end);
var body_start = (section.indexOf("}}") + (2));
var body_end = section.lastIndexOf("{{");
var body = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(body_start,(-1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(body_end,(-1))) || ((body_end < body_start))))))?"":cljs.core.subs.cljs$core$IFn$_invoke$arity$3(section,body_start,body_end));
var section_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(section,(3),section.indexOf("}}")).trim();
return (new cljstache.core.Section(section_name,body,start,end,inverted,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Replaces each occurrence of the regex with the return value of the callback.
 */
cljstache.core.replace_all_callback = (function cljstache$core$replace_all_callback(string,regex,callback){
return clojure.string.replace(string,regex,callback);
});
/**
 * Replaces variables in the template with their values from the data.
 */
cljstache.core.replace_variables = (function cljstache$core$replace_variables(template,data,partials){
var regex = /\{\{(\{|\&|\>|)\s*(.*?)\s*\}{2,3}/;
return cljstache.core.replace_all_callback(template,regex,(function (p1__28107_SHARP_){
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28107_SHARP_,(2));
var var_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(var_name);
var var_type = cljs.core.second(p1__28107_SHARP_);
var var_value = (var_k.cljs$core$IFn$_invoke$arity$1 ? var_k.cljs$core$IFn$_invoke$arity$1(data) : var_k.call(null,data));
var var_value__$1 = ((cljs.core.fn_QMARK_(var_value))?(function (){var G__28108 = (var_value.cljs$core$IFn$_invoke$arity$0 ? var_value.cljs$core$IFn$_invoke$arity$0() : var_value.call(null));
var G__28109 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,var_name);
var G__28110 = partials;
var G__28111 = false;
return (cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4 ? cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4(G__28108,G__28109,G__28110,G__28111) : cljstache.core.render_template.call(null,G__28108,G__28109,G__28110,G__28111));
})():var_value);
var var_value__$2 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_value__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var_type,"")){
return cljstache.core.escape_html(var_value__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var_type,">")){
var G__28112 = (var_k.cljs$core$IFn$_invoke$arity$1 ? var_k.cljs$core$IFn$_invoke$arity$1(partials) : var_k.call(null,partials));
var G__28113 = data;
var G__28114 = partials;
var G__28115 = false;
return (cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4 ? cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4(G__28112,G__28113,G__28114,G__28115) : cljstache.core.render_template.call(null,G__28112,G__28113,G__28114,G__28115));
} else {
return var_value__$2;

}
}
}));
});
/**
 * Remove newlines after standalone (i.e. on their own line) delimiter tags.
 */
cljstache.core.join_standalone_delimiter_tags = (function cljstache$core$join_standalone_delimiter_tags(template){
return cljstache.core.replace_all(template,(function (){var eol_start = "(\r\n|[\r\n]|^)";
var eol_end = "(\r\n|[\r\n]|$)";
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"[ \t]*(\\{\\{=[^\\}]*\\}\\})",eol_end].join(''),"$1$2",true], null)], null);
})());
});
/**
 * Extract the data for the supplied path.
 */
cljstache.core.path_data = (function cljstache$core$path_data(elements,data){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,elements));
});
/**
 * Convert a tag with a dotted name to nested sections, using the
 *   supplied delimiters to access the value.
 */
cljstache.core.convert_path = (function cljstache$core$convert_path(tag,open_delim,close_delim,data){
var tag_type = cljs.core.last(open_delim);
var section_tag = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tag_type]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","^","/"], null));
var section_end_tag = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_type,"/");
var builder = cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$0();
var tail_builder = (cljs.core.truth_(section_tag)?null:cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$0());
var elements = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag,/\./);
var element_to_invert = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_type,"^"))?(function (){var path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(elements)], null);
var remaining_elements = cljs.core.rest(elements);
while(true){
if(cljs.core.empty_QMARK_(remaining_elements)){
return null;
} else {
if((cljstache.core.path_data(path,data) == null)){
return cljs.core.last(path);
} else {
var G__28120 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.first(remaining_elements));
var G__28121 = cljs.core.next(remaining_elements);
path = G__28120;
remaining_elements = G__28121;
continue;
}
}
break;
}
})():null);
if(((cljs.core.not(section_tag)) && ((cljstache.core.path_data(elements,data) == null)))){
return "";
} else {
var elements__$1 = ((section_end_tag)?cljs.core.reverse(elements):elements);
var seq__28116_28122 = cljs.core.seq(cljs.core.butlast(elements__$1));
var chunk__28117_28123 = null;
var count__28118_28124 = (0);
var i__28119_28125 = (0);
while(true){
if((i__28119_28125 < count__28118_28124)){
var element_28126 = chunk__28117_28123.cljs$core$IIndexed$_nth$arity$2(null,i__28119_28125);
cljstache.core.sb_append(builder,["{{",((section_end_tag)?"/":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_28126,element_to_invert))?"^":"#")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_28126),"}}"].join(''));

if((!((tail_builder == null)))){
cljstache.core.sb_insert(tail_builder,(0),["{{/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_28126),"}}"].join(''));
} else {
}


var G__28127 = seq__28116_28122;
var G__28128 = chunk__28117_28123;
var G__28129 = count__28118_28124;
var G__28130 = (i__28119_28125 + (1));
seq__28116_28122 = G__28127;
chunk__28117_28123 = G__28128;
count__28118_28124 = G__28129;
i__28119_28125 = G__28130;
continue;
} else {
var temp__5753__auto___28131 = cljs.core.seq(seq__28116_28122);
if(temp__5753__auto___28131){
var seq__28116_28132__$1 = temp__5753__auto___28131;
if(cljs.core.chunked_seq_QMARK_(seq__28116_28132__$1)){
var c__4638__auto___28133 = cljs.core.chunk_first(seq__28116_28132__$1);
var G__28134 = cljs.core.chunk_rest(seq__28116_28132__$1);
var G__28135 = c__4638__auto___28133;
var G__28136 = cljs.core.count(c__4638__auto___28133);
var G__28137 = (0);
seq__28116_28122 = G__28134;
chunk__28117_28123 = G__28135;
count__28118_28124 = G__28136;
i__28119_28125 = G__28137;
continue;
} else {
var element_28138 = cljs.core.first(seq__28116_28132__$1);
cljstache.core.sb_append(builder,["{{",((section_end_tag)?"/":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_28138,element_to_invert))?"^":"#")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_28138),"}}"].join(''));

if((!((tail_builder == null)))){
cljstache.core.sb_insert(tail_builder,(0),["{{/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_28138),"}}"].join(''));
} else {
}


var G__28139 = cljs.core.next(seq__28116_28132__$1);
var G__28140 = null;
var G__28141 = (0);
var G__28142 = (0);
seq__28116_28122 = G__28139;
chunk__28117_28123 = G__28140;
count__28118_28124 = G__28141;
i__28119_28125 = G__28142;
continue;
}
} else {
}
}
break;
}

cljstache.core.sb_append(builder,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(open_delim),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(elements__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_delim)].join(''));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.sb__GT_str(builder)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!((tail_builder == null))))?cljstache.core.sb__GT_str(tail_builder):null))].join('');
}
});
/**
 * Converts tags with dotted tag names to nested sections.
 */
cljstache.core.convert_paths = (function cljstache$core$convert_paths(template,data){
var s = template;
while(true){
var matcher = cljstache.core.re_matcher(/(\{\{[\{&#\^\/]?)([^\}]+\.[^\}]+)(\}{2,3})/,s);
var temp__5751__auto__ = cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$1(matcher);
if(cljs.core.truth_(temp__5751__auto__)){
var match_result = temp__5751__auto__;
var map__28144 = match_result;
var map__28144__$1 = cljs.core.__destructure_map(map__28144);
var match_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28144__$1,cljs.core.cst$kw$match_DASH_start);
var match_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28144__$1,cljs.core.cst$kw$match_DASH_end);
var groups = cljstache.core.re_groups(matcher);
var converted = cljstache.core.convert_path(clojure.string.trim(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(groups,(2))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(groups,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(groups,(3)),data);
var G__28145 = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),match_start),converted,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,match_end)].join('');
s = G__28145;
continue;
} else {
return s;
}
break;
}
});
/**
 * Remove newlines after standalone (i.e. on their own line) section/partials
 * tags.
 */
cljstache.core.join_standalone_tags = (function cljstache$core$join_standalone_tags(template){
return cljstache.core.replace_all(template,(function (){var eol_start = "(\r\n|[\r\n]|^)";
var eol_end = "(\r\n|[\r\n]|$)";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"\\{\\{[#\\^][^\\}]*\\}\\}(\r\n|[\r\n])\\{\\{/[^\\}]*\\}\\}",eol_end].join(''),"$1",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"[ \t]*(\\{\\{[#\\^/][^\\}]*\\}\\})",eol_end].join(''),"$1$2",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"([ \t]*\\{\\{>\\s*[^\\}]*\\s*\\}\\})",eol_end].join(''),"$1$2",true], null)], null);
})());
});
cljstache.core.delimiter_preprocess = (function cljstache$core$delimiter_preprocess(template,data){
var template__$1 = cljstache.core.join_standalone_delimiter_tags(template);
var vec__28146 = cljstache.core.process_set_delimiters(template__$1,data);
var template__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28146,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28146,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template__$2,data__$1], null);
});
/**
 * Preprocesses template and data (e.g. removing comments).
 */
cljstache.core.preprocess = (function cljstache$core$preprocess(template,data,partials){
var vec__28149 = cljstache.core.delimiter_preprocess(template,data);
var template__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28149,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28149,(1),null);
var template__$2 = cljstache.core.join_standalone_delimiter_tags(template__$1);
var vec__28152 = cljstache.core.process_set_delimiters(template__$2,data__$1);
var template__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(0),null);
var data__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(1),null);
var template__$4 = cljstache.core.join_standalone_tags(template__$3);
var template__$5 = cljstache.core.remove_comments(template__$4);
var template__$6 = cljstache.core.include_partials(template__$5,partials);
var template__$7 = cljstache.core.convert_paths(template__$6,data__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template__$7,data__$2], null);
});
cljstache.core.render_section = (function cljstache$core$render_section(section,data,partials){
var section_data = (function (){var fexpr__28157 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(section));
return (fexpr__28157.cljs$core$IFn$_invoke$arity$1 ? fexpr__28157.cljs$core$IFn$_invoke$arity$1(data) : fexpr__28157.call(null,data));
})();
if(cljs.core.truth_(cljs.core.cst$kw$inverted.cljs$core$IFn$_invoke$arity$1(section))){
if(((((cljs.core.seqable_QMARK_(section_data)) && (cljs.core.empty_QMARK_(section_data)))) || (cljs.core.not(section_data)))){
return cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(section);
} else {
return null;
}
} else {
if(cljs.core.truth_(section_data)){
if(cljs.core.fn_QMARK_(section_data)){
var result = (function (){var G__28158 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(section);
return (section_data.cljs$core$IFn$_invoke$arity$1 ? section_data.cljs$core$IFn$_invoke$arity$1(G__28158) : section_data.call(null,G__28158));
})();
if(cljs.core.fn_QMARK_(result)){
var G__28159 = (function (p1__28155_SHARP_){
return (cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4 ? cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4(p1__28155_SHARP_,data,partials,false) : cljstache.core.render_template.call(null,p1__28155_SHARP_,data,partials,false));
});
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(G__28159) : result.call(null,G__28159));
} else {
return result;
}
} else {
var section_data__$1 = ((typeof section_data === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core.sequential_QMARK_(section_data))?section_data:((cljs.core.map_QMARK_(section_data))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [section_data], null):((cljs.core.seqable_QMARK_(section_data))?cljs.core.seq(section_data):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)
))));
var section_data__$2 = ((cljs.core.map_QMARK_(cljs.core.first(section_data__$1)))?section_data__$1:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("."),e]);
}),section_data__$1));
var section_data__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28156_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data,p1__28156_SHARP_);
}),section_data__$2);
return cljstache.core.map_str((function (m){
var G__28160 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(section);
var G__28161 = m;
var G__28162 = partials;
var G__28163 = false;
return (cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4 ? cljstache.core.render_template.cljs$core$IFn$_invoke$arity$4(G__28160,G__28161,G__28162,G__28163) : cljstache.core.render_template.call(null,G__28160,G__28161,G__28162,G__28163));
}),section_data__$3);
}
} else {
return null;
}
}
});
/**
 * Renders the template with the data and partials.
 */
cljstache.core.render_template = (function cljstache$core$render_template(template,data,partials,skip_delimiter_preprocess_QMARK_){
while(true){
var vec__28164 = (cljs.core.truth_(skip_delimiter_preprocess_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template,data], null):cljstache.core.delimiter_preprocess(template,data));
var template__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28164,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28164,(1),null);
var section = cljstache.core.extract_section(template__$1);
if((section == null)){
return cljstache.core.replace_variables(template__$1,data__$1,partials);
} else {
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(template__$1,(0),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(section));
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(template__$1,cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(section));
var G__28167 = [before,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.render_section(section,data__$1,partials)),after].join('');
var G__28168 = data__$1;
var G__28169 = partials;
var G__28170 = false;
template = G__28167;
data = G__28168;
partials = G__28169;
skip_delimiter_preprocess_QMARK_ = G__28170;
continue;
}
break;
}
});
/**
 * Returns set of all tags in template
 */
cljstache.core.tags = (function cljstache$core$tags(template){
var vec__28171 = cljstache.core.preprocess(template,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
var template__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28171,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28171,(1),null);
var matches = cljs.core.re_seq(/\{\{(\{|\&|\>|)\s*(.*?)\s*\}{2,3}/,template__$1);
var tags = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.last),matches);
return cljs.core.set(tags);
});
/**
 * Renders the template with the data and, if supplied, partials.
 */
cljstache.core.render = (function cljstache$core$render(var_args){
var G__28175 = arguments.length;
switch (G__28175) {
case 1:
return cljstache.core.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljstache.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljstache.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljstache.core.render.cljs$core$IFn$_invoke$arity$1 = (function (template){
return cljstache.core.render.cljs$core$IFn$_invoke$arity$3(template,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljstache.core.render.cljs$core$IFn$_invoke$arity$2 = (function (template,data){
return cljstache.core.render.cljs$core$IFn$_invoke$arity$3(template,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljstache.core.render.cljs$core$IFn$_invoke$arity$3 = (function (template,data,partials){
var vec__28176 = cljstache.core.preprocess(template,data,partials);
var template__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176,(1),null);
return cljstache.core.replace_all(cljstache.core.render_template(template__$1,data__$1,partials,true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\\\\\{\\\\\\{","{{"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\\\\\}\\\\\\}","}}"], null)], null));
}));

(cljstache.core.render.cljs$lang$maxFixedArity = 3);

