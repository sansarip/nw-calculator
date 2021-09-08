// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.web_workers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
nw_calculator.web_workers.in_worker_QMARK_ = (!((typeof window !== 'undefined')));
if((typeof nw_calculator !== 'undefined') && (typeof nw_calculator.web_workers !== 'undefined') && (typeof nw_calculator.web_workers.worker !== 'undefined')){
} else {
nw_calculator.web_workers.worker = ((nw_calculator.web_workers.in_worker_QMARK_)?null:(new Worker("js/compiled/app-web-workers.js")));
}
if(nw_calculator.web_workers.in_worker_QMARK_){
(self.onmessage = (function (msg){
return self.postMessage(cljs.core.clj__GT_js(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(msg.data)));
}));
} else {
}
