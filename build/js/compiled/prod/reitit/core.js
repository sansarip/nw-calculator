// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reitit.impl');
goog.require('reitit.exception');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_20560 = (function (this$,opts){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.expand[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4510__auto__.call(null,this$,opts));
} else {
var m__4508__auto__ = (reitit.core.expand["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4508__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_20560(this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_20563 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.router_name[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.core.router_name["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_20563(this$);
}
});

var reitit$core$Router$routes$dyn_20564 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.routes[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.core.routes["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_20564(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_20565 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_20565(this$);
}
});

var reitit$core$Router$options$dyn_20566 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.options[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.core.options["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_20566(this$);
}
});

var reitit$core$Router$route_names$dyn_20567 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.route_names[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reitit.core.route_names["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_20567(this$);
}
});

var reitit$core$Router$match_by_path$dyn_20568 = (function (this$,path){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4510__auto__.call(null,this$,path));
} else {
var m__4508__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4508__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_20568(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_20569 = (function() {
var G__20570 = null;
var G__20570__2 = (function (this$,name){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4510__auto__.call(null,this$,name));
} else {
var m__4508__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4508__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__20570__3 = (function (this$,name,path_params){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4510__auto__.call(null,this$,name,path_params));
} else {
var m__4508__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4508__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__20570 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__20570__2.call(this,this$,name);
case 3:
return G__20570__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20570.cljs$core$IFn$_invoke$arity$2 = G__20570__2;
G__20570.cljs$core$IFn$_invoke$arity$3 = G__20570__3;
return G__20570;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__20562 = arguments.length;
switch (G__20562) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_20569.cljs$core$IFn$_invoke$arity$2(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_20569.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20574,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20578 = k20574;
var G__20578__$1 = (((G__20578 instanceof cljs.core.Keyword))?G__20578.fqn:null);
switch (G__20578__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20574,else__4464__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__20579){
var vec__20580 = p__20579;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20580,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20580,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.core.Match{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20573){
var self__ = this;
var G__20573__$1 = this;
return (new cljs.core.RecordIter((0),G__20573__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__20583 = (function (coll__4458__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__20583(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20575,other20576){
var self__ = this;
var this20575__$1 = this;
return (((!((other20576 == null)))) && ((((this20575__$1.constructor === other20576.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20575__$1.template,other20576.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20575__$1.data,other20576.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20575__$1.result,other20576.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20575__$1.path_params,other20576.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20575__$1.path,other20576.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20575__$1.__extmap,other20576.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$data,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20574){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20584 = k20574;
var G__20584__$1 = (((G__20584 instanceof cljs.core.Keyword))?G__20584.fqn:null);
switch (G__20584__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20574);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20573){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20585 = cljs.core.keyword_identical_QMARK_;
var expr__20586 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__20588 = cljs.core.cst$kw$template;
var G__20589 = expr__20586;
return (pred__20585.cljs$core$IFn$_invoke$arity$2 ? pred__20585.cljs$core$IFn$_invoke$arity$2(G__20588,G__20589) : pred__20585.call(null,G__20588,G__20589));
})())){
return (new reitit.core.Match(G__20573,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20590 = cljs.core.cst$kw$data;
var G__20591 = expr__20586;
return (pred__20585.cljs$core$IFn$_invoke$arity$2 ? pred__20585.cljs$core$IFn$_invoke$arity$2(G__20590,G__20591) : pred__20585.call(null,G__20590,G__20591));
})())){
return (new reitit.core.Match(self__.template,G__20573,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20592 = cljs.core.cst$kw$result;
var G__20593 = expr__20586;
return (pred__20585.cljs$core$IFn$_invoke$arity$2 ? pred__20585.cljs$core$IFn$_invoke$arity$2(G__20592,G__20593) : pred__20585.call(null,G__20592,G__20593));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__20573,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20594 = cljs.core.cst$kw$path_DASH_params;
var G__20595 = expr__20586;
return (pred__20585.cljs$core$IFn$_invoke$arity$2 ? pred__20585.cljs$core$IFn$_invoke$arity$2(G__20594,G__20595) : pred__20585.call(null,G__20594,G__20595));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__20573,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20596 = cljs.core.cst$kw$path;
var G__20597 = expr__20586;
return (pred__20585.cljs$core$IFn$_invoke$arity$2 ? pred__20585.cljs$core$IFn$_invoke$arity$2(G__20596,G__20597) : pred__20585.call(null,G__20596,G__20597));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__20573,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__20573),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20573){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__20573,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$path], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__20577){
var extmap__4501__auto__ = (function (){var G__20598 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20577,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], 0));
if(cljs.core.record_QMARK_(G__20577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20598);
} else {
return G__20598;
}
})();
return (new reitit.core.Match(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__20577),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__20577),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__20577),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__20577),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__20577),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20602,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20606 = k20602;
var G__20606__$1 = (((G__20606 instanceof cljs.core.Keyword))?G__20606.fqn:null);
switch (G__20606__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20602,else__4464__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__20607){
var vec__20608 = p__20607;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20601){
var self__ = this;
var G__20601__$1 = this;
return (new cljs.core.RecordIter((0),G__20601__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (){var fexpr__20611 = (function (coll__4458__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__20611(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20603,other20604){
var self__ = this;
var this20603__$1 = this;
return (((!((other20604 == null)))) && ((((this20603__$1.constructor === other20604.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20603__$1.template,other20604.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20603__$1.data,other20604.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20603__$1.result,other20604.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20603__$1.path_params,other20604.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20603__$1.required,other20604.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20603__$1.__extmap,other20604.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$required,null,cljs.core.cst$kw$data,null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20602){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20612 = k20602;
var G__20612__$1 = (((G__20612 instanceof cljs.core.Keyword))?G__20612.fqn:null);
switch (G__20612__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20602);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20601){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20613 = cljs.core.keyword_identical_QMARK_;
var expr__20614 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__20616 = cljs.core.cst$kw$template;
var G__20617 = expr__20614;
return (pred__20613.cljs$core$IFn$_invoke$arity$2 ? pred__20613.cljs$core$IFn$_invoke$arity$2(G__20616,G__20617) : pred__20613.call(null,G__20616,G__20617));
})())){
return (new reitit.core.PartialMatch(G__20601,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20618 = cljs.core.cst$kw$data;
var G__20619 = expr__20614;
return (pred__20613.cljs$core$IFn$_invoke$arity$2 ? pred__20613.cljs$core$IFn$_invoke$arity$2(G__20618,G__20619) : pred__20613.call(null,G__20618,G__20619));
})())){
return (new reitit.core.PartialMatch(self__.template,G__20601,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20620 = cljs.core.cst$kw$result;
var G__20621 = expr__20614;
return (pred__20613.cljs$core$IFn$_invoke$arity$2 ? pred__20613.cljs$core$IFn$_invoke$arity$2(G__20620,G__20621) : pred__20613.call(null,G__20620,G__20621));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__20601,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20622 = cljs.core.cst$kw$path_DASH_params;
var G__20623 = expr__20614;
return (pred__20613.cljs$core$IFn$_invoke$arity$2 ? pred__20613.cljs$core$IFn$_invoke$arity$2(G__20622,G__20623) : pred__20613.call(null,G__20622,G__20623));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__20601,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20624 = cljs.core.cst$kw$required;
var G__20625 = expr__20614;
return (pred__20613.cljs$core$IFn$_invoke$arity$2 ? pred__20613.cljs$core$IFn$_invoke$arity$2(G__20624,G__20625) : pred__20613.call(null,G__20624,G__20625));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__20601,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__20601),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$required,self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20601){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__20601,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$required], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__20605){
var extmap__4501__auto__ = (function (){var G__20626 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20605,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], 0));
if(cljs.core.record_QMARK_(G__20605)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20626);
} else {
return G__20626;
}
})();
return (new reitit.core.PartialMatch(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__20605),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__20605),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__20605),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__20605),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__20605),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__20630 = arguments.length;
switch (G__20630) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5751__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__20633 = arguments.length;
switch (G__20633) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__20634 = match;
var G__20634__$1 = (((G__20634 == null))?null:cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__20634));
if((G__20634__$1 == null)){
return null;
} else {
var G__20635 = G__20634__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20635),"?",reitit.impl.query_string(query_params)].join('');
} else {
return G__20635;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__20639 = arguments.length;
switch (G__20639) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = cljs.core.cst$kw$reitit$trie_SLASH_trie_DASH_compiler.cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__20640 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20643,p__20644){
var vec__20645 = p__20643;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20645,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20645,(1),null);
var vec__20648 = p__20644;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20648,(0),null);
var map__20651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20648,(1),null);
var map__20651__$1 = cljs.core.__destructure_map(map__20651);
var data = map__20651__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20651__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20648,(2),null);
var map__20652 = reitit.impl.parse(p,opts);
var map__20652__$1 = cljs.core.__destructure_map(map__20652);
var route = map__20652__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20652__$1,cljs.core.cst$kw$path_DASH_params);
var f = (function (p1__20637_SHARP_){
var temp__5751__auto__ = reitit.impl.path_for(route,p1__20637_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__20637_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__20637_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20640,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20640,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20653 = (function (matcher,vec__20640,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta20654){
this.matcher = matcher;
this.vec__20640 = vec__20640;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta20654 = meta20654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20655,meta20654__$1){
var self__ = this;
var _20655__$1 = this;
return (new reitit.core.t_reitit$core20653(self__.matcher,self__.vec__20640,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta20654__$1));
}));

(reitit.core.t_reitit$core20653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20655){
var self__ = this;
var _20655__$1 = this;
return self__.meta20654;
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$linear_DASH_router;
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match)),cljs.core.cst$kw$path,path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20653.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__20656 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__20656) : match.call(null,G__20656));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matcher,cljs.core.cst$sym$vec__20640,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20654], null);
}));

