// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k14058,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__14062 = k14058;
var G__14062__$1 = (((G__14062 instanceof cljs.core.Keyword))?G__14062.fqn:null);
switch (G__14062__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14058,else__4464__auto__);

}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__14063){
var vec__14064 = p__14063;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14064,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14064,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__14067,opts){
var self__ = this;
var map__14068 = p__14067;
var map__14068__$1 = cljs.core.__destructure_map(map__14068);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,cljs.core.cst$kw$request);
var map__14069 = this;
var map__14069__$1 = cljs.core.__destructure_map(map__14069);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14069__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__14070,xhrio){
var self__ = this;
var map__14071 = p__14070;
var map__14071__$1 = cljs.core.__destructure_map(map__14071);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14071__$1,cljs.core.cst$kw$response);
var map__14072 = this;
var map__14072__$1 = cljs.core.__destructure_map(map__14072);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14072__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14057){
var self__ = this;
var G__14057__$1 = this;
return (new cljs.core.RecordIter((0),G__14057__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__14073 = (function (coll__4458__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__14073(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14059,other14060){
var self__ = this;
var this14059__$1 = this;
return (((!((other14060 == null)))) && ((((this14059__$1.constructor === other14060.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14059__$1.name,other14060.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14059__$1.request,other14060.request)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14059__$1.response,other14060.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14059__$1.__extmap,other14060.__extmap)))))))))));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k14058){
var self__ = this;
var this__4468__auto____$1 = this;
var G__14074 = k14058;
var G__14074__$1 = (((G__14074 instanceof cljs.core.Keyword))?G__14074.fqn:null);
switch (G__14074__$1) {
case "name":
case "request":
case "response":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14058);

}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__14057){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__14075 = cljs.core.keyword_identical_QMARK_;
var expr__14076 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__14078 = cljs.core.cst$kw$name;
var G__14079 = expr__14076;
return (pred__14075.cljs$core$IFn$_invoke$arity$2 ? pred__14075.cljs$core$IFn$_invoke$arity$2(G__14078,G__14079) : pred__14075.call(null,G__14078,G__14079));
})())){
return (new ajax.interceptors.StandardInterceptor(G__14057,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14080 = cljs.core.cst$kw$request;
var G__14081 = expr__14076;
return (pred__14075.cljs$core$IFn$_invoke$arity$2 ? pred__14075.cljs$core$IFn$_invoke$arity$2(G__14080,G__14081) : pred__14075.call(null,G__14080,G__14081));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__14057,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14082 = cljs.core.cst$kw$response;
var G__14083 = expr__14076;
return (pred__14075.cljs$core$IFn$_invoke$arity$2 ? pred__14075.cljs$core$IFn$_invoke$arity$2(G__14082,G__14083) : pred__14075.call(null,G__14082,G__14083));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__14057,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__14057),null));
}
}
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$request,self__.request,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$response,self__.response,null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__14057){
var self__ = this;
var this__4460__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__14057,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$type = true);

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"ajax.interceptors/StandardInterceptor",null,(1),null));
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"ajax.interceptors/StandardInterceptor");
}));

/**
 * Positional factory function for ajax.interceptors/StandardInterceptor.
 */
ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

