// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('zprint.zprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.finish');
goog.require('zprint.zfns');
goog.require('zprint.ansi');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
/**
 * Produce a blank string of desired size.
 */
zprint.zprint.blanks = (function zprint$zprint$blanks(n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," "));
});
/**
 * Produce a dot string of desired size.
 */
zprint.zprint.dots = (function zprint$zprint$dots(n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"."));
});
/**
 * Make a version of conj! that take multiple arguments.
 */
zprint.zprint.conj_it_BANG_ = (function zprint$zprint$conj_it_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37664 = arguments.length;
var i__4819__auto___37665 = (0);
while(true){
if((i__4819__auto___37665 < len__4818__auto___37664)){
args__4824__auto__.push((arguments[i__4819__auto___37665]));

var G__37666 = (i__4819__auto___37665 + (1));
i__4819__auto___37665 = G__37666;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var out = cljs.core.first.call(null,rest);
var more = cljs.core.next.call(null,rest);
while(true){
if(more){
var G__37667 = cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,more));
var G__37668 = cljs.core.next.call(null,more);
out = G__37667;
more = G__37668;
continue;
} else {
return out;
}
break;
}
}));

(zprint.zprint.conj_it_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.conj_it_BANG_.cljs$lang$applyTo = (function (seq37663){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37663));
}));

/**
 * Do split for newlines, instead of using regular expressions.
 */
zprint.zprint.split_lf = (function zprint$zprint$split_lf(s){
var input = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,input)){
return out;
} else {
var next_lf = clojure.string.index_of.call(null,input,"\n");
var chunk = (cljs.core.truth_(next_lf)?cljs.core.subs.call(null,input,(0),next_lf):input);
var G__37669 = (cljs.core.truth_(next_lf)?cljs.core.subs.call(null,input,(next_lf + (1))):null);
var G__37670 = cljs.core.conj.call(null,out,chunk);
input = G__37669;
out = G__37670;
continue;
}
break;
}
});
/**
 * Do split for newlines, instead of using regular expressions.
 *   Maximum split is 2.
 */
zprint.zprint.split_lf_2 = (function zprint$zprint$split_lf_2(s){
var temp__5751__auto__ = clojure.string.index_of.call(null,s,"\n");
if(cljs.core.truth_(temp__5751__auto__)){
var next_lf = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),next_lf),cljs.core.subs.call(null,s,(next_lf + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}
});
zprint.zprint.zpmap = (function zprint$zprint$zpmap(var_args){
var G__37672 = arguments.length;
switch (G__37672) {
case 3:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3 = (function (options,f,coll){
return cljs.core.map.call(null,f,coll);
}));

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4 = (function (options,f,coll1,coll2){
return cljs.core.map.call(null,f,coll1,coll2);
}));

(zprint.zprint.zpmap.cljs$lang$maxFixedArity = 4);

/**
 * Takes an option map and the return from zfuture.  If the
 *   options map has (:parallel? options) as true, then deref
 *   the value, otherwise just pass it through.
 */
zprint.zprint.zat = (function zprint$zprint$zat(options,value){
return value;
});
zprint.zprint.fzprint_dbg = cljs.core.atom.call(null,null);
/**
 * Accept a style-vec that we are about to hand to style-lines, and
 *   output it if called for, to aid in debugging.
 */
zprint.zprint.log_lines = (function zprint$zprint$log_lines(p__37674,dbg_output,ind,style_vec){
var map__37675 = p__37674;
var map__37675__$1 = cljs.core.__destructure_map.call(null,map__37675);
var options = map__37675__$1;
var dbg_print_QMARK_ = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_indent = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
if(cljs.core.truth_(dbg_print_QMARK_)){
if(cljs.core.truth_(style_vec)){
cljs.core.println.call(null,dbg_indent,dbg_output,"--------------","in-hang?",in_hang_QMARK_);

return cljs.core.prn.call(null,style_vec);
} else {
return cljs.core.println.call(null,dbg_indent,dbg_output,"--------------- no style-vec");
}
} else {
return null;
}
});
/**
 * Show this thing as a function?
 */
zprint.zprint.showfn_QMARK_ = (function zprint$zprint$showfn_QMARK_(fn_map,f){
if((!(typeof f === 'string'))){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var or__4212__auto__ = fn_map.call(null,f_str);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.re_find.call(null,/clojure/,f_str);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__4212__auto____$2 = cljs.core.re_find.call(null,/clojure/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f))));
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return fn_map.call(null,cljs.core.name.call(null,f));
}
}catch (e37676){var e = e37676;
return null;
}} else {
return null;
}
}
}
} else {
return null;
}
});
/**
 * Show this thing as a user defined function?  Assumes that we
 *   have already handled any clojure defined functions!
 */
zprint.zprint.show_user_fn_QMARK_ = (function zprint$zprint$show_user_fn_QMARK_(options,f){
if((!(typeof f === 'string'))){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var user_fn_map = new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227).cljs$core$IFn$_invoke$arity$1(options);
var or__4212__auto__ = cljs.core.get.call(null,user_fn_map,f_str);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__4212__auto____$1 = (!(cljs.core.empty_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f))))));
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.core.get.call(null,user_fn_map,cljs.core.name.call(null,f));
}
}catch (e37677){var e = e37677;
return null;
}} else {
return null;
}
}
} else {
return null;
}
});
zprint.zprint.right_separator_map = new cljs.core.PersistentArrayMap(null, 3, [")",(1),"]",(1),"}",(1)], null);
/**
 * Given the fn-style, is the first output good enough to be worth
 *   doing. p is pretty, which is typically hanging, and b is basic, which
 *   is typically flow. p-count is the number of elements in the hang.
 */
zprint.zprint.good_enough_QMARK_ = (function zprint$zprint$good_enough_QMARK_(caller,p__37678,fn_style,p_count,indent_diff,p__37679,p__37680){
var map__37681 = p__37678;
var map__37681__$1 = cljs.core.__destructure_map.call(null,map__37681);
var options = map__37681__$1;
var map__37682 = cljs.core.get.call(null,map__37681__$1,new cljs.core.Keyword(null,"tuning","tuning",-48660925));
var map__37682__$1 = cljs.core.__destructure_map.call(null,map__37682);
var hang_flow = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548));
var hang_type_flow = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590));
var hang_flow_limit = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586));
var general_hang_adjust = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987));
var hang_if_equal_flow_QMARK_ = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992));
var map__37683 = cljs.core.get.call(null,map__37681__$1,caller);
var map__37683__$1 = cljs.core.__destructure_map.call(null,map__37683);
var hang_expand = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var hang_size = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063));
var hang_adjust = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382));
var width = cljs.core.get.call(null,map__37681__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__37681__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.call(null,map__37681__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__37684 = p__37679;
var p_lines = cljs.core.nth.call(null,vec__37684,(0),null);
var p_maxwidth = cljs.core.nth.call(null,vec__37684,(1),null);
var p_length_seq = cljs.core.nth.call(null,vec__37684,(2),null);
var p_what = cljs.core.nth.call(null,vec__37684,(3),null);
var vec__37687 = p__37680;
var b_lines = cljs.core.nth.call(null,vec__37687,(0),null);
var b_maxwidth = cljs.core.nth.call(null,vec__37687,(1),null);
var _ = cljs.core.nth.call(null,vec__37687,(2),null);
var b_what = cljs.core.nth.call(null,vec__37687,(3),null);
var p_last_maxwidth = cljs.core.last.call(null,p_length_seq);
var hang_diff__$1 = (function (){var or__4212__auto__ = hang_diff;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})();
var hang_expand__$1 = (function (){var or__4212__auto__ = hang_expand;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1000.0;
}
})();
var hang_adjust__$1 = (function (){var or__4212__auto__ = hang_adjust;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return general_hang_adjust;
}
})();
var options__$1 = (cljs.core.truth_((function (){var or__4212__auto__ = p_what;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return b_what;
}
})())?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),true):options);
var result = ((cljs.core.not.call(null,b_lines))?true:(function (){var and__4210__auto__ = p_lines;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = (p_last_maxwidth <= (width - zprint.zprint.fix_rightcnt.call(null,rightcnt)));
if(and__4210__auto____$1){
var and__4210__auto____$2 = (p_maxwidth <= width);
if(and__4210__auto____$2){
var or__4212__auto__ = (p_lines === (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto____$3 = (b_lines > (0));
if(and__4210__auto____$3){
var and__4210__auto____$4 = (p_count > (0));
if(and__4210__auto____$4){
if(cljs.core.truth_((function (){var and__4210__auto____$5 = cljs.core._EQ_.call(null,p_lines,b_lines);
if(and__4210__auto____$5){
return hang_if_equal_flow_QMARK_;
} else {
return and__4210__auto____$5;
}
})())){
return true;
} else {
var and__4210__auto____$5 = (((indent_diff <= hang_diff__$1))?true:(((p_lines - (1)) / p_count) <= hang_expand__$1));
if(and__4210__auto____$5){
var and__4210__auto____$6 = (cljs.core.truth_(hang_size)?(p_lines < hang_size):true);
if(and__4210__auto____$6){
var factor = ((cljs.core._EQ_.call(null,fn_style,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?hang_type_flow:hang_flow);
if((p_lines > hang_flow_limit)){
return ((p_lines - (1)) <= b_lines);
} else {
return (((p_lines + hang_adjust__$1) / b_lines) < factor);
}
} else {
return and__4210__auto____$6;
}
} else {
return and__4210__auto____$5;
}
}
} else {
return and__4210__auto____$4;
}
} else {
return and__4210__auto____$3;
}
}
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),(cljs.core.truth_(result)?"++++++":"XXXXXX"),"p-what",p_what,"good-enough? caller:",caller,"fn-style:",fn_style,"width:",width,"rightcnt:",rightcnt,"hang-expand:",hang_expand__$1,"p-count:",p_count,"p-lines:",p_lines,"p-maxwidth:",p_maxwidth,"indent-diff:",indent_diff,"hang-diff:",hang_diff__$1,"p-last-maxwidth:",p_last_maxwidth,"b-lines:",b_lines,"b-maxwidth:",b_maxwidth);
} else {
}

return result;
});
/**
 * Add :in-hang? true to the options map.
 */
zprint.zprint.in_hang = (function zprint$zprint$in_hang(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639).cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639),(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return true;
}
})());
} else {
return options;
}
}
});
/**
 * Scan a collection, and return true if it contains any nils or empty
 *   collections.
 */
zprint.zprint.contains_nil_QMARK_ = (function zprint$zprint$contains_nil_QMARK_(coll){
return cljs.core.some.call(null,(function (p1__37690_SHARP_){
if(cljs.core.coll_QMARK_.call(null,p1__37690_SHARP_)){
return cljs.core.empty_QMARK_.call(null,p1__37690_SHARP_);
} else {
return (p1__37690_SHARP_ == null);
}
}),coll);
});
/**
 * Concatentate multiple sequences, but if any of them are nil, return nil.
 *   This version is 15-20% slower than the version below. Keeping it around
 *   just for illustrative purposes.
 */
zprint.zprint.concat_no_nil_alt = (function zprint$zprint$concat_no_nil_alt(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37692 = arguments.length;
var i__4819__auto___37693 = (0);
while(true){
if((i__4819__auto___37693 < len__4818__auto___37692)){
args__4824__auto__.push((arguments[i__4819__auto___37693]));

var G__37694 = (i__4819__auto___37693 + (1));
i__4819__auto___37693 = G__37694;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_alt.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(zprint.zprint.concat_no_nil_alt.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var coll = rest;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var c = cljs.core.first.call(null,coll);
if(cljs.core.not.call(null,c)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
if(((((cljs.core.coll_QMARK_.call(null,c)) && ((!(cljs.core.empty_QMARK_.call(null,c)))))) || ((!((c == null)))))){
var G__37695 = cljs.core.next.call(null,coll);
var G__37696 = cljs.core.conj_BANG_.call(null,out,c);
coll = G__37695;
out = G__37696;
continue;
} else {
return null;
}
}
break;
}
}));

(zprint.zprint.concat_no_nil_alt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_alt.cljs$lang$applyTo = (function (seq37691){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37691));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil.
 */
zprint.zprint.concat_no_nil_pre_noseq = (function zprint$zprint$concat_no_nil_pre_noseq(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37698 = arguments.length;
var i__4819__auto___37699 = (0);
while(true){
if((i__4819__auto___37699 < len__4818__auto___37698)){
args__4824__auto__.push((arguments[i__4819__auto___37699]));

var G__37700 = (i__4819__auto___37699 + (1));
i__4819__auto___37699 = G__37700;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.coll_QMARK_.call(null,o)){
if(cljs.core.empty_QMARK_.call(null,o)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,o);
}
} else {
if((o == null)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.conj_BANG_.call(null,v,o);
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_.call(null,result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$applyTo = (function (seq37697){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37697));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 *   When complete, check the last element-- if it is a :right, and if it
 *   the previous element is a :newline or :indent, then ensure that the
 *   number of spaces in that previous element matches the number to the
 *   right of the :right.
 */
zprint.zprint.concat_no_nil = (function zprint$zprint$concat_no_nil(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37708 = arguments.length;
var i__4819__auto___37709 = (0);
while(true){
if((i__4819__auto___37709 < len__4818__auto___37708)){
args__4824__auto__.push((arguments[i__4819__auto___37709]));

var G__37710 = (i__4819__auto___37709 + (1));
i__4819__auto___37709 = G__37710;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.coll_QMARK_.call(null,o)){
if(cljs.core.empty_QMARK_.call(null,o)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noseq","noseq",405935768),o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.conj_BANG_.call(null,v,o);
}
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
var result__$1 = cljs.core.persistent_BANG_.call(null,result);
if((cljs.core.count.call(null,result__$1) < (2))){
return result__$1;
} else {
var vec__37702 = cljs.core.peek.call(null,result__$1);
var _ = cljs.core.nth.call(null,vec__37702,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37702,(1),null);
var what = cljs.core.nth.call(null,vec__37702,(2),null);
var right_ind = cljs.core.nth.call(null,vec__37702,(3),null);
var last_element = vec__37702;
if(cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"right","right",-452581833))){
var previous_index = (cljs.core.count.call(null,result__$1) - (2));
var vec__37705 = cljs.core.nth.call(null,result__$1,previous_index);
var s = cljs.core.nth.call(null,vec__37705,(0),null);
var color = cljs.core.nth.call(null,vec__37705,(1),null);
var previous_what = cljs.core.nth.call(null,vec__37705,(2),null);
if(((cljs.core._EQ_.call(null,previous_what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,previous_what,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
if(cljs.core._EQ_.call(null,zprint.zprint.count_right_blanks.call(null,s),right_ind)){
return result__$1;
} else {
var new_previous = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.trimr_blanks.call(null,s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,right_ind))].join(''),color,previous_what], null);
return cljs.core.assoc.call(null,result__$1,previous_index,new_previous);
}
} else {
return result__$1;
}
} else {
return result__$1;
}
}
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil.cljs$lang$applyTo = (function (seq37701){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37701));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 */
zprint.zprint.concat_no_nil_pre_right = (function zprint$zprint$concat_no_nil_pre_right(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37712 = arguments.length;
var i__4819__auto___37713 = (0);
while(true){
if((i__4819__auto___37713 < len__4818__auto___37712)){
args__4824__auto__.push((arguments[i__4819__auto___37713]));

var G__37714 = (i__4819__auto___37713 + (1));
i__4819__auto___37713 = G__37714;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.coll_QMARK_.call(null,o)){
if(cljs.core.empty_QMARK_.call(null,o)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noseq","noseq",405935768),o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.conj_BANG_.call(null,v,o);
}
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_.call(null,result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_right.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_right.cljs$lang$applyTo = (function (seq37711){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37711));
}));

/**
 * Remove a single thing from a sequence.
 */
zprint.zprint.remove_one = (function zprint$zprint$remove_one(s,index){
return cljs.core.concat.call(null,cljs.core.take.call(null,index,s),cljs.core.drop.call(null,(index + (1)),s));
});
/**
 * Ensure that whatever we have is a vector.
 */
zprint.zprint.force_vector = (function zprint$zprint$force_vector(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return coll;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,coll);
}
});
/**
 * Takes a string, and returns the fn-style if it is a keyword and
 *   without the : it can be found in the fn-map.
 */
zprint.zprint.keyword_fn_QMARK_ = (function zprint$zprint$keyword_fn_QMARK_(options,s){
var vec__37715 = clojure.string.split.call(null,s,/^:/);
var left = cljs.core.nth.call(null,vec__37715,(0),null);
var right = cljs.core.nth.call(null,vec__37715,(1),null);
if(cljs.core.truth_(right)){
return new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options).call(null,right);
} else {
return null;
}
});
/**
 * Given the options map, return the max length.  This might be
 *   a constant number, but it might be based on the depth as well.
 *   Returns nil of there is no max-length set.
 */
zprint.zprint.get_max_length = (function zprint$zprint$get_max_length(p__37718){
var map__37719 = p__37718;
var map__37719__$1 = cljs.core.__destructure_map.call(null,map__37719);
var options = map__37719__$1;
var max_length = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var depth = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if(cljs.core.truth_(max_length)){
if(cljs.core.vector_QMARK_.call(null,max_length)){
return cljs.core.nth.call(null,max_length,(function (){var x__4298__auto__ = (depth - (1));
var y__4299__auto__ = (cljs.core.count.call(null,max_length) - (1));
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})());
} else {
return max_length;
}
} else {
return null;
}
});
/**
 * Given an options map, return another options map with no
 *   :max-length key.  This is to that you can call a routine that
 *   normally deals with :max-length and get it to do the normal
 *   thing.
 */
zprint.zprint.no_max_length = (function zprint$zprint$no_max_length(options){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"max-length","max-length",-254826109),(10000));
});
/**
 * Take the vector carrying the intermediate results, and
 *   do the right thing with a new string. Vector is
 *   [ 0 out - vector accumulating line lengths 
 *  1 cur-len - length of current line
 *  just-eol? - did we just do an eol?
 *  ]
 *   s - string to add to current line
 *   tag - element type of string (comment's don't count in length)
 *   eol? - should we terminate line after adding count of s
 */
zprint.zprint.accumulate_ll = (function zprint$zprint$accumulate_ll(count_comment_QMARK_,p__37720,s,tag,eol_QMARK_){
var vec__37721 = p__37720;
var out = cljs.core.nth.call(null,vec__37721,(0),null);
var cur_len = cljs.core.nth.call(null,vec__37721,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__37721,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__37721,(3),null);
var in$ = vec__37721;
var comment_QMARK_ = ((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var count_s = ((((comment_QMARK_) && (cljs.core.not.call(null,count_comment_QMARK_))))?(0):cljs.core.count.call(null,s));
if(cljs.core.truth_((function (){var or__4212__auto__ = (function (){var and__4210__auto__ = eol_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,(function (){var and__4210__auto____$1 = just_eol_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (count_s === (0));
} else {
return and__4210__auto____$1;
}
})());
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return comment_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,out,(cur_len + count_s)),(0),true,comment_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,(cur_len + count_s),null,comment_QMARK_], null);

}
});
zprint.zprint.generate_ll = (function zprint$zprint$generate_ll(count_comment_QMARK_,p__37724,p__37725){
var vec__37726 = p__37724;
var out = cljs.core.nth.call(null,vec__37726,(0),null);
var cur_len = cljs.core.nth.call(null,vec__37726,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__37726,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__37726,(3),null);
var in$ = vec__37726;
var vec__37729 = p__37725;
var s = cljs.core.nth.call(null,vec__37729,(0),null);
var _ = cljs.core.nth.call(null,vec__37729,(1),null);
var tag = cljs.core.nth.call(null,vec__37729,(2),null);
var element = vec__37729;
var vec__37732 = ((((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"newline","newline",1790071323)))))))?zprint.zprint.split_lf_2.call(null,s):(new cljs.core.List(null,s,null,(1),null)));
var l = cljs.core.nth.call(null,vec__37732,(0),null);
var r = cljs.core.nth.call(null,vec__37732,(1),null);
var in$__$1 = zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,in$,l,tag,(!((r == null))));
var in$__$2 = ((cljs.core.empty_QMARK_.call(null,r))?in$__$1:zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,in$__$1,r,tag,null));
return in$__$2;
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments elsewhere.
 *   Note that only vectors with :whitespace, :indent, or :newline are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character. A single comment is counted as two lines. Lots of edge
 *   conditions that are really quite important.
 */
zprint.zprint.line_lengths_iter = (function zprint$zprint$line_lengths_iter(options,ind,style_vec){
var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var ind__$1 = ((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.first.call(null,ind):ind);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"line-lengths-iter: style-vec:",style_vec));
} else {
}

var next_vec = style_vec;
var current_string = null;
var line_length = ind__$1;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_.call(null,next_vec)) && (cljs.core.empty_QMARK_.call(null,current_string)))){
if((((line_length === (0))) && (cljs.core.not.call(null,previous_comment_QMARK_)))){
return out;
} else {
if(cljs.core.truth_(previous_comment_QMARK_)){
return cljs.core.conj.call(null,out,line_length,(0));
} else {
return cljs.core.conj.call(null,out,line_length);

}
}
} else {
var advance_QMARK_ = cljs.core.empty_QMARK_.call(null,current_string);
var vec__37741 = ((advance_QMARK_)?cljs.core.first.call(null,next_vec):null);
var next_string = cljs.core.nth.call(null,vec__37741,(0),null);
var _ = cljs.core.nth.call(null,vec__37741,(1),null);
var tag = cljs.core.nth.call(null,vec__37741,(2),null);
var comment_QMARK_ = ((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var s = ((advance_QMARK_)?next_string:current_string);
var vec__37744 = (cljs.core.truth_(s)?((((comment_QMARK_) && (cljs.core.not.call(null,count_comment_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null):(cljs.core.truth_((function (){var or__4212__auto__ = ((advance_QMARK_) && (((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"indent","indent",-148200125))))))));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return current_string;
}
})())?zprint.zprint.split_lf_2.call(null,s):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)
)):null);
var l = cljs.core.nth.call(null,vec__37744,(0),null);
var r = cljs.core.nth.call(null,vec__37744,(1),null);
var force_newline_QMARK_ = (function (){var and__4210__auto__ = previous_comment_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,l)));
} else {
return and__4210__auto__;
}
})();
var r__$1 = (cljs.core.truth_(force_newline_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''):r);
var l__$1 = (cljs.core.truth_(force_newline_QMARK_)?null:l);
var new_line_length = (line_length + cljs.core.count.call(null,l__$1));
var G__37747 = ((advance_QMARK_)?cljs.core.next.call(null,next_vec):next_vec);
var G__37748 = r__$1;
var G__37749 = (cljs.core.truth_(r__$1)?(0):new_line_length);
var G__37750 = comment_QMARK_;
var G__37751 = (cljs.core.truth_(r__$1)?cljs.core.conj.call(null,out,new_line_length):out);
next_vec = G__37747;
current_string = G__37748;
line_length = G__37749;
previous_comment_QMARK_ = G__37750;
out = G__37751;
continue;
}
break;
}
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments at the
 *   end. Note that only vectors with :whitespace or :indent are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character.
 */
zprint.zprint.line_lengths = (function zprint$zprint$line_lengths(options,ind,style_vec){
var length_vec = cljs.core.first.call(null,(function (){var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var vec__37752 = cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.zprint.generate_ll,count_comment_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.first.call(null,ind):ind),null,null], null),style_vec);
var _ = cljs.core.nth.call(null,vec__37752,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37752,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__37752,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__37752,(3),null);
var result = vec__37752;
if(cljs.core.truth_((function (){var and__4210__auto__ = just_eol_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,just_comment_QMARK_);
} else {
return and__4210__auto__;
}
})())){
return result;
} else {
return zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,cljs.core.assoc.call(null,result,(2),null),"",null,true);
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"line-lengths: style-vec:",style_vec,"ind:",ind,"length-vec:",length_vec));
} else {
}

return length_vec;
});
/**
 * This looks at a style vec and doesn't do all that style-lines does.
 *   It just looks for a new-line in the strings, and returns true if it
 *   doesn't find one.
 */
zprint.zprint.single_line_QMARK_ = (function zprint$zprint$single_line_QMARK_(style_vec){
return cljs.core.not.call(null,cljs.core.reduce.call(null,(function (p1__37755_SHARP_,p2__37756_SHARP_){
var or__4212__auto__ = p1__37755_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p2__37756_SHARP_;
}
}),false,cljs.core.map.call(null,(function (p1__37757_SHARP_){
return clojure.string.includes_QMARK_.call(null,cljs.core.first.call(null,p1__37757_SHARP_),"\n");
}),style_vec)));
});
/**
 * Given a style-vec, come up with a string that gives some hint of 
 *   where this style-vec came from.
 */
zprint.zprint.find_what = (function zprint$zprint$find_what(style_vec){
var s_vec = style_vec;
while(true){
if(cljs.core.truth_(s_vec)){
var vec__37758 = cljs.core.first.call(null,s_vec);
var what = cljs.core.nth.call(null,vec__37758,(0),null);
var _ = cljs.core.nth.call(null,vec__37758,(1),null);
var this$ = cljs.core.nth.call(null,vec__37758,(2),null);
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"element","element",1974019749))){
return what;
} else {
var G__37761 = cljs.core.next.call(null,s_vec);
s_vec = G__37761;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Look at a style vec ready to be given to concat-no-nil, and see if
 *   the first thing in there is a newline of some sort.
 */
zprint.zprint.first_nl_QMARK_ = (function zprint$zprint$first_nl_QMARK_(style_vec){
var vec__37762 = cljs.core.first.call(null,style_vec);
var s = cljs.core.nth.call(null,vec__37762,(0),null);
var color = cljs.core.nth.call(null,vec__37762,(1),null);
var what = cljs.core.nth.call(null,vec__37762,(2),null);
return ((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"indent","indent",-148200125))));
});
/**
 * Given an indent ind and a style-vec coll, place a newline (actually an
 *   indent) at the front of coll.  If the first thing in coll is a newline,
 *   then don't add any spaces after the newline that we prepend.
 */
zprint.zprint.prepend_nl = (function zprint$zprint$prepend_nl(options,ind,coll){
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,((zprint.zprint.first_nl_QMARK_.call(null,coll))?(0):ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null),coll);
});
/**
 * Take a style output, and tell us how many lines it takes to print it
 *   and the maximum width that it reaches. Returns 
 *   [<line-count> <max-width> [line-lengths]].
 *   Doesn't require any max-width inside the style-vec. Also returns the
 *   line lengths in case that is helpful (since we have them anyway).
 *   If (:dbg-ge options) has value, then uses find-what to see if what it
 *   finds matches the value, and if it does, place the value in the
 *   resulting vector.
 */
zprint.zprint.style_lines = (function zprint$zprint$style_lines(options,ind,style_vec){
if(cljs.core.truth_((function (){var and__4210__auto__ = style_vec;
if(cljs.core.truth_(and__4210__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,style_vec)))) && (cljs.core.not.call(null,zprint.zprint.contains_nil_QMARK_.call(null,style_vec))));
} else {
return and__4210__auto__;
}
})())){
var lengths = zprint.zprint.line_lengths_iter.call(null,options,ind,style_vec);
var count_lengths = cljs.core.count.call(null,lengths);
var result = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [count_lengths,(((count_lengths === (0)))?(0):cljs.core.apply.call(null,cljs.core.max,lengths)),lengths], null);
var dbg_ge = new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017).cljs$core$IFn$_invoke$arity$1(options);
var what = (cljs.core.truth_((function (){var and__4210__auto__ = dbg_ge;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.call(null,zprint.zprint.find_what.call(null,style_vec),dbg_ge);
} else {
return and__4210__auto__;
}
})())?dbg_ge:null);
if(cljs.core.truth_(what)){
return cljs.core.conj.call(null,result,what);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Given output from style-lines and options, see if it fits the width.  
 *   Return the number of lines it takes if it fits, nil otherwise.
 */
zprint.zprint.fzfit = (function zprint$zprint$fzfit(p__37765,p__37766){
var map__37767 = p__37765;
var map__37767__$1 = cljs.core.__destructure_map.call(null,map__37767);
var options = map__37767__$1;
var width = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__37768 = p__37766;
var line_count = cljs.core.nth.call(null,vec__37768,(0),null);
var max_width = cljs.core.nth.call(null,vec__37768,(1),null);
var style_lines_return = vec__37768;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzfit: fixed-rightcnt:",zprint.zprint.fix_rightcnt.call(null,rightcnt),"line-count:",line_count,"max-width:",max_width,"width:",width);
} else {
}

if(cljs.core.truth_(style_lines_return)){
if((max_width <= (width - zprint.zprint.fix_rightcnt.call(null,rightcnt)))){
return line_count;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given the return from style-lines  and options, 
 *   return true if it fits on a single line.
 */
zprint.zprint.fzfit_one_line = (function zprint$zprint$fzfit_one_line(options,style_lines_return){
var lines = zprint.zprint.fzfit.call(null,options,style_lines_return);
return ((typeof lines === 'number') && (cljs.core._EQ_.call(null,lines,(1))));
});
/**
 * Increase the rightmost count, if any, and return one if not.
 */
zprint.zprint.rightmost = (function zprint$zprint$rightmost(options){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$2(options,(0)) + (1)));
});
/**
 * Remove the rightmost count.
 */
zprint.zprint.not_rightmost = (function zprint$zprint$not_rightmost(options){
return cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
});
/**
 * Handle the complexity of commas and rightmost-pair with options.
 *   If it isn't a rightmost, it loses rightmost status.
 *   If it is a rightmost, and in the rightmost pair, it gain one rightmost
 *   since it has the right end thing (and we don't care about the comma).
 *   If it is the rightmost of the non-rightmost-pair, then the comma
 *   matters, and we handle that appropriately.  Whew!
 */
zprint.zprint.c_r_pair = (function zprint$zprint$c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,rightmost_QMARK_,options){
if(cljs.core.not.call(null,rightmost_QMARK_)){
return zprint.zprint.not_rightmost.call(null,options);
} else {
if(cljs.core.truth_(rightmost_pair_QMARK_)){
return options;
} else {
if(cljs.core.truth_(commas_QMARK_)){
return zprint.zprint.rightmost.call(null,zprint.zprint.not_rightmost.call(null,options));
} else {
return zprint.zprint.not_rightmost.call(null,options);
}
}
}
});
/**
 * Handle issue with rightcnt.
 */
zprint.zprint.fix_rightcnt = (function zprint$zprint$fix_rightcnt(rightcnt){
if(typeof rightcnt === 'number'){
return rightcnt;
} else {
return (0);
}
});
zprint.zprint.str__GT_key = cljs.core.PersistentHashMap.fromArrays(["]","'",")","`","~@","~","#{","(","#(","{","}","[","#_","@"],[new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"deref","deref",-145586795)]);
/**
 * Look up the thing in the zprint-color-map.  Accepts keywords or
 *   strings.
 */
zprint.zprint.zcolor_map = (function zprint$zprint$zcolor_map(p__37771,key_or_str){
var map__37772 = p__37771;
var map__37772__$1 = cljs.core.__destructure_map.call(null,map__37772);
var options = map__37772__$1;
var color_map = cljs.core.get.call(null,map__37772__$1,new cljs.core.Keyword(null,"color-map","color-map",-207789684));
return color_map.call(null,(((key_or_str instanceof cljs.core.Keyword))?key_or_str:zprint.zprint.str__GT_key.call(null,key_or_str)));
});
/**
 * Take a style-vec, and if hangflow? is true, return a
 *   vector [hang-or-flow style-vec], else return style-vec.
 *   But a nil style-vec returns nil.
 */
