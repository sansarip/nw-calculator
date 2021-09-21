// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__34065__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__34065__auto__["add"]).call(o__34065__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__34065__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__34065__auto__["delete"]).call(o__34065__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__34065__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__34065__auto__["has"]).call(o__34065__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__35277 = data;
var target__34070__auto__ = G__35277;
if(cljs.core.truth_(target__34070__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35277)].join(''),"\n","target__34070__auto__"].join('')));
}

(target__34070__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__35277;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_35282 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_35282);
} else {
var seq__35278_35283 = cljs.core.seq.call(null,json_ml);
var chunk__35279_35284 = null;
var count__35280_35285 = (0);
var i__35281_35286 = (0);
while(true){
if((i__35281_35286 < count__35280_35285)){
var item_35287 = cljs.core._nth.call(null,chunk__35279_35284,i__35281_35286);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_35287,new_depth_budget_35282);


var G__35288 = seq__35278_35283;
var G__35289 = chunk__35279_35284;
var G__35290 = count__35280_35285;
var G__35291 = (i__35281_35286 + (1));
seq__35278_35283 = G__35288;
chunk__35279_35284 = G__35289;
count__35280_35285 = G__35290;
i__35281_35286 = G__35291;
continue;
} else {
var temp__5753__auto___35292 = cljs.core.seq.call(null,seq__35278_35283);
if(temp__5753__auto___35292){
var seq__35278_35293__$1 = temp__5753__auto___35292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35278_35293__$1)){
var c__4638__auto___35294 = cljs.core.chunk_first.call(null,seq__35278_35293__$1);
var G__35295 = cljs.core.chunk_rest.call(null,seq__35278_35293__$1);
var G__35296 = c__4638__auto___35294;
var G__35297 = cljs.core.count.call(null,c__4638__auto___35294);
var G__35298 = (0);
seq__35278_35283 = G__35295;
chunk__35279_35284 = G__35296;
count__35280_35285 = G__35297;
i__35281_35286 = G__35298;
continue;
} else {
var item_35299 = cljs.core.first.call(null,seq__35278_35293__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_35299,new_depth_budget_35282);


var G__35300 = cljs.core.next.call(null,seq__35278_35293__$1);
var G__35301 = null;
var G__35302 = (0);
var G__35303 = (0);
seq__35278_35283 = G__35300;
chunk__35279_35284 = G__35301;
count__35280_35285 = G__35302;
i__35281_35286 = G__35303;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5751__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5751__auto__)){
var initial_hierarchy_depth_budget = temp__5751__auto__;
var remaining_depth_budget = (function (){var or__4212__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map
