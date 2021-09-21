// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('cljstache.core');
goog.require('cljs.core');
goog.require('clojure.string');
cljstache.core.re_quote_replacement = cljs.core.identity;
/**
 * Apply f to each element of coll, concatenate all results into a
 *   String.
 */
cljstache.core.map_str = (function cljstache$core$map_str(f,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,f,coll));
});
cljstache.core.re_matcher = (function cljstache$core$re_matcher(pattern,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,pattern),s], null);
});
cljstache.core.re_find = (function cljstache$core$re_find(var_args){
var G__21010 = arguments.length;
switch (G__21010) {
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
return cljs.core.re_find.call(null,re,s);
}));

(cljstache.core.re_find.cljs$core$IFn$_invoke$arity$1 = (function (p__21011){
var vec__21012 = p__21011;
var re = cljs.core.nth.call(null,vec__21012,(0),null);
var s = cljs.core.nth.call(null,vec__21012,(1),null);
return cljstache.core.re_find.call(null,re,s);
}));

(cljstache.core.re_find.cljs$lang$maxFixedArity = 2);

cljstache.core.re_groups = (function cljstache$core$re_groups(p__21016){
var vec__21017 = p__21016;
var re = cljs.core.nth.call(null,vec__21017,(0),null);
var s = cljs.core.nth.call(null,vec__21017,(1),null);
return re.exec(s);
});
cljstache.core.matcher_find = (function cljstache$core$matcher_find(var_args){
var G__21021 = arguments.length;
switch (G__21021) {
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
return cljstache.core.matcher_find.call(null,m,(0));
}));

(cljstache.core.matcher_find.cljs$core$IFn$_invoke$arity$2 = (function (p__21022,offset){
var vec__21023 = p__21022;
var m = cljs.core.nth.call(null,vec__21023,(0),null);
var s = cljs.core.nth.call(null,vec__21023,(1),null);
var temp__5753__auto__ = m.exec(cljs.core.subs.call(null,s,offset));
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match-start","match-start",48220753),(match.index + offset),new cljs.core.Keyword(null,"match-end","match-end",-1347942185),((match.index + cljs.core.count.call(null,cljs.core.first.call(null,match))) + offset)], null);
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

(cljstache.core.Section.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k21028,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__21032 = k21028;
var G__21032__$1 = (((G__21032 instanceof cljs.core.Keyword))?G__21032.fqn:null);
switch (G__21032__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k21028,else__4464__auto__);

}
}));

(cljstache.core.Section.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__21033){
var vec__21034 = p__21033;
var k__4485__auto__ = cljs.core.nth.call(null,vec__21034,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__21034,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(cljstache.core.Section.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#cljstache.core.Section{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inverted","inverted",-310592290),self__.inverted],null))], null),self__.__extmap));
}));

(cljstache.core.Section.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21027){
var self__ = this;
var G__21027__$1 = this;
return (new cljs.core.RecordIter((0),G__21027__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"inverted","inverted",-310592290)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(cljstache.core.Section.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (5152572 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(cljstache.core.Section.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21029,other21030){
var self__ = this;
var this21029__$1 = this;
return (((!((other21030 == null)))) && ((((this21029__$1.constructor === other21030.constructor)) && (((cljs.core._EQ_.call(null,this21029__$1.name,other21030.name)) && (((cljs.core._EQ_.call(null,this21029__$1.body,other21030.body)) && (((cljs.core._EQ_.call(null,this21029__$1.start,other21030.start)) && (((cljs.core._EQ_.call(null,this21029__$1.end,other21030.end)) && (((cljs.core._EQ_.call(null,this21029__$1.inverted,other21030.inverted)) && (cljs.core._EQ_.call(null,this21029__$1.__extmap,other21030.__extmap)))))))))))))));
}));

(cljstache.core.Section.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"inverted","inverted",-310592290),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,self__.inverted,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(cljstache.core.Section.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k21028){
var self__ = this;
var this__4468__auto____$1 = this;
var G__21037 = k21028;
var G__21037__$1 = (((G__21037 instanceof cljs.core.Keyword))?G__21037.fqn:null);
switch (G__21037__$1) {
case "name":
case "body":
case "start":
case "end":
case "inverted":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k21028);

}
}));

(cljstache.core.Section.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__21027){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__21038 = cljs.core.keyword_identical_QMARK_;
var expr__21039 = k__4470__auto__;
if(cljs.core.truth_(pred__21038.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__21039))){
return (new cljstache.core.Section(G__21027,self__.body,self__.start,self__.end,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21038.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__21039))){
return (new cljstache.core.Section(self__.name,G__21027,self__.start,self__.end,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21038.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__21039))){
return (new cljstache.core.Section(self__.name,self__.body,G__21027,self__.end,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21038.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__21039))){
return (new cljstache.core.Section(self__.name,self__.body,self__.start,G__21027,self__.inverted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21038.call(null,new cljs.core.Keyword(null,"inverted","inverted",-310592290),expr__21039))){
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,G__21027,self__.__meta,self__.__extmap,null));
} else {
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,self__.inverted,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__21027),null));
}
}
}
}
}
}));