/**
 * Factory function for ajax.interceptors/StandardInterceptor, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__14061){
var extmap__4501__auto__ = (function (){var G__14084 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14061,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0));
if(cljs.core.record_QMARK_(G__14061)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14084);
} else {
return G__14084;
}
})();
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14061),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__14061),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__14061),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Utility function. If you want to create your own interceptor
 * quickly, this will do the job. Note you don't need to specify
 * both methods. (Or indeed either, but it won't do much under
 * those circumstances.)
 */
ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){
return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__14087,xhrio){
var map__14088 = p__14087;
var map__14088__$1 = cljs.core.__destructure_map(map__14088);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14088__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(ajax.util.success_QMARK_(status)){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__4824__auto__ = [];
var len__4818__auto___14093 = arguments.length;
var i__4819__auto___14094 = (0);
while(true){
if((i__4819__auto___14094 < len__4818__auto___14093)){
args__4824__auto__.push((arguments[i__4819__auto___14094]));

var G__14095 = (i__4819__auto___14094 + (1));
i__4819__auto___14094 = G__14095;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
}));

(ajax.interceptors.fail.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ajax.interceptors.fail.cljs$lang$applyTo = (function (seq14089){
var G__14090 = cljs.core.first(seq14089);
var seq14089__$1 = cljs.core.next(seq14089);
var G__14091 = cljs.core.first(seq14089__$1);
var seq14089__$2 = cljs.core.next(seq14089__$1);
var G__14092 = cljs.core.first(seq14089__$2);
var seq14089__$3 = cljs.core.next(seq14089__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14090,G__14091,G__14092,seq14089__$3);
}));

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k14098,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__14102 = k14098;
var G__14102__$1 = (((G__14102 instanceof cljs.core.Keyword))?G__14102.fqn:null);
switch (G__14102__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14098,else__4464__auto__);

}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__14103){
var vec__14104 = p__14103;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__14107,request){
var self__ = this;
var map__14108 = p__14107;
var map__14108__$1 = cljs.core.__destructure_map(map__14108);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14108__$1,cljs.core.cst$kw$content_DASH_type);
var map__14109 = this;
var map__14109__$1 = cljs.core.__destructure_map(map__14109);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109__$1,cljs.core.cst$kw$content_DASH_type);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,(function (p1__14096_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__4212__auto__ = p1__14096_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
}));
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__14110,xhrio){
var self__ = this;
var map__14111 = p__14110;
var map__14111__$1 = cljs.core.__destructure_map(map__14111);
var format = map__14111__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14111__$1,cljs.core.cst$kw$read);
var map__14112 = this;
var map__14112__$1 = cljs.core.__destructure_map(map__14112);
var format__$1 = map__14112__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14112__$1,cljs.core.cst$kw$read);
try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__14114 = status;
switch (G__14114) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__14115 = "Request failed.";
var G__14116 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__14115,G__14116) : fail.call(null,G__14115,G__14116));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__14117 = "Request aborted by client.";
var G__14118 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__14117,G__14118) : fail.call(null,G__14117,G__14118));
} else {
var G__14119 = "Request timed out.";
var G__14120 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__14119,G__14120) : fail.call(null,G__14119,G__14120));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(ajax.util.success_QMARK_(status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__14122 = ajax.protocols._status_text(xhrio);
var G__14123 = cljs.core.cst$kw$error;
var G__14124 = cljs.core.cst$kw$response;
var G__14125 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__14122,G__14123,G__14124,G__14125) : fail.call(null,G__14122,G__14123,G__14124,G__14125));
}
}catch (e14121){if((e14121 instanceof Object)){
var e = e14121;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e14121;

}
}
}
}catch (e14113){if((e14113 instanceof Object)){
var e = e14113;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e14113;

}
}}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14097){
var self__ = this;
var G__14097__$1 = this;
return (new cljs.core.RecordIter((0),G__14097__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__14126 = (function (coll__4458__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__14126(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14099,other14100){
var self__ = this;
var this14099__$1 = this;
return (((!((other14100 == null)))) && ((((this14099__$1.constructor === other14100.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14099__$1.read,other14100.read)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14099__$1.description,other14100.description)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14099__$1.content_type,other14100.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14099__$1.__extmap,other14100.__extmap)))))))))));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k14098){
var self__ = this;
var this__4468__auto____$1 = this;
var G__14127 = k14098;
var G__14127__$1 = (((G__14127 instanceof cljs.core.Keyword))?G__14127.fqn:null);
switch (G__14127__$1) {
case "read":
case "description":
case "content-type":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14098);

}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__14097){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__14128 = cljs.core.keyword_identical_QMARK_;
var expr__14129 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__14131 = cljs.core.cst$kw$read;
var G__14132 = expr__14129;
return (pred__14128.cljs$core$IFn$_invoke$arity$2 ? pred__14128.cljs$core$IFn$_invoke$arity$2(G__14131,G__14132) : pred__14128.call(null,G__14131,G__14132));
})())){
return (new ajax.interceptors.ResponseFormat(G__14097,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14133 = cljs.core.cst$kw$description;
var G__14134 = expr__14129;
return (pred__14128.cljs$core$IFn$_invoke$arity$2 ? pred__14128.cljs$core$IFn$_invoke$arity$2(G__14133,G__14134) : pred__14128.call(null,G__14133,G__14134));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__14097,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14135 = cljs.core.cst$kw$content_DASH_type;
var G__14136 = expr__14129;
return (pred__14128.cljs$core$IFn$_invoke$arity$2 ? pred__14128.cljs$core$IFn$_invoke$arity$2(G__14135,G__14136) : pred__14128.call(null,G__14135,G__14136));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__14097,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__14097),null));
}
}
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$read,self__.read,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$description,self__.description,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$content_DASH_type,self__.content_type,null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__14097){
var self__ = this;
var this__4460__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__14097,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
}));