(reitit.core.t_reitit$core20653.cljs$lang$type = true);

(reitit.core.t_reitit$core20653.cljs$lang$ctorStr = "reitit.core/t_reitit$core20653");

(reitit.core.t_reitit$core20653.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20653");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20653.
 */
reitit.core.__GT_t_reitit$core20653 = (function reitit$core$__GT_t_reitit$core20653(matcher__$1,vec__20640__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta20654){
return (new reitit.core.t_reitit$core20653(matcher__$1,vec__20640__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta20654));
});

}

return (new reitit.core.t_reitit$core20653(matcher,vec__20640,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__20660 = arguments.length;
switch (G__20660) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5753__auto___20678 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5753__auto___20678){
var wilds_20679 = temp__5753__auto___20678;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_20679)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wilds,wilds_20679,cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__20661 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20664,p__20665){
var vec__20666 = p__20664;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20666,(1),null);
var vec__20669 = p__20665;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20669,(0),null);
var map__20672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20669,(1),null);
var map__20672__$1 = cljs.core.__destructure_map(map__20672);
var data = map__20672__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20672__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20669,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__20658_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__20658_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20661,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20661,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20673 = (function (vec__20661,names,data,compiled_routes,routes,lookup,pl,nl,opts,meta20674){
this.vec__20661 = vec__20661;
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta20674 = meta20674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20675,meta20674__$1){
var self__ = this;
var _20675__$1 = this;
return (new reitit.core.t_reitit$core20673(self__.vec__20661,self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,meta20674__$1));
}));