(cljstache.core.Section.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end","end",-268185958),self__.end,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"inverted","inverted",-310592290),self__.inverted,null))], null),self__.__extmap));
}));

(cljstache.core.Section.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__21027){
var self__ = this;
var this__4460__auto____$1 = this;
return (new cljstache.core.Section(self__.name,self__.body,self__.start,self__.end,self__.inverted,G__21027,self__.__extmap,self__.__hash));
}));

(cljstache.core.Section.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(cljstache.core.Section.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"inverted","inverted",1329939237,null)], null);
}));

(cljstache.core.Section.cljs$lang$type = true);

(cljstache.core.Section.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"cljstache.core/Section",null,(1),null));
}));

(cljstache.core.Section.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"cljstache.core/Section");
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
cljstache.core.map__GT_Section = (function cljstache$core$map__GT_Section(G__21031){
var extmap__4501__auto__ = (function (){var G__21041 = cljs.core.dissoc.call(null,G__21031,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"inverted","inverted",-310592290));
if(cljs.core.record_QMARK_.call(null,G__21031)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21041);
} else {
return G__21041;
}
})();
return (new cljstache.core.Section(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21031),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__21031),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__21031),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__21031),new cljs.core.Keyword(null,"inverted","inverted",-310592290).cljs$core$IFn$_invoke$arity$1(G__21031),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
});

/**
 * Replace all instances of pattern in str
 */
cljstache.core.str_replace = (function cljstache$core$str_replace(s,from,to){
return clojure.string.replace.call(null,s,cljs.core.re_pattern.call(null,from),to);
});
/**
 * Applies all replacements from the replacement list to the string.
 * Replacements are a sequence of two element sequences where the first element
 * is the pattern to match and the second is the replacement.
 * An optional third boolean argument can be set to true if the replacement
 * should not be quoted.
 */
cljstache.core.replace_all = (function cljstache$core$replace_all(string,replacements){
return cljs.core.reduce.call(null,(function (string__$1,p__21044){
var vec__21045 = p__21044;
var from = cljs.core.nth.call(null,vec__21045,(0),null);
var to = cljs.core.nth.call(null,vec__21045,(1),null);
var dont_quote = cljs.core.nth.call(null,vec__21045,(2),null);
return cljstache.core.str_replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(string__$1),from,(cljs.core.truth_(dont_quote)?to:cljstache.core.re_quote_replacement.call(null,to)));
}),string,replacements);
});
/**
 * Replaces angle brackets with the respective HTML entities.
 */
cljstache.core.escape_html = (function cljstache$core$escape_html(string){
return cljstache.core.replace_all.call(null,string,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&","&amp;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"","&quot;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<","&lt;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [">","&gt;"], null)], null));
});
/**
 * Indent all lines of the partial by indent.
 */
cljstache.core.indent_partial = (function cljstache$core$indent_partial(partial,indent){
return cljstache.core.replace_all.call(null,partial,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\r\n|[\r\n])(.+)",["$1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),"$2"].join(''),true], null)], null));
});
cljstache.core.regex_chars = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\","{","}","[","]","(",")",".","?","^","+","-","|"], null);
/**
 * Escapes characters that have special meaning in regular expressions.
 */
cljstache.core.escape_regex = (function cljstache$core$escape_regex(regex){
return cljstache.core.replace_all.call(null,regex,cljs.core.map.call(null,(function (p1__21048_SHARP_){
return cljs.core.repeat.call(null,(2),["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21048_SHARP_)].join(''));
}),cljstache.core.regex_chars));
});
/**
 * Unescapes characters that have special meaning in regular expressions.
 */
cljstache.core.unescape_regex = (function cljstache$core$unescape_regex(regex){
return cljstache.core.replace_all.call(null,regex,cljs.core.map.call(null,(function (char$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\\\\\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join(''),char$,true], null);
}),cljstache.core.regex_chars));
});
cljstache.core.__GT_stringbuilder = (function cljstache$core$__GT_stringbuilder(var_args){
var G__21050 = arguments.length;
switch (G__21050) {
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
return cljstache.core.__GT_stringbuilder.call(null,"");
}));

(cljstache.core.__GT_stringbuilder.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.atom.call(null,s);
}));

(cljstache.core.__GT_stringbuilder.cljs$lang$maxFixedArity = 1);

/**
 * Perform mutation on stringbuilder object
 */
