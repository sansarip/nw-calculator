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

var reitit$core$Expand$expand$dyn_20561 = (function (this$,opts){
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
return reitit$core$Expand$expand$dyn_20561(this$,opts);
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

var reitit$core$Router$router_name$dyn_20564 = (function (this$){
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
return reitit$core$Router$router_name$dyn_20564(this$);
}
});

var reitit$core$Router$routes$dyn_20565 = (function (this$){
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
return reitit$core$Router$routes$dyn_20565(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_20566 = (function (this$){
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
return reitit$core$Router$compiled_routes$dyn_20566(this$);
}
});

var reitit$core$Router$options$dyn_20567 = (function (this$){
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
return reitit$core$Router$options$dyn_20567(this$);
}
});

var reitit$core$Router$route_names$dyn_20568 = (function (this$){
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
return reitit$core$Router$route_names$dyn_20568(this$);
}
});

var reitit$core$Router$match_by_path$dyn_20569 = (function (this$,path){
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
return reitit$core$Router$match_by_path$dyn_20569(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_20570 = (function() {
var G__20571 = null;
var G__20571__2 = (function (this$,name){
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
var G__20571__3 = (function (this$,name,path_params){
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
G__20571 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__20571__2.call(this,this$,name);
case 3:
return G__20571__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20571.cljs$core$IFn$_invoke$arity$2 = G__20571__2;
G__20571.cljs$core$IFn$_invoke$arity$3 = G__20571__3;
return G__20571;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__20563 = arguments.length;
switch (G__20563) {
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
return reitit$core$Router$match_by_name$dyn_20570.cljs$core$IFn$_invoke$arity$2(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_20570.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
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

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20575,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20579 = k20575;
var G__20579__$1 = (((G__20579 instanceof cljs.core.Keyword))?G__20579.fqn:null);
switch (G__20579__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20575,else__4464__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__20580){
var vec__20581 = p__20580;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,(1),null);
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

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20574){
var self__ = this;
var G__20574__$1 = this;
return (new cljs.core.RecordIter((0),G__20574__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4319__auto____$1 = (function (){var fexpr__20584 = (function (coll__4458__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__20584(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20576,other20577){
var self__ = this;
var this20576__$1 = this;
return (((!((other20577 == null)))) && ((((this20576__$1.constructor === other20577.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20576__$1.template,other20577.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20576__$1.data,other20577.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20576__$1.result,other20577.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20576__$1.path_params,other20577.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20576__$1.path,other20577.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20576__$1.__extmap,other20577.__extmap)))))))))))))));
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

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20575){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20585 = k20575;
var G__20585__$1 = (((G__20585 instanceof cljs.core.Keyword))?G__20585.fqn:null);
switch (G__20585__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20575);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20574){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20586 = cljs.core.keyword_identical_QMARK_;
var expr__20587 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__20589 = cljs.core.cst$kw$template;
var G__20590 = expr__20587;
return (pred__20586.cljs$core$IFn$_invoke$arity$2 ? pred__20586.cljs$core$IFn$_invoke$arity$2(G__20589,G__20590) : pred__20586.call(null,G__20589,G__20590));
})())){
return (new reitit.core.Match(G__20574,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20591 = cljs.core.cst$kw$data;
var G__20592 = expr__20587;
return (pred__20586.cljs$core$IFn$_invoke$arity$2 ? pred__20586.cljs$core$IFn$_invoke$arity$2(G__20591,G__20592) : pred__20586.call(null,G__20591,G__20592));
})())){
return (new reitit.core.Match(self__.template,G__20574,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20593 = cljs.core.cst$kw$result;
var G__20594 = expr__20587;
return (pred__20586.cljs$core$IFn$_invoke$arity$2 ? pred__20586.cljs$core$IFn$_invoke$arity$2(G__20593,G__20594) : pred__20586.call(null,G__20593,G__20594));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__20574,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20595 = cljs.core.cst$kw$path_DASH_params;
var G__20596 = expr__20587;
return (pred__20586.cljs$core$IFn$_invoke$arity$2 ? pred__20586.cljs$core$IFn$_invoke$arity$2(G__20595,G__20596) : pred__20586.call(null,G__20595,G__20596));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__20574,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20597 = cljs.core.cst$kw$path;
var G__20598 = expr__20587;
return (pred__20586.cljs$core$IFn$_invoke$arity$2 ? pred__20586.cljs$core$IFn$_invoke$arity$2(G__20597,G__20598) : pred__20586.call(null,G__20597,G__20598));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__20574,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__20574),null));
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

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20574){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__20574,self__.__extmap,self__.__hash));
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
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__20578){
var extmap__4501__auto__ = (function (){var G__20599 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20578,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], 0));
if(cljs.core.record_QMARK_(G__20578)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20599);
} else {
return G__20599;
}
})();
return (new reitit.core.Match(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__20578),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__20578),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__20578),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__20578),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__20578),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k20603,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__20607 = k20603;
var G__20607__$1 = (((G__20607 instanceof cljs.core.Keyword))?G__20607.fqn:null);
switch (G__20607__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20603,else__4464__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__20608){
var vec__20609 = p__20608;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20609,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20609,(1),null);
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

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20602){
var self__ = this;
var G__20602__$1 = this;
return (new cljs.core.RecordIter((0),G__20602__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4319__auto____$1 = (function (){var fexpr__20612 = (function (coll__4458__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
});
return fexpr__20612(this__4457__auto____$1);
})();
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20604,other20605){
var self__ = this;
var this20604__$1 = this;
return (((!((other20605 == null)))) && ((((this20604__$1.constructor === other20605.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20604__$1.template,other20605.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20604__$1.data,other20605.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20604__$1.result,other20605.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20604__$1.path_params,other20605.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20604__$1.required,other20605.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20604__$1.__extmap,other20605.__extmap)))))))))))))));
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

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k20603){
var self__ = this;
var this__4468__auto____$1 = this;
var G__20613 = k20603;
var G__20613__$1 = (((G__20613 instanceof cljs.core.Keyword))?G__20613.fqn:null);
switch (G__20613__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20603);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__20602){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__20614 = cljs.core.keyword_identical_QMARK_;
var expr__20615 = k__4470__auto__;
if(cljs.core.truth_((function (){var G__20617 = cljs.core.cst$kw$template;
var G__20618 = expr__20615;
return (pred__20614.cljs$core$IFn$_invoke$arity$2 ? pred__20614.cljs$core$IFn$_invoke$arity$2(G__20617,G__20618) : pred__20614.call(null,G__20617,G__20618));
})())){
return (new reitit.core.PartialMatch(G__20602,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20619 = cljs.core.cst$kw$data;
var G__20620 = expr__20615;
return (pred__20614.cljs$core$IFn$_invoke$arity$2 ? pred__20614.cljs$core$IFn$_invoke$arity$2(G__20619,G__20620) : pred__20614.call(null,G__20619,G__20620));
})())){
return (new reitit.core.PartialMatch(self__.template,G__20602,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20621 = cljs.core.cst$kw$result;
var G__20622 = expr__20615;
return (pred__20614.cljs$core$IFn$_invoke$arity$2 ? pred__20614.cljs$core$IFn$_invoke$arity$2(G__20621,G__20622) : pred__20614.call(null,G__20621,G__20622));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__20602,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20623 = cljs.core.cst$kw$path_DASH_params;
var G__20624 = expr__20615;
return (pred__20614.cljs$core$IFn$_invoke$arity$2 ? pred__20614.cljs$core$IFn$_invoke$arity$2(G__20623,G__20624) : pred__20614.call(null,G__20623,G__20624));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__20602,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20625 = cljs.core.cst$kw$required;
var G__20626 = expr__20615;
return (pred__20614.cljs$core$IFn$_invoke$arity$2 ? pred__20614.cljs$core$IFn$_invoke$arity$2(G__20625,G__20626) : pred__20614.call(null,G__20625,G__20626));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__20602,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__20602),null));
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

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__20602){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__20602,self__.__extmap,self__.__hash));
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
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__20606){
var extmap__4501__auto__ = (function (){var G__20627 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20606,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], 0));
if(cljs.core.record_QMARK_(G__20606)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20627);
} else {
return G__20627;
}
})();
return (new reitit.core.PartialMatch(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__20606),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__20606),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__20606),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__20606),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__20606),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__20631 = arguments.length;
switch (G__20631) {
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
var G__20634 = arguments.length;
switch (G__20634) {
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
var G__20635 = match;
var G__20635__$1 = (((G__20635 == null))?null:cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__20635));
if((G__20635__$1 == null)){
return null;
} else {
var G__20636 = G__20635__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20636),"?",reitit.impl.query_string(query_params)].join('');
} else {
return G__20636;
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
var G__20640 = arguments.length;
switch (G__20640) {
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
var vec__20641 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20644,p__20645){
var vec__20646 = p__20644;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20646,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20646,(1),null);
var vec__20649 = p__20645;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20649,(0),null);
var map__20652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20649,(1),null);
var map__20652__$1 = cljs.core.__destructure_map(map__20652);
var data = map__20652__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20652__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20649,(2),null);
var map__20653 = reitit.impl.parse(p,opts);
var map__20653__$1 = cljs.core.__destructure_map(map__20653);
var route = map__20653__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20653__$1,cljs.core.cst$kw$path_DASH_params);
var f = (function (p1__20638_SHARP_){
var temp__5751__auto__ = reitit.impl.path_for(route,p1__20638_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__20638_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__20638_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20654 = (function (matcher,names,compiled_routes,routes,lookup,vec__20641,pl,nl,match_by_path,compiler,opts,meta20655){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__20641 = vec__20641;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta20655 = meta20655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20656,meta20655__$1){
var self__ = this;
var _20656__$1 = this;
return (new reitit.core.t_reitit$core20654(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__20641,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta20655__$1));
}));

(reitit.core.t_reitit$core20654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20656){
var self__ = this;
var _20656__$1 = this;
return self__.meta20655;
}));

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$linear_DASH_router;
}));

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
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

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
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

