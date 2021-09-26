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

var G__28849 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28849)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28849)){
var G__28851 = (console["error"]);
var G__28852 = msg;
var G__28853 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28850 = oops.state.get_console_reporter();
return (fexpr__28850.cljs$core$IFn$_invoke$arity$3 ? fexpr__28850.cljs$core$IFn$_invoke$arity$3(G__28851,G__28852,G__28853) : fexpr__28850.call(null,G__28851,G__28852,G__28853));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28849)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28849)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28854 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__28854)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__28854)){
var G__28856 = (console["warn"]);
var G__28857 = msg;
var G__28858 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__28855 = oops.state.get_console_reporter();
return (fexpr__28855.cljs$core$IFn$_invoke$arity$3 ? fexpr__28855.cljs$core$IFn$_invoke$arity$3(G__28856,G__28857,G__28858) : fexpr__28855.call(null,G__28856,G__28857,G__28858));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28854)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28854)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28865 = arguments.length;
var i__4819__auto___28866 = (0);
while(true){
if((i__4819__auto___28866 < len__4818__auto___28865)){
args__4824__auto__.push((arguments[i__4819__auto___28866]));

var G__28867 = (i__4819__auto___28866 + (1));
i__4819__auto___28866 = G__28867;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28861){
var vec__28862 = p__28861;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28862,(0),null);
return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28859){
var G__28860 = cljs.core.first(seq28859);
var seq28859__$1 = cljs.core.next(seq28859);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28860,seq28859__$1);
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
var descriptor_28868 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_28868);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_28869 = temp__5755__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28869,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_28869,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_28871 = oops.config.get_child_factory();
var child_factory_28871__$1 = (function (){var G__28872 = child_factory_28871;
var G__28872__$1 = (((G__28872 instanceof cljs.core.Keyword))?G__28872.fqn:null);
switch (G__28872__$1) {
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
return child_factory_28871;

}
})();

var child_obj_28870 = (child_factory_28871__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_28871__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_28871__$1.call(null,obj,key));
(obj[key] = child_obj_28870);

return child_obj_28870;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28876 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_28876);

return selector_path_28876;
} else {
var selector_path_28877 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_28877);

