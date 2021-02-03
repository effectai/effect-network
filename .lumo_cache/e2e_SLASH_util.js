goog.provide("e2e.util");
e2e.util.node$module$_CIRCA_cityofzion$neon_js = require('@cityofzion/neon-js');
/**
 * Retrieve nep5 arguments from transaction object
 */
e2e.util.parse_nep5 = (function e2e$util$parse_nep5(tx){
var map__47 = cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,(new e2e.util.node$module$_CIRCA_cityofzion$neon_js.sc.ScriptBuilder(tx.script)).toScriptParams()));
var map__47__$1 = (((((!((map__47 == null))))?(((((map__47.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47):map__47);
var script_hash = cljs.core.get.call(null,map__47__$1,"scriptHash");
var vec__48 = cljs.core.get.call(null,map__47__$1,"args");
var method = cljs.core.nth.call(null,vec__48,(0),null);
var vec__51 = cljs.core.nth.call(null,vec__48,(1),null);
var value = cljs.core.nth.call(null,vec__51,(0),null);
var from = cljs.core.nth.call(null,vec__51,(1),null);
var to = cljs.core.nth.call(null,vec__51,(2),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"script-hash","script-hash",(-1835729725)),script_hash,new cljs.core.Keyword(null,"method","method",(55703592)),method,new cljs.core.Keyword(null,"value","value",(305978217)),(new e2e.util.node$module$_CIRCA_cityofzion$neon_js.u.Fixed8(e2e.util.node$module$_CIRCA_cityofzion$neon_js.u.fixed82num.call(null,value,value))).mul((100000000)).toNumber(),new cljs.core.Keyword(null,"from","from",(1815293044)),from,new cljs.core.Keyword(null,"to","to",(192099007)),to], null);
});
e2e.util.pprint_json = (function e2e$util$pprint_json(obj){
return console.log(JSON.stringify(obj,null,(4)));
});
e2e.util.should_fail = (function e2e$util$should_fail(p,msg){
return p.then((function (){
try{return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg], null));
}catch (e55){var t__191__auto__ = e55;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),null,new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}})).catch((function (p1__5_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,(p1__5_SHARP_.message == null),null,(1),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core.not,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",(1612038930),null),cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null),new cljs.core.Symbol(null,"p1__5#","p1__5#",(-2131256081),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core.not,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",(1612038930),null),cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null),new cljs.core.Symbol(null,"p1__5#","p1__5#",(-2131256081),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e56){var t__191__auto__ = e56;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",(1612038930),null),cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null),new cljs.core.Symbol(null,"p1__5#","p1__5#",(-2131256081),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}}));
});
e2e.util.should_succeed = (function e2e$util$should_succeed(var_args){
var G__58 = arguments.length;
switch (G__58) {
case (1):
return e2e.util.should_succeed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return e2e.util.should_succeed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

e2e.util.should_succeed.cljs$core$IFn$_invoke$arity$1 = (function (p){
return e2e.util.should_succeed.call(null,p,"should succeed");
});

e2e.util.should_succeed.cljs$core$IFn$_invoke$arity$2 = (function (p,msg){
return p.catch((function (p1__6_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,p1__6_SHARP_,(new cljs.core.List(null,msg,null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"p1__6#","p1__6#",(-101583728),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"p1__6#","p1__6#",(-101583728),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e59){var t__191__auto__ = e59;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"p1__6#","p1__6#",(-101583728),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}})).then((function (p1__7_SHARP_){
try{var value__184__auto___62 = true;
if(value__184__auto___62){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),true,new cljs.core.Keyword(null,"actual","actual",(107306363)),value__184__auto___62], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),true,new cljs.core.Keyword(null,"actual","actual",(107306363)),value__184__auto___62], null));
}

}catch (e60){var t__191__auto___63 = e60;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),true,new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___63], null));
}
return p1__7_SHARP_;
}));
});

e2e.util.should_succeed.cljs$lang$maxFixedArity = (2);

e2e.util.should_fail_with = (function e2e$util$should_fail_with(var_args){
var G__65 = arguments.length;
switch (G__65) {
case (2):
return e2e.util.should_fail_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return e2e.util.should_fail_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

e2e.util.should_fail_with.cljs$core$IFn$_invoke$arity$2 = (function (p,chk){
return e2e.util.should_fail_with.call(null,p,chk,chk);
});

e2e.util.should_fail_with.cljs$core$IFn$_invoke$arity$3 = (function (p,chk,msg){
return p.then((function (){
try{return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg], null));
}catch (e66){var t__191__auto__ = e66;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),null,new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}})).catch((function (p1__8_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,p1__8_SHARP_.message,(new cljs.core.List(null,chk,null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,clojure.string.ends_with_QMARK_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("string","ends-with?","string/ends-with?",(831349297),null),cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null),new cljs.core.Symbol(null,"p1__8#","p1__8#",(-1032323161),null)),new cljs.core.Symbol(null,"chk","chk",(-1330817191),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,clojure.string.ends_with_QMARK_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("string","ends-with?","string/ends-with?",(831349297),null),cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null),new cljs.core.Symbol(null,"p1__8#","p1__8#",(-1032323161),null)),new cljs.core.Symbol(null,"chk","chk",(-1330817191),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("string","ends-with?","string/ends-with?",(831349297),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e67){var t__191__auto__ = e67;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),msg,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("string","ends-with?","string/ends-with?",(831349297),null),cljs.core.list(new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null),new cljs.core.Symbol(null,"p1__8#","p1__8#",(-1032323161),null)),new cljs.core.Symbol(null,"chk","chk",(-1330817191),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}}));
});

e2e.util.should_fail_with.cljs$lang$maxFixedArity = (3);

e2e.util.wait = (function e2e$util$wait(msec){
return (new Promise((function (resolve,reject){
return setTimeout((function (){
return resolve.call(null,true);
}),msec);
})));
});
/**
 * Shorthand for applyin js/Promise.all to its arguments
 */
e2e.util.p_all = (function e2e$util$p_all(var_args){
var args__10338__auto__ = [];
var len__10335__auto___70 = arguments.length;
var i__10336__auto___71 = (0);
while(true){
if((i__10336__auto___71 < len__10335__auto___70)){
args__10338__auto__.push((arguments[i__10336__auto___71]));

var G__72 = (i__10336__auto___71 + (1));
i__10336__auto___71 = G__72;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return e2e.util.p_all.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

e2e.util.p_all.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return Promise.all(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__9_SHARP_){
return p1__9_SHARP_.catch((function (e){
return cljs.core.prn.call(null,e);
}));
}),ps)));
});

e2e.util.p_all.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
e2e.util.p_all.cljs$lang$applyTo = (function (seq69){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69));
});

/**
 * Like `p-all` but where each promise may fail
 */
e2e.util.p_all_may_fall = (function e2e$util$p_all_may_fall(var_args){
var args__10338__auto__ = [];
var len__10335__auto___74 = arguments.length;
var i__10336__auto___75 = (0);
while(true){
if((i__10336__auto___75 < len__10335__auto___74)){
args__10338__auto__.push((arguments[i__10336__auto___75]));

var G__76 = (i__10336__auto___75 + (1));
i__10336__auto___75 = G__76;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return e2e.util.p_all_may_fall.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

e2e.util.p_all_may_fall.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return Promise.all(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__10_SHARP_){
return p1__10_SHARP_.catch((function (e){
return cljs.core.prn.call(null,e);
}));
}),ps)));
});

e2e.util.p_all_may_fall.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
e2e.util.p_all_may_fall.cljs$lang$applyTo = (function (seq73){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73));
});

