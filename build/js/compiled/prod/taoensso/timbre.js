// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.i18n.DateTimeFormat');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(126),(2)], null));
} else {
taoensso.encore.assert_min_encore_version(2.126);
}
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pattern,cljs.core.cst$kw$iso8601], null);
/**
 * Default (fn [data]) -> string output fn.
 *  Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__19470 = arguments.length;
switch (G__19470) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__19471 = opts;
var map__19471__$1 = cljs.core.__destructure_map(map__19471);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19471__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19471__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__19472 = data;
var map__19472__$1 = cljs.core.__destructure_map(map__19472);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$_QMARK_file);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,cljs.core.cst$kw$_QMARK_line);
return [(function (){var temp__5753__auto__ = cljs.core.force(timestamp_);
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," "].join('');
} else {
return null;
}
})(),clojure.string.upper_case(cljs.core.name(level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return [taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})())].join('');
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [appender-data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn      default-output-fn ; (fn [appender-data]) -> string
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_filter,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$timestamp_DASH_opts,taoensso.timbre.default_timestamp_opts,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__19474 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__19474) : taoensso.timbre.console_appender.call(null,G__19474));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$println,(function (){var G__19475 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__19475) : taoensso.timbre.println_appender.call(null,G__19475));
})()], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This map controls all Timbre behaviour including:
 *  - When to log (via level and namespace filtering)
 *  - How  to log (which appenders to use)
 *  - What to log (config to control how data sent to appenders
 *                 will be formatted to output string)
 * 
 *   See `default-config` for default value (and example config).
 * 
 *   Modify this config with `binding`, `alter-var-root`, or with utils:
 *     `set-level!`,         `with-level`,
 *    `set-config!`,        `with-config`,
 *  `merge-config!`, `with-merged-config`.
 * 
 *   MAIN OPTIONS
 * 
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set the min-level based on the namespace
 *    by providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [appender-data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [appender-data]) -> string, see `default-output-fn`
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop after exceeding given maximum number
 *                       ; of calls within given rolling window/s.
 *                       ; e.g. [[100 (encore/ms :mins 1)] [1000 (encore/ms :hours 1)]]
 *                       ; will limit noop after:
 *                       ;   - >100  calls in 1 rolling minute, or
 *                       ;   - >1000 calls in 1 rolling hour
 * 
 *      :output-fn       ; Optional override for inherited (fn [appender-data]) -> string
 *      :timestamp-opts  ; Optional override for inherited config map
 *      :fn              ; (fn [appender-data]) -> side-effects, with keys described below
 * 
 *   APPENDER DATA
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire active config map
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :spying?         ; Is call occuring via the `spy` macro?
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as edn)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as edn)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as edn)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as edn)
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
var ret__4867__auto___19480 = (function (){
taoensso.timbre.with_config = (function taoensso$timbre$with_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19481 = arguments.length;
var i__4819__auto___19482 = (0);
while(true){
if((i__4819__auto___19482 < len__4818__auto___19481)){
args__4824__auto__.push((arguments[i__4819__auto___19482]));

var G__19483 = (i__4819__auto___19482 + (1));
i__4819__auto___19482 = G__19483;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),(new cljs.core.List(null,config,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_config.cljs$lang$applyTo = (function (seq19476){
var G__19477 = cljs.core.first(seq19476);
var seq19476__$1 = cljs.core.next(seq19476);
var G__19478 = cljs.core.first(seq19476__$1);
var seq19476__$2 = cljs.core.next(seq19476__$1);
var G__19479 = cljs.core.first(seq19476__$2);
var seq19476__$3 = cljs.core.next(seq19476__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19477,G__19478,G__19479,seq19476__$3);
}));

return null;
})()
;
(taoensso.timbre.with_config.cljs$lang$macro = true);

var ret__4867__auto___19488 = (function (){
taoensso.timbre.with_merged_config = (function taoensso$timbre$with_merged_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19489 = arguments.length;
var i__4819__auto___19490 = (0);
while(true){
if((i__4819__auto___19490 < len__4818__auto___19489)){
args__4824__auto__.push((arguments[i__4819__auto___19490]));

var G__19491 = (i__4819__auto___19490 + (1));
i__4819__auto___19490 = G__19491;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_nested_DASH_merge,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,config,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_merged_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_merged_config.cljs$lang$applyTo = (function (seq19484){
var G__19485 = cljs.core.first(seq19484);
var seq19484__$1 = cljs.core.next(seq19484);
var G__19486 = cljs.core.first(seq19484__$1);
var seq19484__$2 = cljs.core.next(seq19484__$1);
var G__19487 = cljs.core.first(seq19484__$2);
var seq19484__$3 = cljs.core.next(seq19484__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19485,G__19486,G__19487,seq19484__$3);
}));

return null;
})()
;
(taoensso.timbre.with_merged_config.cljs$lang$macro = true);

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
var G__19492 = (function (_old){
return m;
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__19492) : taoensso.timbre.swap_config_BANG_.call(null,G__19492));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
var G__19493 = (function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__19493) : taoensso.timbre.swap_config_BANG_.call(null,G__19493));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19496 = arguments.length;
var i__4819__auto___19497 = (0);
while(true){
if((i__4819__auto___19497 < len__4818__auto___19496)){
args__4824__auto__.push((arguments[i__4819__auto___19497]));

var G__19498 = (i__4819__auto___19497 + (1));
i__4819__auto___19497 = G__19498;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq19494){
var G__19495 = cljs.core.first(seq19494);
var seq19494__$1 = cljs.core.next(seq19494);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19495,seq19494__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$min_DASH_level,level);
}));
});
var ret__4867__auto___19503 = (function (){
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19504 = arguments.length;
var i__4819__auto___19505 = (0);
while(true){
if((i__4819__auto___19505 < len__4818__auto___19504)){
args__4824__auto__.push((arguments[i__4819__auto___19505]));

var G__19506 = (i__4819__auto___19505 + (1));
i__4819__auto___19505 = G__19506;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assoc,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$min_DASH_level,null,(1),null)),(new cljs.core.List(null,level,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq19499){
var G__19500 = cljs.core.first(seq19499);
var seq19499__$1 = cljs.core.next(seq19499);
var G__19501 = cljs.core.first(seq19499__$1);
var seq19499__$2 = cljs.core.next(seq19499__$1);
var G__19502 = cljs.core.first(seq19499__$2);
var seq19499__$3 = cljs.core.next(seq19499__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19500,G__19501,G__19502,seq19499__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);

var err_19509 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_19510 = (function (p1__19507_SHARP_){
var G__19508 = p1__19507_SHARP_;
var G__19508__$1 = (((G__19508 instanceof cljs.core.Keyword))?G__19508.fqn:null);
switch (G__19508__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_19510(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_19510(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_19509,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4212__auto__ = level__GT_int_19510(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_19509,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
var valid_level__GT_int_19512 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_19512.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_19512.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_19512.call(null,x)) >= (valid_level__GT_int_19512.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_19512.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_19512.call(null,y)));
});
var fn_QMARK__19518 = cljs.core.fn_QMARK_;
var compile_19519 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__19520 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__19513 = (compile_19519.cljs$core$IFn$_invoke$arity$1 ? compile_19519.cljs$core$IFn$_invoke$arity$1(x) : compile_19519.call(null,x));
return (fexpr__19513.cljs$core$IFn$_invoke$arity$1 ? fexpr__19513.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__19513.call(null,ns));
}));
var conform_QMARK__19521 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__19518.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__19518.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__19518.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return (conform_QMARK__STAR__19520.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__19520.cljs$core$IFn$_invoke$arity$2(ns_filter,ns) : conform_QMARK__STAR__19520.call(null,ns_filter,ns));
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__19521(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome((function (p__19514){
var vec__19515 = p__19514;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19515,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19515,(1),null);
if(cljs.core.truth_((conform_QMARK__STAR__19520.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__19520.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns) : conform_QMARK__STAR__19520.call(null,ns_pattern,ns)))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_19523 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_19524 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__19522 = (function (){var or__4212__auto__ = ((cljs.core.vector_QMARK_(x))?(ns__GT__QMARK_min_level_19524.cljs$core$IFn$_invoke$arity$2 ? ns__GT__QMARK_min_level_19524.cljs$core$IFn$_invoke$arity$2(x,ns) : ns__GT__QMARK_min_level_19524.call(null,x,ns)):x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
})();
return (valid_level_19523.cljs$core$IFn$_invoke$arity$1 ? valid_level_19523.cljs$core$IFn$_invoke$arity$1(G__19522) : valid_level_19523.call(null,G__19522));
});
var leglist_19526 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__19525 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__19525.cljs$core$IFn$_invoke$arity$1 ? fexpr__19525.cljs$core$IFn$_invoke$arity$1(x) : fexpr__19525.call(null,x));
})())){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_19526(ns_whitelist);
var ns_blacklist__$1 = leglist_19526(ns_blacklist);
if(cljs.core.truth_((function (){var or__4212__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,ns_whitelist__$1,cljs.core.cst$kw$deny,ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__19534 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__19535 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_19536 = taoensso.timbre.get_min_level;
var legacy_ns_filter_19537 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__19528 = arguments.length;
switch (G__19528) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$report,level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$report,level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$report,level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__4212__auto__ = _QMARK_config;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = (function (){var G__19529 = default_min_level;
var G__19530 = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$min_DASH_level);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$level);
}
})();
var G__19531 = _QMARK_ns_str;
return (get_min_level_19536.cljs$core$IFn$_invoke$arity$3 ? get_min_level_19536.cljs$core$IFn$_invoke$arity$3(G__19529,G__19530,G__19531) : get_min_level_19536.call(null,G__19529,G__19530,G__19531));
})();
if(cljs.core.truth_((level_GT__EQ__19534.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__19534.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__19534.call(null,level,min_level)))){
var temp__5751__auto__ = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_filter);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__19532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__19533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
return (legacy_ns_filter_19537.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_19537.cljs$core$IFn$_invoke$arity$2(G__19532,G__19533) : legacy_ns_filter_19537.call(null,G__19532,G__19533));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ns_filter = temp__5751__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__19535.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__19535.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__19535.call(null,ns_filter,_QMARK_ns_str)))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize((function (appender_id,specs){
return taoensso.encore.limiter(specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
var ret__4867__auto___19543 = (function (){
/**
 * Executes body so that given arbitrary data will be passed (as `:context`)
 *   to appenders for any enclosed logging calls.
 * 
 *   (with-context
 *  {:user-name "Stu"} ; Will be incl. in data dispatched to appenders
 *  (info "User request"))
 * 
 *   See also `with-context+`.
 */
