// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('goog.object');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!((window.document == null)))));
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_non_reactive_STAR_ = false;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.memoize_1 = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.capitalize = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))),cljs.core.subs.call(null,s,(1))].join('');
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__32784 = clojure.string.split.call(null,name_str,/-/);
var seq__32785 = cljs.core.seq.call(null,vec__32784);
var first__32786 = cljs.core.first.call(null,seq__32785);
var seq__32785__$1 = cljs.core.next.call(null,seq__32785);
var start = first__32786;
var parts = seq__32785__$1;
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.capitalize,parts));
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_method_name = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$dash_to_method_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var name_str__$1 = clojure.string.replace.call(null,name_str,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");
var vec__32787 = clojure.string.split.call(null,name_str__$1,/-/);
var seq__32788 = cljs.core.seq.call(null,vec__32787);
var first__32789 = cljs.core.first.call(null,seq__32788);
var seq__32788__$1 = cljs.core.next.call(null,seq__32788);
var start = first__32789;
var parts = seq__32788__$1;
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.capitalize,parts));
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$fun_name(f){
var n = (function (){var or__4212__auto__ = (function (){var and__4210__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__4210__auto__){
var or__4212__auto__ = f.displayName;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var n = f.name;
if(((typeof n === 'string') && (cljs.core.seq.call(null,n)))){
return n;
} else {
return null;
}
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var and__4210__auto__ = (((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__4210__auto__){
return cljs.core.name.call(null,f);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(n)){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.call = (function() {
var G__32792 = null;
var G__32792__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null);
});
var G__32792__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a);
});
var G__32792__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b);
});
var G__32792__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c);
});
var G__32792__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d);
});
var G__32792__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e);
});
var G__32792__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});
var G__32792__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});
var G__32792__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});
var G__32792__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});
var G__32792__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});
var G__32792__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});
var G__32792__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});
var G__32792__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});
var G__32792__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});
var G__32792__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});
var G__32792__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});
var G__32792__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});
var G__32792__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__32792__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__32792__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__32792__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__32792 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__32792__1.call(this,self__);
case 2:
return G__32792__2.call(this,self__,a);
case 3:
return G__32792__3.call(this,self__,a,b);
case 4:
return G__32792__4.call(this,self__,a,b,c);
case 5:
return G__32792__5.call(this,self__,a,b,c,d);
case 6:
return G__32792__6.call(this,self__,a,b,c,d,e);
case 7:
return G__32792__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__32792__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__32792__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__32792__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__32792__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__32792__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__32792__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__32792__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__32792__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__32792__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__32792__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__32792__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__32792__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__32792__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__32792__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__32792__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32792.cljs$core$IFn$_invoke$arity$1 = G__32792__1;
G__32792.cljs$core$IFn$_invoke$arity$2 = G__32792__2;
G__32792.cljs$core$IFn$_invoke$arity$3 = G__32792__3;
G__32792.cljs$core$IFn$_invoke$arity$4 = G__32792__4;
G__32792.cljs$core$IFn$_invoke$arity$5 = G__32792__5;
G__32792.cljs$core$IFn$_invoke$arity$6 = G__32792__6;
G__32792.cljs$core$IFn$_invoke$arity$7 = G__32792__7;
G__32792.cljs$core$IFn$_invoke$arity$8 = G__32792__8;
G__32792.cljs$core$IFn$_invoke$arity$9 = G__32792__9;
G__32792.cljs$core$IFn$_invoke$arity$10 = G__32792__10;
G__32792.cljs$core$IFn$_invoke$arity$11 = G__32792__11;
G__32792.cljs$core$IFn$_invoke$arity$12 = G__32792__12;
G__32792.cljs$core$IFn$_invoke$arity$13 = G__32792__13;
G__32792.cljs$core$IFn$_invoke$arity$14 = G__32792__14;
G__32792.cljs$core$IFn$_invoke$arity$15 = G__32792__15;
G__32792.cljs$core$IFn$_invoke$arity$16 = G__32792__16;
G__32792.cljs$core$IFn$_invoke$arity$17 = G__32792__17;
G__32792.cljs$core$IFn$_invoke$arity$18 = G__32792__18;
G__32792.cljs$core$IFn$_invoke$arity$19 = G__32792__19;
G__32792.cljs$core$IFn$_invoke$arity$20 = G__32792__20;
G__32792.cljs$core$IFn$_invoke$arity$21 = G__32792__21;
G__32792.cljs$core$IFn$_invoke$arity$22 = G__32792__22;
return G__32792;
})()
);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.apply = (function (self__,args32791){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32791)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.pfn.call(null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn)) && (((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)))));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.util/PartialFn");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.util/PartialFn");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.util/PartialFn.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.__GT_PartialFn = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn(pfn,f,args));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$make_partial_fn(f,args){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.__GT_PartialFn.call(null,cljs.core.apply.call(null,cljs.core.partial,f,args),f,args);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$class_names(var_args){
var G__32797 = arguments.length;
switch (G__32797) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___32799 = arguments.length;
var i__4819__auto___32800 = (0);
while(true){
if((i__4819__auto___32800 < len__4818__auto___32799)){
args_arr__4839__auto__.push((arguments[i__4819__auto___32800]));

var G__32801 = (i__4819__auto___32800 + (1));
i__4819__auto___32800 = G__32801;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
if(cljs.core.coll_QMARK_.call(null,class$)){
var classes = cljs.core.keep.call(null,(function (c){
if(cljs.core.truth_(c)){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_.call(null,c)){
return cljs.core.name.call(null,c);
} else {
return c;
}
} else {
return null;
}
}),class$);
if(cljs.core.seq.call(null,classes)){
return clojure.string.join.call(null," ",classes);
} else {
return null;
}
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_.call(null,class$)){
return cljs.core.name.call(null,class$);
} else {
return class$;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_(a)){
if(cljs.core.truth_(b)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,b))].join('');
} else {
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,a);
}
} else {
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,b);
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,a,b),rst);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$lang$applyTo = (function (seq32794){
var G__32795 = cljs.core.first.call(null,seq32794);
var seq32794__$1 = cljs.core.next.call(null,seq32794);
var G__32796 = cljs.core.first.call(null,seq32794__$1);
var seq32794__$2 = cljs.core.next.call(null,seq32794__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32795,G__32796,seq32794__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$lang$maxFixedArity = (2));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$merge_class(p1,p2){
if(((cljs.core.contains_QMARK_.call(null,p1,new cljs.core.Keyword(null,"class","class",-2030961996))) || (cljs.core.contains_QMARK_.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996))))){
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2)));
} else {
return p2;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_style = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5753__auto__)){
var s1 = temp__5753__auto__;
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5753__auto____$1)){
var s2 = temp__5753__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$merge_props(var_args){
var G__32806 = arguments.length;
switch (G__32806) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___32808 = arguments.length;
var i__4819__auto___32809 = (0);
while(true){
if((i__4819__auto___32809 < len__4818__auto___32808)){
args_arr__4839__auto__.push((arguments[i__4819__auto___32809]));

var G__32810 = (i__4819__auto___32809 + (1));
i__4819__auto___32809 = G__32810;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (p){
var temp__5751__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,c));
} else {
return p;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,c));
} else {
return p2;
}
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.call(null,p1)].join(''),"\n","(map? p1)"].join('')));
}

