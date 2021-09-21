// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('rewrite_clj.zip.utils');
goog.require('cljs.core');
goog.require('clojure.zip');
rewrite_clj.zip.utils.update_in_path = (function rewrite_clj$zip$utils$update_in_path(p__37035,k,f){
var vec__37036 = p__37035;
var node = cljs.core.nth.call(null,vec__37036,(0),null);
var path = cljs.core.nth.call(null,vec__37036,(1),null);
var loc = vec__37036;
var v = cljs.core.get.call(null,path,k);
if(cljs.core.seq.call(null,v)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,k,f.call(null,v),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_right = (function rewrite_clj$zip$utils$remove_right(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_left = (function rewrite_clj$zip$utils$remove_left(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
});
rewrite_clj.zip.utils.remove_while = (function rewrite_clj$zip$utils$remove_while(zloc,p_QMARK_){

var zloc__$1 = zloc;
while(true){
var ploc = clojure.zip.prev.call(null,zloc__$1);
if(cljs.core.not.call(null,(function (){var and__4210__auto__ = ploc;
if(cljs.core.truth_(and__4210__auto__)){
return p_QMARK_.call(null,ploc);
} else {
return and__4210__auto__;
}
})())){
return zloc__$1;
} else {
var G__37039 = clojure.zip.remove.call(null,zloc__$1);
zloc__$1 = G__37039;
continue;
}
break;
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_right_while = (function rewrite_clj$zip$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5751__auto__ = clojure.zip.right.call(null,zloc__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var rloc = temp__5751__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,rloc))){
var G__37040 = rewrite_clj.zip.utils.remove_right.call(null,zloc__$1);
zloc__$1 = G__37040;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_left_while = (function rewrite_clj$zip$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5751__auto__ = clojure.zip.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var lloc = temp__5751__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,lloc))){
var G__37041 = rewrite_clj.zip.utils.remove_left.call(null,zloc__$1);
zloc__$1 = G__37041;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_left = (function rewrite_clj$zip$utils$remove_and_move_left(p__37042){
var vec__37043 = p__37042;
var _ = cljs.core.nth.call(null,vec__37043,(0),null);
var map__37046 = cljs.core.nth.call(null,vec__37043,(1),null);
var map__37046__$1 = cljs.core.__destructure_map.call(null,map__37046);
var path = map__37046__$1;
var l = cljs.core.get.call(null,map__37046__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var loc = vec__37043;
if(cljs.core.seq.call(null,l)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_right = (function rewrite_clj$zip$utils$remove_and_move_right(p__37047){
var vec__37048 = p__37047;
var _ = cljs.core.nth.call(null,vec__37048,(0),null);
var map__37051 = cljs.core.nth.call(null,vec__37048,(1),null);
var map__37051__$1 = cljs.core.__destructure_map.call(null,map__37051);
var path = map__37051__$1;
var r = cljs.core.get.call(null,map__37051__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var loc = vec__37048;
if(cljs.core.seq.call(null,r)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,r),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
rewrite_clj.zip.utils.remove_and_move_up = (function rewrite_clj$zip$utils$remove_and_move_up(loc){
var vec__37052 = loc;
var node = cljs.core.nth.call(null,vec__37052,(0),null);
var map__37055 = cljs.core.nth.call(null,vec__37052,(1),null);
var map__37055__$1 = cljs.core.__destructure_map.call(null,map__37055);
var path = map__37055__$1;
var l = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw (new Error("Remove at top"));
} else {
if((cljs.core.count.call(null,l) > (0))){
return clojure.zip.up.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc)));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__4210__auto__ = ppath;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__4210__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});

//# sourceMappingURL=utils.js.map
