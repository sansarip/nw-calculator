// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('nw_calculator.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
nw_calculator.hooks.global$module$react = goog.global["React"];
nw_calculator.hooks.use_toggle = (function nw_calculator$hooks$use_toggle(initial_value){
var vec__26231 = nw_calculator.hooks.global$module$react.useState(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231,(1),null);
var toggle = (function (){var G__26234 = (function (){
var G__26235 = cljs.core.not(value);
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__26235) : set_value_BANG_.call(null,G__26235));
});
return nw_calculator.hooks.global$module$react.useCallback(G__26234);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,toggle,set_value_BANG_], null);
});
nw_calculator.hooks.use_key_press = (function nw_calculator$hooks$use_key_press(target_key){
var vec__26236 = nw_calculator.hooks.global$module$react.useState(false);
var key_pressed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26236,(0),null);
var set_key_pressed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26236,(1),null);
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
var G__26239_26241 = (function (){
window.addEventListener("keydown",press_key_BANG_);

window.addEventListener("keyup",unpress_key_BANG_);

return (function (){
window.removeEventListener("keydown",press_key_BANG_);

return window.removeEventListener("keyup",unpress_key_BANG_);
});
});
var G__26240_26242 = [];
nw_calculator.hooks.global$module$react.useEffect(G__26239_26241,G__26240_26242);

return key_pressed_QMARK_;
});