zprint.zprint.hangflow = (function zprint$zprint$hangflow(hangflow_QMARK_,hang_or_flow,style_vec){
if(cljs.core.truth_(style_vec)){
if(cljs.core.truth_(hangflow_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,style_vec], null);
} else {
return style_vec;
}
} else {
return null;
}
});
/**
 * Try to hang something and if it doesn't hang at all, then flow it,
 *   but strongly prefer hang.  Has hang and flow indents, and fzfn is the
 *   fzprint-? function to use with zloc.  Callers need to know whether this
 *   was hang or flow, so it returns [{:hang | :flow} style-vec] all the time.
 */
zprint.zprint.fzprint_hang_unless_fail = (function zprint$zprint$fzprint_hang_unless_fail(options,hindent,findent,fzfn,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hindent:",hindent,"findent:",findent,"zloc:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var hanging = ((cljs.core.not_EQ_.call(null,hindent,findent))?fzfn.call(null,zprint.zprint.in_hang.call(null,options),hindent,zloc):null);
var value__37637__auto__ = (cljs.core.truth_((function (){var and__4210__auto__ = hanging;
if(cljs.core.truth_(and__4210__auto__)){
return zprint.zprint.fzfit.call(null,options,zprint.zprint.style_lines.call(null,options,hindent,hanging));
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),hanging], null):(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hang failed, doing flow");
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.prepend_nl.call(null,options,findent,fzfn.call(null,options,findent,zloc))], null);
})()
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: exit:",cljs.core.pr_str.call(null,value__37637__auto__));
} else {
}

return value__37637__auto__;
});
/**
 * Given a style-vec with exactly one thing in it, replace the color
 *   with whatever local color we have determined is correct.
 */
zprint.zprint.replace_color = (function zprint$zprint$replace_color(local_color,style_vec){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,style_vec),(1))){
var vec__37773 = style_vec;
var vec__37776 = cljs.core.nth.call(null,vec__37773,(0),null);
var string = cljs.core.nth.call(null,vec__37776,(0),null);
var color = cljs.core.nth.call(null,vec__37776,(1),null);
var element = cljs.core.nth.call(null,vec__37776,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,local_color,element], null)], null);
} else {
return style_vec;
}
});
/**
 * This routine tries to figure out if existing hang should be used without
 *   even bothering to do a flow and compare them with good-enough?.
 */
zprint.zprint.use_hang_QMARK_ = (function zprint$zprint$use_hang_QMARK_(caller,p__37779,ind,hang_count,hanging_line_count){
var map__37780 = p__37779;
var map__37780__$1 = cljs.core.__destructure_map.call(null,map__37780);
var options = map__37780__$1;
var map__37781 = cljs.core.get.call(null,map__37780__$1,caller);
var map__37781__$1 = cljs.core.__destructure_map.call(null,map__37781);
var hang_accept = cljs.core.get.call(null,map__37781__$1,new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607));
var ha_depth_factor = cljs.core.get.call(null,map__37781__$1,new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962));
var ha_width_factor = cljs.core.get.call(null,map__37781__$1,new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581));
var depth = cljs.core.get.call(null,map__37780__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var width = cljs.core.get.call(null,map__37780__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_((function (){var and__4210__auto__ = hanging_line_count;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = hang_accept;
if(cljs.core.truth_(and__4210__auto____$1)){
return (hang_count > (0));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
var hang_accept__$1 = ((hang_accept + (depth * ha_depth_factor)) + ((ind / width) * ha_width_factor));
return (((hanging_line_count - (1)) / hang_count) <= hang_accept__$1);
} else {
return null;
}
});
/**
 * Print a single pair of things (though it might not be exactly a
 *   pair, given comments and :extend and the like), like bindings in
 *   a let, clauses in a cond, keys and values in a map.  Controlled
 *   by various maps, the key of which is caller.  Returns 
 *   [:hang <style-vec>] or [:flow <style-vec>] so that the upstream folks
 *   know whether this was a hang or flow and can do the right thing
 *   based on that.
 */
zprint.zprint.fzprint_two_up = (function zprint$zprint$fzprint_two_up(caller,p__37782,ind,commas_QMARK_,justify_width,rightmost_pair_QMARK_,p__37783){
var map__37784 = p__37782;
var map__37784__$1 = cljs.core.__destructure_map.call(null,map__37784);
var options = map__37784__$1;
var map__37785 = cljs.core.get.call(null,map__37784__$1,caller);
var map__37785__$1 = cljs.core.__destructure_map.call(null,map__37785);
var hang_QMARK_ = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var flow_QMARK_ = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"flow?","flow?",96929057));
var indent_arg = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874));
var key_depth_color = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819));
var indent = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var key_value_color = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889));
var dbg_cnt_QMARK_ = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"dbg-cnt?","dbg-cnt?",-1638028976));
var dbg_local_QMARK_ = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325));
var key_color = cljs.core.get.call(null,map__37785__$1,new cljs.core.Keyword(null,"key-color","key-color",-209002572));
var one_line_QMARK_ = cljs.core.get.call(null,map__37784__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var dbg_QMARK_ = cljs.core.get.call(null,map__37784__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var dbg_indent = cljs.core.get.call(null,map__37784__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.call(null,map__37784__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var do_in_hang_QMARK_ = cljs.core.get.call(null,map__37784__$1,new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947));
var map_depth = cljs.core.get.call(null,map__37784__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var vec__37786 = p__37783;
var lloc = cljs.core.nth.call(null,vec__37786,(0),null);
var rloc = cljs.core.nth.call(null,vec__37786,(1),null);
var xloc = cljs.core.nth.call(null,vec__37786,(2),null);
var pair = vec__37786;
if(cljs.core.truth_(dbg_cnt_QMARK_)){
cljs.core.println.call(null,"two-up: caller:",caller,"hang?",hang_QMARK_,"dbg?",dbg_QMARK_);
} else {
}

if(cljs.core.truth_((function (){var or__4212__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return dbg_local_QMARK_;
}
})())){
cljs.core.println.call(null,(function (){var or__4212__auto__ = dbg_indent;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})(),"==========================",["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = dbg_indent;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})())].join(''),cljs.core.pr_str.call(null,"fzprint-two-up:",zprint.zfns.zstring.call(null,lloc),"tag:",zprint.zfns.ztag.call(null,lloc),"caller:",caller,"count:",cljs.core.count.call(null,pair),"ind:",ind,"indent:",indent,"indent-arg:",indent_arg,"justify-width:",justify_width,"one-line?:",one_line_QMARK_,"hang?:",hang_QMARK_,"in-hang?",in_hang_QMARK_,"do-in-hang?",do_in_hang_QMARK_,"flow?",flow_QMARK_,"commas?",commas_QMARK_,"rightmost-pair?",rightmost_pair_QMARK_));
} else {
}

var local_hang_QMARK_ = (function (){var or__4212__auto__ = one_line_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return hang_QMARK_;
}
})();
var indent__$1 = (function (){var or__4212__auto__ = indent;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return indent_arg;
}
})();
var local_options = ((cljs.core.not.call(null,local_hang_QMARK_))?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var loptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,null,options);
var roptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),options);
var local_roptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),local_options);
var value_color_map = (function (){var and__4210__auto__ = key_value_color;
if(cljs.core.truth_(and__4210__auto__)){
return key_value_color.call(null,zprint.zfns.zsexpr.call(null,lloc));
} else {
return and__4210__auto__;
}
})();
var local_roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.call(null,local_roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)):local_roptions);
var roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.call(null,roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)):roptions);
var modifier_set = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(options.call(null,caller));
var modifier_QMARK_ = (function (){var or__4212__auto__ = (function (){var and__4210__auto__ = modifier_set;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = modifier_set.call(null,zprint.zfns.zstring.call(null,lloc));
if(cljs.core.truth_(and__4210__auto____$1)){
return (cljs.core.count.call(null,pair) > (2));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,rloc);
}
})();
var local_color = cljs.core.get.call(null,key_depth_color,(map_depth - (1)));
var local_color__$1 = (cljs.core.truth_(key_color)?key_color.call(null,zprint.zfns.zsexpr.call(null,lloc)):local_color);
var arg_1 = zprint.zprint.fzprint_STAR_.call(null,loptions,ind,lloc);
var arg_1_newline_QMARK_ = (function (){var and__4210__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1));
if(and__4210__auto__){
return zprint.zfns.znewline_QMARK_.call(null,lloc);
} else {
return and__4210__auto__;
}
})();
var arg_1__$1 = (cljs.core.truth_(local_color__$1)?zprint.zprint.replace_color.call(null,local_color__$1,arg_1):arg_1);
var vec__37789 = zprint.zprint.style_lines.call(null,options,ind,arg_1__$1);
var arg_1_line_count = cljs.core.nth.call(null,vec__37789,(0),null);
var arg_1_max_width = cljs.core.nth.call(null,vec__37789,(1),null);
var arg_1_lines = vec__37789;
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up before modifier: arg-1-line-count:",arg_1_line_count,"arg-1-max-width:",arg_1_max_width):null);
var modifier_QMARK___$1 = (cljs.core.truth_((function (){var or__4212__auto__ = (function (){var and__4210__auto__ = arg_1_line_count;
if(cljs.core.truth_(and__4210__auto__)){
return (arg_1_line_count > (1));
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return arg_1_newline_QMARK_;
}
})())?null:modifier_QMARK_);
var combined_arg_1 = (cljs.core.truth_(modifier_QMARK___$1)?zprint.zprint.concat_no_nil.call(null,arg_1__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(1)], null)], null),zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,loptions),(ind + arg_1_max_width),rloc)):arg_1__$1);
var arg_1__$2 = (cljs.core.truth_(combined_arg_1)?combined_arg_1:arg_1__$1);
var modifier_QMARK___$2 = (cljs.core.truth_(combined_arg_1)?modifier_QMARK___$1:null);
var vec__37792 = (cljs.core.truth_(combined_arg_1)?zprint.zprint.style_lines.call(null,options,ind,arg_1__$2):arg_1_lines);
var arg_1_line_count__$1 = cljs.core.nth.call(null,vec__37792,(0),null);
var arg_1_max_width__$1 = cljs.core.nth.call(null,vec__37792,(1),null);
var arg_1_lines__$1 = vec__37792;
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up after modifier: arg-1-line-count:",arg_1_line_count__$1,"arg-1-max-width:",arg_1_max_width__$1):null);
var lloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?rloc:lloc);
var rloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?xloc:rloc);
var arg_1_fit_oneline_QMARK_ = ((cljs.core.not.call(null,flow_QMARK_)) && (zprint.zprint.fzfit_one_line.call(null,loptions,arg_1_lines__$1)));
var arg_1_fit_QMARK_ = (function (){var or__4212__auto__ = arg_1_fit_oneline_QMARK_;
if(or__4212__auto__){
return or__4212__auto__;
} else {
if(cljs.core.not.call(null,one_line_QMARK_)){
return zprint.zprint.fzfit.call(null,loptions,arg_1_lines__$1);
} else {
return null;
}
}
})();
var arg_1_width = ((function (){var or__4212__auto__ = arg_1_max_width__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})() - ind);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-two-up: arg-1:",arg_1__$2));
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = arg_1__$2;
if(cljs.core.truth_(and__4210__auto__)){
var or__4212__auto__ = arg_1_fit_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not.call(null,in_hang_QMARK_);
}
} else {
return and__4210__auto__;
}
})())){
if(cljs.core.truth_(arg_1_newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),arg_1__$2], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.fzprint_STAR_.call(null,roptions__$1,ind,lloc__$1)], null);
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(2));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = modifier_QMARK___$2;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(3));
} else {
return and__4210__auto__;
}
}
})())){
var hanging_width = (cljs.core.truth_(justify_width)?justify_width:arg_1_width);
var hanging_spaces = (cljs.core.truth_(justify_width)?((justify_width - arg_1_width) + (1)):(1));
var hanging_indent = (((1) + hanging_width) + ind);
var flow_indent = (indent__$1 + ind);
if(cljs.core.truth_((function (){var and__4210__auto__ = zprint.zfns.zstring.call(null,lloc__$1);
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = zprint.zprint.keyword_fn_QMARK_.call(null,options,zprint.zfns.zstring.call(null,lloc__$1));
if(cljs.core.truth_(and__4210__auto____$1)){
return zprint.zfns.zvector_QMARK_.call(null,rloc__$1);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
var vec__37795 = zprint.zprint.fzprint_hang_unless_fail.call(null,loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_binding_vec,rloc__$1);
var hang_or_flow = cljs.core.nth.call(null,vec__37795,(0),null);
var style_vec = cljs.core.nth.call(null,vec__37795,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.call(null,hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(2)], null)], null)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.call(null,arg_1__$3,style_vec)], null);
} else {
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before hang.  hanging tried?",((arg_1_fit_oneline_QMARK_) || (((cljs.core.not.call(null,flow_QMARK_)) && ((flow_indent >= hanging_indent)))))):null);
var hanging = ((((arg_1_fit_oneline_QMARK_) || (((cljs.core.not.call(null,flow_QMARK_)) && ((flow_indent >= hanging_indent))))))?zprint.zprint.fzprint_STAR_.call(null,(((flow_indent < hanging_indent))?zprint.zprint.in_hang.call(null,local_roptions__$1):local_roptions__$1),hanging_indent,rloc__$1):null);
var hang_count = zprint.zfns.zcount.call(null,rloc__$1);
var ___$3 = zprint.zprint.log_lines.call(null,options,"fzprint-two-up: hanging:",hanging_indent,hanging);
var hanging_lines = zprint.zprint.style_lines.call(null,options,hanging_indent,hanging);
var fit_QMARK_ = zprint.zprint.fzfit_one_line.call(null,local_roptions__$1,hanging_lines);
var hanging_lines__$1 = ((fit_QMARK_)?hanging_lines:(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not.call(null,one_line_QMARK_);
if(and__4210__auto__){
return hang_QMARK_;
} else {
return and__4210__auto__;
}
})())?hanging_lines:null));
var hanging_line_count = cljs.core.first.call(null,hanging_lines__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: fit?",fit_QMARK_,"hanging-lines:",hanging_lines__$1):null);
var ___$5 = zprint.zprint.log_lines.call(null,options,"fzprint-two-up: hanging-2:",hanging_indent,hanging);
var flow_it_QMARK_ = ((cljs.core.not.call(null,hanging_lines__$1)) || (((((((cljs.core.not.call(null,hanging_lines__$1)) && (cljs.core.not.call(null,one_line_QMARK_)))) || (cljs.core.not.call(null,(function (){var or__4212__auto____$2 = fit_QMARK_;
if(or__4212__auto____$2){
return or__4212__auto____$2;
} else {
return one_line_QMARK_;
}
})())))) && ((((flow_indent < hanging_indent)) || (cljs.core.not.call(null,hanging_lines__$1)))))));
var flow_it_QMARK___$1 = (cljs.core.truth_(zprint.zprint.use_hang_QMARK_.call(null,caller,options,ind,hang_count,hanging_line_count))?false:flow_it_QMARK_);
var ___$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before flow. flow-it?",flow_it_QMARK___$1):null);
var flow = ((flow_it_QMARK___$1)?zprint.zprint.fzprint_STAR_.call(null,roptions__$1,flow_indent,rloc__$1):null);
var ___$7 = zprint.zprint.log_lines.call(null,options,"fzprint-two-up: flow:",(indent__$1 + ind),flow);
var flow_lines = zprint.zprint.style_lines.call(null,options,(indent__$1 + ind),flow);
if(cljs.core.truth_(dbg_local_QMARK_)){
cljs.core.prn.call(null,"fzprint-two-up: local-hang:",local_hang_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: one-line?:",one_line_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: hanging-indent:",hanging_indent);

cljs.core.prn.call(null,"fzprint-two-up: hanging-lines:",hanging_lines__$1);

cljs.core.prn.call(null,"fzprint-two-up: flow?:",flow_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: flow-it?:",flow_it_QMARK___$1);

cljs.core.prn.call(null,"fzprint-two-up: fit?:",fit_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: flow-indent:",flow_indent);

cljs.core.prn.call(null,"fzprint-two-up: hanging:",zprint.zfns.zstring.call(null,lloc__$1),hanging);

cljs.core.prn.call(null,"fzprint-two-up: (+ indent ind):",(indent__$1 + ind));

cljs.core.prn.call(null,"fzprint-two-up: flow:",zprint.zfns.zstring.call(null,lloc__$1),flow);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before good-enough");
} else {
}

if(fit_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(3)], null)], null),hanging)], null);
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = hanging_lines__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return flow_lines;
}
})())){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_.call(null,caller,roptions__$1,new cljs.core.Keyword(null,"none-two-up","none-two-up",-457831686),hang_count,(hanging_indent - flow_indent),hanging_lines__$1,flow_lines))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(4)], null)], null),hanging)], null);
} else {
if(cljs.core.truth_(justify_width)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.call(null,arg_1__$2,zprint.zprint.prepend_nl.call(null,options,(indent__$1 + ind),flow))], null);
}
}
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.call(null,arg_1__$2,zprint.zprint.fzprint_flow_seq.call(null,options,(indent__$1 + ind),(cljs.core.truth_(modifier_QMARK___$2)?cljs.core.nnext.call(null,pair):cljs.core.next.call(null,pair)),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"newline-first","newline-first",-638470720)))], null);

}
}
}
} else {
return null;
}
});
/**
 * Figure the width for a justification of a set of pairs in coll.  
 *   Also, decide if it makes any sense to justify the pairs at all.
 *   For instance, they all need to be one-line.
 */
zprint.zprint.fzprint_justify_width = (function zprint$zprint$fzprint_justify_width(caller,p__37803,ind,coll){
var map__37804 = p__37803;
var map__37804__$1 = cljs.core.__destructure_map.call(null,map__37804);
var options = map__37804__$1;
var map__37805 = cljs.core.get.call(null,map__37804__$1,caller);
var map__37805__$1 = cljs.core.__destructure_map.call(null,map__37805);
var justify_QMARK_ = cljs.core.get.call(null,map__37805__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var firsts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__37798_SHARP_){
if((cljs.core.count.call(null,p1__37798_SHARP_) > (1))){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,cljs.core.first.call(null,p1__37798_SHARP_));
} else {
return null;
}
}),coll));
var style_seq = cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.style_lines,options,ind),firsts);
var each_one_line_QMARK_ = cljs.core.reduce.call(null,(function (p1__37799_SHARP_,p2__37800_SHARP_){
if(cljs.core.truth_(p1__37799_SHARP_)){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p2__37800_SHARP_),(1));
} else {
return null;
}
}),true,style_seq);
var justify_width = (cljs.core.truth_(each_one_line_QMARK_)?cljs.core.reduce.call(null,(function (p1__37801_SHARP_,p2__37802_SHARP_){
var x__4295__auto__ = p1__37801_SHARP_;
var y__4296__auto__ = cljs.core.second.call(null,p2__37802_SHARP_);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
}),(0),style_seq):null);
if(cljs.core.truth_(justify_width)){
return (justify_width - ind);
} else {
return null;
}
});
/**
 * Take a size and a collection of vectors with two or more elements
 *   per vector.  The elements are zlocs, the vectors are not.  Return
 *   the remaining character count or nil if it for sure doesn't fit.
 *   In order to be sure it doesn't fit, this version doesn't assume
 *   *any* separators, so it really underestimates the size.
 */
zprint.zprint.fit_within_QMARK_ = (function zprint$zprint$fit_within_QMARK_(var_args){
var G__37807 = arguments.length;
switch (G__37807) {
case 3:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (size,coll,depth){
return cljs.core.reduce.call(null,(function (size__$1,element){
var or__4212__auto__ = ((cljs.core._EQ_.call(null,depth,(0)))?zprint.zprint.fit_within_QMARK_.call(null,size__$1,element,(depth + (1))):(function (){var remaining = (size__$1 - cljs.core.count.call(null,zprint.zfns.zstring.call(null,element)));
if((remaining > (0))){
return remaining;
} else {
return null;
}
})());
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.reduced.call(null,null);
}
}),size,coll);
}));

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (size,coll){
return zprint.zprint.fit_within_QMARK_.call(null,size,coll,(0));
}));

(zprint.zprint.fit_within_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Convert a hangflow style-vec to a regular style-vec.
 */
zprint.zprint.remove_hangflow = (function zprint$zprint$remove_hangflow(hf_style_vec){
if(cljs.core.truth_(hf_style_vec)){
return cljs.core.map.call(null,cljs.core.second,hf_style_vec);
} else {
return null;
}
});
/**
 * Accept a sequence of pairs, and map fzprint-two-up across those pairs.
 *   If you have :one-line? set, this will return nil if it is way over,
 *   but it can't accurately tell exactly what will fit on one line, since
 *   it doesn't know the separators and such.  So, :one-line? true is a
 *   performance optimization, so it doesn't do a whole huge map just to
 *   find out that it could not possibly have fit on one line.  So, this
 *   returns a sequence of style-vecs, where the indentation for the
 *   stuff inside of the pairs is already there, but the separators of
 *   the style-vecs (including indentation and commas) is done by the
 *   caller of fzprint-map-two-up. Always returns a sequence of vector pairs:
 *   [[:hang <style-vec-for-one-pair>] [:flow <style-vec-for-one-pair>] ...].
 *   If you want a style vec instead, call remove-hangflow on the return 
 *   from fzprint-map-two-up.  This will use one-line?, but not check to see
 *   that it actually fits.  If you care about that, then you should check the
 *   return yourself.  It will, however, make an estimate of whether or not
 *   it will fit and if it clearly doesn't, it will return a nil.
 */
zprint.zprint.fzprint_map_two_up = (function zprint$zprint$fzprint_map_two_up(caller,p__37809,ind,commas_QMARK_,coll){
var map__37810 = p__37809;
var map__37810__$1 = cljs.core.__destructure_map.call(null,map__37810);
var options = map__37810__$1;
var map__37811 = cljs.core.get.call(null,map__37810__$1,caller);
var map__37811__$1 = cljs.core.__destructure_map.call(null,map__37811);
var justify_QMARK_ = cljs.core.get.call(null,map__37811__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var force_nl_QMARK_ = cljs.core.get.call(null,map__37811__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var width = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var parallel_QMARK_ = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892));
var caller_map = caller.call(null,options);
var len = cljs.core.count.call(null,coll);
var justify_width = (cljs.core.truth_((function (){var and__4210__auto__ = justify_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,one_line_QMARK_);
} else {
return and__4210__auto__;
}
})())?zprint.zprint.fzprint_justify_width.call(null,caller,options,ind,coll):null);
var caller_options = (cljs.core.truth_(justify_width)?options.call(null,caller):null);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: one-line?",new cljs.core.Keyword(null,"one-line?","one-line?",2055953111).cljs$core$IFn$_invoke$arity$1(options),"justify?:",justify_QMARK_);
} else {
}

if(cljs.core.not.call(null,(function (){var and__4210__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = force_nl_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return (len > (1));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
var justify_width__$1 = justify_width;
var justify_options = (cljs.core.truth_(justify_width__$1)?zprint.config.merge_deep.call(null,zprint.config.merge_deep.call(null,options,cljs.core.PersistentArrayMap.createAsIfByAssoc([caller,caller_options.call(null,new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243))])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuning","tuning",-48660925),caller_options.call(null,new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675))], null)):options);
while(true){
var beginning_coll = cljs.core.butlast.call(null,coll);
var beginning_remaining = (cljs.core.truth_(one_line_QMARK_)?zprint.zprint.fit_within_QMARK_.call(null,(width - ind),beginning_coll):true);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: remaining:",(width - ind),"beginning-remaining:",beginning_remaining):null);
var beginning = (cljs.core.truth_(beginning_remaining)?zprint.zprint.zpmap.call(null,options,cljs.core.partial.call(null,zprint.zprint.fzprint_two_up,caller,justify_options,ind,commas_QMARK_,justify_width__$1,null),beginning_coll):null);
var beginning__$1 = (cljs.core.truth_(zprint.zprint.contains_nil_QMARK_.call(null,beginning))?null:beginning);
var end_coll = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,coll)], null);
var end_remaining = (cljs.core.truth_(one_line_QMARK_)?(function (){var and__4210__auto__ = beginning__$1;
if(cljs.core.truth_(and__4210__auto__)){
return zprint.zprint.fit_within_QMARK_.call(null,(beginning_remaining - rightcnt),end_coll);
} else {
return and__4210__auto__;
}
})():true);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: beginning-remaining:",beginning_remaining,"rightcnt:",rightcnt,"end-remaining:",end_remaining):null);
var end = (cljs.core.truth_(end_remaining)?(function (){var temp__5753__auto__ = zprint.zprint.fzprint_two_up.call(null,caller,justify_options,ind,commas_QMARK_,justify_width__$1,new cljs.core.Keyword(null,"rightmost-pair","rightmost-pair",-39229380),cljs.core.first.call(null,end_coll));
if(cljs.core.truth_(temp__5753__auto__)){
var end_result = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_result], null);
} else {
return null;
}
})():null);
var result = ((cljs.core._EQ_.call(null,len,(1)))?end:zprint.zprint.concat_no_nil.call(null,beginning__$1,end)
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map-two-up: len:",len,"(nil? end):",(end == null),"end:",end,"(nil? beginning):",(beginning__$1 == null),"beginning:",beginning__$1,"(count end):",cljs.core.count.call(null,end),"(count beginnging):",cljs.core.count.call(null,beginning__$1),"justify-width:",justify_width__$1,"result:",result));
} else {
}

if(cljs.core.truth_((function (){var or__4212__auto__ = result;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not.call(null,justify_width__$1);
}
})())){
return result;
} else {
var G__37812 = null;
var G__37813 = options;
justify_width__$1 = G__37812;
justify_options = G__37813;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Do a key comparison that works well for numbers as well as
 *   strings.
 */
zprint.zprint.compare_keys = (function zprint$zprint$compare_keys(x,y){
if(((typeof x === 'number') && (typeof y === 'number'))){
return cljs.core.compare.call(null,x,y);
} else {
return cljs.core.compare.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));

}
});
/**
 * Do a key comparison that places ordered keys first.
 */
zprint.zprint.compare_ordered_keys = (function zprint$zprint$compare_ordered_keys(key_value,zdotdotdot,x,y){
if(cljs.core.truth_((function (){var and__4210__auto__ = key_value.call(null,x);
if(cljs.core.truth_(and__4210__auto__)){
return key_value.call(null,y);
} else {
return and__4210__auto__;
}
})())){
return cljs.core.compare.call(null,key_value.call(null,x),key_value.call(null,y));
} else {
if(cljs.core.truth_(key_value.call(null,x))){
return (-1);
} else {
if(cljs.core.truth_(key_value.call(null,y))){
return (1);
} else {
if(cljs.core._EQ_.call(null,zdotdotdot,x)){
return (1);
} else {
if(cljs.core._EQ_.call(null,zdotdotdot,y)){
return (-1);
} else {
return zprint.zprint.compare_keys.call(null,x,y);

}
}
}
}
}
});
/**
 * A variety of sorting and ordering options for the output of
 *   partition-all-2-nc.  It can sort, which is the default, but if
 *   the caller has a key-order vector, it will extract any keys in
 *   that vector and place them first (in order) before sorting the
 *   other keys.  If sorting is not called for, does nothing.
 */
zprint.zprint.order_out = (function zprint$zprint$order_out(caller,p__37816,access,out){
var map__37817 = p__37816;
var map__37817__$1 = cljs.core.__destructure_map.call(null,map__37817);
var options = map__37817__$1;
var map__37818 = cljs.core.get.call(null,map__37817__$1,caller);
var map__37818__$1 = cljs.core.__destructure_map.call(null,map__37818);
var sort_QMARK_ = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var key_order = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"key-order","key-order",-356936372));
var key_value = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"key-value","key-value",-34906839));
var in_code_QMARK_ = cljs.core.get.call(null,map__37817__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_((function (){var and__4210__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4210__auto__;
}
})())){
return cljs.core.sort.call(null,(function (p1__37814_SHARP_,p2__37815_SHARP_){
return cljs.core.partial.call(null,zprint.zprint.compare_ordered_keys,(function (){var or__4212__auto__ = key_value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),zprint.zfns.zdotdotdot.call(null)).call(null,zprint.zfns.zsexpr.call(null,access.call(null,p1__37814_SHARP_)),zprint.zfns.zsexpr.call(null,access.call(null,p2__37815_SHARP_)));
}),out);
} else {
return out;
}
});
/**
 * This checks to see if an element should be considered part of a
 *   pair if it comes between other elements, and a single element on
 *   its own if it would otherwise be the first part of a pair.  Mostly
 *   this will trigger on comments, but a #_(...) element will also
 *   trigger this, as will a newline if one appears.
 */
zprint.zprint.pair_element_QMARK_ = (function zprint$zprint$pair_element_QMARK_(zloc){
var or__4212__auto__ = zprint.zfns.zcomment_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = zprint.zfns.zuneval_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return zprint.zfns.znewline_QMARK_.call(null,zloc);
}
}
});
/**
 * This checks to see if an element should be considered the middle element
 *   of a pair.  At some point, we can expand this, but for now there is only
 *   one middle element.
 */
zprint.zprint.middle_element_QMARK_ = (function zprint$zprint$middle_element_QMARK_(p__37819,zloc){
var map__37820 = p__37819;
var map__37820__$1 = cljs.core.__destructure_map.call(null,map__37820);
var options = map__37820__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__37820__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core._EQ_.call(null,in_code_QMARK_,"condp")){
return cljs.core._EQ_.call(null,zprint.zfns.zstring.call(null,zloc),":>>");
} else {
return null;
}
});
/**
 * If given a non-collection, simply does a dissoc of the key, but
 *   if given a sequence of keys, will remove the final one.
 */
