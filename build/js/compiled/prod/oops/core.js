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

var G__28847 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28847)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28847)){
var G__28849 = (console["error"]);
var G__28850 = msg;
var G__28851 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28848 = oops.state.get_console_reporter();
return (fexpr__28848.cljs$core$IFn$_invoke$arity$3 ? fexpr__28848.cljs$core$IFn$_invoke$arity$3(G__28849,G__28850,G__28851) : fexpr__28848.call(null,G__28849,G__28850,G__28851));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28847)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28847)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28852 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28852)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28852)){
var G__28854 = (console["warn"]);
var G__28855 = msg;
var G__28856 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28853 = oops.state.get_console_reporter();
return (fexpr__28853.cljs$core$IFn$_invoke$arity$3 ? fexpr__28853.cljs$core$IFn$_invoke$arity$3(G__28854,G__28855,G__28856) : fexpr__28853.call(null,G__28854,G__28855,G__28856));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28852)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28852)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28863 = arguments.length;
var i__4819__auto___28864 = (0);
while(true){
if((i__4819__auto___28864 < len__4818__auto___28863)){
args__4824__auto__.push((arguments[i__4819__auto___28864]));

var G__28865 = (i__4819__auto___28864 + (1));
i__4819__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28859){
var vec__28860 = p__28859;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28860,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28857){
var G__28858 = cljs.core.first(seq28857);
var seq28857__$1 = cljs.core.next(seq28857);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28858,seq28857__$1);
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
var descriptor_28866 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_28866);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_28867 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28867,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28867,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_28869 = oops.config.get_child_factory();
var child_factory_28869__$1 = (function (){var G__28870 = child_factory_28869;
var G__28870__$1 = (((G__28870 instanceof cljs.core.Keyword))?G__28870.fqn:null);
switch (G__28870__$1) {
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
return child_factory_28869;

}
})();

var child_obj_28868 = (child_factory_28869__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_28869__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_28869__$1.call(null,obj,key));
(obj[key] = child_obj_28868);

return child_obj_28868;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28874 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_28874);

return selector_path_28874;
} else {
var selector_path_28875 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_28875);

