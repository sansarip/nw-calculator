// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__28874 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28874)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28874)){
var G__28876 = (console["error"]);
var G__28877 = msg;
var G__28878 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28875 = oops.state.get_console_reporter();
return (fexpr__28875.cljs$core$IFn$_invoke$arity$3 ? fexpr__28875.cljs$core$IFn$_invoke$arity$3(G__28876,G__28877,G__28878) : fexpr__28875.call(null,G__28876,G__28877,G__28878));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28874)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28874)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28879 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28879)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28879)){
var G__28881 = (console["warn"]);
var G__28882 = msg;
var G__28883 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28880 = oops.state.get_console_reporter();
return (fexpr__28880.cljs$core$IFn$_invoke$arity$3 ? fexpr__28880.cljs$core$IFn$_invoke$arity$3(G__28881,G__28882,G__28883) : fexpr__28880.call(null,G__28881,G__28882,G__28883));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28879)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28879)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28890 = arguments.length;
var i__4819__auto___28891 = (0);
while(true){
if((i__4819__auto___28891 < len__4818__auto___28890)){
args__4824__auto__.push((arguments[i__4819__auto___28891]));

var G__28892 = (i__4819__auto___28891 + (1));
i__4819__auto___28891 = G__28892;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28886){
var vec__28887 = p__28886;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28884){
var G__28885 = cljs.core.first(seq28884);
var seq28884__$1 = cljs.core.next(seq28884);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28885,seq28884__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4210__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((!(goog.object.containsKey(obj,key))))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_28893 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_28893);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_28894 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28894,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28894,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__4210__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_28896 = oops.config.get_child_factory();
var child_factory_28896__$1 = (function (){var G__28897 = child_factory_28896;
var G__28897__$1 = (((G__28897 instanceof cljs.core.Keyword))?G__28897.fqn:null);
switch (G__28897__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_28896;

}
})();

var child_obj_28895 = (child_factory_28896__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_28896__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_28896__$1.call(null,obj,key));
(obj[key] = child_obj_28895);

return child_obj_28895;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28901 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_28901);

return selector_path_28901;
} else {
var selector_path_28902 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_28902);

