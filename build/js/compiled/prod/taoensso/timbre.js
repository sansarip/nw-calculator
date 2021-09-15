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
var G__18837 = arguments.length;
switch (G__18837) {
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
var map__18838 = opts;
var map__18838__$1 = cljs.core.__destructure_map(map__18838);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18838__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18838__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__18839 = data;
var map__18839__$1 = cljs.core.__destructure_map(map__18839);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$_QMARK_file);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839__$1,cljs.core.cst$kw$_QMARK_line);
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
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_filter,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$timestamp_DASH_opts,taoensso.timbre.default_timestamp_opts,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__18841 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__18841) : taoensso.timbre.console_appender.call(null,G__18841));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$println,(function (){var G__18842 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__18842) : taoensso.timbre.println_appender.call(null,G__18842));
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
var ret__4867__auto___18847 = (function (){
taoensso.timbre.with_config = (function taoensso$timbre$with_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18848 = arguments.length;
var i__4819__auto___18849 = (0);
while(true){
if((i__4819__auto___18849 < len__4818__auto___18848)){
args__4824__auto__.push((arguments[i__4819__auto___18849]));

var G__18850 = (i__4819__auto___18849 + (1));
i__4819__auto___18849 = G__18850;
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
(taoensso.timbre.with_config.cljs$lang$applyTo = (function (seq18843){
var G__18844 = cljs.core.first(seq18843);
var seq18843__$1 = cljs.core.next(seq18843);
var G__18845 = cljs.core.first(seq18843__$1);
var seq18843__$2 = cljs.core.next(seq18843__$1);
var G__18846 = cljs.core.first(seq18843__$2);
var seq18843__$3 = cljs.core.next(seq18843__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18844,G__18845,G__18846,seq18843__$3);
}));

return null;
})()
;
(taoensso.timbre.with_config.cljs$lang$macro = true);

var ret__4867__auto___18855 = (function (){
taoensso.timbre.with_merged_config = (function taoensso$timbre$with_merged_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18856 = arguments.length;
var i__4819__auto___18857 = (0);
while(true){
if((i__4819__auto___18857 < len__4818__auto___18856)){
args__4824__auto__.push((arguments[i__4819__auto___18857]));

var G__18858 = (i__4819__auto___18857 + (1));
i__4819__auto___18857 = G__18858;
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
(taoensso.timbre.with_merged_config.cljs$lang$applyTo = (function (seq18851){
var G__18852 = cljs.core.first(seq18851);
var seq18851__$1 = cljs.core.next(seq18851);
var G__18853 = cljs.core.first(seq18851__$1);
var seq18851__$2 = cljs.core.next(seq18851__$1);
var G__18854 = cljs.core.first(seq18851__$2);
var seq18851__$3 = cljs.core.next(seq18851__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18852,G__18853,G__18854,seq18851__$3);
}));

return null;
})()
;
(taoensso.timbre.with_merged_config.cljs$lang$macro = true);

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
var G__18859 = (function (_old){
return m;
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__18859) : taoensso.timbre.swap_config_BANG_.call(null,G__18859));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
var G__18860 = (function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__18860) : taoensso.timbre.swap_config_BANG_.call(null,G__18860));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18863 = arguments.length;
var i__4819__auto___18864 = (0);
while(true){
if((i__4819__auto___18864 < len__4818__auto___18863)){
args__4824__auto__.push((arguments[i__4819__auto___18864]));

var G__18865 = (i__4819__auto___18864 + (1));
i__4819__auto___18864 = G__18865;
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
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq18861){
var G__18862 = cljs.core.first(seq18861);
var seq18861__$1 = cljs.core.next(seq18861);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18862,seq18861__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$min_DASH_level,level);
}));
});
var ret__4867__auto___18870 = (function (){
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18871 = arguments.length;
var i__4819__auto___18872 = (0);
while(true){
if((i__4819__auto___18872 < len__4818__auto___18871)){
args__4824__auto__.push((arguments[i__4819__auto___18872]));

var G__18873 = (i__4819__auto___18872 + (1));
i__4819__auto___18872 = G__18873;
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
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq18866){
var G__18867 = cljs.core.first(seq18866);
var seq18866__$1 = cljs.core.next(seq18866);
var G__18868 = cljs.core.first(seq18866__$1);
var seq18866__$2 = cljs.core.next(seq18866__$1);
var G__18869 = cljs.core.first(seq18866__$2);
var seq18866__$3 = cljs.core.next(seq18866__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18867,G__18868,G__18869,seq18866__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);

var err_18876 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_18877 = (function (p1__18874_SHARP_){
var G__18875 = p1__18874_SHARP_;
var G__18875__$1 = (((G__18875 instanceof cljs.core.Keyword))?G__18875.fqn:null);
switch (G__18875__$1) {
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
if(cljs.core.truth_(level__GT_int_18877(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_18877(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_18876,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4212__auto__ = level__GT_int_18877(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_18876,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
var valid_level__GT_int_18879 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_18879.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_18879.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_18879.call(null,x)) >= (valid_level__GT_int_18879.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_18879.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_18879.call(null,y)));
});
var fn_QMARK__18885 = cljs.core.fn_QMARK_;
var compile_18886 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__18887 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__18880 = (compile_18886.cljs$core$IFn$_invoke$arity$1 ? compile_18886.cljs$core$IFn$_invoke$arity$1(x) : compile_18886.call(null,x));
return (fexpr__18880.cljs$core$IFn$_invoke$arity$1 ? fexpr__18880.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__18880.call(null,ns));
}));
var conform_QMARK__18888 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__18885.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__18885.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__18885.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return (conform_QMARK__STAR__18887.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__18887.cljs$core$IFn$_invoke$arity$2(ns_filter,ns) : conform_QMARK__STAR__18887.call(null,ns_filter,ns));
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__18888(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome((function (p__18881){
var vec__18882 = p__18881;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18882,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18882,(1),null);
if(cljs.core.truth_((conform_QMARK__STAR__18887.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__18887.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns) : conform_QMARK__STAR__18887.call(null,ns_pattern,ns)))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_18890 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_18891 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__18889 = (function (){var or__4212__auto__ = ((cljs.core.vector_QMARK_(x))?(ns__GT__QMARK_min_level_18891.cljs$core$IFn$_invoke$arity$2 ? ns__GT__QMARK_min_level_18891.cljs$core$IFn$_invoke$arity$2(x,ns) : ns__GT__QMARK_min_level_18891.call(null,x,ns)):x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
})();
return (valid_level_18890.cljs$core$IFn$_invoke$arity$1 ? valid_level_18890.cljs$core$IFn$_invoke$arity$1(G__18889) : valid_level_18890.call(null,G__18889));
});
var leglist_18893 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__18892 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__18892.cljs$core$IFn$_invoke$arity$1 ? fexpr__18892.cljs$core$IFn$_invoke$arity$1(x) : fexpr__18892.call(null,x));
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
var ns_whitelist__$1 = leglist_18893(ns_whitelist);
var ns_blacklist__$1 = leglist_18893(ns_blacklist);
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
var level_GT__EQ__18901 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__18902 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_18903 = taoensso.timbre.get_min_level;
var legacy_ns_filter_18904 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__18895 = arguments.length;
switch (G__18895) {
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
var min_level = (function (){var G__18896 = default_min_level;
var G__18897 = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$min_DASH_level);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$level);
}
})();
var G__18898 = _QMARK_ns_str;
return (get_min_level_18903.cljs$core$IFn$_invoke$arity$3 ? get_min_level_18903.cljs$core$IFn$_invoke$arity$3(G__18896,G__18897,G__18898) : get_min_level_18903.call(null,G__18896,G__18897,G__18898));
})();
if(cljs.core.truth_((level_GT__EQ__18901.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__18901.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__18901.call(null,level,min_level)))){
var temp__5751__auto__ = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_filter);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__18899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__18900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
return (legacy_ns_filter_18904.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_18904.cljs$core$IFn$_invoke$arity$2(G__18899,G__18900) : legacy_ns_filter_18904.call(null,G__18899,G__18900));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ns_filter = temp__5751__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__18902.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__18902.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__18902.call(null,ns_filter,_QMARK_ns_str)))){
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
var ret__4867__auto___18910 = (function (){
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
var len__4818__auto___18911 = arguments.length;
var i__4819__auto___18912 = (0);
while(true){
if((i__4819__auto___18912 < len__4818__auto___18911)){
args__4824__auto__.push((arguments[i__4819__auto___18912]));

var G__18913 = (i__4819__auto___18912 + (1));
i__4819__auto___18912 = G__18913;
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
(taoensso.timbre.with_context.cljs$lang$applyTo = (function (seq18906){
var G__18907 = cljs.core.first(seq18906);
var seq18906__$1 = cljs.core.next(seq18906);
var G__18908 = cljs.core.first(seq18906__$1);
var seq18906__$2 = cljs.core.next(seq18906__$1);
var G__18909 = cljs.core.first(seq18906__$2);
var seq18906__$3 = cljs.core.next(seq18906__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18907,G__18908,G__18909,seq18906__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context.cljs$lang$macro = true);

var ret__4867__auto___18918 = (function (){
/**
 * Like `with-context`, but merges given context into current context.
 */
taoensso.timbre.with_context_PLUS_ = (function taoensso$timbre$with_context_PLUS_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18919 = arguments.length;
var i__4819__auto___18920 = (0);
while(true){
if((i__4819__auto___18920 < len__4818__auto___18919)){
args__4824__auto__.push((arguments[i__4819__auto___18920]));

var G__18921 = (i__4819__auto___18920 + (1));
i__4819__auto___18920 = G__18921;
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
(taoensso.timbre.with_context_PLUS_.cljs$lang$applyTo = (function (seq18914){
var G__18915 = cljs.core.first(seq18914);
var seq18914__$1 = cljs.core.next(seq18914);
var G__18916 = cljs.core.first(seq18914__$1);
var seq18914__$2 = cljs.core.next(seq18914__$1);
var G__18917 = cljs.core.first(seq18914__$2);
var seq18914__$3 = cljs.core.next(seq18914__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18915,G__18916,G__18917,seq18914__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context_PLUS_.cljs$lang$macro = true);

/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__18925 = _QMARK_err;
var G__18926 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__18925,G__18926) : taoensso.encore.kw_identical_QMARK_.call(null,G__18925,G__18926));
})();
var fmt_msg_QMARK_ = (function (){var G__18927 = msg_type;
var G__18928 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__18927,G__18928) : taoensso.encore.kw_identical_QMARK_.call(null,G__18927,G__18928));
})();
var vec__18922 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18922,(0),null);
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
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__18929 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(0),null);
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
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__18932 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__18935 = timestamp_opts;
var map__18935__$1 = cljs.core.__destructure_map(map__18935);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18935__$1,cljs.core.cst$kw$pattern);
if(cljs.core.truth_((function (){var G__18936 = pattern;
var G__18937 = cljs.core.cst$kw$iso8601;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__18936,G__18937) : taoensso.encore.kw_identical_QMARK_.call(null,G__18936,G__18937));
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
var G__18939 = arguments.length;
switch (G__18939) {
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
var instant_18955 = (new Date());
var context_18956 = taoensso.timbre._STAR_context_STAR_;
var vargs_18957 = cljs.core.deref(vargs_);
var vec__18940_18958 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_18957);
var _QMARK_err_18959__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940_18958,(0),null);
var _QMARK_meta_18960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940_18958,(1),null);
var _QMARK_msg_fmt_18961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940_18958,(2),null);
var vargs_18962__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940_18958,(3),null);
var data_18963 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4212__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$spying_QMARK_,cljs.core.cst$kw$config,cljs.core.cst$kw$vargs,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_,cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$_QMARK_msg_DASH_fmt],[instant_18955,spying_QMARK_,config,vargs_18962__$1,_QMARK_file,(function (){var fexpr__18943 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__18943.cljs$core$IFn$_invoke$arity$1 ? fexpr__18943.cljs$core$IFn$_invoke$arity$1(level) : fexpr__18943.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_18959__$1,context_18956,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_18959__$1;
}),null)),_QMARK_meta_18960,_QMARK_msg_fmt_18961]));
var _QMARK_data_18964 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_18963,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__5753__auto___18965 = _QMARK_data_18964;
if(cljs.core.truth_(temp__5753__auto___18965)){
var data_18966__$1 = temp__5753__auto___18965;
var map__18944_18967 = data_18966__$1;
var map__18944_18968__$1 = cljs.core.__destructure_map(map__18944_18967);
var vargs_18969__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18944_18968__$1,cljs.core.cst$kw$vargs);
var data_18970__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_18966__$1,cljs.core.cst$kw$vargs_,(new cljs.core.Delay((function (){
return vargs_18969__$2;
}),null)));
var data_18971__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_18970__$2,cljs.core.cst$kw$msg_,(new cljs.core.Delay((function (){
var G__18945 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18945)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__18945)){
return taoensso.timbre.str_join(vargs_18969__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__18945)){
if(typeof _QMARK_msg_fmt_18961 === 'string'){
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

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_18961,vargs_18969__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18945)].join('')));

}
}
}
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hash_,(new cljs.core.Delay((function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_18961,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_QMARK_meta_18960,cljs.core.cst$kw$hash,vargs_18969__$2)], null));
}),null))], 0));
var output_fn1_18972 = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
var timestamp_opts1_18973 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$timestamp_DASH_opts));
var get_timestamp__18974 = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_18971__$3,cljs.core.cst$kw$instant));
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
return cljs.core.not((function (){var G__18946 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_18971__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__18946) : rl_fn.call(null,G__18946));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__18947 = appender;
var map__18947__$1 = cljs.core.__destructure_map(map__18947);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18947__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18947__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (f == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__18948 = f;
var G__18949 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__18948,G__18949) : taoensso.encore.kw_identical_QMARK_.call(null,G__18948,G__18949));
}
})())){
return output_fn1_18972;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = cljs.core.cst$kw$timestamp_DASH_opts.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (opts == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__18950 = opts;
var G__18951 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__18950,G__18951) : taoensso.encore.kw_identical_QMARK_.call(null,G__18950,G__18951));
}
})())){
return (get_timestamp__18974.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__18974.cljs$core$IFn$_invoke$arity$1(timestamp_opts1_18973) : get_timestamp__18974.call(null,timestamp_opts1_18973));
} else {
var G__18952 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(timestamp_opts1_18973,opts);
return (get_timestamp__18974.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__18974.cljs$core$IFn$_invoke$arity$1(G__18952) : get_timestamp__18974.call(null,G__18952));
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__18953 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_18971__$3,cljs.core.cst$kw$timestamp_,timestamp_);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__18953) : output_fn.call(null,G__18953));
}),null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_18971__$3,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_,cljs.core.cst$kw$timestamp_,timestamp_], null));
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
var ret__4867__auto___18988 = (function (){
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
var len__4818__auto___18989 = arguments.length;
var i__4819__auto___18990 = (0);
while(true){
if((i__4819__auto___18990 < len__4818__auto___18989)){
args__4824__auto__.push((arguments[i__4819__auto___18990]));

var G__18991 = (i__4819__auto___18990 + (1));
i__4819__auto___18990 = G__18991;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((5) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((5)),(0),null)):null);
return taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4825__auto__);
});

(taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,msg_type,args,p__18981){
var vec__18982 = p__18981;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18982,(0),null);
if((function (){var fexpr__18985 = (function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
});
return fexpr__18985(args);
})()){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",689,"([:or nil? sequential?] args)",args,null,null);
}

var map__18986 = opts;
var map__18986__$1 = cljs.core.__destructure_map(map__18986);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18986__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
var map__18987 = opts;
var map__18987__$1 = cljs.core.__destructure_map(map__18987);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18987__$1,cljs.core.cst$kw$config,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18987__$1,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$auto);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18987__$1,cljs.core.cst$kw$_QMARK_file,null);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18987__$1,cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form));
var _QMARK_base_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,cljs.core.cst$kw$_QMARK_base_DASH_data);
var spying_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,cljs.core.cst$kw$spying_QMARK_);
var _QMARK_file__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_file,"NO_SOURCE_PATH"))?_QMARK_file:null);
var callsite_id = cljs.core.hash(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,msg_type,args,_QMARK_ns_str,_QMARK_file__$1,_QMARK_line,cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,_QMARK_ns_str,null,(1),null)),(new cljs.core.List(null,_QMARK_file__$1,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,msg_type,null,(1),null)),(new cljs.core.List(null,_QMARK_err,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_delay,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,_QMARK_base_data,null,(1),null)),(new cljs.core.List(null,callsite_id,null,(1),null)),(new cljs.core.List(null,spying_QMARK_,null,(1),null))], 0))));

}));