zprint.zprint.remove_key_seq = (function zprint$zprint$remove_key_seq(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
var this_key = cljs.core.first.call(null,ks);
var next_key = cljs.core.next.call(null,ks);
if(next_key){
var removed_map = zprint.zprint.remove_key_seq.call(null,cljs.core.get.call(null,m,this_key),cljs.core.next.call(null,ks));
if(cljs.core.empty_QMARK_.call(null,removed_map)){
return cljs.core.dissoc.call(null,m,this_key);
} else {
return cljs.core.assoc.call(null,m,this_key,removed_map);
}
} else {
return cljs.core.dissoc.call(null,m,this_key);
}
} else {
return cljs.core.dissoc.call(null,m,ks);
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map, and terminate the reduce if it changes
 *   the map.
 */
zprint.zprint.ignore_key_seq_silent = (function zprint$zprint$ignore_key_seq_silent(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return zprint.zprint.remove_key_seq.call(null,m,ks);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.dissoc.call(null,m,ks);
}
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map leaving behind a key :zprint-ignored, 
 *   and terminate the reduce if it changes the map.
 */
zprint.zprint.ignore_key_seq = (function zprint$zprint$ignore_key_seq(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc.call(null,m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
}
});
/**
 * Take a map and remove any of the key sequences specified from it.
 *   Note that this only works for sexpressions, not for actual zippers.
 */
zprint.zprint.map_ignore = (function zprint$zprint$map_ignore(caller,p__37821,zloc){
var map__37822 = p__37821;
var map__37822__$1 = cljs.core.__destructure_map.call(null,map__37822);
var options = map__37822__$1;
var map__37823 = cljs.core.get.call(null,map__37822__$1,caller);
var map__37823__$1 = cljs.core.__destructure_map.call(null,map__37823);
var key_ignore = cljs.core.get.call(null,map__37823__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.call(null,map__37823__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var ignored_silent = (cljs.core.truth_(key_ignore_silent)?cljs.core.reduce.call(null,zprint.zprint.ignore_key_seq_silent,zloc,key_ignore_silent):zloc);
var ignored = (cljs.core.truth_(key_ignore)?cljs.core.reduce.call(null,zprint.zprint.ignore_key_seq,ignored_silent,key_ignore):ignored_silent);
return ignored;
});
/**
 * Input is (zseqnws zloc) or (zseqnws-w-nl) where one assumes that
 *   these are pairs.  Thus, a seq of zlocs.  Output is a sequence of
 *   seqs, where the seqs are usually pairs, but might be single things.
 *   Doesn't pair up comments or #_(...) unevaled sexpressions.  The
 *   ones before the first part of a pair come as a single element in
 *   what would usually be a pair, and the ones between the first and
 *   second parts of a pair come inside the pair.  There may be an
 *   arbitrary number of elements between the first and second elements
 *   of the pair (one per line).  If there are any comments or unevaled
 *   sexpressions, don't sort the keys, as we might lose track of where
 *   the comments or unevaled s-expressions go.
 */
zprint.zprint.partition_all_2_nc = (function zprint$zprint$partition_all_2_nc(options,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
var max_length = zprint.zprint.get_max_length.call(null,options);
var remaining = coll;
var no_sort_QMARK_ = null;
var index = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"partition-all-2-nc: index:",index,"no-sort?:",no_sort_QMARK_,"first remaining:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,remaining)),"second remaining:",zprint.zfns.zstring.call(null,cljs.core.second.call(null,remaining))));
} else {
}

if(cljs.core.not.call(null,remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [no_sort_QMARK_,cljs.core.persistent_BANG_.call(null,out)], null);
} else {
var vec__37831 = (cljs.core.truth_(zprint.zprint.pair_element_QMARK_.call(null,cljs.core.first.call(null,remaining)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),true], null):(cljs.core.truth_((function (){var or__4212__auto__ = zprint.zprint.pair_element_QMARK_.call(null,cljs.core.second.call(null,remaining));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,cljs.core.second.call(null,remaining));
}
})())?(function (){var vec__37834 = cljs.core.split_with.call(null,((function (remaining,no_sort_QMARK_,index,out,max_length){
return (function (p1__37824_SHARP_){
var or__4212__auto__ = zprint.zprint.pair_element_QMARK_.call(null,p1__37824_SHARP_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,p1__37824_SHARP_);
}
});})(remaining,no_sort_QMARK_,index,out,max_length))
,cljs.core.next.call(null,remaining));
var comment_seq = cljs.core.nth.call(null,vec__37834,(0),null);
var rest_seq = cljs.core.nth.call(null,vec__37834,(1),null);
if(cljs.core.truth_(cljs.core.first.call(null,rest_seq))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,rest_seq),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),comment_seq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rest_seq)], null))),true], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),true], null);
}
})():((cljs.core._EQ_.call(null,cljs.core.count.call(null,remaining),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),null], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,cljs.core.next.call(null,remaining)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)], null),null], null)
)));
var new_remaining = cljs.core.nth.call(null,vec__37831,(0),null);
var pair_vec = cljs.core.nth.call(null,vec__37831,(1),null);
var new_no_sort_QMARK_ = cljs.core.nth.call(null,vec__37831,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"partition-all-2-nc: pair-vec: first:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,pair_vec)),"first tag:",zprint.zfns.ztag.call(null,cljs.core.first.call(null,pair_vec)),"count:",cljs.core.count.call(null,pair_vec),"last:",zprint.zfns.zstring.call(null,cljs.core.last.call(null,pair_vec))));
} else {
}

var G__37837 = ((((index + (1)) < max_length))?new_remaining:(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.call(null,(index + (1)),max_length);
if(and__4210__auto__){
return new_remaining;
} else {
return and__4210__auto__;
}
})())?(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null)):null
));
var G__37838 = (function (){var or__4212__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new_no_sort_QMARK_;
}
})();
var G__37839 = (index + (1));
var G__37840 = cljs.core.conj_BANG_.call(null,out,pair_vec);
remaining = G__37837;
no_sort_QMARK_ = G__37838;
index = G__37839;
out = G__37840;
continue;
}
break;
}
}
});
/**
 * Take a seq, and if it is contains a single symbol, simply return
 *   it in another seq.  If it contains something else, remove any non
 *   collections off of the end and return them in their own double seqs,
 *   as well as return the remainder (the beginning) as a double seq.
 */
zprint.zprint.cleave_end = (function zprint$zprint$cleave_end(coll){
if(cljs.core.truth_((function (){var or__4212__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,cljs.core.first.call(null,coll));
}
})())){
return (new cljs.core.List(null,coll,null,(1),null));
} else {
var rev_seq = cljs.core.reverse.call(null,coll);
var vec__37842 = cljs.core.split_with.call(null,(function (p1__37841_SHARP_){
return cljs.core.not.call(null,(function (){var or__4212__auto__ = zprint.zfns.zcoll_QMARK_.call(null,p1__37841_SHARP_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zfns.zreader_cond_w_coll_QMARK_.call(null,p1__37841_SHARP_);
}
})());
}),rev_seq);
var split_non_coll = cljs.core.nth.call(null,vec__37842,(0),null);
var _ = cljs.core.nth.call(null,vec__37842,(1),null);
var split_non_coll__$1 = cljs.core.map.call(null,cljs.core.list,cljs.core.reverse.call(null,split_non_coll));
var remainder = cljs.core.take.call(null,(cljs.core.count.call(null,coll) - cljs.core.count.call(null,split_non_coll__$1)),coll);
if(cljs.core.empty_QMARK_.call(null,remainder)){
return split_non_coll__$1;
} else {
return cljs.core.concat.call(null,(new cljs.core.List(null,remainder,null,(1),null)),split_non_coll__$1);
}
}
});
/**
 * Similar to partition-all-2-nc, but instead of trying to pair things
 *   up (modulo comments and unevaled expressions), this begins things
 *   with a symbol, and then accumulates collections until the next symbol.
 *   Returns a seq of seqs, where the first thing in each internal seq is
 *   a protocol and the remaining thing(s) in that seq are the expressions that
 *   follow.  If there is a single thing, it is returned in its own internal
 *   seq. ((P (foo [this a) (bar-me [this] b) (barx [this y] (+ c y))) ...)
 *   Made harder by the fact that the symbol might be inside of a #?() reader
 *   conditional.  It handles comments before symbols on the symbol indent, 
 *   and the comments before the collections on the collection indent.  
 *   Since it doesn't know how many collections there are, this is not trivial.  
 *   Must be called with a sequence of z-things (these days called a zseq)
 */
zprint.zprint.partition_all_sym = (function zprint$zprint$partition_all_sym(options,modifier_set,coll){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"partition-all-sym:",modifier_set));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"partition-all-sym: coll:",cljs.core.map.call(null,zprint.zfns.zstring,coll));
} else {
}

var part_sym = cljs.core.partition_by.call(null,(function (p1__37845_SHARP_){
var or__4212__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,p1__37845_SHARP_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = zprint.zfns.znil_QMARK_.call(null,p1__37845_SHARP_);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,p1__37845_SHARP_);
}
}
}),coll);
var split_non_coll = cljs.core.mapcat.call(null,zprint.zprint.cleave_end,part_sym);
var remaining = split_non_coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var vec__37849 = (cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = zprint.zfns.znil_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
}
}
})();
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = (!(cljs.core.empty_QMARK_.call(null,cljs.core.second.call(null,remaining))));
if(and__4210__auto____$1){
var or__4212__auto__ = (!(((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,cljs.core.second.call(null,remaining))),new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,cljs.core.second.call(null,remaining))),new cljs.core.Keyword(null,"newline","newline",1790071323))))));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return zprint.zfns.zcoll_QMARK_.call(null,cljs.core.last.call(null,cljs.core.second.call(null,remaining)));
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())?((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,remaining)),(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext.call(null,remaining,(2)),cljs.core.conj_BANG_.call(null,out,cljs.core.concat.call(null,cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)))], null):(cljs.core.truth_((function (){var and__4210__auto__ = modifier_set;
if(cljs.core.truth_(and__4210__auto__)){
return modifier_set.call(null,zprint.zfns.zstring.call(null,cljs.core.ffirst.call(null,remaining)));
} else {
return and__4210__auto__;
}
})())?((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,remaining)),(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext.call(null,remaining,(2)),cljs.core.conj_BANG_.call(null,out,cljs.core.concat.call(null,cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.next.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining))))?cljs.core.cons.call(null,cljs.core.next.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining))),cljs.core.next.call(null,remaining)):cljs.core.next.call(null,remaining)),cljs.core.conj_BANG_.call(null,out,(new cljs.core.List(null,cljs.core.ffirst.call(null,remaining),(new cljs.core.List(null,cljs.core.second.call(null,cljs.core.first.call(null,remaining)),null,(1),null)),(2),null)))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining)),cljs.core.next.call(null,remaining)),cljs.core.conj_BANG_.call(null,out,(new cljs.core.List(null,cljs.core.ffirst.call(null,remaining),null,(1),null)))], null))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,remaining))], null)
);
var next_remaining = cljs.core.nth.call(null,vec__37849,(0),null);
var new_out = cljs.core.nth.call(null,vec__37849,(1),null);
var G__37852 = next_remaining;
var G__37853 = new_out;
remaining = G__37852;
out = G__37853;
continue;
}
break;
}
});
/**
 * Create an r-str-vec with the indent appropriate for the r-str if
 *   it is preceded by a newline.
 */
zprint.zprint.rstr_vec = (function zprint$zprint$rstr_vec(var_args){
var G__37855 = arguments.length;
switch (G__37855) {
case 5:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc,r_str,r_type){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_str,zprint.zprint.zcolor_map.call(null,options,(function (){var or__4212__auto__ = r_type;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return r_str;
}
})()),(function (){var or__4212__auto__ = r_type;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"right","right",-452581833);
}
})(),ind], null)], null);
}));

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,r_str){
return zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str,null);
}));

(zprint.zprint.rstr_vec.cljs$lang$maxFixedArity = 5);

zprint.zprint.fzprint_binding_vec = (function zprint$zprint$fzprint_binding_vec(p__37857,ind,zloc){
var map__37858 = p__37857;
var map__37858__$1 = cljs.core.__destructure_map.call(null,map__37858);
var options = map__37858__$1;
var map__37859 = cljs.core.get.call(null,map__37858__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var map__37859__$1 = cljs.core.__destructure_map.call(null,map__37859);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__37859__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-binding-vec: ind:",ind,"zloc:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var options__$1 = zprint.zprint.rightmost.call(null,options);
var l_str = "[";
var r_str = "]";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options__$1,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,ind,zloc,r_str);
var value__37637__auto__ = ((cljs.core._EQ_.call(null,zprint.zfns.zcount.call(null,zloc),(0)))?zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec):zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(options__$1),(ind + (1)),zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),options__$1,(ind + (1)),false,cljs.core.second.call(null,zprint.zprint.partition_all_2_nc.call(null,options__$1,zprint.zprint.fzprint_get_zloc_seq.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),options__$1,zloc))))),r_str_vec));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-binding-vec exit:",cljs.core.pr_str.call(null,value__37637__auto__));
} else {
}

return value__37637__auto__;
});
/**
 * Try to hang something and try to flow it, and then see which is
 *   better.  Has hang and flow indents. fzfn is the function to use 
 *   to do zloc.  Note what fzfn does with the input. Presumably the
 *   caller knows what the fzfn does, so it has to count the items
 *   itself and pass it in here as zloc-count if it isn't just (zcount zloc).
 */
zprint.zprint.fzprint_hang = (function zprint$zprint$fzprint_hang(p__37860,caller,hindent,findent,fzfn,zloc_count,zloc){
var map__37861 = p__37860;
var map__37861__$1 = cljs.core.__destructure_map.call(null,map__37861);
var options = map__37861__$1;
var one_line_QMARK_ = cljs.core.get.call(null,map__37861__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var force_eol_blanks_QMARK_ = cljs.core.get.call(null,map__37861__$1,new cljs.core.Keyword(null,"force-eol-blanks?","force-eol-blanks?",1917974011));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: caller:",caller);
} else {
}

var hanging = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not_EQ_.call(null,hindent,findent);
if(and__4210__auto__){
var and__4210__auto____$1 = options.call(null,caller).call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.not.call(null,zprint.zfns.znewline_QMARK_.call(null,cljs.core.first.call(null,zloc)));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(5)], null)], null),fzfn.call(null,zprint.zprint.in_hang.call(null,options),hindent,zloc)):null);
var hanging__$1 = ((cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,cljs.core.second.call(null,hanging),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))?hanging:null);
var hang_count = (function (){var or__4212__auto__ = zloc_count;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zfns.zcount.call(null,zloc);
}
})();
var hr_lines = zprint.zprint.style_lines.call(null,options,(hindent - (1)),hanging__$1);
if(cljs.core.truth_((function (){var or__4212__auto__ = zprint.zprint.fzfit_one_line.call(null,options,hr_lines);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = (function (){var result = fzfn.call(null,options,findent,zloc);
return zprint.zprint.concat_no_nil.call(null,(cljs.core.truth_((cljs.core.truth_(force_eol_blanks_QMARK_)?null:zprint.zprint.first_nl_QMARK_.call(null,result)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(42)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(4)], null)], null)),result);
})();
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-hang: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines.call(null,options,findent,flow);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-hang: ending: hang-count:",hang_count,"hanging:",hanging__$1,"flow:",flow)):null);
var hr_good_QMARK_ = (cljs.core.truth_(hanging__$1)?zprint.zprint.good_enough_QMARK_.call(null,caller,options,new cljs.core.Keyword(null,"none-hang","none-hang",-1101780299),hang_count,(hindent - findent),hr_lines,fd_lines):null);
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Always prints pairs on a different line from other pairs. Takes a zloc-seq
 */
zprint.zprint.fzprint_pairs = (function zprint$zprint$fzprint_pairs(p__37862,ind,zloc_seq){
var map__37863 = p__37862;
var map__37863__$1 = cljs.core.__destructure_map.call(null,map__37863);
var options = map__37863__$1;
var map__37864 = cljs.core.get.call(null,map__37863__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var map__37864__$1 = cljs.core.__destructure_map.call(null,map__37864);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-pairs:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq))));
} else {
}

var value__37637__auto__ = zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options),ind,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312),options,ind,false,(function (){var vec__37865 = zprint.zprint.partition_all_2_nc.call(null,options,zloc_seq);
var _ = cljs.core.nth.call(null,vec__37865,(0),null);
var part = cljs.core.nth.call(null,vec__37865,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-pairs: partition:",cljs.core.map.call(null,cljs.core.comp.call(null,zprint.zfns.zstring,cljs.core.first),part),"respect-nl?",respect_nl_QMARK_));
} else {
}

return part;
})()));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: exit:",cljs.core.pr_str.call(null,value__37637__auto__));
} else {
}

return value__37637__auto__;
});
/**
 * Print things with a symbol and collections following.  Kind of like with
 *   pairs, but not quite. Takes a zloc-seq.
 */
zprint.zprint.fzprint_extend = (function zprint$zprint$fzprint_extend(p__37869,ind,zloc_seq){
var map__37870 = p__37869;
var map__37870__$1 = cljs.core.__destructure_map.call(null,map__37870);
var options = map__37870__$1;
var map__37871 = cljs.core.get.call(null,map__37870__$1,new cljs.core.Keyword(null,"extend","extend",1836484006));
var map__37871__$1 = cljs.core.__destructure_map.call(null,map__37871);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__37871__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)));
} else {
}

var value__37637__auto__ = zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options),ind,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006),cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)),ind,false,(function (){var part = zprint.zprint.partition_all_sym.call(null,options,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options)),zloc_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: partition:",cljs.core.map.call(null,(function (p1__37868_SHARP_){
return cljs.core.map.call(null,zprint.zfns.zstring,p1__37868_SHARP_);
}),part));
} else {
}

return part;
})()));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: exit:",cljs.core.pr_str.call(null,value__37637__auto__));
} else {
}

return value__37637__auto__;
});
/**
 * Given a transient vector v, concatenate all of the other
 *   elements in all of the remaining collections onto v.
 */
zprint.zprint.concatv_BANG_ = (function zprint$zprint$concatv_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37874 = arguments.length;
var i__4819__auto___37875 = (0);
while(true){
if((i__4819__auto___37875 < len__4818__auto___37874)){
args__4824__auto__.push((arguments[i__4819__auto___37875]));

var G__37876 = (i__4819__auto___37875 + (1));
i__4819__auto___37875 = G__37876;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (v,rest){
var cols = rest;
var out = v;
while(true){
if(cljs.core.truth_(cols)){
var G__37877 = cljs.core.next.call(null,cols);
var G__37878 = (function (){var col = cljs.core.first.call(null,cols);
var out__$1 = out;
while(true){
if(cljs.core.truth_(col)){
var G__37879 = cljs.core.next.call(null,col);
var G__37880 = cljs.core.conj_BANG_.call(null,out__$1,cljs.core.first.call(null,col));
col = G__37879;
out__$1 = G__37880;
continue;
} else {
return out__$1;
}
break;
}
})();
cols = G__37877;
out = G__37878;
continue;
} else {
return out;
}
break;
}
}));

(zprint.zprint.concatv_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.zprint.concatv_BANG_.cljs$lang$applyTo = (function (seq37872){
var G__37873 = cljs.core.first.call(null,seq37872);
var seq37872__$1 = cljs.core.next.call(null,seq37872);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37873,seq37872__$1);
}));

/**
 * Do a fzprint-seq like thing, but do it incrementally and
 *   if it gets too big, return nil.
 */
zprint.zprint.fzprint_one_line = (function zprint$zprint$fzprint_one_line(options,ind,zloc_seq){
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-one-line:");
} else {
}

var seq_right = zloc_seq;
var len = cljs.core.count.call(null,seq_right);
var last_index = (len - (1));
var gt_1_QMARK_ = (cljs.core.count.call(null,seq_right) > (1));
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true);
var zloc_seq__$1 = seq_right;
var new_ind = cljs.core.long$.call(null,ind);
var index = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,zloc_seq__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: exiting count:",cljs.core.count.call(null,out));
} else {
}

return cljs.core.persistent_BANG_.call(null,out);
} else {
var next_zloc = cljs.core.first.call(null,zloc_seq__$1);
var vec__37887 = ((cljs.core._EQ_.call(null,index,last_index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!((index === (0)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(6)], null)], null):null),options__$1], null):((cljs.core._EQ_.call(null,index,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,zprint.zprint.not_rightmost.call(null,options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(7)], null)], null),zprint.zprint.not_rightmost.call(null,options__$1)], null)
));
var sep = cljs.core.nth.call(null,vec__37887,(0),null);
var next_options = cljs.core.nth.call(null,vec__37887,(1),null);
var next_out = zprint.zprint.fzprint_STAR_.call(null,next_options,new_ind,next_zloc);
var _ = zprint.zprint.log_lines.call(null,options__$1,"fzprint-one-line:",new_ind,next_out);
var vec__37890 = zprint.zprint.style_lines.call(null,options__$1,new_ind,next_out);
var line_count = cljs.core.nth.call(null,vec__37890,(0),null);
var max_width = cljs.core.nth.call(null,vec__37890,(1),null);
var next_lines = vec__37890;
if((!(zprint.zprint.fzfit_one_line.call(null,next_options,next_lines)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: failed, too wide or too many lines!");
} else {
}

return null;
} else {
var G__37893 = cljs.core.next.call(null,zloc_seq__$1);
var G__37894 = (cljs.core.long$.call(null,max_width) + (1));
var G__37895 = (index + (1));
var G__37896 = zprint.zprint.concatv_BANG_.call(null,out,sep,next_out);
zloc_seq__$1 = G__37893;
new_ind = G__37894;
index = G__37895;
out = G__37896;
continue;
}
}
break;
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc).  Return
 *   a seq of the fzprint* of each element.  No spacing between any
 *   of these elements. Note that this is not a style-vec, but a seq
 *   of style-vecs of each of the elements.  These would need to be
 *   concatenated together to become a style-vec.  ind is either a
 *   constant or a seq of indents, one for each element in zloc-seq.
 *   Note that right gets evaluated immediately, while left yields a
 *   lazy sequence which get evaluated later.
 */
zprint.zprint.fzprint_seq = (function zprint$zprint$fzprint_seq(options,ind,zloc_seq){
var max_length = zprint.zprint.get_max_length.call(null,options);
var len = cljs.core.count.call(null,zloc_seq);
var zloc_seq__$1 = (((len > max_length))?cljs.core.concat.call(null,cljs.core.take.call(null,max_length,zloc_seq),(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null))):zloc_seq);
var len__$1 = cljs.core.count.call(null,zloc_seq__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-seq: (count zloc-seq):",len__$1,"max-length:",max_length,"ind:",ind);
} else {
}

if(cljs.core.empty_QMARK_.call(null,zloc_seq__$1)){
return null;
} else {
if((max_length === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#?#",zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null)], null);
} else {
var left = zprint.zprint.zpmap.call(null,options,(function (p1__37897_SHARP_,p2__37898_SHARP_){
return zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.not_rightmost.call(null,options),p1__37897_SHARP_,p2__37898_SHARP_);
}),((cljs.core.coll_QMARK_.call(null,ind))?ind:cljs.core.repeat.call(null,ind)),cljs.core.butlast.call(null,zloc_seq__$1));
var right = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.fzprint_STAR_.call(null,options,((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.last.call(null,ind):ind),cljs.core.last.call(null,zloc_seq__$1))], null);
if(cljs.core._EQ_.call(null,len__$1,(1))){
return right;
} else {
return zprint.zprint.concat_no_nil.call(null,left,right);

}

}
}
});
/**
 * Takes zloc-seq, a seq of a zloc, created by (zmap identity zloc),
 *   and returns a style-vec of the result.  Either it fits on one
 *   line, or it is rendered on multiple lines.  You can force multiple
 *   lines with force-nl?. If the seq is empty, returns :noseq, which
 *   is what you give concat-no-nil if you want this to just disappear.
 *   If you want it to do less than everything in the original zloc,
 *   modify the result of (zmap identity zloc) to just contain what
 *   you want to print. ind is either a single indent, or a seq of
 *   indents, one for each element in zloc-seq.  Don't concatenate an
 *   indent/newline on to the beginning of the output from this routine.
 *   Let this routine do it for you, as it needs to know one is there
 *   in order to properly deal with any newlines in the actual stream.
 *   Else you will get two where you only should have one.
 */
zprint.zprint.fzprint_flow_seq = (function zprint$zprint$fzprint_flow_seq(var_args){
var G__37900 = arguments.length;
switch (G__37900) {
case 5:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc_seq,force_nl_QMARK_,nl_first_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-flow-seq: count zloc-seq:",cljs.core.count.call(null,zloc_seq),"nl-first?",nl_first_QMARK_,"zloc-seq:",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

var coll_print = zprint.zprint.fzprint_seq.call(null,options,ind,zloc_seq);
var one_line = cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(8)], null)], null),coll_print));
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-flow-seq:",ind,one_line);
var one_line_lines = zprint.zprint.style_lines.call(null,options,ind,one_line);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-flow-seq: coll-print:",coll_print));
} else {
}

var value__37637__auto__ = ((((cljs.core.not.call(null,force_nl_QMARK_)) && (zprint.zprint.fzfit_one_line.call(null,options,one_line_lines))))?one_line:(((!(cljs.core.empty_QMARK_.call(null,coll_print))))?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.precede_w_nl.call(null,options,ind,coll_print,cljs.core.not.call(null,nl_first_QMARK_))):new cljs.core.Keyword(null,"noseq","noseq",405935768)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: exit:",cljs.core.pr_str.call(null,value__37637__auto__));
} else {
}

return value__37637__auto__;
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc_seq){
return zprint.zprint.fzprint_flow_seq.call(null,options,ind,zloc_seq,null,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc_seq,force_nl_QMARK_){
return zprint.zprint.fzprint_flow_seq.call(null,options,ind,zloc_seq,force_nl_QMARK_,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$lang$maxFixedArity = 5);

/**
 * Try out the given zloc, and if it fits on the current line, just
 *   do that. It might fit on the same line, as this may not be the rest
 *   of the list that we are printing. If not, check it out with good-enough?
 *   and do the best you can.  Three choices, really: fits on same line, 
 *   does ok as hanging, or better with flow. hindent is hang-indent, and 
 *   findent is flow-indent, and each contains the initial separator.  
 *   Might be nice if the fn-style actually got sent to this fn.
 */
zprint.zprint.fzprint_hang_one = (function zprint$zprint$fzprint_hang_one(caller,p__37902,hindent,findent,zloc){
var map__37903 = p__37902;
var map__37903__$1 = cljs.core.__destructure_map.call(null,map__37903);
var options = map__37903__$1;
var map__37904 = cljs.core.get.call(null,map__37903__$1,caller);
var map__37904__$1 = cljs.core.__destructure_map.call(null,map__37904);
var hang_avoid = cljs.core.get.call(null,map__37904__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var one_line_QMARK_ = cljs.core.get.call(null,map__37903__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var width = cljs.core.get.call(null,map__37903__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-hang-one:",zprint.zfns.zstring.call(null,zloc)," hindent:",hindent,"findent:",findent));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"h1 caller:",caller,zprint.zfns.zstring.call(null,(cljs.core.truth_(zprint.zfns.zcoll_QMARK_.call(null,zloc))?zprint.zfns.zfirst.call(null,zloc):zloc)));
} else {
}

var local_options = ((((cljs.core.not.call(null,one_line_QMARK_)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1(caller.call(null,options))))))?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var hindent__$1 = (function (){var or__4212__auto__ = hindent;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return findent;
}
})();
var hang_count = zprint.zfns.zcount.call(null,zloc);
var hanging = ((((cljs.core.not_EQ_.call(null,hindent__$1,findent)) && (((cljs.core.not.call(null,hang_avoid)) || ((hang_count < ((width - hindent__$1) * hang_avoid)))))))?zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,local_options),hindent__$1,zloc):null);
var hanging__$1 = zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(9)], null)], null),hanging);
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-hang-one: hanging:",(hindent__$1 - (1)),hanging__$1);
var hr_lines = zprint.zprint.style_lines.call(null,options,(hindent__$1 - (1)),hanging__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hr-lines:",hr_lines,"hang-count:",hang_count);
} else {
}

if(cljs.core.truth_((function (){var or__4212__auto__ = zprint.zprint.fzfit_one_line.call(null,options,hr_lines);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = zprint.zprint.prepend_nl.call(null,options,findent,zprint.zprint.fzprint_STAR_.call(null,options,findent,zloc));
var ___$1 = zprint.zprint.log_lines.call(null,options,"fzprint-hang-one: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines.call(null,options,findent,flow);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: fd-lines:",fd_lines):null);
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: ending: hang-count:",hang_count,"hanging:",cljs.core.pr_str.call(null,hanging__$1),"flow:",cljs.core.pr_str.call(null,flow)):null);
var hr_good_QMARK_ = (function (){var and__4210__auto__ = new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
if(cljs.core.truth_(and__4210__auto__)){
return zprint.zprint.good_enough_QMARK_.call(null,caller,options,new cljs.core.Keyword(null,"none-hang-one","none-hang-one",-1392848107),hang_count,(hindent__$1 - findent),hr_lines,fd_lines);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Given a seq of zlocs, work backwards from the end, and see how
 *   many elements are pairs of constants (using zconstant?).  So that
 *   (... :a (stuff) :b (bother)) returns 4, since both :a and :b are
 *   zconstant? true. This is made more difficult by having to skip
 *   comments along the way as part of the pair check, but keep track
 *   of the ones we skip so the count is right in the end.  We don't
 *   expect any spaces in this but newlines must be handled, because 
 *   this seq should have been produced by zmap or its equivalent.
 *   Returns two things: [paired-item-count actual-paired-items],
 *   where paired-item-count is the number of things from the end of
 *   the seq you have to trim off to get the constant pairs included,
 *   and the actual-paired-items is the count of the items to be checked
 *   against the constant-pair-min (which is exclusive of comments and
 *   newlines).
 */
zprint.zprint.count_constant_pairs = (function zprint$zprint$count_constant_pairs(zloc_seq){
var zloc_seq_rev = cljs.core.reverse.call(null,zloc_seq);
var element_count = (0);
var paired_element_count = (0);
var constant_required_QMARK_ = null;
var pair_size = (0);
var actual_pair_size = (0);
while(true){
var element = cljs.core.first.call(null,zloc_seq_rev);
if(cljs.core.empty_QMARK_.call(null,zloc_seq_rev)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var comment_or_newline_QMARK_ = zprint.zprint.zcomment_or_newline_QMARK_.call(null,element);
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not.call(null,comment_or_newline_QMARK_);
if(and__4210__auto__){
var and__4210__auto____$1 = constant_required_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.not.call(null,zprint.zfns.zconstant_QMARK_.call(null,element));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var G__37905 = cljs.core.next.call(null,zloc_seq_rev);
var G__37906 = (element_count + (1));
var G__37907 = (cljs.core.truth_(comment_or_newline_QMARK_)?paired_element_count:(paired_element_count + (1)));
var G__37908 = (cljs.core.truth_(comment_or_newline_QMARK_)?constant_required_QMARK_:cljs.core.not.call(null,constant_required_QMARK_));
var G__37909 = (cljs.core.truth_((function (){var and__4210__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,comment_or_newline_QMARK_);
} else {
return and__4210__auto__;
}
})())?(0):(pair_size + (1)));
var G__37910 = (cljs.core.truth_((function (){var and__4210__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,comment_or_newline_QMARK_);
} else {
return and__4210__auto__;
}
})())?(0):(cljs.core.truth_(comment_or_newline_QMARK_)?actual_pair_size:(actual_pair_size + (1))));
zloc_seq_rev = G__37905;
element_count = G__37906;
paired_element_count = G__37907;
constant_required_QMARK_ = G__37908;
pair_size = G__37909;
actual_pair_size = G__37910;
continue;
}
}
break;
}
});
/**
 * Argument is a zloc-seq.  Output is a [pair-seq non-paired-item-count],
 *   if any.  If there are no pair-seqs, pair-seq must be nil, not an
 *   empty seq.  This will largely ignore newlines and comments.
 */
zprint.zprint.constant_pair = (function zprint$zprint$constant_pair(caller,p__37911,zloc_seq){
var map__37912 = p__37911;
var map__37912__$1 = cljs.core.__destructure_map.call(null,map__37912);
var options = map__37912__$1;
var map__37913 = cljs.core.get.call(null,map__37912__$1,caller);
var map__37913__$1 = cljs.core.__destructure_map.call(null,map__37913);
var constant_pair_QMARK_ = cljs.core.get.call(null,map__37913__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.call(null,map__37913__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
if(cljs.core.truth_(constant_pair_QMARK_)){
var vec__37914 = zprint.zprint.count_constant_pairs.call(null,zloc_seq);
var paired_item_count = cljs.core.nth.call(null,vec__37914,(0),null);
var actual_paired_items = cljs.core.nth.call(null,vec__37914,(1),null);
var non_paired_item_count = (cljs.core.count.call(null,zloc_seq) - paired_item_count);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"constant-pair: non-paired-items:",non_paired_item_count,"paired-item-count:",paired_item_count,"actual-paired-items:",actual_paired_items):null);
var pair_seq = (((actual_paired_items >= constant_pair_min))?cljs.core.drop.call(null,non_paired_item_count,zloc_seq):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair_seq,non_paired_item_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.count.call(null,zloc_seq)], null);
}
});
/**
 * If this zloc is a comment or a newline, return true.
 */
zprint.zprint.zcomment_or_newline_QMARK_ = (function zprint$zprint$zcomment_or_newline_QMARK_(zloc){
var or__4212__auto__ = zprint.zfns.zcomment_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zfns.znewline_QMARK_.call(null,zloc);
}
});
/**
 * Given a style-vec, ensure it starts with a newline.  If it doesn't,
 *   then put one in.  We could take the whole newline, but the indent is
 *   really the only unique thing.
 */
