// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('zprint.finish');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.ansi');
goog.require('zprint.focus');
zprint.finish.no_style_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__37518_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__37518_SHARP_,new cljs.core.Keyword(null,"none","none",1333468478))){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reverse","reverse",-888455266)], null),p1__37518_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reverse","reverse",-888455266)], null);
}
}),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.identity,new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.identity], null);
/**
 * Is n within the closed range of low to high?
 */
zprint.finish.within_QMARK_ = (function zprint$finish$within_QMARK_(n,p__37519){
var vec__37520 = p__37519;
var low = cljs.core.nth.call(null,vec__37520,(0),null);
var high = cljs.core.nth.call(null,vec__37520,(1),null);
return (((n >= low)) && ((n <= high)));
});
/**
 * Is n within any of the the closed range of low to high?
 */
zprint.finish.within_vec_QMARK_ = (function zprint$finish$within_vec_QMARK_(n,low_high_vec){
return cljs.core.some.call(null,cljs.core.partial.call(null,zprint.finish.within_QMARK_,n),low_high_vec);
});
/**
 * Ignore any foreground/background designation, and use the
 *   focus and the color to figure out a style.  Intimately 
 *   associated with build-styles.
 *   You don't have to have a color, but you do need a ground.
 *   If the ground is :c, it is used, otherwise the ground is
 *   determined from the focus.  In focus gets :f, otherwise :b.
 *   If you don't have a color, the style you get
 *   is the same as the key for the ground you get from the
 *   focus.  If you don't have a focus, you get the background.
 */
zprint.finish.ground_color_to_style = (function zprint$finish$ground_color_to_style(p__37523,s,color,element,idx){
var map__37524 = p__37523;
var map__37524__$1 = cljs.core.__destructure_map.call(null,map__37524);
var style_map = cljs.core.get.call(null,map__37524__$1,new cljs.core.Keyword(null,"style-map","style-map",1488693527));
var focus = cljs.core.get.call(null,map__37524__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var select = cljs.core.get.call(null,map__37524__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var output_QMARK_ = (cljs.core.truth_(select)?zprint.finish.within_vec_QMARK_.call(null,idx,select):true);
if(cljs.core.truth_(output_QMARK_)){
return style_map.call(null,((cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"cursor-element","cursor-element",-616791907)))?(function (){
cljs.core.println.call(null,"cursor-element:",s);

return new cljs.core.Keyword(null,"c","c",-1763192079);
})()
:(cljs.core.truth_((function (){var and__4210__auto__ = focus;
if(cljs.core.truth_(and__4210__auto__)){
return ((zprint.finish.within_QMARK_.call(null,idx,focus)) && (cljs.core.not_EQ_.call(null,element,new cljs.core.Keyword(null,"indent","indent",-148200125))));
} else {
return and__4210__auto__;
}
})())?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)))).call(null,(function (){var or__4212__auto__ = color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
})());
} else {
return null;
}
});
/**
 * Given [string :style <start>] turn it into
 *   [string :style <start> <length>]
 */
zprint.finish.add_length = (function zprint$finish$add_length(p__37525){
var vec__37526 = p__37525;
var s = cljs.core.nth.call(null,vec__37526,(0),null);
var style = cljs.core.nth.call(null,vec__37526,(1),null);
var start = cljs.core.nth.call(null,vec__37526,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,style,start,cljs.core.count.call(null,s)], null);
});
/**
 * Take an index and a [string :color element] and produce a
 *   [string :style element] with the correct elements (i.e., the
 *   elements with the correct idx) having a different 
 *   background for focus output. The ctx is a map which
 *   must have a :style-map and may have a :focus.  The
 *   :focus is a two element vector of start and end elements
 *   which are in focus.
 */
zprint.finish.gc_vec_to_style_vec = (function zprint$finish$gc_vec_to_style_vec(ctx,idx,p__37529){
var vec__37530 = p__37529;
var s = cljs.core.nth.call(null,vec__37530,(0),null);
var keyword_color = cljs.core.nth.call(null,vec__37530,(1),null);
var element = cljs.core.nth.call(null,vec__37530,(2),null);
var style = zprint.finish.ground_color_to_style.call(null,ctx,s,keyword_color,element,idx);
if(cljs.core.truth_(style)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,((cljs.core.not_EQ_.call(null,style,new cljs.core.Keyword(null,"none","none",1333468478)))?style:null),element], null);
} else {
return null;
}
});
/**
 * Take a vector of any length, and trim it to be
 *   only n elements in length.
 */
