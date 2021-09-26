// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.cofx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.cofx.kind = cljs.core.cst$kw$cofx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.cofx.kind) : re_frame.registrar.kinds.call(null,re_frame.cofx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.cofx.reg_cofx = (function re_frame$cofx$reg_cofx(id,handler){
return re_frame.registrar.register_handler(re_frame.cofx.kind,id,handler);
});
re_frame.cofx.inject_cofx = (function re_frame$cofx$inject_cofx(var_args){
var G__21813 = arguments.length;
switch (G__21813) {
case 1:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$coeffects,cljs.core.cst$kw$before,(function re_frame$cofx$coeffects_before(context){
var temp__5751__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id);
if(cljs.core.truth_(temp__5751__auto__)){
var handler = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$coeffects,handler);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for",id], 0));
}
})], 0));
}));

(re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$coeffects,cljs.core.cst$kw$before,(function re_frame$cofx$coeffects_before(context){
var temp__5751__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id);
if(cljs.core.truth_(temp__5751__auto__)){
var handler = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$coeffects,handler,value);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for",id], 0));
}
})], 0));
}));

(re_frame.cofx.inject_cofx.cljs$lang$maxFixedArity = 2);

re_frame.cofx.reg_cofx(cljs.core.cst$kw$db,(function re_frame$cofx$db_coeffects_handler(coeffects){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.cst$kw$db,cljs.core.deref(re_frame.db.app_db));
}));
re_frame.cofx.inject_db = re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$db);