zprint.zprint.ensure_start_w_nl = (function zprint$zprint$ensure_start_w_nl(ind,style_vec){
var element_type = cljs.core.nth.call(null,cljs.core.first.call(null,style_vec),(2));
if(((cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(6)], null)], null),style_vec);
}
});
/**
 * Given a style-vec, ensure it ends with a newline.  If it doesn't,
 *   then put one in.
 */
zprint.zprint.ensure_end_w_nl = (function zprint$zprint$ensure_end_w_nl(ind,style_vec){
var element_type = cljs.core.nth.call(null,cljs.core.last.call(null,style_vec),(2));
if(((cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.call(null,style_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(7)], null)], null));
}
});
/**
 * zloc-seq is a seq of zlocs of a collection.  We already know
 *   that the given zloc won't fit on the current line. [Besides, we
 *   ensure that if there are two things remaining anyway. ???] So
 *   now, try hanging and see if that is better than flow.  Unless
 *   :hang? is nil, in which case we will just flow.  hindent is
 *   hang-indent, and findent is flow-indent. This should never be
 *   called with :one-line because this is only called from fzprint-list*
 *   after the one-line processing is done. If the hindent equals the
 *   flow indent, then just do flow.  Do only zloc-count non-whitespace
 *   elements of zloc-seq if it exists.
 */
zprint.zprint.fzprint_hang_remaining = (function zprint$zprint$fzprint_hang_remaining(var_args){
var G__37918 = arguments.length;
switch (G__37918) {
case 7:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__37919,hindent,findent,zloc_seq,fn_style,zloc_count){
var map__37920 = p__37919;
var map__37920__$1 = cljs.core.__destructure_map.call(null,map__37920);
var options = map__37920__$1;
var map__37921 = cljs.core.get.call(null,map__37920__$1,caller);
var map__37921__$1 = cljs.core.__destructure_map.call(null,map__37921);
var hang_QMARK_ = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var constant_pair_QMARK_ = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
var hang_avoid = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var hang_expand = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var nl_separator_QMARK_ = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var dbg_QMARK_ = cljs.core.get.call(null,map__37920__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var width = cljs.core.get.call(null,map__37920__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"hr:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-hang-remaining first:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)),"hindent:",hindent,"findent:",findent,"caller:",caller,"nl-separator?:",nl_separator_QMARK_,"(count zloc-seq):",cljs.core.count.call(null,zloc_seq)));
} else {
}

var seq_right = zloc_seq;
var seq_right__$1 = (cljs.core.truth_(zloc_count)?cljs.core.take.call(null,zloc_count,seq_right):seq_right);
var vec__37922 = zprint.zprint.constant_pair.call(null,caller,options,seq_right__$1);
var pair_seq = cljs.core.nth.call(null,vec__37922,(0),null);
var non_paired_item_count = cljs.core.nth.call(null,vec__37922,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining count pair-seq:",cljs.core.count.call(null,pair_seq)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: first hang?",hang_QMARK_,"hang-avoid",hang_avoid,"findent:",findent,"hindent:",hindent,"(count seq-right):",cljs.core.count.call(null,seq_right__$1),"thing:",(cljs.core.truth_(hang_avoid)?((width - hindent) * hang_avoid):null)):null);
var hang_QMARK___$1 = (function (){var and__4210__auto__ = hang_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.not_EQ_.call(null,hindent,findent)) && (((cljs.core.not.call(null,hang_avoid)) || ((cljs.core.count.call(null,seq_right__$1) < ((width - hindent) * hang_avoid))))));
} else {
return and__4210__auto__;
}
})();
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: second hang?",hang_QMARK___$1):null);
var hanging = (function (){var hang_result = (cljs.core.truth_(hang_QMARK___$1)?((cljs.core.not.call(null,pair_seq))?zprint.zprint.fzprint_flow_seq.call(null,zprint.zprint.in_hang.call(null,options),hindent,seq_right__$1,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.call(null,(function (){var value__37637__auto__ = zprint.zprint.ensure_end_w_nl.call(null,hindent,zprint.zprint.fzprint_flow_seq.call(null,zprint.zprint.not_rightmost.call(null,zprint.zprint.in_hang.call(null,options)),hindent,cljs.core.take.call(null,non_paired_item_count,seq_right__$1),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: mapv:",cljs.core.pr_str.call(null,value__37637__auto__));
} else {
}

return value__37637__auto__;
})(),(function (){var value__37637__auto__ = zprint.zprint.fzprint_pairs.call(null,zprint.zprint.in_hang.call(null,options),hindent,pair_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: fzprint-hang:",cljs.core.pr_str.call(null,value__37637__auto__));
} else {
}

return value__37637__auto__;
})()):zprint.zprint.fzprint_pairs.call(null,zprint.zprint.in_hang.call(null,options),hindent,pair_seq))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_result,zprint.zprint.style_lines.call(null,options,hindent,hang_result)], null);
})();
var vec__37925 = zprint.zprint.zat.call(null,options,hanging);
var hanging__$1 = cljs.core.nth.call(null,vec__37925,(0),null);
var vec__37928 = cljs.core.nth.call(null,vec__37925,(1),null);
var hanging_line_count = cljs.core.nth.call(null,vec__37928,(0),null);
var hanging_lines = vec__37928;
var hang_count = cljs.core.count.call(null,seq_right__$1);
var flow_QMARK_ = cljs.core.not.call(null,zprint.zprint.use_hang_QMARK_.call(null,caller,options,hindent,hang_count,hanging_line_count));
var flow = ((flow_QMARK_)?(function (){var flow_result = ((cljs.core.not.call(null,pair_seq))?zprint.zprint.fzprint_flow_seq.call(null,options,findent,seq_right__$1,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"nl-first","nl-first",-462968863)):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.call(null,zprint.zprint.ensure_end_w_nl.call(null,findent,zprint.zprint.fzprint_flow_seq.call(null,zprint.zprint.not_rightmost.call(null,options),findent,cljs.core.take.call(null,non_paired_item_count,seq_right__$1),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"nl-first","nl-first",-462968863))),zprint.zprint.fzprint_pairs.call(null,options,findent,pair_seq)):zprint.zprint.fzprint_pairs.call(null,options,findent,pair_seq)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_result,zprint.zprint.style_lines.call(null,options,findent,((cljs.core.not.call(null,pair_seq))?cljs.core.next.call(null,flow_result):flow_result))], null);
})():null);
var vec__37931 = (cljs.core.truth_(flow)?zprint.zprint.zat.call(null,options,flow):null);
var flow__$1 = cljs.core.nth.call(null,vec__37931,(0),null);
var flow_lines = cljs.core.nth.call(null,vec__37931,(1),null);
var ___$3 = zprint.zprint.log_lines.call(null,options,"fzprint-hang-remaining: hanging:",hindent,hanging__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: hanging-lines:",hanging_lines,"hang-count:",hang_count):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: flow-lines:",flow_lines);
} else {
}

if(cljs.core.truth_(dbg_QMARK_)){
if((hang_count === (0))){
cljs.core.println.call(null,"hang-count = 0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}
} else {
}

zprint.zprint.log_lines.call(null,options,"fzprint-hang-remaining: flow",findent,flow__$1);

if(cljs.core.truth_((function (){var and__4210__auto__ = hanging_lines;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,flow_lines);
} else {
return and__4210__auto__;
}
})())){
if(zprint.zprint.first_nl_QMARK_.call(null,hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(10)], null)], null),hanging__$1);
}
} else {
if(cljs.core.truth_(flow_lines)){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_.call(null,caller,options,fn_style,hang_count,(hindent - findent),hanging_lines,flow_lines))){
if(zprint.zprint.first_nl_QMARK_.call(null,hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(10)], null)], null),hanging__$1);
}
} else {
return zprint.zprint.ensure_start_w_nl.call(null,findent,flow__$1);
}
} else {
return null;
}
}
}));

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,hindent,findent,zloc,fn_style){
return zprint.zprint.fzprint_hang_remaining.call(null,caller,options,hindent,findent,zloc,fn_style,null);
}));

(zprint.zprint.fzprint_hang_remaining.cljs$lang$maxFixedArity = 7);

/**
 * Get the zloc seq, with or without newlines, as indicated by the options.
 */
zprint.zprint.fzprint_get_zloc_seq = (function zprint$zprint$fzprint_get_zloc_seq(caller,options,zloc){
var caller_options = caller.call(null,options);
var zloc_seq = (cljs.core.truth_(new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(caller_options))?zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc):(cljs.core.truth_(new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998).cljs$core$IFn$_invoke$arity$1(caller_options))?zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc):zprint.zfns.zmap.call(null,cljs.core.identity,zloc)
));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-get-zloc-seq:",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

return zloc_seq;
});
/**
 * Given an zloc, is it a newline or a comment?
 */
zprint.zprint.newline_or_comment_QMARK_ = (function zprint$zprint$newline_or_comment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
var zloc_tag = zprint.zfns.ztag.call(null,zloc);
return ((cljs.core._EQ_.call(null,zloc_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,zloc_tag,new cljs.core.Keyword(null,"comment","comment",532206069))));
} else {
return null;
}
});
/**
 * Given a seq of style-vecs, look at the last one, and if it is a
 *   :newline, then remove it.  But the last one might be a single
 *   one, in which case we will remove the whole thing, and it might be
 *   the last one in a sequence, in which case we will remove just that
 *   one.  If there is nothing left, return [[["" :none :none]]].
 */
zprint.zprint.remove_last_newline = (function zprint$zprint$remove_last_newline(ssv){
var last_style_vec = cljs.core.last.call(null,ssv);
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.last.call(null,last_style_vec),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
return ssv;
} else {
var last_len = cljs.core.count.call(null,last_style_vec);
var total_len = cljs.core.count.call(null,ssv);
var remove_one = cljs.core.concat.call(null,cljs.core.butlast.call(null,ssv),((cljs.core._EQ_.call(null,last_len,(1)))?cljs.core.PersistentVector.EMPTY:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.butlast.call(null,last_style_vec)],null))));
if(cljs.core.empty_QMARK_.call(null,remove_one)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null);
} else {
return remove_one;
}
}
});
/**
 * Given a single style-vec, look at the last element, and if it is a
 *   :newline, remove it.  If there is nothing left, return :noseq
 */
zprint.zprint.remove_one_newline = (function zprint$zprint$remove_one_newline(style_vec){
var last_style_vec = cljs.core.last.call(null,style_vec);
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,last_style_vec,(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
return style_vec;
} else {
var remaining = cljs.core.butlast.call(null,style_vec);
if(cljs.core.empty_QMARK_.call(null,remaining)){
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
} else {
return remaining;
}
}
});
/**
 * Given [[[";stuff" :none :comment]]] or 
 *   [[[";bother" :none :comment-inline 1]]] add ["
 * " :none :newline]
 *   to the inside of it.
 */
zprint.zprint.add_newline_to_comment = (function zprint$zprint$add_newline_to_comment(indent,fzprint_STAR__return){
var the_type = cljs.core.nth.call(null,cljs.core.first.call(null,fzprint_STAR__return),(2));
if(((cljs.core._EQ_.call(null,the_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,the_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
return cljs.core.concat.call(null,fzprint_STAR__return,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323),(1)], null)], null));
} else {
return fzprint_STAR__return;
}
});
/**
 * Given a zloc-seq, gather newlines and comments up to the next
 *   zloc into a seq.  Returns [seq next-zloc next-count].
 */
zprint.zprint.gather_up_to_next_zloc = (function zprint$zprint$gather_up_to_next_zloc(zloc_seq){
var nloc_seq = zloc_seq;
var out = cljs.core.PersistentVector.EMPTY;
var next_count = (0);
while(true){
if(cljs.core.not.call(null,zprint.zprint.newline_or_comment_QMARK_.call(null,cljs.core.first.call(null,nloc_seq)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.first.call(null,nloc_seq),next_count], null);
} else {
var G__37935 = cljs.core.next.call(null,nloc_seq);
var G__37936 = cljs.core.conj.call(null,out,cljs.core.first.call(null,nloc_seq));
var G__37937 = (next_count + (1));
nloc_seq = G__37935;
out = G__37936;
next_count = G__37937;
continue;
}
break;
}
});
/**
 * Using the information returned from fzprint-up-to-first-zloc or
 *   fzprint-up-to-next-zloc, find the next zloc and return 
 *   [pre-next-style-vec next-zloc next-count zloc-seq]
 */
zprint.zprint.fzprint_up_to_next_zloc = (function zprint$zprint$fzprint_up_to_next_zloc(caller,options,ind,p__37938){
var vec__37939 = p__37938;
var _ = cljs.core.nth.call(null,vec__37939,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37939,(1),null);
var current_count = cljs.core.nth.call(null,vec__37939,(2),null);
var zloc_seq = cljs.core.nth.call(null,vec__37939,(3),null);
var next_data = vec__37939;
var starting_count = (current_count + (1));
var nloc_seq = cljs.core.nthnext.call(null,zloc_seq,starting_count);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),cljs.core.first.call(null,nloc_seq),starting_count,zloc_seq], null);
} else {
var vec__37942 = zprint.zprint.gather_up_to_next_zloc.call(null,nloc_seq);
var pre_next_zloc_seq = cljs.core.nth.call(null,vec__37942,(0),null);
var next_zloc = cljs.core.nth.call(null,vec__37942,(1),null);
var next_count = cljs.core.nth.call(null,vec__37942,(2),null);
var next_count__$1 = (starting_count + next_count);
if(cljs.core.empty_QMARK_.call(null,pre_next_zloc_seq)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),next_zloc,next_count__$1,zloc_seq], null);
} else {
var coll_print = zprint.zprint.fzprint_flow_seq.call(null,options,ind,pre_next_zloc_seq);
var coll_print__$1 = cljs.core.mapv.call(null,cljs.core.vector,coll_print);
var coll_print__$2 = ((cljs.core.not_EQ_.call(null,starting_count,(0)))?zprint.zprint.remove_last_newline.call(null,coll_print__$1):coll_print__$1);
var coll_out = cljs.core.apply.call(null,zprint.zprint.concat_no_nil,coll_print__$2);
var coll_out__$1 = (((function (){var and__4210__auto__ = cljs.core.not_EQ_.call(null,starting_count,(0));
if(and__4210__auto__){
var first_type = cljs.core.nth.call(null,cljs.core.first.call(null,coll_out),(2));
return ((cljs.core._EQ_.call(null,first_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,first_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
} else {
return and__4210__auto__;
}
})())?zprint.zprint.ensure_start_w_nl.call(null,ind,coll_out):coll_out);
var coll_out__$2 = ((cljs.core.not_EQ_.call(null,starting_count,(0)))?coll_out__$1:zprint.zprint.ensure_end_w_nl.call(null,ind,coll_out__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_out__$2,next_zloc,next_count__$1,zloc_seq], null);
}
}
});
/**
 * Returns [pre-first-style-vec first-zloc first-count zloc-seq], where
 *   pre-first-style-vec will be :noseq if there isn't anything, and first-count
 *   is what you give to nthnext to get to the first-zloc in zloc-seq.
 */
zprint.zprint.fzprint_up_to_first_zloc = (function zprint$zprint$fzprint_up_to_first_zloc(caller,options,ind,zloc){
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),cljs.core.first.call(null,zloc),(0),zloc], null);
} else {
var zloc_seq = zprint.zprint.fzprint_get_zloc_seq.call(null,caller,options,zloc);
return zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options,ind,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(-1),zloc_seq], null));
}
});
/**
 * Using return from fzprint-up-to-first-zloc or fzprint-up-to-next-zloc,
 *   [pre-next-style-vec next-zloc next-count zloc-seq], return a zloc-seq
 *   pointer to just beyond the specific zloc which was found by the
 *   fzprint-up-to-first or fzprint-up-to-next call.  You don't give this
 *   a number, you give it the data structure from the thing that you found.
 */
zprint.zprint.get_zloc_seq_right = (function zprint$zprint$get_zloc_seq_right(p__37945){
var vec__37946 = p__37945;
var _ = cljs.core.nth.call(null,vec__37946,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37946,(1),null);
var next_count = cljs.core.nth.call(null,vec__37946,(2),null);
var zloc_seq = cljs.core.nth.call(null,vec__37946,(3),null);
var input_data = vec__37946;
if((next_count >= cljs.core.count.call(null,zloc_seq))){
throw (new Error(["get-zloc-seq-right input data inconsistent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_data)].join('')));
} else {
var zloc_seq__$1 = cljs.core.nthnext.call(null,zloc_seq,(next_count + (1)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1("get-zloc-seq-right:"))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1("get-zloc-seq-right:"),cljs.core.pr_str.call(null,cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq__$1)));
} else {
}

return zloc_seq__$1;
}
});
/**
 * Is this a newline or equivalent?  Comments and newlines are both
 *   newlines for the purposed of this routine.
 */
zprint.zprint.at_newline_QMARK_ = (function zprint$zprint$at_newline_QMARK_(zloc){
var this_tag = zprint.zfns.ztag.call(null,zloc);
return ((cljs.core._EQ_.call(null,this_tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,this_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))));
});
/**
 * Given a zloc that is down inside of a collection, presumably
 *   a list, return a vector containing the number of printing elements
 *   we had to traverse to get to it as well as the newline.
 */
zprint.zprint.next_newline = (function zprint$zprint$next_newline(zloc){
var nloc = zloc;
var index = (0);
while(true){
var next_right = zprint.zutil.right_STAR_.call(null,nloc);
if(cljs.core.truth_(next_right)){
if(zprint.zprint.at_newline_QMARK_.call(null,nloc)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
} else {
var G__37949 = zprint.zutil.right_STAR_.call(null,nloc);
var G__37950 = (((!(zprint.zutil.whitespace_QMARK_.call(null,nloc))))?(index + (1)):index);
nloc = G__37949;
index = G__37950;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
}
break;
}
});
/**
 * Given a string, return the number of characters to the right
 *   of any newlines in the string.  Will return nil if no newlines
 *   in the string.
 */
zprint.zprint.length_after_newline = (function zprint$zprint$length_after_newline(s){
var nl_split = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count.call(null,nl_split) - (1));
if((nl_num === (0))){
return null;
} else {
return (cljs.core.count.call(null,cljs.core.last.call(null,nl_split)) - (1));
}
});
/**
 * Given a tag into which you can go down from rewrite-clj, which must be
 *   a collection of some kind, return the size the l-str.  All of the tag
 *   values into which you can go down must be in this list for indent-before
 *   to work correctly.  It uses these values when it steps up out of one of
 *   these things to see how big the thing would have been if it showed up
 *   as characters.
 */
zprint.zprint.tag_l_size = (function zprint$zprint$tag_l_size(t){
var G__37951 = t;
var G__37951__$1 = (((G__37951 instanceof cljs.core.Keyword))?G__37951.fqn:null);
switch (G__37951__$1) {
case "list":
return (1);

break;
case "vector":
return (1);

break;
case "set":
return (2);

break;
case "map":
return (1);

break;
case "uneval":
return (2);

break;
case "reader-macro":
return (1);

break;
case "meta":
return (1);

break;
case "quote":
return (1);

break;
case "syntax-quote":
return (1);

break;
case "fn":
return (2);

break;
case "unquote":
return (1);

break;
case "deref":
return (1);

break;
case "namespaced-map":
return (1);

break;
default:
return (0);

}
});
/**
 * Take a zloc and move left if possible, or move up if necessary.
 *   Return a vector with [up-size new-zloc]
 */
zprint.zprint.left_or_up = (function zprint$zprint$left_or_up(zloc){
var ploc = zloc;
var total_up = (0);
while(true){
var next_left = zprint.zutil.left_STAR_.call(null,ploc);
if(cljs.core.truth_(next_left)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,next_left], null);
} else {
var moving_up = zprint.zutil.up_STAR_.call(null,ploc);
var up_tag = (cljs.core.truth_(moving_up)?zprint.zutil.tag.call(null,moving_up):null);
var up_size = zprint.zprint.tag_l_size.call(null,up_tag);
if(cljs.core.not.call(null,moving_up)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,null], null);
} else {
var G__37953 = moving_up;
var G__37954 = (total_up + up_size);
ploc = G__37953;
total_up = G__37954;
continue;
}
}
break;
}
});
/**
 * Given a zloc, find the amount of printing space before it on its
 *   current line.
 */
zprint.zprint.length_before = (function zprint$zprint$length_before(zloc){
var vec__37955 = zprint.zprint.left_or_up.call(null,zloc);
var up_size = cljs.core.nth.call(null,vec__37955,(0),null);
var next_zloc = cljs.core.nth.call(null,vec__37955,(1),null);
var ploc = next_zloc;
var indent_before = up_size;
while(true){
if(cljs.core.not.call(null,ploc)){
return indent_before;
} else {
var zstr = (cljs.core.truth_(ploc)?zprint.zfns.zstring.call(null,ploc):"");
var length_right_of_newline = zprint.zprint.length_after_newline.call(null,zstr);
var vec__37961 = zprint.zprint.left_or_up.call(null,ploc);
var up_size__$1 = cljs.core.nth.call(null,vec__37961,(0),null);
var next_zloc__$1 = cljs.core.nth.call(null,vec__37961,(1),null);
if(cljs.core.truth_(length_right_of_newline)){
return (length_right_of_newline + indent_before);
} else {
var G__37964 = next_zloc__$1;
var G__37965 = ((indent_before + cljs.core.count.call(null,zstr)) + up_size__$1);
ploc = G__37964;
indent_before = G__37965;
continue;
}
}
break;
}
});
/**
 * Return the next actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.next_actual = (function zprint$zprint$next_actual(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return nloc;
} else {
var next_nloc = zprint.zutil.zrightnws.call(null,nloc);
var next_tag = zprint.zutil.tag.call(null,next_nloc);
if((!(((cljs.core._EQ_.call(null,next_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,next_tag,new cljs.core.Keyword(null,"comment","comment",532206069))))))){
return next_nloc;
} else {
var G__37966 = next_nloc;
nloc = G__37966;
continue;
}
}
break;
}
});
/**
 * Return the first actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.first_actual = (function zprint$zprint$first_actual(zloc){
if(zprint.zprint.at_newline_QMARK_.call(null,zloc)){
return zprint.zprint.next_actual.call(null,zloc);
} else {
return zloc;
}
});
/**
 * Should we hang this zloc, or flow it.  We assume that we are at
 *   the start of the collection (though this could be generalized to
 *   deal with other starting locations easily enough).  Return true
 *   if we should hang it based just on the information in the zloc
 *   itself.  The criteria are: If there is a newline after the second
 *   thing in the zloc, and the amount of space prior to the third thing
 *   is the same as the amount of space prior to the second thing, then
 *   the incoming zloc was hung and we should do the same. Of course, it
 *   would also only be hung if the second thing was on the same line as
 *   the first thing.
 */
zprint.zprint.hang_zloc_QMARK_ = (function zprint$zprint$hang_zloc_QMARK_(zloc){
var zloc__$1 = zprint.zprint.first_actual.call(null,zloc);
var vec__37967 = zprint.zprint.next_newline.call(null,zloc__$1);
var count_prior_to_newline = cljs.core.nth.call(null,vec__37967,(0),null);
var newline = cljs.core.nth.call(null,vec__37967,(1),null);
if((count_prior_to_newline < (2))){
return false;
} else {
var second_element = zprint.zutil.zrightnws.call(null,((zprint.zutil.whitespace_QMARK_.call(null,zloc__$1))?zprint.zutil.zrightnws.call(null,zloc__$1):zloc__$1));
var second_indent = zprint.zprint.length_before.call(null,second_element);
var third_element = zprint.zprint.next_actual.call(null,second_element);
var third_indent = zprint.zprint.length_before.call(null,third_element);
var and__4210__auto__ = second_element;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = third_element;
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core._EQ_.call(null,second_indent,third_indent);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
/**
 * Take a style-vec that was once output from indent-zmap, and fix
 *   up all of the :indent elements in it by adding (- actual-ind ind)
 *   to them.  If we find a multiple thing in here, call indent-shift
 *   recursively with the ind and cur-ind that is approprite.  All of
 *   the actual indents are correct already -- all we are doing is
 *   setting up their base.  There is no attempt to determine if we
 *   are exceeding any configured width.
 */
zprint.zprint.indent_shift = (function zprint$zprint$indent_shift(caller,options,ind,actual_ind,svec){
var shift_ind = actual_ind;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-shift: ind:",ind,"actual-ind:",actual_ind,"shift-ind:",shift_ind,"svec:",svec));
} else {
}

var cur_seq = svec;
var cur_ind = actual_ind;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cur_seq)){
return out;
} else {
var this_seq = cljs.core.first.call(null,cur_seq);
var new_seq = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,this_seq)))?zprint.zprint.indent_shift.call(null,caller,options,ind,cur_ind,this_seq):(function (){var vec__37979 = this_seq;
var s = cljs.core.nth.call(null,vec__37979,(0),null);
var color = cljs.core.nth.call(null,vec__37979,(1),null);
var type = cljs.core.nth.call(null,vec__37979,(2),null);
var next_seq = cljs.core.first.call(null,cljs.core.next.call(null,cur_seq));
var this_shift = (cljs.core.truth_((function (){var and__4210__auto__ = next_seq;
if(cljs.core.truth_(and__4210__auto__)){
return (((!(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,next_seq))))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,next_seq,(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))));
} else {
return and__4210__auto__;
}
})())?(0):shift_ind);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"indent","indent",-148200125))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,this_shift))].join(''),color,type,(42)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right","right",-452581833))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,color,type,shift_ind], null);
} else {
return this_seq;

}
}
})());
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-shift: cur-ind:",cur_ind,"this-seq:",this_seq,"new-seq:",new_seq)):null);
var vec__37976 = zprint.zprint.style_lines.call(null,options,cur_ind,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seq], null));
var linecnt = cljs.core.nth.call(null,vec__37976,(0),null);
var max_width = cljs.core.nth.call(null,vec__37976,(1),null);
var lines = cljs.core.nth.call(null,vec__37976,(2),null);
var last_width = cljs.core.last.call(null,lines);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-shift: last-width:",last_width,"new-seq:",new_seq));
} else {
}

var G__37982 = cljs.core.next.call(null,cur_seq);
var G__37983 = last_width;
var G__37984 = cljs.core.conj.call(null,out,new_seq);
cur_seq = G__37982;
cur_ind = G__37983;
out = G__37984;
continue;
}
break;
}
});
/**
 * Implement :indent-only?.  This routine is the central one through
 *   which all :indent-only? processing flows, and replaces all of the
 *   detailed logic in fzprint-list*, fzprint-vec*, and fzprint-map*.
 *   This is called directly by fzprint-vec*, which handles both vectors
 *   and sets, and through fzprint-indent by fzprint-list* and
 *   fzprint-map*.  Thus, all of the data structures get their
 *   :indent-only? processing handled by ident-zmap.  coll-print is
 *   the output from fzprint-seq, which is a style-vec in the making
 *   without spacing, but with extra [] around the elements.  Everything
 *   is based off of ind, and we know nothing to the left of that.
 *   ind must be the left end of everything, not the right of l-str!
 *   The actual-ind is to the right of l-str.  When we get a newline,
 *   replace any spaces after it with our own, and that would be to
 *   bring it to ind + indent.  
 */
zprint.zprint.indent_zmap = (function zprint$zprint$indent_zmap(var_args){
var G__37986 = arguments.length;
switch (G__37986) {
case 7:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__37987,ind,actual_ind,coll_print,indent,first_indent_only_QMARK_){
var map__37988 = p__37987;
var map__37988__$1 = cljs.core.__destructure_map.call(null,map__37988);
var options = map__37988__$1;
var map__37989 = cljs.core.get.call(null,map__37988__$1,caller);
var map__37989__$1 = cljs.core.__destructure_map.call(null,map__37989);
var wrap_after_multi_QMARK_ = cljs.core.get.call(null,map__37989__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var width = cljs.core.get.call(null,map__37988__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__37988__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var coll_print__$1 = zprint.zprint.merge_fzprint_seq.call(null,coll_print);
var last_index = (cljs.core.count.call(null,coll_print__$1) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt.call(null,rightcnt);
var actual_indent = (ind + indent);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-zmap: ind:",ind,"actual-ind:",actual_ind,"first-indent-only?",first_indent_only_QMARK_,"indent:",indent,"actual-indent:",actual_indent,"coll-print:",coll_print__$1));
} else {
}

var cur_seq = coll_print__$1;
var cur_ind = actual_ind;
var index = (0);
var beginning_QMARK_ = true;
var l_str_indent_QMARK_ = true;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cur_seq)){
return out;
} else {
var this_seq = cljs.core.first.call(null,cur_seq);
if(cljs.core.truth_(this_seq)){
var multi_QMARK_ = (cljs.core.count.call(null,this_seq) > (1));
var _ = zprint.zprint.log_lines.call(null,options,"indent-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-zmap loop: cur-ind:",cur_ind,"multi?",multi_QMARK_,"(count this-seq):",cljs.core.count.call(null,this_seq),"this-seq:",this_seq,"out:",out)):null);
var this_seq__$1 = ((multi_QMARK_)?zprint.zprint.indent_shift.call(null,caller,options,actual_ind,cur_ind,this_seq):this_seq);
var vec__37993 = zprint.zprint.style_lines.call(null,options,cur_ind,this_seq__$1);
var linecnt = cljs.core.nth.call(null,vec__37993,(0),null);
var max_width = cljs.core.nth.call(null,vec__37993,(1),null);
var lines = cljs.core.nth.call(null,vec__37993,(2),null);
var last_width = cljs.core.last.call(null,lines);
var thetype = cljs.core.nth.call(null,cljs.core.last.call(null,this_seq__$1),(2));
var len = (last_width - cur_ind);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"linecnt:",linecnt,"last-width:",last_width,"len:",len,"type:",thetype):null);
var len__$1 = (function (){var x__4295__auto__ = (0);
var y__4296__auto__ = len;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"newline","newline",1790071323));
var comma_QMARK_ = cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"comma","comma",1699024745));
var isempty_QMARK_ = cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,this_seq__$1)));
var comment_QMARK_ = ((cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var l_str_indent_QMARK___$1 = ((l_str_indent_QMARK_) && (((comment_QMARK_) || (newline_QMARK_))));
var actual_indent__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = (index > (0));
if(and__4210__auto__){
return first_indent_only_QMARK_;
} else {
return and__4210__auto__;
}
})())?ind:(ind + indent));
var width__$1 = ((cljs.core._EQ_.call(null,index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = ((cur_ind + len__$1) <= width__$1);
var new_ind = ((newline_QMARK_)?actual_indent__$1:((cur_ind + (1)) + len__$1)
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"------ this-seq:",this_seq__$1,"lines:",lines,"linecnt:",linecnt,"multi?",multi_QMARK_,"thetype:",thetype,"newline?:",newline_QMARK_,"comment?:",comment_QMARK_,"comma?:",comma_QMARK_,"l-str-indent?:",l_str_indent_QMARK___$1,"first-indent-only?",first_indent_only_QMARK_,"actual-indent:",actual_indent__$1,"index:",index,"beginning?:",beginning_QMARK_,"max-width:",max_width,"last-width:",last_width,"len:",len__$1,"cur-ind:",cur_ind,"isempty?:",isempty_QMARK_,"new-ind:",new_ind,"width:",width__$1,"fit?",fit_QMARK_));
} else {
}

var G__37997 = cljs.core.next.call(null,cur_seq);
var G__37998 = new_ind;
var G__37999 = (index + (1));
var G__38000 = ((((isempty_QMARK_) && (beginning_QMARK_))) || (((newline_QMARK_) || (cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"indent","indent",-148200125))))));
var G__38001 = l_str_indent_QMARK___$1;
var G__38002 = ((isempty_QMARK_)?out:cljs.core.concat.call(null,out,((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_seq = cljs.core.first.call(null,cljs.core.next.call(null,cur_seq));
var newline_next_QMARK_ = (cljs.core.truth_(next_seq)?cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,next_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
if(cljs.core.truth_(newline_next_QMARK_)){
return "";
} else {
return zprint.zprint.blanks.call(null,((l_str_indent_QMARK___$1)?actual_ind:actual_indent__$1));
}
})())].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(12)], null)], null):(((index === (0)))?this_seq__$1:((((beginning_QMARK_) || (comma_QMARK_)))?this_seq__$1:zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(12)], null)], null),this_seq__$1))
))));
cur_seq = G__37997;
cur_ind = G__37998;
index = G__37999;
beginning_QMARK_ = G__38000;
l_str_indent_QMARK_ = G__38001;
out = G__38002;
continue;
} else {
return null;
}
}
break;
}
}));

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,ind,actual_ind,coll_print,indent){
return zprint.zprint.indent_zmap.call(null,caller,options,ind,actual_ind,coll_print,indent,null);
}));