zprint.finish.trim_vec = (function zprint$finish$trim_vec(n,v){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n,v));
});
/**
 * Take an ssv element which is presumably an indent, and do 1/2
 *   of it.  If the argument is nil, do a newline with no indent.
 */
zprint.finish.elide_indent = (function zprint$finish$elide_indent(ssv_element){
if(cljs.core.truth_(ssv_element)){
if(cljs.core._EQ_.call(null,"\n",clojure.string.replace.call(null,cljs.core.first.call(null,ssv_element)," ",""))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,"\n",cljs.core.repeat.call(null,((cljs.core.count.call(null,cljs.core.first.call(null,ssv_element)) - (1)) / (1))," ")),new cljs.core.Keyword(null,"none","none",1333468478)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478)], null);
}
});
/**
 * Replace all sequences of nil in the sequence with elide
 */
zprint.finish.replace_nil_seq = (function zprint$finish$replace_nil_seq(ctx,ssv_in,elide){
var last_element = new cljs.core.Keyword(null,"last-element","last-element",-1161021771).cljs$core$IFn$_invoke$arity$1(ctx);
var elide__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,elide),cljs.core.second.call(null,last_element),cljs.core.nth.call(null,last_element,(2))], null);
var ssv = ssv_in;
var doing_nil_QMARK_ = false;
var last_elide = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,ssv)){
if(doing_nil_QMARK_){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,out,zprint.finish.gc_vec_to_style_vec.call(null,ctx,(0),(function (){var or__4212__auto__ = last_elide;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zprint.finish.elide_indent.call(null,null);
}
})())),zprint.finish.gc_vec_to_style_vec.call(null,ctx,(0),elide__$1)),zprint.finish.gc_vec_to_style_vec.call(null,ctx,(0),new cljs.core.Keyword(null,"last-element","last-element",-1161021771).cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
return out;
}
} else {
var this_ssv = cljs.core.first.call(null,ssv);
var this_elide = ((((doing_nil_QMARK_) && ((!((this_ssv == null))))))?zprint.finish.elide_indent.call(null,this_ssv):null);
var G__37533 = cljs.core.next.call(null,ssv);
var G__37534 = (this_ssv == null);
var G__37535 = (cljs.core.truth_(this_elide)?this_elide:last_elide);
var G__37536 = ((((doing_nil_QMARK_) && ((this_ssv == null))))?out:((((doing_nil_QMARK_) && ((!((this_ssv == null))))))?cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,out,zprint.finish.gc_vec_to_style_vec.call(null,ctx,(0),this_elide)),zprint.finish.gc_vec_to_style_vec.call(null,ctx,(0),elide__$1)),this_ssv):(((this_ssv == null))?out:cljs.core.conj.call(null,out,this_ssv)
)));
ssv = G__37533;
doing_nil_QMARK_ = G__37534;
last_elide = G__37535;
out = G__37536;
continue;
}
break;
}
});
/**
 * Given a cvec, generate an index vector which can be input to map
 *   and will make map work like map-indexed -- unless there are
 *   :comment-wrap elements, in which case the :comment-wrap element
 *   will have the same element idx as the previous :comment element.
 */
zprint.finish.index_vec = (function zprint$finish$index_vec(cvec){
var remaining_cvec = cvec;
var idx = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,remaining_cvec)){
return out;
} else {
var vec__37540 = cljs.core.first.call(null,remaining_cvec);
var _ = cljs.core.nth.call(null,vec__37540,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37540,(1),null);
var element_type = cljs.core.nth.call(null,vec__37540,(2),null);
var new_idx = ((cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,remaining_cvec),(2)),new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)))?idx:(idx + (1)));
var G__37543 = cljs.core.next.call(null,remaining_cvec);
var G__37544 = new_idx;
var G__37545 = cljs.core.conj.call(null,out,new_idx);
remaining_cvec = G__37543;
idx = G__37544;
out = G__37545;
continue;
}
break;
}
});
/**
 * Take a [[string :color <anything>] 
 *         [string :color <anything>] ...] input.
 *   The focus is a vector of [start-focus end-focus] which are the 
 *   inclusive values for the focus.  The end is inclusive because it 
 *   gets a bit dicey if it was 'beyond', since how much beyond would 
 *   be interesting given the amount of whitespace in the input.
 *   Not clear at this point just what the counts in the focus-vec count,
 *   possibly things with <anything> == :element, possibly just any
 *   [string color <anything>] vector.
 *   From this, build of: [[string :style] [string :style] ...], where
 *   :style might be a color, like :blue or :none, or it might be a 
 *   java-text-pane style (which would have a color encoded in it).  This
 *   is based on the :style-map in the ctx map. Note that this :style-map
 *   doesn't have any relation to the :style-map in the options map.
 */