(reitit.core.t_reitit$core20654.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__20657 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__20657) : match.call(null,G__20657));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matcher,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$vec__20641,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20655], null);
}));

(reitit.core.t_reitit$core20654.cljs$lang$type = true);

(reitit.core.t_reitit$core20654.cljs$lang$ctorStr = "reitit.core/t_reitit$core20654");

(reitit.core.t_reitit$core20654.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20654");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20654.
 */
reitit.core.__GT_t_reitit$core20654 = (function reitit$core$__GT_t_reitit$core20654(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__20641__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta20655){
return (new reitit.core.t_reitit$core20654(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__20641__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta20655));
});

}

return (new reitit.core.t_reitit$core20654(matcher,names,compiled_routes,routes,lookup,vec__20641,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__20661 = arguments.length;
switch (G__20661) {
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
var temp__5753__auto___20679 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5753__auto___20679){
var wilds_20680 = temp__5753__auto___20679;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_20680)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wilds,wilds_20680,cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__20662 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20665,p__20666){
var vec__20667 = p__20665;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20667,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20667,(1),null);
var vec__20670 = p__20666;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20670,(0),null);
var map__20673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20670,(1),null);
var map__20673__$1 = cljs.core.__destructure_map(map__20673);
var data = map__20673__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20673__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20670,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__20659_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__20659_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20662,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20662,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20674 = (function (names,data,compiled_routes,vec__20662,routes,lookup,pl,nl,opts,meta20675){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.vec__20662 = vec__20662;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta20675 = meta20675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20676,meta20675__$1){
var self__ = this;
var _20676__$1 = this;
return (new reitit.core.t_reitit$core20674(self__.names,self__.data,self__.compiled_routes,self__.vec__20662,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,meta20675__$1));
}));