cljstache.core.sb_BANG_ = (function cljstache$core$sb_BANG_(s,f){
cljs.core.swap_BANG_.call(null,s,f);

return s;
});
cljstache.core.sb__GT_str = (function cljstache$core$sb__GT_str(s){
return cljs.core.deref.call(null,s);
});
cljstache.core.sb_replace = (function cljstache$core$sb_replace(s,start,end,s_SINGLEQUOTE_){
return cljstache.core.sb_BANG_.call(null,s,(function (p1__21052_SHARP_){
return [cljs.core.subs.call(null,p1__21052_SHARP_,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_),cljs.core.subs.call(null,p1__21052_SHARP_,end)].join('');
}));
});
cljstache.core.sb_delete = (function cljstache$core$sb_delete(s,start,end){
return cljstache.core.sb_BANG_.call(null,s,(function (p1__21053_SHARP_){
return [cljs.core.subs.call(null,p1__21053_SHARP_,(0),start),cljs.core.subs.call(null,p1__21053_SHARP_,end)].join('');
}));
});
cljstache.core.sb_append = (function cljstache$core$sb_append(s,s_SINGLEQUOTE_){
return cljstache.core.sb_BANG_.call(null,s,(function (p1__21054_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21054_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_)].join('');
}));
});
cljstache.core.sb_insert = (function cljstache$core$sb_insert(s,index,s_SINGLEQUOTE_){
return cljstache.core.sb_replace.call(null,s,index,index,s_SINGLEQUOTE_);
});
cljstache.core.delim_matcher = (function cljstache$core$delim_matcher(open,close,s){
return cljstache.core.re_matcher.call(null,cljs.core.re_pattern.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(open),".*?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(close),((cljs.core.not_EQ_.call(null,"\\{\\{",open))?"|\\{\\{.*?\\}\\}":null),")"].join('')),s);
});
cljstache.core.find_custom_delimiters = (function cljstache$core$find_custom_delimiters(open,close,s){
return cljstache.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(open),"=\\s*(.*?) (.*?)\\s*=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(close)].join('')),s);
});
/**
 * Replaces custom set delimiters with mustaches.
 */
cljstache.core.process_set_delimiters = (function cljstache$core$process_set_delimiters(template,data){
var builder = cljstache.core.__GT_stringbuilder.call(null,template);
var data__$1 = cljs.core.atom.call(null,data);
var open_delim = cljs.core.atom.call(null,cljstache.core.escape_regex.call(null,"{{"));
var close_delim = cljs.core.atom.call(null,cljstache.core.escape_regex.call(null,"}}"));
var set_delims = (function (open,close){
var seq__21056 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_delim,open], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [close_delim,close], null)], null));
var chunk__21057 = null;
var count__21058 = (0);
var i__21059 = (0);
while(true){
if((i__21059 < count__21058)){
var vec__21066 = cljs.core._nth.call(null,chunk__21057,i__21059);
var var$ = cljs.core.nth.call(null,vec__21066,(0),null);
var delim = cljs.core.nth.call(null,vec__21066,(1),null);
cljs.core.swap_BANG_.call(null,var$,cljs.core.constantly.call(null,cljstache.core.escape_regex.call(null,delim)));


var G__21073 = seq__21056;
var G__21074 = chunk__21057;
var G__21075 = count__21058;
var G__21076 = (i__21059 + (1));
seq__21056 = G__21073;
chunk__21057 = G__21074;
count__21058 = G__21075;
i__21059 = G__21076;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__21056);
if(temp__5753__auto__){
var seq__21056__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21056__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__21056__$1);
var G__21077 = cljs.core.chunk_rest.call(null,seq__21056__$1);
var G__21078 = c__4638__auto__;
var G__21079 = cljs.core.count.call(null,c__4638__auto__);
var G__21080 = (0);
seq__21056 = G__21077;
chunk__21057 = G__21078;
count__21058 = G__21079;
i__21059 = G__21080;
continue;
} else {
var vec__21069 = cljs.core.first.call(null,seq__21056__$1);
var var$ = cljs.core.nth.call(null,vec__21069,(0),null);
var delim = cljs.core.nth.call(null,vec__21069,(1),null);
cljs.core.swap_BANG_.call(null,var$,cljs.core.constantly.call(null,cljstache.core.escape_regex.call(null,delim)));


var G__21081 = cljs.core.next.call(null,seq__21056__$1);
var G__21082 = null;
var G__21083 = (0);
var G__21084 = (0);
seq__21056 = G__21081;
chunk__21057 = G__21082;
count__21058 = G__21083;
i__21059 = G__21084;
continue;
}
} else {
return null;
}
}
break;
}
});
var offset_21085 = (0);
while(true){
var custom_delim_QMARK__21086 = cljs.core.not_EQ_.call(null,"\\{\\{",cljs.core.deref.call(null,open_delim));
var s_21087 = cljstache.core.sb__GT_str.call(null,builder);
var matcher_21088 = cljstache.core.delim_matcher.call(null,cljs.core.deref.call(null,open_delim),cljs.core.deref.call(null,close_delim),s_21087);
var temp__5753__auto___21089 = cljstache.core.matcher_find.call(null,matcher_21088,offset_21085);
if(cljs.core.truth_(temp__5753__auto___21089)){
var match_result_21090 = temp__5753__auto___21089;
var map__21072_21091 = match_result_21090;
var map__21072_21092__$1 = cljs.core.__destructure_map.call(null,map__21072_21091);
var match_start_21093 = cljs.core.get.call(null,map__21072_21092__$1,new cljs.core.Keyword(null,"match-start","match-start",48220753));
var match_end_21094 = cljs.core.get.call(null,map__21072_21092__$1,new cljs.core.Keyword(null,"match-end","match-end",-1347942185));
var match_21095 = cljs.core.subs.call(null,s_21087,match_start_21093,match_end_21094);
if(((custom_delim_QMARK__21086) && (cljs.core._EQ_.call(null,"{{{",cljs.core.subs.call(null,match_21095,(0),(3)))))){
var temp__5753__auto___21096__$1 = cljstache.core.re_find.call(null,/\{\{\{(.*?)\}\}\}/,match_21095);
if(cljs.core.truth_(temp__5753__auto___21096__$1)){
var tag_21097 = temp__5753__auto___21096__$1;
cljstache.core.sb_replace.call(null,builder,match_start_21093,match_end_21094,["\\{\\{\\{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,tag_21097)),"\\}\\}\\}"].join(''));

var G__21098 = (match_end_21094 | (0));
offset_21085 = G__21098;
continue;
} else {
}
} else {
if(((custom_delim_QMARK__21086) && (cljs.core._EQ_.call(null,"{{",cljs.core.subs.call(null,match_21095,(0),(2)))))){
var temp__5753__auto___21099__$1 = cljstache.core.re_find.call(null,/\{\{(.*?)\}\}/,match_21095);
if(cljs.core.truth_(temp__5753__auto___21099__$1)){
var tag_21100 = temp__5753__auto___21099__$1;
cljstache.core.sb_replace.call(null,builder,match_start_21093,match_end_21094,["\\{\\{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,tag_21100)),"\\}\\}"].join(''));

var G__21101 = (match_end_21094 | (0));
offset_21085 = G__21101;
continue;
} else {
}
} else {
var temp__5751__auto___21102 = cljstache.core.find_custom_delimiters.call(null,cljs.core.deref.call(null,open_delim),cljs.core.deref.call(null,close_delim),match_21095);
if(cljs.core.truth_(temp__5751__auto___21102)){
var delim_change_21103 = temp__5751__auto___21102;
cljs.core.apply.call(null,set_delims,cljs.core.rest.call(null,delim_change_21103));

cljstache.core.sb_delete.call(null,builder,match_start_21093,match_end_21094);

var G__21104 = (match_start_21093 | (0));
offset_21085 = G__21104;
continue;
} else {
var temp__5753__auto___21105__$1 = cljstache.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,open_delim)),"(.*?)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,close_delim))].join('')),match_21095);
if(cljs.core.truth_(temp__5753__auto___21105__$1)){
var tag_21106 = temp__5753__auto___21105__$1;
var section_start_21107 = cljstache.core.re_find.call(null,cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,open_delim)),"\\s*#\\s*(.*?)\\s*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,close_delim))].join('')),cljs.core.first.call(null,tag_21106));
var key_21108 = (cljs.core.truth_(section_start_21107)?cljs.core.keyword.call(null,cljs.core.second.call(null,section_start_21107)):null);
var value_21109 = (cljs.core.truth_(key_21108)?key_21108.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data__$1)):null);
if(cljs.core.truth_((function (){var and__4210__auto__ = value_21109;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.fn_QMARK_.call(null,value_21109)) && ((!(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,open_delim),"\\{\\{")) && (cljs.core._EQ_.call(null,cljs.core.deref.call(null,close_delim),"\\}\\}")))))));
} else {
return and__4210__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,data__$1,((function (offset_21085,section_start_21107,key_21108,value_21109,tag_21106,temp__5753__auto___21105__$1,temp__5751__auto___21102,map__21072_21091,map__21072_21092__$1,match_start_21093,match_end_21094,match_21095,match_result_21090,temp__5753__auto___21089,custom_delim_QMARK__21086,s_21087,matcher_21088,builder,data__$1,open_delim,close_delim,set_delims){
return (function (p1__21055_SHARP_){
return cljs.core.update_in.call(null,p1__21055_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_21108], null),((function (offset_21085,section_start_21107,key_21108,value_21109,tag_21106,temp__5753__auto___21105__$1,temp__5751__auto___21102,map__21072_21091,map__21072_21092__$1,match_start_21093,match_end_21094,match_21095,match_result_21090,temp__5753__auto___21089,custom_delim_QMARK__21086,s_21087,matcher_21088,builder,data__$1,open_delim,close_delim,set_delims){
return (function (old){
return ((function (offset_21085,section_start_21107,key_21108,value_21109,tag_21106,temp__5753__auto___21105__$1,temp__5751__auto___21102,map__21072_21091,map__21072_21092__$1,match_start_21093,match_end_21094,match_21095,match_result_21090,temp__5753__auto___21089,custom_delim_QMARK__21086,s_21087,matcher_21088,builder,data__$1,open_delim,close_delim,set_delims){
return (function (data__$2){
return ["{{=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.unescape_regex.call(null,cljs.core.deref.call(null,open_delim)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.unescape_regex.call(null,cljs.core.deref.call(null,close_delim))),"=}}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old.call(null,data__$2))].join('');
});
;})(offset_21085,section_start_21107,key_21108,value_21109,tag_21106,temp__5753__auto___21105__$1,temp__5751__auto___21102,map__21072_21091,map__21072_21092__$1,match_start_21093,match_end_21094,match_21095,match_result_21090,temp__5753__auto___21089,custom_delim_QMARK__21086,s_21087,matcher_21088,builder,data__$1,open_delim,close_delim,set_delims))
});})(offset_21085,section_start_21107,key_21108,value_21109,tag_21106,temp__5753__auto___21105__$1,temp__5751__auto___21102,map__21072_21091,map__21072_21092__$1,match_start_21093,match_end_21094,match_21095,match_result_21090,temp__5753__auto___21089,custom_delim_QMARK__21086,s_21087,matcher_21088,builder,data__$1,open_delim,close_delim,set_delims))
);
});})(offset_21085,section_start_21107,key_21108,value_21109,tag_21106,temp__5753__auto___21105__$1,temp__5751__auto___21102,map__21072_21091,map__21072_21092__$1,match_start_21093,match_end_21094,match_21095,match_result_21090,temp__5753__auto___21089,custom_delim_QMARK__21086,s_21087,matcher_21088,builder,data__$1,open_delim,close_delim,set_delims))
);
} else {
}