(zprint.zprint.indent_zmap.cljs$lang$maxFixedArity = 7);

zprint.zprint.hang_indent = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"none-body","none-body",-171554854),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null);
zprint.zprint.flow_indent = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"gt3-force-nl","gt3-force-nl",-1297517534),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),null,new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),null,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),null,new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null);
/**
 * Given a vector of vectors, decide if we should merge these individually
 *   into the top level vector.
 */
zprint.zprint.newline_seq_QMARK_ = (function zprint$zprint$newline_seq_QMARK_(newline_vec){
var starts_with_nl_vec = cljs.core.mapv.call(null,(function (p1__38003_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,p1__38003_SHARP_),"\n");
}),newline_vec);
var true_seq = cljs.core.distinct.call(null,starts_with_nl_vec);
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,true_seq),(1))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,true_seq),true)));
});
/**
 * Given the output from fzprint-seq, which is a seq of the
 *   output of fzprint*, apply a function to each of them that has
 *   more than one element (since less has no meaning) and when the
 *   function returns true, merge the vector in as individual elements.
 */
zprint.zprint.merge_fzprint_seq = (function zprint$zprint$merge_fzprint_seq(fzprint_seq_vec){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (p1__38005_SHARP_,p2__38004_SHARP_){
if(zprint.zprint.newline_seq_QMARK_.call(null,p2__38004_SHARP_)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,p1__38005_SHARP_,cljs.core.mapv.call(null,cljs.core.vector,p2__38004_SHARP_)));
} else {
return cljs.core.conj.call(null,p1__38005_SHARP_,p2__38004_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,fzprint_seq_vec));
});
/**
 * This function assumes that :indent-only? was set for the caller
 *   in the options (since anything else doesn't make sense).  It takes
 *   a zloc and the ind, which is where we are on the line this point,
 *   and will process the zloc to include any newlines.  Of course we
 *   have to have all of the white space in the zloc too, since we
 *   need to ask some questions about what we are starting with at
 *   some point.  We don't add newlines and we let the newlines that
 *   are in there do their thing.  We might add newlines if we move
 *   beyond the right margin, but for now, we don't (and it isn't
 *   entirely clear how or if that would work).  This routine has to
 *   make decisions about the indent, that is whether to hang or flow
 *   the expression. It does that based on what was done in the input
 *   if the configuration allows.
 */
zprint.zprint.fzprint_indent = (function zprint$zprint$fzprint_indent(var_args){
var G__38007 = arguments.length;
switch (G__38007) {
case 9:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 8:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,first_indent_only_QMARK_){
var flow_indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var flow_indent__$1 = ((cljs.core._EQ_.call(null,caller,new cljs.core.Keyword(null,"map","map",1371690461)))?cljs.core.count.call(null,l_str):flow_indent);
var l_str_len = cljs.core.count.call(null,l_str);
var flow_indent__$2 = (((((flow_indent__$1 > l_str_len)) && (cljs.core._EQ_.call(null,caller,new cljs.core.Keyword(null,"list","list",765357683)))))?(cljs.core.truth_(arg_1_indent)?flow_indent__$1:l_str_len):flow_indent__$1);
var actual_ind = (ind + l_str_len);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent: caller:",caller,"l-str-len:",l_str_len,"ind:",ind,"fn-style:",fn_style,"arg-1-indent:",arg_1_indent,"flow-indent:",flow_indent__$2,"actual-ind:",actual_ind,"comma?",new cljs.core.Keyword(null,"comma?","comma?",1532168963).cljs$core$IFn$_invoke$arity$1(caller.call(null,options)))):null);
var zloc_seq = (cljs.core.truth_(new cljs.core.Keyword(null,"comma?","comma?",1532168963).cljs$core$IFn$_invoke$arity$1(caller.call(null,options)))?zprint.zfns.zmap_w_nl_comma.call(null,cljs.core.identity,zloc):zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc));
var coll_print = zprint.zprint.fzprint_seq.call(null,options,ind,zloc_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent: coll-print:",coll_print)):null);
var indent_only_style = new cljs.core.Keyword(null,"indent-only-style","indent-only-style",708921086).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var already_hung_QMARK_ = (cljs.core.truth_((function (){var and__4210__auto__ = indent_only_style;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.call(null,indent_only_style,new cljs.core.Keyword(null,"input-hang","input-hang",-542766364));
} else {
return and__4210__auto__;
}
})())?zprint.zprint.hang_zloc_QMARK_.call(null,zprint.zutil.down_STAR_.call(null,zloc)):null);
var raw_indent = (cljs.core.truth_((function (){var and__4210__auto__ = arg_1_indent;
if(cljs.core.truth_(and__4210__auto__)){
return already_hung_QMARK_;
} else {
return and__4210__auto__;
}
})())?(arg_1_indent - ind):flow_indent__$2);
var indent = raw_indent;
var coll_print_contains_nil_QMARK_ = zprint.zprint.contains_nil_QMARK_.call(null,coll_print);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent:",zprint.zfns.zstring.call(null,zloc),"ind:",ind,"fn-style:",fn_style,"indent-only-style:",indent_only_style,"already-hung?:",already_hung_QMARK_,"arg-1-indent:",arg_1_indent,"l-str-len:",cljs.core.count.call(null,l_str),"actual-ind:",actual_ind,"raw-indent:",raw_indent,"coll-print-contains-nil?:",coll_print_contains_nil_QMARK_,"indent:",indent)):null);
var coll_print__$1 = (cljs.core.truth_(coll_print_contains_nil_QMARK_)?null:coll_print);
var output = zprint.zprint.indent_zmap.call(null,caller,options,ind,actual_ind,coll_print__$1,indent,first_indent_only_QMARK_);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent: output:",output));
} else {
}

return output;
}));

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent){
return zprint.zprint.fzprint_indent.call(null,caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,null);
}));

(zprint.zprint.fzprint_indent.cljs$lang$maxFixedArity = 9);

/**
 * Find the location, counting from zero, and counting every element 
 *   in the seq, of the first zthing?.  Return its index if it is found, 
 *   nil if not.
 */
zprint.zprint.zfind_seq = (function zprint$zprint$zfind_seq(zthing_QMARK_,zloc_seq){
var nloc = zloc_seq;
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,cljs.core.first.call(null,nloc)))){
return i;
} else {
var G__38009 = cljs.core.next.call(null,nloc);
var G__38010 = (i + (1));
nloc = G__38009;
i = G__38010;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zprint.body_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null,new cljs.core.Keyword(null,"none-body","none-body",-171554854),null], null), null);
zprint.zprint.body_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null);
zprint.zprint.noarg1_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null], null), null);
zprint.zprint.noarg1_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)], null);
/**
 * Set noarg1 in the options if it is the right fn-type.
 */
zprint.zprint.noarg1 = (function zprint$zprint$noarg1(options,fn_type){
if(cljs.core.truth_(zprint.zprint.noarg1_set.call(null,fn_type))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430),true);
} else {
return options;
}
});
zprint.zprint.fn_style__GT_caller = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"pair","pair",-447516312)], null);
/**
 * Given an options map, get the respect-nl?, respect-bl? and indent-only?
 *   options from the caller's options, and if the caller doesn't define these,
 *   use the values from the backup section of the options map. Return
 *   [respect-nl? respect-bl? indent-only?]
 */
zprint.zprint.get_respect_indent = (function zprint$zprint$get_respect_indent(options,caller,backup){
var caller_options = caller.call(null,options);
var respect_nl_QMARK_ = cljs.core.get.call(null,caller_options,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"undef","undef",-529926228));
var respect_bl_QMARK_ = cljs.core.get.call(null,caller_options,new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"undef","undef",-529926228));
var indent_only_QMARK_ = cljs.core.get.call(null,caller_options,new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"undef","undef",-529926228));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,respect_nl_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?respect_nl_QMARK_:new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(backup.call(null,options))),((cljs.core.not_EQ_.call(null,respect_bl_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?respect_bl_QMARK_:new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998).cljs$core$IFn$_invoke$arity$1(backup.call(null,options))),((cljs.core.not_EQ_.call(null,indent_only_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?indent_only_QMARK_:new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(backup.call(null,options)))], null);
});
/**
 * Should we allow this function to print on a single line?
 */
zprint.zprint.allow_one_line_QMARK_ = (function zprint$zprint$allow_one_line_QMARK_(p__38011,len,fn_style){
var map__38012 = p__38011;
var map__38012__$1 = cljs.core.__destructure_map.call(null,map__38012);
var options = map__38012__$1;
var fn_force_nl = cljs.core.get.call(null,map__38012__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var fn_gt2_force_nl = cljs.core.get.call(null,map__38012__$1,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537));
var fn_gt3_force_nl = cljs.core.get.call(null,map__38012__$1,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985));
return cljs.core.not.call(null,(function (){var or__4212__auto__ = fn_force_nl.call(null,fn_style);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var and__4210__auto__ = (len > (3));
if(and__4210__auto__){
return fn_gt2_force_nl.call(null,fn_style);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = (function (){var and__4210__auto__ = (len > (4));
if(and__4210__auto__){
return fn_gt3_force_nl.call(null,fn_style);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
var temp__5751__auto__ = zprint.zprint.fn_style__GT_caller.call(null,fn_style);
if(cljs.core.truth_(temp__5751__auto__)){
var future_caller = temp__5751__auto__;
var caller_map = future_caller.call(null,options);
var or__4212__auto____$3 = new cljs.core.Keyword(null,"flow?","flow?",96929057).cljs$core$IFn$_invoke$arity$1(caller_map);
if(cljs.core.truth_(or__4212__auto____$3)){
return or__4212__auto____$3;
} else {
return new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1(caller_map);
}
} else {
return null;
}
}
}
}
})());
});
/**
 * If the (caller options) has a value for :return-altered-zipper, then
 *   examine the value.  It should be [<depth> <symbol> <fn>]. 
 *   If the <depth> is nil, any depth will do. If the
 *   <symbol> is nil, any symbol will do.  If the <depth> and <symbol>
 *   match, then the <fn> is called as (fn caller options zloc), and must
 *   return a new zloc.
 */
zprint.zprint.modify_zloc = (function zprint$zprint$modify_zloc(caller,options,zloc){
var vec__38013 = new cljs.core.Keyword(null,"return-altered-zipper","return-altered-zipper",837872379).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var depth = cljs.core.nth.call(null,vec__38013,(0),null);
var trigger_symbol = cljs.core.nth.call(null,vec__38013,(1),null);
var modify_fn = cljs.core.nth.call(null,vec__38013,(2),null);
var return_altered_zipper_value = vec__38013;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc caller:",caller,"ztype",new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),"return-altered-zipper-value:",return_altered_zipper_value);
} else {
}

if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))) || ((return_altered_zipper_value == null)))){
return zloc;
} else {
var call_fn_QMARK_ = (function (){var and__4210__auto__ = (((depth == null)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),depth)));
if(and__4210__auto__){
var and__4210__auto____$1 = ((cljs.core.not.call(null,trigger_symbol)) || (cljs.core._EQ_.call(null,trigger_symbol,zprint.zfns.zsexpr.call(null,zprint.zfns.zfirst.call(null,zloc)))));
if(and__4210__auto____$1){
return modify_fn;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc: zloc",zprint.zfns.zstring.call(null,zloc),"call-fn?",call_fn_QMARK_);
} else {
}

if(cljs.core.truth_(call_fn_QMARK_)){
var return$ = modify_fn.call(null,caller,options,zloc);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc return:",zprint.zfns.zstring.call(null,return$));
} else {
}

return return$;
} else {
return zloc;
}
}
});
/**
 * Print a list, which might be a list or an anon fn.  
 *   Lots of work to make a list look good, as that is typically code. 
 *   Presently all of the callers of this are :list or :vector-fn.
 */
zprint.zprint.fzprint_list_STAR_ = (function zprint$zprint$fzprint_list_STAR_(caller,l_str,r_str,p__38017,ind,zloc){
var map__38018 = p__38017;
var map__38018__$1 = cljs.core.__destructure_map.call(null,map__38018);
var options = map__38018__$1;
var fn_map = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var user_fn_map = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227));
var one_line_QMARK_ = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var fn_style = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917));
var no_arg1_QMARK_ = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430));
var fn_force_nl = cljs.core.get.call(null,map__38018__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var max_length = zprint.zprint.get_max_length.call(null,options);
var zloc__$1 = zprint.zprint.modify_zloc.call(null,caller,options,zloc);
var len = zprint.zfns.zcount.call(null,zloc__$1);
var zloc__$2 = (((len > max_length))?zprint.zfns.ztake_append.call(null,max_length,zloc__$1,new cljs.core.Symbol(null,"...","...",-1926939749,null)):zloc__$1);
var len__$1 = zprint.zfns.zcount.call(null,zloc__$2);
var l_str_len = cljs.core.count.call(null,l_str);
var indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options.call(null,caller));
var vec__38019 = zprint.zprint.fzprint_up_to_first_zloc.call(null,caller,options,(ind + l_str_len),zloc__$2);
var pre_arg_1_style_vec = cljs.core.nth.call(null,vec__38019,(0),null);
var arg_1_zloc = cljs.core.nth.call(null,vec__38019,(1),null);
var arg_1_count = cljs.core.nth.call(null,vec__38019,(2),null);
var zloc_seq = cljs.core.nth.call(null,vec__38019,(3),null);
var first_data = vec__38019;
var arg_1_coll_QMARK_ = cljs.core.not.call(null,(function (){var or__4212__auto__ = zprint.zfns.zkeyword_QMARK_.call(null,arg_1_zloc);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zfns.zsymbol_QMARK_.call(null,arg_1_zloc);
}
})());
var arg_1_indent_alt_QMARK_ = (function (){var and__4210__auto__ = arg_1_coll_QMARK_;
if(and__4210__auto__){
return fn_style;
} else {
return and__4210__auto__;
}
})();
var fn_str = (((!(arg_1_coll_QMARK_)))?zprint.zfns.zstring.call(null,arg_1_zloc):null);
var fn_style__$1 = (function (){var or__4212__auto__ = fn_style;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = fn_map.call(null,fn_str);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return user_fn_map.call(null,fn_str);
}
}
})();
var fn_style__$2 = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not.call(null,fn_style__$1);
if(and__4210__auto__){
return fn_str;
} else {
return and__4210__auto__;
}
})())?fn_map.call(null,cljs.core.last.call(null,clojure.string.split.call(null,fn_str,/\//))):fn_style__$1);
var fn_style__$3 = ((cljs.core._EQ_.call(null,fn_style__$2,new cljs.core.Keyword(null,"none","none",1333468478)))?null:fn_style__$2);
var fn_style__$4 = (cljs.core.truth_((function (){var and__4210__auto__ = fn_str;
if(cljs.core.truth_(and__4210__auto__)){
return (fn_style__$3 == null);
} else {
return and__4210__auto__;
}
})())?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(fn_map):fn_style__$3);
var options__$1 = ((cljs.core.vector_QMARK_.call(null,fn_style__$4))?cljs.core.first.call(null,zprint.config.config_and_validate.call(null,"fn-style:",null,options,((cljs.core._EQ_.call(null,cljs.core.count.call(null,fn_style__$4),(2)))?cljs.core.second.call(null,fn_style__$4):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"zipper","zipper",1500694438),new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.second.call(null,fn_style__$4):cljs.core.nth.call(null,fn_style__$4,(2)))))):options);
var vec__38022 = ((cljs.core.vector_QMARK_.call(null,fn_style__$4))?zprint.zprint.fzprint_up_to_first_zloc.call(null,caller,options__$1,(ind + l_str_len),zloc__$2):first_data);
var pre_arg_1_style_vec__$1 = cljs.core.nth.call(null,vec__38022,(0),null);
var arg_1_zloc__$1 = cljs.core.nth.call(null,vec__38022,(1),null);
var arg_1_count__$1 = cljs.core.nth.call(null,vec__38022,(2),null);
var zloc_seq__$1 = cljs.core.nth.call(null,vec__38022,(3),null);
var first_data__$1 = vec__38022;
var fn_style__$5 = ((cljs.core.vector_QMARK_.call(null,fn_style__$4))?cljs.core.first.call(null,fn_style__$4):fn_style__$4);
var vec__38025 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$1,(ind + indent),first_data__$1);
var pre_arg_2_style_vec = cljs.core.nth.call(null,vec__38025,(0),null);
var arg_2_zloc = cljs.core.nth.call(null,vec__38025,(1),null);
var arg_2_count = cljs.core.nth.call(null,vec__38025,(2),null);
var _ = cljs.core.nth.call(null,vec__38025,(3),null);
var second_data = vec__38025;
var len__$2 = zprint.zfns.zcount_zloc_seq_nc_nws.call(null,zloc_seq__$1);
var vec__38028 = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.call(null,fn_style__$5,new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615));
if(and__4210__auto__){
var and__4210__auto____$1 = new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(options__$1.call(null,caller));
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core._EQ_.call(null,len__$2,(2));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.update_in.call(null,options__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [caller], null),cljs.core.dissoc,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419)),new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$1) - (1))),arg_2_zloc,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(options__$1.call(null,caller)),cljs.core.count.call(null,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(options__$1.call(null,caller))),"",(1),zprint.zprint.remove_one.call(null,zloc_seq__$1,arg_1_count__$1)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1,arg_1_zloc__$1,l_str,l_str_len,r_str,len__$2,zloc_seq__$1], null));
var options__$2 = cljs.core.nth.call(null,vec__38028,(0),null);
var arg_1_zloc__$2 = cljs.core.nth.call(null,vec__38028,(1),null);
var l_str__$1 = cljs.core.nth.call(null,vec__38028,(2),null);
var l_str_len__$1 = cljs.core.nth.call(null,vec__38028,(3),null);
var r_str__$1 = cljs.core.nth.call(null,vec__38028,(4),null);
var len__$3 = cljs.core.nth.call(null,vec__38028,(5),null);
var zloc_seq__$2 = cljs.core.nth.call(null,vec__38028,(6),null);
var indent__$1 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options__$2.call(null,caller));
var indent_arg = new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874).cljs$core$IFn$_invoke$arity$1(options__$2.call(null,caller));
var indent_only_QMARK_ = new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(options__$2.call(null,caller));
var indent__$2 = (cljs.core.truth_(zprint.zprint.body_set.call(null,fn_style__$5))?indent__$1:(function (){var or__4212__auto__ = indent_arg;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return indent__$1;
}
})());
var indent__$3 = (indent__$2 + (l_str_len__$1 - (1)));
var one_line_ok_QMARK_ = zprint.zprint.allow_one_line_QMARK_.call(null,options__$2,len__$3,fn_style__$5);
var one_line_ok_QMARK___$1 = (cljs.core.truth_(indent_only_QMARK_)?null:one_line_ok_QMARK_);
var one_line_ok_QMARK___$2 = ((cljs.core.not_EQ_.call(null,pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768)))?null:one_line_ok_QMARK___$1);
var fn_style__$6 = (function (){var or__4212__auto__ = zprint.zprint.body_map.call(null,fn_style__$5);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return fn_style__$5;
}
})();
var fn_style__$7 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null], null), null).call(null,fn_style__$6))?fn_style__$6:(((len__$3 < (3)))?null:fn_style__$6));
var fn_style__$8 = (cljs.core.truth_(no_arg1_QMARK_)?(function (){var or__4212__auto__ = zprint.zprint.noarg1_map.call(null,fn_style__$7);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return fn_style__$7;
}
})():fn_style__$7);
var options__$3 = (cljs.core.truth_(no_arg1_QMARK_)?cljs.core.dissoc.call(null,options__$2,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430)):options__$2);
var indent_adj = (l_str_len__$1 - (1));
var default_indent = (cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,arg_1_zloc__$2))?indent__$3:l_str_len__$1);
var arg_1_indent = (((!(arg_1_coll_QMARK_)))?((ind + (l_str_len__$1 + (1))) + cljs.core.count.call(null,fn_str)):null);
var arg_1_indent__$1 = (function (){var or__4212__auto__ = arg_1_indent;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_(arg_1_indent_alt_QMARK_)){
return (indent__$3 + ind);
} else {
return null;
}
}
})();
var arg_1_indent__$2 = ((cljs.core._EQ_.call(null,pre_arg_2_style_vec,new cljs.core.Keyword(null,"noseq","noseq",405935768)))?arg_1_indent__$1:(cljs.core.truth_(arg_1_indent__$1)?(indent__$3 + ind):null));
var options__$4 = (((!(arg_1_coll_QMARK_)))?cljs.core.assoc.call(null,options__$3,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),fn_str):options__$3);
var options__$5 = cljs.core.assoc.call(null,options__$4,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342),(cljs.core.long$.call(null,(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$4);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()) + (1)));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$5)),"fzs",fn_str):null);
var new_ind = (indent__$3 + ind);
var one_line_ind = (l_str_len__$1 + ind);
var options__$6 = (cljs.core.truth_(fn_style__$8)?cljs.core.dissoc.call(null,options__$5,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917)):options__$5);
var loptions = zprint.zprint.not_rightmost.call(null,options__$6);
var roptions = options__$6;
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map.call(null,options__$6,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$6,(ind + (function (){var x__4295__auto__ = (0);
var y__4296__auto__ = (l_str_len__$1 - (1));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()),zloc__$2,r_str__$1);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$6))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$6),cljs.core.pr_str.call(null,"fzprint-list*:",zprint.zfns.zstring.call(null,zloc__$2),"fn-str",fn_str,"fn-style:",fn_style__$8,"len:",len__$3,"ind:",ind,"indent:",indent__$3,"default-indent:",default_indent,"one-line-ok?",one_line_ok_QMARK___$2,"arg-1-coll?",arg_1_coll_QMARK_,"arg-1-indent:",arg_1_indent__$2,"arg-1-zloc:",zprint.zfns.zstring.call(null,arg_1_zloc__$2),"pre-arg-1-style-vec:",pre_arg_1_style_vec__$1,"l-str:",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str__$1),"'"].join(''),"l-str-len:",l_str_len__$1,"r-str-vec:",r_str_vec,"indent-adj:",indent_adj,"one-line?:",one_line_QMARK_,"indent-only?:",indent_only_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$6),"replacement-string:",new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$6)),":ztype:",new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options__$6))):null);
var one_line = (((((len__$3 === (0))) && (cljs.core._EQ_.call(null,pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768)))))?new cljs.core.Keyword(null,"empty","empty",767870958):(cljs.core.truth_(one_line_ok_QMARK___$2)?zprint.zprint.fzprint_one_line.call(null,options__$6,one_line_ind,zloc_seq__$2):null));
if(cljs.core.truth_(one_line)){
if(cljs.core._EQ_.call(null,one_line,new cljs.core.Keyword(null,"empty","empty",767870958))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line,r_str_vec);
}
} else {
if(cljs.core.truth_(one_line_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$6))){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$6),"fzprint-list*:",fn_str," one-line did not work!!!");
} else {
return null;
}
} else {
if(cljs.core.truth_((cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$6))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$6),"fzprint-list*: fn-style:",fn_style__$8):null))){
return null;
} else {
if(((cljs.core._EQ_.call(null,len__$3,(0))) && (cljs.core._EQ_.call(null,pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768))))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
if(cljs.core.truth_(indent_only_QMARK_)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_indent.call(null,caller,l_str__$1,r_str__$1,options__$6,ind,zloc__$2,fn_style__$8,arg_1_indent__$2),r_str_vec);
} else {
if(cljs.core._EQ_.call(null,len__$3,(1))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_flow_seq.call(null,roptions,one_line_ind,zloc_seq__$2),r_str_vec);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"binding","binding",539932593));
if(and__4210__auto__){
var and__4210__auto____$1 = (len__$3 > (1));
if(and__4210__auto____$1){
return zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
var vec__38031 = zprint.zprint.fzprint_hang_unless_fail.call(null,loptions,(function (){var or__4212__auto__ = arg_1_indent__$2;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (indent__$3 + ind);
}
})(),(indent__$3 + ind),zprint.zprint.fzprint_binding_vec,arg_2_zloc);
var hang_or_flow = cljs.core.nth.call(null,vec__38031,(0),null);
var binding_style_vec = cljs.core.nth.call(null,vec__38031,(1),null);
var binding_style_vec__$1 = ((cljs.core._EQ_.call(null,hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(14)], null)], null),binding_style_vec):binding_style_vec);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,binding_style_vec__$1,zprint.zprint.concat_no_nil.call(null,zprint.zprint.fzprint_flow_seq.call(null,options__$6,(indent__$3 + ind),zprint.zprint.get_zloc_seq_right.call(null,second_data),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"newline-first","newline-first",-638470720)),r_str_vec));
} else {
if(cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586))){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right.call(null,first_data__$1);
var zloc_count = cljs.core.count.call(null,zloc_seq__$2);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),zprint.zprint.fzprint_hang.call(null,cljs.core.assoc_in.call(null,options__$6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null),new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$6))),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),arg_1_indent__$2,(indent__$3 + ind),zprint.zprint.fzprint_pairs,zloc_count,zloc_seq_right_first),r_str_vec);
} else {
if(cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"extend","extend",1836484006))){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right.call(null,first_data__$1);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$6,(indent__$3 + ind),zloc_seq_right_first)),r_str_vec);
} else {
if(((((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"fn","fn",-1175266204))) && (cljs.core.not.call(null,zprint.zfns.zlist_QMARK_.call(null,arg_2_zloc))))) || (((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2","arg2",1729550917))) || (((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072))) || (((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126))) || (cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186))))))))))){
var vec__38034 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$6,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.call(null,vec__38034,(0),null);
var arg_3_zloc = cljs.core.nth.call(null,vec__38034,(1),null);
var arg_3_count = cljs.core.nth.call(null,vec__38034,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__38034,(3),null);
var third_data = vec__38034;
var zloc_seq_right_third = zprint.zprint.get_zloc_seq_right.call(null,third_data);
var second_element = zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core.not.call(null,arg_3_zloc))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc);
var vec__38037 = zprint.zprint.style_lines.call(null,loptions,arg_1_indent__$2,second_element);
var line_count = cljs.core.nth.call(null,vec__38037,(0),null);
var max_width = cljs.core.nth.call(null,vec__38037,(1),null);
var first_three = (cljs.core.truth_(second_element)?(function (){var first_two_wo_pre_arg_1 = zprint.zprint.concat_no_nil.call(null,zprint.zprint.fzprint_STAR_.call(null,loptions,(indent__$3 + ind),arg_1_zloc__$2),pre_arg_2_style_vec,second_element,pre_arg_3_style_vec);
var local_options = ((cljs.core.not.call(null,zloc_seq_right_third))?options__$6:loptions);
var first_two_one_line_QMARK_ = zprint.zprint.fzfit_one_line.call(null,local_options,zprint.zprint.style_lines.call(null,local_options,(ind + indent__$3),first_two_wo_pre_arg_1));
var first_two = zprint.zprint.concat_no_nil.call(null,pre_arg_1_style_vec__$1,first_two_wo_pre_arg_1);
if(first_two_one_line_QMARK_){
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$6))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$6),cljs.core.pr_str.call(null,"fzprint-list*: :arg2-* first two didn't fit:",first_two));
} else {
}
}

