// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container');
goog.require('cljs.core');

/**
 * The IStyleContainer represents anything that can be used by Spade to
 * 'mount' styles for access by Spade style components.
 * @interface
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.IStyleContainer = function(){};

var day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$mount_style_BANG_$dyn_35356 = (function (this$,style_name,css){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.mount_style_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,this$,style_name,css);
} else {
var m__4508__auto__ = (day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.mount_style_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,this$,style_name,css);
} else {
throw cljs.core.missing_protocol.call(null,"IStyleContainer.mount-style!",this$);
}
}
});
/**
 * Ensure the style with the given name and CSS is available
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.mount_style_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$mount_style_BANG_(this$,style_name,css){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$mount_style_BANG_$arity$3 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$mount_style_BANG_$arity$3(this$,style_name,css);
} else {
return day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$mount_style_BANG_$dyn_35356.call(null,this$,style_name,css);
}
});


//# sourceMappingURL=container.js.map
