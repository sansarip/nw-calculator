// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core');
goog.require('cljs.core');
goog.require('react');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react = goog.global["React"];
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$create_element(var_args){
var G__33136 = arguments.length;
switch (G__33136) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___33138 = arguments.length;
var i__4819__auto___33139 = (0);
while(true){
if((i__4819__auto___33139 < len__4818__auto___33138)){
args_arr__4839__auto__.push((arguments[i__4819__auto___33139]));

var G__33140 = (i__4819__auto___33139 + (1));
i__4819__auto___33139 = G__33140;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.call(null,type,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react.createElement(type,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react.createElement(type,props,child);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react.createElement,type,props,child,children);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq33132){
var G__33133 = cljs.core.first.call(null,seq33132);
var seq33132__$1 = cljs.core.next.call(null,seq33132);
var G__33134 = cljs.core.first.call(null,seq33132__$1);
var seq33132__$2 = cljs.core.next.call(null,seq33132__$1);
var G__33135 = cljs.core.first.call(null,seq33132__$2);
var seq33132__$3 = cljs.core.next.call(null,seq33132__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33133,G__33134,G__33135,seq33132__$3);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$as_element(var_args){
var G__33142 = arguments.length;
switch (G__33142) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$lang$maxFixedArity = 2);

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$reactify_component(var_args){
var G__33145 = arguments.length;
switch (G__33145) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.call(null,c,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reactify_component.call(null,c,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$lang$maxFixedArity = 2);

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$create_class(var_args){
var G__33148 = arguments.length;
switch (G__33148) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class.call(null,spec,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class.call(null,spec,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$force_update(var_args){
var G__33151 = arguments.length;
switch (G__33151) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.force_update.call(null,this$,false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.force_update.call(null,this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render.call(null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$class_names(var_args){
var G__33157 = arguments.length;
switch (G__33157) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___33159 = arguments.length;
var i__4819__auto___33160 = (0);
while(true){
if((i__4819__auto___33160 < len__4818__auto___33159)){
args_arr__4839__auto__.push((arguments[i__4819__auto___33160]));

var G__33161 = (i__4819__auto___33160 + (1));
i__4819__auto___33160 = G__33161;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,class$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,class1,class2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$lang$applyTo = (function (seq33154){
var G__33155 = cljs.core.first.call(null,seq33154);
var seq33154__$1 = cljs.core.next.call(null,seq33154);
var G__33156 = cljs.core.first.call(null,seq33154__$1);
var seq33154__$2 = cljs.core.next.call(null,seq33154__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33155,G__33156,seq33154__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$merge_props(var_args){
var G__33166 = arguments.length;
switch (G__33166) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___33168 = arguments.length;
var i__4819__auto___33169 = (0);
while(true){
if((i__4819__auto___33169 < len__4818__auto___33168)){
args_arr__4839__auto__.push((arguments[i__4819__auto___33169]));

var G__33170 = (i__4819__auto___33169 + (1));
i__4819__auto___33169 = G__33170;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.call(null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.call(null,defaults);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.call(null,defaults,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$lang$applyTo = (function (seq33163){
var G__33164 = cljs.core.first.call(null,seq33163);
var seq33163__$1 = cljs.core.next.call(null,seq33163);
var G__33165 = cljs.core.first.call(null,seq33163__$1);
var seq33163__$2 = cljs.core.next.call(null,seq33163__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33164,G__33165,seq33163__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$atom(var_args){
var G__33174 = arguments.length;
switch (G__33174) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___33176 = arguments.length;
var i__4819__auto___33177 = (0);
while(true){
if((i__4819__auto___33177 < len__4818__auto___33176)){
args_arr__4839__auto__.push((arguments[i__4819__auto___33177]));

var G__33178 = (i__4819__auto___33177 + (1));
i__4819__auto___33177 = G__33178;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.call(null,x);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$lang$applyTo = (function (seq33172){
var G__33173 = cljs.core.first.call(null,seq33172);
var seq33172__$1 = cljs.core.next.call(null,seq33172);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33173,seq33172__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$track(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33181 = arguments.length;
var i__4819__auto___33182 = (0);
while(true){
if((i__4819__auto___33182 < len__4818__auto___33181)){
args__4824__auto__.push((arguments[i__4819__auto___33182]));

var G__33183 = (i__4819__auto___33182 + (1));
i__4819__auto___33182 = G__33183;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track.call(null,f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$lang$applyTo = (function (seq33179){
var G__33180 = cljs.core.first.call(null,seq33179);
var seq33179__$1 = cljs.core.next.call(null,seq33179);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33180,seq33179__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$track_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33186 = arguments.length;
var i__4819__auto___33187 = (0);
while(true){
if((i__4819__auto___33187 < len__4818__auto___33186)){
args__4824__auto__.push((arguments[i__4819__auto___33187]));

var G__33188 = (i__4819__auto___33187 + (1));
i__4819__auto___33187 = G__33188;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq33184){
var G__33185 = cljs.core.first.call(null,seq33184);
var seq33184__$1 = cljs.core.next.call(null,seq33184);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33185,seq33184__$1);
}));

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$wrap(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33192 = arguments.length;
var i__4819__auto___33193 = (0);
while(true){
if((i__4819__auto___33193 < len__4818__auto___33192)){
args__4824__auto__.push((arguments[i__4819__auto___33193]));

var G__33194 = (i__4819__auto___33193 + (1));
i__4819__auto___33193 = G__33194;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,reset_fn)].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq33189){
var G__33190 = cljs.core.first.call(null,seq33189);
var seq33189__$1 = cljs.core.next.call(null,seq33189);
var G__33191 = cljs.core.first.call(null,seq33189__$1);
var seq33189__$2 = cljs.core.next.call(null,seq33189__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33190,G__33191,seq33189__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$rswap_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33201 = arguments.length;
var i__4819__auto___33202 = (0);
while(true){
if((i__4819__auto___33202 < len__4818__auto___33201)){
args__4824__auto__.push((arguments[i__4819__auto___33202]));

var G__33203 = (i__4819__auto___33202 + (1));
i__4819__auto___33202 = G__33203;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4212__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__33195_SHARP_){
return cljs.core.apply.call(null,f,p1__33195_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__5755__auto__ = (function (){var G__33200 = a;
var G__33200__$1 = (((G__33200 == null))?null:G__33200.rswapfs);
if((G__33200__$1 == null)){
return null;
} else {
return G__33200__$1.shift();
}
})();
if((temp__5755__auto__ == null)){
return s;
} else {
var sf = temp__5755__auto__;
var G__33204 = sf.call(null,s);
s = G__33204;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq33196){
var G__33197 = cljs.core.first.call(null,seq33196);
var seq33196__$1 = cljs.core.next.call(null,seq33196);
var G__33198 = cljs.core.first.call(null,seq33196__$1);
var seq33196__$2 = cljs.core.next.call(null,seq33196__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33197,G__33198,seq33196__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$partial(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33207 = arguments.length;
var i__4819__auto___33208 = (0);
while(true){
if((i__4819__auto___33208 < len__4818__auto___33207)){
args__4824__auto__.push((arguments[i__4819__auto___33208]));

var G__33209 = (i__4819__auto___33208 + (1));
i__4819__auto___33208 = G__33209;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn.call(null,f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$lang$applyTo = (function (seq33205){
var G__33206 = cljs.core.first.call(null,seq33205);
var seq33205__$1 = cljs.core.next.call(null,seq33205);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33206,seq33205__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_compiler = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$create_compiler(opts){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.create_compiler.call(null,opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.set_default_compiler_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$set_default_compiler_BANG_(compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_default_compiler_BANG_.call(null,(((compiler == null))?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler_STAR_:compiler));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$core$render(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33211 = arguments.length;
var i__4819__auto___33212 = (0);
while(true){
if((i__4819__auto___33212 < len__4818__auto___33211)){
args__4824__auto__.push((arguments[i__4819__auto___33212]));

var G__33213 = (i__4819__auto___33212 + (1));
i__4819__auto___33212 = G__33213;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw (new Error("Reagent.core/render function was moved to day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.dom namespace in Reagent v1.0."));

return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$lang$applyTo = (function (seq33210){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33210));
}));


//# sourceMappingURL=core.js.map
