// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.i18n.DateTimeFormat');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(126),(2)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.126);
}
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"iso8601","iso8601",609352650)], null);
/**
 * Default (fn [data]) -> string output fn.
 *  Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__15452 = arguments.length;
switch (G__15452) {
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
return taoensso.timbre.default_output_fn.call(null,null,data);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__15453 = opts;
var map__15453__$1 = cljs.core.__destructure_map.call(null,map__15453);
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__15453__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.call(null,map__15453__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__15454 = data;
var map__15454__$1 = cljs.core.__destructure_map.call(null,map__15454);
var level = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [(function (){var temp__5753__auto__ = cljs.core.force.call(null,timestamp_);
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," "].join('');
} else {
return null;
}
})(),clojure.string.upper_case.call(null,cljs.core.name.call(null,level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = _QMARK_ns_str;
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
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force.call(null,msg_)),(cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return [taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
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
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807),taoensso.timbre.default_timestamp_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"println","println",1920840330),taoensso.timbre.println_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null))], null);
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
var ret__4867__auto___15460 = (function (){
taoensso.timbre.with_config = (function taoensso$timbre$with_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15461 = arguments.length;
var i__4819__auto___15462 = (0);
while(true){
if((i__4819__auto___15462 < len__4818__auto___15461)){
args__4824__auto__.push((arguments[i__4819__auto___15462]));

var G__15463 = (i__4819__auto___15462 + (1));
i__4819__auto___15462 = G__15463;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_config.cljs$lang$applyTo = (function (seq15456){
var G__15457 = cljs.core.first.call(null,seq15456);
var seq15456__$1 = cljs.core.next.call(null,seq15456);
var G__15458 = cljs.core.first.call(null,seq15456__$1);
var seq15456__$2 = cljs.core.next.call(null,seq15456__$1);
var G__15459 = cljs.core.first.call(null,seq15456__$2);
var seq15456__$3 = cljs.core.next.call(null,seq15456__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15457,G__15458,G__15459,seq15456__$3);
}));

return null;
})()
;
(taoensso.timbre.with_config.cljs$lang$macro = true);

var ret__4867__auto___15468 = (function (){
taoensso.timbre.with_merged_config = (function taoensso$timbre$with_merged_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15469 = arguments.length;
var i__4819__auto___15470 = (0);
while(true){
if((i__4819__auto___15470 < len__4818__auto___15469)){
args__4824__auto__.push((arguments[i__4819__auto___15470]));

var G__15471 = (i__4819__auto___15470 + (1));
i__4819__auto___15470 = G__15471;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","nested-merge","taoensso.encore/nested-merge",-258675759,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_merged_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_merged_config.cljs$lang$applyTo = (function (seq15464){
var G__15465 = cljs.core.first.call(null,seq15464);
var seq15464__$1 = cljs.core.next.call(null,seq15464);
var G__15466 = cljs.core.first.call(null,seq15464__$1);
var seq15464__$2 = cljs.core.next.call(null,seq15464__$1);
var G__15467 = cljs.core.first.call(null,seq15464__$2);
var seq15464__$3 = cljs.core.next.call(null,seq15464__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15465,G__15466,G__15467,seq15464__$3);
}));

return null;
})()
;
(taoensso.timbre.with_merged_config.cljs$lang$macro = true);

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,m);
}));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15474 = arguments.length;
var i__4819__auto___15475 = (0);
while(true){
if((i__4819__auto___15475 < len__4818__auto___15474)){
args__4824__auto__.push((arguments[i__4819__auto___15475]));

var G__15476 = (i__4819__auto___15475 + (1));
i__4819__auto___15475 = G__15476;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.call(null,f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq15472){
var G__15473 = cljs.core.first.call(null,seq15472);
var seq15472__$1 = cljs.core.next.call(null,seq15472);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15473,seq15472__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"min-level","min-level",1634684919),level);
}));
});
var ret__4867__auto___15481 = (function (){
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15482 = arguments.length;
var i__4819__auto___15483 = (0);
while(true){
if((i__4819__auto___15483 < len__4818__auto___15482)){
args__4824__auto__.push((arguments[i__4819__auto___15483]));

var G__15484 = (i__4819__auto___15483 + (1));
i__4819__auto___15483 = G__15484;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,(1),null)),(new cljs.core.List(null,level,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq15477){
var G__15478 = cljs.core.first.call(null,seq15477);
var seq15477__$1 = cljs.core.next.call(null,seq15477);
var G__15479 = cljs.core.first.call(null,seq15477__$1);
var seq15477__$2 = cljs.core.next.call(null,seq15477__$1);
var G__15480 = cljs.core.first.call(null,seq15477__$2);
var seq15477__$3 = cljs.core.next.call(null,seq15477__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15478,G__15479,G__15480,seq15477__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);

var err_15487 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_15488 = (function (p1__15485_SHARP_){
var G__15486 = p1__15485_SHARP_;
var G__15486__$1 = (((G__15486 instanceof cljs.core.Keyword))?G__15486.fqn:null);
switch (G__15486__$1) {
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
if(cljs.core.truth_(level__GT_int_15488.call(null,x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_15488.call(null,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,err_15487,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4212__auto__ = level__GT_int_15488.call(null,x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.call(null,err_15487,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
var valid_level__GT_int_15490 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (valid_level__GT_int_15490.call(null,x) >= valid_level__GT_int_15490.call(null,y));
});
var fn_QMARK__15495 = cljs.core.fn_QMARK_;
var compile_15496 = taoensso.encore.fmemoize.call(null,(function (x){
return taoensso.encore.compile_str_filter.call(null,x);
}));
var conform_QMARK__STAR__15497 = taoensso.encore.fmemoize.call(null,(function (x,ns){
return compile_15496.call(null,x).call(null,ns);
}));
var conform_QMARK__15498 = (function (ns_filter,ns){
if(cljs.core.truth_(fn_QMARK__15495.call(null,ns_filter))){
return ns_filter.call(null,ns);
} else {
return conform_QMARK__STAR__15497.call(null,ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__15498.call(null,ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize.call(null,(function (specs,ns){
return taoensso.encore.rsome.call(null,(function (p__15491){
var vec__15492 = p__15491;
var ns_pattern = cljs.core.nth.call(null,vec__15492,(0),null);
var min_level = cljs.core.nth.call(null,vec__15492,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__15497.call(null,ns_pattern,ns))){
return taoensso.timbre.valid_level.call(null,min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_15499 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_15500 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
return valid_level_15499.call(null,(function (){var or__4212__auto__ = ((cljs.core.vector_QMARK_.call(null,x))?ns__GT__QMARK_min_level_15500.call(null,x,ns):x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
})());
});
var leglist_15501 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]).call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_15501.call(null,ns_whitelist);
var ns_blacklist__$1 = leglist_15501.call(null,ns_blacklist);
if(cljs.core.truth_((function (){var or__4212__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),ns_whitelist__$1,new cljs.core.Keyword(null,"deny","deny",1589338523),ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__15504 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__15505 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_15506 = taoensso.timbre.get_min_level;
var legacy_ns_filter_15507 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__15503 = arguments.length;
switch (G__15503) {
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
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__4212__auto__ = _QMARK_config;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = get_min_level_15506.call(null,default_min_level,(function (){var or__4212__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.call(null,config,new cljs.core.Keyword(null,"level","level",1290497552));
}
})(),_QMARK_ns_str);
if(cljs.core.truth_(level_GT__EQ__15504.call(null,level,min_level))){
var temp__5751__auto__ = (function (){var or__4212__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return legacy_ns_filter_15507.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774)),cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142)));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ns_filter = temp__5751__auto__;
if(cljs.core.truth_(may_log_ns_QMARK__15505.call(null,ns_filter,_QMARK_ns_str))){
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
return taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,(function (x){
var x__$1 = taoensso.encore.nil__GT_str.call(null,x);
if(cljs.core.record_QMARK_.call(null,x__$1)){
return cljs.core.pr_str.call(null,x__$1);
} else {
return x__$1;

}
})),xs);
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize.call(null,(function (appender_id,specs){
return taoensso.encore.limiter.call(null,specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
var ret__4867__auto___15513 = (function (){
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
var len__4818__auto___15514 = arguments.length;
var i__4819__auto___15515 = (0);
while(true){
if((i__4819__auto___15515 < len__4818__auto___15514)){
args__4824__auto__.push((arguments[i__4819__auto___15515]));

var G__15516 = (i__4819__auto___15515 + (1));
i__4819__auto___15515 = G__15516;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context.cljs$lang$applyTo = (function (seq15509){
var G__15510 = cljs.core.first.call(null,seq15509);
var seq15509__$1 = cljs.core.next.call(null,seq15509);
var G__15511 = cljs.core.first.call(null,seq15509__$1);
var seq15509__$2 = cljs.core.next.call(null,seq15509__$1);
var G__15512 = cljs.core.first.call(null,seq15509__$2);
var seq15509__$3 = cljs.core.next.call(null,seq15509__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15510,G__15511,G__15512,seq15509__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context.cljs$lang$macro = true);

var ret__4867__auto___15521 = (function (){
/**
 * Like `with-context`, but merges given context into current context.
 */
