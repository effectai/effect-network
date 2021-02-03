goog.provide("cljs.core.async.impl.ioc_macros$macros");
var ret__10368__auto___201 = (function (){
cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_ = (function cljs$core$async$impl$ioc_macros$macros$aset_all_BANG_(var_args){
var args__10338__auto__ = [];
var len__10335__auto___202 = arguments.length;
var i__10336__auto___203 = (0);
while(true){
if((i__10336__auto___203 < len__10335__auto___202)){
args__10338__auto__.push((arguments[i__10336__auto___203]));

var G__204 = (i__10336__auto___203 + (1));
i__10336__auto___203 = G__204;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((3) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((3)),(0),null)):null);
return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10339__auto__);
});

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,arr,more){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more))){
} else {
throw (new Error(["Assert failed: ","Must give an even number of args to aset-all!","\n","(even? (count more))"].join('')));
}

var bindings = cljs.core.partition.call(null,(2),more);
var arr_sym = cljs.core.gensym.call(null,"statearr-");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,arr_sym,null,(1),null)),(new cljs.core.List(null,arr,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,((function (bindings,arr_sym){
return (function (p__197){
var vec__198 = p__197;
var idx = cljs.core.nth.call(null,vec__198,(0),null);
var val = cljs.core.nth.call(null,vec__198,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null),null,(1),null)),(new cljs.core.List(null,arr_sym,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))));
});})(bindings,arr_sym))
,bindings),(new cljs.core.List(null,arr_sym,null,(1),null))));
});

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$applyTo = (function (seq193){
var G__194 = cljs.core.first.call(null,seq193);
var seq193__$1 = cljs.core.next.call(null,seq193);
var G__195 = cljs.core.first.call(null,seq193__$1);
var seq193__$2 = cljs.core.next.call(null,seq193__$1);
var G__196 = cljs.core.first.call(null,seq193__$2);
var seq193__$3 = cljs.core.next.call(null,seq193__$2);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__194,G__195,G__196,seq193__$3);
});

return null;
})()
;
cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$macro = true;

var ret__10368__auto___209 = /**
 * Allows a user to define a state monad binding plan.
 * 
 *   (gen-plan
 *  [_ (assoc-in-plan [:foo :bar] 42)
 *   val (get-in-plan [:foo :bar])]
 *  val)
 */
cljs.core.async.impl.ioc_macros$macros.gen_plan = (function cljs$core$async$impl$ioc_macros$macros$gen_plan(_AMPERSAND_form,_AMPERSAND_env,binds,id_expr){
var binds__$1 = cljs.core.partition.call(null,(2),binds);
var psym = cljs.core.gensym.call(null,"plan_");
var forms = cljs.core.reduce.call(null,((function (binds__$1,psym){
return (function (acc,p__205){
var vec__206 = p__205;
var id = cljs.core.nth.call(null,vec__206,(0),null);
var expr = cljs.core.nth.call(null,vec__206,(1),null);
return cljs.core.concat.call(null,acc,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,id,null,(1),null)),(new cljs.core.List(null,psym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)))),null,(1),null))))));
});})(binds__$1,psym))
,cljs.core.PersistentVector.EMPTY,binds__$1);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,psym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,forms))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,id_expr,null,(1),null)),(new cljs.core.List(null,psym,null,(1),null))))),null,(1),null)))),null,(1),null))));
});
cljs.core.async.impl.ioc_macros$macros.gen_plan.cljs$lang$macro = true;