zprint.finish.cvec_to_style_vec = (function zprint$finish$cvec_to_style_vec(var_args){
var G__37547 = arguments.length;
switch (G__37547) {
case 4:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4 = (function (ctx,cvec,focus_vec,select_vec){
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"last-element","last-element",-1161021771),cljs.core.last.call(null,cvec));
var str_style_vec_w_nil = cljs.core.map_indexed.call(null,cljs.core.partial.call(null,zprint.finish.gc_vec_to_style_vec,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"focus","focus",234677911),focus_vec,new cljs.core.Keyword(null,"select","select",1147833503),select_vec)),cvec);
var count_w_nil = cljs.core.count.call(null,str_style_vec_w_nil);
var str_style_vec = cljs.core.remove.call(null,cljs.core.nil_QMARK_,str_style_vec_w_nil);
var elide_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(ctx__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(ctx__$1),new cljs.core.Keyword(null,"none","none",1333468478)], null):null);
var str_style_vec__$1 = ((cljs.core._EQ_.call(null,count_w_nil,cljs.core.count.call(null,str_style_vec)))?str_style_vec:(cljs.core.truth_(elide_vec)?zprint.finish.replace_nil_seq.call(null,ctx__$1,str_style_vec_w_nil,elide_vec):str_style_vec));
return str_style_vec__$1;
}));

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$2 = (function (ctx,cvec){
return zprint.finish.cvec_to_style_vec.call(null,ctx,cvec,null);
}));

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3 = (function (ctx,cvec,focus_vec){
return zprint.finish.cvec_to_style_vec.call(null,ctx,cvec,focus_vec,null);
}));

(zprint.finish.cvec_to_style_vec.cljs$lang$maxFixedArity = 4);

/**
 * Take a [[string :style] [string :style] ...] vector and
 *   build a list of: [[string :style <start> <length>] 
 *                  [string :style <start> <length>]...]
 *   from it.  This will compress strings which have the same style.
 */
zprint.finish.compress_style = (function zprint$finish$compress_style(var_args){
var G__37550 = arguments.length;
switch (G__37550) {
case 2:
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2 = (function (str_style_vec,initial_pos){
var ss_vec = str_style_vec;
var current = null;
var pos = initial_pos;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var ss = cljs.core.first.call(null,ss_vec);
if(cljs.core.not.call(null,ss)){
return cljs.core.conj.call(null,out,zprint.finish.add_length.call(null,current));
} else {
var same_style_QMARK_ = cljs.core._EQ_.call(null,cljs.core.second.call(null,current),cljs.core.second.call(null,ss));
var G__37552 = cljs.core.next.call(null,ss_vec);
var G__37553 = ((same_style_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,current)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ss))].join(''),cljs.core.second.call(null,current),cljs.core.nth.call(null,current,(2))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,ss),cljs.core.second.call(null,ss),pos], null));
var G__37554 = (pos + cljs.core.count.call(null,cljs.core.first.call(null,ss)));
var G__37555 = ((((same_style_QMARK_) || (cljs.core._EQ_.call(null,initial_pos,pos))))?out:cljs.core.conj.call(null,out,zprint.finish.add_length.call(null,current)));
ss_vec = G__37552;
current = G__37553;
pos = G__37554;
out = G__37555;
continue;
}
break;
}
}));

(zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$1 = (function (str_style_vec){
return zprint.finish.compress_style.call(null,str_style_vec,(0));
}));

(zprint.finish.compress_style.cljs$lang$maxFixedArity = 2);

/**
 * Take a [[string :color <anything>] 
 *         [string :color <anything>] ...] as input.
 *   and a focus-vec and, possibly, a non-empty cursor-vec.  If
 *   there is a cursor-vec, replace the focus-vec items with a cursor
 *   vec and return a new focus-vec and gcw-vec as [focus-vec gcw-vec], 
 *   else just return with no changes
 */