taoensso.timbre.with_context = (function taoensso$timbre$with_context(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19544 = arguments.length;
var i__4819__auto___19545 = (0);
while(true){
if((i__4819__auto___19545 < len__4818__auto___19544)){
args__4824__auto__.push((arguments[i__4819__auto___19545]));

var G__19546 = (i__4819__auto___19545 + (1));
i__4819__auto___19545 = G__19546;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_context_STAR_,null,(1),null)),(new cljs.core.List(null,context,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context.cljs$lang$applyTo = (function (seq19539){
var G__19540 = cljs.core.first(seq19539);
var seq19539__$1 = cljs.core.next(seq19539);
var G__19541 = cljs.core.first(seq19539__$1);
var seq19539__$2 = cljs.core.next(seq19539__$1);
var G__19542 = cljs.core.first(seq19539__$2);
var seq19539__$3 = cljs.core.next(seq19539__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19540,G__19541,G__19542,seq19539__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context.cljs$lang$macro = true);

var ret__4867__auto___19551 = (function (){
/**
 * Like `with-context`, but merges given context into current context.
 */
taoensso.timbre.with_context_PLUS_ = (function taoensso$timbre$with_context_PLUS_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19552 = arguments.length;
var i__4819__auto___19553 = (0);
while(true){
if((i__4819__auto___19553 < len__4818__auto___19552)){
args__4824__auto__.push((arguments[i__4819__auto___19553]));

var G__19554 = (i__4819__auto___19553 + (1));
i__4819__auto___19553 = G__19554;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_context_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_context_STAR_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,context,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_context_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context_PLUS_.cljs$lang$applyTo = (function (seq19547){
var G__19548 = cljs.core.first(seq19547);
var seq19547__$1 = cljs.core.next(seq19547);
var G__19549 = cljs.core.first(seq19547__$1);
var seq19547__$2 = cljs.core.next(seq19547__$1);
var G__19550 = cljs.core.first(seq19547__$2);
var seq19547__$3 = cljs.core.next(seq19547__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19548,G__19549,G__19550,seq19547__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context_PLUS_.cljs$lang$macro = true);

/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__19558 = _QMARK_err;
var G__19559 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__19558,G__19559) : taoensso.encore.kw_identical_QMARK_.call(null,G__19558,G__19559));
})();
var fmt_msg_QMARK_ = (function (){var G__19560 = msg_type;
var G__19561 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__19560,G__19561) : taoensso.encore.kw_identical_QMARK_.call(null,G__19560,G__19561));
})();
var vec__19555 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19555,(0),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__4210__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__19562 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19562,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.map_QMARK_(v0);
if(and__4210__auto__){
return cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__4210__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__4212__auto__ = cljs.core.cst$kw$err.cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,cljs.core.cst$kw$err);
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__19565 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19565,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__19568 = timestamp_opts;
var map__19568__$1 = cljs.core.__destructure_map(map__19568);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19568__$1,cljs.core.cst$kw$pattern);
if(cljs.core.truth_((function (){var G__19569 = pattern;
var G__19570 = cljs.core.cst$kw$iso8601;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__19569,G__19570) : taoensso.encore.kw_identical_QMARK_.call(null,G__19569,G__19570));
})())){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__19572 = arguments.length;
switch (G__19572) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$report,level,_QMARK_ns_str,config)){
var instant_19588 = (new Date());
var context_19589 = taoensso.timbre._STAR_context_STAR_;
var vargs_19590 = cljs.core.deref(vargs_);
var vec__19573_19591 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_19590);
var _QMARK_err_19592__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19573_19591,(0),null);
var _QMARK_meta_19593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19573_19591,(1),null);
var _QMARK_msg_fmt_19594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19573_19591,(2),null);
var vargs_19595__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19573_19591,(3),null);
var data_19596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4212__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$spying_QMARK_,cljs.core.cst$kw$config,cljs.core.cst$kw$vargs,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_,cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$_QMARK_msg_DASH_fmt],[instant_19588,spying_QMARK_,config,vargs_19595__$1,_QMARK_file,(function (){var fexpr__19576 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__19576.cljs$core$IFn$_invoke$arity$1 ? fexpr__19576.cljs$core$IFn$_invoke$arity$1(level) : fexpr__19576.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_19592__$1,context_19589,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_19592__$1;
}),null)),_QMARK_meta_19593,_QMARK_msg_fmt_19594]));
var _QMARK_data_19597 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_19596,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__5753__auto___19598 = _QMARK_data_19597;
if(cljs.core.truth_(temp__5753__auto___19598)){
var data_19599__$1 = temp__5753__auto___19598;
var map__19577_19600 = data_19599__$1;
var map__19577_19601__$1 = cljs.core.__destructure_map(map__19577_19600);
var vargs_19602__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19577_19601__$1,cljs.core.cst$kw$vargs);
var data_19603__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_19599__$1,cljs.core.cst$kw$vargs_,(new cljs.core.Delay((function (){
return vargs_19602__$2;
}),null)));
var data_19604__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_19603__$2,cljs.core.cst$kw$msg_,(new cljs.core.Delay((function (){
var G__19578 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19578)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__19578)){
return taoensso.timbre.str_join(vargs_19602__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__19578)){
if(typeof _QMARK_msg_fmt_19594 === 'string'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$location,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_19594,vargs_19602__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19578)].join('')));

}
}
}
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hash_,(new cljs.core.Delay((function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_19594,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_QMARK_meta_19593,cljs.core.cst$kw$hash,vargs_19602__$2)], null));
}),null))], 0));
var output_fn1_19605 = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
var timestamp_opts1_19606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$timestamp_DASH_opts));
var get_timestamp__19607 = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_19604__$3,cljs.core.cst$kw$instant));
}),null));
}));
cljs.core.reduce_kv((function (_,id,appender){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.cst$kw$enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__4210__auto__)){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$trace,level,_QMARK_ns_str,appender);
} else {
return and__4210__auto__;
}
})())){
var rate_limit_specs = cljs.core.cst$kw$rate_DASH_limit.cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__4212__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var rl_fn = (taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2(id,rate_limit_specs) : taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs));
return cljs.core.not((function (){var G__19579 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_19604__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__19579) : rl_fn.call(null,G__19579));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__19580 = appender;
var map__19580__$1 = cljs.core.__destructure_map(map__19580);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19580__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19580__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (f == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__19581 = f;
var G__19582 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__19581,G__19582) : taoensso.encore.kw_identical_QMARK_.call(null,G__19581,G__19582));
}
})())){
return output_fn1_19605;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = cljs.core.cst$kw$timestamp_DASH_opts.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (opts == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__19583 = opts;
var G__19584 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__19583,G__19584) : taoensso.encore.kw_identical_QMARK_.call(null,G__19583,G__19584));
}
})())){
return (get_timestamp__19607.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__19607.cljs$core$IFn$_invoke$arity$1(timestamp_opts1_19606) : get_timestamp__19607.call(null,timestamp_opts1_19606));
} else {
var G__19585 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(timestamp_opts1_19606,opts);
return (get_timestamp__19607.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__19607.cljs$core$IFn$_invoke$arity$1(G__19585) : get_timestamp__19607.call(null,G__19585));
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__19586 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_19604__$3,cljs.core.cst$kw$timestamp_,timestamp_);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__19586) : output_fn.call(null,G__19586));
}),null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_19604__$3,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_,cljs.core.cst$kw$timestamp_,timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5751__auto__ = cljs.core.cst$kw$middleware_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5751__auto__)){
var mfn = temp__5751__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$4) : mfn.call(null,data__$4));
} else {
return data__$4;
}
})();
var temp__5753__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5753__auto____$1)){
var data__$5 = temp__5753__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$5) : apfn.call(null,data__$5));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,cljs.core.cst$kw$appenders.cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(and_form));
});
var ret__4867__auto___19621 = (function (){
/**
 * Core low-level log macro. Useful for tooling, etc.
 * 
 *  * `level`    - must eval to a valid logging level
 *  * `msg-type` - must eval to e/o #{:p :f nil}
 *  * `opts`     - ks e/o #{:config :?err :?ns-str :?file :?line :?base-data :spying?}
 * 
 *   Supports compile-time elision when compile-time const vals
 *   provided for `level` and/or `?ns-str`.
 */
taoensso.timbre.log_BANG_ = (function taoensso$timbre$log_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19622 = arguments.length;
var i__4819__auto___19623 = (0);
while(true){
if((i__4819__auto___19623 < len__4818__auto___19622)){
args__4824__auto__.push((arguments[i__4819__auto___19623]));

var G__19624 = (i__4819__auto___19623 + (1));
i__4819__auto___19623 = G__19624;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((5) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((5)),(0),null)):null);
return taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4825__auto__);
});

(taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,msg_type,args,p__19614){
var vec__19615 = p__19614;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(0),null);
if((function (){var fexpr__19618 = (function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
});
return fexpr__19618(args);
})()){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",689,"([:or nil? sequential?] args)",args,null,null);
}

var map__19619 = opts;
var map__19619__$1 = cljs.core.__destructure_map(map__19619);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19619__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
var map__19620 = opts;
var map__19620__$1 = cljs.core.__destructure_map(map__19620);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19620__$1,cljs.core.cst$kw$config,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19620__$1,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$auto);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19620__$1,cljs.core.cst$kw$_QMARK_file,null);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19620__$1,cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form));
var _QMARK_base_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19620__$1,cljs.core.cst$kw$_QMARK_base_DASH_data);
var spying_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19620__$1,cljs.core.cst$kw$spying_QMARK_);
var _QMARK_file__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_file,"NO_SOURCE_PATH"))?_QMARK_file:null);
var callsite_id = cljs.core.hash(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,msg_type,args,_QMARK_ns_str,_QMARK_file__$1,_QMARK_line,cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,_QMARK_ns_str,null,(1),null)),(new cljs.core.List(null,_QMARK_file__$1,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,msg_type,null,(1),null)),(new cljs.core.List(null,_QMARK_err,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_delay,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,_QMARK_base_data,null,(1),null)),(new cljs.core.List(null,callsite_id,null,(1),null)),(new cljs.core.List(null,spying_QMARK_,null,(1),null))], 0))));

}));