return cljs.core.merge.call(null,p1,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_style.call(null,p1,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_class.call(null,p1,p2)));
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (p1,p2,ps){
return cljs.core.reduce.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.call(null,p1,p2),ps);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$lang$applyTo = (function (seq32803){
var G__32804 = cljs.core.first.call(null,seq32803);
var seq32803__$1 = cljs.core.next.call(null,seq32803);
var G__32805 = cljs.core.first.call(null,seq32803__$1);
var seq32803__$2 = cljs.core.next.call(null,seq32803__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32804,G__32805,seq32803__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$lang$maxFixedArity = (2));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = false;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__32811 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32812 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32812);

try{return comp.forceUpdate();
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32811);
}} else {
return comp.forceUpdate();
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.shallow_obj_to_map = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__32813 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),goog.object.get(o,k));
var G__32814 = (i + (1));
m = G__32813;
i = G__32814;
continue;
} else {
return m;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.try_get_react_key = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$try_get_react_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e32815){var e = e32815;
return null;
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$get_react_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.try_get_react_key.call(null,x);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$react_key_from_vec(v){
var or__4212__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key.call(null,cljs.core.nth.call(null,v,(1),null));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var G__32816 = cljs.core.nth.call(null,v,(0),null);
var G__32816__$1 = (((G__32816 instanceof cljs.core.Keyword))?G__32816.fqn:null);
switch (G__32816__$1) {
case ">":
case "f>":
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key.call(null,cljs.core.nth.call(null,v,(2),null));

break;
case "r>":
var G__32817 = cljs.core.nth.call(null,v,(2),null);
if((G__32817 == null)){
return null;
} else {
return G__32817.key;
}

break;
default:
return null;

}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.str_coll = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name.call(null,x);
var G__32820 = n;
if(cljs.core._EQ_.call(null,"",G__32820)){
return x;
} else {
if(cljs.core._EQ_.call(null,null,G__32820)){
return x;
} else {
return cljs.core.symbol.call(null,n);

}
}
} else {
return x;
}
}),coll));

});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$util$hiccup_err(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32824 = arguments.length;
var i__4819__auto___32825 = (0);
while(true){
if((i__4819__auto___32825 < len__4818__auto___32824)){
args__4824__auto__.push((arguments[i__4819__auto___32825]));

var G__32826 = (i__4819__auto___32825 + (1));
i__4819__auto___32825 = G__32826;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,comp_name,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.str_coll.call(null,v),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp_name)].join('');
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$lang$applyTo = (function (seq32821){
var G__32822 = cljs.core.first.call(null,seq32821);
var seq32821__$1 = cljs.core.next.call(null,seq32821);
var G__32823 = cljs.core.first.call(null,seq32821__$1);
var seq32821__$2 = cljs.core.next.call(null,seq32821__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32822,G__32823,seq32821__$2);
}));


//# sourceMappingURL=util.js.map