(reitit.core.t_reitit$core20674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20676){
var self__ = this;
var _20676__$1 = this;
return self__.meta20675;
}));

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$lookup_DASH_router;
}));

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
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

(reitit.core.t_reitit$core20674.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__20677 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__20677) : match.call(null,G__20677));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$vec__20662,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20675], null);
}));

(reitit.core.t_reitit$core20674.cljs$lang$type = true);

(reitit.core.t_reitit$core20674.cljs$lang$ctorStr = "reitit.core/t_reitit$core20674");

(reitit.core.t_reitit$core20674.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20674");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20674.
 */
reitit.core.__GT_t_reitit$core20674 = (function reitit$core$__GT_t_reitit$core20674(names__$1,data__$1,compiled_routes__$1,vec__20662__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta20675){
return (new reitit.core.t_reitit$core20674(names__$1,data__$1,compiled_routes__$1,vec__20662__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta20675));
});

}

return (new reitit.core.t_reitit$core20674(names,data,compiled_routes,vec__20662,routes,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
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
var G__20683 = arguments.length;
switch (G__20683) {
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
var vec__20684 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20687,p__20688){
var vec__20689 = p__20687;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20689,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20689,(1),null);
var vec__20692 = p__20688;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20692,(0),null);
var map__20695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20692,(1),null);
var map__20695__$1 = cljs.core.__destructure_map(map__20695);
var data = map__20695__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20695__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20692,(2),null);
var map__20696 = reitit.impl.parse(p,opts);
var map__20696__$1 = cljs.core.__destructure_map(map__20696);
var route = map__20696__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20696__$1,cljs.core.cst$kw$path_DASH_params);
var f = (function (p1__20681_SHARP_){
var temp__5751__auto__ = reitit.impl.path_for(route,p1__20681_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__20681_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__20681_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20684,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20684,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20697 = (function (matcher,names,compiled_routes,routes,lookup,pl,nl,vec__20684,match_by_path,compiler,opts,meta20698){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.vec__20684 = vec__20684;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta20698 = meta20698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20699,meta20698__$1){
var self__ = this;
var _20699__$1 = this;
return (new reitit.core.t_reitit$core20697(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.vec__20684,self__.match_by_path,self__.compiler,self__.opts,meta20698__$1));
}));

(reitit.core.t_reitit$core20697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20699){
var self__ = this;
var _20699__$1 = this;
return self__.meta20698;
}));

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$trie_DASH_router;
}));

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
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

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
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