cljstache.core.sb_replace.call(null,builder,match_start_21093,match_end_21094,["{{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,tag_21106)),"}}"].join(''));

var G__21110 = (match_end_21094 | (0));
offset_21085 = G__21110;
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstache.core.sb__GT_str.call(null,builder),cljs.core.deref.call(null,data__$1)], null);
});
/**
 * Creates pairs of partial replacements.
 */
cljstache.core.create_partial_replacements = (function cljstache$core$create_partial_replacements(template,partials){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4611__auto__ = (function cljstache$core$create_partial_replacements_$_iter__21111(s__21112){
return (new cljs.core.LazySeq(null,(function (){
var s__21112__$1 = s__21112;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21112__$1);
if(temp__5753__auto__){
var s__21112__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21112__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__21112__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__21114 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__21113 = (0);
while(true){
if((i__21113 < size__4610__auto__)){
var k = cljs.core._nth.call(null,c__4609__auto__,i__21113);
cljs.core.chunk_append.call(null,b__21114,(function (){var regex = cljs.core.re_pattern.call(null,["(\r\n|[\r\n]|^)([ \\t]*)\\{\\{>\\s*",cljs.core.name.call(null,k),"\\s*\\}\\}"].join(''));
var indent = cljs.core.nth.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,regex),template)),(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\\{\\{>\\s*",cljs.core.name.call(null,k),"\\s*\\}\\}"].join(''),cljs.core.first.call(null,cljstache.core.process_set_delimiters.call(null,cljstache.core.indent_partial.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k.call(null,partials)),indent),cljs.core.PersistentArrayMap.EMPTY))], null)], null);
})());

var G__21115 = (i__21113 + (1));
i__21113 = G__21115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21114),cljstache$core$create_partial_replacements_$_iter__21111.call(null,cljs.core.chunk_rest.call(null,s__21112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21114),null);
}
} else {
var k = cljs.core.first.call(null,s__21112__$2);
return cljs.core.cons.call(null,(function (){var regex = cljs.core.re_pattern.call(null,["(\r\n|[\r\n]|^)([ \\t]*)\\{\\{>\\s*",cljs.core.name.call(null,k),"\\s*\\}\\}"].join(''));
var indent = cljs.core.nth.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,regex),template)),(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\\{\\{>\\s*",cljs.core.name.call(null,k),"\\s*\\}\\}"].join(''),cljs.core.first.call(null,cljstache.core.process_set_delimiters.call(null,cljstache.core.indent_partial.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k.call(null,partials)),indent),cljs.core.PersistentArrayMap.EMPTY))], null)], null);
})(),cljstache$core$create_partial_replacements_$_iter__21111.call(null,cljs.core.rest.call(null,s__21112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,cljs.core.keys.call(null,partials));
})());
});
/**
 * Include partials within the template.
 */
cljstache.core.include_partials = (function cljstache$core$include_partials(template,partials){
return cljstache.core.replace_all.call(null,template,cljstache.core.create_partial_replacements.call(null,template,partials));
});
/**
 * Removes comments from the template.
 */
cljstache.core.remove_comments = (function cljstache$core$remove_comments(template){
var comment_regex = "\\{\\{\\![^\\}]*\\}\\}";
return cljstache.core.replace_all.call(null,template,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(^|[\n\r])[ \t]*",comment_regex,"(\r\n|[\r\n]|$)"].join(''),"$1",true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comment_regex,""], null)], null));
});
/**
 * Return the next index of the supplied regex.
 */
cljstache.core.next_index = (function cljstache$core$next_index(var_args){
var G__21117 = arguments.length;
switch (G__21117) {
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
return cljstache.core.next_index.call(null,section,regex,(0));
}));

(cljstache.core.next_index.cljs$core$IFn$_invoke$arity$3 = (function (section,regex,index){
if(cljs.core._EQ_.call(null,index,(-1))){
return (-1);
} else {
var s = cljs.core.subs.call(null,section,index);
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
return cljstache.core.next_index.call(null,template,/\{\{[#\^][^\}]*\}\}/,index);
});
/**
 * Find the matching end tag for a section at the specified level,
 * starting to search at index.
 */
cljstache.core.find_section_end_tag = (function cljstache$core$find_section_end_tag(template,index,level){
var next_start = cljstache.core.find_section_start_tag.call(null,template,index);
var next_end = cljstache.core.next_index.call(null,template,/\{\{\/[^\}]*\}\}/,index);
if(cljs.core._EQ_.call(null,next_end,(-1))){
return (-1);
} else {
if(((cljs.core.not_EQ_.call(null,next_start,(-1))) && ((next_start < next_end)))){
return cljstache.core.find_section_end_tag.call(null,template,(next_start + (3)),(level + (1)));
} else {
if(cljs.core._EQ_.call(null,level,(1))){
return next_end;
} else {
return cljstache.core.find_section_end_tag.call(null,template,(next_end + (3)),(level - (1)));
}
}
}
});
/**
 * Extracts the outer section from the template.
 */
cljstache.core.extract_section = (function cljstache$core$extract_section(template){
var start = cljstache.core.find_section_start_tag.call(null,template,(0));
if(cljs.core.not_EQ_.call(null,start,(-1))){
var inverted = cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(template.charAt((start + (2)))),"^");
var end_tag = cljstache.core.find_section_end_tag.call(null,template,(start + (3)),(1));
if(cljs.core.not_EQ_.call(null,end_tag,(-1))){
var end = (template.indexOf("}}",end_tag) + (2));
var section = cljs.core.subs.call(null,template,start,end);
var body_start = (section.indexOf("}}") + (2));
var body_end = section.lastIndexOf("{{");
var body = ((((cljs.core._EQ_.call(null,body_start,(-1))) || (((cljs.core._EQ_.call(null,body_end,(-1))) || ((body_end < body_start))))))?"":cljs.core.subs.call(null,section,body_start,body_end));
var section_name = cljs.core.subs.call(null,section,(3),section.indexOf("}}")).trim();
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
return clojure.string.replace.call(null,string,regex,callback);
});
/**
 * Replaces variables in the template with their values from the data.
 */
cljstache.core.replace_variables = (function cljstache$core$replace_variables(template,data,partials){
var regex = /\{\{(\{|\&|\>|)\s*(.*?)\s*\}{2,3}/;
return cljstache.core.replace_all_callback.call(null,template,regex,(function (p1__21119_SHARP_){
var var_name = cljs.core.nth.call(null,p1__21119_SHARP_,(2));
var var_k = cljs.core.keyword.call(null,var_name);
var var_type = cljs.core.second.call(null,p1__21119_SHARP_);
var var_value = var_k.call(null,data);
var var_value__$1 = ((cljs.core.fn_QMARK_.call(null,var_value))?cljstache.core.render_template.call(null,var_value.call(null),cljs.core.dissoc.call(null,data,var_name),partials,false):var_value);
var var_value__$2 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_value__$1);
if(cljs.core._EQ_.call(null,var_type,"")){
return cljstache.core.escape_html.call(null,var_value__$2);
} else {
if(cljs.core._EQ_.call(null,var_type,">")){
return cljstache.core.render_template.call(null,var_k.call(null,partials),data,partials,false);
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
return cljstache.core.replace_all.call(null,template,(function (){var eol_start = "(\r\n|[\r\n]|^)";
var eol_end = "(\r\n|[\r\n]|$)";
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"[ \t]*(\\{\\{=[^\\}]*\\}\\})",eol_end].join(''),"$1$2",true], null)], null);
})());
});
/**
 * Extract the data for the supplied path.
 */
cljstache.core.path_data = (function cljstache$core$path_data(elements,data){
return cljs.core.get_in.call(null,data,cljs.core.map.call(null,cljs.core.keyword,elements));
});
/**
 * Convert a tag with a dotted name to nested sections, using the
 *   supplied delimiters to access the value.
 */
cljstache.core.convert_path = (function cljstache$core$convert_path(tag,open_delim,close_delim,data){
var tag_type = cljs.core.last.call(null,open_delim);
var section_tag = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tag_type]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","^","/"], null));
var section_end_tag = cljs.core._EQ_.call(null,tag_type,"/");
var builder = cljstache.core.__GT_stringbuilder.call(null);
var tail_builder = (cljs.core.truth_(section_tag)?null:cljstache.core.__GT_stringbuilder.call(null));
var elements = clojure.string.split.call(null,tag,/\./);
var element_to_invert = ((cljs.core._EQ_.call(null,tag_type,"^"))?(function (){var path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,elements)], null);
var remaining_elements = cljs.core.rest.call(null,elements);
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining_elements)){
return null;
} else {
if((cljstache.core.path_data.call(null,path,data) == null)){
return cljs.core.last.call(null,path);
} else {
var G__21124 = cljs.core.conj.call(null,path,cljs.core.first.call(null,remaining_elements));
var G__21125 = cljs.core.next.call(null,remaining_elements);
path = G__21124;
remaining_elements = G__21125;
continue;
}
}
break;
}
})():null);
if(((cljs.core.not.call(null,section_tag)) && ((cljstache.core.path_data.call(null,elements,data) == null)))){
return "";
} else {
var elements__$1 = ((section_end_tag)?cljs.core.reverse.call(null,elements):elements);
var seq__21120_21126 = cljs.core.seq.call(null,cljs.core.butlast.call(null,elements__$1));
var chunk__21121_21127 = null;
var count__21122_21128 = (0);
var i__21123_21129 = (0);
while(true){
if((i__21123_21129 < count__21122_21128)){
var element_21130 = cljs.core._nth.call(null,chunk__21121_21127,i__21123_21129);
cljstache.core.sb_append.call(null,builder,["{{",((section_end_tag)?"/":((cljs.core._EQ_.call(null,element_21130,element_to_invert))?"^":"#")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_21130),"}}"].join(''));

if((!((tail_builder == null)))){
cljstache.core.sb_insert.call(null,tail_builder,(0),["{{/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_21130),"}}"].join(''));
} else {
}


var G__21131 = seq__21120_21126;
var G__21132 = chunk__21121_21127;
var G__21133 = count__21122_21128;
var G__21134 = (i__21123_21129 + (1));
seq__21120_21126 = G__21131;
chunk__21121_21127 = G__21132;
count__21122_21128 = G__21133;
i__21123_21129 = G__21134;
continue;
} else {
var temp__5753__auto___21135 = cljs.core.seq.call(null,seq__21120_21126);
if(temp__5753__auto___21135){
var seq__21120_21136__$1 = temp__5753__auto___21135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21120_21136__$1)){
var c__4638__auto___21137 = cljs.core.chunk_first.call(null,seq__21120_21136__$1);
var G__21138 = cljs.core.chunk_rest.call(null,seq__21120_21136__$1);
var G__21139 = c__4638__auto___21137;
var G__21140 = cljs.core.count.call(null,c__4638__auto___21137);
var G__21141 = (0);
seq__21120_21126 = G__21138;
chunk__21121_21127 = G__21139;
count__21122_21128 = G__21140;
i__21123_21129 = G__21141;
continue;
} else {
var element_21142 = cljs.core.first.call(null,seq__21120_21136__$1);
cljstache.core.sb_append.call(null,builder,["{{",((section_end_tag)?"/":((cljs.core._EQ_.call(null,element_21142,element_to_invert))?"^":"#")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_21142),"}}"].join(''));

if((!((tail_builder == null)))){
cljstache.core.sb_insert.call(null,tail_builder,(0),["{{/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_21142),"}}"].join(''));
} else {
}


var G__21143 = cljs.core.next.call(null,seq__21120_21136__$1);
var G__21144 = null;
var G__21145 = (0);
var G__21146 = (0);
seq__21120_21126 = G__21143;
chunk__21121_21127 = G__21144;
count__21122_21128 = G__21145;
i__21123_21129 = G__21146;
continue;
}
} else {
}
}
break;
}

cljstache.core.sb_append.call(null,builder,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(open_delim),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,elements__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_delim)].join(''));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.sb__GT_str.call(null,builder)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!((tail_builder == null))))?cljstache.core.sb__GT_str.call(null,tail_builder):null))].join('');
}
});
/**
 * Converts tags with dotted tag names to nested sections.
 */
