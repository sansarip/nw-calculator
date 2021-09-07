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
var G__17579 = arguments.length;
switch (G__17579) {
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
var map__17580 = opts;
var map__17580__$1 = cljs.core.__destructure_map(map__17580);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17580__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17580__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__17581 = data;
var map__17581__$1 = cljs.core.__destructure_map(map__17581);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$_QMARK_file);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17581__$1,cljs.core.cst$kw$_QMARK_line);
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
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_filter,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$timestamp_DASH_opts,taoensso.timbre.default_timestamp_opts,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__17583 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__17583) : taoensso.timbre.console_appender.call(null,G__17583));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$println,(function (){var G__17584 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__17584) : taoensso.timbre.println_appender.call(null,G__17584));
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
var ret__4867__auto___17589 = (function (){
taoensso.timbre.with_config = (function taoensso$timbre$with_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17590 = arguments.length;
var i__4819__auto___17591 = (0);
while(true){
if((i__4819__auto___17591 < len__4818__auto___17590)){
args__4824__auto__.push((arguments[i__4819__auto___17591]));

var G__17592 = (i__4819__auto___17591 + (1));
i__4819__auto___17591 = G__17592;
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
(taoensso.timbre.with_config.cljs$lang$applyTo = (function (seq17585){
var G__17586 = cljs.core.first(seq17585);
var seq17585__$1 = cljs.core.next(seq17585);
var G__17587 = cljs.core.first(seq17585__$1);
var seq17585__$2 = cljs.core.next(seq17585__$1);
var G__17588 = cljs.core.first(seq17585__$2);
var seq17585__$3 = cljs.core.next(seq17585__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17586,G__17587,G__17588,seq17585__$3);
}));

return null;
})()
;
(taoensso.timbre.with_config.cljs$lang$macro = true);

var ret__4867__auto___17597 = (function (){
taoensso.timbre.with_merged_config = (function taoensso$timbre$with_merged_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17598 = arguments.length;
var i__4819__auto___17599 = (0);
while(true){
if((i__4819__auto___17599 < len__4818__auto___17598)){
args__4824__auto__.push((arguments[i__4819__auto___17599]));

var G__17600 = (i__4819__auto___17599 + (1));
i__4819__auto___17599 = G__17600;
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
(taoensso.timbre.with_merged_config.cljs$lang$applyTo = (function (seq17593){
var G__17594 = cljs.core.first(seq17593);
var seq17593__$1 = cljs.core.next(seq17593);
var G__17595 = cljs.core.first(seq17593__$1);
var seq17593__$2 = cljs.core.next(seq17593__$1);
var G__17596 = cljs.core.first(seq17593__$2);
var seq17593__$3 = cljs.core.next(seq17593__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17594,G__17595,G__17596,seq17593__$3);
}));

return null;
})()
;
(taoensso.timbre.with_merged_config.cljs$lang$macro = true);

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
var G__17601 = (function (_old){
return m;
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__17601) : taoensso.timbre.swap_config_BANG_.call(null,G__17601));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
var G__17602 = (function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__17602) : taoensso.timbre.swap_config_BANG_.call(null,G__17602));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17605 = arguments.length;
var i__4819__auto___17606 = (0);
while(true){
if((i__4819__auto___17606 < len__4818__auto___17605)){
args__4824__auto__.push((arguments[i__4819__auto___17606]));

var G__17607 = (i__4819__auto___17606 + (1));
i__4819__auto___17606 = G__17607;
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
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq17603){
var G__17604 = cljs.core.first(seq17603);
var seq17603__$1 = cljs.core.next(seq17603);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17604,seq17603__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$min_DASH_level,level);
}));
});
var ret__4867__auto___17612 = (function (){
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17613 = arguments.length;
var i__4819__auto___17614 = (0);
while(true){
if((i__4819__auto___17614 < len__4818__auto___17613)){
args__4824__auto__.push((arguments[i__4819__auto___17614]));

var G__17615 = (i__4819__auto___17614 + (1));
i__4819__auto___17614 = G__17615;
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
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq17608){
var G__17609 = cljs.core.first(seq17608);
var seq17608__$1 = cljs.core.next(seq17608);
var G__17610 = cljs.core.first(seq17608__$1);
var seq17608__$2 = cljs.core.next(seq17608__$1);
var G__17611 = cljs.core.first(seq17608__$2);
var seq17608__$3 = cljs.core.next(seq17608__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17609,G__17610,G__17611,seq17608__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);

var err_17618 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_17619 = (function (p1__17616_SHARP_){
var G__17617 = p1__17616_SHARP_;
var G__17617__$1 = (((G__17617 instanceof cljs.core.Keyword))?G__17617.fqn:null);
switch (G__17617__$1) {
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
if(cljs.core.truth_(level__GT_int_17619(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_17619(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_17618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4212__auto__ = level__GT_int_17619(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_17618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
var valid_level__GT_int_17621 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_17621.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_17621.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_17621.call(null,x)) >= (valid_level__GT_int_17621.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_17621.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_17621.call(null,y)));
});
var fn_QMARK__17627 = cljs.core.fn_QMARK_;
var compile_17628 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__17629 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__17622 = (compile_17628.cljs$core$IFn$_invoke$arity$1 ? compile_17628.cljs$core$IFn$_invoke$arity$1(x) : compile_17628.call(null,x));
return (fexpr__17622.cljs$core$IFn$_invoke$arity$1 ? fexpr__17622.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__17622.call(null,ns));
}));
var conform_QMARK__17630 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__17627.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__17627.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__17627.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return (conform_QMARK__STAR__17629.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__17629.cljs$core$IFn$_invoke$arity$2(ns_filter,ns) : conform_QMARK__STAR__17629.call(null,ns_filter,ns));
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__17630(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome((function (p__17623){
var vec__17624 = p__17623;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17624,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17624,(1),null);
if(cljs.core.truth_((conform_QMARK__STAR__17629.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__17629.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns) : conform_QMARK__STAR__17629.call(null,ns_pattern,ns)))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_17632 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_17633 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__17631 = (function (){var or__4212__auto__ = ((cljs.core.vector_QMARK_(x))?(ns__GT__QMARK_min_level_17633.cljs$core$IFn$_invoke$arity$2 ? ns__GT__QMARK_min_level_17633.cljs$core$IFn$_invoke$arity$2(x,ns) : ns__GT__QMARK_min_level_17633.call(null,x,ns)):x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
})();
return (valid_level_17632.cljs$core$IFn$_invoke$arity$1 ? valid_level_17632.cljs$core$IFn$_invoke$arity$1(G__17631) : valid_level_17632.call(null,G__17631));
});
var leglist_17635 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__17634 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__17634.cljs$core$IFn$_invoke$arity$1 ? fexpr__17634.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17634.call(null,x));
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
var ns_whitelist__$1 = leglist_17635(ns_whitelist);
var ns_blacklist__$1 = leglist_17635(ns_blacklist);
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
var level_GT__EQ__17643 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__17644 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_17645 = taoensso.timbre.get_min_level;
var legacy_ns_filter_17646 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__17637 = arguments.length;
switch (G__17637) {
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
var min_level = (function (){var G__17638 = default_min_level;
var G__17639 = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$min_DASH_level);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$level);
}
})();
var G__17640 = _QMARK_ns_str;
return (get_min_level_17645.cljs$core$IFn$_invoke$arity$3 ? get_min_level_17645.cljs$core$IFn$_invoke$arity$3(G__17638,G__17639,G__17640) : get_min_level_17645.call(null,G__17638,G__17639,G__17640));
})();
if(cljs.core.truth_((level_GT__EQ__17643.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__17643.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__17643.call(null,level,min_level)))){
var temp__5751__auto__ = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_filter);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__17641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__17642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
return (legacy_ns_filter_17646.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_17646.cljs$core$IFn$_invoke$arity$2(G__17641,G__17642) : legacy_ns_filter_17646.call(null,G__17641,G__17642));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ns_filter = temp__5751__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__17644.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__17644.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__17644.call(null,ns_filter,_QMARK_ns_str)))){
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
var ret__4867__auto___17652 = (function (){
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
var len__4818__auto___17653 = arguments.length;
var i__4819__auto___17654 = (0);
while(true){
if((i__4819__auto___17654 < len__4818__auto___17653)){
args__4824__auto__.push((arguments[i__4819__auto___17654]));

var G__17655 = (i__4819__auto___17654 + (1));
i__4819__auto___17654 = G__17655;
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
(taoensso.timbre.with_context.cljs$lang$applyTo = (function (seq17648){
var G__17649 = cljs.core.first(seq17648);
var seq17648__$1 = cljs.core.next(seq17648);
var G__17650 = cljs.core.first(seq17648__$1);
var seq17648__$2 = cljs.core.next(seq17648__$1);
var G__17651 = cljs.core.first(seq17648__$2);
var seq17648__$3 = cljs.core.next(seq17648__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17649,G__17650,G__17651,seq17648__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context.cljs$lang$macro = true);

var ret__4867__auto___17660 = (function (){
/**
 * Like `with-context`, but merges given context into current context.
 */
taoensso.timbre.with_context_PLUS_ = (function taoensso$timbre$with_context_PLUS_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17661 = arguments.length;
var i__4819__auto___17662 = (0);
while(true){
if((i__4819__auto___17662 < len__4818__auto___17661)){
args__4824__auto__.push((arguments[i__4819__auto___17662]));

var G__17663 = (i__4819__auto___17662 + (1));
i__4819__auto___17662 = G__17663;
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
(taoensso.timbre.with_context_PLUS_.cljs$lang$applyTo = (function (seq17656){
var G__17657 = cljs.core.first(seq17656);
var seq17656__$1 = cljs.core.next(seq17656);
var G__17658 = cljs.core.first(seq17656__$1);
var seq17656__$2 = cljs.core.next(seq17656__$1);
var G__17659 = cljs.core.first(seq17656__$2);
var seq17656__$3 = cljs.core.next(seq17656__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17657,G__17658,G__17659,seq17656__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context_PLUS_.cljs$lang$macro = true);

/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__17667 = _QMARK_err;
var G__17668 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17667,G__17668) : taoensso.encore.kw_identical_QMARK_.call(null,G__17667,G__17668));
})();
var fmt_msg_QMARK_ = (function (){var G__17669 = msg_type;
var G__17670 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17669,G__17670) : taoensso.encore.kw_identical_QMARK_.call(null,G__17669,G__17670));
})();
var vec__17664 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17664,(0),null);
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
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__17671 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671,(0),null);
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
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__17674 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17674,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__17677 = timestamp_opts;
var map__17677__$1 = cljs.core.__destructure_map(map__17677);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17677__$1,cljs.core.cst$kw$pattern);
if(cljs.core.truth_((function (){var G__17678 = pattern;
var G__17679 = cljs.core.cst$kw$iso8601;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17678,G__17679) : taoensso.encore.kw_identical_QMARK_.call(null,G__17678,G__17679));
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
var G__17681 = arguments.length;
switch (G__17681) {
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
var instant_17697 = (new Date());
var context_17698 = taoensso.timbre._STAR_context_STAR_;
var vargs_17699 = cljs.core.deref(vargs_);
var vec__17682_17700 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_17699);
var _QMARK_err_17701__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682_17700,(0),null);
var _QMARK_meta_17702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682_17700,(1),null);
var _QMARK_msg_fmt_17703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682_17700,(2),null);
var vargs_17704__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682_17700,(3),null);
var data_17705 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4212__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$spying_QMARK_,cljs.core.cst$kw$config,cljs.core.cst$kw$vargs,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_,cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$_QMARK_msg_DASH_fmt],[instant_17697,spying_QMARK_,config,vargs_17704__$1,_QMARK_file,(function (){var fexpr__17685 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__17685.cljs$core$IFn$_invoke$arity$1 ? fexpr__17685.cljs$core$IFn$_invoke$arity$1(level) : fexpr__17685.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_17701__$1,context_17698,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_17701__$1;
}),null)),_QMARK_meta_17702,_QMARK_msg_fmt_17703]));
var _QMARK_data_17706 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_17705,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__5753__auto___17707 = _QMARK_data_17706;
if(cljs.core.truth_(temp__5753__auto___17707)){
var data_17708__$1 = temp__5753__auto___17707;
var map__17686_17709 = data_17708__$1;
var map__17686_17710__$1 = cljs.core.__destructure_map(map__17686_17709);
var vargs_17711__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17686_17710__$1,cljs.core.cst$kw$vargs);
var data_17712__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_17708__$1,cljs.core.cst$kw$vargs_,(new cljs.core.Delay((function (){
return vargs_17711__$2;
}),null)));
var data_17713__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_17712__$2,cljs.core.cst$kw$msg_,(new cljs.core.Delay((function (){
var G__17687 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17687)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__17687)){
return taoensso.timbre.str_join(vargs_17711__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__17687)){
if(typeof _QMARK_msg_fmt_17703 === 'string'){
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

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_17703,vargs_17711__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17687)].join('')));

}
}
}
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hash_,(new cljs.core.Delay((function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_17703,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_QMARK_meta_17702,cljs.core.cst$kw$hash,vargs_17711__$2)], null));
}),null))], 0));
var output_fn1_17714 = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
var timestamp_opts1_17715 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$timestamp_DASH_opts));
var get_timestamp__17716 = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_17713__$3,cljs.core.cst$kw$instant));
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
return cljs.core.not((function (){var G__17688 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_17713__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__17688) : rl_fn.call(null,G__17688));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__17689 = appender;
var map__17689__$1 = cljs.core.__destructure_map(map__17689);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17689__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17689__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (f == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__17690 = f;
var G__17691 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17690,G__17691) : taoensso.encore.kw_identical_QMARK_.call(null,G__17690,G__17691));
}
})())){
return output_fn1_17714;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = cljs.core.cst$kw$timestamp_DASH_opts.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (opts == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__17692 = opts;
var G__17693 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__17692,G__17693) : taoensso.encore.kw_identical_QMARK_.call(null,G__17692,G__17693));
}
})())){
return (get_timestamp__17716.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__17716.cljs$core$IFn$_invoke$arity$1(timestamp_opts1_17715) : get_timestamp__17716.call(null,timestamp_opts1_17715));
} else {
var G__17694 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(timestamp_opts1_17715,opts);
return (get_timestamp__17716.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__17716.cljs$core$IFn$_invoke$arity$1(G__17694) : get_timestamp__17716.call(null,G__17694));
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__17695 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_17713__$3,cljs.core.cst$kw$timestamp_,timestamp_);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__17695) : output_fn.call(null,G__17695));
}),null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_17713__$3,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_,cljs.core.cst$kw$timestamp_,timestamp_], null));
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
var ret__4867__auto___17730 = (function (){
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
var len__4818__auto___17731 = arguments.length;
var i__4819__auto___17732 = (0);
while(true){
if((i__4819__auto___17732 < len__4818__auto___17731)){
args__4824__auto__.push((arguments[i__4819__auto___17732]));

var G__17733 = (i__4819__auto___17732 + (1));
i__4819__auto___17732 = G__17733;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((5) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((5)),(0),null)):null);
return taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4825__auto__);
});

(taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,msg_type,args,p__17723){
var vec__17724 = p__17723;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17724,(0),null);
if((function (){var fexpr__17727 = (function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
});
return fexpr__17727(args);
})()){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",689,"([:or nil? sequential?] args)",args,null,null);
}

var map__17728 = opts;
var map__17728__$1 = cljs.core.__destructure_map(map__17728);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17728__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
var map__17729 = opts;
var map__17729__$1 = cljs.core.__destructure_map(map__17729);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17729__$1,cljs.core.cst$kw$config,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17729__$1,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$auto);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17729__$1,cljs.core.cst$kw$_QMARK_file,null);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17729__$1,cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form));
var _QMARK_base_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17729__$1,cljs.core.cst$kw$_QMARK_base_DASH_data);
var spying_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17729__$1,cljs.core.cst$kw$spying_QMARK_);
var _QMARK_file__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_file,"NO_SOURCE_PATH"))?_QMARK_file:null);
var callsite_id = cljs.core.hash(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,msg_type,args,_QMARK_ns_str,_QMARK_file__$1,_QMARK_line,cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,_QMARK_ns_str,null,(1),null)),(new cljs.core.List(null,_QMARK_file__$1,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,msg_type,null,(1),null)),(new cljs.core.List(null,_QMARK_err,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_delay,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,_QMARK_base_data,null,(1),null)),(new cljs.core.List(null,callsite_id,null,(1),null)),(new cljs.core.List(null,spying_QMARK_,null,(1),null))], 0))));

}));