(ajax.interceptors.ResponseFormat.cljs$lang$type = true);

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ResponseFormat",null,(1),null));
}));

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"ajax.interceptors/ResponseFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ResponseFormat.
 */
ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

/**
 * Factory function for ajax.interceptors/ResponseFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__14101){
var extmap__4501__auto__ = (function (){var G__14137 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14101,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0));
if(cljs.core.record_QMARK_(G__14101)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14137);
} else {
return G__14137;
}
})();
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__14101),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__14101),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__14101),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Internal function. Takes whatever was provided as :request-format and 
 * converts it to a true request format. In practice, this just means it will 
 * interpret functions as formats and not change maps. Note that it throws an
 * exception when passed a keyword, because they should already have been 
 * transformed to maps.
 */
ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k14142,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__14146 = k14142;
switch (G__14146) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14142,else__4464__auto__);

}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__14147){
var vec__14148 = p__14147;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14148,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14148,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__14151){
var self__ = this;
var map__14152 = p__14151;
var map__14152__$1 = cljs.core.__destructure_map(map__14152);
var request = map__14152__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__14153 = ajax.interceptors.get_request_format(format);
var map__14153__$1 = cljs.core.__destructure_map(map__14153);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14153__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14153__$1,cljs.core.cst$kw$content_DASH_type);
var body = (((!((write == null))))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__4212__auto__ = headers;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14141){
var self__ = this;
var G__14141__$1 = this;
return (new cljs.core.RecordIter((0),G__14141__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__14154 = (function (coll__4458__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__14154(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14143,other14144){
var self__ = this;
var this14143__$1 = this;
return (((!((other14144 == null)))) && ((((this14143__$1.constructor === other14144.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14143__$1.__extmap,other14144.__extmap)))));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k14142){
var self__ = this;
var this__4468__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k14142);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__14141){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__14155 = cljs.core.keyword_identical_QMARK_;
var expr__14156 = k__4470__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__14141),null));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__14141){
var self__ = this;
var this__4460__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__14141,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true);

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ApplyRequestFormat",null,(1),null));
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"ajax.interceptors/ApplyRequestFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ApplyRequestFormat.
 */
ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ApplyRequestFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__14145){
var extmap__4501__auto__ = (function (){var G__14158 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__14145);
if(cljs.core.record_QMARK_(G__14145)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14158);
} else {
return G__14158;
}
})();
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Internal function. Takes a uri and appends the interpretation of the query string to it
 * matching the behaviour of `url-request-format`.
 */
ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(p__14160,uri){
var map__14161 = p__14160;
var map__14161__$1 = cljs.core.__destructure_map(map__14161);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161__$1,cljs.core.cst$kw$params);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161__$1,cljs.core.cst$kw$method);
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161__$1,cljs.core.cst$kw$url_DASH_params);
var temp__5751__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5751__auto__)){
var final_url_params = temp__5751__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),(cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?"),ajax.url.params_to_str(vec_strategy,final_url_params)].join('');
} else {
return uri;
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
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ProcessUrlParameters = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k14163,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__14167 = k14163;
switch (G__14167) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14163,else__4464__auto__);

}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__14168){
var vec__14169 = p__14168;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__14172){
var self__ = this;
var map__14173 = p__14172;
var map__14173__$1 = cljs.core.__destructure_map(map__14173);
var request = map__14173__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,cljs.core.cst$kw$method);
var ___$1 = this;
var G__14174 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.uri_with_params,request));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(G__14174);
} else {
return G__14174;
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#ajax.interceptors.ProcessUrlParameters{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14162){
var self__ = this;
var G__14162__$1 = this;
return (new cljs.core.RecordIter((0),G__14162__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__14175 = (function (coll__4458__auto__){
return (-516728758 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__14175(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14164,other14165){
var self__ = this;
var this14164__$1 = this;
return (((!((other14165 == null)))) && ((((this14164__$1.constructor === other14165.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14164__$1.__extmap,other14165.__extmap)))));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k14163){
var self__ = this;
var this__4468__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k14163);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__14162){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__14176 = cljs.core.keyword_identical_QMARK_;
var expr__14177 = k__4470__auto__;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__14162),null));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__14162){
var self__ = this;
var this__4460__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(G__14162,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(ajax.interceptors.ProcessUrlParameters.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$type = true);

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ProcessUrlParameters",null,(1),null));
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"ajax.interceptors/ProcessUrlParameters");
}));