(reitit.core.t_reitit$core20697.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__20700 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__20700) : match.call(null,G__20700));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matcher,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$vec__20684,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20698], null);
}));

(reitit.core.t_reitit$core20697.cljs$lang$type = true);

(reitit.core.t_reitit$core20697.cljs$lang$ctorStr = "reitit.core/t_reitit$core20697");

(reitit.core.t_reitit$core20697.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20697");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20697.
 */
reitit.core.__GT_t_reitit$core20697 = (function reitit$core$__GT_t_reitit$core20697(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__20684__$1,match_by_path__$1,compiler__$1,opts__$1,meta20698){
return (new reitit.core.t_reitit$core20697(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__20684__$1,match_by_path__$1,compiler__$1,opts__$1,meta20698));
});

}

return (new reitit.core.t_reitit$core20697(matcher,names,compiled_routes,routes,lookup,pl,nl,vec__20684,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__20703 = arguments.length;
switch (G__20703) {
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

var vec__20704 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20704,(0),null);
var names = vec__20704;
var vec__20707 = compiled_routes;
var vec__20710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20707,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20710,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20710,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20710,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20713 = (function (vec__20710,p,names,match,data,compiled_routes,vec__20704,routes,n,result,opts,vec__20707,meta20714){
this.vec__20710 = vec__20710;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.vec__20704 = vec__20704;
this.routes = routes;
this.n = n;
this.result = result;
this.opts = opts;
this.vec__20707 = vec__20707;
this.meta20714 = meta20714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20715,meta20714__$1){
var self__ = this;
var _20715__$1 = this;
return (new reitit.core.t_reitit$core20713(self__.vec__20710,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.vec__20704,self__.routes,self__.n,self__.result,self__.opts,self__.vec__20707,meta20714__$1));
}));

(reitit.core.t_reitit$core20713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20715){
var self__ = this;
var _20715__$1 = this;
return self__.meta20714;
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$single_DASH_static_DASH_path_DASH_router;
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core20713.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,cljs.core.cst$kw$path_DASH_params,reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core20713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec__20710,cljs.core.cst$sym$p,cljs.core.cst$sym$names,cljs.core.cst$sym$match,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$vec__20704,cljs.core.cst$sym$routes,cljs.core.cst$sym$n,cljs.core.cst$sym$result,cljs.core.cst$sym$opts,cljs.core.cst$sym$vec__20707,cljs.core.cst$sym$meta20714], null);
}));