taoensso.timbre.with_context_PLUS_ = (function taoensso$timbre$with_context_PLUS_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15522 = arguments.length;
var i__4819__auto___15523 = (0);
while(true){
if((i__4819__auto___15523 < len__4818__auto___15522)){
args__4824__auto__.push((arguments[i__4819__auto___15523]));

var G__15524 = (i__4819__auto___15523 + (1));
i__4819__auto___15523 = G__15524;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,context,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_context_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context_PLUS_.cljs$lang$applyTo = (function (seq15517){
var G__15518 = cljs.core.first.call(null,seq15517);
var seq15517__$1 = cljs.core.next.call(null,seq15517);
var G__15519 = cljs.core.first.call(null,seq15517__$1);
var seq15517__$2 = cljs.core.next.call(null,seq15517__$1);
var G__15520 = cljs.core.first.call(null,seq15517__$2);
var seq15517__$3 = cljs.core.next.call(null,seq15517__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15518,G__15519,G__15520,seq15517__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context_PLUS_.cljs$lang$macro = true);

/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492));
var fmt_msg_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552));
var vec__15525 = vargs;
var v0 = cljs.core.nth.call(null,vec__15525,(0),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return taoensso.encore.error_QMARK_.call(null,v0);
} else {
return and__4210__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest.call(null,vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__15528 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__15528,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.map_QMARK_.call(null,v0);
if(and__4210__auto__){
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v0));
} else {
return and__4210__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
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
var _QMARK_meta__$1 = cljs.core.dissoc.call(null,_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest.call(null,vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__15531 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__15531,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__15534 = timestamp_opts;
var map__15534__$1 = cljs.core.__destructure_map.call(null,map__15534);
var pattern = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650)))){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__15536 = arguments.length;
switch (G__15536) {
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
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,config)){
var instant_15544 = (new Date());
var context_15545 = taoensso.timbre._STAR_context_STAR_;
var vargs_15546 = cljs.core.deref.call(null,vargs_);
var vec__15537_15547 = taoensso.timbre.parse_vargs.call(null,_QMARK_err,msg_type,vargs_15546);
var _QMARK_err_15548__$1 = cljs.core.nth.call(null,vec__15537_15547,(0),null);
var _QMARK_meta_15549 = cljs.core.nth.call(null,vec__15537_15547,(1),null);
var _QMARK_msg_fmt_15550 = cljs.core.nth.call(null,vec__15537_15547,(2),null);
var vargs_15551__$1 = cljs.core.nth.call(null,vec__15537_15547,(3),null);
var data_15552 = cljs.core.conj.call(null,(function (){var or__4212__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"spying?","spying?",1753444487),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891)],[instant_15544,spying_QMARK_,config,vargs_15551__$1,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,_QMARK_err_15548__$1,context_15545,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_15548__$1;
}),null)),_QMARK_meta_15549,_QMARK_msg_fmt_15550]));
var _QMARK_data_15553 = cljs.core.reduce.call(null,(function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
}),data_15552,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__5753__auto___15554 = _QMARK_data_15553;
if(cljs.core.truth_(temp__5753__auto___15554)){
var data_15555__$1 = temp__5753__auto___15554;
var map__15540_15556 = data_15555__$1;
var map__15540_15557__$1 = cljs.core.__destructure_map.call(null,map__15540_15556);
var vargs_15558__$2 = cljs.core.get.call(null,map__15540_15557__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_15559__$2 = cljs.core.assoc.call(null,data_15555__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148),(new cljs.core.Delay((function (){
return vargs_15558__$2;
}),null)));
var data_15560__$3 = taoensso.encore.assoc_nx.call(null,data_15559__$2,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
var G__15541 = msg_type;
if(cljs.core._EQ_.call(null,null,G__15541)){
return "";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",151049309),G__15541)){
return taoensso.timbre.str_join.call(null,vargs_15558__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),G__15541)){
if(typeof _QMARK_msg_fmt_15550 === 'string'){
} else {
throw cljs.core.ex_info.call(null,"Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"location","location",1815599388),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = _QMARK_ns_str;
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

return taoensso.encore.format_STAR_.call(null,_QMARK_msg_fmt_15550,vargs_15558__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15541)].join('')));

}
}
}
}),null)),new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay((function (){
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_15550,cljs.core.get.call(null,_QMARK_meta_15549,new cljs.core.Keyword(null,"hash","hash",-13781596),vargs_15558__$2)], null));
}),null)));
var output_fn1_15561 = taoensso.encore.fmemoize.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
var timestamp_opts1_15562 = cljs.core.conj.call(null,taoensso.timbre.default_timestamp_opts,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
var get_timestamp__15563 = taoensso.encore.fmemoize.call(null,(function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp.call(null,opts,cljs.core.get.call(null,data_15560__$3,new cljs.core.Keyword(null,"instant","instant",655498374)));
}),null));
}));
cljs.core.reduce_kv.call(null,(function (_,id,appender){
if(cljs.core.truth_((function (){var and__4210__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__4210__auto__)){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,appender);
} else {
return and__4210__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__4212__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
return cljs.core.not.call(null,rl_fn.call(null,cljs.core.force.call(null,new cljs.core.Keyword(null,"hash_","hash_",-827203612).cljs$core$IFn$_invoke$arity$1(data_15560__$3))));
}
})();
if(rate_limit_okay_QMARK_){
var map__15542 = appender;
var map__15542__$1 = cljs.core.__destructure_map.call(null,map__15542);
var apfn = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var output_fn = (function (){var f = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (f == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422));
}
})())){
return output_fn1_15561;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4212__auto__ = (opts == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422));
}
})())){
return get_timestamp__15563.call(null,timestamp_opts1_15562);
} else {
return get_timestamp__15563.call(null,cljs.core.conj.call(null,timestamp_opts1_15562,opts));
}
})();
var output_ = (new cljs.core.Delay((function (){
return output_fn.call(null,cljs.core.assoc.call(null,data_15560__$3,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_));
}),null));
var data__$4 = cljs.core.conj.call(null,data_15560__$3,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5751__auto__)){
var mfn = temp__5751__auto__;
return mfn.call(null,data__$4);
} else {
return data__$4;
}
})();
var temp__5753__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5753__auto____$1)){
var data__$5 = temp__5753__auto____$1;
return apfn.call(null,data__$5);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,and_form));
});
var ret__4867__auto___15576 = (function (){
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
var len__4818__auto___15577 = arguments.length;
var i__4819__auto___15578 = (0);
while(true){
if((i__4819__auto___15578 < len__4818__auto___15577)){
args__4824__auto__.push((arguments[i__4819__auto___15578]));

var G__15579 = (i__4819__auto___15578 + (1));
i__4819__auto___15578 = G__15579;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((5) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((5)),(0),null)):null);
return taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4825__auto__);
});

(taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,msg_type,args,p__15570){
var vec__15571 = p__15570;
var opts = cljs.core.nth.call(null,vec__15571,(0),null);
if((function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)));
}).call(null,args)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",689,"([:or nil? sequential?] args)",args,null,null);
}

var map__15574 = opts;
var map__15574__$1 = cljs.core.__destructure_map.call(null,map__15574);
var _QMARK_ns_str = cljs.core.get.call(null,map__15574__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
var map__15575 = opts;
var map__15575__$1 = cljs.core.__destructure_map.call(null,map__15575);
var config = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null));
var _QMARK_err = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _QMARK_file = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"?file","?file",1533429675),null);
var _QMARK_line = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form));
var _QMARK_base_data = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"?base-data","?base-data",1332523851));
var spying_QMARK_ = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"spying?","spying?",1753444487));
var _QMARK_file__$1 = ((cljs.core.not_EQ_.call(null,_QMARK_file,"NO_SOURCE_PATH"))?_QMARK_file:null);
var callsite_id = cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,msg_type,args,_QMARK_ns_str,_QMARK_file__$1,_QMARK_line,cljs.core.rand.call(null)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log!","taoensso.timbre/-log!",-1032395770,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,_QMARK_ns_str,null,(1),null)),(new cljs.core.List(null,_QMARK_file__$1,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,msg_type,null,(1),null)),(new cljs.core.List(null,_QMARK_err,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",-406049125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,args)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,_QMARK_base_data,null,(1),null)),(new cljs.core.List(null,callsite_id,null,(1),null)),(new cljs.core.List(null,spying_QMARK_,null,(1),null)))));

}));

(taoensso.timbre.log_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(taoensso.timbre.log_BANG_.cljs$lang$applyTo = (function (seq15564){
var G__15565 = cljs.core.first.call(null,seq15564);
var seq15564__$1 = cljs.core.next.call(null,seq15564);
var G__15566 = cljs.core.first.call(null,seq15564__$1);
var seq15564__$2 = cljs.core.next.call(null,seq15564__$1);
var G__15567 = cljs.core.first.call(null,seq15564__$2);
var seq15564__$3 = cljs.core.next.call(null,seq15564__$2);
var G__15568 = cljs.core.first.call(null,seq15564__$3);
var seq15564__$4 = cljs.core.next.call(null,seq15564__$3);
var G__15569 = cljs.core.first.call(null,seq15564__$4);
var seq15564__$5 = cljs.core.next.call(null,seq15564__$4);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15565,G__15566,G__15567,G__15568,G__15569,seq15564__$5);
}));

return null;
})()
;
(taoensso.timbre.log_BANG_.cljs$lang$macro = true);

var ret__4867__auto___15585 = (function (){
taoensso.timbre.log_STAR_ = (function taoensso$timbre$log_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15586 = arguments.length;
var i__4819__auto___15587 = (0);
while(true){
if((i__4819__auto___15587 < len__4818__auto___15586)){
args__4824__auto__.push((arguments[i__4819__auto___15587]));

var G__15588 = (i__4819__auto___15587 + (1));
i__4819__auto___15587 = G__15588;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form),new cljs.core.Keyword(null,"config","config",994861415),config], null),null,(1),null)))));
}));