cljstache.core.convert_paths = (function cljstache$core$convert_paths(template,data){
var s = template;
while(true){
var matcher = cljstache.core.re_matcher.call(null,/(\{\{[\{&#\^\/]?)([^\}]+\.[^\}]+)(\}{2,3})/,s);
var temp__5751__auto__ = cljstache.core.matcher_find.call(null,matcher);
if(cljs.core.truth_(temp__5751__auto__)){
var match_result = temp__5751__auto__;
var map__21148 = match_result;
var map__21148__$1 = cljs.core.__destructure_map.call(null,map__21148);
var match_start = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"match-start","match-start",48220753));
var match_end = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"match-end","match-end",-1347942185));
var groups = cljstache.core.re_groups.call(null,matcher);
var converted = cljstache.core.convert_path.call(null,clojure.string.trim.call(null,cljs.core.nth.call(null,groups,(2))),cljs.core.nth.call(null,groups,(1)),cljs.core.nth.call(null,groups,(3)),data);
var G__21149 = [cljs.core.subs.call(null,s,(0),match_start),converted,cljs.core.subs.call(null,s,match_end)].join('');
s = G__21149;
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
return cljstache.core.replace_all.call(null,template,(function (){var eol_start = "(\r\n|[\r\n]|^)";
var eol_end = "(\r\n|[\r\n]|$)";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"\\{\\{[#\\^][^\\}]*\\}\\}(\r\n|[\r\n])\\{\\{/[^\\}]*\\}\\}",eol_end].join(''),"$1",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"[ \t]*(\\{\\{[#\\^/][^\\}]*\\}\\})",eol_end].join(''),"$1$2",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[eol_start,"([ \t]*\\{\\{>\\s*[^\\}]*\\s*\\}\\})",eol_end].join(''),"$1$2",true], null)], null);
})());
});
cljstache.core.delimiter_preprocess = (function cljstache$core$delimiter_preprocess(template,data){
var template__$1 = cljstache.core.join_standalone_delimiter_tags.call(null,template);
var vec__21150 = cljstache.core.process_set_delimiters.call(null,template__$1,data);
var template__$2 = cljs.core.nth.call(null,vec__21150,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__21150,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template__$2,data__$1], null);
});
/**
 * Preprocesses template and data (e.g. removing comments).
 */