return selector_path_28875;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_28876 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_28876);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_28878 = (function (){var path_28877 = oops.core.build_path_dynamically(selector);

return path_28877;
})();
var len_28879 = path_28878.length;
var i_28880 = (0);
var obj_28881 = obj;
while(true){
if((i_28880 < len_28879)){
var mode_28882 = (path_28878[i_28880]);
var key_28883 = (path_28878[(i_28880 + (1))]);
var next_obj_28884 = oops.core.get_key_dynamically(obj_28881,key_28883,mode_28882);
var G__28885 = mode_28882;
switch (G__28885) {
case (0):
var G__28887 = (i_28880 + (2));
var G__28888 = next_obj_28884;
i_28880 = G__28887;
obj_28881 = G__28888;
continue;

break;
case (1):
if((!((next_obj_28884 == null)))){
var G__28889 = (i_28880 + (2));
var G__28890 = next_obj_28884;
i_28880 = G__28889;
obj_28881 = G__28890;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28884 == null)))){
var G__28891 = (i_28880 + (2));
var G__28892 = next_obj_28884;
i_28880 = G__28891;
obj_28881 = G__28892;
continue;
} else {
var G__28893 = (i_28880 + (2));
var G__28894 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28881,key_28883) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28881,key_28883));
i_28880 = G__28893;
obj_28881 = G__28894;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28885)].join('')));

}
} else {
return obj_28881;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_28896 = (function (){var path_28895 = oops.core.build_path_dynamically(selector);

return path_28895;
})();
var len_28897 = path_28896.length;
if((len_28897 < (4))){
return [obj,(function (){var path_28899 = path_28896;
var len_28900 = path_28899.length;
var i_28901 = (0);
var obj_28902 = obj;
while(true){
if((i_28901 < len_28900)){
var mode_28903 = (path_28899[i_28901]);
var key_28904 = (path_28899[(i_28901 + (1))]);
var next_obj_28905 = oops.core.get_key_dynamically(obj_28902,key_28904,mode_28903);
var G__28920 = mode_28903;
switch (G__28920) {
case (0):
var G__28924 = (i_28901 + (2));
var G__28925 = next_obj_28905;
i_28901 = G__28924;
obj_28902 = G__28925;
continue;

break;
case (1):
if((!((next_obj_28905 == null)))){
var G__28926 = (i_28901 + (2));
var G__28927 = next_obj_28905;
i_28901 = G__28926;
obj_28902 = G__28927;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28905 == null)))){
var G__28928 = (i_28901 + (2));
var G__28929 = next_obj_28905;
i_28901 = G__28928;
obj_28902 = G__28929;
continue;
} else {
var G__28930 = (i_28901 + (2));
var G__28931 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28902,key_28904) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28902,key_28904));
i_28901 = G__28930;
obj_28902 = G__28931;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28920)].join('')));

}
} else {
return obj_28902;
}
break;
}
})()];
} else {
var target_obj_28898 = (function (){var path_28906 = path_28896.slice((0),(len_28897 - (2)));
var len_28907 = path_28906.length;
var i_28908 = (0);
var obj_28909 = obj;
while(true){
if((i_28908 < len_28907)){
var mode_28910 = (path_28906[i_28908]);
var key_28911 = (path_28906[(i_28908 + (1))]);
var next_obj_28912 = oops.core.get_key_dynamically(obj_28909,key_28911,mode_28910);
var G__28921 = mode_28910;
switch (G__28921) {
case (0):
var G__28933 = (i_28908 + (2));
var G__28934 = next_obj_28912;
i_28908 = G__28933;
obj_28909 = G__28934;
continue;

break;
case (1):
if((!((next_obj_28912 == null)))){
var G__28935 = (i_28908 + (2));
var G__28936 = next_obj_28912;
i_28908 = G__28935;
obj_28909 = G__28936;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28912 == null)))){
var G__28937 = (i_28908 + (2));
var G__28938 = next_obj_28912;
i_28908 = G__28937;
obj_28909 = G__28938;
continue;
} else {
var G__28939 = (i_28908 + (2));
var G__28940 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28909,key_28911) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28909,key_28911));
i_28908 = G__28939;
obj_28909 = G__28940;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28921)].join('')));

}
} else {
return obj_28909;
}
break;
}
})();
return [target_obj_28898,(function (){var path_28913 = [(path_28896[(len_28897 - (2))]),(path_28896[(len_28897 - (1))])];
var len_28914 = path_28913.length;
var i_28915 = (0);
var obj_28916 = target_obj_28898;
while(true){
if((i_28915 < len_28914)){
var mode_28917 = (path_28913[i_28915]);
var key_28918 = (path_28913[(i_28915 + (1))]);
var next_obj_28919 = oops.core.get_key_dynamically(obj_28916,key_28918,mode_28917);
var G__28922 = mode_28917;
switch (G__28922) {
case (0):
var G__28942 = (i_28915 + (2));
var G__28943 = next_obj_28919;
i_28915 = G__28942;
obj_28916 = G__28943;
continue;

break;
case (1):
if((!((next_obj_28919 == null)))){
var G__28944 = (i_28915 + (2));
var G__28945 = next_obj_28919;
i_28915 = G__28944;
obj_28916 = G__28945;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28919 == null)))){
var G__28946 = (i_28915 + (2));
var G__28947 = next_obj_28919;
i_28915 = G__28946;
obj_28916 = G__28947;
continue;
} else {
var G__28948 = (i_28915 + (2));
var G__28949 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28916,key_28918) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28916,key_28918));
i_28915 = G__28948;
obj_28916 = G__28949;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28922)].join('')));

}
} else {
return obj_28916;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_28951 = (function (){var path_28950 = oops.core.build_path_dynamically(selector);

return path_28950;
})();
var len_28954 = path_28951.length;
var parent_obj_path_28955 = path_28951.slice((0),(len_28954 - (2)));
var key_28952 = (path_28951[(len_28954 - (1))]);
var mode_28953 = (path_28951[(len_28954 - (2))]);
var parent_obj_28956 = (function (){var path_28957 = parent_obj_path_28955;
var len_28958 = path_28957.length;
var i_28959 = (0);
var obj_28960 = obj;
while(true){
if((i_28959 < len_28958)){
var mode_28961 = (path_28957[i_28959]);
var key_28962 = (path_28957[(i_28959 + (1))]);
var next_obj_28963 = oops.core.get_key_dynamically(obj_28960,key_28962,mode_28961);
var G__28964 = mode_28961;
switch (G__28964) {
case (0):
var G__28966 = (i_28959 + (2));
var G__28967 = next_obj_28963;
i_28959 = G__28966;
obj_28960 = G__28967;
continue;

break;
case (1):
if((!((next_obj_28963 == null)))){
var G__28968 = (i_28959 + (2));
var G__28969 = next_obj_28963;
i_28959 = G__28968;
obj_28960 = G__28969;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28963 == null)))){
var G__28970 = (i_28959 + (2));
var G__28971 = next_obj_28963;
i_28959 = G__28970;
obj_28960 = G__28971;
continue;
} else {
var G__28972 = (i_28959 + (2));
var G__28973 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28960,key_28962) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28960,key_28962));
i_28959 = G__28972;
obj_28960 = G__28973;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28964)].join('')));

}
} else {
return obj_28960;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_28956,key_28952,val,mode_28953);
});
