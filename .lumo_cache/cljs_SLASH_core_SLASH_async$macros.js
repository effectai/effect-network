goog.provide("cljs.core.async$macros");
var ret__10368__auto___1047 = (function (){
/**
 * Asynchronously executes the body, returning immediately to the
 *   calling thread. Additionally, any visible calls to <!, >! and alt!/alts!
 *   channel operations within the body will block (if necessary) by
 *   'parking' the calling thread rather than tying up an OS thread (or
 *   the only JS thread when in ClojureScript). Upon completion of the
 *   operation, the body will be resumed.
 * 
 *   Returns a channel which will receive the result of the body when
 *   completed
 */
cljs.core.async$macros.go = (function cljs$core$async$macros$go(var_args){
var args__10338__auto__ = [];
var len__10335__auto___1048 = arguments.length;
var i__10336__auto___1049 = (0);
while(true){
if((i__10336__auto___1049 < len__10335__auto___1048)){
args__10338__auto__.push((arguments[i__10336__auto___1049]));

var G__1050 = (i__10336__auto___1049 + (1));
i__10336__auto___1049 = G__1050;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((2) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((2)),(0),null)):null);
return cljs.core.async$macros.go.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10339__auto__);
});

cljs.core.async$macros.go.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__19__auto__","c__19__auto__",(-1075508905),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","chan","cljs.core.async/chan",(589627473),null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.dispatch","run","cljs.core.async.impl.dispatch/run",(1404881359),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__20__auto__","f__20__auto__",(833298240),null),null,(1),null)),(new cljs.core.List(null,cljs.core.async.impl.ioc_macros_runtime.state_machine.call(null,body,(1),_AMPERSAND_env,cljs.core.async.impl.ioc_macros_runtime.async_custom_terminators),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"state__21__auto__","state__21__auto__",(-781191857),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__20__auto__","f__20__auto__",(833298240),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","USER-START-IDX","cljs.core.async.impl.ioc-helpers/USER-START-IDX",(1543304914),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__19__auto__","c__19__auto__",(-1075508905),null),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","run-state-machine-wrapped","cljs.core.async.impl.ioc-helpers/run-state-machine-wrapped",(-1978728889),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"state__21__auto__","state__21__auto__",(-781191857),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__19__auto__","c__19__auto__",(-1075508905),null),null,(1),null))));
});

cljs.core.async$macros.go.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core.async$macros.go.cljs$lang$applyTo = (function (seq1044){
var G__1045 = cljs.core.first.call(null,seq1044);
var seq1044__$1 = cljs.core.next.call(null,seq1044);
var G__1046 = cljs.core.first.call(null,seq1044__$1);
var seq1044__$2 = cljs.core.next.call(null,seq1044__$1);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1045,G__1046,seq1044__$2);
});

return null;
})()
;
cljs.core.async$macros.go.cljs$lang$macro = true;

cljs.core.async$macros.do_alt = (function cljs$core$async$macros$do_alt(alts,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error(["Assert failed: ","unbalanced clauses","\n","(even? (count clauses))"].join('')));
}