(reitit.core.t_reitit$core20713.cljs$lang$type = true);

(reitit.core.t_reitit$core20713.cljs$lang$ctorStr = "reitit.core/t_reitit$core20713");

(reitit.core.t_reitit$core20713.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20713");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20713.
 */
reitit.core.__GT_t_reitit$core20713 = (function reitit$core$__GT_t_reitit$core20713(vec__20710__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__20704__$1,routes__$1,n__$1,result__$1,opts__$1,vec__20707__$1,meta20714){
return (new reitit.core.t_reitit$core20713(vec__20710__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__20704__$1,routes__$1,n__$1,result__$1,opts__$1,vec__20707__$1,meta20714));
});

}

return (new reitit.core.t_reitit$core20713(vec__20710,p__$1,names,match,data,compiled_routes,vec__20704,routes,n,result,opts,vec__20707,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__20718 = arguments.length;
switch (G__20718) {
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
var map__20719 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__20719__$1 = cljs.core.__destructure_map(map__20719);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20720 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__20719,opts,wildcard_router,meta20721){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.map__20719 = map__20719;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta20721 = meta20721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20722,meta20721__$1){
var self__ = this;
var _20722__$1 = this;
return (new reitit.core.t_reitit$core20720(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.map__20719,self__.opts,self__.wildcard_router,meta20721__$1));
}));

(reitit.core.t_reitit$core20720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20722){
var self__ = this;
var _20722__$1 = this;
return self__.meta20721;
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$mixed_DASH_router;
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core20720.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core20720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$_DASH__GT_static_DASH_router,cljs.core.cst$sym$lookup,cljs.core.cst$sym$wild,cljs.core.cst$sym$static_DASH_router,cljs.core.cst$sym$map__20719,cljs.core.cst$sym$opts,cljs.core.cst$sym$wildcard_DASH_router,cljs.core.cst$sym$meta20721], null);
}));

(reitit.core.t_reitit$core20720.cljs$lang$type = true);

(reitit.core.t_reitit$core20720.cljs$lang$ctorStr = "reitit.core/t_reitit$core20720");

(reitit.core.t_reitit$core20720.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20720");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20720.
 */
reitit.core.__GT_t_reitit$core20720 = (function reitit$core$__GT_t_reitit$core20720(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__20719__$2,opts__$1,wildcard_router__$1,meta20721){
return (new reitit.core.t_reitit$core20720(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__20719__$2,opts__$1,wildcard_router__$1,meta20721));
});

}

