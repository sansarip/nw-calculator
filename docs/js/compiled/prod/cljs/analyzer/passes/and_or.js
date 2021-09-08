// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.analyzer.passes.and_or');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.analyzer.passes');
cljs.analyzer.passes.and_or.simple_ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$host_DASH_field,null,cljs.core.cst$kw$const,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$quote,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$js_DASH_var,null,cljs.core.cst$kw$host_DASH_call,null,cljs.core.cst$kw$local,null], null), null);
cljs.analyzer.passes.and_or.__GT_expr_env = (function cljs$analyzer$passes$and_or$__GT_expr_env(ast){
return cljs.core.assoc_in(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$context], null),cljs.core.cst$kw$expr);
});
cljs.analyzer.passes.and_or.simple_op_QMARK_ = (function cljs$analyzer$passes$and_or$simple_op_QMARK_(ast){
return cljs.core.contains_QMARK_(cljs.analyzer.passes.and_or.simple_ops,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast));
});
cljs.analyzer.passes.and_or.simple_test_expr_QMARK_ = (function cljs$analyzer$passes$and_or$simple_test_expr_QMARK_(p__21036){
var map__21037 = p__21036;
var map__21037__$1 = cljs.core.__destructure_map(map__21037);
var ast = map__21037__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037__$1,cljs.core.cst$kw$op);
return cljs.core.boolean$((function (){var and__4210__auto__ = cljs.analyzer.passes.and_or.simple_op_QMARK_(ast);
if(and__4210__auto__){
var G__21039 = (function (){var or__4212__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_((function (){var fexpr__21040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$var,null,cljs.core.cst$kw$local,null], null), null);
return (fexpr__21040.cljs$core$IFn$_invoke$arity$1 ? fexpr__21040.cljs$core$IFn$_invoke$arity$1(op) : fexpr__21040.call(null,op));
})())){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return null;
}
}
})();
var fexpr__21038 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,"null",cljs.core.cst$sym$boolean,"null"], null), null);
return (fexpr__21038.cljs$core$IFn$_invoke$arity$1 ? fexpr__21038.cljs$core$IFn$_invoke$arity$1(G__21039) : fexpr__21038.call(null,G__21039));
} else {
return and__4210__auto__;
}
})());
});
cljs.analyzer.passes.and_or.single_binding_let_QMARK_ = (function cljs$analyzer$passes$and_or$single_binding_let_QMARK_(ast){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$let,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ast)))));
});
cljs.analyzer.passes.and_or.no_statements_QMARK_ = (function cljs$analyzer$passes$and_or$no_statements_QMARK_(let_ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$statements.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(let_ast)));
});
cljs.analyzer.passes.and_or.returns_if_QMARK_ = (function cljs$analyzer$passes$and_or$returns_if_QMARK_(let_ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$if,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(let_ast))));
});
cljs.analyzer.passes.and_or.simple_test_binding_let_QMARK_ = (function cljs$analyzer$passes$and_or$simple_test_binding_let_QMARK_(ast){
return ((cljs.analyzer.passes.and_or.single_binding_let_QMARK_(ast)) && (((cljs.analyzer.passes.and_or.no_statements_QMARK_(ast)) && (((cljs.analyzer.passes.and_or.simple_test_expr_QMARK_(cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ast))))) && (cljs.analyzer.passes.and_or.returns_if_QMARK_(ast)))))));
});
cljs.analyzer.passes.and_or.test_EQ_then_QMARK_ = (function cljs$analyzer$passes$and_or$test_EQ_then_QMARK_(if_ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(if_ast),cljs.core.cst$kw$env),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(if_ast),cljs.core.cst$kw$env));
});
cljs.analyzer.passes.and_or.test_EQ_else_QMARK_ = (function cljs$analyzer$passes$and_or$test_EQ_else_QMARK_(if_ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(if_ast),cljs.core.cst$kw$env),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(if_ast),cljs.core.cst$kw$env));
});
cljs.analyzer.passes.and_or.simple_and_QMARK_ = (function cljs$analyzer$passes$and_or$simple_and_QMARK_(ast){
return ((cljs.analyzer.passes.and_or.simple_test_binding_let_QMARK_(ast)) && (cljs.analyzer.passes.and_or.test_EQ_else_QMARK_(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(ast)))));
});
cljs.analyzer.passes.and_or.simple_or_QMARK_ = (function cljs$analyzer$passes$and_or$simple_or_QMARK_(ast){
return ((cljs.analyzer.passes.and_or.simple_test_binding_let_QMARK_(ast)) && (cljs.analyzer.passes.and_or.test_EQ_then_QMARK_(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(ast)))));
});
cljs.analyzer.passes.and_or.optimizable_and_QMARK_ = (function cljs$analyzer$passes$and_or$optimizable_and_QMARK_(ast){
return ((cljs.analyzer.passes.and_or.simple_and_QMARK_(ast)) && (cljs.analyzer.passes.and_or.simple_test_expr_QMARK_(cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(ast))))));
});
cljs.analyzer.passes.and_or.optimizable_or_QMARK_ = (function cljs$analyzer$passes$and_or$optimizable_or_QMARK_(ast){
return ((cljs.analyzer.passes.and_or.simple_or_QMARK_(ast)) && (cljs.analyzer.passes.and_or.simple_test_expr_QMARK_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(ast))))));
});
cljs.analyzer.passes.and_or.remove_loop_let = (function cljs$analyzer$passes$and_or$remove_loop_let(fn_ast,local){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(fn_ast,cljs.core.cst$kw$loop_DASH_lets,(function (loop_lets){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$params,(function (xs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21041_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(local,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__21041_SHARP_));
}),xs);
}));
}),loop_lets);
}));
});
cljs.analyzer.passes.and_or.remove_local_pass = (function cljs$analyzer$passes$and_or$remove_local_pass(local){
return (function (env,ast,opts){
var G__21042 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$locals], null),cljs.core.dissoc,local);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.analyzer.passes.and_or.remove_loop_let(G__21042,local);
} else {
return G__21042;
}
});
});
cljs.analyzer.passes.and_or.optimize_and = (function cljs$analyzer$passes$and_or$optimize_and(ast){
var map__21043 = cljs.core.first(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ast));
var map__21043__$1 = cljs.core.__destructure_map(map__21043);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,cljs.core.cst$kw$init);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js,cljs.core.cst$kw$env,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$segs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((",") && (","))"], null),cljs.core.cst$kw$args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.passes.and_or.__GT_expr_env(cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(ast)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.passes.and_or.remove_local_pass(name)], null))], null),cljs.core.cst$kw$form,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null);
});
cljs.analyzer.passes.and_or.optimize_or = (function cljs$analyzer$passes$and_or$optimize_or(ast){
var map__21044 = cljs.core.first(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ast));
var map__21044__$1 = cljs.core.__destructure_map(map__21044);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21044__$1,cljs.core.cst$kw$init);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21044__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js,cljs.core.cst$kw$env,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$segs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((",") || (","))"], null),cljs.core.cst$kw$args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.passes.and_or.__GT_expr_env(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(ast)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.passes.and_or.remove_local_pass(name)], null))], null),cljs.core.cst$kw$form,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null);
});
cljs.analyzer.passes.and_or.optimize = (function cljs$analyzer$passes$and_or$optimize(env,ast,_){
if(cljs.analyzer.passes.and_or.optimizable_and_QMARK_(ast)){
return cljs.analyzer.passes.and_or.optimize_and(ast);
} else {
if(cljs.analyzer.passes.and_or.optimizable_or_QMARK_(ast)){
return cljs.analyzer.passes.and_or.optimize_or(ast);
} else {
return ast;

}
}
});