zprint.finish.replace_focus_w_cursor = (function zprint$finish$replace_focus_w_cursor(gcw_vec,p__37556,cursor_vec){
var vec__37557 = p__37556;
var focus_start = cljs.core.nth.call(null,vec__37557,(0),null);
var focus_end = cljs.core.nth.call(null,vec__37557,(1),null);
var focus_vec = vec__37557;
if(cljs.core.empty_QMARK_.call(null,cursor_vec)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [focus_vec,gcw_vec], null);
} else {
var vec__37560 = cljs.core.split_at.call(null,focus_start,gcw_vec);
var front = cljs.core.nth.call(null,vec__37560,(0),null);
var back = cljs.core.nth.call(null,vec__37560,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [focus_start,(focus_start + (cljs.core.count.call(null,cursor_vec) - (1)))], null),cljs.core.concat.call(null,front,cursor_vec,cljs.core.drop.call(null,((focus_end - focus_start) + (1)),back))], null);
}
});
/**
 * Turn a [string :color] into an ansi colored string.
 */
zprint.finish.color_style = (function zprint$finish$color_style(p__37563){
var vec__37564 = p__37563;
var s = cljs.core.nth.call(null,vec__37564,(0),null);
var color = cljs.core.nth.call(null,vec__37564,(1),null);
if((color == null)){
return s;
} else {
if(cljs.core.coll_QMARK_.call(null,color)){
return cljs.core.apply.call(null,zprint.ansi.color_str,s,color);
} else {
return zprint.ansi.color_str.call(null,s,color);
}
}
});
/**
 * Use output from compress-style -- but just the [string :style] part,
 *   which since we used identity as the color map, should be just
 *   [string :color].  Produce a single string with ansi escape sequences embedded
 *   in it.
 */
zprint.finish.color_comp_vec = (function zprint$finish$color_comp_vec(comp_vec){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapv.call(null,zprint.finish.color_style,comp_vec));
});
/**
 * Ensure one number is above a certain value.
 */
zprint.finish.floor = (function zprint$finish$floor(f,n){
if((n >= f)){
return n;
} else {
return f;
}
});
zprint.finish.fzprint_cursor = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default-cursor",(0)], null);
/**
 * Take a [<string> cursor-number] pair and produce the style-vec
 *   that will display it. Allow for existing characters.
 *   This is a style-vec that map-style can use, i.e.,
 *   [[string <start> <length>] ...]
 */
zprint.finish.cursor_style = (function zprint$finish$cursor_style(var_args){
var G__37569 = arguments.length;
switch (G__37569) {
case 2:
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2 = (function (p__37570,existing_count){
var vec__37571 = p__37570;
var s = cljs.core.nth.call(null,vec__37571,(0),null);
var cursor = cljs.core.nth.call(null,vec__37571,(1),null);
cljs.core.prn.call(null,"cursor-style: s:",s,",cursor:",cursor);

if(cljs.core.truth_(cursor)){
var s__$1 = (((cursor >= cljs.core.count.call(null,s)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''):s);
var len = cljs.core.count.call(null,s__$1);
var cursor__$1 = (function (){var x__4298__auto__ = zprint.finish.floor.call(null,(0),(len - (1)));
var y__4299__auto__ = cursor;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return cljs.core.filterv.call(null,(function (p1__37567_SHARP_){
return (!(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,p1__37567_SHARP_))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(0),cursor__$1),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,s__$1,cursor__$1)),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"cursor-element","cursor-element",-616791907)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(cursor__$1 + (1)),len),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
}
}));

(zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$1 = (function (str_cursor){
return zprint.finish.cursor_style.call(null,str_cursor,(0));
}));

(zprint.finish.cursor_style.cljs$lang$maxFixedArity = 2);

/**
 * Find out how many newlines are in a string, and where they appear.
 *   Returns either nil for no newlines, or a vector [<count> #{:b :m :e}]
 *   for beginning, middle, or end (or all three).
 */
zprint.finish.newline_vec = (function zprint$finish$newline_vec(s){
var nl_split = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count.call(null,nl_split) - (1));
if((!((nl_num === (0))))){
var where = ((cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,nl_split)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),null], null), null):cljs.core.PersistentHashSet.EMPTY);
var where__$1 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,nl_split)," "))?cljs.core.conj.call(null,where,new cljs.core.Keyword(null,"e","e",1381269198)):where);
var where__$2 = (((nl_num > cljs.core.count.call(null,where__$1)))?cljs.core.conj.call(null,where__$1,new cljs.core.Keyword(null,"m","m",1632677161)):where__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl_num,where__$2], null);
} else {
return null;
}
});
/**
 * Return a vector containing vectors each with the cvec elements 
 *   for the start and end of each line.
 */
