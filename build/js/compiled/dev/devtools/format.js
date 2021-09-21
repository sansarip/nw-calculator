// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_34101 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._header[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,value);
} else {
var m__4508__auto__ = (devtools.format._header["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_34101.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_34102 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._has_body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,value);
} else {
var m__4508__auto__ = (devtools.format._has_body["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_34102.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_34103 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return m__4510__auto__.call(null,value);
} else {
var m__4508__auto__ = (devtools.format._body["_"]);
if((!((m__4508__auto__ == null)))){
return m__4508__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_34103.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o34104 = temp__5751__auto__;
var temp__5751__auto____$1 = (o34104["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o34105 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o34105["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o34106 = temp__5751__auto____$2;
return (o34106["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o34107 = temp__5751__auto__;
var temp__5751__auto____$1 = (o34107["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o34108 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o34108["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o34109 = temp__5751__auto____$2;
return (o34109["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o34110 = temp__5751__auto__;
var temp__5751__auto____$1 = (o34110["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o34111 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o34111["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o34112 = temp__5751__auto____$2;
return (o34112["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o34113 = temp__5751__auto__;
var temp__5751__auto____$1 = (o34113["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o34114 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o34114["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o34115 = temp__5751__auto____$2;
return (o34115["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o34116 = temp__5751__auto__;
var temp__5751__auto____$1 = (o34116["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o34117 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o34117["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o34118 = temp__5751__auto____$2;
return (o34118["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o34119 = temp__5751__auto__;
var temp__5751__auto____$1 = (o34119["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o34120 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o34120["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o34121 = temp__5751__auto____$2;
return (o34121["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o34122 = temp__5751__auto__;
var temp__5751__auto____$1 = (o34122["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o34123 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o34123["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o34124 = temp__5751__auto____$2;
return (o34124["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34126 = arguments.length;
var i__4819__auto___34127 = (0);
while(true){
if((i__4819__auto___34127 < len__4818__auto___34126)){
args__4824__auto__.push((arguments[i__4819__auto___34127]));

var G__34128 = (i__4819__auto___34127 + (1));
i__4819__auto___34127 = G__34128;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq34125){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34125));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34130 = arguments.length;
var i__4819__auto___34131 = (0);
while(true){
if((i__4819__auto___34131 < len__4818__auto___34130)){
args__4824__auto__.push((arguments[i__4819__auto___34131]));

var G__34132 = (i__4819__auto___34131 + (1));
i__4819__auto___34131 = G__34132;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq34129){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34129));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34134 = arguments.length;
var i__4819__auto___34135 = (0);
while(true){
if((i__4819__auto___34135 < len__4818__auto___34134)){
args__4824__auto__.push((arguments[i__4819__auto___34135]));

var G__34136 = (i__4819__auto___34135 + (1));
i__4819__auto___34135 = G__34136;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq34133){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34133));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34138 = arguments.length;
var i__4819__auto___34139 = (0);
while(true){
if((i__4819__auto___34139 < len__4818__auto___34138)){
args__4824__auto__.push((arguments[i__4819__auto___34139]));

var G__34140 = (i__4819__auto___34139 + (1));
i__4819__auto___34139 = G__34140;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq34137){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34137));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34142 = arguments.length;
var i__4819__auto___34143 = (0);
while(true){
if((i__4819__auto___34143 < len__4818__auto___34142)){
args__4824__auto__.push((arguments[i__4819__auto___34143]));

var G__34144 = (i__4819__auto___34143 + (1));
i__4819__auto___34143 = G__34144;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq34141){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34141));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34146 = arguments.length;
var i__4819__auto___34147 = (0);
while(true){
if((i__4819__auto___34147 < len__4818__auto___34146)){
args__4824__auto__.push((arguments[i__4819__auto___34147]));

var G__34148 = (i__4819__auto___34147 + (1));
i__4819__auto___34147 = G__34148;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq34145){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34145));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34150 = arguments.length;
var i__4819__auto___34151 = (0);
while(true){
if((i__4819__auto___34151 < len__4818__auto___34150)){
args__4824__auto__.push((arguments[i__4819__auto___34151]));

var G__34152 = (i__4819__auto___34151 + (1));
i__4819__auto___34151 = G__34152;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq34149){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34149));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34160 = arguments.length;
var i__4819__auto___34161 = (0);
while(true){
if((i__4819__auto___34161 < len__4818__auto___34160)){
args__4824__auto__.push((arguments[i__4819__auto___34161]));

var G__34162 = (i__4819__auto___34161 + (1));
i__4819__auto___34161 = G__34162;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__34156){
var vec__34157 = p__34156;
var state_override = cljs.core.nth.call(null,vec__34157,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__34153_SHARP_){
return cljs.core.merge.call(null,p1__34153_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq34154){
var G__34155 = cljs.core.first.call(null,seq34154);
var seq34154__$1 = cljs.core.next.call(null,seq34154);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34155,seq34154__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34164 = arguments.length;
var i__4819__auto___34165 = (0);
while(true){
if((i__4819__auto___34165 < len__4818__auto___34164)){
args__4824__auto__.push((arguments[i__4819__auto___34165]));

var G__34166 = (i__4819__auto___34165 + (1));
i__4819__auto___34165 = G__34166;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq34163){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34163));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34169 = arguments.length;
var i__4819__auto___34170 = (0);
while(true){
if((i__4819__auto___34170 < len__4818__auto___34169)){
args__4824__auto__.push((arguments[i__4819__auto___34170]));

var G__34171 = (i__4819__auto___34170 + (1));
i__4819__auto___34170 = G__34171;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq34167){
var G__34168 = cljs.core.first.call(null,seq34167);
var seq34167__$1 = cljs.core.next.call(null,seq34167);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34168,seq34167__$1);
}));


//# sourceMappingURL=format.js.map