(taoensso.timbre.log_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(taoensso.timbre.log_BANG_.cljs$lang$applyTo = (function (seq18975){
var G__18976 = cljs.core.first(seq18975);
var seq18975__$1 = cljs.core.next(seq18975);
var G__18977 = cljs.core.first(seq18975__$1);
var seq18975__$2 = cljs.core.next(seq18975__$1);
var G__18978 = cljs.core.first(seq18975__$2);
var seq18975__$3 = cljs.core.next(seq18975__$2);
var G__18979 = cljs.core.first(seq18975__$3);
var seq18975__$4 = cljs.core.next(seq18975__$3);
var G__18980 = cljs.core.first(seq18975__$4);
var seq18975__$5 = cljs.core.next(seq18975__$4);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18976,G__18977,G__18978,G__18979,G__18980,seq18975__$5);
}));

return null;
})()
;
(taoensso.timbre.log_BANG_.cljs$lang$macro = true);

var ret__4867__auto___18997 = (function (){
taoensso.timbre.log_STAR_ = (function taoensso$timbre$log_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___18998 = arguments.length;
var i__4819__auto___18999 = (0);
while(true){
if((i__4819__auto___18999 < len__4818__auto___18998)){
args__4824__auto__.push((arguments[i__4819__auto___18999]));

var G__19000 = (i__4819__auto___18999 + (1));
i__4819__auto___18999 = G__19000;
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
(taoensso.timbre.log_STAR_.cljs$lang$applyTo = (function (seq18992){
var G__18993 = cljs.core.first(seq18992);
var seq18992__$1 = cljs.core.next(seq18992);
var G__18994 = cljs.core.first(seq18992__$1);
var seq18992__$2 = cljs.core.next(seq18992__$1);
var G__18995 = cljs.core.first(seq18992__$2);
var seq18992__$3 = cljs.core.next(seq18992__$2);
var G__18996 = cljs.core.first(seq18992__$3);
var seq18992__$4 = cljs.core.next(seq18992__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18993,G__18994,G__18995,G__18996,seq18992__$4);
}));

return null;
})()
;
(taoensso.timbre.log_STAR_.cljs$lang$macro = true);

var ret__4867__auto___19005 = (function (){
taoensso.timbre.log = (function taoensso$timbre$log(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19006 = arguments.length;
var i__4819__auto___19007 = (0);
while(true){
if((i__4819__auto___19007 < len__4818__auto___19006)){
args__4824__auto__.push((arguments[i__4819__auto___19007]));

var G__19008 = (i__4819__auto___19007 + (1));
i__4819__auto___19007 = G__19008;
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
(taoensso.timbre.log.cljs$lang$applyTo = (function (seq19001){
var G__19002 = cljs.core.first(seq19001);
var seq19001__$1 = cljs.core.next(seq19001);
var G__19003 = cljs.core.first(seq19001__$1);
var seq19001__$2 = cljs.core.next(seq19001__$1);
var G__19004 = cljs.core.first(seq19001__$2);
var seq19001__$3 = cljs.core.next(seq19001__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19002,G__19003,G__19004,seq19001__$3);
}));

return null;
})()
;
(taoensso.timbre.log.cljs$lang$macro = true);

var ret__4867__auto___19012 = (function (){
taoensso.timbre.trace = (function taoensso$timbre$trace(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19013 = arguments.length;
var i__4819__auto___19014 = (0);
while(true){
if((i__4819__auto___19014 < len__4818__auto___19013)){
args__4824__auto__.push((arguments[i__4819__auto___19014]));

var G__19015 = (i__4819__auto___19014 + (1));
i__4819__auto___19014 = G__19015;
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
(taoensso.timbre.trace.cljs$lang$applyTo = (function (seq19009){
var G__19010 = cljs.core.first(seq19009);
var seq19009__$1 = cljs.core.next(seq19009);
var G__19011 = cljs.core.first(seq19009__$1);
var seq19009__$2 = cljs.core.next(seq19009__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19010,G__19011,seq19009__$2);
}));

return null;
})()
;
(taoensso.timbre.trace.cljs$lang$macro = true);

var ret__4867__auto___19019 = (function (){
taoensso.timbre.debug = (function taoensso$timbre$debug(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19020 = arguments.length;
var i__4819__auto___19021 = (0);
while(true){
if((i__4819__auto___19021 < len__4818__auto___19020)){
args__4824__auto__.push((arguments[i__4819__auto___19021]));

var G__19022 = (i__4819__auto___19021 + (1));
i__4819__auto___19021 = G__19022;
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
(taoensso.timbre.debug.cljs$lang$applyTo = (function (seq19016){
var G__19017 = cljs.core.first(seq19016);
var seq19016__$1 = cljs.core.next(seq19016);
var G__19018 = cljs.core.first(seq19016__$1);
var seq19016__$2 = cljs.core.next(seq19016__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19017,G__19018,seq19016__$2);
}));

return null;
})()
;
(taoensso.timbre.debug.cljs$lang$macro = true);

var ret__4867__auto___19026 = (function (){
taoensso.timbre.info = (function taoensso$timbre$info(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19027 = arguments.length;
var i__4819__auto___19028 = (0);
while(true){
if((i__4819__auto___19028 < len__4818__auto___19027)){
args__4824__auto__.push((arguments[i__4819__auto___19028]));

var G__19029 = (i__4819__auto___19028 + (1));
i__4819__auto___19028 = G__19029;
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
(taoensso.timbre.info.cljs$lang$applyTo = (function (seq19023){
var G__19024 = cljs.core.first(seq19023);
var seq19023__$1 = cljs.core.next(seq19023);
var G__19025 = cljs.core.first(seq19023__$1);
var seq19023__$2 = cljs.core.next(seq19023__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19024,G__19025,seq19023__$2);
}));

return null;
})()
;
(taoensso.timbre.info.cljs$lang$macro = true);

var ret__4867__auto___19033 = (function (){
taoensso.timbre.warn = (function taoensso$timbre$warn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19034 = arguments.length;
var i__4819__auto___19035 = (0);
while(true){
if((i__4819__auto___19035 < len__4818__auto___19034)){
args__4824__auto__.push((arguments[i__4819__auto___19035]));

var G__19036 = (i__4819__auto___19035 + (1));
i__4819__auto___19035 = G__19036;
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
(taoensso.timbre.warn.cljs$lang$applyTo = (function (seq19030){
var G__19031 = cljs.core.first(seq19030);
var seq19030__$1 = cljs.core.next(seq19030);
var G__19032 = cljs.core.first(seq19030__$1);
var seq19030__$2 = cljs.core.next(seq19030__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19031,G__19032,seq19030__$2);
}));

return null;
})()
;
(taoensso.timbre.warn.cljs$lang$macro = true);

var ret__4867__auto___19040 = (function (){
taoensso.timbre.error = (function taoensso$timbre$error(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19041 = arguments.length;
var i__4819__auto___19042 = (0);
while(true){
if((i__4819__auto___19042 < len__4818__auto___19041)){
args__4824__auto__.push((arguments[i__4819__auto___19042]));

var G__19043 = (i__4819__auto___19042 + (1));
i__4819__auto___19042 = G__19043;
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
(taoensso.timbre.error.cljs$lang$applyTo = (function (seq19037){
var G__19038 = cljs.core.first(seq19037);
var seq19037__$1 = cljs.core.next(seq19037);
var G__19039 = cljs.core.first(seq19037__$1);
var seq19037__$2 = cljs.core.next(seq19037__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19038,G__19039,seq19037__$2);
}));

return null;
})()
;
(taoensso.timbre.error.cljs$lang$macro = true);

var ret__4867__auto___19047 = (function (){
taoensso.timbre.fatal = (function taoensso$timbre$fatal(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19048 = arguments.length;
var i__4819__auto___19049 = (0);
while(true){
if((i__4819__auto___19049 < len__4818__auto___19048)){
args__4824__auto__.push((arguments[i__4819__auto___19049]));

var G__19050 = (i__4819__auto___19049 + (1));
i__4819__auto___19049 = G__19050;
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
(taoensso.timbre.fatal.cljs$lang$applyTo = (function (seq19044){
var G__19045 = cljs.core.first(seq19044);
var seq19044__$1 = cljs.core.next(seq19044);
var G__19046 = cljs.core.first(seq19044__$1);
var seq19044__$2 = cljs.core.next(seq19044__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19045,G__19046,seq19044__$2);
}));

return null;
})()
;
(taoensso.timbre.fatal.cljs$lang$macro = true);

var ret__4867__auto___19054 = (function (){
taoensso.timbre.report = (function taoensso$timbre$report(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19055 = arguments.length;
var i__4819__auto___19056 = (0);
while(true){
if((i__4819__auto___19056 < len__4818__auto___19055)){
args__4824__auto__.push((arguments[i__4819__auto___19056]));

var G__19057 = (i__4819__auto___19056 + (1));
i__4819__auto___19056 = G__19057;
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
(taoensso.timbre.report.cljs$lang$applyTo = (function (seq19051){
var G__19052 = cljs.core.first(seq19051);
var seq19051__$1 = cljs.core.next(seq19051);
var G__19053 = cljs.core.first(seq19051__$1);
var seq19051__$2 = cljs.core.next(seq19051__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19052,G__19053,seq19051__$2);
}));

return null;
})()
;
(taoensso.timbre.report.cljs$lang$macro = true);

var ret__4867__auto___19063 = (function (){
taoensso.timbre.logf_STAR_ = (function taoensso$timbre$logf_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19064 = arguments.length;
var i__4819__auto___19065 = (0);
while(true){
if((i__4819__auto___19065 < len__4818__auto___19064)){
args__4824__auto__.push((arguments[i__4819__auto___19065]));

var G__19066 = (i__4819__auto___19065 + (1));
i__4819__auto___19065 = G__19066;
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
(taoensso.timbre.logf_STAR_.cljs$lang$applyTo = (function (seq19058){
var G__19059 = cljs.core.first(seq19058);
var seq19058__$1 = cljs.core.next(seq19058);
var G__19060 = cljs.core.first(seq19058__$1);
var seq19058__$2 = cljs.core.next(seq19058__$1);
var G__19061 = cljs.core.first(seq19058__$2);
var seq19058__$3 = cljs.core.next(seq19058__$2);
var G__19062 = cljs.core.first(seq19058__$3);
var seq19058__$4 = cljs.core.next(seq19058__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19059,G__19060,G__19061,G__19062,seq19058__$4);
}));

return null;
})()
;
(taoensso.timbre.logf_STAR_.cljs$lang$macro = true);

var ret__4867__auto___19071 = (function (){
taoensso.timbre.logf = (function taoensso$timbre$logf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19072 = arguments.length;
var i__4819__auto___19073 = (0);
while(true){
if((i__4819__auto___19073 < len__4818__auto___19072)){
args__4824__auto__.push((arguments[i__4819__auto___19073]));

var G__19074 = (i__4819__auto___19073 + (1));
i__4819__auto___19073 = G__19074;
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
(taoensso.timbre.logf.cljs$lang$applyTo = (function (seq19067){
var G__19068 = cljs.core.first(seq19067);
var seq19067__$1 = cljs.core.next(seq19067);
var G__19069 = cljs.core.first(seq19067__$1);
var seq19067__$2 = cljs.core.next(seq19067__$1);
var G__19070 = cljs.core.first(seq19067__$2);
var seq19067__$3 = cljs.core.next(seq19067__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19068,G__19069,G__19070,seq19067__$3);
}));

return null;
})()
;
(taoensso.timbre.logf.cljs$lang$macro = true);

var ret__4867__auto___19078 = (function (){
taoensso.timbre.tracef = (function taoensso$timbre$tracef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19079 = arguments.length;
var i__4819__auto___19080 = (0);
while(true){
if((i__4819__auto___19080 < len__4818__auto___19079)){
args__4824__auto__.push((arguments[i__4819__auto___19080]));

var G__19081 = (i__4819__auto___19080 + (1));
i__4819__auto___19080 = G__19081;
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
(taoensso.timbre.tracef.cljs$lang$applyTo = (function (seq19075){
var G__19076 = cljs.core.first(seq19075);
var seq19075__$1 = cljs.core.next(seq19075);
var G__19077 = cljs.core.first(seq19075__$1);
var seq19075__$2 = cljs.core.next(seq19075__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19076,G__19077,seq19075__$2);
}));

return null;
})()
;
(taoensso.timbre.tracef.cljs$lang$macro = true);

var ret__4867__auto___19085 = (function (){
taoensso.timbre.debugf = (function taoensso$timbre$debugf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19086 = arguments.length;
var i__4819__auto___19087 = (0);
while(true){
if((i__4819__auto___19087 < len__4818__auto___19086)){
args__4824__auto__.push((arguments[i__4819__auto___19087]));

var G__19088 = (i__4819__auto___19087 + (1));
i__4819__auto___19087 = G__19088;
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
(taoensso.timbre.debugf.cljs$lang$applyTo = (function (seq19082){
var G__19083 = cljs.core.first(seq19082);
var seq19082__$1 = cljs.core.next(seq19082);
var G__19084 = cljs.core.first(seq19082__$1);
var seq19082__$2 = cljs.core.next(seq19082__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19083,G__19084,seq19082__$2);
}));

return null;
})()
;
(taoensso.timbre.debugf.cljs$lang$macro = true);

var ret__4867__auto___19092 = (function (){
taoensso.timbre.infof = (function taoensso$timbre$infof(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19093 = arguments.length;
var i__4819__auto___19094 = (0);
while(true){
if((i__4819__auto___19094 < len__4818__auto___19093)){
args__4824__auto__.push((arguments[i__4819__auto___19094]));

var G__19095 = (i__4819__auto___19094 + (1));
i__4819__auto___19094 = G__19095;
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
(taoensso.timbre.infof.cljs$lang$applyTo = (function (seq19089){
var G__19090 = cljs.core.first(seq19089);
var seq19089__$1 = cljs.core.next(seq19089);
var G__19091 = cljs.core.first(seq19089__$1);
var seq19089__$2 = cljs.core.next(seq19089__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19090,G__19091,seq19089__$2);
}));

return null;
})()
;
(taoensso.timbre.infof.cljs$lang$macro = true);

var ret__4867__auto___19099 = (function (){
taoensso.timbre.warnf = (function taoensso$timbre$warnf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19100 = arguments.length;
var i__4819__auto___19101 = (0);
while(true){
if((i__4819__auto___19101 < len__4818__auto___19100)){
args__4824__auto__.push((arguments[i__4819__auto___19101]));

var G__19102 = (i__4819__auto___19101 + (1));
i__4819__auto___19101 = G__19102;
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
(taoensso.timbre.warnf.cljs$lang$applyTo = (function (seq19096){
var G__19097 = cljs.core.first(seq19096);
var seq19096__$1 = cljs.core.next(seq19096);
var G__19098 = cljs.core.first(seq19096__$1);
var seq19096__$2 = cljs.core.next(seq19096__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19097,G__19098,seq19096__$2);
}));

return null;
})()
;
(taoensso.timbre.warnf.cljs$lang$macro = true);

var ret__4867__auto___19106 = (function (){
taoensso.timbre.errorf = (function taoensso$timbre$errorf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19107 = arguments.length;
var i__4819__auto___19108 = (0);
while(true){
if((i__4819__auto___19108 < len__4818__auto___19107)){
args__4824__auto__.push((arguments[i__4819__auto___19108]));

var G__19109 = (i__4819__auto___19108 + (1));
i__4819__auto___19108 = G__19109;
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
(taoensso.timbre.errorf.cljs$lang$applyTo = (function (seq19103){
var G__19104 = cljs.core.first(seq19103);
var seq19103__$1 = cljs.core.next(seq19103);
var G__19105 = cljs.core.first(seq19103__$1);
var seq19103__$2 = cljs.core.next(seq19103__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19104,G__19105,seq19103__$2);
}));

return null;
})()
;
(taoensso.timbre.errorf.cljs$lang$macro = true);

var ret__4867__auto___19113 = (function (){
taoensso.timbre.fatalf = (function taoensso$timbre$fatalf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19114 = arguments.length;
var i__4819__auto___19115 = (0);
while(true){
if((i__4819__auto___19115 < len__4818__auto___19114)){
args__4824__auto__.push((arguments[i__4819__auto___19115]));

var G__19116 = (i__4819__auto___19115 + (1));
i__4819__auto___19115 = G__19116;
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
(taoensso.timbre.fatalf.cljs$lang$applyTo = (function (seq19110){
var G__19111 = cljs.core.first(seq19110);
var seq19110__$1 = cljs.core.next(seq19110);
var G__19112 = cljs.core.first(seq19110__$1);
var seq19110__$2 = cljs.core.next(seq19110__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19111,G__19112,seq19110__$2);
}));

return null;
})()
;
(taoensso.timbre.fatalf.cljs$lang$macro = true);

var ret__4867__auto___19120 = (function (){
taoensso.timbre.reportf = (function taoensso$timbre$reportf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19121 = arguments.length;
var i__4819__auto___19122 = (0);
while(true){
if((i__4819__auto___19122 < len__4818__auto___19121)){
args__4824__auto__.push((arguments[i__4819__auto___19122]));

var G__19123 = (i__4819__auto___19122 + (1));
i__4819__auto___19122 = G__19123;
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
(taoensso.timbre.reportf.cljs$lang$applyTo = (function (seq19117){
var G__19118 = cljs.core.first(seq19117);
var seq19117__$1 = cljs.core.next(seq19117);
var G__19119 = cljs.core.first(seq19117__$1);
var seq19117__$2 = cljs.core.next(seq19117__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19118,G__19119,seq19117__$2);
}));

return null;
})()
;
(taoensso.timbre.reportf.cljs$lang$macro = true);

var ret__4867__auto___19129 = (function (){
taoensso.timbre._log_errors = (function taoensso$timbre$_log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19130 = arguments.length;
var i__4819__auto___19131 = (0);
while(true){
if((i__4819__auto___19131 < len__4818__auto___19130)){
args__4824__auto__.push((arguments[i__4819__auto___19131]));

var G__19132 = (i__4819__auto___19131 + (1));
i__4819__auto___19131 = G__19132;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__19124__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__19124__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_errors.cljs$lang$applyTo = (function (seq19125){
var G__19126 = cljs.core.first(seq19125);
var seq19125__$1 = cljs.core.next(seq19125);
var G__19127 = cljs.core.first(seq19125__$1);
var seq19125__$2 = cljs.core.next(seq19125__$1);
var G__19128 = cljs.core.first(seq19125__$2);
var seq19125__$3 = cljs.core.next(seq19125__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19126,G__19127,G__19128,seq19125__$3);
}));

return null;
})()
;
(taoensso.timbre._log_errors.cljs$lang$macro = true);

var ret__4867__auto___19138 = (function (){
taoensso.timbre._log_and_rethrow_errors = (function taoensso$timbre$_log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19139 = arguments.length;
var i__4819__auto___19140 = (0);
while(true){
if((i__4819__auto___19140 < len__4818__auto___19139)){
args__4824__auto__.push((arguments[i__4819__auto___19140]));

var G__19141 = (i__4819__auto___19140 + (1));
i__4819__auto___19140 = G__19141;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__19133__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__19133__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__19133__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_and_rethrow_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$applyTo = (function (seq19134){
var G__19135 = cljs.core.first(seq19134);
var seq19134__$1 = cljs.core.next(seq19134);
var G__19136 = cljs.core.first(seq19134__$1);
var seq19134__$2 = cljs.core.next(seq19134__$1);
var G__19137 = cljs.core.first(seq19134__$2);
var seq19134__$3 = cljs.core.next(seq19134__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19135,G__19136,G__19137,seq19134__$3);
}));

return null;
})()
;
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___19146 = (function (){
taoensso.timbre._logged_future = (function taoensso$timbre$_logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19147 = arguments.length;
var i__4819__auto___19148 = (0);
while(true){
if((i__4819__auto___19148 < len__4818__auto___19147)){
args__4824__auto__.push((arguments[i__4819__auto___19148]));

var G__19149 = (i__4819__auto___19148 + (1));
i__4819__auto___19148 = G__19149;
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
(taoensso.timbre._logged_future.cljs$lang$applyTo = (function (seq19142){
var G__19143 = cljs.core.first(seq19142);
var seq19142__$1 = cljs.core.next(seq19142);
var G__19144 = cljs.core.first(seq19142__$1);
var seq19142__$2 = cljs.core.next(seq19142__$1);
var G__19145 = cljs.core.first(seq19142__$2);
var seq19142__$3 = cljs.core.next(seq19142__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19143,G__19144,G__19145,seq19142__$3);
}));

return null;
})()
;
(taoensso.timbre._logged_future.cljs$lang$macro = true);

var ret__4867__auto___19153 = (function (){
taoensso.timbre.log_errors = (function taoensso$timbre$log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19154 = arguments.length;
var i__4819__auto___19155 = (0);
while(true){
if((i__4819__auto___19155 < len__4818__auto___19154)){
args__4824__auto__.push((arguments[i__4819__auto___19155]));

var G__19156 = (i__4819__auto___19155 + (1));
i__4819__auto___19155 = G__19156;
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
(taoensso.timbre.log_errors.cljs$lang$applyTo = (function (seq19150){
var G__19151 = cljs.core.first(seq19150);
var seq19150__$1 = cljs.core.next(seq19150);
var G__19152 = cljs.core.first(seq19150__$1);
var seq19150__$2 = cljs.core.next(seq19150__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19151,G__19152,seq19150__$2);
}));

return null;
})()
;
(taoensso.timbre.log_errors.cljs$lang$macro = true);

var ret__4867__auto___19160 = (function (){
taoensso.timbre.log_and_rethrow_errors = (function taoensso$timbre$log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19161 = arguments.length;
var i__4819__auto___19162 = (0);
while(true){
if((i__4819__auto___19162 < len__4818__auto___19161)){
args__4824__auto__.push((arguments[i__4819__auto___19162]));

var G__19163 = (i__4819__auto___19162 + (1));
i__4819__auto___19162 = G__19163;
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
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$applyTo = (function (seq19157){
var G__19158 = cljs.core.first(seq19157);
var seq19157__$1 = cljs.core.next(seq19157);
var G__19159 = cljs.core.first(seq19157__$1);
var seq19157__$2 = cljs.core.next(seq19157__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19158,G__19159,seq19157__$2);
}));

return null;
})()
;
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___19167 = (function (){
taoensso.timbre.logged_future = (function taoensso$timbre$logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19168 = arguments.length;
var i__4819__auto___19169 = (0);
while(true){
if((i__4819__auto___19169 < len__4818__auto___19168)){
args__4824__auto__.push((arguments[i__4819__auto___19169]));

var G__19170 = (i__4819__auto___19169 + (1));
i__4819__auto___19169 = G__19170;
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
(taoensso.timbre.logged_future.cljs$lang$applyTo = (function (seq19164){
var G__19165 = cljs.core.first(seq19164);
var seq19164__$1 = cljs.core.next(seq19164);
var G__19166 = cljs.core.first(seq19164__$1);
var seq19164__$2 = cljs.core.next(seq19164__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19165,G__19166,seq19164__$2);
}));

return null;
})()
;
(taoensso.timbre.logged_future.cljs$lang$macro = true);

var ret__4867__auto___19172 = taoensso.timbre._spy = (function taoensso$timbre$_spy(_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,config,level,name,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_DASH_and_DASH_rethrow_DASH_errors,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__19171__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$result__19171__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_QMARK_line,_QMARK_line,cljs.core.cst$kw$config,config,cljs.core.cst$kw$spying_QMARK_,true], null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$result__19171__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.timbre._spy.cljs$lang$macro = true);

var ret__4867__auto___19175 = (function (){
/**
 * Evaluates named expression and logs its result. Always returns the result.
 *   Defaults to :debug logging level and unevaluated expression as name.
 */
taoensso.timbre.spy = (function taoensso$timbre$spy(var_args){
var G__19174 = arguments.length;
switch (G__19174) {
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

var ret__4867__auto___19177 = taoensso.timbre.get_env = (function taoensso$timbre$get_env(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_get_DASH_env,null,(1),null)))));
});
(taoensso.timbre.get_env.cljs$lang$macro = true);

var ret__4867__auto___19182 = (function (){
taoensso.timbre.with_default_outs = (function taoensso$timbre$with_default_outs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19183 = arguments.length;
var i__4819__auto___19184 = (0);
while(true){
if((i__4819__auto___19184 < len__4818__auto___19183)){
args__4824__auto__.push((arguments[i__4819__auto___19184]));

var G__19185 = (i__4819__auto___19184 + (1));
i__4819__auto___19184 = G__19185;
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
(taoensso.timbre.with_default_outs.cljs$lang$applyTo = (function (seq19179){
var G__19180 = cljs.core.first(seq19179);
var seq19179__$1 = cljs.core.next(seq19179);
var G__19181 = cljs.core.first(seq19179__$1);
var seq19179__$2 = cljs.core.next(seq19179__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19180,G__19181,seq19179__$2);
}));

return null;
})()
;
(taoensso.timbre.with_default_outs.cljs$lang$macro = true);

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__19187 = arguments.length;
switch (G__19187) {
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

var ret__4867__auto___19193 = (function (){
/**
 * Handy for sampled logging, etc.
 */
taoensso.timbre.sometimes = (function taoensso$timbre$sometimes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19194 = arguments.length;
var i__4819__auto___19195 = (0);
while(true){
if((i__4819__auto___19195 < len__4818__auto___19194)){
args__4824__auto__.push((arguments[i__4819__auto___19195]));

var G__19196 = (i__4819__auto___19195 + (1));
i__4819__auto___19195 = G__19196;
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
(taoensso.timbre.sometimes.cljs$lang$applyTo = (function (seq19189){
var G__19190 = cljs.core.first(seq19189);
var seq19189__$1 = cljs.core.next(seq19189);
var G__19191 = cljs.core.first(seq19189__$1);
var seq19189__$2 = cljs.core.next(seq19189__$1);
var G__19192 = cljs.core.first(seq19189__$2);
var seq19189__$3 = cljs.core.next(seq19189__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19190,G__19191,G__19192,seq19189__$3);
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
var len__4818__auto___19211 = arguments.length;
var i__4819__auto___19212 = (0);
while(true){
if((i__4819__auto___19212 < len__4818__auto___19211)){
args__4824__auto__.push((arguments[i__4819__auto___19212]));

var G__19213 = (i__4819__auto___19212 + (1));
i__4819__auto___19212 = G__19213;
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
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq19197){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19197));
}));


var ret__4867__auto___19214 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19215 = arguments.length;
var i__4819__auto___19216 = (0);
while(true){
if((i__4819__auto___19216 < len__4818__auto___19215)){
args__4824__auto__.push((arguments[i__4819__auto___19216]));

var G__19217 = (i__4819__auto___19216 + (1));
i__4819__auto___19216 = G__19217;
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
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq19198){
var G__19199 = cljs.core.first(seq19198);
var seq19198__$1 = cljs.core.next(seq19198);
var G__19200 = cljs.core.first(seq19198__$1);
var seq19198__$2 = cljs.core.next(seq19198__$1);
var G__19201 = cljs.core.first(seq19198__$2);
var seq19198__$3 = cljs.core.next(seq19198__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19199,G__19200,G__19201,seq19198__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__4867__auto___19218 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19219 = arguments.length;
var i__4819__auto___19220 = (0);
while(true){
if((i__4819__auto___19220 < len__4818__auto___19219)){
args__4824__auto__.push((arguments[i__4819__auto___19220]));

var G__19221 = (i__4819__auto___19220 + (1));
i__4819__auto___19220 = G__19221;
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
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq19202){
var G__19203 = cljs.core.first(seq19202);
var seq19202__$1 = cljs.core.next(seq19202);
var G__19204 = cljs.core.first(seq19202__$1);
var seq19202__$2 = cljs.core.next(seq19202__$1);
var G__19205 = cljs.core.first(seq19202__$2);
var seq19202__$3 = cljs.core.next(seq19202__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19203,G__19204,G__19205,seq19202__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__4867__auto___19222 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___19223 = arguments.length;
var i__4819__auto___19224 = (0);
while(true){
if((i__4819__auto___19224 < len__4818__auto___19223)){
args__4824__auto__.push((arguments[i__4819__auto___19224]));

var G__19225 = (i__4819__auto___19224 + (1));
i__4819__auto___19224 = G__19225;
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
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq19206){
var G__19207 = cljs.core.first(seq19206);
var seq19206__$1 = cljs.core.next(seq19206);
var G__19208 = cljs.core.first(seq19206__$1);
var seq19206__$2 = cljs.core.next(seq19206__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19207,G__19208,seq19206__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__4867__auto___19226 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__19210 = arguments.length;
switch (G__19210) {
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