zprint.finish.cvec_lines = (function zprint$finish$cvec_lines(cvec){
var cvec_nl = cljs.core.map.call(null,cljs.core.comp.call(null,zprint.finish.newline_vec,cljs.core.first),cvec);
var idx = (0);
var start = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,cvec_nl)){
return cljs.core.conj.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null));
} else {
var vec__37578 = cljs.core.first.call(null,cvec_nl);
var n = cljs.core.nth.call(null,vec__37578,(0),null);
var where = cljs.core.nth.call(null,vec__37578,(1),null);
var cvec_element = vec__37578;
if((cvec_element == null)){
var G__37581 = cljs.core.next.call(null,cvec_nl);
var G__37582 = (idx + (1));
var G__37583 = start;
var G__37584 = out;
cvec_nl = G__37581;
idx = G__37582;
start = G__37583;
out = G__37584;
continue;
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.call(null,n,(1));
if(and__4210__auto__){
return new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(where);
} else {
return and__4210__auto__;
}
})())){
var G__37585 = cljs.core.next.call(null,cvec_nl);
var G__37586 = (idx + (1));
var G__37587 = idx;
var G__37588 = cljs.core.conj.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null));
cvec_nl = G__37585;
idx = G__37586;
start = G__37587;
out = G__37588;
continue;
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.call(null,n,(1));
if(and__4210__auto__){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(where);
} else {
return and__4210__auto__;
}
})())){
var G__37589 = cljs.core.next.call(null,cvec_nl);
var G__37590 = (idx + (1));
var G__37591 = (idx + (1));
var G__37592 = cljs.core.conj.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,idx], null));
cvec_nl = G__37589;
idx = G__37590;
start = G__37591;
out = G__37592;
continue;
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = (n > (1));
if(and__4210__auto__){
var and__4210__auto____$1 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(and__4210__auto____$1)){
return new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(where);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
var G__37593 = cljs.core.next.call(null,cvec_nl);
var G__37594 = (idx + (1));
var G__37595 = idx;
var G__37596 = cljs.core.apply.call(null,cljs.core.conj,cljs.core.conj.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null)),cljs.core.repeat.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,idx], null)));
cvec_nl = G__37593;
idx = G__37594;
start = G__37595;
out = G__37596;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(where))){
var G__37597 = cljs.core.next.call(null,cvec_nl);
var G__37598 = (idx + (1));
var G__37599 = start;
var G__37600 = cljs.core.apply.call(null,cljs.core.conj,out,cljs.core.repeat.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,idx], null)));
cvec_nl = G__37597;
idx = G__37598;
start = G__37599;
out = G__37600;
continue;
} else {
return null;
}
}
}
}
}
}
break;
}
});
/**
 * Given a cvec index, return the line that it is in.
 */
zprint.finish.find_line = (function zprint$finish$find_line(lines,idx){
return cljs.core.reduce.call(null,(function (p1__37602_SHARP_,p2__37601_SHARP_){
if(zprint.finish.within_QMARK_.call(null,idx,p2__37601_SHARP_)){
return cljs.core.reduced.call(null,p1__37602_SHARP_);
} else {
return (p1__37602_SHARP_ + (1));
}
}),(0),lines);
});
/**
 * Given a cvec and a focus-vec, and the number of line before and after
 *   the focus, output a vector of vectors of cvec indicies that cover the 
 *   desired lines. [[start end] [start end] ...]
 */