return zprint.zprint.concat_no_nil.call(null,first_two,(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2","arg2",1729550917));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126));
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072));
if(or__4212__auto____$2){
return or__4212__auto____$2;
} else {
var or__4212__auto____$3 = cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186));
if(or__4212__auto____$3){
return or__4212__auto____$3;
} else {
var and__4210__auto__ = zprint.zfns.zvector_QMARK_.call(null,arg_3_zloc);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.call(null,line_count,(1));
} else {
return and__4210__auto__;
}
}
}
}
}
})())?zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core.not.call(null,zloc_seq_right_third))?options__$6:loptions),((((cljs.core._EQ_.call(null,pre_arg_3_style_vec,new cljs.core.Keyword(null,"noseq","noseq",405935768))) && (first_two_one_line_QMARK_)))?max_width:(indent__$3 + ind)),(indent__$3 + ind),arg_3_zloc):zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_STAR_.call(null,((cljs.core.not.call(null,zloc_seq_right_third))?options__$6:loptions),(indent__$3 + ind),arg_3_zloc))));
})():null);
if(cljs.core.truth_(first_three)){
if(cljs.core.not.call(null,zloc_seq_right_third)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,first_three,r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,first_three,((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126)))?zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_pairs.call(null,options__$6,(indent__$3 + ind),zloc_seq_right_third)):((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186)))?zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$6,(indent__$3 + ind),zloc_seq_right_third)):zprint.zprint.fzprint_hang_remaining.call(null,caller,((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072)))?cljs.core.assoc.call(null,options__$6,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)):options__$6),(indent__$3 + ind),(indent__$3 + ind),zloc_seq_right_third,fn_style__$8)
)),r_str_vec);
}
} else {
return null;
}
} else {
if(((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120))) && ((len__$3 > (3))))){
var vec__38040 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$6,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.call(null,vec__38040,(0),null);
var arg_3_zloc = cljs.core.nth.call(null,vec__38040,(1),null);
var arg_3_count = cljs.core.nth.call(null,vec__38040,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__38040,(3),null);
var third_data = vec__38040;
var vec__38043 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$6,(ind + indent__$3),third_data);
var pre_arg_4_style_vec = cljs.core.nth.call(null,vec__38043,(0),null);
var arg_4_zloc = cljs.core.nth.call(null,vec__38043,(1),null);
var arg_4_count = cljs.core.nth.call(null,vec__38043,(2),null);
var ___$4 = cljs.core.nth.call(null,vec__38043,(3),null);
var fourth_data = vec__38043;
var arg_vec_index = (function (){var or__4212__auto__ = zprint.zprint.zfind_seq.call(null,(function (p1__38016_SHARP_){
var or__4212__auto__ = zprint.zfns.zvector_QMARK_.call(null,p1__38016_SHARP_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,p1__38016_SHARP_))){
return zprint.zfns.zvector_QMARK_.call(null,zprint.zfns.zfirst.call(null,p1__38016_SHARP_));
} else {
return null;
}
}
}),zloc_seq__$2);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})();
var doc_string_QMARK_ = typeof zprint.zfns.zsexpr.call(null,arg_3_zloc) === 'string';
var mixin_start = ((doc_string_QMARK_)?arg_4_count:arg_3_count);
var mixin_length = ((arg_vec_index - mixin_start) - (1));
var mixins_QMARK_ = (mixin_length > (0));
var doc_string = ((doc_string_QMARK_)?zprint.zprint.fzprint_hang_one.call(null,caller,loptions,(indent__$3 + ind),(indent__$3 + ind),arg_3_zloc):null);
var mixins = ((mixins_QMARK_)?(function (){var mixin_sentinal = zprint.zprint.fzprint_hang_one.call(null,caller,loptions,(indent__$3 + ind),(indent__$3 + ind),((doc_string_QMARK_)?arg_4_zloc:arg_3_zloc));
var vec__38046 = zprint.zprint.style_lines.call(null,loptions,(indent__$3 + ind),mixin_sentinal);
var line_count = cljs.core.nth.call(null,vec__38046,(0),null);
var max_width = cljs.core.nth.call(null,vec__38046,(1),null);
return zprint.zprint.concat_no_nil.call(null,((doc_string_QMARK_)?pre_arg_4_style_vec:pre_arg_3_style_vec),mixin_sentinal,zprint.zprint.fzprint_hang_remaining.call(null,caller,loptions,(max_width + (1)),(((indent__$3 + indent__$3) + ind) - (1)),zprint.zprint.get_zloc_seq_right.call(null,(cljs.core.truth_(doc_string)?fourth_data:third_data)),fn_style__$8,mixin_length));
})():null);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$3,(2)))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((((doc_string_QMARK_) && (mixins_QMARK_)))?zprint.zprint.concat_no_nil.call(null,pre_arg_3_style_vec,doc_string,zprint.zprint.remove_one_newline.call(null,mixins)):((doc_string_QMARK_)?zprint.zprint.concat_no_nil.call(null,pre_arg_3_style_vec,doc_string):((mixins_QMARK_)?zprint.zprint.remove_one_newline.call(null,mixins):new cljs.core.Keyword(null,"noseq","noseq",405935768)
))),zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$6,fn_style__$8),(indent__$3 + ind),(indent__$3 + ind),cljs.core.nthnext.call(null,zloc_seq__$2,((mixins_QMARK_)?arg_vec_index:((doc_string_QMARK_)?arg_4_count:arg_3_count))),fn_style__$8),r_str_vec);
} else {
if(((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953))) || (((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg1","arg1",951899358))) || (((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718))) || (cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329))))))))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$3,(2)))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)))?zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_pairs.call(null,options__$6,(indent__$3 + ind),zprint.zprint.get_zloc_seq_right.call(null,second_data))):zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$6,fn_style__$8),(indent__$3 + ind),(indent__$3 + ind),zprint.zprint.get_zloc_seq_right.call(null,second_data),fn_style__$8)),r_str_vec);
} else {
if(cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050))){
var zloc_seq_right_second = zprint.zprint.get_zloc_seq_right.call(null,second_data);
if(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(indent__$3 + ind),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_STAR_.call(null,loptions,(indent__$3 + ind),arg_2_zloc)),zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$6,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$3,(2)))?options__$6:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),zprint.zprint.prepend_nl.call(null,options__$6,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$6,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec);

}
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,(((!((len__$3 === (0)))))?zprint.zprint.fzprint_STAR_.call(null,loptions,(l_str_len__$1 + ind),arg_1_zloc__$2):new cljs.core.Keyword(null,"noseq","noseq",405935768)),(((!((len__$3 === (0)))))?(function (){var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right.call(null,first_data__$1);
if(zloc_seq_right_first){
if(cljs.core.truth_((function (){var and__4210__auto__ = arg_1_indent__$2;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__4210__auto__;
}
})())){
var result = zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$6,fn_style__$8),arg_1_indent__$2,((indent__$3 + ind) + indent_adj),zloc_seq_right_first,fn_style__$8);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$6))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$6),cljs.core.pr_str.call(null,"fzprint-list*: r-str-vec:",r_str_vec,"result:",result));
} else {
}

return result;
} else {
var local_indent = ((cljs.core._EQ_.call(null,fn_style__$8,new cljs.core.Keyword(null,"flow","flow",590489032)))?(indent__$3 + ind):((default_indent + ind) + indent_adj));
return zprint.zprint.concat_no_nil.call(null,zprint.zprint.fzprint_flow_seq.call(null,zprint.zprint.noarg1.call(null,options__$6,fn_style__$8),local_indent,zloc_seq_right_first,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"newline-first","newline-first",-638470720)));
}
} else {
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
}
})():new cljs.core.Keyword(null,"noseq","noseq",405935768)),r_str_vec);

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
/**
 * Pretty print and focus style a :list element.
 */
zprint.zprint.fzprint_list = (function zprint$zprint$fzprint_list(options,ind,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-list"));
} else {
}

return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"list","list",765357683),"(",")",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Pretty print and focus style a fn element.
 */
zprint.zprint.fzprint_anon_fn = (function zprint$zprint$fzprint_anon_fn(options,ind,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-anon-fn"));
} else {
}

return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"list","list",765357683),"#(",")",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Return true if there are any collections in the collection.
 */
zprint.zprint.any_zcoll_QMARK_ = (function zprint$zprint$any_zcoll_QMARK_(options,ind,zloc){
var coll_QMARK__seq = zprint.zfns.zmap.call(null,zprint.zfns.zcoll_QMARK_,zloc);
return cljs.core.reduce.call(null,(function (p1__38049_SHARP_,p2__38050_SHARP_){
var or__4212__auto__ = p1__38049_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p2__38050_SHARP_;
}
}),null,coll_QMARK__seq);
});
/**
 * Given the output from fzprint-seq, which is a style-vec in
 *   the making without spacing, but with extra [] around the elements,
 *   wrap the elements to the right margin.
 */
zprint.zprint.wrap_zmap = (function zprint$zprint$wrap_zmap(caller,p__38051,ind,coll_print){
var map__38052 = p__38051;
var map__38052__$1 = cljs.core.__destructure_map.call(null,map__38052);
var options = map__38052__$1;
var map__38053 = cljs.core.get.call(null,map__38052__$1,caller);
var map__38053__$1 = cljs.core.__destructure_map.call(null,map__38053);
var wrap_after_multi_QMARK_ = cljs.core.get.call(null,map__38053__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__38053__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var width = cljs.core.get.call(null,map__38052__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__38052__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var last_index = (cljs.core.count.call(null,coll_print) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt.call(null,rightcnt);
var cur_seq = coll_print;
var cur_ind = ind;
var index = (0);
var previous_newline_QMARK_ = false;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cur_seq)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"wrap-zmap: out:",out));
} else {
}

return out;
} else {
var next_seq = cljs.core.first.call(null,cur_seq);
if(cljs.core.truth_(next_seq)){
var multi_QMARK_ = (cljs.core.count.call(null,cljs.core.first.call(null,cur_seq)) > (1));
var this_seq = cljs.core.first.call(null,cur_seq);
var _ = zprint.zprint.log_lines.call(null,options,"wrap-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"wrap-zmap: ind:",ind,"this-seq:",this_seq)):null);
var vec__38057 = zprint.zprint.style_lines.call(null,options,ind,this_seq);
var linecnt = cljs.core.nth.call(null,vec__38057,(0),null);
var max_width = cljs.core.nth.call(null,vec__38057,(1),null);
var lines = cljs.core.nth.call(null,vec__38057,(2),null);
var last_width = cljs.core.last.call(null,lines);
var len = (last_width - ind);
var len__$1 = (function (){var x__4295__auto__ = (0);
var y__4296__auto__ = len;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comment_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"comment","comment",532206069)));
var comment_inline_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)));
var width__$1 = ((cljs.core._EQ_.call(null,index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = (function (){var and__4210__auto__ = (!(newline_QMARK_));
if(and__4210__auto__){
var and__4210__auto____$1 = (((index === (0))) || (cljs.core.not.call(null,comment_QMARK_)));
if(and__4210__auto____$1){
var or__4212__auto__ = (index === (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto____$2 = ((multi_QMARK_)?cljs.core._EQ_.call(null,linecnt,(1)):true);
if(and__4210__auto____$2){
return ((cur_ind + len__$1) <= width__$1);
} else {
return and__4210__auto____$2;
}
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})();
var new_ind = (cljs.core.truth_((function (){var or__4212__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return comment_inline_QMARK_;
}
})())?(width__$1 + (1)):((((multi_QMARK_) && ((((linecnt > (1))) && (cljs.core.not.call(null,wrap_after_multi_QMARK_))))))?width__$1:((fit_QMARK_)?((cur_ind + len__$1) + (1)):((newline_QMARK_)?ind:((ind + len__$1) + (1))
))));
var G__38060 = cljs.core.next.call(null,cur_seq);
var G__38061 = new_ind;
var G__38062 = (index + (1));
var G__38063 = newline_QMARK_;
var G__38064 = cljs.core.concat.call(null,out,((fit_QMARK_)?(((!((index === (0)))))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(15)], null)], null),this_seq):this_seq):((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(function (){var this_seq_next = cljs.core.first.call(null,cljs.core.next.call(null,cur_seq));
var newline_QMARK___$1 = (cljs.core.truth_(this_seq_next)?cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq_next),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
if(cljs.core.truth_(newline_QMARK___$1)){
return (0);
} else {
return (new_ind - (1));
}
})()))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(21)], null)], null):((previous_newline_QMARK_)?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(16)], null)], null),this_seq):zprint.zprint.prepend_nl.call(null,options,ind,this_seq)))));
cur_seq = G__38060;
cur_ind = G__38061;
index = G__38062;
previous_newline_QMARK_ = G__38063;
out = G__38064;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Remove any [_ _ :newline] from the seq.
 */
zprint.zprint.remove_nl = (function zprint$zprint$remove_nl(coll){
return cljs.core.remove.call(null,(function (p1__38065_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,p1__38065_SHARP_),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
}),coll);
});
/**
 * Validate an options map that was returned from some internal configuration
 *   expression or configuration.  Either returns the options map or throws
 *   an error.
 */
zprint.zprint.internal_validate = (function zprint$zprint$internal_validate(options,error_str){
var errors = zprint.config.validate_options.call(null,options);
var errors__$1 = (cljs.core.truth_(errors)?["Options resulting from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str)," had these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null);
if((!(cljs.core.empty_QMARK_.call(null,errors__$1)))){
throw (new Error(errors__$1));
} else {
return options;
}
});
zprint.zprint.lazy_sexpr_seq = (function zprint$zprint$lazy_sexpr_seq(nws_seq){
if(cljs.core.seq.call(null,nws_seq)){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zfns.zsexpr.call(null,cljs.core.first.call(null,nws_seq))], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return zprint.zprint.lazy_sexpr_seq.call(null,cljs.core.rest.call(null,nws_seq));
}),null,null)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * If there are any comments at the top level of the zloc-seq, return true,
 *   else nil.
 */
zprint.zprint.comment_in_zloc_seq_QMARK_ = (function zprint$zprint$comment_in_zloc_seq_QMARK_(zloc_seq){
return cljs.core.reduce.call(null,(function (p1__38067_SHARP_,p2__38066_SHARP_){
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,p2__38066_SHARP_),new cljs.core.Keyword(null,"comment","comment",532206069))){
return cljs.core.reduced.call(null,true);
} else {
return null;
}
}),false,zloc_seq);
});
/**
 * Print basic stuff like a vector or a set or an array.  Several options 
 *   for how to print them.
 */
zprint.zprint.fzprint_vec_STAR_ = (function zprint$zprint$fzprint_vec_STAR_(caller,l_str,r_str,p__38068,ind,zloc){
var map__38069 = p__38068;
var map__38069__$1 = cljs.core.__destructure_map.call(null,map__38069);
var options = map__38069__$1;
var map__38070 = cljs.core.get.call(null,map__38069__$1,caller);
var map__38070__$1 = cljs.core.__destructure_map.call(null,map__38070);
var sort_QMARK_ = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var wrap_coll_QMARK_ = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var indent = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var option_fn = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"option-fn","option-fn",-959705456));
var wrap_QMARK_ = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK_ = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var option_fn_first = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201));
var fn_format = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784));
var rightcnt = cljs.core.get.call(null,map__38069__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var in_code_QMARK_ = cljs.core.get.call(null,map__38069__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-vec* ind:",ind,"indent:",indent,"caller:",caller);
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = binding_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),(1));
} else {
return and__4210__auto__;
}
})())){
return zprint.zprint.fzprint_binding_vec.call(null,options,ind,zloc);
} else {
var vec__38071 = zprint.zprint.get_respect_indent.call(null,options,caller,new cljs.core.Keyword(null,"vector","vector",1902966158));
var respect_nl_QMARK_ = cljs.core.nth.call(null,vec__38071,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.call(null,vec__38071,(1),null);
var indent_only_QMARK_ = cljs.core.nth.call(null,vec__38071,(2),null);
var l_str_len = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(ind + (function (){var x__4295__auto__ = (0);
var y__4296__auto__ = (l_str_len - (1));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()),zloc,r_str);
var len = zprint.zfns.zcount.call(null,zloc);
var new_options = (cljs.core.truth_(option_fn_first)?(function (){var first_sexpr = zprint.zfns.zsexpr.call(null,zprint.zfns.zfirst_no_comment.call(null,zloc));
return zprint.zprint.internal_validate.call(null,option_fn_first.call(null,options,first_sexpr),[":vector :option-fn-first called with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr)].join(''));
})():null);
var _ = (cljs.core.truth_(option_fn_first)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-vec* option-fn-first new options",new_options)):null):null);
var options__$1 = zprint.config.merge_deep.call(null,options,new_options);
var new_options__$1 = (cljs.core.truth_(option_fn)?(function (){var nws_seq = cljs.core.remove.call(null,zprint.zfns.zwhitespaceorcomment_QMARK_,zprint.zfns.zseqnws.call(null,zloc));
var nws_count = cljs.core.count.call(null,nws_seq);
var sexpr_seq = zprint.zprint.lazy_sexpr_seq.call(null,nws_seq);
return zprint.zprint.internal_validate.call(null,option_fn.call(null,options__$1,nws_count,sexpr_seq),[":vector :option-fn called with sexpr count ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nws_count)].join(''));
})():null);
var ___$1 = (cljs.core.truth_(option_fn)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-vec* option-fn new options",new_options__$1)):null):null);
var map__38074 = zprint.config.merge_deep.call(null,options__$1,new_options__$1);
var map__38074__$1 = cljs.core.__destructure_map.call(null,map__38074);
var options__$2 = map__38074__$1;
var map__38075 = cljs.core.get.call(null,map__38074__$1,caller);
var map__38075__$1 = cljs.core.__destructure_map.call(null,map__38075);
var indent_only_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842));
var sort_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var wrap_coll_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var indent__$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var respect_nl_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var respect_bl_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998));
var wrap_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK___$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var fn_format__$1 = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784));
if(cljs.core.truth_(fn_format__$1)){
return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),"[","]",cljs.core.assoc.call(null,options__$2,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),fn_format__$1),ind,zloc);
} else {
var indent__$2 = (function (){var or__4212__auto__ = indent__$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.count.call(null,l_str);
}
})();
var new_ind = (cljs.core.truth_(indent_only_QMARK___$1)?ind:(indent__$2 + ind));
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"fzprint-vec*:",zprint.zfns.zstring.call(null,zloc),"new-ind:",new_ind)):null);
var zloc_seq = (cljs.core.truth_((function (){var or__4212__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return indent_only_QMARK___$1;
}
})())?zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc):(cljs.core.truth_(respect_bl_QMARK___$1)?zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc):zprint.zfns.zmap.call(null,cljs.core.identity,zloc)
));
var zloc_seq__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = sort_QMARK___$1;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = (cljs.core.truth_(in_code_QMARK_)?sort_in_code_QMARK___$1:true);
if(cljs.core.truth_(and__4210__auto____$1)){
return ((cljs.core.not.call(null,zprint.zprint.comment_in_zloc_seq_QMARK_.call(null,zloc_seq))) && (((cljs.core.not.call(null,respect_nl_QMARK___$1)) && (((cljs.core.not.call(null,respect_bl_QMARK___$1)) && (cljs.core.not.call(null,indent_only_QMARK___$1)))))));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())?zprint.zprint.order_out.call(null,caller,options__$2,cljs.core.identity,zloc_seq):zloc_seq);
var coll_print = (((len === (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(17)], null)], null)], null):zprint.zprint.fzprint_seq.call(null,options__$2,new_ind,zloc_seq__$1));
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"fzprint-vec*: coll-print:",coll_print)):null);
var coll_print__$1 = ((cljs.core.not.call(null,zprint.zprint.contains_nil_QMARK_.call(null,coll_print)))?coll_print:null);
var one_line = (cljs.core.truth_(coll_print__$1)?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(18)], null)], null),(cljs.core.truth_((function (){var or__4212__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return indent_only_QMARK___$1;
}
}
})())?coll_print__$1:zprint.zprint.remove_nl.call(null,coll_print__$1)))):null);
var ___$4 = zprint.zprint.log_lines.call(null,options__$2,"fzprint-vec*:",new_ind,one_line);
var ___$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"fzprint-vec*: new-ind:",new_ind,"one-line:",one_line)):null);
var one_line_lines = zprint.zprint.style_lines.call(null,options__$2,new_ind,one_line);
if((len === (0))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
if(cljs.core.truth_(one_line_lines)){
if(zprint.zprint.fzfit_one_line.call(null,options__$2,one_line_lines)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line,r_str_vec);
} else {
if(cljs.core.truth_(indent_only_QMARK___$1)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.indent_zmap.call(null,caller,options__$2,ind,(ind + l_str_len),coll_print__$1,indent__$2),r_str_vec);
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = (function (){var and__4210__auto__ = cljs.core.not.call(null,wrap_coll_QMARK___$1);
if(and__4210__auto__){
return zprint.zprint.any_zcoll_QMARK_.call(null,options__$2,new_ind,zloc);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not.call(null,wrap_QMARK___$1);
}
})())){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.precede_w_nl.call(null,options__$2,new_ind,coll_print__$1,new cljs.core.Keyword(null,"no-nl-first","no-nl-first",-1507054608))),r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"fzprint-vec*: wrap coll-print:",coll_print__$1));
} else {
}

return zprint.zprint.wrap_zmap.call(null,caller,options__$2,new_ind,coll_print__$1);
})()
,r_str_vec);
}
}
}
} else {
return null;
}
}
}
}
});
zprint.zprint.fzprint_vec = (function zprint$zprint$fzprint_vec(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),"[","]",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
zprint.zprint.fzprint_array = (function zprint$zprint$fzprint_array(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"array","array",-2080713842),"[","]",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Pretty print and focus style a :set element.
 */
zprint.zprint.fzprint_set = (function zprint$zprint$fzprint_set(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"set","set",304602554),"#{","}",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Do the same as interpose, but different seps depending on pred?.
 *   If sep-nil is nil, then when pred? is false we don't interpose
 *   anything!
 */
zprint.zprint.interpose_either = (function zprint$zprint$interpose_either(sep_true,sep_nil,pred_QMARK_,coll){
var coll__$1 = coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var G__38076 = cljs.core.next.call(null,coll__$1);
var G__38077 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.call(null,out,sep_true,cljs.core.first.call(null,coll__$1)):(((((cljs.core.count.call(null,out) === (0))) || ((sep_nil == null))))?cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,coll__$1)):zprint.zprint.conj_it_BANG_.call(null,out,sep_nil,cljs.core.first.call(null,coll__$1))));
var G__38078 = pred_QMARK_.call(null,cljs.core.first.call(null,coll__$1));
coll__$1 = G__38076;
out = G__38077;
interpose_QMARK_ = G__38078;
continue;
}
break;
}
});
/**
 * Move through a sequence of style vecs and ensure that at least
 *   one newline (actually an indent) appears before each element.  If
 *   a newline in the style-vecs is where we wanted one, well and good.
 *   Comments are now not recognized as different, increasing our
 *   appreciation of diversity.  If not-first? is truthy, then don't
 *   put a newline before the first element.
 */
zprint.zprint.precede_w_nl = (function zprint$zprint$precede_w_nl(options,ind,coll,not_first_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"precede-w-nl: (count coll)",cljs.core.count.call(null,coll),"not-first?",not_first_QMARK_));
} else {
}

var coll__$1 = coll;
var ind_seq = ((cljs.core.coll_QMARK_.call(null,ind))?ind:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ind],null)));
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var added_nl_QMARK_ = not_first_QMARK_;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
var result = cljs.core.persistent_BANG_.call(null,out);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"precede-w-nl: exit:",result)):null);
var previous_element_index = (cljs.core.count.call(null,result) - (2));
var previous_type = (((!((previous_element_index < (0)))))?cljs.core.nth.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,result,previous_element_index)),(2)):null);
return result;
} else {
var vec__38091 = cljs.core.first.call(null,coll__$1);
var vec__38094 = cljs.core.nth.call(null,vec__38091,(0),null);
var s = cljs.core.nth.call(null,vec__38094,(0),null);
var color = cljs.core.nth.call(null,vec__38094,(1),null);
var what = cljs.core.nth.call(null,vec__38094,(2),null);
var element = vec__38091;
var indent = cljs.core.first.call(null,ind_seq);
var newline_QMARK_ = cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323));
var last_what = cljs.core.nth.call(null,cljs.core.last.call(null,element),(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"precede-w-nl: element:",element,"added-nl?:",added_nl_QMARK_));
} else {
}

var G__38103 = cljs.core.next.call(null,coll__$1);
var G__38104 = (function (){var temp__5751__auto__ = cljs.core.next.call(null,ind_seq);
if(temp__5751__auto__){
var next_ind = temp__5751__auto__;
return next_ind;
} else {
return ind_seq;
}
})();
var G__38105 = ((newline_QMARK_)?(function (){var next_coll = cljs.core.next.call(null,coll__$1);
if(cljs.core.empty_QMARK_.call(null,next_coll)){
return cljs.core.conj_BANG_.call(null,out,element);
} else {
var vec__38097 = cljs.core.first.call(null,next_coll);
var vec__38100 = cljs.core.nth.call(null,vec__38097,(0),null);
var _ = cljs.core.nth.call(null,vec__38100,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38100,(1),null);
var next_what = cljs.core.nth.call(null,vec__38100,(2),null);
if(cljs.core._EQ_.call(null,next_what,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",color,what], null)], null));
} else {
return cljs.core.conj_BANG_.call(null,out,element);
}
}
})():(cljs.core.truth_(added_nl_QMARK_)?cljs.core.conj_BANG_.call(null,out,element):zprint.zprint.conj_it_BANG_.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(28)], null)], null),element)));
var G__38106 = newline_QMARK_;
coll__$1 = G__38103;
ind_seq = G__38104;
out = G__38105;
added_nl_QMARK_ = G__38106;
continue;
}
break;
}
});
/**
 * Analyze a style-vec which contains only newlines, the count of newlines
 *   in the style vec.  We assume that each :newline style-vec contains one
 *   newline (i.e., it was generated by fzprint-newlines).
 */
zprint.zprint.count_newline_types = (function zprint$zprint$count_newline_types(newline_style_vec){
var count_of_types = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,(function (p1__38107_SHARP_){
return cljs.core.nth.call(null,p1__38107_SHARP_,(2));
}),newline_style_vec)));
if(((cljs.core.not_EQ_.call(null,count_of_types,(1))) || (cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,newline_style_vec),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
throw (new Error(["count-newline-types: more than one type or wrong type! count:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count_of_types)," style-vec:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(newline_style_vec)].join('')));
} else {
}

return cljs.core.count.call(null,newline_style_vec);
});
/**
 * Count the number of blanks at the right end of a string.
 */
zprint.zprint.count_right_blanks = (function zprint$zprint$count_right_blanks(s){
var i = cljs.core.count.call(null,s);
while(true){
if((i < (0))){
return cljs.core.count.call(null,s);
} else {
if(clojure.string.ends_with_QMARK_.call(null,cljs.core.subs.call(null,s,(0),i)," ")){
var G__38108 = (i - (1));
i = G__38108;
continue;
} else {
return (cljs.core.count.call(null,s) - i);
}
}
break;
}
});
/**
 * Trim only blanks off the right end of a string.
 */
zprint.zprint.trimr_blanks = (function zprint$zprint$trimr_blanks(s){
var i = cljs.core.count.call(null,s);
while(true){
if((i < (0))){
return "";
} else {
if(clojure.string.ends_with_QMARK_.call(null,cljs.core.subs.call(null,s,(0),i)," ")){
var G__38109 = (i - (1));
i = G__38109;
continue;
} else {
return cljs.core.subs.call(null,s,(0),i);
}
}
break;
}
});
/**
 * Given a count n, and style vec that ends with a newline and an associated
 *   indent of some number of spaces, return a sequence of n of those style vecs
 *   but remove spaces from all but the last of them.
 */
zprint.zprint.repeat_style_vec_nl = (function zprint$zprint$repeat_style_vec_nl(n,style_vec){
var no_space_n = (function (){var x__4295__auto__ = (n - (1));
var y__4296__auto__ = (0);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
if((no_space_n === (0))){
return style_vec;
} else {
var vec__38110 = cljs.core.last.call(null,style_vec);
var s = cljs.core.nth.call(null,vec__38110,(0),null);
var color = cljs.core.nth.call(null,vec__38110,(1),null);
var what = cljs.core.nth.call(null,vec__38110,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks.call(null,s),color,what], null);
var no_space_style_vec = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.butlast.call(null,style_vec),no_space_element));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,no_space_n,no_space_style_vec),style_vec));
}
});
/**
 * Given an element, trim the blanks out of the string.
 */
zprint.zprint.trimr_blanks_element = (function zprint$zprint$trimr_blanks_element(p__38113){
var vec__38114 = p__38113;
var s = cljs.core.nth.call(null,vec__38114,(0),null);
var color = cljs.core.nth.call(null,vec__38114,(1),null);
var what = cljs.core.nth.call(null,vec__38114,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks.call(null,s),color,what], null);
});
/**
 * Given a style-vec, trim the blanks out of each element.
 */
zprint.zprint.trimr_blanks_style_vec = (function zprint$zprint$trimr_blanks_style_vec(style_vec){
return cljs.core.mapv.call(null,zprint.zprint.trimr_blanks_element,style_vec);
});
/**
 * Given a count n, and single element from a style-vec which
 *   contains a newline and an indent of some number of spaces, return
 *   a sequence of n of those style vecs but remove spaces from all
 *   but the last of them.
 */
zprint.zprint.repeat_element_nl = (function zprint$zprint$repeat_element_nl(n,element){
var no_space_n = (function (){var x__4295__auto__ = (n - (1));
var y__4296__auto__ = (0);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
if((no_space_n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null);
} else {
var vec__38117 = element;
var s = cljs.core.nth.call(null,vec__38117,(0),null);
var color = cljs.core.nth.call(null,vec__38117,(1),null);
var what = cljs.core.nth.call(null,vec__38117,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks.call(null,s),color,what], null);
var result = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,no_space_n,no_space_element),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)));
return result;
}
});
/**
 * Given a coll of [hangflow style-vec] pairs, return the 
 *   [hangflow style-vec] pair where the style-vec is not a 
 *   :comment, :comment-inline, :newline or :indent.
 */
zprint.zprint.next_non_comment_nl = (function zprint$zprint$next_non_comment_nl(coll){
var coll__$1 = coll;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return null;
} else {
var vec__38120 = cljs.core.first.call(null,coll__$1);
var _ = cljs.core.nth.call(null,vec__38120,(0),null);
var style_vec = cljs.core.nth.call(null,vec__38120,(1),null);
var vec__38123 = cljs.core.first.call(null,style_vec);
var ___$1 = cljs.core.nth.call(null,vec__38123,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__38123,(1),null);
var what = cljs.core.nth.call(null,vec__38123,(2),null);
if(((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"comment","comment",532206069))) || (((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))) || (((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323))))))))){
var G__38126 = cljs.core.next.call(null,coll__$1);
coll__$1 = G__38126;
continue;
} else {
return cljs.core.first.call(null,coll__$1);
}
}
break;
}
});
/**
 * Do very specialized interpose, but different seps depending on pred-fn
 *   return and nl-separator?. This assumes that sep-* does one line, and
 *   sep-*-nl does two lines.
 */
