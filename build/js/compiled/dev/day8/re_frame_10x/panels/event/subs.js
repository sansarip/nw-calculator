// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.panels.event.subs');
goog.require('cljs.core');
goog.require('zprint.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core');
goog.require('day8.re_frame_10x.panels.settings.subs');
goog.require('day8.re_frame_10x.panels.traces.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964),(function (p__38772,_){
var map__38773 = p__38772;
var map__38773__$1 = cljs.core.__destructure_map.call(null,map__38773);
var code = cljs.core.get.call(null,map__38773__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return code;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch",2069606875)], null),(function (traces,_){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (i,trace){
var temp__5757__auto__ = cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5757__auto__ == null)){
return null;
} else {
var code = temp__5757__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (i__$1,code__$1){
return cljs.core.assoc.call(null,code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch-exists?","day8.re-frame-10x.panels.event.subs/code-for-epoch-exists?",929098522),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (code,_){
return cljs.core.boolean$.call(null,code);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","fragments-for-epoch","day8.re-frame-10x.panels.event.subs/fragments-for-epoch",-10362729),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","execution-order?","day8.re-frame-10x.panels.event.subs/execution-order?",1536487585)], null),(function (p__38774,_){
var vec__38775 = p__38774;
var map__38778 = cljs.core.nth.call(null,vec__38775,(0),null);
var map__38778__$1 = cljs.core.__destructure_map.call(null,map__38778);
var code = cljs.core.get.call(null,map__38778__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var execution_order_QMARK_ = cljs.core.nth.call(null,vec__38775,(1),null);
var unordered_fragments = cljs.core.remove.call(null,(function (line){
return cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line));
}),code);
if(cljs.core.truth_(execution_order_QMARK_)){
return unordered_fragments;
} else {
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),unordered_fragments);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","trace-id-for-epoch","day8.re-frame-10x.panels.event.subs/trace-id-for-epoch",728519790),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (p__38779,_){
var map__38780 = p__38779;
var map__38780__$1 = cljs.core.__destructure_map.call(null,map__38780);
var trace_id = cljs.core.get.call(null,map__38780__$1,new cljs.core.Keyword(null,"trace-id","trace-id",681947249));
return trace_id;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","form-for-epoch","day8.re-frame-10x.panels.event.subs/form-for-epoch",-1506248120),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (p__38781,_){
var map__38782 = p__38781;
var map__38782__$1 = cljs.core.__destructure_map.call(null,map__38782);
var form = cljs.core.get.call(null,map__38782__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return form;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","zprint-form-for-epoch","day8.re-frame-10x.panels.event.subs/zprint-form-for-epoch",279472373),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","form-for-epoch","day8.re-frame-10x.panels.event.subs/form-for-epoch",-1506248120)], null),(function (form,_){
return zprint.core.zprint_str.call(null,form);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","execution-order?","day8.re-frame-10x.panels.event.subs/execution-order?",1536487585),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (code,_){
return cljs.core.get.call(null,code,new cljs.core.Keyword(null,"execution-order?","execution-order?",-1342177142),true);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-open?","day8.re-frame-10x.panels.event.subs/code-open?",1956666991),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__38783,_){
var map__38784 = p__38783;
var map__38784__$1 = cljs.core.__destructure_map.call(null,map__38784);
var code_open_QMARK_ = cljs.core.get.call(null,map__38784__$1,new cljs.core.Keyword(null,"code-open?","code-open?",1228336744));
return code_open_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted-form","day8.re-frame-10x.panels.event.subs/highlighted-form",1402683478),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__38785,_){
var map__38786 = p__38785;
var map__38786__$1 = cljs.core.__destructure_map.call(null,map__38786);
var highlighted_form = cljs.core.get.call(null,map__38786__$1,new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753));
return highlighted_form;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","show-all-code?","day8.re-frame-10x.panels.event.subs/show-all-code?",1829719373),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__38787,_){
var map__38788 = p__38787;
var map__38788__$1 = cljs.core.__destructure_map.call(null,map__38788);
var show_all_code_QMARK_ = cljs.core.get.call(null,map__38788__$1,new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286));
return show_all_code_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","repl-msg-state","day8.re-frame-10x.panels.event.subs/repl-msg-state",1012951853),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__38789,_){
var map__38790 = p__38789;
var map__38790__$1 = cljs.core.__destructure_map.call(null,map__38790);
var repl_msg_state = cljs.core.get.call(null,map__38790__$1,new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040));
return repl_msg_state;
}));
day8.re_frame_10x.panels.event.subs.canvas = document.createElement("canvas");
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","single-character-width","day8.re-frame-10x.panels.event.subs/single-character-width",1463629101),(function (_,___$1){
var context = day8.re_frame_10x.panels.event.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","max-column-width","day8.re-frame-10x.panels.event.subs/max-column-width",-1175866341),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width-rounded","day8.re-frame-10x.panels.settings.subs/window-width-rounded",193095108),(100)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","single-character-width","day8.re-frame-10x.panels.event.subs/single-character-width",1463629101)], null),(function (p__38791,_){
var vec__38792 = p__38791;
var window_width = cljs.core.nth.call(null,vec__38792,(0),null);
var char_width = cljs.core.nth.call(null,vec__38792,(1),null);
return Math.ceil((window_width / char_width));
}));

//# sourceMappingURL=subs.js.map