zprint.finish.surround_focus = (function zprint$finish$surround_focus(lines_to_cvec,p__37603,p__37604){
var vec__37605 = p__37603;
var focus_begin = cljs.core.nth.call(null,vec__37605,(0),null);
var focus_end = cljs.core.nth.call(null,vec__37605,(1),null);
var vec__37608 = p__37604;
var before = cljs.core.nth.call(null,vec__37608,(0),null);
var after = cljs.core.nth.call(null,vec__37608,(1),null);
var line_count = cljs.core.count.call(null,lines_to_cvec);
var focus_begin_line = zprint.finish.find_line.call(null,lines_to_cvec,focus_begin);
var focus_end_line = zprint.finish.find_line.call(null,lines_to_cvec,focus_end);
var before_line = (focus_begin_line - before);
var before_line__$1 = (((before_line > (0)))?before_line:(0));
var after_line = (focus_end_line + after);
var after_line__$1 = (((after_line >= line_count))?(line_count - (1)):after_line);
var surround_vec = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.nth.call(null,lines_to_cvec,before_line__$1)),cljs.core.second.call(null,cljs.core.nth.call(null,lines_to_cvec,after_line__$1))], null);
return surround_vec;
});
/**
 * If given a single integer, return the range from lines.  If given
 *   a range of lines, return the beginning of the first line and the end
 *   of the last line.
 */
zprint.finish.find_range = (function zprint$finish$find_range(lines,line_selector){
if(typeof line_selector === 'number'){
return cljs.core.nth.call(null,lines,line_selector);
} else {
if(cljs.core.vector_QMARK_.call(null,line_selector)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.nth.call(null,lines,cljs.core.first.call(null,line_selector))),cljs.core.second.call(null,cljs.core.nth.call(null,lines,cljs.core.second.call(null,line_selector)))], null);
} else {
throw (new Error(["Line selector '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_selector),"' must be a number or a vector!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_selector)].join('')));

}
}
});
/**
 * line-vec is a vector of individual lines, or two-vecs of
 *   line ranges: [1 2 [3-5] 8 9]. Returns a vector of cvec element
 *   ranges [[0 20] [45-70] ...].  lines is the return from cvec-lines,
 *   which maps lines onto cvec ranges.
 */
zprint.finish.select_lines = (function zprint$finish$select_lines(lines_to_cvec,line_vec){
return cljs.core.map.call(null,cljs.core.partial.call(null,zprint.finish.find_range,lines_to_cvec),line_vec);
});
/**
 * Take the current cvec and any focus-vec and the options map,
 *   and figure out a set of cvecs to use.  Don't generate lines
 *   array unless we need to.
 */
zprint.finish.handle_lines = (function zprint$finish$handle_lines(p__37612,cvec,focus_vec){
var map__37613 = p__37612;
var map__37613__$1 = cljs.core.__destructure_map.call(null,map__37613);
var options = map__37613__$1;
var map__37614 = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var map__37614__$1 = cljs.core.__destructure_map.call(null,map__37614);
var focus = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var lines = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var paths = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
if(cljs.core.truth_((function (){var or__4212__auto__ = lines;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = paths;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return new cljs.core.Keyword(null,"surround","surround",2016177296).cljs$core$IFn$_invoke$arity$1(focus);
}
}
})())){
var lines_to_cvec = zprint.finish.cvec_lines.call(null,cvec);
var surround = new cljs.core.Keyword(null,"surround","surround",2016177296).cljs$core$IFn$_invoke$arity$1(focus);
var cvec_ranges = (cljs.core.truth_(lines)?zprint.finish.select_lines.call(null,lines_to_cvec,lines):cljs.core.PersistentVector.EMPTY);
var cvec_ranges__$1 = (cljs.core.truth_(surround)?cljs.core.conj.call(null,cvec_ranges,zprint.finish.surround_focus.call(null,lines_to_cvec,focus_vec,surround)):cvec_ranges);
var path_vecs = (cljs.core.truth_(paths)?cljs.core.map.call(null,cljs.core.partial.call(null,zprint.focus.range_ssv,cvec),paths):null);
var path_vecs__$1 = cljs.core.map.call(null,(function (p1__37611_SHARP_){
return zprint.finish.surround_focus.call(null,lines_to_cvec,p1__37611_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}),path_vecs);
var cvec_ranges__$2 = (cljs.core.truth_(path_vecs__$1)?cljs.core.concat.call(null,cvec_ranges__$1,path_vecs__$1):cvec_ranges__$1);
if(cljs.core.empty_QMARK_.call(null,cvec_ranges__$2)){
return null;
} else {
return cvec_ranges__$2;
}
} else {
return null;
}
});

//# sourceMappingURL=finish.js.map
