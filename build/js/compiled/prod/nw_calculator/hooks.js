// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
nw_calculator.hooks.global$module$react = goog.global["React"];
nw_calculator.hooks.use_toggle = (function nw_calculator$hooks$use_toggle(initial_value){
var vec__28223 = nw_calculator.hooks.global$module$react.useState(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28223,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28223,(1),null);
var toggle = (function (){var G__28226 = (function (){
var G__28227 = cljs.core.not(value);
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__28227) : set_value_BANG_.call(null,G__28227));
});
return nw_calculator.hooks.global$module$react.useCallback(G__28226);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,toggle,set_value_BANG_], null);
});
nw_calculator.hooks.use_key_press = (function nw_calculator$hooks$use_key_press(target_key){
var vec__28228 = nw_calculator.hooks.global$module$react.useState(false);
var key_pressed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28228,(0),null);
var set_key_pressed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28228,(1),null);
var press_key_BANG_ = (function nw_calculator$hooks$use_key_press_$_press_key_BANG_(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,target_key)){
return (set_key_pressed.cljs$core$IFn$_invoke$arity$1 ? set_key_pressed.cljs$core$IFn$_invoke$arity$1(true) : set_key_pressed.call(null,true));
} else {
return null;
}
});
var unpress_key_BANG_ = (function nw_calculator$hooks$use_key_press_$_unpress_key_BANG_(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,target_key)){
return (set_key_pressed.cljs$core$IFn$_invoke$arity$1 ? set_key_pressed.cljs$core$IFn$_invoke$arity$1(false) : set_key_pressed.call(null,false));
} else {
return null;
}
});
var G__28231_28233 = (function (){
window.addEventListener("keydown",press_key_BANG_);

window.addEventListener("keyup",unpress_key_BANG_);

return (function (){
window.removeEventListener("keydown",press_key_BANG_);

return window.removeEventListener("keyup",unpress_key_BANG_);
});
});
var G__28232_28234 = [];
nw_calculator.hooks.global$module$react.useEffect(G__28231_28233,G__28232_28234);

return key_pressed_QMARK_;
});