var clauses__$1 = cljs.core.partition.call(null,(2),clauses);
var opt_QMARK_ = ((function (clauses__$1){
return (function (p1__22_SHARP_){
return (cljs.core.first.call(null,p1__22_SHARP_) instanceof cljs.core.Keyword);
});})(clauses__$1))
;
var opts = cljs.core.filter.call(null,opt_QMARK_,clauses__$1);
var clauses__$2 = cljs.core.remove.call(null,opt_QMARK_,clauses__$1);
var vec__1051 = cljs.core.reduce.call(null,((function (clauses__$1,opt_QMARK_,opts,clauses__$2){
return (function (p__1054,p__1055){
var vec__1056 = p__1054;
var clauses__$3 = cljs.core.nth.call(null,vec__1056,(0),null);
var bindings = cljs.core.nth.call(null,vec__1056,(1),null);
var vec__1059 = p__1055;
var ports = cljs.core.nth.call(null,vec__1059,(0),null);
var expr = cljs.core.nth.call(null,vec__1059,(1),null);
var ports__$1 = ((cljs.core.vector_QMARK_.call(null,ports))?ports:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports], null));
var vec__1062 = cljs.core.reduce.call(null,((function (ports__$1,vec__1056,clauses__$3,bindings,vec__1059,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2){
return (function (p__1065,port){
var vec__1066 = p__1065;
var ports__$2 = cljs.core.nth.call(null,vec__1066,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__1066,(1),null);
if(cljs.core.vector_QMARK_.call(null,port)){
var vec__1069 = port;
var port__$1 = cljs.core.nth.call(null,vec__1069,(0),null);
var val = cljs.core.nth.call(null,vec__1069,(1),null);
var gp = cljs.core.gensym.call(null);
var gv = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,gv], null)),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gv,val], null))], null);
} else {
var gp = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,gp),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port], null))], null);
}
});})(ports__$1,vec__1056,clauses__$3,bindings,vec__1059,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,bindings], null),ports__$1);
var ports__$2 = cljs.core.nth.call(null,vec__1062,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__1062,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,clauses__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports__$2,expr], null)),bindings__$1], null);
});})(clauses__$1,opt_QMARK_,opts,clauses__$2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),clauses__$2);
var clauses__$3 = cljs.core.nth.call(null,vec__1051,(0),null);
var bindings = cljs.core.nth.call(null,vec__1051,(1),null);
var gch = cljs.core.gensym.call(null,"ch");
var gret = cljs.core.gensym.call(null,"ret");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.identity,bindings),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"val__23__auto__","val__23__auto__",(1763374728),null),null,(1),null)),(new cljs.core.List(null,gch,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"as","as",(1148689641)),null,(1),null)),(new cljs.core.List(null,gret,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,alts,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.first,clauses__$3))))),null,(1),null)),cljs.core.apply.call(null,cljs.core.concat,opts))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),cljs.core.mapcat.call(null,((function (clauses__$1,opt_QMARK_,opts,clauses__$2,vec__1051,clauses__$3,bindings,gch,gret){
return (function (p__1072){
var vec__1073 = p__1072;
var ports = cljs.core.nth.call(null,vec__1073,(0),null);
var expr = cljs.core.nth.call(null,vec__1073,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),cljs.core.map.call(null,((function (vec__1073,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2,vec__1051,clauses__$3,bindings,gch,gret){
return (function (port){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,gch,null,(1),null)),(new cljs.core.List(null,((cljs.core.vector_QMARK_.call(null,port))?cljs.core.first.call(null,port):port),null,(1),null))));
});})(vec__1073,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2,vec__1051,clauses__$3,bindings,gch,gret))
,ports))),((((cljs.core.seq_QMARK_.call(null,expr)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,expr)))))?cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,expr),null,(1),null)),(new cljs.core.List(null,gret,null,(1),null))))),null,(1),null)),cljs.core.rest.call(null,expr))):expr)], null);
});})(clauses__$1,opt_QMARK_,opts,clauses__$2,vec__1051,clauses__$3,bindings,gch,gret))
,clauses__$3),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,gch,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"val__23__auto__","val__23__auto__",(1763374728),null),null,(1),null)))),null,(1),null))));
});
var ret__10368__auto___1079 = (function (){
/**
 * Makes a single choice between one of several channel operations,
 *   as if by alts!, returning the value of the result expr corresponding
 *   to the operation completed. Must be called inside a (go ...) block.
 * 
 *   Each clause takes the form of:
 * 
 *   channel-op[s] result-expr
 * 
 *   where channel-ops is one of:
 * 
 *   take-port - a single port to take
 *   [take-port | [put-port put-val] ...] - a vector of ports as per alts!
 *   :default | :priority - an option for alts!
 * 
 *   and result-expr is either a list beginning with a vector, whereupon that
 *   vector will be treated as a binding for the [val port] return of the
 *   operation, else any other expression.
 * 
 *   (alt!
 *  [c t] ([val ch] (foo ch val))
 *  x ([v] v)
 *  [[out val]] :wrote
 *  :default 42)
 * 
 *   Each option may appear at most once. The choice and parking
 *   characteristics are those of alts!.
 */
cljs.core.async$macros.alt_BANG_ = (function cljs$core$async$macros$alt_BANG_(var_args){
var args__10338__auto__ = [];
var len__10335__auto___1080 = arguments.length;
var i__10336__auto___1081 = (0);
while(true){
if((i__10336__auto___1081 < len__10335__auto___1080)){
args__10338__auto__.push((arguments[i__10336__auto___1081]));

var G__1082 = (i__10336__auto___1081 + (1));
i__10336__auto___1081 = G__1082;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((2) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((2)),(0),null)):null);
return cljs.core.async$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10339__auto__);
});

cljs.core.async$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
return cljs.core.async$macros.do_alt.call(null,new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),clauses);
});

cljs.core.async$macros.alt_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.core.async$macros.alt_BANG_.cljs$lang$applyTo = (function (seq1076){
var G__1077 = cljs.core.first.call(null,seq1076);
var seq1076__$1 = cljs.core.next.call(null,seq1076);
var G__1078 = cljs.core.first.call(null,seq1076__$1);
var seq1076__$2 = cljs.core.next.call(null,seq1076__$1);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1077,G__1078,seq1076__$2);
});

return null;
})()
;
cljs.core.async$macros.alt_BANG_.cljs$lang$macro = true;

var ret__10368__auto___1087 = (function (){
/**
 * Like (go (loop ...))
 */
cljs.core.async$macros.go_loop = (function cljs$core$async$macros$go_loop(var_args){
var args__10338__auto__ = [];
var len__10335__auto___1088 = arguments.length;
var i__10336__auto___1089 = (0);
while(true){
if((i__10336__auto___1089 < len__10335__auto___1088)){
args__10338__auto__.push((arguments[i__10336__auto___1089]));

var G__1090 = (i__10336__auto___1089 + (1));
i__10336__auto___1089 = G__1090;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((3) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((3)),(0),null)):null);
return cljs.core.async$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10339__auto__);
});

cljs.core.async$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","go","cljs.core.async/go",(-2141995263),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)),null,(1),null))));
});

cljs.core.async$macros.go_loop.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async$macros.go_loop.cljs$lang$applyTo = (function (seq1083){
var G__1084 = cljs.core.first.call(null,seq1083);
var seq1083__$1 = cljs.core.next.call(null,seq1083);
var G__1085 = cljs.core.first.call(null,seq1083__$1);
var seq1083__$2 = cljs.core.next.call(null,seq1083__$1);
var G__1086 = cljs.core.first.call(null,seq1083__$2);
var seq1083__$3 = cljs.core.next.call(null,seq1083__$2);
var self__10326__auto__ = this;
return self__10326__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1084,G__1085,G__1086,seq1083__$3);
});

return null;
})()
;
cljs.core.async$macros.go_loop.cljs$lang$macro = true;