(reitit.core.t_reitit$core20673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20675){
var self__ = this;
var _20675__$1 = this;
return self__.meta20674;
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$lookup_DASH_router;
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20673.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__20676 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__20676) : match.call(null,G__20676));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec__20661,cljs.core.cst$sym$names,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20674], null);
}));

(reitit.core.t_reitit$core20673.cljs$lang$type = true);

(reitit.core.t_reitit$core20673.cljs$lang$ctorStr = "reitit.core/t_reitit$core20673");

(reitit.core.t_reitit$core20673.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20673");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20673.
 */
reitit.core.__GT_t_reitit$core20673 = (function reitit$core$__GT_t_reitit$core20673(vec__20661__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta20674){
return (new reitit.core.t_reitit$core20673(vec__20661__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta20674));
});

}

return (new reitit.core.t_reitit$core20673(vec__20661,names,data,compiled_routes,routes,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__20682 = arguments.length;
switch (G__20682) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = cljs.core.cst$kw$reitit$trie_SLASH_trie_DASH_compiler.cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__20683 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20686,p__20687){
var vec__20688 = p__20686;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688,(1),null);
var vec__20691 = p__20687;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(0),null);
var map__20694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(1),null);
var map__20694__$1 = cljs.core.__destructure_map(map__20694);
var data = map__20694__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20691,(2),null);
var map__20695 = reitit.impl.parse(p,opts);
var map__20695__$1 = cljs.core.__destructure_map(map__20695);
var route = map__20695__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20695__$1,cljs.core.cst$kw$path_DASH_params);
var f = (function (p1__20680_SHARP_){
var temp__5751__auto__ = reitit.impl.path_for(route,p1__20680_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__20680_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__20680_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20696 = (function (matcher,names,compiled_routes,routes,lookup,vec__20683,pl,nl,match_by_path,compiler,opts,meta20697){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__20683 = vec__20683;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta20697 = meta20697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20698,meta20697__$1){
var self__ = this;
var _20698__$1 = this;
return (new reitit.core.t_reitit$core20696(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__20683,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta20697__$1));
}));

(reitit.core.t_reitit$core20696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20698){
var self__ = this;
var _20698__$1 = this;
return self__.meta20697;
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$trie_DASH_router;
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match)),cljs.core.cst$kw$path,path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20696.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__20699 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__20699) : match.call(null,G__20699));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matcher,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$vec__20683,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20697], null);
}));

