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
var G__20167 = arguments.length;
switch (G__20167) {
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
var map__20168 = opts;
var map__20168__$1 = cljs.core.__destructure_map(map__20168);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20168__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20168__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__20169 = data;
var map__20169__$1 = cljs.core.__destructure_map(map__20169);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$_QMARK_file);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$_QMARK_line);
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
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_filter,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$timestamp_DASH_opts,taoensso.timbre.default_timestamp_opts,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__20171 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__20171) : taoensso.timbre.console_appender.call(null,G__20171));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$println,(function (){var G__20172 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__20172) : taoensso.timbre.println_appender.call(null,G__20172));
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
var ret__4867__auto___20177 = (function (){
taoensso.timbre.with_config = (function taoensso$timbre$with_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20178 = arguments.length;
var i__4819__auto___20179 = (0);
while(true){
if((i__4819__auto___20179 < len__4818__auto___20178)){
args__4824__auto__.push((arguments[i__4819__auto___20179]));

var G__20180 = (i__4819__auto___20179 + (1));
i__4819__auto___20179 = G__20180;
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
(taoensso.timbre.with_config.cljs$lang$applyTo = (function (seq20173){
var G__20174 = cljs.core.first(seq20173);
var seq20173__$1 = cljs.core.next(seq20173);
var G__20175 = cljs.core.first(seq20173__$1);
var seq20173__$2 = cljs.core.next(seq20173__$1);
var G__20176 = cljs.core.first(seq20173__$2);
var seq20173__$3 = cljs.core.next(seq20173__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20174,G__20175,G__20176,seq20173__$3);
}));

return null;
})()
;
(taoensso.timbre.with_config.cljs$lang$macro = true);

var ret__4867__auto___20185 = (function (){
taoensso.timbre.with_merged_config = (function taoensso$timbre$with_merged_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20186 = arguments.length;
var i__4819__auto___20187 = (0);
while(true){
if((i__4819__auto___20187 < len__4818__auto___20186)){
args__4824__auto__.push((arguments[i__4819__auto___20187]));

var G__20188 = (i__4819__auto___20187 + (1));
i__4819__auto___20187 = G__20188;
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
(taoensso.timbre.with_merged_config.cljs$lang$applyTo = (function (seq20181){
var G__20182 = cljs.core.first(seq20181);
var seq20181__$1 = cljs.core.next(seq20181);
var G__20183 = cljs.core.first(seq20181__$1);
var seq20181__$2 = cljs.core.next(seq20181__$1);
var G__20184 = cljs.core.first(seq20181__$2);
var seq20181__$3 = cljs.core.next(seq20181__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20182,G__20183,G__20184,seq20181__$3);
}));

return null;
})()
;
(taoensso.timbre.with_merged_config.cljs$lang$macro = true);

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
var G__20189 = (function (_old){
return m;
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__20189) : taoensso.timbre.swap_config_BANG_.call(null,G__20189));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
var G__20190 = (function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__20190) : taoensso.timbre.swap_config_BANG_.call(null,G__20190));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20193 = arguments.length;
var i__4819__auto___20194 = (0);
while(true){
if((i__4819__auto___20194 < len__4818__auto___20193)){
args__4824__auto__.push((arguments[i__4819__auto___20194]));

var G__20195 = (i__4819__auto___20194 + (1));
i__4819__auto___20194 = G__20195;
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
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq20191){
var G__20192 = cljs.core.first(seq20191);
var seq20191__$1 = cljs.core.next(seq20191);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20192,seq20191__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$min_DASH_level,level);
}));
});
var ret__4867__auto___20200 = (function (){
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20201 = arguments.length;
var i__4819__auto___20202 = (0);
while(true){
if((i__4819__auto___20202 < len__4818__auto___20201)){
args__4824__auto__.push((arguments[i__4819__auto___20202]));

var G__20203 = (i__4819__auto___20202 + (1));
i__4819__auto___20202 = G__20203;
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
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq20196){
var G__20197 = cljs.core.first(seq20196);
var seq20196__$1 = cljs.core.next(seq20196);
var G__20198 = cljs.core.first(seq20196__$1);
var seq20196__$2 = cljs.core.next(seq20196__$1);
var G__20199 = cljs.core.first(seq20196__$2);
var seq20196__$3 = cljs.core.next(seq20196__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20197,G__20198,G__20199,seq20196__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);

var err_20206 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_20207 = (function (p1__20204_SHARP_){
var G__20205 = p1__20204_SHARP_;
var G__20205__$1 = (((G__20205 instanceof cljs.core.Keyword))?G__20205.fqn:null);
switch (G__20205__$1) {
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
if(cljs.core.truth_(level__GT_int_20207(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_20207(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_20206,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4212__auto__ = level__GT_int_20207(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_20206,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
var valid_level__GT_int_20209 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_20209.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_20209.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_20209.call(null,x)) >= (valid_level__GT_int_20209.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_20209.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_20209.call(null,y)));
});
var fn_QMARK__20215 = cljs.core.fn_QMARK_;
var compile_20216 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__20217 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__20210 = (compile_20216.cljs$core$IFn$_invoke$arity$1 ? compile_20216.cljs$core$IFn$_invoke$arity$1(x) : compile_20216.call(null,x));
return (fexpr__20210.cljs$core$IFn$_invoke$arity$1 ? fexpr__20210.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__20210.call(null,ns));
}));
var conform_QMARK__20218 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__20215.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__20215.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__20215.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return (conform_QMARK__STAR__20217.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__20217.cljs$core$IFn$_invoke$arity$2(ns_filter,ns) : conform_QMARK__STAR__20217.call(null,ns_filter,ns));
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__20218(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome((function (p__20211){
var vec__20212 = p__20211;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(1),null);
if(cljs.core.truth_((conform_QMARK__STAR__20217.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__20217.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns) : conform_QMARK__STAR__20217.call(null,ns_pattern,ns)))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_20220 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_20221 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__20219 = (function (){var or__4212__auto__ = ((cljs.core.vector_QMARK_(x))?(ns__GT__QMARK_min_level_20221.cljs$core$IFn$_invoke$arity$2 ? ns__GT__QMARK_min_level_20221.cljs$core$IFn$_invoke$arity$2(x,ns) : ns__GT__QMARK_min_level_20221.call(null,x,ns)):x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
})();
return (valid_level_20220.cljs$core$IFn$_invoke$arity$1 ? valid_level_20220.cljs$core$IFn$_invoke$arity$1(G__20219) : valid_level_20220.call(null,G__20219));
});
var leglist_20223 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__20222 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__20222.cljs$core$IFn$_invoke$arity$1 ? fexpr__20222.cljs$core$IFn$_invoke$arity$1(x) : fexpr__20222.call(null,x));
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
var ns_whitelist__$1 = leglist_20223(ns_whitelist);
var ns_blacklist__$1 = leglist_20223(ns_blacklist);
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
var level_GT__EQ__20231 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__20232 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_20233 = taoensso.timbre.get_min_level;
var legacy_ns_filter_20234 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__20225 = arguments.length;
switch (G__20225) {
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
var min_level = (function (){var G__20226 = default_min_level;
var G__20227 = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$min_DASH_level);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$level);
}
})();
var G__20228 = _QMARK_ns_str;
return (get_min_level_20233.cljs$core$IFn$_invoke$arity$3 ? get_min_level_20233.cljs$core$IFn$_invoke$arity$3(G__20226,G__20227,G__20228) : get_min_level_20233.call(null,G__20226,G__20227,G__20228));
})();
if(cljs.core.truth_((level_GT__EQ__20231.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__20231.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__20231.call(null,level,min_level)))){
var temp__5751__auto__ = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_filter);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__20229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__20230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
return (legacy_ns_filter_20234.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_20234.cljs$core$IFn$_invoke$arity$2(G__20229,G__20230) : legacy_ns_filter_20234.call(null,G__20229,G__20230));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ns_filter = temp__5751__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__20232.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__20232.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__20232.call(null,ns_filter,_QMARK_ns_str)))){
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
var ret__4867__auto___20240 = (function (){
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
var len__4818__auto___20241 = arguments.length;
var i__4819__auto___20242 = (0);
while(true){
if((i__4819__auto___20242 < len__4818__auto___20241)){
args__4824__auto__.push((arguments[i__4819__auto___20242]));

var G__20243 = (i__4819__auto___20242 + (1));
i__4819__auto___20242 = G__20243;
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
(taoensso.timbre.with_context.cljs$lang$applyTo = (function (seq20236){
var G__20237 = cljs.core.first(seq20236);
var seq20236__$1 = cljs.core.next(seq20236);
var G__20238 = cljs.core.first(seq20236__$1);
var seq20236__$2 = cljs.core.next(seq20236__$1);
var G__20239 = cljs.core.first(seq20236__$2);
var seq20236__$3 = cljs.core.next(seq20236__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20237,G__20238,G__20239,seq20236__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context.cljs$lang$macro = true);

var ret__4867__auto___20248 = (function (){
/**
 * Like `with-context`, but merges given context into current context.
 */
taoensso.timbre.with_context_PLUS_ = (function taoensso$timbre$with_context_PLUS_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20249 = arguments.length;
var i__4819__auto___20250 = (0);
while(true){
if((i__4819__auto___20250 < len__4818__auto___20249)){
args__4824__auto__.push((arguments[i__4819__auto___20250]));

var G__20251 = (i__4819__auto___20250 + (1));
i__4819__auto___20250 = G__20251;
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
(taoensso.timbre.with_context_PLUS_.cljs$lang$applyTo = (function (seq20244){
var G__20245 = cljs.core.first(seq20244);
var seq20244__$1 = cljs.core.next(seq20244);
var G__20246 = cljs.core.first(seq20244__$1);
var seq20244__$2 = cljs.core.next(seq20244__$1);
var G__20247 = cljs.core.first(seq20244__$2);
var seq20244__$3 = cljs.core.next(seq20244__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20245,G__20246,G__20247,seq20244__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context_PLUS_.cljs$lang$macro = true);

/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__20255 = _QMARK_err;
var G__20256 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__20255,G__20256) : taoensso.encore.kw_identical_QMARK_.call(null,G__20255,G__20256));
})();
var fmt_msg_QMARK_ = (function (){var G__20257 = msg_type;
var G__20258 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__20257,G__20258) : taoensso.encore.kw_identical_QMARK_.call(null,G__20257,G__20258));
})();
var vec__20252 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20252,(0),null);
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
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__20259 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20259,(0),null);
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
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__20262 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__20265 = timestamp_opts;
var map__20265__$1 = cljs.core.__destructure_map(map__20265);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20265__$1,cljs.core.cst$kw$pattern);
if(cljs.core.truth_((function (){var G__20266 = pattern;
var G__20267 = cljs.core.cst$kw$iso8601;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__20266,G__20267) : taoensso.encore.kw_identical_QMARK_.call(null,G__20266,G__20267));
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
var G__20269 = arguments.length;
switch (G__20269) {
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
var instant_20285 = (new Date());
var context_20286 = taoensso.timbre._STAR_context_STAR_;
var vargs_20287 = cljs.core.deref(vargs_);
var vec__20270_20288 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_20287);
var _QMARK_err_20289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270_20288,(0),null);
var _QMARK_meta_20290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270_20288,(1),null);
var _QMARK_msg_fmt_20291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270_20288,(2),null);
var vargs_20292__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270_20288,(3),null);
var data_20293 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4212__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$spying_QMARK_,cljs.core.cst$kw$config,cljs.core.cst$kw$vargs,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_,cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$_QMARK_msg_DASH_fmt],[instant_20285,spying_QMARK_,config,vargs_20292__$1,_QMARK_file,(function (){var fexpr__20273 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__20273.cljs$core$IFn$_invoke$arity$1 ? fexpr__20273.cljs$core$IFn$_invoke$arity$1(level) : fexpr__20273.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_20289__$1,context_20286,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_20289__$1;
}),null)),_QMARK_meta_20290,_QMARK_msg_fmt_20291]));
var _QMARK_data_20294 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_20293,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__5753__auto___20295 = _QMARK_data_20294;
if(cljs.core.truth_(temp__5753__auto___20295)){
var data_20296__$1 = temp__5753__auto___20295;
var map__20274_20297 = data_20296__$1;
var map__20274_20298__$1 = cljs.core.__destructure_map(map__20274_20297);
var vargs_20299__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20274_20298__$1,cljs.core.cst$kw$vargs);
var data_20300__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_20296__$1,cljs.core.cst$kw$vargs_,(new cljs.core.Delay((function (){
return vargs_20299__$2;
}),null)));
var data_20301__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_20300__$2,cljs.core.cst$kw$msg_,(new cljs.core.Delay((function (){
var G__20275 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__20275)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__20275)){
return taoensso.timbre.str_join(vargs_20299__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__20275)){
if(typeof _QMARK_msg_fmt_20291 === 'string'){
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

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_20291,vargs_20299__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20275)].join('')));

}
}
}
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hash_,(new cljs.core.Delay((function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_20291,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_QMARK_meta_20290,cljs.core.cst$kw$hash,vargs_20299__$2)], null));
}),null))], 0));
var output_fn1_20302 = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
var timestamp_opts1_20303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$timestamp_DASH_opts));
var get_timestamp__20304 = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_20301__$3,cljs.core.cst$kw$instant));
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
return cljs.core.not((function (){var G__20276 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_20301__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__20276) : rl_fn.call(null,G__20276));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__20277 = appender;
var map__20277__$1 = cljs.core.__destructure_map(map__20277);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (f == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__20278 = f;
var G__20279 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__20278,G__20279) : taoensso.encore.kw_identical_QMARK_.call(null,G__20278,G__20279));
}
})())){
return output_fn1_20302;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = cljs.core.cst$kw$timestamp_DASH_opts.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (opts == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var G__20280 = opts;
var G__20281 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__20280,G__20281) : taoensso.encore.kw_identical_QMARK_.call(null,G__20280,G__20281));
}
})())){
return (get_timestamp__20304.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__20304.cljs$core$IFn$_invoke$arity$1(timestamp_opts1_20303) : get_timestamp__20304.call(null,timestamp_opts1_20303));
} else {
var G__20282 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(timestamp_opts1_20303,opts);
return (get_timestamp__20304.cljs$core$IFn$_invoke$arity$1 ? get_timestamp__20304.cljs$core$IFn$_invoke$arity$1(G__20282) : get_timestamp__20304.call(null,G__20282));
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__20283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_20301__$3,cljs.core.cst$kw$timestamp_,timestamp_);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__20283) : output_fn.call(null,G__20283));
}),null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_20301__$3,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_,cljs.core.cst$kw$timestamp_,timestamp_], null));
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
var ret__4867__auto___20318 = (function (){
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
var len__4818__auto___20319 = arguments.length;
var i__4819__auto___20320 = (0);
while(true){
if((i__4819__auto___20320 < len__4818__auto___20319)){
args__4824__auto__.push((arguments[i__4819__auto___20320]));

var G__20321 = (i__4819__auto___20320 + (1));
i__4819__auto___20320 = G__20321;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((5) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((5)),(0),null)):null);
return taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4825__auto__);
});

(taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,msg_type,args,p__20311){
var vec__20312 = p__20311;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20312,(0),null);
if((function (){var fexpr__20315 = (function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
});
return fexpr__20315(args);
})()){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.timbre",689,"([:or nil? sequential?] args)",args,null,null);
}

var map__20316 = opts;
var map__20316__$1 = cljs.core.__destructure_map(map__20316);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20316__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
var map__20317 = opts;
var map__20317__$1 = cljs.core.__destructure_map(map__20317);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20317__$1,cljs.core.cst$kw$config,cljs.core.cst$sym$taoensso$timbre_SLASH__STAR_config_STAR_);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20317__$1,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$auto);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20317__$1,cljs.core.cst$kw$_QMARK_file,null);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20317__$1,cljs.core.cst$kw$_QMARK_line,taoensso.timbre.fline(_AMPERSAND_form));
var _QMARK_base_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20317__$1,cljs.core.cst$kw$_QMARK_base_DASH_data);
var spying_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20317__$1,cljs.core.cst$kw$spying_QMARK_);
var _QMARK_file__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_file,"NO_SOURCE_PATH"))?_QMARK_file:null);
var callsite_id = cljs.core.hash(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,msg_type,args,_QMARK_ns_str,_QMARK_file__$1,_QMARK_line,cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,_QMARK_ns_str,null,(1),null)),(new cljs.core.List(null,_QMARK_file__$1,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,msg_type,null,(1),null)),(new cljs.core.List(null,_QMARK_err,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_delay,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,_QMARK_base_data,null,(1),null)),(new cljs.core.List(null,callsite_id,null,(1),null)),(new cljs.core.List(null,spying_QMARK_,null,(1),null))], 0))));

}));

