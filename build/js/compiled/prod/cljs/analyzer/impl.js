// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.analyzer.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.analyzer.impl.ANY_SYM = cljs.core.cst$sym$any;
cljs.analyzer.impl.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,"null",cljs.core.cst$sym$boolean,"null"], null), null);
cljs.analyzer.impl.BOOLEAN_SYM = cljs.core.cst$sym$boolean;
cljs.analyzer.impl.CLJ_NIL_SYM = cljs.core.cst$sym$clj_DASH_nil;
cljs.analyzer.impl.CLJS_CORE_MACROS_SYM = cljs.core.cst$sym$cljs$core$macros;
cljs.analyzer.impl.CLJS_CORE_SYM = cljs.core.cst$sym$cljs$core;
cljs.analyzer.impl.DOT_SYM = cljs.core.cst$sym$_DOT_;
cljs.analyzer.impl.IGNORE_SYM = cljs.core.cst$sym$ignore;
cljs.analyzer.impl.JS_STAR_SYM = cljs.core.cst$sym$js_STAR_;
cljs.analyzer.impl.NEW_SYM = cljs.core.cst$sym$new;
cljs.analyzer.impl.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$clj,"null",cljs.core.cst$sym$not_DASH_native,"null"], null), null);
cljs.analyzer.impl.NUMBER_SYM = cljs.core.cst$sym$number;
cljs.analyzer.impl.STRING_SYM = cljs.core.cst$sym$string;
cljs.analyzer.impl.cljs_map_QMARK_ = (function cljs$analyzer$impl$cljs_map_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.impl.cljs_seq_QMARK_ = (function cljs$analyzer$impl$cljs_seq_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISeq$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.impl.cljs_vector_QMARK_ = (function cljs$analyzer$impl$cljs_vector_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IVector$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.impl.cljs_set_QMARK_ = (function cljs$analyzer$impl$cljs_set_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