zprint.zprint.interpose_either_nl_hf = (function zprint$zprint$interpose_either_nl_hf(sep_comma,sep_comma_nl,sep,sep_nl,p__38127,comma_QMARK_,coll){
var map__38128 = p__38127;
var map__38128__$1 = cljs.core.__destructure_map.call(null,map__38128);
var suboptions = map__38128__$1;
var nl_separator_QMARK_ = cljs.core.get.call(null,map__38128__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var nl_separator_flow_QMARK_ = cljs.core.get.call(null,map__38128__$1,new cljs.core.Keyword(null,"nl-separator-flow?","nl-separator-flow?",495760215));
var coll__$1 = coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var previous_needs_comma_QMARK_ = null;
var add_nl_QMARK_ = null;
var first_QMARK_ = true;
var newline_count = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.persistent_BANG_.call(null,(((newline_count === (0)))?out:zprint.zprint.conj_it_BANG_.call(null,out,zprint.zprint.repeat_element_nl.call(null,newline_count,cljs.core.first.call(null,sep))))));
} else {
var vec__38138 = cljs.core.first.call(null,coll__$1);
var hangflow = cljs.core.nth.call(null,vec__38138,(0),null);
var style_vec = cljs.core.nth.call(null,vec__38138,(1),null);
var vec__38141 = cljs.core.first.call(null,style_vec);
var _ = cljs.core.nth.call(null,vec__38141,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38141,(1),null);
var what = cljs.core.nth.call(null,vec__38141,(2),null);
if(cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__38147 = cljs.core.next.call(null,coll__$1);
var G__38148 = out;
var G__38149 = previous_needs_comma_QMARK_;
var G__38150 = add_nl_QMARK_;
var G__38151 = first_QMARK_;
var G__38152 = (newline_count + zprint.zprint.count_newline_types.call(null,style_vec));
coll__$1 = G__38147;
out = G__38148;
previous_needs_comma_QMARK_ = G__38149;
add_nl_QMARK_ = G__38150;
first_QMARK_ = G__38151;
newline_count = G__38152;
continue;
} else {
var vec__38144 = (cljs.core.truth_(previous_needs_comma_QMARK_)?(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma,(1)], null)):(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep,(1)], null)));
var interpose_style_vec = cljs.core.nth.call(null,vec__38144,(0),null);
var interpose_count = cljs.core.nth.call(null,vec__38144,(1),null);
var interpose_count__$1 = (cljs.core.truth_(first_QMARK_)?(1):interpose_count);
var addtl_nl_needed = (function (){var x__4295__auto__ = (newline_count - interpose_count__$1);
var y__4296__auto__ = (0);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var G__38153 = cljs.core.next.call(null,coll__$1);
var G__38154 = (cljs.core.truth_(first_QMARK_)?(((addtl_nl_needed === (0)))?cljs.core.conj_BANG_.call(null,out,style_vec):zprint.zprint.conj_it_BANG_.call(null,out,zprint.zprint.repeat_element_nl.call(null,addtl_nl_needed,cljs.core.first.call(null,sep)),style_vec)):(((addtl_nl_needed === (0)))?zprint.zprint.conj_it_BANG_.call(null,out,interpose_style_vec,style_vec):zprint.zprint.conj_it_BANG_.call(null,out,zprint.zprint.trimr_blanks_style_vec.call(null,interpose_style_vec),zprint.zprint.repeat_element_nl.call(null,addtl_nl_needed,cljs.core.first.call(null,sep)),style_vec)));
var G__38155 = (function (){var and__4210__auto__ = comma_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = cljs.core.not_EQ_.call(null,what,new cljs.core.Keyword(null,"comment","comment",532206069));
if(and__4210__auto____$1){
var and__4210__auto____$2 = cljs.core.not_EQ_.call(null,what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
if(and__4210__auto____$2){
return zprint.zprint.next_non_comment_nl.call(null,cljs.core.next.call(null,coll__$1));
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})();
var G__38156 = (function (){var and__4210__auto__ = nl_separator_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.call(null,hangflow,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__4210__auto__;
}
})();
var G__38157 = null;
var G__38158 = (0);
coll__$1 = G__38153;
out = G__38154;
previous_needs_comma_QMARK_ = G__38155;
add_nl_QMARK_ = G__38156;
first_QMARK_ = G__38157;
newline_count = G__38158;
continue;

}
}
break;
}
});
/**
 * Put a single or double line between pairs returned from
 *   fzprint-map-two-up.  The second argument is the map resulting
 *   from (:map options) or (:pair options) or whatever.  It should
 *   have :nl-separator? and :nl-separator-flow? in it.
 */
zprint.zprint.interpose_nl_hf = (function zprint$zprint$interpose_nl_hf(suboptions,ind,coll){
return zprint.zprint.interpose_either_nl_hf.call(null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(29)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(30)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(31)], null)], null),suboptions,null,coll);
});
zprint.zprint.fzprint_map_STAR_ = (function zprint$zprint$fzprint_map_STAR_(caller,l_str,r_str,p__38159,ind,zloc,ns){
var map__38160 = p__38159;
var map__38160__$1 = cljs.core.__destructure_map.call(null,map__38160);
var options = map__38160__$1;
var map__38161 = cljs.core.get.call(null,map__38160__$1,caller);
var map__38161__$1 = cljs.core.__destructure_map.call(null,map__38161);
var map_options = map__38161__$1;
var comma_QMARK_ = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"comma?","comma?",1532168963));
var key_ignore = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var nl_separator_QMARK_ = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var force_nl_QMARK_ = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var indent = cljs.core.get.call(null,map__38161__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var one_line_QMARK_ = cljs.core.get.call(null,map__38160__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var ztype = cljs.core.get.call(null,map__38160__$1,new cljs.core.Keyword(null,"ztype","ztype",-562179020));
var map_depth = cljs.core.get.call(null,map__38160__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var in_code_QMARK_ = cljs.core.get.call(null,map__38160__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var vec__38162 = zprint.zprint.get_respect_indent.call(null,options,caller,new cljs.core.Keyword(null,"map","map",1371690461));
var respect_nl_QMARK_ = cljs.core.nth.call(null,vec__38162,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.call(null,vec__38162,(1),null);
var indent_only_QMARK_ = cljs.core.nth.call(null,vec__38162,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map* caller:",caller));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options__$1,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,ind,zloc,r_str);
if((zprint.zfns.zcount.call(null,zloc) === (0))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_indent.call(null,caller,l_str,r_str,options__$1,ind,zloc,null,null),r_str_vec);
}
} else {
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var zloc__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.call(null,ztype,new cljs.core.Keyword(null,"sexpr","sexpr",-783344087));
if(and__4210__auto__){
var or__4212__auto__ = key_ignore;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return key_ignore_silent;
}
} else {
return and__4210__auto__;
}
})())?zprint.zprint.map_ignore.call(null,caller,options__$1,zloc):zloc);
var vec__38165 = zprint.zprint.partition_all_2_nc.call(null,zprint.zprint.no_max_length.call(null,options__$1),(cljs.core.truth_(respect_nl_QMARK_)?zprint.zfns.zseqnws_w_nl.call(null,zloc__$1):(cljs.core.truth_(respect_bl_QMARK_)?zprint.zfns.zseqnws_w_bl.call(null,zloc__$1):zprint.zfns.zseqnws.call(null,zloc__$1)
)));
var no_sort_QMARK_ = cljs.core.nth.call(null,vec__38165,(0),null);
var pair_seq = cljs.core.nth.call(null,vec__38165,(1),null);
var no_sort_QMARK___$1 = (function (){var or__4212__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = respect_nl_QMARK_;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return respect_bl_QMARK_;
}
}
})();
var vec__38168 = zprint.zfns.zlift_ns.call(null,cljs.core.assoc.call(null,map_options,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),in_code_QMARK_),pair_seq,ns);
var ns__$1 = cljs.core.nth.call(null,vec__38168,(0),null);
var lift_pair_seq = cljs.core.nth.call(null,vec__38168,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-map* zlift-ns ns:",ns__$1)):null);
var l_str__$1 = (cljs.core.truth_(ns__$1)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join(''):l_str);
var pair_seq__$1 = (function (){var or__4212__auto__ = lift_pair_seq;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return pair_seq;
}
})();
var pair_seq__$2 = (cljs.core.truth_(no_sort_QMARK___$1)?pair_seq__$1:zprint.zprint.order_out.call(null,caller,options__$1,cljs.core.first,pair_seq__$1));
var max_length = zprint.zprint.get_max_length.call(null,options__$1);
var pair_count = cljs.core.count.call(null,pair_seq__$2);
var pair_seq__$3 = (((pair_count > max_length))?cljs.core.concat.call(null,cljs.core.take.call(null,max_length,pair_seq__$2),(new cljs.core.List(null,(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null)),null,(1),null))):pair_seq__$2);
var indent__$1 = cljs.core.count.call(null,l_str__$1);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map.call(null,options__$1,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,ind,zloc__$1,r_str);
if(cljs.core.empty_QMARK_.call(null,pair_seq__$3)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-map*:",zprint.zfns.zstring.call(null,zloc__$1),"ind:",ind,"comma?",comma_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$1))):null);
var pair_print_one_line = zprint.zprint.fzprint_map_two_up.call(null,caller,(cljs.core.truth_(one_line_QMARK_)?options__$1:cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true)),(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
var pair_print_one_line__$1 = zprint.zprint.remove_hangflow.call(null,pair_print_one_line);
var pair_print_one_line__$2 = ((zprint.zprint.fzfit_one_line.call(null,options__$1,zprint.zprint.style_lines.call(null,options__$1,(indent__$1 + ind),pair_print_one_line__$1)))?pair_print_one_line__$1:null);
var one_line = (cljs.core.truth_(pair_print_one_line__$2)?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.interpose_either.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(19)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(23)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(20)], null)], null),cljs.core.constantly.call(null,comma_QMARK_),pair_print_one_line__$2)):null);
var one_line_lines = zprint.zprint.style_lines.call(null,options__$1,(indent__$1 + ind),one_line);
var one_line__$1 = ((zprint.zprint.fzfit_one_line.call(null,options__$1,one_line_lines))?one_line:null);
if(cljs.core.truth_(one_line__$1)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line__$1,r_str_vec);
} else {
if(cljs.core.not.call(null,one_line_QMARK_)){
var pair_print = zprint.zprint.fzprint_map_two_up.call(null,caller,options__$1,(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.interpose_either_nl_hf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(21)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(32)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(22)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(33)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(34)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(35)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(36)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(37)], null)], null),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options__$1),comma_QMARK_,pair_print),r_str_vec);
} else {
return null;
}
}
}
}
});
/**
 * Format a real map.
 */
zprint.zprint.fzprint_map = (function zprint$zprint$fzprint_map(options,ind,zloc){
var vec__38171 = (cljs.core.truth_(zprint.zfns.znamespacedmap_QMARK_.call(null,zloc))?(function (){var zloc_seq = zprint.zfns.zmap.call(null,cljs.core.identity,zloc);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map: zloc-seq",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)),cljs.core.second.call(null,zloc_seq)], null);
})():null);
var ns = cljs.core.nth.call(null,vec__38171,(0),null);
var lifted_map = cljs.core.nth.call(null,vec__38171,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map: ns:",ns,"indent:",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options)),"map-options:",new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options)));
} else {
}

if(cljs.core.truth_(ns)){
return zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost.call(null,options),ind,lifted_map,ns);
} else {
return zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost.call(null,options),ind,zloc,null);
}
});
/**
 * Return true if the string starts with #object[
 */
zprint.zprint.object_str_QMARK_ = (function zprint$zprint$object_str_QMARK_(s){
return cljs.core.re_find.call(null,/^#object\[/,s);
});
/**
 * Print something that looks like #object[...] in a way
 *   that will acknowledge the structure inside of the [...]
 */
zprint.zprint.fzprint_object = (function zprint$zprint$fzprint_object(var_args){
var G__38175 = arguments.length;
switch (G__38175) {
case 4:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,zloc_value){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,zprint.zfns.zobj_to_vec.call(null,zloc,zloc_value));
}));

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,zprint.zfns.zobj_to_vec.call(null,zloc));
}));

(zprint.zprint.fzprint_object.cljs$lang$maxFixedArity = 4);

/**
 * Find the hash-code identity for an object.
 */
zprint.zprint.hash_identity_str = (function zprint$zprint$hash_identity_str(obj){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,obj));
});
zprint.zprint.fzprint_atom = (function zprint$zprint$fzprint_atom(p__38177,ind,zloc){
var map__38178 = p__38177;
var map__38178__$1 = cljs.core.__destructure_map.call(null,map__38178);
var options = map__38178__$1;
var map__38179 = cljs.core.get.call(null,map__38178__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var map__38179__$1 = cljs.core.__destructure_map.call(null,map__38179);
var object_QMARK_ = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__4210__auto__ = object_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__4210__auto__;
}
})())){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc,zprint.zfns.zderef.call(null,zloc));
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var arg_1 = ["Atom@",zprint.zprint.hash_identity_str.call(null,zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-atom: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options),arg_1_indent,(indent + ind),zprint.zfns.zderef.call(null,zloc)),r_str_vec);
}
});
/**
 * Print out a future or a promise or a delay.  These can only be 
 *   sexpressions, since they don't exist in a textual representation 
 *   of code (or data for that matter).  That means that we can use 
 *   regular sexpression operations on zloc.
 */
zprint.zprint.fzprint_future_promise_delay_agent = (function zprint$zprint$fzprint_future_promise_delay_agent(options,ind,zloc){
var zloc_type = (cljs.core.truth_(zprint.zfns.zfuture_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"future","future",1877842724):(cljs.core.truth_(zprint.zfns.zpromise_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"promise","promise",1767129287):(cljs.core.truth_(zprint.zfns.zdelay_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"delay","delay",-574225219):(cljs.core.truth_(zprint.zfns.zagent_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"agent","agent",-766455027):(function(){throw (new Error("Not a future, promise, or delay:",zprint.zfns.zstring.call(null,zloc)))})()
))));
if(cljs.core.truth_((function (){var and__4210__auto__ = new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(options.call(null,zloc_type));
if(cljs.core.truth_(and__4210__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__4210__auto__;
}
})())){
if(((cljs.core._EQ_.call(null,zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027))) || (cljs.core.realized_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc,zprint.zfns.zderef.call(null,zloc));
} else {
return zprint.zprint.fzprint_object.call(null,options,ind,zloc);
}
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var type_str = (function (){var G__38180 = zloc_type;
var G__38180__$1 = (((G__38180 instanceof cljs.core.Keyword))?G__38180.fqn:null);
switch (G__38180__$1) {
case "future":
return "Future@";

break;
case "promise":
return "Promise@";

break;
case "delay":
return "Delay@";

break;
case "agent":
return "Agent@";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38180__$1)].join('')));

}
})();
var arg_1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_str),zprint.zprint.hash_identity_str.call(null,zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
var zloc_realized_QMARK_ = ((cljs.core._EQ_.call(null,zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027)))?true:cljs.core.realized_QMARK_.call(null,zloc));
var value = ((zloc_realized_QMARK_)?zprint.zfns.zderef.call(null,zloc):(function (){var G__38181 = zloc_type;
var G__38181__$1 = (((G__38181 instanceof cljs.core.Keyword))?G__38181.fqn:null);
switch (G__38181__$1) {
case "future":
return "pending";

break;
case "promise":
return "not-delivered";

break;
case "delay":
return "pending";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38181__$1)].join('')));

}
})());
var options__$1 = ((zloc_realized_QMARK_)?options:cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-fpda: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options__$1),arg_1_indent,(indent + ind),value),r_str_vec);
}
});
/**
 * Print a function object, what you get when you put a function in
 *   a collection, for instance.  This doesn't do macros, you will notice.
 *   It also can't be invoked when zloc is a zipper.
 */
zprint.zprint.fzprint_fn_obj = (function zprint$zprint$fzprint_fn_obj(p__38184,ind,zloc){
var map__38185 = p__38184;
var map__38185__$1 = cljs.core.__destructure_map.call(null,map__38185);
var options = map__38185__$1;
var map__38186 = cljs.core.get.call(null,map__38185__$1,new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936));
var map__38186__$1 = cljs.core.__destructure_map.call(null,map__38186);
var object_QMARK_ = cljs.core.get.call(null,map__38186__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__4210__auto__ = object_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__4210__auto__;
}
})())){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc);
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var arg_1_left = "Fn@";
var arg_1_right = zprint.zprint.hash_identity_str.call(null,zloc);
var arg_1_indent = ((((ind + indent) + (1)) + ((arg_1_left).length)) + ((arg_1_right).length));
var class_str = cljs.core.pr_str.call(null,cljs.core.type.call(null,zloc));
var name_js = cljs.core.str.cljs$core$IFn$_invoke$arity$1(zloc.name);
var color = (cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.re_find.call(null,/^clojure/,name_js);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.re_find.call(null,/^cljs/,name_js);
}
})())?zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)):new cljs.core.Keyword(null,"none","none",1333468478));
var name_split = clojure.string.split.call(null,name_js,/\$/);
var arg_2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,".",cljs.core.butlast.call(null,name_split)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,name_split))].join('');
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-fn-obj: arg-1:",arg_1_left,arg_1_right,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_left,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_right,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true,new cljs.core.Keyword(null,"string-color","string-color",-1853875244),color)),arg_1_indent,(indent + ind),arg_2),r_str_vec);
}
});
zprint.zprint.fzprint_ns = (function zprint$zprint$fzprint_ns(options,ind,zloc){
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var arg_1 = "Namespace";
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-ns: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options),arg_1_indent,(indent + ind),cljs.core.ns_name.call(null,zloc)),r_str_vec);
});
/**
 * Given an options map, decrement the :depth value and return the result.
 */
zprint.zprint.dec_depth = (function zprint$zprint$dec_depth(options){
if(cljs.core.truth_(options)){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})() - (1)));
} else {
return null;
}
});
zprint.zprint.fzprint_record = (function zprint$zprint$fzprint_record(p__38187,ind,zloc){
var map__38188 = p__38187;
var map__38188__$1 = cljs.core.__destructure_map.call(null,map__38188);
var options = map__38188__$1;
var map__38189 = cljs.core.get.call(null,map__38188__$1,new cljs.core.Keyword(null,"record","record",-779106859));
var map__38189__$1 = cljs.core.__destructure_map.call(null,map__38189);
var record_type_QMARK_ = cljs.core.get.call(null,map__38189__$1,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660));
var to_string_QMARK_ = cljs.core.get.call(null,map__38189__$1,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886));
if(cljs.core.truth_(to_string_QMARK_)){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,zloc.toString());
} else {
if(cljs.core.not.call(null,record_type_QMARK_)){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,zloc));
} else {
var l_str = "#";
var r_str = "";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var arg_1 = clojure.string.replace.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,zloc)),"/",".");
var arg_1__$1 = (function (){var tokens = clojure.string.split.call(null,arg_1,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.interpose.call(null,".",tokens)));
})();
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count.call(null,arg_1__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-record: arg-1:",arg_1__$1,"zstring zloc:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1__$1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"record","record",-779106859),zprint.zprint.dec_depth.call(null,options),arg_1_indent,(indent + ind),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,zloc)),r_str_vec);
}
}
});
/**
 * Print the two items in a meta node.  Different because it doesn't print
 *   a single collection, so it doesn't do any indent or rightmost.  It also
 *   uses a different approach to calling fzprint-flow-seq with the
 *   results zmap, so that it prints all of the seq, not just the rightmost.
 */
zprint.zprint.fzprint_meta = (function zprint$zprint$fzprint_meta(options,ind,zloc){
var l_str = "^";
var r_str = "";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-meta: zloc:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,(cljs.core.truth_(new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.fzprint_indent.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),l_str,"",options,ind,zloc,null,null,new cljs.core.Keyword(null,"first-indent-only?","first-indent-only?",319167353)):zprint.zprint.fzprint_flow_seq.call(null,options,cljs.core.apply.call(null,cljs.core.vector,(((l_str).length) + ind),cljs.core.repeat.call(null,(zprint.zfns.zcount.call(null,zloc) - (1)),ind)),zprint.zprint.fzprint_get_zloc_seq.call(null,new cljs.core.Keyword(null,"list","list",765357683),options,zloc))),r_str_vec);
});
/**
 * Print a reader-macro, often a reader-conditional. Adapted for differences
 *   in parsing #?@ between rewrite-clj and rewrite-cljs.  Also adapted for
 *   the rewrite-clj not parsing namespaced maps in the version presently
 *   used.
 */
zprint.zprint.fzprint_reader_macro = (function zprint$zprint$fzprint_reader_macro(options,ind,zloc){
var zstr = zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc));
var alt_at_QMARK_ = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,zstr),(2))) && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(1),(2)),"@")));
var reader_cond_QMARK_ = cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(0),(1)),"?");
var namespaced_QMARK_ = cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(0),(1)),":");
var at_QMARK_ = ((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zprint.zfns.zsecond.call(null,zloc)),new cljs.core.Keyword(null,"deref","deref",-145586795))) || (alt_at_QMARK_));
var vec__38190 = zprint.zprint.get_respect_indent.call(null,options,new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"map","map",1371690461));
var respect_nl_QMARK_ = cljs.core.nth.call(null,vec__38190,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.call(null,vec__38190,(1),null);
var indent_only_QMARK_ = cljs.core.nth.call(null,vec__38190,(2),null);
var l_str = ((((reader_cond_QMARK_) && (at_QMARK_)))?"#?@":(cljs.core.truth_((function (){var and__4210__auto__ = reader_cond_QMARK_;
if(and__4210__auto__){
return zprint.zfns.zcoll_QMARK_.call(null,zprint.zfns.zsecond.call(null,zloc));
} else {
return and__4210__auto__;
}
})())?"#?":((reader_cond_QMARK_)?(function(){throw (new Error(["Unknown reader macro: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,zloc)),"' zfirst zloc: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)))].join('')))})():((namespaced_QMARK_)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zstr)].join(''):"#"
))));
var r_str = "";
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-bug?","dbg-bug?",-315779526).cljs$core$IFn$_invoke$arity$1(options))?null:null);
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var floc = ((((at_QMARK_) && ((!(alt_at_QMARK_)))))?zprint.zfns.zfirst.call(null,zprint.zfns.zsecond.call(null,zloc)):zprint.zfns.zsecond.call(null,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-reader-macro: zloc:",zprint.zfns.zstring.call(null,zloc),"floc:",zprint.zfns.zstring.call(null,floc),"l-str:",l_str));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var l_str_io = ((reader_cond_QMARK_)?[l_str,"("].join(''):l_str);
var r_str_io = ((reader_cond_QMARK_)?")":"");
var l_str_vec_io = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str_io,zprint.zprint.zcolor_map.call(null,options,l_str_io),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec_io = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str_io);
return zprint.zprint.concat_no_nil.call(null,l_str_vec_io,((reader_cond_QMARK_)?zprint.zprint.fzprint_indent.call(null,new cljs.core.Keyword(null,"map","map",1371690461),l_str_io,r_str_io,zprint.zprint.rightmost.call(null,options),ind,floc,null,null):zprint.zprint.fzprint_indent.call(null,new cljs.core.Keyword(null,"map","map",1371690461),l_str_io,r_str_io,zprint.zprint.rightmost.call(null,options),ind,((namespaced_QMARK_)?zprint.zfns.znextnws_w_nl.call(null,zloc):zloc),null,null)),r_str_vec_io);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),((reader_cond_QMARK_)?zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),"(",")",zprint.zprint.rightmost.call(null,options),(indent + ind),floc,null):zprint.zprint.fzprint_flow_seq.call(null,options,(indent + ind),(function (){var zloc_seq = (cljs.core.truth_(respect_nl_QMARK_)?zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc):(cljs.core.truth_(respect_bl_QMARK_)?zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc):zprint.zfns.zmap.call(null,cljs.core.identity,zloc)
));
if(namespaced_QMARK_){
return cljs.core.next.call(null,zloc_seq);
} else {
return zloc_seq;
}
})())),r_str_vec);
}
});
/**
 * Given an element which contains newlines, split it up into individual
 *   newline elements.
 */
zprint.zprint.fzprint_newline = (function zprint$zprint$fzprint_newline(options,ind,zloc){
var zstr = zprint.zfns.zstring.call(null,zloc);
var vec__38193 = zprint.finish.newline_vec.call(null,zstr);
var newline_count = cljs.core.nth.call(null,vec__38193,(0),null);
var _ = cljs.core.nth.call(null,vec__38193,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-newline: zloc:",zprint.zfns.zstring.call(null,zloc),"newline-count:",newline_count,"ind:",ind));
} else {
}

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,newline_count,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323),(2)], null)));
});
zprint.zprint.prefix_tags = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Keyword(null,"deref","deref",-145586795),"@",new cljs.core.Keyword(null,"var","var",-769682797),"#'",new cljs.core.Keyword(null,"uneval","uneval",1932037707),"#_"], null);
/**
 * Change options as necessary based on prefix tag.
 */
zprint.zprint.prefix_options = (function zprint$zprint$prefix_options(options,prefix_tag){
if(cljs.core._EQ_.call(null,prefix_tag,new cljs.core.Keyword(null,"uneval","uneval",1932037707))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uneval","uneval",1932037707).cljs$core$IFn$_invoke$arity$1(options)));
} else {
if(cljs.core._EQ_.call(null,prefix_tag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"paren","paren",-294107600)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return options;

}
}
});
/**
 * Sometime we need to give a caller to a routine, and there isn't
 *   a specific caller in the configuration.  So, we will use the configuration
 *   from some other caller and make up a new one just for this situation.
 *   The key-seq is the series of keys to both look up and create.  The
 *   caller is the new caller, and the existing-caller is the one from which
 *   we we will extract the information. This returns a new options map with
 *   the new-caller in it.
 */
zprint.zprint.make_caller = (function zprint$zprint$make_caller(options,new_caller,existing_caller,key_seq){
return cljs.core.update_in.call(null,options,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_caller], null),key_seq),(function (p1__38196_SHARP_){

return cljs.core.get_in.call(null,options,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_caller], null),key_seq));
}));
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint_STAR_ = (function zprint$zprint$fzprint_STAR_(p__38197,indent,zloc){
var map__38198 = p__38197;
var map__38198__$1 = cljs.core.__destructure_map.call(null,map__38198);
var options = map__38198__$1;
var max_depth = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var fn_map = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var shift_seq = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"shift-seq","shift-seq",267527195));
var max_hang_count = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812));
var in_code_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var max_hang_depth = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220));
var next_inner = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966));
var in_hang_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var rightcnt = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var width = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var hex_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"hex?","hex?",890937870));
var dbg_print_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var string_color = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"string-color","string-color",-1853875244));
var trim_comments_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667));
var max_hang_span = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693));
var one_line_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var depth = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var string_str_QMARK_ = cljs.core.get.call(null,map__38198__$1,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352));
var avail = (width - indent);
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)));
var options__$2 = (cljs.core.truth_(next_inner)?cljs.core.dissoc.call(null,cljs.core.first.call(null,zprint.config.config_and_validate.call(null,"next-inner:",null,options__$1,next_inner)),new cljs.core.Keyword(null,"next-inner","next-inner",608504966)):options__$1);
var options__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return dbg_print_QMARK_;
}
})())?cljs.core.assoc.call(null,options__$2,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,options__$2,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),"")),(cljs.core.truth_(one_line_QMARK_)?"o":(cljs.core.truth_(in_hang_QMARK_)?"h":"."
))].join('')):options__$2);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint* **** rightcnt:",rightcnt,"depth:",depth,"in-hang?:",in_hang_QMARK_,cljs.core.pr_str.call(null,zprint.zfns.zstring.call(null,zloc))):null);
var dbg_data = cljs.core.deref.call(null,zprint.zprint.fzprint_dbg);
var dbg_focus_QMARK_ = (function (){var and__4210__auto__ = dbg_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.call(null,dbg_data,cljs.core.second.call(null,zprint.zfns.zfind_path.call(null,zloc)));
} else {
return and__4210__auto__;
}
})();
var options__$4 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.assoc.call(null,options__$3,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"on","on",173873944)):options__$3);
var ___$1 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.println.call(null,"fzprint dbg-data:",dbg_data):null);
if(cljs.core.truth_((function (){var and__4210__auto__ = zprint.zfns.zcoll_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4210__auto__)){
return (((depth >= max_depth)) || ((zprint.zprint.get_max_length.call(null,options__$4) === (0))));
} else {
return and__4210__auto__;
}
})())){
if(cljs.core._EQ_.call(null,zloc,zprint.zfns.zdotdotdot.call(null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["...",zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-depth-string","max-depth-string",-474325435).cljs$core$IFn$_invoke$arity$1(options__$4),zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.not.call(null,one_line_QMARK_)) && (((cljs.core.not.call(null,in_code_QMARK_)) && (((((depth - in_hang_QMARK_) > max_hang_span)) || (((cljs.core.not.call(null,one_line_QMARK_)) && ((((zprint.zfns.zcount.call(null,zloc) > max_hang_count)) && ((depth > max_hang_depth)))))))))));
} else {
return and__4210__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(zprint.zfns.zrecord_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_record.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_list.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_vec.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = zprint.zfns.zmap_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.zfns.znamespacedmap_QMARK_.call(null,zloc);
}
})())){
return zprint.zprint.fzprint_map.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zset_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_set.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zanonfn_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_anon_fn.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zfn_obj_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_fn_obj.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zarray_QMARK_.call(null,zloc))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"array","array",-2080713842).cljs$core$IFn$_invoke$arity$1(options__$4)))){
return zprint.zprint.fzprint_object.call(null,options__$4,indent,zloc);
} else {
return zprint.zprint.fzprint_array.call(null,options__$4,indent,zprint.zfns.zexpandarray.call(null,zloc));
}
} else {
if(cljs.core.truth_(zprint.zfns.zatom_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_atom.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zmeta_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_meta.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zprint.prefix_tags.call(null,zprint.zfns.ztag.call(null,zloc)))){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),zprint.zprint.prefix_tags.call(null,zprint.zfns.ztag.call(null,zloc)),"",zprint.zprint.make_caller.call(null,zprint.zprint.make_caller.call(null,zprint.zprint.make_caller.call(null,zprint.zprint.prefix_options.call(null,options__$4,zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842)], null)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998)], null)),indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zns_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_ns.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = zprint.zfns.zpromise_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = zprint.zfns.zfuture_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = zprint.zfns.zdelay_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return zprint.zfns.zagent_QMARK_.call(null,zloc);
}
}
}
})())){
return zprint.zprint.fzprint_future_promise_delay_agent.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zreader_macro_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_reader_macro.call(null,options__$4,indent,zloc);
} else {
if(((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323))) && ((depth > (0))))){
return zprint.zprint.fzprint_newline.call(null,options__$4,indent,zloc);
} else {
var zstr = zprint.zfns.zstring.call(null,zloc);
var overflow_in_hang_QMARK_ = (function (){var and__4210__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (((cljs.core.count.call(null,zstr) + indent) + (function (){var or__4212__auto__ = rightcnt;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()) > width);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4210__auto__ = zprint.zfns.zcomment_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [";",null], null), null),zstr));
} else {
return and__4210__auto__;
}
})())){
return zprint.zprint.fzprint_newline.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zcomment_QMARK_.call(null,zloc))){
var zcomment = (((((depth === (0))) && (cljs.core.not.call(null,trim_comments_QMARK_))))?zstr:clojure.string.trimr.call(null,zstr));
var inline_comment_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$4)))?zprint.zprint.inlinecomment_QMARK_.call(null,zloc):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint* trim-comments?:",trim_comments_QMARK_,"inline-comment-vec:",inline_comment_vec);
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$4));
if(cljs.core.truth_(and__4210__auto__)){
return overflow_in_hang_QMARK_;
} else {
return and__4210__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow comment ========");
} else {
}