/**
 * Positional factory function for ajax.interceptors/ProcessUrlParameters.
 */
ajax.interceptors.__GT_ProcessUrlParameters = (function ajax$interceptors$__GT_ProcessUrlParameters(){
return (new ajax.interceptors.ProcessUrlParameters(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ProcessUrlParameters, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ProcessUrlParameters = (function ajax$interceptors$map__GT_ProcessUrlParameters(G__14166){
var extmap__4501__auto__ = (function (){var G__14179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__14166);
if(cljs.core.record_QMARK_(G__14166)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14179);
} else {
return G__14179;
}
})();
return (new ajax.interceptors.ProcessUrlParameters(null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k14182,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__14186 = k14182;
switch (G__14186) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14182,else__4464__auto__);

}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__14187){
var vec__14188 = p__14187;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__14191){
var self__ = this;
var map__14192 = p__14191;
var map__14192__$1 = cljs.core.__destructure_map(map__14192);
var request = map__14192__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14192__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14181){
var self__ = this;
var G__14181__$1 = this;
return (new cljs.core.RecordIter((0),G__14181__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__14193 = (function (coll__4458__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__14193(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14183,other14184){
var self__ = this;
var this14183__$1 = this;
return (((!((other14184 == null)))) && ((((this14183__$1.constructor === other14184.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14183__$1.__extmap,other14184.__extmap)))));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k14182){
var self__ = this;
var this__4468__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k14182);
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__14181){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__14194 = cljs.core.keyword_identical_QMARK_;
var expr__14195 = k__4470__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__14181),null));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__14181){
var self__ = this;
var this__4460__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__14181,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.DirectSubmission.cljs$lang$type = true);

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"ajax.interceptors/DirectSubmission",null,(1),null));
}));

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"ajax.interceptors/DirectSubmission");
}));

/**
 * Positional factory function for ajax.interceptors/DirectSubmission.
 */
ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

/**
 * Factory function for ajax.interceptors/DirectSubmission, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__14185){
var extmap__4501__auto__ = (function (){var G__14197 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__14185);
if(cljs.core.record_QMARK_(G__14185)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14197);
} else {
return G__14197;
}
})();
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(extmap__4501__auto__),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessUrlParameters(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__14199){
var map__14200 = p__14199;
var map__14200__$1 = cljs.core.__destructure_map(map__14200);
var opts = map__14200__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14200__$1,cljs.core.cst$kw$response_DASH_format);
if(ajax.interceptors.is_response_format_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
