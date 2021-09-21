// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('re_frame.cofx');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.cofx.kind = new cljs.core.Keyword(null,"cofx","cofx",2013202907);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.cofx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.cofx.reg_cofx = (function re_frame$cofx$reg_cofx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.cofx.kind,id,handler);
});
re_frame.cofx.inject_cofx = (function re_frame$cofx$inject_cofx(var_args){
var G__16658 = arguments.length;
switch (G__16658) {
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
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$cofx$coeffects_before(context){
var temp__5751__auto__ = re_frame.registrar.get_handler.call(null,re_frame.cofx.kind,id);
if(cljs.core.truth_(temp__5751__auto__)){
var handler = temp__5751__auto__;
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"No cofx handler registered for",id);
}
}));
}));

(re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$cofx$coeffects_before(context){
var temp__5751__auto__ = re_frame.registrar.get_handler.call(null,re_frame.cofx.kind,id);
if(cljs.core.truth_(temp__5751__auto__)){
var handler = temp__5751__auto__;
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler,value);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"No cofx handler registered for",id);
}
}));
}));

(re_frame.cofx.inject_cofx.cljs$lang$maxFixedArity = 2);

re_frame.cofx.reg_cofx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function re_frame$cofx$db_coeffects_handler(coeffects){
return cljs.core.assoc.call(null,coeffects,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref.call(null,re_frame.db.app_db));
}));
re_frame.cofx.inject_db = re_frame.cofx.inject_cofx.call(null,new cljs.core.Keyword(null,"db","db",993250759));

//# sourceMappingURL=cofx.js.map
