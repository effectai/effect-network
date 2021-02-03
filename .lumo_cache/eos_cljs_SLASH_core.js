goog.provide("eos_cljs.core");
eos_cljs.core.node$module$eosjs = require('eosjs');
eos_cljs.core.node$module$eosjs$dist$eosjs_jssig = require('eosjs/dist/eosjs-jssig');
eos_cljs.core.node$module$fs = require('fs');
eos_cljs.core.node$module$util = require('util');
eos_cljs.core.node$module$node_fetch = require('node-fetch');
eos_cljs.core.rpc_url = "http://localhost:8888";
eos_cljs.core.priv_key = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
eos_cljs.core.pub_key = "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV";
/**
 * Javascript console.log shorthand
 */
eos_cljs.core.prnj = (function eos_cljs$core$prnj(m){
return console.log(m);
});
eos_cljs.core.msg_contract_exist = "contract is already running this version of code";
eos_cljs.core.make_api = (function eos_cljs$core$make_api(p__22){
var map__23 = p__22;
var map__23__$1 = (((((!((map__23 == null))))?(((((map__23.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23):map__23);
var rpc_url = cljs.core.get.call(null,map__23__$1,new cljs.core.Keyword(null,"rpc-url","rpc-url",(86865451)));
var priv_keys = cljs.core.get.call(null,map__23__$1,new cljs.core.Keyword(null,"priv-keys","priv-keys",(-1302538030)));
var sig_provider = (new eos_cljs.core.node$module$eosjs$dist$eosjs_jssig.JsSignatureProvider(cljs.core.clj__GT_js.call(null,priv_keys)));
var rpc = (new eos_cljs.core.node$module$eosjs.JsonRpc(rpc_url,({"fetch": eos_cljs.core.node$module$node_fetch})));
return (new eos_cljs.core.node$module$eosjs.Api(({"rpc": rpc, "signatureProvider": sig_provider, "textDecoder": (new eos_cljs.core.node$module$util.TextDecoder()), "textEncoder": (new eos_cljs.core.node$module$util.TextEncoder())})));
});
eos_cljs.core.apis = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"local","local",(-1497766724)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rpc-url","rpc-url",(86865451)),"http://localhost:8888",new cljs.core.Keyword(null,"chain-id","chain-id",(103171314)),"cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",new cljs.core.Keyword(null,"priv-keys","priv-keys",(-1302538030)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5Jmsawgsp1tQ3GD6JyGCwy1dcvqKZgX6ugMVMdjirx85iv5VyPR"], null)], null),new cljs.core.Keyword(null,"jungle","jungle",(-621384673)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rpc-url","rpc-url",(86865451)),"http://jungle2.cryptolions.io:80",new cljs.core.Keyword(null,"chain-id","chain-id",(103171314)),"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",new cljs.core.Keyword(null,"priv-keys","priv-keys",(-1302538030)),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"mainnet","mainnet",(1085077630)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rpc-url","rpc-url",(86865451)),"https://public.eosinfra.io",new cljs.core.Keyword(null,"chain-id","chain-id",(103171314)),"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",new cljs.core.Keyword(null,"priv-keys","priv-keys",(-1302538030)),cljs.core.PersistentVector.EMPTY], null)], null);
eos_cljs.core.api = cljs.core.atom.call(null,eos_cljs.core.make_api.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rpc-url","rpc-url",(86865451)),eos_cljs.core.rpc_url,new cljs.core.Keyword(null,"priv-keys","priv-keys",(-1302538030)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eos_cljs.core.priv_key], null)], null)));
eos_cljs.core.set_api_BANG_ = (function eos_cljs$core$set_api_BANG_(a){
return cljs.core.reset_BANG_.call(null,eos_cljs.core.api,eos_cljs.core.make_api.call(null,a));
});
eos_cljs.core.get_table_rows = (function eos_cljs$core$get_table_rows(account,scope,table){
return cljs.core.deref.call(null,eos_cljs.core.api).rpc.get_table_rows(({"code": account, "scope": scope, "table": table, "limit": (10)})).then(cljs.core.js__GT_clj).then((function (p1__1_SHARP_){
return cljs.core.get.call(null,p1__1_SHARP_,"rows");
}));
});
eos_cljs.core.get_table_row = (function eos_cljs$core$get_table_row(account,scope,table,id){
return cljs.core.deref.call(null,eos_cljs.core.api).rpc.get_table_rows(({"code": account, "scope": scope, "table": table, "lower_bound": id, "upper_bound": id, "limit": (10)})).then(cljs.core.js__GT_clj).then((function (p1__2_SHARP_){
return cljs.core.get.call(null,p1__2_SHARP_,"rows");
})).then(cljs.core.first);
});
eos_cljs.core.get_scheduled_txs = (function eos_cljs$core$get_scheduled_txs(){
return cljs.core.deref.call(null,eos_cljs.core.api).rpc.fetch("/v1/chain/get_scheduled_transactions").then((function (p1__3_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__3_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",(1310784252)),true);
}));
});
/**
 * Fill a partial `abi` object will all the possible fields defined in
 *   `abi-definition`
 */
eos_cljs.core.complete_abi = (function eos_cljs$core$complete_abi(abi_definition,abi){
return cljs.core.reduce.call(null,(function (m,p__25){
var map__26 = p__25;
var map__26__$1 = (((((!((map__26 == null))))?(((((map__26.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26):map__26);
var field = cljs.core.get.call(null,map__26__$1,"name");
return cljs.core.assoc.call(null,m,field,(function (){var or__9218__auto__ = cljs.core.get.call(null,m,field);
if(cljs.core.truth_(or__9218__auto__)){
return or__9218__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}),cljs.core.js__GT_clj.call(null,abi),cljs.core.js__GT_clj.call(null,abi_definition.fields));
});
/**
 * Read a contract binary abi and wasm into a map
 */
eos_cljs.core.read_contract = (function eos_cljs$core$read_contract(file){
var buffer = (new eos_cljs.core.node$module$eosjs.Serialize.SerialBuffer(({"textEncoder": cljs.core.deref.call(null,eos_cljs.core.api).textEncoder, "textDecoder": cljs.core.deref.call(null,eos_cljs.core.api).textDecoder})));
var wasm = eos_cljs.core.node$module$fs.readFileSync.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),".wasm"].join('')).toString("hex");
var abi = JSON.parse(eos_cljs.core.node$module$fs.readFileSync.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),".abi"].join(''),"utf8"));
var abi_def = cljs.core.deref.call(null,eos_cljs.core.api).abiTypes.get("abi_def");
var abi_complete = cljs.core.clj__GT_js.call(null,eos_cljs.core.complete_abi.call(null,abi_def,abi));
abi_def.serialize(buffer,abi_complete);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wasm","wasm",(-969992002)),wasm,new cljs.core.Keyword(null,"abi","abi",(-1999451499)),Buffer.from(buffer.asUint8Array()).toString("hex")], null);
});
eos_cljs.core.transact_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sign?","sign?",(-786003552)),true,new cljs.core.Keyword(null,"broadcast?","broadcast?",(266836784)),true,new cljs.core.Keyword(null,"expire-sec","expire-sec",(1126244027)),(5)], null);
eos_cljs.core.deploy = (function eos_cljs$core$deploy(var_args){
var G__29 = arguments.length;
switch (G__29) {
case (2):
return eos_cljs.core.deploy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return eos_cljs.core.deploy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eos_cljs.core.deploy.cljs$core$IFn$_invoke$arity$2 = (function (account,file){
return eos_cljs.core.deploy.call(null,account,file,cljs.core.PersistentArrayMap.EMPTY);
});

eos_cljs.core.deploy.cljs$core$IFn$_invoke$arity$3 = (function (account,file,opts){
var map__30 = eos_cljs.core.read_contract.call(null,file);
var map__30__$1 = (((((!((map__30 == null))))?(((((map__30.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30):map__30);
var abi = cljs.core.get.call(null,map__30__$1,new cljs.core.Keyword(null,"abi","abi",(-1999451499)));
var wasm = cljs.core.get.call(null,map__30__$1,new cljs.core.Keyword(null,"wasm","wasm",(-969992002)));
var map__32 = cljs.core.merge.call(null,eos_cljs.core.transact_opts,opts);
var map__32__$1 = (((((!((map__32 == null))))?(((((map__32.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32):map__32);
var sign_QMARK_ = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"sign?","sign?",(-786003552)));
var broadcast_QMARK_ = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"broadcast?","broadcast?",(266836784)));
var expire_sec = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"expire-sec","expire-sec",(1126244027)));
var tx = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",(-812656882)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),"eosio",new cljs.core.Keyword(null,"name","name",(1843675177)),"setcode",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),account,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),account,new cljs.core.Keyword(null,"vmtype","vmtype",(-985918816)),(0),new cljs.core.Keyword(null,"vmversion","vmversion",(-666159673)),(0),new cljs.core.Keyword(null,"code","code",(1586293142)),wasm], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),"eosio",new cljs.core.Keyword(null,"name","name",(1843675177)),"setabi",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),account,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"account","account",(718006320)),account,new cljs.core.Keyword(null,"abi","abi",(-1999451499)),abi], null)], null)], null)], null));
return cljs.core.deref.call(null,eos_cljs.core.api).transact(tx,({"sign": sign_QMARK_, "broadcast": broadcast_QMARK_, "blocksBehind": (0), "expireSeconds": expire_sec}));
});

eos_cljs.core.deploy.cljs$lang$maxFixedArity = (3);

eos_cljs.core.create_account = (function eos_cljs$core$create_account(creator,name){
var tx = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",(-812656882)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),"eosio",new cljs.core.Keyword(null,"name","name",(1843675177)),"newaccount",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),creator,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"creator","creator",(-1069241724)),creator,new cljs.core.Keyword(null,"name","name",(1843675177)),name,new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threshold","threshold",(204221583)),(1),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",(-1516042587)),eos_cljs.core.pub_key,new cljs.core.Keyword(null,"weight","weight",(-1262796205)),(1)], null)], null),new cljs.core.Keyword(null,"accounts","accounts",(-935308676)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"waits","waits",(-716278748)),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"active","active",(1895962068)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threshold","threshold",(204221583)),(1),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",(-1516042587)),eos_cljs.core.pub_key,new cljs.core.Keyword(null,"weight","weight",(-1262796205)),(1)], null)], null),new cljs.core.Keyword(null,"accounts","accounts",(-935308676)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"waits","waits",(-716278748)),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null));
return cljs.core.deref.call(null,eos_cljs.core.api).transact(tx,({"sign": true, "broadcast": true, "blocksBehind": (0), "expireSeconds": (5)}));
});
eos_cljs.core.random_account = (function eos_cljs$core$random_account(prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.apply,cljs.core.repeat.call(null,(5),(function (){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f","g","h"], null));
})))))].join('');
});
eos_cljs.core.update_auth = (function eos_cljs$core$update_auth(var_args){
var G__36 = arguments.length;
switch (G__36) {
case (4):
return eos_cljs.core.update_auth.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (3):
return eos_cljs.core.update_auth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eos_cljs.core.update_auth.cljs$core$IFn$_invoke$arity$4 = (function (account,permission,delegate,delegate_permission){
return eos_cljs.core.update_auth.call(null,account,permission,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"permission","permission",(-511292572)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),delegate,new cljs.core.Keyword(null,"permission","permission",(-511292572)),delegate_permission], null),new cljs.core.Keyword(null,"weight","weight",(-1262796205)),(1)], null)], null));
});

eos_cljs.core.update_auth.cljs$core$IFn$_invoke$arity$3 = (function (account,permission,delegates){
var tx = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",(-812656882)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),"eosio",new cljs.core.Keyword(null,"name","name",(1843675177)),"updateauth",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),account,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),account,new cljs.core.Keyword(null,"permission","permission",(-511292572)),permission,new cljs.core.Keyword(null,"parent","parent",(-878878779)),"owner",new cljs.core.Keyword(null,"auth","auth",(1389754926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"threshold","threshold",(204221583)),(1),new cljs.core.Keyword(null,"accounts","accounts",(-935308676)),delegates,new cljs.core.Keyword(null,"waits","waits",(-716278748)),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null));
return cljs.core.deref.call(null,eos_cljs.core.api).transact(tx,({"sign": true, "broadcast": true, "blocksBehind": (0), "expireSeconds": (5)}));
});

eos_cljs.core.update_auth.cljs$lang$maxFixedArity = (4);

eos_cljs.core.transact = (function eos_cljs$core$transact(var_args){
var G__39 = arguments.length;
switch (G__39) {
case (2):
return eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (3):
return eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (actions,opts){
var map__40 = cljs.core.merge.call(null,eos_cljs.core.transact_opts,opts);
var map__40__$1 = (((((!((map__40 == null))))?(((((map__40.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40):map__40);
var pp = map__40__$1;
var sign_QMARK_ = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"sign?","sign?",(-786003552)));
var broadcast_QMARK_ = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"broadcast?","broadcast?",(266836784)));
var expire_sec = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"expire-sec","expire-sec",(1126244027)));
var tx = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",(-812656882)),actions], null));
return cljs.core.deref.call(null,eos_cljs.core.api).transact(tx,({"sign": sign_QMARK_, "broadcast": broadcast_QMARK_, "blocksBehind": (0), "expireSeconds": expire_sec}));
});

eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$1 = (function (actions){
return eos_cljs.core.transact.call(null,actions,cljs.core.PersistentArrayMap.EMPTY);
});

eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (account,name,data){
return eos_cljs.core.transact.call(null,account,name,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),account,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});

eos_cljs.core.transact.cljs$core$IFn$_invoke$arity$4 = (function (account,name,data,auths){
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),account,new cljs.core.Keyword(null,"name","name",(1843675177)),name,new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),auths,new cljs.core.Keyword(null,"data","data",(-232669377)),data], null)], null));
});

eos_cljs.core.transact.cljs$lang$maxFixedArity = (4);

/**
 * For now waitblock is a static timeout
 */
eos_cljs.core.wait_block = (function eos_cljs$core$wait_block(var_args){
var G__44 = arguments.length;
switch (G__44) {
case (1):
return eos_cljs.core.wait_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return eos_cljs.core.wait_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eos_cljs.core.wait_block.cljs$core$IFn$_invoke$arity$1 = (function (p){
return eos_cljs.core.wait_block.call(null,p,(1));
});

eos_cljs.core.wait_block.cljs$core$IFn$_invoke$arity$2 = (function (p,n){
return p.then((function (p1__4_SHARP_){
return (new Promise((function (resolve,reject){
return setTimeout((function (){
return resolve.call(null,p1__4_SHARP_);
}),(n * (500)));
})));
}));
});

eos_cljs.core.wait_block.cljs$lang$maxFixedArity = (2);

/**
 * Retrieve console output from a raw EOS transaction
 */
eos_cljs.core.tx_get_console = (function eos_cljs$core$tx_get_console(tx){
try{return (tx["processed"]["action_traces"][(0)]["console"]);
}catch (e46){if((e46 instanceof Error)){
var e = e46;
return "";
} else {
throw e46;

}
}});
eos_cljs.core.sign_tx = (function eos_cljs$core$sign_tx(serialized_tx,chain_id,pub){
var sig_provider = cljs.core.deref.call(null,eos_cljs.core.api).signatureProvider;
return sig_provider.sign(({"chainId": chain_id, "requiredKeys": [pub], "serializedTransaction": serialized_tx}));
});