(taoensso.timbre.log_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(taoensso.timbre.log_BANG_.cljs$lang$applyTo = (function (seq20305){
var G__20306 = cljs.core.first(seq20305);
var seq20305__$1 = cljs.core.next(seq20305);
var G__20307 = cljs.core.first(seq20305__$1);
var seq20305__$2 = cljs.core.next(seq20305__$1);
var G__20308 = cljs.core.first(seq20305__$2);
var seq20305__$3 = cljs.core.next(seq20305__$2);
var G__20309 = cljs.core.first(seq20305__$3);
var seq20305__$4 = cljs.core.next(seq20305__$3);
var G__20310 = cljs.core.first(seq20305__$4);
var seq20305__$5 = cljs.core.next(seq20305__$4);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20306,G__20307,G__20308,G__20309,G__20310,seq20305__$5);
}));

return null;
})()
;
(taoensso.timbre.log_BANG_.cljs$lang$macro = true);

var ret__4867__auto___20327 = (function (){
taoensso.timbre.log_STAR_ = (function taoensso$timbre$log_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20328 = arguments.length;
var i__4819__auto___20329 = (0);
while(true){
if((i__4819__auto___20329 < len__4818__auto___20328)){
args__4824__auto__.push((arguments[i__4819__auto___20329]));

var G__20330 = (i__4819__auto___20329 + (1));
i__4819__auto___20329 = G__20330;
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
(taoensso.timbre.log_STAR_.cljs$lang$applyTo = (function (seq20322){
var G__20323 = cljs.core.first(seq20322);
var seq20322__$1 = cljs.core.next(seq20322);
var G__20324 = cljs.core.first(seq20322__$1);
var seq20322__$2 = cljs.core.next(seq20322__$1);
var G__20325 = cljs.core.first(seq20322__$2);
var seq20322__$3 = cljs.core.next(seq20322__$2);
var G__20326 = cljs.core.first(seq20322__$3);
var seq20322__$4 = cljs.core.next(seq20322__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20323,G__20324,G__20325,G__20326,seq20322__$4);
}));

return null;
})()
;
(taoensso.timbre.log_STAR_.cljs$lang$macro = true);

var ret__4867__auto___20335 = (function (){
taoensso.timbre.log = (function taoensso$timbre$log(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20336 = arguments.length;
var i__4819__auto___20337 = (0);
while(true){
if((i__4819__auto___20337 < len__4818__auto___20336)){
args__4824__auto__.push((arguments[i__4819__auto___20337]));

var G__20338 = (i__4819__auto___20337 + (1));
i__4819__auto___20337 = G__20338;
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
(taoensso.timbre.log.cljs$lang$applyTo = (function (seq20331){
var G__20332 = cljs.core.first(seq20331);
var seq20331__$1 = cljs.core.next(seq20331);
var G__20333 = cljs.core.first(seq20331__$1);
var seq20331__$2 = cljs.core.next(seq20331__$1);
var G__20334 = cljs.core.first(seq20331__$2);
var seq20331__$3 = cljs.core.next(seq20331__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20332,G__20333,G__20334,seq20331__$3);
}));

return null;
})()
;
(taoensso.timbre.log.cljs$lang$macro = true);

var ret__4867__auto___20342 = (function (){
taoensso.timbre.trace = (function taoensso$timbre$trace(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20343 = arguments.length;
var i__4819__auto___20344 = (0);
while(true){
if((i__4819__auto___20344 < len__4818__auto___20343)){
args__4824__auto__.push((arguments[i__4819__auto___20344]));

var G__20345 = (i__4819__auto___20344 + (1));
i__4819__auto___20344 = G__20345;
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
(taoensso.timbre.trace.cljs$lang$applyTo = (function (seq20339){
var G__20340 = cljs.core.first(seq20339);
var seq20339__$1 = cljs.core.next(seq20339);
var G__20341 = cljs.core.first(seq20339__$1);
var seq20339__$2 = cljs.core.next(seq20339__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20340,G__20341,seq20339__$2);
}));

return null;
})()
;
(taoensso.timbre.trace.cljs$lang$macro = true);

var ret__4867__auto___20349 = (function (){
taoensso.timbre.debug = (function taoensso$timbre$debug(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20350 = arguments.length;
var i__4819__auto___20351 = (0);
while(true){
if((i__4819__auto___20351 < len__4818__auto___20350)){
args__4824__auto__.push((arguments[i__4819__auto___20351]));

var G__20352 = (i__4819__auto___20351 + (1));
i__4819__auto___20351 = G__20352;
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
(taoensso.timbre.debug.cljs$lang$applyTo = (function (seq20346){
var G__20347 = cljs.core.first(seq20346);
var seq20346__$1 = cljs.core.next(seq20346);
var G__20348 = cljs.core.first(seq20346__$1);
var seq20346__$2 = cljs.core.next(seq20346__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20347,G__20348,seq20346__$2);
}));

return null;
})()
;
(taoensso.timbre.debug.cljs$lang$macro = true);

var ret__4867__auto___20356 = (function (){
taoensso.timbre.info = (function taoensso$timbre$info(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20357 = arguments.length;
var i__4819__auto___20358 = (0);
while(true){
if((i__4819__auto___20358 < len__4818__auto___20357)){
args__4824__auto__.push((arguments[i__4819__auto___20358]));

var G__20359 = (i__4819__auto___20358 + (1));
i__4819__auto___20358 = G__20359;
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
(taoensso.timbre.info.cljs$lang$applyTo = (function (seq20353){
var G__20354 = cljs.core.first(seq20353);
var seq20353__$1 = cljs.core.next(seq20353);
var G__20355 = cljs.core.first(seq20353__$1);
var seq20353__$2 = cljs.core.next(seq20353__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20354,G__20355,seq20353__$2);
}));

return null;
})()
;
(taoensso.timbre.info.cljs$lang$macro = true);

var ret__4867__auto___20363 = (function (){
taoensso.timbre.warn = (function taoensso$timbre$warn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20364 = arguments.length;
var i__4819__auto___20365 = (0);
while(true){
if((i__4819__auto___20365 < len__4818__auto___20364)){
args__4824__auto__.push((arguments[i__4819__auto___20365]));

var G__20366 = (i__4819__auto___20365 + (1));
i__4819__auto___20365 = G__20366;
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
(taoensso.timbre.warn.cljs$lang$applyTo = (function (seq20360){
var G__20361 = cljs.core.first(seq20360);
var seq20360__$1 = cljs.core.next(seq20360);
var G__20362 = cljs.core.first(seq20360__$1);
var seq20360__$2 = cljs.core.next(seq20360__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20361,G__20362,seq20360__$2);
}));

return null;
})()
;
(taoensso.timbre.warn.cljs$lang$macro = true);

var ret__4867__auto___20370 = (function (){
taoensso.timbre.error = (function taoensso$timbre$error(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20371 = arguments.length;
var i__4819__auto___20372 = (0);
while(true){
if((i__4819__auto___20372 < len__4818__auto___20371)){
args__4824__auto__.push((arguments[i__4819__auto___20372]));

var G__20373 = (i__4819__auto___20372 + (1));
i__4819__auto___20372 = G__20373;
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
(taoensso.timbre.error.cljs$lang$applyTo = (function (seq20367){
var G__20368 = cljs.core.first(seq20367);
var seq20367__$1 = cljs.core.next(seq20367);
var G__20369 = cljs.core.first(seq20367__$1);
var seq20367__$2 = cljs.core.next(seq20367__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20368,G__20369,seq20367__$2);
}));

return null;
})()
;
(taoensso.timbre.error.cljs$lang$macro = true);

var ret__4867__auto___20377 = (function (){
taoensso.timbre.fatal = (function taoensso$timbre$fatal(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20378 = arguments.length;
var i__4819__auto___20379 = (0);
while(true){
if((i__4819__auto___20379 < len__4818__auto___20378)){
args__4824__auto__.push((arguments[i__4819__auto___20379]));

var G__20380 = (i__4819__auto___20379 + (1));
i__4819__auto___20379 = G__20380;
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
(taoensso.timbre.fatal.cljs$lang$applyTo = (function (seq20374){
var G__20375 = cljs.core.first(seq20374);
var seq20374__$1 = cljs.core.next(seq20374);
var G__20376 = cljs.core.first(seq20374__$1);
var seq20374__$2 = cljs.core.next(seq20374__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20375,G__20376,seq20374__$2);
}));

return null;
})()
;
(taoensso.timbre.fatal.cljs$lang$macro = true);

var ret__4867__auto___20384 = (function (){
taoensso.timbre.report = (function taoensso$timbre$report(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20385 = arguments.length;
var i__4819__auto___20386 = (0);
while(true){
if((i__4819__auto___20386 < len__4818__auto___20385)){
args__4824__auto__.push((arguments[i__4819__auto___20386]));

var G__20387 = (i__4819__auto___20386 + (1));
i__4819__auto___20386 = G__20387;
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
(taoensso.timbre.report.cljs$lang$applyTo = (function (seq20381){
var G__20382 = cljs.core.first(seq20381);
var seq20381__$1 = cljs.core.next(seq20381);
var G__20383 = cljs.core.first(seq20381__$1);
var seq20381__$2 = cljs.core.next(seq20381__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20382,G__20383,seq20381__$2);
}));

return null;
})()
;
(taoensso.timbre.report.cljs$lang$macro = true);

var ret__4867__auto___20393 = (function (){
taoensso.timbre.logf_STAR_ = (function taoensso$timbre$logf_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20394 = arguments.length;
var i__4819__auto___20395 = (0);
while(true){
if((i__4819__auto___20395 < len__4818__auto___20394)){
args__4824__auto__.push((arguments[i__4819__auto___20395]));

var G__20396 = (i__4819__auto___20395 + (1));
i__4819__auto___20395 = G__20396;
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
(taoensso.timbre.logf_STAR_.cljs$lang$applyTo = (function (seq20388){
var G__20389 = cljs.core.first(seq20388);
var seq20388__$1 = cljs.core.next(seq20388);
var G__20390 = cljs.core.first(seq20388__$1);
var seq20388__$2 = cljs.core.next(seq20388__$1);
var G__20391 = cljs.core.first(seq20388__$2);
var seq20388__$3 = cljs.core.next(seq20388__$2);
var G__20392 = cljs.core.first(seq20388__$3);
var seq20388__$4 = cljs.core.next(seq20388__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20389,G__20390,G__20391,G__20392,seq20388__$4);
}));

return null;
})()
;
(taoensso.timbre.logf_STAR_.cljs$lang$macro = true);

var ret__4867__auto___20401 = (function (){
taoensso.timbre.logf = (function taoensso$timbre$logf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20402 = arguments.length;
var i__4819__auto___20403 = (0);
while(true){
if((i__4819__auto___20403 < len__4818__auto___20402)){
args__4824__auto__.push((arguments[i__4819__auto___20403]));

var G__20404 = (i__4819__auto___20403 + (1));
i__4819__auto___20403 = G__20404;
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
(taoensso.timbre.logf.cljs$lang$applyTo = (function (seq20397){
var G__20398 = cljs.core.first(seq20397);
var seq20397__$1 = cljs.core.next(seq20397);
var G__20399 = cljs.core.first(seq20397__$1);
var seq20397__$2 = cljs.core.next(seq20397__$1);
var G__20400 = cljs.core.first(seq20397__$2);
var seq20397__$3 = cljs.core.next(seq20397__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20398,G__20399,G__20400,seq20397__$3);
}));

return null;
})()
;
(taoensso.timbre.logf.cljs$lang$macro = true);

var ret__4867__auto___20408 = (function (){
taoensso.timbre.tracef = (function taoensso$timbre$tracef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20409 = arguments.length;
var i__4819__auto___20410 = (0);
while(true){
if((i__4819__auto___20410 < len__4818__auto___20409)){
args__4824__auto__.push((arguments[i__4819__auto___20410]));

var G__20411 = (i__4819__auto___20410 + (1));
i__4819__auto___20410 = G__20411;
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
(taoensso.timbre.tracef.cljs$lang$applyTo = (function (seq20405){
var G__20406 = cljs.core.first(seq20405);
var seq20405__$1 = cljs.core.next(seq20405);
var G__20407 = cljs.core.first(seq20405__$1);
var seq20405__$2 = cljs.core.next(seq20405__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20406,G__20407,seq20405__$2);
}));

return null;
})()
;
(taoensso.timbre.tracef.cljs$lang$macro = true);

var ret__4867__auto___20415 = (function (){
taoensso.timbre.debugf = (function taoensso$timbre$debugf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20416 = arguments.length;
var i__4819__auto___20417 = (0);
while(true){
if((i__4819__auto___20417 < len__4818__auto___20416)){
args__4824__auto__.push((arguments[i__4819__auto___20417]));

var G__20418 = (i__4819__auto___20417 + (1));
i__4819__auto___20417 = G__20418;
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
(taoensso.timbre.debugf.cljs$lang$applyTo = (function (seq20412){
var G__20413 = cljs.core.first(seq20412);
var seq20412__$1 = cljs.core.next(seq20412);
var G__20414 = cljs.core.first(seq20412__$1);
var seq20412__$2 = cljs.core.next(seq20412__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20413,G__20414,seq20412__$2);
}));

return null;
})()
;
(taoensso.timbre.debugf.cljs$lang$macro = true);

var ret__4867__auto___20422 = (function (){
taoensso.timbre.infof = (function taoensso$timbre$infof(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20423 = arguments.length;
var i__4819__auto___20424 = (0);
while(true){
if((i__4819__auto___20424 < len__4818__auto___20423)){
args__4824__auto__.push((arguments[i__4819__auto___20424]));

var G__20425 = (i__4819__auto___20424 + (1));
i__4819__auto___20424 = G__20425;
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
(taoensso.timbre.infof.cljs$lang$applyTo = (function (seq20419){
var G__20420 = cljs.core.first(seq20419);
var seq20419__$1 = cljs.core.next(seq20419);
var G__20421 = cljs.core.first(seq20419__$1);
var seq20419__$2 = cljs.core.next(seq20419__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20420,G__20421,seq20419__$2);
}));

return null;
})()
;
(taoensso.timbre.infof.cljs$lang$macro = true);

var ret__4867__auto___20429 = (function (){
taoensso.timbre.warnf = (function taoensso$timbre$warnf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20430 = arguments.length;
var i__4819__auto___20431 = (0);
while(true){
if((i__4819__auto___20431 < len__4818__auto___20430)){
args__4824__auto__.push((arguments[i__4819__auto___20431]));

var G__20432 = (i__4819__auto___20431 + (1));
i__4819__auto___20431 = G__20432;
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
(taoensso.timbre.warnf.cljs$lang$applyTo = (function (seq20426){
var G__20427 = cljs.core.first(seq20426);
var seq20426__$1 = cljs.core.next(seq20426);
var G__20428 = cljs.core.first(seq20426__$1);
var seq20426__$2 = cljs.core.next(seq20426__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20427,G__20428,seq20426__$2);
}));

return null;
})()
;
(taoensso.timbre.warnf.cljs$lang$macro = true);

var ret__4867__auto___20436 = (function (){
taoensso.timbre.errorf = (function taoensso$timbre$errorf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20437 = arguments.length;
var i__4819__auto___20438 = (0);
while(true){
if((i__4819__auto___20438 < len__4818__auto___20437)){
args__4824__auto__.push((arguments[i__4819__auto___20438]));

var G__20439 = (i__4819__auto___20438 + (1));
i__4819__auto___20438 = G__20439;
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
(taoensso.timbre.errorf.cljs$lang$applyTo = (function (seq20433){
var G__20434 = cljs.core.first(seq20433);
var seq20433__$1 = cljs.core.next(seq20433);
var G__20435 = cljs.core.first(seq20433__$1);
var seq20433__$2 = cljs.core.next(seq20433__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20434,G__20435,seq20433__$2);
}));

return null;
})()
;
(taoensso.timbre.errorf.cljs$lang$macro = true);

var ret__4867__auto___20443 = (function (){
taoensso.timbre.fatalf = (function taoensso$timbre$fatalf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20444 = arguments.length;
var i__4819__auto___20445 = (0);
while(true){
if((i__4819__auto___20445 < len__4818__auto___20444)){
args__4824__auto__.push((arguments[i__4819__auto___20445]));

var G__20446 = (i__4819__auto___20445 + (1));
i__4819__auto___20445 = G__20446;
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
(taoensso.timbre.fatalf.cljs$lang$applyTo = (function (seq20440){
var G__20441 = cljs.core.first(seq20440);
var seq20440__$1 = cljs.core.next(seq20440);
var G__20442 = cljs.core.first(seq20440__$1);
var seq20440__$2 = cljs.core.next(seq20440__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20441,G__20442,seq20440__$2);
}));

return null;
})()
;
(taoensso.timbre.fatalf.cljs$lang$macro = true);

var ret__4867__auto___20450 = (function (){
taoensso.timbre.reportf = (function taoensso$timbre$reportf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20451 = arguments.length;
var i__4819__auto___20452 = (0);
while(true){
if((i__4819__auto___20452 < len__4818__auto___20451)){
args__4824__auto__.push((arguments[i__4819__auto___20452]));

var G__20453 = (i__4819__auto___20452 + (1));
i__4819__auto___20452 = G__20453;
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
(taoensso.timbre.reportf.cljs$lang$applyTo = (function (seq20447){
var G__20448 = cljs.core.first(seq20447);
var seq20447__$1 = cljs.core.next(seq20447);
var G__20449 = cljs.core.first(seq20447__$1);
var seq20447__$2 = cljs.core.next(seq20447__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20448,G__20449,seq20447__$2);
}));

return null;
})()
;
(taoensso.timbre.reportf.cljs$lang$macro = true);

var ret__4867__auto___20459 = (function (){
taoensso.timbre._log_errors = (function taoensso$timbre$_log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20460 = arguments.length;
var i__4819__auto___20461 = (0);
while(true){
if((i__4819__auto___20461 < len__4818__auto___20460)){
args__4824__auto__.push((arguments[i__4819__auto___20461]));

var G__20462 = (i__4819__auto___20461 + (1));
i__4819__auto___20461 = G__20462;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__20454__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__20454__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_errors.cljs$lang$applyTo = (function (seq20455){
var G__20456 = cljs.core.first(seq20455);
var seq20455__$1 = cljs.core.next(seq20455);
var G__20457 = cljs.core.first(seq20455__$1);
var seq20455__$2 = cljs.core.next(seq20455__$1);
var G__20458 = cljs.core.first(seq20455__$2);
var seq20455__$3 = cljs.core.next(seq20455__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20456,G__20457,G__20458,seq20455__$3);
}));

return null;
})()
;
(taoensso.timbre._log_errors.cljs$lang$macro = true);

var ret__4867__auto___20468 = (function (){
taoensso.timbre._log_and_rethrow_errors = (function taoensso$timbre$_log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20469 = arguments.length;
var i__4819__auto___20470 = (0);
while(true){
if((i__4819__auto___20470 < len__4818__auto___20469)){
args__4824__auto__.push((arguments[i__4819__auto___20470]));

var G__20471 = (i__4819__auto___20470 + (1));
i__4819__auto___20470 = G__20471;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_catching,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$e__20463__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$e__20463__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_line,_QMARK_line], null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$e__20463__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(taoensso.timbre._log_and_rethrow_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$applyTo = (function (seq20464){
var G__20465 = cljs.core.first(seq20464);
var seq20464__$1 = cljs.core.next(seq20464);
var G__20466 = cljs.core.first(seq20464__$1);
var seq20464__$2 = cljs.core.next(seq20464__$1);
var G__20467 = cljs.core.first(seq20464__$2);
var seq20464__$3 = cljs.core.next(seq20464__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20465,G__20466,G__20467,seq20464__$3);
}));

return null;
})()
;
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___20476 = (function (){
taoensso.timbre._logged_future = (function taoensso$timbre$_logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20477 = arguments.length;
var i__4819__auto___20478 = (0);
while(true){
if((i__4819__auto___20478 < len__4818__auto___20477)){
args__4824__auto__.push((arguments[i__4819__auto___20478]));

var G__20479 = (i__4819__auto___20478 + (1));
i__4819__auto___20478 = G__20479;
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
(taoensso.timbre._logged_future.cljs$lang$applyTo = (function (seq20472){
var G__20473 = cljs.core.first(seq20472);
var seq20472__$1 = cljs.core.next(seq20472);
var G__20474 = cljs.core.first(seq20472__$1);
var seq20472__$2 = cljs.core.next(seq20472__$1);
var G__20475 = cljs.core.first(seq20472__$2);
var seq20472__$3 = cljs.core.next(seq20472__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20473,G__20474,G__20475,seq20472__$3);
}));

return null;
})()
;
(taoensso.timbre._logged_future.cljs$lang$macro = true);

var ret__4867__auto___20483 = (function (){
taoensso.timbre.log_errors = (function taoensso$timbre$log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20484 = arguments.length;
var i__4819__auto___20485 = (0);
while(true){
if((i__4819__auto___20485 < len__4818__auto___20484)){
args__4824__auto__.push((arguments[i__4819__auto___20485]));

var G__20486 = (i__4819__auto___20485 + (1));
i__4819__auto___20485 = G__20486;
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
(taoensso.timbre.log_errors.cljs$lang$applyTo = (function (seq20480){
var G__20481 = cljs.core.first(seq20480);
var seq20480__$1 = cljs.core.next(seq20480);
var G__20482 = cljs.core.first(seq20480__$1);
var seq20480__$2 = cljs.core.next(seq20480__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20481,G__20482,seq20480__$2);
}));

return null;
})()
;
(taoensso.timbre.log_errors.cljs$lang$macro = true);

var ret__4867__auto___20490 = (function (){
taoensso.timbre.log_and_rethrow_errors = (function taoensso$timbre$log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20491 = arguments.length;
var i__4819__auto___20492 = (0);
while(true){
if((i__4819__auto___20492 < len__4818__auto___20491)){
args__4824__auto__.push((arguments[i__4819__auto___20492]));

var G__20493 = (i__4819__auto___20492 + (1));
i__4819__auto___20492 = G__20493;
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
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$applyTo = (function (seq20487){
var G__20488 = cljs.core.first(seq20487);
var seq20487__$1 = cljs.core.next(seq20487);
var G__20489 = cljs.core.first(seq20487__$1);
var seq20487__$2 = cljs.core.next(seq20487__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20488,G__20489,seq20487__$2);
}));

return null;
})()
;
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___20497 = (function (){
taoensso.timbre.logged_future = (function taoensso$timbre$logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20498 = arguments.length;
var i__4819__auto___20499 = (0);
while(true){
if((i__4819__auto___20499 < len__4818__auto___20498)){
args__4824__auto__.push((arguments[i__4819__auto___20499]));

var G__20500 = (i__4819__auto___20499 + (1));
i__4819__auto___20499 = G__20500;
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
(taoensso.timbre.logged_future.cljs$lang$applyTo = (function (seq20494){
var G__20495 = cljs.core.first(seq20494);
var seq20494__$1 = cljs.core.next(seq20494);
var G__20496 = cljs.core.first(seq20494__$1);
var seq20494__$2 = cljs.core.next(seq20494__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20495,G__20496,seq20494__$2);
}));

return null;
})()
;
(taoensso.timbre.logged_future.cljs$lang$macro = true);

var ret__4867__auto___20502 = taoensso.timbre._spy = (function taoensso$timbre$_spy(_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,config,level,name,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH__DASH_log_DASH_and_DASH_rethrow_DASH_errors,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__20501__auto__,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_log_BANG_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$p,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$result__20501__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_QMARK_line,_QMARK_line,cljs.core.cst$kw$config,config,cljs.core.cst$kw$spying_QMARK_,true], null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$result__20501__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(taoensso.timbre._spy.cljs$lang$macro = true);

var ret__4867__auto___20505 = (function (){
/**
 * Evaluates named expression and logs its result. Always returns the result.
 *   Defaults to :debug logging level and unevaluated expression as name.
 */
taoensso.timbre.spy = (function taoensso$timbre$spy(var_args){
var G__20504 = arguments.length;
switch (G__20504) {
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

var ret__4867__auto___20507 = taoensso.timbre.get_env = (function taoensso$timbre$get_env(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$encore_SLASH_get_DASH_env,null,(1),null)))));
});
(taoensso.timbre.get_env.cljs$lang$macro = true);

var ret__4867__auto___20512 = (function (){
taoensso.timbre.with_default_outs = (function taoensso$timbre$with_default_outs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20513 = arguments.length;
var i__4819__auto___20514 = (0);
while(true){
if((i__4819__auto___20514 < len__4818__auto___20513)){
args__4824__auto__.push((arguments[i__4819__auto___20514]));

var G__20515 = (i__4819__auto___20514 + (1));
i__4819__auto___20514 = G__20515;
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
(taoensso.timbre.with_default_outs.cljs$lang$applyTo = (function (seq20509){
var G__20510 = cljs.core.first(seq20509);
var seq20509__$1 = cljs.core.next(seq20509);
var G__20511 = cljs.core.first(seq20509__$1);
var seq20509__$2 = cljs.core.next(seq20509__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20510,G__20511,seq20509__$2);
}));

return null;
})()
;
(taoensso.timbre.with_default_outs.cljs$lang$macro = true);

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__20517 = arguments.length;
switch (G__20517) {
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

var ret__4867__auto___20523 = (function (){
/**
 * Handy for sampled logging, etc.
 */
taoensso.timbre.sometimes = (function taoensso$timbre$sometimes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20524 = arguments.length;
var i__4819__auto___20525 = (0);
while(true){
if((i__4819__auto___20525 < len__4818__auto___20524)){
args__4824__auto__.push((arguments[i__4819__auto___20525]));

var G__20526 = (i__4819__auto___20525 + (1));
i__4819__auto___20525 = G__20526;
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
(taoensso.timbre.sometimes.cljs$lang$applyTo = (function (seq20519){
var G__20520 = cljs.core.first(seq20519);
var seq20519__$1 = cljs.core.next(seq20519);
var G__20521 = cljs.core.first(seq20519__$1);
var seq20519__$2 = cljs.core.next(seq20519__$1);
var G__20522 = cljs.core.first(seq20519__$2);
var seq20519__$3 = cljs.core.next(seq20519__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20520,G__20521,G__20522,seq20519__$3);
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
var len__4818__auto___20541 = arguments.length;
var i__4819__auto___20542 = (0);
while(true){
if((i__4819__auto___20542 < len__4818__auto___20541)){
args__4824__auto__.push((arguments[i__4819__auto___20542]));

var G__20543 = (i__4819__auto___20542 + (1));
i__4819__auto___20542 = G__20543;
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
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq20527){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20527));
}));


var ret__4867__auto___20544 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20545 = arguments.length;
var i__4819__auto___20546 = (0);
while(true){
if((i__4819__auto___20546 < len__4818__auto___20545)){
args__4824__auto__.push((arguments[i__4819__auto___20546]));

var G__20547 = (i__4819__auto___20546 + (1));
i__4819__auto___20546 = G__20547;
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
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq20528){
var G__20529 = cljs.core.first(seq20528);
var seq20528__$1 = cljs.core.next(seq20528);
var G__20530 = cljs.core.first(seq20528__$1);
var seq20528__$2 = cljs.core.next(seq20528__$1);
var G__20531 = cljs.core.first(seq20528__$2);
var seq20528__$3 = cljs.core.next(seq20528__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20529,G__20530,G__20531,seq20528__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__4867__auto___20548 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20549 = arguments.length;
var i__4819__auto___20550 = (0);
while(true){
if((i__4819__auto___20550 < len__4818__auto___20549)){
args__4824__auto__.push((arguments[i__4819__auto___20550]));

var G__20551 = (i__4819__auto___20550 + (1));
i__4819__auto___20550 = G__20551;
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
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq20532){
var G__20533 = cljs.core.first(seq20532);
var seq20532__$1 = cljs.core.next(seq20532);
var G__20534 = cljs.core.first(seq20532__$1);
var seq20532__$2 = cljs.core.next(seq20532__$1);
var G__20535 = cljs.core.first(seq20532__$2);
var seq20532__$3 = cljs.core.next(seq20532__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20533,G__20534,G__20535,seq20532__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__4867__auto___20552 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___20553 = arguments.length;
var i__4819__auto___20554 = (0);
while(true){
if((i__4819__auto___20554 < len__4818__auto___20553)){
args__4824__auto__.push((arguments[i__4819__auto___20554]));

var G__20555 = (i__4819__auto___20554 + (1));
i__4819__auto___20554 = G__20555;
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
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq20536){
var G__20537 = cljs.core.first(seq20536);
var seq20536__$1 = cljs.core.next(seq20536);
var G__20538 = cljs.core.first(seq20536__$1);
var seq20536__$2 = cljs.core.next(seq20536__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20537,G__20538,seq20536__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__4867__auto___20556 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__20540 = arguments.length;
switch (G__20540) {
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