(taoensso.timbre.log_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(taoensso.timbre.log_BANG_.cljs$lang$applyTo = (function (seq19608){
var G__19609 = cljs.core.first(seq19608);
var seq19608__$1 = cljs.core.next(seq19608);
var G__19610 = cljs.core.first(seq19608__$1);
var seq19608__$2 = cljs.core.next(seq19608__$1);
var G__19611 = cljs.core.first(seq19608__$2);
var seq19608__$3 = cljs.core.next(seq19608__$2);
var G__19612 = cljs.core.first(seq19608__$3);
var seq19608__$4 = cljs.core.next(seq19608__$3);
var G__19613 = cljs.core.first(seq19608__$4);
var seq19608__$5 = cljs.core.next(seq19608__$4);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19609,G__19610,G__19611,G__19612,G__19613,seq19608__$5);
}));

return null;
})()
;
(taoensso.timbre.log_BANG_.cljs$lang$macro = true);

var ret__4867__auto___19630 = (function (){
taoensso.timbre.log_STAR_ = (function taoensso$timbre$log_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19631 = arguments.length;
var i__4819__auto___19632 = (0);
while(true){
if((i__4819__auto___19632 < len__4818__auto___19631)){
args__4824__auto__.push((arguments[i__4819__auto___19632]));

var G__19633 = (i__4819__auto___19632 + (1));
i__4819__auto___19632 = G__19633;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form),cljs.core.cst$kw$config,config], null),null,(1),null))], 0))));
}));

(taoensso.timbre.log_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.log_STAR_.cljs$lang$applyTo = (function (seq19625){
var G__19626 = cljs.core.first(seq19625);
var seq19625__$1 = cljs.core.next(seq19625);
var G__19627 = cljs.core.first(seq19625__$1);
var seq19625__$2 = cljs.core.next(seq19625__$1);
var G__19628 = cljs.core.first(seq19625__$2);
var seq19625__$3 = cljs.core.next(seq19625__$2);
var G__19629 = cljs.core.first(seq19625__$3);
var seq19625__$4 = cljs.core.next(seq19625__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19626,G__19627,G__19628,G__19629,seq19625__$4);
}));

return null;
})()
;
(taoensso.timbre.log_STAR_.cljs$lang$macro = true);

