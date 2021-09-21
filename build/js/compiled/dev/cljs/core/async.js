// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23075 = arguments.length;
switch (G__23075) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23076 = (function (f,blockable,meta23077){
this.f = f;
this.blockable = blockable;
this.meta23077 = meta23077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23078,meta23077__$1){
var self__ = this;
var _23078__$1 = this;
return (new cljs.core.async.t_cljs$core$async23076(self__.f,self__.blockable,meta23077__$1));
}));

(cljs.core.async.t_cljs$core$async23076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23078){
var self__ = this;
var _23078__$1 = this;
return self__.meta23077;
}));

(cljs.core.async.t_cljs$core$async23076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23077","meta23077",-1836272625,null)], null);
}));

(cljs.core.async.t_cljs$core$async23076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23076");

(cljs.core.async.t_cljs$core$async23076.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async23076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23076.
 */
cljs.core.async.__GT_t_cljs$core$async23076 = (function cljs$core$async$__GT_t_cljs$core$async23076(f__$1,blockable__$1,meta23077){
return (new cljs.core.async.t_cljs$core$async23076(f__$1,blockable__$1,meta23077));
});

}

return (new cljs.core.async.t_cljs$core$async23076(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23082 = arguments.length;
switch (G__23082) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23085 = arguments.length;
switch (G__23085) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23088 = arguments.length;
switch (G__23088) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23090 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23090);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23090);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23092 = arguments.length;
switch (G__23092) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___23094 = n;
var x_23095 = (0);
while(true){
if((x_23095 < n__4695__auto___23094)){
(a[x_23095] = (0));

var G__23096 = (x_23095 + (1));
x_23095 = G__23096;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23097 = (i + (1));
i = G__23097;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23098 = (function (flag,meta23099){
this.flag = flag;
this.meta23099 = meta23099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23100,meta23099__$1){
var self__ = this;
var _23100__$1 = this;
return (new cljs.core.async.t_cljs$core$async23098(self__.flag,meta23099__$1));
}));

(cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23100){
var self__ = this;
var _23100__$1 = this;
return self__.meta23099;
}));

(cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23099","meta23099",-204928915,null)], null);
}));

(cljs.core.async.t_cljs$core$async23098.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23098");

(cljs.core.async.t_cljs$core$async23098.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async23098");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23098.
 */
cljs.core.async.__GT_t_cljs$core$async23098 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23098(flag__$1,meta23099){
return (new cljs.core.async.t_cljs$core$async23098(flag__$1,meta23099));
});

}

return (new cljs.core.async.t_cljs$core$async23098(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23101 = (function (flag,cb,meta23102){
this.flag = flag;
this.cb = cb;
this.meta23102 = meta23102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23103,meta23102__$1){
var self__ = this;
var _23103__$1 = this;
return (new cljs.core.async.t_cljs$core$async23101(self__.flag,self__.cb,meta23102__$1));
}));

(cljs.core.async.t_cljs$core$async23101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23103){
var self__ = this;
var _23103__$1 = this;
return self__.meta23102;
}));

(cljs.core.async.t_cljs$core$async23101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23102","meta23102",843051487,null)], null);
}));

(cljs.core.async.t_cljs$core$async23101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23101");

(cljs.core.async.t_cljs$core$async23101.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async23101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23101.
 */
cljs.core.async.__GT_t_cljs$core$async23101 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23101(flag__$1,cb__$1,meta23102){
return (new cljs.core.async.t_cljs$core$async23101(flag__$1,cb__$1,meta23102));
});

}

