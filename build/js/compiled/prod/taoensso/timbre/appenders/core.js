// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18641 = arguments.length;
var i__4819__auto___18642 = (0);
while(true){
if((i__4819__auto___18642 < len__4818__auto___18641)){
args__4824__auto__.push((arguments[i__4819__auto___18642]));

var G__18643 = (i__4819__auto___18642 + (1));
i__4819__auto___18642 = G__18643;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__18636){
var vec__18637 = p__18636;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18637,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,(function (data){
var map__18640 = data;
var map__18640__$1 = cljs.core.__destructure_map(map__18640);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18640__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
})], null);
}));

(taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq18635){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18635));
}));

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   Use ^:meta {:raw-console? true} as first argument to logging call if
 *   you want args sent to console in a raw format enabling console-based
 *   pretty-printing of JS objects, etc. E.g.:
 * 
 *     (info                             my-js-obj) ; Send string   to console
 *     (info ^:meta {:raw-console? true} my-js-obj) ; Send raw args to console
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *     `/taoensso/timbre/appenders/core\.js$`
 *     `/taoensso/timbre\.js$`
 *     `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18652 = arguments.length;
var i__4819__auto___18653 = (0);
while(true){
if((i__4819__auto___18653 < len__4818__auto___18652)){
args__4824__auto__.push((arguments[i__4819__auto___18653]));

var G__18654 = (i__4819__auto___18653 + (1));
i__4819__auto___18653 = G__18654;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__18645){
var vec__18646 = p__18645;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18646,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,(((!((typeof console !== 'undefined'))))?(function (data){
return null;
}):(function (){var level__GT_logger = (function (level){
var or__4212__auto__ = (function (){var G__18649 = level;
var G__18649__$1 = (((G__18649 instanceof cljs.core.Keyword))?G__18649.fqn:null);
switch (G__18649__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18649__$1)].join('')));

}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return console.log;
}
});
return (function (data){
var temp__5753__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5753__auto__)){
var logger = temp__5753__auto__;
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$raw_DASH_console_QMARK_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
var output = (function (){var G__18651 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_QMARK_err,null], 0));
var fexpr__18650 = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__18650.cljs$core$IFn$_invoke$arity$1 ? fexpr__18650.cljs$core$IFn$_invoke$arity$1(G__18651) : fexpr__18650.call(null,G__18651));
})();
var args = (function (){var vargs = cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data);
var temp__5751__auto__ = cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5751__auto__)){
var err = temp__5751__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
})())], null);
}));

(taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq18644){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18644));
}));

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