(reitit.core.t_reitit$core20696.cljs$lang$type = true);

(reitit.core.t_reitit$core20696.cljs$lang$ctorStr = "reitit.core/t_reitit$core20696");

(reitit.core.t_reitit$core20696.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20696");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20696.
 */
reitit.core.__GT_t_reitit$core20696 = (function reitit$core$__GT_t_reitit$core20696(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__20683__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta20697){
return (new reitit.core.t_reitit$core20696(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__20683__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta20697));
});

}

return (new reitit.core.t_reitit$core20696(matcher,names,compiled_routes,routes,lookup,vec__20683,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__20702 = arguments.length;
switch (G__20702) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var vec__20703 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20703,(0),null);
var names = vec__20703;
var vec__20706 = compiled_routes;
var vec__20709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20706,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20709,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20709,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20709,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20712 = (function (vec__20703,p,names,match,data,compiled_routes,routes,n,vec__20709,vec__20706,result,opts,meta20713){
this.vec__20703 = vec__20703;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.vec__20709 = vec__20709;
this.vec__20706 = vec__20706;
this.result = result;
this.opts = opts;
this.meta20713 = meta20713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20714,meta20713__$1){
var self__ = this;
var _20714__$1 = this;
return (new reitit.core.t_reitit$core20712(self__.vec__20703,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.vec__20709,self__.vec__20706,self__.result,self__.opts,meta20713__$1));
}));

(reitit.core.t_reitit$core20712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20714){
var self__ = this;
var _20714__$1 = this;
return self__.meta20713;
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$single_DASH_static_DASH_path_DASH_router;
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core20712.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,cljs.core.cst$kw$path_DASH_params,reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec__20703,cljs.core.cst$sym$p,cljs.core.cst$sym$names,cljs.core.cst$sym$match,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$n,cljs.core.cst$sym$vec__20709,cljs.core.cst$sym$vec__20706,cljs.core.cst$sym$result,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20713], null);
}));

(reitit.core.t_reitit$core20712.cljs$lang$type = true);

(reitit.core.t_reitit$core20712.cljs$lang$ctorStr = "reitit.core/t_reitit$core20712");

(reitit.core.t_reitit$core20712.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20712");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20712.
 */
reitit.core.__GT_t_reitit$core20712 = (function reitit$core$__GT_t_reitit$core20712(vec__20703__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__20709__$1,vec__20706__$1,result__$1,opts__$1,meta20713){
return (new reitit.core.t_reitit$core20712(vec__20703__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__20709__$1,vec__20706__$1,result__$1,opts__$1,meta20713));
});

}

return (new reitit.core.t_reitit$core20712(vec__20703,p__$1,names,match,data,compiled_routes,routes,n,vec__20709,vec__20706,result,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__20717 = arguments.length;
switch (G__20717) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__20718 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__20718__$1 = cljs.core.__destructure_map(map__20718);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20719 = (function (map__20718,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta20720){
this.map__20718 = map__20718;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta20720 = meta20720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20721,meta20720__$1){
var self__ = this;
var _20721__$1 = this;
return (new reitit.core.t_reitit$core20719(self__.map__20718,self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta20720__$1));
}));

(reitit.core.t_reitit$core20719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20721){
var self__ = this;
var _20721__$1 = this;
return self__.meta20720;
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$mixed_DASH_router;
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core20719.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core20719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$map__20718,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$_DASH__GT_static_DASH_router,cljs.core.cst$sym$lookup,cljs.core.cst$sym$wild,cljs.core.cst$sym$static_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$wildcard_DASH_router,cljs.core.cst$sym$meta20720], null);
}));

(reitit.core.t_reitit$core20719.cljs$lang$type = true);

(reitit.core.t_reitit$core20719.cljs$lang$ctorStr = "reitit.core/t_reitit$core20719");

(reitit.core.t_reitit$core20719.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20719");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20719.
 */
reitit.core.__GT_t_reitit$core20719 = (function reitit$core$__GT_t_reitit$core20719(map__20718__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta20720){
return (new reitit.core.t_reitit$core20719(map__20718__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta20720));
});

}