(taoensso.timbre.log_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(taoensso.timbre.log_BANG_.cljs$lang$applyTo = (function (seq17717){
var G__17718 = cljs.core.first(seq17717);
var seq17717__$1 = cljs.core.next(seq17717);
var G__17719 = cljs.core.first(seq17717__$1);
var seq17717__$2 = cljs.core.next(seq17717__$1);
var G__17720 = cljs.core.first(seq17717__$2);
var seq17717__$3 = cljs.core.next(seq17717__$2);
var G__17721 = cljs.core.first(seq17717__$3);
var seq17717__$4 = cljs.core.next(seq17717__$3);
var G__17722 = cljs.core.first(seq17717__$4);
var seq17717__$5 = cljs.core.next(seq17717__$4);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17718,G__17719,G__17720,G__17721,G__17722,seq17717__$5);
}));

return null;
})()
;
(taoensso.timbre.log_BANG_.cljs$lang$macro = true);

var ret__4867__auto___17739 = (function (){
taoensso.timbre.log_STAR_ = (function taoensso$timbre$log_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17740 = arguments.length;
var i__4819__auto___17741 = (0);
while(true){
if((i__4819__auto___17741 < len__4818__auto___17740)){
args__4824__auto__.push((arguments[i__4819__auto___17741]));

var G__17742 = (i__4819__auto___17741 + (1));
i__4819__auto___17741 = G__17742;
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
(taoensso.timbre.log_STAR_.cljs$lang$applyTo = (function (seq17734){
var G__17735 = cljs.core.first(seq17734);
var seq17734__$1 = cljs.core.next(seq17734);
var G__17736 = cljs.core.first(seq17734__$1);
var seq17734__$2 = cljs.core.next(seq17734__$1);
var G__17737 = cljs.core.first(seq17734__$2);
var seq17734__$3 = cljs.core.next(seq17734__$2);
var G__17738 = cljs.core.first(seq17734__$3);
var seq17734__$4 = cljs.core.next(seq17734__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17735,G__17736,G__17737,G__17738,seq17734__$4);
}));

return null;
})()
;
(taoensso.timbre.log_STAR_.cljs$lang$macro = true);

var ret__4867__auto___17747 = (function (){
taoensso.timbre.log = (function taoensso$timbre$log(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17748 = arguments.length;
var i__4819__auto___17749 = (0);
while(true){
if((i__4819__auto___17749 < len__4818__auto___17748)){
args__4824__auto__.push((arguments[i__4819__auto___17749]));

var G__17750 = (i__4819__auto___17749 + (1));
i__4819__auto___17749 = G__17750;
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
(taoensso.timbre.log.cljs$lang$applyTo = (function (seq17743){
var G__17744 = cljs.core.first(seq17743);
var seq17743__$1 = cljs.core.next(seq17743);
var G__17745 = cljs.core.first(seq17743__$1);
var seq17743__$2 = cljs.core.next(seq17743__$1);
var G__17746 = cljs.core.first(seq17743__$2);
var seq17743__$3 = cljs.core.next(seq17743__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17744,G__17745,G__17746,seq17743__$3);
}));

return null;
})()
;
(taoensso.timbre.log.cljs$lang$macro = true);

var ret__4867__auto___17754 = (function (){
taoensso.timbre.trace = (function taoensso$timbre$trace(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17755 = arguments.length;
var i__4819__auto___17756 = (0);
while(true){
if((i__4819__auto___17756 < len__4818__auto___17755)){
args__4824__auto__.push((arguments[i__4819__auto___17756]));

var G__17757 = (i__4819__auto___17756 + (1));
i__4819__auto___17756 = G__17757;
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
(taoensso.timbre.trace.cljs$lang$applyTo = (function (seq17751){
var G__17752 = cljs.core.first(seq17751);
var seq17751__$1 = cljs.core.next(seq17751);
var G__17753 = cljs.core.first(seq17751__$1);
var seq17751__$2 = cljs.core.next(seq17751__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17752,G__17753,seq17751__$2);
}));

return null;
})()
;
(taoensso.timbre.trace.cljs$lang$macro = true);

var ret__4867__auto___17761 = (function (){
taoensso.timbre.debug = (function taoensso$timbre$debug(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17762 = arguments.length;
var i__4819__auto___17763 = (0);
while(true){
if((i__4819__auto___17763 < len__4818__auto___17762)){
args__4824__auto__.push((arguments[i__4819__auto___17763]));

var G__17764 = (i__4819__auto___17763 + (1));
i__4819__auto___17763 = G__17764;
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
(taoensso.timbre.debug.cljs$lang$applyTo = (function (seq17758){
var G__17759 = cljs.core.first(seq17758);
var seq17758__$1 = cljs.core.next(seq17758);
var G__17760 = cljs.core.first(seq17758__$1);
var seq17758__$2 = cljs.core.next(seq17758__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17759,G__17760,seq17758__$2);
}));

return null;
})()
;
(taoensso.timbre.debug.cljs$lang$macro = true);

var ret__4867__auto___17768 = (function (){
taoensso.timbre.info = (function taoensso$timbre$info(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17769 = arguments.length;
var i__4819__auto___17770 = (0);
while(true){
if((i__4819__auto___17770 < len__4818__auto___17769)){
args__4824__auto__.push((arguments[i__4819__auto___17770]));

var G__17771 = (i__4819__auto___17770 + (1));
i__4819__auto___17770 = G__17771;
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
(taoensso.timbre.info.cljs$lang$applyTo = (function (seq17765){
var G__17766 = cljs.core.first(seq17765);
var seq17765__$1 = cljs.core.next(seq17765);
var G__17767 = cljs.core.first(seq17765__$1);
var seq17765__$2 = cljs.core.next(seq17765__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17766,G__17767,seq17765__$2);
}));

return null;
})()
;
(taoensso.timbre.info.cljs$lang$macro = true);

var ret__4867__auto___17775 = (function (){
taoensso.timbre.warn = (function taoensso$timbre$warn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17776 = arguments.length;
var i__4819__auto___17777 = (0);
while(true){
if((i__4819__auto___17777 < len__4818__auto___17776)){
args__4824__auto__.push((arguments[i__4819__auto___17777]));

var G__17778 = (i__4819__auto___17777 + (1));
i__4819__auto___17777 = G__17778;
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
(taoensso.timbre.warn.cljs$lang$applyTo = (function (seq17772){
var G__17773 = cljs.core.first(seq17772);
var seq17772__$1 = cljs.core.next(seq17772);
var G__17774 = cljs.core.first(seq17772__$1);
var seq17772__$2 = cljs.core.next(seq17772__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17773,G__17774,seq17772__$2);
}));

return null;
})()
;
(taoensso.timbre.warn.cljs$lang$macro = true);

var ret__4867__auto___17782 = (function (){
taoensso.timbre.error = (function taoensso$timbre$error(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17783 = arguments.length;
var i__4819__auto___17784 = (0);
while(true){
if((i__4819__auto___17784 < len__4818__auto___17783)){
args__4824__auto__.push((arguments[i__4819__auto___17784]));

var G__17785 = (i__4819__auto___17784 + (1));
i__4819__auto___17784 = G__17785;
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
(taoensso.timbre.error.cljs$lang$applyTo = (function (seq17779){
var G__17780 = cljs.core.first(seq17779);
var seq17779__$1 = cljs.core.next(seq17779);
var G__17781 = cljs.core.first(seq17779__$1);
var seq17779__$2 = cljs.core.next(seq17779__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17780,G__17781,seq17779__$2);
}));

return null;
})()
;
(taoensso.timbre.error.cljs$lang$macro = true);

var ret__4867__auto___17789 = (function (){
taoensso.timbre.fatal = (function taoensso$timbre$fatal(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17790 = arguments.length;
var i__4819__auto___17791 = (0);
while(true){
if((i__4819__auto___17791 < len__4818__auto___17790)){
args__4824__auto__.push((arguments[i__4819__auto___17791]));

var G__17792 = (i__4819__auto___17791 + (1));
i__4819__auto___17791 = G__17792;
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
(taoensso.timbre.fatal.cljs$lang$applyTo = (function (seq17786){
var G__17787 = cljs.core.first(seq17786);
var seq17786__$1 = cljs.core.next(seq17786);
var G__17788 = cljs.core.first(seq17786__$1);
var seq17786__$2 = cljs.core.next(seq17786__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17787,G__17788,seq17786__$2);
}));

return null;
})()
;
(taoensso.timbre.fatal.cljs$lang$macro = true);

var ret__4867__auto___17796 = (function (){
taoensso.timbre.report = (function taoensso$timbre$report(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17797 = arguments.length;
var i__4819__auto___17798 = (0);
while(true){
if((i__4819__auto___17798 < len__4818__auto___17797)){
args__4824__auto__.push((arguments[i__4819__auto___17798]));

var G__17799 = (i__4819__auto___17798 + (1));
i__4819__auto___17798 = G__17799;
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
(taoensso.timbre.report.cljs$lang$applyTo = (function (seq17793){
var G__17794 = cljs.core.first(seq17793);
var seq17793__$1 = cljs.core.next(seq17793);
var G__17795 = cljs.core.first(seq17793__$1);
var seq17793__$2 = cljs.core.next(seq17793__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17794,G__17795,seq17793__$2);
}));

return null;
})()
;
(taoensso.timbre.report.cljs$lang$macro = true);

var ret__4867__auto___17805 = (function (){
taoensso.timbre.logf_STAR_ = (function taoensso$timbre$logf_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17806 = arguments.length;
var i__4819__auto___17807 = (0);
while(true){
if((i__4819__auto___17807 < len__4818__auto___17806)){
args__4824__auto__.push((arguments[i__4819__auto___17807]));

var G__17808 = (i__4819__auto___17807 + (1));
i__4819__auto___17807 = G__17808;
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
(taoensso.timbre.logf_STAR_.cljs$lang$applyTo = (function (seq17800){
var G__17801 = cljs.core.first(seq17800);
var seq17800__$1 = cljs.core.next(seq17800);
var G__17802 = cljs.core.first(seq17800__$1);
var seq17800__$2 = cljs.core.next(seq17800__$1);
var G__17803 = cljs.core.first(seq17800__$2);
var seq17800__$3 = cljs.core.next(seq17800__$2);
var G__17804 = cljs.core.first(seq17800__$3);
var seq17800__$4 = cljs.core.next(seq17800__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17801,G__17802,G__17803,G__17804,seq17800__$4);
}));

return null;
})()
;
(taoensso.timbre.logf_STAR_.cljs$lang$macro = true);

var ret__4867__auto___17813 = (function (){
taoensso.timbre.logf = (function taoensso$timbre$logf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17814 = arguments.length;
var i__4819__auto___17815 = (0);
while(true){
if((i__4819__auto___17815 < len__4818__auto___17814)){
args__4824__auto__.push((arguments[i__4819__auto___17815]));

var G__17816 = (i__4819__auto___17815 + (1));
i__4819__auto___17815 = G__17816;
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
(taoensso.timbre.logf.cljs$lang$applyTo = (function (seq17809){
var G__17810 = cljs.core.first(seq17809);
var seq17809__$1 = cljs.core.next(seq17809);
var G__17811 = cljs.core.first(seq17809__$1);
var seq17809__$2 = cljs.core.next(seq17809__$1);
var G__17812 = cljs.core.first(seq17809__$2);
var seq17809__$3 = cljs.core.next(seq17809__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17810,G__17811,G__17812,seq17809__$3);
}));

return null;
})()
;
(taoensso.timbre.logf.cljs$lang$macro = true);

var ret__4867__auto___17820 = (function (){
taoensso.timbre.tracef = (function taoensso$timbre$tracef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17821 = arguments.length;
var i__4819__auto___17822 = (0);
while(true){
if((i__4819__auto___17822 < len__4818__auto___17821)){
args__4824__auto__.push((arguments[i__4819__auto___17822]));

var G__17823 = (i__4819__auto___17822 + (1));
i__4819__auto___17822 = G__17823;
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
(taoensso.timbre.tracef.cljs$lang$applyTo = (function (seq17817){
var G__17818 = cljs.core.first(seq17817);
var seq17817__$1 = cljs.core.next(seq17817);
var G__17819 = cljs.core.first(seq17817__$1);
var seq17817__$2 = cljs.core.next(seq17817__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17818,G__17819,seq17817__$2);
}));

return null;
})()
;
(taoensso.timbre.tracef.cljs$lang$macro = true);

var ret__4867__auto___17827 = (function (){
taoensso.timbre.debugf = (function taoensso$timbre$debugf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17828 = arguments.length;
var i__4819__auto___17829 = (0);
while(true){
if((i__4819__auto___17829 < len__4818__auto___17828)){
args__4824__auto__.push((arguments[i__4819__auto___17829]));

var G__17830 = (i__4819__auto___17829 + (1));
i__4819__auto___17829 = G__17830;
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
(taoensso.timbre.debugf.cljs$lang$applyTo = (function (seq17824){
var G__17825 = cljs.core.first(seq17824);
var seq17824__$1 = cljs.core.next(seq17824);
var G__17826 = cljs.core.first(seq17824__$1);
var seq17824__$2 = cljs.core.next(seq17824__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17825,G__17826,seq17824__$2);
}));

return null;
})()
;
(taoensso.timbre.debugf.cljs$lang$macro = true);

var ret__4867__auto___17834 = (function (){
taoensso.timbre.infof = (function taoensso$timbre$infof(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17835 = arguments.length;
var i__4819__auto___17836 = (0);
while(true){
if((i__4819__auto___17836 < len__4818__auto___17835)){
args__4824__auto__.push((arguments[i__4819__auto___17836]));

var G__17837 = (i__4819__auto___17836 + (1));
i__4819__auto___17836 = G__17837;
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
(taoensso.timbre.infof.cljs$lang$applyTo = (function (seq17831){
var G__17832 = cljs.core.first(seq17831);
var seq17831__$1 = cljs.core.next(seq17831);
var G__17833 = cljs.core.first(seq17831__$1);
var seq17831__$2 = cljs.core.next(seq17831__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17832,G__17833,seq17831__$2);
}));

return null;
})()
;
(taoensso.timbre.infof.cljs$lang$macro = true);

var ret__4867__auto___17841 = (function (){
taoensso.timbre.warnf = (function taoensso$timbre$warnf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17842 = arguments.length;
var i__4819__auto___17843 = (0);
while(true){
if((i__4819__auto___17843 < len__4818__auto___17842)){
args__4824__auto__.push((arguments[i__4819__auto___17843]));

var G__17844 = (i__4819__auto___17843 + (1));
i__4819__auto___17843 = G__17844;
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
(taoensso.timbre.warnf.cljs$lang$applyTo = (function (seq17838){
var G__17839 = cljs.core.first(seq17838);
var seq17838__$1 = cljs.core.next(seq17838);
var G__17840 = cljs.core.first(seq17838__$1);
var seq17838__$2 = cljs.core.next(seq17838__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17839,G__17840,seq17838__$2);
}));

return null;
})()
;
(taoensso.timbre.warnf.cljs$lang$macro = true);

var ret__4867__auto___17848 = (function (){
taoensso.timbre.errorf = (function taoensso$timbre$errorf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17849 = arguments.length;
var i__4819__auto___17850 = (0);
while(true){
if((i__4819__auto___17850 < len__4818__auto___17849)){
args__4824__auto__.push((arguments[i__4819__auto___17850]));

var G__17851 = (i__4819__auto___17850 + (1));
i__4819__auto___17850 = G__17851;
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
(taoensso.timbre.errorf.cljs$lang$applyTo = (function (seq17845){
var G__17846 = cljs.core.first(seq17845);
var seq17845__$1 = cljs.core.next(seq17845);
var G__17847 = cljs.core.first(seq17845__$1);
var seq17845__$2 = cljs.core.next(seq17845__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17846,G__17847,seq17845__$2);
}));

return null;
})()
;
(taoensso.timbre.errorf.cljs$lang$macro = true);

var ret__4867__auto___17855 = (function (){
taoensso.timbre.fatalf = (function taoensso$timbre$fatalf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17856 = arguments.length;
var i__4819__auto___17857 = (0);
while(true){
if((i__4819__auto___17857 < len__4818__auto___17856)){
args__4824__auto__.push((arguments[i__4819__auto___17857]));

var G__17858 = (i__4819__auto___17857 + (1));
i__4819__auto___17857 = G__17858;
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
(taoensso.timbre.fatalf.cljs$lang$applyTo = (function (seq17852){
var G__17853 = cljs.core.first(seq17852);
var seq17852__$1 = cljs.core.next(seq17852);
var G__17854 = cljs.core.first(seq17852__$1);
var seq17852__$2 = cljs.core.next(seq17852__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17853,G__17854,seq17852__$2);
}));

return null;
})()
;
(taoensso.timbre.fatalf.cljs$lang$macro = true);

var ret__4867__auto___17862 = (function (){
taoensso.timbre.reportf = (function taoensso$timbre$reportf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17863 = arguments.length;
var i__4819__auto___17864 = (0);
while(true){
if((i__4819__auto___17864 < len__4818__auto___17863)){
args__4824__auto__.push((arguments[i__4819__auto___17864]));

var G__17865 = (i__4819__auto___17864 + (1));
i__4819__auto___17864 = G__17865;
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
(taoensso.timbre.reportf.cljs$lang$applyTo = (function (seq17859){
var G__17860 = cljs.core.first(seq17859);
var seq17859__$1 = cljs.core.next(seq17859);
var G__17861 = cljs.core.first(seq17859__$1);
var seq17859__$2 = cljs.core.next(seq17859__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17860,G__17861,seq17859__$2);
}));

return null;
})()
;
(taoensso.timbre.reportf.cljs$lang$macro = true);

var ret__4867__auto___17871 = (function (){
taoensso.timbre._log_errors = (function taoensso$timbre$_log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17872 = arguments.length;
var i__4819__auto___17873 = (0);
while(true){
if((i__4819__auto___17873 < len__4818__auto___17872)){
args__4824__auto__.push((arguments[i__4819__auto___17873]));

var G__17874 = (i__4819__auto___17873 + (1));
i__4819__auto___17873 = G__17874;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__17866__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__17866__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_errors.cljs$lang$applyTo = (function (seq17867){
var G__17868 = cljs.core.first(seq17867);
var seq17867__$1 = cljs.core.next(seq17867);
var G__17869 = cljs.core.first(seq17867__$1);
var seq17867__$2 = cljs.core.next(seq17867__$1);
var G__17870 = cljs.core.first(seq17867__$2);
var seq17867__$3 = cljs.core.next(seq17867__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17868,G__17869,G__17870,seq17867__$3);
}));

return null;
})()
;
(taoensso.timbre._log_errors.cljs$lang$macro = true);

var ret__4867__auto___17880 = (function (){
taoensso.timbre._log_and_rethrow_errors = (function taoensso$timbre$_log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17881 = arguments.length;
var i__4819__auto___17882 = (0);
while(true){
if((i__4819__auto___17882 < len__4818__auto___17881)){
args__4824__auto__.push((arguments[i__4819__auto___17882]));

var G__17883 = (i__4819__auto___17882 + (1));
i__4819__auto___17882 = G__17883;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__17875__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__17875__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__17875__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_and_rethrow_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$applyTo = (function (seq17876){
var G__17877 = cljs.core.first(seq17876);
var seq17876__$1 = cljs.core.next(seq17876);
var G__17878 = cljs.core.first(seq17876__$1);
var seq17876__$2 = cljs.core.next(seq17876__$1);
var G__17879 = cljs.core.first(seq17876__$2);
var seq17876__$3 = cljs.core.next(seq17876__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17877,G__17878,G__17879,seq17876__$3);
}));

return null;
})()
;
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___17888 = (function (){
taoensso.timbre._logged_future = (function taoensso$timbre$_logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17889 = arguments.length;
var i__4819__auto___17890 = (0);
while(true){
if((i__4819__auto___17890 < len__4818__auto___17889)){
args__4824__auto__.push((arguments[i__4819__auto___17890]));

var G__17891 = (i__4819__auto___17890 + (1));
i__4819__auto___17890 = G__17891;
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
(taoensso.timbre._logged_future.cljs$lang$applyTo = (function (seq17884){
var G__17885 = cljs.core.first(seq17884);
var seq17884__$1 = cljs.core.next(seq17884);
var G__17886 = cljs.core.first(seq17884__$1);
var seq17884__$2 = cljs.core.next(seq17884__$1);
var G__17887 = cljs.core.first(seq17884__$2);
var seq17884__$3 = cljs.core.next(seq17884__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17885,G__17886,G__17887,seq17884__$3);
}));

return null;
})()
;
(taoensso.timbre._logged_future.cljs$lang$macro = true);

var ret__4867__auto___17895 = (function (){
taoensso.timbre.log_errors = (function taoensso$timbre$log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17896 = arguments.length;
var i__4819__auto___17897 = (0);
while(true){
if((i__4819__auto___17897 < len__4818__auto___17896)){
args__4824__auto__.push((arguments[i__4819__auto___17897]));

var G__17898 = (i__4819__auto___17897 + (1));
i__4819__auto___17897 = G__17898;
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
(taoensso.timbre.log_errors.cljs$lang$applyTo = (function (seq17892){
var G__17893 = cljs.core.first(seq17892);
var seq17892__$1 = cljs.core.next(seq17892);
var G__17894 = cljs.core.first(seq17892__$1);
var seq17892__$2 = cljs.core.next(seq17892__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17893,G__17894,seq17892__$2);
}));

return null;
})()
;
(taoensso.timbre.log_errors.cljs$lang$macro = true);

var ret__4867__auto___17902 = (function (){
taoensso.timbre.log_and_rethrow_errors = (function taoensso$timbre$log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17903 = arguments.length;
var i__4819__auto___17904 = (0);
while(true){
if((i__4819__auto___17904 < len__4818__auto___17903)){
args__4824__auto__.push((arguments[i__4819__auto___17904]));

var G__17905 = (i__4819__auto___17904 + (1));
i__4819__auto___17904 = G__17905;
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
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$applyTo = (function (seq17899){
var G__17900 = cljs.core.first(seq17899);
var seq17899__$1 = cljs.core.next(seq17899);
var G__17901 = cljs.core.first(seq17899__$1);
var seq17899__$2 = cljs.core.next(seq17899__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17900,G__17901,seq17899__$2);
}));

return null;
})()
;
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___17909 = (function (){
taoensso.timbre.logged_future = (function taoensso$timbre$logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17910 = arguments.length;
var i__4819__auto___17911 = (0);
while(true){
if((i__4819__auto___17911 < len__4818__auto___17910)){
args__4824__auto__.push((arguments[i__4819__auto___17911]));

var G__17912 = (i__4819__auto___17911 + (1));
i__4819__auto___17911 = G__17912;
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
(taoensso.timbre.logged_future.cljs$lang$applyTo = (function (seq17906){
var G__17907 = cljs.core.first(seq17906);
var seq17906__$1 = cljs.core.next(seq17906);
var G__17908 = cljs.core.first(seq17906__$1);
var seq17906__$2 = cljs.core.next(seq17906__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17907,G__17908,seq17906__$2);
}));

return null;
})()
;
(taoensso.timbre.logged_future.cljs$lang$macro = true);

var ret__4867__auto___17914 = taoensso.timbre._spy = (function taoensso$timbre$_spy(_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,config,level,name,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_DASH_and_DASH_rethrow_DASH_errors,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__17913__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$result__17913__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_QMARK_line,_QMARK_line,cljs.core.cst$kw$config,config,cljs.core.cst$kw$spying_QMARK_,true], null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$result__17913__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.timbre._spy.cljs$lang$macro = true);

var ret__4867__auto___17917 = (function (){
/**
 * Evaluates named expression and logs its result. Always returns the result.
 *   Defaults to :debug logging level and unevaluated expression as name.
 */
taoensso.timbre.spy = (function taoensso$timbre$spy(var_args){
var G__17916 = arguments.length;
switch (G__17916) {
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

var ret__4867__auto___17919 = taoensso.timbre.get_env = (function taoensso$timbre$get_env(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_get_DASH_env,null,(1),null)))));
});
(taoensso.timbre.get_env.cljs$lang$macro = true);

var ret__4867__auto___17924 = (function (){
taoensso.timbre.with_default_outs = (function taoensso$timbre$with_default_outs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17925 = arguments.length;
var i__4819__auto___17926 = (0);
while(true){
if((i__4819__auto___17926 < len__4818__auto___17925)){
args__4824__auto__.push((arguments[i__4819__auto___17926]));

var G__17927 = (i__4819__auto___17926 + (1));
i__4819__auto___17926 = G__17927;
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
(taoensso.timbre.with_default_outs.cljs$lang$applyTo = (function (seq17921){
var G__17922 = cljs.core.first(seq17921);
var seq17921__$1 = cljs.core.next(seq17921);
var G__17923 = cljs.core.first(seq17921__$1);
var seq17921__$2 = cljs.core.next(seq17921__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17922,G__17923,seq17921__$2);
}));

return null;
})()
;
(taoensso.timbre.with_default_outs.cljs$lang$macro = true);

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__17929 = arguments.length;
switch (G__17929) {
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

var ret__4867__auto___17935 = (function (){
/**
 * Handy for sampled logging, etc.
 */
taoensso.timbre.sometimes = (function taoensso$timbre$sometimes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17936 = arguments.length;
var i__4819__auto___17937 = (0);
while(true){
if((i__4819__auto___17937 < len__4818__auto___17936)){
args__4824__auto__.push((arguments[i__4819__auto___17937]));

var G__17938 = (i__4819__auto___17937 + (1));
i__4819__auto___17937 = G__17938;
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
(taoensso.timbre.sometimes.cljs$lang$applyTo = (function (seq17931){
var G__17932 = cljs.core.first(seq17931);
var seq17931__$1 = cljs.core.next(seq17931);
var G__17933 = cljs.core.first(seq17931__$1);
var seq17931__$2 = cljs.core.next(seq17931__$1);
var G__17934 = cljs.core.first(seq17931__$2);
var seq17931__$3 = cljs.core.next(seq17931__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17932,G__17933,G__17934,seq17931__$3);
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
var len__4818__auto___17953 = arguments.length;
var i__4819__auto___17954 = (0);
while(true){
if((i__4819__auto___17954 < len__4818__auto___17953)){
args__4824__auto__.push((arguments[i__4819__auto___17954]));

var G__17955 = (i__4819__auto___17954 + (1));
i__4819__auto___17954 = G__17955;
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
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq17939){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17939));
}));


var ret__4867__auto___17956 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17957 = arguments.length;
var i__4819__auto___17958 = (0);
while(true){
if((i__4819__auto___17958 < len__4818__auto___17957)){
args__4824__auto__.push((arguments[i__4819__auto___17958]));

var G__17959 = (i__4819__auto___17958 + (1));
i__4819__auto___17958 = G__17959;
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
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq17940){
var G__17941 = cljs.core.first(seq17940);
var seq17940__$1 = cljs.core.next(seq17940);
var G__17942 = cljs.core.first(seq17940__$1);
var seq17940__$2 = cljs.core.next(seq17940__$1);
var G__17943 = cljs.core.first(seq17940__$2);
var seq17940__$3 = cljs.core.next(seq17940__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17941,G__17942,G__17943,seq17940__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__4867__auto___17960 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17961 = arguments.length;
var i__4819__auto___17962 = (0);
while(true){
if((i__4819__auto___17962 < len__4818__auto___17961)){
args__4824__auto__.push((arguments[i__4819__auto___17962]));

var G__17963 = (i__4819__auto___17962 + (1));
i__4819__auto___17962 = G__17963;
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
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq17944){
var G__17945 = cljs.core.first(seq17944);
var seq17944__$1 = cljs.core.next(seq17944);
var G__17946 = cljs.core.first(seq17944__$1);
var seq17944__$2 = cljs.core.next(seq17944__$1);
var G__17947 = cljs.core.first(seq17944__$2);
var seq17944__$3 = cljs.core.next(seq17944__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17945,G__17946,G__17947,seq17944__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__4867__auto___17964 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___17965 = arguments.length;
var i__4819__auto___17966 = (0);
while(true){
if((i__4819__auto___17966 < len__4818__auto___17965)){
args__4824__auto__.push((arguments[i__4819__auto___17966]));

var G__17967 = (i__4819__auto___17966 + (1));
i__4819__auto___17966 = G__17967;
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
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq17948){
var G__17949 = cljs.core.first(seq17948);
var seq17948__$1 = cljs.core.next(seq17948);
var G__17950 = cljs.core.first(seq17948__$1);
var seq17948__$2 = cljs.core.next(seq17948__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17949,G__17950,seq17948__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__4867__auto___17968 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__17952 = arguments.length;
switch (G__17952) {
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