return selector_path_28877;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_28878 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_28878);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_28880 = (function (){var path_28879 = oops.core.build_path_dynamically(selector);

return path_28879;
})();
var len_28881 = path_28880.length;
var i_28882 = (0);
var obj_28883 = obj;
while(true){
if((i_28882 < len_28881)){
var mode_28884 = (path_28880[i_28882]);
var key_28885 = (path_28880[(i_28882 + (1))]);
var next_obj_28886 = oops.core.get_key_dynamically(obj_28883,key_28885,mode_28884);
var G__28887 = mode_28884;
switch (G__28887) {
case (0):
var G__28889 = (i_28882 + (2));
var G__28890 = next_obj_28886;
i_28882 = G__28889;
obj_28883 = G__28890;
continue;

break;
case (1):
if((!((next_obj_28886 == null)))){
var G__28891 = (i_28882 + (2));
var G__28892 = next_obj_28886;
i_28882 = G__28891;
obj_28883 = G__28892;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28886 == null)))){
var G__28893 = (i_28882 + (2));
var G__28894 = next_obj_28886;
i_28882 = G__28893;
obj_28883 = G__28894;
continue;
} else {
var G__28895 = (i_28882 + (2));
var G__28896 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28883,key_28885) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28883,key_28885));
i_28882 = G__28895;
obj_28883 = G__28896;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28887)].join('')));

}
} else {
return obj_28883;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_28898 = (function (){var path_28897 = oops.core.build_path_dynamically(selector);

return path_28897;
})();
var len_28899 = path_28898.length;
if((len_28899 < (4))){
return [obj,(function (){var path_28901 = path_28898;
var len_28902 = path_28901.length;
var i_28903 = (0);
var obj_28904 = obj;
while(true){
if((i_28903 < len_28902)){
var mode_28905 = (path_28901[i_28903]);
var key_28906 = (path_28901[(i_28903 + (1))]);
var next_obj_28907 = oops.core.get_key_dynamically(obj_28904,key_28906,mode_28905);
var G__28922 = mode_28905;
switch (G__28922) {
case (0):
var G__28926 = (i_28903 + (2));
var G__28927 = next_obj_28907;
i_28903 = G__28926;
obj_28904 = G__28927;
continue;

break;
case (1):
if((!((next_obj_28907 == null)))){
var G__28928 = (i_28903 + (2));
var G__28929 = next_obj_28907;
i_28903 = G__28928;
obj_28904 = G__28929;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28907 == null)))){
var G__28930 = (i_28903 + (2));
var G__28931 = next_obj_28907;
i_28903 = G__28930;
obj_28904 = G__28931;
continue;
} else {
var G__28932 = (i_28903 + (2));
var G__28933 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28904,key_28906) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28904,key_28906));
i_28903 = G__28932;
obj_28904 = G__28933;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28922)].join('')));

}
} else {
return obj_28904;
}
break;
}
})()];
} else {
var target_obj_28900 = (function (){var path_28908 = path_28898.slice((0),(len_28899 - (2)));
var len_28909 = path_28908.length;
var i_28910 = (0);
var obj_28911 = obj;
while(true){
if((i_28910 < len_28909)){
var mode_28912 = (path_28908[i_28910]);
var key_28913 = (path_28908[(i_28910 + (1))]);
var next_obj_28914 = oops.core.get_key_dynamically(obj_28911,key_28913,mode_28912);
var G__28923 = mode_28912;
switch (G__28923) {
case (0):
var G__28935 = (i_28910 + (2));
var G__28936 = next_obj_28914;
i_28910 = G__28935;
obj_28911 = G__28936;
continue;

break;
case (1):
if((!((next_obj_28914 == null)))){
var G__28937 = (i_28910 + (2));
var G__28938 = next_obj_28914;
i_28910 = G__28937;
obj_28911 = G__28938;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28914 == null)))){
var G__28939 = (i_28910 + (2));
var G__28940 = next_obj_28914;
i_28910 = G__28939;
obj_28911 = G__28940;
continue;
} else {
var G__28941 = (i_28910 + (2));
var G__28942 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28911,key_28913) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28911,key_28913));
i_28910 = G__28941;
obj_28911 = G__28942;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28923)].join('')));

}
} else {
return obj_28911;
}
break;
}
})();
return [target_obj_28900,(function (){var path_28915 = [(path_28898[(len_28899 - (2))]),(path_28898[(len_28899 - (1))])];
var len_28916 = path_28915.length;
var i_28917 = (0);
var obj_28918 = target_obj_28900;
while(true){
if((i_28917 < len_28916)){
var mode_28919 = (path_28915[i_28917]);
var key_28920 = (path_28915[(i_28917 + (1))]);
var next_obj_28921 = oops.core.get_key_dynamically(obj_28918,key_28920,mode_28919);
var G__28924 = mode_28919;
switch (G__28924) {
case (0):
var G__28944 = (i_28917 + (2));
var G__28945 = next_obj_28921;
i_28917 = G__28944;
obj_28918 = G__28945;
continue;

break;
case (1):
if((!((next_obj_28921 == null)))){
var G__28946 = (i_28917 + (2));
var G__28947 = next_obj_28921;
i_28917 = G__28946;
obj_28918 = G__28947;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28921 == null)))){
var G__28948 = (i_28917 + (2));
var G__28949 = next_obj_28921;
i_28917 = G__28948;
obj_28918 = G__28949;
continue;
} else {
var G__28950 = (i_28917 + (2));
var G__28951 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28918,key_28920) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28918,key_28920));
i_28917 = G__28950;
obj_28918 = G__28951;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28924)].join('')));

}
} else {
return obj_28918;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_28953 = (function (){var path_28952 = oops.core.build_path_dynamically(selector);

return path_28952;
})();
var len_28956 = path_28953.length;
var parent_obj_path_28957 = path_28953.slice((0),(len_28956 - (2)));
var key_28954 = (path_28953[(len_28956 - (1))]);
var mode_28955 = (path_28953[(len_28956 - (2))]);
var parent_obj_28958 = (function (){var path_28959 = parent_obj_path_28957;
var len_28960 = path_28959.length;
var i_28961 = (0);
var obj_28962 = obj;
while(true){
if((i_28961 < len_28960)){
var mode_28963 = (path_28959[i_28961]);
var key_28964 = (path_28959[(i_28961 + (1))]);
var next_obj_28965 = oops.core.get_key_dynamically(obj_28962,key_28964,mode_28963);
var G__28966 = mode_28963;
switch (G__28966) {
case (0):
var G__28968 = (i_28961 + (2));
var G__28969 = next_obj_28965;
i_28961 = G__28968;
obj_28962 = G__28969;
continue;

break;
case (1):
if((!((next_obj_28965 == null)))){
var G__28970 = (i_28961 + (2));
var G__28971 = next_obj_28965;
i_28961 = G__28970;
obj_28962 = G__28971;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28965 == null)))){
var G__28972 = (i_28961 + (2));
var G__28973 = next_obj_28965;
i_28961 = G__28972;
obj_28962 = G__28973;
continue;
} else {
var G__28974 = (i_28961 + (2));
var G__28975 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_28962,key_28964) : oops.core.punch_key_dynamically_BANG_.call(null,obj_28962,key_28964));
i_28961 = G__28974;
obj_28962 = G__28975;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28966)].join('')));

}
} else {
return obj_28962;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_28958,key_28954,val,mode_28955);
});