return selector_path_28902;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_28903 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_28903);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_28905 = (function (){var path_28904 = oops.core.build_path_dynamically(selector);

return path_28904;
})();
var len_28906 = path_28905.length;
var i_28907 = (0);
var obj_28908 = obj;
while(true){
if((i_28907 < len_28906)){
var mode_28909 = (path_28905[i_28907]);
var key_28910 = (path_28905[(i_28907 + (1))]);
var next_obj_28911 = oops.core.get_key_dynamically(obj_28908,key_28910,mode_28909);
var G__28912 = mode_28909;
switch (G__28912) {
case (0):
var G__28914 = (i_28907 + (2));
var G__28915 = next_obj_28911;
i_28907 = G__28914;
obj_28908 = G__28915;
continue;

break;
case (1):
if((!((next_obj_28911 == null)))){
var G__28916 = (i_28907 + (2));
var G__28917 = next_obj_28911;
i_28907 = G__28916;
obj_28908 = G__28917;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28911 == null)))){
var G__28918 = (i_28907 + (2));
var G__28919 = next_obj_28911;
i_28907 = G__28918;
obj_28908 = G__28919;
continue;
} else {
var G__28920 = (i_28907 + (2));
var G__28921 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28908,key_28910) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28908,key_28910));
i_28907 = G__28920;
obj_28908 = G__28921;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28912)].join('')));

}
} else {
return obj_28908;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_28923 = (function (){var path_28922 = oops.core.build_path_dynamically(selector);

return path_28922;
})();
var len_28924 = path_28923.length;
if((len_28924 < (4))){
return [obj,(function (){var path_28926 = path_28923;
var len_28927 = path_28926.length;
var i_28928 = (0);
var obj_28929 = obj;
while(true){
if((i_28928 < len_28927)){
var mode_28930 = (path_28926[i_28928]);
var key_28931 = (path_28926[(i_28928 + (1))]);
var next_obj_28932 = oops.core.get_key_dynamically(obj_28929,key_28931,mode_28930);
var G__28947 = mode_28930;
switch (G__28947) {
case (0):
var G__28951 = (i_28928 + (2));
var G__28952 = next_obj_28932;
i_28928 = G__28951;
obj_28929 = G__28952;
continue;

break;
case (1):
if((!((next_obj_28932 == null)))){
var G__28953 = (i_28928 + (2));
var G__28954 = next_obj_28932;
i_28928 = G__28953;
obj_28929 = G__28954;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28932 == null)))){
var G__28955 = (i_28928 + (2));
var G__28956 = next_obj_28932;
i_28928 = G__28955;
obj_28929 = G__28956;
continue;
} else {
var G__28957 = (i_28928 + (2));
var G__28958 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28929,key_28931) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28929,key_28931));
i_28928 = G__28957;
obj_28929 = G__28958;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28947)].join('')));

}
} else {
return obj_28929;
}
break;
}
})()];
} else {
var target_obj_28925 = (function (){var path_28933 = path_28923.slice((0),(len_28924 - (2)));
var len_28934 = path_28933.length;
var i_28935 = (0);
var obj_28936 = obj;
while(true){
if((i_28935 < len_28934)){
var mode_28937 = (path_28933[i_28935]);
var key_28938 = (path_28933[(i_28935 + (1))]);
var next_obj_28939 = oops.core.get_key_dynamically(obj_28936,key_28938,mode_28937);
var G__28948 = mode_28937;
switch (G__28948) {
case (0):
var G__28960 = (i_28935 + (2));
var G__28961 = next_obj_28939;
i_28935 = G__28960;
obj_28936 = G__28961;
continue;

break;
case (1):
if((!((next_obj_28939 == null)))){
var G__28962 = (i_28935 + (2));
var G__28963 = next_obj_28939;
i_28935 = G__28962;
obj_28936 = G__28963;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28939 == null)))){
var G__28964 = (i_28935 + (2));
var G__28965 = next_obj_28939;
i_28935 = G__28964;
obj_28936 = G__28965;
continue;
} else {
var G__28966 = (i_28935 + (2));
var G__28967 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28936,key_28938) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28936,key_28938));
i_28935 = G__28966;
obj_28936 = G__28967;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28948)].join('')));

}
} else {
return obj_28936;
}
break;
}
})();
return [target_obj_28925,(function (){var path_28940 = [(path_28923[(len_28924 - (2))]),(path_28923[(len_28924 - (1))])];
var len_28941 = path_28940.length;
var i_28942 = (0);
var obj_28943 = target_obj_28925;
while(true){
if((i_28942 < len_28941)){
var mode_28944 = (path_28940[i_28942]);
var key_28945 = (path_28940[(i_28942 + (1))]);
var next_obj_28946 = oops.core.get_key_dynamically(obj_28943,key_28945,mode_28944);
var G__28949 = mode_28944;
switch (G__28949) {
case (0):
var G__28969 = (i_28942 + (2));
var G__28970 = next_obj_28946;
i_28942 = G__28969;
obj_28943 = G__28970;
continue;

break;
case (1):
if((!((next_obj_28946 == null)))){
var G__28971 = (i_28942 + (2));
var G__28972 = next_obj_28946;
i_28942 = G__28971;
obj_28943 = G__28972;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28946 == null)))){
var G__28973 = (i_28942 + (2));
var G__28974 = next_obj_28946;
i_28942 = G__28973;
obj_28943 = G__28974;
continue;
} else {
var G__28975 = (i_28942 + (2));
var G__28976 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28943,key_28945) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28943,key_28945));
i_28942 = G__28975;
obj_28943 = G__28976;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28949)].join('')));

}
} else {
return obj_28943;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_28978 = (function (){var path_28977 = oops.core.build_path_dynamically(selector);

return path_28977;
})();
var len_28981 = path_28978.length;
var parent_obj_path_28982 = path_28978.slice((0),(len_28981 - (2)));
var key_28979 = (path_28978[(len_28981 - (1))]);
var mode_28980 = (path_28978[(len_28981 - (2))]);
var parent_obj_28983 = (function (){var path_28984 = parent_obj_path_28982;
var len_28985 = path_28984.length;
var i_28986 = (0);
var obj_28987 = obj;
while(true){
if((i_28986 < len_28985)){
var mode_28988 = (path_28984[i_28986]);
var key_28989 = (path_28984[(i_28986 + (1))]);
var next_obj_28990 = oops.core.get_key_dynamically(obj_28987,key_28989,mode_28988);
var G__28991 = mode_28988;
switch (G__28991) {
case (0):
var G__28993 = (i_28986 + (2));
var G__28994 = next_obj_28990;
i_28986 = G__28993;
obj_28987 = G__28994;
continue;

break;
case (1):
if((!((next_obj_28990 == null)))){
var G__28995 = (i_28986 + (2));
var G__28996 = next_obj_28990;
i_28986 = G__28995;
obj_28987 = G__28996;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28990 == null)))){
var G__28997 = (i_28986 + (2));
var G__28998 = next_obj_28990;
i_28986 = G__28997;
obj_28987 = G__28998;
continue;
} else {
var G__28999 = (i_28986 + (2));
var G__29000 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28987,key_28989) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28987,key_28989));
i_28986 = G__28999;
obj_28987 = G__29000;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28991)].join('')));

}
} else {
return obj_28987;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_28983,key_28979,val,mode_28980);
});
