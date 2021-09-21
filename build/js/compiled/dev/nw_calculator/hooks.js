// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('nw_calculator.hooks');
goog.require('cljs.core');
goog.require('react');
nw_calculator.hooks.global$module$react = goog.global["React"];
nw_calculator.hooks.use_toggle = (function nw_calculator$hooks$use_toggle(initial_value){
var vec__27942 = nw_calculator.hooks.global$module$react.useState(initial_value);
var value = cljs.core.nth.call(null,vec__27942,(0),null);
var set_value_BANG_ = cljs.core.nth.call(null,vec__27942,(1),null);
var toggle = nw_calculator.hooks.global$module$react.useCallback((function (){
return set_value_BANG_.call(null,cljs.core.not.call(null,value));
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,toggle,set_value_BANG_], null);
});
nw_calculator.hooks.use_key_press = (function nw_calculator$hooks$use_key_press(target_key){
var vec__27945 = nw_calculator.hooks.global$module$react.useState(false);
var key_pressed_QMARK_ = cljs.core.nth.call(null,vec__27945,(0),null);
var set_key_pressed = cljs.core.nth.call(null,vec__27945,(1),null);
var press_key_BANG_ = (function nw_calculator$hooks$use_key_press_$_press_key_BANG_(e){
if(cljs.core._EQ_.call(null,e.key,target_key)){
return set_key_pressed.call(null,true);
} else {
return null;
}
});
var unpress_key_BANG_ = (function nw_calculator$hooks$use_key_press_$_unpress_key_BANG_(e){
if(cljs.core._EQ_.call(null,e.key,target_key)){
return set_key_pressed.call(null,false);
} else {
return null;
}
});
nw_calculator.hooks.global$module$react.useEffect((function (){
window.addEventListener("keydown",press_key_BANG_);

window.addEventListener("keyup",unpress_key_BANG_);

return (function (){
window.removeEventListener("keydown",press_key_BANG_);

return window.removeEventListener("keyup",unpress_key_BANG_);
});
}),[]);

return key_pressed_QMARK_;
});

//# sourceMappingURL=hooks.js.map
