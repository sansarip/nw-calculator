// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('react');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26748__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26745 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26746 = cljs.core.seq.call(null,vec__26745);
var first__26747 = cljs.core.first.call(null,seq__26746);
var seq__26746__$1 = cljs.core.next.call(null,seq__26746);
var tag = first__26747;
var body = seq__26746__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26749__i = 0, G__26749__a = new Array(arguments.length -  0);
while (G__26749__i < G__26749__a.length) {G__26749__a[G__26749__i] = arguments[G__26749__i + 0]; ++G__26749__i;}
  args = new cljs.core.IndexedSeq(G__26749__a,0,null);
} 
return G__26748__delegate.call(this,args);};
G__26748.cljs$lang$maxFixedArity = 0;
G__26748.cljs$lang$applyTo = (function (arglist__26750){
var args = cljs.core.seq(arglist__26750);
return G__26748__delegate(args);
});
G__26748.cljs$core$IFn$_invoke$arity$variadic = G__26748__delegate;
return G__26748;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4611__auto__ = (function sablono$core$update_arglists_$_iter__26751(s__26752){
return (new cljs.core.LazySeq(null,(function (){
var s__26752__$1 = s__26752;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__26752__$1);
if(temp__5753__auto__){
var s__26752__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26752__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__26752__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__26754 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__26753 = (0);
while(true){
if((i__26753 < size__4610__auto__)){
var args = cljs.core._nth.call(null,c__4609__auto__,i__26753);
cljs.core.chunk_append.call(null,b__26754,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26755 = (i__26753 + (1));
i__26753 = G__26755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26754),sablono$core$update_arglists_$_iter__26751.call(null,cljs.core.chunk_rest.call(null,s__26752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26754),null);
}
} else {
var args = cljs.core.first.call(null,s__26752__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26751.call(null,cljs.core.rest.call(null,s__26752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26761 = arguments.length;
var i__4819__auto___26762 = (0);
while(true){
if((i__4819__auto___26762 < len__4818__auto___26761)){
args__4824__auto__.push((arguments[i__4819__auto___26762]));

var G__26763 = (i__4819__auto___26762 + (1));
i__4819__auto___26762 = G__26763;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4611__auto__ = (function sablono$core$iter__26757(s__26758){
return (new cljs.core.LazySeq(null,(function (){
var s__26758__$1 = s__26758;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__26758__$1);
if(temp__5753__auto__){
var s__26758__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26758__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__26758__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__26760 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__26759 = (0);
while(true){
if((i__26759 < size__4610__auto__)){
var style = cljs.core._nth.call(null,c__4609__auto__,i__26759);
cljs.core.chunk_append.call(null,b__26760,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26764 = (i__26759 + (1));
i__26759 = G__26764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26760),sablono$core$iter__26757.call(null,cljs.core.chunk_rest.call(null,s__26758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26760),null);
}
} else {
var style = cljs.core.first.call(null,s__26758__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26757.call(null,cljs.core.rest.call(null,s__26758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq26756){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26756));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26765 = (function sablono$core$link_to26765(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26768 = arguments.length;
var i__4819__auto___26769 = (0);
while(true){
if((i__4819__auto___26769 < len__4818__auto___26768)){
args__4824__auto__.push((arguments[i__4819__auto___26769]));

var G__26770 = (i__4819__auto___26769 + (1));
i__4819__auto___26769 = G__26770;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26765.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.link_to26765.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to26765.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to26765.cljs$lang$applyTo = (function (seq26766){
var G__26767 = cljs.core.first.call(null,seq26766);
var seq26766__$1 = cljs.core.next.call(null,seq26766);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26767,seq26766__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26765);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26771 = (function sablono$core$mail_to26771(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26778 = arguments.length;
var i__4819__auto___26779 = (0);
while(true){
if((i__4819__auto___26779 < len__4818__auto___26778)){
args__4824__auto__.push((arguments[i__4819__auto___26779]));

var G__26780 = (i__4819__auto___26779 + (1));
i__4819__auto___26779 = G__26780;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26771.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.mail_to26771.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26774){
var vec__26775 = p__26774;
var content = cljs.core.nth.call(null,vec__26775,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4212__auto__ = content;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to26771.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to26771.cljs$lang$applyTo = (function (seq26772){
var G__26773 = cljs.core.first.call(null,seq26772);
var seq26772__$1 = cljs.core.next.call(null,seq26772);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26773,seq26772__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26771);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26781 = (function sablono$core$unordered_list26781(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4611__auto__ = (function sablono$core$unordered_list26781_$_iter__26782(s__26783){
return (new cljs.core.LazySeq(null,(function (){
var s__26783__$1 = s__26783;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__26783__$1);
if(temp__5753__auto__){
var s__26783__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26783__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__26783__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__26785 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__26784 = (0);
while(true){
if((i__26784 < size__4610__auto__)){
var x = cljs.core._nth.call(null,c__4609__auto__,i__26784);
cljs.core.chunk_append.call(null,b__26785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26786 = (i__26784 + (1));
i__26784 = G__26786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26785),sablono$core$unordered_list26781_$_iter__26782.call(null,cljs.core.chunk_rest.call(null,s__26783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26785),null);
}
} else {
var x = cljs.core.first.call(null,s__26783__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26781_$_iter__26782.call(null,cljs.core.rest.call(null,s__26783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26781);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26787 = (function sablono$core$ordered_list26787(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4611__auto__ = (function sablono$core$ordered_list26787_$_iter__26788(s__26789){
return (new cljs.core.LazySeq(null,(function (){
var s__26789__$1 = s__26789;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__26789__$1);
if(temp__5753__auto__){
var s__26789__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26789__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__26789__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__26791 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__26790 = (0);
while(true){
if((i__26790 < size__4610__auto__)){
var x = cljs.core._nth.call(null,c__4609__auto__,i__26790);
cljs.core.chunk_append.call(null,b__26791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26792 = (i__26790 + (1));
i__26790 = G__26792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),sablono$core$ordered_list26787_$_iter__26788.call(null,cljs.core.chunk_rest.call(null,s__26789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),null);
}
} else {
var x = cljs.core.first.call(null,s__26789__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26787_$_iter__26788.call(null,cljs.core.rest.call(null,s__26789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26787);
/**
 * Create an image element.
 */
sablono.core.image26793 = (function sablono$core$image26793(var_args){
var G__26795 = arguments.length;
switch (G__26795) {
case 1:
return sablono.core.image26793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image26793.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image26793.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image26793.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26793);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26797_SHARP_,p2__26798_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26797_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26798_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26799_SHARP_,p2__26800_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26799_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26800_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__26802 = arguments.length;
switch (G__26802) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field26804 = (function sablono$core$color_field26804(var_args){
var G__26806 = arguments.length;
switch (G__26806) {
case 1:
return sablono.core.color_field26804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field26804.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__26735__auto__);
}));

(sablono.core.color_field26804.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.color_field26804.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26804);

/**
 * Creates a date input field.
 */
sablono.core.date_field26807 = (function sablono$core$date_field26807(var_args){
var G__26809 = arguments.length;
switch (G__26809) {
case 1:
return sablono.core.date_field26807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field26807.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__26735__auto__);
}));

(sablono.core.date_field26807.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.date_field26807.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26807);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26810 = (function sablono$core$datetime_field26810(var_args){
var G__26812 = arguments.length;
switch (G__26812) {
case 1:
return sablono.core.datetime_field26810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field26810.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__26735__auto__);
}));

(sablono.core.datetime_field26810.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.datetime_field26810.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26810);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26813 = (function sablono$core$datetime_local_field26813(var_args){
var G__26815 = arguments.length;
switch (G__26815) {
case 1:
return sablono.core.datetime_local_field26813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field26813.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__26735__auto__);
}));

(sablono.core.datetime_local_field26813.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.datetime_local_field26813.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26813);

/**
 * Creates a email input field.
 */
sablono.core.email_field26816 = (function sablono$core$email_field26816(var_args){
var G__26818 = arguments.length;
switch (G__26818) {
case 1:
return sablono.core.email_field26816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field26816.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__26735__auto__);
}));

(sablono.core.email_field26816.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.email_field26816.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26816);

/**
 * Creates a file input field.
 */
sablono.core.file_field26819 = (function sablono$core$file_field26819(var_args){
var G__26821 = arguments.length;
switch (G__26821) {
case 1:
return sablono.core.file_field26819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field26819.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__26735__auto__);
}));

(sablono.core.file_field26819.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.file_field26819.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26819);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26822 = (function sablono$core$hidden_field26822(var_args){
var G__26824 = arguments.length;
switch (G__26824) {
case 1:
return sablono.core.hidden_field26822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field26822.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__26735__auto__);
}));

(sablono.core.hidden_field26822.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.hidden_field26822.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26822);

/**
 * Creates a month input field.
 */
sablono.core.month_field26825 = (function sablono$core$month_field26825(var_args){
var G__26827 = arguments.length;
switch (G__26827) {
case 1:
return sablono.core.month_field26825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field26825.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__26735__auto__);
}));

(sablono.core.month_field26825.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.month_field26825.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26825);

/**
 * Creates a number input field.
 */
sablono.core.number_field26828 = (function sablono$core$number_field26828(var_args){
var G__26830 = arguments.length;
switch (G__26830) {
case 1:
return sablono.core.number_field26828.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26828.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field26828.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__26735__auto__);
}));

(sablono.core.number_field26828.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.number_field26828.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26828);

/**
 * Creates a password input field.
 */
sablono.core.password_field26831 = (function sablono$core$password_field26831(var_args){
var G__26833 = arguments.length;
switch (G__26833) {
case 1:
return sablono.core.password_field26831.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field26831.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__26735__auto__);
}));

(sablono.core.password_field26831.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.password_field26831.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26831);

/**
 * Creates a range input field.
 */
sablono.core.range_field26834 = (function sablono$core$range_field26834(var_args){
var G__26836 = arguments.length;
switch (G__26836) {
case 1:
return sablono.core.range_field26834.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26834.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field26834.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__26735__auto__);
}));

(sablono.core.range_field26834.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.range_field26834.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26834);

/**
 * Creates a search input field.
 */
sablono.core.search_field26837 = (function sablono$core$search_field26837(var_args){
var G__26839 = arguments.length;
switch (G__26839) {
case 1:
return sablono.core.search_field26837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field26837.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__26735__auto__);
}));

(sablono.core.search_field26837.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.search_field26837.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26837);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26840 = (function sablono$core$tel_field26840(var_args){
var G__26842 = arguments.length;
switch (G__26842) {
case 1:
return sablono.core.tel_field26840.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26840.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field26840.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__26735__auto__);
}));

(sablono.core.tel_field26840.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.tel_field26840.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26840);

/**
 * Creates a text input field.
 */
sablono.core.text_field26843 = (function sablono$core$text_field26843(var_args){
var G__26845 = arguments.length;
switch (G__26845) {
case 1:
return sablono.core.text_field26843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field26843.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__26735__auto__);
}));

(sablono.core.text_field26843.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.text_field26843.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26843);

/**
 * Creates a time input field.
 */
sablono.core.time_field26846 = (function sablono$core$time_field26846(var_args){
var G__26848 = arguments.length;
switch (G__26848) {
case 1:
return sablono.core.time_field26846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field26846.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__26735__auto__);
}));

(sablono.core.time_field26846.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.time_field26846.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26846);

/**
 * Creates a url input field.
 */
sablono.core.url_field26849 = (function sablono$core$url_field26849(var_args){
var G__26851 = arguments.length;
switch (G__26851) {
case 1:
return sablono.core.url_field26849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field26849.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__26735__auto__);
}));

(sablono.core.url_field26849.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.url_field26849.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26849);

/**
 * Creates a week input field.
 */
sablono.core.week_field26852 = (function sablono$core$week_field26852(var_args){
var G__26854 = arguments.length;
switch (G__26854) {
case 1:
return sablono.core.week_field26852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field26852.cljs$core$IFn$_invoke$arity$1 = (function (name__26735__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__26735__auto__);
}));

(sablono.core.week_field26852.cljs$core$IFn$_invoke$arity$2 = (function (name__26735__auto__,value__26736__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__26735__auto__,value__26736__auto__);
}));

(sablono.core.week_field26852.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26852);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26872 = (function sablono$core$check_box26872(var_args){
var G__26874 = arguments.length;
switch (G__26874) {
case 1:
return sablono.core.check_box26872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26872.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box26872.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box26872.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box26872.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box26872.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26872);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26876 = (function sablono$core$radio_button26876(var_args){
var G__26878 = arguments.length;
switch (G__26878) {
case 1:
return sablono.core.radio_button26876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26876.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button26876.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button26876.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button26876.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button26876.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26876);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26880 = (function sablono$core$select_options26880(coll){
var iter__4611__auto__ = (function sablono$core$select_options26880_$_iter__26881(s__26882){
return (new cljs.core.LazySeq(null,(function (){
var s__26882__$1 = s__26882;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__26882__$1);
if(temp__5753__auto__){
var s__26882__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26882__$2)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,s__26882__$2);
var size__4610__auto__ = cljs.core.count.call(null,c__4609__auto__);
var b__26884 = cljs.core.chunk_buffer.call(null,size__4610__auto__);
if((function (){var i__26883 = (0);
while(true){
if((i__26883 < size__4610__auto__)){
var x = cljs.core._nth.call(null,c__4609__auto__,i__26883);
cljs.core.chunk_append.call(null,b__26884,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26885 = x;
var text = cljs.core.nth.call(null,vec__26885,(0),null);
var val = cljs.core.nth.call(null,vec__26885,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26885,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26880.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26891 = (i__26883 + (1));
i__26883 = G__26891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26884),sablono$core$select_options26880_$_iter__26881.call(null,cljs.core.chunk_rest.call(null,s__26882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26884),null);
}
} else {
var x = cljs.core.first.call(null,s__26882__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26888 = x;
var text = cljs.core.nth.call(null,vec__26888,(0),null);
var val = cljs.core.nth.call(null,vec__26888,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26888,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26880.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26880_$_iter__26881.call(null,cljs.core.rest.call(null,s__26882__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26880);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26892 = (function sablono$core$drop_down26892(var_args){
var G__26894 = arguments.length;
switch (G__26894) {
case 2:
return sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26892.call(null,name,options,null);
}));

(sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down26892.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26892);
/**
 * Creates a text area element.
 */
sablono.core.text_area26896 = (function sablono$core$text_area26896(var_args){
var G__26898 = arguments.length;
switch (G__26898) {
case 1:
return sablono.core.text_area26896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area26896.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area26896.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area26896.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26896);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26900 = (function sablono$core$label26900(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26900);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26901 = (function sablono$core$submit_button26901(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26901);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26902 = (function sablono$core$reset_button26902(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26902);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26903 = (function sablono$core$form_to26903(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26910 = arguments.length;
var i__4819__auto___26911 = (0);
while(true){
if((i__4819__auto___26911 < len__4818__auto___26910)){
args__4824__auto__.push((arguments[i__4819__auto___26911]));

var G__26912 = (i__4819__auto___26911 + (1));
i__4819__auto___26911 = G__26912;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26903.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.form_to26903.cljs$core$IFn$_invoke$arity$variadic = (function (p__26906,body){
var vec__26907 = p__26906;
var method = cljs.core.nth.call(null,vec__26907,(0),null);
var action = cljs.core.nth.call(null,vec__26907,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to26903.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to26903.cljs$lang$applyTo = (function (seq26904){
var G__26905 = cljs.core.first.call(null,seq26904);
var seq26904__$1 = cljs.core.next.call(null,seq26904);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26905,seq26904__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26903);

//# sourceMappingURL=core.js.map