return (new reitit.core.t_reitit$core20719(map__20718__$1,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__20725 = arguments.length;
switch (G__20725) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths((function (){var or__4212__auto__ = cljs.core.cst$kw$reitit$core_SLASH_path_DASH_conflicting.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.impl.path_conflicting_routes(compiled_routes,opts);
}
})());
var conflicting_QMARK_ = (function (p1__20723_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__20723_SHARP_));
});
var map__20726 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__20726__$1 = cljs.core.__destructure_map(map__20726);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20726__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20726__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20727 = (function (non_conflicting,map__20726,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta20728){
this.non_conflicting = non_conflicting;
this.map__20726 = map__20726;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta20728 = meta20728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20729,meta20728__$1){
var self__ = this;
var _20729__$1 = this;
return (new reitit.core.t_reitit$core20727(self__.non_conflicting,self__.map__20726,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta20728__$1));
}));

(reitit.core.t_reitit$core20727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20729){
var self__ = this;
var _20729__$1 = this;
return self__.meta20728;
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$quarantine_DASH_router;
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core20727.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core20727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$non_DASH_conflicting,cljs.core.cst$sym$map__20726,cljs.core.cst$sym$names,cljs.core.cst$sym$conflicting_DASH_paths,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$conflicting,cljs.core.cst$sym$routes,cljs.core.cst$sym$conflicting_QMARK_,cljs.core.cst$sym$mixed_DASH_router,cljs.core.cst$sym$linear_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20728], null);
}));

(reitit.core.t_reitit$core20727.cljs$lang$type = true);

(reitit.core.t_reitit$core20727.cljs$lang$ctorStr = "reitit.core/t_reitit$core20727");

(reitit.core.t_reitit$core20727.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20727");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20727.
 */
reitit.core.__GT_t_reitit$core20727 = (function reitit$core$__GT_t_reitit$core20727(non_conflicting__$1,map__20726__$2,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta20728){
return (new reitit.core.t_reitit$core20727(non_conflicting__$1,map__20726__$2,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta20728));
});

}

return (new reitit.core.t_reitit$core20727(non_conflicting,map__20726__$1,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lookup,(function reitit$core$default_router_options_$_lookup(p__20731,_){
var vec__20732 = p__20731;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732,(0),null);
var map__20735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732,(1),null);
var map__20735__$1 = cljs.core.__destructure_map(map__20735);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20735__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),cljs.core.cst$kw$expand,reitit.core.expand,cljs.core.cst$kw$coerce,(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),cljs.core.cst$kw$compile,(function reitit$core$default_router_options_$_compile(p__20736,_){
var vec__20737 = p__20736;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20737,(0),null);
var map__20740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20737,(1),null);
var map__20740__$1 = cljs.core.__destructure_map(map__20740);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20740__$1,cljs.core.cst$kw$handler);
return handler;
}),cljs.core.cst$kw$exception,reitit.exception.exception,cljs.core.cst$kw$conflicts,(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path_DASH_conflicts,conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__20742 = arguments.length;
switch (G__20742) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__20743 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__20743__$1 = cljs.core.__destructure_map(map__20743);
var opts__$1 = map__20743__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.cst$kw$router);
var conflicts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.cst$kw$conflicts);
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = ((cljs.core.not((function (){var and__4210__auto__ = router;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(conflicts);
} else {
return and__4210__auto__;
}
})()))?reitit.impl.path_conflicting_routes(routes,opts__$1):null);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5753__auto___20749 = (function (){var and__4210__auto__ = conflicts;
if(cljs.core.truth_(and__4210__auto__)){
return reitit.impl.unresolved_conflicts(path_conflicting);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto___20749)){
var conflict_report_20750 = temp__5753__auto___20749;
(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(conflict_report_20750) : conflicts.call(null,conflict_report_20750));
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name_DASH_conflicts,name_conflicting);
} else {
}

var temp__5753__auto___20751 = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5753__auto___20751)){
var validate_20752 = temp__5753__auto___20751;
(validate_20752.cljs$core$IFn$_invoke$arity$2 ? validate_20752.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_20752.call(null,compiled_routes,opts__$1));
} else {
}

var G__20746 = compiled_routes;
var G__20747 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$reitit$core_SLASH_path_DASH_conflicting,path_conflicting);
return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(G__20746,G__20747) : router__$1.call(null,G__20746,G__20747));
}catch (e20744){if((e20744 instanceof Error)){
var e = e20744;
throw (function (){var fexpr__20745 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$exception,cljs.core.identity);
return (fexpr__20745.cljs$core$IFn$_invoke$arity$1 ? fexpr__20745.cljs$core$IFn$_invoke$arity$1(e) : fexpr__20745.call(null,e));
})();
} else {
throw e20744;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);