return (new cljs.core.async.t_cljs$core$async23101(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23104_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23104_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23105_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23105_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23106 = (i + (1));
i = G__23106;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___23111 = arguments.length;
var i__4819__auto___23112 = (0);
while(true){
if((i__4819__auto___23112 < len__4818__auto___23111)){
args__4824__auto__.push((arguments[i__4819__auto___23112]));

var G__23113 = (i__4819__auto___23112 + (1));
i__4819__auto___23112 = G__23113;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23109){
var map__23110 = p__23109;
var map__23110__$1 = cljs.core.__destructure_map.call(null,map__23110);
var opts = map__23110__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23107){
var G__23108 = cljs.core.first.call(null,seq23107);
var seq23107__$1 = cljs.core.next.call(null,seq23107);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23108,seq23107__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23115 = arguments.length;
switch (G__23115) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23015__auto___23161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23139){
var state_val_23140 = (state_23139[(1)]);
if((state_val_23140 === (7))){
var inst_23135 = (state_23139[(2)]);
var state_23139__$1 = state_23139;
var statearr_23141_23162 = state_23139__$1;
(statearr_23141_23162[(2)] = inst_23135);

(statearr_23141_23162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (1))){
var state_23139__$1 = state_23139;
var statearr_23142_23163 = state_23139__$1;
(statearr_23142_23163[(2)] = null);

(statearr_23142_23163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (4))){
var inst_23118 = (state_23139[(7)]);
var inst_23118__$1 = (state_23139[(2)]);
var inst_23119 = (inst_23118__$1 == null);
var state_23139__$1 = (function (){var statearr_23143 = state_23139;
(statearr_23143[(7)] = inst_23118__$1);

return statearr_23143;
})();
if(cljs.core.truth_(inst_23119)){
var statearr_23144_23164 = state_23139__$1;
(statearr_23144_23164[(1)] = (5));

} else {
var statearr_23145_23165 = state_23139__$1;
(statearr_23145_23165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (13))){
var state_23139__$1 = state_23139;
var statearr_23146_23166 = state_23139__$1;
(statearr_23146_23166[(2)] = null);

(statearr_23146_23166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (6))){
var inst_23118 = (state_23139[(7)]);
var state_23139__$1 = state_23139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23139__$1,(11),to,inst_23118);
} else {
if((state_val_23140 === (3))){
var inst_23137 = (state_23139[(2)]);
var state_23139__$1 = state_23139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23139__$1,inst_23137);
} else {
if((state_val_23140 === (12))){
var state_23139__$1 = state_23139;
var statearr_23147_23167 = state_23139__$1;
(statearr_23147_23167[(2)] = null);

(statearr_23147_23167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (2))){
var state_23139__$1 = state_23139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23139__$1,(4),from);
} else {
if((state_val_23140 === (11))){
var inst_23128 = (state_23139[(2)]);
var state_23139__$1 = state_23139;
if(cljs.core.truth_(inst_23128)){
var statearr_23148_23168 = state_23139__$1;
(statearr_23148_23168[(1)] = (12));

} else {
var statearr_23149_23169 = state_23139__$1;
(statearr_23149_23169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (9))){
var state_23139__$1 = state_23139;
var statearr_23150_23170 = state_23139__$1;
(statearr_23150_23170[(2)] = null);

(statearr_23150_23170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (5))){
var state_23139__$1 = state_23139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23151_23171 = state_23139__$1;
(statearr_23151_23171[(1)] = (8));

} else {
var statearr_23152_23172 = state_23139__$1;
(statearr_23152_23172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (14))){
var inst_23133 = (state_23139[(2)]);
var state_23139__$1 = state_23139;
var statearr_23153_23173 = state_23139__$1;
(statearr_23153_23173[(2)] = inst_23133);

(statearr_23153_23173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (10))){
var inst_23125 = (state_23139[(2)]);
var state_23139__$1 = state_23139;
var statearr_23154_23174 = state_23139__$1;
(statearr_23154_23174[(2)] = inst_23125);

(statearr_23154_23174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (8))){
var inst_23122 = cljs.core.async.close_BANG_.call(null,to);
var state_23139__$1 = state_23139;
var statearr_23155_23175 = state_23139__$1;
(statearr_23155_23175[(2)] = inst_23122);

(statearr_23155_23175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_23156 = [null,null,null,null,null,null,null,null];
(statearr_23156[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_23156[(1)] = (1));

return statearr_23156;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_23139){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23157){if((e23157 instanceof Object)){
var ex__22922__auto__ = e23157;
var statearr_23158_23176 = state_23139;
(statearr_23158_23176[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23177 = state_23139;
state_23139 = G__23177;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_23139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_23139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23159 = f__23016__auto__.call(null);
(statearr_23159[(6)] = c__23015__auto___23161);

return statearr_23159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__23178){
var vec__23179 = p__23178;
var v = cljs.core.nth.call(null,vec__23179,(0),null);
var p = cljs.core.nth.call(null,vec__23179,(1),null);
var job = vec__23179;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23015__auto___23350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23186){
var state_val_23187 = (state_23186[(1)]);
if((state_val_23187 === (1))){
var state_23186__$1 = state_23186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23186__$1,(2),res,v);
} else {
if((state_val_23187 === (2))){
var inst_23183 = (state_23186[(2)]);
var inst_23184 = cljs.core.async.close_BANG_.call(null,res);
var state_23186__$1 = (function (){var statearr_23188 = state_23186;
(statearr_23188[(7)] = inst_23183);

return statearr_23188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23186__$1,inst_23184);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0 = (function (){
var statearr_23189 = [null,null,null,null,null,null,null,null];
(statearr_23189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__);

(statearr_23189[(1)] = (1));

return statearr_23189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1 = (function (state_23186){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object)){
var ex__22922__auto__ = e23190;
var statearr_23191_23351 = state_23186;
(statearr_23191_23351[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23352 = state_23186;
state_23186 = G__23352;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = function(state_23186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1.call(this,state_23186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23192 = f__23016__auto__.call(null);
(statearr_23192[(6)] = c__23015__auto___23350);

return statearr_23192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23193){
var vec__23194 = p__23193;
var v = cljs.core.nth.call(null,vec__23194,(0),null);
var p = cljs.core.nth.call(null,vec__23194,(1),null);
var job = vec__23194;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4695__auto___23353 = n;
var __23354 = (0);
while(true){
if((__23354 < n__4695__auto___23353)){
var G__23197_23355 = type;
var G__23197_23356__$1 = (((G__23197_23355 instanceof cljs.core.Keyword))?G__23197_23355.fqn:null);
switch (G__23197_23356__$1) {
case "compute":
var c__23015__auto___23358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23354,c__23015__auto___23358,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async){
return (function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = ((function (__23354,c__23015__auto___23358,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async){
return (function (state_23210){
var state_val_23211 = (state_23210[(1)]);
if((state_val_23211 === (1))){
var state_23210__$1 = state_23210;
var statearr_23212_23359 = state_23210__$1;
(statearr_23212_23359[(2)] = null);

(statearr_23212_23359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (2))){
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23210__$1,(4),jobs);
} else {
if((state_val_23211 === (3))){
var inst_23208 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23210__$1,inst_23208);
} else {
if((state_val_23211 === (4))){
var inst_23200 = (state_23210[(2)]);
var inst_23201 = process.call(null,inst_23200);
var state_23210__$1 = state_23210;
if(cljs.core.truth_(inst_23201)){
var statearr_23213_23360 = state_23210__$1;
(statearr_23213_23360[(1)] = (5));

} else {
var statearr_23214_23361 = state_23210__$1;
(statearr_23214_23361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (5))){
var state_23210__$1 = state_23210;
var statearr_23215_23362 = state_23210__$1;
(statearr_23215_23362[(2)] = null);

(statearr_23215_23362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (6))){
var state_23210__$1 = state_23210;
var statearr_23216_23363 = state_23210__$1;
(statearr_23216_23363[(2)] = null);

(statearr_23216_23363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (7))){
var inst_23206 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
var statearr_23217_23364 = state_23210__$1;
(statearr_23217_23364[(2)] = inst_23206);

(statearr_23217_23364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23354,c__23015__auto___23358,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async))
;
return ((function (__23354,switch__22918__auto__,c__23015__auto___23358,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0 = (function (){
var statearr_23218 = [null,null,null,null,null,null,null];
(statearr_23218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__);

(statearr_23218[(1)] = (1));

return statearr_23218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1 = (function (state_23210){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23219){if((e23219 instanceof Object)){
var ex__22922__auto__ = e23219;
var statearr_23220_23365 = state_23210;
(statearr_23220_23365[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23366 = state_23210;
state_23210 = G__23366;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = function(state_23210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1.call(this,state_23210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__;
})()
;})(__23354,switch__22918__auto__,c__23015__auto___23358,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async))
})();
var state__23017__auto__ = (function (){var statearr_23221 = f__23016__auto__.call(null);
(statearr_23221[(6)] = c__23015__auto___23358);

return statearr_23221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
});})(__23354,c__23015__auto___23358,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async))
);


break;
case "async":
var c__23015__auto___23367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23354,c__23015__auto___23367,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async){
return (function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = ((function (__23354,c__23015__auto___23367,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async){
return (function (state_23234){
var state_val_23235 = (state_23234[(1)]);
if((state_val_23235 === (1))){
var state_23234__$1 = state_23234;
var statearr_23236_23368 = state_23234__$1;
(statearr_23236_23368[(2)] = null);

(statearr_23236_23368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (2))){
var state_23234__$1 = state_23234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23234__$1,(4),jobs);
} else {
if((state_val_23235 === (3))){
var inst_23232 = (state_23234[(2)]);
var state_23234__$1 = state_23234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23234__$1,inst_23232);
} else {
if((state_val_23235 === (4))){
var inst_23224 = (state_23234[(2)]);
var inst_23225 = async.call(null,inst_23224);
var state_23234__$1 = state_23234;
if(cljs.core.truth_(inst_23225)){
var statearr_23237_23369 = state_23234__$1;
(statearr_23237_23369[(1)] = (5));

} else {
var statearr_23238_23370 = state_23234__$1;
(statearr_23238_23370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (5))){
var state_23234__$1 = state_23234;
var statearr_23239_23371 = state_23234__$1;
(statearr_23239_23371[(2)] = null);

(statearr_23239_23371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (6))){
var state_23234__$1 = state_23234;
var statearr_23240_23372 = state_23234__$1;
(statearr_23240_23372[(2)] = null);

(statearr_23240_23372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23235 === (7))){
var inst_23230 = (state_23234[(2)]);
var state_23234__$1 = state_23234;
var statearr_23241_23373 = state_23234__$1;
(statearr_23241_23373[(2)] = inst_23230);

(statearr_23241_23373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23354,c__23015__auto___23367,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async))
;
return ((function (__23354,switch__22918__auto__,c__23015__auto___23367,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0 = (function (){
var statearr_23242 = [null,null,null,null,null,null,null];
(statearr_23242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__);

(statearr_23242[(1)] = (1));

return statearr_23242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1 = (function (state_23234){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23243){if((e23243 instanceof Object)){
var ex__22922__auto__ = e23243;
var statearr_23244_23374 = state_23234;
(statearr_23244_23374[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23375 = state_23234;
state_23234 = G__23375;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = function(state_23234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1.call(this,state_23234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__;
})()
;})(__23354,switch__22918__auto__,c__23015__auto___23367,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async))
})();
var state__23017__auto__ = (function (){var statearr_23245 = f__23016__auto__.call(null);
(statearr_23245[(6)] = c__23015__auto___23367);

return statearr_23245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
});})(__23354,c__23015__auto___23367,G__23197_23355,G__23197_23356__$1,n__4695__auto___23353,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23197_23356__$1)].join('')));

}

var G__23376 = (__23354 + (1));
__23354 = G__23376;
continue;
} else {
}
break;
}

var c__23015__auto___23377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23267){
var state_val_23268 = (state_23267[(1)]);
if((state_val_23268 === (7))){
var inst_23263 = (state_23267[(2)]);
var state_23267__$1 = state_23267;
var statearr_23269_23378 = state_23267__$1;
(statearr_23269_23378[(2)] = inst_23263);

(statearr_23269_23378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (1))){
var state_23267__$1 = state_23267;
var statearr_23270_23379 = state_23267__$1;
(statearr_23270_23379[(2)] = null);

(statearr_23270_23379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (4))){
var inst_23248 = (state_23267[(7)]);
var inst_23248__$1 = (state_23267[(2)]);
var inst_23249 = (inst_23248__$1 == null);
var state_23267__$1 = (function (){var statearr_23271 = state_23267;
(statearr_23271[(7)] = inst_23248__$1);

return statearr_23271;
})();
if(cljs.core.truth_(inst_23249)){
var statearr_23272_23380 = state_23267__$1;
(statearr_23272_23380[(1)] = (5));

} else {
var statearr_23273_23381 = state_23267__$1;
(statearr_23273_23381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (6))){
var inst_23248 = (state_23267[(7)]);
var inst_23253 = (state_23267[(8)]);
var inst_23253__$1 = cljs.core.async.chan.call(null,(1));
var inst_23254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23255 = [inst_23248,inst_23253__$1];
var inst_23256 = (new cljs.core.PersistentVector(null,2,(5),inst_23254,inst_23255,null));
var state_23267__$1 = (function (){var statearr_23274 = state_23267;
(statearr_23274[(8)] = inst_23253__$1);

return statearr_23274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23267__$1,(8),jobs,inst_23256);
} else {
if((state_val_23268 === (3))){
var inst_23265 = (state_23267[(2)]);
var state_23267__$1 = state_23267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23267__$1,inst_23265);
} else {
if((state_val_23268 === (2))){
var state_23267__$1 = state_23267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23267__$1,(4),from);
} else {
if((state_val_23268 === (9))){
var inst_23260 = (state_23267[(2)]);
var state_23267__$1 = (function (){var statearr_23275 = state_23267;
(statearr_23275[(9)] = inst_23260);

return statearr_23275;
})();
var statearr_23276_23382 = state_23267__$1;
(statearr_23276_23382[(2)] = null);

(statearr_23276_23382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (5))){
var inst_23251 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23267__$1 = state_23267;
var statearr_23277_23383 = state_23267__$1;
(statearr_23277_23383[(2)] = inst_23251);

(statearr_23277_23383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (8))){
var inst_23253 = (state_23267[(8)]);
var inst_23258 = (state_23267[(2)]);
var state_23267__$1 = (function (){var statearr_23278 = state_23267;
(statearr_23278[(10)] = inst_23258);

return statearr_23278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23267__$1,(9),results,inst_23253);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0 = (function (){
var statearr_23279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__);

(statearr_23279[(1)] = (1));

return statearr_23279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1 = (function (state_23267){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23280){if((e23280 instanceof Object)){
var ex__22922__auto__ = e23280;
var statearr_23281_23384 = state_23267;
(statearr_23281_23384[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23385 = state_23267;
state_23267 = G__23385;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = function(state_23267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1.call(this,state_23267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23282 = f__23016__auto__.call(null);
(statearr_23282[(6)] = c__23015__auto___23377);

return statearr_23282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


var c__23015__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23320){
var state_val_23321 = (state_23320[(1)]);
if((state_val_23321 === (7))){
var inst_23316 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23322_23386 = state_23320__$1;
(statearr_23322_23386[(2)] = inst_23316);

(statearr_23322_23386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (20))){
var state_23320__$1 = state_23320;
var statearr_23323_23387 = state_23320__$1;
(statearr_23323_23387[(2)] = null);

(statearr_23323_23387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (1))){
var state_23320__$1 = state_23320;
var statearr_23324_23388 = state_23320__$1;
(statearr_23324_23388[(2)] = null);

(statearr_23324_23388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (4))){
var inst_23285 = (state_23320[(7)]);
var inst_23285__$1 = (state_23320[(2)]);
var inst_23286 = (inst_23285__$1 == null);
var state_23320__$1 = (function (){var statearr_23325 = state_23320;
(statearr_23325[(7)] = inst_23285__$1);

return statearr_23325;
})();
if(cljs.core.truth_(inst_23286)){
var statearr_23326_23389 = state_23320__$1;
(statearr_23326_23389[(1)] = (5));

} else {
var statearr_23327_23390 = state_23320__$1;
(statearr_23327_23390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (15))){
var inst_23298 = (state_23320[(8)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23320__$1,(18),to,inst_23298);
} else {
if((state_val_23321 === (21))){
var inst_23311 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23328_23391 = state_23320__$1;
(statearr_23328_23391[(2)] = inst_23311);

(statearr_23328_23391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (13))){
var inst_23313 = (state_23320[(2)]);
var state_23320__$1 = (function (){var statearr_23329 = state_23320;
(statearr_23329[(9)] = inst_23313);

return statearr_23329;
})();
var statearr_23330_23392 = state_23320__$1;
(statearr_23330_23392[(2)] = null);

(statearr_23330_23392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (6))){
var inst_23285 = (state_23320[(7)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23320__$1,(11),inst_23285);
} else {
if((state_val_23321 === (17))){
var inst_23306 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23306)){
var statearr_23331_23393 = state_23320__$1;
(statearr_23331_23393[(1)] = (19));

} else {
var statearr_23332_23394 = state_23320__$1;
(statearr_23332_23394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (3))){
var inst_23318 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23320__$1,inst_23318);
} else {
if((state_val_23321 === (12))){
var inst_23295 = (state_23320[(10)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23320__$1,(14),inst_23295);
} else {
if((state_val_23321 === (2))){
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23320__$1,(4),results);
} else {
if((state_val_23321 === (19))){
var state_23320__$1 = state_23320;
var statearr_23333_23395 = state_23320__$1;
(statearr_23333_23395[(2)] = null);

(statearr_23333_23395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (11))){
var inst_23295 = (state_23320[(2)]);
var state_23320__$1 = (function (){var statearr_23334 = state_23320;
(statearr_23334[(10)] = inst_23295);

return statearr_23334;
})();
var statearr_23335_23396 = state_23320__$1;
(statearr_23335_23396[(2)] = null);

(statearr_23335_23396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (9))){
var state_23320__$1 = state_23320;
var statearr_23336_23397 = state_23320__$1;
(statearr_23336_23397[(2)] = null);

(statearr_23336_23397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (5))){
var state_23320__$1 = state_23320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23337_23398 = state_23320__$1;
(statearr_23337_23398[(1)] = (8));

} else {
var statearr_23338_23399 = state_23320__$1;
(statearr_23338_23399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (14))){
var inst_23298 = (state_23320[(8)]);
var inst_23300 = (state_23320[(11)]);
var inst_23298__$1 = (state_23320[(2)]);
var inst_23299 = (inst_23298__$1 == null);
var inst_23300__$1 = cljs.core.not.call(null,inst_23299);
var state_23320__$1 = (function (){var statearr_23339 = state_23320;
(statearr_23339[(8)] = inst_23298__$1);

(statearr_23339[(11)] = inst_23300__$1);

return statearr_23339;
})();
if(inst_23300__$1){
var statearr_23340_23400 = state_23320__$1;
(statearr_23340_23400[(1)] = (15));

} else {
var statearr_23341_23401 = state_23320__$1;
(statearr_23341_23401[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (16))){
var inst_23300 = (state_23320[(11)]);
var state_23320__$1 = state_23320;
var statearr_23342_23402 = state_23320__$1;
(statearr_23342_23402[(2)] = inst_23300);

(statearr_23342_23402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (10))){
var inst_23292 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23343_23403 = state_23320__$1;
(statearr_23343_23403[(2)] = inst_23292);

(statearr_23343_23403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (18))){
var inst_23303 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23344_23404 = state_23320__$1;
(statearr_23344_23404[(2)] = inst_23303);

(statearr_23344_23404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (8))){
var inst_23289 = cljs.core.async.close_BANG_.call(null,to);
var state_23320__$1 = state_23320;
var statearr_23345_23405 = state_23320__$1;
(statearr_23345_23405[(2)] = inst_23289);

(statearr_23345_23405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0 = (function (){
var statearr_23346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__);

(statearr_23346[(1)] = (1));

return statearr_23346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1 = (function (state_23320){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23347){if((e23347 instanceof Object)){
var ex__22922__auto__ = e23347;
var statearr_23348_23406 = state_23320;
(statearr_23348_23406[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23407 = state_23320;
state_23320 = G__23407;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__ = function(state_23320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1.call(this,state_23320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23349 = f__23016__auto__.call(null);
(statearr_23349[(6)] = c__23015__auto__);

return statearr_23349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));

return c__23015__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23409 = arguments.length;
switch (G__23409) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23412 = arguments.length;
switch (G__23412) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23415 = arguments.length;
switch (G__23415) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23015__auto___23464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23441){
var state_val_23442 = (state_23441[(1)]);
if((state_val_23442 === (7))){
var inst_23437 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
var statearr_23443_23465 = state_23441__$1;
(statearr_23443_23465[(2)] = inst_23437);

(statearr_23443_23465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (1))){
var state_23441__$1 = state_23441;
var statearr_23444_23466 = state_23441__$1;
(statearr_23444_23466[(2)] = null);

(statearr_23444_23466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (4))){
var inst_23418 = (state_23441[(7)]);
var inst_23418__$1 = (state_23441[(2)]);
var inst_23419 = (inst_23418__$1 == null);
var state_23441__$1 = (function (){var statearr_23445 = state_23441;
(statearr_23445[(7)] = inst_23418__$1);

return statearr_23445;
})();
if(cljs.core.truth_(inst_23419)){
var statearr_23446_23467 = state_23441__$1;
(statearr_23446_23467[(1)] = (5));

} else {
var statearr_23447_23468 = state_23441__$1;
(statearr_23447_23468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (13))){
var state_23441__$1 = state_23441;
var statearr_23448_23469 = state_23441__$1;
(statearr_23448_23469[(2)] = null);

(statearr_23448_23469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (6))){
var inst_23418 = (state_23441[(7)]);
var inst_23424 = p.call(null,inst_23418);
var state_23441__$1 = state_23441;
if(cljs.core.truth_(inst_23424)){
var statearr_23449_23470 = state_23441__$1;
(statearr_23449_23470[(1)] = (9));

} else {
var statearr_23450_23471 = state_23441__$1;
(statearr_23450_23471[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (3))){
var inst_23439 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23441__$1,inst_23439);
} else {
if((state_val_23442 === (12))){
var state_23441__$1 = state_23441;
var statearr_23451_23472 = state_23441__$1;
(statearr_23451_23472[(2)] = null);

(statearr_23451_23472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (2))){
var state_23441__$1 = state_23441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23441__$1,(4),ch);
} else {
if((state_val_23442 === (11))){
var inst_23418 = (state_23441[(7)]);
var inst_23428 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23441__$1,(8),inst_23428,inst_23418);
} else {
if((state_val_23442 === (9))){
var state_23441__$1 = state_23441;
var statearr_23452_23473 = state_23441__$1;
(statearr_23452_23473[(2)] = tc);

(statearr_23452_23473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (5))){
var inst_23421 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23422 = cljs.core.async.close_BANG_.call(null,fc);
var state_23441__$1 = (function (){var statearr_23453 = state_23441;
(statearr_23453[(8)] = inst_23421);

return statearr_23453;
})();
var statearr_23454_23474 = state_23441__$1;
(statearr_23454_23474[(2)] = inst_23422);

(statearr_23454_23474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (14))){
var inst_23435 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
var statearr_23455_23475 = state_23441__$1;
(statearr_23455_23475[(2)] = inst_23435);

(statearr_23455_23475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (10))){
var state_23441__$1 = state_23441;
var statearr_23456_23476 = state_23441__$1;
(statearr_23456_23476[(2)] = fc);

(statearr_23456_23476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (8))){
var inst_23430 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
if(cljs.core.truth_(inst_23430)){
var statearr_23457_23477 = state_23441__$1;
(statearr_23457_23477[(1)] = (12));

} else {
var statearr_23458_23478 = state_23441__$1;
(statearr_23458_23478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_23459 = [null,null,null,null,null,null,null,null,null];
(statearr_23459[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_23459[(1)] = (1));

return statearr_23459;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_23441){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23460){if((e23460 instanceof Object)){
var ex__22922__auto__ = e23460;
var statearr_23461_23479 = state_23441;
(statearr_23461_23479[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23480 = state_23441;
state_23441 = G__23480;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_23441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_23441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23462 = f__23016__auto__.call(null);
(statearr_23462[(6)] = c__23015__auto___23464);

return statearr_23462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23015__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23501){
var state_val_23502 = (state_23501[(1)]);
if((state_val_23502 === (7))){
var inst_23497 = (state_23501[(2)]);
var state_23501__$1 = state_23501;
var statearr_23503_23521 = state_23501__$1;
(statearr_23503_23521[(2)] = inst_23497);

(statearr_23503_23521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23502 === (1))){
var inst_23481 = init;
var state_23501__$1 = (function (){var statearr_23504 = state_23501;
(statearr_23504[(7)] = inst_23481);

return statearr_23504;
})();
var statearr_23505_23522 = state_23501__$1;
(statearr_23505_23522[(2)] = null);

(statearr_23505_23522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23502 === (4))){
var inst_23484 = (state_23501[(8)]);
var inst_23484__$1 = (state_23501[(2)]);
var inst_23485 = (inst_23484__$1 == null);
var state_23501__$1 = (function (){var statearr_23506 = state_23501;
(statearr_23506[(8)] = inst_23484__$1);

return statearr_23506;
})();
if(cljs.core.truth_(inst_23485)){
var statearr_23507_23523 = state_23501__$1;
(statearr_23507_23523[(1)] = (5));

} else {
var statearr_23508_23524 = state_23501__$1;
(statearr_23508_23524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23502 === (6))){
var inst_23488 = (state_23501[(9)]);
var inst_23481 = (state_23501[(7)]);
var inst_23484 = (state_23501[(8)]);
var inst_23488__$1 = f.call(null,inst_23481,inst_23484);
var inst_23489 = cljs.core.reduced_QMARK_.call(null,inst_23488__$1);
var state_23501__$1 = (function (){var statearr_23509 = state_23501;
(statearr_23509[(9)] = inst_23488__$1);

return statearr_23509;
})();
if(inst_23489){
var statearr_23510_23525 = state_23501__$1;
(statearr_23510_23525[(1)] = (8));

} else {
var statearr_23511_23526 = state_23501__$1;
(statearr_23511_23526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23502 === (3))){
var inst_23499 = (state_23501[(2)]);
var state_23501__$1 = state_23501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23501__$1,inst_23499);
} else {
if((state_val_23502 === (2))){
var state_23501__$1 = state_23501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23501__$1,(4),ch);
} else {
if((state_val_23502 === (9))){
var inst_23488 = (state_23501[(9)]);
var inst_23481 = inst_23488;
var state_23501__$1 = (function (){var statearr_23512 = state_23501;
(statearr_23512[(7)] = inst_23481);

return statearr_23512;
})();
var statearr_23513_23527 = state_23501__$1;
(statearr_23513_23527[(2)] = null);

(statearr_23513_23527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23502 === (5))){
var inst_23481 = (state_23501[(7)]);
var state_23501__$1 = state_23501;
var statearr_23514_23528 = state_23501__$1;
(statearr_23514_23528[(2)] = inst_23481);

(statearr_23514_23528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23502 === (10))){
var inst_23495 = (state_23501[(2)]);
var state_23501__$1 = state_23501;
var statearr_23515_23529 = state_23501__$1;
(statearr_23515_23529[(2)] = inst_23495);

(statearr_23515_23529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23502 === (8))){
var inst_23488 = (state_23501[(9)]);
var inst_23491 = cljs.core.deref.call(null,inst_23488);
var state_23501__$1 = state_23501;
var statearr_23516_23530 = state_23501__$1;
(statearr_23516_23530[(2)] = inst_23491);

(statearr_23516_23530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__22919__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22919__auto____0 = (function (){
var statearr_23517 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23517[(0)] = cljs$core$async$reduce_$_state_machine__22919__auto__);

(statearr_23517[(1)] = (1));

return statearr_23517;
});
var cljs$core$async$reduce_$_state_machine__22919__auto____1 = (function (state_23501){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23518){if((e23518 instanceof Object)){
var ex__22922__auto__ = e23518;
var statearr_23519_23531 = state_23501;
(statearr_23519_23531[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23532 = state_23501;
state_23501 = G__23532;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22919__auto__ = function(state_23501){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22919__auto____1.call(this,state_23501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22919__auto____0;
cljs$core$async$reduce_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22919__auto____1;
return cljs$core$async$reduce_$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23520 = f__23016__auto__.call(null);
(statearr_23520[(6)] = c__23015__auto__);

return statearr_23520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));

return c__23015__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23015__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23538){
var state_val_23539 = (state_23538[(1)]);
if((state_val_23539 === (1))){
var inst_23533 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23538__$1,(2),inst_23533);
} else {
if((state_val_23539 === (2))){
var inst_23535 = (state_23538[(2)]);
var inst_23536 = f__$1.call(null,inst_23535);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23538__$1,inst_23536);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__22919__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22919__auto____0 = (function (){
var statearr_23540 = [null,null,null,null,null,null,null];
(statearr_23540[(0)] = cljs$core$async$transduce_$_state_machine__22919__auto__);

(statearr_23540[(1)] = (1));

return statearr_23540;
});
var cljs$core$async$transduce_$_state_machine__22919__auto____1 = (function (state_23538){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23541){if((e23541 instanceof Object)){
var ex__22922__auto__ = e23541;
var statearr_23542_23544 = state_23538;
(statearr_23542_23544[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23545 = state_23538;
state_23538 = G__23545;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22919__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22919__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22919__auto____0;
cljs$core$async$transduce_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22919__auto____1;
return cljs$core$async$transduce_$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23543 = f__23016__auto__.call(null);
(statearr_23543[(6)] = c__23015__auto__);

return statearr_23543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));

return c__23015__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23547 = arguments.length;
switch (G__23547) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23015__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23572){
var state_val_23573 = (state_23572[(1)]);
if((state_val_23573 === (7))){
var inst_23554 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
var statearr_23574_23595 = state_23572__$1;
(statearr_23574_23595[(2)] = inst_23554);

(statearr_23574_23595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (1))){
var inst_23548 = cljs.core.seq.call(null,coll);
var inst_23549 = inst_23548;
var state_23572__$1 = (function (){var statearr_23575 = state_23572;
(statearr_23575[(7)] = inst_23549);

return statearr_23575;
})();
var statearr_23576_23596 = state_23572__$1;
(statearr_23576_23596[(2)] = null);

(statearr_23576_23596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (4))){
var inst_23549 = (state_23572[(7)]);
var inst_23552 = cljs.core.first.call(null,inst_23549);
var state_23572__$1 = state_23572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23572__$1,(7),ch,inst_23552);
} else {
if((state_val_23573 === (13))){
var inst_23566 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
var statearr_23577_23597 = state_23572__$1;
(statearr_23577_23597[(2)] = inst_23566);

(statearr_23577_23597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (6))){
var inst_23557 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
if(cljs.core.truth_(inst_23557)){
var statearr_23578_23598 = state_23572__$1;
(statearr_23578_23598[(1)] = (8));

} else {
var statearr_23579_23599 = state_23572__$1;
(statearr_23579_23599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (3))){
var inst_23570 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23572__$1,inst_23570);
} else {
if((state_val_23573 === (12))){
var state_23572__$1 = state_23572;
var statearr_23580_23600 = state_23572__$1;
(statearr_23580_23600[(2)] = null);

(statearr_23580_23600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (2))){
var inst_23549 = (state_23572[(7)]);
var state_23572__$1 = state_23572;
if(cljs.core.truth_(inst_23549)){
var statearr_23581_23601 = state_23572__$1;
(statearr_23581_23601[(1)] = (4));

} else {
var statearr_23582_23602 = state_23572__$1;
(statearr_23582_23602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (11))){
var inst_23563 = cljs.core.async.close_BANG_.call(null,ch);
var state_23572__$1 = state_23572;
var statearr_23583_23603 = state_23572__$1;
(statearr_23583_23603[(2)] = inst_23563);

(statearr_23583_23603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (9))){
var state_23572__$1 = state_23572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23584_23604 = state_23572__$1;
(statearr_23584_23604[(1)] = (11));

} else {
var statearr_23585_23605 = state_23572__$1;
(statearr_23585_23605[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (5))){
var inst_23549 = (state_23572[(7)]);
var state_23572__$1 = state_23572;
var statearr_23586_23606 = state_23572__$1;
(statearr_23586_23606[(2)] = inst_23549);

(statearr_23586_23606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (10))){
var inst_23568 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
var statearr_23587_23607 = state_23572__$1;
(statearr_23587_23607[(2)] = inst_23568);

(statearr_23587_23607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (8))){
var inst_23549 = (state_23572[(7)]);
var inst_23559 = cljs.core.next.call(null,inst_23549);
var inst_23549__$1 = inst_23559;
var state_23572__$1 = (function (){var statearr_23588 = state_23572;
(statearr_23588[(7)] = inst_23549__$1);

return statearr_23588;
})();
var statearr_23589_23608 = state_23572__$1;
(statearr_23589_23608[(2)] = null);

(statearr_23589_23608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_23590 = [null,null,null,null,null,null,null,null];
(statearr_23590[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_23590[(1)] = (1));

return statearr_23590;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_23572){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23591){if((e23591 instanceof Object)){
var ex__22922__auto__ = e23591;
var statearr_23592_23609 = state_23572;
(statearr_23592_23609[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23610 = state_23572;
state_23572 = G__23610;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_23572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_23572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23593 = f__23016__auto__.call(null);
(statearr_23593[(6)] = c__23015__auto__);

return statearr_23593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));

return c__23015__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23611 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,_);
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23611.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23612 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23612.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23613 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m,ch);
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23613.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23614 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m);
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23614.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23615 = (function (ch,cs,meta23616){
this.ch = ch;
this.cs = cs;
this.meta23616 = meta23616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23617,meta23616__$1){
var self__ = this;
var _23617__$1 = this;
return (new cljs.core.async.t_cljs$core$async23615(self__.ch,self__.cs,meta23616__$1));
}));

(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23617){
var self__ = this;
var _23617__$1 = this;
return self__.meta23616;
}));

(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23615.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23616","meta23616",1931414890,null)], null);
}));

(cljs.core.async.t_cljs$core$async23615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23615");

(cljs.core.async.t_cljs$core$async23615.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async23615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23615.
 */
cljs.core.async.__GT_t_cljs$core$async23615 = (function cljs$core$async$mult_$___GT_t_cljs$core$async23615(ch__$1,cs__$1,meta23616){
return (new cljs.core.async.t_cljs$core$async23615(ch__$1,cs__$1,meta23616));
});

}

return (new cljs.core.async.t_cljs$core$async23615(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__23015__auto___23837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23752){
var state_val_23753 = (state_23752[(1)]);
if((state_val_23753 === (7))){
var inst_23748 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23754_23838 = state_23752__$1;
(statearr_23754_23838[(2)] = inst_23748);

(statearr_23754_23838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (20))){
var inst_23651 = (state_23752[(7)]);
var inst_23663 = cljs.core.first.call(null,inst_23651);
var inst_23664 = cljs.core.nth.call(null,inst_23663,(0),null);
var inst_23665 = cljs.core.nth.call(null,inst_23663,(1),null);
var state_23752__$1 = (function (){var statearr_23755 = state_23752;
(statearr_23755[(8)] = inst_23664);

return statearr_23755;
})();
if(cljs.core.truth_(inst_23665)){
var statearr_23756_23839 = state_23752__$1;
(statearr_23756_23839[(1)] = (22));

} else {
var statearr_23757_23840 = state_23752__$1;
(statearr_23757_23840[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (27))){
var inst_23700 = (state_23752[(9)]);
var inst_23695 = (state_23752[(10)]);
var inst_23693 = (state_23752[(11)]);
var inst_23620 = (state_23752[(12)]);
var inst_23700__$1 = cljs.core._nth.call(null,inst_23693,inst_23695);
var inst_23701 = cljs.core.async.put_BANG_.call(null,inst_23700__$1,inst_23620,done);
var state_23752__$1 = (function (){var statearr_23758 = state_23752;
(statearr_23758[(9)] = inst_23700__$1);

return statearr_23758;
})();
if(cljs.core.truth_(inst_23701)){
var statearr_23759_23841 = state_23752__$1;
(statearr_23759_23841[(1)] = (30));

} else {
var statearr_23760_23842 = state_23752__$1;
(statearr_23760_23842[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (1))){
var state_23752__$1 = state_23752;
var statearr_23761_23843 = state_23752__$1;
(statearr_23761_23843[(2)] = null);

(statearr_23761_23843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (24))){
var inst_23651 = (state_23752[(7)]);
var inst_23670 = (state_23752[(2)]);
var inst_23671 = cljs.core.next.call(null,inst_23651);
var inst_23629 = inst_23671;
var inst_23630 = null;
var inst_23631 = (0);
var inst_23632 = (0);
var state_23752__$1 = (function (){var statearr_23762 = state_23752;
(statearr_23762[(13)] = inst_23630);

(statearr_23762[(14)] = inst_23670);

(statearr_23762[(15)] = inst_23631);

(statearr_23762[(16)] = inst_23629);

(statearr_23762[(17)] = inst_23632);

return statearr_23762;
})();
var statearr_23763_23844 = state_23752__$1;
(statearr_23763_23844[(2)] = null);

(statearr_23763_23844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (39))){
var state_23752__$1 = state_23752;
var statearr_23767_23845 = state_23752__$1;
(statearr_23767_23845[(2)] = null);

(statearr_23767_23845[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (4))){
var inst_23620 = (state_23752[(12)]);
var inst_23620__$1 = (state_23752[(2)]);
var inst_23621 = (inst_23620__$1 == null);
var state_23752__$1 = (function (){var statearr_23768 = state_23752;
(statearr_23768[(12)] = inst_23620__$1);

return statearr_23768;
})();
if(cljs.core.truth_(inst_23621)){
var statearr_23769_23846 = state_23752__$1;
(statearr_23769_23846[(1)] = (5));

} else {
var statearr_23770_23847 = state_23752__$1;
(statearr_23770_23847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (15))){
var inst_23630 = (state_23752[(13)]);
var inst_23631 = (state_23752[(15)]);
var inst_23629 = (state_23752[(16)]);
var inst_23632 = (state_23752[(17)]);
var inst_23647 = (state_23752[(2)]);
var inst_23648 = (inst_23632 + (1));
var tmp23764 = inst_23630;
var tmp23765 = inst_23631;
var tmp23766 = inst_23629;
var inst_23629__$1 = tmp23766;
var inst_23630__$1 = tmp23764;
var inst_23631__$1 = tmp23765;
var inst_23632__$1 = inst_23648;
var state_23752__$1 = (function (){var statearr_23771 = state_23752;
(statearr_23771[(18)] = inst_23647);

(statearr_23771[(13)] = inst_23630__$1);

(statearr_23771[(15)] = inst_23631__$1);

(statearr_23771[(16)] = inst_23629__$1);

(statearr_23771[(17)] = inst_23632__$1);

return statearr_23771;
})();
var statearr_23772_23848 = state_23752__$1;
(statearr_23772_23848[(2)] = null);

(statearr_23772_23848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (21))){
var inst_23674 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23776_23849 = state_23752__$1;
(statearr_23776_23849[(2)] = inst_23674);

(statearr_23776_23849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (31))){
var inst_23700 = (state_23752[(9)]);
var inst_23704 = done.call(null,null);
var inst_23705 = cljs.core.async.untap_STAR_.call(null,m,inst_23700);
var state_23752__$1 = (function (){var statearr_23777 = state_23752;
(statearr_23777[(19)] = inst_23704);

return statearr_23777;
})();
var statearr_23778_23850 = state_23752__$1;
(statearr_23778_23850[(2)] = inst_23705);

(statearr_23778_23850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (32))){
var inst_23695 = (state_23752[(10)]);
var inst_23693 = (state_23752[(11)]);
var inst_23694 = (state_23752[(20)]);
var inst_23692 = (state_23752[(21)]);
var inst_23707 = (state_23752[(2)]);
var inst_23708 = (inst_23695 + (1));
var tmp23773 = inst_23693;
var tmp23774 = inst_23694;
var tmp23775 = inst_23692;
var inst_23692__$1 = tmp23775;
var inst_23693__$1 = tmp23773;
var inst_23694__$1 = tmp23774;
var inst_23695__$1 = inst_23708;
var state_23752__$1 = (function (){var statearr_23779 = state_23752;
(statearr_23779[(10)] = inst_23695__$1);

(statearr_23779[(11)] = inst_23693__$1);

(statearr_23779[(20)] = inst_23694__$1);

(statearr_23779[(21)] = inst_23692__$1);

(statearr_23779[(22)] = inst_23707);

return statearr_23779;
})();
var statearr_23780_23851 = state_23752__$1;
(statearr_23780_23851[(2)] = null);

(statearr_23780_23851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (40))){
var inst_23720 = (state_23752[(23)]);
var inst_23724 = done.call(null,null);
var inst_23725 = cljs.core.async.untap_STAR_.call(null,m,inst_23720);
var state_23752__$1 = (function (){var statearr_23781 = state_23752;
(statearr_23781[(24)] = inst_23724);

return statearr_23781;
})();
var statearr_23782_23852 = state_23752__$1;
(statearr_23782_23852[(2)] = inst_23725);

(statearr_23782_23852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (33))){
var inst_23711 = (state_23752[(25)]);
var inst_23713 = cljs.core.chunked_seq_QMARK_.call(null,inst_23711);
var state_23752__$1 = state_23752;
if(inst_23713){
var statearr_23783_23853 = state_23752__$1;
(statearr_23783_23853[(1)] = (36));

} else {
var statearr_23784_23854 = state_23752__$1;
(statearr_23784_23854[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (13))){
var inst_23641 = (state_23752[(26)]);
var inst_23644 = cljs.core.async.close_BANG_.call(null,inst_23641);
var state_23752__$1 = state_23752;
var statearr_23785_23855 = state_23752__$1;
(statearr_23785_23855[(2)] = inst_23644);

(statearr_23785_23855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (22))){
var inst_23664 = (state_23752[(8)]);
var inst_23667 = cljs.core.async.close_BANG_.call(null,inst_23664);
var state_23752__$1 = state_23752;
var statearr_23786_23856 = state_23752__$1;
(statearr_23786_23856[(2)] = inst_23667);

(statearr_23786_23856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (36))){
var inst_23711 = (state_23752[(25)]);
var inst_23715 = cljs.core.chunk_first.call(null,inst_23711);
var inst_23716 = cljs.core.chunk_rest.call(null,inst_23711);
var inst_23717 = cljs.core.count.call(null,inst_23715);
var inst_23692 = inst_23716;
var inst_23693 = inst_23715;
var inst_23694 = inst_23717;
var inst_23695 = (0);
var state_23752__$1 = (function (){var statearr_23787 = state_23752;
(statearr_23787[(10)] = inst_23695);

(statearr_23787[(11)] = inst_23693);

(statearr_23787[(20)] = inst_23694);

(statearr_23787[(21)] = inst_23692);

return statearr_23787;
})();
var statearr_23788_23857 = state_23752__$1;
(statearr_23788_23857[(2)] = null);

(statearr_23788_23857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (41))){
var inst_23711 = (state_23752[(25)]);
var inst_23727 = (state_23752[(2)]);
var inst_23728 = cljs.core.next.call(null,inst_23711);
var inst_23692 = inst_23728;
var inst_23693 = null;
var inst_23694 = (0);
var inst_23695 = (0);
var state_23752__$1 = (function (){var statearr_23789 = state_23752;
(statearr_23789[(27)] = inst_23727);

(statearr_23789[(10)] = inst_23695);

(statearr_23789[(11)] = inst_23693);

(statearr_23789[(20)] = inst_23694);

(statearr_23789[(21)] = inst_23692);

return statearr_23789;
})();
var statearr_23790_23858 = state_23752__$1;
(statearr_23790_23858[(2)] = null);

(statearr_23790_23858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (43))){
var state_23752__$1 = state_23752;
var statearr_23791_23859 = state_23752__$1;
(statearr_23791_23859[(2)] = null);

(statearr_23791_23859[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (29))){
var inst_23736 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23792_23860 = state_23752__$1;
(statearr_23792_23860[(2)] = inst_23736);

(statearr_23792_23860[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (44))){
var inst_23745 = (state_23752[(2)]);
var state_23752__$1 = (function (){var statearr_23793 = state_23752;
(statearr_23793[(28)] = inst_23745);

return statearr_23793;
})();
var statearr_23794_23861 = state_23752__$1;
(statearr_23794_23861[(2)] = null);

(statearr_23794_23861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (6))){
var inst_23684 = (state_23752[(29)]);
var inst_23683 = cljs.core.deref.call(null,cs);
var inst_23684__$1 = cljs.core.keys.call(null,inst_23683);
var inst_23685 = cljs.core.count.call(null,inst_23684__$1);
var inst_23686 = cljs.core.reset_BANG_.call(null,dctr,inst_23685);
var inst_23691 = cljs.core.seq.call(null,inst_23684__$1);
var inst_23692 = inst_23691;
var inst_23693 = null;
var inst_23694 = (0);
var inst_23695 = (0);
var state_23752__$1 = (function (){var statearr_23795 = state_23752;
(statearr_23795[(10)] = inst_23695);

(statearr_23795[(29)] = inst_23684__$1);

(statearr_23795[(11)] = inst_23693);

(statearr_23795[(20)] = inst_23694);

(statearr_23795[(30)] = inst_23686);

(statearr_23795[(21)] = inst_23692);

return statearr_23795;
})();
var statearr_23796_23862 = state_23752__$1;
(statearr_23796_23862[(2)] = null);

(statearr_23796_23862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (28))){
var inst_23711 = (state_23752[(25)]);
var inst_23692 = (state_23752[(21)]);
var inst_23711__$1 = cljs.core.seq.call(null,inst_23692);
var state_23752__$1 = (function (){var statearr_23797 = state_23752;
(statearr_23797[(25)] = inst_23711__$1);

return statearr_23797;
})();
if(inst_23711__$1){
var statearr_23798_23863 = state_23752__$1;
(statearr_23798_23863[(1)] = (33));

} else {
var statearr_23799_23864 = state_23752__$1;
(statearr_23799_23864[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (25))){
var inst_23695 = (state_23752[(10)]);
var inst_23694 = (state_23752[(20)]);
var inst_23697 = (inst_23695 < inst_23694);
var inst_23698 = inst_23697;
var state_23752__$1 = state_23752;
if(cljs.core.truth_(inst_23698)){
var statearr_23800_23865 = state_23752__$1;
(statearr_23800_23865[(1)] = (27));

} else {
var statearr_23801_23866 = state_23752__$1;
(statearr_23801_23866[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (34))){
var state_23752__$1 = state_23752;
var statearr_23802_23867 = state_23752__$1;
(statearr_23802_23867[(2)] = null);

(statearr_23802_23867[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (17))){
var state_23752__$1 = state_23752;
var statearr_23803_23868 = state_23752__$1;
(statearr_23803_23868[(2)] = null);

(statearr_23803_23868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (3))){
var inst_23750 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23752__$1,inst_23750);
} else {
if((state_val_23753 === (12))){
var inst_23679 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23804_23869 = state_23752__$1;
(statearr_23804_23869[(2)] = inst_23679);

(statearr_23804_23869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (2))){
var state_23752__$1 = state_23752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23752__$1,(4),ch);
} else {
if((state_val_23753 === (23))){
var state_23752__$1 = state_23752;
var statearr_23805_23870 = state_23752__$1;
(statearr_23805_23870[(2)] = null);

(statearr_23805_23870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (35))){
var inst_23734 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23806_23871 = state_23752__$1;
(statearr_23806_23871[(2)] = inst_23734);

(statearr_23806_23871[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (19))){
var inst_23651 = (state_23752[(7)]);
var inst_23655 = cljs.core.chunk_first.call(null,inst_23651);
var inst_23656 = cljs.core.chunk_rest.call(null,inst_23651);
var inst_23657 = cljs.core.count.call(null,inst_23655);
var inst_23629 = inst_23656;
var inst_23630 = inst_23655;
var inst_23631 = inst_23657;
var inst_23632 = (0);
var state_23752__$1 = (function (){var statearr_23807 = state_23752;
(statearr_23807[(13)] = inst_23630);

(statearr_23807[(15)] = inst_23631);

(statearr_23807[(16)] = inst_23629);

(statearr_23807[(17)] = inst_23632);

return statearr_23807;
})();
var statearr_23808_23872 = state_23752__$1;
(statearr_23808_23872[(2)] = null);

(statearr_23808_23872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (11))){
var inst_23651 = (state_23752[(7)]);
var inst_23629 = (state_23752[(16)]);
var inst_23651__$1 = cljs.core.seq.call(null,inst_23629);
var state_23752__$1 = (function (){var statearr_23809 = state_23752;
(statearr_23809[(7)] = inst_23651__$1);

return statearr_23809;
})();
if(inst_23651__$1){
var statearr_23810_23873 = state_23752__$1;
(statearr_23810_23873[(1)] = (16));

} else {
var statearr_23811_23874 = state_23752__$1;
(statearr_23811_23874[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (9))){
var inst_23681 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23812_23875 = state_23752__$1;
(statearr_23812_23875[(2)] = inst_23681);

(statearr_23812_23875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (5))){
var inst_23627 = cljs.core.deref.call(null,cs);
var inst_23628 = cljs.core.seq.call(null,inst_23627);
var inst_23629 = inst_23628;
var inst_23630 = null;
var inst_23631 = (0);
var inst_23632 = (0);
var state_23752__$1 = (function (){var statearr_23813 = state_23752;
(statearr_23813[(13)] = inst_23630);

(statearr_23813[(15)] = inst_23631);

(statearr_23813[(16)] = inst_23629);

(statearr_23813[(17)] = inst_23632);

return statearr_23813;
})();
var statearr_23814_23876 = state_23752__$1;
(statearr_23814_23876[(2)] = null);

(statearr_23814_23876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (14))){
var state_23752__$1 = state_23752;
var statearr_23815_23877 = state_23752__$1;
(statearr_23815_23877[(2)] = null);

(statearr_23815_23877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (45))){
var inst_23742 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23816_23878 = state_23752__$1;
(statearr_23816_23878[(2)] = inst_23742);

(statearr_23816_23878[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (26))){
var inst_23684 = (state_23752[(29)]);
var inst_23738 = (state_23752[(2)]);
var inst_23739 = cljs.core.seq.call(null,inst_23684);
var state_23752__$1 = (function (){var statearr_23817 = state_23752;
(statearr_23817[(31)] = inst_23738);

return statearr_23817;
})();
if(inst_23739){
var statearr_23818_23879 = state_23752__$1;
(statearr_23818_23879[(1)] = (42));

} else {
var statearr_23819_23880 = state_23752__$1;
(statearr_23819_23880[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (16))){
var inst_23651 = (state_23752[(7)]);
var inst_23653 = cljs.core.chunked_seq_QMARK_.call(null,inst_23651);
var state_23752__$1 = state_23752;
if(inst_23653){
var statearr_23820_23881 = state_23752__$1;
(statearr_23820_23881[(1)] = (19));

} else {
var statearr_23821_23882 = state_23752__$1;
(statearr_23821_23882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (38))){
var inst_23731 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23822_23883 = state_23752__$1;
(statearr_23822_23883[(2)] = inst_23731);

(statearr_23822_23883[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (30))){
var state_23752__$1 = state_23752;
var statearr_23823_23884 = state_23752__$1;
(statearr_23823_23884[(2)] = null);

(statearr_23823_23884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (10))){
var inst_23630 = (state_23752[(13)]);
var inst_23632 = (state_23752[(17)]);
var inst_23640 = cljs.core._nth.call(null,inst_23630,inst_23632);
var inst_23641 = cljs.core.nth.call(null,inst_23640,(0),null);
var inst_23642 = cljs.core.nth.call(null,inst_23640,(1),null);
var state_23752__$1 = (function (){var statearr_23824 = state_23752;
(statearr_23824[(26)] = inst_23641);

return statearr_23824;
})();
if(cljs.core.truth_(inst_23642)){
var statearr_23825_23885 = state_23752__$1;
(statearr_23825_23885[(1)] = (13));

} else {
var statearr_23826_23886 = state_23752__$1;
(statearr_23826_23886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (18))){
var inst_23677 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23827_23887 = state_23752__$1;
(statearr_23827_23887[(2)] = inst_23677);

(statearr_23827_23887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (42))){
var state_23752__$1 = state_23752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23752__$1,(45),dchan);
} else {
if((state_val_23753 === (37))){
var inst_23720 = (state_23752[(23)]);
var inst_23711 = (state_23752[(25)]);
var inst_23620 = (state_23752[(12)]);
var inst_23720__$1 = cljs.core.first.call(null,inst_23711);
var inst_23721 = cljs.core.async.put_BANG_.call(null,inst_23720__$1,inst_23620,done);
var state_23752__$1 = (function (){var statearr_23828 = state_23752;
(statearr_23828[(23)] = inst_23720__$1);

return statearr_23828;
})();
if(cljs.core.truth_(inst_23721)){
var statearr_23829_23888 = state_23752__$1;
(statearr_23829_23888[(1)] = (39));

} else {
var statearr_23830_23889 = state_23752__$1;
(statearr_23830_23889[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23753 === (8))){
var inst_23631 = (state_23752[(15)]);
var inst_23632 = (state_23752[(17)]);
var inst_23634 = (inst_23632 < inst_23631);
var inst_23635 = inst_23634;
var state_23752__$1 = state_23752;
if(cljs.core.truth_(inst_23635)){
var statearr_23831_23890 = state_23752__$1;
(statearr_23831_23890[(1)] = (10));

} else {
var statearr_23832_23891 = state_23752__$1;
(statearr_23832_23891[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__22919__auto__ = null;
var cljs$core$async$mult_$_state_machine__22919__auto____0 = (function (){
var statearr_23833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23833[(0)] = cljs$core$async$mult_$_state_machine__22919__auto__);

(statearr_23833[(1)] = (1));

return statearr_23833;
});
var cljs$core$async$mult_$_state_machine__22919__auto____1 = (function (state_23752){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e23834){if((e23834 instanceof Object)){
var ex__22922__auto__ = e23834;
var statearr_23835_23892 = state_23752;
(statearr_23835_23892[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23893 = state_23752;
state_23752 = G__23893;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22919__auto__ = function(state_23752){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22919__auto____1.call(this,state_23752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22919__auto____0;
cljs$core$async$mult_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22919__auto____1;
return cljs$core$async$mult_$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_23836 = f__23016__auto__.call(null);
(statearr_23836[(6)] = c__23015__auto___23837);

return statearr_23836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23895 = arguments.length;
switch (G__23895) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23897 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m,ch);
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23897.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23898 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m,ch);
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23898.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23899 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m);
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23899.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23900 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m,state_map);
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23900.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23901 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,m,mode);
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23901.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___23911 = arguments.length;
var i__4819__auto___23912 = (0);
while(true){
if((i__4819__auto___23912 < len__4818__auto___23911)){
args__4824__auto__.push((arguments[i__4819__auto___23912]));

var G__23913 = (i__4819__auto___23912 + (1));
i__4819__auto___23912 = G__23913;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23906){
var map__23907 = p__23906;
var map__23907__$1 = cljs.core.__destructure_map.call(null,map__23907);
var opts = map__23907__$1;
var statearr_23908_23914 = state;
(statearr_23908_23914[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_23909_23915 = state;
(statearr_23909_23915[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_23910_23916 = state;
(statearr_23910_23916[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23902){
var G__23903 = cljs.core.first.call(null,seq23902);
var seq23902__$1 = cljs.core.next.call(null,seq23902);
var G__23904 = cljs.core.first.call(null,seq23902__$1);
var seq23902__$2 = cljs.core.next.call(null,seq23902__$1);
var G__23905 = cljs.core.first.call(null,seq23902__$2);
var seq23902__$3 = cljs.core.next.call(null,seq23902__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23903,G__23904,G__23905,seq23902__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23917 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23918){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23918 = meta23918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23919,meta23918__$1){
var self__ = this;
var _23919__$1 = this;
return (new cljs.core.async.t_cljs$core$async23917(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23918__$1));
}));

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23919){
var self__ = this;
var _23919__$1 = this;
return self__.meta23918;
}));

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23917.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23918","meta23918",15228052,null)], null);
}));

(cljs.core.async.t_cljs$core$async23917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23917");

(cljs.core.async.t_cljs$core$async23917.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async23917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23917.
 */
cljs.core.async.__GT_t_cljs$core$async23917 = (function cljs$core$async$mix_$___GT_t_cljs$core$async23917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23918){
return (new cljs.core.async.t_cljs$core$async23917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23918));
});

}

return (new cljs.core.async.t_cljs$core$async23917(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23015__auto___24031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_23987){
var state_val_23988 = (state_23987[(1)]);
if((state_val_23988 === (7))){
var inst_23947 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
if(cljs.core.truth_(inst_23947)){
var statearr_23989_24032 = state_23987__$1;
(statearr_23989_24032[(1)] = (8));

} else {
var statearr_23990_24033 = state_23987__$1;
(statearr_23990_24033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (20))){
var inst_23940 = (state_23987[(7)]);
var state_23987__$1 = state_23987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23987__$1,(23),out,inst_23940);
} else {
if((state_val_23988 === (1))){
var inst_23923 = calc_state.call(null);
var inst_23924 = cljs.core.__destructure_map.call(null,inst_23923);
var inst_23925 = cljs.core.get.call(null,inst_23924,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23926 = cljs.core.get.call(null,inst_23924,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23927 = cljs.core.get.call(null,inst_23924,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23928 = inst_23923;
var state_23987__$1 = (function (){var statearr_23991 = state_23987;
(statearr_23991[(8)] = inst_23925);

(statearr_23991[(9)] = inst_23926);

(statearr_23991[(10)] = inst_23927);

(statearr_23991[(11)] = inst_23928);

return statearr_23991;
})();
var statearr_23992_24034 = state_23987__$1;
(statearr_23992_24034[(2)] = null);

(statearr_23992_24034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (24))){
var inst_23931 = (state_23987[(12)]);
var inst_23928 = inst_23931;
var state_23987__$1 = (function (){var statearr_23993 = state_23987;
(statearr_23993[(11)] = inst_23928);

return statearr_23993;
})();
var statearr_23994_24035 = state_23987__$1;
(statearr_23994_24035[(2)] = null);

(statearr_23994_24035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (4))){
var inst_23942 = (state_23987[(13)]);
var inst_23940 = (state_23987[(7)]);
var inst_23939 = (state_23987[(2)]);
var inst_23940__$1 = cljs.core.nth.call(null,inst_23939,(0),null);
var inst_23941 = cljs.core.nth.call(null,inst_23939,(1),null);
var inst_23942__$1 = (inst_23940__$1 == null);
var state_23987__$1 = (function (){var statearr_23995 = state_23987;
(statearr_23995[(14)] = inst_23941);

(statearr_23995[(13)] = inst_23942__$1);

(statearr_23995[(7)] = inst_23940__$1);

return statearr_23995;
})();
if(cljs.core.truth_(inst_23942__$1)){
var statearr_23996_24036 = state_23987__$1;
(statearr_23996_24036[(1)] = (5));

} else {
var statearr_23997_24037 = state_23987__$1;
(statearr_23997_24037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (15))){
var inst_23961 = (state_23987[(15)]);
var inst_23932 = (state_23987[(16)]);
var inst_23961__$1 = cljs.core.empty_QMARK_.call(null,inst_23932);
var state_23987__$1 = (function (){var statearr_23998 = state_23987;
(statearr_23998[(15)] = inst_23961__$1);

return statearr_23998;
})();
if(inst_23961__$1){
var statearr_23999_24038 = state_23987__$1;
(statearr_23999_24038[(1)] = (17));

} else {
var statearr_24000_24039 = state_23987__$1;
(statearr_24000_24039[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (21))){
var inst_23931 = (state_23987[(12)]);
var inst_23928 = inst_23931;
var state_23987__$1 = (function (){var statearr_24001 = state_23987;
(statearr_24001[(11)] = inst_23928);

return statearr_24001;
})();
var statearr_24002_24040 = state_23987__$1;
(statearr_24002_24040[(2)] = null);

(statearr_24002_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (13))){
var inst_23954 = (state_23987[(2)]);
var inst_23955 = calc_state.call(null);
var inst_23928 = inst_23955;
var state_23987__$1 = (function (){var statearr_24003 = state_23987;
(statearr_24003[(17)] = inst_23954);

(statearr_24003[(11)] = inst_23928);

return statearr_24003;
})();
var statearr_24004_24041 = state_23987__$1;
(statearr_24004_24041[(2)] = null);

(statearr_24004_24041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (22))){
var inst_23981 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
var statearr_24005_24042 = state_23987__$1;
(statearr_24005_24042[(2)] = inst_23981);

(statearr_24005_24042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (6))){
var inst_23941 = (state_23987[(14)]);
var inst_23945 = cljs.core._EQ_.call(null,inst_23941,change);
var state_23987__$1 = state_23987;
var statearr_24006_24043 = state_23987__$1;
(statearr_24006_24043[(2)] = inst_23945);

(statearr_24006_24043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (25))){
var state_23987__$1 = state_23987;
var statearr_24007_24044 = state_23987__$1;
(statearr_24007_24044[(2)] = null);

(statearr_24007_24044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (17))){
var inst_23941 = (state_23987[(14)]);
var inst_23933 = (state_23987[(18)]);
var inst_23963 = inst_23933.call(null,inst_23941);
var inst_23964 = cljs.core.not.call(null,inst_23963);
var state_23987__$1 = state_23987;
var statearr_24008_24045 = state_23987__$1;
(statearr_24008_24045[(2)] = inst_23964);

(statearr_24008_24045[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (3))){
var inst_23985 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23987__$1,inst_23985);
} else {
if((state_val_23988 === (12))){
var state_23987__$1 = state_23987;
var statearr_24009_24046 = state_23987__$1;
(statearr_24009_24046[(2)] = null);

(statearr_24009_24046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (2))){
var inst_23931 = (state_23987[(12)]);
var inst_23928 = (state_23987[(11)]);
var inst_23931__$1 = cljs.core.__destructure_map.call(null,inst_23928);
var inst_23932 = cljs.core.get.call(null,inst_23931__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23933 = cljs.core.get.call(null,inst_23931__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23934 = cljs.core.get.call(null,inst_23931__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23987__$1 = (function (){var statearr_24010 = state_23987;
(statearr_24010[(18)] = inst_23933);

(statearr_24010[(12)] = inst_23931__$1);

(statearr_24010[(16)] = inst_23932);

return statearr_24010;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23987__$1,(4),inst_23934);
} else {
if((state_val_23988 === (23))){
var inst_23972 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
if(cljs.core.truth_(inst_23972)){
var statearr_24011_24047 = state_23987__$1;
(statearr_24011_24047[(1)] = (24));

} else {
var statearr_24012_24048 = state_23987__$1;
(statearr_24012_24048[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (19))){
var inst_23967 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
var statearr_24013_24049 = state_23987__$1;
(statearr_24013_24049[(2)] = inst_23967);

(statearr_24013_24049[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (11))){
var inst_23941 = (state_23987[(14)]);
var inst_23951 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23941);
var state_23987__$1 = state_23987;
var statearr_24014_24050 = state_23987__$1;
(statearr_24014_24050[(2)] = inst_23951);

(statearr_24014_24050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (9))){
var inst_23941 = (state_23987[(14)]);
var inst_23958 = (state_23987[(19)]);
var inst_23932 = (state_23987[(16)]);
var inst_23958__$1 = inst_23932.call(null,inst_23941);
var state_23987__$1 = (function (){var statearr_24015 = state_23987;
(statearr_24015[(19)] = inst_23958__$1);

return statearr_24015;
})();
if(cljs.core.truth_(inst_23958__$1)){
var statearr_24016_24051 = state_23987__$1;
(statearr_24016_24051[(1)] = (14));

} else {
var statearr_24017_24052 = state_23987__$1;
(statearr_24017_24052[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (5))){
var inst_23942 = (state_23987[(13)]);
var state_23987__$1 = state_23987;
var statearr_24018_24053 = state_23987__$1;
(statearr_24018_24053[(2)] = inst_23942);

(statearr_24018_24053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (14))){
var inst_23958 = (state_23987[(19)]);
var state_23987__$1 = state_23987;
var statearr_24019_24054 = state_23987__$1;
(statearr_24019_24054[(2)] = inst_23958);

(statearr_24019_24054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (26))){
var inst_23977 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
var statearr_24020_24055 = state_23987__$1;
(statearr_24020_24055[(2)] = inst_23977);

(statearr_24020_24055[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (16))){
var inst_23969 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
if(cljs.core.truth_(inst_23969)){
var statearr_24021_24056 = state_23987__$1;
(statearr_24021_24056[(1)] = (20));

} else {
var statearr_24022_24057 = state_23987__$1;
(statearr_24022_24057[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (10))){
var inst_23983 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
var statearr_24023_24058 = state_23987__$1;
(statearr_24023_24058[(2)] = inst_23983);

(statearr_24023_24058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (18))){
var inst_23961 = (state_23987[(15)]);
var state_23987__$1 = state_23987;
var statearr_24024_24059 = state_23987__$1;
(statearr_24024_24059[(2)] = inst_23961);

(statearr_24024_24059[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (8))){
var inst_23940 = (state_23987[(7)]);
var inst_23949 = (inst_23940 == null);
var state_23987__$1 = state_23987;
if(cljs.core.truth_(inst_23949)){
var statearr_24025_24060 = state_23987__$1;
(statearr_24025_24060[(1)] = (11));

} else {
var statearr_24026_24061 = state_23987__$1;
(statearr_24026_24061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__22919__auto__ = null;
var cljs$core$async$mix_$_state_machine__22919__auto____0 = (function (){
var statearr_24027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24027[(0)] = cljs$core$async$mix_$_state_machine__22919__auto__);

(statearr_24027[(1)] = (1));

return statearr_24027;
});
var cljs$core$async$mix_$_state_machine__22919__auto____1 = (function (state_23987){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_23987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24028){if((e24028 instanceof Object)){
var ex__22922__auto__ = e24028;
var statearr_24029_24062 = state_23987;
(statearr_24029_24062[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24063 = state_23987;
state_23987 = G__24063;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22919__auto__ = function(state_23987){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22919__auto____1.call(this,state_23987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22919__auto____0;
cljs$core$async$mix_$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22919__auto____1;
return cljs$core$async$mix_$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24030 = f__23016__auto__.call(null);
(statearr_24030[(6)] = c__23015__auto___24031);

return statearr_24030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_24066 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_24066.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24067 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,p,v,ch);
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_24067.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24068 = (function() {
var G__24069 = null;
var G__24069__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,p);
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__24069__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,p,v);
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__24069 = function(p,v){
switch(arguments.length){
case 1:
return G__24069__1.call(this,p);
case 2:
return G__24069__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24069.cljs$core$IFn$_invoke$arity$1 = G__24069__1;
G__24069.cljs$core$IFn$_invoke$arity$2 = G__24069__2;
return G__24069;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24065 = arguments.length;
switch (G__24065) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24068.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24068.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24073 = arguments.length;
switch (G__24073) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24071_SHARP_){
if(cljs.core.truth_(p1__24071_SHARP_.call(null,topic))){
return p1__24071_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24071_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24074 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24075){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24075 = meta24075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24076,meta24075__$1){
var self__ = this;
var _24076__$1 = this;
return (new cljs.core.async.t_cljs$core$async24074(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24075__$1));
}));

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24076){
var self__ = this;
var _24076__$1 = this;
return self__.meta24075;
}));

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24075","meta24075",-1380926174,null)], null);
}));

(cljs.core.async.t_cljs$core$async24074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24074");

(cljs.core.async.t_cljs$core$async24074.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async24074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24074.
 */
cljs.core.async.__GT_t_cljs$core$async24074 = (function cljs$core$async$__GT_t_cljs$core$async24074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24075){
return (new cljs.core.async.t_cljs$core$async24074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24075));
});

}

return (new cljs.core.async.t_cljs$core$async24074(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23015__auto___24194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24148){
var state_val_24149 = (state_24148[(1)]);
if((state_val_24149 === (7))){
var inst_24144 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
var statearr_24150_24195 = state_24148__$1;
(statearr_24150_24195[(2)] = inst_24144);

(statearr_24150_24195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (20))){
var state_24148__$1 = state_24148;
var statearr_24151_24196 = state_24148__$1;
(statearr_24151_24196[(2)] = null);

(statearr_24151_24196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (1))){
var state_24148__$1 = state_24148;
var statearr_24152_24197 = state_24148__$1;
(statearr_24152_24197[(2)] = null);

(statearr_24152_24197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (24))){
var inst_24127 = (state_24148[(7)]);
var inst_24136 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24127);
var state_24148__$1 = state_24148;
var statearr_24153_24198 = state_24148__$1;
(statearr_24153_24198[(2)] = inst_24136);

(statearr_24153_24198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (4))){
var inst_24079 = (state_24148[(8)]);
var inst_24079__$1 = (state_24148[(2)]);
var inst_24080 = (inst_24079__$1 == null);
var state_24148__$1 = (function (){var statearr_24154 = state_24148;
(statearr_24154[(8)] = inst_24079__$1);

return statearr_24154;
})();
if(cljs.core.truth_(inst_24080)){
var statearr_24155_24199 = state_24148__$1;
(statearr_24155_24199[(1)] = (5));

} else {
var statearr_24156_24200 = state_24148__$1;
(statearr_24156_24200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (15))){
var inst_24121 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
var statearr_24157_24201 = state_24148__$1;
(statearr_24157_24201[(2)] = inst_24121);

(statearr_24157_24201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (21))){
var inst_24141 = (state_24148[(2)]);
var state_24148__$1 = (function (){var statearr_24158 = state_24148;
(statearr_24158[(9)] = inst_24141);

return statearr_24158;
})();
var statearr_24159_24202 = state_24148__$1;
(statearr_24159_24202[(2)] = null);

(statearr_24159_24202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (13))){
var inst_24103 = (state_24148[(10)]);
var inst_24105 = cljs.core.chunked_seq_QMARK_.call(null,inst_24103);
var state_24148__$1 = state_24148;
if(inst_24105){
var statearr_24160_24203 = state_24148__$1;
(statearr_24160_24203[(1)] = (16));

} else {
var statearr_24161_24204 = state_24148__$1;
(statearr_24161_24204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (22))){
var inst_24133 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
if(cljs.core.truth_(inst_24133)){
var statearr_24162_24205 = state_24148__$1;
(statearr_24162_24205[(1)] = (23));

} else {
var statearr_24163_24206 = state_24148__$1;
(statearr_24163_24206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (6))){
var inst_24079 = (state_24148[(8)]);
var inst_24127 = (state_24148[(7)]);
var inst_24129 = (state_24148[(11)]);
var inst_24127__$1 = topic_fn.call(null,inst_24079);
var inst_24128 = cljs.core.deref.call(null,mults);
var inst_24129__$1 = cljs.core.get.call(null,inst_24128,inst_24127__$1);
var state_24148__$1 = (function (){var statearr_24164 = state_24148;
(statearr_24164[(7)] = inst_24127__$1);

(statearr_24164[(11)] = inst_24129__$1);

return statearr_24164;
})();
if(cljs.core.truth_(inst_24129__$1)){
var statearr_24165_24207 = state_24148__$1;
(statearr_24165_24207[(1)] = (19));

} else {
var statearr_24166_24208 = state_24148__$1;
(statearr_24166_24208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (25))){
var inst_24138 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
var statearr_24167_24209 = state_24148__$1;
(statearr_24167_24209[(2)] = inst_24138);

(statearr_24167_24209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (17))){
var inst_24103 = (state_24148[(10)]);
var inst_24112 = cljs.core.first.call(null,inst_24103);
var inst_24113 = cljs.core.async.muxch_STAR_.call(null,inst_24112);
var inst_24114 = cljs.core.async.close_BANG_.call(null,inst_24113);
var inst_24115 = cljs.core.next.call(null,inst_24103);
var inst_24089 = inst_24115;
var inst_24090 = null;
var inst_24091 = (0);
var inst_24092 = (0);
var state_24148__$1 = (function (){var statearr_24168 = state_24148;
(statearr_24168[(12)] = inst_24114);

(statearr_24168[(13)] = inst_24089);

(statearr_24168[(14)] = inst_24091);

(statearr_24168[(15)] = inst_24092);

(statearr_24168[(16)] = inst_24090);

return statearr_24168;
})();
var statearr_24169_24210 = state_24148__$1;
(statearr_24169_24210[(2)] = null);

(statearr_24169_24210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (3))){
var inst_24146 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24148__$1,inst_24146);
} else {
if((state_val_24149 === (12))){
var inst_24123 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
var statearr_24170_24211 = state_24148__$1;
(statearr_24170_24211[(2)] = inst_24123);

(statearr_24170_24211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (2))){
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24148__$1,(4),ch);
} else {
if((state_val_24149 === (23))){
var state_24148__$1 = state_24148;
var statearr_24171_24212 = state_24148__$1;
(statearr_24171_24212[(2)] = null);

(statearr_24171_24212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (19))){
var inst_24079 = (state_24148[(8)]);
var inst_24129 = (state_24148[(11)]);
var inst_24131 = cljs.core.async.muxch_STAR_.call(null,inst_24129);
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24148__$1,(22),inst_24131,inst_24079);
} else {
if((state_val_24149 === (11))){
var inst_24089 = (state_24148[(13)]);
var inst_24103 = (state_24148[(10)]);
var inst_24103__$1 = cljs.core.seq.call(null,inst_24089);
var state_24148__$1 = (function (){var statearr_24172 = state_24148;
(statearr_24172[(10)] = inst_24103__$1);

return statearr_24172;
})();
if(inst_24103__$1){
var statearr_24173_24213 = state_24148__$1;
(statearr_24173_24213[(1)] = (13));

} else {
var statearr_24174_24214 = state_24148__$1;
(statearr_24174_24214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (9))){
var inst_24125 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
var statearr_24175_24215 = state_24148__$1;
(statearr_24175_24215[(2)] = inst_24125);

(statearr_24175_24215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (5))){
var inst_24086 = cljs.core.deref.call(null,mults);
var inst_24087 = cljs.core.vals.call(null,inst_24086);
var inst_24088 = cljs.core.seq.call(null,inst_24087);
var inst_24089 = inst_24088;
var inst_24090 = null;
var inst_24091 = (0);
var inst_24092 = (0);
var state_24148__$1 = (function (){var statearr_24176 = state_24148;
(statearr_24176[(13)] = inst_24089);

(statearr_24176[(14)] = inst_24091);

(statearr_24176[(15)] = inst_24092);

(statearr_24176[(16)] = inst_24090);

return statearr_24176;
})();
var statearr_24177_24216 = state_24148__$1;
(statearr_24177_24216[(2)] = null);

(statearr_24177_24216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (14))){
var state_24148__$1 = state_24148;
var statearr_24181_24217 = state_24148__$1;
(statearr_24181_24217[(2)] = null);

(statearr_24181_24217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (16))){
var inst_24103 = (state_24148[(10)]);
var inst_24107 = cljs.core.chunk_first.call(null,inst_24103);
var inst_24108 = cljs.core.chunk_rest.call(null,inst_24103);
var inst_24109 = cljs.core.count.call(null,inst_24107);
var inst_24089 = inst_24108;
var inst_24090 = inst_24107;
var inst_24091 = inst_24109;
var inst_24092 = (0);
var state_24148__$1 = (function (){var statearr_24182 = state_24148;
(statearr_24182[(13)] = inst_24089);

(statearr_24182[(14)] = inst_24091);

(statearr_24182[(15)] = inst_24092);

(statearr_24182[(16)] = inst_24090);

return statearr_24182;
})();
var statearr_24183_24218 = state_24148__$1;
(statearr_24183_24218[(2)] = null);

(statearr_24183_24218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (10))){
var inst_24089 = (state_24148[(13)]);
var inst_24091 = (state_24148[(14)]);
var inst_24092 = (state_24148[(15)]);
var inst_24090 = (state_24148[(16)]);
var inst_24097 = cljs.core._nth.call(null,inst_24090,inst_24092);
var inst_24098 = cljs.core.async.muxch_STAR_.call(null,inst_24097);
var inst_24099 = cljs.core.async.close_BANG_.call(null,inst_24098);
var inst_24100 = (inst_24092 + (1));
var tmp24178 = inst_24089;
var tmp24179 = inst_24091;
var tmp24180 = inst_24090;
var inst_24089__$1 = tmp24178;
var inst_24090__$1 = tmp24180;
var inst_24091__$1 = tmp24179;
var inst_24092__$1 = inst_24100;
var state_24148__$1 = (function (){var statearr_24184 = state_24148;
(statearr_24184[(13)] = inst_24089__$1);

(statearr_24184[(17)] = inst_24099);

(statearr_24184[(14)] = inst_24091__$1);

(statearr_24184[(15)] = inst_24092__$1);

(statearr_24184[(16)] = inst_24090__$1);

return statearr_24184;
})();
var statearr_24185_24219 = state_24148__$1;
(statearr_24185_24219[(2)] = null);

(statearr_24185_24219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (18))){
var inst_24118 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
var statearr_24186_24220 = state_24148__$1;
(statearr_24186_24220[(2)] = inst_24118);

(statearr_24186_24220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (8))){
var inst_24091 = (state_24148[(14)]);
var inst_24092 = (state_24148[(15)]);
var inst_24094 = (inst_24092 < inst_24091);
var inst_24095 = inst_24094;
var state_24148__$1 = state_24148;
if(cljs.core.truth_(inst_24095)){
var statearr_24187_24221 = state_24148__$1;
(statearr_24187_24221[(1)] = (10));

} else {
var statearr_24188_24222 = state_24148__$1;
(statearr_24188_24222[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24189[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24189[(1)] = (1));

return statearr_24189;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24148){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24190){if((e24190 instanceof Object)){
var ex__22922__auto__ = e24190;
var statearr_24191_24223 = state_24148;
(statearr_24191_24223[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24224 = state_24148;
state_24148 = G__24224;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24192 = f__23016__auto__.call(null);
(statearr_24192[(6)] = c__23015__auto___24194);

return statearr_24192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24226 = arguments.length;
switch (G__24226) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24229 = arguments.length;
switch (G__24229) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24232 = arguments.length;
switch (G__24232) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__23015__auto___24299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24271){
var state_val_24272 = (state_24271[(1)]);
if((state_val_24272 === (7))){
var state_24271__$1 = state_24271;
var statearr_24273_24300 = state_24271__$1;
(statearr_24273_24300[(2)] = null);

(statearr_24273_24300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (1))){
var state_24271__$1 = state_24271;
var statearr_24274_24301 = state_24271__$1;
(statearr_24274_24301[(2)] = null);

(statearr_24274_24301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (4))){
var inst_24235 = (state_24271[(7)]);
var inst_24237 = (inst_24235 < cnt);
var state_24271__$1 = state_24271;
if(cljs.core.truth_(inst_24237)){
var statearr_24275_24302 = state_24271__$1;
(statearr_24275_24302[(1)] = (6));

} else {
var statearr_24276_24303 = state_24271__$1;
(statearr_24276_24303[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (15))){
var inst_24267 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
var statearr_24277_24304 = state_24271__$1;
(statearr_24277_24304[(2)] = inst_24267);

(statearr_24277_24304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (13))){
var inst_24260 = cljs.core.async.close_BANG_.call(null,out);
var state_24271__$1 = state_24271;
var statearr_24278_24305 = state_24271__$1;
(statearr_24278_24305[(2)] = inst_24260);

(statearr_24278_24305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (6))){
var state_24271__$1 = state_24271;
var statearr_24279_24306 = state_24271__$1;
(statearr_24279_24306[(2)] = null);

(statearr_24279_24306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (3))){
var inst_24269 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24271__$1,inst_24269);
} else {
if((state_val_24272 === (12))){
var inst_24257 = (state_24271[(8)]);
var inst_24257__$1 = (state_24271[(2)]);
var inst_24258 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24257__$1);
var state_24271__$1 = (function (){var statearr_24280 = state_24271;
(statearr_24280[(8)] = inst_24257__$1);

return statearr_24280;
})();
if(cljs.core.truth_(inst_24258)){
var statearr_24281_24307 = state_24271__$1;
(statearr_24281_24307[(1)] = (13));

} else {
var statearr_24282_24308 = state_24271__$1;
(statearr_24282_24308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (2))){
var inst_24234 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24235 = (0);
var state_24271__$1 = (function (){var statearr_24283 = state_24271;
(statearr_24283[(7)] = inst_24235);

(statearr_24283[(9)] = inst_24234);

return statearr_24283;
})();
var statearr_24284_24309 = state_24271__$1;
(statearr_24284_24309[(2)] = null);

(statearr_24284_24309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (11))){
var inst_24235 = (state_24271[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24271,(10),Object,null,(9));
var inst_24244 = chs__$1.call(null,inst_24235);
var inst_24245 = done.call(null,inst_24235);
var inst_24246 = cljs.core.async.take_BANG_.call(null,inst_24244,inst_24245);
var state_24271__$1 = state_24271;
var statearr_24285_24310 = state_24271__$1;
(statearr_24285_24310[(2)] = inst_24246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24271__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (9))){
var inst_24235 = (state_24271[(7)]);
var inst_24248 = (state_24271[(2)]);
var inst_24249 = (inst_24235 + (1));
var inst_24235__$1 = inst_24249;
var state_24271__$1 = (function (){var statearr_24286 = state_24271;
(statearr_24286[(10)] = inst_24248);

(statearr_24286[(7)] = inst_24235__$1);

return statearr_24286;
})();
var statearr_24287_24311 = state_24271__$1;
(statearr_24287_24311[(2)] = null);

(statearr_24287_24311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (5))){
var inst_24255 = (state_24271[(2)]);
var state_24271__$1 = (function (){var statearr_24288 = state_24271;
(statearr_24288[(11)] = inst_24255);

return statearr_24288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24271__$1,(12),dchan);
} else {
if((state_val_24272 === (14))){
var inst_24257 = (state_24271[(8)]);
var inst_24262 = cljs.core.apply.call(null,f,inst_24257);
var state_24271__$1 = state_24271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24271__$1,(16),out,inst_24262);
} else {
if((state_val_24272 === (16))){
var inst_24264 = (state_24271[(2)]);
var state_24271__$1 = (function (){var statearr_24289 = state_24271;
(statearr_24289[(12)] = inst_24264);

return statearr_24289;
})();
var statearr_24290_24312 = state_24271__$1;
(statearr_24290_24312[(2)] = null);

(statearr_24290_24312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (10))){
var inst_24239 = (state_24271[(2)]);
var inst_24240 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24271__$1 = (function (){var statearr_24291 = state_24271;
(statearr_24291[(13)] = inst_24239);

return statearr_24291;
})();
var statearr_24292_24313 = state_24271__$1;
(statearr_24292_24313[(2)] = inst_24240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24271__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24272 === (8))){
var inst_24253 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
var statearr_24293_24314 = state_24271__$1;
(statearr_24293_24314[(2)] = inst_24253);

(statearr_24293_24314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24294[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24294[(1)] = (1));

return statearr_24294;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24271){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24295){if((e24295 instanceof Object)){
var ex__22922__auto__ = e24295;
var statearr_24296_24315 = state_24271;
(statearr_24296_24315[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24316 = state_24271;
state_24271 = G__24316;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24297 = f__23016__auto__.call(null);
(statearr_24297[(6)] = c__23015__auto___24299);

return statearr_24297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24319 = arguments.length;
switch (G__24319) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23015__auto___24373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24351){
var state_val_24352 = (state_24351[(1)]);
if((state_val_24352 === (7))){
var inst_24331 = (state_24351[(7)]);
var inst_24330 = (state_24351[(8)]);
var inst_24330__$1 = (state_24351[(2)]);
var inst_24331__$1 = cljs.core.nth.call(null,inst_24330__$1,(0),null);
var inst_24332 = cljs.core.nth.call(null,inst_24330__$1,(1),null);
var inst_24333 = (inst_24331__$1 == null);
var state_24351__$1 = (function (){var statearr_24353 = state_24351;
(statearr_24353[(7)] = inst_24331__$1);

(statearr_24353[(9)] = inst_24332);

(statearr_24353[(8)] = inst_24330__$1);

return statearr_24353;
})();
if(cljs.core.truth_(inst_24333)){
var statearr_24354_24374 = state_24351__$1;
(statearr_24354_24374[(1)] = (8));

} else {
var statearr_24355_24375 = state_24351__$1;
(statearr_24355_24375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (1))){
var inst_24320 = cljs.core.vec.call(null,chs);
var inst_24321 = inst_24320;
var state_24351__$1 = (function (){var statearr_24356 = state_24351;
(statearr_24356[(10)] = inst_24321);

return statearr_24356;
})();
var statearr_24357_24376 = state_24351__$1;
(statearr_24357_24376[(2)] = null);

(statearr_24357_24376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (4))){
var inst_24321 = (state_24351[(10)]);
var state_24351__$1 = state_24351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24351__$1,(7),inst_24321);
} else {
if((state_val_24352 === (6))){
var inst_24347 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24358_24377 = state_24351__$1;
(statearr_24358_24377[(2)] = inst_24347);

(statearr_24358_24377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (3))){
var inst_24349 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24351__$1,inst_24349);
} else {
if((state_val_24352 === (2))){
var inst_24321 = (state_24351[(10)]);
var inst_24323 = cljs.core.count.call(null,inst_24321);
var inst_24324 = (inst_24323 > (0));
var state_24351__$1 = state_24351;
if(cljs.core.truth_(inst_24324)){
var statearr_24360_24378 = state_24351__$1;
(statearr_24360_24378[(1)] = (4));

} else {
var statearr_24361_24379 = state_24351__$1;
(statearr_24361_24379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (11))){
var inst_24321 = (state_24351[(10)]);
var inst_24340 = (state_24351[(2)]);
var tmp24359 = inst_24321;
var inst_24321__$1 = tmp24359;
var state_24351__$1 = (function (){var statearr_24362 = state_24351;
(statearr_24362[(10)] = inst_24321__$1);

(statearr_24362[(11)] = inst_24340);

return statearr_24362;
})();
var statearr_24363_24380 = state_24351__$1;
(statearr_24363_24380[(2)] = null);

(statearr_24363_24380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (9))){
var inst_24331 = (state_24351[(7)]);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24351__$1,(11),out,inst_24331);
} else {
if((state_val_24352 === (5))){
var inst_24345 = cljs.core.async.close_BANG_.call(null,out);
var state_24351__$1 = state_24351;
var statearr_24364_24381 = state_24351__$1;
(statearr_24364_24381[(2)] = inst_24345);

(statearr_24364_24381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (10))){
var inst_24343 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24365_24382 = state_24351__$1;
(statearr_24365_24382[(2)] = inst_24343);

(statearr_24365_24382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (8))){
var inst_24331 = (state_24351[(7)]);
var inst_24332 = (state_24351[(9)]);
var inst_24330 = (state_24351[(8)]);
var inst_24321 = (state_24351[(10)]);
var inst_24335 = (function (){var cs = inst_24321;
var vec__24326 = inst_24330;
var v = inst_24331;
var c = inst_24332;
return (function (p1__24317_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24317_SHARP_);
});
})();
var inst_24336 = cljs.core.filterv.call(null,inst_24335,inst_24321);
var inst_24321__$1 = inst_24336;
var state_24351__$1 = (function (){var statearr_24366 = state_24351;
(statearr_24366[(10)] = inst_24321__$1);

return statearr_24366;
})();
var statearr_24367_24383 = state_24351__$1;
(statearr_24367_24383[(2)] = null);

(statearr_24367_24383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24368[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24368[(1)] = (1));

return statearr_24368;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24351){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24369){if((e24369 instanceof Object)){
var ex__22922__auto__ = e24369;
var statearr_24370_24384 = state_24351;
(statearr_24370_24384[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24385 = state_24351;
state_24351 = G__24385;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24371 = f__23016__auto__.call(null);
(statearr_24371[(6)] = c__23015__auto___24373);

return statearr_24371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24387 = arguments.length;
switch (G__24387) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23015__auto___24432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24411){
var state_val_24412 = (state_24411[(1)]);
if((state_val_24412 === (7))){
var inst_24393 = (state_24411[(7)]);
var inst_24393__$1 = (state_24411[(2)]);
var inst_24394 = (inst_24393__$1 == null);
var inst_24395 = cljs.core.not.call(null,inst_24394);
var state_24411__$1 = (function (){var statearr_24413 = state_24411;
(statearr_24413[(7)] = inst_24393__$1);

return statearr_24413;
})();
if(inst_24395){
var statearr_24414_24433 = state_24411__$1;
(statearr_24414_24433[(1)] = (8));

} else {
var statearr_24415_24434 = state_24411__$1;
(statearr_24415_24434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (1))){
var inst_24388 = (0);
var state_24411__$1 = (function (){var statearr_24416 = state_24411;
(statearr_24416[(8)] = inst_24388);

return statearr_24416;
})();
var statearr_24417_24435 = state_24411__$1;
(statearr_24417_24435[(2)] = null);

(statearr_24417_24435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (4))){
var state_24411__$1 = state_24411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24411__$1,(7),ch);
} else {
if((state_val_24412 === (6))){
var inst_24406 = (state_24411[(2)]);
var state_24411__$1 = state_24411;
var statearr_24418_24436 = state_24411__$1;
(statearr_24418_24436[(2)] = inst_24406);

(statearr_24418_24436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (3))){
var inst_24408 = (state_24411[(2)]);
var inst_24409 = cljs.core.async.close_BANG_.call(null,out);
var state_24411__$1 = (function (){var statearr_24419 = state_24411;
(statearr_24419[(9)] = inst_24408);

return statearr_24419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24411__$1,inst_24409);
} else {
if((state_val_24412 === (2))){
var inst_24388 = (state_24411[(8)]);
var inst_24390 = (inst_24388 < n);
var state_24411__$1 = state_24411;
if(cljs.core.truth_(inst_24390)){
var statearr_24420_24437 = state_24411__$1;
(statearr_24420_24437[(1)] = (4));

} else {
var statearr_24421_24438 = state_24411__$1;
(statearr_24421_24438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (11))){
var inst_24388 = (state_24411[(8)]);
var inst_24398 = (state_24411[(2)]);
var inst_24399 = (inst_24388 + (1));
var inst_24388__$1 = inst_24399;
var state_24411__$1 = (function (){var statearr_24422 = state_24411;
(statearr_24422[(8)] = inst_24388__$1);

(statearr_24422[(10)] = inst_24398);

return statearr_24422;
})();
var statearr_24423_24439 = state_24411__$1;
(statearr_24423_24439[(2)] = null);

(statearr_24423_24439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (9))){
var state_24411__$1 = state_24411;
var statearr_24424_24440 = state_24411__$1;
(statearr_24424_24440[(2)] = null);

(statearr_24424_24440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (5))){
var state_24411__$1 = state_24411;
var statearr_24425_24441 = state_24411__$1;
(statearr_24425_24441[(2)] = null);

(statearr_24425_24441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (10))){
var inst_24403 = (state_24411[(2)]);
var state_24411__$1 = state_24411;
var statearr_24426_24442 = state_24411__$1;
(statearr_24426_24442[(2)] = inst_24403);

(statearr_24426_24442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24412 === (8))){
var inst_24393 = (state_24411[(7)]);
var state_24411__$1 = state_24411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24411__$1,(11),out,inst_24393);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24427[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24427[(1)] = (1));

return statearr_24427;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24411){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24428){if((e24428 instanceof Object)){
var ex__22922__auto__ = e24428;
var statearr_24429_24443 = state_24411;
(statearr_24429_24443[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24444 = state_24411;
state_24411 = G__24444;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24430 = f__23016__auto__.call(null);
(statearr_24430[(6)] = c__23015__auto___24432);

return statearr_24430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24446 = (function (f,ch,meta24447){
this.f = f;
this.ch = ch;
this.meta24447 = meta24447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24448,meta24447__$1){
var self__ = this;
var _24448__$1 = this;
return (new cljs.core.async.t_cljs$core$async24446(self__.f,self__.ch,meta24447__$1));
}));

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24448){
var self__ = this;
var _24448__$1 = this;
return self__.meta24447;
}));

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24449 = (function (f,ch,meta24447,_,fn1,meta24450){
this.f = f;
this.ch = ch;
this.meta24447 = meta24447;
this._ = _;
this.fn1 = fn1;
this.meta24450 = meta24450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24451,meta24450__$1){
var self__ = this;
var _24451__$1 = this;
return (new cljs.core.async.t_cljs$core$async24449(self__.f,self__.ch,self__.meta24447,self__._,self__.fn1,meta24450__$1));
}));

(cljs.core.async.t_cljs$core$async24449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24451){
var self__ = this;
var _24451__$1 = this;
return self__.meta24450;
}));

(cljs.core.async.t_cljs$core$async24449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__24445_SHARP_){
return f1.call(null,(((p1__24445_SHARP_ == null))?null:self__.f.call(null,p1__24445_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async24449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24447","meta24447",1063922265,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24446","cljs.core.async/t_cljs$core$async24446",436933880,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24450","meta24450",-403316926,null)], null);
}));

(cljs.core.async.t_cljs$core$async24449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24449");

(cljs.core.async.t_cljs$core$async24449.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async24449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24449.
 */
cljs.core.async.__GT_t_cljs$core$async24449 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24449(f__$1,ch__$1,meta24447__$1,___$2,fn1__$1,meta24450){
return (new cljs.core.async.t_cljs$core$async24449(f__$1,ch__$1,meta24447__$1,___$2,fn1__$1,meta24450));
});

}

return (new cljs.core.async.t_cljs$core$async24449(self__.f,self__.ch,self__.meta24447,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24447","meta24447",1063922265,null)], null);
}));

(cljs.core.async.t_cljs$core$async24446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24446");

(cljs.core.async.t_cljs$core$async24446.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async24446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24446.
 */
cljs.core.async.__GT_t_cljs$core$async24446 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24446(f__$1,ch__$1,meta24447){
return (new cljs.core.async.t_cljs$core$async24446(f__$1,ch__$1,meta24447));
});

}

return (new cljs.core.async.t_cljs$core$async24446(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24452 = (function (f,ch,meta24453){
this.f = f;
this.ch = ch;
this.meta24453 = meta24453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24454,meta24453__$1){
var self__ = this;
var _24454__$1 = this;
return (new cljs.core.async.t_cljs$core$async24452(self__.f,self__.ch,meta24453__$1));
}));

(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24454){
var self__ = this;
var _24454__$1 = this;
return self__.meta24453;
}));

(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async24452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24453","meta24453",1104696063,null)], null);
}));

(cljs.core.async.t_cljs$core$async24452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24452");

(cljs.core.async.t_cljs$core$async24452.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async24452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24452.
 */
cljs.core.async.__GT_t_cljs$core$async24452 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24452(f__$1,ch__$1,meta24453){
return (new cljs.core.async.t_cljs$core$async24452(f__$1,ch__$1,meta24453));
});

}

return (new cljs.core.async.t_cljs$core$async24452(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24455 = (function (p,ch,meta24456){
this.p = p;
this.ch = ch;
this.meta24456 = meta24456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24457,meta24456__$1){
var self__ = this;
var _24457__$1 = this;
return (new cljs.core.async.t_cljs$core$async24455(self__.p,self__.ch,meta24456__$1));
}));

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24457){
var self__ = this;
var _24457__$1 = this;
return self__.meta24456;
}));

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24456","meta24456",-139127907,null)], null);
}));

(cljs.core.async.t_cljs$core$async24455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24455");

(cljs.core.async.t_cljs$core$async24455.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write.call(null,writer__4451__auto__,"cljs.core.async/t_cljs$core$async24455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24455.
 */
cljs.core.async.__GT_t_cljs$core$async24455 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24455(p__$1,ch__$1,meta24456){
return (new cljs.core.async.t_cljs$core$async24455(p__$1,ch__$1,meta24456));
});

}

return (new cljs.core.async.t_cljs$core$async24455(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24459 = arguments.length;
switch (G__24459) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23015__auto___24499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24480){
var state_val_24481 = (state_24480[(1)]);
if((state_val_24481 === (7))){
var inst_24476 = (state_24480[(2)]);
var state_24480__$1 = state_24480;
var statearr_24482_24500 = state_24480__$1;
(statearr_24482_24500[(2)] = inst_24476);

(statearr_24482_24500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (1))){
var state_24480__$1 = state_24480;
var statearr_24483_24501 = state_24480__$1;
(statearr_24483_24501[(2)] = null);

(statearr_24483_24501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (4))){
var inst_24462 = (state_24480[(7)]);
var inst_24462__$1 = (state_24480[(2)]);
var inst_24463 = (inst_24462__$1 == null);
var state_24480__$1 = (function (){var statearr_24484 = state_24480;
(statearr_24484[(7)] = inst_24462__$1);

return statearr_24484;
})();
if(cljs.core.truth_(inst_24463)){
var statearr_24485_24502 = state_24480__$1;
(statearr_24485_24502[(1)] = (5));

} else {
var statearr_24486_24503 = state_24480__$1;
(statearr_24486_24503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (6))){
var inst_24462 = (state_24480[(7)]);
var inst_24467 = p.call(null,inst_24462);
var state_24480__$1 = state_24480;
if(cljs.core.truth_(inst_24467)){
var statearr_24487_24504 = state_24480__$1;
(statearr_24487_24504[(1)] = (8));

} else {
var statearr_24488_24505 = state_24480__$1;
(statearr_24488_24505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (3))){
var inst_24478 = (state_24480[(2)]);
var state_24480__$1 = state_24480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24480__$1,inst_24478);
} else {
if((state_val_24481 === (2))){
var state_24480__$1 = state_24480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24480__$1,(4),ch);
} else {
if((state_val_24481 === (11))){
var inst_24470 = (state_24480[(2)]);
var state_24480__$1 = state_24480;
var statearr_24489_24506 = state_24480__$1;
(statearr_24489_24506[(2)] = inst_24470);

(statearr_24489_24506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (9))){
var state_24480__$1 = state_24480;
var statearr_24490_24507 = state_24480__$1;
(statearr_24490_24507[(2)] = null);

(statearr_24490_24507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (5))){
var inst_24465 = cljs.core.async.close_BANG_.call(null,out);
var state_24480__$1 = state_24480;
var statearr_24491_24508 = state_24480__$1;
(statearr_24491_24508[(2)] = inst_24465);

(statearr_24491_24508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (10))){
var inst_24473 = (state_24480[(2)]);
var state_24480__$1 = (function (){var statearr_24492 = state_24480;
(statearr_24492[(8)] = inst_24473);

return statearr_24492;
})();
var statearr_24493_24509 = state_24480__$1;
(statearr_24493_24509[(2)] = null);

(statearr_24493_24509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24481 === (8))){
var inst_24462 = (state_24480[(7)]);
var state_24480__$1 = state_24480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24480__$1,(11),out,inst_24462);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24494 = [null,null,null,null,null,null,null,null,null];
(statearr_24494[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24494[(1)] = (1));

return statearr_24494;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24480){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24495){if((e24495 instanceof Object)){
var ex__22922__auto__ = e24495;
var statearr_24496_24510 = state_24480;
(statearr_24496_24510[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24511 = state_24480;
state_24480 = G__24511;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24497 = f__23016__auto__.call(null);
(statearr_24497[(6)] = c__23015__auto___24499);

return statearr_24497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24513 = arguments.length;
switch (G__24513) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23015__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24576){
var state_val_24577 = (state_24576[(1)]);
if((state_val_24577 === (7))){
var inst_24572 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24578_24616 = state_24576__$1;
(statearr_24578_24616[(2)] = inst_24572);

(statearr_24578_24616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (20))){
var inst_24542 = (state_24576[(7)]);
var inst_24553 = (state_24576[(2)]);
var inst_24554 = cljs.core.next.call(null,inst_24542);
var inst_24528 = inst_24554;
var inst_24529 = null;
var inst_24530 = (0);
var inst_24531 = (0);
var state_24576__$1 = (function (){var statearr_24579 = state_24576;
(statearr_24579[(8)] = inst_24528);

(statearr_24579[(9)] = inst_24553);

(statearr_24579[(10)] = inst_24531);

(statearr_24579[(11)] = inst_24530);

(statearr_24579[(12)] = inst_24529);

return statearr_24579;
})();
var statearr_24580_24617 = state_24576__$1;
(statearr_24580_24617[(2)] = null);

(statearr_24580_24617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (1))){
var state_24576__$1 = state_24576;
var statearr_24581_24618 = state_24576__$1;
(statearr_24581_24618[(2)] = null);

(statearr_24581_24618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (4))){
var inst_24517 = (state_24576[(13)]);
var inst_24517__$1 = (state_24576[(2)]);
var inst_24518 = (inst_24517__$1 == null);
var state_24576__$1 = (function (){var statearr_24582 = state_24576;
(statearr_24582[(13)] = inst_24517__$1);

return statearr_24582;
})();
if(cljs.core.truth_(inst_24518)){
var statearr_24583_24619 = state_24576__$1;
(statearr_24583_24619[(1)] = (5));

} else {
var statearr_24584_24620 = state_24576__$1;
(statearr_24584_24620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (15))){
var state_24576__$1 = state_24576;
var statearr_24588_24621 = state_24576__$1;
(statearr_24588_24621[(2)] = null);

(statearr_24588_24621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (21))){
var state_24576__$1 = state_24576;
var statearr_24589_24622 = state_24576__$1;
(statearr_24589_24622[(2)] = null);

(statearr_24589_24622[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (13))){
var inst_24528 = (state_24576[(8)]);
var inst_24531 = (state_24576[(10)]);
var inst_24530 = (state_24576[(11)]);
var inst_24529 = (state_24576[(12)]);
var inst_24538 = (state_24576[(2)]);
var inst_24539 = (inst_24531 + (1));
var tmp24585 = inst_24528;
var tmp24586 = inst_24530;
var tmp24587 = inst_24529;
var inst_24528__$1 = tmp24585;
var inst_24529__$1 = tmp24587;
var inst_24530__$1 = tmp24586;
var inst_24531__$1 = inst_24539;
var state_24576__$1 = (function (){var statearr_24590 = state_24576;
(statearr_24590[(8)] = inst_24528__$1);

(statearr_24590[(14)] = inst_24538);

(statearr_24590[(10)] = inst_24531__$1);

(statearr_24590[(11)] = inst_24530__$1);

(statearr_24590[(12)] = inst_24529__$1);

return statearr_24590;
})();
var statearr_24591_24623 = state_24576__$1;
(statearr_24591_24623[(2)] = null);

(statearr_24591_24623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (22))){
var state_24576__$1 = state_24576;
var statearr_24592_24624 = state_24576__$1;
(statearr_24592_24624[(2)] = null);

(statearr_24592_24624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (6))){
var inst_24517 = (state_24576[(13)]);
var inst_24526 = f.call(null,inst_24517);
var inst_24527 = cljs.core.seq.call(null,inst_24526);
var inst_24528 = inst_24527;
var inst_24529 = null;
var inst_24530 = (0);
var inst_24531 = (0);
var state_24576__$1 = (function (){var statearr_24593 = state_24576;
(statearr_24593[(8)] = inst_24528);

(statearr_24593[(10)] = inst_24531);

(statearr_24593[(11)] = inst_24530);

(statearr_24593[(12)] = inst_24529);

return statearr_24593;
})();
var statearr_24594_24625 = state_24576__$1;
(statearr_24594_24625[(2)] = null);

(statearr_24594_24625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (17))){
var inst_24542 = (state_24576[(7)]);
var inst_24546 = cljs.core.chunk_first.call(null,inst_24542);
var inst_24547 = cljs.core.chunk_rest.call(null,inst_24542);
var inst_24548 = cljs.core.count.call(null,inst_24546);
var inst_24528 = inst_24547;
var inst_24529 = inst_24546;
var inst_24530 = inst_24548;
var inst_24531 = (0);
var state_24576__$1 = (function (){var statearr_24595 = state_24576;
(statearr_24595[(8)] = inst_24528);

(statearr_24595[(10)] = inst_24531);

(statearr_24595[(11)] = inst_24530);

(statearr_24595[(12)] = inst_24529);

return statearr_24595;
})();
var statearr_24596_24626 = state_24576__$1;
(statearr_24596_24626[(2)] = null);

(statearr_24596_24626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (3))){
var inst_24574 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24576__$1,inst_24574);
} else {
if((state_val_24577 === (12))){
var inst_24562 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24597_24627 = state_24576__$1;
(statearr_24597_24627[(2)] = inst_24562);

(statearr_24597_24627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (2))){
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24576__$1,(4),in$);
} else {
if((state_val_24577 === (23))){
var inst_24570 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24598_24628 = state_24576__$1;
(statearr_24598_24628[(2)] = inst_24570);

(statearr_24598_24628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (19))){
var inst_24557 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24599_24629 = state_24576__$1;
(statearr_24599_24629[(2)] = inst_24557);

(statearr_24599_24629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (11))){
var inst_24528 = (state_24576[(8)]);
var inst_24542 = (state_24576[(7)]);
var inst_24542__$1 = cljs.core.seq.call(null,inst_24528);
var state_24576__$1 = (function (){var statearr_24600 = state_24576;
(statearr_24600[(7)] = inst_24542__$1);

return statearr_24600;
})();
if(inst_24542__$1){
var statearr_24601_24630 = state_24576__$1;
(statearr_24601_24630[(1)] = (14));

} else {
var statearr_24602_24631 = state_24576__$1;
(statearr_24602_24631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (9))){
var inst_24564 = (state_24576[(2)]);
var inst_24565 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24576__$1 = (function (){var statearr_24603 = state_24576;
(statearr_24603[(15)] = inst_24564);

return statearr_24603;
})();
if(cljs.core.truth_(inst_24565)){
var statearr_24604_24632 = state_24576__$1;
(statearr_24604_24632[(1)] = (21));

} else {
var statearr_24605_24633 = state_24576__$1;
(statearr_24605_24633[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (5))){
var inst_24520 = cljs.core.async.close_BANG_.call(null,out);
var state_24576__$1 = state_24576;
var statearr_24606_24634 = state_24576__$1;
(statearr_24606_24634[(2)] = inst_24520);

(statearr_24606_24634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (14))){
var inst_24542 = (state_24576[(7)]);
var inst_24544 = cljs.core.chunked_seq_QMARK_.call(null,inst_24542);
var state_24576__$1 = state_24576;
if(inst_24544){
var statearr_24607_24635 = state_24576__$1;
(statearr_24607_24635[(1)] = (17));

} else {
var statearr_24608_24636 = state_24576__$1;
(statearr_24608_24636[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (16))){
var inst_24560 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24609_24637 = state_24576__$1;
(statearr_24609_24637[(2)] = inst_24560);

(statearr_24609_24637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (10))){
var inst_24531 = (state_24576[(10)]);
var inst_24529 = (state_24576[(12)]);
var inst_24536 = cljs.core._nth.call(null,inst_24529,inst_24531);
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24576__$1,(13),out,inst_24536);
} else {
if((state_val_24577 === (18))){
var inst_24542 = (state_24576[(7)]);
var inst_24551 = cljs.core.first.call(null,inst_24542);
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24576__$1,(20),out,inst_24551);
} else {
if((state_val_24577 === (8))){
var inst_24531 = (state_24576[(10)]);
var inst_24530 = (state_24576[(11)]);
var inst_24533 = (inst_24531 < inst_24530);
var inst_24534 = inst_24533;
var state_24576__$1 = state_24576;
if(cljs.core.truth_(inst_24534)){
var statearr_24610_24638 = state_24576__$1;
(statearr_24610_24638[(1)] = (10));

} else {
var statearr_24611_24639 = state_24576__$1;
(statearr_24611_24639[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22919__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22919__auto____0 = (function (){
var statearr_24612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24612[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22919__auto__);

(statearr_24612[(1)] = (1));

return statearr_24612;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22919__auto____1 = (function (state_24576){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24613){if((e24613 instanceof Object)){
var ex__22922__auto__ = e24613;
var statearr_24614_24640 = state_24576;
(statearr_24614_24640[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24641 = state_24576;
state_24576 = G__24641;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22919__auto__ = function(state_24576){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22919__auto____1.call(this,state_24576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22919__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22919__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24615 = f__23016__auto__.call(null);
(statearr_24615[(6)] = c__23015__auto__);

return statearr_24615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));

return c__23015__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24643 = arguments.length;
switch (G__24643) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24646 = arguments.length;
switch (G__24646) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24649 = arguments.length;
switch (G__24649) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23015__auto___24696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24673){
var state_val_24674 = (state_24673[(1)]);
if((state_val_24674 === (7))){
var inst_24668 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24675_24697 = state_24673__$1;
(statearr_24675_24697[(2)] = inst_24668);

(statearr_24675_24697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (1))){
var inst_24650 = null;
var state_24673__$1 = (function (){var statearr_24676 = state_24673;
(statearr_24676[(7)] = inst_24650);

return statearr_24676;
})();
var statearr_24677_24698 = state_24673__$1;
(statearr_24677_24698[(2)] = null);

(statearr_24677_24698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (4))){
var inst_24653 = (state_24673[(8)]);
var inst_24653__$1 = (state_24673[(2)]);
var inst_24654 = (inst_24653__$1 == null);
var inst_24655 = cljs.core.not.call(null,inst_24654);
var state_24673__$1 = (function (){var statearr_24678 = state_24673;
(statearr_24678[(8)] = inst_24653__$1);

return statearr_24678;
})();
if(inst_24655){
var statearr_24679_24699 = state_24673__$1;
(statearr_24679_24699[(1)] = (5));

} else {
var statearr_24680_24700 = state_24673__$1;
(statearr_24680_24700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (6))){
var state_24673__$1 = state_24673;
var statearr_24681_24701 = state_24673__$1;
(statearr_24681_24701[(2)] = null);

(statearr_24681_24701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (3))){
var inst_24670 = (state_24673[(2)]);
var inst_24671 = cljs.core.async.close_BANG_.call(null,out);
var state_24673__$1 = (function (){var statearr_24682 = state_24673;
(statearr_24682[(9)] = inst_24670);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24673__$1,inst_24671);
} else {
if((state_val_24674 === (2))){
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24673__$1,(4),ch);
} else {
if((state_val_24674 === (11))){
var inst_24653 = (state_24673[(8)]);
var inst_24662 = (state_24673[(2)]);
var inst_24650 = inst_24653;
var state_24673__$1 = (function (){var statearr_24683 = state_24673;
(statearr_24683[(7)] = inst_24650);

(statearr_24683[(10)] = inst_24662);

return statearr_24683;
})();
var statearr_24684_24702 = state_24673__$1;
(statearr_24684_24702[(2)] = null);

(statearr_24684_24702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (9))){
var inst_24653 = (state_24673[(8)]);
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24673__$1,(11),out,inst_24653);
} else {
if((state_val_24674 === (5))){
var inst_24650 = (state_24673[(7)]);
var inst_24653 = (state_24673[(8)]);
var inst_24657 = cljs.core._EQ_.call(null,inst_24653,inst_24650);
var state_24673__$1 = state_24673;
if(inst_24657){
var statearr_24686_24703 = state_24673__$1;
(statearr_24686_24703[(1)] = (8));

} else {
var statearr_24687_24704 = state_24673__$1;
(statearr_24687_24704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (10))){
var inst_24665 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24688_24705 = state_24673__$1;
(statearr_24688_24705[(2)] = inst_24665);

(statearr_24688_24705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (8))){
var inst_24650 = (state_24673[(7)]);
var tmp24685 = inst_24650;
var inst_24650__$1 = tmp24685;
var state_24673__$1 = (function (){var statearr_24689 = state_24673;
(statearr_24689[(7)] = inst_24650__$1);

return statearr_24689;
})();
var statearr_24690_24706 = state_24673__$1;
(statearr_24690_24706[(2)] = null);

(statearr_24690_24706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24691[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24673){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__22922__auto__ = e24692;
var statearr_24693_24707 = state_24673;
(statearr_24693_24707[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24708 = state_24673;
state_24673 = G__24708;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24694 = f__23016__auto__.call(null);
(statearr_24694[(6)] = c__23015__auto___24696);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24710 = arguments.length;
switch (G__24710) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23015__auto___24776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24748){
var state_val_24749 = (state_24748[(1)]);
if((state_val_24749 === (7))){
var inst_24744 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24750_24777 = state_24748__$1;
(statearr_24750_24777[(2)] = inst_24744);

(statearr_24750_24777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (1))){
var inst_24711 = (new Array(n));
var inst_24712 = inst_24711;
var inst_24713 = (0);
var state_24748__$1 = (function (){var statearr_24751 = state_24748;
(statearr_24751[(7)] = inst_24713);

(statearr_24751[(8)] = inst_24712);

return statearr_24751;
})();
var statearr_24752_24778 = state_24748__$1;
(statearr_24752_24778[(2)] = null);

(statearr_24752_24778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (4))){
var inst_24716 = (state_24748[(9)]);
var inst_24716__$1 = (state_24748[(2)]);
var inst_24717 = (inst_24716__$1 == null);
var inst_24718 = cljs.core.not.call(null,inst_24717);
var state_24748__$1 = (function (){var statearr_24753 = state_24748;
(statearr_24753[(9)] = inst_24716__$1);

return statearr_24753;
})();
if(inst_24718){
var statearr_24754_24779 = state_24748__$1;
(statearr_24754_24779[(1)] = (5));

} else {
var statearr_24755_24780 = state_24748__$1;
(statearr_24755_24780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (15))){
var inst_24738 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24756_24781 = state_24748__$1;
(statearr_24756_24781[(2)] = inst_24738);

(statearr_24756_24781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (13))){
var state_24748__$1 = state_24748;
var statearr_24757_24782 = state_24748__$1;
(statearr_24757_24782[(2)] = null);

(statearr_24757_24782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (6))){
var inst_24713 = (state_24748[(7)]);
var inst_24734 = (inst_24713 > (0));
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24734)){
var statearr_24758_24783 = state_24748__$1;
(statearr_24758_24783[(1)] = (12));

} else {
var statearr_24759_24784 = state_24748__$1;
(statearr_24759_24784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (3))){
var inst_24746 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24748__$1,inst_24746);
} else {
if((state_val_24749 === (12))){
var inst_24712 = (state_24748[(8)]);
var inst_24736 = cljs.core.vec.call(null,inst_24712);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24748__$1,(15),out,inst_24736);
} else {
if((state_val_24749 === (2))){
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24748__$1,(4),ch);
} else {
if((state_val_24749 === (11))){
var inst_24728 = (state_24748[(2)]);
var inst_24729 = (new Array(n));
var inst_24712 = inst_24729;
var inst_24713 = (0);
var state_24748__$1 = (function (){var statearr_24760 = state_24748;
(statearr_24760[(7)] = inst_24713);

(statearr_24760[(8)] = inst_24712);

(statearr_24760[(10)] = inst_24728);

return statearr_24760;
})();
var statearr_24761_24785 = state_24748__$1;
(statearr_24761_24785[(2)] = null);

(statearr_24761_24785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (9))){
var inst_24712 = (state_24748[(8)]);
var inst_24726 = cljs.core.vec.call(null,inst_24712);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24748__$1,(11),out,inst_24726);
} else {
if((state_val_24749 === (5))){
var inst_24716 = (state_24748[(9)]);
var inst_24713 = (state_24748[(7)]);
var inst_24712 = (state_24748[(8)]);
var inst_24721 = (state_24748[(11)]);
var inst_24720 = (inst_24712[inst_24713] = inst_24716);
var inst_24721__$1 = (inst_24713 + (1));
var inst_24722 = (inst_24721__$1 < n);
var state_24748__$1 = (function (){var statearr_24762 = state_24748;
(statearr_24762[(12)] = inst_24720);

(statearr_24762[(11)] = inst_24721__$1);

return statearr_24762;
})();
if(cljs.core.truth_(inst_24722)){
var statearr_24763_24786 = state_24748__$1;
(statearr_24763_24786[(1)] = (8));

} else {
var statearr_24764_24787 = state_24748__$1;
(statearr_24764_24787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (14))){
var inst_24741 = (state_24748[(2)]);
var inst_24742 = cljs.core.async.close_BANG_.call(null,out);
var state_24748__$1 = (function (){var statearr_24766 = state_24748;
(statearr_24766[(13)] = inst_24741);

return statearr_24766;
})();
var statearr_24767_24788 = state_24748__$1;
(statearr_24767_24788[(2)] = inst_24742);

(statearr_24767_24788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (10))){
var inst_24732 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24768_24789 = state_24748__$1;
(statearr_24768_24789[(2)] = inst_24732);

(statearr_24768_24789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (8))){
var inst_24712 = (state_24748[(8)]);
var inst_24721 = (state_24748[(11)]);
var tmp24765 = inst_24712;
var inst_24712__$1 = tmp24765;
var inst_24713 = inst_24721;
var state_24748__$1 = (function (){var statearr_24769 = state_24748;
(statearr_24769[(7)] = inst_24713);

(statearr_24769[(8)] = inst_24712__$1);

return statearr_24769;
})();
var statearr_24770_24790 = state_24748__$1;
(statearr_24770_24790[(2)] = null);

(statearr_24770_24790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24771[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24771[(1)] = (1));

return statearr_24771;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24748){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24772){if((e24772 instanceof Object)){
var ex__22922__auto__ = e24772;
var statearr_24773_24791 = state_24748;
(statearr_24773_24791[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24792 = state_24748;
state_24748 = G__24792;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24774 = f__23016__auto__.call(null);
(statearr_24774[(6)] = c__23015__auto___24776);

return statearr_24774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24794 = arguments.length;
switch (G__24794) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23015__auto___24871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23016__auto__ = (function (){var switch__22918__auto__ = (function (state_24839){
var state_val_24840 = (state_24839[(1)]);
if((state_val_24840 === (7))){
var inst_24835 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24841_24872 = state_24839__$1;
(statearr_24841_24872[(2)] = inst_24835);

(statearr_24841_24872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (1))){
var inst_24795 = [];
var inst_24796 = inst_24795;
var inst_24797 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24839__$1 = (function (){var statearr_24842 = state_24839;
(statearr_24842[(7)] = inst_24797);

(statearr_24842[(8)] = inst_24796);

return statearr_24842;
})();
var statearr_24843_24873 = state_24839__$1;
(statearr_24843_24873[(2)] = null);

(statearr_24843_24873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (4))){
var inst_24800 = (state_24839[(9)]);
var inst_24800__$1 = (state_24839[(2)]);
var inst_24801 = (inst_24800__$1 == null);
var inst_24802 = cljs.core.not.call(null,inst_24801);
var state_24839__$1 = (function (){var statearr_24844 = state_24839;
(statearr_24844[(9)] = inst_24800__$1);

return statearr_24844;
})();
if(inst_24802){
var statearr_24845_24874 = state_24839__$1;
(statearr_24845_24874[(1)] = (5));

} else {
var statearr_24846_24875 = state_24839__$1;
(statearr_24846_24875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (15))){
var inst_24796 = (state_24839[(8)]);
var inst_24827 = cljs.core.vec.call(null,inst_24796);
var state_24839__$1 = state_24839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24839__$1,(18),out,inst_24827);
} else {
if((state_val_24840 === (13))){
var inst_24822 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24847_24876 = state_24839__$1;
(statearr_24847_24876[(2)] = inst_24822);

(statearr_24847_24876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (6))){
var inst_24796 = (state_24839[(8)]);
var inst_24824 = inst_24796.length;
var inst_24825 = (inst_24824 > (0));
var state_24839__$1 = state_24839;
if(cljs.core.truth_(inst_24825)){
var statearr_24848_24877 = state_24839__$1;
(statearr_24848_24877[(1)] = (15));

} else {
var statearr_24849_24878 = state_24839__$1;
(statearr_24849_24878[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (17))){
var inst_24832 = (state_24839[(2)]);
var inst_24833 = cljs.core.async.close_BANG_.call(null,out);
var state_24839__$1 = (function (){var statearr_24850 = state_24839;
(statearr_24850[(10)] = inst_24832);

return statearr_24850;
})();
var statearr_24851_24879 = state_24839__$1;
(statearr_24851_24879[(2)] = inst_24833);

(statearr_24851_24879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (3))){
var inst_24837 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24839__$1,inst_24837);
} else {
if((state_val_24840 === (12))){
var inst_24796 = (state_24839[(8)]);
var inst_24815 = cljs.core.vec.call(null,inst_24796);
var state_24839__$1 = state_24839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24839__$1,(14),out,inst_24815);
} else {
if((state_val_24840 === (2))){
var state_24839__$1 = state_24839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24839__$1,(4),ch);
} else {
if((state_val_24840 === (11))){
var inst_24804 = (state_24839[(11)]);
var inst_24800 = (state_24839[(9)]);
var inst_24796 = (state_24839[(8)]);
var inst_24812 = inst_24796.push(inst_24800);
var tmp24852 = inst_24796;
var inst_24796__$1 = tmp24852;
var inst_24797 = inst_24804;
var state_24839__$1 = (function (){var statearr_24853 = state_24839;
(statearr_24853[(12)] = inst_24812);

(statearr_24853[(7)] = inst_24797);

(statearr_24853[(8)] = inst_24796__$1);

return statearr_24853;
})();
var statearr_24854_24880 = state_24839__$1;
(statearr_24854_24880[(2)] = null);

(statearr_24854_24880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (9))){
var inst_24797 = (state_24839[(7)]);
var inst_24808 = cljs.core.keyword_identical_QMARK_.call(null,inst_24797,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_24839__$1 = state_24839;
var statearr_24855_24881 = state_24839__$1;
(statearr_24855_24881[(2)] = inst_24808);

(statearr_24855_24881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (5))){
var inst_24804 = (state_24839[(11)]);
var inst_24797 = (state_24839[(7)]);
var inst_24805 = (state_24839[(13)]);
var inst_24800 = (state_24839[(9)]);
var inst_24804__$1 = f.call(null,inst_24800);
var inst_24805__$1 = cljs.core._EQ_.call(null,inst_24804__$1,inst_24797);
var state_24839__$1 = (function (){var statearr_24856 = state_24839;
(statearr_24856[(11)] = inst_24804__$1);

(statearr_24856[(13)] = inst_24805__$1);

return statearr_24856;
})();
if(inst_24805__$1){
var statearr_24857_24882 = state_24839__$1;
(statearr_24857_24882[(1)] = (8));

} else {
var statearr_24858_24883 = state_24839__$1;
(statearr_24858_24883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (14))){
var inst_24804 = (state_24839[(11)]);
var inst_24800 = (state_24839[(9)]);
var inst_24817 = (state_24839[(2)]);
var inst_24818 = [];
var inst_24819 = inst_24818.push(inst_24800);
var inst_24796 = inst_24818;
var inst_24797 = inst_24804;
var state_24839__$1 = (function (){var statearr_24859 = state_24839;
(statearr_24859[(14)] = inst_24819);

(statearr_24859[(7)] = inst_24797);

(statearr_24859[(8)] = inst_24796);

(statearr_24859[(15)] = inst_24817);

return statearr_24859;
})();
var statearr_24860_24884 = state_24839__$1;
(statearr_24860_24884[(2)] = null);

(statearr_24860_24884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (16))){
var state_24839__$1 = state_24839;
var statearr_24861_24885 = state_24839__$1;
(statearr_24861_24885[(2)] = null);

(statearr_24861_24885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (10))){
var inst_24810 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
if(cljs.core.truth_(inst_24810)){
var statearr_24862_24886 = state_24839__$1;
(statearr_24862_24886[(1)] = (11));

} else {
var statearr_24863_24887 = state_24839__$1;
(statearr_24863_24887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (18))){
var inst_24829 = (state_24839[(2)]);
var state_24839__$1 = state_24839;
var statearr_24864_24888 = state_24839__$1;
(statearr_24864_24888[(2)] = inst_24829);

(statearr_24864_24888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24840 === (8))){
var inst_24805 = (state_24839[(13)]);
var state_24839__$1 = state_24839;
var statearr_24865_24889 = state_24839__$1;
(statearr_24865_24889[(2)] = inst_24805);

(statearr_24865_24889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__22919__auto__ = null;
var cljs$core$async$state_machine__22919__auto____0 = (function (){
var statearr_24866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24866[(0)] = cljs$core$async$state_machine__22919__auto__);

(statearr_24866[(1)] = (1));

return statearr_24866;
});
var cljs$core$async$state_machine__22919__auto____1 = (function (state_24839){
while(true){
var ret_value__22920__auto__ = (function (){try{while(true){
var result__22921__auto__ = switch__22918__auto__.call(null,state_24839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22921__auto__;
}
break;
}
}catch (e24867){if((e24867 instanceof Object)){
var ex__22922__auto__ = e24867;
var statearr_24868_24890 = state_24839;
(statearr_24868_24890[(5)] = ex__22922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24891 = state_24839;
state_24839 = G__24891;
continue;
} else {
return ret_value__22920__auto__;
}
break;
}
});
cljs$core$async$state_machine__22919__auto__ = function(state_24839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22919__auto____1.call(this,state_24839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22919__auto____0;
cljs$core$async$state_machine__22919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22919__auto____1;
return cljs$core$async$state_machine__22919__auto__;
})()
})();
var state__23017__auto__ = (function (){var statearr_24869 = f__23016__auto__.call(null);
(statearr_24869[(6)] = c__23015__auto___24871);

return statearr_24869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23017__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