cljstache.core.preprocess = (function cljstache$core$preprocess(template,data,partials){
var vec__21153 = cljstache.core.delimiter_preprocess.call(null,template,data);
var template__$1 = cljs.core.nth.call(null,vec__21153,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__21153,(1),null);
var template__$2 = cljstache.core.join_standalone_delimiter_tags.call(null,template__$1);
var vec__21156 = cljstache.core.process_set_delimiters.call(null,template__$2,data__$1);
var template__$3 = cljs.core.nth.call(null,vec__21156,(0),null);
var data__$2 = cljs.core.nth.call(null,vec__21156,(1),null);
var template__$4 = cljstache.core.join_standalone_tags.call(null,template__$3);
var template__$5 = cljstache.core.remove_comments.call(null,template__$4);
var template__$6 = cljstache.core.include_partials.call(null,template__$5,partials);
var template__$7 = cljstache.core.convert_paths.call(null,template__$6,data__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template__$7,data__$2], null);
});
cljstache.core.render_section = (function cljstache$core$render_section(section,data,partials){
var section_data = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(section)).call(null,data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"inverted","inverted",-310592290).cljs$core$IFn$_invoke$arity$1(section))){
if(((((cljs.core.seqable_QMARK_.call(null,section_data)) && (cljs.core.empty_QMARK_.call(null,section_data)))) || (cljs.core.not.call(null,section_data)))){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(section);
} else {
return null;
}
} else {
if(cljs.core.truth_(section_data)){
if(cljs.core.fn_QMARK_.call(null,section_data)){
var result = section_data.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(section));
if(cljs.core.fn_QMARK_.call(null,result)){
return result.call(null,(function (p1__21159_SHARP_){
return cljstache.core.render_template.call(null,p1__21159_SHARP_,data,partials,false);
}));
} else {
return result;
}
} else {
var section_data__$1 = ((typeof section_data === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core.sequential_QMARK_.call(null,section_data))?section_data:((cljs.core.map_QMARK_.call(null,section_data))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [section_data], null):((cljs.core.seqable_QMARK_.call(null,section_data))?cljs.core.seq.call(null,section_data):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)
))));
var section_data__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,section_data__$1)))?section_data__$1:cljs.core.map.call(null,(function (e){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,"."),e]);
}),section_data__$1));
var section_data__$3 = cljs.core.map.call(null,(function (p1__21160_SHARP_){
return cljs.core.conj.call(null,data,p1__21160_SHARP_);
}),section_data__$2);
return cljstache.core.map_str.call(null,(function (m){
return cljstache.core.render_template.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(section),m,partials,false);
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
var vec__21161 = (cljs.core.truth_(skip_delimiter_preprocess_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template,data], null):cljstache.core.delimiter_preprocess.call(null,template,data));
var template__$1 = cljs.core.nth.call(null,vec__21161,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__21161,(1),null);
var section = cljstache.core.extract_section.call(null,template__$1);
if((section == null)){
return cljstache.core.replace_variables.call(null,template__$1,data__$1,partials);
} else {
var before = cljs.core.subs.call(null,template__$1,(0),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(section));
var after = cljs.core.subs.call(null,template__$1,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(section));
var G__21164 = [before,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljstache.core.render_section.call(null,section,data__$1,partials)),after].join('');
var G__21165 = data__$1;
var G__21166 = partials;
var G__21167 = false;
template = G__21164;
data = G__21165;
partials = G__21166;
skip_delimiter_preprocess_QMARK_ = G__21167;
continue;
}
break;
}
});
/**
 * Returns set of all tags in template
 */