return null;
} else {
if(cljs.core.truth_(inline_comment_vec)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405),cljs.core.first.call(null,inline_comment_vec),cljs.core.second.call(null,inline_comment_vec)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment","comment",532206069)], null)], null);
}
}
} else {
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"comma","comma",1699024745)], null)], null);
} else {
if(((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (clojure.string.includes_QMARK_.call(null,zstr,",")))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"comma","comma",1699024745)], null)], null);
} else {
if(cljs.core.truth_(zprint.zfns.zwhitespaceorcomment_QMARK_.call(null,zloc))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(24)], null)], null);
} else {
if(cljs.core.truth_(overflow_in_hang_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow <<<<<<<<<<");
} else {
}

return null;
} else {
if(cljs.core.truth_(zprint.zfns.zkeyword_QMARK_.call(null,zloc))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
var zloc_sexpr = zprint.zfns.zsexpr.call(null,zloc);
if(typeof zloc_sexpr === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(string_str_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zsexpr.call(null,zloc)):zprint.zfns.zstring.call(null,zloc)),(cljs.core.truth_(string_color)?string_color:zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"string","string",-1989541586))),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.showfn_QMARK_.call(null,fn_map,zprint.zfns.zsexpr.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.show_user_fn_QMARK_.call(null,options__$4,zprint.zfns.zsexpr.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"user-fn","user-fn",223976490)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(typeof zprint.zfns.zsexpr.call(null,zloc) === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(hex_QMARK_)?zprint.zfns.znumstr.call(null,zloc,hex_QMARK_,shift_seq):zstr),zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if((zprint.zfns.zsexpr.call(null,zloc) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if((zprint.zfns.zsexpr.call(null,zloc) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"nil","nil",99600501)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(zprint.zfns.zsexpr.call(null,zloc) === true){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"true","true",-1114210334)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(zprint.zfns.zsexpr.call(null,zloc) === false){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"false","false",1277713805)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.char_QMARK_.call(null,zprint.zfns.zsexpr.call(null,zloc))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"char","char",-641587586)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_((function (){var or__4212__auto__ = (function (){var c__4243__auto__ = cljs.core.type.call(null,/regex/);
var x__4244__auto__ = zprint.zfns.zsexpr.call(null,zloc);
return (x__4244__auto__ instanceof c__4243__auto__);
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.re_find.call(null,/^#\".*\"$/,zstr);
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"regex","regex",939488856)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);

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
/**
 * If this is an inline comment, returns a vector with the amount
 *   of space that was between this and the previous element and the
 *   starting column of this inline comment.  That means that if we
 *   go left, we get something other than whitespace before a newline.
 *   If we get only whitespace before a newline, then this is considered
 *   an inline comment if the comment at the end of the previous line
 *   was an inline comment and we were aligned with that comment.
 *   Assumes zloc is a comment.
 */
zprint.zprint.inlinecomment_QMARK_ = (function zprint$zprint$inlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
var passed_nl_QMARK_ = false;
while(true){
var vec__38202 = (function (){var tnloc = zprint.zfns.ztag.call(null,nloc);
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var nstr = zprint.zfns.zstring.call(null,nloc);
var trim_nstr = clojure.string.trimr.call(null,nstr);
if((((trim_nstr).length) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),(spaces + (cljs.core.count.call(null,nstr) - ((trim_nstr).length)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),spaces], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tnloc,spaces], null);
}
})();
var tnloc = cljs.core.nth.call(null,vec__38202,(0),null);
var spaces__$1 = cljs.core.nth.call(null,vec__38202,(1),null);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__38205 = zprint.zutil.left_STAR_.call(null,nloc);
var G__38206 = spaces__$1;
var G__38207 = true;
nloc = G__38205;
spaces = G__38206;
passed_nl_QMARK_ = G__38207;
continue;
} else {
if(((cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
if(cljs.core.truth_(zprint.zprint.inlinecomment_QMARK_.call(null,nloc))){
var nloc_length_before = zprint.zprint.length_before.call(null,nloc);
var zloc_length_before = zprint.zprint.length_before.call(null,zloc);
if(cljs.core._EQ_.call(null,nloc_length_before,zloc_length_before)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zloc_length_before], null);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
if(cljs.core.truth_(passed_nl_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zprint.zprint.length_before.call(null,zloc)], null);
}
} else {
var G__38208 = zprint.zutil.left_STAR_.call(null,nloc);
var G__38209 = (zprint.zutil.length.call(null,nloc) + spaces__$1);
var G__38210 = passed_nl_QMARK_;
nloc = G__38208;
spaces = G__38209;
passed_nl_QMARK_ = G__38210;
continue;

}
}
}
}
break;
}
});
/**
 * Take a string and an index, and look for the last space prior to the
 *   index. If we wanted to tie ourselves to 1.8, we could use 
 *   clojure.string/last-index-of, but we don't.  However, we use similar
 *   conventions, i.e., if no space is found, return nil, and if the index
 *   is a space return that value, and accept any from-index, including one
 *   larger than the length of the string.
 */
zprint.zprint.last_space = (function zprint$zprint$last_space(s,from_index){
var from_index__$1 = (function (){var x__4298__auto__ = (cljs.core.count.call(null,s) - (1));
var y__4299__auto__ = from_index;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
var rev_seq = cljs.core.reverse.call(null,cljs.core.take.call(null,(from_index__$1 + (1)),s));
var seq_after_space = cljs.core.take_while.call(null,(function (p1__38211_SHARP_){
return cljs.core.not_EQ_.call(null,p1__38211_SHARP_," ");
}),rev_seq);
var space_index = (from_index__$1 - cljs.core.count.call(null,seq_after_space));
if((space_index < (0))){
return null;
} else {
return space_index;
}
});
/**
 * Take a string and an index, and look for the next space *after* the
 *   index. If no space is found, return nil. Accept any from-index, 
 *   including one larger than the length of the string.
 */
zprint.zprint.next_space = (function zprint$zprint$next_space(s,from_index){
var from_index__$1 = (from_index + (1));
if((from_index__$1 < cljs.core.count.call(null,s))){
var seq_after_space = cljs.core.take_while.call(null,(function (p1__38212_SHARP_){
return cljs.core.not_EQ_.call(null,p1__38212_SHARP_," ");
}),cljs.core.drop.call(null,from_index__$1,cljs.core.seq.call(null,s)));
var space_index = (from_index__$1 + cljs.core.count.call(null,seq_after_space));
if((space_index >= cljs.core.count.call(null,s))){
return null;
} else {
return space_index;
}
} else {
return null;
}
});
/**
 * If this is a comment, and it is too long, word wrap it to the right width.
 *   Note that top level comments may well end with a newline, so remove it
 *   and reapply it at the end if that is the case.
 */
zprint.zprint.wrap_comment = (function zprint$zprint$wrap_comment(width,p__38213,start){
var vec__38214 = p__38213;
var s = cljs.core.nth.call(null,vec__38214,(0),null);
var color = cljs.core.nth.call(null,vec__38214,(1),null);
var stype = cljs.core.nth.call(null,vec__38214,(2),null);
var element = vec__38214;
if((!(((cljs.core._EQ_.call(null,stype,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,stype,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))))){
return element;
} else {
var comment_width = (width - start);
var semi_str = cljs.core.re_find.call(null,/;*/,s);
var rest_str = cljs.core.subs.call(null,s,cljs.core.count.call(null,semi_str));
var space_str = cljs.core.re_find.call(null,/ */,rest_str);
var rest_str__$1 = cljs.core.subs.call(null,rest_str,cljs.core.count.call(null,space_str));
var newline_QMARK_ = cljs.core.re_find.call(null,/\n$/,s);
var comment_width__$1 = ((comment_width - cljs.core.count.call(null,semi_str)) - cljs.core.count.call(null,space_str));
var comment_str = rest_str__$1;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,comment_str)){
if((cljs.core.count.call(null,out) === (0))){
if(cljs.core.truth_(newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(38)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null)], null);
}
} else {
return cljs.core.persistent_BANG_.call(null,(cljs.core.truth_(newline_QMARK_)?cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(39)], null)):out));
}
} else {
var last_space_index = (((((comment_str).length) <= comment_width__$1))?(((comment_str).length) - (1)):(((comment_width__$1 <= (0)))?(function (){var or__4212__auto__ = zprint.zprint.next_space.call(null,comment_str,(0));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (((comment_str).length) - (1));
}
})():(function (){var or__4212__auto__ = zprint.zprint.last_space.call(null,comment_str,comment_width__$1);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = zprint.zprint.next_space.call(null,comment_str,comment_width__$1);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (((comment_str).length) - (1));
}
}
})()));
var next_comment = clojure.string.trimr.call(null,cljs.core.subs.call(null,comment_str,(0),(last_space_index + (1))));
var G__38217 = cljs.core.subs.call(null,comment_str,(last_space_index + (1)));
var G__38218 = (((cljs.core.count.call(null,out) === (0)))?cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,stype], null)):cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,start))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(40)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)], null)));
comment_str = G__38217;
out = G__38218;
continue;
}
break;
}
}
});
/**
 * Takes the start of this vector and the vector itself.
 */
zprint.zprint.loc_vec = (function zprint$zprint$loc_vec(start,p__38219){
var vec__38220 = p__38219;
var s = cljs.core.nth.call(null,vec__38220,(0),null);
var split = zprint.zprint.split_lf.call(null,s);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,split),(1))){
return (start + cljs.core.count.call(null,s));
} else {
return cljs.core.count.call(null,cljs.core.last.call(null,split));
}
});
/**
 * Take a style-vec and produce a style-loc-vec with the starting column
 *   of each element in the style-vec. Accepts a beginning indent.
 */
zprint.zprint.style_loc_vec = (function zprint$zprint$style_loc_vec(indent,style_vec){
return cljs.core.butlast.call(null,cljs.core.reductions.call(null,zprint.zprint.loc_vec,indent,style_vec));
});
/**
 * Take a transient output vector and a vector and lift any style-vec elements
 *   out of the input vector.
 */
zprint.zprint.lift_vec = (function zprint$zprint$lift_vec(out_vec,element){
if(typeof cljs.core.first.call(null,element) === 'string'){
return cljs.core.conj.call(null,out_vec,element);
} else {
var element_vec = element;
var out = out_vec;
while(true){
if(cljs.core.not.call(null,element_vec)){
return out;
} else {
var G__38223 = cljs.core.next.call(null,element_vec);
var G__38224 = cljs.core.conj.call(null,out,cljs.core.first.call(null,element_vec));
element_vec = G__38223;
out = G__38224;
continue;
}
break;
}
}
});
/**
 * Take a style-vec [[s color type] [s color type] [[s color type]
 *   [s color type]] [s color type] ...] and lift out the inner vectors.
 */
zprint.zprint.lift_style_vec = (function zprint$zprint$lift_style_vec(style_vec){
return cljs.core.reduce.call(null,zprint.zprint.lift_vec,cljs.core.PersistentVector.EMPTY,style_vec);
});
/**
 * Take the final output style-vec, and wrap any comments which run over
 *   the width. Looking for 
 */
zprint.zprint.fzprint_wrap_comments = (function zprint$zprint$fzprint_wrap_comments(p__38225,style_vec){
var map__38226 = p__38225;
var map__38226__$1 = cljs.core.__destructure_map.call(null,map__38226);
var options = map__38226__$1;
var width = cljs.core.get.call(null,map__38226__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: indent:",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options));
} else {
}

var start_col = zprint.zprint.style_loc_vec.call(null,(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),style_vec);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: style-vec:",cljs.core.pr_str.call(null,style_vec)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: start-col:",start_col):null);
var wrap_style_vec = cljs.core.mapv.call(null,cljs.core.partial.call(null,zprint.zprint.wrap_comment,width),style_vec,start_col);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: wrap:",cljs.core.pr_str.call(null,style_vec)):null);
var out_style_vec = zprint.zprint.lift_style_vec.call(null,wrap_style_vec);
return out_style_vec;
});
/**
 * Find a the first element of this type working from the end of a 
 *   style-vec.  Return the index of the element.
 */
zprint.zprint.find_element_from_end = (function zprint$zprint$find_element_from_end(element_pred_QMARK_,style_vec){
var index = (cljs.core.count.call(null,style_vec) - (1));
while(true){
if((index < (0))){
return null;
} else {
var vec__38227 = cljs.core.nth.call(null,style_vec,index);
var _ = cljs.core.nth.call(null,vec__38227,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38227,(1),null);
var e = cljs.core.nth.call(null,vec__38227,(2),null);
if(cljs.core.truth_(element_pred_QMARK_.call(null,e))){
return index;
} else {
var G__38230 = (index - (1));
index = G__38230;
continue;
}
}
break;
}
});
/**
 * Given a style-vec, how big is it in actual characters.  This doesn't
 *   handle newlines.
 */
zprint.zprint.line_size = (function zprint$zprint$line_size(style_vec){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.loc_vec,(0)),style_vec));
});
/**
 * Given a style-vec, whose last element in a comment, find the amount
 *   of space before that comment on the line.
 */
zprint.zprint.space_before_comment = (function zprint$zprint$space_before_comment(style_vec){
var indent_index = zprint.zprint.find_element_from_end.call(null,(function (p1__38231_SHARP_){
return ((cljs.core._EQ_.call(null,p1__38231_SHARP_,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,p1__38231_SHARP_,new cljs.core.Keyword(null,"newline","newline",1790071323))));
}),style_vec);
var this_line_vec = (cljs.core.truth_(indent_index)?cljs.core.nthnext.call(null,style_vec,indent_index):style_vec);
return zprint.zprint.line_size.call(null,cljs.core.butlast.call(null,this_line_vec));
});
/**
 * Try to bring inline comments back onto the line on which they belong.
 */
zprint.zprint.fzprint_inline_comments = (function zprint$zprint$fzprint_inline_comments(p__38232,style_vec){
var map__38233 = p__38232;
var map__38233__$1 = cljs.core.__destructure_map.call(null,map__38233);
var options = map__38233__$1;
var width = cljs.core.get.call(null,map__38233__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-inline-comments:",style_vec));
} else {
}

var cvec = style_vec;
var last_out = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",null,null], null);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cvec)){
return out;
} else {
var vec__38243 = cljs.core.first.call(null,cvec);
var s = cljs.core.nth.call(null,vec__38243,(0),null);
var c = cljs.core.nth.call(null,vec__38243,(1),null);
var e = cljs.core.nth.call(null,vec__38243,(2),null);
var element = vec__38243;
var vec__38246 = cljs.core.second.call(null,cvec);
var _ = cljs.core.nth.call(null,vec__38246,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38246,(1),null);
var ne = cljs.core.nth.call(null,vec__38246,(2),null);
var nn = cljs.core.nth.call(null,vec__38246,(3),null);
var next_element = vec__38246;
var vec__38249 = last_out;
var ___$2 = cljs.core.nth.call(null,vec__38249,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__38249,(1),null);
var le = cljs.core.nth.call(null,vec__38249,(2),null);
var new_element = ((((((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"newline","newline",1790071323))))) && (cljs.core._EQ_.call(null,ne,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?(((!(((cljs.core._EQ_.call(null,le,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,le,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,nn),c,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(25)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,zprint.zprint.space_before_comment.call(null,out)))].join(''),c,new cljs.core.Keyword(null,"indent","indent",-148200125),(41)], null)):element
);
var G__38252 = cljs.core.next.call(null,cvec);
var G__38253 = new_element;
var G__38254 = cljs.core.conj.call(null,out,new_element);
cvec = G__38252;
last_out = G__38253;
out = G__38254;
continue;
}
break;
}
});
zprint.zprint.max_aligned_inline_comment_distance = (5);
/**
 * Given a style-vec, find previously aligned inline comments and
 *   output the as a sequence of vectors of comments. The previously
 *   aligned comments do not have to be consecutive, but they can't
 *   be separated by more than max-aligned-inline-comment-distance.
 *   Each comment itself is a vector: [indent-index inline-comment-index],
 *   yielding a [[[indent-index inline-comment-index] [indent-index
 *   inline-comment-index] ...] ...].  The indexes are into the
 *   style-vec.
 */
zprint.zprint.find_aligned_inline_comments = (function zprint$zprint$find_aligned_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var current_column = (0);
var distance = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cvec)){
var out__$1 = (((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out);
return out__$1;
} else {
var vec__38258 = cljs.core.first.call(null,cvec);
var s = cljs.core.nth.call(null,vec__38258,(0),null);
var c = cljs.core.nth.call(null,vec__38258,(1),null);
var e = cljs.core.nth.call(null,vec__38258,(2),null);
var spaces = cljs.core.nth.call(null,vec__38258,(3),null);
var start_column = cljs.core.nth.call(null,vec__38258,(4),null);
var element = vec__38258;
if(cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
if(cljs.core._EQ_.call(null,start_column,current_column)){
var G__38261 = cljs.core.next.call(null,cvec);
var G__38262 = (index + (1));
var G__38263 = null;
var G__38264 = (cljs.core.truth_(last_indent)?cljs.core.conj.call(null,current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function (){
throw (new Error(["find-aligned-inline-comments a:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__38265 = current_column;
var G__38266 = (0);
var G__38267 = out;
cvec = G__38261;
index = G__38262;
last_indent = G__38263;
current_seq = G__38264;
current_column = G__38265;
distance = G__38266;
out = G__38267;
continue;
} else {
var G__38268 = cljs.core.next.call(null,cvec);
var G__38269 = (index + (1));
var G__38270 = null;
var G__38271 = (cljs.core.truth_(last_indent)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)], null):(function (){
throw (new Error(["find-aligned-inline-comments b:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__38272 = start_column;
var G__38273 = (0);
var G__38274 = (((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out);
cvec = G__38268;
index = G__38269;
last_indent = G__38270;
current_seq = G__38271;
current_column = G__38272;
distance = G__38273;
out = G__38274;
continue;
}
} else {
if(((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
if((distance >= zprint.zprint.max_aligned_inline_comment_distance)){
var G__38275 = cljs.core.next.call(null,cvec);
var G__38276 = (index + (1));
var G__38277 = index;
var G__38278 = cljs.core.PersistentVector.EMPTY;
var G__38279 = (0);
var G__38280 = (0);
var G__38281 = (((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out);
cvec = G__38275;
index = G__38276;
last_indent = G__38277;
current_seq = G__38278;
current_column = G__38279;
distance = G__38280;
out = G__38281;
continue;
} else {
var G__38282 = cljs.core.next.call(null,cvec);
var G__38283 = (index + (1));
var G__38284 = index;
var G__38285 = current_seq;
var G__38286 = current_column;
var G__38287 = (distance + (1));
var G__38288 = out;
cvec = G__38282;
index = G__38283;
last_indent = G__38284;
current_seq = G__38285;
current_column = G__38286;
distance = G__38287;
out = G__38288;
continue;
}
} else {
var G__38289 = cljs.core.next.call(null,cvec);
var G__38290 = (index + (1));
var G__38291 = last_indent;
var G__38292 = current_seq;
var G__38293 = current_column;
var G__38294 = distance;
var G__38295 = out;
cvec = G__38289;
index = G__38290;
last_indent = G__38291;
current_seq = G__38292;
current_column = G__38293;
distance = G__38294;
out = G__38295;
continue;

}
}
}
break;
}
});
/**
 * Given a style-vec, find consecutive inline comments and output
 *   the as a sequence of vectors of comments.  Each comment itself
 *   is a vector: [indent-index inline-comment-index], yielding a
 *   [[[indent-index inline-comment-index] [indent-index inline-comment-index]
 *   ...] ...]
 */
zprint.zprint.find_consecutive_inline_comments = (function zprint$zprint$find_consecutive_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cvec)){
return out;
} else {
var vec__38299 = cljs.core.first.call(null,cvec);
var s = cljs.core.nth.call(null,vec__38299,(0),null);
var c = cljs.core.nth.call(null,vec__38299,(1),null);
var e = cljs.core.nth.call(null,vec__38299,(2),null);
var element = vec__38299;
if(cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
var G__38302 = cljs.core.next.call(null,cvec);
var G__38303 = (index + (1));
var G__38304 = null;
var G__38305 = (cljs.core.truth_(last_indent)?cljs.core.conj.call(null,current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function (){
throw (new Error(["find-consecutive-inline-comments:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return cljs.core.PersistentVector.EMPTY;
})()
);
var G__38306 = out;
cvec = G__38302;
index = G__38303;
last_indent = G__38304;
current_seq = G__38305;
out = G__38306;
continue;
} else {
if(((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
var G__38307 = cljs.core.next.call(null,cvec);
var G__38308 = (index + (1));
var G__38309 = index;
var G__38310 = (cljs.core.truth_(last_indent)?cljs.core.PersistentVector.EMPTY:current_seq);
var G__38311 = (cljs.core.truth_(last_indent)?(((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out):out);
cvec = G__38307;
index = G__38308;
last_indent = G__38309;
current_seq = G__38310;
out = G__38311;
continue;
} else {
var G__38312 = cljs.core.next.call(null,cvec);
var G__38313 = (index + (1));
var G__38314 = last_indent;
var G__38315 = current_seq;
var G__38316 = out;
cvec = G__38312;
index = G__38313;
last_indent = G__38314;
current_seq = G__38315;
out = G__38316;
continue;

}
}
}
break;
}
});
/**
 * Takes a single vector of [indent-index comment-index] and will show the
 *   column on the line in which the comment starts.
 */
zprint.zprint.comment_column = (function zprint$zprint$comment_column(p__38317,style_vec){
var vec__38318 = p__38317;
var indent_index = cljs.core.nth.call(null,vec__38318,(0),null);
var comment_index = cljs.core.nth.call(null,vec__38318,(1),null);
if(cljs.core.vector_QMARK_.call(null,style_vec)){
} else {
throw (new Error(["comment-column: style-vec not a vector!! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_vec)].join('')));
}

var index = indent_index;
var column = (0);
while(true){
if(cljs.core._EQ_.call(null,index,comment_index)){
return column;
} else {
var G__38321 = (index + (1));
var G__38322 = zprint.zprint.loc_vec.call(null,column,cljs.core.nth.call(null,style_vec,index));
index = G__38321;
column = G__38322;
continue;
}
break;
}
});
/**
 * Take a single inline comment vector:
 *   [indent-index inline-comment-index] 
 *   and replace it with [inline-comment-index start-column spaces-before].
 */
zprint.zprint.comment_vec_column = (function zprint$zprint$comment_vec_column(style_vec,p__38323){
var vec__38324 = p__38323;
var indent_index = cljs.core.nth.call(null,vec__38324,(0),null);
var inline_comment_index = cljs.core.nth.call(null,vec__38324,(1),null);
var comment_vec = vec__38324;
var start_column = zprint.zprint.comment_column.call(null,comment_vec,style_vec);
var spaces_before = zprint.zprint.loc_vec.call(null,(0),cljs.core.nth.call(null,style_vec,(inline_comment_index - (1))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_comment_index,start_column,spaces_before], null);
});
/**
 * Take a single vector of inline comments
 *   [[indent-index inline-comment-index] [indent-index inline-comment-index]
 * ...] and replace it with [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...]
 */
zprint.zprint.comment_vec_seq_column = (function zprint$zprint$comment_vec_seq_column(style_vec,comment_vec_seq){
return cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.comment_vec_column,style_vec),comment_vec_seq);
});
/**
 * Take a seq of all of the comments as produced by 
 *   find-consecutive-inline-comments, and turn it into:
 *   [[[inline-comment-index start-column spaces-before] [inline-comment-index
 *   start-column spaces-before]
 *   ...] ...]
 */
zprint.zprint.comment_vec_all_column = (function zprint$zprint$comment_vec_all_column(style_vec,comment_vec_all){
return cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.comment_vec_seq_column,style_vec),comment_vec_all);
});
/**
 * Given a set of inline comments:
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], determine
 * the minimum column at which they could be aligned.
 */
zprint.zprint.minimum_column = (function zprint$zprint$minimum_column(comment_vec){
var minimum_vec = cljs.core.map.call(null,(function (p1__38327_SHARP_){
return ((cljs.core.second.call(null,p1__38327_SHARP_) - cljs.core.nth.call(null,p1__38327_SHARP_,(2))) + (1));
}),comment_vec);
var minimum_col = cljs.core.apply.call(null,cljs.core.max,minimum_vec);
return minimum_col;
});
/**
 * Given a new start-column, and a vector 
 *   [[inline-comment-index start-column spaces-before]
 *   and a style-vec, return a new style-vec with the inline-comment starting
 *   at a new column.
 */
zprint.zprint.change_start_column = (function zprint$zprint$change_start_column(new_start_column,style_vec,p__38328){
var vec__38329 = p__38328;
var inline_comment_index = cljs.core.nth.call(null,vec__38329,(0),null);
var start_column = cljs.core.nth.call(null,vec__38329,(1),null);
var spaces_before = cljs.core.nth.call(null,vec__38329,(2),null);
var comment_vec = vec__38329;
var delta_spaces = (new_start_column - start_column);
var new_spaces = (spaces_before + delta_spaces);
var previous_element_index = (inline_comment_index - (1));
var vec__38332 = cljs.core.nth.call(null,style_vec,previous_element_index);
var s = cljs.core.nth.call(null,vec__38332,(0),null);
var c = cljs.core.nth.call(null,vec__38332,(1),null);
var e = cljs.core.nth.call(null,vec__38332,(2),null);
var previous_element = vec__38332;
var new_previous_element = ((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,new_spaces))].join(''),c,e], null):((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,new_spaces)),c,e,(26)], null):(function(){throw (new Error(["change-start-column: comment preceded by neither"," an :indent nor :whitespace!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')))})()
));
return cljs.core.assoc.call(null,style_vec,previous_element_index,new_previous_element);
});
/**
 * Given one set of inline comments: 
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], align them 
 * as best as possible, and return the modified style-vec.
 */
zprint.zprint.align_comment_vec = (function zprint$zprint$align_comment_vec(style_vec,comment_vec){
var minimum_col = zprint.zprint.minimum_column.call(null,comment_vec);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.zprint.change_start_column,minimum_col),style_vec,comment_vec);
});
/**
 * Given the current style-vec, align all consecutive inline comments.
 */
zprint.zprint.fzprint_align_inline_comments = (function zprint$zprint$fzprint_align_inline_comments(options,style_vec){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-align-inline-comments: style-vec:",style_vec));
} else {
}

var style = new cljs.core.Keyword(null,"inline-align-style","inline-align-style",1548722575).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"none","none",1333468478))){
return style_vec;
} else {
var comment_vec = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"aligned","aligned",-1015148916)))?zprint.zprint.find_aligned_inline_comments.call(null,style_vec):((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"consecutive","consecutive",-1628234596)))?zprint.zprint.find_consecutive_inline_comments.call(null,style_vec):null));
var comment_vec_column = zprint.zprint.comment_vec_all_column.call(null,style_vec,comment_vec);
return cljs.core.reduce.call(null,zprint.zprint.align_comment_vec,style_vec,comment_vec_column);
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint = (function zprint$zprint$fzprint(options,indent,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint: indent:",indent,"(:indent options)",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options));
} else {
}

var zloc__$1 = ((cljs.core.not.call(null,(function (){var and__4210__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438));
if(and__4210__auto__){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4210__auto__;
}
})()))?zloc:zprint.zutil.add_spec_to_docstring.call(null,zloc,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options))));
var style_vec = zprint.zprint.fzprint_STAR_.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(0)),indent,zloc__$1);
return style_vec;
});
/**
 * Count lines in a string.
 */
zprint.zprint.line_count = (function zprint$zprint$line_count(s){
return (cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n/,s)) + (1));
});
/**
 * Return a vector the lengths of lines.
 */
zprint.zprint.line_widths = (function zprint$zprint$line_widths(s){
return cljs.core.map.call(null,cljs.core.count,clojure.string.split.call(null,s,/\n/));
});
/**
 * Split a string into lines, and figure the max width.
 */
zprint.zprint.max_width = (function zprint$zprint$max_width(s){
return cljs.core.reduce.call(null,cljs.core.max,zprint.zprint.line_widths.call(null,s));
});
/**
 * Takes a string, and expands tabs inside of the string based
 *   on a tab-size argument.
 */
zprint.zprint.expand_tabs = (function zprint$zprint$expand_tabs(var_args){
var G__38336 = arguments.length;
switch (G__38336) {
case 2:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tab_size,s){
return cljs.core.apply.call(null,cljs.core.str,(function (){var char_seq = cljs.core.seq.call(null,s);
var cur_len = cljs.core.long$.call(null,(0));
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,char_seq)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var this_char = cljs.core.first.call(null,char_seq);
var tab_expansion = ((cljs.core._EQ_.call(null,this_char,"\t"))?(tab_size - cljs.core.mod.call(null,cur_len,tab_size)):null);
var G__38338 = cljs.core.rest.call(null,char_seq);
var G__38339 = ((cljs.core._EQ_.call(null,this_char,"\n"))?(0):(cur_len + cljs.core.long$.call(null,(function (){var or__4212__auto__ = tab_expansion;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})())));
var G__38340 = (cljs.core.truth_(tab_expansion)?cljs.core.apply.call(null,zprint.zprint.conj_it_BANG_,out,cljs.core.seq.call(null,zprint.zprint.blanks.call(null,tab_expansion))):cljs.core.conj_BANG_.call(null,out,this_char));
char_seq = G__38338;
cur_len = G__38339;
out = G__38340;
continue;
}
break;
}
})());
}));

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1 = (function (s){
return zprint.zprint.expand_tabs.call(null,(8),s);
}));

(zprint.zprint.expand_tabs.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zprint.zprint.r = (function (left,right,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38342,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38346 = k38342;
var G__38346__$1 = (((G__38346 instanceof cljs.core.Keyword))?G__38346.fqn:null);
switch (G__38346__$1) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38342,else__4464__auto__);

}
}));

(zprint.zprint.r.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4484__auto__,p__38347){
var vec__38348 = p__38347;
var k__4485__auto__ = cljs.core.nth.call(null,vec__38348,(0),null);
var v__4486__auto__ = cljs.core.nth.call(null,vec__38348,(1),null);
return f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__);
}),init__4483__auto__,this__4481__auto____$1);
}));

(zprint.zprint.r.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4477__auto__,pr_pair__4479__auto__,"#zprint.zprint.r{",", ","}",opts__4478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38341){
var self__ = this;
var G__38341__$1 = this;
return (new cljs.core.RecordIter((0),G__38341__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(zprint.zprint.r.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(zprint.zprint.r.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1384233907 ^ cljs.core.hash_unordered_coll.call(null,coll__4458__auto__));
}).call(null,this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(zprint.zprint.r.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38343,other38344){
var self__ = this;
var this38343__$1 = this;
return (((!((other38344 == null)))) && ((((this38343__$1.constructor === other38344.constructor)) && (((cljs.core._EQ_.call(null,this38343__$1.left,other38344.left)) && (((cljs.core._EQ_.call(null,this38343__$1.right,other38344.right)) && (cljs.core._EQ_.call(null,this38343__$1.__extmap,other38344.__extmap)))))))));
}));

(zprint.zprint.r.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4472__auto__)),null));
}
}));

(zprint.zprint.r.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38342){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38351 = k38342;
var G__38351__$1 = (((G__38351 instanceof cljs.core.Keyword))?G__38351.fqn:null);
switch (G__38351__$1) {
case "left":
case "right":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k38342);

}
}));

(zprint.zprint.r.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38341){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38352 = cljs.core.keyword_identical_QMARK_;
var expr__38353 = k__4470__auto__;
if(cljs.core.truth_(pred__38352.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__38353))){
return (new zprint.zprint.r(G__38341,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38352.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__38353))){
return (new zprint.zprint.r(self__.left,G__38341,self__.__meta,self__.__extmap,null));
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4470__auto__,G__38341),null));
}
}
}));

(zprint.zprint.r.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38341){
var self__ = this;
var this__4460__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,G__38341,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4467__auto__,(0)),cljs.core._nth.call(null,entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(zprint.zprint.r.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
}));

(zprint.zprint.r.cljs$lang$type = true);

(zprint.zprint.r.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"zprint.zprint/r",null,(1),null));
}));

(zprint.zprint.r.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write.call(null,writer__4506__auto__,"zprint.zprint/r");
}));

/**
 * Positional factory function for zprint.zprint/r.
 */
zprint.zprint.__GT_r = (function zprint$zprint$__GT_r(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

/**
 * Factory function for zprint.zprint/r, taking a map of keywords to field values.
 */
zprint.zprint.map__GT_r = (function zprint$zprint$map__GT_r(G__38345){
var extmap__4501__auto__ = (function (){var G__38355 = cljs.core.dissoc.call(null,G__38345,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.record_QMARK_.call(null,G__38345)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__38355);
} else {
return G__38355;
}
})();
return (new zprint.zprint.r(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__38345),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__38345),null,cljs.core.not_empty.call(null,extmap__4501__auto__),null));
});

zprint.zprint.make_record = (function zprint$zprint$make_record(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

//# sourceMappingURL=zprint.js.map