var ret__4867__auto___19638 = (function (){
taoensso.timbre.log = (function taoensso$timbre$log(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19639 = arguments.length;
var i__4819__auto___19640 = (0);
while(true){
if((i__4819__auto___19640 < len__4818__auto___19639)){
args__4824__auto__.push((arguments[i__4819__auto___19640]));

var G__19641 = (i__4819__auto___19640 + (1));
i__4819__auto___19640 = G__19641;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.log.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.log.cljs$lang$applyTo = (function (seq19634){
var G__19635 = cljs.core.first(seq19634);
var seq19634__$1 = cljs.core.next(seq19634);
var G__19636 = cljs.core.first(seq19634__$1);
var seq19634__$2 = cljs.core.next(seq19634__$1);
var G__19637 = cljs.core.first(seq19634__$2);
var seq19634__$3 = cljs.core.next(seq19634__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19635,G__19636,G__19637,seq19634__$3);
}));

return null;
})()
;
(taoensso.timbre.log.cljs$lang$macro = true);

var ret__4867__auto___19645 = (function (){
taoensso.timbre.trace = (function taoensso$timbre$trace(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19646 = arguments.length;
var i__4819__auto___19647 = (0);
while(true){
if((i__4819__auto___19647 < len__4818__auto___19646)){
args__4824__auto__.push((arguments[i__4819__auto___19647]));

var G__19648 = (i__4819__auto___19647 + (1));
i__4819__auto___19647 = G__19648;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$trace,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.trace.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.trace.cljs$lang$applyTo = (function (seq19642){
var G__19643 = cljs.core.first(seq19642);
var seq19642__$1 = cljs.core.next(seq19642);
var G__19644 = cljs.core.first(seq19642__$1);
var seq19642__$2 = cljs.core.next(seq19642__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19643,G__19644,seq19642__$2);
}));

return null;
})()
;
(taoensso.timbre.trace.cljs$lang$macro = true);

var ret__4867__auto___19652 = (function (){
taoensso.timbre.debug = (function taoensso$timbre$debug(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19653 = arguments.length;
var i__4819__auto___19654 = (0);
while(true){
if((i__4819__auto___19654 < len__4818__auto___19653)){
args__4824__auto__.push((arguments[i__4819__auto___19654]));

var G__19655 = (i__4819__auto___19654 + (1));
i__4819__auto___19654 = G__19655;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.debug.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debug.cljs$lang$applyTo = (function (seq19649){
var G__19650 = cljs.core.first(seq19649);
var seq19649__$1 = cljs.core.next(seq19649);
var G__19651 = cljs.core.first(seq19649__$1);
var seq19649__$2 = cljs.core.next(seq19649__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19650,G__19651,seq19649__$2);
}));

return null;
})()
;
(taoensso.timbre.debug.cljs$lang$macro = true);

var ret__4867__auto___19659 = (function (){
taoensso.timbre.info = (function taoensso$timbre$info(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19660 = arguments.length;
var i__4819__auto___19661 = (0);
while(true){
if((i__4819__auto___19661 < len__4818__auto___19660)){
args__4824__auto__.push((arguments[i__4819__auto___19661]));

var G__19662 = (i__4819__auto___19661 + (1));
i__4819__auto___19661 = G__19662;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$info,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.info.cljs$lang$applyTo = (function (seq19656){
var G__19657 = cljs.core.first(seq19656);
var seq19656__$1 = cljs.core.next(seq19656);
var G__19658 = cljs.core.first(seq19656__$1);
var seq19656__$2 = cljs.core.next(seq19656__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19657,G__19658,seq19656__$2);
}));

return null;
})()
;
(taoensso.timbre.info.cljs$lang$macro = true);

var ret__4867__auto___19666 = (function (){
taoensso.timbre.warn = (function taoensso$timbre$warn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19667 = arguments.length;
var i__4819__auto___19668 = (0);
while(true){
if((i__4819__auto___19668 < len__4818__auto___19667)){
args__4824__auto__.push((arguments[i__4819__auto___19668]));

var G__19669 = (i__4819__auto___19668 + (1));
i__4819__auto___19668 = G__19669;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$warn,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warn.cljs$lang$applyTo = (function (seq19663){
var G__19664 = cljs.core.first(seq19663);
var seq19663__$1 = cljs.core.next(seq19663);
var G__19665 = cljs.core.first(seq19663__$1);
var seq19663__$2 = cljs.core.next(seq19663__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19664,G__19665,seq19663__$2);
}));

return null;
})()
;
(taoensso.timbre.warn.cljs$lang$macro = true);

var ret__4867__auto___19673 = (function (){
taoensso.timbre.error = (function taoensso$timbre$error(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19674 = arguments.length;
var i__4819__auto___19675 = (0);
while(true){
if((i__4819__auto___19675 < len__4818__auto___19674)){
args__4824__auto__.push((arguments[i__4819__auto___19675]));

var G__19676 = (i__4819__auto___19675 + (1));
i__4819__auto___19675 = G__19676;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.error.cljs$lang$applyTo = (function (seq19670){
var G__19671 = cljs.core.first(seq19670);
var seq19670__$1 = cljs.core.next(seq19670);
var G__19672 = cljs.core.first(seq19670__$1);
var seq19670__$2 = cljs.core.next(seq19670__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19671,G__19672,seq19670__$2);
}));

return null;
})()
;
(taoensso.timbre.error.cljs$lang$macro = true);

var ret__4867__auto___19680 = (function (){
taoensso.timbre.fatal = (function taoensso$timbre$fatal(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19681 = arguments.length;
var i__4819__auto___19682 = (0);
while(true){
if((i__4819__auto___19682 < len__4818__auto___19681)){
args__4824__auto__.push((arguments[i__4819__auto___19682]));

var G__19683 = (i__4819__auto___19682 + (1));
i__4819__auto___19682 = G__19683;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$fatal,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.fatal.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatal.cljs$lang$applyTo = (function (seq19677){
var G__19678 = cljs.core.first(seq19677);
var seq19677__$1 = cljs.core.next(seq19677);
var G__19679 = cljs.core.first(seq19677__$1);
var seq19677__$2 = cljs.core.next(seq19677__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19678,G__19679,seq19677__$2);
}));

return null;
})()
;
(taoensso.timbre.fatal.cljs$lang$macro = true);

var ret__4867__auto___19687 = (function (){
taoensso.timbre.report = (function taoensso$timbre$report(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19688 = arguments.length;
var i__4819__auto___19689 = (0);
while(true){
if((i__4819__auto___19689 < len__4818__auto___19688)){
args__4824__auto__.push((arguments[i__4819__auto___19689]));

var G__19690 = (i__4819__auto___19689 + (1));
i__4819__auto___19689 = G__19690;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$report,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.report.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.report.cljs$lang$applyTo = (function (seq19684){
var G__19685 = cljs.core.first(seq19684);
var seq19684__$1 = cljs.core.next(seq19684);
var G__19686 = cljs.core.first(seq19684__$1);
var seq19684__$2 = cljs.core.next(seq19684__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19685,G__19686,seq19684__$2);
}));

return null;
})()
;
(taoensso.timbre.report.cljs$lang$macro = true);

var ret__4867__auto___19696 = (function (){
taoensso.timbre.logf_STAR_ = (function taoensso$timbre$logf_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19697 = arguments.length;
var i__4819__auto___19698 = (0);
while(true){
if((i__4819__auto___19698 < len__4818__auto___19697)){
args__4824__auto__.push((arguments[i__4819__auto___19698]));

var G__19699 = (i__4819__auto___19698 + (1));
i__4819__auto___19698 = G__19699;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form),cljs.core.cst$kw$config,config], null),null,(1),null))], 0))));
}));

(taoensso.timbre.logf_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.logf_STAR_.cljs$lang$applyTo = (function (seq19691){
var G__19692 = cljs.core.first(seq19691);
var seq19691__$1 = cljs.core.next(seq19691);
var G__19693 = cljs.core.first(seq19691__$1);
var seq19691__$2 = cljs.core.next(seq19691__$1);
var G__19694 = cljs.core.first(seq19691__$2);
var seq19691__$3 = cljs.core.next(seq19691__$2);
var G__19695 = cljs.core.first(seq19691__$3);
var seq19691__$4 = cljs.core.next(seq19691__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19692,G__19693,G__19694,G__19695,seq19691__$4);
}));

return null;
})()
;
(taoensso.timbre.logf_STAR_.cljs$lang$macro = true);

var ret__4867__auto___19704 = (function (){
taoensso.timbre.logf = (function taoensso$timbre$logf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19705 = arguments.length;
var i__4819__auto___19706 = (0);
while(true){
if((i__4819__auto___19706 < len__4818__auto___19705)){
args__4824__auto__.push((arguments[i__4819__auto___19706]));

var G__19707 = (i__4819__auto___19706 + (1));
i__4819__auto___19706 = G__19707;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.logf.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.logf.cljs$lang$applyTo = (function (seq19700){
var G__19701 = cljs.core.first(seq19700);
var seq19700__$1 = cljs.core.next(seq19700);
var G__19702 = cljs.core.first(seq19700__$1);
var seq19700__$2 = cljs.core.next(seq19700__$1);
var G__19703 = cljs.core.first(seq19700__$2);
var seq19700__$3 = cljs.core.next(seq19700__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19701,G__19702,G__19703,seq19700__$3);
}));

return null;
})()
;
(taoensso.timbre.logf.cljs$lang$macro = true);

var ret__4867__auto___19711 = (function (){
taoensso.timbre.tracef = (function taoensso$timbre$tracef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19712 = arguments.length;
var i__4819__auto___19713 = (0);
while(true){
if((i__4819__auto___19713 < len__4818__auto___19712)){
args__4824__auto__.push((arguments[i__4819__auto___19713]));

var G__19714 = (i__4819__auto___19713 + (1));
i__4819__auto___19713 = G__19714;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$trace,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.tracef.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.tracef.cljs$lang$applyTo = (function (seq19708){
var G__19709 = cljs.core.first(seq19708);
var seq19708__$1 = cljs.core.next(seq19708);
var G__19710 = cljs.core.first(seq19708__$1);
var seq19708__$2 = cljs.core.next(seq19708__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19709,G__19710,seq19708__$2);
}));

return null;
})()
;
(taoensso.timbre.tracef.cljs$lang$macro = true);

var ret__4867__auto___19718 = (function (){
taoensso.timbre.debugf = (function taoensso$timbre$debugf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19719 = arguments.length;
var i__4819__auto___19720 = (0);
while(true){
if((i__4819__auto___19720 < len__4818__auto___19719)){
args__4824__auto__.push((arguments[i__4819__auto___19720]));

var G__19721 = (i__4819__auto___19720 + (1));
i__4819__auto___19720 = G__19721;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.debugf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debugf.cljs$lang$applyTo = (function (seq19715){
var G__19716 = cljs.core.first(seq19715);
var seq19715__$1 = cljs.core.next(seq19715);
var G__19717 = cljs.core.first(seq19715__$1);
var seq19715__$2 = cljs.core.next(seq19715__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19716,G__19717,seq19715__$2);
}));

return null;
})()
;
(taoensso.timbre.debugf.cljs$lang$macro = true);

var ret__4867__auto___19725 = (function (){
taoensso.timbre.infof = (function taoensso$timbre$infof(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19726 = arguments.length;
var i__4819__auto___19727 = (0);
while(true){
if((i__4819__auto___19727 < len__4818__auto___19726)){
args__4824__auto__.push((arguments[i__4819__auto___19727]));

var G__19728 = (i__4819__auto___19727 + (1));
i__4819__auto___19727 = G__19728;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$info,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.infof.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.infof.cljs$lang$applyTo = (function (seq19722){
var G__19723 = cljs.core.first(seq19722);
var seq19722__$1 = cljs.core.next(seq19722);
var G__19724 = cljs.core.first(seq19722__$1);
var seq19722__$2 = cljs.core.next(seq19722__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19723,G__19724,seq19722__$2);
}));

return null;
})()
;
(taoensso.timbre.infof.cljs$lang$macro = true);

var ret__4867__auto___19732 = (function (){
taoensso.timbre.warnf = (function taoensso$timbre$warnf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19733 = arguments.length;
var i__4819__auto___19734 = (0);
while(true){
if((i__4819__auto___19734 < len__4818__auto___19733)){
args__4824__auto__.push((arguments[i__4819__auto___19734]));

var G__19735 = (i__4819__auto___19734 + (1));
i__4819__auto___19734 = G__19735;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$warn,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.warnf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warnf.cljs$lang$applyTo = (function (seq19729){
var G__19730 = cljs.core.first(seq19729);
var seq19729__$1 = cljs.core.next(seq19729);
var G__19731 = cljs.core.first(seq19729__$1);
var seq19729__$2 = cljs.core.next(seq19729__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19730,G__19731,seq19729__$2);
}));

return null;
})()
;
(taoensso.timbre.warnf.cljs$lang$macro = true);

var ret__4867__auto___19739 = (function (){
taoensso.timbre.errorf = (function taoensso$timbre$errorf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19740 = arguments.length;
var i__4819__auto___19741 = (0);
while(true){
if((i__4819__auto___19741 < len__4818__auto___19740)){
args__4824__auto__.push((arguments[i__4819__auto___19741]));

var G__19742 = (i__4819__auto___19741 + (1));
i__4819__auto___19741 = G__19742;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.errorf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.errorf.cljs$lang$applyTo = (function (seq19736){
var G__19737 = cljs.core.first(seq19736);
var seq19736__$1 = cljs.core.next(seq19736);
var G__19738 = cljs.core.first(seq19736__$1);
var seq19736__$2 = cljs.core.next(seq19736__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19737,G__19738,seq19736__$2);
}));

return null;
})()
;
(taoensso.timbre.errorf.cljs$lang$macro = true);

var ret__4867__auto___19746 = (function (){
taoensso.timbre.fatalf = (function taoensso$timbre$fatalf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19747 = arguments.length;
var i__4819__auto___19748 = (0);
while(true){
if((i__4819__auto___19748 < len__4818__auto___19747)){
args__4824__auto__.push((arguments[i__4819__auto___19748]));

var G__19749 = (i__4819__auto___19748 + (1));
i__4819__auto___19748 = G__19749;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$fatal,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.fatalf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatalf.cljs$lang$applyTo = (function (seq19743){
var G__19744 = cljs.core.first(seq19743);
var seq19743__$1 = cljs.core.next(seq19743);
var G__19745 = cljs.core.first(seq19743__$1);
var seq19743__$2 = cljs.core.next(seq19743__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19744,G__19745,seq19743__$2);
}));

return null;
})()
;
(taoensso.timbre.fatalf.cljs$lang$macro = true);

var ret__4867__auto___19753 = (function (){
taoensso.timbre.reportf = (function taoensso$timbre$reportf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19754 = arguments.length;
var i__4819__auto___19755 = (0);
while(true){
if((i__4819__auto___19755 < len__4818__auto___19754)){
args__4824__auto__.push((arguments[i__4819__auto___19755]));

var G__19756 = (i__4819__auto___19755 + (1));
i__4819__auto___19755 = G__19756;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$report,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$f,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form)], null),null,(1),null))], 0))));
}));

(taoensso.timbre.reportf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.reportf.cljs$lang$applyTo = (function (seq19750){
var G__19751 = cljs.core.first(seq19750);
var seq19750__$1 = cljs.core.next(seq19750);
var G__19752 = cljs.core.first(seq19750__$1);
var seq19750__$2 = cljs.core.next(seq19750__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19751,G__19752,seq19750__$2);
}));

return null;
})()
;
(taoensso.timbre.reportf.cljs$lang$macro = true);

var ret__4867__auto___19762 = (function (){
taoensso.timbre._log_errors = (function taoensso$timbre$_log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19763 = arguments.length;
var i__4819__auto___19764 = (0);
while(true){
if((i__4819__auto___19764 < len__4818__auto___19763)){
args__4824__auto__.push((arguments[i__4819__auto___19764]));

var G__19765 = (i__4819__auto___19764 + (1));
i__4819__auto___19764 = G__19765;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__19757__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__19757__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_errors.cljs$lang$applyTo = (function (seq19758){
var G__19759 = cljs.core.first(seq19758);
var seq19758__$1 = cljs.core.next(seq19758);
var G__19760 = cljs.core.first(seq19758__$1);
var seq19758__$2 = cljs.core.next(seq19758__$1);
var G__19761 = cljs.core.first(seq19758__$2);
var seq19758__$3 = cljs.core.next(seq19758__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19759,G__19760,G__19761,seq19758__$3);
}));

return null;
})()
;
(taoensso.timbre._log_errors.cljs$lang$macro = true);

var ret__4867__auto___19771 = (function (){
taoensso.timbre._log_and_rethrow_errors = (function taoensso$timbre$_log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19772 = arguments.length;
var i__4819__auto___19773 = (0);
while(true){
if((i__4819__auto___19773 < len__4818__auto___19772)){
args__4824__auto__.push((arguments[i__4819__auto___19773]));

var G__19774 = (i__4819__auto___19773 + (1));
i__4819__auto___19773 = G__19774;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__19766__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__19766__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__19766__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_and_rethrow_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$applyTo = (function (seq19767){
var G__19768 = cljs.core.first(seq19767);
var seq19767__$1 = cljs.core.next(seq19767);
var G__19769 = cljs.core.first(seq19767__$1);
var seq19767__$2 = cljs.core.next(seq19767__$1);
var G__19770 = cljs.core.first(seq19767__$2);
var seq19767__$3 = cljs.core.next(seq19767__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19768,G__19769,G__19770,seq19767__$3);
}));

return null;
})()
;
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___19779 = (function (){
taoensso.timbre._logged_future = (function taoensso$timbre$_logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19780 = arguments.length;
var i__4819__auto___19781 = (0);
while(true){
if((i__4819__auto___19781 < len__4818__auto___19780)){
args__4824__auto__.push((arguments[i__4819__auto___19781]));

var G__19782 = (i__4819__auto___19781 + (1));
i__4819__auto___19781 = G__19782;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_future,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_DASH_errors,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}));

(taoensso.timbre._logged_future.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._logged_future.cljs$lang$applyTo = (function (seq19775){
var G__19776 = cljs.core.first(seq19775);
var seq19775__$1 = cljs.core.next(seq19775);
var G__19777 = cljs.core.first(seq19775__$1);
var seq19775__$2 = cljs.core.next(seq19775__$1);
var G__19778 = cljs.core.first(seq19775__$2);
var seq19775__$3 = cljs.core.next(seq19775__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19776,G__19777,G__19778,seq19775__$3);
}));

return null;
})()
;
(taoensso.timbre._logged_future.cljs$lang$macro = true);

var ret__4867__auto___19786 = (function (){
taoensso.timbre.log_errors = (function taoensso$timbre$log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19787 = arguments.length;
var i__4819__auto___19788 = (0);
while(true){
if((i__4819__auto___19788 < len__4818__auto___19787)){
args__4824__auto__.push((arguments[i__4819__auto___19788]));

var G__19789 = (i__4819__auto___19788 + (1));
i__4819__auto___19788 = G__19789;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_DASH_errors,null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline(_AMPERSAND_form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.log_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_errors.cljs$lang$applyTo = (function (seq19783){
var G__19784 = cljs.core.first(seq19783);
var seq19783__$1 = cljs.core.next(seq19783);
var G__19785 = cljs.core.first(seq19783__$1);
var seq19783__$2 = cljs.core.next(seq19783__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19784,G__19785,seq19783__$2);
}));

return null;
})()
;
(taoensso.timbre.log_errors.cljs$lang$macro = true);

var ret__4867__auto___19793 = (function (){
taoensso.timbre.log_and_rethrow_errors = (function taoensso$timbre$log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19794 = arguments.length;
var i__4819__auto___19795 = (0);
while(true){
if((i__4819__auto___19795 < len__4818__auto___19794)){
args__4824__auto__.push((arguments[i__4819__auto___19795]));

var G__19796 = (i__4819__auto___19795 + (1));
i__4819__auto___19795 = G__19796;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_DASH_and_DASH_rethrow_DASH_errors,null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline(_AMPERSAND_form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.log_and_rethrow_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$applyTo = (function (seq19790){
var G__19791 = cljs.core.first(seq19790);
var seq19790__$1 = cljs.core.next(seq19790);
var G__19792 = cljs.core.first(seq19790__$1);
var seq19790__$2 = cljs.core.next(seq19790__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19791,G__19792,seq19790__$2);
}));

return null;
})()
;
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___19800 = (function (){
taoensso.timbre.logged_future = (function taoensso$timbre$logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19801 = arguments.length;
var i__4819__auto___19802 = (0);
while(true){
if((i__4819__auto___19802 < len__4818__auto___19801)){
args__4824__auto__.push((arguments[i__4819__auto___19802]));

var G__19803 = (i__4819__auto___19802 + (1));
i__4819__auto___19802 = G__19803;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_logged_DASH_future,null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline(_AMPERSAND_form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.logged_future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logged_future.cljs$lang$applyTo = (function (seq19797){
var G__19798 = cljs.core.first(seq19797);
var seq19797__$1 = cljs.core.next(seq19797);
var G__19799 = cljs.core.first(seq19797__$1);
var seq19797__$2 = cljs.core.next(seq19797__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19798,G__19799,seq19797__$2);
}));

return null;
})()
;
(taoensso.timbre.logged_future.cljs$lang$macro = true);

var ret__4867__auto___19805 = taoensso.timbre._spy = (function taoensso$timbre$_spy(_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,config,level,name,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_DASH_and_DASH_rethrow_DASH_errors,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__19804__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$result__19804__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_QMARK_line,_QMARK_line,cljs.core.cst$kw$config,config,cljs.core.cst$kw$spying_QMARK_,true], null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$result__19804__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.timbre._spy.cljs$lang$macro = true);

var ret__4867__auto___19808 = (function (){
/**
 * Evaluates named expression and logs its result. Always returns the result.
 *   Defaults to :debug logging level and unevaluated expression as name.
 */
taoensso.timbre.spy = (function taoensso$timbre$spy(var_args){
var G__19807 = arguments.length;
switch (G__19807) {
case 3:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_spy,null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline(_AMPERSAND_form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_spy,null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline(_AMPERSAND_form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_spy,null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline(_AMPERSAND_form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$6 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_spy,null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline(_AMPERSAND_form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))));
}));

(taoensso.timbre.spy.cljs$lang$maxFixedArity = 6);

return null;
})()
;
(taoensso.timbre.spy.cljs$lang$macro = true);

var ret__4867__auto___19810 = taoensso.timbre.get_env = (function taoensso$timbre$get_env(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_get_DASH_env,null,(1),null)))));
});
(taoensso.timbre.get_env.cljs$lang$macro = true);

var ret__4867__auto___19815 = (function (){
taoensso.timbre.with_default_outs = (function taoensso$timbre$with_default_outs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19816 = arguments.length;
var i__4819__auto___19817 = (0);
while(true){
if((i__4819__auto___19817 < len__4818__auto___19816)){
args__4824__auto__.push((arguments[i__4819__auto___19817]));

var G__19818 = (i__4819__auto___19817 + (1));
i__4819__auto___19817 = G__19818;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_out_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_default_DASH_out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_err_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_default_DASH_err,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_default_outs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.with_default_outs.cljs$lang$applyTo = (function (seq19812){
var G__19813 = cljs.core.first(seq19812);
var seq19812__$1 = cljs.core.next(seq19812);
var G__19814 = cljs.core.first(seq19812__$1);
var seq19812__$2 = cljs.core.next(seq19812__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19813,G__19814,seq19812__$2);
}));

return null;
})()
;
(taoensso.timbre.with_default_outs.cljs$lang$macro = true);

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__19820 = arguments.length;
switch (G__19820) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
var or__4212__auto__ = err.stack;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(err);
}
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);

var ret__4867__auto___19826 = (function (){
/**
 * Handy for sampled logging, etc.
 */
taoensso.timbre.sometimes = (function taoensso$timbre$sometimes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19827 = arguments.length;
var i__4819__auto___19828 = (0);
while(true){
if((i__4819__auto___19828 < len__4818__auto___19827)){
args__4824__auto__.push((arguments[i__4819__auto___19828]));

var G__19829 = (i__4819__auto___19828 + (1));
i__4819__auto___19828 = G__19829;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,probability,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assert,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,probability,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"Probability: 0 <= p <= 1",null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__LT_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_rand,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,probability,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(taoensso.timbre.sometimes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.sometimes.cljs$lang$applyTo = (function (seq19822){
var G__19823 = cljs.core.first(seq19822);
var seq19822__$1 = cljs.core.next(seq19822);
var G__19824 = cljs.core.first(seq19822__$1);
var seq19822__$2 = cljs.core.next(seq19822__$1);
var G__19825 = cljs.core.first(seq19822__$2);
var seq19822__$3 = cljs.core.next(seq19822__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19823,G__19824,G__19825,seq19822__$3);
}));

return null;
})()
;
(taoensso.timbre.sometimes.cljs$lang$macro = true);

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19844 = arguments.length;
var i__4819__auto___19845 = (0);
while(true){
if((i__4819__auto___19845 < len__4818__auto___19844)){
args__4824__auto__.push((arguments[i__4819__auto___19845]));

var G__19846 = (i__4819__auto___19845 + (1));
i__4819__auto___19845 = G__19846;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq19830){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19830));
}));


var ret__4867__auto___19847 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19848 = arguments.length;
var i__4819__auto___19849 = (0);
while(true){
if((i__4819__auto___19849 < len__4818__auto___19848)){
args__4824__auto__.push((arguments[i__4819__auto___19849]));

var G__19850 = (i__4819__auto___19849 + (1));
i__4819__auto___19849 = G__19850;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_with_DASH_level,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_log_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq19831){
var G__19832 = cljs.core.first(seq19831);
var seq19831__$1 = cljs.core.next(seq19831);
var G__19833 = cljs.core.first(seq19831__$1);
var seq19831__$2 = cljs.core.next(seq19831__$1);
var G__19834 = cljs.core.first(seq19831__$2);
var seq19831__$3 = cljs.core.next(seq19831__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19832,G__19833,G__19834,seq19831__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__4867__auto___19851 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19852 = arguments.length;
var i__4819__auto___19853 = (0);
while(true){
if((i__4819__auto___19853 < len__4818__auto___19852)){
args__4824__auto__.push((arguments[i__4819__auto___19853]));

var G__19854 = (i__4819__auto___19853 + (1));
i__4819__auto___19853 = G__19854;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_with_DASH_config,null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_logging_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq19835){
var G__19836 = cljs.core.first(seq19835);
var seq19835__$1 = cljs.core.next(seq19835);
var G__19837 = cljs.core.first(seq19835__$1);
var seq19835__$2 = cljs.core.next(seq19835__$1);
var G__19838 = cljs.core.first(seq19835__$2);
var seq19835__$3 = cljs.core.next(seq19835__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19836,G__19837,G__19838,seq19835__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__4867__auto___19855 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19856 = arguments.length;
var i__4819__auto___19857 = (0);
while(true){
if((i__4819__auto___19857 < len__4818__auto___19856)){
args__4824__auto__.push((arguments[i__4819__auto___19857]));

var G__19858 = (i__4819__auto___19857 + (1));
i__4819__auto___19857 = G__19858;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log,null,(1),null)),args)));
}));

(taoensso.timbre.logp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq19839){
var G__19840 = cljs.core.first(seq19839);
var seq19839__$1 = cljs.core.next(seq19839);
var G__19841 = cljs.core.first(seq19839__$1);
var seq19839__$2 = cljs.core.next(seq19839__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19840,G__19841,seq19839__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__4867__auto___19859 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__19843 = arguments.length;
switch (G__19843) {
case 2:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_DASH_env,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,level){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_DASH_env,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"&env",null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_DASH_env,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_STAR_,null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_get_DASH_env,null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.timbre.log_env.cljs$lang$macro = true);