(taoensso.timbre.log_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.log_STAR_.cljs$lang$applyTo = (function (seq15580){
var G__15581 = cljs.core.first.call(null,seq15580);
var seq15580__$1 = cljs.core.next.call(null,seq15580);
var G__15582 = cljs.core.first.call(null,seq15580__$1);
var seq15580__$2 = cljs.core.next.call(null,seq15580__$1);
var G__15583 = cljs.core.first.call(null,seq15580__$2);
var seq15580__$3 = cljs.core.next.call(null,seq15580__$2);
var G__15584 = cljs.core.first.call(null,seq15580__$3);
var seq15580__$4 = cljs.core.next.call(null,seq15580__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15581,G__15582,G__15583,G__15584,seq15580__$4);
}));

return null;
})()
;
(taoensso.timbre.log_STAR_.cljs$lang$macro = true);

var ret__4867__auto___15593 = (function (){
taoensso.timbre.log = (function taoensso$timbre$log(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15594 = arguments.length;
var i__4819__auto___15595 = (0);
while(true){
if((i__4819__auto___15595 < len__4818__auto___15594)){
args__4824__auto__.push((arguments[i__4819__auto___15595]));

var G__15596 = (i__4819__auto___15595 + (1));
i__4819__auto___15595 = G__15596;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.log.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.log.cljs$lang$applyTo = (function (seq15589){
var G__15590 = cljs.core.first.call(null,seq15589);
var seq15589__$1 = cljs.core.next.call(null,seq15589);
var G__15591 = cljs.core.first.call(null,seq15589__$1);
var seq15589__$2 = cljs.core.next.call(null,seq15589__$1);
var G__15592 = cljs.core.first.call(null,seq15589__$2);
var seq15589__$3 = cljs.core.next.call(null,seq15589__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15590,G__15591,G__15592,seq15589__$3);
}));

return null;
})()
;
(taoensso.timbre.log.cljs$lang$macro = true);

var ret__4867__auto___15600 = (function (){
taoensso.timbre.trace = (function taoensso$timbre$trace(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15601 = arguments.length;
var i__4819__auto___15602 = (0);
while(true){
if((i__4819__auto___15602 < len__4818__auto___15601)){
args__4824__auto__.push((arguments[i__4819__auto___15602]));

var G__15603 = (i__4819__auto___15602 + (1));
i__4819__auto___15602 = G__15603;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.trace.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.trace.cljs$lang$applyTo = (function (seq15597){
var G__15598 = cljs.core.first.call(null,seq15597);
var seq15597__$1 = cljs.core.next.call(null,seq15597);
var G__15599 = cljs.core.first.call(null,seq15597__$1);
var seq15597__$2 = cljs.core.next.call(null,seq15597__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15598,G__15599,seq15597__$2);
}));

return null;
})()
;
(taoensso.timbre.trace.cljs$lang$macro = true);

var ret__4867__auto___15607 = (function (){
taoensso.timbre.debug = (function taoensso$timbre$debug(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15608 = arguments.length;
var i__4819__auto___15609 = (0);
while(true){
if((i__4819__auto___15609 < len__4818__auto___15608)){
args__4824__auto__.push((arguments[i__4819__auto___15609]));

var G__15610 = (i__4819__auto___15609 + (1));
i__4819__auto___15609 = G__15610;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.debug.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debug.cljs$lang$applyTo = (function (seq15604){
var G__15605 = cljs.core.first.call(null,seq15604);
var seq15604__$1 = cljs.core.next.call(null,seq15604);
var G__15606 = cljs.core.first.call(null,seq15604__$1);
var seq15604__$2 = cljs.core.next.call(null,seq15604__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15605,G__15606,seq15604__$2);
}));

return null;
})()
;
(taoensso.timbre.debug.cljs$lang$macro = true);

var ret__4867__auto___15614 = (function (){
taoensso.timbre.info = (function taoensso$timbre$info(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15615 = arguments.length;
var i__4819__auto___15616 = (0);
while(true){
if((i__4819__auto___15616 < len__4818__auto___15615)){
args__4824__auto__.push((arguments[i__4819__auto___15616]));

var G__15617 = (i__4819__auto___15616 + (1));
i__4819__auto___15616 = G__15617;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"info","info",-317069002),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.info.cljs$lang$applyTo = (function (seq15611){
var G__15612 = cljs.core.first.call(null,seq15611);
var seq15611__$1 = cljs.core.next.call(null,seq15611);
var G__15613 = cljs.core.first.call(null,seq15611__$1);
var seq15611__$2 = cljs.core.next.call(null,seq15611__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15612,G__15613,seq15611__$2);
}));

return null;
})()
;
(taoensso.timbre.info.cljs$lang$macro = true);

var ret__4867__auto___15621 = (function (){
taoensso.timbre.warn = (function taoensso$timbre$warn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15622 = arguments.length;
var i__4819__auto___15623 = (0);
while(true){
if((i__4819__auto___15623 < len__4818__auto___15622)){
args__4824__auto__.push((arguments[i__4819__auto___15623]));

var G__15624 = (i__4819__auto___15623 + (1));
i__4819__auto___15623 = G__15624;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"warn","warn",-436710552),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warn.cljs$lang$applyTo = (function (seq15618){
var G__15619 = cljs.core.first.call(null,seq15618);
var seq15618__$1 = cljs.core.next.call(null,seq15618);
var G__15620 = cljs.core.first.call(null,seq15618__$1);
var seq15618__$2 = cljs.core.next.call(null,seq15618__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15619,G__15620,seq15618__$2);
}));

return null;
})()
;
(taoensso.timbre.warn.cljs$lang$macro = true);

var ret__4867__auto___15628 = (function (){
taoensso.timbre.error = (function taoensso$timbre$error(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15629 = arguments.length;
var i__4819__auto___15630 = (0);
while(true){
if((i__4819__auto___15630 < len__4818__auto___15629)){
args__4824__auto__.push((arguments[i__4819__auto___15630]));

var G__15631 = (i__4819__auto___15630 + (1));
i__4819__auto___15630 = G__15631;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.error.cljs$lang$applyTo = (function (seq15625){
var G__15626 = cljs.core.first.call(null,seq15625);
var seq15625__$1 = cljs.core.next.call(null,seq15625);
var G__15627 = cljs.core.first.call(null,seq15625__$1);
var seq15625__$2 = cljs.core.next.call(null,seq15625__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15626,G__15627,seq15625__$2);
}));

return null;
})()
;
(taoensso.timbre.error.cljs$lang$macro = true);

var ret__4867__auto___15635 = (function (){
taoensso.timbre.fatal = (function taoensso$timbre$fatal(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15636 = arguments.length;
var i__4819__auto___15637 = (0);
while(true){
if((i__4819__auto___15637 < len__4818__auto___15636)){
args__4824__auto__.push((arguments[i__4819__auto___15637]));

var G__15638 = (i__4819__auto___15637 + (1));
i__4819__auto___15637 = G__15638;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.fatal.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatal.cljs$lang$applyTo = (function (seq15632){
var G__15633 = cljs.core.first.call(null,seq15632);
var seq15632__$1 = cljs.core.next.call(null,seq15632);
var G__15634 = cljs.core.first.call(null,seq15632__$1);
var seq15632__$2 = cljs.core.next.call(null,seq15632__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15633,G__15634,seq15632__$2);
}));

return null;
})()
;
(taoensso.timbre.fatal.cljs$lang$macro = true);

var ret__4867__auto___15642 = (function (){
taoensso.timbre.report = (function taoensso$timbre$report(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15643 = arguments.length;
var i__4819__auto___15644 = (0);
while(true){
if((i__4819__auto___15644 < len__4818__auto___15643)){
args__4824__auto__.push((arguments[i__4819__auto___15644]));

var G__15645 = (i__4819__auto___15644 + (1));
i__4819__auto___15644 = G__15645;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"report","report",1394055010),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.report.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.report.cljs$lang$applyTo = (function (seq15639){
var G__15640 = cljs.core.first.call(null,seq15639);
var seq15639__$1 = cljs.core.next.call(null,seq15639);
var G__15641 = cljs.core.first.call(null,seq15639__$1);
var seq15639__$2 = cljs.core.next.call(null,seq15639__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15640,G__15641,seq15639__$2);
}));

return null;
})()
;
(taoensso.timbre.report.cljs$lang$macro = true);

var ret__4867__auto___15651 = (function (){
taoensso.timbre.logf_STAR_ = (function taoensso$timbre$logf_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15652 = arguments.length;
var i__4819__auto___15653 = (0);
while(true){
if((i__4819__auto___15653 < len__4818__auto___15652)){
args__4824__auto__.push((arguments[i__4819__auto___15653]));

var G__15654 = (i__4819__auto___15653 + (1));
i__4819__auto___15653 = G__15654;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form),new cljs.core.Keyword(null,"config","config",994861415),config], null),null,(1),null)))));
}));

(taoensso.timbre.logf_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.logf_STAR_.cljs$lang$applyTo = (function (seq15646){
var G__15647 = cljs.core.first.call(null,seq15646);
var seq15646__$1 = cljs.core.next.call(null,seq15646);
var G__15648 = cljs.core.first.call(null,seq15646__$1);
var seq15646__$2 = cljs.core.next.call(null,seq15646__$1);
var G__15649 = cljs.core.first.call(null,seq15646__$2);
var seq15646__$3 = cljs.core.next.call(null,seq15646__$2);
var G__15650 = cljs.core.first.call(null,seq15646__$3);
var seq15646__$4 = cljs.core.next.call(null,seq15646__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15647,G__15648,G__15649,G__15650,seq15646__$4);
}));

return null;
})()
;
(taoensso.timbre.logf_STAR_.cljs$lang$macro = true);

var ret__4867__auto___15659 = (function (){
taoensso.timbre.logf = (function taoensso$timbre$logf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15660 = arguments.length;
var i__4819__auto___15661 = (0);
while(true){
if((i__4819__auto___15661 < len__4818__auto___15660)){
args__4824__auto__.push((arguments[i__4819__auto___15661]));

var G__15662 = (i__4819__auto___15661 + (1));
i__4819__auto___15661 = G__15662;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.logf.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.logf.cljs$lang$applyTo = (function (seq15655){
var G__15656 = cljs.core.first.call(null,seq15655);
var seq15655__$1 = cljs.core.next.call(null,seq15655);
var G__15657 = cljs.core.first.call(null,seq15655__$1);
var seq15655__$2 = cljs.core.next.call(null,seq15655__$1);
var G__15658 = cljs.core.first.call(null,seq15655__$2);
var seq15655__$3 = cljs.core.next.call(null,seq15655__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15656,G__15657,G__15658,seq15655__$3);
}));

return null;
})()
;
(taoensso.timbre.logf.cljs$lang$macro = true);

var ret__4867__auto___15666 = (function (){
taoensso.timbre.tracef = (function taoensso$timbre$tracef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15667 = arguments.length;
var i__4819__auto___15668 = (0);
while(true){
if((i__4819__auto___15668 < len__4818__auto___15667)){
args__4824__auto__.push((arguments[i__4819__auto___15668]));

var G__15669 = (i__4819__auto___15668 + (1));
i__4819__auto___15668 = G__15669;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.tracef.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.tracef.cljs$lang$applyTo = (function (seq15663){
var G__15664 = cljs.core.first.call(null,seq15663);
var seq15663__$1 = cljs.core.next.call(null,seq15663);
var G__15665 = cljs.core.first.call(null,seq15663__$1);
var seq15663__$2 = cljs.core.next.call(null,seq15663__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15664,G__15665,seq15663__$2);
}));

return null;
})()
;
(taoensso.timbre.tracef.cljs$lang$macro = true);

var ret__4867__auto___15673 = (function (){
taoensso.timbre.debugf = (function taoensso$timbre$debugf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15674 = arguments.length;
var i__4819__auto___15675 = (0);
while(true){
if((i__4819__auto___15675 < len__4818__auto___15674)){
args__4824__auto__.push((arguments[i__4819__auto___15675]));

var G__15676 = (i__4819__auto___15675 + (1));
i__4819__auto___15675 = G__15676;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.debugf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debugf.cljs$lang$applyTo = (function (seq15670){
var G__15671 = cljs.core.first.call(null,seq15670);
var seq15670__$1 = cljs.core.next.call(null,seq15670);
var G__15672 = cljs.core.first.call(null,seq15670__$1);
var seq15670__$2 = cljs.core.next.call(null,seq15670__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15671,G__15672,seq15670__$2);
}));

return null;
})()
;
(taoensso.timbre.debugf.cljs$lang$macro = true);

var ret__4867__auto___15680 = (function (){
taoensso.timbre.infof = (function taoensso$timbre$infof(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15681 = arguments.length;
var i__4819__auto___15682 = (0);
while(true){
if((i__4819__auto___15682 < len__4818__auto___15681)){
args__4824__auto__.push((arguments[i__4819__auto___15682]));

var G__15683 = (i__4819__auto___15682 + (1));
i__4819__auto___15682 = G__15683;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"info","info",-317069002),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.infof.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.infof.cljs$lang$applyTo = (function (seq15677){
var G__15678 = cljs.core.first.call(null,seq15677);
var seq15677__$1 = cljs.core.next.call(null,seq15677);
var G__15679 = cljs.core.first.call(null,seq15677__$1);
var seq15677__$2 = cljs.core.next.call(null,seq15677__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15678,G__15679,seq15677__$2);
}));

return null;
})()
;
(taoensso.timbre.infof.cljs$lang$macro = true);

var ret__4867__auto___15687 = (function (){
taoensso.timbre.warnf = (function taoensso$timbre$warnf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15688 = arguments.length;
var i__4819__auto___15689 = (0);
while(true){
if((i__4819__auto___15689 < len__4818__auto___15688)){
args__4824__auto__.push((arguments[i__4819__auto___15689]));

var G__15690 = (i__4819__auto___15689 + (1));
i__4819__auto___15689 = G__15690;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"warn","warn",-436710552),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.warnf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warnf.cljs$lang$applyTo = (function (seq15684){
var G__15685 = cljs.core.first.call(null,seq15684);
var seq15684__$1 = cljs.core.next.call(null,seq15684);
var G__15686 = cljs.core.first.call(null,seq15684__$1);
var seq15684__$2 = cljs.core.next.call(null,seq15684__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15685,G__15686,seq15684__$2);
}));

return null;
})()
;
(taoensso.timbre.warnf.cljs$lang$macro = true);

var ret__4867__auto___15694 = (function (){
taoensso.timbre.errorf = (function taoensso$timbre$errorf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15695 = arguments.length;
var i__4819__auto___15696 = (0);
while(true){
if((i__4819__auto___15696 < len__4818__auto___15695)){
args__4824__auto__.push((arguments[i__4819__auto___15696]));

var G__15697 = (i__4819__auto___15696 + (1));
i__4819__auto___15696 = G__15697;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.errorf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.errorf.cljs$lang$applyTo = (function (seq15691){
var G__15692 = cljs.core.first.call(null,seq15691);
var seq15691__$1 = cljs.core.next.call(null,seq15691);
var G__15693 = cljs.core.first.call(null,seq15691__$1);
var seq15691__$2 = cljs.core.next.call(null,seq15691__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15692,G__15693,seq15691__$2);
}));

return null;
})()
;
(taoensso.timbre.errorf.cljs$lang$macro = true);

var ret__4867__auto___15701 = (function (){
taoensso.timbre.fatalf = (function taoensso$timbre$fatalf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15702 = arguments.length;
var i__4819__auto___15703 = (0);
while(true){
if((i__4819__auto___15703 < len__4818__auto___15702)){
args__4824__auto__.push((arguments[i__4819__auto___15703]));

var G__15704 = (i__4819__auto___15703 + (1));
i__4819__auto___15703 = G__15704;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.fatalf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatalf.cljs$lang$applyTo = (function (seq15698){
var G__15699 = cljs.core.first.call(null,seq15698);
var seq15698__$1 = cljs.core.next.call(null,seq15698);
var G__15700 = cljs.core.first.call(null,seq15698__$1);
var seq15698__$2 = cljs.core.next.call(null,seq15698__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15699,G__15700,seq15698__$2);
}));

return null;
})()
;
(taoensso.timbre.fatalf.cljs$lang$macro = true);

var ret__4867__auto___15708 = (function (){
taoensso.timbre.reportf = (function taoensso$timbre$reportf(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15709 = arguments.length;
var i__4819__auto___15710 = (0);
while(true){
if((i__4819__auto___15710 < len__4818__auto___15709)){
args__4824__auto__.push((arguments[i__4819__auto___15710]));

var G__15711 = (i__4819__auto___15710 + (1));
i__4819__auto___15710 = G__15711;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"report","report",1394055010),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.reportf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.reportf.cljs$lang$applyTo = (function (seq15705){
var G__15706 = cljs.core.first.call(null,seq15705);
var seq15705__$1 = cljs.core.next.call(null,seq15705);
var G__15707 = cljs.core.first.call(null,seq15705__$1);
var seq15705__$2 = cljs.core.next.call(null,seq15705__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15706,G__15707,seq15705__$2);
}));

return null;
})()
;
(taoensso.timbre.reportf.cljs$lang$macro = true);

var ret__4867__auto___15717 = (function (){
taoensso.timbre._log_errors = (function taoensso$timbre$_log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15718 = arguments.length;
var i__4819__auto___15719 = (0);
while(true){
if((i__4819__auto___15719 < len__4818__auto___15718)){
args__4824__auto__.push((arguments[i__4819__auto___15719]));

var G__15720 = (i__4819__auto___15719 + (1));
i__4819__auto___15719 = G__15720;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__15712__auto__","e__15712__auto__",1181780234,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__15712__auto__","e__15712__auto__",1181780234,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line], null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre._log_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_errors.cljs$lang$applyTo = (function (seq15713){
var G__15714 = cljs.core.first.call(null,seq15713);
var seq15713__$1 = cljs.core.next.call(null,seq15713);
var G__15715 = cljs.core.first.call(null,seq15713__$1);
var seq15713__$2 = cljs.core.next.call(null,seq15713__$1);
var G__15716 = cljs.core.first.call(null,seq15713__$2);
var seq15713__$3 = cljs.core.next.call(null,seq15713__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15714,G__15715,G__15716,seq15713__$3);
}));

return null;
})()
;
(taoensso.timbre._log_errors.cljs$lang$macro = true);

var ret__4867__auto___15726 = (function (){
taoensso.timbre._log_and_rethrow_errors = (function taoensso$timbre$_log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15727 = arguments.length;
var i__4819__auto___15728 = (0);
while(true){
if((i__4819__auto___15728 < len__4818__auto___15727)){
args__4824__auto__.push((arguments[i__4819__auto___15728]));

var G__15729 = (i__4819__auto___15728 + (1));
i__4819__auto___15728 = G__15729;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__15721__auto__","e__15721__auto__",859442540,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__15721__auto__","e__15721__auto__",859442540,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line], null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__15721__auto__","e__15721__auto__",859442540,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre._log_and_rethrow_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$applyTo = (function (seq15722){
var G__15723 = cljs.core.first.call(null,seq15722);
var seq15722__$1 = cljs.core.next.call(null,seq15722);
var G__15724 = cljs.core.first.call(null,seq15722__$1);
var seq15722__$2 = cljs.core.next.call(null,seq15722__$1);
var G__15725 = cljs.core.first.call(null,seq15722__$2);
var seq15722__$3 = cljs.core.next.call(null,seq15722__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15723,G__15724,G__15725,seq15722__$3);
}));

return null;
})()
;
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___15734 = (function (){
taoensso.timbre._logged_future = (function taoensso$timbre$_logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15735 = arguments.length;
var i__4819__auto___15736 = (0);
while(true){
if((i__4819__auto___15736 < len__4818__auto___15735)){
args__4824__auto__.push((arguments[i__4819__auto___15736]));

var G__15737 = (i__4819__auto___15736 + (1));
i__4819__auto___15736 = G__15737;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","future","taoensso.timbre/future",997994192,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-errors","taoensso.timbre/-log-errors",572252972,null),null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),body))),null,(1),null)))));
}));

(taoensso.timbre._logged_future.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._logged_future.cljs$lang$applyTo = (function (seq15730){
var G__15731 = cljs.core.first.call(null,seq15730);
var seq15730__$1 = cljs.core.next.call(null,seq15730);
var G__15732 = cljs.core.first.call(null,seq15730__$1);
var seq15730__$2 = cljs.core.next.call(null,seq15730__$1);
var G__15733 = cljs.core.first.call(null,seq15730__$2);
var seq15730__$3 = cljs.core.next.call(null,seq15730__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15731,G__15732,G__15733,seq15730__$3);
}));

return null;
})()
;
(taoensso.timbre._logged_future.cljs$lang$macro = true);

var ret__4867__auto___15741 = (function (){
taoensso.timbre.log_errors = (function taoensso$timbre$log_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15742 = arguments.length;
var i__4819__auto___15743 = (0);
while(true){
if((i__4819__auto___15743 < len__4818__auto___15742)){
args__4824__auto__.push((arguments[i__4819__auto___15743]));

var G__15744 = (i__4819__auto___15743 + (1));
i__4819__auto___15743 = G__15744;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-errors","taoensso.timbre/-log-errors",572252972,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.log_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_errors.cljs$lang$applyTo = (function (seq15738){
var G__15739 = cljs.core.first.call(null,seq15738);
var seq15738__$1 = cljs.core.next.call(null,seq15738);
var G__15740 = cljs.core.first.call(null,seq15738__$1);
var seq15738__$2 = cljs.core.next.call(null,seq15738__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15739,G__15740,seq15738__$2);
}));

return null;
})()
;
(taoensso.timbre.log_errors.cljs$lang$macro = true);

var ret__4867__auto___15748 = (function (){
taoensso.timbre.log_and_rethrow_errors = (function taoensso$timbre$log_and_rethrow_errors(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15749 = arguments.length;
var i__4819__auto___15750 = (0);
while(true){
if((i__4819__auto___15750 < len__4818__auto___15749)){
args__4824__auto__.push((arguments[i__4819__auto___15750]));

var G__15751 = (i__4819__auto___15750 + (1));
i__4819__auto___15750 = G__15751;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-and-rethrow-errors","taoensso.timbre/-log-and-rethrow-errors",994909149,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.log_and_rethrow_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$applyTo = (function (seq15745){
var G__15746 = cljs.core.first.call(null,seq15745);
var seq15745__$1 = cljs.core.next.call(null,seq15745);
var G__15747 = cljs.core.first.call(null,seq15745__$1);
var seq15745__$2 = cljs.core.next.call(null,seq15745__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15746,G__15747,seq15745__$2);
}));

return null;
})()
;
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4867__auto___15755 = (function (){
taoensso.timbre.logged_future = (function taoensso$timbre$logged_future(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15756 = arguments.length;
var i__4819__auto___15757 = (0);
while(true){
if((i__4819__auto___15757 < len__4818__auto___15756)){
args__4824__auto__.push((arguments[i__4819__auto___15757]));

var G__15758 = (i__4819__auto___15757 + (1));
i__4819__auto___15757 = G__15758;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-logged-future","taoensso.timbre/-logged-future",-576685890,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.logged_future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logged_future.cljs$lang$applyTo = (function (seq15752){
var G__15753 = cljs.core.first.call(null,seq15752);
var seq15752__$1 = cljs.core.next.call(null,seq15752);
var G__15754 = cljs.core.first.call(null,seq15752__$1);
var seq15752__$2 = cljs.core.next.call(null,seq15752__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15753,G__15754,seq15752__$2);
}));

return null;
})()
;
(taoensso.timbre.logged_future.cljs$lang$macro = true);

var ret__4867__auto___15760 = taoensso.timbre._spy = (function taoensso$timbre$_spy(_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,config,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-and-rethrow-errors","taoensso.timbre/-log-and-rethrow-errors",994909149,null),null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__15759__auto__","result__15759__auto__",-1229562910,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__15759__auto__","result__15759__auto__",-1229562910,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"spying?","spying?",1753444487),true], null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__15759__auto__","result__15759__auto__",-1229562910,null),null,(1),null))))),null,(1),null)))));
});
(taoensso.timbre._spy.cljs$lang$macro = true);

var ret__4867__auto___15763 = (function (){
/**
 * Evaluates named expression and logs its result. Always returns the result.
 *   Defaults to :debug logging level and unevaluated expression as name.
 */
taoensso.timbre.spy = (function taoensso$timbre$spy(var_args){
var G__15762 = arguments.length;
switch (G__15762) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$6 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$lang$maxFixedArity = 6);

return null;
})()
;
(taoensso.timbre.spy.cljs$lang$macro = true);

var ret__4867__auto___15765 = taoensso.timbre.get_env = (function taoensso$timbre$get_env(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","get-env","taoensso.encore/get-env",2067773776,null),null,(1),null)))));
});
(taoensso.timbre.get_env.cljs$lang$macro = true);

var ret__4867__auto___15770 = (function (){
taoensso.timbre.with_default_outs = (function taoensso$timbre$with_default_outs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15771 = arguments.length;
var i__4819__auto___15772 = (0);
while(true){
if((i__4819__auto___15772 < len__4818__auto___15771)){
args__4824__auto__.push((arguments[i__4819__auto___15772]));

var G__15773 = (i__4819__auto___15772 + (1));
i__4819__auto___15772 = G__15773;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","default-out","taoensso.timbre/default-out",858097375,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*err*","taoensso.timbre/*err*",-1766459963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","default-err","taoensso.timbre/default-err",-724946294,null),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_default_outs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.with_default_outs.cljs$lang$applyTo = (function (seq15767){
var G__15768 = cljs.core.first.call(null,seq15767);
var seq15767__$1 = cljs.core.next.call(null,seq15767);
var G__15769 = cljs.core.first.call(null,seq15767__$1);
var seq15767__$2 = cljs.core.next.call(null,seq15767__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15768,G__15769,seq15767__$2);
}));

return null;
})()
;
(taoensso.timbre.with_default_outs.cljs$lang$macro = true);

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__15775 = arguments.length;
switch (G__15775) {
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
return taoensso.timbre.stacktrace.call(null,err,null);
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

var ret__4867__auto___15781 = (function (){
/**
 * Handy for sampled logging, etc.
 */
taoensso.timbre.sometimes = (function taoensso$timbre$sometimes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15782 = arguments.length;
var i__4819__auto___15783 = (0);
while(true){
if((i__4819__auto___15783 < len__4818__auto___15782)){
args__4824__auto__.push((arguments[i__4819__auto___15783]));

var G__15784 = (i__4819__auto___15783 + (1));
i__4819__auto___15783 = G__15784;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,probability,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,probability,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"Probability: 0 <= p <= 1",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rand","cljs.core/rand",-1079209816,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,probability,null,(1),null))))),null,(1),null)),body))),null,(1),null)))));
}));

(taoensso.timbre.sometimes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.sometimes.cljs$lang$applyTo = (function (seq15777){
var G__15778 = cljs.core.first.call(null,seq15777);
var seq15777__$1 = cljs.core.next.call(null,seq15777);
var G__15779 = cljs.core.first.call(null,seq15777__$1);
var seq15777__$2 = cljs.core.next.call(null,seq15777__$1);
var G__15780 = cljs.core.first.call(null,seq15777__$2);
var seq15777__$3 = cljs.core.next.call(null,seq15777__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15778,G__15779,G__15780,seq15777__$3);
}));

return null;
})()
;
(taoensso.timbre.sometimes.cljs$lang$macro = true);

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.call(null,level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15799 = arguments.length;
var i__4819__auto___15800 = (0);
while(true){
if((i__4819__auto___15800 < len__4818__auto___15799)){
args__4824__auto__.push((arguments[i__4819__auto___15800]));

var G__15801 = (i__4819__auto___15800 + (1));
i__4819__auto___15800 = G__15801;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.call(null,xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq15785){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15785));
}));


var ret__4867__auto___15802 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15803 = arguments.length;
var i__4819__auto___15804 = (0);
while(true){
if((i__4819__auto___15804 < len__4818__auto___15803)){
args__4824__auto__.push((arguments[i__4819__auto___15804]));

var G__15805 = (i__4819__auto___15804 + (1));
i__4819__auto___15804 = G__15805;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-level","taoensso.timbre/with-level",1514604232,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),body)));
}));

(taoensso.timbre.with_log_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq15786){
var G__15787 = cljs.core.first.call(null,seq15786);
var seq15786__$1 = cljs.core.next.call(null,seq15786);
var G__15788 = cljs.core.first.call(null,seq15786__$1);
var seq15786__$2 = cljs.core.next.call(null,seq15786__$1);
var G__15789 = cljs.core.first.call(null,seq15786__$2);
var seq15786__$3 = cljs.core.next.call(null,seq15786__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15787,G__15788,G__15789,seq15786__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__4867__auto___15806 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15807 = arguments.length;
var i__4819__auto___15808 = (0);
while(true){
if((i__4819__auto___15808 < len__4818__auto___15807)){
args__4824__auto__.push((arguments[i__4819__auto___15808]));

var G__15809 = (i__4819__auto___15808 + (1));
i__4819__auto___15808 = G__15809;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-config","taoensso.timbre/with-config",-1144239945,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),body)));
}));

(taoensso.timbre.with_logging_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq15790){
var G__15791 = cljs.core.first.call(null,seq15790);
var seq15790__$1 = cljs.core.next.call(null,seq15790);
var G__15792 = cljs.core.first.call(null,seq15790__$1);
var seq15790__$2 = cljs.core.next.call(null,seq15790__$1);
var G__15793 = cljs.core.first.call(null,seq15790__$2);
var seq15790__$3 = cljs.core.next.call(null,seq15790__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15791,G__15792,G__15793,seq15790__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__4867__auto___15810 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___15811 = arguments.length;
var i__4819__auto___15812 = (0);
while(true){
if((i__4819__auto___15812 < len__4818__auto___15811)){
args__4824__auto__.push((arguments[i__4819__auto___15812]));

var G__15813 = (i__4819__auto___15812 + (1));
i__4819__auto___15812 = G__15813;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log","taoensso.timbre/log",-1743194436,null),null,(1),null)),args)));
}));

(taoensso.timbre.logp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq15794){
var G__15795 = cljs.core.first.call(null,seq15794);
var seq15794__$1 = cljs.core.next.call(null,seq15794);
var G__15796 = cljs.core.first.call(null,seq15794__$1);
var seq15794__$2 = cljs.core.next.call(null,seq15794__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15795,G__15796,seq15794__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__4867__auto___15814 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__15798 = arguments.length;
switch (G__15798) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,level){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,"&env",null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log*","taoensso.timbre/log*",1207553629,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","get-env","taoensso.timbre/get-env",92671901,null),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.timbre.log_env.cljs$lang$macro = true);


//# sourceMappingURL=timbre.js.map