cljstache.core.tags = (function cljstache$core$tags(template){
var vec__21168 = cljstache.core.preprocess.call(null,template,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
var template__$1 = cljs.core.nth.call(null,vec__21168,(0),null);
var data = cljs.core.nth.call(null,vec__21168,(1),null);
var matches = cljs.core.re_seq.call(null,/\{\{(\{|\&|\>|)\s*(.*?)\s*\}{2,3}/,template__$1);
var tags = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.last),matches);
return cljs.core.set.call(null,tags);
});
/**
 * Renders the template with the data and, if supplied, partials.
 */
cljstache.core.render = (function cljstache$core$render(var_args){
var G__21172 = arguments.length;
switch (G__21172) {
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
return cljstache.core.render.call(null,template,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljstache.core.render.cljs$core$IFn$_invoke$arity$2 = (function (template,data){
return cljstache.core.render.call(null,template,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljstache.core.render.cljs$core$IFn$_invoke$arity$3 = (function (template,data,partials){
var vec__21173 = cljstache.core.preprocess.call(null,template,data,partials);
var template__$1 = cljs.core.nth.call(null,vec__21173,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__21173,(1),null);
return cljstache.core.replace_all.call(null,cljstache.core.render_template.call(null,template__$1,data__$1,partials,true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\\\\\{\\\\\\{","{{"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\\\\\}\\\\\\}","}}"], null)], null));
}));

(cljstache.core.render.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=core.js.map