return (new reitit.core.t_reitit$core20720(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__20719__$1,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__20726 = arguments.length;
switch (G__20726) {
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
var conflicting_QMARK_ = (function (p1__20724_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__20724_SHARP_));
});
var map__20727 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__20727__$1 = cljs.core.__destructure_map(map__20727);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core20728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core20728 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,map__20727,opts,meta20729){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.map__20727 = map__20727;
this.opts = opts;
this.meta20729 = meta20729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core20728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20730,meta20729__$1){
var self__ = this;
var _20730__$1 = this;
return (new reitit.core.t_reitit$core20728(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.map__20727,self__.opts,meta20729__$1));
}));

(reitit.core.t_reitit$core20728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20730){
var self__ = this;
var _20730__$1 = this;
return self__.meta20729;
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$quarantine_DASH_router;
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core20728.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core20728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$non_DASH_conflicting,cljs.core.cst$sym$names,cljs.core.cst$sym$conflicting_DASH_paths,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$conflicting,cljs.core.cst$sym$routes,cljs.core.cst$sym$conflicting_QMARK_,cljs.core.cst$sym$mixed_DASH_router,cljs.core.cst$sym$linear_DASH_router,cljs.core.cst$sym$map__20727,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta20729], null);
}));

(reitit.core.t_reitit$core20728.cljs$lang$type = true);

(reitit.core.t_reitit$core20728.cljs$lang$ctorStr = "reitit.core/t_reitit$core20728");

(reitit.core.t_reitit$core20728.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.core/t_reitit$core20728");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core20728.
 */
reitit.core.__GT_t_reitit$core20728 = (function reitit$core$__GT_t_reitit$core20728(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,map__20727__$2,opts__$1,meta20729){
return (new reitit.core.t_reitit$core20728(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,map__20727__$2,opts__$1,meta20729));
});

}

return (new reitit.core.t_reitit$core20728(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,map__20727__$1,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lookup,(function reitit$core$default_router_options_$_lookup(p__20732,_){
var vec__20733 = p__20732;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20733,(0),null);
var map__20736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20733,(1),null);
var map__20736__$1 = cljs.core.__destructure_map(map__20736);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20736__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),cljs.core.cst$kw$expand,reitit.core.expand,cljs.core.cst$kw$coerce,(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),cljs.core.cst$kw$compile,(function reitit$core$default_router_options_$_compile(p__20737,_){
var vec__20738 = p__20737;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20738,(0),null);
var map__20741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20738,(1),null);
var map__20741__$1 = cljs.core.__destructure_map(map__20741);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20741__$1,cljs.core.cst$kw$handler);
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
var G__20743 = arguments.length;
switch (G__20743) {
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
var map__20744 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__20744__$1 = cljs.core.__destructure_map(map__20744);
var opts__$1 = map__20744__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,cljs.core.cst$kw$router);
var conflicts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,cljs.core.cst$kw$conflicts);
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
var temp__5753__auto___20750 = (function (){var and__4210__auto__ = conflicts;
if(cljs.core.truth_(and__4210__auto__)){
return reitit.impl.unresolved_conflicts(path_conflicting);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto___20750)){
var conflict_report_20751 = temp__5753__auto___20750;
(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(conflict_report_20751) : conflicts.call(null,conflict_report_20751));
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name_DASH_conflicts,name_conflicting);
} else {
}

var temp__5753__auto___20752 = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5753__auto___20752)){
var validate_20753 = temp__5753__auto___20752;
(validate_20753.cljs$core$IFn$_invoke$arity$2 ? validate_20753.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_20753.call(null,compiled_routes,opts__$1));
} else {
}

var G__20747 = compiled_routes;
var G__20748 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$reitit$core_SLASH_path_DASH_conflicting,path_conflicting);
return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(G__20747,G__20748) : router__$1.call(null,G__20747,G__20748));
}catch (e20745){if((e20745 instanceof Error)){
var e = e20745;
throw (function (){var fexpr__20746 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$exception,cljs.core.identity);
return (fexpr__20746.cljs$core$IFn$_invoke$arity$1 ? fexpr__20746.cljs$core$IFn$_invoke$arity$1(e) : fexpr__20746.call(null,e));
})();
} else {
throw e20745;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);

