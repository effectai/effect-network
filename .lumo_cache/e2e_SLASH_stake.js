goog.provide("e2e.stake");
e2e.stake.node$module$_CIRCA_cityofzion$neon_js = require('@cityofzion/neon-js');
e2e.stake.stake_acc = eos_cljs.core.random_account.call(null,"stk");
e2e.stake.token_acc = e2e.token.account;
e2e.stake.owner_acc = e2e.token.owner_acc;
e2e.stake.tkn_acc = eos_cljs.core.random_account.call(null,"zbc");
e2e.stake.sym = "STK";
e2e.stake.sym_f = "4,STK";
e2e.stake.claim_sym = "CLM";
e2e.stake.total_amount = "15000000.0000";
e2e.stake.total_supply = [e2e.stake.total_amount," ",e2e.stake.sym].join('');
e2e.stake.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",(-1633692388)),(function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake7050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake7050 = (function (meta7051){
this.meta7051 = meta7051;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake7050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7052,meta7051__$1){
var self__ = this;
var _7052__$1 = this;
return (new e2e.stake.t_e2e$stake7050(meta7051__$1));
});

e2e.stake.t_e2e$stake7050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7052){
var self__ = this;
var _7052__$1 = this;
return self__.meta7051;
});

e2e.stake.t_e2e$stake7050.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake7050.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_7189){
var state_val_7190 = (state_7189[(1)]);
if((state_val_7190 === (1))){
var inst_7054 = cljs.core.prn.call(null,"Fixture Before stake");
var inst_7055 = eos_cljs.core.create_account.call(null,e2e.stake.owner_acc,e2e.stake.stake_acc);
var inst_7056 = eos_cljs.core.create_account.call(null,e2e.stake.owner_acc,e2e.stake.tkn_acc);
var inst_7057 = eos_cljs.core.create_account.call(null,e2e.stake.owner_acc,e2e.stake.token_acc);
var inst_7058 = e2e.util.p_all.call(null,inst_7055,inst_7056,inst_7057);
var inst_7059 = cljs.core.async.interop.p__GT_c.call(null,inst_7058);
var state_7189__$1 = (function (){var statearr_7191 = state_7189;
(statearr_7191[(7)] = inst_7054);

return statearr_7191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7189__$1,(2),inst_7059);
} else {
if((state_val_7190 === (2))){
var inst_7061 = (state_7189[(8)]);
var inst_7061__$1 = (state_7189[(2)]);
var inst_7062 = (inst_7061__$1 instanceof cljs.core.ExceptionInfo);
var inst_7063 = cljs.core.ex_data.call(null,inst_7061__$1);
var inst_7064 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7063);
var inst_7065 = cljs.core._EQ_.call(null,inst_7064,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7066 = ((inst_7062) && (inst_7065));
var state_7189__$1 = (function (){var statearr_7192 = state_7189;
(statearr_7192[(8)] = inst_7061__$1);

return statearr_7192;
})();
if(cljs.core.truth_(inst_7066)){
var statearr_7193_7388 = state_7189__$1;
(statearr_7193_7388[(1)] = (3));

} else {
var statearr_7194_7389 = state_7189__$1;
(statearr_7194_7389[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (3))){
var inst_7061 = (state_7189[(8)]);
var inst_7068 = (function(){throw inst_7061})();
var state_7189__$1 = state_7189;
var statearr_7195_7390 = state_7189__$1;
(statearr_7195_7390[(2)] = inst_7068);

(statearr_7195_7390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (4))){
var inst_7061 = (state_7189[(8)]);
var state_7189__$1 = state_7189;
var statearr_7196_7391 = state_7189__$1;
(statearr_7196_7391[(2)] = inst_7061);

(statearr_7196_7391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (5))){
var inst_7071 = (state_7189[(2)]);
var inst_7072 = ["> Owner acc ",e2e.stake.owner_acc,"\n> Created STAKE account ",e2e.stake.stake_acc,"\n> Created TOKEN account ",e2e.stake.token_acc].join('');
var inst_7073 = cljs.core.println.call(null,inst_7072);
var inst_7074 = eos_cljs.core.deploy.call(null,e2e.stake.stake_acc,"contracts/stake/stake");
var inst_7075 = eos_cljs.core.deploy.call(null,e2e.stake.tkn_acc,"contracts/effect-token/effect-token");
var inst_7076 = eos_cljs.core.deploy.call(null,e2e.stake.token_acc,"contracts/effect-token/effect-token");
var inst_7077 = e2e.util.p_all.call(null,inst_7074,inst_7075,inst_7076);
var inst_7078 = cljs.core.async.interop.p__GT_c.call(null,inst_7077);
var state_7189__$1 = (function (){var statearr_7197 = state_7189;
(statearr_7197[(9)] = inst_7071);

(statearr_7197[(11)] = inst_7073);

return statearr_7197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7189__$1,(6),inst_7078);
} else {
if((state_val_7190 === (6))){
var inst_7080 = (state_7189[(10)]);
var inst_7080__$1 = (state_7189[(2)]);
var inst_7081 = (inst_7080__$1 instanceof cljs.core.ExceptionInfo);
var inst_7082 = cljs.core.ex_data.call(null,inst_7080__$1);
var inst_7083 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7082);
var inst_7084 = cljs.core._EQ_.call(null,inst_7083,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7085 = ((inst_7081) && (inst_7084));
var state_7189__$1 = (function (){var statearr_7198 = state_7189;
(statearr_7198[(10)] = inst_7080__$1);

return statearr_7198;
})();
if(cljs.core.truth_(inst_7085)){
var statearr_7199_7392 = state_7189__$1;
(statearr_7199_7392[(1)] = (7));

} else {
var statearr_7200_7393 = state_7189__$1;
(statearr_7200_7393[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (7))){
var inst_7080 = (state_7189[(10)]);
var inst_7087 = (function(){throw inst_7080})();
var state_7189__$1 = state_7189;
var statearr_7201_7394 = state_7189__$1;
(statearr_7201_7394[(2)] = inst_7087);

(statearr_7201_7394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (8))){
var inst_7080 = (state_7189[(10)]);
var state_7189__$1 = state_7189;
var statearr_7202_7395 = state_7189__$1;
(statearr_7202_7395[(2)] = inst_7080);

(statearr_7202_7395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (9))){
var inst_7090 = (state_7189[(2)]);
var inst_7091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7092 = [new cljs.core.Keyword(null,"permission","permission",(-511292572)),new cljs.core.Keyword(null,"weight","weight",(-1262796205))];
var inst_7093 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7094 = [e2e.stake.token_acc,"eosio.code"];
var inst_7095 = cljs.core.PersistentHashMap.fromArrays(inst_7093,inst_7094);
var inst_7096 = [inst_7095,(1)];
var inst_7097 = cljs.core.PersistentHashMap.fromArrays(inst_7092,inst_7096);
var inst_7098 = [new cljs.core.Keyword(null,"permission","permission",(-511292572)),new cljs.core.Keyword(null,"weight","weight",(-1262796205))];
var inst_7099 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7100 = [e2e.stake.stake_acc,"eosio.code"];
var inst_7101 = cljs.core.PersistentHashMap.fromArrays(inst_7099,inst_7100);
var inst_7102 = [inst_7101,(1)];
var inst_7103 = cljs.core.PersistentHashMap.fromArrays(inst_7098,inst_7102);
var inst_7104 = [new cljs.core.Keyword(null,"permission","permission",(-511292572)),new cljs.core.Keyword(null,"weight","weight",(-1262796205))];
var inst_7105 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7106 = [e2e.stake.tkn_acc,"eosio.code"];
var inst_7107 = cljs.core.PersistentHashMap.fromArrays(inst_7105,inst_7106);
var inst_7108 = [inst_7107,(1)];
var inst_7109 = cljs.core.PersistentHashMap.fromArrays(inst_7104,inst_7108);
var inst_7110 = [inst_7097,inst_7103,inst_7109];
var inst_7111 = (new cljs.core.PersistentVector(null,(3),(5),inst_7091,inst_7110,null));
var inst_7112 = eos_cljs.core.update_auth.call(null,e2e.stake.stake_acc,"active",inst_7111);
var inst_7113 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_7114 = [e2e.stake.stake_acc,e2e.stake.total_supply];
var inst_7115 = cljs.core.PersistentHashMap.fromArrays(inst_7113,inst_7114);
var inst_7116 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"create",inst_7115);
var inst_7117 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_7118 = ["1000.0000 ",e2e.stake.claim_sym].join('');
var inst_7119 = [e2e.stake.stake_acc,inst_7118];
var inst_7120 = cljs.core.PersistentHashMap.fromArrays(inst_7117,inst_7119);
var inst_7121 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"create",inst_7120);
var inst_7122 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_7123 = [e2e.stake.stake_acc,e2e.stake.total_supply];
var inst_7124 = cljs.core.PersistentHashMap.fromArrays(inst_7122,inst_7123);
var inst_7125 = eos_cljs.core.transact.call(null,e2e.stake.tkn_acc,"create",inst_7124);
var inst_7126 = e2e.util.p_all.call(null,inst_7112,inst_7116,inst_7121,inst_7125);
var inst_7127 = cljs.core.async.interop.p__GT_c.call(null,inst_7126);
var state_7189__$1 = (function (){var statearr_7203 = state_7189;
(statearr_7203[(12)] = inst_7090);

return statearr_7203;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7189__$1,(10),inst_7127);
} else {
if((state_val_7190 === (10))){
var inst_7129 = (state_7189[(13)]);
var inst_7129__$1 = (state_7189[(2)]);
var inst_7130 = (inst_7129__$1 instanceof cljs.core.ExceptionInfo);
var inst_7131 = cljs.core.ex_data.call(null,inst_7129__$1);
var inst_7132 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7131);
var inst_7133 = cljs.core._EQ_.call(null,inst_7132,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7134 = ((inst_7130) && (inst_7133));
var state_7189__$1 = (function (){var statearr_7204 = state_7189;
(statearr_7204[(13)] = inst_7129__$1);

return statearr_7204;
})();
if(cljs.core.truth_(inst_7134)){
var statearr_7205_7396 = state_7189__$1;
(statearr_7205_7396[(1)] = (11));

} else {
var statearr_7206_7397 = state_7189__$1;
(statearr_7206_7397[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (11))){
var inst_7129 = (state_7189[(13)]);
var inst_7136 = (function(){throw inst_7129})();
var state_7189__$1 = state_7189;
var statearr_7207_7398 = state_7189__$1;
(statearr_7207_7398[(2)] = inst_7136);

(statearr_7207_7398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (12))){
var inst_7129 = (state_7189[(13)]);
var state_7189__$1 = state_7189;
var statearr_7208_7399 = state_7189__$1;
(statearr_7208_7399[(2)] = inst_7129);

(statearr_7208_7399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (13))){
var inst_7139 = (state_7189[(2)]);
var inst_7140 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7141 = ["500.0000 ",e2e.stake.sym].join('');
var inst_7142 = [e2e.stake.owner_acc,inst_7141,"hi"];
var inst_7143 = cljs.core.PersistentHashMap.fromArrays(inst_7140,inst_7142);
var inst_7144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7145 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7146 = [e2e.stake.stake_acc,"owner"];
var inst_7147 = cljs.core.PersistentHashMap.fromArrays(inst_7145,inst_7146);
var inst_7148 = [inst_7147];
var inst_7149 = (new cljs.core.PersistentVector(null,(1),(5),inst_7144,inst_7148,null));
var inst_7150 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"issue",inst_7143,inst_7149);
var inst_7151 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7152 = ["100.0000 ",e2e.stake.claim_sym].join('');
var inst_7153 = [e2e.stake.owner_acc,inst_7152,"hi"];
var inst_7154 = cljs.core.PersistentHashMap.fromArrays(inst_7151,inst_7153);
var inst_7155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7156 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7157 = [e2e.stake.stake_acc,"owner"];
var inst_7158 = cljs.core.PersistentHashMap.fromArrays(inst_7156,inst_7157);
var inst_7159 = [inst_7158];
var inst_7160 = (new cljs.core.PersistentVector(null,(1),(5),inst_7155,inst_7159,null));
var inst_7161 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"issue",inst_7154,inst_7160);
var inst_7162 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7163 = ["500.0000 ",e2e.stake.sym].join('');
var inst_7164 = [e2e.stake.owner_acc,inst_7163,"hi"];
var inst_7165 = cljs.core.PersistentHashMap.fromArrays(inst_7162,inst_7164);
var inst_7166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7167 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7168 = [e2e.stake.stake_acc,"owner"];
var inst_7169 = cljs.core.PersistentHashMap.fromArrays(inst_7167,inst_7168);
var inst_7170 = [inst_7169];
var inst_7171 = (new cljs.core.PersistentVector(null,(1),(5),inst_7166,inst_7170,null));
var inst_7172 = eos_cljs.core.transact.call(null,e2e.stake.tkn_acc,"issue",inst_7165,inst_7171);
var inst_7173 = e2e.util.p_all.call(null,inst_7150,inst_7161,inst_7172);
var inst_7174 = cljs.core.async.interop.p__GT_c.call(null,inst_7173);
var state_7189__$1 = (function (){var statearr_7209 = state_7189;
(statearr_7209[(14)] = inst_7139);

return statearr_7209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7189__$1,(14),inst_7174);
} else {
if((state_val_7190 === (14))){
var inst_7176 = (state_7189[(15)]);
var inst_7176__$1 = (state_7189[(2)]);
var inst_7177 = (inst_7176__$1 instanceof cljs.core.ExceptionInfo);
var inst_7178 = cljs.core.ex_data.call(null,inst_7176__$1);
var inst_7179 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7178);
var inst_7180 = cljs.core._EQ_.call(null,inst_7179,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7181 = ((inst_7177) && (inst_7180));
var state_7189__$1 = (function (){var statearr_7210 = state_7189;
(statearr_7210[(15)] = inst_7176__$1);

return statearr_7210;
})();
if(cljs.core.truth_(inst_7181)){
var statearr_7211_7400 = state_7189__$1;
(statearr_7211_7400[(1)] = (15));

} else {
var statearr_7212_7401 = state_7189__$1;
(statearr_7212_7401[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (15))){
var inst_7176 = (state_7189[(15)]);
var inst_7183 = (function(){throw inst_7176})();
var state_7189__$1 = state_7189;
var statearr_7213_7402 = state_7189__$1;
(statearr_7213_7402[(2)] = inst_7183);

(statearr_7213_7402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (16))){
var inst_7176 = (state_7189[(15)]);
var state_7189__$1 = state_7189;
var statearr_7214_7403 = state_7189__$1;
(statearr_7214_7403[(2)] = inst_7176);

(statearr_7214_7403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7190 === (17))){
var inst_7186 = (state_7189[(2)]);
var inst_7187 = done.call(null);
var state_7189__$1 = (function (){var statearr_7215 = state_7189;
(statearr_7215[(16)] = inst_7186);

return statearr_7215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7189__$1,inst_7187);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$stake$state_machine__15__auto__ = null;
var e2e$stake$state_machine__15__auto____0 = (function (){
var statearr_7216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7216[(0)] = e2e$stake$state_machine__15__auto__);

(statearr_7216[(1)] = (1));

return statearr_7216;
});
var e2e$stake$state_machine__15__auto____1 = (function (state_7189){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_7189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e7217){var ex__18__auto__ = e7217;
var statearr_7218_7404 = state_7189;
(statearr_7218_7404[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_7189[(4)]))){
var statearr_7219_7405 = state_7189;
(statearr_7219_7405[(1)] = cljs.core.first.call(null,(state_7189[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__7406 = state_7189;
state_7189 = G__7406;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$stake$state_machine__15__auto__ = function(state_7189){
switch(arguments.length){
case 0:
return e2e$stake$state_machine__15__auto____0.call(this);
case 1:
return e2e$stake$state_machine__15__auto____1.call(this,state_7189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$stake$state_machine__15__auto____0;
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$stake$state_machine__15__auto____1;
return e2e$stake$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_7220 = f__20__auto__.call(null);
(statearr_7220[(6)] = c__19__auto__);

return statearr_7220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.stake.t_e2e$stake7050.prototype.apply = (function (self__,args7053){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7053)));
});

e2e.stake.t_e2e$stake7050.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_7356){
var state_val_7357 = (state_7356[(1)]);
if((state_val_7357 === (1))){
var inst_7221 = cljs.core.prn.call(null,"Fixture Before stake");
var inst_7222 = eos_cljs.core.create_account.call(null,e2e.stake.owner_acc,e2e.stake.stake_acc);
var inst_7223 = eos_cljs.core.create_account.call(null,e2e.stake.owner_acc,e2e.stake.tkn_acc);
var inst_7224 = eos_cljs.core.create_account.call(null,e2e.stake.owner_acc,e2e.stake.token_acc);
var inst_7225 = e2e.util.p_all.call(null,inst_7222,inst_7223,inst_7224);
var inst_7226 = cljs.core.async.interop.p__GT_c.call(null,inst_7225);
var state_7356__$1 = (function (){var statearr_7358 = state_7356;
(statearr_7358[(7)] = inst_7221);

return statearr_7358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7356__$1,(2),inst_7226);
} else {
if((state_val_7357 === (2))){
var inst_7228 = (state_7356[(8)]);
var inst_7228__$1 = (state_7356[(2)]);
var inst_7229 = (inst_7228__$1 instanceof cljs.core.ExceptionInfo);
var inst_7230 = cljs.core.ex_data.call(null,inst_7228__$1);
var inst_7231 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7230);
var inst_7232 = cljs.core._EQ_.call(null,inst_7231,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7233 = ((inst_7229) && (inst_7232));
var state_7356__$1 = (function (){var statearr_7359 = state_7356;
(statearr_7359[(8)] = inst_7228__$1);

return statearr_7359;
})();
if(cljs.core.truth_(inst_7233)){
var statearr_7360_7407 = state_7356__$1;
(statearr_7360_7407[(1)] = (3));

} else {
var statearr_7361_7408 = state_7356__$1;
(statearr_7361_7408[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (3))){
var inst_7228 = (state_7356[(8)]);
var inst_7235 = (function(){throw inst_7228})();
var state_7356__$1 = state_7356;
var statearr_7362_7409 = state_7356__$1;
(statearr_7362_7409[(2)] = inst_7235);

(statearr_7362_7409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (4))){
var inst_7228 = (state_7356[(8)]);
var state_7356__$1 = state_7356;
var statearr_7363_7410 = state_7356__$1;
(statearr_7363_7410[(2)] = inst_7228);

(statearr_7363_7410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (5))){
var inst_7238 = (state_7356[(2)]);
var inst_7239 = ["> Owner acc ",e2e.stake.owner_acc,"\n> Created STAKE account ",e2e.stake.stake_acc,"\n> Created TOKEN account ",e2e.stake.token_acc].join('');
var inst_7240 = cljs.core.println.call(null,inst_7239);
var inst_7241 = eos_cljs.core.deploy.call(null,e2e.stake.stake_acc,"contracts/stake/stake");
var inst_7242 = eos_cljs.core.deploy.call(null,e2e.stake.tkn_acc,"contracts/effect-token/effect-token");
var inst_7243 = eos_cljs.core.deploy.call(null,e2e.stake.token_acc,"contracts/effect-token/effect-token");
var inst_7244 = e2e.util.p_all.call(null,inst_7241,inst_7242,inst_7243);
var inst_7245 = cljs.core.async.interop.p__GT_c.call(null,inst_7244);
var state_7356__$1 = (function (){var statearr_7364 = state_7356;
(statearr_7364[(9)] = inst_7238);

(statearr_7364[(11)] = inst_7240);

return statearr_7364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7356__$1,(6),inst_7245);
} else {
if((state_val_7357 === (6))){
var inst_7247 = (state_7356[(10)]);
var inst_7247__$1 = (state_7356[(2)]);
var inst_7248 = (inst_7247__$1 instanceof cljs.core.ExceptionInfo);
var inst_7249 = cljs.core.ex_data.call(null,inst_7247__$1);
var inst_7250 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7249);
var inst_7251 = cljs.core._EQ_.call(null,inst_7250,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7252 = ((inst_7248) && (inst_7251));
var state_7356__$1 = (function (){var statearr_7365 = state_7356;
(statearr_7365[(10)] = inst_7247__$1);

return statearr_7365;
})();
if(cljs.core.truth_(inst_7252)){
var statearr_7366_7411 = state_7356__$1;
(statearr_7366_7411[(1)] = (7));

} else {
var statearr_7367_7412 = state_7356__$1;
(statearr_7367_7412[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (7))){
var inst_7247 = (state_7356[(10)]);
var inst_7254 = (function(){throw inst_7247})();
var state_7356__$1 = state_7356;
var statearr_7368_7413 = state_7356__$1;
(statearr_7368_7413[(2)] = inst_7254);

(statearr_7368_7413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (8))){
var inst_7247 = (state_7356[(10)]);
var state_7356__$1 = state_7356;
var statearr_7369_7414 = state_7356__$1;
(statearr_7369_7414[(2)] = inst_7247);

(statearr_7369_7414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (9))){
var inst_7257 = (state_7356[(2)]);
var inst_7258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7259 = [new cljs.core.Keyword(null,"permission","permission",(-511292572)),new cljs.core.Keyword(null,"weight","weight",(-1262796205))];
var inst_7260 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7261 = [e2e.stake.token_acc,"eosio.code"];
var inst_7262 = cljs.core.PersistentHashMap.fromArrays(inst_7260,inst_7261);
var inst_7263 = [inst_7262,(1)];
var inst_7264 = cljs.core.PersistentHashMap.fromArrays(inst_7259,inst_7263);
var inst_7265 = [new cljs.core.Keyword(null,"permission","permission",(-511292572)),new cljs.core.Keyword(null,"weight","weight",(-1262796205))];
var inst_7266 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7267 = [e2e.stake.stake_acc,"eosio.code"];
var inst_7268 = cljs.core.PersistentHashMap.fromArrays(inst_7266,inst_7267);
var inst_7269 = [inst_7268,(1)];
var inst_7270 = cljs.core.PersistentHashMap.fromArrays(inst_7265,inst_7269);
var inst_7271 = [new cljs.core.Keyword(null,"permission","permission",(-511292572)),new cljs.core.Keyword(null,"weight","weight",(-1262796205))];
var inst_7272 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7273 = [e2e.stake.tkn_acc,"eosio.code"];
var inst_7274 = cljs.core.PersistentHashMap.fromArrays(inst_7272,inst_7273);
var inst_7275 = [inst_7274,(1)];
var inst_7276 = cljs.core.PersistentHashMap.fromArrays(inst_7271,inst_7275);
var inst_7277 = [inst_7264,inst_7270,inst_7276];
var inst_7278 = (new cljs.core.PersistentVector(null,(3),(5),inst_7258,inst_7277,null));
var inst_7279 = eos_cljs.core.update_auth.call(null,e2e.stake.stake_acc,"active",inst_7278);
var inst_7280 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_7281 = [e2e.stake.stake_acc,e2e.stake.total_supply];
var inst_7282 = cljs.core.PersistentHashMap.fromArrays(inst_7280,inst_7281);
var inst_7283 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"create",inst_7282);
var inst_7284 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_7285 = ["1000.0000 ",e2e.stake.claim_sym].join('');
var inst_7286 = [e2e.stake.stake_acc,inst_7285];
var inst_7287 = cljs.core.PersistentHashMap.fromArrays(inst_7284,inst_7286);
var inst_7288 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"create",inst_7287);
var inst_7289 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_7290 = [e2e.stake.stake_acc,e2e.stake.total_supply];
var inst_7291 = cljs.core.PersistentHashMap.fromArrays(inst_7289,inst_7290);
var inst_7292 = eos_cljs.core.transact.call(null,e2e.stake.tkn_acc,"create",inst_7291);
var inst_7293 = e2e.util.p_all.call(null,inst_7279,inst_7283,inst_7288,inst_7292);
var inst_7294 = cljs.core.async.interop.p__GT_c.call(null,inst_7293);
var state_7356__$1 = (function (){var statearr_7370 = state_7356;
(statearr_7370[(12)] = inst_7257);

return statearr_7370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7356__$1,(10),inst_7294);
} else {
if((state_val_7357 === (10))){
var inst_7296 = (state_7356[(13)]);
var inst_7296__$1 = (state_7356[(2)]);
var inst_7297 = (inst_7296__$1 instanceof cljs.core.ExceptionInfo);
var inst_7298 = cljs.core.ex_data.call(null,inst_7296__$1);
var inst_7299 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7298);
var inst_7300 = cljs.core._EQ_.call(null,inst_7299,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7301 = ((inst_7297) && (inst_7300));
var state_7356__$1 = (function (){var statearr_7371 = state_7356;
(statearr_7371[(13)] = inst_7296__$1);

return statearr_7371;
})();
if(cljs.core.truth_(inst_7301)){
var statearr_7372_7415 = state_7356__$1;
(statearr_7372_7415[(1)] = (11));

} else {
var statearr_7373_7416 = state_7356__$1;
(statearr_7373_7416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (11))){
var inst_7296 = (state_7356[(13)]);
var inst_7303 = (function(){throw inst_7296})();
var state_7356__$1 = state_7356;
var statearr_7374_7417 = state_7356__$1;
(statearr_7374_7417[(2)] = inst_7303);

(statearr_7374_7417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (12))){
var inst_7296 = (state_7356[(13)]);
var state_7356__$1 = state_7356;
var statearr_7375_7418 = state_7356__$1;
(statearr_7375_7418[(2)] = inst_7296);

(statearr_7375_7418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (13))){
var inst_7306 = (state_7356[(2)]);
var inst_7307 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7308 = ["500.0000 ",e2e.stake.sym].join('');
var inst_7309 = [e2e.stake.owner_acc,inst_7308,"hi"];
var inst_7310 = cljs.core.PersistentHashMap.fromArrays(inst_7307,inst_7309);
var inst_7311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7312 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7313 = [e2e.stake.stake_acc,"owner"];
var inst_7314 = cljs.core.PersistentHashMap.fromArrays(inst_7312,inst_7313);
var inst_7315 = [inst_7314];
var inst_7316 = (new cljs.core.PersistentVector(null,(1),(5),inst_7311,inst_7315,null));
var inst_7317 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"issue",inst_7310,inst_7316);
var inst_7318 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7319 = ["100.0000 ",e2e.stake.claim_sym].join('');
var inst_7320 = [e2e.stake.owner_acc,inst_7319,"hi"];
var inst_7321 = cljs.core.PersistentHashMap.fromArrays(inst_7318,inst_7320);
var inst_7322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7323 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7324 = [e2e.stake.stake_acc,"owner"];
var inst_7325 = cljs.core.PersistentHashMap.fromArrays(inst_7323,inst_7324);
var inst_7326 = [inst_7325];
var inst_7327 = (new cljs.core.PersistentVector(null,(1),(5),inst_7322,inst_7326,null));
var inst_7328 = eos_cljs.core.transact.call(null,e2e.stake.token_acc,"issue",inst_7321,inst_7327);
var inst_7329 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7330 = ["500.0000 ",e2e.stake.sym].join('');
var inst_7331 = [e2e.stake.owner_acc,inst_7330,"hi"];
var inst_7332 = cljs.core.PersistentHashMap.fromArrays(inst_7329,inst_7331);
var inst_7333 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7334 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7335 = [e2e.stake.stake_acc,"owner"];
var inst_7336 = cljs.core.PersistentHashMap.fromArrays(inst_7334,inst_7335);
var inst_7337 = [inst_7336];
var inst_7338 = (new cljs.core.PersistentVector(null,(1),(5),inst_7333,inst_7337,null));
var inst_7339 = eos_cljs.core.transact.call(null,e2e.stake.tkn_acc,"issue",inst_7332,inst_7338);
var inst_7340 = e2e.util.p_all.call(null,inst_7317,inst_7328,inst_7339);
var inst_7341 = cljs.core.async.interop.p__GT_c.call(null,inst_7340);
var state_7356__$1 = (function (){var statearr_7376 = state_7356;
(statearr_7376[(14)] = inst_7306);

return statearr_7376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7356__$1,(14),inst_7341);
} else {
if((state_val_7357 === (14))){
var inst_7343 = (state_7356[(15)]);
var inst_7343__$1 = (state_7356[(2)]);
var inst_7344 = (inst_7343__$1 instanceof cljs.core.ExceptionInfo);
var inst_7345 = cljs.core.ex_data.call(null,inst_7343__$1);
var inst_7346 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7345);
var inst_7347 = cljs.core._EQ_.call(null,inst_7346,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7348 = ((inst_7344) && (inst_7347));
var state_7356__$1 = (function (){var statearr_7377 = state_7356;
(statearr_7377[(15)] = inst_7343__$1);

return statearr_7377;
})();
if(cljs.core.truth_(inst_7348)){
var statearr_7378_7419 = state_7356__$1;
(statearr_7378_7419[(1)] = (15));

} else {
var statearr_7379_7420 = state_7356__$1;
(statearr_7379_7420[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (15))){
var inst_7343 = (state_7356[(15)]);
var inst_7350 = (function(){throw inst_7343})();
var state_7356__$1 = state_7356;
var statearr_7380_7421 = state_7356__$1;
(statearr_7380_7421[(2)] = inst_7350);

(statearr_7380_7421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (16))){
var inst_7343 = (state_7356[(15)]);
var state_7356__$1 = state_7356;
var statearr_7381_7422 = state_7356__$1;
(statearr_7381_7422[(2)] = inst_7343);

(statearr_7381_7422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7357 === (17))){
var inst_7353 = (state_7356[(2)]);
var inst_7354 = done.call(null);
var state_7356__$1 = (function (){var statearr_7382 = state_7356;
(statearr_7382[(16)] = inst_7353);

return statearr_7382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7356__$1,inst_7354);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$stake$state_machine__15__auto__ = null;
var e2e$stake$state_machine__15__auto____0 = (function (){
var statearr_7383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7383[(0)] = e2e$stake$state_machine__15__auto__);

(statearr_7383[(1)] = (1));

return statearr_7383;
});
var e2e$stake$state_machine__15__auto____1 = (function (state_7356){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_7356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e7384){var ex__18__auto__ = e7384;
var statearr_7385_7423 = state_7356;
(statearr_7385_7423[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_7356[(4)]))){
var statearr_7386_7424 = state_7356;
(statearr_7386_7424[(1)] = cljs.core.first.call(null,(state_7356[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__7425 = state_7356;
state_7356 = G__7425;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$stake$state_machine__15__auto__ = function(state_7356){
switch(arguments.length){
case 0:
return e2e$stake$state_machine__15__auto____0.call(this);
case 1:
return e2e$stake$state_machine__15__auto____1.call(this,state_7356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$stake$state_machine__15__auto____0;
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$stake$state_machine__15__auto____1;
return e2e$stake$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_7387 = f__20__auto__.call(null);
(statearr_7387[(6)] = c__19__auto__);

return statearr_7387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.stake.t_e2e$stake7050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta7051","meta7051",(1028319358),null)], null);
});

e2e.stake.t_e2e$stake7050.cljs$lang$type = true;

e2e.stake.t_e2e$stake7050.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake7050";

e2e.stake.t_e2e$stake7050.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake7050");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake7050.
 */
e2e.stake.__GT_t_e2e$stake7050 = (function e2e$stake$__GT_t_e2e$stake7050(meta7051){
return (new e2e.stake.t_e2e$stake7050(meta7051));
});

}

return (new e2e.stake.t_e2e$stake7050(null));
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function (){
return null;
})], null)], null);
e2e.stake.init_config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),e2e.stake.token_acc,new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),["4,",e2e.stake.sym].join(''),new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),["4,",e2e.stake.claim_sym].join(''),new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)),(65),new cljs.core.Keyword(null,"scale_factor","scale_factor",(1489713612)),((1000000) * (1)),new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777)),(2),new cljs.core.Keyword(null,"stake_bonus_age","stake_bonus_age",(-781830420)),(60),new cljs.core.Keyword(null,"stake_bonus_deadline","stake_bonus_deadline",(94350818)),"2022-05-18T14:37:30"], null);
/**
 * Deploy a basic stake account and fill it with data for testing
 */
e2e.stake.deploy_stake = (function e2e$stake$deploy_stake(acc,token_acc,stake_sym,claim_sym,members){
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__){
return (function (state_7782){
var state_val_7783 = (state_7782[(1)]);
if((state_val_7783 === (32))){
var inst_7533 = (state_7782[(7)]);
var inst_7530 = (state_7782[(8)]);
var inst_7531 = (state_7782[(9)]);
var inst_7532 = (state_7782[(10)]);
var inst_7647 = (state_7782[(2)]);
var inst_7648 = (inst_7533 + (1));
var tmp7784 = inst_7530;
var tmp7785 = inst_7531;
var tmp7786 = inst_7532;
var inst_7530__$1 = tmp7784;
var inst_7531__$1 = tmp7785;
var inst_7532__$1 = tmp7786;
var inst_7533__$1 = inst_7648;
var state_7782__$1 = (function (){var statearr_7787 = state_7782;
(statearr_7787[(11)] = inst_7647);

(statearr_7787[(8)] = inst_7530__$1);

(statearr_7787[(9)] = inst_7531__$1);

(statearr_7787[(10)] = inst_7532__$1);

(statearr_7787[(7)] = inst_7533__$1);

return statearr_7787;
})();
var statearr_7788_7917 = state_7782__$1;
(statearr_7788_7917[(2)] = null);

(statearr_7788_7917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (64))){
var inst_7664 = (state_7782[(12)]);
var inst_7696 = (state_7782[(2)]);
var inst_7697 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_7698 = [inst_7664,inst_7664,claim_sym];
var inst_7699 = cljs.core.PersistentHashMap.fromArrays(inst_7697,inst_7698);
var inst_7700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7701 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7702 = [inst_7664,"active"];
var inst_7703 = cljs.core.PersistentHashMap.fromArrays(inst_7701,inst_7702);
var inst_7704 = [inst_7703];
var inst_7705 = (new cljs.core.PersistentVector(null,(1),(5),inst_7700,inst_7704,null));
var inst_7706 = eos_cljs.core.transact.call(null,acc,"open",inst_7699,inst_7705);
var inst_7707 = cljs.core.async.interop.p__GT_c.call(null,inst_7706);
var state_7782__$1 = (function (){var statearr_7789 = state_7782;
(statearr_7789[(13)] = inst_7696);

return statearr_7789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(65),inst_7707);
} else {
if((state_val_7783 === (1))){
var inst_7426 = eos_cljs.core.create_account.call(null,e2e.stake.owner_acc,acc);
var inst_7427 = cljs.core.async.interop.p__GT_c.call(null,inst_7426);
var state_7782__$1 = state_7782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(2),inst_7427);
} else {
if((state_val_7783 === (33))){
var inst_7545 = (state_7782[(2)]);
var inst_7546 = cljs.core.prn.call(null,inst_7545);
var state_7782__$1 = state_7782;
var statearr_7790_7918 = state_7782__$1;
(statearr_7790_7918[(2)] = inst_7546);

(statearr_7790_7918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (65))){
var inst_7709 = (state_7782[(14)]);
var inst_7709__$1 = (state_7782[(2)]);
var inst_7710 = (inst_7709__$1 instanceof cljs.core.ExceptionInfo);
var inst_7711 = cljs.core.ex_data.call(null,inst_7709__$1);
var inst_7712 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7711);
var inst_7713 = cljs.core._EQ_.call(null,inst_7712,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7714 = ((inst_7710) && (inst_7713));
var state_7782__$1 = (function (){var statearr_7792 = state_7782;
(statearr_7792[(14)] = inst_7709__$1);

return statearr_7792;
})();
if(cljs.core.truth_(inst_7714)){
var statearr_7793_7919 = state_7782__$1;
(statearr_7793_7919[(1)] = (66));

} else {
var statearr_7794_7920 = state_7782__$1;
(statearr_7794_7920[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (2))){
var inst_7429 = (state_7782[(15)]);
var inst_7429__$1 = (state_7782[(2)]);
var inst_7430 = (inst_7429__$1 instanceof cljs.core.ExceptionInfo);
var inst_7431 = cljs.core.ex_data.call(null,inst_7429__$1);
var inst_7432 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7431);
var inst_7433 = cljs.core._EQ_.call(null,inst_7432,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7434 = ((inst_7430) && (inst_7433));
var state_7782__$1 = (function (){var statearr_7795 = state_7782;
(statearr_7795[(15)] = inst_7429__$1);

return statearr_7795;
})();
if(cljs.core.truth_(inst_7434)){
var statearr_7796_7921 = state_7782__$1;
(statearr_7796_7921[(1)] = (3));

} else {
var statearr_7797_7922 = state_7782__$1;
(statearr_7797_7922[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (34))){
var _ = (function (){var statearr_7798 = state_7782;
(statearr_7798[(4)] = cljs.core.rest.call(null,(state_7782[(4)])));

return statearr_7798;
})();
var state_7782__$1 = state_7782;
var ex7791 = (state_7782__$1[(2)]);
var statearr_7799_7923 = state_7782__$1;
(statearr_7799_7923[(5)] = ex7791);


if((ex7791 instanceof Error)){
var statearr_7800_7924 = state_7782__$1;
(statearr_7800_7924[(1)] = (33));

(statearr_7800_7924[(5)] = null);

} else {
throw ex7791;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (66))){
var inst_7709 = (state_7782[(14)]);
var inst_7716 = (function(){throw inst_7709})();
var state_7782__$1 = state_7782;
var statearr_7801_7925 = state_7782__$1;
(statearr_7801_7925[(2)] = inst_7716);

(statearr_7801_7925[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (3))){
var inst_7429 = (state_7782[(15)]);
var inst_7436 = (function(){throw inst_7429})();
var state_7782__$1 = state_7782;
var statearr_7802_7926 = state_7782__$1;
(statearr_7802_7926[(2)] = inst_7436);

(statearr_7802_7926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (35))){
var inst_7564 = (state_7782[(16)]);
var inst_7564__$1 = (state_7782[(2)]);
var inst_7565 = (inst_7564__$1 instanceof cljs.core.ExceptionInfo);
var inst_7566 = cljs.core.ex_data.call(null,inst_7564__$1);
var inst_7567 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7566);
var inst_7568 = cljs.core._EQ_.call(null,inst_7567,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7569 = ((inst_7565) && (inst_7568));
var state_7782__$1 = (function (){var statearr_7803 = state_7782;
(statearr_7803[(16)] = inst_7564__$1);

return statearr_7803;
})();
if(cljs.core.truth_(inst_7569)){
var statearr_7804_7927 = state_7782__$1;
(statearr_7804_7927[(1)] = (36));

} else {
var statearr_7805_7928 = state_7782__$1;
(statearr_7805_7928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (67))){
var inst_7709 = (state_7782[(14)]);
var state_7782__$1 = state_7782;
var statearr_7806_7929 = state_7782__$1;
(statearr_7806_7929[(2)] = inst_7709);

(statearr_7806_7929[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (4))){
var inst_7429 = (state_7782[(15)]);
var state_7782__$1 = state_7782;
var statearr_7807_7930 = state_7782__$1;
(statearr_7807_7930[(2)] = inst_7429);

(statearr_7807_7930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (36))){
var inst_7564 = (state_7782[(16)]);
var inst_7571 = (function(){throw inst_7564})();
var state_7782__$1 = state_7782;
var statearr_7808_7931 = state_7782__$1;
(statearr_7808_7931[(2)] = inst_7571);

(statearr_7808_7931[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (68))){
var inst_7664 = (state_7782[(12)]);
var inst_7665 = (state_7782[(17)]);
var inst_7719 = (state_7782[(2)]);
var inst_7720 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7721 = [inst_7664,acc,inst_7665,"stake"];
var inst_7722 = cljs.core.PersistentHashMap.fromArrays(inst_7720,inst_7721);
var inst_7723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7724 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7725 = [inst_7664,"active"];
var inst_7726 = cljs.core.PersistentHashMap.fromArrays(inst_7724,inst_7725);
var inst_7727 = [inst_7726];
var inst_7728 = (new cljs.core.PersistentVector(null,(1),(5),inst_7723,inst_7727,null));
var inst_7729 = eos_cljs.core.transact.call(null,token_acc,"transfer",inst_7722,inst_7728);
var inst_7730 = cljs.core.async.interop.p__GT_c.call(null,inst_7729);
var state_7782__$1 = (function (){var statearr_7809 = state_7782;
(statearr_7809[(18)] = inst_7719);

return statearr_7809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(69),inst_7730);
} else {
if((state_val_7783 === (5))){
var inst_7439 = (state_7782[(2)]);
var inst_7440 = eos_cljs.core.deploy.call(null,acc,"contracts/stake/stake");
var inst_7441 = cljs.core.async.interop.p__GT_c.call(null,inst_7440);
var state_7782__$1 = (function (){var statearr_7810 = state_7782;
(statearr_7810[(19)] = inst_7439);

return statearr_7810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(6),inst_7441);
} else {
if((state_val_7783 === (37))){
var inst_7564 = (state_7782[(16)]);
var state_7782__$1 = state_7782;
var statearr_7811_7932 = state_7782__$1;
(statearr_7811_7932[(2)] = inst_7564);

(statearr_7811_7932[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (69))){
var inst_7732 = (state_7782[(20)]);
var inst_7732__$1 = (state_7782[(2)]);
var inst_7733 = (inst_7732__$1 instanceof cljs.core.ExceptionInfo);
var inst_7734 = cljs.core.ex_data.call(null,inst_7732__$1);
var inst_7735 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7734);
var inst_7736 = cljs.core._EQ_.call(null,inst_7735,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7737 = ((inst_7733) && (inst_7736));
var state_7782__$1 = (function (){var statearr_7812 = state_7782;
(statearr_7812[(20)] = inst_7732__$1);

return statearr_7812;
})();
if(cljs.core.truth_(inst_7737)){
var statearr_7813_7933 = state_7782__$1;
(statearr_7813_7933[(1)] = (70));

} else {
var statearr_7814_7934 = state_7782__$1;
(statearr_7814_7934[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (6))){
var inst_7443 = (state_7782[(21)]);
var inst_7443__$1 = (state_7782[(2)]);
var inst_7444 = (inst_7443__$1 instanceof cljs.core.ExceptionInfo);
var inst_7445 = cljs.core.ex_data.call(null,inst_7443__$1);
var inst_7446 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7445);
var inst_7447 = cljs.core._EQ_.call(null,inst_7446,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7448 = ((inst_7444) && (inst_7447));
var state_7782__$1 = (function (){var statearr_7815 = state_7782;
(statearr_7815[(21)] = inst_7443__$1);

return statearr_7815;
})();
if(cljs.core.truth_(inst_7448)){
var statearr_7816_7935 = state_7782__$1;
(statearr_7816_7935[(1)] = (7));

} else {
var statearr_7817_7936 = state_7782__$1;
(statearr_7817_7936[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (38))){
var inst_7542 = (state_7782[(22)]);
var inst_7574 = (state_7782[(2)]);
var inst_7575 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_7576 = [inst_7542,inst_7542,claim_sym];
var inst_7577 = cljs.core.PersistentHashMap.fromArrays(inst_7575,inst_7576);
var inst_7578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7579 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7580 = [inst_7542,"active"];
var inst_7581 = cljs.core.PersistentHashMap.fromArrays(inst_7579,inst_7580);
var inst_7582 = [inst_7581];
var inst_7583 = (new cljs.core.PersistentVector(null,(1),(5),inst_7578,inst_7582,null));
var inst_7584 = eos_cljs.core.transact.call(null,acc,"open",inst_7577,inst_7583);
var inst_7585 = cljs.core.async.interop.p__GT_c.call(null,inst_7584);
var state_7782__$1 = (function (){var statearr_7818 = state_7782;
(statearr_7818[(23)] = inst_7574);

return statearr_7818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(39),inst_7585);
} else {
if((state_val_7783 === (70))){
var inst_7732 = (state_7782[(20)]);
var inst_7739 = (function(){throw inst_7732})();
var state_7782__$1 = state_7782;
var statearr_7819_7937 = state_7782__$1;
(statearr_7819_7937[(2)] = inst_7739);

(statearr_7819_7937[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (7))){
var inst_7443 = (state_7782[(21)]);
var inst_7450 = (function(){throw inst_7443})();
var state_7782__$1 = state_7782;
var statearr_7820_7938 = state_7782__$1;
(statearr_7820_7938[(2)] = inst_7450);

(statearr_7820_7938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (39))){
var inst_7587 = (state_7782[(24)]);
var inst_7587__$1 = (state_7782[(2)]);
var inst_7588 = (inst_7587__$1 instanceof cljs.core.ExceptionInfo);
var inst_7589 = cljs.core.ex_data.call(null,inst_7587__$1);
var inst_7590 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7589);
var inst_7591 = cljs.core._EQ_.call(null,inst_7590,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7592 = ((inst_7588) && (inst_7591));
var state_7782__$1 = (function (){var statearr_7821 = state_7782;
(statearr_7821[(24)] = inst_7587__$1);

return statearr_7821;
})();
if(cljs.core.truth_(inst_7592)){
var statearr_7822_7939 = state_7782__$1;
(statearr_7822_7939[(1)] = (40));

} else {
var statearr_7823_7940 = state_7782__$1;
(statearr_7823_7940[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (71))){
var inst_7732 = (state_7782[(20)]);
var state_7782__$1 = state_7782;
var statearr_7824_7941 = state_7782__$1;
(statearr_7824_7941[(2)] = inst_7732);

(statearr_7824_7941[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (8))){
var inst_7443 = (state_7782[(21)]);
var state_7782__$1 = state_7782;
var statearr_7825_7942 = state_7782__$1;
(statearr_7825_7942[(2)] = inst_7443);

(statearr_7825_7942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (40))){
var inst_7587 = (state_7782[(24)]);
var inst_7594 = (function(){throw inst_7587})();
var state_7782__$1 = state_7782;
var statearr_7826_7943 = state_7782__$1;
(statearr_7826_7943[(2)] = inst_7594);

(statearr_7826_7943[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (72))){
var inst_7664 = (state_7782[(12)]);
var inst_7666 = (state_7782[(25)]);
var inst_7742 = (state_7782[(2)]);
var inst_7743 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7744 = [inst_7664,acc,inst_7666,"stake"];
var inst_7745 = cljs.core.PersistentHashMap.fromArrays(inst_7743,inst_7744);
var inst_7746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7747 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7748 = [inst_7664,"active"];
var inst_7749 = cljs.core.PersistentHashMap.fromArrays(inst_7747,inst_7748);
var inst_7750 = [inst_7749];
var inst_7751 = (new cljs.core.PersistentVector(null,(1),(5),inst_7746,inst_7750,null));
var inst_7752 = eos_cljs.core.transact.call(null,token_acc,"transfer",inst_7745,inst_7751);
var inst_7753 = cljs.core.async.interop.p__GT_c.call(null,inst_7752);
var state_7782__$1 = (function (){var statearr_7827 = state_7782;
(statearr_7827[(26)] = inst_7742);

return statearr_7827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(73),inst_7753);
} else {
if((state_val_7783 === (9))){
var inst_7453 = (state_7782[(2)]);
var inst_7454 = cljs.core.assoc.call(null,e2e.stake.init_config,new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),token_acc,new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),stake_sym,new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),claim_sym);
var inst_7455 = eos_cljs.core.transact.call(null,acc,"init",inst_7454);
var inst_7456 = cljs.core.async.interop.p__GT_c.call(null,inst_7455);
var state_7782__$1 = (function (){var statearr_7828 = state_7782;
(statearr_7828[(27)] = inst_7453);

return statearr_7828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(10),inst_7456);
} else {
if((state_val_7783 === (41))){
var inst_7587 = (state_7782[(24)]);
var state_7782__$1 = state_7782;
var statearr_7829_7944 = state_7782__$1;
(statearr_7829_7944[(2)] = inst_7587);

(statearr_7829_7944[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (73))){
var inst_7755 = (state_7782[(28)]);
var inst_7755__$1 = (state_7782[(2)]);
var inst_7756 = (inst_7755__$1 instanceof cljs.core.ExceptionInfo);
var inst_7757 = cljs.core.ex_data.call(null,inst_7755__$1);
var inst_7758 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7757);
var inst_7759 = cljs.core._EQ_.call(null,inst_7758,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7760 = ((inst_7756) && (inst_7759));
var state_7782__$1 = (function (){var statearr_7830 = state_7782;
(statearr_7830[(28)] = inst_7755__$1);

return statearr_7830;
})();
if(cljs.core.truth_(inst_7760)){
var statearr_7831_7945 = state_7782__$1;
(statearr_7831_7945[(1)] = (74));

} else {
var statearr_7832_7946 = state_7782__$1;
(statearr_7832_7946[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (10))){
var inst_7458 = (state_7782[(29)]);
var inst_7458__$1 = (state_7782[(2)]);
var inst_7459 = (inst_7458__$1 instanceof cljs.core.ExceptionInfo);
var inst_7460 = cljs.core.ex_data.call(null,inst_7458__$1);
var inst_7461 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7460);
var inst_7462 = cljs.core._EQ_.call(null,inst_7461,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7463 = ((inst_7459) && (inst_7462));
var state_7782__$1 = (function (){var statearr_7833 = state_7782;
(statearr_7833[(29)] = inst_7458__$1);

return statearr_7833;
})();
if(cljs.core.truth_(inst_7463)){
var statearr_7834_7947 = state_7782__$1;
(statearr_7834_7947[(1)] = (11));

} else {
var statearr_7835_7948 = state_7782__$1;
(statearr_7835_7948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (42))){
var inst_7542 = (state_7782[(22)]);
var inst_7543 = (state_7782[(30)]);
var inst_7597 = (state_7782[(2)]);
var inst_7598 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7599 = [inst_7542,acc,inst_7543,"stake"];
var inst_7600 = cljs.core.PersistentHashMap.fromArrays(inst_7598,inst_7599);
var inst_7601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7602 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7603 = [inst_7542,"active"];
var inst_7604 = cljs.core.PersistentHashMap.fromArrays(inst_7602,inst_7603);
var inst_7605 = [inst_7604];
var inst_7606 = (new cljs.core.PersistentVector(null,(1),(5),inst_7601,inst_7605,null));
var inst_7607 = eos_cljs.core.transact.call(null,token_acc,"transfer",inst_7600,inst_7606);
var inst_7608 = cljs.core.async.interop.p__GT_c.call(null,inst_7607);
var state_7782__$1 = (function (){var statearr_7836 = state_7782;
(statearr_7836[(31)] = inst_7597);

return statearr_7836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(43),inst_7608);
} else {
if((state_val_7783 === (74))){
var inst_7755 = (state_7782[(28)]);
var inst_7762 = (function(){throw inst_7755})();
var state_7782__$1 = state_7782;
var statearr_7837_7949 = state_7782__$1;
(statearr_7837_7949[(2)] = inst_7762);

(statearr_7837_7949[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (11))){
var inst_7458 = (state_7782[(29)]);
var inst_7465 = (function(){throw inst_7458})();
var state_7782__$1 = state_7782;
var statearr_7838_7950 = state_7782__$1;
(statearr_7838_7950[(2)] = inst_7465);

(statearr_7838_7950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (43))){
var inst_7610 = (state_7782[(32)]);
var inst_7610__$1 = (state_7782[(2)]);
var inst_7611 = (inst_7610__$1 instanceof cljs.core.ExceptionInfo);
var inst_7612 = cljs.core.ex_data.call(null,inst_7610__$1);
var inst_7613 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7612);
var inst_7614 = cljs.core._EQ_.call(null,inst_7613,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7615 = ((inst_7611) && (inst_7614));
var state_7782__$1 = (function (){var statearr_7839 = state_7782;
(statearr_7839[(32)] = inst_7610__$1);

return statearr_7839;
})();
if(cljs.core.truth_(inst_7615)){
var statearr_7840_7951 = state_7782__$1;
(statearr_7840_7951[(1)] = (44));

} else {
var statearr_7841_7952 = state_7782__$1;
(statearr_7841_7952[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (75))){
var inst_7755 = (state_7782[(28)]);
var state_7782__$1 = state_7782;
var statearr_7842_7953 = state_7782__$1;
(statearr_7842_7953[(2)] = inst_7755);

(statearr_7842_7953[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (12))){
var inst_7458 = (state_7782[(29)]);
var state_7782__$1 = state_7782;
var statearr_7843_7954 = state_7782__$1;
(statearr_7843_7954[(2)] = inst_7458);

(statearr_7843_7954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (44))){
var inst_7610 = (state_7782[(32)]);
var inst_7617 = (function(){throw inst_7610})();
var state_7782__$1 = state_7782;
var statearr_7844_7955 = state_7782__$1;
(statearr_7844_7955[(2)] = inst_7617);

(statearr_7844_7955[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (76))){
var inst_7664 = (state_7782[(12)]);
var inst_7765 = (state_7782[(2)]);
var inst_7766 = cljs.core.prn.call(null,"ADDED STAKES FOR m ",inst_7664);
var _ = (function (){var statearr_7845 = state_7782;
(statearr_7845[(4)] = cljs.core.rest.call(null,(state_7782[(4)])));

return statearr_7845;
})();
var state_7782__$1 = (function (){var statearr_7846 = state_7782;
(statearr_7846[(33)] = inst_7765);

return statearr_7846;
})();
var statearr_7847_7956 = state_7782__$1;
(statearr_7847_7956[(2)] = inst_7766);

(statearr_7847_7956[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (13))){
var inst_7468 = (state_7782[(2)]);
var state_7782__$1 = (function (){var statearr_7848 = state_7782;
(statearr_7848[(34)] = inst_7468);

return statearr_7848;
})();
var statearr_7849_7957 = state_7782__$1;
(statearr_7849_7957[(2)] = null);

(statearr_7849_7957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (45))){
var inst_7610 = (state_7782[(32)]);
var state_7782__$1 = state_7782;
var statearr_7850_7958 = state_7782__$1;
(statearr_7850_7958[(2)] = inst_7610);

(statearr_7850_7958[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (14))){
var _ = (function (){var statearr_7851 = state_7782;
(statearr_7851[(4)] = cljs.core.cons.call(null,(17),(state_7782[(4)])));

return statearr_7851;
})();
var inst_7476 = [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777))];
var inst_7477 = [claim_sym,claim_sym,token_acc,(2)];
var inst_7478 = cljs.core.PersistentHashMap.fromArrays(inst_7476,inst_7477);
var inst_7479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7480 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7481 = [acc,"owner"];
var inst_7482 = cljs.core.PersistentHashMap.fromArrays(inst_7480,inst_7481);
var inst_7483 = [inst_7482];
var inst_7484 = (new cljs.core.PersistentVector(null,(1),(5),inst_7479,inst_7483,null));
var inst_7485 = eos_cljs.core.transact.call(null,acc,"create",inst_7478,inst_7484);
var inst_7486 = cljs.core.async.interop.p__GT_c.call(null,inst_7485);
var state_7782__$1 = state_7782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(18),inst_7486);
} else {
if((state_val_7783 === (46))){
var inst_7542 = (state_7782[(22)]);
var inst_7544 = (state_7782[(35)]);
var inst_7620 = (state_7782[(2)]);
var inst_7621 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_7622 = [inst_7542,acc,inst_7544,"stake"];
var inst_7623 = cljs.core.PersistentHashMap.fromArrays(inst_7621,inst_7622);
var inst_7624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7625 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7626 = [inst_7542,"active"];
var inst_7627 = cljs.core.PersistentHashMap.fromArrays(inst_7625,inst_7626);
var inst_7628 = [inst_7627];
var inst_7629 = (new cljs.core.PersistentVector(null,(1),(5),inst_7624,inst_7628,null));
var inst_7630 = eos_cljs.core.transact.call(null,token_acc,"transfer",inst_7623,inst_7629);
var inst_7631 = cljs.core.async.interop.p__GT_c.call(null,inst_7630);
var state_7782__$1 = (function (){var statearr_7852 = state_7782;
(statearr_7852[(36)] = inst_7620);

return statearr_7852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(47),inst_7631);
} else {
if((state_val_7783 === (15))){
var inst_7524 = (state_7782[(2)]);
var inst_7529 = cljs.core.seq.call(null,members);
var inst_7530 = inst_7529;
var inst_7531 = null;
var inst_7532 = (0);
var inst_7533 = (0);
var state_7782__$1 = (function (){var statearr_7853 = state_7782;
(statearr_7853[(37)] = inst_7524);

(statearr_7853[(8)] = inst_7530);

(statearr_7853[(9)] = inst_7531);

(statearr_7853[(10)] = inst_7532);

(statearr_7853[(7)] = inst_7533);

return statearr_7853;
})();
var statearr_7854_7959 = state_7782__$1;
(statearr_7854_7959[(2)] = null);

(statearr_7854_7959[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (47))){
var inst_7633 = (state_7782[(38)]);
var inst_7633__$1 = (state_7782[(2)]);
var inst_7634 = (inst_7633__$1 instanceof cljs.core.ExceptionInfo);
var inst_7635 = cljs.core.ex_data.call(null,inst_7633__$1);
var inst_7636 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7635);
var inst_7637 = cljs.core._EQ_.call(null,inst_7636,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7638 = ((inst_7634) && (inst_7637));
var state_7782__$1 = (function (){var statearr_7855 = state_7782;
(statearr_7855[(38)] = inst_7633__$1);

return statearr_7855;
})();
if(cljs.core.truth_(inst_7638)){
var statearr_7856_7960 = state_7782__$1;
(statearr_7856_7960[(1)] = (48));

} else {
var statearr_7857_7961 = state_7782__$1;
(statearr_7857_7961[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (16))){
var inst_7469 = (state_7782[(2)]);
var inst_7470 = cljs.core.prn.call(null,inst_7469);
var state_7782__$1 = state_7782;
var statearr_7859_7962 = state_7782__$1;
(statearr_7859_7962[(2)] = inst_7470);

(statearr_7859_7962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (48))){
var inst_7633 = (state_7782[(38)]);
var inst_7640 = (function(){throw inst_7633})();
var state_7782__$1 = state_7782;
var statearr_7860_7963 = state_7782__$1;
(statearr_7860_7963[(2)] = inst_7640);

(statearr_7860_7963[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (17))){
var _ = (function (){var statearr_7861 = state_7782;
(statearr_7861[(4)] = cljs.core.rest.call(null,(state_7782[(4)])));

return statearr_7861;
})();
var state_7782__$1 = state_7782;
var ex7858 = (state_7782__$1[(2)]);
var statearr_7862_7964 = state_7782__$1;
(statearr_7862_7964[(5)] = ex7858);


if((ex7858 instanceof Error)){
var statearr_7863_7965 = state_7782__$1;
(statearr_7863_7965[(1)] = (16));

(statearr_7863_7965[(5)] = null);

} else {
throw ex7858;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (49))){
var inst_7633 = (state_7782[(38)]);
var state_7782__$1 = state_7782;
var statearr_7864_7966 = state_7782__$1;
(statearr_7864_7966[(2)] = inst_7633);

(statearr_7864_7966[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (18))){
var inst_7488 = (state_7782[(39)]);
var inst_7488__$1 = (state_7782[(2)]);
var inst_7489 = (inst_7488__$1 instanceof cljs.core.ExceptionInfo);
var inst_7490 = cljs.core.ex_data.call(null,inst_7488__$1);
var inst_7491 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7490);
var inst_7492 = cljs.core._EQ_.call(null,inst_7491,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7493 = ((inst_7489) && (inst_7492));
var state_7782__$1 = (function (){var statearr_7865 = state_7782;
(statearr_7865[(39)] = inst_7488__$1);

return statearr_7865;
})();
if(cljs.core.truth_(inst_7493)){
var statearr_7866_7967 = state_7782__$1;
(statearr_7866_7967[(1)] = (19));

} else {
var statearr_7867_7968 = state_7782__$1;
(statearr_7867_7968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (50))){
var inst_7542 = (state_7782[(22)]);
var inst_7643 = (state_7782[(2)]);
var inst_7644 = cljs.core.prn.call(null,"ADDED STAKES FOR m ",inst_7542);
var _ = (function (){var statearr_7868 = state_7782;
(statearr_7868[(4)] = cljs.core.rest.call(null,(state_7782[(4)])));

return statearr_7868;
})();
var state_7782__$1 = (function (){var statearr_7869 = state_7782;
(statearr_7869[(40)] = inst_7643);

return statearr_7869;
})();
var statearr_7870_7969 = state_7782__$1;
(statearr_7870_7969[(2)] = inst_7644);

(statearr_7870_7969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (19))){
var inst_7488 = (state_7782[(39)]);
var inst_7495 = (function(){throw inst_7488})();
var state_7782__$1 = state_7782;
var statearr_7871_7970 = state_7782__$1;
(statearr_7871_7970[(2)] = inst_7495);

(statearr_7871_7970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (51))){
var inst_7651 = (state_7782[(41)]);
var inst_7653 = cljs.core.chunked_seq_QMARK_.call(null,inst_7651);
var state_7782__$1 = state_7782;
if(inst_7653){
var statearr_7872_7971 = state_7782__$1;
(statearr_7872_7971[(1)] = (54));

} else {
var statearr_7873_7972 = state_7782__$1;
(statearr_7873_7972[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (20))){
var inst_7488 = (state_7782[(39)]);
var state_7782__$1 = state_7782;
var statearr_7874_7973 = state_7782__$1;
(statearr_7874_7973[(2)] = inst_7488);

(statearr_7874_7973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (52))){
var state_7782__$1 = state_7782;
var statearr_7875_7974 = state_7782__$1;
(statearr_7875_7974[(2)] = null);

(statearr_7875_7974[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (21))){
var inst_7498 = (state_7782[(2)]);
var inst_7499 = [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777))];
var inst_7500 = [stake_sym,stake_sym,token_acc,(2)];
var inst_7501 = cljs.core.PersistentHashMap.fromArrays(inst_7499,inst_7500);
var inst_7502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7503 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7504 = [acc,"owner"];
var inst_7505 = cljs.core.PersistentHashMap.fromArrays(inst_7503,inst_7504);
var inst_7506 = [inst_7505];
var inst_7507 = (new cljs.core.PersistentVector(null,(1),(5),inst_7502,inst_7506,null));
var inst_7508 = eos_cljs.core.transact.call(null,acc,"create",inst_7501,inst_7507);
var inst_7509 = cljs.core.async.interop.p__GT_c.call(null,inst_7508);
var state_7782__$1 = (function (){var statearr_7876 = state_7782;
(statearr_7876[(42)] = inst_7498);

return statearr_7876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(22),inst_7509);
} else {
if((state_val_7783 === (53))){
var inst_7776 = (state_7782[(2)]);
var state_7782__$1 = state_7782;
var statearr_7877_7975 = state_7782__$1;
(statearr_7877_7975[(2)] = inst_7776);

(statearr_7877_7975[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (22))){
var inst_7511 = (state_7782[(43)]);
var inst_7511__$1 = (state_7782[(2)]);
var inst_7512 = (inst_7511__$1 instanceof cljs.core.ExceptionInfo);
var inst_7513 = cljs.core.ex_data.call(null,inst_7511__$1);
var inst_7514 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7513);
var inst_7515 = cljs.core._EQ_.call(null,inst_7514,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7516 = ((inst_7512) && (inst_7515));
var state_7782__$1 = (function (){var statearr_7878 = state_7782;
(statearr_7878[(43)] = inst_7511__$1);

return statearr_7878;
})();
if(cljs.core.truth_(inst_7516)){
var statearr_7879_7976 = state_7782__$1;
(statearr_7879_7976[(1)] = (23));

} else {
var statearr_7880_7977 = state_7782__$1;
(statearr_7880_7977[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (54))){
var inst_7651 = (state_7782[(41)]);
var inst_7655 = cljs.core.chunk_first.call(null,inst_7651);
var inst_7656 = cljs.core.chunk_rest.call(null,inst_7651);
var inst_7657 = cljs.core.count.call(null,inst_7655);
var inst_7530 = inst_7656;
var inst_7531 = inst_7655;
var inst_7532 = inst_7657;
var inst_7533 = (0);
var state_7782__$1 = (function (){var statearr_7881 = state_7782;
(statearr_7881[(8)] = inst_7530);

(statearr_7881[(9)] = inst_7531);

(statearr_7881[(10)] = inst_7532);

(statearr_7881[(7)] = inst_7533);

return statearr_7881;
})();
var statearr_7882_7978 = state_7782__$1;
(statearr_7882_7978[(2)] = null);

(statearr_7882_7978[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (23))){
var inst_7511 = (state_7782[(43)]);
var inst_7518 = (function(){throw inst_7511})();
var state_7782__$1 = state_7782;
var statearr_7883_7979 = state_7782__$1;
(statearr_7883_7979[(2)] = inst_7518);

(statearr_7883_7979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (55))){
var inst_7651 = (state_7782[(41)]);
var inst_7663 = cljs.core.first.call(null,inst_7651);
var inst_7664 = cljs.core.nth.call(null,inst_7663,(0),null);
var inst_7665 = cljs.core.nth.call(null,inst_7663,(1),null);
var inst_7666 = cljs.core.nth.call(null,inst_7663,(2),null);
var state_7782__$1 = (function (){var statearr_7884 = state_7782;
(statearr_7884[(12)] = inst_7664);

(statearr_7884[(17)] = inst_7665);

(statearr_7884[(25)] = inst_7666);

return statearr_7884;
})();
var statearr_7885_7980 = state_7782__$1;
(statearr_7885_7980[(2)] = null);

(statearr_7885_7980[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (24))){
var inst_7511 = (state_7782[(43)]);
var state_7782__$1 = state_7782;
var statearr_7886_7981 = state_7782__$1;
(statearr_7886_7981[(2)] = inst_7511);

(statearr_7886_7981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (56))){
var inst_7773 = (state_7782[(2)]);
var state_7782__$1 = state_7782;
var statearr_7887_7982 = state_7782__$1;
(statearr_7887_7982[(2)] = inst_7773);

(statearr_7887_7982[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (25))){
var inst_7521 = (state_7782[(2)]);
var _ = (function (){var statearr_7888 = state_7782;
(statearr_7888[(4)] = cljs.core.rest.call(null,(state_7782[(4)])));

return statearr_7888;
})();
var state_7782__$1 = state_7782;
var statearr_7889_7983 = state_7782__$1;
(statearr_7889_7983[(2)] = inst_7521);

(statearr_7889_7983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (57))){
var inst_7664 = (state_7782[(12)]);
var _ = (function (){var statearr_7890 = state_7782;
(statearr_7890[(4)] = cljs.core.cons.call(null,(60),(state_7782[(4)])));

return statearr_7890;
})();
var inst_7674 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_7675 = [inst_7664,inst_7664,stake_sym];
var inst_7676 = cljs.core.PersistentHashMap.fromArrays(inst_7674,inst_7675);
var inst_7677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7678 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7679 = [inst_7664,"active"];
var inst_7680 = cljs.core.PersistentHashMap.fromArrays(inst_7678,inst_7679);
var inst_7681 = [inst_7680];
var inst_7682 = (new cljs.core.PersistentVector(null,(1),(5),inst_7677,inst_7681,null));
var inst_7683 = eos_cljs.core.transact.call(null,acc,"open",inst_7676,inst_7682);
var inst_7684 = cljs.core.async.interop.p__GT_c.call(null,inst_7683);
var state_7782__$1 = state_7782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(61),inst_7684);
} else {
if((state_val_7783 === (26))){
var inst_7533 = (state_7782[(7)]);
var inst_7532 = (state_7782[(10)]);
var inst_7535 = (inst_7533 < inst_7532);
var inst_7536 = inst_7535;
var state_7782__$1 = state_7782;
if(cljs.core.truth_(inst_7536)){
var statearr_7891_7984 = state_7782__$1;
(statearr_7891_7984[(1)] = (28));

} else {
var statearr_7892_7985 = state_7782__$1;
(statearr_7892_7985[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (58))){
var inst_7651 = (state_7782[(41)]);
var inst_7769 = (state_7782[(2)]);
var inst_7770 = cljs.core.next.call(null,inst_7651);
var inst_7530 = inst_7770;
var inst_7531 = null;
var inst_7532 = (0);
var inst_7533 = (0);
var state_7782__$1 = (function (){var statearr_7893 = state_7782;
(statearr_7893[(44)] = inst_7769);

(statearr_7893[(8)] = inst_7530);

(statearr_7893[(9)] = inst_7531);

(statearr_7893[(10)] = inst_7532);

(statearr_7893[(7)] = inst_7533);

return statearr_7893;
})();
var statearr_7894_7986 = state_7782__$1;
(statearr_7894_7986[(2)] = null);

(statearr_7894_7986[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (27))){
var inst_7780 = (state_7782[(2)]);
var state_7782__$1 = state_7782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7782__$1,inst_7780);
} else {
if((state_val_7783 === (59))){
var inst_7667 = (state_7782[(2)]);
var inst_7668 = cljs.core.prn.call(null,inst_7667);
var state_7782__$1 = state_7782;
var statearr_7896_7987 = state_7782__$1;
(statearr_7896_7987[(2)] = inst_7668);

(statearr_7896_7987[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (28))){
var inst_7531 = (state_7782[(9)]);
var inst_7533 = (state_7782[(7)]);
var inst_7541 = cljs.core._nth.call(null,inst_7531,inst_7533);
var inst_7542 = cljs.core.nth.call(null,inst_7541,(0),null);
var inst_7543 = cljs.core.nth.call(null,inst_7541,(1),null);
var inst_7544 = cljs.core.nth.call(null,inst_7541,(2),null);
var state_7782__$1 = (function (){var statearr_7897 = state_7782;
(statearr_7897[(22)] = inst_7542);

(statearr_7897[(30)] = inst_7543);

(statearr_7897[(35)] = inst_7544);

return statearr_7897;
})();
var statearr_7898_7988 = state_7782__$1;
(statearr_7898_7988[(2)] = null);

(statearr_7898_7988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (60))){
var _ = (function (){var statearr_7899 = state_7782;
(statearr_7899[(4)] = cljs.core.rest.call(null,(state_7782[(4)])));

return statearr_7899;
})();
var state_7782__$1 = state_7782;
var ex7895 = (state_7782__$1[(2)]);
var statearr_7900_7989 = state_7782__$1;
(statearr_7900_7989[(5)] = ex7895);


if((ex7895 instanceof Error)){
var statearr_7901_7990 = state_7782__$1;
(statearr_7901_7990[(1)] = (59));

(statearr_7901_7990[(5)] = null);

} else {
throw ex7895;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (29))){
var inst_7530 = (state_7782[(8)]);
var inst_7651 = (state_7782[(41)]);
var inst_7651__$1 = cljs.core.seq.call(null,inst_7530);
var state_7782__$1 = (function (){var statearr_7902 = state_7782;
(statearr_7902[(41)] = inst_7651__$1);

return statearr_7902;
})();
if(inst_7651__$1){
var statearr_7903_7991 = state_7782__$1;
(statearr_7903_7991[(1)] = (51));

} else {
var statearr_7904_7992 = state_7782__$1;
(statearr_7904_7992[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (61))){
var inst_7686 = (state_7782[(45)]);
var inst_7686__$1 = (state_7782[(2)]);
var inst_7687 = (inst_7686__$1 instanceof cljs.core.ExceptionInfo);
var inst_7688 = cljs.core.ex_data.call(null,inst_7686__$1);
var inst_7689 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7688);
var inst_7690 = cljs.core._EQ_.call(null,inst_7689,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7691 = ((inst_7687) && (inst_7690));
var state_7782__$1 = (function (){var statearr_7905 = state_7782;
(statearr_7905[(45)] = inst_7686__$1);

return statearr_7905;
})();
if(cljs.core.truth_(inst_7691)){
var statearr_7906_7993 = state_7782__$1;
(statearr_7906_7993[(1)] = (62));

} else {
var statearr_7907_7994 = state_7782__$1;
(statearr_7907_7994[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (30))){
var inst_7778 = (state_7782[(2)]);
var state_7782__$1 = state_7782;
var statearr_7908_7995 = state_7782__$1;
(statearr_7908_7995[(2)] = inst_7778);

(statearr_7908_7995[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (62))){
var inst_7686 = (state_7782[(45)]);
var inst_7693 = (function(){throw inst_7686})();
var state_7782__$1 = state_7782;
var statearr_7909_7996 = state_7782__$1;
(statearr_7909_7996[(2)] = inst_7693);

(statearr_7909_7996[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7783 === (31))){
var inst_7542 = (state_7782[(22)]);
var _ = (function (){var statearr_7910 = state_7782;
(statearr_7910[(4)] = cljs.core.cons.call(null,(34),(state_7782[(4)])));

return statearr_7910;
})();
var inst_7552 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_7553 = [inst_7542,inst_7542,stake_sym];
var inst_7554 = cljs.core.PersistentHashMap.fromArrays(inst_7552,inst_7553);
var inst_7555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7556 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7557 = [inst_7542,"active"];
var inst_7558 = cljs.core.PersistentHashMap.fromArrays(inst_7556,inst_7557);
var inst_7559 = [inst_7558];
var inst_7560 = (new cljs.core.PersistentVector(null,(1),(5),inst_7555,inst_7559,null));
var inst_7561 = eos_cljs.core.transact.call(null,acc,"open",inst_7554,inst_7560);
var inst_7562 = cljs.core.async.interop.p__GT_c.call(null,inst_7561);
var state_7782__$1 = state_7782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7782__$1,(35),inst_7562);
} else {
if((state_val_7783 === (63))){
var inst_7686 = (state_7782[(45)]);
var state_7782__$1 = state_7782;
var statearr_7911_7997 = state_7782__$1;
(statearr_7911_7997[(2)] = inst_7686);

(statearr_7911_7997[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19__auto__))
;
return ((function (switch__14__auto__,c__19__auto__){
return (function() {
var e2e$stake$deploy_stake_$_state_machine__15__auto__ = null;
var e2e$stake$deploy_stake_$_state_machine__15__auto____0 = (function (){
var statearr_7912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7912[(0)] = e2e$stake$deploy_stake_$_state_machine__15__auto__);

(statearr_7912[(1)] = (1));

return statearr_7912;
});
var e2e$stake$deploy_stake_$_state_machine__15__auto____1 = (function (state_7782){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_7782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e7913){var ex__18__auto__ = e7913;
var statearr_7914_7998 = state_7782;
(statearr_7914_7998[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_7782[(4)]))){
var statearr_7915_7999 = state_7782;
(statearr_7915_7999[(1)] = cljs.core.first.call(null,(state_7782[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__8000 = state_7782;
state_7782 = G__8000;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$stake$deploy_stake_$_state_machine__15__auto__ = function(state_7782){
switch(arguments.length){
case 0:
return e2e$stake$deploy_stake_$_state_machine__15__auto____0.call(this);
case 1:
return e2e$stake$deploy_stake_$_state_machine__15__auto____1.call(this,state_7782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$stake$deploy_stake_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$stake$deploy_stake_$_state_machine__15__auto____0;
e2e$stake$deploy_stake_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$stake$deploy_stake_$_state_machine__15__auto____1;
return e2e$stake$deploy_stake_$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__))
})();
var state__21__auto__ = (function (){var statearr_7916 = f__20__auto__.call(null);
(statearr_7916[(6)] = c__19__auto__);

return statearr_7916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__))
);

return c__19__auto__;
});
e2e.stake.update_config = cljs.core.select_keys.call(null,e2e.stake.init_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777)),new cljs.core.Keyword(null,"stake_bonus_age","stake_bonus_age",(-781830420)),new cljs.core.Keyword(null,"stake_bonus_deadline","stake_bonus_deadline",(94350818))], null));
e2e.stake.update_bofore_init = (function e2e$stake$update_bofore_init(){
return cljs.test.test_var.call(null,e2e.stake.update_bofore_init.cljs$lang$var);
});
e2e.stake.update_bofore_init.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8001 = (function (meta8002){
this.meta8002 = meta8002;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8003,meta8002__$1){
var self__ = this;
var _8003__$1 = this;
return (new e2e.stake.t_e2e$stake8001(meta8002__$1));
});

e2e.stake.t_e2e$stake8001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8003){
var self__ = this;
var _8003__$1 = this;
return self__.meta8002;
});

e2e.stake.t_e2e$stake8001.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8001.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
return e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"update",e2e.stake.update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.tkn_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)),["missing authority of ",e2e.stake.stake_acc].join(''),"only stake account can update").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"update",e2e.stake.update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__,self____$1))
),"not initialized","cant call update before init").then(done);
});

e2e.stake.t_e2e$stake8001.prototype.apply = (function (self__,args8004){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8004)));
});

e2e.stake.t_e2e$stake8001.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
return e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"update",e2e.stake.update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.tkn_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)),["missing authority of ",e2e.stake.stake_acc].join(''),"only stake account can update").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"update",e2e.stake.update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__))
),"not initialized","cant call update before init").then(done);
});

e2e.stake.t_e2e$stake8001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8002","meta8002",(1803507647),null)], null);
});

e2e.stake.t_e2e$stake8001.cljs$lang$type = true;

e2e.stake.t_e2e$stake8001.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8001";

e2e.stake.t_e2e$stake8001.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8001");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8001.
 */
e2e.stake.__GT_t_e2e$stake8001 = (function e2e$stake$__GT_t_e2e$stake8001(meta8002){
return (new e2e.stake.t_e2e$stake8001(meta8002));
});

}

return (new e2e.stake.t_e2e$stake8001(null));
});

e2e.stake.update_bofore_init.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.update_bofore_init;},new cljs.core.Symbol("e2e.stake","update-bofore-init","e2e.stake/update-bofore-init",(1778620800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"update-bofore-init","update-bofore-init",(1764325412),null),"e2e/stake.cljs",(28),(1),(114),(114),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.update_bofore_init)?e2e.stake.update_bofore_init.cljs$lang$test:null)]));
e2e.stake.initialize = (function e2e$stake$initialize(){
return cljs.test.test_var.call(null,e2e.stake.initialize.cljs$lang$var);
});
e2e.stake.initialize.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8005 = (function (meta8006){
this.meta8006 = meta8006;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8007,meta8006__$1){
var self__ = this;
var _8007__$1 = this;
return (new e2e.stake.t_e2e$stake8005(meta8006__$1));
});

e2e.stake.t_e2e$stake8005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8007){
var self__ = this;
var _8007__$1 = this;
return self__.meta8006;
});

e2e.stake.t_e2e$stake8005.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8005.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
return e2e.util.should_fail_with.call(null,eos_cljs.core.wait_block.call(null,e2e.util.should_succeed.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)),["missing authority of ",e2e.stake.stake_acc].join(''),"only stake account can init").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",cljs.core.assoc.call(null,e2e.stake.init_config,new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),"noaccount"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__,self____$1))
),"token contract does not exsist").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__,self____$1))
),"can perform init").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.stake_acc,"config");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p1__43_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.vals.call(null,cljs.core.first.call(null,p1__43_SHARP_)),(new cljs.core.List(null,cljs.core.vals.call(null,e2e.stake.init_config),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__43#","p1__43#",(516123013),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__43#","p1__43#",(516123013),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8009){var t__191__auto__ = e8009;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__43#","p1__43#",(516123013),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
)).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__,self____$1))
),"already initialized","can only initialize once").then(done);
});

e2e.stake.t_e2e$stake8005.prototype.apply = (function (self__,args8008){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8008)));
});

e2e.stake.t_e2e$stake8005.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
return e2e.util.should_fail_with.call(null,eos_cljs.core.wait_block.call(null,e2e.util.should_succeed.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)),["missing authority of ",e2e.stake.stake_acc].join(''),"only stake account can init").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",cljs.core.assoc.call(null,e2e.stake.init_config,new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),"noaccount"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__))
),"token contract does not exsist").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__))
),"can perform init").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.stake_acc,"config");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p1__43_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.vals.call(null,cljs.core.first.call(null,p1__43_SHARP_)),(new cljs.core.List(null,cljs.core.vals.call(null,e2e.stake.init_config),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__43#","p1__43#",(516123013),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__43#","p1__43#",(516123013),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8010){var t__191__auto__ = e8010;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__43#","p1__43#",(516123013),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
)).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"init",e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null));
});})(___192__auto__))
),"already initialized","can only initialize once").then(done);
});

e2e.stake.t_e2e$stake8005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8006","meta8006",(1216003188),null)], null);
});

e2e.stake.t_e2e$stake8005.cljs$lang$type = true;

e2e.stake.t_e2e$stake8005.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8005";

e2e.stake.t_e2e$stake8005.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8005");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8005.
 */
e2e.stake.__GT_t_e2e$stake8005 = (function e2e$stake$__GT_t_e2e$stake8005(meta8006){
return (new e2e.stake.t_e2e$stake8005(meta8006));
});

}

return (new e2e.stake.t_e2e$stake8005(null));
});

e2e.stake.initialize.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.initialize;},new cljs.core.Symbol("e2e.stake","initialize","e2e.stake/initialize",(-1962341060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"initialize","initialize",(-2044482856),null),"e2e/stake.cljs",(20),(1),(130),(130),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.initialize)?e2e.stake.initialize.cljs$lang$test:null)]));
e2e.stake.update_after_init = (function e2e$stake$update_after_init(){
return cljs.test.test_var.call(null,e2e.stake.update_after_init.cljs$lang$var);
});
e2e.stake.update_after_init.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8011 = (function (meta8012){
this.meta8012 = meta8012;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8013,meta8012__$1){
var self__ = this;
var _8013__$1 = this;
return (new e2e.stake.t_e2e$stake8011(meta8012__$1));
});

e2e.stake.t_e2e$stake8011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8013){
var self__ = this;
var _8013__$1 = this;
return self__.meta8012;
});

e2e.stake.t_e2e$stake8011.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8011.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var new_update_config = cljs.core.update_in.call(null,e2e.stake.update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake_bonus_age","stake_bonus_age",(-781830420))], null),cljs.core.inc);
var new_config = cljs.core.update_in.call(null,e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake_bonus_age","stake_bonus_age",(-781830420))], null),cljs.core.inc);
return e2e.util.should_succeed.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"update",new_update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)),"can perform update").then(((function (new_update_config,new_config,___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.stake_acc,"config");
});})(new_update_config,new_config,___192__auto__,self____$1))
).then(((function (new_update_config,new_config,___192__auto__,self____$1){
return (function (p1__44_SHARP_){
try{var values__182__auto___8019 = (new cljs.core.List(null,cljs.core._EQ_.call(null,cljs.core.vals.call(null,cljs.core.first.call(null,p1__44_SHARP_)),cljs.core.vals.call(null,e2e.stake.init_config)),null,(1),null));
var result__183__auto___8020 = cljs.core.apply.call(null,cljs.core.not,values__182__auto___8019);
if(cljs.core.truth_(result__183__auto___8020)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core.not,values__182__auto___8019)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),values__182__auto___8019),null,(1),null)),(2),null))], null));
}

}catch (e8015){var t__191__auto___8021 = e8015;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___8021], null));
}
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.vals.call(null,cljs.core.first.call(null,p1__44_SHARP_)),(new cljs.core.List(null,cljs.core.vals.call(null,new_config),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"new-config","new-config",(1196373381),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"new-config","new-config",(1196373381),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8016){var t__191__auto__ = e8016;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"new-config","new-config",(1196373381),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(new_update_config,new_config,___192__auto__,self____$1))
).then(done);
});

e2e.stake.t_e2e$stake8011.prototype.apply = (function (self__,args8014){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8014)));
});

e2e.stake.t_e2e$stake8011.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var new_update_config = cljs.core.update_in.call(null,e2e.stake.update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake_bonus_age","stake_bonus_age",(-781830420))], null),cljs.core.inc);
var new_config = cljs.core.update_in.call(null,e2e.stake.init_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake_bonus_age","stake_bonus_age",(-781830420))], null),cljs.core.inc);
return e2e.util.should_succeed.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"update",new_update_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)),"can perform update").then(((function (new_update_config,new_config,___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.stake_acc,"config");
});})(new_update_config,new_config,___192__auto__))
).then(((function (new_update_config,new_config,___192__auto__){
return (function (p1__44_SHARP_){
try{var values__182__auto___8022 = (new cljs.core.List(null,cljs.core._EQ_.call(null,cljs.core.vals.call(null,cljs.core.first.call(null,p1__44_SHARP_)),cljs.core.vals.call(null,e2e.stake.init_config)),null,(1),null));
var result__183__auto___8023 = cljs.core.apply.call(null,cljs.core.not,values__182__auto___8022);
if(cljs.core.truth_(result__183__auto___8023)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core.not,values__182__auto___8022)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),values__182__auto___8022),null,(1),null)),(2),null))], null));
}

}catch (e8017){var t__191__auto___8024 = e8017;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___8024], null));
}
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.vals.call(null,cljs.core.first.call(null,p1__44_SHARP_)),(new cljs.core.List(null,cljs.core.vals.call(null,new_config),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"new-config","new-config",(1196373381),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"new-config","new-config",(1196373381),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8018){var t__191__auto__ = e8018;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"config incorrect",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),cljs.core.list(new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Symbol(null,"p1__44#","p1__44#",(1718150294),null))),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",(-1886377036),null),new cljs.core.Symbol(null,"new-config","new-config",(1196373381),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(new_update_config,new_config,___192__auto__))
).then(done);
});

e2e.stake.t_e2e$stake8011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8012","meta8012",(-1467858248),null)], null);
});

e2e.stake.t_e2e$stake8011.cljs$lang$type = true;

e2e.stake.t_e2e$stake8011.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8011";

e2e.stake.t_e2e$stake8011.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8011");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8011.
 */
e2e.stake.__GT_t_e2e$stake8011 = (function e2e$stake$__GT_t_e2e$stake8011(meta8012){
return (new e2e.stake.t_e2e$stake8011(meta8012));
});

}

return (new e2e.stake.t_e2e$stake8011(null));
});

e2e.stake.update_after_init.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.update_after_init;},new cljs.core.Symbol("e2e.stake","update-after-init","e2e.stake/update-after-init",(301149921),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"update-after-init","update-after-init",(479576413),null),"e2e/stake.cljs",(27),(1),(157),(157),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.update_after_init)?e2e.stake.update_after_init.cljs$lang$test:null)]));
e2e.stake.owner_perm = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null);
e2e.stake.stake_tx = (function e2e$stake$stake_tx(from,quantity,perm){
return eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),quantity,new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),perm);
});
e2e.stake.create = (function e2e$stake$create(){
return cljs.test.test_var.call(null,e2e.stake.create.cljs$lang$var);
});
e2e.stake.create.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8025 = (function (meta8026){
this.meta8026 = meta8026;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8027,meta8026__$1){
var self__ = this;
var _8027__$1 = this;
return (new e2e.stake.t_e2e$stake8025(meta8026__$1));
});

e2e.stake.t_e2e$stake8025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8027){
var self__ = this;
var _8027__$1 = this;
return self__.meta8026;
});

e2e.stake.t_e2e$stake8025.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8025.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_8270){
var state_val_8271 = (state_8270[(1)]);
if((state_val_8271 === (32))){
var inst_8114 = (state_8270[(7)]);
var inst_8205 = (state_8270[(8)]);
var inst_8206 = (state_8270[(9)]);
var _ = (function (){var statearr_8272 = state_8270;
(statearr_8272[(4)] = cljs.core.cons.call(null,(35),(state_8270[(4)])));

return statearr_8272;
})();
var inst_8202 = inst_8114.call(null,"claim_symbol");
var inst_8203 = ["4,",e2e.stake.claim_sym].join('');
var inst_8204 = (new cljs.core.List(null,inst_8203,null,(1),null));
var inst_8205__$1 = (new cljs.core.List(null,inst_8202,inst_8204,(2),null));
var inst_8206__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8205__$1);
var state_8270__$1 = (function (){var statearr_8273 = state_8270;
(statearr_8273[(8)] = inst_8205__$1);

(statearr_8273[(9)] = inst_8206__$1);

return statearr_8273;
})();
if(cljs.core.truth_(inst_8206__$1)){
var statearr_8274_8701 = state_8270__$1;
(statearr_8274_8701[(1)] = (36));

} else {
var statearr_8275_8702 = state_8270__$1;
(statearr_8275_8702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (1))){
var inst_8029 = [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777))];
var inst_8030 = ["4,",e2e.stake.sym].join('');
var inst_8031 = ["4,",e2e.stake.claim_sym].join('');
var inst_8032 = [inst_8030,inst_8031,e2e.stake.token_acc,(2)];
var inst_8033 = cljs.core.PersistentHashMap.fromArrays(inst_8029,inst_8032);
var inst_8034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8035 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_8036 = [e2e.stake.owner_acc,"owner"];
var inst_8037 = cljs.core.PersistentHashMap.fromArrays(inst_8035,inst_8036);
var inst_8038 = [inst_8037];
var inst_8039 = (new cljs.core.PersistentVector(null,(1),(5),inst_8034,inst_8038,null));
var inst_8040 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"create",inst_8033,inst_8039);
var inst_8041 = ["missing authority of ",e2e.stake.stake_acc].join('');
var inst_8042 = e2e.util.should_fail_with.call(null,inst_8040,inst_8041);
var inst_8043 = cljs.core.async.interop.p__GT_c.call(null,inst_8042);
var state_8270__$1 = state_8270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8270__$1,(2),inst_8043);
} else {
if((state_val_8271 === (33))){
var inst_8229 = (state_8270[(2)]);
var state_8270__$1 = (function (){var statearr_8276 = state_8270;
(statearr_8276[(10)] = inst_8229);

return statearr_8276;
})();
var statearr_8277_8703 = state_8270__$1;
(statearr_8277_8703[(2)] = null);

(statearr_8277_8703[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (2))){
var inst_8045 = (state_8270[(11)]);
var inst_8045__$1 = (state_8270[(2)]);
var inst_8046 = (inst_8045__$1 instanceof cljs.core.ExceptionInfo);
var inst_8047 = cljs.core.ex_data.call(null,inst_8045__$1);
var inst_8048 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8047);
var inst_8049 = cljs.core._EQ_.call(null,inst_8048,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8050 = ((inst_8046) && (inst_8049));
var state_8270__$1 = (function (){var statearr_8278 = state_8270;
(statearr_8278[(11)] = inst_8045__$1);

return statearr_8278;
})();
if(cljs.core.truth_(inst_8050)){
var statearr_8279_8704 = state_8270__$1;
(statearr_8279_8704[(1)] = (3));

} else {
var statearr_8280_8705 = state_8270__$1;
(statearr_8280_8705[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (34))){
var inst_8191 = (state_8270[(2)]);
var inst_8192 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8193 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"claim_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"claim-sym","claim-sym",(1794590380),null)));
var inst_8194 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8193,inst_8191];
var inst_8195 = cljs.core.PersistentHashMap.fromArrays(inst_8192,inst_8194);
var inst_8196 = cljs.test.do_report.call(null,inst_8195);
var state_8270__$1 = state_8270;
var statearr_8282_8706 = state_8270__$1;
(statearr_8282_8706[(2)] = inst_8196);

(statearr_8282_8706[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (3))){
var inst_8045 = (state_8270[(11)]);
var inst_8052 = (function(){throw inst_8045})();
var state_8270__$1 = state_8270;
var statearr_8283_8707 = state_8270__$1;
(statearr_8283_8707[(2)] = inst_8052);

(statearr_8283_8707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (35))){
var _ = (function (){var statearr_8284 = state_8270;
(statearr_8284[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8284;
})();
var state_8270__$1 = state_8270;
var ex8281 = (state_8270__$1[(2)]);
var statearr_8285_8708 = state_8270__$1;
(statearr_8285_8708[(5)] = ex8281);


var statearr_8286_8709 = state_8270__$1;
(statearr_8286_8709[(1)] = (34));

(statearr_8286_8709[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (4))){
var inst_8045 = (state_8270[(11)]);
var state_8270__$1 = state_8270;
var statearr_8287_8710 = state_8270__$1;
(statearr_8287_8710[(2)] = inst_8045);

(statearr_8287_8710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (36))){
var inst_8205 = (state_8270[(8)]);
var inst_8208 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8209 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"claim_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"claim-sym","claim-sym",(1794590380),null)));
var inst_8210 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8205);
var inst_8211 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8209,inst_8210];
var inst_8212 = cljs.core.PersistentHashMap.fromArrays(inst_8208,inst_8211);
var inst_8213 = cljs.test.do_report.call(null,inst_8212);
var state_8270__$1 = state_8270;
var statearr_8288_8711 = state_8270__$1;
(statearr_8288_8711[(2)] = inst_8213);

(statearr_8288_8711[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (5))){
var inst_8055 = (state_8270[(2)]);
var inst_8056 = [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777))];
var inst_8057 = ["4,",e2e.stake.sym].join('');
var inst_8058 = ["4,",e2e.stake.claim_sym].join('');
var inst_8059 = [inst_8057,inst_8058,e2e.stake.token_acc,(2)];
var inst_8060 = cljs.core.PersistentHashMap.fromArrays(inst_8056,inst_8059);
var inst_8061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8062 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_8063 = [e2e.stake.stake_acc,"owner"];
var inst_8064 = cljs.core.PersistentHashMap.fromArrays(inst_8062,inst_8063);
var inst_8065 = [inst_8064];
var inst_8066 = (new cljs.core.PersistentVector(null,(1),(5),inst_8061,inst_8065,null));
var inst_8067 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"create",inst_8060,inst_8066);
var inst_8068 = e2e.util.should_succeed.call(null,inst_8067,"can create first token");
var inst_8069 = cljs.core.async.interop.p__GT_c.call(null,inst_8068);
var state_8270__$1 = (function (){var statearr_8289 = state_8270;
(statearr_8289[(12)] = inst_8055);

return statearr_8289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8270__$1,(6),inst_8069);
} else {
if((state_val_8271 === (37))){
var inst_8205 = (state_8270[(8)]);
var inst_8215 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8216 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"claim_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"claim-sym","claim-sym",(1794590380),null)));
var inst_8217 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8218 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8219 = cljs.core.cons.call(null,inst_8218,inst_8205);
var inst_8220 = (new cljs.core.List(null,inst_8219,null,(1),null));
var inst_8221 = (new cljs.core.List(null,inst_8217,inst_8220,(2),null));
var inst_8222 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8216,inst_8221];
var inst_8223 = cljs.core.PersistentHashMap.fromArrays(inst_8215,inst_8222);
var inst_8224 = cljs.test.do_report.call(null,inst_8223);
var state_8270__$1 = state_8270;
var statearr_8290_8712 = state_8270__$1;
(statearr_8290_8712[(2)] = inst_8224);

(statearr_8290_8712[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (6))){
var inst_8071 = (state_8270[(13)]);
var inst_8071__$1 = (state_8270[(2)]);
var inst_8072 = (inst_8071__$1 instanceof cljs.core.ExceptionInfo);
var inst_8073 = cljs.core.ex_data.call(null,inst_8071__$1);
var inst_8074 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8073);
var inst_8075 = cljs.core._EQ_.call(null,inst_8074,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8076 = ((inst_8072) && (inst_8075));
var state_8270__$1 = (function (){var statearr_8291 = state_8270;
(statearr_8291[(13)] = inst_8071__$1);

return statearr_8291;
})();
if(cljs.core.truth_(inst_8076)){
var statearr_8292_8713 = state_8270__$1;
(statearr_8292_8713[(1)] = (7));

} else {
var statearr_8293_8714 = state_8270__$1;
(statearr_8293_8714[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (38))){
var inst_8206 = (state_8270[(9)]);
var inst_8226 = (state_8270[(2)]);
var _ = (function (){var statearr_8294 = state_8270;
(statearr_8294[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8294;
})();
var state_8270__$1 = (function (){var statearr_8295 = state_8270;
(statearr_8295[(14)] = inst_8226);

return statearr_8295;
})();
var statearr_8296_8715 = state_8270__$1;
(statearr_8296_8715[(2)] = inst_8206);

(statearr_8296_8715[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (7))){
var inst_8071 = (state_8270[(13)]);
var inst_8078 = (function(){throw inst_8071})();
var state_8270__$1 = state_8270;
var statearr_8297_8716 = state_8270__$1;
(statearr_8297_8716[(2)] = inst_8078);

(statearr_8297_8716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (39))){
var inst_8114 = (state_8270[(7)]);
var inst_8243 = (state_8270[(15)]);
var inst_8244 = (state_8270[(16)]);
var _ = (function (){var statearr_8298 = state_8270;
(statearr_8298[(4)] = cljs.core.cons.call(null,(42),(state_8270[(4)])));

return statearr_8298;
})();
var inst_8241 = inst_8114.call(null,"token_contract");
var inst_8242 = (new cljs.core.List(null,e2e.stake.token_acc,null,(1),null));
var inst_8243__$1 = (new cljs.core.List(null,inst_8241,inst_8242,(2),null));
var inst_8244__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8243__$1);
var state_8270__$1 = (function (){var statearr_8299 = state_8270;
(statearr_8299[(15)] = inst_8243__$1);

(statearr_8299[(16)] = inst_8244__$1);

return statearr_8299;
})();
if(cljs.core.truth_(inst_8244__$1)){
var statearr_8300_8717 = state_8270__$1;
(statearr_8300_8717[(1)] = (43));

} else {
var statearr_8301_8718 = state_8270__$1;
(statearr_8301_8718[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (8))){
var inst_8071 = (state_8270[(13)]);
var state_8270__$1 = state_8270;
var statearr_8302_8719 = state_8270__$1;
(statearr_8302_8719[(2)] = inst_8071);

(statearr_8302_8719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (40))){
var inst_8267 = (state_8270[(2)]);
var inst_8268 = done.call(null);
var state_8270__$1 = (function (){var statearr_8303 = state_8270;
(statearr_8303[(17)] = inst_8267);

return statearr_8303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8270__$1,inst_8268);
} else {
if((state_val_8271 === (9))){
var inst_8081 = (state_8270[(2)]);
var inst_8082 = e2e.util.wait.call(null,(500));
var inst_8083 = cljs.core.async.interop.p__GT_c.call(null,inst_8082);
var state_8270__$1 = (function (){var statearr_8304 = state_8270;
(statearr_8304[(18)] = inst_8081);

return statearr_8304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8270__$1,(10),inst_8083);
} else {
if((state_val_8271 === (41))){
var inst_8230 = (state_8270[(2)]);
var inst_8231 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8232 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"token_contract"),new cljs.core.Symbol(null,"token-acc","token-acc",(636628889),null));
var inst_8233 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8232,inst_8230];
var inst_8234 = cljs.core.PersistentHashMap.fromArrays(inst_8231,inst_8233);
var inst_8235 = cljs.test.do_report.call(null,inst_8234);
var state_8270__$1 = state_8270;
var statearr_8306_8720 = state_8270__$1;
(statearr_8306_8720[(2)] = inst_8235);

(statearr_8306_8720[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (10))){
var inst_8085 = (state_8270[(19)]);
var inst_8085__$1 = (state_8270[(2)]);
var inst_8086 = (inst_8085__$1 instanceof cljs.core.ExceptionInfo);
var inst_8087 = cljs.core.ex_data.call(null,inst_8085__$1);
var inst_8088 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8087);
var inst_8089 = cljs.core._EQ_.call(null,inst_8088,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8090 = ((inst_8086) && (inst_8089));
var state_8270__$1 = (function (){var statearr_8307 = state_8270;
(statearr_8307[(19)] = inst_8085__$1);

return statearr_8307;
})();
if(cljs.core.truth_(inst_8090)){
var statearr_8308_8721 = state_8270__$1;
(statearr_8308_8721[(1)] = (11));

} else {
var statearr_8309_8722 = state_8270__$1;
(statearr_8309_8722[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (42))){
var _ = (function (){var statearr_8310 = state_8270;
(statearr_8310[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8310;
})();
var state_8270__$1 = state_8270;
var ex8305 = (state_8270__$1[(2)]);
var statearr_8311_8723 = state_8270__$1;
(statearr_8311_8723[(5)] = ex8305);


var statearr_8312_8724 = state_8270__$1;
(statearr_8312_8724[(1)] = (41));

(statearr_8312_8724[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (11))){
var inst_8085 = (state_8270[(19)]);
var inst_8092 = (function(){throw inst_8085})();
var state_8270__$1 = state_8270;
var statearr_8313_8725 = state_8270__$1;
(statearr_8313_8725[(2)] = inst_8092);

(statearr_8313_8725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (43))){
var inst_8243 = (state_8270[(15)]);
var inst_8246 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8247 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"token_contract"),new cljs.core.Symbol(null,"token-acc","token-acc",(636628889),null));
var inst_8248 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8243);
var inst_8249 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8247,inst_8248];
var inst_8250 = cljs.core.PersistentHashMap.fromArrays(inst_8246,inst_8249);
var inst_8251 = cljs.test.do_report.call(null,inst_8250);
var state_8270__$1 = state_8270;
var statearr_8314_8726 = state_8270__$1;
(statearr_8314_8726[(2)] = inst_8251);

(statearr_8314_8726[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (12))){
var inst_8085 = (state_8270[(19)]);
var state_8270__$1 = state_8270;
var statearr_8315_8727 = state_8270__$1;
(statearr_8315_8727[(2)] = inst_8085);

(statearr_8315_8727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (44))){
var inst_8243 = (state_8270[(15)]);
var inst_8253 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8254 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"token_contract"),new cljs.core.Symbol(null,"token-acc","token-acc",(636628889),null));
var inst_8255 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8256 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8257 = cljs.core.cons.call(null,inst_8256,inst_8243);
var inst_8258 = (new cljs.core.List(null,inst_8257,null,(1),null));
var inst_8259 = (new cljs.core.List(null,inst_8255,inst_8258,(2),null));
var inst_8260 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8254,inst_8259];
var inst_8261 = cljs.core.PersistentHashMap.fromArrays(inst_8253,inst_8260);
var inst_8262 = cljs.test.do_report.call(null,inst_8261);
var state_8270__$1 = state_8270;
var statearr_8316_8728 = state_8270__$1;
(statearr_8316_8728[(2)] = inst_8262);

(statearr_8316_8728[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (13))){
var inst_8095 = (state_8270[(2)]);
var inst_8099 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.sym,"stat");
var inst_8100 = cljs.core.async.interop.p__GT_c.call(null,inst_8099);
var state_8270__$1 = (function (){var statearr_8317 = state_8270;
(statearr_8317[(20)] = inst_8095);

return statearr_8317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8270__$1,(14),inst_8100);
} else {
if((state_val_8271 === (45))){
var inst_8244 = (state_8270[(16)]);
var inst_8264 = (state_8270[(2)]);
var _ = (function (){var statearr_8318 = state_8270;
(statearr_8318[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8318;
})();
var state_8270__$1 = (function (){var statearr_8319 = state_8270;
(statearr_8319[(21)] = inst_8264);

return statearr_8319;
})();
var statearr_8320_8729 = state_8270__$1;
(statearr_8320_8729[(2)] = inst_8244);

(statearr_8320_8729[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (14))){
var inst_8102 = (state_8270[(22)]);
var inst_8102__$1 = (state_8270[(2)]);
var inst_8103 = (inst_8102__$1 instanceof cljs.core.ExceptionInfo);
var inst_8104 = cljs.core.ex_data.call(null,inst_8102__$1);
var inst_8105 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8104);
var inst_8106 = cljs.core._EQ_.call(null,inst_8105,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8107 = ((inst_8103) && (inst_8106));
var state_8270__$1 = (function (){var statearr_8321 = state_8270;
(statearr_8321[(22)] = inst_8102__$1);

return statearr_8321;
})();
if(cljs.core.truth_(inst_8107)){
var statearr_8322_8730 = state_8270__$1;
(statearr_8322_8730[(1)] = (15));

} else {
var statearr_8323_8731 = state_8270__$1;
(statearr_8323_8731[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (15))){
var inst_8102 = (state_8270[(22)]);
var inst_8109 = (function(){throw inst_8102})();
var state_8270__$1 = state_8270;
var statearr_8324_8732 = state_8270__$1;
(statearr_8324_8732[(2)] = inst_8109);

(statearr_8324_8732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (16))){
var inst_8102 = (state_8270[(22)]);
var state_8270__$1 = state_8270;
var statearr_8325_8733 = state_8270__$1;
(statearr_8325_8733[(2)] = inst_8102);

(statearr_8325_8733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (17))){
var inst_8112 = (state_8270[(2)]);
var inst_8113 = cljs.core.seq.call(null,inst_8112);
var inst_8114 = cljs.core.first.call(null,inst_8113);
var inst_8115 = cljs.core.next.call(null,inst_8113);
var state_8270__$1 = (function (){var statearr_8326 = state_8270;
(statearr_8326[(7)] = inst_8114);

(statearr_8326[(23)] = inst_8115);

return statearr_8326;
})();
var statearr_8327_8734 = state_8270__$1;
(statearr_8327_8734[(2)] = null);

(statearr_8327_8734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (18))){
var inst_8115 = (state_8270[(23)]);
var inst_8127 = (state_8270[(24)]);
var inst_8128 = (state_8270[(25)]);
var _ = (function (){var statearr_8328 = state_8270;
(statearr_8328[(4)] = cljs.core.cons.call(null,(21),(state_8270[(4)])));

return statearr_8328;
})();
var inst_8127__$1 = (new cljs.core.List(null,inst_8115,null,(1),null));
var inst_8128__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_8127__$1);
var state_8270__$1 = (function (){var statearr_8329 = state_8270;
(statearr_8329[(24)] = inst_8127__$1);

(statearr_8329[(25)] = inst_8128__$1);

return statearr_8329;
})();
if(cljs.core.truth_(inst_8128__$1)){
var statearr_8330_8735 = state_8270__$1;
(statearr_8330_8735[(1)] = (22));

} else {
var statearr_8331_8736 = state_8270__$1;
(statearr_8331_8736[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (19))){
var inst_8151 = (state_8270[(2)]);
var state_8270__$1 = (function (){var statearr_8333 = state_8270;
(statearr_8333[(26)] = inst_8151);

return statearr_8333;
})();
var statearr_8334_8737 = state_8270__$1;
(statearr_8334_8737[(2)] = null);

(statearr_8334_8737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (20))){
var inst_8116 = (state_8270[(2)]);
var inst_8117 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8118 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null));
var inst_8119 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8118,inst_8116];
var inst_8120 = cljs.core.PersistentHashMap.fromArrays(inst_8117,inst_8119);
var inst_8121 = cljs.test.do_report.call(null,inst_8120);
var state_8270__$1 = state_8270;
var statearr_8335_8738 = state_8270__$1;
(statearr_8335_8738[(2)] = inst_8121);

(statearr_8335_8738[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (21))){
var _ = (function (){var statearr_8336 = state_8270;
(statearr_8336[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8336;
})();
var state_8270__$1 = state_8270;
var ex8332 = (state_8270__$1[(2)]);
var statearr_8337_8739 = state_8270__$1;
(statearr_8337_8739[(5)] = ex8332);


var statearr_8338_8740 = state_8270__$1;
(statearr_8338_8740[(1)] = (20));

(statearr_8338_8740[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (22))){
var inst_8127 = (state_8270[(24)]);
var inst_8130 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8131 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null));
var inst_8132 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_8127);
var inst_8133 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8131,inst_8132];
var inst_8134 = cljs.core.PersistentHashMap.fromArrays(inst_8130,inst_8133);
var inst_8135 = cljs.test.do_report.call(null,inst_8134);
var state_8270__$1 = state_8270;
var statearr_8339_8741 = state_8270__$1;
(statearr_8339_8741[(2)] = inst_8135);

(statearr_8339_8741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (23))){
var inst_8127 = (state_8270[(24)]);
var inst_8137 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8138 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null));
var inst_8139 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8140 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_8141 = cljs.core.cons.call(null,inst_8140,inst_8127);
var inst_8142 = (new cljs.core.List(null,inst_8141,null,(1),null));
var inst_8143 = (new cljs.core.List(null,inst_8139,inst_8142,(2),null));
var inst_8144 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8138,inst_8143];
var inst_8145 = cljs.core.PersistentHashMap.fromArrays(inst_8137,inst_8144);
var inst_8146 = cljs.test.do_report.call(null,inst_8145);
var state_8270__$1 = state_8270;
var statearr_8340_8742 = state_8270__$1;
(statearr_8340_8742[(2)] = inst_8146);

(statearr_8340_8742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (24))){
var inst_8128 = (state_8270[(25)]);
var inst_8148 = (state_8270[(2)]);
var _ = (function (){var statearr_8341 = state_8270;
(statearr_8341[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8341;
})();
var state_8270__$1 = (function (){var statearr_8342 = state_8270;
(statearr_8342[(27)] = inst_8148);

return statearr_8342;
})();
var statearr_8343_8743 = state_8270__$1;
(statearr_8343_8743[(2)] = inst_8128);

(statearr_8343_8743[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (25))){
var inst_8114 = (state_8270[(7)]);
var inst_8166 = (state_8270[(28)]);
var inst_8167 = (state_8270[(29)]);
var _ = (function (){var statearr_8344 = state_8270;
(statearr_8344[(4)] = cljs.core.cons.call(null,(28),(state_8270[(4)])));

return statearr_8344;
})();
var inst_8163 = inst_8114.call(null,"stake_symbol");
var inst_8164 = ["4,",e2e.stake.sym].join('');
var inst_8165 = (new cljs.core.List(null,inst_8164,null,(1),null));
var inst_8166__$1 = (new cljs.core.List(null,inst_8163,inst_8165,(2),null));
var inst_8167__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8166__$1);
var state_8270__$1 = (function (){var statearr_8345 = state_8270;
(statearr_8345[(28)] = inst_8166__$1);

(statearr_8345[(29)] = inst_8167__$1);

return statearr_8345;
})();
if(cljs.core.truth_(inst_8167__$1)){
var statearr_8346_8744 = state_8270__$1;
(statearr_8346_8744[(1)] = (29));

} else {
var statearr_8347_8745 = state_8270__$1;
(statearr_8347_8745[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (26))){
var inst_8190 = (state_8270[(2)]);
var state_8270__$1 = (function (){var statearr_8349 = state_8270;
(statearr_8349[(30)] = inst_8190);

return statearr_8349;
})();
var statearr_8350_8746 = state_8270__$1;
(statearr_8350_8746[(2)] = null);

(statearr_8350_8746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (27))){
var inst_8152 = (state_8270[(2)]);
var inst_8153 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8154 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"stake_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"sym","sym",(195671222),null)));
var inst_8155 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8154,inst_8152];
var inst_8156 = cljs.core.PersistentHashMap.fromArrays(inst_8153,inst_8155);
var inst_8157 = cljs.test.do_report.call(null,inst_8156);
var state_8270__$1 = state_8270;
var statearr_8351_8747 = state_8270__$1;
(statearr_8351_8747[(2)] = inst_8157);

(statearr_8351_8747[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (28))){
var _ = (function (){var statearr_8352 = state_8270;
(statearr_8352[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8352;
})();
var state_8270__$1 = state_8270;
var ex8348 = (state_8270__$1[(2)]);
var statearr_8353_8748 = state_8270__$1;
(statearr_8353_8748[(5)] = ex8348);


var statearr_8354_8749 = state_8270__$1;
(statearr_8354_8749[(1)] = (27));

(statearr_8354_8749[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (29))){
var inst_8166 = (state_8270[(28)]);
var inst_8169 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8170 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"stake_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"sym","sym",(195671222),null)));
var inst_8171 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8166);
var inst_8172 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8170,inst_8171];
var inst_8173 = cljs.core.PersistentHashMap.fromArrays(inst_8169,inst_8172);
var inst_8174 = cljs.test.do_report.call(null,inst_8173);
var state_8270__$1 = state_8270;
var statearr_8355_8750 = state_8270__$1;
(statearr_8355_8750[(2)] = inst_8174);

(statearr_8355_8750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (30))){
var inst_8166 = (state_8270[(28)]);
var inst_8176 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8177 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"stake_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"sym","sym",(195671222),null)));
var inst_8178 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8179 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8180 = cljs.core.cons.call(null,inst_8179,inst_8166);
var inst_8181 = (new cljs.core.List(null,inst_8180,null,(1),null));
var inst_8182 = (new cljs.core.List(null,inst_8178,inst_8181,(2),null));
var inst_8183 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8177,inst_8182];
var inst_8184 = cljs.core.PersistentHashMap.fromArrays(inst_8176,inst_8183);
var inst_8185 = cljs.test.do_report.call(null,inst_8184);
var state_8270__$1 = state_8270;
var statearr_8356_8751 = state_8270__$1;
(statearr_8356_8751[(2)] = inst_8185);

(statearr_8356_8751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8271 === (31))){
var inst_8167 = (state_8270[(29)]);
var inst_8187 = (state_8270[(2)]);
var _ = (function (){var statearr_8357 = state_8270;
(statearr_8357[(4)] = cljs.core.rest.call(null,(state_8270[(4)])));

return statearr_8357;
})();
var state_8270__$1 = (function (){var statearr_8358 = state_8270;
(statearr_8358[(31)] = inst_8187);

return statearr_8358;
})();
var statearr_8359_8752 = state_8270__$1;
(statearr_8359_8752[(2)] = inst_8167);

(statearr_8359_8752[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$stake$state_machine__15__auto__ = null;
var e2e$stake$state_machine__15__auto____0 = (function (){
var statearr_8360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8360[(0)] = e2e$stake$state_machine__15__auto__);

(statearr_8360[(1)] = (1));

return statearr_8360;
});
var e2e$stake$state_machine__15__auto____1 = (function (state_8270){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_8270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e8361){var ex__18__auto__ = e8361;
var statearr_8362_8753 = state_8270;
(statearr_8362_8753[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_8270[(4)]))){
var statearr_8363_8754 = state_8270;
(statearr_8363_8754[(1)] = cljs.core.first.call(null,(state_8270[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__8755 = state_8270;
state_8270 = G__8755;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$stake$state_machine__15__auto__ = function(state_8270){
switch(arguments.length){
case 0:
return e2e$stake$state_machine__15__auto____0.call(this);
case 1:
return e2e$stake$state_machine__15__auto____1.call(this,state_8270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$stake$state_machine__15__auto____0;
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$stake$state_machine__15__auto____1;
return e2e$stake$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_8364 = f__20__auto__.call(null);
(statearr_8364[(6)] = c__19__auto__);

return statearr_8364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.stake.t_e2e$stake8025.prototype.apply = (function (self__,args8028){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8028)));
});

e2e.stake.t_e2e$stake8025.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_8606){
var state_val_8607 = (state_8606[(1)]);
if((state_val_8607 === (32))){
var inst_8450 = (state_8606[(7)]);
var inst_8541 = (state_8606[(8)]);
var inst_8542 = (state_8606[(9)]);
var _ = (function (){var statearr_8608 = state_8606;
(statearr_8608[(4)] = cljs.core.cons.call(null,(35),(state_8606[(4)])));

return statearr_8608;
})();
var inst_8538 = inst_8450.call(null,"claim_symbol");
var inst_8539 = ["4,",e2e.stake.claim_sym].join('');
var inst_8540 = (new cljs.core.List(null,inst_8539,null,(1),null));
var inst_8541__$1 = (new cljs.core.List(null,inst_8538,inst_8540,(2),null));
var inst_8542__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8541__$1);
var state_8606__$1 = (function (){var statearr_8609 = state_8606;
(statearr_8609[(8)] = inst_8541__$1);

(statearr_8609[(9)] = inst_8542__$1);

return statearr_8609;
})();
if(cljs.core.truth_(inst_8542__$1)){
var statearr_8610_8756 = state_8606__$1;
(statearr_8610_8756[(1)] = (36));

} else {
var statearr_8611_8757 = state_8606__$1;
(statearr_8611_8757[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (1))){
var inst_8365 = [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777))];
var inst_8366 = ["4,",e2e.stake.sym].join('');
var inst_8367 = ["4,",e2e.stake.claim_sym].join('');
var inst_8368 = [inst_8366,inst_8367,e2e.stake.token_acc,(2)];
var inst_8369 = cljs.core.PersistentHashMap.fromArrays(inst_8365,inst_8368);
var inst_8370 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8371 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_8372 = [e2e.stake.owner_acc,"owner"];
var inst_8373 = cljs.core.PersistentHashMap.fromArrays(inst_8371,inst_8372);
var inst_8374 = [inst_8373];
var inst_8375 = (new cljs.core.PersistentVector(null,(1),(5),inst_8370,inst_8374,null));
var inst_8376 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"create",inst_8369,inst_8375);
var inst_8377 = ["missing authority of ",e2e.stake.stake_acc].join('');
var inst_8378 = e2e.util.should_fail_with.call(null,inst_8376,inst_8377);
var inst_8379 = cljs.core.async.interop.p__GT_c.call(null,inst_8378);
var state_8606__$1 = state_8606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8606__$1,(2),inst_8379);
} else {
if((state_val_8607 === (33))){
var inst_8565 = (state_8606[(2)]);
var state_8606__$1 = (function (){var statearr_8612 = state_8606;
(statearr_8612[(10)] = inst_8565);

return statearr_8612;
})();
var statearr_8613_8758 = state_8606__$1;
(statearr_8613_8758[(2)] = null);

(statearr_8613_8758[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (2))){
var inst_8381 = (state_8606[(11)]);
var inst_8381__$1 = (state_8606[(2)]);
var inst_8382 = (inst_8381__$1 instanceof cljs.core.ExceptionInfo);
var inst_8383 = cljs.core.ex_data.call(null,inst_8381__$1);
var inst_8384 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8383);
var inst_8385 = cljs.core._EQ_.call(null,inst_8384,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8386 = ((inst_8382) && (inst_8385));
var state_8606__$1 = (function (){var statearr_8614 = state_8606;
(statearr_8614[(11)] = inst_8381__$1);

return statearr_8614;
})();
if(cljs.core.truth_(inst_8386)){
var statearr_8615_8759 = state_8606__$1;
(statearr_8615_8759[(1)] = (3));

} else {
var statearr_8616_8760 = state_8606__$1;
(statearr_8616_8760[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (34))){
var inst_8527 = (state_8606[(2)]);
var inst_8528 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8529 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"claim_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"claim-sym","claim-sym",(1794590380),null)));
var inst_8530 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8529,inst_8527];
var inst_8531 = cljs.core.PersistentHashMap.fromArrays(inst_8528,inst_8530);
var inst_8532 = cljs.test.do_report.call(null,inst_8531);
var state_8606__$1 = state_8606;
var statearr_8618_8761 = state_8606__$1;
(statearr_8618_8761[(2)] = inst_8532);

(statearr_8618_8761[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (3))){
var inst_8381 = (state_8606[(11)]);
var inst_8388 = (function(){throw inst_8381})();
var state_8606__$1 = state_8606;
var statearr_8619_8762 = state_8606__$1;
(statearr_8619_8762[(2)] = inst_8388);

(statearr_8619_8762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (35))){
var _ = (function (){var statearr_8620 = state_8606;
(statearr_8620[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8620;
})();
var state_8606__$1 = state_8606;
var ex8617 = (state_8606__$1[(2)]);
var statearr_8621_8763 = state_8606__$1;
(statearr_8621_8763[(5)] = ex8617);


var statearr_8622_8764 = state_8606__$1;
(statearr_8622_8764[(1)] = (34));

(statearr_8622_8764[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (4))){
var inst_8381 = (state_8606[(11)]);
var state_8606__$1 = state_8606;
var statearr_8623_8765 = state_8606__$1;
(statearr_8623_8765[(2)] = inst_8381);

(statearr_8623_8765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (36))){
var inst_8541 = (state_8606[(8)]);
var inst_8544 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8545 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"claim_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"claim-sym","claim-sym",(1794590380),null)));
var inst_8546 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8541);
var inst_8547 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8545,inst_8546];
var inst_8548 = cljs.core.PersistentHashMap.fromArrays(inst_8544,inst_8547);
var inst_8549 = cljs.test.do_report.call(null,inst_8548);
var state_8606__$1 = state_8606;
var statearr_8624_8766 = state_8606__$1;
(statearr_8624_8766[(2)] = inst_8549);

(statearr_8624_8766[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (5))){
var inst_8391 = (state_8606[(2)]);
var inst_8392 = [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777))];
var inst_8393 = ["4,",e2e.stake.sym].join('');
var inst_8394 = ["4,",e2e.stake.claim_sym].join('');
var inst_8395 = [inst_8393,inst_8394,e2e.stake.token_acc,(2)];
var inst_8396 = cljs.core.PersistentHashMap.fromArrays(inst_8392,inst_8395);
var inst_8397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8398 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_8399 = [e2e.stake.stake_acc,"owner"];
var inst_8400 = cljs.core.PersistentHashMap.fromArrays(inst_8398,inst_8399);
var inst_8401 = [inst_8400];
var inst_8402 = (new cljs.core.PersistentVector(null,(1),(5),inst_8397,inst_8401,null));
var inst_8403 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"create",inst_8396,inst_8402);
var inst_8404 = e2e.util.should_succeed.call(null,inst_8403,"can create first token");
var inst_8405 = cljs.core.async.interop.p__GT_c.call(null,inst_8404);
var state_8606__$1 = (function (){var statearr_8625 = state_8606;
(statearr_8625[(12)] = inst_8391);

return statearr_8625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8606__$1,(6),inst_8405);
} else {
if((state_val_8607 === (37))){
var inst_8541 = (state_8606[(8)]);
var inst_8551 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8552 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"claim_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"claim-sym","claim-sym",(1794590380),null)));
var inst_8553 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8554 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8555 = cljs.core.cons.call(null,inst_8554,inst_8541);
var inst_8556 = (new cljs.core.List(null,inst_8555,null,(1),null));
var inst_8557 = (new cljs.core.List(null,inst_8553,inst_8556,(2),null));
var inst_8558 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8552,inst_8557];
var inst_8559 = cljs.core.PersistentHashMap.fromArrays(inst_8551,inst_8558);
var inst_8560 = cljs.test.do_report.call(null,inst_8559);
var state_8606__$1 = state_8606;
var statearr_8626_8767 = state_8606__$1;
(statearr_8626_8767[(2)] = inst_8560);

(statearr_8626_8767[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (6))){
var inst_8407 = (state_8606[(13)]);
var inst_8407__$1 = (state_8606[(2)]);
var inst_8408 = (inst_8407__$1 instanceof cljs.core.ExceptionInfo);
var inst_8409 = cljs.core.ex_data.call(null,inst_8407__$1);
var inst_8410 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8409);
var inst_8411 = cljs.core._EQ_.call(null,inst_8410,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8412 = ((inst_8408) && (inst_8411));
var state_8606__$1 = (function (){var statearr_8627 = state_8606;
(statearr_8627[(13)] = inst_8407__$1);

return statearr_8627;
})();
if(cljs.core.truth_(inst_8412)){
var statearr_8628_8768 = state_8606__$1;
(statearr_8628_8768[(1)] = (7));

} else {
var statearr_8629_8769 = state_8606__$1;
(statearr_8629_8769[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (38))){
var inst_8542 = (state_8606[(9)]);
var inst_8562 = (state_8606[(2)]);
var _ = (function (){var statearr_8630 = state_8606;
(statearr_8630[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8630;
})();
var state_8606__$1 = (function (){var statearr_8631 = state_8606;
(statearr_8631[(14)] = inst_8562);

return statearr_8631;
})();
var statearr_8632_8770 = state_8606__$1;
(statearr_8632_8770[(2)] = inst_8542);

(statearr_8632_8770[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (7))){
var inst_8407 = (state_8606[(13)]);
var inst_8414 = (function(){throw inst_8407})();
var state_8606__$1 = state_8606;
var statearr_8633_8771 = state_8606__$1;
(statearr_8633_8771[(2)] = inst_8414);

(statearr_8633_8771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (39))){
var inst_8450 = (state_8606[(7)]);
var inst_8579 = (state_8606[(15)]);
var inst_8580 = (state_8606[(16)]);
var _ = (function (){var statearr_8634 = state_8606;
(statearr_8634[(4)] = cljs.core.cons.call(null,(42),(state_8606[(4)])));

return statearr_8634;
})();
var inst_8577 = inst_8450.call(null,"token_contract");
var inst_8578 = (new cljs.core.List(null,e2e.stake.token_acc,null,(1),null));
var inst_8579__$1 = (new cljs.core.List(null,inst_8577,inst_8578,(2),null));
var inst_8580__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8579__$1);
var state_8606__$1 = (function (){var statearr_8635 = state_8606;
(statearr_8635[(15)] = inst_8579__$1);

(statearr_8635[(16)] = inst_8580__$1);

return statearr_8635;
})();
if(cljs.core.truth_(inst_8580__$1)){
var statearr_8636_8772 = state_8606__$1;
(statearr_8636_8772[(1)] = (43));

} else {
var statearr_8637_8773 = state_8606__$1;
(statearr_8637_8773[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (8))){
var inst_8407 = (state_8606[(13)]);
var state_8606__$1 = state_8606;
var statearr_8638_8774 = state_8606__$1;
(statearr_8638_8774[(2)] = inst_8407);

(statearr_8638_8774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (40))){
var inst_8603 = (state_8606[(2)]);
var inst_8604 = done.call(null);
var state_8606__$1 = (function (){var statearr_8639 = state_8606;
(statearr_8639[(17)] = inst_8603);

return statearr_8639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8606__$1,inst_8604);
} else {
if((state_val_8607 === (9))){
var inst_8417 = (state_8606[(2)]);
var inst_8418 = e2e.util.wait.call(null,(500));
var inst_8419 = cljs.core.async.interop.p__GT_c.call(null,inst_8418);
var state_8606__$1 = (function (){var statearr_8640 = state_8606;
(statearr_8640[(18)] = inst_8417);

return statearr_8640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8606__$1,(10),inst_8419);
} else {
if((state_val_8607 === (41))){
var inst_8566 = (state_8606[(2)]);
var inst_8567 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8568 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"token_contract"),new cljs.core.Symbol(null,"token-acc","token-acc",(636628889),null));
var inst_8569 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8568,inst_8566];
var inst_8570 = cljs.core.PersistentHashMap.fromArrays(inst_8567,inst_8569);
var inst_8571 = cljs.test.do_report.call(null,inst_8570);
var state_8606__$1 = state_8606;
var statearr_8642_8775 = state_8606__$1;
(statearr_8642_8775[(2)] = inst_8571);

(statearr_8642_8775[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (10))){
var inst_8421 = (state_8606[(19)]);
var inst_8421__$1 = (state_8606[(2)]);
var inst_8422 = (inst_8421__$1 instanceof cljs.core.ExceptionInfo);
var inst_8423 = cljs.core.ex_data.call(null,inst_8421__$1);
var inst_8424 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8423);
var inst_8425 = cljs.core._EQ_.call(null,inst_8424,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8426 = ((inst_8422) && (inst_8425));
var state_8606__$1 = (function (){var statearr_8643 = state_8606;
(statearr_8643[(19)] = inst_8421__$1);

return statearr_8643;
})();
if(cljs.core.truth_(inst_8426)){
var statearr_8644_8776 = state_8606__$1;
(statearr_8644_8776[(1)] = (11));

} else {
var statearr_8645_8777 = state_8606__$1;
(statearr_8645_8777[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (42))){
var _ = (function (){var statearr_8646 = state_8606;
(statearr_8646[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8646;
})();
var state_8606__$1 = state_8606;
var ex8641 = (state_8606__$1[(2)]);
var statearr_8647_8778 = state_8606__$1;
(statearr_8647_8778[(5)] = ex8641);


var statearr_8648_8779 = state_8606__$1;
(statearr_8648_8779[(1)] = (41));

(statearr_8648_8779[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (11))){
var inst_8421 = (state_8606[(19)]);
var inst_8428 = (function(){throw inst_8421})();
var state_8606__$1 = state_8606;
var statearr_8649_8780 = state_8606__$1;
(statearr_8649_8780[(2)] = inst_8428);

(statearr_8649_8780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (43))){
var inst_8579 = (state_8606[(15)]);
var inst_8582 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8583 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"token_contract"),new cljs.core.Symbol(null,"token-acc","token-acc",(636628889),null));
var inst_8584 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8579);
var inst_8585 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8583,inst_8584];
var inst_8586 = cljs.core.PersistentHashMap.fromArrays(inst_8582,inst_8585);
var inst_8587 = cljs.test.do_report.call(null,inst_8586);
var state_8606__$1 = state_8606;
var statearr_8650_8781 = state_8606__$1;
(statearr_8650_8781[(2)] = inst_8587);

(statearr_8650_8781[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (12))){
var inst_8421 = (state_8606[(19)]);
var state_8606__$1 = state_8606;
var statearr_8651_8782 = state_8606__$1;
(statearr_8651_8782[(2)] = inst_8421);

(statearr_8651_8782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (44))){
var inst_8579 = (state_8606[(15)]);
var inst_8589 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8590 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"token_contract"),new cljs.core.Symbol(null,"token-acc","token-acc",(636628889),null));
var inst_8591 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8592 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8593 = cljs.core.cons.call(null,inst_8592,inst_8579);
var inst_8594 = (new cljs.core.List(null,inst_8593,null,(1),null));
var inst_8595 = (new cljs.core.List(null,inst_8591,inst_8594,(2),null));
var inst_8596 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8590,inst_8595];
var inst_8597 = cljs.core.PersistentHashMap.fromArrays(inst_8589,inst_8596);
var inst_8598 = cljs.test.do_report.call(null,inst_8597);
var state_8606__$1 = state_8606;
var statearr_8652_8783 = state_8606__$1;
(statearr_8652_8783[(2)] = inst_8598);

(statearr_8652_8783[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (13))){
var inst_8431 = (state_8606[(2)]);
var inst_8435 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.sym,"stat");
var inst_8436 = cljs.core.async.interop.p__GT_c.call(null,inst_8435);
var state_8606__$1 = (function (){var statearr_8653 = state_8606;
(statearr_8653[(20)] = inst_8431);

return statearr_8653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8606__$1,(14),inst_8436);
} else {
if((state_val_8607 === (45))){
var inst_8580 = (state_8606[(16)]);
var inst_8600 = (state_8606[(2)]);
var _ = (function (){var statearr_8654 = state_8606;
(statearr_8654[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8654;
})();
var state_8606__$1 = (function (){var statearr_8655 = state_8606;
(statearr_8655[(21)] = inst_8600);

return statearr_8655;
})();
var statearr_8656_8784 = state_8606__$1;
(statearr_8656_8784[(2)] = inst_8580);

(statearr_8656_8784[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (14))){
var inst_8438 = (state_8606[(22)]);
var inst_8438__$1 = (state_8606[(2)]);
var inst_8439 = (inst_8438__$1 instanceof cljs.core.ExceptionInfo);
var inst_8440 = cljs.core.ex_data.call(null,inst_8438__$1);
var inst_8441 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8440);
var inst_8442 = cljs.core._EQ_.call(null,inst_8441,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8443 = ((inst_8439) && (inst_8442));
var state_8606__$1 = (function (){var statearr_8657 = state_8606;
(statearr_8657[(22)] = inst_8438__$1);

return statearr_8657;
})();
if(cljs.core.truth_(inst_8443)){
var statearr_8658_8785 = state_8606__$1;
(statearr_8658_8785[(1)] = (15));

} else {
var statearr_8659_8786 = state_8606__$1;
(statearr_8659_8786[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (15))){
var inst_8438 = (state_8606[(22)]);
var inst_8445 = (function(){throw inst_8438})();
var state_8606__$1 = state_8606;
var statearr_8660_8787 = state_8606__$1;
(statearr_8660_8787[(2)] = inst_8445);

(statearr_8660_8787[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (16))){
var inst_8438 = (state_8606[(22)]);
var state_8606__$1 = state_8606;
var statearr_8661_8788 = state_8606__$1;
(statearr_8661_8788[(2)] = inst_8438);

(statearr_8661_8788[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (17))){
var inst_8448 = (state_8606[(2)]);
var inst_8449 = cljs.core.seq.call(null,inst_8448);
var inst_8450 = cljs.core.first.call(null,inst_8449);
var inst_8451 = cljs.core.next.call(null,inst_8449);
var state_8606__$1 = (function (){var statearr_8662 = state_8606;
(statearr_8662[(7)] = inst_8450);

(statearr_8662[(23)] = inst_8451);

return statearr_8662;
})();
var statearr_8663_8789 = state_8606__$1;
(statearr_8663_8789[(2)] = null);

(statearr_8663_8789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (18))){
var inst_8451 = (state_8606[(23)]);
var inst_8463 = (state_8606[(24)]);
var inst_8464 = (state_8606[(25)]);
var _ = (function (){var statearr_8664 = state_8606;
(statearr_8664[(4)] = cljs.core.cons.call(null,(21),(state_8606[(4)])));

return statearr_8664;
})();
var inst_8463__$1 = (new cljs.core.List(null,inst_8451,null,(1),null));
var inst_8464__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_8463__$1);
var state_8606__$1 = (function (){var statearr_8665 = state_8606;
(statearr_8665[(24)] = inst_8463__$1);

(statearr_8665[(25)] = inst_8464__$1);

return statearr_8665;
})();
if(cljs.core.truth_(inst_8464__$1)){
var statearr_8666_8790 = state_8606__$1;
(statearr_8666_8790[(1)] = (22));

} else {
var statearr_8667_8791 = state_8606__$1;
(statearr_8667_8791[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (19))){
var inst_8487 = (state_8606[(2)]);
var state_8606__$1 = (function (){var statearr_8669 = state_8606;
(statearr_8669[(26)] = inst_8487);

return statearr_8669;
})();
var statearr_8670_8792 = state_8606__$1;
(statearr_8670_8792[(2)] = null);

(statearr_8670_8792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (20))){
var inst_8452 = (state_8606[(2)]);
var inst_8453 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8454 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null));
var inst_8455 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8454,inst_8452];
var inst_8456 = cljs.core.PersistentHashMap.fromArrays(inst_8453,inst_8455);
var inst_8457 = cljs.test.do_report.call(null,inst_8456);
var state_8606__$1 = state_8606;
var statearr_8671_8793 = state_8606__$1;
(statearr_8671_8793[(2)] = inst_8457);

(statearr_8671_8793[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (21))){
var _ = (function (){var statearr_8672 = state_8606;
(statearr_8672[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8672;
})();
var state_8606__$1 = state_8606;
var ex8668 = (state_8606__$1[(2)]);
var statearr_8673_8794 = state_8606__$1;
(statearr_8673_8794[(5)] = ex8668);


var statearr_8674_8795 = state_8606__$1;
(statearr_8674_8795[(1)] = (20));

(statearr_8674_8795[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (22))){
var inst_8463 = (state_8606[(24)]);
var inst_8466 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8467 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null));
var inst_8468 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_8463);
var inst_8469 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8467,inst_8468];
var inst_8470 = cljs.core.PersistentHashMap.fromArrays(inst_8466,inst_8469);
var inst_8471 = cljs.test.do_report.call(null,inst_8470);
var state_8606__$1 = state_8606;
var statearr_8675_8796 = state_8606__$1;
(statearr_8675_8796[(2)] = inst_8471);

(statearr_8675_8796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (23))){
var inst_8463 = (state_8606[(24)]);
var inst_8473 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8474 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null));
var inst_8475 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8476 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_8477 = cljs.core.cons.call(null,inst_8476,inst_8463);
var inst_8478 = (new cljs.core.List(null,inst_8477,null,(1),null));
var inst_8479 = (new cljs.core.List(null,inst_8475,inst_8478,(2),null));
var inst_8480 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8474,inst_8479];
var inst_8481 = cljs.core.PersistentHashMap.fromArrays(inst_8473,inst_8480);
var inst_8482 = cljs.test.do_report.call(null,inst_8481);
var state_8606__$1 = state_8606;
var statearr_8676_8797 = state_8606__$1;
(statearr_8676_8797[(2)] = inst_8482);

(statearr_8676_8797[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (24))){
var inst_8464 = (state_8606[(25)]);
var inst_8484 = (state_8606[(2)]);
var _ = (function (){var statearr_8677 = state_8606;
(statearr_8677[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8677;
})();
var state_8606__$1 = (function (){var statearr_8678 = state_8606;
(statearr_8678[(27)] = inst_8484);

return statearr_8678;
})();
var statearr_8679_8798 = state_8606__$1;
(statearr_8679_8798[(2)] = inst_8464);

(statearr_8679_8798[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (25))){
var inst_8450 = (state_8606[(7)]);
var inst_8502 = (state_8606[(28)]);
var inst_8503 = (state_8606[(29)]);
var _ = (function (){var statearr_8680 = state_8606;
(statearr_8680[(4)] = cljs.core.cons.call(null,(28),(state_8606[(4)])));

return statearr_8680;
})();
var inst_8499 = inst_8450.call(null,"stake_symbol");
var inst_8500 = ["4,",e2e.stake.sym].join('');
var inst_8501 = (new cljs.core.List(null,inst_8500,null,(1),null));
var inst_8502__$1 = (new cljs.core.List(null,inst_8499,inst_8501,(2),null));
var inst_8503__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8502__$1);
var state_8606__$1 = (function (){var statearr_8681 = state_8606;
(statearr_8681[(28)] = inst_8502__$1);

(statearr_8681[(29)] = inst_8503__$1);

return statearr_8681;
})();
if(cljs.core.truth_(inst_8503__$1)){
var statearr_8682_8799 = state_8606__$1;
(statearr_8682_8799[(1)] = (29));

} else {
var statearr_8683_8800 = state_8606__$1;
(statearr_8683_8800[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (26))){
var inst_8526 = (state_8606[(2)]);
var state_8606__$1 = (function (){var statearr_8685 = state_8606;
(statearr_8685[(30)] = inst_8526);

return statearr_8685;
})();
var statearr_8686_8801 = state_8606__$1;
(statearr_8686_8801[(2)] = null);

(statearr_8686_8801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (27))){
var inst_8488 = (state_8606[(2)]);
var inst_8489 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8490 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"stake_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"sym","sym",(195671222),null)));
var inst_8491 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8490,inst_8488];
var inst_8492 = cljs.core.PersistentHashMap.fromArrays(inst_8489,inst_8491);
var inst_8493 = cljs.test.do_report.call(null,inst_8492);
var state_8606__$1 = state_8606;
var statearr_8687_8802 = state_8606__$1;
(statearr_8687_8802[(2)] = inst_8493);

(statearr_8687_8802[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (28))){
var _ = (function (){var statearr_8688 = state_8606;
(statearr_8688[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8688;
})();
var state_8606__$1 = state_8606;
var ex8684 = (state_8606__$1[(2)]);
var statearr_8689_8803 = state_8606__$1;
(statearr_8689_8803[(5)] = ex8684);


var statearr_8690_8804 = state_8606__$1;
(statearr_8690_8804[(1)] = (27));

(statearr_8690_8804[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (29))){
var inst_8502 = (state_8606[(28)]);
var inst_8505 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8506 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"stake_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"sym","sym",(195671222),null)));
var inst_8507 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8502);
var inst_8508 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8506,inst_8507];
var inst_8509 = cljs.core.PersistentHashMap.fromArrays(inst_8505,inst_8508);
var inst_8510 = cljs.test.do_report.call(null,inst_8509);
var state_8606__$1 = state_8606;
var statearr_8691_8805 = state_8606__$1;
(statearr_8691_8805[(2)] = inst_8510);

(statearr_8691_8805[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (30))){
var inst_8502 = (state_8606[(28)]);
var inst_8512 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8513 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"row","row",(1070392006),null),"stake_symbol"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"4,",new cljs.core.Symbol(null,"sym","sym",(195671222),null)));
var inst_8514 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8515 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8516 = cljs.core.cons.call(null,inst_8515,inst_8502);
var inst_8517 = (new cljs.core.List(null,inst_8516,null,(1),null));
var inst_8518 = (new cljs.core.List(null,inst_8514,inst_8517,(2),null));
var inst_8519 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8513,inst_8518];
var inst_8520 = cljs.core.PersistentHashMap.fromArrays(inst_8512,inst_8519);
var inst_8521 = cljs.test.do_report.call(null,inst_8520);
var state_8606__$1 = state_8606;
var statearr_8692_8806 = state_8606__$1;
(statearr_8692_8806[(2)] = inst_8521);

(statearr_8692_8806[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8607 === (31))){
var inst_8503 = (state_8606[(29)]);
var inst_8523 = (state_8606[(2)]);
var _ = (function (){var statearr_8693 = state_8606;
(statearr_8693[(4)] = cljs.core.rest.call(null,(state_8606[(4)])));

return statearr_8693;
})();
var state_8606__$1 = (function (){var statearr_8694 = state_8606;
(statearr_8694[(31)] = inst_8523);

return statearr_8694;
})();
var statearr_8695_8807 = state_8606__$1;
(statearr_8695_8807[(2)] = inst_8503);

(statearr_8695_8807[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$stake$state_machine__15__auto__ = null;
var e2e$stake$state_machine__15__auto____0 = (function (){
var statearr_8696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8696[(0)] = e2e$stake$state_machine__15__auto__);

(statearr_8696[(1)] = (1));

return statearr_8696;
});
var e2e$stake$state_machine__15__auto____1 = (function (state_8606){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_8606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e8697){var ex__18__auto__ = e8697;
var statearr_8698_8808 = state_8606;
(statearr_8698_8808[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_8606[(4)]))){
var statearr_8699_8809 = state_8606;
(statearr_8699_8809[(1)] = cljs.core.first.call(null,(state_8606[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__8810 = state_8606;
state_8606 = G__8810;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$stake$state_machine__15__auto__ = function(state_8606){
switch(arguments.length){
case 0:
return e2e$stake$state_machine__15__auto____0.call(this);
case 1:
return e2e$stake$state_machine__15__auto____1.call(this,state_8606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$stake$state_machine__15__auto____0;
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$stake$state_machine__15__auto____1;
return e2e$stake$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_8700 = f__20__auto__.call(null);
(statearr_8700[(6)] = c__19__auto__);

return statearr_8700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.stake.t_e2e$stake8025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8026","meta8026",(140694829),null)], null);
});

e2e.stake.t_e2e$stake8025.cljs$lang$type = true;

e2e.stake.t_e2e$stake8025.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8025";

e2e.stake.t_e2e$stake8025.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8025");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8025.
 */
e2e.stake.__GT_t_e2e$stake8025 = (function e2e$stake$__GT_t_e2e$stake8025(meta8026){
return (new e2e.stake.t_e2e$stake8025(meta8026));
});

}

return (new e2e.stake.t_e2e$stake8025(null));
});

e2e.stake.create.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.create;},new cljs.core.Symbol("e2e.stake","create","e2e.stake/create",(434100331),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"create","create",(339032271),null),"e2e/stake.cljs",(16),(1),(181),(181),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.create)?e2e.stake.create.cljs$lang$test:null)]));
e2e.stake.stake = (function e2e$stake$stake(){
return cljs.test.test_var.call(null,e2e.stake.stake.cljs$lang$var);
});
e2e.stake.stake.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8811 = (function (meta8812){
this.meta8812 = meta8812;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8813,meta8812__$1){
var self__ = this;
var _8813__$1 = this;
return (new e2e.stake.t_e2e$stake8811(meta8812__$1));
});

e2e.stake.t_e2e$stake8811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8813){
var self__ = this;
var _8813__$1 = this;
return self__.meta8812;
});

e2e.stake.t_e2e$stake8811.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8811.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var stk_amount = ["100.0000 ",e2e.stake.sym].join('');
return eos_cljs.core.wait_block.call(null,e2e.util.should_succeed.call(null,e2e.util.should_succeed.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_succeed.call(null,e2e.util.should_fail_with.call(null,e2e.stake.stake_tx.call(null,e2e.stake.owner_acc,stk_amount,e2e.stake.owner_perm),"you must open a stake before staking").then(((function (stk_amount,___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"open",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"transfer",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),stk_amount,new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null)], null)], null));
});})(stk_amount,___192__auto__,self____$1))
),"can perform a stake").then(((function (stk_amount,___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["1.0000 ",e2e.stake.sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});})(stk_amount,___192__auto__,self____$1))
),"only stake transactions are accepted").then(((function (stk_amount,___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["2.0000 ",e2e.stake.claim_sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});})(stk_amount,___192__auto__,self____$1))
),"unkown assets can be sent").then(((function (stk_amount,___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.tkn_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),stk_amount,new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});})(stk_amount,___192__auto__,self____$1))
),"can transfer from different account").then(((function (stk_amount,___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(stk_amount,___192__auto__,self____$1))
).then(((function (stk_amount,___192__auto__,self____$1){
return (function (p1__45_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.get_in.call(null,p1__45_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),(new cljs.core.List(null,stk_amount,null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"cant stake from different account",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__45#","p1__45#",(-1105584829),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),new cljs.core.Symbol(null,"stk-amount","stk-amount",(666492024),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"cant stake from different account",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__45#","p1__45#",(-1105584829),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),new cljs.core.Symbol(null,"stk-amount","stk-amount",(666492024),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8815){var t__191__auto__ = e8815;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"cant stake from different account",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__45#","p1__45#",(-1105584829),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),new cljs.core.Symbol(null,"stk-amount","stk-amount",(666492024),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(stk_amount,___192__auto__,self____$1))
),(3)).then(done);
});

e2e.stake.t_e2e$stake8811.prototype.apply = (function (self__,args8814){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8814)));
});

e2e.stake.t_e2e$stake8811.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var stk_amount = ["100.0000 ",e2e.stake.sym].join('');
return eos_cljs.core.wait_block.call(null,e2e.util.should_succeed.call(null,e2e.util.should_succeed.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_succeed.call(null,e2e.util.should_fail_with.call(null,e2e.stake.stake_tx.call(null,e2e.stake.owner_acc,stk_amount,e2e.stake.owner_perm),"you must open a stake before staking").then(((function (stk_amount,___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"open",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"transfer",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),stk_amount,new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null)], null)], null));
});})(stk_amount,___192__auto__))
),"can perform a stake").then(((function (stk_amount,___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["1.0000 ",e2e.stake.sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});})(stk_amount,___192__auto__))
),"only stake transactions are accepted").then(((function (stk_amount,___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["2.0000 ",e2e.stake.claim_sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});})(stk_amount,___192__auto__))
),"unkown assets can be sent").then(((function (stk_amount,___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.tkn_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),stk_amount,new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});})(stk_amount,___192__auto__))
),"can transfer from different account").then(((function (stk_amount,___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(stk_amount,___192__auto__))
).then(((function (stk_amount,___192__auto__){
return (function (p1__45_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.get_in.call(null,p1__45_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),(new cljs.core.List(null,stk_amount,null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"cant stake from different account",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__45#","p1__45#",(-1105584829),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),new cljs.core.Symbol(null,"stk-amount","stk-amount",(666492024),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"cant stake from different account",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__45#","p1__45#",(-1105584829),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),new cljs.core.Symbol(null,"stk-amount","stk-amount",(666492024),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8816){var t__191__auto__ = e8816;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"cant stake from different account",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__45#","p1__45#",(-1105584829),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"amount"], null)),new cljs.core.Symbol(null,"stk-amount","stk-amount",(666492024),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(stk_amount,___192__auto__))
),(3)).then(done);
});

e2e.stake.t_e2e$stake8811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8812","meta8812",(1644438200),null)], null);
});

e2e.stake.t_e2e$stake8811.cljs$lang$type = true;

e2e.stake.t_e2e$stake8811.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8811";

e2e.stake.t_e2e$stake8811.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8811");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8811.
 */
e2e.stake.__GT_t_e2e$stake8811 = (function e2e$stake$__GT_t_e2e$stake8811(meta8812){
return (new e2e.stake.t_e2e$stake8811(meta8812));
});

}

return (new e2e.stake.t_e2e$stake8811(null));
});

e2e.stake.stake.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.stake;},new cljs.core.Symbol("e2e.stake","stake","e2e.stake/stake",(219741416),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"stake","stake",(142033740),null),"e2e/stake.cljs",(15),(1),(209),(209),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.stake)?e2e.stake.stake.cljs$lang$test:null)]));
e2e.stake.doclaim = (function e2e$stake$doclaim(){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"claim",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null),e2e.stake.owner_perm);
});
e2e.stake.claim = (function e2e$stake$claim(){
return cljs.test.test_var.call(null,e2e.stake.claim.cljs$lang$var);
});
e2e.stake.claim.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8817 = (function (meta8818){
this.meta8818 = meta8818;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8819,meta8818__$1){
var self__ = this;
var _8819__$1 = this;
return (new e2e.stake.t_e2e$stake8817(meta8818__$1));
});

e2e.stake.t_e2e$stake8817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8819){
var self__ = this;
var _8819__$1 = this;
return self__.meta8818;
});

e2e.stake.t_e2e$stake8817.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8817.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
return eos_cljs.core.wait_block.call(null,e2e.util.should_succeed.call(null,e2e.stake.doclaim.call(null),"can claim").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p__8821){
var vec__8822 = p__8821;
var map__8825 = cljs.core.nth.call(null,vec__8822,(0),null);
var map__8825__$1 = (((((!((map__8825 == null))))?(((((map__8825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8825):map__8825);
var claim_age = cljs.core.get.call(null,map__8825__$1,"last_claim_age");
try{var values__182__auto__ = (new cljs.core.List(null,claim_age,(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._GT_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),(1)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._GT_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),(1)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,">",">",(1085014381),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8827){var t__191__auto__ = e8827;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),(1)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
),(3)).then(e2e.stake.doclaim).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p__8828){
var vec__8829 = p__8828;
var map__8832 = cljs.core.nth.call(null,vec__8829,(0),null);
var map__8832__$1 = (((((!((map__8832 == null))))?(((((map__8832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8832):map__8832);
var claim_age = cljs.core.get.call(null,map__8832__$1,"last_claim_age");
try{var values__182__auto__ = (new cljs.core.List(null,claim_age,(new cljs.core.List(null,new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)).cljs$core$IFn$_invoke$arity$1(e2e.stake.init_config),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._LT__EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",(1244895369),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),cljs.core.list(new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._LT__EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",(1244895369),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),cljs.core.list(new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"<=","<=",(1244895369),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8834){var t__191__auto__ = e8834;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",(1244895369),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),cljs.core.list(new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
).then(done);
});

e2e.stake.t_e2e$stake8817.prototype.apply = (function (self__,args8820){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8820)));
});

e2e.stake.t_e2e$stake8817.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
return eos_cljs.core.wait_block.call(null,e2e.util.should_succeed.call(null,e2e.stake.doclaim.call(null),"can claim").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p__8835){
var vec__8836 = p__8835;
var map__8839 = cljs.core.nth.call(null,vec__8836,(0),null);
var map__8839__$1 = (((((!((map__8839 == null))))?(((((map__8839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8839):map__8839);
var claim_age = cljs.core.get.call(null,map__8839__$1,"last_claim_age");
try{var values__182__auto__ = (new cljs.core.List(null,claim_age,(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._GT_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),(1)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._GT_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),(1)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,">",">",(1085014381),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8841){var t__191__auto__ = e8841;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),(1)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
),(3)).then(e2e.stake.doclaim).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p__8842){
var vec__8843 = p__8842;
var map__8846 = cljs.core.nth.call(null,vec__8843,(0),null);
var map__8846__$1 = (((((!((map__8846 == null))))?(((((map__8846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8846):map__8846);
var claim_age = cljs.core.get.call(null,map__8846__$1,"last_claim_age");
try{var values__182__auto__ = (new cljs.core.List(null,claim_age,(new cljs.core.List(null,new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)).cljs$core$IFn$_invoke$arity$1(e2e.stake.init_config),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._LT__EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",(1244895369),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),cljs.core.list(new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._LT__EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",(1244895369),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),cljs.core.list(new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"<=","<=",(1244895369),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8848){var t__191__auto__ = e8848;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"token age is increasing",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",(1244895369),null),new cljs.core.Symbol(null,"claim_age","claim_age",(737313285),null),cljs.core.list(new cljs.core.Keyword(null,"age_limit","age_limit",(2061075822)),new cljs.core.Symbol(null,"init-config","init-config",(1152420657),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
).then(done);
});

e2e.stake.t_e2e$stake8817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8818","meta8818",(-309003298),null)], null);
});

e2e.stake.t_e2e$stake8817.cljs$lang$type = true;

e2e.stake.t_e2e$stake8817.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8817";

e2e.stake.t_e2e$stake8817.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8817");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8817.
 */
e2e.stake.__GT_t_e2e$stake8817 = (function e2e$stake$__GT_t_e2e$stake8817(meta8818){
return (new e2e.stake.t_e2e$stake8817(meta8818));
});

}

return (new e2e.stake.t_e2e$stake8817(null));
});

e2e.stake.claim.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.claim;},new cljs.core.Symbol("e2e.stake","claim","e2e.stake/claim",(613162594),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"claim","claim",(665172358),null),"e2e/stake.cljs",(15),(1),(253),(253),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.claim)?e2e.stake.claim.cljs$lang$test:null)]));
e2e.stake.unstake = (function e2e$stake$unstake(){
return cljs.test.test_var.call(null,e2e.stake.unstake.cljs$lang$var);
});
e2e.stake.unstake.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8849 = (function (meta8850){
this.meta8850 = meta8850;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8851,meta8850__$1){
var self__ = this;
var _8851__$1 = this;
return (new e2e.stake.t_e2e$stake8849(meta8850__$1));
});

e2e.stake.t_e2e$stake8849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8851){
var self__ = this;
var _8851__$1 = this;
return self__.meta8850;
});

e2e.stake.t_e2e$stake8849.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8849.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
return eos_cljs.core.wait_block.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null),e2e.stake.owner_perm),"no unstake exists").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["1.0000 ",e2e.stake.sym].join('')], null),e2e.stake.owner_perm);
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p__8853){
var vec__8854 = p__8853;
var map__8857 = cljs.core.nth.call(null,vec__8854,(0),null);
var map__8857__$1 = (((((!((map__8857 == null))))?(((((map__8857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8857):map__8857);
var amount = cljs.core.get.call(null,map__8857__$1,"amount");
try{var values__182__auto__ = (new cljs.core.List(null,amount,(new cljs.core.List(null,["99.0000 ",e2e.stake.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake should decrease stake",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"99.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake should decrease stake",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"99.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8859){var t__191__auto__ = e8859;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake should decrease stake",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"99.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["101.0000 ",e2e.stake.sym].join('')], null),e2e.stake.owner_perm);
});})(___192__auto__,self____$1))
),"not enough staked").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null),e2e.stake.owner_perm);
});})(___192__auto__,self____$1))
),"unstake is still pending").then(eos_cljs.core.get_scheduled_txs).then(((function (___192__auto__,self____$1){
return (function (p1__46_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)).cljs$core$IFn$_invoke$arity$1(p1__46_SHARP_)),null,(1),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core.not,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__46#","p1__46#",(-1800536597),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core.not,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__46#","p1__46#",(-1800536597),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8860){var t__191__auto__ = e8860;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__46#","p1__46#",(-1800536597),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
),(5)).then(eos_cljs.core.get_scheduled_txs).then(((function (___192__auto__,self____$1){
return (function (p1__47_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)).cljs$core$IFn$_invoke$arity$1(p1__47_SHARP_),null,(1),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__47#","p1__47#",(1559177793),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__47#","p1__47#",(1559177793),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8861){var t__191__auto__ = e8861;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__47#","p1__47#",(1559177793),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.token_acc,e2e.stake.owner_acc,"accounts");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p1__48_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.get_in.call(null,p1__48_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),(new cljs.core.List(null,["401.0000 ",e2e.stake.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake refund is correct",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__48#","p1__48#",(2127578055),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"401.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake refund is correct",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__48#","p1__48#",(2127578055),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"401.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8862){var t__191__auto__ = e8862;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake refund is correct",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__48#","p1__48#",(2127578055),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"401.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"unstake");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p1__49_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.empty_QMARK_.call(null,p1__49_SHARP_),null,(1),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake table is empty",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"p1__49#","p1__49#",(2129846391),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake table is empty",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"p1__49#","p1__49#",(2129846391),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8863){var t__191__auto__ = e8863;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake table is empty",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"p1__49#","p1__49#",(2129846391),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
).then(done);
});

e2e.stake.t_e2e$stake8849.prototype.apply = (function (self__,args8852){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8852)));
});

e2e.stake.t_e2e$stake8849.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
return eos_cljs.core.wait_block.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null),e2e.stake.owner_perm),"no unstake exists").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["1.0000 ",e2e.stake.sym].join('')], null),e2e.stake.owner_perm);
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p__8864){
var vec__8865 = p__8864;
var map__8868 = cljs.core.nth.call(null,vec__8865,(0),null);
var map__8868__$1 = (((((!((map__8868 == null))))?(((((map__8868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8868):map__8868);
var amount = cljs.core.get.call(null,map__8868__$1,"amount");
try{var values__182__auto__ = (new cljs.core.List(null,amount,(new cljs.core.List(null,["99.0000 ",e2e.stake.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake should decrease stake",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"99.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake should decrease stake",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"99.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8870){var t__191__auto__ = e8870;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake should decrease stake",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"99.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["101.0000 ",e2e.stake.sym].join('')], null),e2e.stake.owner_perm);
});})(___192__auto__))
),"not enough staked").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null),e2e.stake.owner_perm);
});})(___192__auto__))
),"unstake is still pending").then(eos_cljs.core.get_scheduled_txs).then(((function (___192__auto__){
return (function (p1__46_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)).cljs$core$IFn$_invoke$arity$1(p1__46_SHARP_)),null,(1),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core.not,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__46#","p1__46#",(-1800536597),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core.not,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__46#","p1__46#",(-1800536597),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8871){var t__191__auto__ = e8871;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__46#","p1__46#",(-1800536597),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
),(5)).then(eos_cljs.core.get_scheduled_txs).then(((function (___192__auto__){
return (function (p1__47_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)).cljs$core$IFn$_invoke$arity$1(p1__47_SHARP_),null,(1),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core.empty_QMARK_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__47#","p1__47#",(1559177793),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core.empty_QMARK_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__47#","p1__47#",(1559177793),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8872){var t__191__auto__ = e8872;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Keyword(null,"transactions","transactions",(-1425846118)),new cljs.core.Symbol(null,"p1__47#","p1__47#",(1559177793),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.token_acc,e2e.stake.owner_acc,"accounts");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p1__48_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.get_in.call(null,p1__48_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),(new cljs.core.List(null,["401.0000 ",e2e.stake.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake refund is correct",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__48#","p1__48#",(2127578055),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"401.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake refund is correct",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__48#","p1__48#",(2127578055),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"401.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8873){var t__191__auto__ = e8873;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake refund is correct",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"p1__48#","p1__48#",(2127578055),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"balance"], null)),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"401.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"unstake");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p1__49_SHARP_){
try{var values__182__auto__ = (new cljs.core.List(null,cljs.core.empty_QMARK_.call(null,p1__49_SHARP_),null,(1),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake table is empty",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"p1__49#","p1__49#",(2129846391),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake table is empty",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"p1__49#","p1__49#",(2129846391),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8874){var t__191__auto__ = e8874;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"unstake table is empty",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"p1__49#","p1__49#",(2129846391),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
).then(done);
});

e2e.stake.t_e2e$stake8849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8850","meta8850",(259275353),null)], null);
});

e2e.stake.t_e2e$stake8849.cljs$lang$type = true;

e2e.stake.t_e2e$stake8849.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8849";

e2e.stake.t_e2e$stake8849.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8849");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8849.
 */
e2e.stake.__GT_t_e2e$stake8849 = (function e2e$stake$__GT_t_e2e$stake8849(meta8850){
return (new e2e.stake.t_e2e$stake8849(meta8850));
});

}

return (new e2e.stake.t_e2e$stake8849(null));
});

e2e.stake.unstake.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.unstake;},new cljs.core.Symbol("e2e.stake","unstake","e2e.stake/unstake",(1973645911),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"unstake","unstake",(1753928587),null),"e2e/stake.cljs",(17),(1),(270),(270),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.unstake)?e2e.stake.unstake.cljs$lang$test:null)]));
e2e.stake.dilute = (function e2e$stake$dilute(){
return cljs.test.test_var.call(null,e2e.stake.dilute.cljs$lang$var);
});
e2e.stake.dilute.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8875 = (function (meta8876){
this.meta8876 = meta8876;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8877,meta8876__$1){
var self__ = this;
var _8877__$1 = this;
return (new e2e.stake.t_e2e$stake8875(meta8876__$1));
});

e2e.stake.t_e2e$stake8875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8877){
var self__ = this;
var _8877__$1 = this;
return self__.meta8876;
});

e2e.stake.t_e2e$stake8875.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8875.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
return e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["100.0000 ",e2e.stake.sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),e2e.stake.owner_perm),"you must claim before you can top-up a stake").then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p__8879){
var vec__8880 = p__8879;
var map__8883 = cljs.core.nth.call(null,vec__8880,(0),null);
var map__8883__$1 = (((((!((map__8883 == null))))?(((((map__8883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8883):map__8883);
var pp = map__8883__$1;
var amount = cljs.core.get.call(null,map__8883__$1,"amount");
var last_age = cljs.core.get.call(null,map__8883__$1,"last_claim_age");
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"claim",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"transfer",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["100.0000 ",e2e.stake.sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null)], null)], null)).then(((function (vec__8880,map__8883,map__8883__$1,pp,amount,last_age,___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(vec__8880,map__8883,map__8883__$1,pp,amount,last_age,___192__auto__,self____$1))
).then(((function (vec__8880,map__8883,map__8883__$1,pp,amount,last_age,___192__auto__,self____$1){
return (function (p__8885){
var vec__8886 = p__8885;
var map__8889 = cljs.core.nth.call(null,vec__8886,(0),null);
var map__8889__$1 = (((((!((map__8889 == null))))?(((((map__8889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8889):map__8889);
var amount__$1 = cljs.core.get.call(null,map__8889__$1,"amount");
var new_age = cljs.core.get.call(null,map__8889__$1,"last_claim_age");
try{var values__182__auto___8907 = (new cljs.core.List(null,last_age,(new cljs.core.List(null,new_age,null,(1),null)),(2),null));
var result__183__auto___8908 = cljs.core.apply.call(null,cljs.core._GT_,values__182__auto___8907);
if(cljs.core.truth_(result__183__auto___8908)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"age has diluted",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"last-age","last-age",(-1878586066),null),new cljs.core.Symbol(null,"new-age","new-age",(1397876613),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._GT_,values__182__auto___8907)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"age has diluted",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"last-age","last-age",(-1878586066),null),new cljs.core.Symbol(null,"new-age","new-age",(1397876613),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,">",">",(1085014381),null),values__182__auto___8907),null,(1),null)),(2),null))], null));
}

}catch (e8891){var t__191__auto___8909 = e8891;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"age has diluted",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"last-age","last-age",(-1878586066),null),new cljs.core.Symbol(null,"new-age","new-age",(1397876613),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___8909], null));
}
try{var values__182__auto__ = (new cljs.core.List(null,amount__$1,(new cljs.core.List(null,["199.0000 ",e2e.stake.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake is added",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"199.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake is added",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"199.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8892){var t__191__auto__ = e8892;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake is added",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"199.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(vec__8880,map__8883,map__8883__$1,pp,amount,last_age,___192__auto__,self____$1))
).then(done);
});})(___192__auto__,self____$1))
);
});

e2e.stake.t_e2e$stake8875.prototype.apply = (function (self__,args8878){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8878)));
});

e2e.stake.t_e2e$stake8875.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
return e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["100.0000 ",e2e.stake.sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),e2e.stake.owner_perm),"you must claim before you can top-up a stake").then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p__8893){
var vec__8894 = p__8893;
var map__8897 = cljs.core.nth.call(null,vec__8894,(0),null);
var map__8897__$1 = (((((!((map__8897 == null))))?(((((map__8897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8897):map__8897);
var pp = map__8897__$1;
var amount = cljs.core.get.call(null,map__8897__$1,"amount");
var last_age = cljs.core.get.call(null,map__8897__$1,"last_claim_age");
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"claim",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),e2e.stake.sym_f], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"transfer",new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),e2e.stake.owner_perm,new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),["100.0000 ",e2e.stake.sym].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null)], null)], null)).then(((function (vec__8894,map__8897,map__8897__$1,pp,amount,last_age,___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
});})(vec__8894,map__8897,map__8897__$1,pp,amount,last_age,___192__auto__))
).then(((function (vec__8894,map__8897,map__8897__$1,pp,amount,last_age,___192__auto__){
return (function (p__8899){
var vec__8900 = p__8899;
var map__8903 = cljs.core.nth.call(null,vec__8900,(0),null);
var map__8903__$1 = (((((!((map__8903 == null))))?(((((map__8903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8903):map__8903);
var amount__$1 = cljs.core.get.call(null,map__8903__$1,"amount");
var new_age = cljs.core.get.call(null,map__8903__$1,"last_claim_age");
try{var values__182__auto___8910 = (new cljs.core.List(null,last_age,(new cljs.core.List(null,new_age,null,(1),null)),(2),null));
var result__183__auto___8911 = cljs.core.apply.call(null,cljs.core._GT_,values__182__auto___8910);
if(cljs.core.truth_(result__183__auto___8911)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"age has diluted",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"last-age","last-age",(-1878586066),null),new cljs.core.Symbol(null,"new-age","new-age",(1397876613),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._GT_,values__182__auto___8910)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"age has diluted",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"last-age","last-age",(-1878586066),null),new cljs.core.Symbol(null,"new-age","new-age",(1397876613),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,">",">",(1085014381),null),values__182__auto___8910),null,(1),null)),(2),null))], null));
}

}catch (e8905){var t__191__auto___8912 = e8905;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"age has diluted",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,">",">",(1085014381),null),new cljs.core.Symbol(null,"last-age","last-age",(-1878586066),null),new cljs.core.Symbol(null,"new-age","new-age",(1397876613),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___8912], null));
}
try{var values__182__auto__ = (new cljs.core.List(null,amount__$1,(new cljs.core.List(null,["199.0000 ",e2e.stake.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake is added",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"199.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake is added",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"199.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e8906){var t__191__auto__ = e8906;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"stake is added",new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"amount","amount",(2005021031),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"199.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(vec__8894,map__8897,map__8897__$1,pp,amount,last_age,___192__auto__))
).then(done);
});})(___192__auto__))
);
});

e2e.stake.t_e2e$stake8875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8876","meta8876",(820024716),null)], null);
});

e2e.stake.t_e2e$stake8875.cljs$lang$type = true;

e2e.stake.t_e2e$stake8875.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8875";

e2e.stake.t_e2e$stake8875.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8875");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8875.
 */
e2e.stake.__GT_t_e2e$stake8875 = (function e2e$stake$__GT_t_e2e$stake8875(meta8876){
return (new e2e.stake.t_e2e$stake8875(meta8876));
});

}

return (new e2e.stake.t_e2e$stake8875(null));
});

e2e.stake.dilute.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.dilute;},new cljs.core.Symbol("e2e.stake","dilute","e2e.stake/dilute",(-451364818),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"dilute","dilute",(-503391294),null),"e2e/stake.cljs",(16),(1),(306),(306),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.dilute)?e2e.stake.dilute.cljs$lang$test:null)]));
e2e.stake.multi_token_scenario = (function e2e$stake$multi_token_scenario(){
return cljs.test.test_var.call(null,e2e.stake.multi_token_scenario.cljs$lang$var);
});
e2e.stake.multi_token_scenario.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.stake !== 'undefined') && (typeof e2e.stake.t_e2e$stake8913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.stake.t_e2e$stake8913 = (function (meta8914){
this.meta8914 = meta8914;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.stake.t_e2e$stake8913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8915,meta8914__$1){
var self__ = this;
var _8915__$1 = this;
return (new e2e.stake.t_e2e$stake8913(meta8914__$1));
});

e2e.stake.t_e2e$stake8913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8915){
var self__ = this;
var _8915__$1 = this;
return self__.meta8914;
});

e2e.stake.t_e2e$stake8913.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.stake.t_e2e$stake8913.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_9749){
var state_val_9750 = (state_9749[(1)]);
if((state_val_9750 === (32))){
var inst_9070 = (state_9749[(7)]);
var inst_9070__$1 = (state_9749[(2)]);
var inst_9071 = (inst_9070__$1 instanceof cljs.core.ExceptionInfo);
var inst_9072 = cljs.core.ex_data.call(null,inst_9070__$1);
var inst_9073 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9072);
var inst_9074 = cljs.core._EQ_.call(null,inst_9073,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9075 = ((inst_9071) && (inst_9074));
var state_9749__$1 = (function (){var statearr_9754 = state_9749;
(statearr_9754[(7)] = inst_9070__$1);

return statearr_9754;
})();
if(cljs.core.truth_(inst_9075)){
var statearr_9755_11237 = state_9749__$1;
(statearr_9755_11237[(1)] = (33));

} else {
var statearr_9756_11238 = state_9749__$1;
(statearr_9756_11238[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (64))){
var inst_9214 = (state_9749[(8)]);
var inst_9211 = (state_9749[(9)]);
var inst_9212 = (state_9749[(10)]);
var inst_9213 = (state_9749[(11)]);
var inst_9267 = (state_9749[(2)]);
var inst_9268 = (inst_9214 + (1));
var tmp9751 = inst_9211;
var tmp9752 = inst_9212;
var tmp9753 = inst_9213;
var inst_9211__$1 = tmp9751;
var inst_9212__$1 = tmp9752;
var inst_9213__$1 = tmp9753;
var inst_9214__$1 = inst_9268;
var state_9749__$1 = (function (){var statearr_9757 = state_9749;
(statearr_9757[(12)] = inst_9267);

(statearr_9757[(9)] = inst_9211__$1);

(statearr_9757[(10)] = inst_9212__$1);

(statearr_9757[(11)] = inst_9213__$1);

(statearr_9757[(8)] = inst_9214__$1);

return statearr_9757;
})();
var statearr_9758_11239 = state_9749__$1;
(statearr_9758_11239[(2)] = null);

(statearr_9758_11239[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (96))){
var inst_9402 = (state_9749[(2)]);
var inst_9403 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9404 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"balance"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9405 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"stake contract receives unstakable tokens",inst_9404,inst_9402];
var inst_9406 = cljs.core.PersistentHashMap.fromArrays(inst_9403,inst_9405);
var inst_9407 = cljs.test.do_report.call(null,inst_9406);
var state_9749__$1 = state_9749;
var statearr_9759_11240 = state_9749__$1;
(statearr_9759_11240[(2)] = inst_9407);

(statearr_9759_11240[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (128))){
var inst_9579 = (state_9749[(13)]);
var inst_9578 = (state_9749[(14)]);
var inst_9581 = (inst_9579 < inst_9578);
var inst_9582 = inst_9581;
var state_9749__$1 = state_9749;
if(cljs.core.truth_(inst_9582)){
var statearr_9760_11241 = state_9749__$1;
(statearr_9760_11241[(1)] = (130));

} else {
var statearr_9761_11242 = state_9749__$1;
(statearr_9761_11242[(1)] = (131));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (160))){
var inst_9717 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9762_11243 = state_9749__$1;
(statearr_9762_11243[(2)] = inst_9717);

(statearr_9762_11243[(1)] = (152));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (1))){
var inst_8931 = (state_9749[(15)]);
var inst_8917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8919 = ["AFX","200.0000",(1)];
var inst_8920 = (new cljs.core.PersistentVector(null,(3),(5),inst_8918,inst_8919,null));
var inst_8921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8922 = ["BFX","650000000.0000",(5)];
var inst_8923 = (new cljs.core.PersistentVector(null,(3),(5),inst_8921,inst_8922,null));
var inst_8924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8925 = ["CFX","10200000000.0000",(10)];
var inst_8926 = (new cljs.core.PersistentVector(null,(3),(5),inst_8924,inst_8925,null));
var inst_8927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8928 = ["DFX","382829842.0000",null];
var inst_8929 = (new cljs.core.PersistentVector(null,(3),(5),inst_8927,inst_8928,null));
var inst_8930 = [inst_8920,inst_8923,inst_8926,inst_8929];
var inst_8931__$1 = (new cljs.core.PersistentVector(null,(4),(5),inst_8917,inst_8930,null));
var inst_8936 = (function (){var tokens = inst_8931__$1;
return ((function (tokens,inst_8931,inst_8917,inst_8918,inst_8919,inst_8920,inst_8921,inst_8922,inst_8923,inst_8924,inst_8925,inst_8926,inst_8927,inst_8928,inst_8929,inst_8930,inst_8931__$1,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function e2e$stake$iter__8932(s__8933){
return (new cljs.core.LazySeq(null,((function (tokens,inst_8931,inst_8917,inst_8918,inst_8919,inst_8920,inst_8921,inst_8922,inst_8923,inst_8924,inst_8925,inst_8926,inst_8927,inst_8928,inst_8929,inst_8930,inst_8931__$1,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function (){
var s__8933__$1 = s__8933;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__8933__$1);
if(temp__9015__auto__){
var s__8933__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8933__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__8933__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__8935 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__8934 = (0);
while(true){
if((i__8934 < size__9991__auto__)){
var vec__9763 = cljs.core._nth.call(null,c__9990__auto__,i__8934);
var seq__9764 = cljs.core.seq.call(null,vec__9763);
var first__9765 = cljs.core.first.call(null,seq__9764);
var seq__9764__$1 = cljs.core.next.call(null,seq__9764);
var t = first__9765;
var first__9765__$1 = cljs.core.first.call(null,seq__9764__$1);
var seq__9764__$2 = cljs.core.next.call(null,seq__9764__$1);
var supply = first__9765__$1;
var _ = seq__9764__$2;
cljs.core.chunk_append.call(null,b__8935,(function (){var max_supply = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454)),max_supply], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.token_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"issue",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),""], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)], null)], null));
})());

var G__11244 = (i__8934 + (1));
i__8934 = G__11244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8935),e2e$stake$iter__8932.call(null,cljs.core.chunk_rest.call(null,s__8933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8935),null);
}
} else {
var vec__9766 = cljs.core.first.call(null,s__8933__$2);
var seq__9767 = cljs.core.seq.call(null,vec__9766);
var first__9768 = cljs.core.first.call(null,seq__9767);
var seq__9767__$1 = cljs.core.next.call(null,seq__9767);
var t = first__9768;
var first__9768__$1 = cljs.core.first.call(null,seq__9767__$1);
var seq__9767__$2 = cljs.core.next.call(null,seq__9767__$1);
var supply = first__9768__$1;
var _ = seq__9767__$2;
return cljs.core.cons.call(null,(function (){var max_supply = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454)),max_supply], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.token_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"issue",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),""], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)], null)], null));
})(),e2e$stake$iter__8932.call(null,cljs.core.rest.call(null,s__8933__$2)));
}
} else {
return null;
}
break;
}
});})(tokens,inst_8931,inst_8917,inst_8918,inst_8919,inst_8920,inst_8921,inst_8922,inst_8923,inst_8924,inst_8925,inst_8926,inst_8927,inst_8928,inst_8929,inst_8930,inst_8931__$1,state_val_9750,c__19__auto__,___192__auto__,self____$1))
,null,null));
});
;})(tokens,inst_8931,inst_8917,inst_8918,inst_8919,inst_8920,inst_8921,inst_8922,inst_8923,inst_8924,inst_8925,inst_8926,inst_8927,inst_8928,inst_8929,inst_8930,inst_8931__$1,state_val_9750,c__19__auto__,___192__auto__,self____$1))
})();
var inst_8937 = inst_8936.call(null,inst_8931__$1);
var inst_8938 = cljs.core.apply.call(null,e2e.util.p_all,inst_8937);
var inst_8939 = cljs.core.async.interop.p__GT_c.call(null,inst_8938);
var state_9749__$1 = (function (){var statearr_9769 = state_9749;
(statearr_9769[(15)] = inst_8931__$1);

return statearr_9769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(2),inst_8939);
} else {
if((state_val_9750 === (33))){
var inst_9070 = (state_9749[(7)]);
var inst_9077 = (function(){throw inst_9070})();
var state_9749__$1 = state_9749;
var statearr_9771_11245 = state_9749__$1;
(statearr_9771_11245[(2)] = inst_9077);

(statearr_9771_11245[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (65))){
var inst_9229 = (state_9749[(2)]);
var inst_9230 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9231 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9232 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"the full supply of tokens can be staked",inst_9231,inst_9229];
var inst_9233 = cljs.core.PersistentHashMap.fromArrays(inst_9230,inst_9232);
var inst_9234 = cljs.test.do_report.call(null,inst_9233);
var state_9749__$1 = state_9749;
var statearr_9772_11246 = state_9749__$1;
(statearr_9772_11246[(2)] = inst_9234);

(statearr_9772_11246[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (97))){
var _ = (function (){var statearr_9773 = state_9749;
(statearr_9773[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9773;
})();
var state_9749__$1 = state_9749;
var ex9770 = (state_9749__$1[(2)]);
var statearr_9774_11247 = state_9749__$1;
(statearr_9774_11247[(5)] = ex9770);


var statearr_9775_11248 = state_9749__$1;
(statearr_9775_11248[(1)] = (96));

(statearr_9775_11248[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (129))){
var inst_9730 = (state_9749[(2)]);
var inst_9731 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"unstake");
var inst_9732 = cljs.core.async.interop.p__GT_c.call(null,inst_9731);
var state_9749__$1 = (function (){var statearr_9776 = state_9749;
(statearr_9776[(16)] = inst_9730);

return statearr_9776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(161),inst_9732);
} else {
if((state_val_9750 === (161))){
var inst_9734 = (state_9749[(17)]);
var inst_9734__$1 = (state_9749[(2)]);
var inst_9735 = (inst_9734__$1 instanceof cljs.core.ExceptionInfo);
var inst_9736 = cljs.core.ex_data.call(null,inst_9734__$1);
var inst_9737 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9736);
var inst_9738 = cljs.core._EQ_.call(null,inst_9737,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9739 = ((inst_9735) && (inst_9738));
var state_9749__$1 = (function (){var statearr_9777 = state_9749;
(statearr_9777[(17)] = inst_9734__$1);

return statearr_9777;
})();
if(cljs.core.truth_(inst_9739)){
var statearr_9778_11249 = state_9749__$1;
(statearr_9778_11249[(1)] = (162));

} else {
var statearr_9779_11250 = state_9749__$1;
(statearr_9779_11250[(1)] = (163));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (2))){
var inst_8941 = (state_9749[(18)]);
var inst_8941__$1 = (state_9749[(2)]);
var inst_8942 = (inst_8941__$1 instanceof cljs.core.ExceptionInfo);
var inst_8943 = cljs.core.ex_data.call(null,inst_8941__$1);
var inst_8944 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8943);
var inst_8945 = cljs.core._EQ_.call(null,inst_8944,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8946 = ((inst_8942) && (inst_8945));
var state_9749__$1 = (function (){var statearr_9781 = state_9749;
(statearr_9781[(18)] = inst_8941__$1);

return statearr_9781;
})();
if(cljs.core.truth_(inst_8946)){
var statearr_9782_11251 = state_9749__$1;
(statearr_9782_11251[(1)] = (3));

} else {
var statearr_9783_11252 = state_9749__$1;
(statearr_9783_11252[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (34))){
var inst_9070 = (state_9749[(7)]);
var state_9749__$1 = state_9749;
var statearr_9784_11253 = state_9749__$1;
(statearr_9784_11253[(2)] = inst_9070);

(statearr_9784_11253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (66))){
var _ = (function (){var statearr_9785 = state_9749;
(statearr_9785[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9785;
})();
var state_9749__$1 = state_9749;
var ex9780 = (state_9749__$1[(2)]);
var statearr_9786_11254 = state_9749__$1;
(statearr_9786_11254[(5)] = ex9780);


var statearr_9787_11255 = state_9749__$1;
(statearr_9787_11255[(1)] = (65));

(statearr_9787_11255[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (98))){
var inst_9416 = (state_9749[(19)]);
var inst_9419 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9420 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"balance"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9421 = cljs.core.cons.call(null,cljs.core._EQ_,inst_9416);
var inst_9422 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"stake contract receives unstakable tokens",inst_9420,inst_9421];
var inst_9423 = cljs.core.PersistentHashMap.fromArrays(inst_9419,inst_9422);
var inst_9424 = cljs.test.do_report.call(null,inst_9423);
var state_9749__$1 = state_9749;
var statearr_9788_11256 = state_9749__$1;
(statearr_9788_11256[(2)] = inst_9424);

(statearr_9788_11256[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (130))){
var inst_9577 = (state_9749[(20)]);
var inst_9579 = (state_9749[(13)]);
var inst_9587 = cljs.core._nth.call(null,inst_9577,inst_9579);
var inst_9588 = cljs.core.nth.call(null,inst_9587,(0),null);
var inst_9589 = cljs.core.nth.call(null,inst_9587,(1),null);
var inst_9590 = cljs.core.nth.call(null,inst_9587,(2),null);
var inst_9591 = (inst_9590 <= (5));
var state_9749__$1 = (function (){var statearr_9789 = state_9749;
(statearr_9789[(21)] = inst_9588);

(statearr_9789[(22)] = inst_9589);

return statearr_9789;
})();
if(cljs.core.truth_(inst_9591)){
var statearr_9790_11257 = state_9749__$1;
(statearr_9790_11257[(1)] = (133));

} else {
var statearr_9791_11258 = state_9749__$1;
(statearr_9791_11258[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (162))){
var inst_9734 = (state_9749[(17)]);
var inst_9741 = (function(){throw inst_9734})();
var state_9749__$1 = state_9749;
var statearr_9792_11259 = state_9749__$1;
(statearr_9792_11259[(2)] = inst_9741);

(statearr_9792_11259[(1)] = (164));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (3))){
var inst_8941 = (state_9749[(18)]);
var inst_8948 = (function(){throw inst_8941})();
var state_9749__$1 = state_9749;
var statearr_9793_11260 = state_9749__$1;
(statearr_9793_11260[(2)] = inst_8948);

(statearr_9793_11260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (35))){
var inst_9080 = (state_9749[(2)]);
var state_9749__$1 = (function (){var statearr_9794 = state_9749;
(statearr_9794[(23)] = inst_9080);

return statearr_9794;
})();
var statearr_9795_11261 = state_9749__$1;
(statearr_9795_11261[(2)] = null);

(statearr_9795_11261[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (67))){
var inst_9243 = (state_9749[(24)]);
var inst_9246 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9247 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9248 = cljs.core.cons.call(null,cljs.core._EQ_,inst_9243);
var inst_9249 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"the full supply of tokens can be staked",inst_9247,inst_9248];
var inst_9250 = cljs.core.PersistentHashMap.fromArrays(inst_9246,inst_9249);
var inst_9251 = cljs.test.do_report.call(null,inst_9250);
var state_9749__$1 = state_9749;
var statearr_9796_11262 = state_9749__$1;
(statearr_9796_11262[(2)] = inst_9251);

(statearr_9796_11262[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (99))){
var inst_9416 = (state_9749[(19)]);
var inst_9426 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9427 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"balance"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9428 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9429 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_9430 = cljs.core.cons.call(null,inst_9429,inst_9416);
var inst_9431 = (new cljs.core.List(null,inst_9430,null,(1),null));
var inst_9432 = (new cljs.core.List(null,inst_9428,inst_9431,(2),null));
var inst_9433 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"stake contract receives unstakable tokens",inst_9427,inst_9432];
var inst_9434 = cljs.core.PersistentHashMap.fromArrays(inst_9426,inst_9433);
var inst_9435 = cljs.test.do_report.call(null,inst_9434);
var state_9749__$1 = state_9749;
var statearr_9797_11263 = state_9749__$1;
(statearr_9797_11263[(2)] = inst_9435);

(statearr_9797_11263[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (131))){
var inst_9576 = (state_9749[(25)]);
var inst_9649 = (state_9749[(26)]);
var inst_9649__$1 = cljs.core.seq.call(null,inst_9576);
var state_9749__$1 = (function (){var statearr_9798 = state_9749;
(statearr_9798[(26)] = inst_9649__$1);

return statearr_9798;
})();
if(inst_9649__$1){
var statearr_9799_11264 = state_9749__$1;
(statearr_9799_11264[(1)] = (144));

} else {
var statearr_9800_11265 = state_9749__$1;
(statearr_9800_11265[(1)] = (145));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (163))){
var inst_9734 = (state_9749[(17)]);
var state_9749__$1 = state_9749;
var statearr_9801_11266 = state_9749__$1;
(statearr_9801_11266[(2)] = inst_9734);

(statearr_9801_11266[(1)] = (164));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (4))){
var inst_8941 = (state_9749[(18)]);
var state_9749__$1 = state_9749;
var statearr_9802_11267 = state_9749__$1;
(statearr_9802_11267[(2)] = inst_8941);

(statearr_9802_11267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (36))){
var inst_9080 = (state_9749[(23)]);
var inst_9066 = (state_9749[(27)]);
var inst_9097 = (state_9749[(28)]);
var inst_9098 = (state_9749[(29)]);
var _ = (function (){var statearr_9803 = state_9749;
(statearr_9803[(4)] = cljs.core.cons.call(null,(39),(state_9749[(4)])));

return statearr_9803;
})();
var inst_9092 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9093 = [(0),"unstake_delay_sec"];
var inst_9094 = (new cljs.core.PersistentVector(null,(2),(5),inst_9092,inst_9093,null));
var inst_9095 = cljs.core.get_in.call(null,inst_9080,inst_9094);
var inst_9096 = (new cljs.core.List(null,inst_9066,null,(1),null));
var inst_9097__$1 = (new cljs.core.List(null,inst_9095,inst_9096,(2),null));
var inst_9098__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_9097__$1);
var state_9749__$1 = (function (){var statearr_9804 = state_9749;
(statearr_9804[(28)] = inst_9097__$1);

(statearr_9804[(29)] = inst_9098__$1);

return statearr_9804;
})();
if(cljs.core.truth_(inst_9098__$1)){
var statearr_9805_11268 = state_9749__$1;
(statearr_9805_11268[(1)] = (40));

} else {
var statearr_9806_11269 = state_9749__$1;
(statearr_9806_11269[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (68))){
var inst_9243 = (state_9749[(24)]);
var inst_9253 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9254 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9255 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9256 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_9257 = cljs.core.cons.call(null,inst_9256,inst_9243);
var inst_9258 = (new cljs.core.List(null,inst_9257,null,(1),null));
var inst_9259 = (new cljs.core.List(null,inst_9255,inst_9258,(2),null));
var inst_9260 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"the full supply of tokens can be staked",inst_9254,inst_9259];
var inst_9261 = cljs.core.PersistentHashMap.fromArrays(inst_9253,inst_9260);
var inst_9262 = cljs.test.do_report.call(null,inst_9261);
var state_9749__$1 = state_9749;
var statearr_9807_11270 = state_9749__$1;
(statearr_9807_11270[(2)] = inst_9262);

(statearr_9807_11270[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (100))){
var inst_9417 = (state_9749[(30)]);
var inst_9437 = (state_9749[(2)]);
var _ = (function (){var statearr_9808 = state_9749;
(statearr_9808[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9808;
})();
var state_9749__$1 = (function (){var statearr_9809 = state_9749;
(statearr_9809[(31)] = inst_9437);

return statearr_9809;
})();
var statearr_9810_11271 = state_9749__$1;
(statearr_9810_11271[(2)] = inst_9417);

(statearr_9810_11271[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (132))){
var inst_9728 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9811_11272 = state_9749__$1;
(statearr_9811_11272[(2)] = inst_9728);

(statearr_9811_11272[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (164))){
var inst_9744 = (state_9749[(2)]);
var inst_9745 = cljs.core.count.call(null,inst_9744);
var inst_9746 = cljs.core._EQ_.call(null,inst_9745,(1));
var inst_9747 = done.call(null);
var state_9749__$1 = (function (){var statearr_9812 = state_9749;
(statearr_9812[(32)] = inst_9746);

return statearr_9812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9749__$1,inst_9747);
} else {
if((state_val_9750 === (5))){
var inst_8931 = (state_9749[(15)]);
var inst_8951 = (state_9749[(2)]);
var inst_8956 = (function (){var tokens = inst_8931;
return ((function (tokens,inst_8931,inst_8951,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function e2e$stake$iter__8952(s__8953){
return (new cljs.core.LazySeq(null,((function (tokens,inst_8931,inst_8951,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function (){
var s__8953__$1 = s__8953;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__8953__$1);
if(temp__9015__auto__){
var s__8953__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8953__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__8953__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__8955 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__8954 = (0);
while(true){
if((i__8954 < size__9991__auto__)){
var vec__9813 = cljs.core._nth.call(null,c__9990__auto__,i__8954);
var t = cljs.core.nth.call(null,vec__9813,(0),null);
var _ = cljs.core.nth.call(null,vec__9813,(1),null);
var unstake_delay = cljs.core.nth.call(null,vec__9813,(2),null);
cljs.core.chunk_append.call(null,b__8955,(function (){var sym = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),sym,new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),sym,new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),e2e.stake.token_acc,new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777)),unstake_delay], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"open",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),sym,new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),e2e.stake.owner_acc], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null)], null));
})());

var G__11273 = (i__8954 + (1));
i__8954 = G__11273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8955),e2e$stake$iter__8952.call(null,cljs.core.chunk_rest.call(null,s__8953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8955),null);
}
} else {
var vec__9816 = cljs.core.first.call(null,s__8953__$2);
var t = cljs.core.nth.call(null,vec__9816,(0),null);
var _ = cljs.core.nth.call(null,vec__9816,(1),null);
var unstake_delay = cljs.core.nth.call(null,vec__9816,(2),null);
return cljs.core.cons.call(null,(function (){var sym = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),sym,new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),sym,new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),e2e.stake.token_acc,new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777)),unstake_delay], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"open",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),sym,new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),e2e.stake.owner_acc], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null)], null));
})(),e2e$stake$iter__8952.call(null,cljs.core.rest.call(null,s__8953__$2)));
}
} else {
return null;
}
break;
}
});})(tokens,inst_8931,inst_8951,state_val_9750,c__19__auto__,___192__auto__,self____$1))
,null,null));
});
;})(tokens,inst_8931,inst_8951,state_val_9750,c__19__auto__,___192__auto__,self____$1))
})();
var inst_8957 = cljs.core.take.call(null,(3),inst_8931);
var inst_8958 = inst_8956.call(null,inst_8957);
var inst_8959 = cljs.core.apply.call(null,e2e.util.p_all,inst_8958);
var inst_8960 = cljs.core.async.interop.p__GT_c.call(null,inst_8959);
var state_9749__$1 = (function (){var statearr_9819 = state_9749;
(statearr_9819[(33)] = inst_8951);

return statearr_9819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(6),inst_8960);
} else {
if((state_val_9750 === (37))){
var inst_9051 = (state_9749[(34)]);
var inst_9121 = (state_9749[(2)]);
var inst_9122 = cljs.core.next.call(null,inst_9051);
var inst_8978 = inst_9122;
var inst_8979 = null;
var inst_8980 = (0);
var inst_8981 = (0);
var state_9749__$1 = (function (){var statearr_9820 = state_9749;
(statearr_9820[(35)] = inst_9121);

(statearr_9820[(39)] = inst_8978);

(statearr_9820[(40)] = inst_8979);

(statearr_9820[(41)] = inst_8980);

(statearr_9820[(42)] = inst_8981);

return statearr_9820;
})();
var statearr_9821_11274 = state_9749__$1;
(statearr_9821_11274[(2)] = null);

(statearr_9821_11274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (69))){
var inst_9244 = (state_9749[(36)]);
var inst_9264 = (state_9749[(2)]);
var _ = (function (){var statearr_9822 = state_9749;
(statearr_9822[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9822;
})();
var state_9749__$1 = (function (){var statearr_9823 = state_9749;
(statearr_9823[(37)] = inst_9264);

return statearr_9823;
})();
var statearr_9824_11275 = state_9749__$1;
(statearr_9824_11275[(2)] = inst_9244);

(statearr_9824_11275[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (101))){
var inst_9444 = (state_9749[(38)]);
var inst_9444__$1 = (state_9749[(2)]);
var inst_9445 = (inst_9444__$1 instanceof cljs.core.ExceptionInfo);
var inst_9446 = cljs.core.ex_data.call(null,inst_9444__$1);
var inst_9447 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9446);
var inst_9448 = cljs.core._EQ_.call(null,inst_9447,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9449 = ((inst_9445) && (inst_9448));
var state_9749__$1 = (function (){var statearr_9825 = state_9749;
(statearr_9825[(38)] = inst_9444__$1);

return statearr_9825;
})();
if(cljs.core.truth_(inst_9449)){
var statearr_9826_11276 = state_9749__$1;
(statearr_9826_11276[(1)] = (102));

} else {
var statearr_9827_11277 = state_9749__$1;
(statearr_9827_11277[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (133))){
var inst_9588 = (state_9749[(21)]);
var inst_9593 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_9594 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9588)].join('');
var inst_9595 = [e2e.stake.owner_acc,inst_9594];
var inst_9596 = cljs.core.PersistentHashMap.fromArrays(inst_9593,inst_9595);
var inst_9597 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9598 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_9599 = [e2e.stake.owner_acc,"active"];
var inst_9600 = cljs.core.PersistentHashMap.fromArrays(inst_9598,inst_9599);
var inst_9601 = [inst_9600];
var inst_9602 = (new cljs.core.PersistentVector(null,(1),(5),inst_9597,inst_9601,null));
var inst_9603 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_9596,inst_9602);
var inst_9604 = e2e.util.should_succeed.call(null,inst_9603,"can refund token with low unstake delay");
var inst_9605 = cljs.core.async.interop.p__GT_c.call(null,inst_9604);
var state_9749__$1 = state_9749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(136),inst_9605);
} else {
if((state_val_9750 === (6))){
var inst_8962 = (state_9749[(43)]);
var inst_8962__$1 = (state_9749[(2)]);
var inst_8963 = (inst_8962__$1 instanceof cljs.core.ExceptionInfo);
var inst_8964 = cljs.core.ex_data.call(null,inst_8962__$1);
var inst_8965 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8964);
var inst_8966 = cljs.core._EQ_.call(null,inst_8965,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8967 = ((inst_8963) && (inst_8966));
var state_9749__$1 = (function (){var statearr_9828 = state_9749;
(statearr_9828[(43)] = inst_8962__$1);

return statearr_9828;
})();
if(cljs.core.truth_(inst_8967)){
var statearr_9829_11278 = state_9749__$1;
(statearr_9829_11278[(1)] = (7));

} else {
var statearr_9830_11279 = state_9749__$1;
(statearr_9830_11279[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (38))){
var inst_9081 = (state_9749[(2)]);
var inst_9082 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9083 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_9084 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"multiple tokens can be created",inst_9083,inst_9081];
var inst_9085 = cljs.core.PersistentHashMap.fromArrays(inst_9082,inst_9084);
var inst_9086 = cljs.test.do_report.call(null,inst_9085);
var state_9749__$1 = state_9749;
var statearr_9831_11280 = state_9749__$1;
(statearr_9831_11280[(2)] = inst_9086);

(statearr_9831_11280[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (70))){
var inst_9271 = (state_9749[(44)]);
var inst_9273 = cljs.core.chunked_seq_QMARK_.call(null,inst_9271);
var state_9749__$1 = state_9749;
if(inst_9273){
var statearr_9832_11281 = state_9749__$1;
(statearr_9832_11281[(1)] = (73));

} else {
var statearr_9833_11282 = state_9749__$1;
(statearr_9833_11282[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (102))){
var inst_9444 = (state_9749[(38)]);
var inst_9451 = (function(){throw inst_9444})();
var state_9749__$1 = state_9749;
var statearr_9834_11283 = state_9749__$1;
(statearr_9834_11283[(2)] = inst_9451);

(statearr_9834_11283[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (134))){
var inst_9588 = (state_9749[(21)]);
var inst_9619 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_9620 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9588)].join('');
var inst_9621 = [e2e.stake.owner_acc,inst_9620];
var inst_9622 = cljs.core.PersistentHashMap.fromArrays(inst_9619,inst_9621);
var inst_9623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9624 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_9625 = [e2e.stake.owner_acc,"active"];
var inst_9626 = cljs.core.PersistentHashMap.fromArrays(inst_9624,inst_9625);
var inst_9627 = [inst_9626];
var inst_9628 = (new cljs.core.PersistentVector(null,(1),(5),inst_9623,inst_9627,null));
var inst_9629 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_9622,inst_9628);
var inst_9630 = e2e.util.should_fail_with.call(null,inst_9629,"unstake is still pending");
var inst_9631 = cljs.core.async.interop.p__GT_c.call(null,inst_9630);
var state_9749__$1 = state_9749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(140),inst_9631);
} else {
if((state_val_9750 === (7))){
var inst_8962 = (state_9749[(43)]);
var inst_8969 = (function(){throw inst_8962})();
var state_9749__$1 = state_9749;
var statearr_9836_11284 = state_9749__$1;
(statearr_9836_11284[(2)] = inst_8969);

(statearr_9836_11284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (39))){
var _ = (function (){var statearr_9837 = state_9749;
(statearr_9837[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9837;
})();
var state_9749__$1 = state_9749;
var ex9835 = (state_9749__$1[(2)]);
var statearr_9838_11285 = state_9749__$1;
(statearr_9838_11285[(5)] = ex9835);


var statearr_9839_11286 = state_9749__$1;
(statearr_9839_11286[(1)] = (38));

(statearr_9839_11286[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (71))){
var state_9749__$1 = state_9749;
var statearr_9843_11287 = state_9749__$1;
(statearr_9843_11287[(2)] = null);

(statearr_9843_11287[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (103))){
var inst_9444 = (state_9749[(38)]);
var state_9749__$1 = state_9749;
var statearr_9844_11288 = state_9749__$1;
(statearr_9844_11288[(2)] = inst_9444);

(statearr_9844_11288[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (135))){
var inst_9579 = (state_9749[(13)]);
var inst_9576 = (state_9749[(25)]);
var inst_9577 = (state_9749[(20)]);
var inst_9578 = (state_9749[(14)]);
var inst_9645 = (state_9749[(2)]);
var inst_9646 = (inst_9579 + (1));
var tmp9840 = inst_9576;
var tmp9841 = inst_9577;
var tmp9842 = inst_9578;
var inst_9576__$1 = tmp9840;
var inst_9577__$1 = tmp9841;
var inst_9578__$1 = tmp9842;
var inst_9579__$1 = inst_9646;
var state_9749__$1 = (function (){var statearr_9845 = state_9749;
(statearr_9845[(45)] = inst_9645);

(statearr_9845[(25)] = inst_9576__$1);

(statearr_9845[(20)] = inst_9577__$1);

(statearr_9845[(14)] = inst_9578__$1);

(statearr_9845[(13)] = inst_9579__$1);

return statearr_9845;
})();
var statearr_9846_11289 = state_9749__$1;
(statearr_9846_11289[(2)] = null);

(statearr_9846_11289[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (8))){
var inst_8962 = (state_9749[(43)]);
var state_9749__$1 = state_9749;
var statearr_9847_11290 = state_9749__$1;
(statearr_9847_11290[(2)] = inst_8962);

(statearr_9847_11290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (40))){
var inst_9097 = (state_9749[(28)]);
var inst_9100 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9101 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_9102 = cljs.core.cons.call(null,cljs.core._EQ_,inst_9097);
var inst_9103 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"multiple tokens can be created",inst_9101,inst_9102];
var inst_9104 = cljs.core.PersistentHashMap.fromArrays(inst_9100,inst_9103);
var inst_9105 = cljs.test.do_report.call(null,inst_9104);
var state_9749__$1 = state_9749;
var statearr_9848_11291 = state_9749__$1;
(statearr_9848_11291[(2)] = inst_9105);

(statearr_9848_11291[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (72))){
var inst_9335 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9849_11292 = state_9749__$1;
(statearr_9849_11292[(2)] = inst_9335);

(statearr_9849_11292[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (104))){
var inst_8931 = (state_9749[(15)]);
var inst_9454 = (state_9749[(2)]);
var inst_9459 = cljs.core.take.call(null,(3),inst_8931);
var inst_9460 = cljs.core.seq.call(null,inst_9459);
var inst_9461 = inst_9460;
var inst_9462 = null;
var inst_9463 = (0);
var inst_9464 = (0);
var state_9749__$1 = (function (){var statearr_9850 = state_9749;
(statearr_9850[(46)] = inst_9454);

(statearr_9850[(49)] = inst_9461);

(statearr_9850[(50)] = inst_9462);

(statearr_9850[(51)] = inst_9463);

(statearr_9850[(52)] = inst_9464);

return statearr_9850;
})();
var statearr_9851_11293 = state_9749__$1;
(statearr_9851_11293[(2)] = null);

(statearr_9851_11293[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (136))){
var inst_9607 = (state_9749[(47)]);
var inst_9607__$1 = (state_9749[(2)]);
var inst_9608 = (inst_9607__$1 instanceof cljs.core.ExceptionInfo);
var inst_9609 = cljs.core.ex_data.call(null,inst_9607__$1);
var inst_9610 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9609);
var inst_9611 = cljs.core._EQ_.call(null,inst_9610,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9612 = ((inst_9608) && (inst_9611));
var state_9749__$1 = (function (){var statearr_9852 = state_9749;
(statearr_9852[(47)] = inst_9607__$1);

return statearr_9852;
})();
if(cljs.core.truth_(inst_9612)){
var statearr_9853_11294 = state_9749__$1;
(statearr_9853_11294[(1)] = (137));

} else {
var statearr_9854_11295 = state_9749__$1;
(statearr_9854_11295[(1)] = (138));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (9))){
var inst_8931 = (state_9749[(15)]);
var inst_8972 = (state_9749[(2)]);
var inst_8977 = cljs.core.seq.call(null,inst_8931);
var inst_8978 = inst_8977;
var inst_8979 = null;
var inst_8980 = (0);
var inst_8981 = (0);
var state_9749__$1 = (function (){var statearr_9855 = state_9749;
(statearr_9855[(48)] = inst_8972);

(statearr_9855[(39)] = inst_8978);

(statearr_9855[(40)] = inst_8979);

(statearr_9855[(41)] = inst_8980);

(statearr_9855[(42)] = inst_8981);

return statearr_9855;
})();
var statearr_9856_11296 = state_9749__$1;
(statearr_9856_11296[(2)] = null);

(statearr_9856_11296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (41))){
var inst_9097 = (state_9749[(28)]);
var inst_9107 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9108 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_9109 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9110 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_9111 = cljs.core.cons.call(null,inst_9110,inst_9097);
var inst_9112 = (new cljs.core.List(null,inst_9111,null,(1),null));
var inst_9113 = (new cljs.core.List(null,inst_9109,inst_9112,(2),null));
var inst_9114 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"multiple tokens can be created",inst_9108,inst_9113];
var inst_9115 = cljs.core.PersistentHashMap.fromArrays(inst_9107,inst_9114);
var inst_9116 = cljs.test.do_report.call(null,inst_9115);
var state_9749__$1 = state_9749;
var statearr_9857_11297 = state_9749__$1;
(statearr_9857_11297[(2)] = inst_9116);

(statearr_9857_11297[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (73))){
var inst_9271 = (state_9749[(44)]);
var inst_9275 = cljs.core.chunk_first.call(null,inst_9271);
var inst_9276 = cljs.core.chunk_rest.call(null,inst_9271);
var inst_9277 = cljs.core.count.call(null,inst_9275);
var inst_9211 = inst_9276;
var inst_9212 = inst_9275;
var inst_9213 = inst_9277;
var inst_9214 = (0);
var state_9749__$1 = (function (){var statearr_9858 = state_9749;
(statearr_9858[(9)] = inst_9211);

(statearr_9858[(10)] = inst_9212);

(statearr_9858[(11)] = inst_9213);

(statearr_9858[(8)] = inst_9214);

return statearr_9858;
})();
var statearr_9859_11298 = state_9749__$1;
(statearr_9859_11298[(2)] = null);

(statearr_9859_11298[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (105))){
var inst_9464 = (state_9749[(52)]);
var inst_9463 = (state_9749[(51)]);
var inst_9466 = (inst_9464 < inst_9463);
var inst_9467 = inst_9466;
var state_9749__$1 = state_9749;
if(cljs.core.truth_(inst_9467)){
var statearr_9860_11299 = state_9749__$1;
(statearr_9860_11299[(1)] = (107));

} else {
var statearr_9861_11300 = state_9749__$1;
(statearr_9861_11300[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (137))){
var inst_9607 = (state_9749[(47)]);
var inst_9614 = (function(){throw inst_9607})();
var state_9749__$1 = state_9749;
var statearr_9862_11301 = state_9749__$1;
(statearr_9862_11301[(2)] = inst_9614);

(statearr_9862_11301[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (10))){
var inst_8981 = (state_9749[(42)]);
var inst_8980 = (state_9749[(41)]);
var inst_8983 = (inst_8981 < inst_8980);
var inst_8984 = inst_8983;
var state_9749__$1 = state_9749;
if(cljs.core.truth_(inst_8984)){
var statearr_9863_11302 = state_9749__$1;
(statearr_9863_11302[(1)] = (12));

} else {
var statearr_9864_11303 = state_9749__$1;
(statearr_9864_11303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (42))){
var inst_9098 = (state_9749[(29)]);
var inst_9118 = (state_9749[(2)]);
var _ = (function (){var statearr_9865 = state_9749;
(statearr_9865[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9865;
})();
var state_9749__$1 = (function (){var statearr_9866 = state_9749;
(statearr_9866[(53)] = inst_9118);

return statearr_9866;
})();
var statearr_9867_11304 = state_9749__$1;
(statearr_9867_11304[(2)] = inst_9098);

(statearr_9867_11304[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (74))){
var inst_9271 = (state_9749[(44)]);
var inst_9214 = (state_9749[(8)]);
var inst_9284 = (state_9749[(54)]);
var inst_9213 = (state_9749[(11)]);
var inst_9285 = (state_9749[(55)]);
var inst_9212 = (state_9749[(10)]);
var inst_9166 = (state_9749[(56)]);
var inst_8931 = (state_9749[(15)]);
var inst_9283 = cljs.core.first.call(null,inst_9271);
var inst_9284__$1 = cljs.core.nth.call(null,inst_9283,(0),null);
var inst_9285__$1 = cljs.core.nth.call(null,inst_9283,(1),null);
var inst_9286 = cljs.core.nth.call(null,inst_9283,(2),null);
var inst_9287 = (function (){var i__9208 = inst_9214;
var t = inst_9284__$1;
var count__9207 = inst_9213;
var vec__9280 = inst_9283;
var _ = inst_9286;
var supply = inst_9285__$1;
var chunk__9206 = inst_9212;
var rows = inst_9166;
var temp__9015__auto__ = inst_9271;
var tokens = inst_8931;
var seq__9205 = inst_9271;
return ((function (i__9208,t,count__9207,vec__9280,_,supply,chunk__9206,rows,temp__9015__auto__,tokens,seq__9205,inst_9271,inst_9214,inst_9284,inst_9213,inst_9285,inst_9212,inst_9166,inst_8931,inst_9283,inst_9284__$1,inst_9285__$1,inst_9286,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function (p1__50_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__50_SHARP_.call(null,"amount"),t);
});
;})(i__9208,t,count__9207,vec__9280,_,supply,chunk__9206,rows,temp__9015__auto__,tokens,seq__9205,inst_9271,inst_9214,inst_9284,inst_9213,inst_9285,inst_9212,inst_9166,inst_8931,inst_9283,inst_9284__$1,inst_9285__$1,inst_9286,state_val_9750,c__19__auto__,___192__auto__,self____$1))
})();
var inst_9288 = cljs.core.filter.call(null,inst_9287,inst_9166);
var inst_9289 = cljs.core.first.call(null,inst_9288);
var state_9749__$1 = (function (){var statearr_9868 = state_9749;
(statearr_9868[(54)] = inst_9284__$1);

(statearr_9868[(55)] = inst_9285__$1);

(statearr_9868[(58)] = inst_9289);

return statearr_9868;
})();
var statearr_9869_11305 = state_9749__$1;
(statearr_9869_11305[(2)] = null);

(statearr_9869_11305[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (106))){
var inst_9555 = (state_9749[(2)]);
var inst_9556 = e2e.util.wait.call(null,(5000));
var inst_9557 = cljs.core.async.interop.p__GT_c.call(null,inst_9556);
var state_9749__$1 = (function (){var statearr_9870 = state_9749;
(statearr_9870[(57)] = inst_9555);

return statearr_9870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(124),inst_9557);
} else {
if((state_val_9750 === (138))){
var inst_9607 = (state_9749[(47)]);
var state_9749__$1 = state_9749;
var statearr_9871_11306 = state_9749__$1;
(statearr_9871_11306[(2)] = inst_9607);

(statearr_9871_11306[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (11))){
var inst_8931 = (state_9749[(15)]);
var inst_9132 = (state_9749[(2)]);
var inst_9137 = (function (){var tokens = inst_8931;
return ((function (tokens,inst_8931,inst_9132,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function e2e$stake$iter__9133(s__9134){
return (new cljs.core.LazySeq(null,((function (tokens,inst_8931,inst_9132,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function (){
var s__9134__$1 = s__9134;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__9134__$1);
if(temp__9015__auto__){
var s__9134__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9134__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__9134__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__9136 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__9135 = (0);
while(true){
if((i__9135 < size__9991__auto__)){
var vec__9872 = cljs.core._nth.call(null,c__9990__auto__,i__9135);
var seq__9873 = cljs.core.seq.call(null,vec__9872);
var first__9874 = cljs.core.first.call(null,seq__9873);
var seq__9873__$1 = cljs.core.next.call(null,seq__9873);
var t = first__9874;
var first__9874__$1 = cljs.core.first.call(null,seq__9873__$1);
var seq__9873__$2 = cljs.core.next.call(null,seq__9873__$1);
var supply = first__9874__$1;
var _ = seq__9873__$2;
cljs.core.chunk_append.call(null,b__9136,eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)));

var G__11307 = (i__9135 + (1));
i__9135 = G__11307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9136),e2e$stake$iter__9133.call(null,cljs.core.chunk_rest.call(null,s__9134__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9136),null);
}
} else {
var vec__9875 = cljs.core.first.call(null,s__9134__$2);
var seq__9876 = cljs.core.seq.call(null,vec__9875);
var first__9877 = cljs.core.first.call(null,seq__9876);
var seq__9876__$1 = cljs.core.next.call(null,seq__9876);
var t = first__9877;
var first__9877__$1 = cljs.core.first.call(null,seq__9876__$1);
var seq__9876__$2 = cljs.core.next.call(null,seq__9876__$1);
var supply = first__9877__$1;
var _ = seq__9876__$2;
return cljs.core.cons.call(null,eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)),e2e$stake$iter__9133.call(null,cljs.core.rest.call(null,s__9134__$2)));
}
} else {
return null;
}
break;
}
});})(tokens,inst_8931,inst_9132,state_val_9750,c__19__auto__,___192__auto__,self____$1))
,null,null));
});
;})(tokens,inst_8931,inst_9132,state_val_9750,c__19__auto__,___192__auto__,self____$1))
})();
var inst_9138 = inst_9137.call(null,inst_8931);
var inst_9139 = cljs.core.apply.call(null,e2e.util.p_all,inst_9138);
var inst_9140 = cljs.core.async.interop.p__GT_c.call(null,inst_9139);
var state_9749__$1 = (function (){var statearr_9878 = state_9749;
(statearr_9878[(59)] = inst_9132);

return statearr_9878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(43),inst_9140);
} else {
if((state_val_9750 === (43))){
var inst_9142 = (state_9749[(60)]);
var inst_9142__$1 = (state_9749[(2)]);
var inst_9143 = (inst_9142__$1 instanceof cljs.core.ExceptionInfo);
var inst_9144 = cljs.core.ex_data.call(null,inst_9142__$1);
var inst_9145 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9144);
var inst_9146 = cljs.core._EQ_.call(null,inst_9145,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9147 = ((inst_9143) && (inst_9146));
var state_9749__$1 = (function (){var statearr_9879 = state_9749;
(statearr_9879[(60)] = inst_9142__$1);

return statearr_9879;
})();
if(cljs.core.truth_(inst_9147)){
var statearr_9880_11308 = state_9749__$1;
(statearr_9880_11308[(1)] = (44));

} else {
var statearr_9881_11309 = state_9749__$1;
(statearr_9881_11309[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (75))){
var inst_9332 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9882_11310 = state_9749__$1;
(statearr_9882_11310[(2)] = inst_9332);

(statearr_9882_11310[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (107))){
var inst_9462 = (state_9749[(50)]);
var inst_9464 = (state_9749[(52)]);
var inst_9472 = cljs.core._nth.call(null,inst_9462,inst_9464);
var inst_9473 = cljs.core.nth.call(null,inst_9472,(0),null);
var inst_9474 = cljs.core.nth.call(null,inst_9472,(1),null);
var inst_9475 = cljs.core.nth.call(null,inst_9472,(2),null);
var inst_9476 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_9477 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9474)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9473)].join('');
var inst_9478 = [e2e.stake.owner_acc,inst_9477];
var inst_9479 = cljs.core.PersistentHashMap.fromArrays(inst_9476,inst_9478);
var inst_9480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9481 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_9482 = [e2e.stake.owner_acc,"active"];
var inst_9483 = cljs.core.PersistentHashMap.fromArrays(inst_9481,inst_9482);
var inst_9484 = [inst_9483];
var inst_9485 = (new cljs.core.PersistentVector(null,(1),(5),inst_9480,inst_9484,null));
var inst_9486 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",inst_9479,inst_9485);
var inst_9487 = e2e.util.should_succeed.call(null,inst_9486,"can always unstake");
var inst_9488 = cljs.core.async.interop.p__GT_c.call(null,inst_9487);
var state_9749__$1 = (function (){var statearr_9883 = state_9749;
(statearr_9883[(61)] = inst_9475);

return statearr_9883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(110),inst_9488);
} else {
if((state_val_9750 === (139))){
var inst_9617 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9884_11311 = state_9749__$1;
(statearr_9884_11311[(2)] = inst_9617);

(statearr_9884_11311[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (12))){
var inst_8979 = (state_9749[(40)]);
var inst_8981 = (state_9749[(42)]);
var inst_8989 = cljs.core._nth.call(null,inst_8979,inst_8981);
var inst_8990 = cljs.core.nth.call(null,inst_8989,(0),null);
var inst_8991 = cljs.core.nth.call(null,inst_8989,(1),null);
var inst_8992 = cljs.core.nth.call(null,inst_8989,(2),null);
var inst_8993 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,inst_8990,"stat");
var inst_8994 = cljs.core.async.interop.p__GT_c.call(null,inst_8993);
var state_9749__$1 = (function (){var statearr_9885 = state_9749;
(statearr_9885[(62)] = inst_8991);

(statearr_9885[(65)] = inst_8992);

return statearr_9885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(15),inst_8994);
} else {
if((state_val_9750 === (44))){
var inst_9142 = (state_9749[(60)]);
var inst_9149 = (function(){throw inst_9142})();
var state_9749__$1 = state_9749;
var statearr_9886_11312 = state_9749__$1;
(statearr_9886_11312[(2)] = inst_9149);

(statearr_9886_11312[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (76))){
var inst_9289 = (state_9749[(58)]);
var inst_9285 = (state_9749[(55)]);
var inst_9284 = (state_9749[(54)]);
var inst_9304 = (state_9749[(63)]);
var inst_9305 = (state_9749[(64)]);
var _ = (function (){var statearr_9887 = state_9749;
(statearr_9887[(4)] = cljs.core.cons.call(null,(79),(state_9749[(4)])));

return statearr_9887;
})();
var inst_9301 = cljs.core.get.call(null,inst_9289,"amount");
var inst_9302 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9285)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9284)].join('');
var inst_9303 = (new cljs.core.List(null,inst_9302,null,(1),null));
var inst_9304__$1 = (new cljs.core.List(null,inst_9301,inst_9303,(2),null));
var inst_9305__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_9304__$1);
var state_9749__$1 = (function (){var statearr_9888 = state_9749;
(statearr_9888[(63)] = inst_9304__$1);

(statearr_9888[(64)] = inst_9305__$1);

return statearr_9888;
})();
if(cljs.core.truth_(inst_9305__$1)){
var statearr_9889_11313 = state_9749__$1;
(statearr_9889_11313[(1)] = (80));

} else {
var statearr_9890_11314 = state_9749__$1;
(statearr_9890_11314[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (108))){
var inst_9461 = (state_9749[(49)]);
var inst_9504 = (state_9749[(66)]);
var inst_9504__$1 = cljs.core.seq.call(null,inst_9461);
var state_9749__$1 = (function (){var statearr_9891 = state_9749;
(statearr_9891[(66)] = inst_9504__$1);

return statearr_9891;
})();
if(inst_9504__$1){
var statearr_9892_11315 = state_9749__$1;
(statearr_9892_11315[(1)] = (114));

} else {
var statearr_9893_11316 = state_9749__$1;
(statearr_9893_11316[(1)] = (115));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (140))){
var inst_9633 = (state_9749[(67)]);
var inst_9633__$1 = (state_9749[(2)]);
var inst_9634 = (inst_9633__$1 instanceof cljs.core.ExceptionInfo);
var inst_9635 = cljs.core.ex_data.call(null,inst_9633__$1);
var inst_9636 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9635);
var inst_9637 = cljs.core._EQ_.call(null,inst_9636,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9638 = ((inst_9634) && (inst_9637));
var state_9749__$1 = (function (){var statearr_9894 = state_9749;
(statearr_9894[(67)] = inst_9633__$1);

return statearr_9894;
})();
if(cljs.core.truth_(inst_9638)){
var statearr_9895_11317 = state_9749__$1;
(statearr_9895_11317[(1)] = (141));

} else {
var statearr_9896_11318 = state_9749__$1;
(statearr_9896_11318[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (13))){
var inst_8978 = (state_9749[(39)]);
var inst_9051 = (state_9749[(34)]);
var inst_9051__$1 = cljs.core.seq.call(null,inst_8978);
var state_9749__$1 = (function (){var statearr_9897 = state_9749;
(statearr_9897[(34)] = inst_9051__$1);

return statearr_9897;
})();
if(inst_9051__$1){
var statearr_9898_11319 = state_9749__$1;
(statearr_9898_11319[(1)] = (26));

} else {
var statearr_9899_11320 = state_9749__$1;
(statearr_9899_11320[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (45))){
var inst_9142 = (state_9749[(60)]);
var state_9749__$1 = state_9749;
var statearr_9900_11321 = state_9749__$1;
(statearr_9900_11321[(2)] = inst_9142);

(statearr_9900_11321[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (77))){
var inst_9271 = (state_9749[(44)]);
var inst_9328 = (state_9749[(2)]);
var inst_9329 = cljs.core.next.call(null,inst_9271);
var inst_9211 = inst_9329;
var inst_9212 = null;
var inst_9213 = (0);
var inst_9214 = (0);
var state_9749__$1 = (function (){var statearr_9901 = state_9749;
(statearr_9901[(68)] = inst_9328);

(statearr_9901[(9)] = inst_9211);

(statearr_9901[(10)] = inst_9212);

(statearr_9901[(11)] = inst_9213);

(statearr_9901[(8)] = inst_9214);

return statearr_9901;
})();
var statearr_9902_11322 = state_9749__$1;
(statearr_9902_11322[(2)] = null);

(statearr_9902_11322[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (109))){
var inst_9553 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9903_11323 = state_9749__$1;
(statearr_9903_11323[(2)] = inst_9553);

(statearr_9903_11323[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (141))){
var inst_9633 = (state_9749[(67)]);
var inst_9640 = (function(){throw inst_9633})();
var state_9749__$1 = state_9749;
var statearr_9904_11324 = state_9749__$1;
(statearr_9904_11324[(2)] = inst_9640);

(statearr_9904_11324[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (14))){
var inst_9130 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9905_11325 = state_9749__$1;
(statearr_9905_11325[(2)] = inst_9130);

(statearr_9905_11325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (46))){
var inst_9152 = (state_9749[(2)]);
var inst_9153 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
var inst_9154 = cljs.core.async.interop.p__GT_c.call(null,inst_9153);
var state_9749__$1 = (function (){var statearr_9906 = state_9749;
(statearr_9906[(69)] = inst_9152);

return statearr_9906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(47),inst_9154);
} else {
if((state_val_9750 === (78))){
var inst_9290 = (state_9749[(2)]);
var inst_9291 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9292 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9293 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"the full supply of tokens can be staked",inst_9292,inst_9290];
var inst_9294 = cljs.core.PersistentHashMap.fromArrays(inst_9291,inst_9293);
var inst_9295 = cljs.test.do_report.call(null,inst_9294);
var state_9749__$1 = state_9749;
var statearr_9907_11326 = state_9749__$1;
(statearr_9907_11326[(2)] = inst_9295);

(statearr_9907_11326[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (110))){
var inst_9490 = (state_9749[(70)]);
var inst_9490__$1 = (state_9749[(2)]);
var inst_9491 = (inst_9490__$1 instanceof cljs.core.ExceptionInfo);
var inst_9492 = cljs.core.ex_data.call(null,inst_9490__$1);
var inst_9493 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9492);
var inst_9494 = cljs.core._EQ_.call(null,inst_9493,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9495 = ((inst_9491) && (inst_9494));
var state_9749__$1 = (function (){var statearr_9908 = state_9749;
(statearr_9908[(70)] = inst_9490__$1);

return statearr_9908;
})();
if(cljs.core.truth_(inst_9495)){
var statearr_9909_11327 = state_9749__$1;
(statearr_9909_11327[(1)] = (111));

} else {
var statearr_9910_11328 = state_9749__$1;
(statearr_9910_11328[(1)] = (112));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (142))){
var inst_9633 = (state_9749[(67)]);
var state_9749__$1 = state_9749;
var statearr_9911_11329 = state_9749__$1;
(statearr_9911_11329[(2)] = inst_9633);

(statearr_9911_11329[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (15))){
var inst_8996 = (state_9749[(71)]);
var inst_8996__$1 = (state_9749[(2)]);
var inst_8997 = (inst_8996__$1 instanceof cljs.core.ExceptionInfo);
var inst_8998 = cljs.core.ex_data.call(null,inst_8996__$1);
var inst_8999 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8998);
var inst_9000 = cljs.core._EQ_.call(null,inst_8999,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9001 = ((inst_8997) && (inst_9000));
var state_9749__$1 = (function (){var statearr_9913 = state_9749;
(statearr_9913[(71)] = inst_8996__$1);

return statearr_9913;
})();
if(cljs.core.truth_(inst_9001)){
var statearr_9914_11330 = state_9749__$1;
(statearr_9914_11330[(1)] = (16));

} else {
var statearr_9915_11331 = state_9749__$1;
(statearr_9915_11331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (47))){
var inst_9156 = (state_9749[(72)]);
var inst_9156__$1 = (state_9749[(2)]);
var inst_9157 = (inst_9156__$1 instanceof cljs.core.ExceptionInfo);
var inst_9158 = cljs.core.ex_data.call(null,inst_9156__$1);
var inst_9159 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9158);
var inst_9160 = cljs.core._EQ_.call(null,inst_9159,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9161 = ((inst_9157) && (inst_9160));
var state_9749__$1 = (function (){var statearr_9916 = state_9749;
(statearr_9916[(72)] = inst_9156__$1);

return statearr_9916;
})();
if(cljs.core.truth_(inst_9161)){
var statearr_9917_11332 = state_9749__$1;
(statearr_9917_11332[(1)] = (48));

} else {
var statearr_9918_11333 = state_9749__$1;
(statearr_9918_11333[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (79))){
var _ = (function (){var statearr_9919 = state_9749;
(statearr_9919[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9919;
})();
var state_9749__$1 = state_9749;
var ex9912 = (state_9749__$1[(2)]);
var statearr_9920_11334 = state_9749__$1;
(statearr_9920_11334[(5)] = ex9912);


var statearr_9921_11335 = state_9749__$1;
(statearr_9921_11335[(1)] = (78));

(statearr_9921_11335[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (111))){
var inst_9490 = (state_9749[(70)]);
var inst_9497 = (function(){throw inst_9490})();
var state_9749__$1 = state_9749;
var statearr_9922_11336 = state_9749__$1;
(statearr_9922_11336[(2)] = inst_9497);

(statearr_9922_11336[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (143))){
var inst_9643 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9923_11337 = state_9749__$1;
(statearr_9923_11337[(2)] = inst_9643);

(statearr_9923_11337[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (16))){
var inst_8996 = (state_9749[(71)]);
var inst_9003 = (function(){throw inst_8996})();
var state_9749__$1 = state_9749;
var statearr_9924_11338 = state_9749__$1;
(statearr_9924_11338[(2)] = inst_9003);

(statearr_9924_11338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (48))){
var inst_9156 = (state_9749[(72)]);
var inst_9163 = (function(){throw inst_9156})();
var state_9749__$1 = state_9749;
var statearr_9925_11339 = state_9749__$1;
(statearr_9925_11339[(2)] = inst_9163);

(statearr_9925_11339[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (80))){
var inst_9304 = (state_9749[(63)]);
var inst_9307 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9308 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9309 = cljs.core.cons.call(null,cljs.core._EQ_,inst_9304);
var inst_9310 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"the full supply of tokens can be staked",inst_9308,inst_9309];
var inst_9311 = cljs.core.PersistentHashMap.fromArrays(inst_9307,inst_9310);
var inst_9312 = cljs.test.do_report.call(null,inst_9311);
var state_9749__$1 = state_9749;
var statearr_9926_11340 = state_9749__$1;
(statearr_9926_11340[(2)] = inst_9312);

(statearr_9926_11340[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (112))){
var inst_9490 = (state_9749[(70)]);
var state_9749__$1 = state_9749;
var statearr_9927_11341 = state_9749__$1;
(statearr_9927_11341[(2)] = inst_9490);

(statearr_9927_11341[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (144))){
var inst_9649 = (state_9749[(26)]);
var inst_9651 = cljs.core.chunked_seq_QMARK_.call(null,inst_9649);
var state_9749__$1 = state_9749;
if(inst_9651){
var statearr_9928_11342 = state_9749__$1;
(statearr_9928_11342[(1)] = (147));

} else {
var statearr_9929_11343 = state_9749__$1;
(statearr_9929_11343[(1)] = (148));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (17))){
var inst_8996 = (state_9749[(71)]);
var state_9749__$1 = state_9749;
var statearr_9930_11344 = state_9749__$1;
(statearr_9930_11344[(2)] = inst_8996);

(statearr_9930_11344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (49))){
var inst_9156 = (state_9749[(72)]);
var state_9749__$1 = state_9749;
var statearr_9934_11345 = state_9749__$1;
(statearr_9934_11345[(2)] = inst_9156);

(statearr_9934_11345[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (81))){
var inst_9304 = (state_9749[(63)]);
var inst_9314 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9315 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_9316 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9317 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_9318 = cljs.core.cons.call(null,inst_9317,inst_9304);
var inst_9319 = (new cljs.core.List(null,inst_9318,null,(1),null));
var inst_9320 = (new cljs.core.List(null,inst_9316,inst_9319,(2),null));
var inst_9321 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"the full supply of tokens can be staked",inst_9315,inst_9320];
var inst_9322 = cljs.core.PersistentHashMap.fromArrays(inst_9314,inst_9321);
var inst_9323 = cljs.test.do_report.call(null,inst_9322);
var state_9749__$1 = state_9749;
var statearr_9935_11346 = state_9749__$1;
(statearr_9935_11346[(2)] = inst_9323);

(statearr_9935_11346[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (113))){
var inst_9464 = (state_9749[(52)]);
var inst_9461 = (state_9749[(49)]);
var inst_9462 = (state_9749[(50)]);
var inst_9463 = (state_9749[(51)]);
var inst_9500 = (state_9749[(2)]);
var inst_9501 = (inst_9464 + (1));
var tmp9931 = inst_9461;
var tmp9932 = inst_9462;
var tmp9933 = inst_9463;
var inst_9461__$1 = tmp9931;
var inst_9462__$1 = tmp9932;
var inst_9463__$1 = tmp9933;
var inst_9464__$1 = inst_9501;
var state_9749__$1 = (function (){var statearr_9936 = state_9749;
(statearr_9936[(73)] = inst_9500);

(statearr_9936[(49)] = inst_9461__$1);

(statearr_9936[(50)] = inst_9462__$1);

(statearr_9936[(51)] = inst_9463__$1);

(statearr_9936[(52)] = inst_9464__$1);

return statearr_9936;
})();
var statearr_9937_11347 = state_9749__$1;
(statearr_9937_11347[(2)] = null);

(statearr_9937_11347[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (145))){
var state_9749__$1 = state_9749;
var statearr_9938_11348 = state_9749__$1;
(statearr_9938_11348[(2)] = null);

(statearr_9938_11348[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (18))){
var inst_9006 = (state_9749[(2)]);
var state_9749__$1 = (function (){var statearr_9939 = state_9749;
(statearr_9939[(74)] = inst_9006);

return statearr_9939;
})();
var statearr_9940_11349 = state_9749__$1;
(statearr_9940_11349[(2)] = null);

(statearr_9940_11349[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (50))){
var inst_9166 = (state_9749[(2)]);
var state_9749__$1 = (function (){var statearr_9941 = state_9749;
(statearr_9941[(56)] = inst_9166);

return statearr_9941;
})();
var statearr_9942_11350 = state_9749__$1;
(statearr_9942_11350[(2)] = null);

(statearr_9942_11350[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (82))){
var inst_9305 = (state_9749[(64)]);
var inst_9325 = (state_9749[(2)]);
var _ = (function (){var statearr_9943 = state_9749;
(statearr_9943[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9943;
})();
var state_9749__$1 = (function (){var statearr_9944 = state_9749;
(statearr_9944[(75)] = inst_9325);

return statearr_9944;
})();
var statearr_9945_11351 = state_9749__$1;
(statearr_9945_11351[(2)] = inst_9305);

(statearr_9945_11351[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (114))){
var inst_9504 = (state_9749[(66)]);
var inst_9506 = cljs.core.chunked_seq_QMARK_.call(null,inst_9504);
var state_9749__$1 = state_9749;
if(inst_9506){
var statearr_9946_11352 = state_9749__$1;
(statearr_9946_11352[(1)] = (117));

} else {
var statearr_9947_11353 = state_9749__$1;
(statearr_9947_11353[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (146))){
var inst_9726 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9948_11354 = state_9749__$1;
(statearr_9948_11354[(2)] = inst_9726);

(statearr_9948_11354[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (19))){
var inst_9006 = (state_9749[(74)]);
var inst_8992 = (state_9749[(65)]);
var inst_9023 = (state_9749[(76)]);
var inst_9024 = (state_9749[(77)]);
var _ = (function (){var statearr_9949 = state_9749;
(statearr_9949[(4)] = cljs.core.cons.call(null,(22),(state_9749[(4)])));

return statearr_9949;
})();
var inst_9018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9019 = [(0),"unstake_delay_sec"];
var inst_9020 = (new cljs.core.PersistentVector(null,(2),(5),inst_9018,inst_9019,null));
var inst_9021 = cljs.core.get_in.call(null,inst_9006,inst_9020);
var inst_9022 = (new cljs.core.List(null,inst_8992,null,(1),null));
var inst_9023__$1 = (new cljs.core.List(null,inst_9021,inst_9022,(2),null));
var inst_9024__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_9023__$1);
var state_9749__$1 = (function (){var statearr_9950 = state_9749;
(statearr_9950[(76)] = inst_9023__$1);

(statearr_9950[(77)] = inst_9024__$1);

return statearr_9950;
})();
if(cljs.core.truth_(inst_9024__$1)){
var statearr_9951_11355 = state_9749__$1;
(statearr_9951_11355[(1)] = (23));

} else {
var statearr_9952_11356 = state_9749__$1;
(statearr_9952_11356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (51))){
var inst_9166 = (state_9749[(56)]);
var inst_9180 = (state_9749[(78)]);
var inst_9181 = (state_9749[(79)]);
var _ = (function (){var statearr_9953 = state_9749;
(statearr_9953[(4)] = cljs.core.cons.call(null,(54),(state_9749[(4)])));

return statearr_9953;
})();
var inst_9178 = cljs.core.count.call(null,inst_9166);
var inst_9179 = (new cljs.core.List(null,(4),null,(1),null));
var inst_9180__$1 = (new cljs.core.List(null,inst_9178,inst_9179,(2),null));
var inst_9181__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_9180__$1);
var state_9749__$1 = (function (){var statearr_9954 = state_9749;
(statearr_9954[(78)] = inst_9180__$1);

(statearr_9954[(79)] = inst_9181__$1);

return statearr_9954;
})();
if(cljs.core.truth_(inst_9181__$1)){
var statearr_9955_11357 = state_9749__$1;
(statearr_9955_11357[(1)] = (55));

} else {
var statearr_9956_11358 = state_9749__$1;
(statearr_9956_11358[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (83))){
var inst_9341 = (state_9749[(80)]);
var inst_9353 = (state_9749[(81)]);
var inst_9354 = (state_9749[(82)]);
var _ = (function (){var statearr_9957 = state_9749;
(statearr_9957[(4)] = cljs.core.cons.call(null,(86),(state_9749[(4)])));

return statearr_9957;
})();
var inst_9353__$1 = (new cljs.core.List(null,inst_9341,null,(1),null));
var inst_9354__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_9353__$1);
var state_9749__$1 = (function (){var statearr_9958 = state_9749;
(statearr_9958[(81)] = inst_9353__$1);

(statearr_9958[(82)] = inst_9354__$1);

return statearr_9958;
})();
if(cljs.core.truth_(inst_9354__$1)){
var statearr_9959_11359 = state_9749__$1;
(statearr_9959_11359[(1)] = (87));

} else {
var statearr_9960_11360 = state_9749__$1;
(statearr_9960_11360[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (115))){
var state_9749__$1 = state_9749;
var statearr_9964_11361 = state_9749__$1;
(statearr_9964_11361[(2)] = null);

(statearr_9964_11361[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (147))){
var inst_9649 = (state_9749[(26)]);
var inst_9653 = cljs.core.chunk_first.call(null,inst_9649);
var inst_9654 = cljs.core.chunk_rest.call(null,inst_9649);
var inst_9655 = cljs.core.count.call(null,inst_9653);
var inst_9576 = inst_9654;
var inst_9577 = inst_9653;
var inst_9578 = inst_9655;
var inst_9579 = (0);
var state_9749__$1 = (function (){var statearr_9965 = state_9749;
(statearr_9965[(25)] = inst_9576);

(statearr_9965[(20)] = inst_9577);

(statearr_9965[(14)] = inst_9578);

(statearr_9965[(13)] = inst_9579);

return statearr_9965;
})();
var statearr_9966_11362 = state_9749__$1;
(statearr_9966_11362[(2)] = null);

(statearr_9966_11362[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (20))){
var inst_8981 = (state_9749[(42)]);
var inst_8978 = (state_9749[(39)]);
var inst_8979 = (state_9749[(40)]);
var inst_8980 = (state_9749[(41)]);
var inst_9047 = (state_9749[(2)]);
var inst_9048 = (inst_8981 + (1));
var tmp9961 = inst_8978;
var tmp9962 = inst_8979;
var tmp9963 = inst_8980;
var inst_8978__$1 = tmp9961;
var inst_8979__$1 = tmp9962;
var inst_8980__$1 = tmp9963;
var inst_8981__$1 = inst_9048;
var state_9749__$1 = (function (){var statearr_9967 = state_9749;
(statearr_9967[(83)] = inst_9047);

(statearr_9967[(39)] = inst_8978__$1);

(statearr_9967[(40)] = inst_8979__$1);

(statearr_9967[(41)] = inst_8980__$1);

(statearr_9967[(42)] = inst_8981__$1);

return statearr_9967;
})();
var statearr_9968_11363 = state_9749__$1;
(statearr_9968_11363[(2)] = null);

(statearr_9968_11363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (52))){
var inst_8931 = (state_9749[(15)]);
var inst_9204 = (state_9749[(2)]);
var inst_9209 = cljs.core.take.call(null,(3),inst_8931);
var inst_9210 = cljs.core.seq.call(null,inst_9209);
var inst_9211 = inst_9210;
var inst_9212 = null;
var inst_9213 = (0);
var inst_9214 = (0);
var state_9749__$1 = (function (){var statearr_9969 = state_9749;
(statearr_9969[(84)] = inst_9204);

(statearr_9969[(9)] = inst_9211);

(statearr_9969[(10)] = inst_9212);

(statearr_9969[(11)] = inst_9213);

(statearr_9969[(8)] = inst_9214);

return statearr_9969;
})();
var statearr_9970_11364 = state_9749__$1;
(statearr_9970_11364[(2)] = null);

(statearr_9970_11364[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (84))){
var inst_9377 = (state_9749[(2)]);
var inst_9378 = eos_cljs.core.get_table_rows.call(null,e2e.stake.token_acc,e2e.stake.stake_acc,"accounts");
var inst_9379 = cljs.core.async.interop.p__GT_c.call(null,inst_9378);
var state_9749__$1 = (function (){var statearr_9971 = state_9749;
(statearr_9971[(85)] = inst_9377);

return statearr_9971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(90),inst_9379);
} else {
if((state_val_9750 === (116))){
var inst_9551 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9972_11365 = state_9749__$1;
(statearr_9972_11365[(2)] = inst_9551);

(statearr_9972_11365[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (148))){
var inst_9649 = (state_9749[(26)]);
var inst_9661 = cljs.core.first.call(null,inst_9649);
var inst_9662 = cljs.core.nth.call(null,inst_9661,(0),null);
var inst_9663 = cljs.core.nth.call(null,inst_9661,(1),null);
var inst_9664 = cljs.core.nth.call(null,inst_9661,(2),null);
var inst_9665 = (inst_9664 <= (5));
var state_9749__$1 = (function (){var statearr_9973 = state_9749;
(statearr_9973[(86)] = inst_9662);

(statearr_9973[(87)] = inst_9663);

return statearr_9973;
})();
if(cljs.core.truth_(inst_9665)){
var statearr_9974_11366 = state_9749__$1;
(statearr_9974_11366[(1)] = (150));

} else {
var statearr_9975_11367 = state_9749__$1;
(statearr_9975_11367[(1)] = (151));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (21))){
var inst_9007 = (state_9749[(2)]);
var inst_9008 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9009 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_9010 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"multiple tokens can be created",inst_9009,inst_9007];
var inst_9011 = cljs.core.PersistentHashMap.fromArrays(inst_9008,inst_9010);
var inst_9012 = cljs.test.do_report.call(null,inst_9011);
var state_9749__$1 = state_9749;
var statearr_9976_11368 = state_9749__$1;
(statearr_9976_11368[(2)] = inst_9012);

(statearr_9976_11368[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (53))){
var inst_9167 = (state_9749[(2)]);
var inst_9168 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9169 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(4));
var inst_9170 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"multiple tokens can be staked",inst_9169,inst_9167];
var inst_9171 = cljs.core.PersistentHashMap.fromArrays(inst_9168,inst_9170);
var inst_9172 = cljs.test.do_report.call(null,inst_9171);
var state_9749__$1 = state_9749;
var statearr_9977_11369 = state_9749__$1;
(statearr_9977_11369[(2)] = inst_9172);

(statearr_9977_11369[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (85))){
var inst_9342 = (state_9749[(2)]);
var inst_9343 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9344 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"last-row","last-row",(2028653194),null));
var inst_9345 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"non-stakeble token can not be staked",inst_9344,inst_9342];
var inst_9346 = cljs.core.PersistentHashMap.fromArrays(inst_9343,inst_9345);
var inst_9347 = cljs.test.do_report.call(null,inst_9346);
var state_9749__$1 = state_9749;
var statearr_9978_11370 = state_9749__$1;
(statearr_9978_11370[(2)] = inst_9347);

(statearr_9978_11370[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (117))){
var inst_9504 = (state_9749[(66)]);
var inst_9508 = cljs.core.chunk_first.call(null,inst_9504);
var inst_9509 = cljs.core.chunk_rest.call(null,inst_9504);
var inst_9510 = cljs.core.count.call(null,inst_9508);
var inst_9461 = inst_9509;
var inst_9462 = inst_9508;
var inst_9463 = inst_9510;
var inst_9464 = (0);
var state_9749__$1 = (function (){var statearr_9980 = state_9749;
(statearr_9980[(49)] = inst_9461);

(statearr_9980[(50)] = inst_9462);

(statearr_9980[(51)] = inst_9463);

(statearr_9980[(52)] = inst_9464);

return statearr_9980;
})();
var statearr_9981_11371 = state_9749__$1;
(statearr_9981_11371[(2)] = null);

(statearr_9981_11371[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (149))){
var inst_9723 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9983_11372 = state_9749__$1;
(statearr_9983_11372[(2)] = inst_9723);

(statearr_9983_11372[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (22))){
var _ = (function (){var statearr_9985 = state_9749;
(statearr_9985[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9985;
})();
var state_9749__$1 = state_9749;
var ex9979 = (state_9749__$1[(2)]);
var statearr_9986_11373 = state_9749__$1;
(statearr_9986_11373[(5)] = ex9979);


var statearr_9987_11374 = state_9749__$1;
(statearr_9987_11374[(1)] = (21));

(statearr_9987_11374[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (54))){
var _ = (function (){var statearr_9988 = state_9749;
(statearr_9988[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9988;
})();
var state_9749__$1 = state_9749;
var ex9982 = (state_9749__$1[(2)]);
var statearr_9989_11375 = state_9749__$1;
(statearr_9989_11375[(5)] = ex9982);


var statearr_9990_11376 = state_9749__$1;
(statearr_9990_11376[(1)] = (53));

(statearr_9990_11376[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (86))){
var _ = (function (){var statearr_9991 = state_9749;
(statearr_9991[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_9991;
})();
var state_9749__$1 = state_9749;
var ex9984 = (state_9749__$1[(2)]);
var statearr_9992_11377 = state_9749__$1;
(statearr_9992_11377[(5)] = ex9984);


var statearr_9993_11378 = state_9749__$1;
(statearr_9993_11378[(1)] = (85));

(statearr_9993_11378[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (118))){
var inst_9504 = (state_9749[(66)]);
var inst_9516 = cljs.core.first.call(null,inst_9504);
var inst_9517 = cljs.core.nth.call(null,inst_9516,(0),null);
var inst_9518 = cljs.core.nth.call(null,inst_9516,(1),null);
var inst_9519 = cljs.core.nth.call(null,inst_9516,(2),null);
var inst_9520 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_9521 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9518)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9517)].join('');
var inst_9522 = [e2e.stake.owner_acc,inst_9521];
var inst_9523 = cljs.core.PersistentHashMap.fromArrays(inst_9520,inst_9522);
var inst_9524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9525 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_9526 = [e2e.stake.owner_acc,"active"];
var inst_9527 = cljs.core.PersistentHashMap.fromArrays(inst_9525,inst_9526);
var inst_9528 = [inst_9527];
var inst_9529 = (new cljs.core.PersistentVector(null,(1),(5),inst_9524,inst_9528,null));
var inst_9530 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",inst_9523,inst_9529);
var inst_9531 = e2e.util.should_succeed.call(null,inst_9530,"can always unstake");
var inst_9532 = cljs.core.async.interop.p__GT_c.call(null,inst_9531);
var state_9749__$1 = (function (){var statearr_9994 = state_9749;
(statearr_9994[(88)] = inst_9519);

return statearr_9994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(120),inst_9532);
} else {
if((state_val_9750 === (150))){
var inst_9662 = (state_9749[(86)]);
var inst_9667 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_9668 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9662)].join('');
var inst_9669 = [e2e.stake.owner_acc,inst_9668];
var inst_9670 = cljs.core.PersistentHashMap.fromArrays(inst_9667,inst_9669);
var inst_9671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9672 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_9673 = [e2e.stake.owner_acc,"active"];
var inst_9674 = cljs.core.PersistentHashMap.fromArrays(inst_9672,inst_9673);
var inst_9675 = [inst_9674];
var inst_9676 = (new cljs.core.PersistentVector(null,(1),(5),inst_9671,inst_9675,null));
var inst_9677 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_9670,inst_9676);
var inst_9678 = e2e.util.should_succeed.call(null,inst_9677,"can refund token with low unstake delay");
var inst_9679 = cljs.core.async.interop.p__GT_c.call(null,inst_9678);
var state_9749__$1 = state_9749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(153),inst_9679);
} else {
if((state_val_9750 === (23))){
var inst_9023 = (state_9749[(76)]);
var inst_9026 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9027 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_9028 = cljs.core.cons.call(null,cljs.core._EQ_,inst_9023);
var inst_9029 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"multiple tokens can be created",inst_9027,inst_9028];
var inst_9030 = cljs.core.PersistentHashMap.fromArrays(inst_9026,inst_9029);
var inst_9031 = cljs.test.do_report.call(null,inst_9030);
var state_9749__$1 = state_9749;
var statearr_9995_11379 = state_9749__$1;
(statearr_9995_11379[(2)] = inst_9031);

(statearr_9995_11379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (55))){
var inst_9180 = (state_9749[(78)]);
var inst_9183 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9184 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(4));
var inst_9185 = cljs.core.cons.call(null,cljs.core._EQ_,inst_9180);
var inst_9186 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"multiple tokens can be staked",inst_9184,inst_9185];
var inst_9187 = cljs.core.PersistentHashMap.fromArrays(inst_9183,inst_9186);
var inst_9188 = cljs.test.do_report.call(null,inst_9187);
var state_9749__$1 = state_9749;
var statearr_9996_11380 = state_9749__$1;
(statearr_9996_11380[(2)] = inst_9188);

(statearr_9996_11380[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (87))){
var inst_9353 = (state_9749[(81)]);
var inst_9356 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9357 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"last-row","last-row",(2028653194),null));
var inst_9358 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_9353);
var inst_9359 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"non-stakeble token can not be staked",inst_9357,inst_9358];
var inst_9360 = cljs.core.PersistentHashMap.fromArrays(inst_9356,inst_9359);
var inst_9361 = cljs.test.do_report.call(null,inst_9360);
var state_9749__$1 = state_9749;
var statearr_9997_11381 = state_9749__$1;
(statearr_9997_11381[(2)] = inst_9361);

(statearr_9997_11381[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (119))){
var inst_9548 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9998_11382 = state_9749__$1;
(statearr_9998_11382[(2)] = inst_9548);

(statearr_9998_11382[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (151))){
var inst_9662 = (state_9749[(86)]);
var inst_9693 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_9694 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9662)].join('');
var inst_9695 = [e2e.stake.owner_acc,inst_9694];
var inst_9696 = cljs.core.PersistentHashMap.fromArrays(inst_9693,inst_9695);
var inst_9697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9698 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_9699 = [e2e.stake.owner_acc,"active"];
var inst_9700 = cljs.core.PersistentHashMap.fromArrays(inst_9698,inst_9699);
var inst_9701 = [inst_9700];
var inst_9702 = (new cljs.core.PersistentVector(null,(1),(5),inst_9697,inst_9701,null));
var inst_9703 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_9696,inst_9702);
var inst_9704 = e2e.util.should_fail_with.call(null,inst_9703,"unstake is still pending");
var inst_9705 = cljs.core.async.interop.p__GT_c.call(null,inst_9704);
var state_9749__$1 = state_9749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(157),inst_9705);
} else {
if((state_val_9750 === (24))){
var inst_9023 = (state_9749[(76)]);
var inst_9033 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9034 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_9035 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9036 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_9037 = cljs.core.cons.call(null,inst_9036,inst_9023);
var inst_9038 = (new cljs.core.List(null,inst_9037,null,(1),null));
var inst_9039 = (new cljs.core.List(null,inst_9035,inst_9038,(2),null));
var inst_9040 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"multiple tokens can be created",inst_9034,inst_9039];
var inst_9041 = cljs.core.PersistentHashMap.fromArrays(inst_9033,inst_9040);
var inst_9042 = cljs.test.do_report.call(null,inst_9041);
var state_9749__$1 = state_9749;
var statearr_9999_11383 = state_9749__$1;
(statearr_9999_11383[(2)] = inst_9042);

(statearr_9999_11383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (56))){
var inst_9180 = (state_9749[(78)]);
var inst_9190 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9191 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(4));
var inst_9192 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9193 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_9194 = cljs.core.cons.call(null,inst_9193,inst_9180);
var inst_9195 = (new cljs.core.List(null,inst_9194,null,(1),null));
var inst_9196 = (new cljs.core.List(null,inst_9192,inst_9195,(2),null));
var inst_9197 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"multiple tokens can be staked",inst_9191,inst_9196];
var inst_9198 = cljs.core.PersistentHashMap.fromArrays(inst_9190,inst_9197);
var inst_9199 = cljs.test.do_report.call(null,inst_9198);
var state_9749__$1 = state_9749;
var statearr_10000_11384 = state_9749__$1;
(statearr_10000_11384[(2)] = inst_9199);

(statearr_10000_11384[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (88))){
var inst_9353 = (state_9749[(81)]);
var inst_9363 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9364 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"last-row","last-row",(2028653194),null));
var inst_9365 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9366 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_9367 = cljs.core.cons.call(null,inst_9366,inst_9353);
var inst_9368 = (new cljs.core.List(null,inst_9367,null,(1),null));
var inst_9369 = (new cljs.core.List(null,inst_9365,inst_9368,(2),null));
var inst_9370 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"non-stakeble token can not be staked",inst_9364,inst_9369];
var inst_9371 = cljs.core.PersistentHashMap.fromArrays(inst_9363,inst_9370);
var inst_9372 = cljs.test.do_report.call(null,inst_9371);
var state_9749__$1 = state_9749;
var statearr_10001_11385 = state_9749__$1;
(statearr_10001_11385[(2)] = inst_9372);

(statearr_10001_11385[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (120))){
var inst_9534 = (state_9749[(89)]);
var inst_9534__$1 = (state_9749[(2)]);
var inst_9535 = (inst_9534__$1 instanceof cljs.core.ExceptionInfo);
var inst_9536 = cljs.core.ex_data.call(null,inst_9534__$1);
var inst_9537 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9536);
var inst_9538 = cljs.core._EQ_.call(null,inst_9537,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9539 = ((inst_9535) && (inst_9538));
var state_9749__$1 = (function (){var statearr_10002 = state_9749;
(statearr_10002[(89)] = inst_9534__$1);

return statearr_10002;
})();
if(cljs.core.truth_(inst_9539)){
var statearr_10003_11386 = state_9749__$1;
(statearr_10003_11386[(1)] = (121));

} else {
var statearr_10004_11387 = state_9749__$1;
(statearr_10004_11387[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (152))){
var inst_9649 = (state_9749[(26)]);
var inst_9719 = (state_9749[(2)]);
var inst_9720 = cljs.core.next.call(null,inst_9649);
var inst_9576 = inst_9720;
var inst_9577 = null;
var inst_9578 = (0);
var inst_9579 = (0);
var state_9749__$1 = (function (){var statearr_10005 = state_9749;
(statearr_10005[(90)] = inst_9719);

(statearr_10005[(25)] = inst_9576);

(statearr_10005[(20)] = inst_9577);

(statearr_10005[(14)] = inst_9578);

(statearr_10005[(13)] = inst_9579);

return statearr_10005;
})();
var statearr_10006_11388 = state_9749__$1;
(statearr_10006_11388[(2)] = null);

(statearr_10006_11388[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (25))){
var inst_9024 = (state_9749[(77)]);
var inst_9044 = (state_9749[(2)]);
var _ = (function (){var statearr_10007 = state_9749;
(statearr_10007[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_10007;
})();
var state_9749__$1 = (function (){var statearr_10008 = state_9749;
(statearr_10008[(91)] = inst_9044);

return statearr_10008;
})();
var statearr_10009_11389 = state_9749__$1;
(statearr_10009_11389[(2)] = inst_9024);

(statearr_10009_11389[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (57))){
var inst_9181 = (state_9749[(79)]);
var inst_9201 = (state_9749[(2)]);
var _ = (function (){var statearr_10010 = state_9749;
(statearr_10010[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_10010;
})();
var state_9749__$1 = (function (){var statearr_10011 = state_9749;
(statearr_10011[(92)] = inst_9201);

return statearr_10011;
})();
var statearr_10012_11390 = state_9749__$1;
(statearr_10012_11390[(2)] = inst_9181);

(statearr_10012_11390[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (89))){
var inst_9354 = (state_9749[(82)]);
var inst_9374 = (state_9749[(2)]);
var _ = (function (){var statearr_10013 = state_9749;
(statearr_10013[(4)] = cljs.core.rest.call(null,(state_9749[(4)])));

return statearr_10013;
})();
var state_9749__$1 = (function (){var statearr_10014 = state_9749;
(statearr_10014[(93)] = inst_9374);

return statearr_10014;
})();
var statearr_10015_11391 = state_9749__$1;
(statearr_10015_11391[(2)] = inst_9354);

(statearr_10015_11391[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (121))){
var inst_9534 = (state_9749[(89)]);
var inst_9541 = (function(){throw inst_9534})();
var state_9749__$1 = state_9749;
var statearr_10016_11392 = state_9749__$1;
(statearr_10016_11392[(2)] = inst_9541);

(statearr_10016_11392[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (153))){
var inst_9681 = (state_9749[(94)]);
var inst_9681__$1 = (state_9749[(2)]);
var inst_9682 = (inst_9681__$1 instanceof cljs.core.ExceptionInfo);
var inst_9683 = cljs.core.ex_data.call(null,inst_9681__$1);
var inst_9684 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9683);
var inst_9685 = cljs.core._EQ_.call(null,inst_9684,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9686 = ((inst_9682) && (inst_9685));
var state_9749__$1 = (function (){var statearr_10017 = state_9749;
(statearr_10017[(94)] = inst_9681__$1);

return statearr_10017;
})();
if(cljs.core.truth_(inst_9686)){
var statearr_10018_11393 = state_9749__$1;
(statearr_10018_11393[(1)] = (154));

} else {
var statearr_10019_11394 = state_9749__$1;
(statearr_10019_11394[(1)] = (155));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (26))){
var inst_9051 = (state_9749[(34)]);
var inst_9053 = cljs.core.chunked_seq_QMARK_.call(null,inst_9051);
var state_9749__$1 = state_9749;
if(inst_9053){
var statearr_10020_11395 = state_9749__$1;
(statearr_10020_11395[(1)] = (29));

} else {
var statearr_10021_11396 = state_9749__$1;
(statearr_10021_11396[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (58))){
var inst_9214 = (state_9749[(8)]);
var inst_9213 = (state_9749[(11)]);
var inst_9216 = (inst_9214 < inst_9213);
var inst_9217 = inst_9216;
var state_9749__$1 = state_9749;
if(cljs.core.truth_(inst_9217)){
var statearr_10022_11397 = state_9749__$1;
(statearr_10022_11397[(1)] = (60));

} else {
var statearr_10023_11398 = state_9749__$1;
(statearr_10023_11398[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (90))){
var inst_9381 = (state_9749[(95)]);
var inst_9381__$1 = (state_9749[(2)]);
var inst_9382 = (inst_9381__$1 instanceof cljs.core.ExceptionInfo);
var inst_9383 = cljs.core.ex_data.call(null,inst_9381__$1);
var inst_9384 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9383);
var inst_9385 = cljs.core._EQ_.call(null,inst_9384,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9386 = ((inst_9382) && (inst_9385));
var state_9749__$1 = (function (){var statearr_10024 = state_9749;
(statearr_10024[(95)] = inst_9381__$1);

return statearr_10024;
})();
if(cljs.core.truth_(inst_9386)){
var statearr_10025_11399 = state_9749__$1;
(statearr_10025_11399[(1)] = (91));

} else {
var statearr_10026_11400 = state_9749__$1;
(statearr_10026_11400[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (122))){
var inst_9534 = (state_9749[(89)]);
var state_9749__$1 = state_9749;
var statearr_10027_11401 = state_9749__$1;
(statearr_10027_11401[(2)] = inst_9534);

(statearr_10027_11401[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (154))){
var inst_9681 = (state_9749[(94)]);
var inst_9688 = (function(){throw inst_9681})();
var state_9749__$1 = state_9749;
var statearr_10028_11402 = state_9749__$1;
(statearr_10028_11402[(2)] = inst_9688);

(statearr_10028_11402[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (27))){
var state_9749__$1 = state_9749;
var statearr_10029_11403 = state_9749__$1;
(statearr_10029_11403[(2)] = null);

(statearr_10029_11403[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (59))){
var inst_8931 = (state_9749[(15)]);
var inst_9166 = (state_9749[(56)]);
var inst_9339 = (state_9749[(2)]);
var inst_9340 = (function (){var tokens = inst_8931;
var rows = inst_9166;
return ((function (tokens,rows,inst_8931,inst_9166,inst_9339,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function (p1__51_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__51_SHARP_.call(null,"amount"),"DFX");
});
;})(tokens,rows,inst_8931,inst_9166,inst_9339,state_val_9750,c__19__auto__,___192__auto__,self____$1))
})();
var inst_9341 = cljs.core.filter.call(null,inst_9340,inst_9166);
var state_9749__$1 = (function (){var statearr_10030 = state_9749;
(statearr_10030[(96)] = inst_9339);

(statearr_10030[(80)] = inst_9341);

return statearr_10030;
})();
var statearr_10031_11404 = state_9749__$1;
(statearr_10031_11404[(2)] = null);

(statearr_10031_11404[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (91))){
var inst_9381 = (state_9749[(95)]);
var inst_9388 = (function(){throw inst_9381})();
var state_9749__$1 = state_9749;
var statearr_10032_11405 = state_9749__$1;
(statearr_10032_11405[(2)] = inst_9388);

(statearr_10032_11405[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (123))){
var inst_9504 = (state_9749[(66)]);
var inst_9544 = (state_9749[(2)]);
var inst_9545 = cljs.core.next.call(null,inst_9504);
var inst_9461 = inst_9545;
var inst_9462 = null;
var inst_9463 = (0);
var inst_9464 = (0);
var state_9749__$1 = (function (){var statearr_10033 = state_9749;
(statearr_10033[(97)] = inst_9544);

(statearr_10033[(49)] = inst_9461);

(statearr_10033[(50)] = inst_9462);

(statearr_10033[(51)] = inst_9463);

(statearr_10033[(52)] = inst_9464);

return statearr_10033;
})();
var statearr_10034_11406 = state_9749__$1;
(statearr_10034_11406[(2)] = null);

(statearr_10034_11406[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (155))){
var inst_9681 = (state_9749[(94)]);
var state_9749__$1 = state_9749;
var statearr_10035_11407 = state_9749__$1;
(statearr_10035_11407[(2)] = inst_9681);

(statearr_10035_11407[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (28))){
var inst_9128 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_10036_11408 = state_9749__$1;
(statearr_10036_11408[(2)] = inst_9128);

(statearr_10036_11408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (60))){
var inst_9212 = (state_9749[(10)]);
var inst_9214 = (state_9749[(8)]);
var inst_9223 = (state_9749[(98)]);
var inst_9213 = (state_9749[(11)]);
var inst_9224 = (state_9749[(99)]);
var inst_9166 = (state_9749[(56)]);
var inst_8931 = (state_9749[(15)]);
var inst_9211 = (state_9749[(9)]);
var inst_9222 = cljs.core._nth.call(null,inst_9212,inst_9214);
var inst_9223__$1 = cljs.core.nth.call(null,inst_9222,(0),null);
var inst_9224__$1 = cljs.core.nth.call(null,inst_9222,(1),null);
var inst_9225 = cljs.core.nth.call(null,inst_9222,(2),null);
var inst_9226 = (function (){var i__9208 = inst_9214;
var t = inst_9223__$1;
var vec__9219 = inst_9222;
var count__9207 = inst_9213;
var _ = inst_9225;
var supply = inst_9224__$1;
var chunk__9206 = inst_9212;
var rows = inst_9166;
var tokens = inst_8931;
var seq__9205 = inst_9211;
return ((function (i__9208,t,vec__9219,count__9207,_,supply,chunk__9206,rows,tokens,seq__9205,inst_9212,inst_9214,inst_9223,inst_9213,inst_9224,inst_9166,inst_8931,inst_9211,inst_9222,inst_9223__$1,inst_9224__$1,inst_9225,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function (p1__50_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__50_SHARP_.call(null,"amount"),t);
});
;})(i__9208,t,vec__9219,count__9207,_,supply,chunk__9206,rows,tokens,seq__9205,inst_9212,inst_9214,inst_9223,inst_9213,inst_9224,inst_9166,inst_8931,inst_9211,inst_9222,inst_9223__$1,inst_9224__$1,inst_9225,state_val_9750,c__19__auto__,___192__auto__,self____$1))
})();
var inst_9227 = cljs.core.filter.call(null,inst_9226,inst_9166);
var inst_9228 = cljs.core.first.call(null,inst_9227);
var state_9749__$1 = (function (){var statearr_10037 = state_9749;
(statearr_10037[(98)] = inst_9223__$1);

(statearr_10037[(99)] = inst_9224__$1);

(statearr_10037[(101)] = inst_9228);

return statearr_10037;
})();
var statearr_10038_11409 = state_9749__$1;
(statearr_10038_11409[(2)] = null);

(statearr_10038_11409[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (92))){
var inst_9381 = (state_9749[(95)]);
var state_9749__$1 = state_9749;
var statearr_10039_11410 = state_9749__$1;
(statearr_10039_11410[(2)] = inst_9381);

(statearr_10039_11410[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (124))){
var inst_9559 = (state_9749[(100)]);
var inst_9559__$1 = (state_9749[(2)]);
var inst_9560 = (inst_9559__$1 instanceof cljs.core.ExceptionInfo);
var inst_9561 = cljs.core.ex_data.call(null,inst_9559__$1);
var inst_9562 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9561);
var inst_9563 = cljs.core._EQ_.call(null,inst_9562,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9564 = ((inst_9560) && (inst_9563));
var state_9749__$1 = (function (){var statearr_10040 = state_9749;
(statearr_10040[(100)] = inst_9559__$1);

return statearr_10040;
})();
if(cljs.core.truth_(inst_9564)){
var statearr_10041_11411 = state_9749__$1;
(statearr_10041_11411[(1)] = (125));

} else {
var statearr_10042_11412 = state_9749__$1;
(statearr_10042_11412[(1)] = (126));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (156))){
var inst_9691 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_10043_11413 = state_9749__$1;
(statearr_10043_11413[(2)] = inst_9691);

(statearr_10043_11413[(1)] = (152));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (29))){
var inst_9051 = (state_9749[(34)]);
var inst_9055 = cljs.core.chunk_first.call(null,inst_9051);
var inst_9056 = cljs.core.chunk_rest.call(null,inst_9051);
var inst_9057 = cljs.core.count.call(null,inst_9055);
var inst_8978 = inst_9056;
var inst_8979 = inst_9055;
var inst_8980 = inst_9057;
var inst_8981 = (0);
var state_9749__$1 = (function (){var statearr_10044 = state_9749;
(statearr_10044[(39)] = inst_8978);

(statearr_10044[(40)] = inst_8979);

(statearr_10044[(41)] = inst_8980);

(statearr_10044[(42)] = inst_8981);

return statearr_10044;
})();
var statearr_10045_11414 = state_9749__$1;
(statearr_10045_11414[(2)] = null);

(statearr_10045_11414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (61))){
var inst_9211 = (state_9749[(9)]);
var inst_9271 = (state_9749[(44)]);
var inst_9271__$1 = cljs.core.seq.call(null,inst_9211);
var state_9749__$1 = (function (){var statearr_10046 = state_9749;
(statearr_10046[(44)] = inst_9271__$1);

return statearr_10046;
})();
if(inst_9271__$1){
var statearr_10047_11415 = state_9749__$1;
(statearr_10047_11415[(1)] = (70));

} else {
var statearr_10048_11416 = state_9749__$1;
(statearr_10048_11416[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (93))){
var inst_8931 = (state_9749[(15)]);
var inst_9396 = (state_9749[(102)]);
var inst_9397 = (state_9749[(103)]);
var inst_9391 = (state_9749[(2)]);
var inst_9395 = cljs.core.last.call(null,inst_8931);
var inst_9396__$1 = cljs.core.nth.call(null,inst_9395,(0),null);
var inst_9397__$1 = cljs.core.nth.call(null,inst_9395,(1),null);
var inst_9398 = cljs.core.nth.call(null,inst_9395,(2),null);
var inst_9399 = (function (){var tokens = inst_8931;
var rows = inst_9391;
var vec__9392 = inst_9395;
var t = inst_9396__$1;
var supply = inst_9397__$1;
var _ = inst_9398;
return ((function (tokens,rows,vec__9392,t,supply,_,inst_8931,inst_9396,inst_9397,inst_9391,inst_9395,inst_9396__$1,inst_9397__$1,inst_9398,state_val_9750,c__19__auto__,___192__auto__,self____$1){
return (function (p1__52_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__52_SHARP_.call(null,"balance"),t);
});
;})(tokens,rows,vec__9392,t,supply,_,inst_8931,inst_9396,inst_9397,inst_9391,inst_9395,inst_9396__$1,inst_9397__$1,inst_9398,state_val_9750,c__19__auto__,___192__auto__,self____$1))
})();
var inst_9400 = cljs.core.filter.call(null,inst_9399,inst_9391);
var inst_9401 = cljs.core.first.call(null,inst_9400);
var state_9749__$1 = (function (){var statearr_10049 = state_9749;
(statearr_10049[(102)] = inst_9396__$1);

(statearr_10049[(103)] = inst_9397__$1);

(statearr_10049[(105)] = inst_9401);

return statearr_10049;
})();
var statearr_10050_11417 = state_9749__$1;
(statearr_10050_11417[(2)] = null);

(statearr_10050_11417[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (125))){
var inst_9559 = (state_9749[(100)]);
var inst_9566 = (function(){throw inst_9559})();
var state_9749__$1 = state_9749;
var statearr_10051_11418 = state_9749__$1;
(statearr_10051_11418[(2)] = inst_9566);

(statearr_10051_11418[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (157))){
var inst_9707 = (state_9749[(104)]);
var inst_9707__$1 = (state_9749[(2)]);
var inst_9708 = (inst_9707__$1 instanceof cljs.core.ExceptionInfo);
var inst_9709 = cljs.core.ex_data.call(null,inst_9707__$1);
var inst_9710 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9709);
var inst_9711 = cljs.core._EQ_.call(null,inst_9710,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9712 = ((inst_9708) && (inst_9711));
var state_9749__$1 = (function (){var statearr_10052 = state_9749;
(statearr_10052[(104)] = inst_9707__$1);

return statearr_10052;
})();
if(cljs.core.truth_(inst_9712)){
var statearr_10053_11419 = state_9749__$1;
(statearr_10053_11419[(1)] = (158));

} else {
var statearr_10054_11420 = state_9749__$1;
(statearr_10054_11420[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (30))){
var inst_9051 = (state_9749[(34)]);
var inst_9063 = cljs.core.first.call(null,inst_9051);
var inst_9064 = cljs.core.nth.call(null,inst_9063,(0),null);
var inst_9065 = cljs.core.nth.call(null,inst_9063,(1),null);
var inst_9066 = cljs.core.nth.call(null,inst_9063,(2),null);
var inst_9067 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,inst_9064,"stat");
var inst_9068 = cljs.core.async.interop.p__GT_c.call(null,inst_9067);
var state_9749__$1 = (function (){var statearr_10055 = state_9749;
(statearr_10055[(106)] = inst_9065);

(statearr_10055[(27)] = inst_9066);

return statearr_10055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(32),inst_9068);
} else {
if((state_val_9750 === (62))){
var inst_9337 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_10056_11421 = state_9749__$1;
(statearr_10056_11421[(2)] = inst_9337);

(statearr_10056_11421[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (94))){
var inst_9401 = (state_9749[(105)]);
var inst_9397 = (state_9749[(103)]);
var inst_9396 = (state_9749[(102)]);
var inst_9416 = (state_9749[(19)]);
var inst_9417 = (state_9749[(30)]);
var _ = (function (){var statearr_10057 = state_9749;
(statearr_10057[(4)] = cljs.core.cons.call(null,(97),(state_9749[(4)])));

return statearr_10057;
})();
var inst_9413 = cljs.core.get.call(null,inst_9401,"balance");
var inst_9414 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9397)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9396)].join('');
var inst_9415 = (new cljs.core.List(null,inst_9414,null,(1),null));
var inst_9416__$1 = (new cljs.core.List(null,inst_9413,inst_9415,(2),null));
var inst_9417__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_9416__$1);
var state_9749__$1 = (function (){var statearr_10058 = state_9749;
(statearr_10058[(19)] = inst_9416__$1);

(statearr_10058[(30)] = inst_9417__$1);

return statearr_10058;
})();
if(cljs.core.truth_(inst_9417__$1)){
var statearr_10059_11422 = state_9749__$1;
(statearr_10059_11422[(1)] = (98));

} else {
var statearr_10060_11423 = state_9749__$1;
(statearr_10060_11423[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (126))){
var inst_9559 = (state_9749[(100)]);
var state_9749__$1 = state_9749;
var statearr_10061_11424 = state_9749__$1;
(statearr_10061_11424[(2)] = inst_9559);

(statearr_10061_11424[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (158))){
var inst_9707 = (state_9749[(104)]);
var inst_9714 = (function(){throw inst_9707})();
var state_9749__$1 = state_9749;
var statearr_10062_11425 = state_9749__$1;
(statearr_10062_11425[(2)] = inst_9714);

(statearr_10062_11425[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (31))){
var inst_9125 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_10063_11426 = state_9749__$1;
(statearr_10063_11426[(2)] = inst_9125);

(statearr_10063_11426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (63))){
var inst_9228 = (state_9749[(101)]);
var inst_9224 = (state_9749[(99)]);
var inst_9223 = (state_9749[(98)]);
var inst_9243 = (state_9749[(24)]);
var inst_9244 = (state_9749[(36)]);
var _ = (function (){var statearr_10064 = state_9749;
(statearr_10064[(4)] = cljs.core.cons.call(null,(66),(state_9749[(4)])));

return statearr_10064;
})();
var inst_9240 = cljs.core.get.call(null,inst_9228,"amount");
var inst_9241 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9224)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9223)].join('');
var inst_9242 = (new cljs.core.List(null,inst_9241,null,(1),null));
var inst_9243__$1 = (new cljs.core.List(null,inst_9240,inst_9242,(2),null));
var inst_9244__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_9243__$1);
var state_9749__$1 = (function (){var statearr_10065 = state_9749;
(statearr_10065[(24)] = inst_9243__$1);

(statearr_10065[(36)] = inst_9244__$1);

return statearr_10065;
})();
if(cljs.core.truth_(inst_9244__$1)){
var statearr_10066_11427 = state_9749__$1;
(statearr_10066_11427[(1)] = (67));

} else {
var statearr_10067_11428 = state_9749__$1;
(statearr_10067_11428[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (95))){
var inst_9440 = (state_9749[(2)]);
var inst_9441 = e2e.util.wait.call(null,(1000));
var inst_9442 = cljs.core.async.interop.p__GT_c.call(null,inst_9441);
var state_9749__$1 = (function (){var statearr_10068 = state_9749;
(statearr_10068[(107)] = inst_9440);

return statearr_10068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(101),inst_9442);
} else {
if((state_val_9750 === (127))){
var inst_8931 = (state_9749[(15)]);
var inst_9569 = (state_9749[(2)]);
var inst_9574 = cljs.core.take.call(null,(3),inst_8931);
var inst_9575 = cljs.core.seq.call(null,inst_9574);
var inst_9576 = inst_9575;
var inst_9577 = null;
var inst_9578 = (0);
var inst_9579 = (0);
var state_9749__$1 = (function (){var statearr_10069 = state_9749;
(statearr_10069[(108)] = inst_9569);

(statearr_10069[(25)] = inst_9576);

(statearr_10069[(20)] = inst_9577);

(statearr_10069[(14)] = inst_9578);

(statearr_10069[(13)] = inst_9579);

return statearr_10069;
})();
var statearr_10070_11429 = state_9749__$1;
(statearr_10070_11429[(2)] = null);

(statearr_10070_11429[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9750 === (159))){
var inst_9707 = (state_9749[(104)]);
var state_9749__$1 = state_9749;
var statearr_10071_11430 = state_9749__$1;
(statearr_10071_11430[(2)] = inst_9707);

(statearr_10071_11430[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$stake$state_machine__15__auto__ = null;
var e2e$stake$state_machine__15__auto____0 = (function (){
var statearr_10072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10072[(0)] = e2e$stake$state_machine__15__auto__);

(statearr_10072[(1)] = (1));

return statearr_10072;
});
var e2e$stake$state_machine__15__auto____1 = (function (state_9749){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_9749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e10073){var ex__18__auto__ = e10073;
var statearr_10074_11431 = state_9749;
(statearr_10074_11431[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_9749[(4)]))){
var statearr_10075_11432 = state_9749;
(statearr_10075_11432[(1)] = cljs.core.first.call(null,(state_9749[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__11433 = state_9749;
state_9749 = G__11433;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$stake$state_machine__15__auto__ = function(state_9749){
switch(arguments.length){
case 0:
return e2e$stake$state_machine__15__auto____0.call(this);
case 1:
return e2e$stake$state_machine__15__auto____1.call(this,state_9749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$stake$state_machine__15__auto____0;
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$stake$state_machine__15__auto____1;
return e2e$stake$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_10076 = f__20__auto__.call(null);
(statearr_10076[(6)] = c__19__auto__);

return statearr_10076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.stake.t_e2e$stake8913.prototype.apply = (function (self__,args8916){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8916)));
});

e2e.stake.t_e2e$stake8913.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_10909){
var state_val_10910 = (state_10909[(1)]);
if((state_val_10910 === (32))){
var inst_10230 = (state_10909[(7)]);
var inst_10230__$1 = (state_10909[(2)]);
var inst_10231 = (inst_10230__$1 instanceof cljs.core.ExceptionInfo);
var inst_10232 = cljs.core.ex_data.call(null,inst_10230__$1);
var inst_10233 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10232);
var inst_10234 = cljs.core._EQ_.call(null,inst_10233,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10235 = ((inst_10231) && (inst_10234));
var state_10909__$1 = (function (){var statearr_10914 = state_10909;
(statearr_10914[(7)] = inst_10230__$1);

return statearr_10914;
})();
if(cljs.core.truth_(inst_10235)){
var statearr_10915_11434 = state_10909__$1;
(statearr_10915_11434[(1)] = (33));

} else {
var statearr_10916_11435 = state_10909__$1;
(statearr_10916_11435[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (64))){
var inst_10374 = (state_10909[(8)]);
var inst_10371 = (state_10909[(9)]);
var inst_10372 = (state_10909[(10)]);
var inst_10373 = (state_10909[(11)]);
var inst_10427 = (state_10909[(2)]);
var inst_10428 = (inst_10374 + (1));
var tmp10911 = inst_10371;
var tmp10912 = inst_10372;
var tmp10913 = inst_10373;
var inst_10371__$1 = tmp10911;
var inst_10372__$1 = tmp10912;
var inst_10373__$1 = tmp10913;
var inst_10374__$1 = inst_10428;
var state_10909__$1 = (function (){var statearr_10917 = state_10909;
(statearr_10917[(12)] = inst_10427);

(statearr_10917[(9)] = inst_10371__$1);

(statearr_10917[(10)] = inst_10372__$1);

(statearr_10917[(11)] = inst_10373__$1);

(statearr_10917[(8)] = inst_10374__$1);

return statearr_10917;
})();
var statearr_10918_11436 = state_10909__$1;
(statearr_10918_11436[(2)] = null);

(statearr_10918_11436[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (96))){
var inst_10562 = (state_10909[(2)]);
var inst_10563 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10564 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"balance"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10565 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"stake contract receives unstakable tokens",inst_10564,inst_10562];
var inst_10566 = cljs.core.PersistentHashMap.fromArrays(inst_10563,inst_10565);
var inst_10567 = cljs.test.do_report.call(null,inst_10566);
var state_10909__$1 = state_10909;
var statearr_10919_11437 = state_10909__$1;
(statearr_10919_11437[(2)] = inst_10567);

(statearr_10919_11437[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (128))){
var inst_10739 = (state_10909[(13)]);
var inst_10738 = (state_10909[(14)]);
var inst_10741 = (inst_10739 < inst_10738);
var inst_10742 = inst_10741;
var state_10909__$1 = state_10909;
if(cljs.core.truth_(inst_10742)){
var statearr_10920_11438 = state_10909__$1;
(statearr_10920_11438[(1)] = (130));

} else {
var statearr_10921_11439 = state_10909__$1;
(statearr_10921_11439[(1)] = (131));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (160))){
var inst_10877 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_10922_11440 = state_10909__$1;
(statearr_10922_11440[(2)] = inst_10877);

(statearr_10922_11440[(1)] = (152));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (1))){
var inst_10091 = (state_10909[(15)]);
var inst_10077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10079 = ["AFX","200.0000",(1)];
var inst_10080 = (new cljs.core.PersistentVector(null,(3),(5),inst_10078,inst_10079,null));
var inst_10081 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10082 = ["BFX","650000000.0000",(5)];
var inst_10083 = (new cljs.core.PersistentVector(null,(3),(5),inst_10081,inst_10082,null));
var inst_10084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10085 = ["CFX","10200000000.0000",(10)];
var inst_10086 = (new cljs.core.PersistentVector(null,(3),(5),inst_10084,inst_10085,null));
var inst_10087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10088 = ["DFX","382829842.0000",null];
var inst_10089 = (new cljs.core.PersistentVector(null,(3),(5),inst_10087,inst_10088,null));
var inst_10090 = [inst_10080,inst_10083,inst_10086,inst_10089];
var inst_10091__$1 = (new cljs.core.PersistentVector(null,(4),(5),inst_10077,inst_10090,null));
var inst_10096 = (function (){var tokens = inst_10091__$1;
return ((function (tokens,inst_10091,inst_10077,inst_10078,inst_10079,inst_10080,inst_10081,inst_10082,inst_10083,inst_10084,inst_10085,inst_10086,inst_10087,inst_10088,inst_10089,inst_10090,inst_10091__$1,state_val_10910,c__19__auto__,___192__auto__){
return (function e2e$stake$iter__10092(s__10093){
return (new cljs.core.LazySeq(null,((function (tokens,inst_10091,inst_10077,inst_10078,inst_10079,inst_10080,inst_10081,inst_10082,inst_10083,inst_10084,inst_10085,inst_10086,inst_10087,inst_10088,inst_10089,inst_10090,inst_10091__$1,state_val_10910,c__19__auto__,___192__auto__){
return (function (){
var s__10093__$1 = s__10093;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__10093__$1);
if(temp__9015__auto__){
var s__10093__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10093__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__10093__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__10095 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__10094 = (0);
while(true){
if((i__10094 < size__9991__auto__)){
var vec__10923 = cljs.core._nth.call(null,c__9990__auto__,i__10094);
var seq__10924 = cljs.core.seq.call(null,vec__10923);
var first__10925 = cljs.core.first.call(null,seq__10924);
var seq__10924__$1 = cljs.core.next.call(null,seq__10924);
var t = first__10925;
var first__10925__$1 = cljs.core.first.call(null,seq__10924__$1);
var seq__10924__$2 = cljs.core.next.call(null,seq__10924__$1);
var supply = first__10925__$1;
var _ = seq__10924__$2;
cljs.core.chunk_append.call(null,b__10095,(function (){var max_supply = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454)),max_supply], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.token_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"issue",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),""], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)], null)], null));
})());

var G__11441 = (i__10094 + (1));
i__10094 = G__11441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10095),e2e$stake$iter__10092.call(null,cljs.core.chunk_rest.call(null,s__10093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10095),null);
}
} else {
var vec__10926 = cljs.core.first.call(null,s__10093__$2);
var seq__10927 = cljs.core.seq.call(null,vec__10926);
var first__10928 = cljs.core.first.call(null,seq__10927);
var seq__10927__$1 = cljs.core.next.call(null,seq__10927);
var t = first__10928;
var first__10928__$1 = cljs.core.first.call(null,seq__10927__$1);
var seq__10927__$2 = cljs.core.next.call(null,seq__10927__$1);
var supply = first__10928__$1;
var _ = seq__10927__$2;
return cljs.core.cons.call(null,(function (){var max_supply = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454)),max_supply], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.token_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.token_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"issue",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),""], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)], null)], null));
})(),e2e$stake$iter__10092.call(null,cljs.core.rest.call(null,s__10093__$2)));
}
} else {
return null;
}
break;
}
});})(tokens,inst_10091,inst_10077,inst_10078,inst_10079,inst_10080,inst_10081,inst_10082,inst_10083,inst_10084,inst_10085,inst_10086,inst_10087,inst_10088,inst_10089,inst_10090,inst_10091__$1,state_val_10910,c__19__auto__,___192__auto__))
,null,null));
});
;})(tokens,inst_10091,inst_10077,inst_10078,inst_10079,inst_10080,inst_10081,inst_10082,inst_10083,inst_10084,inst_10085,inst_10086,inst_10087,inst_10088,inst_10089,inst_10090,inst_10091__$1,state_val_10910,c__19__auto__,___192__auto__))
})();
var inst_10097 = inst_10096.call(null,inst_10091__$1);
var inst_10098 = cljs.core.apply.call(null,e2e.util.p_all,inst_10097);
var inst_10099 = cljs.core.async.interop.p__GT_c.call(null,inst_10098);
var state_10909__$1 = (function (){var statearr_10929 = state_10909;
(statearr_10929[(15)] = inst_10091__$1);

return statearr_10929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(2),inst_10099);
} else {
if((state_val_10910 === (33))){
var inst_10230 = (state_10909[(7)]);
var inst_10237 = (function(){throw inst_10230})();
var state_10909__$1 = state_10909;
var statearr_10931_11442 = state_10909__$1;
(statearr_10931_11442[(2)] = inst_10237);

(statearr_10931_11442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (65))){
var inst_10389 = (state_10909[(2)]);
var inst_10390 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10391 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10392 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"the full supply of tokens can be staked",inst_10391,inst_10389];
var inst_10393 = cljs.core.PersistentHashMap.fromArrays(inst_10390,inst_10392);
var inst_10394 = cljs.test.do_report.call(null,inst_10393);
var state_10909__$1 = state_10909;
var statearr_10932_11443 = state_10909__$1;
(statearr_10932_11443[(2)] = inst_10394);

(statearr_10932_11443[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (97))){
var _ = (function (){var statearr_10933 = state_10909;
(statearr_10933[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_10933;
})();
var state_10909__$1 = state_10909;
var ex10930 = (state_10909__$1[(2)]);
var statearr_10934_11444 = state_10909__$1;
(statearr_10934_11444[(5)] = ex10930);


var statearr_10935_11445 = state_10909__$1;
(statearr_10935_11445[(1)] = (96));

(statearr_10935_11445[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (129))){
var inst_10890 = (state_10909[(2)]);
var inst_10891 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"unstake");
var inst_10892 = cljs.core.async.interop.p__GT_c.call(null,inst_10891);
var state_10909__$1 = (function (){var statearr_10936 = state_10909;
(statearr_10936[(16)] = inst_10890);

return statearr_10936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(161),inst_10892);
} else {
if((state_val_10910 === (161))){
var inst_10894 = (state_10909[(17)]);
var inst_10894__$1 = (state_10909[(2)]);
var inst_10895 = (inst_10894__$1 instanceof cljs.core.ExceptionInfo);
var inst_10896 = cljs.core.ex_data.call(null,inst_10894__$1);
var inst_10897 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10896);
var inst_10898 = cljs.core._EQ_.call(null,inst_10897,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10899 = ((inst_10895) && (inst_10898));
var state_10909__$1 = (function (){var statearr_10937 = state_10909;
(statearr_10937[(17)] = inst_10894__$1);

return statearr_10937;
})();
if(cljs.core.truth_(inst_10899)){
var statearr_10938_11446 = state_10909__$1;
(statearr_10938_11446[(1)] = (162));

} else {
var statearr_10939_11447 = state_10909__$1;
(statearr_10939_11447[(1)] = (163));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (2))){
var inst_10101 = (state_10909[(18)]);
var inst_10101__$1 = (state_10909[(2)]);
var inst_10102 = (inst_10101__$1 instanceof cljs.core.ExceptionInfo);
var inst_10103 = cljs.core.ex_data.call(null,inst_10101__$1);
var inst_10104 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10103);
var inst_10105 = cljs.core._EQ_.call(null,inst_10104,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10106 = ((inst_10102) && (inst_10105));
var state_10909__$1 = (function (){var statearr_10941 = state_10909;
(statearr_10941[(18)] = inst_10101__$1);

return statearr_10941;
})();
if(cljs.core.truth_(inst_10106)){
var statearr_10942_11448 = state_10909__$1;
(statearr_10942_11448[(1)] = (3));

} else {
var statearr_10943_11449 = state_10909__$1;
(statearr_10943_11449[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (34))){
var inst_10230 = (state_10909[(7)]);
var state_10909__$1 = state_10909;
var statearr_10944_11450 = state_10909__$1;
(statearr_10944_11450[(2)] = inst_10230);

(statearr_10944_11450[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (66))){
var _ = (function (){var statearr_10945 = state_10909;
(statearr_10945[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_10945;
})();
var state_10909__$1 = state_10909;
var ex10940 = (state_10909__$1[(2)]);
var statearr_10946_11451 = state_10909__$1;
(statearr_10946_11451[(5)] = ex10940);


var statearr_10947_11452 = state_10909__$1;
(statearr_10947_11452[(1)] = (65));

(statearr_10947_11452[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (98))){
var inst_10576 = (state_10909[(19)]);
var inst_10579 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10580 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"balance"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10581 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10576);
var inst_10582 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"stake contract receives unstakable tokens",inst_10580,inst_10581];
var inst_10583 = cljs.core.PersistentHashMap.fromArrays(inst_10579,inst_10582);
var inst_10584 = cljs.test.do_report.call(null,inst_10583);
var state_10909__$1 = state_10909;
var statearr_10948_11453 = state_10909__$1;
(statearr_10948_11453[(2)] = inst_10584);

(statearr_10948_11453[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (130))){
var inst_10737 = (state_10909[(20)]);
var inst_10739 = (state_10909[(13)]);
var inst_10747 = cljs.core._nth.call(null,inst_10737,inst_10739);
var inst_10748 = cljs.core.nth.call(null,inst_10747,(0),null);
var inst_10749 = cljs.core.nth.call(null,inst_10747,(1),null);
var inst_10750 = cljs.core.nth.call(null,inst_10747,(2),null);
var inst_10751 = (inst_10750 <= (5));
var state_10909__$1 = (function (){var statearr_10949 = state_10909;
(statearr_10949[(21)] = inst_10748);

(statearr_10949[(22)] = inst_10749);

return statearr_10949;
})();
if(cljs.core.truth_(inst_10751)){
var statearr_10950_11454 = state_10909__$1;
(statearr_10950_11454[(1)] = (133));

} else {
var statearr_10951_11455 = state_10909__$1;
(statearr_10951_11455[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (162))){
var inst_10894 = (state_10909[(17)]);
var inst_10901 = (function(){throw inst_10894})();
var state_10909__$1 = state_10909;
var statearr_10952_11456 = state_10909__$1;
(statearr_10952_11456[(2)] = inst_10901);

(statearr_10952_11456[(1)] = (164));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (3))){
var inst_10101 = (state_10909[(18)]);
var inst_10108 = (function(){throw inst_10101})();
var state_10909__$1 = state_10909;
var statearr_10953_11457 = state_10909__$1;
(statearr_10953_11457[(2)] = inst_10108);

(statearr_10953_11457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (35))){
var inst_10240 = (state_10909[(2)]);
var state_10909__$1 = (function (){var statearr_10954 = state_10909;
(statearr_10954[(23)] = inst_10240);

return statearr_10954;
})();
var statearr_10955_11458 = state_10909__$1;
(statearr_10955_11458[(2)] = null);

(statearr_10955_11458[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (67))){
var inst_10403 = (state_10909[(24)]);
var inst_10406 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10407 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10408 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10403);
var inst_10409 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"the full supply of tokens can be staked",inst_10407,inst_10408];
var inst_10410 = cljs.core.PersistentHashMap.fromArrays(inst_10406,inst_10409);
var inst_10411 = cljs.test.do_report.call(null,inst_10410);
var state_10909__$1 = state_10909;
var statearr_10956_11459 = state_10909__$1;
(statearr_10956_11459[(2)] = inst_10411);

(statearr_10956_11459[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (99))){
var inst_10576 = (state_10909[(19)]);
var inst_10586 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10587 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"balance"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10588 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_10589 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_10590 = cljs.core.cons.call(null,inst_10589,inst_10576);
var inst_10591 = (new cljs.core.List(null,inst_10590,null,(1),null));
var inst_10592 = (new cljs.core.List(null,inst_10588,inst_10591,(2),null));
var inst_10593 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"stake contract receives unstakable tokens",inst_10587,inst_10592];
var inst_10594 = cljs.core.PersistentHashMap.fromArrays(inst_10586,inst_10593);
var inst_10595 = cljs.test.do_report.call(null,inst_10594);
var state_10909__$1 = state_10909;
var statearr_10957_11460 = state_10909__$1;
(statearr_10957_11460[(2)] = inst_10595);

(statearr_10957_11460[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (131))){
var inst_10736 = (state_10909[(25)]);
var inst_10809 = (state_10909[(26)]);
var inst_10809__$1 = cljs.core.seq.call(null,inst_10736);
var state_10909__$1 = (function (){var statearr_10958 = state_10909;
(statearr_10958[(26)] = inst_10809__$1);

return statearr_10958;
})();
if(inst_10809__$1){
var statearr_10959_11461 = state_10909__$1;
(statearr_10959_11461[(1)] = (144));

} else {
var statearr_10960_11462 = state_10909__$1;
(statearr_10960_11462[(1)] = (145));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (163))){
var inst_10894 = (state_10909[(17)]);
var state_10909__$1 = state_10909;
var statearr_10961_11463 = state_10909__$1;
(statearr_10961_11463[(2)] = inst_10894);

(statearr_10961_11463[(1)] = (164));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (4))){
var inst_10101 = (state_10909[(18)]);
var state_10909__$1 = state_10909;
var statearr_10962_11464 = state_10909__$1;
(statearr_10962_11464[(2)] = inst_10101);

(statearr_10962_11464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (36))){
var inst_10240 = (state_10909[(23)]);
var inst_10226 = (state_10909[(27)]);
var inst_10257 = (state_10909[(28)]);
var inst_10258 = (state_10909[(29)]);
var _ = (function (){var statearr_10963 = state_10909;
(statearr_10963[(4)] = cljs.core.cons.call(null,(39),(state_10909[(4)])));

return statearr_10963;
})();
var inst_10252 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10253 = [(0),"unstake_delay_sec"];
var inst_10254 = (new cljs.core.PersistentVector(null,(2),(5),inst_10252,inst_10253,null));
var inst_10255 = cljs.core.get_in.call(null,inst_10240,inst_10254);
var inst_10256 = (new cljs.core.List(null,inst_10226,null,(1),null));
var inst_10257__$1 = (new cljs.core.List(null,inst_10255,inst_10256,(2),null));
var inst_10258__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10257__$1);
var state_10909__$1 = (function (){var statearr_10964 = state_10909;
(statearr_10964[(28)] = inst_10257__$1);

(statearr_10964[(29)] = inst_10258__$1);

return statearr_10964;
})();
if(cljs.core.truth_(inst_10258__$1)){
var statearr_10965_11465 = state_10909__$1;
(statearr_10965_11465[(1)] = (40));

} else {
var statearr_10966_11466 = state_10909__$1;
(statearr_10966_11466[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (68))){
var inst_10403 = (state_10909[(24)]);
var inst_10413 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10414 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10415 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_10416 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_10417 = cljs.core.cons.call(null,inst_10416,inst_10403);
var inst_10418 = (new cljs.core.List(null,inst_10417,null,(1),null));
var inst_10419 = (new cljs.core.List(null,inst_10415,inst_10418,(2),null));
var inst_10420 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"the full supply of tokens can be staked",inst_10414,inst_10419];
var inst_10421 = cljs.core.PersistentHashMap.fromArrays(inst_10413,inst_10420);
var inst_10422 = cljs.test.do_report.call(null,inst_10421);
var state_10909__$1 = state_10909;
var statearr_10967_11467 = state_10909__$1;
(statearr_10967_11467[(2)] = inst_10422);

(statearr_10967_11467[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (100))){
var inst_10577 = (state_10909[(30)]);
var inst_10597 = (state_10909[(2)]);
var _ = (function (){var statearr_10968 = state_10909;
(statearr_10968[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_10968;
})();
var state_10909__$1 = (function (){var statearr_10969 = state_10909;
(statearr_10969[(31)] = inst_10597);

return statearr_10969;
})();
var statearr_10970_11468 = state_10909__$1;
(statearr_10970_11468[(2)] = inst_10577);

(statearr_10970_11468[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (132))){
var inst_10888 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_10971_11469 = state_10909__$1;
(statearr_10971_11469[(2)] = inst_10888);

(statearr_10971_11469[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (164))){
var inst_10904 = (state_10909[(2)]);
var inst_10905 = cljs.core.count.call(null,inst_10904);
var inst_10906 = cljs.core._EQ_.call(null,inst_10905,(1));
var inst_10907 = done.call(null);
var state_10909__$1 = (function (){var statearr_10972 = state_10909;
(statearr_10972[(32)] = inst_10906);

return statearr_10972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10909__$1,inst_10907);
} else {
if((state_val_10910 === (5))){
var inst_10091 = (state_10909[(15)]);
var inst_10111 = (state_10909[(2)]);
var inst_10116 = (function (){var tokens = inst_10091;
return ((function (tokens,inst_10091,inst_10111,state_val_10910,c__19__auto__,___192__auto__){
return (function e2e$stake$iter__10112(s__10113){
return (new cljs.core.LazySeq(null,((function (tokens,inst_10091,inst_10111,state_val_10910,c__19__auto__,___192__auto__){
return (function (){
var s__10113__$1 = s__10113;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__10113__$1);
if(temp__9015__auto__){
var s__10113__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10113__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__10113__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__10115 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__10114 = (0);
while(true){
if((i__10114 < size__9991__auto__)){
var vec__10973 = cljs.core._nth.call(null,c__9990__auto__,i__10114);
var t = cljs.core.nth.call(null,vec__10973,(0),null);
var _ = cljs.core.nth.call(null,vec__10973,(1),null);
var unstake_delay = cljs.core.nth.call(null,vec__10973,(2),null);
cljs.core.chunk_append.call(null,b__10115,(function (){var sym = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),sym,new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),sym,new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),e2e.stake.token_acc,new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777)),unstake_delay], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"open",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),sym,new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),e2e.stake.owner_acc], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null)], null));
})());

var G__11470 = (i__10114 + (1));
i__10114 = G__11470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10115),e2e$stake$iter__10112.call(null,cljs.core.chunk_rest.call(null,s__10113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10115),null);
}
} else {
var vec__10976 = cljs.core.first.call(null,s__10113__$2);
var t = cljs.core.nth.call(null,vec__10976,(0),null);
var _ = cljs.core.nth.call(null,vec__10976,(1),null);
var unstake_delay = cljs.core.nth.call(null,vec__10976,(2),null);
return cljs.core.cons.call(null,(function (){var sym = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('');
return eos_cljs.core.transact.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"create",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stake_symbol","stake_symbol",(-950156504)),sym,new cljs.core.Keyword(null,"claim_symbol","claim_symbol",(1448832901)),sym,new cljs.core.Keyword(null,"token_contract","token_contract",(-2015594399)),e2e.stake.token_acc,new cljs.core.Keyword(null,"unstake_delay_sec","unstake_delay_sec",(41444777)),unstake_delay], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",(718006320)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"name","name",(1843675177)),"open",new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",(-392611939)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),sym,new cljs.core.Keyword(null,"ram_payer","ram_payer",(615861377)),e2e.stake.owner_acc], null),new cljs.core.Keyword(null,"authorization","authorization",(-166302136)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"owner"], null)], null)], null)], null));
})(),e2e$stake$iter__10112.call(null,cljs.core.rest.call(null,s__10113__$2)));
}
} else {
return null;
}
break;
}
});})(tokens,inst_10091,inst_10111,state_val_10910,c__19__auto__,___192__auto__))
,null,null));
});
;})(tokens,inst_10091,inst_10111,state_val_10910,c__19__auto__,___192__auto__))
})();
var inst_10117 = cljs.core.take.call(null,(3),inst_10091);
var inst_10118 = inst_10116.call(null,inst_10117);
var inst_10119 = cljs.core.apply.call(null,e2e.util.p_all,inst_10118);
var inst_10120 = cljs.core.async.interop.p__GT_c.call(null,inst_10119);
var state_10909__$1 = (function (){var statearr_10979 = state_10909;
(statearr_10979[(33)] = inst_10111);

return statearr_10979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(6),inst_10120);
} else {
if((state_val_10910 === (37))){
var inst_10211 = (state_10909[(34)]);
var inst_10281 = (state_10909[(2)]);
var inst_10282 = cljs.core.next.call(null,inst_10211);
var inst_10138 = inst_10282;
var inst_10139 = null;
var inst_10140 = (0);
var inst_10141 = (0);
var state_10909__$1 = (function (){var statearr_10980 = state_10909;
(statearr_10980[(35)] = inst_10281);

(statearr_10980[(39)] = inst_10138);

(statearr_10980[(40)] = inst_10139);

(statearr_10980[(41)] = inst_10140);

(statearr_10980[(42)] = inst_10141);

return statearr_10980;
})();
var statearr_10981_11471 = state_10909__$1;
(statearr_10981_11471[(2)] = null);

(statearr_10981_11471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (69))){
var inst_10404 = (state_10909[(36)]);
var inst_10424 = (state_10909[(2)]);
var _ = (function (){var statearr_10982 = state_10909;
(statearr_10982[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_10982;
})();
var state_10909__$1 = (function (){var statearr_10983 = state_10909;
(statearr_10983[(37)] = inst_10424);

return statearr_10983;
})();
var statearr_10984_11472 = state_10909__$1;
(statearr_10984_11472[(2)] = inst_10404);

(statearr_10984_11472[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (101))){
var inst_10604 = (state_10909[(38)]);
var inst_10604__$1 = (state_10909[(2)]);
var inst_10605 = (inst_10604__$1 instanceof cljs.core.ExceptionInfo);
var inst_10606 = cljs.core.ex_data.call(null,inst_10604__$1);
var inst_10607 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10606);
var inst_10608 = cljs.core._EQ_.call(null,inst_10607,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10609 = ((inst_10605) && (inst_10608));
var state_10909__$1 = (function (){var statearr_10985 = state_10909;
(statearr_10985[(38)] = inst_10604__$1);

return statearr_10985;
})();
if(cljs.core.truth_(inst_10609)){
var statearr_10986_11473 = state_10909__$1;
(statearr_10986_11473[(1)] = (102));

} else {
var statearr_10987_11474 = state_10909__$1;
(statearr_10987_11474[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (133))){
var inst_10748 = (state_10909[(21)]);
var inst_10753 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_10754 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10748)].join('');
var inst_10755 = [e2e.stake.owner_acc,inst_10754];
var inst_10756 = cljs.core.PersistentHashMap.fromArrays(inst_10753,inst_10755);
var inst_10757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10758 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_10759 = [e2e.stake.owner_acc,"active"];
var inst_10760 = cljs.core.PersistentHashMap.fromArrays(inst_10758,inst_10759);
var inst_10761 = [inst_10760];
var inst_10762 = (new cljs.core.PersistentVector(null,(1),(5),inst_10757,inst_10761,null));
var inst_10763 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_10756,inst_10762);
var inst_10764 = e2e.util.should_succeed.call(null,inst_10763,"can refund token with low unstake delay");
var inst_10765 = cljs.core.async.interop.p__GT_c.call(null,inst_10764);
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(136),inst_10765);
} else {
if((state_val_10910 === (6))){
var inst_10122 = (state_10909[(43)]);
var inst_10122__$1 = (state_10909[(2)]);
var inst_10123 = (inst_10122__$1 instanceof cljs.core.ExceptionInfo);
var inst_10124 = cljs.core.ex_data.call(null,inst_10122__$1);
var inst_10125 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10124);
var inst_10126 = cljs.core._EQ_.call(null,inst_10125,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10127 = ((inst_10123) && (inst_10126));
var state_10909__$1 = (function (){var statearr_10988 = state_10909;
(statearr_10988[(43)] = inst_10122__$1);

return statearr_10988;
})();
if(cljs.core.truth_(inst_10127)){
var statearr_10989_11475 = state_10909__$1;
(statearr_10989_11475[(1)] = (7));

} else {
var statearr_10990_11476 = state_10909__$1;
(statearr_10990_11476[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (38))){
var inst_10241 = (state_10909[(2)]);
var inst_10242 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10243 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_10244 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"multiple tokens can be created",inst_10243,inst_10241];
var inst_10245 = cljs.core.PersistentHashMap.fromArrays(inst_10242,inst_10244);
var inst_10246 = cljs.test.do_report.call(null,inst_10245);
var state_10909__$1 = state_10909;
var statearr_10991_11477 = state_10909__$1;
(statearr_10991_11477[(2)] = inst_10246);

(statearr_10991_11477[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (70))){
var inst_10431 = (state_10909[(44)]);
var inst_10433 = cljs.core.chunked_seq_QMARK_.call(null,inst_10431);
var state_10909__$1 = state_10909;
if(inst_10433){
var statearr_10992_11478 = state_10909__$1;
(statearr_10992_11478[(1)] = (73));

} else {
var statearr_10993_11479 = state_10909__$1;
(statearr_10993_11479[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (102))){
var inst_10604 = (state_10909[(38)]);
var inst_10611 = (function(){throw inst_10604})();
var state_10909__$1 = state_10909;
var statearr_10994_11480 = state_10909__$1;
(statearr_10994_11480[(2)] = inst_10611);

(statearr_10994_11480[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (134))){
var inst_10748 = (state_10909[(21)]);
var inst_10779 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_10780 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10748)].join('');
var inst_10781 = [e2e.stake.owner_acc,inst_10780];
var inst_10782 = cljs.core.PersistentHashMap.fromArrays(inst_10779,inst_10781);
var inst_10783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10784 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_10785 = [e2e.stake.owner_acc,"active"];
var inst_10786 = cljs.core.PersistentHashMap.fromArrays(inst_10784,inst_10785);
var inst_10787 = [inst_10786];
var inst_10788 = (new cljs.core.PersistentVector(null,(1),(5),inst_10783,inst_10787,null));
var inst_10789 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_10782,inst_10788);
var inst_10790 = e2e.util.should_fail_with.call(null,inst_10789,"unstake is still pending");
var inst_10791 = cljs.core.async.interop.p__GT_c.call(null,inst_10790);
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(140),inst_10791);
} else {
if((state_val_10910 === (7))){
var inst_10122 = (state_10909[(43)]);
var inst_10129 = (function(){throw inst_10122})();
var state_10909__$1 = state_10909;
var statearr_10996_11481 = state_10909__$1;
(statearr_10996_11481[(2)] = inst_10129);

(statearr_10996_11481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (39))){
var _ = (function (){var statearr_10997 = state_10909;
(statearr_10997[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_10997;
})();
var state_10909__$1 = state_10909;
var ex10995 = (state_10909__$1[(2)]);
var statearr_10998_11482 = state_10909__$1;
(statearr_10998_11482[(5)] = ex10995);


var statearr_10999_11483 = state_10909__$1;
(statearr_10999_11483[(1)] = (38));

(statearr_10999_11483[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (71))){
var state_10909__$1 = state_10909;
var statearr_11003_11484 = state_10909__$1;
(statearr_11003_11484[(2)] = null);

(statearr_11003_11484[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (103))){
var inst_10604 = (state_10909[(38)]);
var state_10909__$1 = state_10909;
var statearr_11004_11485 = state_10909__$1;
(statearr_11004_11485[(2)] = inst_10604);

(statearr_11004_11485[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (135))){
var inst_10739 = (state_10909[(13)]);
var inst_10736 = (state_10909[(25)]);
var inst_10737 = (state_10909[(20)]);
var inst_10738 = (state_10909[(14)]);
var inst_10805 = (state_10909[(2)]);
var inst_10806 = (inst_10739 + (1));
var tmp11000 = inst_10736;
var tmp11001 = inst_10737;
var tmp11002 = inst_10738;
var inst_10736__$1 = tmp11000;
var inst_10737__$1 = tmp11001;
var inst_10738__$1 = tmp11002;
var inst_10739__$1 = inst_10806;
var state_10909__$1 = (function (){var statearr_11005 = state_10909;
(statearr_11005[(45)] = inst_10805);

(statearr_11005[(25)] = inst_10736__$1);

(statearr_11005[(20)] = inst_10737__$1);

(statearr_11005[(14)] = inst_10738__$1);

(statearr_11005[(13)] = inst_10739__$1);

return statearr_11005;
})();
var statearr_11006_11486 = state_10909__$1;
(statearr_11006_11486[(2)] = null);

(statearr_11006_11486[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (8))){
var inst_10122 = (state_10909[(43)]);
var state_10909__$1 = state_10909;
var statearr_11007_11487 = state_10909__$1;
(statearr_11007_11487[(2)] = inst_10122);

(statearr_11007_11487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (40))){
var inst_10257 = (state_10909[(28)]);
var inst_10260 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10261 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_10262 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10257);
var inst_10263 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"multiple tokens can be created",inst_10261,inst_10262];
var inst_10264 = cljs.core.PersistentHashMap.fromArrays(inst_10260,inst_10263);
var inst_10265 = cljs.test.do_report.call(null,inst_10264);
var state_10909__$1 = state_10909;
var statearr_11008_11488 = state_10909__$1;
(statearr_11008_11488[(2)] = inst_10265);

(statearr_11008_11488[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (72))){
var inst_10495 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11009_11489 = state_10909__$1;
(statearr_11009_11489[(2)] = inst_10495);

(statearr_11009_11489[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (104))){
var inst_10091 = (state_10909[(15)]);
var inst_10614 = (state_10909[(2)]);
var inst_10619 = cljs.core.take.call(null,(3),inst_10091);
var inst_10620 = cljs.core.seq.call(null,inst_10619);
var inst_10621 = inst_10620;
var inst_10622 = null;
var inst_10623 = (0);
var inst_10624 = (0);
var state_10909__$1 = (function (){var statearr_11010 = state_10909;
(statearr_11010[(46)] = inst_10614);

(statearr_11010[(49)] = inst_10621);

(statearr_11010[(50)] = inst_10622);

(statearr_11010[(51)] = inst_10623);

(statearr_11010[(52)] = inst_10624);

return statearr_11010;
})();
var statearr_11011_11490 = state_10909__$1;
(statearr_11011_11490[(2)] = null);

(statearr_11011_11490[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (136))){
var inst_10767 = (state_10909[(47)]);
var inst_10767__$1 = (state_10909[(2)]);
var inst_10768 = (inst_10767__$1 instanceof cljs.core.ExceptionInfo);
var inst_10769 = cljs.core.ex_data.call(null,inst_10767__$1);
var inst_10770 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10769);
var inst_10771 = cljs.core._EQ_.call(null,inst_10770,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10772 = ((inst_10768) && (inst_10771));
var state_10909__$1 = (function (){var statearr_11012 = state_10909;
(statearr_11012[(47)] = inst_10767__$1);

return statearr_11012;
})();
if(cljs.core.truth_(inst_10772)){
var statearr_11013_11491 = state_10909__$1;
(statearr_11013_11491[(1)] = (137));

} else {
var statearr_11014_11492 = state_10909__$1;
(statearr_11014_11492[(1)] = (138));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (9))){
var inst_10091 = (state_10909[(15)]);
var inst_10132 = (state_10909[(2)]);
var inst_10137 = cljs.core.seq.call(null,inst_10091);
var inst_10138 = inst_10137;
var inst_10139 = null;
var inst_10140 = (0);
var inst_10141 = (0);
var state_10909__$1 = (function (){var statearr_11015 = state_10909;
(statearr_11015[(48)] = inst_10132);

(statearr_11015[(39)] = inst_10138);

(statearr_11015[(40)] = inst_10139);

(statearr_11015[(41)] = inst_10140);

(statearr_11015[(42)] = inst_10141);

return statearr_11015;
})();
var statearr_11016_11493 = state_10909__$1;
(statearr_11016_11493[(2)] = null);

(statearr_11016_11493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (41))){
var inst_10257 = (state_10909[(28)]);
var inst_10267 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10268 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_10269 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_10270 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_10271 = cljs.core.cons.call(null,inst_10270,inst_10257);
var inst_10272 = (new cljs.core.List(null,inst_10271,null,(1),null));
var inst_10273 = (new cljs.core.List(null,inst_10269,inst_10272,(2),null));
var inst_10274 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"multiple tokens can be created",inst_10268,inst_10273];
var inst_10275 = cljs.core.PersistentHashMap.fromArrays(inst_10267,inst_10274);
var inst_10276 = cljs.test.do_report.call(null,inst_10275);
var state_10909__$1 = state_10909;
var statearr_11017_11494 = state_10909__$1;
(statearr_11017_11494[(2)] = inst_10276);

(statearr_11017_11494[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (73))){
var inst_10431 = (state_10909[(44)]);
var inst_10435 = cljs.core.chunk_first.call(null,inst_10431);
var inst_10436 = cljs.core.chunk_rest.call(null,inst_10431);
var inst_10437 = cljs.core.count.call(null,inst_10435);
var inst_10371 = inst_10436;
var inst_10372 = inst_10435;
var inst_10373 = inst_10437;
var inst_10374 = (0);
var state_10909__$1 = (function (){var statearr_11018 = state_10909;
(statearr_11018[(9)] = inst_10371);

(statearr_11018[(10)] = inst_10372);

(statearr_11018[(11)] = inst_10373);

(statearr_11018[(8)] = inst_10374);

return statearr_11018;
})();
var statearr_11019_11495 = state_10909__$1;
(statearr_11019_11495[(2)] = null);

(statearr_11019_11495[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (105))){
var inst_10624 = (state_10909[(52)]);
var inst_10623 = (state_10909[(51)]);
var inst_10626 = (inst_10624 < inst_10623);
var inst_10627 = inst_10626;
var state_10909__$1 = state_10909;
if(cljs.core.truth_(inst_10627)){
var statearr_11020_11496 = state_10909__$1;
(statearr_11020_11496[(1)] = (107));

} else {
var statearr_11021_11497 = state_10909__$1;
(statearr_11021_11497[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (137))){
var inst_10767 = (state_10909[(47)]);
var inst_10774 = (function(){throw inst_10767})();
var state_10909__$1 = state_10909;
var statearr_11022_11498 = state_10909__$1;
(statearr_11022_11498[(2)] = inst_10774);

(statearr_11022_11498[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (10))){
var inst_10141 = (state_10909[(42)]);
var inst_10140 = (state_10909[(41)]);
var inst_10143 = (inst_10141 < inst_10140);
var inst_10144 = inst_10143;
var state_10909__$1 = state_10909;
if(cljs.core.truth_(inst_10144)){
var statearr_11023_11499 = state_10909__$1;
(statearr_11023_11499[(1)] = (12));

} else {
var statearr_11024_11500 = state_10909__$1;
(statearr_11024_11500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (42))){
var inst_10258 = (state_10909[(29)]);
var inst_10278 = (state_10909[(2)]);
var _ = (function (){var statearr_11025 = state_10909;
(statearr_11025[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11025;
})();
var state_10909__$1 = (function (){var statearr_11026 = state_10909;
(statearr_11026[(53)] = inst_10278);

return statearr_11026;
})();
var statearr_11027_11501 = state_10909__$1;
(statearr_11027_11501[(2)] = inst_10258);

(statearr_11027_11501[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (74))){
var inst_10431 = (state_10909[(44)]);
var inst_10444 = (state_10909[(54)]);
var inst_10372 = (state_10909[(10)]);
var inst_10374 = (state_10909[(8)]);
var inst_10445 = (state_10909[(55)]);
var inst_10373 = (state_10909[(11)]);
var inst_10326 = (state_10909[(56)]);
var inst_10091 = (state_10909[(15)]);
var inst_10443 = cljs.core.first.call(null,inst_10431);
var inst_10444__$1 = cljs.core.nth.call(null,inst_10443,(0),null);
var inst_10445__$1 = cljs.core.nth.call(null,inst_10443,(1),null);
var inst_10446 = cljs.core.nth.call(null,inst_10443,(2),null);
var inst_10447 = (function (){var t = inst_10444__$1;
var chunk__10366 = inst_10372;
var i__10368 = inst_10374;
var _ = inst_10446;
var seq__10365 = inst_10431;
var supply = inst_10445__$1;
var count__10367 = inst_10373;
var rows = inst_10326;
var temp__9015__auto__ = inst_10431;
var vec__10440 = inst_10443;
var tokens = inst_10091;
return ((function (t,chunk__10366,i__10368,_,seq__10365,supply,count__10367,rows,temp__9015__auto__,vec__10440,tokens,inst_10431,inst_10444,inst_10372,inst_10374,inst_10445,inst_10373,inst_10326,inst_10091,inst_10443,inst_10444__$1,inst_10445__$1,inst_10446,state_val_10910,c__19__auto__,___192__auto__){
return (function (p1__50_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__50_SHARP_.call(null,"amount"),t);
});
;})(t,chunk__10366,i__10368,_,seq__10365,supply,count__10367,rows,temp__9015__auto__,vec__10440,tokens,inst_10431,inst_10444,inst_10372,inst_10374,inst_10445,inst_10373,inst_10326,inst_10091,inst_10443,inst_10444__$1,inst_10445__$1,inst_10446,state_val_10910,c__19__auto__,___192__auto__))
})();
var inst_10448 = cljs.core.filter.call(null,inst_10447,inst_10326);
var inst_10449 = cljs.core.first.call(null,inst_10448);
var state_10909__$1 = (function (){var statearr_11028 = state_10909;
(statearr_11028[(54)] = inst_10444__$1);

(statearr_11028[(55)] = inst_10445__$1);

(statearr_11028[(58)] = inst_10449);

return statearr_11028;
})();
var statearr_11029_11502 = state_10909__$1;
(statearr_11029_11502[(2)] = null);

(statearr_11029_11502[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (106))){
var inst_10715 = (state_10909[(2)]);
var inst_10716 = e2e.util.wait.call(null,(5000));
var inst_10717 = cljs.core.async.interop.p__GT_c.call(null,inst_10716);
var state_10909__$1 = (function (){var statearr_11030 = state_10909;
(statearr_11030[(57)] = inst_10715);

return statearr_11030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(124),inst_10717);
} else {
if((state_val_10910 === (138))){
var inst_10767 = (state_10909[(47)]);
var state_10909__$1 = state_10909;
var statearr_11031_11503 = state_10909__$1;
(statearr_11031_11503[(2)] = inst_10767);

(statearr_11031_11503[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (11))){
var inst_10091 = (state_10909[(15)]);
var inst_10292 = (state_10909[(2)]);
var inst_10297 = (function (){var tokens = inst_10091;
return ((function (tokens,inst_10091,inst_10292,state_val_10910,c__19__auto__,___192__auto__){
return (function e2e$stake$iter__10293(s__10294){
return (new cljs.core.LazySeq(null,((function (tokens,inst_10091,inst_10292,state_val_10910,c__19__auto__,___192__auto__){
return (function (){
var s__10294__$1 = s__10294;
while(true){
var temp__9015__auto__ = cljs.core.seq.call(null,s__10294__$1);
if(temp__9015__auto__){
var s__10294__$2 = temp__9015__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10294__$2)){
var c__9990__auto__ = cljs.core.chunk_first.call(null,s__10294__$2);
var size__9991__auto__ = cljs.core.count.call(null,c__9990__auto__);
var b__10296 = cljs.core.chunk_buffer.call(null,size__9991__auto__);
if((function (){var i__10295 = (0);
while(true){
if((i__10295 < size__9991__auto__)){
var vec__11032 = cljs.core._nth.call(null,c__9990__auto__,i__10295);
var seq__11033 = cljs.core.seq.call(null,vec__11032);
var first__11034 = cljs.core.first.call(null,seq__11033);
var seq__11033__$1 = cljs.core.next.call(null,seq__11033);
var t = first__11034;
var first__11034__$1 = cljs.core.first.call(null,seq__11033__$1);
var seq__11033__$2 = cljs.core.next.call(null,seq__11033__$1);
var supply = first__11034__$1;
var _ = seq__11033__$2;
cljs.core.chunk_append.call(null,b__10296,eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)));

var G__11504 = (i__10295 + (1));
i__10295 = G__11504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10296),e2e$stake$iter__10293.call(null,cljs.core.chunk_rest.call(null,s__10294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10296),null);
}
} else {
var vec__11035 = cljs.core.first.call(null,s__10294__$2);
var seq__11036 = cljs.core.seq.call(null,vec__11035);
var first__11037 = cljs.core.first.call(null,seq__11036);
var seq__11036__$1 = cljs.core.next.call(null,seq__11036);
var t = first__11037;
var first__11037__$1 = cljs.core.first.call(null,seq__11036__$1);
var seq__11036__$2 = cljs.core.next.call(null,seq__11036__$1);
var supply = first__11037__$1;
var _ = seq__11036__$2;
return cljs.core.cons.call(null,eos_cljs.core.transact.call(null,e2e.stake.token_acc,"transfer",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",(1815293044)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"to","to",(192099007)),e2e.stake.stake_acc,new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(supply)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"memo","memo",(-1928616099)),"stake"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.stake.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null)),e2e$stake$iter__10293.call(null,cljs.core.rest.call(null,s__10294__$2)));
}
} else {
return null;
}
break;
}
});})(tokens,inst_10091,inst_10292,state_val_10910,c__19__auto__,___192__auto__))
,null,null));
});
;})(tokens,inst_10091,inst_10292,state_val_10910,c__19__auto__,___192__auto__))
})();
var inst_10298 = inst_10297.call(null,inst_10091);
var inst_10299 = cljs.core.apply.call(null,e2e.util.p_all,inst_10298);
var inst_10300 = cljs.core.async.interop.p__GT_c.call(null,inst_10299);
var state_10909__$1 = (function (){var statearr_11038 = state_10909;
(statearr_11038[(59)] = inst_10292);

return statearr_11038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(43),inst_10300);
} else {
if((state_val_10910 === (43))){
var inst_10302 = (state_10909[(60)]);
var inst_10302__$1 = (state_10909[(2)]);
var inst_10303 = (inst_10302__$1 instanceof cljs.core.ExceptionInfo);
var inst_10304 = cljs.core.ex_data.call(null,inst_10302__$1);
var inst_10305 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10304);
var inst_10306 = cljs.core._EQ_.call(null,inst_10305,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10307 = ((inst_10303) && (inst_10306));
var state_10909__$1 = (function (){var statearr_11039 = state_10909;
(statearr_11039[(60)] = inst_10302__$1);

return statearr_11039;
})();
if(cljs.core.truth_(inst_10307)){
var statearr_11040_11505 = state_10909__$1;
(statearr_11040_11505[(1)] = (44));

} else {
var statearr_11041_11506 = state_10909__$1;
(statearr_11041_11506[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (75))){
var inst_10492 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11042_11507 = state_10909__$1;
(statearr_11042_11507[(2)] = inst_10492);

(statearr_11042_11507[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (107))){
var inst_10622 = (state_10909[(50)]);
var inst_10624 = (state_10909[(52)]);
var inst_10632 = cljs.core._nth.call(null,inst_10622,inst_10624);
var inst_10633 = cljs.core.nth.call(null,inst_10632,(0),null);
var inst_10634 = cljs.core.nth.call(null,inst_10632,(1),null);
var inst_10635 = cljs.core.nth.call(null,inst_10632,(2),null);
var inst_10636 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_10637 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10634)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10633)].join('');
var inst_10638 = [e2e.stake.owner_acc,inst_10637];
var inst_10639 = cljs.core.PersistentHashMap.fromArrays(inst_10636,inst_10638);
var inst_10640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10641 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_10642 = [e2e.stake.owner_acc,"active"];
var inst_10643 = cljs.core.PersistentHashMap.fromArrays(inst_10641,inst_10642);
var inst_10644 = [inst_10643];
var inst_10645 = (new cljs.core.PersistentVector(null,(1),(5),inst_10640,inst_10644,null));
var inst_10646 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",inst_10639,inst_10645);
var inst_10647 = e2e.util.should_succeed.call(null,inst_10646,"can always unstake");
var inst_10648 = cljs.core.async.interop.p__GT_c.call(null,inst_10647);
var state_10909__$1 = (function (){var statearr_11043 = state_10909;
(statearr_11043[(61)] = inst_10635);

return statearr_11043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(110),inst_10648);
} else {
if((state_val_10910 === (139))){
var inst_10777 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11044_11508 = state_10909__$1;
(statearr_11044_11508[(2)] = inst_10777);

(statearr_11044_11508[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (12))){
var inst_10139 = (state_10909[(40)]);
var inst_10141 = (state_10909[(42)]);
var inst_10149 = cljs.core._nth.call(null,inst_10139,inst_10141);
var inst_10150 = cljs.core.nth.call(null,inst_10149,(0),null);
var inst_10151 = cljs.core.nth.call(null,inst_10149,(1),null);
var inst_10152 = cljs.core.nth.call(null,inst_10149,(2),null);
var inst_10153 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,inst_10150,"stat");
var inst_10154 = cljs.core.async.interop.p__GT_c.call(null,inst_10153);
var state_10909__$1 = (function (){var statearr_11045 = state_10909;
(statearr_11045[(62)] = inst_10151);

(statearr_11045[(65)] = inst_10152);

return statearr_11045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(15),inst_10154);
} else {
if((state_val_10910 === (44))){
var inst_10302 = (state_10909[(60)]);
var inst_10309 = (function(){throw inst_10302})();
var state_10909__$1 = state_10909;
var statearr_11046_11509 = state_10909__$1;
(statearr_11046_11509[(2)] = inst_10309);

(statearr_11046_11509[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (76))){
var inst_10449 = (state_10909[(58)]);
var inst_10445 = (state_10909[(55)]);
var inst_10444 = (state_10909[(54)]);
var inst_10464 = (state_10909[(63)]);
var inst_10465 = (state_10909[(64)]);
var _ = (function (){var statearr_11047 = state_10909;
(statearr_11047[(4)] = cljs.core.cons.call(null,(79),(state_10909[(4)])));

return statearr_11047;
})();
var inst_10461 = cljs.core.get.call(null,inst_10449,"amount");
var inst_10462 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10445)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10444)].join('');
var inst_10463 = (new cljs.core.List(null,inst_10462,null,(1),null));
var inst_10464__$1 = (new cljs.core.List(null,inst_10461,inst_10463,(2),null));
var inst_10465__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10464__$1);
var state_10909__$1 = (function (){var statearr_11048 = state_10909;
(statearr_11048[(63)] = inst_10464__$1);

(statearr_11048[(64)] = inst_10465__$1);

return statearr_11048;
})();
if(cljs.core.truth_(inst_10465__$1)){
var statearr_11049_11510 = state_10909__$1;
(statearr_11049_11510[(1)] = (80));

} else {
var statearr_11050_11511 = state_10909__$1;
(statearr_11050_11511[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (108))){
var inst_10621 = (state_10909[(49)]);
var inst_10664 = (state_10909[(66)]);
var inst_10664__$1 = cljs.core.seq.call(null,inst_10621);
var state_10909__$1 = (function (){var statearr_11051 = state_10909;
(statearr_11051[(66)] = inst_10664__$1);

return statearr_11051;
})();
if(inst_10664__$1){
var statearr_11052_11512 = state_10909__$1;
(statearr_11052_11512[(1)] = (114));

} else {
var statearr_11053_11513 = state_10909__$1;
(statearr_11053_11513[(1)] = (115));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (140))){
var inst_10793 = (state_10909[(67)]);
var inst_10793__$1 = (state_10909[(2)]);
var inst_10794 = (inst_10793__$1 instanceof cljs.core.ExceptionInfo);
var inst_10795 = cljs.core.ex_data.call(null,inst_10793__$1);
var inst_10796 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10795);
var inst_10797 = cljs.core._EQ_.call(null,inst_10796,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10798 = ((inst_10794) && (inst_10797));
var state_10909__$1 = (function (){var statearr_11054 = state_10909;
(statearr_11054[(67)] = inst_10793__$1);

return statearr_11054;
})();
if(cljs.core.truth_(inst_10798)){
var statearr_11055_11514 = state_10909__$1;
(statearr_11055_11514[(1)] = (141));

} else {
var statearr_11056_11515 = state_10909__$1;
(statearr_11056_11515[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (13))){
var inst_10138 = (state_10909[(39)]);
var inst_10211 = (state_10909[(34)]);
var inst_10211__$1 = cljs.core.seq.call(null,inst_10138);
var state_10909__$1 = (function (){var statearr_11057 = state_10909;
(statearr_11057[(34)] = inst_10211__$1);

return statearr_11057;
})();
if(inst_10211__$1){
var statearr_11058_11516 = state_10909__$1;
(statearr_11058_11516[(1)] = (26));

} else {
var statearr_11059_11517 = state_10909__$1;
(statearr_11059_11517[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (45))){
var inst_10302 = (state_10909[(60)]);
var state_10909__$1 = state_10909;
var statearr_11060_11518 = state_10909__$1;
(statearr_11060_11518[(2)] = inst_10302);

(statearr_11060_11518[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (77))){
var inst_10431 = (state_10909[(44)]);
var inst_10488 = (state_10909[(2)]);
var inst_10489 = cljs.core.next.call(null,inst_10431);
var inst_10371 = inst_10489;
var inst_10372 = null;
var inst_10373 = (0);
var inst_10374 = (0);
var state_10909__$1 = (function (){var statearr_11061 = state_10909;
(statearr_11061[(68)] = inst_10488);

(statearr_11061[(9)] = inst_10371);

(statearr_11061[(10)] = inst_10372);

(statearr_11061[(11)] = inst_10373);

(statearr_11061[(8)] = inst_10374);

return statearr_11061;
})();
var statearr_11062_11519 = state_10909__$1;
(statearr_11062_11519[(2)] = null);

(statearr_11062_11519[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (109))){
var inst_10713 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11063_11520 = state_10909__$1;
(statearr_11063_11520[(2)] = inst_10713);

(statearr_11063_11520[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (141))){
var inst_10793 = (state_10909[(67)]);
var inst_10800 = (function(){throw inst_10793})();
var state_10909__$1 = state_10909;
var statearr_11064_11521 = state_10909__$1;
(statearr_11064_11521[(2)] = inst_10800);

(statearr_11064_11521[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (14))){
var inst_10290 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11065_11522 = state_10909__$1;
(statearr_11065_11522[(2)] = inst_10290);

(statearr_11065_11522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (46))){
var inst_10312 = (state_10909[(2)]);
var inst_10313 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,e2e.stake.owner_acc,"stake");
var inst_10314 = cljs.core.async.interop.p__GT_c.call(null,inst_10313);
var state_10909__$1 = (function (){var statearr_11066 = state_10909;
(statearr_11066[(69)] = inst_10312);

return statearr_11066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(47),inst_10314);
} else {
if((state_val_10910 === (78))){
var inst_10450 = (state_10909[(2)]);
var inst_10451 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10452 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10453 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"the full supply of tokens can be staked",inst_10452,inst_10450];
var inst_10454 = cljs.core.PersistentHashMap.fromArrays(inst_10451,inst_10453);
var inst_10455 = cljs.test.do_report.call(null,inst_10454);
var state_10909__$1 = state_10909;
var statearr_11067_11523 = state_10909__$1;
(statearr_11067_11523[(2)] = inst_10455);

(statearr_11067_11523[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (110))){
var inst_10650 = (state_10909[(70)]);
var inst_10650__$1 = (state_10909[(2)]);
var inst_10651 = (inst_10650__$1 instanceof cljs.core.ExceptionInfo);
var inst_10652 = cljs.core.ex_data.call(null,inst_10650__$1);
var inst_10653 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10652);
var inst_10654 = cljs.core._EQ_.call(null,inst_10653,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10655 = ((inst_10651) && (inst_10654));
var state_10909__$1 = (function (){var statearr_11068 = state_10909;
(statearr_11068[(70)] = inst_10650__$1);

return statearr_11068;
})();
if(cljs.core.truth_(inst_10655)){
var statearr_11069_11524 = state_10909__$1;
(statearr_11069_11524[(1)] = (111));

} else {
var statearr_11070_11525 = state_10909__$1;
(statearr_11070_11525[(1)] = (112));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (142))){
var inst_10793 = (state_10909[(67)]);
var state_10909__$1 = state_10909;
var statearr_11071_11526 = state_10909__$1;
(statearr_11071_11526[(2)] = inst_10793);

(statearr_11071_11526[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (15))){
var inst_10156 = (state_10909[(71)]);
var inst_10156__$1 = (state_10909[(2)]);
var inst_10157 = (inst_10156__$1 instanceof cljs.core.ExceptionInfo);
var inst_10158 = cljs.core.ex_data.call(null,inst_10156__$1);
var inst_10159 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10158);
var inst_10160 = cljs.core._EQ_.call(null,inst_10159,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10161 = ((inst_10157) && (inst_10160));
var state_10909__$1 = (function (){var statearr_11073 = state_10909;
(statearr_11073[(71)] = inst_10156__$1);

return statearr_11073;
})();
if(cljs.core.truth_(inst_10161)){
var statearr_11074_11527 = state_10909__$1;
(statearr_11074_11527[(1)] = (16));

} else {
var statearr_11075_11528 = state_10909__$1;
(statearr_11075_11528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (47))){
var inst_10316 = (state_10909[(72)]);
var inst_10316__$1 = (state_10909[(2)]);
var inst_10317 = (inst_10316__$1 instanceof cljs.core.ExceptionInfo);
var inst_10318 = cljs.core.ex_data.call(null,inst_10316__$1);
var inst_10319 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10318);
var inst_10320 = cljs.core._EQ_.call(null,inst_10319,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10321 = ((inst_10317) && (inst_10320));
var state_10909__$1 = (function (){var statearr_11076 = state_10909;
(statearr_11076[(72)] = inst_10316__$1);

return statearr_11076;
})();
if(cljs.core.truth_(inst_10321)){
var statearr_11077_11529 = state_10909__$1;
(statearr_11077_11529[(1)] = (48));

} else {
var statearr_11078_11530 = state_10909__$1;
(statearr_11078_11530[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (79))){
var _ = (function (){var statearr_11079 = state_10909;
(statearr_11079[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11079;
})();
var state_10909__$1 = state_10909;
var ex11072 = (state_10909__$1[(2)]);
var statearr_11080_11531 = state_10909__$1;
(statearr_11080_11531[(5)] = ex11072);


var statearr_11081_11532 = state_10909__$1;
(statearr_11081_11532[(1)] = (78));

(statearr_11081_11532[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (111))){
var inst_10650 = (state_10909[(70)]);
var inst_10657 = (function(){throw inst_10650})();
var state_10909__$1 = state_10909;
var statearr_11082_11533 = state_10909__$1;
(statearr_11082_11533[(2)] = inst_10657);

(statearr_11082_11533[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (143))){
var inst_10803 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11083_11534 = state_10909__$1;
(statearr_11083_11534[(2)] = inst_10803);

(statearr_11083_11534[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (16))){
var inst_10156 = (state_10909[(71)]);
var inst_10163 = (function(){throw inst_10156})();
var state_10909__$1 = state_10909;
var statearr_11084_11535 = state_10909__$1;
(statearr_11084_11535[(2)] = inst_10163);

(statearr_11084_11535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (48))){
var inst_10316 = (state_10909[(72)]);
var inst_10323 = (function(){throw inst_10316})();
var state_10909__$1 = state_10909;
var statearr_11085_11536 = state_10909__$1;
(statearr_11085_11536[(2)] = inst_10323);

(statearr_11085_11536[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (80))){
var inst_10464 = (state_10909[(63)]);
var inst_10467 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10468 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10469 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10464);
var inst_10470 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"the full supply of tokens can be staked",inst_10468,inst_10469];
var inst_10471 = cljs.core.PersistentHashMap.fromArrays(inst_10467,inst_10470);
var inst_10472 = cljs.test.do_report.call(null,inst_10471);
var state_10909__$1 = state_10909;
var statearr_11086_11537 = state_10909__$1;
(statearr_11086_11537[(2)] = inst_10472);

(statearr_11086_11537[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (112))){
var inst_10650 = (state_10909[(70)]);
var state_10909__$1 = state_10909;
var statearr_11087_11538 = state_10909__$1;
(statearr_11087_11538[(2)] = inst_10650);

(statearr_11087_11538[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (144))){
var inst_10809 = (state_10909[(26)]);
var inst_10811 = cljs.core.chunked_seq_QMARK_.call(null,inst_10809);
var state_10909__$1 = state_10909;
if(inst_10811){
var statearr_11088_11539 = state_10909__$1;
(statearr_11088_11539[(1)] = (147));

} else {
var statearr_11089_11540 = state_10909__$1;
(statearr_11089_11540[(1)] = (148));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (17))){
var inst_10156 = (state_10909[(71)]);
var state_10909__$1 = state_10909;
var statearr_11090_11541 = state_10909__$1;
(statearr_11090_11541[(2)] = inst_10156);

(statearr_11090_11541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (49))){
var inst_10316 = (state_10909[(72)]);
var state_10909__$1 = state_10909;
var statearr_11094_11542 = state_10909__$1;
(statearr_11094_11542[(2)] = inst_10316);

(statearr_11094_11542[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (81))){
var inst_10464 = (state_10909[(63)]);
var inst_10474 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10475 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"amount"),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null)," ",new cljs.core.Symbol(null,"t","t",(242699008),null)));
var inst_10476 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_10477 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_10478 = cljs.core.cons.call(null,inst_10477,inst_10464);
var inst_10479 = (new cljs.core.List(null,inst_10478,null,(1),null));
var inst_10480 = (new cljs.core.List(null,inst_10476,inst_10479,(2),null));
var inst_10481 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"the full supply of tokens can be staked",inst_10475,inst_10480];
var inst_10482 = cljs.core.PersistentHashMap.fromArrays(inst_10474,inst_10481);
var inst_10483 = cljs.test.do_report.call(null,inst_10482);
var state_10909__$1 = state_10909;
var statearr_11095_11543 = state_10909__$1;
(statearr_11095_11543[(2)] = inst_10483);

(statearr_11095_11543[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (113))){
var inst_10624 = (state_10909[(52)]);
var inst_10621 = (state_10909[(49)]);
var inst_10622 = (state_10909[(50)]);
var inst_10623 = (state_10909[(51)]);
var inst_10660 = (state_10909[(2)]);
var inst_10661 = (inst_10624 + (1));
var tmp11091 = inst_10621;
var tmp11092 = inst_10622;
var tmp11093 = inst_10623;
var inst_10621__$1 = tmp11091;
var inst_10622__$1 = tmp11092;
var inst_10623__$1 = tmp11093;
var inst_10624__$1 = inst_10661;
var state_10909__$1 = (function (){var statearr_11096 = state_10909;
(statearr_11096[(73)] = inst_10660);

(statearr_11096[(49)] = inst_10621__$1);

(statearr_11096[(50)] = inst_10622__$1);

(statearr_11096[(51)] = inst_10623__$1);

(statearr_11096[(52)] = inst_10624__$1);

return statearr_11096;
})();
var statearr_11097_11544 = state_10909__$1;
(statearr_11097_11544[(2)] = null);

(statearr_11097_11544[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (145))){
var state_10909__$1 = state_10909;
var statearr_11098_11545 = state_10909__$1;
(statearr_11098_11545[(2)] = null);

(statearr_11098_11545[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (18))){
var inst_10166 = (state_10909[(2)]);
var state_10909__$1 = (function (){var statearr_11099 = state_10909;
(statearr_11099[(74)] = inst_10166);

return statearr_11099;
})();
var statearr_11100_11546 = state_10909__$1;
(statearr_11100_11546[(2)] = null);

(statearr_11100_11546[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (50))){
var inst_10326 = (state_10909[(2)]);
var state_10909__$1 = (function (){var statearr_11101 = state_10909;
(statearr_11101[(56)] = inst_10326);

return statearr_11101;
})();
var statearr_11102_11547 = state_10909__$1;
(statearr_11102_11547[(2)] = null);

(statearr_11102_11547[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (82))){
var inst_10465 = (state_10909[(64)]);
var inst_10485 = (state_10909[(2)]);
var _ = (function (){var statearr_11103 = state_10909;
(statearr_11103[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11103;
})();
var state_10909__$1 = (function (){var statearr_11104 = state_10909;
(statearr_11104[(75)] = inst_10485);

return statearr_11104;
})();
var statearr_11105_11548 = state_10909__$1;
(statearr_11105_11548[(2)] = inst_10465);

(statearr_11105_11548[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (114))){
var inst_10664 = (state_10909[(66)]);
var inst_10666 = cljs.core.chunked_seq_QMARK_.call(null,inst_10664);
var state_10909__$1 = state_10909;
if(inst_10666){
var statearr_11106_11549 = state_10909__$1;
(statearr_11106_11549[(1)] = (117));

} else {
var statearr_11107_11550 = state_10909__$1;
(statearr_11107_11550[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (146))){
var inst_10886 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11108_11551 = state_10909__$1;
(statearr_11108_11551[(2)] = inst_10886);

(statearr_11108_11551[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (19))){
var inst_10166 = (state_10909[(74)]);
var inst_10152 = (state_10909[(65)]);
var inst_10183 = (state_10909[(76)]);
var inst_10184 = (state_10909[(77)]);
var _ = (function (){var statearr_11109 = state_10909;
(statearr_11109[(4)] = cljs.core.cons.call(null,(22),(state_10909[(4)])));

return statearr_11109;
})();
var inst_10178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10179 = [(0),"unstake_delay_sec"];
var inst_10180 = (new cljs.core.PersistentVector(null,(2),(5),inst_10178,inst_10179,null));
var inst_10181 = cljs.core.get_in.call(null,inst_10166,inst_10180);
var inst_10182 = (new cljs.core.List(null,inst_10152,null,(1),null));
var inst_10183__$1 = (new cljs.core.List(null,inst_10181,inst_10182,(2),null));
var inst_10184__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10183__$1);
var state_10909__$1 = (function (){var statearr_11110 = state_10909;
(statearr_11110[(76)] = inst_10183__$1);

(statearr_11110[(77)] = inst_10184__$1);

return statearr_11110;
})();
if(cljs.core.truth_(inst_10184__$1)){
var statearr_11111_11552 = state_10909__$1;
(statearr_11111_11552[(1)] = (23));

} else {
var statearr_11112_11553 = state_10909__$1;
(statearr_11112_11553[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (51))){
var inst_10326 = (state_10909[(56)]);
var inst_10340 = (state_10909[(78)]);
var inst_10341 = (state_10909[(79)]);
var _ = (function (){var statearr_11113 = state_10909;
(statearr_11113[(4)] = cljs.core.cons.call(null,(54),(state_10909[(4)])));

return statearr_11113;
})();
var inst_10338 = cljs.core.count.call(null,inst_10326);
var inst_10339 = (new cljs.core.List(null,(4),null,(1),null));
var inst_10340__$1 = (new cljs.core.List(null,inst_10338,inst_10339,(2),null));
var inst_10341__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10340__$1);
var state_10909__$1 = (function (){var statearr_11114 = state_10909;
(statearr_11114[(78)] = inst_10340__$1);

(statearr_11114[(79)] = inst_10341__$1);

return statearr_11114;
})();
if(cljs.core.truth_(inst_10341__$1)){
var statearr_11115_11554 = state_10909__$1;
(statearr_11115_11554[(1)] = (55));

} else {
var statearr_11116_11555 = state_10909__$1;
(statearr_11116_11555[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (83))){
var inst_10501 = (state_10909[(80)]);
var inst_10513 = (state_10909[(81)]);
var inst_10514 = (state_10909[(82)]);
var _ = (function (){var statearr_11117 = state_10909;
(statearr_11117[(4)] = cljs.core.cons.call(null,(86),(state_10909[(4)])));

return statearr_11117;
})();
var inst_10513__$1 = (new cljs.core.List(null,inst_10501,null,(1),null));
var inst_10514__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_10513__$1);
var state_10909__$1 = (function (){var statearr_11118 = state_10909;
(statearr_11118[(81)] = inst_10513__$1);

(statearr_11118[(82)] = inst_10514__$1);

return statearr_11118;
})();
if(cljs.core.truth_(inst_10514__$1)){
var statearr_11119_11556 = state_10909__$1;
(statearr_11119_11556[(1)] = (87));

} else {
var statearr_11120_11557 = state_10909__$1;
(statearr_11120_11557[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (115))){
var state_10909__$1 = state_10909;
var statearr_11124_11558 = state_10909__$1;
(statearr_11124_11558[(2)] = null);

(statearr_11124_11558[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (147))){
var inst_10809 = (state_10909[(26)]);
var inst_10813 = cljs.core.chunk_first.call(null,inst_10809);
var inst_10814 = cljs.core.chunk_rest.call(null,inst_10809);
var inst_10815 = cljs.core.count.call(null,inst_10813);
var inst_10736 = inst_10814;
var inst_10737 = inst_10813;
var inst_10738 = inst_10815;
var inst_10739 = (0);
var state_10909__$1 = (function (){var statearr_11125 = state_10909;
(statearr_11125[(25)] = inst_10736);

(statearr_11125[(20)] = inst_10737);

(statearr_11125[(14)] = inst_10738);

(statearr_11125[(13)] = inst_10739);

return statearr_11125;
})();
var statearr_11126_11559 = state_10909__$1;
(statearr_11126_11559[(2)] = null);

(statearr_11126_11559[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (20))){
var inst_10141 = (state_10909[(42)]);
var inst_10138 = (state_10909[(39)]);
var inst_10139 = (state_10909[(40)]);
var inst_10140 = (state_10909[(41)]);
var inst_10207 = (state_10909[(2)]);
var inst_10208 = (inst_10141 + (1));
var tmp11121 = inst_10138;
var tmp11122 = inst_10139;
var tmp11123 = inst_10140;
var inst_10138__$1 = tmp11121;
var inst_10139__$1 = tmp11122;
var inst_10140__$1 = tmp11123;
var inst_10141__$1 = inst_10208;
var state_10909__$1 = (function (){var statearr_11127 = state_10909;
(statearr_11127[(83)] = inst_10207);

(statearr_11127[(39)] = inst_10138__$1);

(statearr_11127[(40)] = inst_10139__$1);

(statearr_11127[(41)] = inst_10140__$1);

(statearr_11127[(42)] = inst_10141__$1);

return statearr_11127;
})();
var statearr_11128_11560 = state_10909__$1;
(statearr_11128_11560[(2)] = null);

(statearr_11128_11560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (52))){
var inst_10091 = (state_10909[(15)]);
var inst_10364 = (state_10909[(2)]);
var inst_10369 = cljs.core.take.call(null,(3),inst_10091);
var inst_10370 = cljs.core.seq.call(null,inst_10369);
var inst_10371 = inst_10370;
var inst_10372 = null;
var inst_10373 = (0);
var inst_10374 = (0);
var state_10909__$1 = (function (){var statearr_11129 = state_10909;
(statearr_11129[(84)] = inst_10364);

(statearr_11129[(9)] = inst_10371);

(statearr_11129[(10)] = inst_10372);

(statearr_11129[(11)] = inst_10373);

(statearr_11129[(8)] = inst_10374);

return statearr_11129;
})();
var statearr_11130_11561 = state_10909__$1;
(statearr_11130_11561[(2)] = null);

(statearr_11130_11561[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (84))){
var inst_10537 = (state_10909[(2)]);
var inst_10538 = eos_cljs.core.get_table_rows.call(null,e2e.stake.token_acc,e2e.stake.stake_acc,"accounts");
var inst_10539 = cljs.core.async.interop.p__GT_c.call(null,inst_10538);
var state_10909__$1 = (function (){var statearr_11131 = state_10909;
(statearr_11131[(85)] = inst_10537);

return statearr_11131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(90),inst_10539);
} else {
if((state_val_10910 === (116))){
var inst_10711 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11132_11562 = state_10909__$1;
(statearr_11132_11562[(2)] = inst_10711);

(statearr_11132_11562[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (148))){
var inst_10809 = (state_10909[(26)]);
var inst_10821 = cljs.core.first.call(null,inst_10809);
var inst_10822 = cljs.core.nth.call(null,inst_10821,(0),null);
var inst_10823 = cljs.core.nth.call(null,inst_10821,(1),null);
var inst_10824 = cljs.core.nth.call(null,inst_10821,(2),null);
var inst_10825 = (inst_10824 <= (5));
var state_10909__$1 = (function (){var statearr_11133 = state_10909;
(statearr_11133[(86)] = inst_10822);

(statearr_11133[(87)] = inst_10823);

return statearr_11133;
})();
if(cljs.core.truth_(inst_10825)){
var statearr_11134_11563 = state_10909__$1;
(statearr_11134_11563[(1)] = (150));

} else {
var statearr_11135_11564 = state_10909__$1;
(statearr_11135_11564[(1)] = (151));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (21))){
var inst_10167 = (state_10909[(2)]);
var inst_10168 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10169 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_10170 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"multiple tokens can be created",inst_10169,inst_10167];
var inst_10171 = cljs.core.PersistentHashMap.fromArrays(inst_10168,inst_10170);
var inst_10172 = cljs.test.do_report.call(null,inst_10171);
var state_10909__$1 = state_10909;
var statearr_11136_11565 = state_10909__$1;
(statearr_11136_11565[(2)] = inst_10172);

(statearr_11136_11565[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (53))){
var inst_10327 = (state_10909[(2)]);
var inst_10328 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10329 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(4));
var inst_10330 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"multiple tokens can be staked",inst_10329,inst_10327];
var inst_10331 = cljs.core.PersistentHashMap.fromArrays(inst_10328,inst_10330);
var inst_10332 = cljs.test.do_report.call(null,inst_10331);
var state_10909__$1 = state_10909;
var statearr_11137_11566 = state_10909__$1;
(statearr_11137_11566[(2)] = inst_10332);

(statearr_11137_11566[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (85))){
var inst_10502 = (state_10909[(2)]);
var inst_10503 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10504 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"last-row","last-row",(2028653194),null));
var inst_10505 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"non-stakeble token can not be staked",inst_10504,inst_10502];
var inst_10506 = cljs.core.PersistentHashMap.fromArrays(inst_10503,inst_10505);
var inst_10507 = cljs.test.do_report.call(null,inst_10506);
var state_10909__$1 = state_10909;
var statearr_11138_11567 = state_10909__$1;
(statearr_11138_11567[(2)] = inst_10507);

(statearr_11138_11567[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (117))){
var inst_10664 = (state_10909[(66)]);
var inst_10668 = cljs.core.chunk_first.call(null,inst_10664);
var inst_10669 = cljs.core.chunk_rest.call(null,inst_10664);
var inst_10670 = cljs.core.count.call(null,inst_10668);
var inst_10621 = inst_10669;
var inst_10622 = inst_10668;
var inst_10623 = inst_10670;
var inst_10624 = (0);
var state_10909__$1 = (function (){var statearr_11140 = state_10909;
(statearr_11140[(49)] = inst_10621);

(statearr_11140[(50)] = inst_10622);

(statearr_11140[(51)] = inst_10623);

(statearr_11140[(52)] = inst_10624);

return statearr_11140;
})();
var statearr_11141_11568 = state_10909__$1;
(statearr_11141_11568[(2)] = null);

(statearr_11141_11568[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (149))){
var inst_10883 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11143_11569 = state_10909__$1;
(statearr_11143_11569[(2)] = inst_10883);

(statearr_11143_11569[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (22))){
var _ = (function (){var statearr_11145 = state_10909;
(statearr_11145[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11145;
})();
var state_10909__$1 = state_10909;
var ex11139 = (state_10909__$1[(2)]);
var statearr_11146_11570 = state_10909__$1;
(statearr_11146_11570[(5)] = ex11139);


var statearr_11147_11571 = state_10909__$1;
(statearr_11147_11571[(1)] = (21));

(statearr_11147_11571[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (54))){
var _ = (function (){var statearr_11148 = state_10909;
(statearr_11148[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11148;
})();
var state_10909__$1 = state_10909;
var ex11142 = (state_10909__$1[(2)]);
var statearr_11149_11572 = state_10909__$1;
(statearr_11149_11572[(5)] = ex11142);


var statearr_11150_11573 = state_10909__$1;
(statearr_11150_11573[(1)] = (53));

(statearr_11150_11573[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (86))){
var _ = (function (){var statearr_11151 = state_10909;
(statearr_11151[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11151;
})();
var state_10909__$1 = state_10909;
var ex11144 = (state_10909__$1[(2)]);
var statearr_11152_11574 = state_10909__$1;
(statearr_11152_11574[(5)] = ex11144);


var statearr_11153_11575 = state_10909__$1;
(statearr_11153_11575[(1)] = (85));

(statearr_11153_11575[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (118))){
var inst_10664 = (state_10909[(66)]);
var inst_10676 = cljs.core.first.call(null,inst_10664);
var inst_10677 = cljs.core.nth.call(null,inst_10676,(0),null);
var inst_10678 = cljs.core.nth.call(null,inst_10676,(1),null);
var inst_10679 = cljs.core.nth.call(null,inst_10676,(2),null);
var inst_10680 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_10681 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10678)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10677)].join('');
var inst_10682 = [e2e.stake.owner_acc,inst_10681];
var inst_10683 = cljs.core.PersistentHashMap.fromArrays(inst_10680,inst_10682);
var inst_10684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10685 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_10686 = [e2e.stake.owner_acc,"active"];
var inst_10687 = cljs.core.PersistentHashMap.fromArrays(inst_10685,inst_10686);
var inst_10688 = [inst_10687];
var inst_10689 = (new cljs.core.PersistentVector(null,(1),(5),inst_10684,inst_10688,null));
var inst_10690 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"unstake",inst_10683,inst_10689);
var inst_10691 = e2e.util.should_succeed.call(null,inst_10690,"can always unstake");
var inst_10692 = cljs.core.async.interop.p__GT_c.call(null,inst_10691);
var state_10909__$1 = (function (){var statearr_11154 = state_10909;
(statearr_11154[(88)] = inst_10679);

return statearr_11154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(120),inst_10692);
} else {
if((state_val_10910 === (150))){
var inst_10822 = (state_10909[(86)]);
var inst_10827 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_10828 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10822)].join('');
var inst_10829 = [e2e.stake.owner_acc,inst_10828];
var inst_10830 = cljs.core.PersistentHashMap.fromArrays(inst_10827,inst_10829);
var inst_10831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10832 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_10833 = [e2e.stake.owner_acc,"active"];
var inst_10834 = cljs.core.PersistentHashMap.fromArrays(inst_10832,inst_10833);
var inst_10835 = [inst_10834];
var inst_10836 = (new cljs.core.PersistentVector(null,(1),(5),inst_10831,inst_10835,null));
var inst_10837 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_10830,inst_10836);
var inst_10838 = e2e.util.should_succeed.call(null,inst_10837,"can refund token with low unstake delay");
var inst_10839 = cljs.core.async.interop.p__GT_c.call(null,inst_10838);
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(153),inst_10839);
} else {
if((state_val_10910 === (23))){
var inst_10183 = (state_10909[(76)]);
var inst_10186 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10187 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_10188 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10183);
var inst_10189 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"multiple tokens can be created",inst_10187,inst_10188];
var inst_10190 = cljs.core.PersistentHashMap.fromArrays(inst_10186,inst_10189);
var inst_10191 = cljs.test.do_report.call(null,inst_10190);
var state_10909__$1 = state_10909;
var statearr_11155_11576 = state_10909__$1;
(statearr_11155_11576[(2)] = inst_10191);

(statearr_11155_11576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (55))){
var inst_10340 = (state_10909[(78)]);
var inst_10343 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10344 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(4));
var inst_10345 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10340);
var inst_10346 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"multiple tokens can be staked",inst_10344,inst_10345];
var inst_10347 = cljs.core.PersistentHashMap.fromArrays(inst_10343,inst_10346);
var inst_10348 = cljs.test.do_report.call(null,inst_10347);
var state_10909__$1 = state_10909;
var statearr_11156_11577 = state_10909__$1;
(statearr_11156_11577[(2)] = inst_10348);

(statearr_11156_11577[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (87))){
var inst_10513 = (state_10909[(81)]);
var inst_10516 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10517 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"last-row","last-row",(2028653194),null));
var inst_10518 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_10513);
var inst_10519 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"non-stakeble token can not be staked",inst_10517,inst_10518];
var inst_10520 = cljs.core.PersistentHashMap.fromArrays(inst_10516,inst_10519);
var inst_10521 = cljs.test.do_report.call(null,inst_10520);
var state_10909__$1 = state_10909;
var statearr_11157_11578 = state_10909__$1;
(statearr_11157_11578[(2)] = inst_10521);

(statearr_11157_11578[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (119))){
var inst_10708 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11158_11579 = state_10909__$1;
(statearr_11158_11579[(2)] = inst_10708);

(statearr_11158_11579[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (151))){
var inst_10822 = (state_10909[(86)]);
var inst_10853 = [new cljs.core.Keyword(null,"owner","owner",(-392611939)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))];
var inst_10854 = ["4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10822)].join('');
var inst_10855 = [e2e.stake.owner_acc,inst_10854];
var inst_10856 = cljs.core.PersistentHashMap.fromArrays(inst_10853,inst_10855);
var inst_10857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10858 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_10859 = [e2e.stake.owner_acc,"active"];
var inst_10860 = cljs.core.PersistentHashMap.fromArrays(inst_10858,inst_10859);
var inst_10861 = [inst_10860];
var inst_10862 = (new cljs.core.PersistentVector(null,(1),(5),inst_10857,inst_10861,null));
var inst_10863 = eos_cljs.core.transact.call(null,e2e.stake.stake_acc,"refund",inst_10856,inst_10862);
var inst_10864 = e2e.util.should_fail_with.call(null,inst_10863,"unstake is still pending");
var inst_10865 = cljs.core.async.interop.p__GT_c.call(null,inst_10864);
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(157),inst_10865);
} else {
if((state_val_10910 === (24))){
var inst_10183 = (state_10909[(76)]);
var inst_10193 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10194 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"unstake_delay_sec"], null)),new cljs.core.Symbol(null,"delay","delay",(1066306308),null));
var inst_10195 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_10196 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_10197 = cljs.core.cons.call(null,inst_10196,inst_10183);
var inst_10198 = (new cljs.core.List(null,inst_10197,null,(1),null));
var inst_10199 = (new cljs.core.List(null,inst_10195,inst_10198,(2),null));
var inst_10200 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"multiple tokens can be created",inst_10194,inst_10199];
var inst_10201 = cljs.core.PersistentHashMap.fromArrays(inst_10193,inst_10200);
var inst_10202 = cljs.test.do_report.call(null,inst_10201);
var state_10909__$1 = state_10909;
var statearr_11159_11580 = state_10909__$1;
(statearr_11159_11580[(2)] = inst_10202);

(statearr_11159_11580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (56))){
var inst_10340 = (state_10909[(78)]);
var inst_10350 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10351 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(4));
var inst_10352 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_10353 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_10354 = cljs.core.cons.call(null,inst_10353,inst_10340);
var inst_10355 = (new cljs.core.List(null,inst_10354,null,(1),null));
var inst_10356 = (new cljs.core.List(null,inst_10352,inst_10355,(2),null));
var inst_10357 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"multiple tokens can be staked",inst_10351,inst_10356];
var inst_10358 = cljs.core.PersistentHashMap.fromArrays(inst_10350,inst_10357);
var inst_10359 = cljs.test.do_report.call(null,inst_10358);
var state_10909__$1 = state_10909;
var statearr_11160_11581 = state_10909__$1;
(statearr_11160_11581[(2)] = inst_10359);

(statearr_11160_11581[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (88))){
var inst_10513 = (state_10909[(81)]);
var inst_10523 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10524 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"last-row","last-row",(2028653194),null));
var inst_10525 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_10526 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_10527 = cljs.core.cons.call(null,inst_10526,inst_10513);
var inst_10528 = (new cljs.core.List(null,inst_10527,null,(1),null));
var inst_10529 = (new cljs.core.List(null,inst_10525,inst_10528,(2),null));
var inst_10530 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"non-stakeble token can not be staked",inst_10524,inst_10529];
var inst_10531 = cljs.core.PersistentHashMap.fromArrays(inst_10523,inst_10530);
var inst_10532 = cljs.test.do_report.call(null,inst_10531);
var state_10909__$1 = state_10909;
var statearr_11161_11582 = state_10909__$1;
(statearr_11161_11582[(2)] = inst_10532);

(statearr_11161_11582[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (120))){
var inst_10694 = (state_10909[(89)]);
var inst_10694__$1 = (state_10909[(2)]);
var inst_10695 = (inst_10694__$1 instanceof cljs.core.ExceptionInfo);
var inst_10696 = cljs.core.ex_data.call(null,inst_10694__$1);
var inst_10697 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10696);
var inst_10698 = cljs.core._EQ_.call(null,inst_10697,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10699 = ((inst_10695) && (inst_10698));
var state_10909__$1 = (function (){var statearr_11162 = state_10909;
(statearr_11162[(89)] = inst_10694__$1);

return statearr_11162;
})();
if(cljs.core.truth_(inst_10699)){
var statearr_11163_11583 = state_10909__$1;
(statearr_11163_11583[(1)] = (121));

} else {
var statearr_11164_11584 = state_10909__$1;
(statearr_11164_11584[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (152))){
var inst_10809 = (state_10909[(26)]);
var inst_10879 = (state_10909[(2)]);
var inst_10880 = cljs.core.next.call(null,inst_10809);
var inst_10736 = inst_10880;
var inst_10737 = null;
var inst_10738 = (0);
var inst_10739 = (0);
var state_10909__$1 = (function (){var statearr_11165 = state_10909;
(statearr_11165[(90)] = inst_10879);

(statearr_11165[(25)] = inst_10736);

(statearr_11165[(20)] = inst_10737);

(statearr_11165[(14)] = inst_10738);

(statearr_11165[(13)] = inst_10739);

return statearr_11165;
})();
var statearr_11166_11585 = state_10909__$1;
(statearr_11166_11585[(2)] = null);

(statearr_11166_11585[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (25))){
var inst_10184 = (state_10909[(77)]);
var inst_10204 = (state_10909[(2)]);
var _ = (function (){var statearr_11167 = state_10909;
(statearr_11167[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11167;
})();
var state_10909__$1 = (function (){var statearr_11168 = state_10909;
(statearr_11168[(91)] = inst_10204);

return statearr_11168;
})();
var statearr_11169_11586 = state_10909__$1;
(statearr_11169_11586[(2)] = inst_10184);

(statearr_11169_11586[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (57))){
var inst_10341 = (state_10909[(79)]);
var inst_10361 = (state_10909[(2)]);
var _ = (function (){var statearr_11170 = state_10909;
(statearr_11170[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11170;
})();
var state_10909__$1 = (function (){var statearr_11171 = state_10909;
(statearr_11171[(92)] = inst_10361);

return statearr_11171;
})();
var statearr_11172_11587 = state_10909__$1;
(statearr_11172_11587[(2)] = inst_10341);

(statearr_11172_11587[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (89))){
var inst_10514 = (state_10909[(82)]);
var inst_10534 = (state_10909[(2)]);
var _ = (function (){var statearr_11173 = state_10909;
(statearr_11173[(4)] = cljs.core.rest.call(null,(state_10909[(4)])));

return statearr_11173;
})();
var state_10909__$1 = (function (){var statearr_11174 = state_10909;
(statearr_11174[(93)] = inst_10534);

return statearr_11174;
})();
var statearr_11175_11588 = state_10909__$1;
(statearr_11175_11588[(2)] = inst_10514);

(statearr_11175_11588[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (121))){
var inst_10694 = (state_10909[(89)]);
var inst_10701 = (function(){throw inst_10694})();
var state_10909__$1 = state_10909;
var statearr_11176_11589 = state_10909__$1;
(statearr_11176_11589[(2)] = inst_10701);

(statearr_11176_11589[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (153))){
var inst_10841 = (state_10909[(94)]);
var inst_10841__$1 = (state_10909[(2)]);
var inst_10842 = (inst_10841__$1 instanceof cljs.core.ExceptionInfo);
var inst_10843 = cljs.core.ex_data.call(null,inst_10841__$1);
var inst_10844 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10843);
var inst_10845 = cljs.core._EQ_.call(null,inst_10844,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10846 = ((inst_10842) && (inst_10845));
var state_10909__$1 = (function (){var statearr_11177 = state_10909;
(statearr_11177[(94)] = inst_10841__$1);

return statearr_11177;
})();
if(cljs.core.truth_(inst_10846)){
var statearr_11178_11590 = state_10909__$1;
(statearr_11178_11590[(1)] = (154));

} else {
var statearr_11179_11591 = state_10909__$1;
(statearr_11179_11591[(1)] = (155));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (26))){
var inst_10211 = (state_10909[(34)]);
var inst_10213 = cljs.core.chunked_seq_QMARK_.call(null,inst_10211);
var state_10909__$1 = state_10909;
if(inst_10213){
var statearr_11180_11592 = state_10909__$1;
(statearr_11180_11592[(1)] = (29));

} else {
var statearr_11181_11593 = state_10909__$1;
(statearr_11181_11593[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (58))){
var inst_10374 = (state_10909[(8)]);
var inst_10373 = (state_10909[(11)]);
var inst_10376 = (inst_10374 < inst_10373);
var inst_10377 = inst_10376;
var state_10909__$1 = state_10909;
if(cljs.core.truth_(inst_10377)){
var statearr_11182_11594 = state_10909__$1;
(statearr_11182_11594[(1)] = (60));

} else {
var statearr_11183_11595 = state_10909__$1;
(statearr_11183_11595[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (90))){
var inst_10541 = (state_10909[(95)]);
var inst_10541__$1 = (state_10909[(2)]);
var inst_10542 = (inst_10541__$1 instanceof cljs.core.ExceptionInfo);
var inst_10543 = cljs.core.ex_data.call(null,inst_10541__$1);
var inst_10544 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10543);
var inst_10545 = cljs.core._EQ_.call(null,inst_10544,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10546 = ((inst_10542) && (inst_10545));
var state_10909__$1 = (function (){var statearr_11184 = state_10909;
(statearr_11184[(95)] = inst_10541__$1);

return statearr_11184;
})();
if(cljs.core.truth_(inst_10546)){
var statearr_11185_11596 = state_10909__$1;
(statearr_11185_11596[(1)] = (91));

} else {
var statearr_11186_11597 = state_10909__$1;
(statearr_11186_11597[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (122))){
var inst_10694 = (state_10909[(89)]);
var state_10909__$1 = state_10909;
var statearr_11187_11598 = state_10909__$1;
(statearr_11187_11598[(2)] = inst_10694);

(statearr_11187_11598[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (154))){
var inst_10841 = (state_10909[(94)]);
var inst_10848 = (function(){throw inst_10841})();
var state_10909__$1 = state_10909;
var statearr_11188_11599 = state_10909__$1;
(statearr_11188_11599[(2)] = inst_10848);

(statearr_11188_11599[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (27))){
var state_10909__$1 = state_10909;
var statearr_11189_11600 = state_10909__$1;
(statearr_11189_11600[(2)] = null);

(statearr_11189_11600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (59))){
var inst_10091 = (state_10909[(15)]);
var inst_10326 = (state_10909[(56)]);
var inst_10499 = (state_10909[(2)]);
var inst_10500 = (function (){var tokens = inst_10091;
var rows = inst_10326;
return ((function (tokens,rows,inst_10091,inst_10326,inst_10499,state_val_10910,c__19__auto__,___192__auto__){
return (function (p1__51_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__51_SHARP_.call(null,"amount"),"DFX");
});
;})(tokens,rows,inst_10091,inst_10326,inst_10499,state_val_10910,c__19__auto__,___192__auto__))
})();
var inst_10501 = cljs.core.filter.call(null,inst_10500,inst_10326);
var state_10909__$1 = (function (){var statearr_11190 = state_10909;
(statearr_11190[(96)] = inst_10499);

(statearr_11190[(80)] = inst_10501);

return statearr_11190;
})();
var statearr_11191_11601 = state_10909__$1;
(statearr_11191_11601[(2)] = null);

(statearr_11191_11601[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (91))){
var inst_10541 = (state_10909[(95)]);
var inst_10548 = (function(){throw inst_10541})();
var state_10909__$1 = state_10909;
var statearr_11192_11602 = state_10909__$1;
(statearr_11192_11602[(2)] = inst_10548);

(statearr_11192_11602[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (123))){
var inst_10664 = (state_10909[(66)]);
var inst_10704 = (state_10909[(2)]);
var inst_10705 = cljs.core.next.call(null,inst_10664);
var inst_10621 = inst_10705;
var inst_10622 = null;
var inst_10623 = (0);
var inst_10624 = (0);
var state_10909__$1 = (function (){var statearr_11193 = state_10909;
(statearr_11193[(97)] = inst_10704);

(statearr_11193[(49)] = inst_10621);

(statearr_11193[(50)] = inst_10622);

(statearr_11193[(51)] = inst_10623);

(statearr_11193[(52)] = inst_10624);

return statearr_11193;
})();
var statearr_11194_11603 = state_10909__$1;
(statearr_11194_11603[(2)] = null);

(statearr_11194_11603[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (155))){
var inst_10841 = (state_10909[(94)]);
var state_10909__$1 = state_10909;
var statearr_11195_11604 = state_10909__$1;
(statearr_11195_11604[(2)] = inst_10841);

(statearr_11195_11604[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (28))){
var inst_10288 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11196_11605 = state_10909__$1;
(statearr_11196_11605[(2)] = inst_10288);

(statearr_11196_11605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (60))){
var inst_10372 = (state_10909[(10)]);
var inst_10374 = (state_10909[(8)]);
var inst_10383 = (state_10909[(98)]);
var inst_10371 = (state_10909[(9)]);
var inst_10384 = (state_10909[(99)]);
var inst_10373 = (state_10909[(11)]);
var inst_10326 = (state_10909[(56)]);
var inst_10091 = (state_10909[(15)]);
var inst_10382 = cljs.core._nth.call(null,inst_10372,inst_10374);
var inst_10383__$1 = cljs.core.nth.call(null,inst_10382,(0),null);
var inst_10384__$1 = cljs.core.nth.call(null,inst_10382,(1),null);
var inst_10385 = cljs.core.nth.call(null,inst_10382,(2),null);
var inst_10386 = (function (){var t = inst_10383__$1;
var chunk__10366 = inst_10372;
var i__10368 = inst_10374;
var _ = inst_10385;
var seq__10365 = inst_10371;
var supply = inst_10384__$1;
var count__10367 = inst_10373;
var rows = inst_10326;
var vec__10379 = inst_10382;
var tokens = inst_10091;
return ((function (t,chunk__10366,i__10368,_,seq__10365,supply,count__10367,rows,vec__10379,tokens,inst_10372,inst_10374,inst_10383,inst_10371,inst_10384,inst_10373,inst_10326,inst_10091,inst_10382,inst_10383__$1,inst_10384__$1,inst_10385,state_val_10910,c__19__auto__,___192__auto__){
return (function (p1__50_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__50_SHARP_.call(null,"amount"),t);
});
;})(t,chunk__10366,i__10368,_,seq__10365,supply,count__10367,rows,vec__10379,tokens,inst_10372,inst_10374,inst_10383,inst_10371,inst_10384,inst_10373,inst_10326,inst_10091,inst_10382,inst_10383__$1,inst_10384__$1,inst_10385,state_val_10910,c__19__auto__,___192__auto__))
})();
var inst_10387 = cljs.core.filter.call(null,inst_10386,inst_10326);
var inst_10388 = cljs.core.first.call(null,inst_10387);
var state_10909__$1 = (function (){var statearr_11197 = state_10909;
(statearr_11197[(98)] = inst_10383__$1);

(statearr_11197[(99)] = inst_10384__$1);

(statearr_11197[(101)] = inst_10388);

return statearr_11197;
})();
var statearr_11198_11606 = state_10909__$1;
(statearr_11198_11606[(2)] = null);

(statearr_11198_11606[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (92))){
var inst_10541 = (state_10909[(95)]);
var state_10909__$1 = state_10909;
var statearr_11199_11607 = state_10909__$1;
(statearr_11199_11607[(2)] = inst_10541);

(statearr_11199_11607[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (124))){
var inst_10719 = (state_10909[(100)]);
var inst_10719__$1 = (state_10909[(2)]);
var inst_10720 = (inst_10719__$1 instanceof cljs.core.ExceptionInfo);
var inst_10721 = cljs.core.ex_data.call(null,inst_10719__$1);
var inst_10722 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10721);
var inst_10723 = cljs.core._EQ_.call(null,inst_10722,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10724 = ((inst_10720) && (inst_10723));
var state_10909__$1 = (function (){var statearr_11200 = state_10909;
(statearr_11200[(100)] = inst_10719__$1);

return statearr_11200;
})();
if(cljs.core.truth_(inst_10724)){
var statearr_11201_11608 = state_10909__$1;
(statearr_11201_11608[(1)] = (125));

} else {
var statearr_11202_11609 = state_10909__$1;
(statearr_11202_11609[(1)] = (126));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (156))){
var inst_10851 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11203_11610 = state_10909__$1;
(statearr_11203_11610[(2)] = inst_10851);

(statearr_11203_11610[(1)] = (152));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (29))){
var inst_10211 = (state_10909[(34)]);
var inst_10215 = cljs.core.chunk_first.call(null,inst_10211);
var inst_10216 = cljs.core.chunk_rest.call(null,inst_10211);
var inst_10217 = cljs.core.count.call(null,inst_10215);
var inst_10138 = inst_10216;
var inst_10139 = inst_10215;
var inst_10140 = inst_10217;
var inst_10141 = (0);
var state_10909__$1 = (function (){var statearr_11204 = state_10909;
(statearr_11204[(39)] = inst_10138);

(statearr_11204[(40)] = inst_10139);

(statearr_11204[(41)] = inst_10140);

(statearr_11204[(42)] = inst_10141);

return statearr_11204;
})();
var statearr_11205_11611 = state_10909__$1;
(statearr_11205_11611[(2)] = null);

(statearr_11205_11611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (61))){
var inst_10371 = (state_10909[(9)]);
var inst_10431 = (state_10909[(44)]);
var inst_10431__$1 = cljs.core.seq.call(null,inst_10371);
var state_10909__$1 = (function (){var statearr_11206 = state_10909;
(statearr_11206[(44)] = inst_10431__$1);

return statearr_11206;
})();
if(inst_10431__$1){
var statearr_11207_11612 = state_10909__$1;
(statearr_11207_11612[(1)] = (70));

} else {
var statearr_11208_11613 = state_10909__$1;
(statearr_11208_11613[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (93))){
var inst_10091 = (state_10909[(15)]);
var inst_10556 = (state_10909[(102)]);
var inst_10557 = (state_10909[(103)]);
var inst_10551 = (state_10909[(2)]);
var inst_10555 = cljs.core.last.call(null,inst_10091);
var inst_10556__$1 = cljs.core.nth.call(null,inst_10555,(0),null);
var inst_10557__$1 = cljs.core.nth.call(null,inst_10555,(1),null);
var inst_10558 = cljs.core.nth.call(null,inst_10555,(2),null);
var inst_10559 = (function (){var tokens = inst_10091;
var rows = inst_10551;
var vec__10552 = inst_10555;
var t = inst_10556__$1;
var supply = inst_10557__$1;
var _ = inst_10558;
return ((function (tokens,rows,vec__10552,t,supply,_,inst_10091,inst_10556,inst_10557,inst_10551,inst_10555,inst_10556__$1,inst_10557__$1,inst_10558,state_val_10910,c__19__auto__,___192__auto__){
return (function (p1__52_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,p1__52_SHARP_.call(null,"balance"),t);
});
;})(tokens,rows,vec__10552,t,supply,_,inst_10091,inst_10556,inst_10557,inst_10551,inst_10555,inst_10556__$1,inst_10557__$1,inst_10558,state_val_10910,c__19__auto__,___192__auto__))
})();
var inst_10560 = cljs.core.filter.call(null,inst_10559,inst_10551);
var inst_10561 = cljs.core.first.call(null,inst_10560);
var state_10909__$1 = (function (){var statearr_11209 = state_10909;
(statearr_11209[(102)] = inst_10556__$1);

(statearr_11209[(103)] = inst_10557__$1);

(statearr_11209[(105)] = inst_10561);

return statearr_11209;
})();
var statearr_11210_11614 = state_10909__$1;
(statearr_11210_11614[(2)] = null);

(statearr_11210_11614[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (125))){
var inst_10719 = (state_10909[(100)]);
var inst_10726 = (function(){throw inst_10719})();
var state_10909__$1 = state_10909;
var statearr_11211_11615 = state_10909__$1;
(statearr_11211_11615[(2)] = inst_10726);

(statearr_11211_11615[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (157))){
var inst_10867 = (state_10909[(104)]);
var inst_10867__$1 = (state_10909[(2)]);
var inst_10868 = (inst_10867__$1 instanceof cljs.core.ExceptionInfo);
var inst_10869 = cljs.core.ex_data.call(null,inst_10867__$1);
var inst_10870 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10869);
var inst_10871 = cljs.core._EQ_.call(null,inst_10870,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10872 = ((inst_10868) && (inst_10871));
var state_10909__$1 = (function (){var statearr_11212 = state_10909;
(statearr_11212[(104)] = inst_10867__$1);

return statearr_11212;
})();
if(cljs.core.truth_(inst_10872)){
var statearr_11213_11616 = state_10909__$1;
(statearr_11213_11616[(1)] = (158));

} else {
var statearr_11214_11617 = state_10909__$1;
(statearr_11214_11617[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (30))){
var inst_10211 = (state_10909[(34)]);
var inst_10223 = cljs.core.first.call(null,inst_10211);
var inst_10224 = cljs.core.nth.call(null,inst_10223,(0),null);
var inst_10225 = cljs.core.nth.call(null,inst_10223,(1),null);
var inst_10226 = cljs.core.nth.call(null,inst_10223,(2),null);
var inst_10227 = eos_cljs.core.get_table_rows.call(null,e2e.stake.stake_acc,inst_10224,"stat");
var inst_10228 = cljs.core.async.interop.p__GT_c.call(null,inst_10227);
var state_10909__$1 = (function (){var statearr_11215 = state_10909;
(statearr_11215[(106)] = inst_10225);

(statearr_11215[(27)] = inst_10226);

return statearr_11215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(32),inst_10228);
} else {
if((state_val_10910 === (62))){
var inst_10497 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11216_11618 = state_10909__$1;
(statearr_11216_11618[(2)] = inst_10497);

(statearr_11216_11618[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (94))){
var inst_10561 = (state_10909[(105)]);
var inst_10557 = (state_10909[(103)]);
var inst_10556 = (state_10909[(102)]);
var inst_10576 = (state_10909[(19)]);
var inst_10577 = (state_10909[(30)]);
var _ = (function (){var statearr_11217 = state_10909;
(statearr_11217[(4)] = cljs.core.cons.call(null,(97),(state_10909[(4)])));

return statearr_11217;
})();
var inst_10573 = cljs.core.get.call(null,inst_10561,"balance");
var inst_10574 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10557)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10556)].join('');
var inst_10575 = (new cljs.core.List(null,inst_10574,null,(1),null));
var inst_10576__$1 = (new cljs.core.List(null,inst_10573,inst_10575,(2),null));
var inst_10577__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10576__$1);
var state_10909__$1 = (function (){var statearr_11218 = state_10909;
(statearr_11218[(19)] = inst_10576__$1);

(statearr_11218[(30)] = inst_10577__$1);

return statearr_11218;
})();
if(cljs.core.truth_(inst_10577__$1)){
var statearr_11219_11619 = state_10909__$1;
(statearr_11219_11619[(1)] = (98));

} else {
var statearr_11220_11620 = state_10909__$1;
(statearr_11220_11620[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (126))){
var inst_10719 = (state_10909[(100)]);
var state_10909__$1 = state_10909;
var statearr_11221_11621 = state_10909__$1;
(statearr_11221_11621[(2)] = inst_10719);

(statearr_11221_11621[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (158))){
var inst_10867 = (state_10909[(104)]);
var inst_10874 = (function(){throw inst_10867})();
var state_10909__$1 = state_10909;
var statearr_11222_11622 = state_10909__$1;
(statearr_11222_11622[(2)] = inst_10874);

(statearr_11222_11622[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (31))){
var inst_10285 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_11223_11623 = state_10909__$1;
(statearr_11223_11623[(2)] = inst_10285);

(statearr_11223_11623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (63))){
var inst_10388 = (state_10909[(101)]);
var inst_10384 = (state_10909[(99)]);
var inst_10383 = (state_10909[(98)]);
var inst_10403 = (state_10909[(24)]);
var inst_10404 = (state_10909[(36)]);
var _ = (function (){var statearr_11224 = state_10909;
(statearr_11224[(4)] = cljs.core.cons.call(null,(66),(state_10909[(4)])));

return statearr_11224;
})();
var inst_10400 = cljs.core.get.call(null,inst_10388,"amount");
var inst_10401 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10384)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10383)].join('');
var inst_10402 = (new cljs.core.List(null,inst_10401,null,(1),null));
var inst_10403__$1 = (new cljs.core.List(null,inst_10400,inst_10402,(2),null));
var inst_10404__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10403__$1);
var state_10909__$1 = (function (){var statearr_11225 = state_10909;
(statearr_11225[(24)] = inst_10403__$1);

(statearr_11225[(36)] = inst_10404__$1);

return statearr_11225;
})();
if(cljs.core.truth_(inst_10404__$1)){
var statearr_11226_11624 = state_10909__$1;
(statearr_11226_11624[(1)] = (67));

} else {
var statearr_11227_11625 = state_10909__$1;
(statearr_11227_11625[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (95))){
var inst_10600 = (state_10909[(2)]);
var inst_10601 = e2e.util.wait.call(null,(1000));
var inst_10602 = cljs.core.async.interop.p__GT_c.call(null,inst_10601);
var state_10909__$1 = (function (){var statearr_11228 = state_10909;
(statearr_11228[(107)] = inst_10600);

return statearr_11228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(101),inst_10602);
} else {
if((state_val_10910 === (127))){
var inst_10091 = (state_10909[(15)]);
var inst_10729 = (state_10909[(2)]);
var inst_10734 = cljs.core.take.call(null,(3),inst_10091);
var inst_10735 = cljs.core.seq.call(null,inst_10734);
var inst_10736 = inst_10735;
var inst_10737 = null;
var inst_10738 = (0);
var inst_10739 = (0);
var state_10909__$1 = (function (){var statearr_11229 = state_10909;
(statearr_11229[(108)] = inst_10729);

(statearr_11229[(25)] = inst_10736);

(statearr_11229[(20)] = inst_10737);

(statearr_11229[(14)] = inst_10738);

(statearr_11229[(13)] = inst_10739);

return statearr_11229;
})();
var statearr_11230_11626 = state_10909__$1;
(statearr_11230_11626[(2)] = null);

(statearr_11230_11626[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10910 === (159))){
var inst_10867 = (state_10909[(104)]);
var state_10909__$1 = state_10909;
var statearr_11231_11627 = state_10909__$1;
(statearr_11231_11627[(2)] = inst_10867);

(statearr_11231_11627[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$stake$state_machine__15__auto__ = null;
var e2e$stake$state_machine__15__auto____0 = (function (){
var statearr_11232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11232[(0)] = e2e$stake$state_machine__15__auto__);

(statearr_11232[(1)] = (1));

return statearr_11232;
});
var e2e$stake$state_machine__15__auto____1 = (function (state_10909){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_10909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e11233){var ex__18__auto__ = e11233;
var statearr_11234_11628 = state_10909;
(statearr_11234_11628[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_10909[(4)]))){
var statearr_11235_11629 = state_10909;
(statearr_11235_11629[(1)] = cljs.core.first.call(null,(state_10909[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__11630 = state_10909;
state_10909 = G__11630;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$stake$state_machine__15__auto__ = function(state_10909){
switch(arguments.length){
case 0:
return e2e$stake$state_machine__15__auto____0.call(this);
case 1:
return e2e$stake$state_machine__15__auto____1.call(this,state_10909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$stake$state_machine__15__auto____0;
e2e$stake$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$stake$state_machine__15__auto____1;
return e2e$stake$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_11236 = f__20__auto__.call(null);
(statearr_11236[(6)] = c__19__auto__);

return statearr_11236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.stake.t_e2e$stake8913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8914","meta8914",(1339655474),null)], null);
});

e2e.stake.t_e2e$stake8913.cljs$lang$type = true;

e2e.stake.t_e2e$stake8913.cljs$lang$ctorStr = "e2e.stake/t_e2e$stake8913";

e2e.stake.t_e2e$stake8913.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.stake/t_e2e$stake8913");
});

/**
 * Positional factory function for e2e.stake/t_e2e$stake8913.
 */
e2e.stake.__GT_t_e2e$stake8913 = (function e2e$stake$__GT_t_e2e$stake8913(meta8914){
return (new e2e.stake.t_e2e$stake8913(meta8914));
});

}

return (new e2e.stake.t_e2e$stake8913(null));
});

e2e.stake.multi_token_scenario.cljs$lang$var = new cljs.core.Var(function(){return e2e.stake.multi_token_scenario;},new cljs.core.Symbol("e2e.stake","multi-token-scenario","e2e.stake/multi-token-scenario",(1189429636),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"multi-token-scenario","multi-token-scenario",(1161601568),null),"e2e/stake.cljs",(30),(1),(336),(336),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.multi_token_scenario)?e2e.stake.multi_token_scenario.cljs$lang$test:null)]));
e2e.stake._main = (function e2e$stake$_main(var_args){
var args__10338__auto__ = [];
var len__10335__auto___11634 = arguments.length;
var i__10336__auto___11635 = (0);
while(true){
if((i__10336__auto___11635 < len__10335__auto___11634)){
args__10338__auto__.push((arguments[i__10336__auto___11635]));

var G__11636 = (i__10336__auto___11635 + (1));
i__10336__auto___11635 = G__11636;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return e2e.stake._main.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

e2e.stake._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.test.run_block.call(null,(function (){var env11632 = cljs.test.empty_env.call(null);
var summary11633 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11632,summary11633){
return (function (){
cljs.test.set_env_BANG_.call(null,env11632);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null)], null));

return cljs.test.block.call(null,(function (){var env__194__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env11632,summary11633){
return (function (){
if((env__194__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))], null),cljs.core.assoc,new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),e2e.stake.cljs_test_once_fixtures);

return null;
});})(env__194__auto__,env11632,summary11633))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return e2e.stake.update_bofore_init;},new cljs.core.Symbol("e2e.stake","update-bofore-init","e2e.stake/update-bofore-init",(1778620800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"update-bofore-init","update-bofore-init",(1764325412),null),"e2e/stake.cljs",(28),(1),(114),(114),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.update_bofore_init)?e2e.stake.update_bofore_init.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.initialize;},new cljs.core.Symbol("e2e.stake","initialize","e2e.stake/initialize",(-1962341060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"initialize","initialize",(-2044482856),null),"e2e/stake.cljs",(20),(1),(130),(130),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.initialize)?e2e.stake.initialize.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.update_after_init;},new cljs.core.Symbol("e2e.stake","update-after-init","e2e.stake/update-after-init",(301149921),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"update-after-init","update-after-init",(479576413),null),"e2e/stake.cljs",(27),(1),(157),(157),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.update_after_init)?e2e.stake.update_after_init.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.create;},new cljs.core.Symbol("e2e.stake","create","e2e.stake/create",(434100331),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"create","create",(339032271),null),"e2e/stake.cljs",(16),(1),(181),(181),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.create)?e2e.stake.create.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.stake;},new cljs.core.Symbol("e2e.stake","stake","e2e.stake/stake",(219741416),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"stake","stake",(142033740),null),"e2e/stake.cljs",(15),(1),(209),(209),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.stake)?e2e.stake.stake.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.claim;},new cljs.core.Symbol("e2e.stake","claim","e2e.stake/claim",(613162594),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"claim","claim",(665172358),null),"e2e/stake.cljs",(15),(1),(253),(253),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.claim)?e2e.stake.claim.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.unstake;},new cljs.core.Symbol("e2e.stake","unstake","e2e.stake/unstake",(1973645911),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"unstake","unstake",(1753928587),null),"e2e/stake.cljs",(17),(1),(270),(270),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.unstake)?e2e.stake.unstake.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.dilute;},new cljs.core.Symbol("e2e.stake","dilute","e2e.stake/dilute",(-451364818),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"dilute","dilute",(-503391294),null),"e2e/stake.cljs",(16),(1),(306),(306),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.dilute)?e2e.stake.dilute.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.stake.multi_token_scenario;},new cljs.core.Symbol("e2e.stake","multi-token-scenario","e2e.stake/multi-token-scenario",(1189429636),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null),new cljs.core.Symbol(null,"multi-token-scenario","multi-token-scenario",(1161601568),null),"e2e/stake.cljs",(30),(1),(336),(336),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.stake.multi_token_scenario)?e2e.stake.multi_token_scenario.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env11632,summary11633){
return (function (){
if((env__194__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__194__auto__,env11632,summary11633))
], null));
})());
});})(env11632,summary11633))
,((function (env11632,summary11633){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.stake","e2e.stake",(821150279),null)], null));
});})(env11632,summary11633))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11632,summary11633){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11633,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11633),new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11632,summary11633))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11632,summary11633){
return (function (){
cljs.test.set_env_BANG_.call(null,env11632);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary11633));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary11633),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))));

return cljs.test.clear_env_BANG_.call(null);
});})(env11632,summary11633))
], null));
})());
});

e2e.stake._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
e2e.stake._main.cljs$lang$applyTo = (function (seq11631){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11631));
});

